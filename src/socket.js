import { MarioMsg, MarioListMsg } from "../proto/mario_pb"

const message = new MarioListMsg()

const inputBytes = new Uint8Array([
    10, 31, 10, 8, 74, 111, 104, 110, 32, 68, 111, 101,
    16, 25, 24, 6, 32, 2, 42, 6, 180, 1, 159, 1,
    208, 15, 50, 5, 136, 14, 191, 12, 0, 10, 35, 10,
    13, 83, 110, 117, 102, 102, 121, 32, 76, 105, 110, 100,
    101, 114, 16, 62, 24, 32, 32, 12, 42, 5, 72, 227,
    7, 250, 2, 50, 5, 150, 8, 239, 13, 32
])

const decodedMarioList = MarioListMsg.deserializeBinary(inputBytes).getMarioList()

console.log(decodedMarioList[0].getAngleList())
console.log(decodedMarioList[1].getAngleList())


const url = new URL(window.location.href)
url.protocol = url.protocol.replace('http', 'ws')
url.port = 3000

const socket = new WebSocket(url.href)

const recvMarioData = (marioData) => { window.extraMarios = marioData }

const initSendInterval = (id) => {
    socket.id = id
    const sendDataInterval = setInterval(() => {
        socket.send(JSON.stringify(window.myMario))
    }, 33.3)
    socket.onclose = () => { clearInterval(sendDataInterval) }
}

socket.onopen = () => {
    socket.onmessage = (msgStr) => {
        const msg = JSON.parse(msgStr.data)
        if (msg.type == "id") initSendInterval(msg.data) /// fully initialized
        if (msg.type == "allMarios") recvMarioData(msg.data)
    }
}

window.myMario = {
    pos: [0, 0, 0],
    angle: [0, 0, 0],
    animFrame: 0, animID: -1,
    skinID: 0,
    playerName: "Unnamed Player"
}