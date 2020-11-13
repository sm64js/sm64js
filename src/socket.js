import { RootMsg, Sm64JsMsg  } from "../proto/mario_pb"
import zlib from "zlib"
import * as Multi from "./game/MultiMarioManager"
import * as Cosmetics from "./cosmetics"

const myArrayBuffer = () => {
    return new Promise((resolve) => {
        let fr = new FileReader()
        fr.onload = () => { resolve(fr.result) }
        fr.readAsArrayBuffer(this)
    })
}

File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer
Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer

const url = new URL(window.location.href)

let websocketServerPath = ""

if (url.protocol == "https:") {
    websocketServerPath = `wss://${url.hostname}/websocket/`
} else {
    websocketServerPath = `ws://${url.hostname}:3000`
}

const channel = new WebSocket(websocketServerPath)

const sanitizeChat = (string, isMessage) => {
    string = string.replace(/</g, "");
    // string = string.replace(/>/g, ""); // commented out for ">:(" and "> text", should still sanitize with only <
    if(isMessage = true) {
        string = string.replace(/:doublek:/g, "<img height='20' width='20' src='emotes/doublek.png' alt=':doublek:' />");
        string = string.replace(/:facepalm:/g, "<img height='20' width='20' src='emotes/facepalm.png' alt=':facepalm:' />");
        string = string.replace(/:kappa:/g, "<img height='20' width='20' src='emotes/kappa.png' alt=':kappa:' />");
        string = string.replace(/:mariostyle:/g, "<img height='20' width='20' src='emotes/mariostyle.gif' alt=':mariostyle:' />");
        string = string.replace(/:pogchamp:/g, "<img height='20' width='20' src='emotes/pogchamp.png' alt=':pogchamp:' />");
        string = string.replace(/:strange:/g, "<img height='20' width='20' src='emotes/strange.png' alt=':strange:' />");
        string = string.replace(/:kick:/g, "<img height='20' width='20' src='emotes/kick.gif' alt=':kick:' />");
        string = string.replace(/:shock:/g, "<img height='20' width='20' src='emotes/shock.gif' alt=':shock:' />");
        string = string.replace(/:bup:/g, "<img height='20' width='20' src='emotes/bup.jpg' alt=':bup:' />");
        // string.replace any other emotes in this fashion.
    }
    return string;
}

export const networkData = {
    playerInteractions: true,
    remotePlayers: {},
    myChannelID: -1,
    lastSentSkinData: {}
}

export const gameData = {}

const sendJsonWithTopic = (topic, msg) => {
    const str = JSON.stringify({ topic, msg })
    let bytes = text.encoder.encode(str)
    const rootMsg = new RootMsg()
    rootMsg.setJsonBytesMsg(bytes)
    channel.send(rootMsg.serializeBinary())
}

const sendData = (bytes) => { channel.send(bytes) }

const text = {
    decoder: new TextDecoder(),
    encoder: new TextEncoder()
}

const unzip = (bytes) => {
    return new Promise(function (resolve, reject) {

        zlib.inflate(bytes, (err, buffer) => {
            if (err) {
                console.log("Error Unzipping")
                reject(err)
            }
            resolve(buffer)
        })
    })
}


const measureLatency = (msg) => {
    const startTime = msg.time
    const endTime = performance.now()
    window.latency = parseInt(endTime - startTime)
}

const recvChat = (chatmsg) => {

    if (chatmsg.channel_id != networkData.myChannelID &&
        networkData.remotePlayers[chatmsg.channel_id] == undefined) return

    if (window.banPlayerList.includes(chatmsg.sender)) return

    const chatlog = document.getElementById("chatlog")
    const node = document.createElement("LI")                 // Create a <li> node
    node.innerHTML = '<strong>' + sanitizeChat(chatmsg.sender, false) + '</strong>: ' + sanitizeChat(chatmsg.msg, true) + '<br/>'        // Create a text node
    chatlog.appendChild(node)
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight

    let someobject
    if (chatmsg.channel_id == networkData.myChannelID)
        someobject = window.myMario
    else
        someobject = networkData.remotePlayers[chatmsg.channel_id]

    Object.assign(someobject, { chatData: { msg: chatmsg.msg, timer: 150 } })

}

