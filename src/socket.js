import {
    RootMsg,
    Sm64JsMsg,
    GrabFlagMsg,
    AttackMsg,
    PingMsg,
    ChatMsg,
    SkinMsg,
    SkinData,
    SkinValue,
    PlayerNameMsg,
    InitMsg
} from "../proto/mario_pb"
import zlib from "zlib"
import * as Multi from "./game/MultiMarioManager"
import * as Cosmetics from "./cosmetics"
import { updateFlagData, setInitFlagHeight } from "./game/behaviors/bhv_castle_flag_init.inc"
import { recvChat, decrementChat } from "./chat"
import { getSelectedLevel } from "./utils"

Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer

function myArrayBuffer() {
    return new Promise((resolve) => {
        let fr = new FileReader()
        fr.onload = () => {
            resolve(fr.result)
        }
        fr.readAsArrayBuffer(this)
    })
}

const url = new URL(window.location.href)

const websocketServerPath = process.env.NODE_ENV === 'production'
    ? `${url.protocol == "https:" ? "wss" : "ws"}://${window.location.host}/ws/`
    : url.protocol == "https:"
        ? `wss://server.sm64js.com/websocket/`
        : `ws://${url.hostname}:3000`

const socket = new WebSocket(websocketServerPath)

export const networkData = {
    playerInteractions: true,
    remotePlayers: {},
    mySocketID: -1,
    lastSentSkinData: {},
    announcement: { message: "", timer: 0 },
    flagData: undefined // defined later
}

export const gameData = {}

const sendData = (bytes) => { socket.send(bytes) }

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

const measureLatency = (ping_proto) => {
    const startTime = ping_proto.getTime()
    const endTime = performance.now()
    window.latency = parseInt(endTime - startTime)
}

socket.onopen = () => {

    socket.onmessage = async (message) => {
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
                    case Sm64JsMsg.MessageCase.PLAYER_LISTS_MSG:
                        Multi.recvPlayerLists(sm64jsMsg.getPlayerListsMsg())
                        break
                    case Sm64JsMsg.MessageCase.PING_MSG:
                        measureLatency(sm64jsMsg.getPingMsg())
                        break
                    case Sm64JsMsg.MessageCase.CONNECTED_MSG:
                        networkData.mySocketID = sm64jsMsg.getConnectedMsg().getSocketid()
                        break
                    case Sm64JsMsg.MessageCase.CHAT_MSG:
                        recvChat(sm64jsMsg.getChatMsg())
                        break
                    case Sm64JsMsg.MessageCase.SKIN_MSG:
                        Cosmetics.recvSkinData(sm64jsMsg.getSkinMsg())
                        break
                    case Sm64JsMsg.MessageCase.PLAYER_NAME_MSG:
                        Cosmetics.recvPlayerNameResponse(sm64jsMsg.getPlayerNameMsg())
                        break
                    case Sm64JsMsg.MessageCase.ANNOUNCEMENT_MSG:
                        recvAnnouncement(sm64jsMsg.getAnnouncementMsg())
                        break
                    default: throw "unknown case for uncompressed proto message " + sm64jsMsg.getMessageCase()
                }
                break
            case RootMsg.MessageCase.COMPRESSED_SM64JS_MSG:
                if (!multiplayerReady()) return
                const compressedBytes = rootMsg.getCompressedSm64jsMsg()
                const buffer = await unzip(compressedBytes)
                sm64jsMsg = Sm64JsMsg.deserializeBinary(buffer)
                const listMsg = sm64jsMsg.getListMsg()
                Multi.recvMarioData(listMsg.getMarioList())
                recvFlagList(listMsg.getFlagList())
                break
            case RootMsg.MessageCase.MESSAGE_NOT_SET:
            default:
                throw new Error(`unhandled case in rootMsg switch expression: ${rootMsg.getMessageCase()}`)
        }
    }

    socket.onclose = () => { window.latency = null }
}

const recvAnnouncement = (announcementMsg) => {
    networkData.announcement = {
        message: announcementMsg.getMessage(),
        timer: announcementMsg.getTimer()
    }
}

