import {  ControllerMsg } from "../../proto/mario_pb"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "./socket"
import { defaultSkinData } from "./cosmetics"
import { INTERACT_PLAYER } from "../game/Interaction"
import { levelIdToName } from "../utils"
import { gLinker } from "../game/Linker"
import { spawn_object_abs_with_rot, obj_mark_for_deletion } from "../game/ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "../game/ObjectListProcessor"
import { MODEL_GOOMBA } from "../include/model_ids"


///Object Types
export const NETWORK_OBJ_GOOMBA = 0

const sharedNetObjFields = {
    0: RAW.oPosX,
    1: RAW.oPosY,
    2: RAW.oPosZ,
    3: RAW.oFaceAnglePitch,
    4: RAW.oFaceAngleYaw,
    5: RAW.oFaceAngleRoll
}

const networkObjectInfo = {}

const networkObjectInfoInit = () => {
    networkObjectInfo[NETWORK_OBJ_GOOMBA] = {
        model: MODEL_GOOMBA, behavior: gLinker.behaviors.bhvGoomba,
        fields: { 0: RAW.oAction, 1: RAW.oGoombaTurningAwayFromWall, 2: RAW.oGoombaWalkTimer, 3: RAW.oVelY, 4: RAW.oForwardVel, 5: RAW.oMoveAngleYaw, 6: RAW.oGoombaTargetYaw, 7: RAW.oInteractStatus }
    }
}

const marioRawDataFields = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
    2: RAW.oIntangibleTimer,
}


const expandRawDataSubset = (subset, currentRawData, fieldsMap) => {
    const rawData = currentRawData ? currentRawData : new Array(0x50).fill(0)
    Object.entries(fieldsMap).forEach(([subsetIndex, rawDataIndex]) => {
        rawData[rawDataIndex] = subset[subsetIndex]
    })
    return rawData
}

export const recvGameObjects = (objects) => {

    const valid_ids = []

    objects.forEach(objectProto => {
        const object = objectProto.toObject()

        const objInfo = networkObjectInfo[object.type]

        const sharedFields = object.sharedFieldsList
        const uniqueFields = object.uniqueFieldsList

        const o = gameData.dynamicNetworkObjects[object.id]

        valid_ids.push(object.id)

        if (o == undefined || o.activeFlags == 0) { //has not been spawned or is deleted

            const pos = [sharedFields[0], sharedFields[1], sharedFields[2]]
            const angle = [sharedFields[3], sharedFields[4], sharedFields[5]]

            const o = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent, objInfo.model, objInfo.behavior, pos[0], pos[1] + 20, pos[2], angle[0], angle[1], angle[2])
            o.parentObj = o
            o.networkObjType = object.type
            o.rawData[RAW.oSyncID] = object.id
            gameData.dynamicNetworkObjects[object.id] = o

            o.rawData = expandRawDataSubset(sharedFields, o.rawData, sharedNetObjFields)
            o.rawData = expandRawDataSubset(uniqueFields, o.rawData, objInfo.fields)

        } else {

            o.rawData = expandRawDataSubset(sharedFields, o.rawData, sharedNetObjFields)
            o.rawData = expandRawDataSubset(uniqueFields, o.rawData, objInfo.fields)

            if (object.attackerId && networkData.remotePlayers[object.attackerId]) {
                o.attackerObj = networkData.remotePlayers[object.attackerId].marioState.marioObj
            }

        }
       
    })

    Object.values(gameData.dynamicNetworkObjects).forEach(o => {
        if (!valid_ids.includes(o.rawData[RAW.oSyncID])) {
            obj_mark_for_deletion(o)
            delete gameData.dynamicNetworkObjects[o.rawData[RAW.oSyncID]]
        }
    })

}

