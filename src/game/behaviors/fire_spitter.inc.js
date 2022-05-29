// fire_spitter.inc.c

import { FIRE_SPITTER_ACT_IDLE, FIRE_SPITTER_ACT_SPIT_FIRE, oAction, OBJ_MOVE_MASK_IN_WATER, oDistanceToMario, oFireSpitterScaleVel, oGraphYOffset, oMoveFlags, oTimer } from "../../include/object_constants"
import { SOUND_OBJ_FLAME_BLOWN } from "../../include/sounds"
import { approach_f32_ptr, obj_spit_fire } from "../ObjBehaviors2"
import { cur_obj_move_standard, cur_obj_scale, cur_obj_update_floor_and_walls } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

const fire_spitter_act_idle = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    approach_f32_ptr(o.gfx.scale[0], 0.2, 0.002)

    if (o.rawData[oTimer] > 150 && o.rawData[oDistanceToMario] < 800.0 && !(o.rawData[oMoveFlags] & OBJ_MOVE_MASK_IN_WATER)) {
        o.rawData[oAction] = FIRE_SPITTER_ACT_SPIT_FIRE
        o.rawData[oFireSpitterScaleVel] = 0.05
    }
}

const grow_then_shrink_fire_spitter = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] < 2) {
        o.gfx.scale[0] += o.rawData[oFireSpitterScaleVel]
        o.rawData[oFireSpitterScaleVel] -= 0.01
        if (o.rawData[oFireSpitterScaleVel] > -0.03) {
            o.rawData[oTimer] = 0
        }
    } else if (o.rawData[oTimer] > 10) {

        if (approach_f32_ptr(o.gfx.scale[0], 0.1, 0.05)) {
            return -1
        } else if (o.rawData[oFireSpitterScaleVel] != 0.0 && o.gfx.scale[0] < 0.15) {
            o.rawData[oFireSpitterScaleVel] = 0.0;
            return 1
        }
    }

    return 0
}

const fire_spitter_act_spit_fire = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    // Increase scale by 0.05, 0.04, ..., -0.03. Then wait ~8 frames, then
    // starting moving scale by 0.05 each frame toward 0.1. The first time
    // it becomes below 0.15 during this latter portion, shoot fire.
    let scaleStatus = grow_then_shrink_fire_spitter()
    
    if (scaleStatus != 0) {
        if (scaleStatus < 0) {
            o.rawData[oAction] = FIRE_SPITTER_ACT_IDLE
        } else {
            cur_obj_play_sound_2(SOUND_OBJ_FLAME_BLOWN)
            obj_spit_fire(0, 0, 0, 5.0, MODEL_RED_FLAME_SHADOW, 20.0, 15.0, 0x1000)
        }
    }
}

export const bhv_fire_spitter_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_scale(o.gfx.scale[0])
    o.rawData[oGraphYOffset] = 40.0
    cur_obj_update_floor_and_walls()

    switch (o.rawData[oAction]) {
        case FIRE_SPITTER_ACT_IDLE:
            fire_spitter_act_idle()
            break
        case FIRE_SPITTER_ACT_SPIT_FIRE:
            fire_spitter_act_spit_fire()
            break
    }

    cur_obj_move_standard(78)
}

gLinker.bhv_fire_spitter_update = bhv_fire_spitter_update