// switch_hidden_objects.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_set_model, cur_obj_was_attacked_or_ground_pounded, obj_explode_and_spawn_coins,
cur_obj_scale, cur_obj_disable_rendering, cur_obj_enable_rendering, cur_obj_become_intangible,
cur_obj_become_tangible, cur_obj_unhide, cur_obj_nearest_object_with_behavior,
cur_obj_wait_then_blink, spawn_mist_particles, obj_set_hitbox } from "../ObjectHelpers"
import { create_sound_spawner } from "../SpawnSound"
import { spawn_triangle_break_particles } from "./break_particles.inc"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { wdw_seg7_collision_07018528 } from "../../levels/wdw/hidden_platform/collision.inc"
import { oAction, oAnimState, oBehParams2ndByte, oInteractStatus,  oNumLootCoins, oTimer } from "../../include/object_constants"
import { MODEL_BREAKABLE_BOX_SMALL } from "../../include/model_ids"
import { SOUND_GENERAL_BREAK_BOX } from "../../include/sounds"
import { INTERACT_BREAKABLE } from "../Interaction"


/* Hidden Object */
const oHiddenObjectUnkF4  = 0x1B


export const sBreakableBoxHitbox = {
    interactType:       INTERACT_BREAKABLE,
    downOffset:         20,
    damageOrCoinValue:  0,
    health:             1,
    numLootCoins:       0,
    radius:             150,
    height:             200,
    hurtboxRadius:      150,
    hurtboxHeight:      200,
}

export const breakable_box_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oHiddenObjectUnkF4] = null
    o.rawData[oAnimState] = 1
    switch (o.rawData[oBehParams2ndByte]) {
        case 0:
            o.rawData[oNumLootCoins] = 0
            break
        case 1:
            o.rawData[oNumLootCoins] = 3
            break
        case 2:
            o.rawData[oNumLootCoins] = 5
            break
        case 3:
            cur_obj_scale(1.5)
            break
    }
}

const hidden_breakable_box_actions = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let sp1C
    obj_set_hitbox(o, sBreakableBoxHitbox)
    cur_obj_set_model(MODEL_BREAKABLE_BOX_SMALL)
    if (o.rawData[oAction] == 0) {
        cur_obj_disable_rendering()
        cur_obj_become_intangible()
        if (o.rawData[oTimer] == 0) {
            breakable_box_init()
        }
        if (o.rawData[oHiddenObjectUnkF4] == null) {
            o.rawData[oHiddenObjectUnkF4] = cur_obj_nearest_object_with_behavior('bhvFloorSwitchHiddenObjects')
        }
        if ((sp1C = o.rawData[oHiddenObjectUnkF4]) != null) {
            if (sp1C.rawData[oAction] == 2) {
                o.rawData[oAction]++
                cur_obj_enable_rendering()
                cur_obj_unhide()
            }
        }
    } else if (o.rawData[oAction] == 1) {
        cur_obj_become_tangible()
        if (cur_obj_wait_then_blink(360, 20)) {
            o.rawData[oAction] = 0
        }
        if (cur_obj_was_attacked_or_ground_pounded()) {
            spawn_mist_particles()
            spawn_triangle_break_particles(30, 138, 3.0, 4)
            o.rawData[oAction]++
            cur_obj_play_sound_2(SOUND_GENERAL_BREAK_BOX)
        }
        gLinker.SurfaceLoad.load_object_collision_model()
    } else {
        cur_obj_become_intangible()
        cur_obj_disable_rendering()
        o.rawData[oInteractStatus] = 0
        if ((sp1C = o.rawData[oHiddenObjectUnkF4]) != null) {
            if (sp1C.rawData[oAction] == 0) {
                o.rawData[oAction] = 0
            }
        }
    }
}

const hidden_unbreakable_box_actions = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let sp1C

    o.collisionData = wdw_seg7_collision_07018528
    if (o.rawData[oAction] == 0) {
        cur_obj_disable_rendering()
        cur_obj_become_intangible()
        if (o.rawData[oHiddenObjectUnkF4] == null)
            o.rawData[oHiddenObjectUnkF4] = cur_obj_nearest_object_with_behavior('bhvFloorSwitchHiddenObjects')
        if ((sp1C = o.rawData[oHiddenObjectUnkF4]) != null) {
            if (sp1C.rawData[oAction] == 2) {
                o.rawData[oAction]++
                cur_obj_enable_rendering()
                cur_obj_unhide()
            }
        }
    } else {
        cur_obj_become_tangible()
        if (cur_obj_wait_then_blink(360, 20)) {
            o.rawData[oAction] = 0
        }
        gLinker.SurfaceLoad.load_object_collision_model()
    }
}

const bhv_hidden_object_loop = () => {
    if (o.rawData[oBehParams2ndByte] == 0)
        hidden_breakable_box_actions();   // Confused, that function has code depending on the action
    else
        hidden_unbreakable_box_actions()
}

