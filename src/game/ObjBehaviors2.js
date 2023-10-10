import { oFlags, OBJ_FLAG_30, oInteractType, oDamageOrCoinValue, oHealth, oNumLootCoins, oAnimState,
         oAction, OBJ_ACT_HORIZONTAL_KNOCKBACK, OBJ_ACT_VERTICAL_KNOCKBACK, OBJ_ACT_SQUISHED, oInteractStatus,
         oTimer, oForwardVel, oVelX, oVelY, oVelZ, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, oMoveAngleYaw, oMoveFlags,
         OBJ_MOVE_MASK_ON_GROUND, OBJ_MOVE_MASK_IN_WATER, OBJ_MOVE_HIT_WALL, OBJ_MOVE_ABOVE_LAVA,
         oHomeX, oHomeY, oHomeZ, oPosX, oPosY, oPosZ, oDistanceToMario, oAngleToMario, OBJ_MOVE_HIT_EDGE,
         oMoveAnglePitch, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oDeathSound, oBehParams, oPlatformOnTrackPrevWaypoint, oPlatformOnTrackPrevWaypointFlags, oPlatformOnTrackStartWaypoint, oPlatformOnTrackBaseBallIndex, oSmallPiranhaFlameStartSpeed, oSmallPiranhaFlameEndSpeed, oSmallPiranhaFlameModel, O_MOVE_ANGLE_PITCH_INDEX, DIALOG_FLAG_TURN_TO_MARIO, DIALOG_FLAG_TIME_STOP_ENABLED, OBJ_MOVE_UNDERWATER_ON_GROUND, oGravity, oBuoyancy, OBJ_MOVE_ENTERED_WATER, oWallHitboxRadius } from "../include/object_constants"

import { cur_obj_become_tangible, cur_obj_extend_animation_if_at_end, cur_obj_become_intangible, cur_obj_hide, obj_mark_for_deletion, obj_angle_to_object, cur_obj_update_floor_and_walls, cur_obj_move_standard, abs_angle_diff, cur_obj_rotate_yaw_toward, cur_obj_reflect_move_angle_off_wall, approach_symmetric, obj_spawn_loot_yellow_coins, spawn_mist_particles, approach_s16_symmetric, spawn_object_relative, spawn_object_relative_with_scale, obj_turn_toward_object, spawn_object, cur_obj_update_dialog_with_cutscene, disable_time_stop_including_mario, cur_obj_init_animation_with_sound, cur_obj_check_if_near_animation_end, cur_obj_check_anim_frame, cur_obj_check_anim_frame_in_range, spawn_mist_particles_with_sound} from "./ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { INT_STATUS_INTERACTED, INT_STATUS_ATTACK_MASK, INT_STATUS_ATTACKED_MARIO, ATTACK_KICK_OR_TRIP, ATTACK_FAST_ATTACK } from "./Interaction"
import { atan2s, sqrtf } from "../engine/math_util"
import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"
import { coss, sins, int16, random_u16 } from "../utils"
import { PLATFORM_ON_TRACK_BP_RETURN_TO_START } from "./behaviors/platform_on_track.inc"
import { MODEL_TRAJECTORY_MARKER_BALL } from "../include/model_ids"
import { bhvTrackBall } from "./BehaviorData"
import { MODEL_BLUE_COIN } from "../include/model_ids"
import { bhvMrIBlueCoin } from "./BehaviorData"
import { OBJ_MOVE_IN_AIR } from "../include/object_constants"
import { oGraphYOffset } from "../include/object_constants"
import { GRAPH_RENDER_ACTIVE } from "../engine/graph_node"
import { MARIO_DIALOG_LOOK_UP, MARIO_DIALOG_STOP, set_mario_npc_dialog } from "./MarioActionsCutscene"
import { CUTSCENE_RACE_DIALOG } from "./Camera"
import { DIALOG_RESPONSE_NO } from "./IngameMenu"
import { cur_obj_play_sound_2 } from "./SpawnSound"
import { SOUND_OBJ_DEFAULT_DEATH, SOUND_OBJ_DIVING_INTO_WATER, SOUND_OBJ_DIVING_IN_WATER, SOUND_OBJ_STOMPED } from "../include/sounds"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"

