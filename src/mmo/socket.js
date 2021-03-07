import {
    RootMsg,
    Sm64JsMsg,
    GrabFlagMsg,
    AttackMsg,
    PingMsg,
    InitializationMsg,
    AccessCodeMsg,
    JoinGameMsg,
} from "../../proto/mario_pb"

import * as WebSocket from 'ws'

import zlib from "zlib"
import * as Multi from "./MultiMarioManager"
import { updateFlagData, setInitFlagHeight } from "../game/behaviors/bhv_castle_flag_init.inc"
import { setInterval } from "timers"

const globalStartTimestamp = Date.now()

const websocketServerPath = process.env.PRODUCTION == 1 ? `ws:mmo-server-test.web:3000` : `ws://localhost:3000`


const socket = new WebSocket(websocketServerPath)

export const networkData = {
    playerInteractions: true,
    gameMasterOutputModulo: process.env.GAME_MASTER_OUTPUT_MODULO ? process.env.GAME_MASTER_OUTPUT_MODULO : 1,
    remotePlayers: {},
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

const zip = (bytes) => {
    return new Promise(function (resolve, reject) {

        zlib.deflate(bytes, (err, buffer) => {
            if (err) {
                console.log("Error Zipping")
                reject(err)
            }
            resolve(buffer)
        })
    })
}


const measureLatency = (ping_proto) => {
    const startTime = ping_proto.getTime()
    const endTime = Date.now() - globalStartTimestamp
    //console.log(startTime, endTime)
    window.latency = endTime - startTime
    console.log("Latency to server: ", window.latency)
}

socket.onopen = () => {


    /// send access code to server
    const accessCodeMsg = new AccessCodeMsg()

    if (process.env.PRODUCTION == 1) {
        if (process.env.GAMEMASTER_KEY == undefined) throw "Error can't find game master key"
        accessCodeMsg.setAccessCode(process.env.GAMEMASTER_KEY)
    } else { //local testing
        accessCodeMsg.setAccessCode("master")
        accessCodeMsg.setType("discord")
    }

    const initializationMsg = new InitializationMsg()
    initializationMsg.setAccessCodeMsg(accessCodeMsg)
    const sm64jsMsg = new Sm64JsMsg()
    sm64jsMsg.setInitializationMsg(initializationMsg)
    const rootMsg = new RootMsg()
    rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
    sendData(rootMsg.serializeBinary())


    const checkAfk = setInterval(() => { Multi.checkForAfkPlayers() }, 1000)  // once per second

    socket.onmessage = async (message) => {
        let sm64jsMsg
        let bytes = new Uint8Array(message.data)
        const rootMsg = RootMsg.deserializeBinary(bytes)

        switch (rootMsg.getMessageCase()) {
            case RootMsg.MessageCase.UNCOMPRESSED_SM64JS_MSG:
                sm64jsMsg = rootMsg.getUncompressedSm64jsMsg()
                switch (sm64jsMsg.getMessageCase()) {
                    case Sm64JsMsg.MessageCase.CONTROLLER_MSG:
                        Multi.updateRemoteMarioController(sm64jsMsg.getControllerMsg()); break
                    case Sm64JsMsg.MessageCase.INIT_NEW_MARIO_STATE_MSG:
                        Multi.initNewRemoteMarioState(sm64jsMsg.getInitNewMarioStateMsg().getSocketId()); break
                    case Sm64JsMsg.MessageCase.PING_MSG:
                        measureLatency(sm64jsMsg.getPingMsg())
                        break
                    default: throw "unknown case for uncompressed proto message " + sm64jsMsg.getMessageCase()
                }
                break
            case RootMsg.MessageCase.COMPRESSED_SM64JS_MSG:
                break
            case RootMsg.MessageCase.MESSAGE_NOT_SET:
            default:
                throw new Error(`unhandled case in rootMsg switch expression: ${rootMsg.getMessageCase()}`)
        }
    }

    socket.onclose = () => { console.log("LOST connection to server") }
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

export const post_main_loop_one_iteration = async (frame) => {

	
    if (multiplayerReady()) {


        if (frame % 150 == 0) { //every 5 seconds
            /// ping to measure latency
            const sm64jsMsg = new Sm64JsMsg()
            const pingmsg = new PingMsg()
            pingmsg.setTime(Date.now() - globalStartTimestamp)
            sm64jsMsg.setPingMsg(pingmsg)
            const rootMsg = new RootMsg()
            rootMsg.setUncompressedSm64jsMsg(sm64jsMsg)
            sendData(rootMsg.serializeBinary())
        }


         /// every frame send ALL mario data
        if (frame % networkData.gameMasterOutputModulo == 0) {
            const sm64jsMsg = new Sm64JsMsg()
            sm64jsMsg.setGameDataMsg(Multi.createGameDataMsg())
            const bytes = sm64jsMsg.serializeBinary()
            const compressedBytes = await zip(Buffer.from(bytes))
            const rootMsg = new RootMsg()
            rootMsg.setCompressedSm64jsMsg(compressedBytes)
            sendData(rootMsg.serializeBinary())
        }

    }

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