const recvFlagList = (flaglist) => {

    if (networkData.flagData == undefined) {
        networkData.flagData = new Array(flaglist.length).fill(0).map(() => {
            return {
                pos: [0, 0, 0],
                linkedToPlayer: false
            }
        })
    }

    flaglist.forEach((flag, i) => {
        networkData.flagData[i].pos = flag.getPosList()
        networkData.flagData[i].linkedToPlayer = flag.getLinkedtoplayer()
        networkData.flagData[i].socketId = flag.getSocketid()

        if (multiplayerReady()) {
            if (!networkData.flagData[i].initHeightSet) {
                setInitFlagHeight(flag.getHeightBeforeFall(), i)
                networkData.flagData[i].initHeightSet = true
            }
        }

    })

}

export const sendAttackToServer = (targetMarioID) => {

    for (let i = 0; i < networkData.flagData.length; i++) {
        const flagSocketId = networkData.flagData[i].socketId
        if (networkData.flagData[i].linkedToPlayer && flagSocketId == targetMarioID) {
            const attackMsg = new AttackMsg()
            attackMsg.setTargetSocketId(targetMarioID)
            attackMsg.setFlagId(i)

            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setAttackMsg(attackMsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            sendData(rootMsg.serializeBinary()) 
        }
    }

}


const multiplayerReady = () => {
    return socket && socket.readyState == 1 && gameData.marioState && networkData.mySocketID != -1
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

export const send_controller_update = (frame) => {
/*    if (multiplayerReady() && frame % 1 == 0) {
        sendDataWithOpcode(Multi.createControllerProtoMsg().serializeBinary(), 3)
    }*/
}

export const updateNetworkBeforeRender = () => {

    if (networkData.flagData == undefined) return

    for (let i = 0; i < networkData.flagData.length; i++) {
        const flagSocketId = networkData.flagData[i].socketId

        if (networkData.flagData[i].linkedToPlayer) { /// someone has the flag
            let newflagpos, angleForFlag
            if (flagSocketId == networkData.mySocketID) { /// I have the flag
                const m = gameData.marioState
                newflagpos = [...m.pos]
                angleForFlag = m.faceAngle[1]
            } else { /// someone else has the flag
                let socketData = networkData.remotePlayers[flagSocketId]
                if (socketData == undefined) return
                newflagpos = [...socketData.marioState.pos]
                angleForFlag = socketData.marioState.faceAngle[1]
            }
            newflagpos[1] += 150 // adjust so its above mario head
            networkData.flagData[i].pos = newflagpos
            updateFlagData(newflagpos, angleForFlag, i)
        } else updateFlagData(networkData.flagData[i].pos, 0, i) /// no one has the flag
    }

}

const toSkinValue = (data) => {
    if (Array.isArray(data)) {
        let bytes = 0;
        data.forEach((val, i) => {
            bytes += (val & 0xff) * Math.pow(2, 8 * i)
        })
        const skinValue = new SkinValue()
        skinValue.setBytes(bytes)
        return skinValue
    }

    if (data === "r") {
        const skinValue = new SkinValue()
        skinValue.setSpecial(SkinValue.SpecialSkinValues.RAINBOW)
        return skinValue
    }

    throw new Error(`Could not create skinValue from ${data}`)
}

export const post_main_loop_one_iteration = (frame) => {

	//Update the rainbows colors
	if (frame % 2 == 0) Cosmetics.updateRainbowSkin()
	
    if (frame % 30 == 0) updateConnectedMsg()

    if (multiplayerReady()) {

        if (!networkData.requestedInitData) {
            const sm64jsMsg = new Sm64JsMsg()
            const initMsg = new InitMsg()
            sm64jsMsg.setInitMsg(initMsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            sendData(rootMsg.serializeBinary())

            networkData.requestedInitData = true
        }

        if (frame % 150 == 0) { //every 5 seconds
            /// ping to measure latency
            const sm64jsMsg = new Sm64JsMsg()
            const pingmsg = new PingMsg()
            pingmsg.setTime(performance.now())
            sm64jsMsg.setPingMsg(pingmsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            sendData(rootMsg.serializeBinary())

            //send skins if updated
            if (Cosmetics.validSkins()) {
                if (JSON.stringify(window.myMario.skinData) !== networkData.lastSentSkinData) {
                    networkData.lastSentSkinData = JSON.stringify(window.myMario.skinData)
                    const skinData = window.myMario.skinData

                    const skinDataMsg = new SkinData()
                    skinDataMsg.setOveralls(toSkinValue(skinData.overalls))
                    skinDataMsg.setHat(toSkinValue(skinData.hat))
                    skinDataMsg.setShirt(toSkinValue(skinData.shirt))
                    skinDataMsg.setGloves(toSkinValue(skinData.gloves))
                    skinDataMsg.setBoots(toSkinValue(skinData.boots))
                    skinDataMsg.setSkin(toSkinValue(skinData.skin))
                    skinDataMsg.setHair(toSkinValue(skinData.hair))
                    skinDataMsg.setCustomcapstate(skinData.customCapState)
                    const skinMsg = new SkinMsg()
                    skinMsg.setSkindata(skinDataMsg)
                    const sm64jsMsg = new Sm64JsMsg()
                    sm64jsMsg.setSkinMsg(skinMsg)
                    const rootMsg = new RootMsg()
                    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            
                    socket.send(rootMsg.serializeBinary(), true)
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

    if (gameData.marioState && networkData.flagData != undefined) checkForFlagGrab()
}

const checkForFlagGrab = () => {

    //// check all flags to see if linked to local mario, and skip this function
    for (let i = 0; i < networkData.flagData.length; i++) {
        const flagSocketId = networkData.flagData[i].socketId
        if (networkData.flagData[i].linkedToPlayer && flagSocketId == networkData.mySocketID) return
    }

    const m = gameData.marioState

    for (let i = 0; i < networkData.flagData.length; i++) {
        if (!networkData.flagData[i].linkedToPlayer) {
            const xDiff = m.pos[0] - networkData.flagData[i].pos[0]
            const yDiff = Math.abs(m.pos[1] - networkData.flagData[i].pos[1])
            const zDiff = m.pos[2] - networkData.flagData[i].pos[2]

            const dist = Math.sqrt(xDiff * xDiff + zDiff * zDiff)

            if (dist < 50 && yDiff < 120) {
                const grabMsg = new GrabFlagMsg()
                grabMsg.setPosList([parseInt(m.pos[0]), parseInt(m.pos[1]), parseInt(m.pos[2])])
                grabMsg.setFlagId(i)

                const sm64jsMsg = new Sm64JsMsg()
                sm64jsMsg.setGrabMsg(grabMsg)
                const rootMsg = new RootMsg()
                rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
                sendData(rootMsg.serializeBinary())

            }
        }
    }
    
}

export const sendPlayerInteraction = (socket_id, interaction) => {
    //socket.emit('playerInteract', { socket_id, interaction }, { reliable: true })
}


export const submitPlayerName = () => {
    const level = getSelectedLevel()
    const name = document.getElementById("playerNameInput").value
    if (name.length >= 3) {
        const playerNameMsg = new PlayerNameMsg()
        playerNameMsg.setName(name)
        playerNameMsg.setLevel(level)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setPlayerNameMsg(playerNameMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        sendData(rootMsg.serializeBinary())
    } else {
        Cosmetics.shakePlayerNameInput()
    }
}

export const sendChat = ({ message }) => {

    const chatMsg = new ChatMsg()
    if (window.admin && window.admin.token) chatMsg.setAdmintoken(window.admin.token)
    chatMsg.setMessage(message)
    const sm64jsMsg = new Sm64JsMsg()
    sm64jsMsg.setChatMsg(chatMsg)
    const rootMsg = new RootMsg()
    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    sendData(rootMsg.serializeBinary())
}

