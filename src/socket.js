import { MarioMsg, MarioListMsg } from "../proto/mario_pb"
import * as Mario from "./game/Mario"

const url = new URL(window.location.href)

let websocketServerPath = "" 

if (url.protocol == "https:") {
    url.protocol = url.protocol.replace('https', 'wss')
    websocketServerPath =  url.href + "websocket/"
} else {
    url.protocol = url.protocol.replace('http', 'ws')
    url.port = 5001
    websocketServerPath = url.href
}

const socket = new WebSocket(websocketServerPath)

window.myMario = {
    me: true,
    pos: [0, 0, 0],
    angle: [0, 0, 0],
    animFrame: 0, animID: -1,
    skinID: 0,
    playerName: "Unnamed Player"
}

export const serverData = {
    extraMarios: [],
    extraPlayersByID: {},
    socketOpen: false
}

export const gameData = {}

const sendDataWithOpcode = (bytes, opcode) => {
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    socket.send(newbytes)
}

const recvMarioData = (mariolistmsg) => {
    serverData.extraMarios = mariolistmsg.map((mario) => {
        return {
            pos: mario.getPosList(),
            angle: mario.getAngleList(),
            animFrame: mario.getAnimframe(),
            animID: mario.getAnimid(),
            socketID: mario.getSocketid(),
            skinID: mario.getSkinid(),
            playerName: mario.getPlayername()
        }
    })
    serverData.extraMarios.forEach(marioData => {
        if (serverData.extraPlayersByID[marioData.socketID] == undefined)
            serverData.extraPlayersByID[marioData.socketID] = {}
        Object.assign(serverData.extraPlayersByID[marioData.socketID], { marioData })
    })
}

const recvMyID = (msg) => {
    serverData.extraPlayersByID[msg.id] = { marioData: window.myMario }
    window.myMario.socketID = msg.id
}

const recvChat = (chatmsg) => {
    if (serverData.extraPlayersByID[chatmsg.socketID] == undefined)
        serverData.extraPlayersByID[chatmsg.socketID] = {}
    Object.assign(serverData.extraPlayersByID[chatmsg.socketID], { chatData: { msg: chatmsg.msg, timer: 80 } })
    const chatlog = document.getElementById("chatlog")
    chatlog.innerHTML += '<strong>' + chatmsg.sender + '</strong>: ' + chatmsg.msg + '<br/>'
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight
}

const recvKick = (kickData) => {
    const m = gameData.marioState
    m.forwardVel = 50
    m.vel[1] = 50
    m.faceAngle[1] = kickData.angle
    Mario.set_mario_action(m, Mario.ACT_THROWN_BACKWARD, 0)
}

const recvKnockUp = () => {
    const m = gameData.marioState
    if (m.invincTimer == 0) {
        m.invincTimer = 30
        m.vel[1] = 70
        Mario.set_mario_action(m, Mario.ACT_KNOCKED_UP, 0)
    }
}

const sendMarioData = () => {
    const mariomsg = new MarioMsg()
    mariomsg.setPlayername(window.myMario.playerName)
    mariomsg.setSkinid(window.myMario.skinID)
    mariomsg.setAnimid(window.myMario.animID)
    mariomsg.setAnimframe(window.myMario.animFrame)
    mariomsg.setAngleList(window.myMario.angle)
    mariomsg.setPosList(window.myMario.pos)
    sendDataWithOpcode(mariomsg.serializeBinary(), 0)
}

socket.onopen = () => {

    serverData.socketOpen = true

    socket.onmessage = async (message) => {
        const bytes = new Uint8Array(await message.data.arrayBuffer())
        const opcode = bytes[0]
        const msgBytes = bytes.slice(1)
        switch (opcode) {
            case 0: recvMarioData(MarioListMsg.deserializeBinary(msgBytes).getMarioList()); break
            case 1: recvChat(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 2: recvKick(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 3: recvMyID(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 4: recvKnockUp(); break
            default: throw "unknown websocket opcode"
        }
    }

    socket.onclose = () => { serverData.socketOpen = false }
}

export const main_loop_one_iteration = () => {

    if (serverData.socketOpen) sendMarioData()

    Object.values(serverData.extraPlayersByID).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })
}

export const getExtraMarios = () => {
    return serverData.extraMarios
} 

export const getExtraRenderData = (socketID) => {

    if (socketID == undefined) return { skinID: window.myMario.skinID }

    const data = serverData.extraPlayersByID[socketID]
    return {
        chat: (data.chatData && data.chatData.timer > 0) ? data.chatData.msg : null,
        skinID: data.marioData.skinID,
        playerName: data.marioData.me ? null : data.marioData.playerName
    }
}

export const sendChat = (msg) => {
    sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify({ msg })), 1)
}

export const processKick = (myMarioPos, myMarioAngle) => {
    const angleRadians = myMarioAngle / 0x8000 * Math.PI
    const x = myMarioPos[0] + Math.sin(angleRadians) * 80
    const z = myMarioPos[2] + Math.cos(angleRadians) * 80

    serverData.extraMarios.forEach(marioData => {
        const distance = Math.sqrt(Math.pow(marioData.pos[0] - x, 2) + Math.pow(marioData.pos[2] - z, 2))
        const directDistance = Math.sqrt(Math.pow(marioData.pos[0] - myMarioPos[0], 2) + Math.pow(marioData.pos[2] - myMarioPos[2], 2))
        if (directDistance > 25 && distance < 100) { ///trigger hit
            const kickMsg = { id: marioData.socketID, angle: myMarioAngle }
            sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify(kickMsg)), 2)
        }
    })
}

export const processDiveAttack = (mypos, speed) => {
    if (speed > 25) {

        serverData.extraMarios.forEach(marioData => {
            const distance = Math.sqrt(
                Math.pow(marioData.pos[0] - mypos[0], 2) +
                Math.pow(marioData.pos[1] - mypos[1], 2) +
                Math.pow(marioData.pos[2] - mypos[2], 2)
            )
            if (distance < 150) { ///trigger hit
                const diveHitMsg = { id: marioData.socketID }
                sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify(diveHitMsg)), 4)
            }
        })
    }
}