channel.onopen = () => {

    channel.onmessage = async (message) => {
        let sm64jsMsg
        let bytes = new Uint8Array(await message.data.arrayBuffer())
        const rootMsg = RootMsg.deserializeBinary(bytes)

        switch (rootMsg.getMessageCase()) {
            case RootMsg.MessageCase.UNCOMPRESSED_SM64JS_MSG:
                sm64jsMsg = rootMsg.getUncompressedSm64jsMsg()
                switch (sm64jsMsg.getMessageCase()) {
                    //case 0: if (multiplayerReady()) Multi.recvMarioData(msgBytes); break
                    //case 2: recvBasicAttack(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
                    //case 3: if (multiplayerReady()) Multi.recvControllerUpdate(msgBytes); break
                    //case 4: recvKnockUp(JSON.parse(new TextDecoder("utf-8").decode(msgBytes))); break
                    case Sm64JsMsg.MessageCase.VALID_PLAYERS_MSG:
                        Multi.recvValidPlayers(sm64jsMsg.getValidPlayersMsg())
                        break
                    //case 99: measureAndPrintLatency(bytes.slice(1)); break
                    default: throw "unknown case for uncompressed proto message " + sm64jsMsg.getMessageCase()
                }
                break
            case RootMsg.MessageCase.COMPRESSED_SM64JS_MSG:
                if (!multiplayerReady()) return
                const compressedBytes = rootMsg.getCompressedSm64jsMsg()
                const buffer = await unzip(compressedBytes)
                sm64jsMsg = Sm64JsMsg.deserializeBinary(buffer)
                const listMsg = sm64jsMsg.getListMsg()
                const marioList = listMsg.getMarioList()
                Multi.recvMarioData(marioList)
                break
            case RootMsg.MessageCase.JSON_BYTES_MSG:
                const str = text.decoder.decode(rootMsg.getJsonBytesMsg())
                const { topic, msg } = JSON.parse(str)
                switch (topic) {
                    case 'id': networkData.myChannelID = msg.id; break
                    case 'chat': recvChat(msg); break
                    case 'skin': Cosmetics.recvSkinData(msg); break
                    case 'ping': measureLatency(msg); break
                    default: throw "Unknown topic in json message"
                }
                break
            case RootMsg.MessageCase.MESSAGE_NOT_SET:
            default:
                throw new Error(`unhandled case in rootMsg switch expression: ${rootMsg.getMessageCase()}`)
        }
    }

    channel.onclose = () => { window.latency = null }
}


const multiplayerReady = () => {
    return channel && channel.readyState == 1 && gameData.marioState && networkData.myChannelID != -1
}

const updateConnectedMsg = () => {
    const elem = document.getElementById("connectedMsg")
    const numPlayers = networkData.numOnline ? networkData.numOnline : "?"
    if (channel && channel.readyState == 1) {
        elem.innerHTML = "Connected To Server  -  " + (numPlayers).toString() + " Players Online" 
        elem.style.color = "lawngreen"
    } else {
        elem.innerHTML = "Not connected to server - Refresh the page"
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

    if (multiplayerReady()) {

        if (frame % 150 == 0) { //every 5 seconds
            /// ping to measure latency
            sendJsonWithTopic('ping', { time: performance.now() })

            //send skins if updated
            if (Cosmetics.validSkins()) {
                if (JSON.stringify(window.myMario.skinData) != networkData.lastSentSkinData) {
                    networkData.lastSentSkinData = JSON.stringify(window.myMario.skinData)
                    sendJsonWithTopic('skin', window.myMario.skinData)
                }
            }
        }

        if (frame % 1 == 0) { /// every frame send mario data
            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setMarioMsg(Multi.createMarioProtoMsg())
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            sendData(rootMsg.serializeBinary())
        }
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
    sendJsonWithTopic('chat', msg)
}

export const sendPlayerInteraction = (channel_id, interaction) => {
    //channel.emit('playerInteract', { channel_id, interaction }, { reliable: true })
}
