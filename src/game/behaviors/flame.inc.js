// flame.inc.js

import { oAction, oAngleToMario, oAnimState, oBehParams, OBJ_MOVE_HIT_WALL, OBJ_MOVE_MASK_IN_WATER, oGraphYOffset, oMoveFlags, oSmallPiranhaFlameEndSpeed, oSmallPiranhaFlameModel, oSmallPiranhaFlameNextFlameTimer, oSmallPiranhaFlameSpeed, oSmallPiranhaFlameStartSpeed, oTimer } from "../../include/object_constants"
import { random_float, random_u16 } from "../../utils"
import { bhvFlyguyFlame, bhvSmallPiranhaFlame } from "../BehaviorData"
import { approach_f32_ptr, obj_check_attacks, obj_compute_vel_from_move_pitch, obj_die_if_health_non_positive, random_linear_offset } from "../ObjBehaviors2"
import { cur_obj_move_standard, cur_obj_move_using_fvel_and_gravity, cur_obj_rotate_yaw_toward, cur_obj_scale, cur_obj_update_floor_and_walls, obj_mark_for_deletion, spawn_object_relative_with_scale, spawn_object_with_scale } from "../ObjectHelpers"


//! TODO: PLEASE MOVE THIS TO fire_piranha_plant.inc.js
//        when you add it. I'm too lazy to add all this shit
const sPiranhaPlantFireHitbox = {
    interactType:      INTERACT_FLAME,
    downOffset:        10,
    damageOrCoinValue: 0,
    health:            0,
    numLootCoins:      0,
    radius:            10,
    height:            20,
    hurtboxRadius:     10,
    hurtboxHeight:     20,
}

export const bhv_small_piranha_flame_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oBehParams >> 16] == 0) {
        if (o.rawData[oTimer] > 0) {
            obj_mark_for_deletion(o)
        } else {
            let rnd = random_float() - 0.5

            o.gfx.scale[1] = o.gfx.scale[2] * (1.0 + 0.7 * rnd)
            o.gfx.scale[0] = o.gfx.scale[2] * (0.9 - 0.5 * rnd)

            o.rawData[oAnimState] = random_u16()
        }
    } else {
        cur_obj_update_floor_and_walls()

        if (approach_f32_ptr(o.rawData[oSmallPiranhaFlameStartSpeed], o.rawData[oSmallPiranhaFlameEndSpeed], 0.6)) {
            cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x200)
        }

        obj_compute_vel_from_move_pitch(o.rawData[oSmallPiranhaFlameStartSpeed])
        cur_obj_move_standard(-78)
        spawn_object_with_scale(o, o.rawData[oSmallPiranhaFlameModel], bhvSmallPiranhaFlame, 0.4 * o.gfx.scale[0])

        if (o.rawData[oTimer] > o.rawData[oSmallPiranhaFlameNextFlameTimer]) {
            spawn_object_relative_with_scale(1, 0, o.rawData[oGraphYOffset], 0, o.gfx.scale[0], o, o.rawData[oSmallPiranhaFlameModel], bhvFlyguyFlame)
            o.rawData[oSmallPiranhaFlameNextFlameTimer] = random_linear_offset(8, 15)
            o.rawData[oTimer] = 0
        }

        obj_check_attacks(sPiranhaPlantFireHitbox, o.rawData[oAction])
        o.rawData[oSmallPiranhaFlameSpeed] += o.rawData[oSmallPiranhaFlameStartSpeed]

        if (o.rawData[oSmallPiranhaFlameSpeed] > 1500.0 || (o.rawData[oMoveFlags] & (OBJ_MOVE_HIT_WALL | OBJ_MOVE_MASK_IN_WATER))) {
            obj_die_if_health_non_positive()
        }
    }

    o.rawData[oGraphYOffset] = 15.0 * o.gfx.scale[1]
}

export const bhv_fly_guy_flame_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_move_using_fvel_and_gravity()

    if (approach_f32_ptr(o.gfx.scale[0], 0.0, 0.6)) {
        obj_mark_for_deletion(o)
    }

    cur_obj_scale(o.gfx.scale[0])
}

gLinker.bhv_small_piranha_flame_loop = bhv_small_piranha_flame_loop
gLinker.bhv_fly_guy_flame_loop = bhv_fly_guy_flame_loop