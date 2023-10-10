/**
 * Behavior for bhvPlatformOnTrack and bhvTrackBall.
 * The platform spawns up to 5 track balls at a time, which then despawn
 * themselves as the platform moves past them.
 */

import { checkerboard_platform_seg8_collision_0800D710 } from "../../actors/checkerboard_platform/collision.inc";
import { GRAPH_RENDER_INVISIBLE } from "../../engine/graph_node";
import { ACTIVE_FLAG_IN_DIFFERENT_ROOM, oAction, oAngleToMario, oAngleVelRoll, oAngleVelYaw, oBehParams, oBehParams2ndByte, oDistanceToMario, oFaceAngleRoll, oFaceAngleYaw, oForwardVel, oHomeX, oHomeY, oHomeZ, oMoveAnglePitch, oMoveAngleYaw, oPlatformOnTrackBaseBallIndex, oPlatformOnTrackDistMovedSinceLastBall, oPlatformOnTrackIsNotHMC, oPlatformOnTrackIsNotSkiLift, oPlatformOnTrackOffsetY, oPlatformOnTrackPitch, oPlatformOnTrackPrevWaypoint, oPlatformOnTrackPrevWaypointFlags, oPlatformOnTrackSkiLiftRollVel, oPlatformOnTrackStartWaypoint, oPlatformOnTrackType, oPlatformOnTrackWasStoodOn, oPlatformOnTrackYaw, oPosX, oPosY, oPosZ, oTimer, oVelX, oVelY, oVelZ } from "../../include/object_constants";
import { SOUND_ENV_ELEVATOR1, SOUND_ENV_ELEVATOR3, SOUND_GENERAL_UNKNOWN4_LOWPRIO } from "../../include/sounds";
import { bitfs_seg7_trajectory_070159AC } from "../../levels/bitfs/areas/1/trajectory.inc";
import { bitfs_seg7_collision_070157E0 } from "../../levels/bitfs/platform_on_track/collision.inc";
import { ccm_seg7_trajectory_0701669C } from "../../levels/ccm/areas/1/trajectory.inc";
import { ccm_seg7_collision_070163F8 } from "../../levels/ccm/ropeway_lift/collision.inc";
import { hmc_seg7_trajectory_0702B86C } from "../../levels/hmc/areas/1/trajectory.inc";
import { lll_seg7_trajectory_0702856C, lll_seg7_trajectory_07028660 } from "../../levels/lll/areas/2/trajectory.inc";
import { rr_seg7_trajectory_0702EC3C, rr_seg7_trajectory_0702ECC0, rr_seg7_trajectory_0702ED9C, rr_seg7_trajectory_0702EEE0 } from "../../levels/rr/areas/1/trajectory.inc";
import { rr_seg7_collision_07029038 } from "../../levels/rr/flying_carpet/collision.inc";
import { sins } from "../../utils";
import { approach_f32_ptr, clamp_f32, clamp_s16, obj_face_roll_approach, obj_face_yaw_approach, obj_forward_vel_approach, oscillate_toward, platform_on_track_update_pos_or_spawn_ball, WAYPOINT_FLAGS_END, WAYPOINT_FLAGS_PLATFORM_ON_TRACK_PAUSE } from "../ObjBehaviors2";
import { abs_angle_diff, cur_obj_move_using_fvel_and_gravity, cur_obj_wait_then_blink, obj_mark_for_deletion } from "../ObjectHelpers";
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound";

/* Platform on track */
    /* oAction */
const PLATFORM_ON_TRACK_ACT_INIT             = 0
const PLATFORM_ON_TRACK_ACT_WAIT_FOR_MARIO   = 1
const PLATFORM_ON_TRACK_ACT_MOVE_ALONG_TRACK = 2
const PLATFORM_ON_TRACK_ACT_PAUSE_BRIEFLY    = 3
const PLATFORM_ON_TRACK_ACT_FALL             = 4

    /* oBehParams >> 16 */
export const PLATFORM_ON_TRACK_BP_MASK_PATH       = 0xF
export const PLATFORM_ON_TRACK_BP_MASK_TYPE       = (0x7 << 4)
export const PLATFORM_ON_TRACK_BP_RETURN_TO_START = (1 << 8)
export const PLATFORM_ON_TRACK_BP_DONT_DISAPPEAR  = (1 << 9)
export const PLATFORM_ON_TRACK_BP_DONT_TURN_YAW   = (1 << 10)
export const PLATFORM_ON_TRACK_BP_DONT_TURN_ROLL  = (1 << 11)

