import { MarioMsg, MarioListMsg, ControllerListMsg, ControllerMsg, ValidPlayersMsg } from "../../proto/mario_pb"
import zlib from "zlib"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "../socket"
import { defaultSkinData } from "../cosmetics"
import { INTERACT_PLAYER } from "./Interaction"

const rawDataMap = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
    2: RAW.oIntangibleTimer
}

const getMarioRawDataSubset = (fullRawData) => {
    return Object.values(rawDataMap).map(valueType => {
        return parseInt(fullRawData[valueType])
    })
}

const expandRawDataSubset = (subset, currentRawData) => {
    const rawData = currentRawData ? currentRawData : new Array(0x50).fill(0)
    Object.entries(rawDataMap).forEach(([subsetIndex, rawDataIndex]) => {
        rawData[rawDataIndex] = subset[subsetIndex]
    })
    return rawData
}

const updateRemoteMarioState = (id, marioProto) => {

    const controllerProto = marioProto.getController()
    applyController(controllerProto)

    /// other mario updates
    networkData.remotePlayers[id].marioUpdate = marioProto.toObject()

}

export const copyMarioUpdateToState = (remotePlayer) => {
    const m = remotePlayer.marioState
    const update = remotePlayer.marioUpdate

    m.actionState = (m.action != update.action) ? 0 : update.actionstate
    m.actionTimer = (m.action != update.action) ? 0 : update.actiontimer

    m.action = update.action
    m.prevAction = update.prevaction
    m.actionArg = update.actionarg > 32767 ? update.actionarg - 65536 : update.actionarg
    m.invincTimer = update.invinctimer
    m.framesSinceA = update.framessincea
    m.framesSinceB = update.framessinceb
    m.wallKickTimer = update.wallkicktimer
    m.doubleJumpTimer = update.doublejumptimer
    m.angleVel = update.anglevelList
    m.forwardVel = update.forwardvel
    m.vel = update.velList
    m.pos = update.posList
    m.faceAngle = update.faceangleList
    m.channel_id = update.channelid
    m.playerName = update.playername

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)

    if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
        m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
    }

    remotePlayer.marioUpdate = null

}

export const createMarioProtoMsg = () => {

    const m = gameData.marioState

    const mariomsg = new MarioMsg()

    mariomsg.setController(createControllerProtoMsg())

    mariomsg.setPlayername(window.myMario.playerName)

    mariomsg.setAction(m.action)
    mariomsg.setPrevaction(m.prevAction)
    mariomsg.setActionstate(m.actionState)
    mariomsg.setActiontimer(m.actionTimer)
    mariomsg.setActionarg(m.actionArg < 0 ? 65536 - m.actionArg : m.actionArg)
    mariomsg.setInvinctimer(m.invincTimer)
    mariomsg.setFramessincea(m.framesSinceA)
    mariomsg.setFramessinceb(m.framesSinceB)
    mariomsg.setWallkicktimer(m.wallKickTimer)
    mariomsg.setDoublejumptimer(m.doubleJumpTimer)
    mariomsg.setFaceangleList(m.faceAngle)
    mariomsg.setAnglevelList(m.angleVel)
    mariomsg.setPosList(m.pos)
    mariomsg.setVelList(m.vel)
    mariomsg.setForwardvel(m.forwardVel)

    if (m.usedObj) mariomsg.setUsedobjid(m.usedObj.rawData[RAW.oSyncID])

    mariomsg.setRawdataList(getMarioRawDataSubset(m.marioObj.rawData))
    mariomsg.setChannelid(networkData.myChannelID)
    mariomsg.setPlayername(window.myMario.playerName)

    return mariomsg
}