export const copyMarioUpdateToState = (m, update) => {

    if (m.ignoreUpdates) return

    m.actionState = (m.action != update.action) ? 0 : update.actionstate
    m.actionTimer = (m.action != update.action) ? 0 : update.actiontimer

    m.action = update.action
    m.prevAction = update.prevaction
    m.actionArg = update.actionarg
    m.invincTimer = update.invinctimer
    m.wallKickTimer = update.wallkicktimer
    m.doubleJumpTimer = update.doublejumptimer
    m.angleVel = update.anglevelList
    m.forwardVel = update.forwardvel
    m.vel = update.velList
    m.pos = update.posList
    m.faceAngle = update.faceangleList
    m.socket_id = update.socketid // should not be needed

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData, marioRawDataFields)
    m.marioObj.rawData[RAW.oRoom] = -1

    if (update.usedobjid >= 1000 && update.usedobjid < 2000) {
        m.usedObj = gameData.staticNetworkObjects[update.usedobjid]
    } else if (update.usedobjid != undefined) {

    }

}

const initNewRemoteMarioState = (marioProto) => {

    const m = gameData.marioState

    const newMarioState = {

        controller: { buttonDownStart: 0, buttonDownA: 0, buttonDownB: 0, buttonDownZ: 0, parachuteDown: 0 },

        socket_id: marioProto.getSocketid(),

        actionTimer: marioProto.getActiontimer(),
        actionState: marioProto.getActionstate(),
        actionArg: marioProto.getActionarg(),
        invincTimer: 0,
        flags: 17, //MARIO_CAP_ON_HEAD | MARIO_NORMAL_CAP
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
            hurtboxRadius: 0,
            collidedObjs: [],
            rawData: new Array(0x50).fill(0),
            bhvScript: { commands: gLinker.behaviors.bhvMario, index: 0 }
        },
        faceAngle: marioProto.getFaceangleList(),
        slideYaw: 0,
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
    buttonDown |= (m.controller_to_server.parachuteDown << 4)

    controllermsg.setButtondown(buttonDown)

    controllermsg.setTaunt(m.controller_to_server.taunt)

    controllermsg.setCamerayaw(m.area.camera.yaw)

    controllermsg.setSocketid(networkData.mySocketID)

    return controllermsg
}

const applyController = (controllerProto, marioState) => {
    const m = marioState
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
        parachuteDown: buttonDown & 0x10,
        buttonPressedA: buttonPressed & 0x1,
        buttonPressedB: buttonPressed & 0x2,
        buttonPressedZ: buttonPressed & 0x4,
        buttonPressedStart: buttonPressed & 0x8,
        parachute: buttonPressed & 0x10,
        cameraYaw: controllerProto.getCamerayaw()
    }

}


export const recvPlayerLists = (playerListsProto) => {

    const rooms = playerListsProto.getGameList()

    if (window.playerNameAccepted) { // joined a game


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
    networkData.numOnline = marioList.length

    const valid_player_ids = []

    marioList.forEach(marioProto => {
        const id = marioProto.getSocketid()
        valid_player_ids.push(id)

        if (networkData.remotePlayers[id] == undefined) {  /// not defined local not linkes, or remote not created

            if (id == networkData.mySocketID) {  /// is the local mario, time to link it
                networkObjectInfoInit()
                copyMarioUpdateToState(gameData.marioState, marioProto.toObject())
                gameData.marioState.marioObj.remoteMario = true /// remote and local are not mutually exclusive this mario is now both remote and local
                networkData.remotePlayers[id] = {
                    marioState: gameData.marioState, skinData: defaultSkinData(), crashCount: 0, skipRender: 0
                }
            } else { /// init new remote mario
                networkData.remotePlayers[id] = {
                    marioState: initNewRemoteMarioState(marioProto),
                    skinData: defaultSkinData(),
                    crashCount: 0,
                    skipRender: 0
                }
            }
        } else { /// already defined/initialized, update data
            const controllerProto = marioProto.getController()
            if (controllerProto) applyController(controllerProto, networkData.remotePlayers[id].marioState)
            networkData.remotePlayers[id].marioUpdate = marioProto.toObject()
        }
    })

    

    Object.keys(networkData.remotePlayers).forEach(socket_id => {
        if (!valid_player_ids.includes(parseInt(socket_id))) {
            delete networkData.remotePlayers[socket_id]
        }
    })


}
