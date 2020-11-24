const { RootMsg, MarioListMsg, ControllerMsg, ValidPlayersMsg, Sm64JsMsg, ConnectedMsg, SkinMsg } = require("./proto/mario_pb")
const fs = require('fs')
const http = require('http')
const got = require('got')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 3080
const ws_port = 3000

const allChannels = {}
const stats = {}

let currentId = 0
const generateID = () => {
    if (++currentId > 1000000) currentId = 0
    return currentId
}

const text = {
    decoder: new TextDecoder(),
    encoder: new TextEncoder()
}

const sendData = (bytes, channel) => { channel.send(bytes, true) }

const broadcastData = (bytes) => {
    Object.values(allChannels).forEach(s => { s.channel.send(bytes, true) })
}

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

const isValidSkinEntry = (skinEntry) => {
    return skinEntry.length === 6 && !skinEntry.find(skinVal => isNaN(skinVal) || skinVal < 0 || skinVal > 255 || !Number.isInteger(skinVal))
}

const validSkins = (skinMsg) => {
    if (!isValidSkinEntry(skinMsg.getOverallsList())) return false
    if (!isValidSkinEntry(skinMsg.getHatList())) return false
    if (!isValidSkinEntry(skinMsg.getShirtList())) return false
    if (!isValidSkinEntry(skinMsg.getGlovesList())) return false
    if (!isValidSkinEntry(skinMsg.getBootsList())) return false
    if (!isValidSkinEntry(skinMsg.getSkinList())) return false
    if (!isValidSkinEntry(skinMsg.getHairList())) return false

    return true
}


const processSkin = (channel_id, skinMsg) => {
    if (allChannels[channel_id].valid == 0) return

    if (!validSkins(skinMsg)) return

    const skinData = {
        overalls: skinMsg.getOverallsList(),
        hat: skinMsg.getHatList(),
        shirt: skinMsg.getShirtList(),
        gloves: skinMsg.getGlovesList(),
        boots: skinMsg.getBootsList(),
        skin: skinMsg.getSkinList(),
        hair: skinMsg.getHairList(),
        customCapState: skinMsg.getCustomcapstate() != null ? skinMsg.getCustomcapstate() : 0,
    }
    allChannels[channel_id].skinData = skinData
    allChannels[channel_id].skinData.updated = true
}

const sanitizeChat = (string) => {
    string = string.substring(0, 200)
    string = string.replace(/</g, "")
    string = string.replace(/>/g, "")
    return string
}

const processChat = async (channel_id, sm64jsMsg) => {
    const chatMsg = sm64jsMsg.getChatMsg()
    const msg = chatMsg.getMessage()

    if (allChannels[channel_id].chatCooldown > 0) return
    allChannels[channel_id].chatCooldown = 3 // seconds
    if (msg.length == 0) return

    const decodedMario = Object.values(allChannels).find(data => data.channel.my_id == channel_id).decodedMario
    if (decodedMario == undefined) return


    const sanitizedChat = sanitizeChat(msg)

    const request = "http://www.purgomalum.com/service/json?text=" + sanitizedChat
    const playerNameRequest = "http://www.purgomalum.com/service/json?text=" + decodedMario.getPlayername()

    try {
        const filteredMessage = JSON.parse((await got(request)).body).result
        const filteredPlayerName = JSON.parse((await got(playerNameRequest)).body).result

        if (decodedMario.getPlayername() != filteredPlayerName) {
            allChannels[channel_id].channel.close()
            return
        }

        chatMsg.setChannelid(channel_id)
        chatMsg.setMessage(filteredMessage)
        chatMsg.setSender(decodedMario.getPlayername())

        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        broadcastData(rootMsg.serializeBinary())

    } catch (e) {
        console.log(`Got error with profanity api: ${e}`)
    }

}

const sendSkinsToChannel = (channel) => {
    /// Send Skins
    Object.entries(allChannels).filter(([_, data]) => data.skinData).forEach(([channelId, data]) => {
        const skinMsg = new SkinMsg()
        skinMsg.setChannelid(channelId)
        skinMsg.setOverallsList(data.skinData.overalls)
        skinMsg.setHatList(data.skinData.hat)
        skinMsg.setShirtList(data.skinData.shirt)
        skinMsg.setGlovesList(data.skinData.gloves)
        skinMsg.setBootsList(data.skinData.boots)
        skinMsg.setSkinList(data.skinData.skin)
        skinMsg.setHairList(data.skinData.hair)
        skinMsg.setCustomcapstate(1)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setSkinMsg(skinMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)

        channel.send(rootMsg.serializeBinary(), true)
    })
}

const sendSkinsIfUpdated = () => {
    /// Send Skins
    Object.entries(allChannels).filter(([_, data]) => data.skinData && data.skinData.updated).forEach(([channelId, data]) => {
        const skinMsg = new SkinMsg()
        skinMsg.setChannelid(channelId)
        skinMsg.setOverallsList(data.skinData.overalls)
        skinMsg.setHatList(data.skinData.hat)
        skinMsg.setShirtList(data.skinData.shirt)
        skinMsg.setGlovesList(data.skinData.gloves)
        skinMsg.setBootsList(data.skinData.boots)
        skinMsg.setSkinList(data.skinData.skin)
        skinMsg.setHairList(data.skinData.hair)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setSkinMsg(skinMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)

        data.skinData.updated = false

        broadcastData(rootMsg.serializeBinary())
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

    open: async (channel) => {
        channel.my_id = generateID()
        allChannels[channel.my_id] = { valid: 0, channel, chatCooldown: 0 }
        
        const connectedMsg = new ConnectedMsg()
        connectedMsg.setChannelid(channel.my_id)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setConnectedMsg(connectedMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        channel.send(rootMsg.serializeBinary(), true)

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
                        case Sm64JsMsg.MessageCase.PING_MSG:
                            sendData(bytes, channel); break
                        case Sm64JsMsg.MessageCase.CHAT_MSG:
                            processChat(channel.my_id, sm64jsMsg); break
                        case Sm64JsMsg.MessageCase.SKIN_MSG:
                            processSkin(channel.my_id, sm64jsMsg.getSkinMsg()); break
                        //case 2: processBasicAttack(channel.my_id, bytes.slice(1)); break
                        //case 3: processControllerUpdate(channel.my_id, bytes.slice(1)); break
                        //case 4: processKnockUp(channel.my_id, bytes.slice(1)); break
                        default: throw "unknown case for uncompressed proto message"
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