const PLATFORM_ON_TRACK_TYPE_CARPET    = 0
const PLATFORM_ON_TRACK_TYPE_SKI_LIFT  = 1
const PLATFORM_ON_TRACK_TYPE_CHECKERED = 2
const PLATFORM_ON_TRACK_TYPE_GRATE     = 3

/**
 * Collision models for the different types of platforms.
 */

const sPlatformOnTrackCollisionModels = [
    rr_seg7_collision_07029038,
    ccm_seg7_collision_070163F8,
    checkerboard_platform_seg8_collision_0800D710,
    bitfs_seg7_collision_070157E0,
]

/**
 * Paths for the different instances of these platforms.
 */
const sPlatformOnTrackPaths = [
    rr_seg7_trajectory_0702EC3C,
    rr_seg7_trajectory_0702ECC0,
    ccm_seg7_trajectory_0701669C,
    bitfs_seg7_trajectory_070159AC,
    hmc_seg7_trajectory_0702B86C,
    lll_seg7_trajectory_0702856C,
    lll_seg7_trajectory_07028660,
    rr_seg7_trajectory_0702ED9C,
    rr_seg7_trajectory_0702EEE0,
]

/**
 * Despawn all track balls and enter the init action.
 */
const platform_on_track_reset = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_INIT
    // This will cause the track balls to all despawn
    o.rawData[oPlatformOnTrackBaseBallIndex] += 99
}

const platform_on_track_mario_not_on_platform = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    if (!((o.rawData[oBehParams] >> 16) & PLATFORM_ON_TRACK_BP_DONT_DISAPPEAR)) {
        // Once oTimer reaches 150, blink 40 times
        if (cur_obj_wait_then_blink(150, 40)) {
            platform_on_track_reset()
            o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
        }
    }
}

export const bhv_platform_on_track_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        let pathIndex = o.rawData[oBehParams] >> 16 & PLATFORM_ON_TRACK_BP_MASK_PATH
        o.rawData[oPlatformOnTrackType] = (o.rawData[oBehParams] >> 16 & PLATFORM_ON_TRACK_BP_MASK_TYPE) >> 4

        o.rawData[oPlatformOnTrackIsNotSkiLift] = o.rawData[oPlatformOnTrackType] - PLATFORM_ON_TRACK_TYPE_SKI_LIFT

        o.collisionData = sPlatformOnTrackCollisionModels[o.rawData[oPlatformOnTrackType]]

        o.ptrData[oPlatformOnTrackStartWaypoint] = sPlatformOnTrackPaths[pathIndex]

        o.rawData[oPlatformOnTrackIsNotHMC] = pathIndex - 4

        o.rawData[oBehParams2ndByte] = o.rawData[oMoveAngleYaw]

        if (o.rawData[oPlatformOnTrackType] == PLATFORM_ON_TRACK_TYPE_CHECKERED) {
            o.gfx.scale[1] = 2.0
        }
    }
}

const platform_on_track_act_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.ptrData[oPlatformOnTrackPrevWaypoint] = o.ptrData[oPlatformOnTrackStartWaypoint]
    o.rawData[oPlatformOnTrackPrevWaypointFlags] = 0
    o.rawData[oPlatformOnTrackBaseBallIndex] = 0

    o.rawData[oPosX] = o.rawData[oHomeX] = o.ptrData[oPlatformOnTrackStartWaypoint][0].pos[0]
    o.rawData[oPosY] = o.rawData[oHomeY] = o.ptrData[oPlatformOnTrackStartWaypoint][0].pos[1]
    o.rawData[oPosZ] = o.rawData[oHomeZ] = o.ptrData[oPlatformOnTrackStartWaypoint][0].pos[2]

    o.rawData[oFaceAngleYaw] = o.rawData[oBehParams2ndByte]
    o.rawData[oForwardVel] = o.rawData[oVelX] = o.rawData[oVelY] = o.rawData[oVelZ] = o.rawData[oPlatformOnTrackDistMovedSinceLastBall] = 0.0

    o.rawData[oPlatformOnTrackWasStoodOn] = false

    if (o.rawData[oPlatformOnTrackIsNotSkiLift]) {
        o.rawData[oFaceAngleRoll] = 0
    }

    // Spawn track balls
    for (let i = 1; i < 6; i++) {
        platform_on_track_update_pos_or_spawn_ball(i, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ])
    }

    o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_WAIT_FOR_MARIO
}

/**
 * Wait for mario to stand on the platform for 20 frames, then begin moving.
 */
const platform_on_track_act_wait_for_mario = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    if (gMarioObject.platform == o) {
        if (o.rawData[oTimer] > 20) {
            o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_MOVE_ALONG_TRACK
        }
    } else {
        if (o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
            platform_on_track_reset()
        }

        o.rawData[oTimer] = 0
    }
}

