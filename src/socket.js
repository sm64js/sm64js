import * as Multi from "./game/MultiMarioManager"

const url = new URL(window.location.href)

const websocketServerPath = `ws://${url.hostname}:3000`
const socket = new WebSocket(websocketServerPath)

export const networkData = {
    playerInteractions: true,
    remotePlayers: {},
    myChannelID: -1,
    lastSentSkinData: {}
}

export const gameData = {}

const sendData = (bytes) => {
    if (bytes.length == undefined) bytes = Buffer.from(bytes)
    socket.send(bytes)
}

socket.onopen = () => {

    socket.onmessage = async (message) => {
        if (typeof message.data == "string") {
            networkData.myChannelID = JSON.parse(message.data).id
        } else if (typeof message.data == "object") {
            const bytes = new Uint8Array(await message.data.arrayBuffer())
            if (multiplayerReady()) Multi.recvMarioData(bytes)
        } else throw "unknown message"

    }

    socket.onclose = () => { }
}

const multiplayerReady = () => {
    return socket && socket.readyState == 1 && gameData.marioState && networkData.myChannelID != -1
}

const updateConnectedMsg = () => {
    const elem = document.getElementById("connectedMsg")
    const numPlayers = networkData.numOnline ? networkData.numOnline : "?"
    if (socket && socket.readyState == 1) {
        elem.innerHTML = "Connected To Server  -  " + (numPlayers).toString() + " Players Online" 
        elem.style.color = "lawngreen"
    } else {
        elem.innerHTML = "Not connected to server - Refresh the page"
        elem.style.color = "red"
    }
}

export const post_main_loop_one_iteration = (frame) => {

    if (frame % 30 == 0) updateConnectedMsg()

    if (multiplayerReady() && frame % 1 == 0) {
        sendData(Multi.createMarioProtoMsg())
    }

}