export const ATTACK_HANDLER_NOP = 0
export const ATTACK_HANDLER_DIE_IF_HEALTH_NON_POSITIVE = 1
export const ATTACK_HANDLER_KNOCKBACK = 2
export const ATTACK_HANDLER_SQUISHED = 3
export const ATTACK_HANDLER_SPECIAL_KOOPA_LOSE_SHELL = 4
export const ATTACK_HANDLER_SET_SPEED_TO_ZERO = 5
export const ATTACK_HANDLER_SPECIAL_WIGGLER_JUMPED_ON = 6
export const ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED = 7
export const ATTACK_HANDLER_SQUISHED_WITH_BLUE_COIN = 8

export const POS_OP_SAVE_POSITION    = 0
export const POS_OP_COMPUTE_VELOCITY = 1
export const POS_OP_RESTORE_POSITION = 2

export const WAYPOINT_FLAGS_END = -1
export const WAYPOINT_FLAGS_INITIALIZED = 0x8000
export const WAYPOINT_MASK_00FF = 0x00FF
export const WAYPOINT_FLAGS_PLATFORM_ON_TRACK_PAUSE = 3

let sNumActiveFirePiranhaPlants;
let sNumKilledFirePiranhaPlants;
let sObjSavedPosX;
let sObjSavedPosY;
let sObjSavedPosZ;
let sMontyMoleHoleList;
let sMontyMoleLastKilledPosX;
let sMontyMoleLastKilledPosY;
let sMontyMoleLastKilledPosZ;
let sMasterTreadmill;

export const obj_is_rendering_enabled = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.gfx.flags & GRAPH_RENDER_ACTIVE) return true;
    else return false;
}

export const obj_get_pitch_from_vel = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    return -atan2s(o.rawData[oForwardVel], o.rawData[oVelY]);
}

/**
 * Show dialog proposing a race.
 * If the player accepts the race, then leave time stop enabled and Mario in the
 * text action so that the racing object can wait before starting the race.
 * If the player declines the race, then disable time stop and allow Mario to
 * move again.
 */
export const obj_update_race_proposition_dialog = (dialogID) => {
    let dialogResponse = cur_obj_update_dialog_with_cutscene(MARIO_DIALOG_LOOK_UP, DIALOG_FLAG_TURN_TO_MARIO | DIALOG_FLAG_TIME_STOP_ENABLED, CUTSCENE_RACE_DIALOG, dialogID);

    if (dialogResponse == DIALOG_RESPONSE_NO) {
        set_mario_npc_dialog(MARIO_DIALOG_STOP);
        disable_time_stop_including_mario();
    }

    return dialogResponse;
}

export const obj_set_dist_from_home = (distFromHome) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oPosX] = o.rawData[oHomeX] + distFromHome * coss(o.rawData[oMoveAngleYaw])
    o.rawData[oPosZ] = o.rawData[oHomeZ] + distFromHome * sins(o.rawData[oMoveAngleYaw])
}

export const obj_is_near_to_and_facing_mario = (maxDist, maxAngleDiff) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    if (o.rawData[oDistanceToMario] < maxDist && abs_angle_diff(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario]) < maxAngleDiff) {
        return true
    }
    return false
}

export const obj_perform_position_op = (op) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    switch (op) {
        case POS_OP_SAVE_POSITION:
            sObjSavedPosX = o.rawData[oPosX]
            sObjSavedPosY = o.rawData[oPosY]
            sObjSavedPosZ = o.rawData[oPosZ]
            break

        case POS_OP_COMPUTE_VELOCITY:
            o.rawData[oVelX] = o.rawData[oPosX] - sObjSavedPosX
            o.rawData[oVelY] = o.rawData[oPosY] - sObjSavedPosY
            o.rawData[oVelZ] = o.rawData[oPosZ] - sObjSavedPosZ
            break

        case POS_OP_RESTORE_POSITION:
            o.rawData[oPosX] = sObjSavedPosX
            o.rawData[oPosY] = sObjSavedPosY
            o.rawData[oPosZ] = sObjSavedPosZ
            break
    }
}

