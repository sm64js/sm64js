const { MarioMsg, MarioListMsg } = require("./proto/mario_pb")
const http = require('http')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 9208
const ws_port = 3000

const allChannels = {}

let currentId = 0
const generateID = () => {
    if (++currentId > 1000000) currentId = 0
    return currentId
}

const broadcastData = (bytes) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)
    Object.values(allChannels).forEach(s => { s.channel.send(bytes, true) })
}

const processPlayerData = (channel_id, bytes) => {
    const decodedMario = MarioMsg.deserializeBinary(bytes)

    //ignoring validation for now
    if (decodedMario.getPlayername().length < 3 || decodedMario.getPlayername().length > 14) return
    if (allChannels[channel_id] == undefined) return

    /// server should always force the channel_id
    decodedMario.setChannelid(channel_id)

    /// Data is Valid
    allChannels[channel_id].decodedMario = decodedMario
    allChannels[channel_id].valid = 30
}

/// Every frame - 30 times per second
setInterval(async () => {
    Object.values(allChannels).forEach(data => {
        if (data.valid > 0) data.valid--
        else if (data.decodedMario) data.channel.close()
    })

    const mariolist = Object.values(allChannels).filter(data => data.decodedMario).map(data => data.decodedMario)
    const mariolistproto = new MarioListMsg()
    mariolistproto.setMarioList(mariolist)
    const bytes = mariolistproto.serializeBinary()
    const compressedMsg = await deflate(bytes)
    broadcastData(compressedMsg)

}, 33)

if (process.env.NODE_WS) {
    require('uWebSockets.js').App().ws('/*', {
    
        open: (channel) => {
            channel.my_id = generateID()
            allChannels[channel.my_id] = { valid: 0, channel }
            channel.send(JSON.stringify({ id: channel.my_id }), false)
        },
    
        message: (channel, bytes) => {
            processPlayerData(channel.my_id, bytes)
        },
    
        close: (channel) => {
            delete allChannels[channel.my_id]
        }
    
    }).listen(ws_port, () => { console.log("Starting websocket server " + ws_port) })
}

//// Express Static serving
const express = require('express')
const app = express()
const server = http.Server(app)
app.use(express.static(__dirname + '/dist'))

server.listen(port, () => { console.log('Serving Files with express server ' + port) })