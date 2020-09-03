import { MarioMsg, MarioListMsg } from "../proto/mario_pb"

const url = new URL(window.location.href)
url.protocol = url.protocol.replace('http', 'ws')
url.port = 3000

const socket = new WebSocket(url.href)

const recvMarioData = (mariolistmsg) => {
    window.extraMarios = mariolistmsg.map((mario) => {
        return {
            pos: mario.getPosList(),
            angle: mario.getAngleList(),
            animFrame: mario.getAnimframe(),
            animID: mario.getAnimid(),
            skinID: mario.getSkinid(),
            playerName: mario.getPlayername()
        }
    })
}

const sendMarioData = () => {
    const mariomsg = new MarioMsg()
    mariomsg.setPlayername(window.myMario.playerName)
    mariomsg.setSkinid(window.myMario.skinID)
    mariomsg.setAnimid(window.myMario.animID)
    mariomsg.setAnimframe(window.myMario.animFrame)
    mariomsg.setAngleList(window.myMario.angle)
    mariomsg.setPosList(window.myMario.pos)
    socket.send(mariomsg.serializeBinary())
}

const initSendInterval = () => {
    const sendDataInterval = setInterval(() => { sendMarioData() }, 15)
    socket.onclose = () => { clearInterval(sendDataInterval) }
}

socket.onopen = () => {

    initSendInterval()

    socket.onmessage = async (message) => {
        if (typeof message.data == "object") {
            /// assume mario object
            recvMarioData(MarioListMsg.deserializeBinary(await message.data.arrayBuffer()).getMarioList())
        }
    }
}

window.myMario = {
    pos: [0, 0, 0],
    angle: [0, 0, 0],
    animFrame: 0, animID: -1,
    skinID: 0,
    playerName: "Unnamed Player"
}