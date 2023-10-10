// bowling_ball.c.inc
import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_hide, cur_obj_set_pos_via_transform, cur_obj_unhide,
obj_mark_for_deletion, obj_copy_pos, obj_copy_scale, cur_obj_push_mario_away_from_cylinder,
lateral_dist_between_objects, spawn_object_relative, spawn_mist_particles, approach_s16_symmetric,
cur_obj_move_standard, cur_obj_spawn_particles, cur_obj_follow_path, cur_obj_update_floor_and_walls,
cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_scale, obj_set_hitbox } from "../ObjectHelpers"
import { is_point_within_radius_of_mario, object_step,  set_object_visibility,
OBJ_COL_FLAG_GROUNDED, OBJ_COL_FLAGS_LANDED } from "../ObjBehaviors"
import { random_float } from "../../utils"
import { spawn_mist_particles_variable } from "./white_puff.inc"
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound"
import { oBBallSpawnerMaxSpawnDist, oBBallSpawnerSpawnOdds, oBBallSpawnerPeriodMinus1,
oPathedStartWaypoint, oBowlingBallTargetYaw, oPathedTargetYaw, oPosX, oPosY, oPosZ, oMoveAngleYaw,
oForwardVel, oVelY, oGraphYOffset, oAction, oTimer, oInteractStatus, oBehParams2ndByte, oGravity,
oFriction, oBuoyancy,
ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"
import { MODEL_BOWLING_BALL } from "../../include/model_ids"
import { SOUND_GENERAL_QUIET_POUND1_LOWPRIO, SOUND_ENV_UNKNOWN2 } from "../../include/sounds"
import { SHAKE_POS_BOWLING_BALL } from "../Camera"
import { INTERACT_DAMAGE, INT_STATUS_INTERACTED } from "../Interaction"
import { GRAPH_RENDER_INVISIBLE } from "../../engine/graph_node"
import { TRAJECTORY_POS, TRAJECTORY_END } from "../../include/surface_terrains"
import { bob_seg7_metal_ball_path0, bob_seg7_metal_ball_path1 } from
"../../levels/bob/areas/1/trajectory.inc"


/* Bowling Ball */
    /* oAction */
    const BBALL_ACT_INITIALIZE = 0
    const BBALL_ACT_ROLL = 1

/* Bowling Ball + Bowling Ball Spawner (all variants) */
    /* oBehParams2ndByte */
    const BBALL_BP_STYPE_BOB_UPPER = 0
    const BBALL_BP_STYPE_TTM = 1
    const BBALL_BP_STYPE_BOB_LOWER = 2
    const BBALL_BP_STYPE_THI_LARGE = 3
    const BBALL_BP_STYPE_THI_SMALL = 4

/* Bowling Ball (Free) */
    /* oAction */
    const FREE_BBALL_ACT_IDLE = 0
    const FREE_BBALL_ACT_ROLL = 1
    const FREE_BBALL_ACT_RESET = 2

const sBowlingBallHitbox = {
    interactType:      INTERACT_DAMAGE,
    downOffset:        0,
    damageOrCoinValue: 2,
    health:            0,
    numLootCoins:      0,
    radius:            100,
    height:            150,
    hurtboxRadius:     0,
    hurtboxHeight:     0,
}

const sThiHugeMetalBallTraj = [
    TRAJECTORY_POS(0, /*pos*/ -4786,   101, -2166),
    TRAJECTORY_POS(1, /*pos*/ -5000,    81, -2753),
    TRAJECTORY_POS(2, /*pos*/ -5040,    33, -3846),
    TRAJECTORY_POS(3, /*pos*/ -4966,    38, -4966),
    TRAJECTORY_POS(4, /*pos*/ -4013,  -259, -4893),
    TRAJECTORY_POS(5, /*pos*/ -2573, -1019, -4780),
    TRAJECTORY_POS(6, /*pos*/ -1053, -1399, -4806),
    TRAJECTORY_POS(7, /*pos*/   760, -1637, -4833),
    TRAJECTORY_POS(8, /*pos*/  2866, -2047, -4886),
    TRAJECTORY_POS(9, /*pos*/  3386, -6546, -4833),
    TRAJECTORY_END(),
]

const sThiTinyMetalBallTraj = [
    TRAJECTORY_POS(0, /*pos*/ -1476,    29,  -680),
    TRAJECTORY_POS(1, /*pos*/ -1492,    14, -1072),
    TRAJECTORY_POS(2, /*pos*/ -1500,     3, -1331),
    TRAJECTORY_POS(3, /*pos*/ -1374,   -17, -1527),
    TRAJECTORY_POS(4, /*pos*/ -1178,   -83, -1496),
    TRAJECTORY_POS(5, /*pos*/  -292,  -424, -1425),
    TRAJECTORY_POS(6, /*pos*/   250,  -491, -1433),
    TRAJECTORY_POS(7, /*pos*/   862,  -613, -1449),
    TRAJECTORY_POS(8, /*pos*/  1058, -1960, -1449),
    TRAJECTORY_END(),
]

const bhv_bowling_ball_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 5.5
    o.rawData[oFriction] = 1.0
    o.rawData[oBuoyancy] = 2.0
}