export const platform_on_track_update_pos_or_spawn_ball = (ballIndex, x, y, z) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let trackBall
    let nextWaypoint
    let prevWaypoint
    let amountToMove
    let dx
    let dy
    let dz
    let distToNextWaypoint

    if (ballIndex == 0 || ((o.rawData[oBehParams] >> 16) & 0x0080)) {
        nextWaypoint = o.ptrData[oPlatformOnTrackPrevWaypoint][0]

        if (ballIndex != 0) {
            amountToMove = 300.0 * ballIndex
        } else {
            obj_perform_position_op(POS_OP_SAVE_POSITION)
            o.rawData[oPlatformOnTrackPrevWaypointFlags] = 0
            amountToMove = o.rawData[oForwardVel]
        }

        do {
            prevWaypoint = nextWaypoint
            nextWaypoint = o.ptrData[oPlatformOnTrackPrevWaypoint][1]

            if (nextWaypoint.flags == WAYPOINT_FLAGS_END) {
                if (ballIndex == 0) {
                    o.rawData[oPlatformOnTrackPrevWaypointFlags] = WAYPOINT_FLAGS_END
                }

                if ((o.rawData[oBehParams] >> 16) & PLATFORM_ON_TRACK_BP_RETURN_TO_START) {
                    nextWaypoint = o.ptrData[oPlatformOnTrackStartWaypoint][0]
                } else {
                    return
                }
            }

            dx = nextWaypoint.pos[0] - x
            dy = nextWaypoint.pos[1] - y
            dz = nextWaypoint.pos[2] - z

            distToNextWaypoint = sqrtf(dx * dx + dy * dy + dz * dz)

            // Move directly to the next waypoint, even if it's farther away
            // than amountToMove
            amountToMove -= distToNextWaypoint
            x += dx
            y += dy
            z += dz
        } while (amountToMove > 0.0)

        // If we moved farther than amountToMove, move in the opposite direction
        // No risk of near-zero division: If distToNextWaypoint is close to
        // zero, then that means we didn't cross a waypoint this frame (since
        // otherwise distToNextWaypoint would equal the distance between two
        // waypoints, which should never be that small). But this implies that
        // amountToMove - distToNextWaypoint <= 0, and amountToMove is at least
        // 0.1 (from platform on track behavior)
        distToNextWaypoint = amountToMove / distToNextWaypoint
        x += dx * distToNextWaypoint
        y += dy * distToNextWaypoint
        z += dz * distToNextWaypoint

        if (ballIndex != 0) {
            trackBall = spawn_object_relative(o.rawData[oPlatformOnTrackBaseBallIndex] + ballIndex, 0, 0, 0, o, MODEL_TRAJECTORY_MARKER_BALL, bhvTrackBall)
        }
    }
}

export const cur_obj_spin_all_dimensions = (arg0, arg1) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let val24
    let val20
    let val1C
    let c
    let s
    let val10
    let val0C
    let val08
    let val04
    let val00

    if (o.rawData[oForwardVel] == 0.0) {
        val24 = val20 = val1C = 0.0

        if (o.rawData[oMoveFlags] & OBJ_MOVE_IN_AIR) {
            val20 = 50.0
        } else {
            val1C = Math.abs(arg0)
            val24 = Math.abs(arg1)
        }

        c = coss(o.rawData[oFaceAnglePitch])
        s = sins(o.rawData[oFaceAnglePitch])
        val08 = val1C * c + val20 * s
        val0C = val20 * c - val1C * s

        c = coss(o.rawData[oFaceAngleRoll])
        s = sins(o.rawData[oFaceAngleRoll])
        val04 = val24 * c + val0C * s
        val0C = val0C * c - val24 * s

        c = coss(o.rawData[oFaceAngleYaw])
        s = sins(o.rawData[oFaceAngleYaw])
        val10 = val04 * c - val08 * s
        val08 = val08 * c + val04 * s

        val04 = val24 * c - val1C * s
        val00 = val1C * c + val24 * s

        o.rawData[oPosX] = o.rawData[oHomeX] - val04 + val10
        o.rawData[oGraphYOffset] = val20 - val0C
        o.rawData[oPosZ] = o.rawData[oHomeZ] + val00 - val08
    }
}

