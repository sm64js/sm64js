import { ControllerMsg, MarioListMsg } from "../proto/mario_pb"
import * as Mario from "./game/Mario"
import { take_damage_and_knock_back, INTERACT_PLAYER } from "./game/Interaction"
import { oDamageOrCoinValue, oInteractType, oPosX, oPosZ, oPosY } from "./include/object_constants"
import * as Multi from "./game/MultiMarioManager"

const url = new URL(window.location.href)

let websocketServerPath = "" 

if (url.protocol == "https:") {
    websocketServerPath = `wss://${url.hostname}/websocket/`
} else {
    websocketServerPath = `ws://${url.hostname}:5001`
}

const socket = new WebSocket(websocketServerPath)

if (Blob.prototype.arrayBuffer == undefined) socket.close()

window.myMario = {
    skinID: 0,
    playerName: "Unnamed Player"
}

export const networkData = {
    //extraMarios: [],
    remotePlayers: {},
    mySocketID: -1,
}

export const gameData = {}

const sendDataWithOpcode = (bytes, opcode) => {
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    socket.send(newbytes)
}

/*const recvMarioData = (mariolistmsg) => {
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
        if (serverData.remotePlayersByID[marioData.socketID] == undefined)
            serverData.remotePlayersByID[marioData.socketID] = {}
        Object.assign(serverData.remotePlayersByID[marioData.socketID], { marioData })
    })
}*/

const recvMyID = (msg) => {
    networkData.mySocketID = msg.id
/*    serverData.remotePlayersByID[msg.id] = { marioData: window.myMario }
    window.myMario.socketID = msg.id*/
}

const recvChat = (chatmsg) => {
    if (serverData.remotePlayersByID[chatmsg.socketID] == undefined)
        serverData.remotePlayersByID[chatmsg.socketID] = {}
    Object.assign(serverData.remotePlayersByID[chatmsg.socketID], { chatData: { msg: chatmsg.msg, timer: 80 } })
    const chatlog = document.getElementById("chatlog")
    chatlog.innerHTML += '<strong>' + chatmsg.sender + '</strong>: ' + chatmsg.msg + '<br/>'
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight
}

const recvBasicAttack = (attackData) => {
    const m = gameData.marioState
    const attackerMarioData = serverData.remotePlayersByID[attackData.attackerID].marioData
    //const knockbackMultiplier = attackData.knockbackMultiplier
    const attackerMarioObj = {
        rawData: new Array(0x50).fill(0)
    }
    attackerMarioObj.rawData[oDamageOrCoinValue] = attackData.attackTier
    attackerMarioObj.rawData[oInteractType] |= INTERACT_PLAYER
    attackerMarioObj.rawData[oPosX] = attackerMarioData.pos[0]
    attackerMarioObj.rawData[oPosY] = attackerMarioData.pos[1]
    attackerMarioObj.rawData[oPosZ] = attackerMarioData.pos[2]
    //m.forwardVel = -50
    //m.vel[1] = 50
    //m.faceAngle[1] = kickData.angle + 0x8000
    //Mario.set_mario_action(m, Mario.ACT_THROWN_BACKWARD, 0)

    if (attackData.forceAir) Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    take_damage_and_knock_back(m, attackerMarioObj)
}

const recvKnockUp = (data) => {
    const m = gameData.marioState
    if (m.invincTimer == 0) {
        m.invincTimer = 30
        m.vel[1] = data.upwardForce
        Mario.set_mario_action(m, Mario.ACT_KNOCKED_UP, 0)
    }
}

/*const sendMarioData = () => {
    const mariomsg = new MarioMsg()
    mariomsg.setPlayername(window.myMario.playerName)
    mariomsg.setSkinid(window.myMario.skinID)
    mariomsg.setAnimid(window.myMario.animID)
    mariomsg.setAnimframe(window.myMario.animFrame)
    mariomsg.setAngleList(window.myMario.angle)
    mariomsg.setPosList(window.myMario.pos)
    sendDataWithOpcode(mariomsg.serializeBinary(), 0)
}*/