const bowling_ball_set_hitbox = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    obj_set_hitbox(o, sBowlingBallHitbox)

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        o.rawData[oInteractStatus] = 0
    }
}

const bowling_ball_set_waypoints = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oBehParams2ndByte]) {
        case BBALL_BP_STYPE_BOB_UPPER:
            o.rawData[oPathedStartWaypoint] = bob_seg7_metal_ball_path0
            break

        // case BBALL_BP_STYPE_TTM:
        //     o.rawData[oPathedStartWaypoint] = ttm_seg7_trajectory_070170A0
        //     break

        case BBALL_BP_STYPE_BOB_LOWER:
            o.rawData[oPathedStartWaypoint] = bob_seg7_metal_ball_path1
            break

        case BBALL_BP_STYPE_THI_LARGE:
            o.rawData[oPathedStartWaypoint] =  sThiHugeMetalBallTraj
            break

        case BBALL_BP_STYPE_THI_SMALL:
            o.rawData[oPathedStartWaypoint] = sThiTinyMetalBallTraj
            break
    }
}

const bhv_bowling_ball_roll_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*s16*/ collisionFlags
    let /*s32*/ pathStatus

    bowling_ball_set_waypoints()
    collisionFlags = object_step()

    pathStatus = cur_obj_follow_path()

    o.rawData[oBowlingBallTargetYaw] = o.rawData[oPathedTargetYaw]
    o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[oBowlingBallTargetYaw], 0x400)
    if (o.rawData[oForwardVel] > 70.0) {
        o.rawData[oForwardVel] = 70.0
    }

    bowling_ball_set_hitbox()

    if (pathStatus == -1) {
        if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 7000)) {
            spawn_mist_particles()
            spawn_mist_particles_variable(0, 0, 92.0)
        }

        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }

    if ((collisionFlags & OBJ_COL_FLAG_GROUNDED) && (o.rawData[oVelY] > 5.0))
        cur_obj_play_sound_2(SOUND_GENERAL_QUIET_POUND1_LOWPRIO)
}

const bhv_bowling_ball_initializeLoop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    bowling_ball_set_waypoints()

    cur_obj_follow_path()

    o.rawData[oMoveAngleYaw] = o.rawData[oPathedTargetYaw]

    switch (o.rawData[oBehParams2ndByte]) {
        case BBALL_BP_STYPE_BOB_UPPER:
            o.rawData[oForwardVel] = 20.0
            break

        case BBALL_BP_STYPE_TTM:
            o.rawData[oForwardVel] = 10.0
            break

        case BBALL_BP_STYPE_BOB_LOWER:
            o.rawData[oForwardVel] = 20.0
            break

        case BBALL_BP_STYPE_THI_LARGE:
            o.rawData[oForwardVel] = 25.0
            break

        case BBALL_BP_STYPE_THI_SMALL:
            o.rawData[oForwardVel] = 10.0
            cur_obj_scale(0.3)
            o.rawData[oGraphYOffset] = 39.0
            break
    }
}

const bhv_bowling_ball_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case BBALL_ACT_INITIALIZE:
            o.rawData[oAction] = BBALL_ACT_ROLL
            bhv_bowling_ball_initializeLoop()
            break

        case BBALL_ACT_ROLL:
            bhv_bowling_ball_roll_loop()
            break
    }

    if (o.rawData[oBehParams2ndByte] != BBALL_BP_STYPE_THI_SMALL)
        gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_BOWLING_BALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])

    set_object_visibility(o, 4000)
}

const bhv_generic_bowling_ball_spawner_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oBehParams2ndByte]) {
        case BBALL_BP_STYPE_BOB_UPPER:
            o.rawData[oBBallSpawnerMaxSpawnDist] = 7000.0
            o.rawData[oBBallSpawnerSpawnOdds] = 2.0
            break

        case BBALL_BP_STYPE_TTM:
            o.rawData[oBBallSpawnerMaxSpawnDist] = 8000.0
            o.rawData[oBBallSpawnerSpawnOdds] = 1.0
            break

        case BBALL_BP_STYPE_BOB_LOWER:
            o.rawData[oBBallSpawnerMaxSpawnDist] = 6000.0
            o.rawData[oBBallSpawnerSpawnOdds] = 2.0
            break
    }
}

