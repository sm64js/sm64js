const { RootMsg, MarioListMsg, ControllerMsg, ValidPlayersMsg, Sm64JsMsg } = require("./proto/mario_pb")
const fs = require('fs')
const http = require('http')
const got = require('got')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 80
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
}, 86400000) //1 Day

const allChannels = {}
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

const sendJsonWithTopic = (topic, msg, channel) => {
    const str = JSON.stringify({ topic, msg })
    let bytes = text.encoder.encode(str)
    const rootMsg = new RootMsg()
    rootMsg.setJsonBytesMsg(bytes)
    channel.send(rootMsg.serializeBinary(), true)
}

const broadcastJsonWithTopic = (topic, msg) => {
    const str = JSON.stringify({ topic, msg })
    let bytes = text.encoder.encode(str)
    const rootMsg = new RootMsg()
    rootMsg.setJsonBytesMsg(bytes)
    bytes = rootMsg.serializeBinary()
    Object.values(allChannels).forEach(s => { s.channel.send(bytes, true) })
}

const sendData = (bytes, channel) => { channel.send(bytes, true) }

const broadcastData = (bytes, channel) => {
    Object.values(allChannels).forEach(s => { s.channel.send(bytes, true) })
}


const adminTokens = process.env.ADMIN_TOKENS ? process.env.ADMIN_TOKENS.split(":") : []

const sendValidUpdate = () => {

    const validPlayers = Object.values(allChannels).filter(data => data.valid > 0).map(data => data.channel.my_id)

    const validplayersmsg = new ValidPlayersMsg()
    validplayersmsg.setValidplayersList(validPlayers)
    const sm64jsMsg = new Sm64JsMsg()
    sm64jsMsg.setValidPlayersMsg(validplayersmsg)
    const rootMsg = new RootMsg()
    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    broadcastData(rootMsg.serializeBinary())
}


const processPlayerData = (channel_id, decodedMario) => {

    //Pretty strict validation  -- ignoring validation for now
    if (decodedMario.getChannelid() != decodedMario.getController().getChannelid()) return
    if (decodedMario.getPlayername().length < 3 || decodedMario.getPlayername().length > 14) return
    if (allChannels[channel_id] == undefined) return

    /// server should always force the channel_id
    decodedMario.setChannelid(channel_id)

    /// Data is Valid
    allChannels[channel_id].decodedMario = decodedMario
    allChannels[channel_id].valid = 100

}

const processControllerUpdate = (channel_id, bytes) => {
    const decodedController = ControllerMsg.deserializeBinary(bytes)

    /// do some validation here probably
    allChannels[channel_id].decodedController = decodedController
    //broadcastDataWithOpcode(bytes, 3, channel_id)
}

