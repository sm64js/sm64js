import geckos from '@geckos.io/client'
import * as Mario from "./game/Mario"
import { take_damage_and_knock_back, INTERACT_PLAYER } from "./game/Interaction"
import { oDamageOrCoinValue, oInteractType, oPosX, oPosZ, oPosY } from "./include/object_constants"
import * as Multi from "./game/MultiMarioManager"
import * as Cosmetics from "./cosmetics"

const channel = geckos({ port: 9301 })

function sanitizeChat(string) {
    string = string.replace(/</g, "");
    string = string.replace(/>/g, "");
    return string;
}

window.myMario = {
    playerName: "Unnamed Player",
    skinData: Cosmetics.defaultSkinData
}

export const networkData = {
    playerInteractions: true,
    remotePlayers: {},
    myChannelID: -1,
}

export const gameData = {}

const sendDataWithOpcode = (bytes, opcode) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    channel.raw.emit(newbytes)
}

const recvChat = (chatmsg) => {

    if (chatmsg.channel_id != networkData.myChannelID &&
        networkData.remotePlayers[chatmsg.channel_id] == undefined) return

    const chatlog = document.getElementById("chatlog")
    chatlog.innerHTML += '<strong>' + sanitizeChat(chatmsg.sender) + '</strong>: ' + sanitizeChat(chatmsg.msg) + '<br/>'
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight

    let someobject
    if (chatmsg.channel_id == networkData.myChannelID)
        someobject = window.myMario
    else
        someobject = networkData.remotePlayers[chatmsg.channel_id]

    Object.assign(someobject, { chatData: { msg: chatmsg.msg, timer: 80 } })

}

channel.onConnect((err) => {

    console.log("onConnect")

    if (err) { console.log(err); return }

    channel.readyState = 1

    channel.onRaw((message) => {
        const start = performance.now()
        const bytes = new Uint8Array(message)
        const opcode = bytes[0]
        const msgBytes = bytes.slice(1)
        switch (opcode) {
            case 0: if (multiplayerReady()) Multi.recvMarioData(msgBytes); break
            //case 2: recvBasicAttack(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            //case 3: if (multiplayerReady()) Multi.recvControllerUpdate(msgBytes); break
            //case 4: recvKnockUp(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
            case 8: Multi.recvValidPlayers(msgBytes); break
            case 99: channel.raw.emit(message); break  ///ping pong
            default: throw "unknown opcode"
        }
        const end = performance.now() - start
        //if (end > 100) console.log("Opcode: " + opcode + "  time: " + end +"ms  size: " + bytes.length)
    })

    channel.on('id', msg => { networkData.myChannelID = msg.id })
    channel.on('chat', msg => { recvChat(msg) })
    channel.on('skin', msg => { Cosmetics.recvSkinData(msg) })

    channel.onDisconnect(() => { channel.readyState = 0 })
})

const multiplayerReady = () => {
    return channel.readyState == 1 && gameData.marioState && networkData.myChannelID != -1
}

const updateConnectedMsg = () => {
    const elem = document.getElementById("connectedMsg")
    const numPlayers = networkData.numOnline ? networkData.numOnline : "?"
    if (channel.readyState == 1) {
        elem.innerHTML = "Connected To Server  -  " + (numPlayers).toString() + " Players Online" 
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

    if (frame % 30 == 0) updateConnectedMsg()

    if (frame % 150 == 0) { //every 5 seconds
        if (Cosmetics.validSkins()) {
            channel.emit('skin', window.myMario.skinData)
        }
    }

    if (multiplayerReady() && frame % 1 == 0) {
        sendDataWithOpcode(Multi.createMarioProtoMsg(), 0)
    }

    decrementChat()
}


const decrementChat = () => {
    Object.values(networkData.remotePlayers).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })

    const myChat = window.myMario.chatData
    if (myChat && myChat.timer > 0) myChat.timer--
}

export const sendChat = (msg) => {
    channel.emit('chat', msg, { reliable: true })
}
