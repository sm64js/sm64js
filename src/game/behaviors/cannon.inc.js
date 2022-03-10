// cannon.c.inc
import { ObjectListProcessorInstance as O } from "../ObjectListProcessor"
import * as OC from "../../include/object_constants"

// import { oPosX,
//          oPosY,
//          oPosZ,
//          oVelY,
//          oFaceAnglePitch,
//          oMoveAngleYaw,
//          oMoveAnglePitch,
//          oHomeX,
//          oHomeY,
//          oHomeZ,
//          oAction,
//          oTimer,
//          oDistanceToMario,
//          oInteractStatus,
//          oBehParams2ndByte,
//          oCannonUnk10C,
//          oCannonUnkF4,
//          oCannonUnkF8                  } from "../../include/object_constants"
import { INT_STATUS_TOUCHED_BOB_OMB,
         INT_STATUS_INTERACTED         } from "../Interaction"
import { obj_copy_pos,
         cur_obj_call_action_function,
         cur_obj_enable_rendering,
         cur_obj_disable_rendering,
         cur_obj_become_tangible,
         cur_obj_become_intangible     } from "../ObjectHelpers"
import { s16,
         random_float,
         sins                          } from "../../utils"
import { cur_obj_play_sound_2          } from "../SpawnSound"
import { SOUND_OBJ_CANNON1,
         SOUND_OBJ_CANNON2,
         SOUND_OBJ_CANNON3             } from "../../include/sounds"
import { GRAPH_RENDER_ACTIVE           } from "../../engine/graph_node"


export const bhv_cannon_base_unused_loop = () => {
    const o = O.gCurrentObject
    o.rawData[OC.oPosY] += o.rawData[OC.oVelY]
}

const opened_cannon_act_0 = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] == 0) {
        o.rawData[OC.oInteractStatus] = 0
        o.rawData[OC.oPosX] = o.rawData[OC.oHomeX]
        o.rawData[OC.oPosY] = o.rawData[OC.oHomeY]
        o.rawData[OC.oPosZ] = o.rawData[OC.oHomeZ]
        o.rawData[OC.oMoveAnglePitch] = 0
        o.rawData[OC.oMoveAngleYaw] = s16(o.rawData[OC.oBehParams2ndByte] << 8)
        o.rawData[OC.oCannonUnkF4] = 0
        o.rawData[OC.oCannonUnk10C] = 0
        cur_obj_enable_rendering()
        cur_obj_become_tangible()
    }
    if (o.rawData[OC.oDistanceToMario] < 500.0) {
        cur_obj_become_tangible()
        cur_obj_enable_rendering()
        if (o.rawData[OC.oInteractStatus] & INT_STATUS_INTERACTED
            && (!(o.rawData[OC.oInteractStatus]
                  & INT_STATUS_TOUCHED_BOB_OMB))) // bob-omb explodes when it gets into a cannon
        {
            o.rawData[OC.oAction] = 4
            o.rawData[OC.oCannonUnk10C] = 1
            o.rawData[OC.oCannonUnkF8] = 1
        } else {
            o.rawData[OC.oInteractStatus] = 0
        }
    } else {
        cur_obj_become_intangible()
        // cur_obj_disable_rendering()
        o.rawData[OC.oCannonUnk10C] = 0
    }
}

const opened_cannon_act_4 = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] == 0) {
        cur_obj_play_sound_2(SOUND_OBJ_CANNON1)
    }
    o.rawData[OC.oPosY] += 5.0
    o.rawData[OC.oPosX] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 2
    o.rawData[OC.oPosZ] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 2
    if (o.rawData[OC.oTimer] > 67) {
        o.rawData[OC.oPosX] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 4
        o.rawData[OC.oPosZ] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 4
        o.rawData[OC.oAction] = 6
    }
}

const opened_cannon_act_6 = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] == 0)
        cur_obj_play_sound_2(SOUND_OBJ_CANNON2)
    if (o.rawData[OC.oTimer] < 4) {
        o.rawData[OC.oPosX] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 4.0
        o.rawData[OC.oPosZ] += ((o.rawData[OC.oTimer] / 2 & 1) - 0.5) * 4.0
    } else {
        if (o.rawData[OC.oTimer] < 6) {
        } else {
            if (o.rawData[OC.oTimer] < 22) {
                o.rawData[OC.oMoveAngleYaw] =
                    s16(sins(o.rawData[OC.oCannonUnkF4]) * 0x4000 + s16(o.rawData[OC.oBehParams2ndByte] << 8))
                o.rawData[OC.oCannonUnkF4] = s16(o.rawData[OC.oCannonUnkF4] + 0x400)
            } else if (o.rawData[OC.oTimer] < 26) {
            } else {
                o.rawData[OC.oCannonUnkF4] = 0
                o.rawData[OC.oAction] = 5
            }
        }
    }
}

const opened_cannon_act_5 = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] == 0)
        cur_obj_play_sound_2(SOUND_OBJ_CANNON3)
    if (o.rawData[OC.oTimer] < 4) {
    } else {
        if (o.rawData[OC.oTimer] < 20) {
            o.rawData[OC.oCannonUnkF4] = s16(o.rawData[OC.oCannonUnkF4] + 0x400)
            o.rawData[OC.oMoveAnglePitch] = s16(sins(o.rawData[OC.oCannonUnkF4]) * 0x2000)
        } else if (o.rawData[OC.oTimer] < 25) {
        } else
            o.rawData[OC.oAction] = 1
    }
}

const opened_cannon_act_1 = () => {
    const o = O.gCurrentObject
    cur_obj_become_intangible()
    // cur_obj_disable_rendering()
    o.rawData[OC.oCannonUnk10C] = 0
    O.gMarioShotFromCannon = 1
}

const opened_cannon_act_2 = () => {
    const o = O.gCurrentObject
    o.rawData[OC.oAction] = 3
}

const opened_cannon_act_3 = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] > 3) {
        o.rawData[OC.oAction] = 0
    }
}

const sOpenedCannonActions = [ opened_cannon_act_0, opened_cannon_act_1, opened_cannon_act_2,
                               opened_cannon_act_3, opened_cannon_act_4, opened_cannon_act_5,
                               opened_cannon_act_6 ]

export const bhv_cannon_base_loop = () => {
    const o = O.gCurrentObject
    cur_obj_call_action_function(sOpenedCannonActions)
    if (o.rawData[OC.oCannonUnkF8]) {
        o.rawData[OC.oCannonUnkF8]++
    }
    o.rawData[OC.oInteractStatus] = 0
}

export const bhv_cannon_barrel_loop = () => {
    const o = O.gCurrentObject
    const parent = o.parentObj
    if (parent.header.gfx.node.flags & GRAPH_RENDER_ACTIVE) {
        cur_obj_enable_rendering()
        obj_copy_pos(o, o.parentObj)
        o.rawData[OC.oMoveAngleYaw] = o.parentObj.rawData[OC.oMoveAngleYaw]
        o.rawData[OC.oFaceAnglePitch] = o.parentObj.rawData[OC.oMoveAnglePitch]
    }/* else {
        cur_obj_disable_rendering()
    }*/
}
