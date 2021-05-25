// cannon.c.inc
import * as _Linker from "../../game/Linker"
import { obj_copy_pos, cur_obj_call_action_function, cur_obj_enable_rendering,
cur_obj_disable_rendering, cur_obj_become_tangible, cur_obj_become_intangible } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { oAction, oBehParams2ndByte, oCannonUnk10C, oCannonUnkF4,  oCannonUnkF8, oDistanceToMario,
oFaceAnglePitch, oHomeX, oHomeY, oHomeZ,  oInteractStatus, oMoveAnglePitch, oMoveAngleYaw, oPosX,
oPosY, oPosZ,  oTimer, oVelY } from "../../include/object_constants"
import { INT_STATUS_TOUCHED_BOB_OMB, INT_STATUS_INTERACTED } from "../Interaction"
import { s16, random_float, sins } from "../../utils"
import { SOUND_OBJ_CANNON1, SOUND_OBJ_CANNON2, SOUND_OBJ_CANNON3 } from "../../include/sounds"
import { GRAPH_RENDER_ACTIVE } from "../../engine/graph_node"


const bhv_cannon_base_unused_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oPosY] += o.rawData[oVelY]
}

const opened_cannon_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0) {
        o.rawData[oInteractStatus] = 0
        o.rawData[oPosX] = o.rawData[oHomeX]
        o.rawData[oPosY] = o.rawData[oHomeY]
        o.rawData[oPosZ] = o.rawData[oHomeZ]
        o.rawData[oMoveAnglePitch] = 0
        o.rawData[oMoveAngleYaw] = s16(o.rawData[oBehParams2ndByte] << 8)
        o.rawData[oCannonUnkF4] = 0
        o.rawData[oCannonUnk10C] = 0
        cur_obj_enable_rendering()
        cur_obj_become_tangible()
    }
    if (o.rawData[oDistanceToMario] < 500.0) {
        cur_obj_become_tangible()
        cur_obj_enable_rendering()
        if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED
            && (!(o.rawData[oInteractStatus]
                  & INT_STATUS_TOUCHED_BOB_OMB))) // bob-omb explodes when it gets into a cannon
        {
            o.rawData[oAction] = 4
            o.rawData[oCannonUnk10C] = 1
            o.rawData[oCannonUnkF8] = 1
        } else {
            o.rawData[oInteractStatus] = 0
        }
    } else {
        cur_obj_become_intangible()
        cur_obj_disable_rendering()
        o.rawData[oCannonUnk10C] = 0
    }
}

const opened_cannon_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0) {
        cur_obj_play_sound_2(SOUND_OBJ_CANNON1)
    }
    o.rawData[oPosY] += 5.0
    o.rawData[oPosX] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 2
    o.rawData[oPosZ] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 2
    if (o.rawData[oTimer] > 67) {
        o.rawData[oPosX] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 4
        o.rawData[oPosZ] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 4
        o.rawData[oAction] = 6
    }
}

const opened_cannon_act_6 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0)
        cur_obj_play_sound_2(SOUND_OBJ_CANNON2)
    if (o.rawData[oTimer] < 4) {
        o.rawData[oPosX] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 4.0
        o.rawData[oPosZ] += ((o.rawData[oTimer] / 2 & 1) - 0.5) * 4.0
    } else {
        if (o.rawData[oTimer] < 6) {
        } else {
            if (o.rawData[oTimer] < 22) {
                o.rawData[oMoveAngleYaw] =
                    s16(sins(o.rawData[oCannonUnkF4]) * 0x4000 + s16(o.rawData[oBehParams2ndByte] << 8))
                o.rawData[oCannonUnkF4] = s16(o.rawData[oCannonUnkF4] + 0x400)
            } else if (o.rawData[oTimer] < 26) {
            } else {
                o.rawData[oCannonUnkF4] = 0
                o.rawData[oAction] = 5
            }
        }
    }
}

const opened_cannon_act_5 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0)
        cur_obj_play_sound_2(SOUND_OBJ_CANNON3)
    if (o.rawData[oTimer] < 4) {
    } else {
        if (o.rawData[oTimer] < 20) {
            o.rawData[oCannonUnkF4] = s16(o.rawData[oCannonUnkF4] + 0x400)
            o.rawData[oMoveAnglePitch] = s16(sins(o.rawData[oCannonUnkF4]) * 0x2000)
        } else if (o.rawData[oTimer] < 25) {
        } else
            o.rawData[oAction] = 1
    }
}

const opened_cannon_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_become_intangible()
    cur_obj_disable_rendering()
    o.rawData[oCannonUnk10C] = 0
    gLinker.ObjectListProcessor.gMarioShotFromCannon = 1
}

const opened_cannon_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oAction] = 3
}

const opened_cannon_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] > 3) {
        o.rawData[oAction] = 0
    }
}

const sOpenedCannonActions = [ opened_cannon_act_0, opened_cannon_act_1, opened_cannon_act_2,
                               opened_cannon_act_3, opened_cannon_act_4, opened_cannon_act_5,
                               opened_cannon_act_6 ]

const bhv_cannon_base_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_call_action_function(sOpenedCannonActions)
    if (o.rawData[oCannonUnkF8]) {
        o.rawData[oCannonUnkF8]++
    }
    o.rawData[oInteractStatus] = 0
}

const bhv_cannon_barrel_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const parent = o.parentObj
    if (parent.gfx.flags & GRAPH_RENDER_ACTIVE) {
        cur_obj_enable_rendering()
        obj_copy_pos(o, o.parentObj)
        o.rawData[oMoveAngleYaw] = o.parentObj.rawData[oMoveAngleYaw]
        o.rawData[oFaceAnglePitch] = o.parentObj.rawData[oMoveAnglePitch]
    } else {
        cur_obj_disable_rendering()
    }
}

gLinker.bhv_cannon_base_unused_loop = bhv_cannon_base_unused_loop
gLinker.bhv_cannon_base_loop = bhv_cannon_base_loop
gLinker.bhv_cannon_barrel_loop = bhv_cannon_barrel_loop
