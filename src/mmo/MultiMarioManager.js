import { Sm64JsMsg, MarioMsg, ControllerListMsg, ControllerMsg, ValidPlayersMsg } from "../../proto/mario_pb"
import zlib from "zlib"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "./socket"
import { defaultSkinData } from "./cosmetics"
import { INTERACT_PLAYER } from "../game/Interaction"
import { levelIdToName, distance3d } from "../utils"
import { gLinker } from "../game/Linker"
import { dist_between_objects, cur_obj_rotate_yaw_toward, approach_symmetric } from "../game/ObjectHelpers"
import { approach_number } from "../engine/math_util"

const url = new URL(window.location.href)

const rawDataMap = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
    2: RAW.oIntangibleTimer,
    3: RAW.oActiveParticleFlags
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
    //applyController(controllerProto, networkData.remotePlayers[id].marioState)  not sure if this should be applied

    /// other mario updates
    networkData.remotePlayers[id].marioUpdate = marioProto.toObject()

}

export const copyMarioUpdateToState = (m, update) => {
    //const m = remotePlayer.marioState
    //const update = remotePlayer.marioUpdate

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
    m.socket_id = update.socketid // should not be needed
    m.parachuting = update.parachuting

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
    m.marioObj.rawData[RAW.oRoom] = -1

    if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
        m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
    }

}

const constrainNumber = (number, max) => {
    if (number > max) number = max
    if (number < -max) number = -max
    return number
}

export const updateLocalMarioState = (m, update) => {

    const distance = distance3d(m.pos, update.posList)
    if (distance > 1500000.0) {
        console.log("full sync")

        m.actionState = update.actionstate
        m.actionTimer = update.actiontimer

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
        m.pos = update.posList
        m.vel = update.velList

        m.faceAngle = update.faceangleList
        m.socket_id = update.socketid  // should not be needed
        m.parachuting = update.parachuting

        m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
        m.marioObj.rawData[RAW.oRoom] = -1

        if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
            m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
        }
    } else {

        const replaceActionAndVel = document.getElementById("smartReplace").checked &&
            update.action != m.action && update.action != m.prevAction && update.prevAction != m.action && m.actionAge > 3

        const alwaysbox = document.getElementById("overrideAction").checked

        if (replaceActionAndVel || alwaysbox) {
            m.actionState = (m.action != update.action) ? 0 : update.actionstate
            m.actionTimer = (m.action != update.action) ? 0 : update.actiontimer

            m.angleVel = update.anglevelList
            m.forwardVel = update.forwardvel
            m.vel = update.velList
            m.faceAngle = update.faceangleList

            m.action = update.action
            m.prevAction = update.prevaction
            m.actionArg = update.actionarg

            m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
            m.marioObj.rawData[RAW.oRoom] = -1

            if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
                m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
            }

        }

        const smoothPercent = parseFloat(document.getElementById("smoothness").value)

        for (let i = 0; i < 3; i++) {
            let step = Math.abs(update.posList[i] - m.pos[i]) * smoothPercent
            if (step < 1) step = 1
            m.pos[i] = approach_number(m.pos[i], update.posList[i], step, step)
        }

        if (m.action == update.action) {
            m.angleVel = update.anglevelList
            m.forwardVel = update.forwardvel
            m.vel = update.velList
            m.faceAngle = update.faceangleList
        }

    }

}

export const updateLocalMarioState2 = (m, update) => {

    const distance = distance3d(m.pos, update.posList)
    if (distance > 1500.0) {
        console.log("full sync")
        m.pos = update.posList
        m.faceAngle = update.faceangleList
    } else {
        m.pos[0] += constrainNumber(update.posList[0] - m.pos[0], 8)
        m.pos[1] += constrainNumber(update.posList[1] - m.pos[1], 8)
        m.pos[2] += constrainNumber(update.posList[2] - m.pos[2], 8)
        m.faceAngle[1] = approach_symmetric(m.faceAngle[1], update.faceangleList[1], 10)

    }

    //m.vel[0] += constrainNumber(update.velList[0] - m.vel[0], 0.2)
    //m.vel[1] += constrainNumber(update.velList[1] - m.vel[1], 0.2)
    //m.vel[2] += constrainNumber(update.velList[2] - m.vel[2], 0.2)
    //m.forwardVel += constrainNumber(update.forwardvel - m.forwardVel, 0.2)

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
    //m.pos = update.posList
    //m.faceAngle = update.faceangleList
    m.socket_id = update.socketid // should not be needed
    m.parachuting = update.parachuting

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
    m.marioObj.rawData[RAW.oRoom] = -1

    if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
        m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
    }

}

