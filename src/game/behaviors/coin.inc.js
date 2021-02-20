import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oCoinUnkF4, oBehParams, oAction, oDistanceToMario, oBehParams2ndByte, oTimer, oCoinUnkF8, oPosY, oFloorHeight, oAnimState, oInteractStatus, oPosX, oPosZ, oVelY, oCoinUnk110, oForwardVel, oMoveAngleYaw, oFloor, oMoveFlags, OBJ_MOVE_ON_GROUND, oSubAction, oBounciness, OBJ_MOVE_LANDED, OBJ_MOVE_ABOVE_DEATH_BARRIER, OBJ_MOVE_ABOVE_LAVA } from "../../include/object_constants"
import { spawn_object_relative, cur_obj_set_behavior, cur_obj_update_floor_height, obj_mark_for_deletion, cur_obj_set_model, spawn_object, cur_obj_scale, cur_obj_become_intangible, cur_obj_update_floor_and_walls, cur_obj_if_hit_wall_bounce_away, cur_obj_move_standard, cur_obj_rotate_yaw_toward, cur_obj_become_tangible, cur_obj_wait_then_blink } from "../ObjectHelpers"
import { MODEL_YELLOW_COIN, MODEL_YELLOW_COIN_NO_SHADOW, MODEL_SPARKLES } from "../../include/model_ids"
import { bhvCoinFormationSpawn, bhvYellowCoin, bhvGoldenCoinSparkles, bhvCoinSparkles } from "../BehaviorData"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { INTERACT_COIN, INT_STATUS_INTERACTED, INT_STATUS_TOUCHED_BOB_OMB } from "../Interaction"
import { sins, coss, random_uint16 } from "../../utils"
import { atan2s } from "../../engine/math_util"

const sYellowCoinHitbox = {
    interactType: INTERACT_COIN,
    downOffset: 0,
    damageOrCoinValue: 1,
    health: 0,
    numLootCoins: 0,
    radius: 100,
    height: 64,
    hurtboxRadius: 0,
    hurtboxHeight: 0
}

export const bhv_coin_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oVelY] = Math.random() * 10.0 + 30 + o.rawData[oCoinUnk110]
    o.rawData[oForwardVel] = Math.random() * 10.0
    o.rawData[oMoveAngleYaw] = random_uint16()
    cur_obj_set_behavior(bhvYellowCoin)
    obj_set_hitbox(o, sYellowCoinHitbox)
    cur_obj_become_intangible()
}

export const bhv_coin_loop = () => {

    const o = ObjectListProc.gCurrentObject

    cur_obj_update_floor_and_walls()
    cur_obj_if_hit_wall_bounce_away()
    cur_obj_move_standard(-62)

    const sp1C = o.rawData[oFloor]
    if (sp1C) {
        if (o.rawData[oMoveFlags] & OBJ_MOVE_ON_GROUND)
            o.rawData[oSubAction] = 1

        if (o.rawData[oSubAction] == 1) {
            o.rawData[oBounciness] = 0

            if (sp1C.normal.y < 0.9) {
                const sp1A = atan2s(sp1C.normal.z, sp1C.normal.x)
                cur_obj_rotate_yaw_toward(sp1A, 0x400)
            }
        }
    }

    //if (o.rawData[oTimer] == 0) play_sound()

    if (o.rawData[oVelY] < 0)
        cur_obj_become_tangible()

    if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
        if (o.rawData[oMoveFlags] & (OBJ_MOVE_ABOVE_DEATH_BARRIER | OBJ_MOVE_ABOVE_LAVA))
            obj_mark_for_deletion(o)
    }

    /// more on playing sounds

    if (cur_obj_wait_then_blink(400, 20))
        obj_mark_for_deletion(o)

    bhv_coin_sparkles_init()
}

export const bhv_yellow_coin_init = () => {
    const o = ObjectListProc.gCurrentObject

    cur_obj_set_behavior(bhvYellowCoin)
    obj_set_hitbox(o, sYellowCoinHitbox)
    //bhv_init_room()  TODO assign coin to specific room?
    cur_obj_update_floor_height()
    if (500.0 < Math.abs(o.rawData[oPosY] - o.rawData[oFloorHeight]))
        cur_obj_set_model(MODEL_YELLOW_COIN_NO_SHADOW)
    if (o.rawData[oFloorHeight] < -10000.0)
        obj_mark_for_deletion(o)

}