export const obj_rotate_yaw_and_bounce_off_walls = (targetYaw, turnAmount) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
        targetYaw = cur_obj_reflect_move_angle_off_wall()
    }

    cur_obj_rotate_yaw_toward(targetYaw, turnAmount);
}

export const obj_get_pitch_to_home = (latDistToHome) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    return atan2s(latDistToHome, o.rawData[oPosY] - o.rawData[oHomeY]);
}

export const obj_compute_vel_from_move_pitch = (speed) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    o.rawData[oForwardVel] = speed * coss(o.rawData[oMoveAnglePitch]);
    o.rawData[oVelY] = speed * -sins(o.rawData[oMoveAnglePitch]);
}

export const clamp_s16 = (valueWrapper, minimum, maximum) => {
    if (valueWrapper.value <= minimum) {
        valueWrapper.value = minimum;
    } else if (valueWrapper.value >= maximum) {
        valueWrapper.value = maximum;
    } else {
        return 0
    }

    return true
}

export const clamp_f32 = (valueWrapper, minimum, maximum) => {
    if (valueWrapper.value <= minimum) {
        valueWrapper.value = minimum
    } else if (valueWrapper.value >= maximum) {
        valueWrapper.value = maximum
    } else {
        return false
    }

    return true
}

export const cur_obj_init_anim_extend = (anim) => {
    cur_obj_init_animation_with_sound(anim);
    cur_obj_extend_animation_if_at_end();
}

export const cur_obj_init_anim_and_check_if_end = (anim) => {
    cur_obj_init_animation_with_sound(anim);
    return cur_obj_check_if_near_animation_end();
}

export const cur_obj_init_anim_check_frame = (anim, frame) => {
    cur_obj_init_animation_with_sound(anim);
    return cur_obj_check_anim_frame(frame);
}

export const cur_obj_set_anim_if_at_end = (anim) => {
    if (cur_obj_check_if_near_animation_end()) {
        cur_obj_init_animation_with_sound(anim);
        return true
    }

    return false;
}

export const cur_obj_play_sound_at_anim_range = (frame1, frame2, sound) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let rangeLength = o.gfx.animInfo.animAccel / 0x10000

    if (rangeLength <= 0) {
        rangeLength = 1
    }

    if (cur_obj_check_anim_frame_in_range(frame1, rangeLength) || cur_obj_check_anim_frame_in_range(frame2, rangeLength)) {
        cur_obj_play_sound_2(sound);
        return true;
    }

    return false;
}

export const obj_turn_pitch_toward_mario = (targetOffsetY, turnAmount) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    o.rawData[oPosY] -= targetOffsetY
    let targetPitch = obj_turn_toward_object(o, gMarioObject, O_MOVE_ANGLE_PITCH_INDEX, turnAmount)
    o.rawData[oPosY] += targetOffsetY

    return targetPitch
}

export const approach_f32_ptr = (pxWrapper, target, delta) => {
    if (pxWrapper.px > target) {
        delta = -delta
    }

    pxWrapper.px += delta

    if ((pxWrapper.px - target) * delta >= 0) {
        pxWrapper.px = target
        return true
    }

    return false
}

// JS NOTE: "ptr" is given as an indexed object <o> and an index <px>
// Try this style out to eliminate the need for a wrapper.
export const approach_number_ptr = (o, px, target, delta) => {
    if (o[px] > target) delta = -delta

    o[px] += delta

    if ((o[px] - target) * delta >= 0) {
        o[px] = target
        return true
    }
    return false
}

export const obj_forward_vel_approach = (target, delta) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    return approach_number_ptr(o.rawData, oForwardVel, target, delta)
}

export const obj_y_vel_approach = (target, delta) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    return approach_number_ptr(o.rawData, oVelY, target, delta)
}

export const obj_move_pitch_approach = (target, delta) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oMoveAnglePitch] = approach_symmetric(o.rawData[oMoveAnglePitch], target, delta)

    if (o.rawData[oMoveAnglePitch] == target) {
        return true
    }

    return false
}

