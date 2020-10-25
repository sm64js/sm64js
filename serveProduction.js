const { MarioMsg, MarioListMsg, ControllerMsg, ValidPlayersMsg } = require("./proto/mario_pb")
const fs = require('fs')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 9208
const { iceServers } = require('@geckos.io/server')
const geckos = require('@geckos.io/server').default({
    portRange: {
        min: 10000,
        max: 12000
    },
    iceServers
})

const badwords = fs.readFileSync('otherTools/profanity_filter.txt').toString().split('\n')

const allChannels = {}
const stats = {}

let currentId = 0
const generateID = () => {
    if (++currentId > 1000000) currentId = 0
    return currentId
}

const sendDataWithOpcode = (bytes, opcode, channel) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    channel.raw.emit(newbytes)
}

const broadcastDataWithOpcode = (bytes, opcode, channel) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)

    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)

    if (channel) channel.raw.broadcast.emit(newbytes)
    else geckos.raw.emit(newbytes)

}

const sendValidUpdate = () => {

    const validPlayers = Object.values(allChannels).filter(data => data.valid > 0).map(data => data.channel.my_id)

    const validplayersmsg = new ValidPlayersMsg()
    validplayersmsg.setValidplayersList(validPlayers)
    broadcastDataWithOpcode(validplayersmsg.serializeBinary(), 8)
}


const processPlayerData = (channel_id, bytes) => {
    const decodedMario = MarioMsg.deserializeBinary(bytes)

    //Pretty strict validation  -- ignoring validation for now
    if (decodedMario.getChannelid() != decodedMario.getController().getChannelid()) return
    if (decodedMario.getPlayername().length < 3 || decodedMario.getPlayername().length > 14) return

    if (allChannels[channel_id] == undefined) return

    /// Data is Valid
    allChannels[channel_id].decodedMario = decodedMario
    allChannels[channel_id].valid = 30

    //publish
    //broadcastDataWithOpcode(bytes, 0, allChannels[channel_id].channel)
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

    const skinMsg = { channel_id, skinData: msg }
    allChannels[channel_id].channel.broadcast.emit('skin', skinMsg)


}

const sanitizeChat = (string) => {
    string = string.substring(0, 200)
    string = string.replace(/</g, "")
    string = string.replace(/>/g, "")
    return string
}

const processChat = (channel_id, msg) => {
/*    badwords.forEach(word => {
        const searchMask = word.slice(0, word.length)
        const regEx = new RegExp(searchMask, "ig");
        msg = msg.replace(regEx, "*****")
    })*/

    const decodedMario = Object.values(allChannels).find(data => data.channel.my_id == channel_id).decodedMario

    if (decodedMario == undefined) return

    const chatmsg = { channel_id, msg: sanitizeChat(msg), sender: decodedMario.getPlayername() }

    geckos.emit('chat', chatmsg, { reliable: true })
}

/// Every frame - 30 times per second
let marioListCounter = 0
setInterval(async () => {
    Object.values(allChannels).forEach(data => {
        if (data.valid > 0) data.valid--
        else if (data.decodedMario) data.channel.close()
    })

    const mariolist = Object.values(allChannels).filter(data => data.decodedMario).map(data => data.decodedMario)
    const mariolistproto = new MarioListMsg()
    mariolistproto.setMarioList(mariolist)
    mariolistproto.setMessagecount(marioListCounter)
    const bytes = mariolistproto.serializeBinary()
    const compressedMsg = await deflate(bytes)
    stats.marioListSize = compressedMsg.length
    broadcastDataWithOpcode(compressedMsg, 0)
    marioListCounter++

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
setInterval(() => { sendValidUpdate() }, 1000)

/// Every 15 seconds
setInterval(() => {

    /// ping to measure latency
    Object.values(allChannels).forEach(data => {
        const msg = new TextEncoder("utf-8").encode(JSON.stringify({ time: process.hrtime() }))
        sendDataWithOpcode(msg, 99, data.channel)
    })
}, 15000)

const measureAndPrintLatency = (msgBytes) => {
    const time = JSON.parse(new TextDecoder("utf-8").decode(msgBytes)).time
    const hrend = process.hrtime(time)
    //console.info('Latency: %ds %dms', hrend[0], hrend[1] / 1000000)
}

geckos.onConnection(channel => {

    channel.my_id = generateID()
    allChannels[channel.my_id] = { valid: 0, channel }
    channel.emit('id', { id: channel.my_id }, { reliable: true })

    channel.onRaw(bytes => {
        try {
            const opcode = Buffer.from(bytes)[0]
            switch (opcode) {
                case 0: processPlayerData(channel.my_id, bytes.slice(1)); break
                //case 2: processBasicAttack(channel.my_id, bytes.slice(1)); break
                //case 3: processControllerUpdate(channel.my_id, bytes.slice(1)); break
                //case 4: processKnockUp(channel.my_id, bytes.slice(1)); break
                case 99: measureAndPrintLatency(bytes.slice(1)); break
                default: console.log("unknown opcode: " + opcode)
            }
        } catch (err) { console.log(err) }
    })

    //channel.on('chat', msg => { processChat(channel.my_id, msg) })
    channel.on('skin', msg => { processSkin(channel.my_id, msg) })

    channel.onDisconnect(() => {
        delete allChannels[channel.my_id]
    })
})




//// Express Static serving
const express = require('express')
const app = express()
const http = require('http')
const server = http.Server(app)
app.use(express.static(__dirname + '/dist'))

geckos.addServer(server)
server.listen(port, () => { console.log(' Listening to combined servers at ' + port) })


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