export const createMarioProtoMsg = () => {

    const m = gameData.marioState

    const mariomsg = new MarioMsg()

    mariomsg.setController(createControllerProtoMsg())

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
        angleVel: marioProto.getAnglevelList(),
        pos: marioProto.getPosList(),
        vel: marioProto.getVelList(),
        action: marioProto.getAction(),
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

export const createControllerProtoMsg = () => {
    const m = gameData.marioState
    const controllermsg = new ControllerMsg()
    //// fill out controller msg
    controllermsg.setStickx(m.controller_to_server.stickX)
    controllermsg.setSticky(m.controller_to_server.stickY)
    controllermsg.setStickmag(m.controller_to_server.stickMag)
    let buttonDown = 0
    buttonDown |= (m.controller_to_server.buttonDownA << 0)
    buttonDown |= (m.controller_to_server.buttonDownB << 1)
    buttonDown |= (m.controller_to_server.buttonDownZ << 2)
    buttonDown |= (m.controller_to_server.buttonDownStart << 3)
    controllermsg.setButtondown(buttonDown)

    /*    let buttonPressed = 0
        buttonPressed |= (m.controller.buttonPressedA << 0)
        buttonPressed |= (m.controller.buttonPressedB << 1)
        buttonPressed |= (m.controller.buttonPressedZ << 2)
        buttonPressed |= (m.controller.buttonPressedStart << 3)
        controllermsg.setButtonpressed(buttonPressed)*/

    controllermsg.setTaunt(m.controller_to_server.taunt)

    controllermsg.setCamerayaw(m.area.camera.yaw)

    controllermsg.setSocketid(networkData.mySocketID)

    /// set the local update, but also send to server
    m.localControllerUpdate = controllermsg.toObject()

    return controllermsg
}

export const applyController = (controllerUpdate, marioState) => {

    if (controllerUpdate == undefined) return

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
        taunt: controllerUpdate.taunt
    }

}

/*export const recvControllerUpdate = (controllerbytes) => {
    zlib.inflate(controllerbytes, (err, buffer) => {
        if (!err) {
            const controllerListProto = ControllerListMsg.deserializeBinary(buffer).getControllerList()
            controllerListProto.forEach(proto => {
                applyController(proto)
            })
        }
    })
}*/

export const recvPlayerLists = (playerListsProto) => {

    const rooms = playerListsProto.getGameList()

    if (window.playerNameAccepted) { // joined a game

        if (rooms.length != 1) {
            console.log("ignoring data ", rooms.length)
            return
        }

        const roomProto = rooms[0]
        const level = roomProto.getLevelId() 
        if (level != window.selectedMap) throw "error valid player list level does not match loaded level"
        const validplayers = roomProto.getValidplayersList()
        networkData.numOnline = validplayers.length

/*        Object.keys(networkData.remotePlayers).forEach(socket_id => {
            if (!validplayers.includes(parseInt(socket_id))) {
                delete networkData.remotePlayers[socket_id]
            }
        })*/

    } else { /// still in a lobby

        rooms.forEach(roomProto => {
            const roomKey = roomProto.getLevelId()

            const mapSelecter = document.getElementById("mapSelect")

            for (let i = 0; i < mapSelecter.length; i++) {
                if (mapSelecter[i].value == roomKey) {
                    mapSelecter[i].innerHTML =
                        `<p style="color:blue">${levelIdToName[roomKey]}</p> 
                     <p style="color:blue"> - Online Players: ${roomProto.getValidplayersList().length}</p>`

                }
            }
        })

    }

}


export const recvMarioData = (marioList) => {
    marioList.forEach(marioProto => {
        const id = marioProto.getSocketid()
        if (id == networkData.mySocketID) {  /// local mario
            //const controllerProto = marioProto.getController()
            //applyController(controllerProto)

            networkData.yourMarioUpdate = marioProto.toObject()
            return
        }

        if (networkData.remotePlayers[id] == undefined) { /// init remote mario
            networkData.remotePlayers[id] = { 
                marioState: initNewRemoteMarioState(marioProto),
                skinData: defaultSkinData(),
                crashCount: 0,
                skipRender: 0
            }
        } else {
            const controllerProto = marioProto.getController()
            if (controllerProto) applyController(controllerProto, networkData.remotePlayers[id].marioState)

            networkData.remotePlayers[id].marioUpdate = marioProto.toObject()
            //updateRemoteMarioState(id, marioProto)
        }
    })


}
