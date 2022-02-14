import * as _Linker from "../Linker"
import { AreaInstance as Area } from "../Area"
import { LEVEL_BBH } from "../../levels/level_defines_constants"
import { bhvFlamethrowerFlame } from "../BehaviorData"
import { oTimer, oAnimState, oForwardVel, oFlameThowerFlameUnk110, oFloorHeight, oBehParams2ndByte, oVelY, oInteractStatus,
         oDistanceToMario, oPosY, oAction, oFlameThowerUnk110 } from "../../include/object_constants"
import { s32, random_float } from "../../utils"
import { obj_translate_xyz_random, cur_obj_update_floor_height, cur_obj_scale, cur_obj_move_using_fvel_and_gravity, obj_mark_for_deletion, spawn_object_relative } from "../ObjectHelpers"
import { MODEL_RED_FLAME, MODEL_BLUE_FLAME } from "../../include/model_ids"
// flamethrower.c.inc

export const bhv_flamethrower_flame_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let size
    let sp18
    if (o.rawData[oTimer] == 0) {
        o.rawData[oAnimState] = (s32)(random_float() * 10.0)
        obj_translate_xyz_random(o, 10.0)
    }
    if (o.rawData[oBehParams2ndByte] == 2)
        size = o.rawData[oTimer] * (o.rawData[oForwardVel] - 6.0) / 100.0 + 2.0
    else
        size = o.rawData[oTimer] * (o.rawData[oForwardVel] - 20.0) / 100.0 + 1.0
    if (o.rawData[oBehParams2ndByte] == 3) {
        o.hitboxHeight = 200.0
        o.hitboxDownOffset = 150.0
        o.rawData[oVelY] = -28.0
        cur_obj_update_floor_height()
        if (o.rawData[oPosY] - 25.0 * size < o.rawData[oFloorHeight]) {
            o.rawData[oVelY] = 0
            o.rawData[oPosY] = o.rawData[oFloorHeight] + 25.0 * size
        }
        sp18 = o.parentObj.rawData[oFlameThowerFlameUnk110] / 1.2
    } else
        sp18 = o.parentObj.rawData[oFlameThowerFlameUnk110]
    cur_obj_scale(size)
    if (o.rawData[oBehParams2ndByte] == 4)
        o.rawData[oPosY] += o.rawData[oForwardVel] // weird?
    else
        cur_obj_move_using_fvel_and_gravity()
    if (o.rawData[oTimer] > sp18)
        obj_mark_for_deletion(o)
    o.rawData[oInteractStatus] = 0
}

export const bhv_flamethrower_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let flame
    let flameVel
    let sp34
    let model
    let UNUSED = new Array(8)
    if (o.rawData[oAction] == 0) {
        if (Area.gCurrLevelNum != LEVEL_BBH || gLinker.gMarioOnMerryGoRound == 1)
            if (o.rawData[oDistanceToMario] < 2000.0)
                o.rawData[oAction]++
    } else if (o.rawData[oAction] == 1) {
        model = MODEL_RED_FLAME
        flameVel = 95.0
        if (o.rawData[oBehParams2ndByte] == 1)
            model = MODEL_BLUE_FLAME
        if (o.rawData[oBehParams2ndByte] == 2)
            flameVel = 50.0
        sp34 = 1
        if (o.rawData[oTimer] < 60)
            sp34 = 15
        else if (o.rawData[oTimer] < 74)
            sp34 = 75 - o.rawData[oTimer] // Range: [15..2]
        else
            o.rawData[oAction]++
        o.rawData[oFlameThowerUnk110] = sp34;
        flame = spawn_object_relative(o.rawData[oBehParams2ndByte], 0, 0, 0, o, model, bhvFlamethrowerFlame);
        flame.rawData[oForwardVel] = flameVel
        //cur_obj_play_sound_1(SOUND_AIR_BLOW_FIRE);
    } else if (o.rawData[oTimer] > 60)
        o.rawData[oAction] = 0
}

export const bhv_rr_rotating_bridge_platform_loop = () => {
    o.rawData[oMoveAngleYaw] -= 0x80
    o.rawData[oAngleVelYaw] = -0x80
    bhv_flamethrower_loop()
}

gLinker.bhv_flamethrower_flame_loop = bhv_flamethrower_flame_loop
gLinker.bhv_flamethrower_loop = bhv_flamethrower_loop
gLinker.bhv_rr_rotating_bridge_platform_loop = bhv_rr_rotating_bridge_platform_loop