const { RootMsg, MarioListMsg, ValidPlayersMsg, Sm64JsMsg, ConnectedMsg, SkinMsg, PlayerListsMsg, FlagMsg } = require("./proto/mario_pb")
const fs = require('fs')
const http = require('http')
const got = require('got')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 3080
const ws_port = 3000

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = process.env.PRODUCTION ? new FileSync('/tmp/data/db.json') : new FileSync('testdb.json')
const db = low(adapter)
db.defaults({ chats: [], adminCommands: [], ipList: [] }).write()

//Auto Delete Old chat entries
setInterval(() => {
    const oneDayAgo = Date.now() - 86400000
    db.get('chats').remove((entry) => {
        if (entry.timestampMs < oneDayAgo) return true
    }).write()
}, 86400000 * 3) //3 Days

const clientsRoot = {}
const connectedIPs = {}
const socketIdsToRoomKeys = {}
let socketsInLobby = []
const stats = {}


let currentId = 0
const generateID = () => {
    if (++currentId > 4294967294) currentId = 0
    return currentId
}

const text = {
    decoder: new TextDecoder(),
    encoder: new TextEncoder()
}

const sendJsonWithTopic = (topic, msg, socket) => {
    const str = JSON.stringify({ topic, msg })
    let bytes = text.encoder.encode(str)
    const rootMsg = new RootMsg()
    rootMsg.setJsonBytesMsg(bytes)
    socket.send(rootMsg.serializeBinary(), true)
}

const broadcastJsonWithTopic = (topic, msg, roomKey) => { /// TODO
    const str = JSON.stringify({ topic, msg })
    let bytes = text.encoder.encode(str)
    const rootMsg = new RootMsg()
    rootMsg.setJsonBytesMsg(bytes)
    bytes = rootMsg.serializeBinary()
    Object.values(clientsRoot[roomKey]).forEach(x => { x.socket.send(bytes, true) })
}

const sendData = (bytes, socket) => { socket.send(bytes, true) }

const broadcastData = (bytes, roomKey) => {
    if (roomKey == "lobbySockets") { // send to lobbySockets
        socketsInLobby.forEach(socket => { socket.send(bytes, true) })
    } else if (roomKey) { // normal room
        Object.values(clientsRoot[roomKey]).forEach(x => { x.socket.send(bytes, true) })
    } else { /// send to all rooms 
        Object.keys(clientsRoot).forEach(roomKey => {
            Object.values(clientsRoot[roomKey]).forEach(x => { x.socket.send(bytes, true) })
        })
    }
}


const adminTokens = process.env.ADMIN_TOKENS ? process.env.ADMIN_TOKENS.split(":") : []

const sendValidUpdate = () => {

    const allRooms = []

    Object.entries(clientsRoot).forEach(([roomKey, roomData]) => {
        const validPlayers = Object.values(roomData).filter(data => data.valid > 0).map(data => data.socket.my_id)
        const validplayersmsg = new ValidPlayersMsg()
        validplayersmsg.setValidplayersList(validPlayers)
        validplayersmsg.setRoomKey(roomKey)
        allRooms.push(validplayersmsg)
    })

    const playerListsMsg = new PlayerListsMsg()
    playerListsMsg.setRoomList(allRooms)
    const sm64jsMsg = new Sm64JsMsg()
    sm64jsMsg.setPlayerListsMsg(playerListsMsg)
    const rootMsg = new RootMsg()
    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    broadcastData(rootMsg.serializeBinary())
    broadcastData(rootMsg.serializeBinary(), "lobbySockets")

}

const allowedLevelRooms = [1000, 16, 9, 5, 27, 36, 24]  // client selectable levels

/*1000: "Mushroom Battlefield",
16: "Castle Grounds",
9: "Bob-omb Battlefield",
5: "Cool, Cool Mountain",
27: "Princess's Secret Slide",
36: "Tall, Tall Mountain",
24: "Whomps Fortress"*/

