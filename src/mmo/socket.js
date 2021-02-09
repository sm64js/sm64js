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
    InitializationMsg,
    AccessCodeMsg,
    JoinGameMsg,
    RequestCosmeticsMsg
} from "../../proto/mario_pb"

import zlib from "zlib"
import * as Multi from "./MultiMarioManager"
import * as Cosmetics from "./cosmetics"
import { updateFlagData, setInitFlagHeight } from "../game/behaviors/bhv_castle_flag_init.inc"
import { recvChat, decrementChat } from "./chat"

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

const getGameIdFromURL = () => {
    if (url.searchParams.has("gameID")) return url.searchParams.get("gameID")
    else if (url.searchParams.has("state")) {
        const state = JSON.parse(decodeURIComponent(url.searchParams.get("state")))
        return state.gameID
    }

    //else undefined
}

const gameID = getGameIdFromURL() 
if (gameID) { document.getElementById("mapSelect").hidden = true }

const websocketServerPath = process.env.NODE_ENV === 'rust'
    ? `${url.protocol == "https:" ? "wss" : "ws"}://${window.location.host}/ws/` // Tarnadas - Rust Server
    : url.protocol == "https:" // Snuffy - sm64js.com
        ? `wss://server.sm64js.com/websocket/` // production
        : `ws://${url.hostname}:3000` // local testing

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

    if (url.searchParams.has('code')) {

        /// send access code to server
        const state = JSON.parse(decodeURIComponent(url.searchParams.get("state")))
        const accessCodeMsg = new AccessCodeMsg()
        accessCodeMsg.setAccessCode(url.searchParams.get('code'))
        accessCodeMsg.setType(state.type)
        const initializationMsg = new InitializationMsg()
        initializationMsg.setAccessCodeMsg(accessCodeMsg)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setInitializationMsg(initializationMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        sendData(rootMsg.serializeBinary())
    } else if (process.env.PRODUCTION == 0) {
        /// send access code to server
        const accessCodeMsg = new AccessCodeMsg()
        accessCodeMsg.setAccessCode("122345")
        accessCodeMsg.setType("discord")
        const initializationMsg = new InitializationMsg()
        initializationMsg.setAccessCodeMsg(accessCodeMsg)
        const sm64jsMsg = new Sm64JsMsg()
        sm64jsMsg.setInitializationMsg(initializationMsg)
        const rootMsg = new RootMsg()
        rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
        sendData(rootMsg.serializeBinary())
    }

    socket.onmessage = async (message) => {
        let sm64jsMsg
        let bytes = new Uint8Array(await message.data.arrayBuffer())
        const rootMsg = RootMsg.deserializeBinary(bytes)

        switch (rootMsg.getMessageCase()) {
            case RootMsg.MessageCase.UNCOMPRESSED_SM64JS_MSG:
                sm64jsMsg = rootMsg.getUncompressedSm64jsMsg()
                switch (sm64jsMsg.getMessageCase()) {
                    case Sm64JsMsg.MessageCase.PLAYER_LISTS_MSG:
                        Multi.recvPlayerLists(sm64jsMsg.getPlayerListsMsg())
                        break
                    case Sm64JsMsg.MessageCase.PING_MSG:
                        measureLatency(sm64jsMsg.getPingMsg())
                        break
                    case Sm64JsMsg.MessageCase.CHAT_MSG:
                        recvChat(sm64jsMsg.getChatMsg())
                        break
                    case Sm64JsMsg.MessageCase.SKIN_MSG:
                        Cosmetics.recvSkinData(sm64jsMsg.getSkinMsg())
                        break
                    case Sm64JsMsg.MessageCase.ANNOUNCEMENT_MSG:
                        recvAnnouncement(sm64jsMsg.getAnnouncementMsg())
                        break
                    case Sm64JsMsg.MessageCase.INITIALIZATION_MSG:
                        const initializationMsg = sm64jsMsg.getInitializationMsg()
                        switch (initializationMsg.getMessageCase()) {
                            case InitializationMsg.MessageCase.AUTHORIZED_USER_MSG:
                                recvAuthorizedUser(initializationMsg.getAuthorizedUserMsg()); break
                            case InitializationMsg.MessageCase.INIT_GAME_DATA_MSG:
                                Cosmetics.recvPlayerNameResponse(initializationMsg.getInitGameDataMsg()); break
                            default: throw "unknown case for initialization proto message"
                        }
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
            const initializationMsg = new InitializationMsg()
            initializationMsg.setRequestCosmeticsMsg(new RequestCosmeticsMsg())
            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setInitializationMsg(initializationMsg)
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

    const joinGameMsg = new JoinGameMsg()

    if (document.getElementById("customNameRow").hidden) { /// Discord Name Option
        joinGameMsg.setUseDiscordName(true)
    } else { // Custom Name Option
        joinGameMsg.setUseDiscordName(false)
        const name = document.getElementById("playerNameInput").value
        if (name.length >= 3) {
            joinGameMsg.setName(name)
        } else {
            return Cosmetics.shakePlayerNameInput()
        }
    }

    const level = gameID ? 0 : parseInt(document.getElementById("mapSelect").value)
    joinGameMsg.setLevel(level)
    if (gameID) { joinGameMsg.setGameId(gameID) }
    const initializationMsg = new InitializationMsg()
    initializationMsg.setJoinGameMsg(joinGameMsg)
    const sm64jsMsg = new Sm64JsMsg()
    sm64jsMsg.setInitializationMsg(initializationMsg)
    const rootMsg = new RootMsg()
    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    sendData(rootMsg.serializeBinary())

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

const redirect_uri = encodeURIComponent(url.protocol == "https:" ? 'https://sm64js.com' : 'http://localhost:9300')

const discord_client_id = process.env.DISCORD_CLIENT_ID
const discordOAuthURL = "https://discord.com/api/oauth2/authorize?client_id=" + discord_client_id + "&redirect_uri=" + redirect_uri + "&response_type=code&scope=identify"

const google_client_id = process.env.GOOGLE_CLIENT_ID + ".apps.googleusercontent.com"
const googleOAuthURL = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=" + google_client_id + "&redirect_uri=" + redirect_uri + "&scope=email" 

if (url.searchParams.has('code') || process.env.PRODUCTION == undefined) document.getElementById("signinButtons").hidden = true

document.getElementById("switchCustom").addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById("customNameRow").hidden = false
    document.getElementById("discordNameRow").hidden = true
})

document.getElementById("switchDiscord").addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById("customNameRow").hidden = true
    document.getElementById("discordNameRow").hidden = false
})

