const { MarioMsg, MarioListMsg } = require("./proto/mario_pb")
const http = require('http')
const util = require('util')
const zlib = require('zlib')
const deflate = util.promisify(zlib.deflate)
const port = 9208
const ws_port = 3000

const allChannels = {}
const stats = {}

let currentId = 0
const generateID = () => {
    if (++currentId > 1000000) currentId = 0
    return currentId
}

const broadcastDataWithOpcode = (bytes, opcode) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)

    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)

    Object.values(allChannels).forEach(s => { s.channel.send(newbytes, true) })

}

const processPlayerData = (channel_id, bytes) => {
    const decodedMario = MarioMsg.deserializeBinary(bytes)

    //ignoring validation for now
    if (decodedMario.getPlayername().length < 3 || decodedMario.getPlayername().length > 14) return

    if (allChannels[channel_id] == undefined) return

    /// Data is Valid
    allChannels[channel_id].decodedMario = decodedMario
    allChannels[channel_id].valid = 30
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

require('uWebSockets.js').App().ws('/*', {

    open: (channel) => {
        channel.my_id = generateID()
        allChannels[channel.my_id] = { valid: 0, channel, chatCooldown: 0 }
        channel.send(JSON.stringify({ id: channel.my_id }), false)
    },

    message: (channel, bytes, isBinary) => {
        const opcode = Buffer.from(bytes)[0]
        switch (opcode) {
            case 0: processPlayerData(channel.my_id, bytes.slice(1)); break
            default: console.log("unknown opcode: " + opcode)
        }
    },

    close: (channel) => {
        delete allChannels[channel.my_id]
    }

}).listen(ws_port, () => { console.log("Starting websocket server") })

/*geckos.onConnection(channel => {

    channel.my_id = generateID()
    allChannels[channel.my_id] = { valid: 0, channel, chatCooldown: 0 }
    channel.emit('id', { id: channel.my_id }, { reliable: true })

    channel.onRaw(bytes => {
        try {
            const opcode = Buffer.from(bytes)[0]
            switch (opcode) {
                case 0: processPlayerData(channel.my_id, bytes.slice(1)); break
                default: console.log("unknown opcode: " + opcode)
            }
        } catch (err) { console.log(err) }
    })

    channel.onDisconnect(() => {
        delete allChannels[channel.my_id]
    })
})*/


//// Express Static serving
const express = require('express')
const app = express()
const server = http.Server(app)
app.use(express.static(__dirname + '/dist'))

server.listen(port, () => { console.log('Serving Files with express server ' + port) })