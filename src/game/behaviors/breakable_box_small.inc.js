// breakable_box.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_set_model, cur_obj_was_attacked_or_ground_pounded, obj_explode_and_spawn_coins,
cur_obj_scale, cur_obj_disable_rendering, cur_obj_enable_rendering, cur_obj_become_intangible,
cur_obj_become_tangible, cur_obj_unhide, cur_obj_nearest_object_with_behavior,
cur_obj_wait_then_blink, spawn_mist_particles, obj_attack_collided_from_other_object,
cur_obj_get_dropped, spawn_object, obj_set_hitbox } from "../ObjectHelpers"
import { object_step, obj_check_floor_death, sObjFloor, obj_spawn_yellow_coins, create_respawner } from "../ObjBehaviors"
import { create_sound_spawner, cur_obj_play_sound_2 } from "../SpawnSound"
import { spawn_triangle_break_particles } from "./break_particles.inc"
import { random_float } from "../../utils"
import { oAction,  oAnimState,  oBuoyancy,  oFlags,  oForwardVel,  oFriction,  oGravity, 
oHeldState,  oInteractStatus,  oPosX,  oPosZ,  oVelY } from "../../include/object_constants"
import { wdw_seg7_collision_07018528 } from "../../levels/wdw/hidden_platform/collision.inc"
import { ACTIVE_FLAG_UNK9, ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"
import { MODEL_BREAKABLE_BOX_SMALL, MODEL_SMOKE } from "../../include/model_ids"
import { SOUND_GENERAL_BREAK_BOX, SOUND_GENERAL_BOX_LANDING_2, SOUND_ENV_SLIDING } from "../../include/sounds"
import { INTERACT_GRABBABLE } from "../Interaction"
import { GRAPH_RENDER_INVISIBLE } from "../../engine/graph_node"


/* Breakable Box Small (Small Cork Box) */
const oBreakableBoxSmallReleased             = 0x1B
const oBreakableBoxSmallFramesSinceReleased  = 0x1D


const  sBreakableBoxSmallHitbox = {
    interactType:      INTERACT_GRABBABLE,
    downOffset:        20,
    damageOrCoinValue: 0,
    health:            1,
    numLootCoins:      0,
    radius:            150,
    height:            250,
    hurtboxRadius:     150,
    hurtboxHeight:     250,
}

const bhv_breakable_box_small_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 2.5
    o.rawData[oFriction] = 0.99
    o.rawData[oBuoyancy] = 1.4
    cur_obj_scale(0.4)
    obj_set_hitbox(o, sBreakableBoxSmallHitbox)
    o.rawData[oAnimState] = 1
    o.activeFlags |= ACTIVE_FLAG_UNK9
}

const small_breakable_box_spawn_dust = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let dust = spawn_object(o, MODEL_SMOKE, 'bhvSmoke')
    dust.rawData[oPosX] += (random_float() * 80.0) - 40
    dust.rawData[oPosZ] += (random_float() * 80.0) - 40
}

const small_breakable_box_act_move = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*s16*/ sp1E = object_step()

    obj_attack_collided_from_other_object(o)
    if (sp1E == 1) {
        cur_obj_play_sound_2(SOUND_GENERAL_BOX_LANDING_2)
    }
    if (sp1E & 1) {
        if (o.rawData[oForwardVel] > 20.0) {
            cur_obj_play_sound_2(SOUND_ENV_SLIDING)
            small_breakable_box_spawn_dust()
        }
    }

    if (sp1E & 2) {
        spawn_mist_particles()
        spawn_triangle_break_particles(20, 138, 0.7, 3)
        obj_spawn_yellow_coins(o, 3)
        create_sound_spawner(SOUND_GENERAL_BREAK_BOX)
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }

    obj_check_floor_death(sp1E, sObjFloor)
}

const breakable_box_small_released_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oBreakableBoxSmallFramesSinceReleased]++

      // Begin flashing
    if (o.rawData[oBreakableBoxSmallFramesSinceReleased] > 810) {
        if (o.rawData[oBreakableBoxSmallFramesSinceReleased] & 1) {
            o.gfx.flags |= GRAPH_RENDER_INVISIBLE
        }
        else {
            o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
        }
    }

      // Despawn, and create a corkbox respawner
    if (o.rawData[oBreakableBoxSmallFramesSinceReleased] > 900) {
        create_respawner(MODEL_BREAKABLE_BOX_SMALL, 'bhvBreakableBoxSmall', 3000)
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

const breakable_box_small_idle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case 0:
            small_breakable_box_act_move()
            break

        case 100:
            obj_lava_death()
            break

        case 101:
            o.activeFlags = ACTIVE_FLAG_DEACTIVATED
            create_respawner(MODEL_BREAKABLE_BOX_SMALL, 'bhvBreakableBoxSmall', 3000)
            break
    }

    if (o.rawData[oBreakableBoxSmallReleased] == 1) {
        breakable_box_small_released_loop()
    }
}

const breakable_box_small_get_dropped = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_become_tangible()
    cur_obj_enable_rendering()
    cur_obj_get_dropped()
    o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
    o.rawData[oHeldState] = 0
    o.rawData[oBreakableBoxSmallReleased] = 1
    o.rawData[oBreakableBoxSmallFramesSinceReleased] = 0
}

const breakable_box_small_get_thrown = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_become_tangible()
    cur_obj_enable_rendering()
    o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
    o.rawData[oHeldState] = 0
    o.rawData[oFlags] &= ~0x08
    o.rawData[oForwardVel] = 40.0
    o.rawData[oVelY] = 20.0
    o.rawData[oBreakableBoxSmallReleased] = 1
    o.rawData[oBreakableBoxSmallFramesSinceReleased] = 0
    o.activeFlags &= ~ACTIVE_FLAG_UNK9
}

const bhv_breakable_box_small_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oHeldState]) {
        case 0:
            breakable_box_small_idle_loop()
            break

        case 1:
            cur_obj_disable_rendering()
            cur_obj_become_intangible()
            break

        case 2:
            breakable_box_small_get_thrown()
            break

        case 3:
            breakable_box_small_get_dropped()
            break
    }

    o.rawData[oInteractStatus] = 0
}


gLinker.bhv_breakable_box_small_init = bhv_breakable_box_small_init
gLinker.bhv_breakable_box_small_loop = bhv_breakable_box_small_loop
