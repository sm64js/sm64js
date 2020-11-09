const { MarioMsg, MarioListMsg, Sm64JsMsg, ConnectedMsg } = require("./proto/mario_pb")
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

const processPlayerData = (channel_id, decodedMario) => {

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

    const sm64jsMsg = new Sm64JsMsg()
    const mariolist = Object.values(allChannels).filter(data => data.decodedMario).map(data => data.decodedMario)
    const mariolistproto = new MarioListMsg()
    mariolistproto.setMarioList(mariolist)
    sm64jsMsg.setListMsg(mariolistproto)
    const bytes = sm64jsMsg.serializeBinary()
    const compressedMsg = await deflate(bytes)
    broadcastData(compressedMsg)

}, 33)

require('uWebSockets.js').App().ws('/*', {

    open: async (channel) => {
        channel.my_id = generateID()
        allChannels[channel.my_id] = { valid: 0, channel }
        const sm64jsMsg = new Sm64JsMsg()
        const connectedMsg = new ConnectedMsg()
        connectedMsg.setChannelid(channel.my_id)
        sm64jsMsg.setConnectedMsg(connectedMsg)
        const bytes = sm64jsMsg.serializeBinary()
        const compressedMsg = await deflate(bytes)
        channel.send(compressedMsg, true)
    },

    message: async (channel, bytes) => {
        const sm64jsMsg = Sm64JsMsg.deserializeBinary(bytes)
        switch (sm64jsMsg.getMessageCase()) {
            case Sm64JsMsg.MessageCase.MARIO_MSG:
                processPlayerData(channel.my_id, sm64jsMsg.getMarioMsg()); break
            case Sm64JsMsg.MessageCase.PING_MSG:
                const compressedMsg = await deflate(bytes)
                channel.send(compressedMsg, true); break  ///ping pong
            case Sm64JsMsg.MessageCase.MESSAGE_NOT_SET:
            default:
                throw new Error(`unhandled case in switch expression: ${sm64jsMsg.getMessageCase()}`)
        }
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