const initNewRemoteMarioState = (marioProto) => {

    const m = gameData.marioState

    const newMarioState = {

        channel_id: marioProto.getChannelid(),
        playerName: marioProto.getPlayername(),

        actionTimer: marioProto.getActiontimer(),
        actionState: marioProto.getActionstate(),
        framesSinceA: 0xFF,
        framesSinceB: 0xFF,
        invincTimer: 0,
        flags: m.flags,
        forwardVel: marioProto.getForwardvel(),
        squishTimer: 0,
        hurtCounter: 0,
        healCounter: 0,
        capTimer: 0,
        quicksandDepth: 0.0,
        area: m.area,
        unkB0: 0xBD,
        statusForCamera: {},
        animation: {},
        marioBodyState: {
            action: 0, capState: 0, eyeState: 0, grabPos: 0,
            handState: 0, headAngle: [0, 0, 0], modelState: 0, punchState: 0,
            torsoAngle: [0,0,0], torsoPos: [0,0,0]
        },
        marioObj: {
            header: {
                gfx: {
                    angle: [0, 0, 0],
                    pos: [0, 0, 0],
                    scale: [1, 1, 1],
                    sharedChild: m.marioObj.header.gfx.sharedChild,
                    unk38: {
                        animID: -1, animFrame: 0,
                        animFrameAccelAssist: 0, animAccel: 0x10000,
                        animTimer: 0,
                        curAnim: 0,
                    },
                    node: {
                        children: [],
                        flags: 33,
                        type: 24
                    }
                }
            },
            remoteMario: true,
            hitboxDownOffset: 0,
            hitboxHeight: 160,
            hitboxRadius: 37,
            collidedObjs: [],
            rawData: expandRawDataSubset(marioProto.getRawdataList())
        },
        faceAngle: marioProto.getFaceangleList(),
        angleVel: marioProto.getAnglevelList(),
        pos: marioProto.getPosList(),
        vel: marioProto.getVelList(),
        action: marioProto.getAction(),
        ignoreUpdates: 0
    }

    newMarioState.marioObj.rawData[RAW.oInteractType] = INTERACT_PLAYER

    newMarioState.marioObj.marioState = newMarioState
    newMarioState.marioObj.header.wrapperObject = newMarioState.marioObj
    newMarioState.marioObj.header.gfx.wrapperObjectNode = newMarioState.marioObj.header
    newMarioState.marioObj.header.gfx.node.wrapper = newMarioState.marioObj.header.gfx

    return newMarioState
}

export const createControllerProtoMsg = () => {
    const m = gameData.marioState
    const controllermsg = new ControllerMsg()
    //// fill out controller msg
    controllermsg.setStickx(m.controller.stickX)
    controllermsg.setSticky(m.controller.stickY)
    controllermsg.setStickmag(m.controller.stickMag)
    let buttonDown = 0
    buttonDown |= (m.controller.buttonDownA << 0)
    buttonDown |= (m.controller.buttonDownB << 1)
    buttonDown |= (m.controller.buttonDownZ << 2)
    buttonDown |= (m.controller.buttonDownStart << 3)
    controllermsg.setButtondown(buttonDown)

    let buttonPressed = 0
    buttonPressed |= (m.controller.buttonPressedA << 0)
    buttonPressed |= (m.controller.buttonPressedB << 1)
    buttonPressed |= (m.controller.buttonPressedZ << 2)
    buttonPressed |= (m.controller.buttonPressedStart << 3)
    controllermsg.setButtonpressed(buttonPressed)

    controllermsg.setCamerayaw(m.area.camera.yaw)

    controllermsg.setChannelid(networkData.myChannelID)

    return controllermsg
}

const applyController = (controllerProto) => {
    const id = controllerProto.getChannelid()
    if (networkData.remotePlayers[id] == undefined) return
    const m = networkData.remotePlayers[id].marioState
    const buttonDown = controllerProto.getButtondown()
    const buttonPressed = controllerProto.getButtonpressed()
    m.controller = {
        stickX: controllerProto.getStickx(),
        stickY: controllerProto.getSticky(),
        stickMag: controllerProto.getStickmag(),
        buttonDownA: buttonDown & 0x1,
        buttonDownB: buttonDown & 0x2,
        buttonDownZ: buttonDown & 0x4,
        buttonDownStart: buttonDown & 0x8,
        buttonPressedA: buttonPressed & 0x1,
        buttonPressedB: buttonPressed & 0x2,
        buttonPressedZ: buttonPressed & 0x4,
        buttonPressedStart: buttonPressed & 0x8,
        cameraYaw: controllerProto.getCamerayaw()
    }
}

export const recvControllerUpdate = (controllerbytes) => {
    zlib.inflate(controllerbytes, (err, buffer) => {
        if (!err) {
            const controllerListProto = ControllerListMsg.deserializeBinary(buffer).getControllerList()
            controllerListProto.forEach(proto => {
                applyController(proto)
            })
        }
    })
}

export const recvValidPlayers = (validplayersproto) => {
    const validplayers = validplayersproto.getValidplayersList()

    networkData.numOnline = validplayers.length

    Object.keys(networkData.remotePlayers).forEach(channel_id => {
        if (!validplayers.includes(parseInt(channel_id))) {
            delete networkData.remotePlayers[channel_id]
        }
    })
}


export const recvMarioData = (marioList) => {
    marioList.forEach(marioProto => {
        const id = marioProto.getChannelid()
        if (id == networkData.myChannelID) return

        if (networkData.remotePlayers[id] == undefined) {
            networkData.remotePlayers[id] = { 
                marioState: initNewRemoteMarioState(marioProto),
                skinData: defaultSkinData(),
                crashCount: 0,
                skipRender: 0
            }
            applyController(marioProto.getController())
        } else {
            updateRemoteMarioState(id, marioProto)
        }
    })

}
