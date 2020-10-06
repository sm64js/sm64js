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
        string = string.replace(/:pogchamp:/g, "<img height='30' width='30' src=' data:image/png;base64,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' alt=':pogchamp:' />")
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