socket.onopen = () => {

    socket.onmessage = async (message) => {
        const bytes = new Uint8Array(await message.data.arrayBuffer())
        const opcode = bytes[0]
        const msgBytes = bytes.slice(1)
        switch (opcode) {
            case 0: if (multiplayerReady()) Multi.recvMarioData(msgBytes); break
            case 1: recvChat(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 2: recvBasicAttack(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 3: if (multiplayerReady()) Multi.recvControllerUpdate(msgBytes); break
            case 4: recvKnockUp(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 8: Multi.recvValidSockets(msgBytes); break
            case 9: recvMyID(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            default: throw "unknown websocket opcode"
        }
    }

    socket.onclose = () => { }
}

const multiplayerReady = () => {
    return socket.readyState == 1 && gameData.marioState && networkData.mySocketID != null
}

export const send_controller_update = (frame) => {
    if (multiplayerReady() && frame % 2 == 0) {
        sendDataWithOpcode(Multi.createControllerProtoMsg().serializeBinary(), 3)
    }
}

const updateConnectedMsg = () => {
    const elem = document.getElementById("connectedMsg")
    if (socket.readyState == 1) {
        elem.innerHTML = "Connected To Server"
        elem.style.color = "lawngreen"
    } else {
        elem.innerHTML = "Not connected to server - try refreshing - or server is down"
        elem.style.color = "red"
    }
}

export const post_main_loop_one_iteration = (frame) => {

    updateConnectedMsg()

    if (multiplayerReady() && frame % 5 == 0) {
        sendDataWithOpcode(Multi.createMarioProtoMsg(), 0)
    }

    Object.values(networkData.remotePlayers).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })
}

export const getExtraMarios = () => {
    return serverData.extraMarios
} 

export const getExtraRenderData = (socketID) => {

    return { skinID: 0 }

    if (socketID == undefined) return { skinID: window.myMario.skinID }

    const data = serverData.remotePlayersByID[socketID]
    return {
        chat: (data.chatData && data.chatData.timer > 0) ? data.chatData.msg : null,
        skinID: data.marioData.skinID,
        playerName: data.marioData.me ? null : data.marioData.playerName
    }
}

export const sendChat = (msg) => {
    //sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify({ msg })), 1)
}

export const processAttack = (myMarioPos, myMarioAngle, attackTier, forceAir) => {
/*    const angleRadians = myMarioAngle / 0x8000 * Math.PI
    const x = myMarioPos[0] + Math.sin(angleRadians) * 80
    const z = myMarioPos[2] + Math.cos(angleRadians) * 80

    serverData.extraMarios.forEach(marioData => {
        const distance = Math.sqrt(Math.pow(marioData.pos[0] - x, 2) + Math.pow(marioData.pos[2] - z, 2))
        const directDistance = Math.sqrt(Math.pow(marioData.pos[0] - myMarioPos[0], 2) + Math.pow(marioData.pos[2] - myMarioPos[2], 2))
        if (directDistance > 25 && distance < 100) { ///trigger hit
            const attackMsg = { id: marioData.socketID, attackTier, forceAir }
            sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify(attackMsg)), 2)
        }
    })*/
}

export const processDiveAttack = (myMarioPos, diveSpeed) => {
/*    if (diveSpeed > 25) {

        serverData.extraMarios.forEach(extraMario => {
            const distance = Math.sqrt(
                Math.pow(extraMario.pos[0] - myMarioPos[0], 2) +
                Math.pow(extraMario.pos[1] - myMarioPos[1], 2) +
                Math.pow(extraMario.pos[2] - myMarioPos[2], 2)
            )
            if (distance < 150) { ///trigger hit
                const diveHitMsg = { id: extraMario.socketID, upwardForce: 70 }
                sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify(diveHitMsg)), 4)
            }
        })
    }*/
}

export const processBreakdanceTrip = (myMarioPos) => {

/*    serverData.extraMarios.forEach(extraMario => {
        const distance = Math.sqrt(
            Math.pow(extraMario.pos[0] - myMarioPos[0], 2) +
            Math.pow(extraMario.pos[1] - myMarioPos[1], 2) +
            Math.pow(extraMario.pos[2] - myMarioPos[2], 2)
        )
        if (distance < 150) { ///trigger hit
            const tripMsg = { id: extraMario.socketID, upwardForce: 15 }
            sendDataWithOpcode(new TextEncoder("utf-8").encode(JSON.stringify(tripMsg)), 4)
        }
    })*/

}