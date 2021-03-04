import { MarioMsg, ControllerMsg, MarioListMsg } from "../../proto/mario_pb"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "./socket"
import { INTERACT_PLAYER } from "../game/Interaction"
import { gLinker } from "../game/Linker"
import { uint32, uint16, int16 } from "../utils"
import { AreaInstance as Area } from "../game/Area"
import { ACT_PARACHUTING, ACT_IDLE } from "../game/Mario"

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

export const updateRemoteMarioController = (controllerProto) => {

    const id = controllerProto.getSocketid()
    //applyController(controllerProto)

    if (networkData.remotePlayers[id] == undefined) return

    networkData.remotePlayers[id].controllerUpdateTimestamp = Date.now()

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

export const createAllMarioMsg = () => {

    const marioListMsg = new MarioListMsg()

    const marios = []

    Object.values(networkData.remotePlayers).forEach(remoteMario => {
        const mariomsg = new MarioMsg()

        mariomsg.setController(createControllerProtoMsg(remoteMario.marioState))

        mariomsg.setActionstate(uint16(remoteMario.marioState.actionState))
        mariomsg.setActiontimer(uint16(remoteMario.marioState.actionTimer))

        mariomsg.setAction(uint32(remoteMario.marioState.action))
        mariomsg.setPrevaction(uint32(remoteMario.marioState.prevAction))
        mariomsg.setActionarg(uint32(remoteMario.marioState.actionArg))
        mariomsg.setInvinctimer(int16(remoteMario.marioState.invincTimer))
        mariomsg.setWallkicktimer(uint32(remoteMario.marioState.wallKickTimer))
        mariomsg.setDoublejumptimer(uint32(remoteMario.marioState.doubleJumpTimer))
        mariomsg.setAnglevelList(remoteMario.marioState.angleVel)
        mariomsg.setForwardvel(remoteMario.marioState.forwardVel)
        mariomsg.setVelList(remoteMario.marioState.vel)
        mariomsg.setPosList(remoteMario.marioState.pos)
        mariomsg.setFaceangleList(remoteMario.marioState.faceAngle)
        mariomsg.setSocketid(remoteMario.marioState.socket_id)

        if (remoteMario.marioState.usedObj) {
            mariomsg.setUsedobjid(remoteMario.marioState.usedObj.rawData[RAW.oSyncID])
        }

        mariomsg.setRawdataList(getMarioRawDataSubset(remoteMario.marioState.marioObj.rawData))


        marios.push(mariomsg)

    })

    marioListMsg.setMarioList(marios)

    return marioListMsg

}

export const initNewRemoteMarioState = (socket_id) => {

    const m = gameData.marioState

    const newMarioState = {

        controller: { buttonDownStart: 0, buttonDownA: 0, buttonDownB: 0, buttonDownZ: 0, parachuteDown: 0 },

        socket_id,

        actionTimer: 0,
        actionState: 0,
        actionArg: 0,
        framesSinceA: 0xFF,
        framesSinceB: 0xFF,
        invincTimer: 0,
        flags: 17, //MARIO_CAP_ON_HEAD | MARIO_NORMAL_CAP
        forwardVel: 0,
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
            rawData: new Array(0x50).fill(0),
            bhvScript: { commands: gLinker.behaviors.bhvMario, index: 0 }
        },
        faceAngle: Area.gMarioSpawnInfo.startAngle,
        slideYaw: 0,
        angleVel: [0, 0, 0],
        pos: Area.gMarioSpawnInfo.startPos,
        vel: [0, 0, 0],
        action: Area.gMarioSpawnInfo.parachuteSpawn ? ACT_PARACHUTING : ACT_IDLE,
        prevAction: ACT_IDLE,
        wallKickTimer: 0,
        doubleJumpTimer: 0,
        ignoreUpdates: 0 /// this can probably be removed
    }

    newMarioState.marioObj.rawData[RAW.oInteractType] = INTERACT_PLAYER
    newMarioState.marioObj.rawData[RAW.oRoom] = -1

    newMarioState.marioObj.marioState = newMarioState
    newMarioState.marioObj.header.wrapperObject = newMarioState.marioObj
    newMarioState.marioObj.header.gfx.wrapperObjectNode = newMarioState.marioObj.header
    newMarioState.marioObj.header.gfx.node.wrapper = newMarioState.marioObj.header.gfx

    networkData.remotePlayers[socket_id] = {
        marioState: newMarioState,
        controllerUpdateTimestamp: Date.now(),
        crashCount: 0, /// crashCount and skipRender can probably be removed
        skipRender: 0,
    }
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
    buttonDown |= (m.controller.parachuteDown << 4)
    controllermsg.setButtondown(buttonDown)

    let buttonPressed = 0
    buttonPressed |= (m.controller.buttonPressedA << 0)
    buttonPressed |= (m.controller.buttonPressedB << 1)
    buttonPressed |= (m.controller.buttonPressedZ << 2)
    buttonPressed |= (m.controller.buttonPressedStart << 3)
    buttonPressed |= (m.controller.parachute << 4)
    controllermsg.setButtonpressed(buttonPressed)

    //controllermsg.setTaunt(m.controller.taunt)  //probably not needed... will get the new action

    controllermsg.setCamerayaw(m.controller.cameraYaw)

    return controllermsg
}

export const applyController = (controllerUpdate, marioState) => {

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
        parachuteDown: (buttonDown & 0x10) != 0,
        buttonPressedA: ((buttonDown & 0x1) != 0) && !m.controller.buttonDownA,
        buttonPressedB: ((buttonDown & 0x2) != 0) && !m.controller.buttonDownB,
        buttonPressedZ: ((buttonDown & 0x4) != 0) && !m.controller.buttonDownZ,
        buttonPressedStart: ((buttonDown & 0x8) != 0) && !m.controller.buttonDownStart,
        parachute: ((buttonDown & 0x10) != 0) && !m.controller.parachuteDown,
        cameraYaw: controllerUpdate.camerayaw,
        taunt: m.controller.taunt
    }

}

export const recvPlayerLists = () => {

    //// unrelated to the message it is recieving... just a taking the oppurtunity to check for AFK players
    Object.keys(networkData.remotePlayers).forEach(socket_id => {
        if (Date.now() - networkData.remotePlayers[socket_id].controllerUpdateTimestamp > 10000) {
            delete networkData.remotePlayers[socket_id]
        }
    })

}