document.getElementById("discordSigninButton").addEventListener('click', () => {
    const state = { type: "discord" }
    if (gameID) state.gameID = gameID
    window.location = `${discordOAuthURL}&state=${ encodeURIComponent(JSON.stringify(state)) }`
})

document.getElementById("googleSigninButton").addEventListener('click', () => {
    const state = { type: "google" }
    if (gameID) state.gameID = gameID
    window.location = `${googleOAuthURL}&state=${encodeURIComponent(JSON.stringify(state))}`
})

const recvAuthorizedUser = (msg) => {
    if (msg.getStatus() == 1) {
        document.getElementById("playerNameRow").hidden = false
        document.getElementById("discordNameBox").value = msg.getUsername()
        if (msg.getUsername() == "") { /// Discord Username option not available
            document.getElementById("customNameRow").hidden = false
            document.getElementById("discordNameRow").hidden = true
            document.getElementById("switchDiscord").hidden = true
        }
    } else { //authorization fail - refresh page without access code
        document.getElementById("authFailMsg").innerHTML = "Authorization Fail: " + msg.getMessage()
        document.getElementById("authFailMsg").hidden = false
        if (msg.getStatus() == 2) { // refreshing won't help
        } else {
            document.getElementById("authFailMsg").innerHTML += `<br/> Please Try Again - Auto refreshing in 3 seconds`
            setTimeout(() => {
                let params = url.searchParams
                params.delete('code')
                window.location.search = params
            }, 3000)
        }
    }
}

