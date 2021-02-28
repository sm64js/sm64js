import { Sm64JsMsg, MarioMsg, ControllerListMsg, ControllerMsg, MarioListMsg } from "../../proto/mario_pb"
import zlib from "zlib"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "./socket"
import { INTERACT_PLAYER } from "../game/Interaction"
import { gLinker } from "../game/Linker"
import { uint32, uint16, int16 } from "../utils"
import { AreaInstance as Area } from "../game/Area"
import { ACT_PARACHUTING } from "../game/Mario"

const rawDataMap = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
    2: RAW.oIntangibleTimer,
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

export const updateRemoteMarioController = (controllerProto) => {

    const id = controllerProto.getSocketid()
    //applyController(controllerProto)

    if (networkData.remotePlayers[id] == undefined) return

    networkData.remotePlayers[id].controllerUpdateTimestamp = performance.now()

    const controllerUpdate = controllerProto.toObject() //marioProto.toObject()
    if (controllerUpdate.taunt && networkData.remotePlayers[id].marioState.controller.taunt == null)
        networkData.remotePlayers[id].marioState.controller.taunt = controllerUpdate.taunt

    /// other mario updates
    if (networkData.remotePlayers[id].controllerUpdate != null) {
        //// potentially overwiting data
        if (controllerUpdate.buttondown == networkData.remotePlayers[id].controllerUpdate.buttondown &&
            controllerUpdate.taunt == networkData.remotePlayers[id].controllerUpdate.taunt) {
            //// overwriting data but the buttons are the same
        } else {
            //// overwriting data and the buttons are not the same
            return 
        }
    }

    networkData.remotePlayers[id].controllerUpdate = controllerUpdate

}

export const copyMarioUpdateToState = (remotePlayer) => {
    const m = remotePlayer.marioState
    const update = remotePlayer.marioUpdate

    m.actionState = (m.action != update.action) ? 0 : update.actionstate
    m.actionTimer = (m.action != update.action) ? 0 : update.actiontimer

    m.action = update.action
    m.prevAction = update.prevaction
    m.actionArg = update.actionarg
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
    m.socket_id = update.socketid
    m.parachuting = update.parachuting

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
    m.marioObj.rawData[RAW.oRoom] = -1

    if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
        m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
    }

    remotePlayer.marioUpdate = null

}


export const createAllMarioMsg = () => {

    const marioListMsg = new MarioListMsg()

    //if (networkData.remotePlayers == undefined) return

    const marios = []

    Object.values(networkData.remotePlayers).forEach(remoteMario => {
        const mariomsg = new MarioMsg()

        mariomsg.setController(createControllerProtoMsg(remoteMario.marioState))

        const m = remoteMario.marioState

        mariomsg.setActionstate(uint16(remoteMario.marioState.actionState))
        mariomsg.setActiontimer(uint16(remoteMario.marioState.actionTimer))

        mariomsg.setAction(uint32(remoteMario.marioState.action))
        mariomsg.setPrevaction(uint32(remoteMario.marioState.prevAction))
        mariomsg.setActionarg(uint32(remoteMario.marioState.actionArg))
        mariomsg.setInvinctimer(int16(remoteMario.marioState.invincTimer))
        mariomsg.setFramessincea(uint32(remoteMario.marioState.framesSinceA))
        mariomsg.setFramessinceb(uint32(remoteMario.marioState.framesSinceB))
        mariomsg.setWallkicktimer(uint32(remoteMario.marioState.wallKickTimer))
        mariomsg.setDoublejumptimer(uint32(remoteMario.marioState.doubleJumpTimer))
        mariomsg.setAnglevelList(remoteMario.marioState.angleVel)
        mariomsg.setForwardvel(remoteMario.marioState.forwardVel)
        mariomsg.setVelList(remoteMario.marioState.vel)
        mariomsg.setPosList(remoteMario.marioState.pos)
        mariomsg.setFaceangleList(remoteMario.marioState.faceAngle)
        mariomsg.setSocketid(remoteMario.marioState.socket_id)
        mariomsg.setParachuting(remoteMario.marioState.parachuting)

        if (remoteMario.marioState.usedObj) {
            mariomsg.setUsedobjid(remoteMario.marioState.usedObj.rawData[RAW.oSyncID])
        }

        mariomsg.setRawdataList(getMarioRawDataSubset(remoteMario.marioState.marioObj.rawData))


        marios.push(mariomsg)

    })

    marioListMsg.setMarioList(marios)

    return marioListMsg

}

