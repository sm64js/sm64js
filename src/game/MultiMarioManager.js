import { MarioMsg, ControllerMsg, ValidSocketsMsg } from "../../proto/mario_pb"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "../socket"

const rawDataMap = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
}

const getMarioRawDataSubset = (fullRawData) => {
    return Object.values(rawDataMap).map(valueType => {
        return parseInt(fullRawData[valueType])
    })
}

const expandRawDataSubset = (subset) => {
    const rawData = new Array(0x50).fill(0)
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

    m.action = update.action
    m.prevAction = update.prevaction
    m.actionState = update.actionstate
    m.actionTimer = update.actiontimer
    m.actionArg = update.actionarg
    m.invincTimer = update.invincTimer
    m.framesSinceA = update.framessincea
    m.framesSinceB = update.framessinceb
    m.wallKickTimer = update.wallkicktimer
    m.doubleJumpTimer = update.doublejumptimer
    m.angleVel = update.anglevelList
    m.forwardVel = update.forwardvel
    m.vel = update.velList
    m.pos = update.posList
    m.faceAngle = update.faceangleList

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList)

    remotePlayer.marioUpdate = null

}


export const createMarioProtoMsg = () => {

    const m = gameData.marioState

    const mariomsg = new MarioMsg()

    mariomsg.setController(createControllerProtoMsg())

    mariomsg.setPlayername(window.myMario.playerName)
    mariomsg.setSkinid(window.myMario.skinID)

    mariomsg.setAction(m.action)
    mariomsg.setPrevaction(m.prevAction)
    mariomsg.setActionstate(m.actionState)
    mariomsg.setActiontimer(m.actionTimer)
    mariomsg.setActionarg(m.actionArg)
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

    mariomsg.setRawdataList(getMarioRawDataSubset(m.marioObj.rawData))
    mariomsg.setSocketid(networkData.mySocketID)

    return mariomsg.serializeBinary()
}

const initNewRemoteMarioState = (marioProto) => {

    const m = gameData.marioState

    const newMarioState = {
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
            torsoAngle: [0,0,0]
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
            rawData: expandRawDataSubset(marioProto.getRawdataList())
        },
        faceAngle: marioProto.getFaceangleList(),
        angleVel: marioProto.getAnglevelList(),
        pos: marioProto.getPosList(),
        vel: marioProto.getVelList(),
        action: marioProto.getAction()
    }

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

    controllermsg.setSocketid(networkData.mySocketID)

    return controllermsg
}

const applyController = (controllerProto) => {
    const id = controllerProto.getSocketid()
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
    const controllerProto = ControllerMsg.deserializeBinary(controllerbytes)
    applyController(controllerProto)
}

export const recvValidSockets = (validsocketsbytes) => {
    const validsockets = ValidSocketsMsg.deserializeBinary(validsocketsbytes).getValidsocketsList()

    Object.keys(networkData.remotePlayers).forEach(socketID => {
        if (!validsockets.includes(parseInt(socketID))) {
            delete networkData.remotePlayers[socketID]
        }
    })
    
}

export const recvMarioData = (mariolistbytes) => {

    const marioProto = MarioMsg.deserializeBinary(mariolistbytes)
    const id = marioProto.getSocketid()

    if (networkData.remotePlayers[id] == undefined) {
        networkData.remotePlayers[id] = { marioState: initNewRemoteMarioState(marioProto) }
        applyController(marioProto.getController())
    } else {
        updateRemoteMarioState(id, marioProto)
    }

}