const bhv_generic_bowling_ball_spawner_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let bowlingBall

    if (o.rawData[oTimer] == 256)
        o.rawData[oTimer] = 0

    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 1000)
        || (o.rawData[oPosY] < gMarioObject.gfx.pos[1]))
        return

    if ((o.rawData[oTimer] & o.rawData[oBBallSpawnerPeriodMinus1]) == 0) /* Modulus */
    {
        if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], o.rawData[oBBallSpawnerMaxSpawnDist])) {
            if (Math.floor(random_float() * o.rawData[oBBallSpawnerSpawnOdds]) == 0) {
                bowlingBall = spawn_object(o, MODEL_BOWLING_BALL, 'bhvBowlingBall')
                bowlingBall.rawData[oBehParams2ndByte] = o.rawData[oBehParams2ndByte]
            }
        }
    }
}

const bhv_thi_bowling_ball_spawner_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let bowlingBall

    if (o.rawData[oTimer] == 256)
        o.rawData[oTimer] = 0

    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 800)
        || (o.rawData[oPosY] < gMarioObject.gfx.pos[1]))
        return

    if ((o.rawData[oTimer] % 64) == 0) {
        if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 12000)) {
            if (Math.floor(random_float() * 1.5) == 0) {
                bowlingBall = spawn_object(o, MODEL_BOWLING_BALL, 'bhvBowlingBall')
                bowlingBall.rawData[oBehParams2ndByte] = o.rawData[oBehParams2ndByte]
            }
        }
    }
}

const bhv_bob_pit_bowling_ball_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 12.0
    o.rawData[oFriction] = 1.0
    o.rawData[oBuoyancy] = 2.0
}

const bhv_bob_pit_bowling_ball_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    object_step()

    const floorGeometry = {}
    gLinker.SurfaceCollision.find_floor_height_and_data(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], floorGeometry)
    if (floorGeometry.normalX == 0 && floorGeometry.normalZ == 0) {
        o.rawData[oForwardVel] = 28.0
    }

    bowling_ball_set_hitbox()
    gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_BOWLING_BALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
    cur_obj_play_sound_1(SOUND_ENV_UNKNOWN2)
    set_object_visibility(o, 3000)
}

const bhv_free_bowling_ball_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 5.5
    o.rawData[oFriction] = 1.0
    o.rawData[oBuoyancy] = 2.0
    o.rawData[oHomeX] = o.rawData[oPosX]
    o.rawData[oHomeY] = o.rawData[oPosY]
    o.rawData[oHomeZ] = o.rawData[oPosZ]
    o.rawData[oForwardVel] = 0
    o.rawData[oMoveAngleYaw] = 0
}

const bhv_free_bowling_ball_roll_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*s16*/ collisionFlags = object_step()
    bowling_ball_set_hitbox()

    if (o.rawData[oForwardVel] > 10.0) {
        gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_BOWLING_BALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
        cur_obj_play_sound_1(SOUND_ENV_UNKNOWN2)
    }

    if ((collisionFlags & OBJ_COL_FLAG_GROUNDED) && !(collisionFlags & OBJ_COL_FLAGS_LANDED))
        cur_obj_play_sound_2(SOUND_GENERAL_QUIET_POUND1_LOWPRIO)

    if (!is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 6000)) {
        o.gfx.flags |= GRAPH_RENDER_INVISIBLE
        cur_obj_become_intangible()

        o.rawData[oPosX] = o.rawData[oHomeX]
        o.rawData[oPosY] = o.rawData[oHomeY]
        o.rawData[oPosZ] = o.rawData[oHomeZ]
        bhv_free_bowling_ball_init()
        o.rawData[oAction] = FREE_BBALL_ACT_RESET
    }
}

const bhv_free_bowling_ball_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 5.5

    switch (o.rawData[oAction]) {
        case FREE_BBALL_ACT_IDLE:
            if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 3000)) {
                o.rawData[oAction] = FREE_BBALL_ACT_ROLL
                o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
                cur_obj_become_tangible()
            }
            break

        case FREE_BBALL_ACT_ROLL:
            bhv_free_bowling_ball_roll_loop()
            break

        case FREE_BBALL_ACT_RESET:
            if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 5000))
                o.rawData[oAction] = FREE_BBALL_ACT_IDLE
            break
    }
}


gLinker.bhv_bob_pit_bowling_ball_init = bhv_bob_pit_bowling_ball_init
gLinker.bhv_bob_pit_bowling_ball_loop = bhv_bob_pit_bowling_ball_loop
gLinker.bhv_bowling_ball_init = bhv_bowling_ball_init
gLinker.bhv_bowling_ball_loop = bhv_bowling_ball_loop
gLinker.bhv_free_bowling_ball_init = bhv_free_bowling_ball_init
gLinker.bhv_free_bowling_ball_loop = bhv_free_bowling_ball_loop
gLinker.bhv_generic_bowling_ball_spawner_init = bhv_generic_bowling_ball_spawner_init
gLinker.bhv_generic_bowling_ball_spawner_loop = bhv_generic_bowling_ball_spawner_loop
gLinker.bhv_thi_bowling_ball_spawner_loop = bhv_thi_bowling_ball_spawner_loop