const flagStarts = {
    1000: [[9380, 7657, -8980],
           [-5126, 3678, 10106],
           [-14920, 3800, -8675],
           [12043, 3000, 10086]],
    16: [[0, 3657, 0]],
    9: [[-2384, 260, 6203]],
    5: [[0, 7657, 0]],
    27: [[0, 7657, 0]],
    36: [[0, 7657, 0]],
    24: [[0, 7657, 0]]
}

const flagData = Object.fromEntries(Object.keys(flagStarts).map((key) => {
    return [ key, new Array(flagStarts[key].length).fill(0).map((_, i) => {
        return {
            pos: [...flagStarts[key][i]],
            linkedToPlayer: false,
            atStartPosition: true,
            socketID: null,
            idleTimer: 0,
            heightBeforeFall: 20000
        }
    })]
}))

const processPlayerData = (socket_id, decodedMario) => {

    // ignoring validation for now
    if (decodedMario.getSocketid() != decodedMario.getController().getSocketid()) return
    if (decodedMario.getSocketid() != socket_id) return

    /// server should always force the socket_id - not needed if checking
    decodedMario.setSocketid(socket_id)

    const roomKey = socketIdsToRoomKeys[socket_id]

    /// Data is Valid
    clientsRoot[roomKey][socket_id].decodedMario = decodedMario
    clientsRoot[roomKey][socket_id].valid = 100

}

/*const processControllerUpdate = (socket_id, bytes) => {
    const decodedController = ControllerMsg.deserializeBinary(bytes)

    /// do some validation here probably
    allChannels[socket_id].decodedController = decodedController
    //broadcastDataWithOpcode(bytes, 3, socket_id)
}*/

const processSkin = (socket_id, skinMsg) => {

    const roomKey = socketIdsToRoomKeys[socket_id]
    if (roomKey == undefined) return 

    if (clientsRoot[roomKey][socket_id].valid == 0) return

    const skinData = skinMsg.getSkindata()

    clientsRoot[roomKey][socket_id].skinData = skinData
    clientsRoot[roomKey][socket_id].skinDataUpdated = true
}

const rejectPlayerName = (socket) => {
    sendJsonWithTopic('playerName', { rejected: true }, socket)
}

const sanitizeChat = (string) => {
    string = string.substring(0, 200)
    return applyValidCharacters(string)
}

//Valid characters for usernames.
const validCharacters = new Set([
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'y', 'x', 'z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'Y', 'X', 'Z', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '0', '!',
    '@', '$', '^', '*', '(', ')', '{',
    '}', '[', ']', ';', ':', `'`, '"',
    `\\`, ',', '.', '/', '?', '🙄', '😫',
    '🤔', '🔥', '😌', '😍', '🤣', '❤️', '😭',
    '😂', '⭐', '✨', '🎄', '🎃', '🔺', '🔻',
    '🎄', '🍬', '🍭', '🍫', ' ',
    '-', '_', '=', '|', '<', '>', ':', "'"
]);


const applyValidCharacters = (str) => {
    return str.split('').filter(c => validCharacters.has(c)).join('');
}

const processAdminCommand = (msg, token, roomKey) => {
    const parts = msg.split(' ')
    const command = parts[0].toUpperCase()
    const remainingParts = parts.slice(1)
    const args = remainingParts.join(" ")

    switch (command) {
        case "ANNOUNCEMENT":
            broadcastJsonWithTopic('announcement', { message: remainingParts.join(" "), timer: 300 }, roomKey)
            break
        default:  return console.log("Unknown Admin Command: " + parts[0])
    }

    db.get('adminCommands').push({ token, roomKey, timestampMs: Date.now(), command, args }).write()
}