export const createMarioProtoMsg = () => {

    const m = gameData.marioState

    const mariomsg = new MarioMsg()

    mariomsg.setController(createControllerProtoMsg(m))

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
    mariomsg.setParachuting(m.parachuting)

    if (m.usedObj) mariomsg.setUsedobjid(m.usedObj.rawData[RAW.oSyncID])

    mariomsg.setRawdataList(getMarioRawDataSubset(m.marioObj.rawData))
    mariomsg.setSocketid(networkData.mySocketID)

    return mariomsg
}

const initNewRemoteMarioState = (marioProto) => {

    const m = gameData.marioState

    const newMarioState = {

        controller: { buttonDownStart: 0, buttonDownA: 0, buttonDownB: 0, buttonDownZ: 0 },

        socket_id: marioProto.getSocketid(),

        actionTimer: marioProto.getActiontimer(),
        actionState: marioProto.getActionstate(),
        actionArg: marioProto.getActionarg(),
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
                    unk18: m.marioObj.header.gfx.unk18,
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
            rawData: expandRawDataSubset(marioProto.getRawdataList()),
            bhvScript: { commands: gLinker.behaviors.bhvMario, index: 0 }
        },
        faceAngle: marioProto.getFaceangleList(),
        slideYaw: 0,
        angleVel: marioProto.getAnglevelList(),
        pos: marioProto.getPosList(),
        vel: marioProto.getVelList(),
        action: Area.gMarioSpawnInfo.parachuteSpawn ? ACT_PARACHUTING : ACT_IDLE,
        ignoreUpdates: 0
    }

    newMarioState.marioObj.rawData[RAW.oInteractType] = INTERACT_PLAYER
    newMarioState.marioObj.rawData[RAW.oRoom] = -1

    newMarioState.marioObj.marioState = newMarioState
    newMarioState.marioObj.header.wrapperObject = newMarioState.marioObj
    newMarioState.marioObj.header.gfx.wrapperObjectNode = newMarioState.marioObj.header
    newMarioState.marioObj.header.gfx.node.wrapper = newMarioState.marioObj.header.gfx

    return newMarioState
}

export const createControllerProtoMsg = (m) => {
    //const m = gameData.marioState
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

    controllermsg.setTaunt(m.controller.taunt)

    controllermsg.setCamerayaw(m.controller.cameraYaw)

    //controllermsg.setSocketid(networkData.mySocketID)

    return controllermsg
}

export const applyController = (controllerUpdate, marioState) => {
    //const id = controllerProto.getSocketid()
    //if (networkData.remotePlayers[id] == undefined) return
    const m = marioState
    const buttonDown = controllerUpdate.buttondown

    m.controller = {
        stickX: controllerUpdate.stickx,
        stickY: controllerUpdate.sticky,
        stickMag: controllerUpdate.stickmag,
        buttonDownA: (buttonDown & 0x1) != 0,
        buttonDownB: (buttonDown & 0x2) != 0,
        buttonDownZ: (buttonDown & 0x4) != 0,
        buttonDownStart: (buttonDown & 0x8) != 0,
        buttonPressedA: ((buttonDown & 0x1) != 0) && !m.controller.buttonDownA,
        buttonPressedB: ((buttonDown & 0x2) != 0) && !m.controller.buttonDownB,
        buttonPressedZ: ((buttonDown & 0x4) != 0) && !m.controller.buttonDownZ,
        buttonPressedStart: ((buttonDown & 0x8) != 0) && !m.controller.buttonDownStart,
        cameraYaw: controllerUpdate.camerayaw,
        taunt: m.controller.taunt
    }

}

export const recvPlayerLists = (playerListsProto) => {

    //// unrelated to the message it is recieving... just a taking the oppurtunity to check for AFK players
    Object.keys(networkData.remotePlayers).forEach(socket_id => {
        if (performance.now() - networkData.remotePlayers[socket_id].controllerUpdateTimestamp > 10000) {
            delete networkData.remotePlayers[socket_id]
        }
    })

}


export const recvMarioData = (marioProto) => {

    const id = marioProto.getSocketid()
    if (id == networkData.mySocketID) return

    if (networkData.remotePlayers[id] == undefined) {
        networkData.remotePlayers[id] = { 
            marioState: initNewRemoteMarioState(marioProto),
            crashCount: 0,
            skipRender: 0,
        }
    }

}
