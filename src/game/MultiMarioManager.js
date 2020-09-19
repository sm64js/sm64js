import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { MarioMsg, ControllerMsg } from "../../proto/mario_pb"
import * as RAW from "../include/object_constants"

const rawDataMap = {
    0: RAW.oIntangibleTimer,
    1: RAW.oPosX,
    2: RAW.oPosY,
    3: RAW.oPosZ,
    4: RAW.oMoveAnglePitch,
    5: RAW.oMoveAngleYaw,
    6: RAW.oMoveAngleRoll,
    7: RAW.oFaceAnglePitch,
    8: RAW.oFaceAngleYaw,
    9: RAW.oFaceAngleRoll,
    10: RAW.oFloorHeight,
    11: RAW.oVelX,
    12: RAW.oVelY,
    13: RAW.oVelZ,
    14: RAW.oMarioPoleYawVel,
    15: RAW.oMarioPolePos,
    16: RAW.oInteractStatus,
    17: RAW.oDamageOrCoinValue,
    18: RAW.oHealth
}

const getMarioRawDataSubset = (fullRawData) => {
    return Object.values(rawDataMap).map(valueType => {
        return fullRawData[valueType]
    })
}

export const createMarioProtoMsg = () => {

    const m = LevelUpdate.gMarioState[0]

    if (m.marioObj == undefined) return

    const mariomsg = new MarioMsg()

    const controllermsg = new ControllerMsg()
    //// fill out controller msg
    mariomsg.setController(controllermsg)

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
    mariomsg.setSlideyaw(m.slideYaw)
    mariomsg.setPosList(m.pos)
    mariomsg.setVelList(m.vel)
    mariomsg.setForwardvel(m.forwardVel)
    mariomsg.setSlidevelx(m.slideVelX)
    mariomsg.setSlidevely(m.slideVelY)

    mariomsg.setRawdataList(getMarioRawDataSubset(m.marioObj.rawData))

    return mariomsg

}