const processChat = async (socket_id, sm64jsMsg) => {
    const chatMsg = sm64jsMsg.getChatMsg()
    const message = chatMsg.getMessage()

    const roomKey = socketIdsToRoomKeys[socket_id]
    if (roomKey == undefined) return 

    const clientData = clientsRoot[roomKey][socket_id]
    if (clientData == undefined) return

    /// Throttle chats by IP
    if (connectedIPs[clientData.socket.ip].chatCooldown > 10) {
        const chatMsg = new ChatMsg()
        chatMsg.setSocketid(socket_id)
        chatMsg.setMessage("Chat message ignored: You have to wait longer between sending chat messages")
        chatMsg.setSender("Server")
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setChatMsg(chatMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        sendData(rootMsg.serializeBinary(), clientData.socket)
        return
    }

    if (message.length == 0) return

    const adminToken = chatMsg.getAdmintoken()
    const isAdmin = adminToken != null && adminTokens.includes(adminToken)

    if (message[0] == '/') {
        if (isAdmin) processAdminCommand(message.slice(1), adminToken, roomKey)
        return
    }

    const decodedMario = clientData.decodedMario
    if (decodedMario == undefined) return

    connectedIPs[clientData.socket.ip].chatCooldown += 3 // seconds

    /// record chat to DB
    db.get('chats').push({
        socketID: socket_id,
        playerName: clientData.playerName,
        ip: clientData.socket.ip,
        timestampMs: Date.now(),
        message,
        adminToken
    }).write()

    const sanitizedChat = sanitizeChat(message)

    const request = "http://www.purgomalum.com/service/json?text=" + sanitizedChat

    try {
        const filteredMessage = JSON.parse((await got(request)).body).result

        chatMsg.setSocketid(socket_id)
        chatMsg.setMessage(filteredMessage)
        chatMsg.setSender(clientData.playerName)
        chatMsg.setIsadmin(isAdmin)

        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        broadcastData(rootMsg.serializeBinary(), roomKey)

    } catch (e) {
        console.log(`Got error with profanity api: ${e}`)
    }

}

const processPlayerName = async (socket, msgJson) => {

    if (socketIdsToRoomKeys[socket.my_id] != undefined) return ///already initialized

    const { name, level } = msgJson

    if (!allowedLevelRooms.includes(level)) return rejectPlayerName(socket)

    if (name.length < 3 || name.length > 14 || name == "server")  {
        return rejectPlayerName(socket)
    }

    const sanitizedName = sanitizeChat(name)

    if (sanitizedName != name) {
        return rejectPlayerName(socket)
    }

    const playerNameRequest = "http://www.purgomalum.com/service/json?text=" + sanitizedName

    try {
        const filteredPlayerName = JSON.parse((await got(playerNameRequest)).body).result

        if (sanitizedName != filteredPlayerName) {
            return rejectPlayerName(socket)
        }

        ////Success point - should initialize player
        if (clientsRoot[level] == undefined) clientsRoot[level] = {}
        clientsRoot[level][socket.my_id] = {
            socket, /// also contains socket_id and ip
            playerName: filteredPlayerName,
            valid: 0,
            decodedMario: undefined,
            skinData: undefined
        }

        socketIdsToRoomKeys[socket.my_id] = level

        socketsInLobby = socketsInLobby.filter((lobbySocket) => { return lobbySocket != socket })

        const acceptMsg = {
            accepted: true,
            playerName: filteredPlayerName,  /// should be same as message
            level
        }

        sendJsonWithTopic('playerName', acceptMsg, socket)

    } catch (e) {
        console.log(`Got error with profanity api: ${e}`)
    }


}

const sendSkinsToSocket = (socket) => { 

    setTimeout(() => {
        const roomKey = socketIdsToRoomKeys[socket.my_id]
        if (roomKey == undefined || clientsRoot[roomKey] == undefined) {
            return  /// if they disconnect in this 500ms period
        }
        /// Send Skins
        Object.entries(clientsRoot[roomKey]).filter(([_, data]) => data.skinData).forEach(([socket_id, data]) => {
            const skinMsg = new SkinMsg()
            skinMsg.setSocketid(socket_id)
            skinMsg.setSkindata(data.skinData)
            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setSkinMsg(skinMsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    
            socket.send(rootMsg.serializeBinary(), true)
        })
    }, 500)

}
const sendSkinsIfUpdated = () => {

    Object.entries(clientsRoot).forEach(([roomKey, roomData]) => {
        /// Send Skins
        Object.entries(roomData).filter(([_, data]) => data.skinData && data.skinDataUpdated).forEach(([socket_id, data]) => {
            const skinMsg = new SkinMsg()
            skinMsg.setSocketid(socket_id)
            skinMsg.setSkindata(data.skinData)
            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setSkinMsg(skinMsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)

            data.skinDataUpdated = false

            broadcastData(rootMsg.serializeBinary(), roomKey)
        })
    })

}

const processBasicAttack = (attackerID, attackMsg) => {

    const roomKey = socketIdsToRoomKeys[attackerID]
    if (roomKey == undefined) return

    const clientData = clientsRoot[roomKey][attackerID]
    if (clientData == undefined) return

    /// redundant
    attackMsg.setAttackerSocketId(attackerID)

    const flagIndex = attackMsg.getFlagId()
    const targetId = attackMsg.getTargetSocketId()

    const theFlag = flagData[roomKey][flagIndex]

    if (theFlag.linkedToPlayer && theFlag.socketID == targetId) {
        theFlag.linkedToPlayer = false
        theFlag.socketID = null
        theFlag.fallmode = true
        const newFlagLocation = clientData.decodedMario.getPosList()
        newFlagLocation[0] += ((Math.random() * 1000.0) - 500.0)
        newFlagLocation[1] += 600
        newFlagLocation[2] += ((Math.random() * 1000.0) - 500.0)
        theFlag.heightBeforeFall = newFlagLocation[1]
        theFlag.pos = [parseInt(newFlagLocation[0]), parseInt(newFlagLocation[1]), parseInt(newFlagLocation[2])]
    }

}

const processGrabFlagRequest = (socket_id, grabFlagMsg) => {

    const roomKey = socketIdsToRoomKeys[socket_id]
    if (roomKey == undefined) return

    const clientData = clientsRoot[roomKey][socket_id]
    if (clientData == undefined) return

    const i = grabFlagMsg.getFlagId()

    const theFlag = flagData[roomKey][i]

    if (theFlag.linkedToPlayer) return

    const pos = grabFlagMsg.getPosList()

    const xDiff = pos[0] - theFlag.pos[0]
    const zDiff = pos[2] - theFlag.pos[2]

    const dist = Math.sqrt(xDiff * xDiff + zDiff * zDiff)
    if (dist < 50) {
        theFlag.linkedToPlayer = true
        theFlag.fallmode = false
        theFlag.atStartPosition = false
        theFlag.socketID = socket_id
        theFlag.idleTimer = 0
    }
}

const checkForFlag = (socket_id) => {

    Object.entries(flagData).forEach(([roomKey, flagRoom]) => {
        flagRoom.forEach((flag, flagIndex) => {
            if (flag.socketID == socket_id) {
                const roomKey = socketIdsToRoomKeys[socket_id]
                if (roomKey == undefined) return

                const clientData = clientsRoot[roomKey][socket_id]
                if (clientData == undefined) return

                flag.linkedToPlayer = false
                flag.socketID = null
                flag.fallmode = true
                const newFlagLocation = clientData.decodedMario.getPosList()
                newFlagLocation[1] += 100
                flag.heightBeforeFall = newFlagLocation[1]
                flag.pos = [parseInt(newFlagLocation[0]), parseInt(newFlagLocation[1]), parseInt(newFlagLocation[2])]
            }

        })
    })

}

const serverSideFlagUpdate = () => {

    Object.entries(flagData).forEach(([roomKey, flagRoom]) => {
        flagRoom.forEach((flag, flagIndex) => {
            if (flag.fallmode) {
                if (flag.pos[1] > -10000) flag.pos[1] -= 2
            }

            if (!flag.linkedToPlayer && !flag.atStartPosition) {
                flag.idleTimer++
                if (flag.idleTimer > 3000) {
                    flag.pos = [...flagStarts[roomKey][flagIndex]]
                    flag.fallmode = false
                    flag.atStartPosition = true
                    flag.idleTimer = 0
                }
            }
        })
    })

}




/// 20 times per second
setInterval(async () => {

    serverSideFlagUpdate()

    Object.values(clientsRoot).forEach(roomData => {
        Object.values(roomData).forEach(clientData => {
            if (clientData.valid > 0) clientData.valid--
            else if (clientData.decodedMario) clientData.socket.close()
        })
    })

    Object.entries(clientsRoot).forEach(async ([roomKey, roomData]) => {
        const sm64jsMsg = new Sm64JsMsg()
        const mariolist = Object.values(roomData).filter(data => data.decodedMario).map(data => data.decodedMario)
        const mariolistproto = new MarioListMsg()
        mariolistproto.setMarioList(mariolist)

        const flagProtoList = []

        for (let i = 0; i < flagData[roomKey].length; i++) {
            const theFlag = flagData[roomKey][i]
            const flagmsg = new FlagMsg()
            flagmsg.setLinkedtoplayer(theFlag.linkedToPlayer)
            if (theFlag.linkedToPlayer) flagmsg.setSocketid(theFlag.socketID)
            else {
                flagmsg.setPosList(theFlag.pos)
                flagmsg.setHeightBeforeFall(theFlag.heightBeforeFall)
            }
            flagProtoList.push(flagmsg)
        }

        mariolistproto.setFlagList(flagProtoList)

        sm64jsMsg.setListMsg(mariolistproto)
        const bytes = sm64jsMsg.serializeBinary()
        const compressedBytes = await deflate(bytes)
        const rootMsg = new RootMsg()
        rootMsg.setCompressedSm64jsMsg(compressedBytes)
        broadcastData(rootMsg.serializeBinary(), roomKey)
    })


}, 33)

/*/// Every other frame - 16 times per second
setInterval(async () => {
    const controllerlist = Object.values(allChannels).filter(data => data.decodedController).map(data => data.decodedController)
    const controllerlistproto = new ControllerListMsg()
    controllerlistproto.setControllerList(controllerlist)
    const bytes = controllerlistproto.serializeBinary()
    const compressedMsg = await deflate(bytes)
    broadcastDataWithOpcode(compressedMsg, 3)

}, 66)
*/

/// Every 33 frames / once per second
setInterval(() => {
    sendValidUpdate()

    //chat cooldown
    Object.values(connectedIPs).forEach(data => {
        if (data.chatCooldown > 0) data.chatCooldown--
    })
}, 1000)

/// Every 10 seconds
setInterval(() => {

    sendSkinsIfUpdated()

}, 10000)


require('uWebSockets.js').App().ws('/*', {

    upgrade: async (res, req, context) => { // a request was made to open websocket, res req have all the properties for the request, cookies etc

        // add code here to determine if ws request should be accepted or denied
        // can deny request with "return res.writeStatus('401').end()" see issue #367

        const ip = req.getHeader('x-forwarded-for')

        if (connectedIPs[ip]) {
            if (Object.keys(connectedIPs[ip].socketIDs).length >= 4) return res.writeStatus('403').end()
        }

        const key = req.getHeader('sec-websocket-key')
        const protocol = req.getHeader('sec-websocket-protocol')
        const extensions = req.getHeader('sec-websocket-extensions')

        res.onAborted(() => {})

        if (process.env.PRODUCTION) {

            try {

                //console.log("someone trying to connect: " + ip)

                ///// check CORS
                let originHeader = req.getHeader('origin')
                const url = new URL(originHeader)
                const domainStr = url.hostname.substring(url.hostname.length - 11, url.hostname.length)
                if (domainStr != ".sm64js.com" && url.hostname != "sm64js.com") return res.writeStatus('418').end()

                const ipStatus = db.get('ipList').find({ ip }).value()

                if (ipStatus == undefined) {

                    //console.log("trying to hit vpn api")
                    const vpnCheckRequest = `http://v2.api.iphub.info/ip/${ip}`
                    const initApiReponse = await got(vpnCheckRequest, {
                        headers: { 'X-Key': process.env.VPN_API_KEY }
                    })
                    const response = JSON.parse(initApiReponse.body)

                    if (response.block == undefined) {
                        console.log("iphub reponse invalid")
                        return res.writeStatus('500').end()
                    }

                    if (response.block == 1) {
                        db.get('ipList').push({ ip, value: 'BANNED', reason: 'AutoVPN' }).write()
                       // console.log("Adding new VPN BAD IP " + ip)
                        return res.writeStatus('403').end()
                    } else {
                        //console.log("Adding new Legit IP")
                        db.get('ipList').push({ ip, value: 'ALLOWED' }).write()
                    }

                } else if (ipStatus.value == "BANNED") {  /// BANNED or NOT ALLOWED IP
                    //console.log("BANNED IP tried to connect")
                    return res.writeStatus('403').end()
                } else if (ipStatus.value == "ALLOWED") { /// Whitelisted IP - OKAY
                    //console.log("Known Whitelisted IP connecting")
                }

            } catch (e) {
                console.log(`Got error with upgrading to websocket: ${e}`)
                return res.writeStatus('500').end()
            }

        }
        
        res.upgrade( // upgrade to websocket
            { ip }, // 1st argument sets which properties to pass to the ws object, in this case ip address
            key,
            protocol,
            extensions, // these 3 headers are used to setup the websocket
            context // also used to setup the websocket
        )


    },

    open: async (socket) => {
        socket.my_id = generateID()

        if (connectedIPs[socket.ip] == undefined)
            connectedIPs[socket.ip] = { socketIDs: {}, chatCooldown: 15 }

        connectedIPs[socket.ip].socketIDs[socket.my_id] = 1

        socketsInLobby.push(socket)
        
        const connectedMsg = new ConnectedMsg()
        connectedMsg.setSocketid(socket.my_id)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setConnectedMsg(connectedMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        socket.send(rootMsg.serializeBinary(), true)
    },

    message: async (socket, bytes) => {

        try {
            let sm64jsMsg
            const rootMsg = RootMsg.deserializeBinary(bytes)

            switch (rootMsg.getMessageCase()) {
                case RootMsg.MessageCase.UNCOMPRESSED_SM64JS_MSG:
                    if (socketIdsToRoomKeys[socket.my_id] == undefined) return 

                    sm64jsMsg = rootMsg.getUncompressedSm64jsMsg()
                    switch (sm64jsMsg.getMessageCase()) {
                        case Sm64JsMsg.MessageCase.MARIO_MSG:
                            processPlayerData(socket.my_id, sm64jsMsg.getMarioMsg()); break
                        case Sm64JsMsg.MessageCase.PING_MSG:
                            sendData(bytes, socket); break
                        case Sm64JsMsg.MessageCase.ATTACK_MSG:
                            processBasicAttack(socket.my_id, sm64jsMsg.getAttackMsg()); break
                        case Sm64JsMsg.MessageCase.GRAB_MSG:
                            processGrabFlagRequest(socket.my_id, sm64jsMsg.getGrabMsg()); break
                        case Sm64JsMsg.MessageCase.CHAT_MSG:
                            processChat(socket.my_id, sm64jsMsg); break
                        case Sm64JsMsg.MessageCase.SKIN_MSG:
                            processSkin(socket.my_id, sm64jsMsg.getSkinMsg()); break
                        //case 3: processControllerUpdate(socket.my_id, bytes.slice(1)); break
                        //case 4: processKnockUp(socket.my_id, bytes.slice(1)); break
                        default: throw "unknown case for uncompressed proto message"
                    }
                    break
                case RootMsg.MessageCase.JSON_BYTES_MSG:
                    const str = text.decoder.decode(rootMsg.getJsonBytesMsg())
                    const { topic, msg } = JSON.parse(str)
                    switch (topic) {
                        case 'getInitSkinData': sendSkinsToSocket(socket); break
                        case 'playerName': processPlayerName(socket, msg); break
                        default: throw "Unknown topic in json message"
                    }
                    break
                case RootMsg.MessageCase.MESSAGE_NOT_SET:
                default:
                    throw new Error(`unhandled case in switch expression: ${rootMsg.getMessageCase()}`)
            }


        } catch (err) { console.log(err) }
    },

    close: (socket) => {
        checkForFlag(socket.my_id)
        delete connectedIPs[socket.ip].socketIDs[socket.my_id]

        socketsInLobby = socketsInLobby.filter((lobbySocket) => { return lobbySocket != socket })

        const roomKey = socketIdsToRoomKeys[socket.my_id]
        if (roomKey) {
            delete clientsRoot[roomKey][socket.my_id]
            delete socketIdsToRoomKeys[socket.my_id]
        }
    }

}).listen(ws_port, () => { console.log("Starting websocket server " + ws_port) })

//// Express Static serving
const express = require('express')
const app = express()
const server = http.Server(app)
app.use(express.static(__dirname + '/dist'))

server.listen(port, () => { console.log('Serving Files with express server ' + port) })


////// Admin Commands
app.get('/banIP/:token/:ip', (req, res) => {

    const { token, ip } = req.params

    if (!adminTokens.includes(token)) return res.status(401).send('Invalid Admin Token')

    const ipObject = db.get('ipList').find({ ip })
    const ipValue = ipObject.value()

    db.get('adminCommands').push({ token, timestampMs: Date.now(), command: 'banIP', args: [ ip ] }).write()

    if (ipValue == undefined) {
        db.get('ipList').push({ ip, value: 'BANNED', reason: 'Manual' }).write()
        console.log("Admin BAD IP " + ip + "  " + token)

        return res.send("BANNED")
    } else if (ipValue.value == "ALLOWED") {
        ipObject.assign({ value: 'BANNED', reason: 'Manual'  }).write()
        console.log("Admin BAD Existing IP " + ip + "  " + token)

        ///kick
        Object.values(clientsRoot).forEach(roomData => {
            Object.values(roomData).forEach(data => {
                if (data.socket.ip == ip) data.socket.close()
            })
        })

        return res.send("BANNED")
    } else if (ipValue.value == "BANNED") {
        return res.send("Already BANNED")
    }

})

app.get('/allowIP/:token/:ip', (req, res) => {

    const { token, ip } = req.params

    if (!adminTokens.includes(token)) return res.status(401).send('Invalid Admin Token')

    const ipObject = db.get('ipList').find({ ip })
    const ipValue = ipObject.value()

    db.get('adminCommands').push({ token, timestampMs: Date.now(), command: 'allowIP', args: [ip] }).write()

    if (ipValue == undefined) {
        console.log("admin allowIP could not find")
        return res.send("allowIP could not find")
    } else if (ipValue.value == "BANNED") {
        ipObject.assign({ value: 'ALLOWED' }).write()
        console.log("Admin - Allowing Existing IP " + ip + "  " + token)

        return res.send("Allowing Existing IP")
    } else if (ipValue.value == "ALLOWED") {
        console.log("Admin Allow - already allowed")
        return res.send("Already ALLOWED")
    }

})

app.get('/chatLog/:token/:timestamp?/:range?', (req, res) => {

    const token = req.params.token
    const timestamp = (req.params.timestamp && req.params.timestamp != '0') ? parseInt(req.params.timestamp) : Date.now()
    const range = parseInt(req.params.range ? req.params.range : 60) * 1000

    if (adminTokens.includes(token)) {
        let stringResult = 'socketID,playerName,ip,message <br />'

        db.get('chats').forEach((entry) => {
            if (entry.timestampMs >= timestamp - range && entry.timestampMs <= timestamp + range) {
                stringResult += `${entry.socketID},${entry.playerName},${entry.ip},${entry.message} <br />`
            }
        }).value()
        
        return res.send(stringResult)
    } else {
        res.status(401).send('Invalid Admin Token')
    }

})


/////// necessary for server side rom extraction

const { promisify } = require('util')
const { spawn } = require('child_process')
const { v4: uuidv4 } = require('uuid')

app.get('/romTransfer', async (req, res) => {
    console.log("rom transfer")

    const uid = uuidv4()
    await mkdir('extractTools/' + uid)

    const file = fs.createWriteStream('extractTools/' + uid + '/baserom.us.z64')
    await fileDownload(file, 'http://' + req.query.romExternal)

    return res.send(await extractJsonFromRomFile(uid))
})


app.get('/stats', (req, res) => {

    let numPlayers = 0
    Object.values(clientsRoot).forEach(roomData => {
        numPlayers += Object.values(roomData).length
    })

    return res.send({
        marioListSize: stats.marioListSize,
        numPlayers
    })
})

const mkdir = promisify(fs.mkdir)

const pythonExtract = (dir) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', ['extract_assets.py', 'us', dir], { cwd: 'extractTools/' })
        //pythonProcess.stdout.on('data', (data) => { console.log(data.toString()) })
        //pythonProcess.stderr.on('data', (data) => { console.log(data.toString()) })
        pythonProcess.stderr.on('close', () => { resolve() })
    })
}