export const obj_face_pitch_approach = (target, delta) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oFaceAnglePitch] = approach_symmetric(o.rawData[oFaceAnglePitch], target, delta)

    if (int16(o.rawData[oFaceAnglePitch]) == target) {
        return true
    }

    return false
}

export const obj_face_yaw_approach = (targetYaw, deltaYaw) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    o.rawData[oFaceAngleYaw] = approach_s16_symmetric(o.rawData[oFaceAngleYaw], targetYaw, deltaYaw)

    if (o.rawData[oFaceAngleYaw] == targetYaw) {
        return true
    }

    return false
}

export const obj_face_roll_approach = (targetRoll, deltaRoll) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    o.rawData[oFaceAngleRoll] = approach_s16_symmetric(o.rawData[oFaceAngleRoll], targetRoll, deltaRoll);

    if (o.rawData[oFaceAngleRoll] == targetRoll) {
        return true
    }

    return false
}

// wrapper.angelVel, wrapper.angle
export const obj_smooth_turn = (wrapper, targetAngle, targetSpeedProportion, accel, minSpeed, maxSpeed) => {
    let currentSpeed;
    let currentAngle = wrapper.angle;
    const w = {}
    wrapper.angleVel = approach_symmetric(wrapper.angleVel, (targetAngle - currentAngle) * targetSpeedProportion, accel);

    w.value = Math.abs(wrapper.angleVel);
    clamp_s16(w, minSpeed, maxSpeed);
    currentSpeed = w.value;

    angle = approach_symmetric(angle, targetAngle, currentSpeed);
    return angle == targetAngle;
}

//this lived above random_linear_offset in the source,
export const obj_roll_to_match_yaw_turn = (targetYaw, maxRoll, rollSpeed) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const w = {}

    const targetRoll = o.rawData[oMoveAngleYaw] - targetYaw;
    w.value = targetRoll;
    const clampReturn = clamp_s16(w, -maxRoll, maxRoll);
    targetRoll = w.value;
    obj_face_roll_approach(clampReturn, rollSpeed);
    //unsure if this needs a return, no return in the original C
}

export const random_linear_offset = (base, range) => {
    return parseInt(base + (range * Math.random()))
}

export const random_mod_offset = (base, step, mod) => {
    return base + step * (random_u16() % mod);
}

export const obj_random_fixed_turn = (delta) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    return o.rawData[oMoveAngleYaw] + parseInt(BhvCmds.random_sign() * delta)
}


/**
 * Begin by increasing the object's scale by *scaleVel, and slowly decreasing
 * scaleVel. Once the object starts to shrink, wait a bit, and then begin to
 * scale the object toward endScale. The first time it reaches below
 * shootFireScale during this time, return 1.
 * Return -1 once it's reached endScale.
 */
export const obj_grow_then_shrink = (scaleVel, shootFireScale, endScale) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] < 2) {

        o.gfx.scale[0] += scaleVel
        
        scaleVel -= 0.01
        if (scaleVel > -0.03) {
            o.rawData[oTimer] = 0
        }
    } else if (o.rawData[oTimer] > 10) {

        if (approach_f32_ptr(o.gfx.scale[0], endScale, 0.05)) {
            return -1
        } else if (scaleVel != 0.0 /*&& o.gfx.scale[0] < shootFireScale*/) {
            scaleVel = 0.0;
            return true
        }
    }

    return false
}

export const oscillate_toward = (valueObj, velObj, target, velCloseToZero, accel, slowdown) => {
    let startValue = valueObj.value
    valueObj.value += velObj.value


    if (valueObj.value == target
        || ((valueObj.value - target) * (startValue - target) < 0 && velObj.value > -velCloseToZero
            && velObj.value < velCloseToZero)) {
        valueObj.value = target
        velObj.value = 0.0
        return true
    } else {
        if (valueObj.value >= target) {
            accel = -accel
        }
        if (velObj.value * accel < 0.0) {
            accel *= slowdown
        }

        velObj.value += accel
    }

    return false
}

export const obj_update_blinking = (blinkTimer, baseCycleLength, cycleLengthRange, blinkLength) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (blinkTimer.value != 0) {
        blinkTimer.value -= 1
    } else {
        blinkTimer.value = random_linear_offset(baseCycleLength, cycleLengthRange)
    }

    if (blinkTimer.value > blinkLength) {
        o.rawData[oAnimState] = 0
    } else {
        o.rawData[oAnimState] = 1
    }
}