const validSkins = (skinData) => {
    if (skinData.overalls.length != 6) return false
    if (skinData.hat.length != 6) return false
    if (skinData.shirt.length != 6) return false
    if (skinData.gloves.length != 6) return false
    if (skinData.boots.length != 6) return false
    if (skinData.skin.length != 6) return false
    if (skinData.hair.length != 6) return false


    for (let i = 0; i < 6; i++) {
        let number = skinData.overalls[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.hat[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.shirt[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.gloves[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.boots[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.skin[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
        number = skinData.hair[i]
        if (isNaN(number) || number < 0 || number > 255 || !Number.isInteger(number)) return false
    }

    return true

}


const processSkin = (channel_id, msg) => {
    if (allChannels[channel_id].valid == 0) return

    if (!validSkins(msg)) return

    allChannels[channel_id].skinData = msg
    allChannels[channel_id].skinData.updated = true
}

const sanitizeChat = (string) => {
    string = string.substring(0, 200)
    string = string.replace(/</g, "&lt;")
    string = string.replace(/>/g, "&gt;")
    return string
}

const processAdminCommand = (msg) => {
    const parts = msg.split(' ')
    const token = parts[0]

    if (adminTokens.includes(token)) {
        console.log("Admin authentication success")
    } else {
        console.log("Admin authentication fail - token not found: " + token)
        return
    }


    if (parts[1].toUpperCase() == "ANNOUNCEMENT") {
        const remainingParts = parts.slice(2)
        broadcastJsonWithTopic('announcement', { message: remainingParts.join(" "), timer: 300 })
    }

}

const processChat = async (channel_id, msg) => {

    const socket = allChannels[channel_id]
    if (socket == undefined) return

    if (socket.chatCooldown > 0) return
    socket.chatCooldown = 3 // seconds
    if (msg.length == 0) return

    if (msg[0] == '/') {
        processAdminCommand(msg.slice(1))
        return
    }

    const decodedMario = socket.decodedMario
    if (decodedMario == undefined) return

    /// record chat to DB
    db.get('chats').push({
        socketID: channel_id,
        playerName: decodedMario.getPlayername(),
        ip: socket.channel.ip,
        timestampMs: Date.now(),
        message: msg
    }).write()

    const sanitizedChat = sanitizeChat(msg)

    const request = "http://www.purgomalum.com/service/json?text=" + encodeURIComponent(sanitizedChat)
    const playerNameRequest = "http://www.purgomalum.com/service/json?text=" + encodeURIComponent(decodedMario.getPlayername())
    try {
        const filteredMessage = JSON.parse((await got(request)).body).result
        const filteredPlayerName = JSON.parse((await got(playerNameRequest)).body).result

        if (decodedMario.getPlayername() != filteredPlayerName) {
            allChannels[channel_id].channel.close()
            return
        }

        const chatmsg = {
            channel_id,
            msg: filteredMessage,
            sender: decodedMario.getPlayername()
        }

        broadcastJsonWithTopic('chat', chatmsg)

    } catch (e) {
        console.log(`Got error with profanity api: ${e}`)
    }

}

const sendSkinsToChannel = (channel) => {
    /// Send Skins
    Object.entries(allChannels).forEach(([channel_id, data]) => {
        if (data.skinData) {
            const skinMsg = { channel_id, skinData: data.skinData }
            sendJsonWithTopic('skin', skinMsg, channel)
        }
    })
}

const sendSkinsIfUpdated = () => {
    /// Send Skins
    Object.entries(allChannels).forEach(([channel_id, data]) => {
        if (data.skinData) {
            const skinMsg = { channel_id, skinData: data.skinData }
            broadcastJsonWithTopic('skin', skinMsg)
            data.skinData.updated = false
        }
    })
}


/// Every frame - 30 times per second
setInterval(async () => {
    Object.values(allChannels).forEach(data => {
        if (data.valid > 0) data.valid--
        else if (data.decodedMario) data.channel.close()
    })

    const sm64jsMsg = new Sm64JsMsg()
    const mariolist = Object.values(allChannels).filter(data => data.decodedMario).map(data => data.decodedMario)
    const mariolistproto = new MarioListMsg()
    mariolistproto.setMarioList(mariolist)
    sm64jsMsg.setListMsg(mariolistproto)
    const bytes = sm64jsMsg.serializeBinary()
    const compressedBytes = await deflate(bytes)
    const rootMsg = new RootMsg()
    rootMsg.setCompressedSm64jsMsg(compressedBytes)
    broadcastData(rootMsg.serializeBinary())

}, 33)

/// Every other frame - 16 times per second
setInterval(async () => {
/*    const controllerlist = Object.values(allChannels).filter(data => data.decodedController).map(data => data.decodedController)
    const controllerlistproto = new ControllerListMsg()
    controllerlistproto.setControllerList(controllerlist)
    const bytes = controllerlistproto.serializeBinary()
    const compressedMsg = await deflate(bytes)
    broadcastDataWithOpcode(compressedMsg, 3)*/

}, 66)


/// Every 33 frames / once per second
setInterval(() => {
    sendValidUpdate()

    //chat cooldown
    Object.values(allChannels).forEach(data => {
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
        const key = req.getHeader('sec-websocket-key')
        const protocol = req.getHeader('sec-websocket-protocol')
        const extensions = req.getHeader('sec-websocket-extensions')

        res.onAborted(() => { console.log("!! aborted") })

        try {

            console.log("someone trying to connect: " + ip)

            ///// check CORS
            if (process.env.PRODUCTION) {
                let originHeader = req.getHeader('origin')
                const url = new URL(originHeader)
                const domainStr = url.hostname.substring(url.hostname.length - 11, url.hostname.length)
                if (domainStr != ".sm64js.com" && url.hostname != "sm64js.com") return res.writeStatus('418').end()


                const ipStatus = db.get('ipList').find({ ip }).value()

                if (ipStatus == undefined) {

                    console.log("trying to hit vpn api")
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
                        console.log("Adding new VPN BAD IP " + ip)
                        return res.writeStatus('403').end()
                    } else {
                        console.log("Adding new Legit IP")
                        db.get('ipList').push({ ip, value: 'ALLOWED' }).write()
                    }

                } else if (ipStatus.value == "BANNED") {  /// BANNED or NOT ALLOWED IP
                    console.log("BANNED IP tried to connect")
                    return res.writeStatus('403').end()
                } else if (ipStatus.value == "ALLOWED") { /// Whitelisted IP - OKAY
                    console.log("Known Whitelisted IP connecting")
                }

            }

        } catch (e) {
            console.log(`Got error with upgrading to websocket: ${e}`)
            return res.writeStatus('500').end()
        }
        
        res.upgrade( // upgrade to websocket
            { ip }, // 1st argument sets which properties to pass to the ws object, in this case ip address
            key,
            protocol,
            extensions, // these 3 headers are used to setup the websocket
            context // also used to setup the websocket
        )

    },

    open: async (channel) => {
        channel.my_id = generateID()
        allChannels[channel.my_id] = { valid: 0, channel, chatCooldown: 0 }
        sendJsonWithTopic('id', { id: channel.my_id }, channel)

        sendSkinsToChannel(channel)
    },

    message: async (channel, bytes) => {
        try {
            let sm64jsMsg
            const rootMsg = RootMsg.deserializeBinary(bytes)

            switch (rootMsg.getMessageCase()) {
                case RootMsg.MessageCase.UNCOMPRESSED_SM64JS_MSG:
                    sm64jsMsg = rootMsg.getUncompressedSm64jsMsg()
                    switch (sm64jsMsg.getMessageCase()) {
                        case Sm64JsMsg.MessageCase.MARIO_MSG:
                            processPlayerData(channel.my_id, sm64jsMsg.getMarioMsg()); break
                        //case 2: processBasicAttack(channel.my_id, bytes.slice(1)); break
                        //case 3: processControllerUpdate(channel.my_id, bytes.slice(1)); break
                        //case 4: processKnockUp(channel.my_id, bytes.slice(1)); break
                        default: throw "unknown case for uncompressed proto message"
                    }
                    break
                case RootMsg.MessageCase.JSON_BYTES_MSG:
                    const str = text.decoder.decode(rootMsg.getJsonBytesMsg())
                    const { topic, msg } = JSON.parse(str)
                    switch (topic) {
                        case 'chat': processChat(channel.my_id, msg); break
                        case 'skin': processSkin(channel.my_id, msg); break
                        case 'ping': sendData(bytes, channel); break
                        default: throw "Unknown topic in json message"
                    }
                    break
                case RootMsg.MessageCase.MESSAGE_NOT_SET:
                default:
                    throw new Error(`unhandled case in switch expression: ${rootMsg.getMessageCase()}`)
            }


        } catch (err) { console.log(err) }
    },

    close: (channel) => {
        delete allChannels[channel.my_id]
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

    if (ipValue == undefined) {
        db.get('ipList').push({ ip, value: 'BANNED', reason: 'Manual' }).write()
        console.log("Admin BAD IP " + ip + "  " + token)

        return res.send("BANNED")
    } else if (ipValue.value == "ALLOWED") {
        ipObject.assign({ value: 'BANNED', reason: 'Manual'  }).write()
        console.log("Admin BAD Existing IP " + ip + "  " + token)

        ///kick
        Object.values(allChannels).forEach(data => {
            if (data.channel.ip == ip) data.channel.close()
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
    return res.send({
        marioListSize: stats.marioListSize,
        numPlayers: Object.keys(allChannels).length
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