export const bhv_yellow_coin_loop = () => {
    const o = ObjectListProc.gCurrentObject

    bhv_coin_sparkles_init()
    o.rawData[oAnimState]++
}

export const bhv_coin_formation_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oCoinUnkF4] = (o.rawData[oBehParams] >> 8) & 0xFF
}

const spawn_coin_in_formation = (sp50, sp54) => {
    const o = ObjectListProc.gCurrentObject
    const sp40 = [0, 0, 0]
    let sp3C = 1, sp38 = 1

    switch (sp54 & 7) {
        case 0:
            sp40[2] = 160 * (sp50 - 2)
            if (sp50 > 4) sp3C = 0
            break
        case 1:
            throw "unimplemented coin formation spawn 1"
            break
        case 2:
            sp40[0] = sins(sp50 << 13) * 300.0
            sp40[2] = coss(sp50 << 13) * 300.0
            break
        case 3:
            sp38 = 0  /// flying
            sp40[0] = sins(sp50 << 13) * 200.0
            sp40[1] = coss(sp50 << 13) * 200.0 + 200.0
            break
        case 4:
            throw "unimplemented coin formation spawn 4"
            break
    }
    if (sp54 & 0x10) sp38 = 0

    if (sp3C) {
        const sp4C = spawn_object_relative(sp50, sp40[0], sp40[1], sp40[2], o, MODEL_YELLOW_COIN, bhvCoinFormationSpawn)

        sp4C.rawData[oCoinUnkF4] = sp38
    }
}

export const bhv_coin_formation_loop = () => {

    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case 0:
            if (o.rawData[oDistanceToMario] < 2000) {
                for (let bitIndex = 0; bitIndex < 8; bitIndex++) {
                    if (!(o.rawData[oCoinUnkF4] & (1 << bitIndex)))
                        spawn_coin_in_formation(bitIndex, o.rawData[oBehParams2ndByte])
                }
                o.rawData[oAction]++
            }
            break

        case 1:
            if (o.rawData[oDistanceToMario] > 2100) o.rawData[oAction]++
            break

        case 2:
            o.rawData[oAction] = 0
            break
    }

    ObjectListProc.set_object_respawn_info_bits(o, o.rawData[oCoinUnkF4] & 0xFF)

}

const bhv_coin_sparkles_init = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED && !(o.rawData[oInteractStatus] & INT_STATUS_TOUCHED_BOB_OMB)) {
        spawn_object(o, MODEL_SPARKLES, bhvGoldenCoinSparkles)
        obj_mark_for_deletion(o)
        return 1
    }

    o.rawData[oInteractStatus] = 0
    return 0

}

export const bhv_coin_formation_spawn_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        cur_obj_set_behavior(bhvYellowCoin)
        obj_set_hitbox(o, sYellowCoinHitbox)
        //bhv_init_room()  TODO assign coin to specific room?
        if (o.rawData[oCoinUnkF8]) {
            o.rawData[oPosY] += 300
            cur_obj_update_floor_height()
            if (o.rawData[oPosY] < o.rawData[oFloorHeight] || o.rawData[oFloorHeight] < -10000.0)
                obj_mark_for_deletion(o)
            else
                o.rawData[oPosY] = o.rawData[oFloorHeight]
        } else {
            cur_obj_update_floor_height()
            if (Math.abs(o.rawData[oPosY] - o.rawData[oFloorHeight]) > 250)
                cur_obj_set_model(MODEL_YELLOW_COIN_NO_SHADOW)
        }
    } else {
        if (bhv_coin_sparkles_init())
            o.parentObj.rawData[oCoinUnkF4] |= 1 << o.rawData[oBehParams2ndByte]
        o.rawData[oAnimState]++
    }

    if (o.parentObj.rawData[oAction] == 2)
        obj_mark_for_deletion(o)

}

export const bhv_golden_coin_sparkles_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const sp24 = 30.0
    const sp2C = spawn_object(o, MODEL_SPARKLES, bhvCoinSparkles)
    sp2C.rawData[oPosX] += (Math.random() * sp24) - (sp24 / 2)
    sp2C.rawData[oPosZ] += (Math.random() * sp24) - (sp24 / 2)
}

export const bhv_coin_sparkles_loop = () => { cur_obj_scale(0.6) }

