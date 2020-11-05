import { Sm64JsMsg } from "../proto/mario_pb"
import * as Multi from "./game/MultiMarioManager"
import zlib from "zlib"

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
        const bytes = new Uint8Array(await message.data.arrayBuffer())
        // zlib.inflate(bytes, (err, buffer) => {
            // if (err) {
            //     console.error(err)
            //     return
            // }
            const sm64jsMsg = Sm64JsMsg.deserializeBinary(bytes)
            switch (sm64jsMsg.getMessageCase()) {
                case Sm64JsMsg.MessageCase.LIST_MSG:            
                    if (!multiplayerReady()) return
                    const listMsg = sm64jsMsg.getListMsg()
                    const marioList = listMsg.getMarioList()
                    Multi.recvMarioData(marioList)
                    break;
                case Sm64JsMsg.MessageCase.CONNECTED_MSG:
                    const connectedMsg = sm64jsMsg.getConnectedMsg()
                    const channelID = connectedMsg.getChannelid()
                    console.log('CONNECTED_MSG', channelID)
                    networkData.myChannelID = channelID
                    break;
                case Sm64JsMsg.MessageCase.MESSAGE_NOT_SET:
                default:
                    throw new Error(`unhandled case in switch expression: ${sm64jsMsg.getMessageCase()}`)
            }
        // })
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

