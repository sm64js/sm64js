import geckos from '@geckos.io/client'
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

const channel = geckos()


window.myMario = {
    skinID: 0,
    playerName: "Unnamed Player"
}

export const networkData = {
    remotePlayers: {},
    mySocketID: -1,
}

export const gameData = {}

const sendDataWithOpcode = (bytes, opcode) => {
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    channel.raw.emit(newbytes)
}


const recvMyID = (msg) => { networkData.mySocketID = msg.id }

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


channel.onConnect(() => {

    channel.readyState = 1

    channel.onRaw((message) => {
        const start = performance.now()
        const bytes = new Uint8Array(message)
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
            case 99: sendDataWithOpcode(message, 99); break  ///ping pong
            default: throw "unknown websocket opcode"
        }
        const end = performance.now() - start
        //if (end > 100) console.log("Opcode: " + opcode + "  time: " + end +"ms  size: " + bytes.length)
    })

    channel.onDisconnect(() => { channel.readyState = 0 })
})

const multiplayerReady = () => {
    return channel.readyState == 1 && gameData.marioState && networkData.mySocketID != -1
}

const updateConnectedMsg = () => {
    const elem = document.getElementById("connectedMsg")
    if (channel.readyState == 1) {
        elem.innerHTML = "Connected To Server"
        elem.style.color = "lawngreen"
    } else {
        elem.innerHTML = "Not connected to server - try refreshing - or server is down"
        elem.style.color = "red"
    }
}

export const send_controller_update = (frame) => {
/*    if (multiplayerReady() && frame % 1 == 0) {
        sendDataWithOpcode(Multi.createControllerProtoMsg().serializeBinary(), 3)
    }*/
}

export const post_main_loop_one_iteration = (frame) => {

    updateConnectedMsg()

    if (multiplayerReady() && frame % 1 == 0) {
        sendDataWithOpcode(Multi.createMarioProtoMsg(), 0)
    }

    Object.values(networkData.remotePlayers).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })
}


export const getExtraRenderData = (socketID) => {

    if (socketID == networkData.mySocketID) return { skinID: window.myMario.skinID }

    const remotePlayer = networkData.remotePlayers[socketID].marioState
    return {
        skinID: remotePlayer.skinID,
        playerName: remotePlayer.playerName
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