export const obj_resolve_object_collisions = (targetYawWrapper) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    if (o.numCollidedObjs != 0) {
        const otherObject = o.collidedObjs[0]
        if (otherObject != gMarioObject) {
            //! If one object moves after collisions are detected and this code
            //  runs, the objects can move toward each other (transport cloning)

            const dx = otherObject.rawData[oPosX] - o.rawData[oPosX]
            const dz = otherObject.rawData[oPosZ] - o.rawData[oPosZ]
            const angle = atan2s(dx, dz) //! This should be atan2s(dz, dx)

            const radius = o.hitboxRadius
            const otherRadius = otherObject.hitboxRadius
            const relativeRadius = radius / (radius + otherRadius)

            const newCenterX = o.rawData[oPosX] + dx * relativeRadius
            const newCenterZ = o.rawData[oPosZ] + dz * relativeRadius

            o.rawData[oPosX] = newCenterX - radius * coss(angle)
            o.rawData[oPosZ] = newCenterZ - radius * sins(angle)

            otherObject.rawData[oPosX] = newCenterX + otherRadius * coss(angle)
            otherObject.rawData[oPosZ] = newCenterZ + otherRadius * sins(angle)

            if (targetYawWrapper.value && abs_angle_diff(o.rawData[oMoveAngleYaw], angle) < 0x4000) {
                // Bounce off object (or it would, if the above atan2s bug
                // were fixed)
                targetYawWrapper.value = parseInt(angle - o.rawData[oMoveAngleYaw] + angle + 0x8000)
                return true
            }
        }
    }

    return false
}

export const obj_bounce_off_walls_edges_objects = (targetYawWrapper) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
        targetYawWrapper.value = cur_obj_reflect_move_angle_off_wall()
    } else if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_EDGE) {
        targetYawWrapper.value = int16(o.rawData[oMoveAngleYaw] + 0x8000)
    } else if (!obj_resolve_object_collisions(targetYawWrapper)) {
        return false
    }

    return true
}

export const obj_resolve_collisions_and_turn = (targetYaw, turnSpeed) => {
    obj_resolve_object_collisions({})

    if (cur_obj_rotate_yaw_toward(targetYaw, turnSpeed)) {
        return false
    } else {
        return true
    }
}

export const obj_die_if_health_non_positive = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oHealth] <= 0) {
        if (o.rawData[oDeathSound] == 0) {
            spawn_mist_particles_with_sound(SOUND_OBJ_DEFAULT_DEATH);
            spawn_mist_particles()
        } else if (o.rawData[oDeathSound] > 0) {
            spawn_mist_particles_with_sound(o.rawData[oDeathSound]);
            spawn_mist_particles()
        } else {
            spawn_mist_particles()
        }

        if (parseInt(o.rawData[oNumLootCoins]) < 0) {
            spawn_object(o, MODEL_BLUE_COIN, bhvMrIBlueCoin)
        } else {
            obj_spawn_loot_yellow_coins(o, o.rawData[oNumLootCoins], 20.0)
        }

        if (o.rawData[oHealth] < 0) {
            cur_obj_hide()
            cur_obj_become_intangible()
        } else {
            obj_mark_for_deletion(o)
        }
    }
}

export const obj_set_knockback_action = (attackType) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    switch (attackType) {
        case ATTACK_KICK_OR_TRIP:
        case ATTACK_FAST_ATTACK:
            o.rawData[oAction] = OBJ_ACT_VERTICAL_KNOCKBACK
            o.rawData[oForwardVel] = 20.0
            o.rawData[oVelY] = 50.0
            break

        default:
            o.rawData[oAction] = OBJ_ACT_HORIZONTAL_KNOCKBACK
            o.rawData[oForwardVel] = 50.0
            o.rawData[oVelY] = 30.0
            break
    }

    o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
    o.rawData[oMoveAngleYaw] = obj_angle_to_object(gMarioObject, o)
}

