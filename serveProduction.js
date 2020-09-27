const { MarioMsg, MarioListMsg, ControllerListMsg, ControllerMsg, ValidSocketsMsg } = require("./proto/mario_pb")
const fs = require('fs')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const geckos = require('@geckos.io/server').default()
const port = 9208

const badwords = fs.readFileSync('otherTools/profanity_filter.txt').toString().split('\n')

//// Sockets
const allSockets = {}

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

    const validSockets = Object.values(allSockets).filter(data => data.valid > 0).map(data => data.channel.my_id)

    const validsocketsmsg = new ValidSocketsMsg()
    validsocketsmsg.setValidsocketsList(validSockets)
    broadcastDataWithOpcode(validsocketsmsg.serializeBinary(), 8)
}


const processPlayerData = (channel_id, bytes) => {
    const decodedMario = MarioMsg.deserializeBinary(bytes)

    //Pretty strict validation  -- ignoring validation for now
/*    for (let i = 0; i < 3; i++) {
        if (isNaN(decodedMario.getPosList()[i])) return
        if (isNaN(decodedMario.getAngleList()[i])) return
    }
    if (isNaN(decodedMario.getAnimframe())) return
    if (isNaN(decodedMario.getAnimid()) || 0 > decodedMario.getAnimid()) return
    if (isNaN(decodedMario.getSkinid()) || 0 > decodedMario.getSkinid() || decodedMario.getSkinid() > 9) return
    decodedMario.setPlayername(String(decodedMario.getPlayername()).substring(0, 14)) */

    ///decodedMario.setSocketid(socketID) no longer needed

    /// Data is Valid
    allSockets[channel_id].decodedMario = decodedMario
    allSockets[channel_id].valid = 60

    //publish
    //broadcastDataWithOpcode(bytes, 0, allSockets[socketID].channel)
}

const processControllerUpdate = (socketID, bytes) => {
    const decodedController = ControllerMsg.deserializeBinary(bytes)

    /// do some validation here probably
    allSockets[socketID].decodedController = decodedController
    //broadcastDataWithOpcode(bytes, 3, socketID)
}


const processBasicAttack = (socketID, bytes) => {

    if (allSockets[socketID].valid == 0) return

    const attackMsg = JSON.parse(new TextDecoder("utf-8").decode(bytes))
    attackMsg.attackerID = socketID
    const responseMsg = new TextEncoder("utf-8").encode(JSON.stringify(attackMsg))
    sendDataWithOpcode(responseMsg, 2, allSockets[attackMsg.my_id].channel)
}

const processKnockUp = (socketID, bytes) => {

    if (allSockets[socketID].valid == 0) return

    const attackMsg = JSON.parse(new TextDecoder("utf-8").decode(bytes))
    const responseMsg = new TextEncoder("utf-8").encode(JSON.stringify(attackMsg))
    sendDataWithOpcode(responseMsg, 4, allSockets[attackMsg.my_id].channel)
}

const processChat = (channel_id, msg) => {
/*    badwords.forEach(word => {
        const searchMask = word.slice(0, word.length)
        const regEx = new RegExp(searchMask, "ig");
        msg = msg.replace(regEx, "*****")
    })*/

    const decodedMario = Object.values(allSockets).find(data => data.channel.my_id == channel_id).decodedMario

    if (decodedMario == undefined) return

    const chatmsg = { channel_id, msg, sender: decodedMario.getPlayername() }

    geckos.emit('chat', chatmsg, { reliable: true })
}

/// Every frame - 30 times per second
let marioListCounter = 0
setInterval(async () => {
    Object.values(allSockets).forEach(data => {
        if (data.valid > 0) data.valid--
        else if (data.decodedMario) data.channel.close()
    })

    const mariolist = Object.values(allSockets).filter(data => data.decodedMario).map(data => data.decodedMario)
    const mariolistproto = new MarioListMsg()
    mariolistproto.setMarioList(mariolist)
    mariolistproto.setMessagecount(marioListCounter)
    const bytes = mariolistproto.serializeBinary()
    const compressedMsg = await deflate(bytes)
    broadcastDataWithOpcode(compressedMsg, 0)
    marioListCounter++

}, 33)

/// Every other frame - 16 times per second
setInterval(async () => {
/*    const controllerlist = Object.values(allSockets).filter(data => data.decodedController).map(data => data.decodedController)
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
    Object.values(allSockets).forEach(data => {
        const msg = new TextEncoder("utf-8").encode(JSON.stringify({ time: process.hrtime() }))
        sendDataWithOpcode(msg, 99, data.channel)
    })
}, 15000)

const measureAndPrintLatency = (msgBytes) => {
    const time = JSON.parse(new TextDecoder("utf-8").decode(msgBytes)).time
    const hrend = process.hrtime(time)
    console.info('Latency: %ds %dms', hrend[0], hrend[1] / 1000000)
}

geckos.onConnection(channel => {

    channel.my_id = generateID()
    allSockets[channel.my_id] = { valid: 0, channel }
    channel.emit('id', { id: channel.my_id }, { reliable: true })

    channel.onRaw(bytes => {
        try {
            const opcode = Buffer.from(bytes)[0]
            switch (opcode) {
                case 0: processPlayerData(channel.my_id, bytes.slice(1)); break
                //case 1: processChat(channel.my_id, bytes.slice(1)); break
                //case 2: processBasicAttack(channel.my_id, bytes.slice(1)); break
                //case 3: processControllerUpdate(channel.my_id, bytes.slice(1)); break
                //case 4: processKnockUp(channel.my_id, bytes.slice(1)); break
                case 99: measureAndPrintLatency(bytes.slice(1)); break
                default: console.log("unknown opcode: " + opcode)
            }
        } catch (err) { console.log(err) }
    })

    channel.on('chat', msg => { processChat(channel.my_id, msg) })

    channel.onDisconnect(() => {
        delete allSockets[channel.my_id]
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