/**
 * Move along the track. After reaching the end, either start falling,
 * return to the init action, or continue moving back to the start waypoint.
 */
const platform_on_track_act_move_along_track = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const w = {}

    let initialAngle
    let pxWrapper

    if (!o.rawData[oPlatformOnTrackIsNotSkiLift]) {
        cur_obj_play_sound_1(SOUND_ENV_ELEVATOR3)
    } else if (!o.rawData[oPlatformOnTrackIsNotHMC]) {
        cur_obj_play_sound_2(SOUND_ENV_ELEVATOR1)
    }

    // Fall after reaching the last waypoint if desired
    if (o.rawData[oPlatformOnTrackPrevWaypointFlags] == WAYPOINT_FLAGS_END && !(o.rawData[oBehParams] >> 16) & PLATFORM_ON_TRACK_BP_RETURN_TO_START) {
        o.rawData[oAction] == PLATFORM_ON_TRACK_ACT_FALL
    } else {
        // The ski lift should pause or stop after reaching a special waypoint
        if (o.rawData[oPlatformOnTrackPrevWaypointFlags] != 0 && !o.rawData[oPlatformOnTrackIsNotSkiLift]) {
            if (o.rawData[oPlatformOnTrackPrevWaypointFlags] == WAYPOINT_FLAGS_END || o.rawData[oPlatformOnTrackPrevWaypointFlags] == WAYPOINT_FLAGS_PLATFORM_ON_TRACK_PAUSE) {
                cur_obj_play_sound_2(SOUND_GENERAL_UNKNOWN4_LOWPRIO)

                o.rawData[oForwardVel] = 0.0
                if (o.rawData[oPlatformOnTrackPrevWaypointFlags] == WAYPOINT_FLAGS_END) {
                    o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_INIT
                } else {
                    o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_PAUSE_BRIEFLY
                }
            }
        } else {
            // The ski lift accelerates, while the others instantly start
            if (!o.rawData[oPlatformOnTrackIsNotSkiLift]) {
                obj_forward_vel_approach(10.0, 0.1)
            } else {
                o.rawData[oForwardVel] = 10.0
            }

            // Spawn a new track ball if necessary
            pxWrapper = { px: o.rawData[oPlatformOnTrackDistMovedSinceLastBall] }
            if (approach_f32_ptr(pxWrapper, 300.0, o.rawData[oForwardVel])) {
                o.rawData[oPlatformOnTrackDistMovedSinceLastBall] = pxWrapper.px
                o.rawData[oPlatformOnTrackDistMovedSinceLastBall] -= 300.0

                o.rawData[oHomeX] = o.rawData[oPosX]
                o.rawData[oHomeY] = o.rawData[oPosY]
                o.rawData[oHomeZ] = o.rawData[oPosZ]
                o.rawData[oPlatformOnTrackBaseBallIndex] = o.rawData[oPlatformOnTrackBaseBallIndex] + 1

                platform_on_track_update_pos_or_spawn_ball(5, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ])
            } else {
                o.rawData[oPlatformOnTrackDistMovedSinceLastBall] = pxWrapper.px
            }
        }

        platform_on_track_update_pos_or_spawn_ball(0, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])

        o.rawData[oMoveAnglePitch] = o.rawData[oPlatformOnTrackPitch]
        o.rawData[oMoveAngleYaw] = o.rawData[oPlatformOnTrackYaw]

        //! Both oAngleVelYaw and oAngleVelRoll aren't reset until the platform
        //  starts moving again, resulting in unexpected platform displacement
        //  after reappearing

        // Turn face yaw and compute yaw vel
        if (!((o.rawData[oBehParams] >> 16) & PLATFORM_ON_TRACK_BP_DONT_TURN_YAW)) {
            let targetFaceYaw = o.rawData[oMoveAngleYaw] + 0x4000
            let yawSpeed = abs_angle_diff(targetFaceYaw, o.rawData[oFaceAngleYaw]) / 20

            initialAngle = o.rawData[oFaceAngleYaw]
            w.value = yawSpeed
            clamp_s16(w, 100, 500)
            obj_face_yaw_approach(targetFaceYaw, w.value)
            yawSpeed = w.value
            o.rawData[oAngleVelYaw] = o.rawData[oFaceAngleYaw] - initialAngle
        }

        // Turn face roll and compute roll vel
        if ((o.rawData[oBehParams] >> 16) & PLATFORM_ON_TRACK_BP_DONT_TURN_ROLL) {
            let rollSpeed = abs_angle_diff(o.rawData[oMoveAnglePitch], o.rawData[oFaceAngleRoll]) / 20

            initialAngle = o.rawData[oFaceAngleRoll]
            w.value = rollSpeed
            clamp_s16(w, 100, 500)
            //! If the platform is moving counterclockwise upward or
            //  clockwise downward, this will be backward
            obj_face_roll_approach(o.rawData[oMoveAnglePitch], w.value)
            rollSpeed = w.value
            o.rawData[oAngleVelRoll] = o.rawData[oFaceAngleRoll] - initialAngle
        }
    }

    if (gMarioObject.platform != o) {
        platform_on_track_mario_not_on_platform()
    } else {
        o.rawData[oTimer] = 0
        o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
    }
}