const fileDownload = (file, url) => {
    return new Promise((resolve, reject) => {
        try {
            http.get(url, (response) => {
                const stream = response.pipe(file)
                stream.on('error', () => { reject('Fail') })
                stream.on('finish', () => { resolve('Success') })
            })
        } catch {
            console.log("HTTP GET Error")
            fs.rmdirSync('extractTools/' + uid, { recursive: true })
            reject('Fail')
        }
    })
}

const extractJsonFromRomFile = async (dir) => {
    return new Promise(async (resolve, reject) => {
        try {
            await pythonExtract(dir)

            const extractedData = {}
            const assets = JSON.parse(fs.readFileSync('extractTools/assets.json'))
            Object.keys(assets).forEach((assetname) => {
                let filepath = assetname
                if (filepath == '@comment') return
                if (filepath.indexOf("skyboxes") != -1) { /// skybox
                    filepath = `extractTools/${dir}/${filepath}`
                    filepath = filepath.slice(0, filepath.length - 4) + "_skybox.c"
                    let filedata = fs.readFileSync(filepath, "utf8")
                    filedata = filedata.replace(/\r/g, "")
                    let lines = filedata.split("\n")
                    lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
                    while (lines.length > 0) {
                        let section = lines.splice(0, 2)
                        if (section[0].slice(0, 24) == 'ALIGNED8 static const u8') {
                            const textureName = section[0].slice(25, section[0].length - 6)
                            const textureData = section[1].slice(0, section[1].indexOf('}'))
                            extractedData[textureName] = Buffer.from(textureData.split(','))
                        }
                    }
                } else {  /// not skybox
                    filepath = `extractTools/${dir}/${filepath}`
                    filepath = filepath.substring(0, filepath.length - 4)
                    const filedata = fs.readFileSync(filepath)
                    extractedData[assetname] = filedata
                }
            })
            fs.rmdirSync('extractTools/' + dir, { recursive: true })
            resolve(extractedData)
        } catch {
            console.log('Rom Extraction Fail')
            fs.rmdirSync('extractTools/' + dir, { recursive: true })
            resolve('Fail')
        }
    })
}
