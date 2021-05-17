/**
 * Behavior for bhvBird. These are the birds in the castle grounds
 * that fly away and scatter when Mario comes near them. There are
 * 2 types of birds; spawner birds and spawned birds. Spawner birds
 * are loaded by the level, and are inactive until Mario comes within
 * 2000 units of them, when they spawn 6 spawned birds and start flying.
 * Spawned birds are only spawned by a spawner bird, and start flying
 * immediately after spawning.
 */
import * as _Linker from "../../game/Linker"
import { oPosX, oPosY, oPosZ, oVelX, oVelY, oVelZ, oMoveAngleYaw, oMoveAnglePitch, oDistanceToMario
} from "../../include/object_constants"
import { oAction, oHomeX, oHomeY, oHomeZ, oBehParams2ndByte, oBirdTargetPitch, oBirdTargetYaw,
oBirdSpeed } from "../../include/object_constants"
import { spawn_object, cur_obj_unhide, obj_mark_for_deletion, obj_angle_to_object,
dist_between_objects, cur_obj_move_using_fvel_and_gravity, cur_obj_lateral_dist_to_home,
cur_obj_angle_to_home, cur_obj_rotate_yaw_toward, lateral_dist_between_objects
} from "../ObjectHelpers"
import { obj_compute_vel_from_move_pitch, obj_move_pitch_approach, obj_roll_to_match_yaw_turn
} from "../ObjBehaviors2.js"
import { int16, int32, random_float, sins, coss, random_u16 } from "../../utils"
import { atan2s } from "../../engine/math_util"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { MODEL_BIRDS} from "../../include/model_ids"
import { SOUND_GENERAL_BIRDS_FLY_AWAY } from "../../include/sounds"


 //vals from object_constants.h
const BIRD_ACT_FLY = 1
const BIRD_ACT_INACTIVE = 0
const BIRD_BP_SPAWNED = 0
//can't find BIRD_BP_SPAWNER, but it exists in objject_constant.h and is colloquially referenced in the comments here
const BIRD_BP_SPAWNER = 1

/**
 * If the object is a spawned bird, start flying; if it's a spawner bird,
 * spawn spawned birds if Mario comes within 2000 units of it.
 */
const bird_act_inactive = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oBehParams2ndByte] == BIRD_BP_SPAWNED || o.rawData[oDistanceToMario] < 2000.0) {

        // If the object is a spawner bird, play the sound of birds flying away,
        // and spawn 6 spawned birds (which will start flying on the next frame).
        if (o.rawData[oBehParams2ndByte] != BIRD_BP_SPAWNED) {
            cur_obj_play_sound_2(SOUND_GENERAL_BIRDS_FLY_AWAY)

            for (let i = 0; i < 6; i++) {
                spawn_object(o, MODEL_BIRDS, 'bhvBird')
            }

            // The spawner bird's home acts as its target location.
            o.rawData[oHomeX] = -20.0
            o.rawData[oHomeZ] = -3990.0
        }

        // Start flying
        o.rawData[oAction] = BIRD_ACT_FLY

        // Start with a random yaw, and a random pitch from 1000 to 5000.
        // Positive pitch is downwards.
        o.rawData[oMoveAnglePitch] = 5000 - int32((4000.0 * random_float()))
        o.rawData[oMoveAngleYaw] = random_u16()

        o.rawData[oBirdSpeed] = 40.0

        cur_obj_unhide()
    }
}

/**
 * Make the bird fly.
 * The bird flies laterally towards a target; (-20, -3990) if it's a spawner bird,
 * and the parent spawner bird if it's a spawned bird.
 */
const bird_act_fly = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let distance

    // Compute forward velocity and vertical velocity from oBirdSpeed and pitch
    obj_compute_vel_from_move_pitch(o.rawData[oBirdSpeed])

    // If the bird's parent is higher than 8000 units, despawn the bird.
    // A spawned bird's parent is its spawner bird. A spawner bird's parent
    // is itself. In other words, when a group of birds has its spawner bird
    // fly past Y=8000, they will all despawn simultaneously. Otherwise, fly.
    if (o.parentObj.rawData[oPosY] > 8000.0) {
        obj_mark_for_deletion(o)
    } else {
        // If the bird is a spawner bird, fly towards its home; otherwise,
        // fly towards the bird's spawner bird.
        if (o.rawData[oBehParams2ndByte] != BIRD_BP_SPAWNED) {
            distance = cur_obj_lateral_dist_to_home()
            // The spawner bird will start with its downwards (positive) pitch
            // and will continuously decrease its pitch (i.e. make itself face more upwards)
            // until it reaches its home, at which point it will face directly up.
            // This is done by making its target pitch the arctangent of its distance
            // to its home and its position - 10,000 (which is always negative).
            o.rawData[oBirdTargetPitch] = atan2s(distance, o.rawData[oPosY] - 10000.0)
            o.rawData[oBirdTargetYaw] = cur_obj_angle_to_home()
        } else {
            distance = lateral_dist_between_objects(o, o.parentObj)
            // The bird's target pitch will face directly to its spawner bird.
            o.rawData[oBirdTargetPitch] = atan2s(distance, o.rawData[oPosY] - o.parentObj.rawData[oPosY])
            o.rawData[oBirdTargetYaw] = obj_angle_to_object(o, o.parentObj)

            // The bird goes faster the farther it is from its spawner bird so it can catch up.
            o.rawData[oBirdSpeed] = 0.04 * dist_between_objects(o, o.parentObj) + 20.0
        }

        // Approach to match the bird's target yaw and pitch.
        obj_move_pitch_approach(o.rawData[oBirdTargetPitch], 140)
        cur_obj_rotate_yaw_toward(o.rawData[oBirdTargetYaw], 800)
        obj_roll_to_match_yaw_turn(o.rawData[oBirdTargetYaw], 0x3000, 600)
    }

    // The bird has no gravity, so this function only
    // moves the bird using its forward velocity.
    // Even if it did have gravity, it would only act as
    // a constant added to its Y position every frame since
    // its Y velocity is reset every frame by
    // obj_compute_vel_from_move_pitch.
    cur_obj_move_using_fvel_and_gravity()
}

/**
 * Update function for bhvBird.
 */
export const bhv_bird_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case BIRD_ACT_INACTIVE:
            bird_act_inactive()
            break;
        case BIRD_ACT_FLY:
            bird_act_fly()
            break;
    }
}


gLinker.bhv_bird_update = bhv_bird_update