export const obj_set_squished_action = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    cur_obj_play_sound_2(SOUND_OBJ_STOMPED);
    o.rawData[oAction] = OBJ_ACT_SQUISHED;
}

export const obj_die_if_above_lava_and_health_non_positive = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oMoveFlags] & OBJ_MOVE_UNDERWATER_ON_GROUND) {
        if (o.rawData[oGravity] + o.rawData[oBuoyancy] > 0.0 || SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ]) - o.rawData[oPosY] < 150.0)
            return false
    } else if (!(o.rawData[oMoveFlags] & OBJ_MOVE_ABOVE_LAVA)) {
        if (o.rawData[oMoveFlags] & OBJ_MOVE_ENTERED_WATER) {
            if (o.rawData[oWallHitboxRadius] < 200.0)
                cur_obj_play_sound_2(SOUND_OBJ_DIVING_INTO_WATER);
            else
                cur_obj_play_sound_2(SOUND_OBJ_DIVING_IN_WATER);
        }
        return false;
    }

    obj_die_if_health_non_positive();
    return true;
}

export const obj_handle_attacks = (hitbox, attackedMarioAction, attackHandlers) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    obj_set_hitbox(o, hitbox)

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if (o.rawData[oInteractStatus] & INT_STATUS_ATTACKED_MARIO) {
            if (o.rawData[oAction] != attackedMarioAction) {
                o.rawData[oAction] = attackedMarioAction
                o.rawData[oTimer] = 0
            }
        } else {
            const attackType = o.rawData[oInteractStatus] & INT_STATUS_ATTACK_MASK

            switch (attackHandlers[attackType - 1]) {
                case ATTACK_HANDLER_NOP:
                    break;

                case ATTACK_HANDLER_DIE_IF_HEALTH_NON_POSITIVE:
                    obj_die_if_health_non_positive();
                    break;

                case ATTACK_HANDLER_KNOCKBACK:
                    obj_set_knockback_action(attackType);
                    break;

                case ATTACK_HANDLER_SQUISHED:
                    obj_set_squished_action();
                    break;
                
                case ATTACK_HANDLER_SPECIAL_KOOPA_LOSE_SHELL:
                    // shelled_koopa_attack_handler(attackType);
                    console.log("shelled_koopa_attack_handler not implemented")
                    break;
                
                case ATTACK_HANDLER_SET_SPEED_TO_ZERO:
                    // obj_set_speed_to_zero();
                    console.log("obj_set_speed_to_zero not implemented")
                    break;
                
                case ATTACK_HANDLER_SPECIAL_WIGGLER_JUMPED_ON:
                    // wiggler_jumped_on_attack_handler();
                    console.log("wiggler_jumped_on_attack_handler not implemented")
                    break;

                case ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED:
                    // huge_goomba_weakly_attacked();
                    console.log("huge_goomba_weakly_attacked not implemented")
                    break;
                
                case ATTACK_HANDLER_SQUISHED_WITH_BLUE_COIN:
                    o.rawData[oNumLootCoins] = -1;
                    obj_set_squished_action();
                    break;
                    
            }

            o.rawData[oInteractStatus] = 0
            return attackType
        }
    }

    o.rawData[oInteractStatus] = 0
    return false
}

export const obj_act_knockback = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    cur_obj_update_floor_and_walls()

    if (o.gfx.animInfo.curAnim) {
        cur_obj_extend_animation_if_at_end()
    }

    if ((o.rawData[oMoveFlags] &
        (OBJ_MOVE_MASK_ON_GROUND | OBJ_MOVE_MASK_IN_WATER | OBJ_MOVE_HIT_WALL | OBJ_MOVE_ABOVE_LAVA))
        || (o.rawData[oAction] == OBJ_ACT_VERTICAL_KNOCKBACK && o.rawData[oTimer] >= 9)) {
        obj_die_if_health_non_positive()
    }

    cur_obj_move_standard(-78)
}

