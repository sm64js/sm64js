import geckos from '@geckos.io/client'
import * as Multi from "./game/MultiMarioManager"
import * as Cosmetics from "./cosmetics"

const url = new URL(window.location.href)
const port = url.protocol == "https:" ? 443 : 9208

const channel = geckos({ port })

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
    lastSentSkinData: {},
    pingMessageCount: 0
}

export const gameData = {}

const sendDataWithOpcode = (bytes, opcode) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)
    const newbytes = new Uint8Array(bytes.length + 1)
    newbytes.set([opcode], 0)
    newbytes.set(bytes, 1)
    channel.raw.emit(newbytes)
}

const measureAndPrintLatency = (msgBytes) => {
    const msg = JSON.parse(new TextDecoder("utf-8").decode(msgBytes))
    if (networkData.pingMessageCount != msg.count) return
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

channel.onConnect((err) => {

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
            case 99: measureAndPrintLatency(bytes.slice(1)); break
            default: throw "unknown opcode"
        }
        const end = performance.now() - start
        //if (end > 100) console.log("Opcode: " + opcode + "  time: " + end +"ms  size: " + bytes.length)
    })

    channel.on('id', msg => { networkData.myChannelID = msg.id })
    channel.on('chat', msg => { recvChat(msg) })
    channel.on('skin', msg => { Cosmetics.recvSkinData(msg) })

    channel.onDisconnect(() => { channel.readyState = 0; window.latency = null })
})

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

    if (frame % 150 == 0) { //every 5 seconds

        if (multiplayerReady()) {
            /// ping to measure latency
            networkData.pingMessageCount++
            const msg = new TextEncoder("utf-8").encode(JSON.stringify({ time: performance.now(), count: networkData.pingMessageCount }))
            sendDataWithOpcode(msg, 99)

            if (Cosmetics.validSkins()) {
                if (JSON.stringify(window.myMario.skinData) != networkData.lastSentSkinData) {
                    networkData.lastSentSkinData = JSON.stringify(window.myMario.skinData)
                    channel.emit('skin', window.myMario.skinData)
                }
            }
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
    channel.emit('chat', msg)
}

export const sendPlayerInteraction = (channel_id, interaction) => {
    //channel.emit('playerInteract', { channel_id, interaction }, { reliable: true })
}
