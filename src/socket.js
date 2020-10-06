import geckos from '@geckos.io/client'
import * as Mario from "./game/Mario"
import { take_damage_and_knock_back, INTERACT_PLAYER } from "./game/Interaction"
import { oDamageOrCoinValue, oInteractType, oPosX, oPosZ, oPosY } from "./include/object_constants"
import * as Multi from "./game/MultiMarioManager"
import * as Cosmetics from "./cosmetics"

const channel = geckos({ port: 9301 })

function sanitizeChat(string, isMessage) {
    string = string.replace(/</g, "");
    string = string.replace(/>/g, "");
    if(isMessage = true) {
        string = string.replace(/:pogchamp:/g, "<img height='30' width='30' src='data:image/png;base64,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' alt=':pogchamp:' />"
        // string.replace any other emotes in this fashion.
    }
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
    chatlog.innerHTML += '<strong>' + sanitizeChat(chatmsg.sender, false) + '</strong>: ' + sanitizeChat(chatmsg.msg, true) + '<br/>'
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