/**
 * Wait 20 frames then continue moving.
 */
const platform_on_track_act_pause_briefly = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] > 20) {
        o.rawData[oAction] = PLATFORM_ON_TRACK_ACT_MOVE_ALONG_TRACK
    }
}

/**
 * Fall downward with no terminal velocity, stopping after reaching y = -12k
 * and eventually blinking and disappearing.
 */
const platform_on_track_act_fall = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    cur_obj_move_using_fvel_and_gravity()

    if (gMarioObject.platform != o) {
        platform_on_track_mario_not_on_platform()
    } else {
        o.rawData[oTimer] = 0
        //! Doesn't ensure visibility
    }
}

/**
 * Control the rocking of the ski lift.
 */
const platform_on_track_rock_ski_lift = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let targetRoll = 0

    o.rawData[oFaceAngleRoll] += o.rawData[oPlatformOnTrackSkiLiftRollVel]

    // Tilt away from the moving direction and toward mario
    if (gMarioObject.platform == o) {
        targetRoll = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw]) * -50.0 + (o.rawData[oDistanceToMario] * sins(o.rawData[oAngleToMario] - o.rawData[oFaceAngleYaw]) * 4.0)
    }
    const valueWrapper = { value: o.rawData[oFaceAngleRoll] }
    const velWrapper = { value: o.rawData[oPlatformOnTrackSkiLiftRollVel] }
    oscillate_toward(
        /* value          */ valueWrapper,
        /* vel            */ velWrapper,
        /* target         */ targetRoll,
        /* velCloseToZero */ 5.0,
        /* accel          */ 6.0,
        /* slowdown       */ 1.5
    )
    o.rawData[oFaceAngleRoll] = valueWrapper.value
    clamp_f32(velWrapper, -100.0, 100.0)
    o.rawData[oPlatformOnTrackSkiLiftRollVel] = velWrapper.value
}

/**
 * Update function for bhvPlatformOnTrack.
 */
 export const bhv_platform_on_track_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let pxWrapper

    switch (o.rawData[oAction]) {
        case PLATFORM_ON_TRACK_ACT_INIT:
            platform_on_track_act_init()
            break
        case PLATFORM_ON_TRACK_ACT_WAIT_FOR_MARIO:
            platform_on_track_act_wait_for_mario()
            break
        case PLATFORM_ON_TRACK_ACT_MOVE_ALONG_TRACK:
            platform_on_track_act_move_along_track()
            break
        case PLATFORM_ON_TRACK_ACT_PAUSE_BRIEFLY:
            platform_on_track_act_pause_briefly()
            break
        case PLATFORM_ON_TRACK_ACT_FALL:
            platform_on_track_act_fall()
            break
    }

    if (!o.rawData[oPlatformOnTrackIsNotSkiLift]) {
        platform_on_track_rock_ski_lift()
    } else if (o.rawData[oPlatformOnTrackType] == PLATFORM_ON_TRACK_TYPE_CARPET) {
        if (!o.rawData[oPlatformOnTrackWasStoodOn] && gMarioObject.platform == o) {
            o.rawData[oPlatformOnTrackOffsetY] = -8.0
            o.rawData[oPlatformOnTrackWasStoodOn] = true
        }

        pxWrapper = { px: o.rawData[oPlatformOnTrackOffsetY] }
        approach_f32_ptr(pxWrapper, 0.0, 0.5)
        o.rawData[oPlatformOnTrackOffsetY] = pxWrapper.px
        o.rawData[oPosY] += o.rawData[oPlatformOnTrackOffsetY]
    }
}

/**
 * Update function for bhvTrackBall.
 */
export const bhv_track_ball_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let relativeIndex = o.rawData[oBehParams2ndByte] - o.parentObj.rawData[oPlatformOnTrackBaseBallIndex] - 1

    if (relativeIndex < 1 || relativeIndex > 5) {
        obj_mark_for_deletion(o)
    }
}

gLinker.bhv_platform_on_track_init = bhv_platform_on_track_init
gLinker.bhv_platform_on_track_update = bhv_platform_on_track_update
gLinker.bhv_track_ball_update = bhv_track_ball_update