export const obj_act_squished = (baseScale) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const targetScaleY = baseScale * 0.3

    cur_obj_update_floor_and_walls()

    if (o.gfx.animInfo.curAnim) {
        cur_obj_extend_animation_if_at_end()
    }

    const result = approach_number_ptr(o.gfx.scale, 1, targetScaleY, baseScale * 0.14)
    if (result) {
        o.gfx.scale[0] = baseScale * 2.0 - o.gfx.scale[1]
        o.gfx.scale[2] = baseScale * 2.0 - o.gfx.scale[1]

        if (o.rawData[oTimer] >= 16) {
            obj_die_if_health_non_positive()
        }

    }

    o.rawData[oForwardVel] = 0.0
    cur_obj_move_standard(-78)

}

export const obj_update_standard_actions = (scale) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oAction] < 100) return true
    else {
        cur_obj_become_intangible()

        switch (o.rawData[oAction]) {
            case OBJ_ACT_HORIZONTAL_KNOCKBACK:
            case OBJ_ACT_VERTICAL_KNOCKBACK:
                obj_act_knockback(scale)
                break
            case OBJ_ACT_SQUISHED:
                obj_act_squished(scale)
                break
        }

        return false
    }

}

export const obj_check_attacks = (hitbox, attackedMarioAction) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    obj_set_hitbox(o, hitbox)

    //! Dies immediately if above lava
    if (false) {
        return true
    } else if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if (o.rawData[oInteractStatus] & INT_STATUS_ATTACKED_MARIO) {
            if (o.rawData[oAction] != attackedMarioAction) {
                o.rawData[oAction] = attackedMarioAction
                o.rawData[oTimer] = 0
            }
        } else {
            const attackType = o.rawData[oInteractStatus] & INT_STATUS_ATTACK_MASK
            obj_die_if_health_non_positive()
            o.rawData[oInteractStatus] = 0
            return attackType
        }
    }

    o.rawData[oInteractStatus] = 0
    return false
}

export const obj_move_for_one_second = (endAction) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] > 30) {
        o.rawData[oAction] = endAction
        return true
    }
    
    cur_obj_move_standard(-78);
    return false;
}

/**
 * If we are far from home (> threshold away), then set oAngleToMario to the
 * angle to home and oDistanceToMario to 25000.
 * If we are close to home, but Mario is far from us (> threshold away), then
 * keep oAngleToMario the same and set oDistanceToMario to 20000.
 * If we are close to both home and Mario, then keep both oAngleToMario and
 * oDistanceToMario the same.
 *
 * The point of this function is to avoid having to write extra code to get
 * the object to return to home. When Mario is far away and the object is far
 * from home, it could theoretically re-use the "approach Mario" logic to approach
 * its home instead.
 * However, most objects that use this function handle the far-from-home case
 * separately anyway.
 * This function causes seemingly erroneous behavior in some objects that try to
 * attack Mario (e.g. fly guy shooting fire or lunging), especially when combined
 * with partial updates.
 */
export const treat_far_home_as_mario = (threshold) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    let dx = o.rawData[oHomeX] - o.rawData[oPosX]
    let dy = o.rawData[oHomeY] - o.rawData[oPosY]
    let dz = o.rawData[oHomeZ] - o.rawData[oPosZ]
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

    if (distance > threshold) {
        o.rawData[oAngleToMario] = atan2s(dz, dx)
        o.rawData[oDistanceToMario] = 25000.0
    } else {
        dx = o.rawData[oHomeX] - gMarioObject.rawData[oPosX]
        dy = o.rawData[oHomeY] - gMarioObject.rawData[oPosY]
        dz = o.rawData[oHomeZ] - gMarioObject.rawData[oPosZ]
        distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance > threshold) {
            o.rawData[oDistanceToMario] = 20000.0
        }
    }
}

export const obj_spit_fire = (relativePosX, relativePosY, relativePosZ, scale, model, startSpeed, endSpeed, movePitch) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let obj = spawn_object_relative_with_scale(1, relativePosX, relativePosY, relativePosZ, scale, o, model, gLinker.behaviors.bhvSmallPiranhaFlame)

    if (obj != null) {
        obj.rawData[oSmallPiranhaFlameStartSpeed] = startSpeed
        obj.rawData[oSmallPiranhaFlameEndSpeed] = endSpeed
        obj.rawData[oSmallPiranhaFlameModel] = model
        obj.rawData[oMoveAnglePitch] = movePitch
    }
}