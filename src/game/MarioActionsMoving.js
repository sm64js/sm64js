import * as _Linker from "./Linker"

import {
    adjust_sound_for_speed, check_common_action_exits, drop_and_set_mario_action, find_floor_slope,
    is_anim_at_end, is_anim_past_frame, mario_facing_downhill, mario_floor_is_slippery,
    mario_floor_is_slope, mario_get_floor_class, mario_set_forward_vel,
    play_mario_heavy_landing_sound_once, play_mario_landing_sound, play_mario_landing_sound_once,
    play_sound_and_spawn_particles, play_sound_if_no_flag, set_forward_vel, set_jump_from_landing,
    set_jumping_action, set_mario_action, set_mario_anim_with_accel, set_mario_animation,
    set_water_plunge_action,
} from "./Mario"

import {
    mario_bonk_reflection, perform_ground_step, mario_push_off_steep_floor
} from "./MarioStep"

import {
    approach_number, approach_f32, atan2s, approach_s32, vec3f_copy, sqrtf
} from "../engine/math_util"

import {
    s16, s32, sins, coss
}  from '../utils'

import {
    mario_update_punch_sequence
} from "./MarioActionsObject"

import {
    play_sound
} from "../audio/external"

import {
    sBackflipLandAction, sDoubleJumpLandAction, sFreefallLandAction, sHoldFreefallLandAction,
    sJumpLandAction, sLongJumpLandAction, sSideFlipLandAction, sTripleJumpLandAction,
    sHoldJumpLandAction
} from "./Mario"

import {
    oAction, oPrevAction, oSubAction, oTimer, oFlags,
    oBehParams, oBehParams2ndByte,
    oAnimations, oAnimState, oActiveParticleFlags,
    oIntangibleTimer, oInteractionSubtype, oInteractStatus, oInteractType,
    oHealth, oHeldState,

    oPosX, oPosY, oPosZ,
    oHomeX, oHomeY, oHomeZ, oAngleToHome,
    oVelX, oVelY, oVelZ,
    oParentRelativePosX, oParentRelativePosY, oParentRelativePosZ,
    oGraphYOffset,

    oAngleVelPitch, oAngleVelRoll, oAngleVelYaw,
    oForwardVel, oForwardVelS32,
    oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw,
    oDrawingDistance, oOpacity,

    oBounciness, oBuoyancy, oDragStrength, oFriction, oGravity,
    oCollisionDistance, oDamageOrCoinValue, oNumLootCoins,
    oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oMoveFlags,
    oWallAngle, oWallHitboxRadius,

    oFloor, oFloorHeight, oFloorRoom, oFloorType, oRoom,
    oAngleToMario, oDistanceToMario, oMarioWalkingPitch,

    oDeathSound, oSoundStateID,
    oDialogResponse, oDialogState,

    oUnk1A8, oUnk94, oUnkBC, oUnkC0, oMarioBurnTimer
} from "../include/object_constants"

import {
    ACT_BACKFLIP_LAND, ACT_BACKWARD_AIR_KB, ACT_BACKWARD_GROUND_KB, ACT_BACKWARD_ROLLOUT,
    ACT_BEGIN_SLIDING, ACT_BRAKING, ACT_BRAKING_STOP, ACT_BURNING_GROUND, ACT_BUTT_SLIDE,
    ACT_BUTT_SLIDE_AIR, ACT_BUTT_SLIDE_STOP, ACT_CRAWLING, ACT_CRAZY_BOX_BOUNCE, ACT_CROUCH_SLIDE,
    ACT_CROUCHING, ACT_DEATH_EXIT_LAND, ACT_DEATH_ON_BACK, ACT_DECELERATING, ACT_DIVE,
    ACT_DIVE_SLIDE, ACT_DOUBLE_JUMP_LAND, ACT_FINISH_TURNING_AROUND, ACT_FLAG_INVULNERABLE,
    ACT_FLYING_TRIPLE_JUMP, ACT_FORWARD_AIR_KB, ACT_FORWARD_GROUND_KB, ACT_FORWARD_ROLLOUT,
    ACT_FREEFALL, ACT_FREEFALL_LAND, ACT_FREEFALL_LAND_STOP, ACT_GROUND_BONK,
    ACT_HARD_BACKWARD_GROUND_KB, ACT_HARD_FORWARD_GROUND_KB, ACT_HEAVY_THROW,
    ACT_HOLD_BEGIN_SLIDING, ACT_HOLD_BUTT_SLIDE, ACT_HOLD_DECELERATING, ACT_HOLD_FREEFALL,
    ACT_HOLD_FREEFALL_LAND, ACT_HOLD_HEAVY_IDLE, ACT_HOLD_HEAVY_WALKING, ACT_HOLD_IDLE,
    ACT_HOLD_JUMP, ACT_HOLD_JUMP_LAND, ACT_HOLD_QUICKSAND_JUMP_LAND, ACT_HOLD_STOMACH_SLIDE,
    ACT_HOLD_WALKING, ACT_IDLE, ACT_JUMP, ACT_JUMP_KICK, ACT_JUMP_LAND, ACT_JUMP_LAND_STOP,
    ACT_LEDGE_CLIMB_DOWN, ACT_LONG_JUMP, ACT_LONG_JUMP_LAND, ACT_MOVE_PUNCHING,
    ACT_QUICKSAND_JUMP_LAND, ACT_RIDING_SHELL_GROUND, ACT_SHOCKWAVE_BOUNCE, ACT_SIDE_FLIP,
    ACT_SIDE_FLIP_LAND, ACT_SLIDE_KICK, ACT_SLIDE_KICK_SLIDE, ACT_SLIDE_KICK_SLIDE_STOP,
    ACT_SOFT_BACKWARD_GROUND_KB, ACT_SOFT_FORWARD_GROUND_KB, ACT_SPECIAL_DEATH_EXIT, ACT_SQUISHED,
    ACT_STANDING_AGAINST_WALL, ACT_STANDING_DEATH, ACT_STOMACH_SLIDE, ACT_STOMACH_SLIDE_STOP,
    ACT_STOP_CRAWLING, ACT_THROWING, ACT_TRIPLE_JUMP, ACT_TRIPLE_JUMP_LAND, ACT_TURNING_AROUND,
    ACT_WALKING, ACT_BURNING_FALL, ACT_BURNING_JUMP, ACT_DIVE_PICKING_UP,
    ACT_HOLD_BUTT_SLIDE_STOP, ACT_HOLD_BUTT_SLIDE_AIR,

    GROUND_STEP_HIT_WALL, GROUND_STEP_LEFT_GROUND, GROUND_STEP_NONE,

    INPUT_A_DOWN, INPUT_A_PRESSED, INPUT_ABOVE_SLIDE, INPUT_B_PRESSED, INPUT_FIRST_PERSON,
    INPUT_IN_WATER, INPUT_NONZERO_ANALOG, INPUT_OFF_FLOOR, INPUT_SQUISHED, INPUT_STOMPED,
    INPUT_UNKNOWN_5, INPUT_Z_DOWN, INPUT_Z_PRESSED,

    MARIO_ANIM_BACKWARD_KB, MARIO_ANIM_CLIMB_DOWN_LEDGE, MARIO_ANIM_CRAWLING,
    MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP, MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP, MARIO_ANIM_DIVE,
    MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, MARIO_ANIM_FALL_OVER_BACKWARDS, MARIO_ANIM_FORWARD_KB,
    MARIO_ANIM_GENERAL_FALL, MARIO_ANIM_GENERAL_LAND, MARIO_ANIM_GROUND_BONK,
    MARIO_ANIM_IDLE_HEAD_LEFT, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ, MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ,
    MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, MARIO_ANIM_LAND_FROM_SINGLE_JUMP, MARIO_ANIM_LAND_ON_STOMACH,
    MARIO_ANIM_MOVE_IN_QUICKSAND, MARIO_ANIM_PUSHING, MARIO_ANIM_RUN_WITH_LIGHT_OBJ,
    MARIO_ANIM_RUNNING, MARIO_ANIM_SIDESTEP_LEFT, MARIO_ANIM_SIDESTEP_RIGHT,
    MARIO_ANIM_SKID_ON_GROUND, MARIO_ANIM_SLIDE, MARIO_ANIM_SLIDE_DIVE, MARIO_ANIM_SLIDE_KICK,
    MARIO_ANIM_SLIDEFLIP_LAND, MARIO_ANIM_SLOW_WALK_WITH_LIGHT_OBJ, MARIO_ANIM_SOFT_BACK_KB,
    MARIO_ANIM_SOFT_FRONT_KB, MARIO_ANIM_START_CROUCHING, MARIO_ANIM_START_TIPTOE,
    MARIO_ANIM_TIPTOE, MARIO_ANIM_TRIPLE_JUMP_LAND, MARIO_ANIM_TURNING_PART1,
    MARIO_ANIM_TURNING_PART2, MARIO_ANIM_WALK_WITH_HEAVY_OBJ, MARIO_ANIM_WALK_WITH_LIGHT_OBJ,
    MARIO_ANIM_WALKING, MARIO_ANIM_SLIDING_ON_BOTTOM_WITH_LIGHT_OBJ,

    MARIO_MARIO_SOUND_PLAYED, MARIO_METAL_CAP, MARIO_UNKNOWN_31, MARIO_WING_CAP
} from "./Mario"

import {
    SURFACE_SLOW, SURFACE_CLASS_VERY_SLIPPERY, SURFACE_CLASS_SLIPPERY, SURFACE_CLASS_NOT_SLIPPERY,
    TERRAIN_MASK, TERRAIN_SLIDE
} from "../include/surface_terrains"

import {
    INT_STATUS_MARIO_DROP_OBJECT
} from "./Interaction"

import {
    PARTICLE_DUST, PARTICLE_VERTICAL_STAR, PARTICLE_WAVE_TRAIL, PARTICLE_FIRE
} from "../include/mario_constants"

import { MARIO_EYES_DEAD } from "../include/mario_geo_switch_case_ids"

import {
    SOUND_ACTION_METAL_STEP, SOUND_ACTION_METAL_STEP_TIPTOE, SOUND_ACTION_QUICKSAND_STEP,
    SOUND_ACTION_TERRAIN_BODY_HIT_GROUND, SOUND_ACTION_TERRAIN_LANDING, SOUND_ACTION_TERRAIN_STEP,
    SOUND_ACTION_TERRAIN_STEP_TIPTOE, SOUND_MARIO_ATTACKED, SOUND_MARIO_HAHA, SOUND_MARIO_HOOHOO,
    SOUND_MARIO_MAMA_MIA, SOUND_MARIO_OOOF2, SOUND_MARIO_UH2_2, SOUND_MOVING_TERRAIN_SLIDE,
    SOUND_GENERAL_FLAME_OUT, SOUND_MOVING_LAVA_BURN
} from "../include/sounds"

import { mtxf_align_terrain_triangle } from "../engine/math_util"

let sFloorAlignMatrix = [new Array(4).fill(0).map(() => new Array(4).fill(0)), new Array(4).fill(0).map(() => new Array(4).fill(0))]

export const tilt_body_running = (m) => {
    let pitch = find_floor_slope(m, 0)
    pitch = s16(pitch * m.forwardVel / 40.0)
    return s16(-pitch)
}

export const play_step_sound = (m, frame1, frame2) => {
    if (is_anim_past_frame(m, frame1) || is_anim_past_frame(m, frame2)) {
        if (m.flags & MARIO_METAL_CAP) {
            if (m.marioObj.gfx.animInfo.animID == MARIO_ANIM_TIPTOE) {
                play_sound_and_spawn_particles(m, SOUND_ACTION_METAL_STEP_TIPTOE, 0)
            } else {
                play_sound_and_spawn_particles(m, SOUND_ACTION_METAL_STEP, 0)
            }
        } else if (m.quicksandDepth > 50.0) {
            play_sound(SOUND_ACTION_QUICKSAND_STEP, m.marioObj.gfx.cameraToObject)
        } else if (m.marioObj.gfx.animInfo.animID == MARIO_ANIM_TIPTOE) {
            play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_STEP_TIPTOE, 0)
        } else {
            play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_STEP, 0)
        }
    }
}

const apply_slope_accel = (m) => {

    if (!window.cheats.disableSlopePhysics) {
        let slopeAccel
        let floorDYaw = s16(m.floorAngle - m.faceAngle[1])

        const floor = m.floor
        let steepness
        if (floor) { steepness = Math.sqrt(floor.normal.x * floor.normal.x + floor.normal.z * floor.normal.z) }

        if (mario_floor_is_slope(m)) {
            let slopeClass = 0

            if (m.action != ACT_SOFT_BACKWARD_GROUND_KB && m.action != ACT_SOFT_FORWARD_GROUND_KB) {
                slopeClass = mario_get_floor_class(m)
            }

            switch (slopeClass) {
                case SURFACE_CLASS_VERY_SLIPPERY:
                    slopeAccel = 5.3
                    break
                case SURFACE_CLASS_SLIPPERY:
                    slopeAccel = 2.7
                    break
                default:
                    slopeAccel = 1.7
                    break
                case SURFACE_CLASS_NOT_SLIPPERY:
                    slopeAccel = 0.0
                    break
            }

            if (floorDYaw > -0x4000 && floorDYaw < 0x4000) {
                m.forwardVel += slopeAccel * steepness
            } else {
                m.forwardVel -= slopeAccel * steepness
            }
        }
    }

    m.slideYaw = m.faceAngle[1]

    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[1] = 0.0
    m.vel[2] = m.slideVelZ

}

const apply_slope_decel = (m, decelCoef) => {
    let stopped = 0
    let decel
    switch (mario_get_floor_class(m)) {
        default: decel = decelCoef * 2.0; break
    }

    m.forwardVel = approach_number(m.forwardVel, 0.0, decel, decel)
    if (m.forwardVel == 0.0) stopped = 1

    apply_slope_accel(m)

    return stopped
}

const update_walking_speed = (m) => {
    let maxTargetSpeed, targetSpeed

    if (m.floor && m.floor.type == SURFACE_SLOW) maxTargetSpeed = 24
    else maxTargetSpeed = 32

    targetSpeed = m.intendedMag < maxTargetSpeed ? m.intendedMag : maxTargetSpeed

    if (m.forwardVel <= 0.0) {
        m.forwardVel += 1.1
    } else if (m.forwardVel <= targetSpeed) {
        m.forwardVel += 1.1 - m.forwardVel / 43.0
    } else if (m.floor && m.floor.normal.y >= 0.95) {
        m.forwardVel -= 1.0
    }

    if (m.forwardVel > 48.0) m.forwardVel = 48.0

    //m.faceAngle[1] = m.intendedYaw //cheat super responsive controls

    let number16 = parseInt(m.intendedYaw - m.faceAngle[1])
    number16 = number16 > 32767 ? number16 - 65536 : number16
    number16 = number16 < -32768 ? number16 + 65536 : number16
    m.faceAngle[1] = m.intendedYaw - approach_number(number16, 0, 0x800, 0x800)

    apply_slope_accel(m)

}

const anim_and_audio_for_walk = (m) => {
    let val0C = 1
    let val14
    let val04 = m.intendedMag > m.forwardVel ? m.intendedMag : m.forwardVel
    let targetPitch = 0

    const marioObj = m.marioObj

    if (val04 < 4.0) val04 = 4.0

    if (m.quicksandDepth > 50.0) {
        val14 = s32(val04 / 4.0 * 0x10000)
        set_mario_anim_with_accel(m, MARIO_ANIM_MOVE_IN_QUICKSAND, val14)
        play_step_sound(m, 19, 93)
        m.actionTimer = 0
    } else {
        while (val0C) {
            switch (m.actionTimer) {
              case 0:
                    if (val04 > 8.0) {
                        m.actionTimer = 2
                    } else {
                        let val14 = s32(val04 / 4.0 * 0x10000)
                        if (val14 < 0x1000) {
                            val14 = 0x1000
                        }
                        set_mario_anim_with_accel(m, MARIO_ANIM_START_TIPTOE, val14)
                        play_step_sound(m, 7, 22)
                        if (is_anim_past_frame(m, 23)) {
                            m.actionTimer = 2
                        }

                        val0C = 0
                    }
                    break

                case 1:
                    if (val04 > 8.0) {
                        m.actionTimer = 2
                    } else {
                        let val14 = parseInt(val04 * 0x10000)
                        if (val14 < 0x1000) {
                            val14 = 0x1000
                        }
                        set_mario_anim_with_accel(m, MARIO_ANIM_TIPTOE, val14)
                        play_step_sound(m, 14, 72)

                        val0C = 0

                    }
                    break

                case 2:
                    if (val04 < 5.0) {
                        m.actionTimer = 1
                    } else if (val04 > 22.0) {
                        m.actionTimer = 3
                    } else {
                        val14 = s32(val04 / 4.0 * 0x10000)
                        set_mario_anim_with_accel(m, MARIO_ANIM_WALKING, parseInt(val14))
                        play_step_sound(m, 10, 49)

                        val0C = 0
                    }   
                    break

                case 3:
                    if (val04 < 18.0) {
                        m.actionTimer = 2
                    } else {
                        val14 = s32(val04 / 4.0 * 0x10000)
                        set_mario_anim_with_accel(m, MARIO_ANIM_RUNNING, parseInt(val14))
                        play_step_sound(m, 9, 45)
                        targetPitch = tilt_body_running(m)

                        val0C = 0
                    }
                    break
                default: throw "default case mario anim and audio for walk"

            }

        }
        marioObj.rawData[oMarioWalkingPitch] = 
                s16(approach_s32(marioObj.rawData[oMarioWalkingPitch], targetPitch, 0x800, 0x800))
        marioObj.gfx.angle[0] = marioObj.rawData[oMarioWalkingPitch]
    }

}

export const anim_and_audio_for_hold_walk = (m) => {
    let val0C
    let going = true
    let val04

    val04 = m.intendedMag > m.forwardVel ? m.intendedMag : m.forwardVel;

    if (val04 < 2.0) {
        val04 = 2.0
    }

    while (going) {
        switch (m.actionTimer) {
            case 0:
                if (val04 > 6.0) {
                    m.actionTimer = 1
                } else {
                    //! (Speed Crash) Crashes if Mario's speed exceeds or equals 2^15.
                    val0C = s32(val04 * 0x10000)
                    set_mario_anim_with_accel(m, MARIO_ANIM_SLOW_WALK_WITH_LIGHT_OBJ, val0C)
                    play_step_sound(m, 12, 62)

                    going = false
                }
                break

            case 1:
                if (val04 < 3.0) {
                    m.actionTimer = 0
                } else if (val04 > 11.0) {
                    m.actionTimer = 2
                } else {
                    //! (Speed Crash) Crashes if Mario's speed exceeds or equals 2^15.
                    val0C = s32(val04 * 0x10000)
                    set_mario_anim_with_accel(m, MARIO_ANIM_WALK_WITH_LIGHT_OBJ, val0C)
                    play_step_sound(m, 12, 62)

                    going = false
                }
                break

            case 2:
                if (val04 < 8.0) {
                    m.actionTimer = 1
                } else {
                    //! (Speed Crash) Crashes if Mario's speed exceeds or equals 2^16.
                    val0C = s32(val04 / 2.0 * 0x10000)
                    set_mario_anim_with_accel(m, MARIO_ANIM_RUN_WITH_LIGHT_OBJ, val0C)
                    play_step_sound(m, 10, 49)

                    going = false
                }
                break
        }
    }
}

export const anim_and_audio_for_heavy_walk = (m) => {
    let val04 = s32(m.intendedMag * 0x10000)
    set_mario_anim_with_accel(m, MARIO_ANIM_WALK_WITH_HEAVY_OBJ, val04)
    play_step_sound(m, 26, 79)
}


const tilt_body_walking = (m, startYaw) => {
    const val0C = m.marioBodyState
    const animID = m.marioObj.gfx.animInfo.animID
    let dYaw, val02, val00

    if (animID == MARIO_ANIM_WALKING || animID == MARIO_ANIM_RUNNING) {
        dYaw = m.faceAngle[1] - startYaw
        //! (Speed Crash) These casts can cause a crash if (dYaw * forwardVel / 12) or
        //! (forwardVel * 170) exceed or equal 2^31.
        val02 = -(dYaw * m.forwardVel / 12.0)
        val00 = (m.forwardVel * 170.0)

        if (val02 > 0x1555) {
            val02 = 0x1555
        }
        if (val02 < -0x1555) {
            val02 = -0x1555
        }

        if (val00 > 0x1555) {
            val00 = 0x1555
        }
        if (val00 < 0) {
            val00 = 0
        }

        val0C.torsoAngle[2] = approach_number(val0C.torsoAngle[2], val02, 0x400, 0x400)
        val0C.torsoAngle[0] = approach_number(val0C.torsoAngle[0], val00, 0x400, 0x400)
        
    } else {
        val0C.torsoAngle[2] = 0
        val0C.torsoAngle[0] = 0
    }
}

const check_ledge_climb_down = (m) => {

    if (m.forwardVel < 10.0) {
        const wallCols = {
            x: m.pos[0],
            y: m.pos[1],
            z: m.pos[2],
            radius: 10.0,
            offsetY: -10.0,
            walls: []
        }

        if (gLinker.SurfaceCollision.find_wall_collisions(wallCols) != 0) {
            const floorWrapper = {}
            const floorHeight = gLinker.SurfaceCollision.find_floor(wallCols.x, wallCols.y, wallCols.z, floorWrapper)
            if (floorWrapper.floor != null) {
                if (wallCols.y - floorHeight > 160.0) {
                    const wall = wallCols.walls[wallCols.numWalls - 1]
                    const wallAngle = atan2s(wall.normal.z, wall.normal.x)
                    const wallDYaw = wallAngle - m.faceAngle[1]

                    if (wallDYaw > -0x4000 && wallDYaw < 0x4000) {
                        m.pos[0] = wallCols.x - 20.0 * wall.normal.x
                        m.pos[2] = wallCols.z - 20.0 * wall.normal.z

                        m.faceAngle[0] = 0
                        m.faceAngle[1] = wallAngle + 0x8000

                        set_mario_action(m, ACT_LEDGE_CLIMB_DOWN, 0)
                        set_mario_animation(m, MARIO_ANIM_CLIMB_DOWN_LEDGE)
                    }
                }
            }
        }
    }
}

const begin_braking_action = (m) => {
    if (m.actionState == 1) {
        m.faceAngle[1] = m.actionArg;
        return set_mario_action(m, ACT_STANDING_AGAINST_WALL, 0);
    }

    if (m.forwardVel >= 16.0 && m.floor.normal.y >= 0.17364818) {
        return set_mario_action(m, ACT_BRAKING, 0)
    }

    return set_mario_action(m, ACT_DECELERATING, 0)
}

const analog_stick_held_back = (m) => {
    let intendedDYaw = s16(m.intendedYaw - m.faceAngle[1]);
    return intendedDYaw < -0x471C || intendedDYaw > 0x471C
}

const act_walking = (m) => {
    let startPos;
    const startYaw = m.faceAngle[1]

    if (should_begin_sliding(m)) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jump_from_landing(m)
    }

    if (check_ground_dive_or_punch(m)) {
        return true
    }

    if (m.input & INPUT_UNKNOWN_5) {
        return begin_braking_action(m)
    }

    if (analog_stick_held_back(m) && m.forwardVel >= 16.0) {
        return set_mario_action(m, ACT_TURNING_AROUND, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_CROUCH_SLIDE, 0)
    }

    m.actionState = 0

    startPos = [...m.pos];
    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_NONE:
            anim_and_audio_for_walk(m)
            if (m.intendedMag - m.forwardVel > 16.0) m.particleFlags |= PARTICLE_DUST
            break
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
            break
        case GROUND_STEP_HIT_WALL:
            push_or_sidle_wall(m, startPos);
            m.actionTimer = 0;
            break
        default: throw "unkown ground step in act_walking"
    }

    check_ledge_climb_down(m)
    tilt_body_walking(m, startYaw)
    return false
}

const slide_bonk = (m, fastAction, slowAction) => {
    if (m.forwardVel > 16.0) {
        mario_bonk_reflection(m, true)
        drop_and_set_mario_action(m, fastAction, 0)
    } else {
        set_forward_vel(m, 0.0)
        set_mario_action(m, slowAction, 0)
    }
}

const set_triple_jump_action = (m) => {
    if (m.flags & MARIO_WING_CAP) {
        return set_mario_action(m, ACT_FLYING_TRIPLE_JUMP, 0)
    } else if (m.forwardVel > 20.0) {
        return set_mario_action(m, ACT_TRIPLE_JUMP, 0)
    } else {
        return set_mario_action(m, ACT_JUMP, 0)
    }
}

const act_braking = (m) => {

    if (!(m.input & INPUT_FIRST_PERSON) && (m.input &
        (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE))) {
        return check_common_action_exits(m)
    }

    if (apply_slope_decel(m, 2.0)) {
        return set_mario_action(m, ACT_BRAKING_STOP, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_MOVE_PUNCHING, 0)
    }

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            break
        case GROUND_STEP_NONE:
            m.particleFlags |= PARTICLE_DUST
            break
        case GROUND_STEP_HIT_WALL:
            slide_bonk(m, ACT_BACKWARD_GROUND_KB, ACT_BRAKING_STOP);
            break
    }

    set_mario_animation(m, MARIO_ANIM_SKID_ON_GROUND)
    return false
}

const update_decelerating_speed = (m) => {
    let stopped = 0

    m.forwardVel = approach_number(m.forwardVel, 0.0, 1.0, 1.0)

    if (m.forwardVel == 0.0) stopped = 1

    set_forward_vel(m, m.forwardVel)

    return stopped
}

const act_decelerating = (m) => {
    let val0C
    let slopeClass = mario_get_floor_class(m)

    if (!(m.input & INPUT_FIRST_PERSON)) {
        if (should_begin_sliding(m)) {
            return set_mario_action(m, ACT_BEGIN_SLIDING, 0);
        }

        if (m.input & INPUT_A_PRESSED) {
            return set_jump_from_landing(m)
        }

        if (check_ground_dive_or_punch(m)) {
            return true
        }

        if (m.input & INPUT_NONZERO_ANALOG) {
            return set_mario_action(m, ACT_WALKING, 0)
        }

        if (m.input & INPUT_Z_PRESSED) {
            return set_mario_action(m, ACT_CROUCH_SLIDE, 0)
        }
    }

    if (update_decelerating_speed(m)) {
        return set_mario_action(m, ACT_IDLE, 0)
    }

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            break
        case GROUND_STEP_HIT_WALL:
            if (slopeClass == SURFACE_CLASS_VERY_SLIPPERY) {
                mario_bonk_reflection(m, 1)
            } else {
                set_forward_vel(m, 0)
            }
            break
    }

    if (slopeClass == SURFACE_CLASS_VERY_SLIPPERY) {
        set_mario_animation(m, MARIO_ANIM_IDLE_HEAD_LEFT)
        play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.gfx.cameraToObject)
        adjust_sound_for_speed(m)
        m.particleFlags |= PARTICLE_DUST
    } else {
        // (Speed Crash) Crashes if speed exceeds 2^17.
        let val0C = s32(m.forwardVel / 4.0 * 0x10000)
        if (val0C < 0x1000) {
            val0C = 0x1000
        }

        set_mario_anim_with_accel(m, MARIO_ANIM_WALKING, val0C)
        play_step_sound(m, 10, 49)
    }

    return false
}

export const act_hold_decelerating = (m) => {
    let /*s32*/ val0C
    let /*s16*/ slopeClass = mario_get_floor_class(m)

    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_WALKING, 0)
    }

    if (should_begin_sliding(m)) {
        return set_mario_action(m, ACT_HOLD_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_HOLD_JUMP, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return drop_and_set_mario_action(m, ACT_CROUCH_SLIDE, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {
        return set_mario_action(m, ACT_HOLD_WALKING, 0)
    }

    if (update_decelerating_speed(m)) {
        return set_mario_action(m, ACT_HOLD_IDLE, 0)
    }

    m.intendedMag *= 0.4

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_HOLD_FREEFALL, 0)
            break

        case GROUND_STEP_HIT_WALL:
            if (slopeClass == SURFACE_CLASS_VERY_SLIPPERY) {
                mario_bonk_reflection(m, 1)
            } else {
                mario_set_forward_vel(m, 0.0)
            }
            break
    }

    if (slopeClass == SURFACE_CLASS_VERY_SLIPPERY) {
        set_mario_animation(m, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ)
        play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.gfx.cameraToObject)
        adjust_sound_for_speed(m)
        m.particleFlags |= PARTICLE_DUST
    } else {
          //! (Speed Crash) This crashes if Mario has more speed than 2^15 speed.
        if ((val0C = (m.forwardVel * 0x10000)) < 0x1000) {
            val0C = 0x1000
        }

        set_mario_anim_with_accel(m, MARIO_ANIM_WALK_WITH_LIGHT_OBJ, val0C)
        play_step_sound(m, 12, 62)
    }

    return false
}

const begin_walking_action = (m, forwardVel, action, actionArg) => {
    m.faceAngle[1] = m.intendedYaw
    set_forward_vel(m, forwardVel)
    return set_mario_action(m, action, actionArg)
}

const act_turning_around = (m) => {
    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_SIDE_FLIP, 0)
    }

    if (m.input & INPUT_UNKNOWN_5) {
        return set_mario_action(m, ACT_BRAKING, 0)
    }

    if (!analog_stick_held_back(m)) {
        return set_mario_action(m, ACT_WALKING, 0)
    }

    if (apply_slope_decel(m, 2.0)) {

        return begin_walking_action(m, 8.0, ACT_FINISH_TURNING_AROUND, 0)
    }

    switch (perform_ground_step(m)) {

        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            break

        case GROUND_STEP_NONE:
            m.particleFlags |= PARTICLE_DUST
            break
    }

    if (m.forwardVel >= 18.0) {
        set_mario_animation(m, MARIO_ANIM_TURNING_PART1)
    } else {
        set_mario_animation(m, MARIO_ANIM_TURNING_PART2)
        if (is_anim_at_end(m)) {
            if (m.forwardVel > 0.0) {
                begin_walking_action(m, -m.forwardVel, ACT_WALKING, 0)
            } else {
                begin_walking_action(m, 8.0, ACT_WALKING, 0)
            }
        }
    }

    return false
}

const act_finish_turning_around = (m) => {
    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_SIDE_FLIP, 0)
    }

    update_walking_speed(m)
    set_mario_animation(m, MARIO_ANIM_TURNING_PART2)

    if (perform_ground_step(m) == GROUND_STEP_LEFT_GROUND) {}

    if (is_anim_at_end(m)) 
        set_mario_action(m, ACT_WALKING, 0)

    m.marioObj.gfx.angle[1] += 0x8000
    return false
}

const apply_landing_accel = (m, frictionFactor) => {
    let stopped = false

    apply_slope_accel(m)

    if (!mario_floor_is_slope(m)) {
        m.forwardVel *= frictionFactor
        if (m.forwardVel * m.forwardVel < 1.0) {
            set_forward_vel(m, 0.0)
            stopped = true
        }
    }

    return stopped
}

const common_landing_cancels = (m, landingAction, setAPressAction) => {

    if (m.floor.normal.y < 0.2923717) {
        return mario_push_off_steep_floor(m, landingAction.verySteepAction, 0)
    }

    m.doubleJumpTimer = landingAction.unk02

    if (should_begin_sliding(m)) {
        return set_mario_action(m, landingAction.slideAction, 0);
    }

    if (m.input & INPUT_FIRST_PERSON) {
        return set_mario_action(m, landingAction.endAction, 0)
    }

    if (++m.actionTimer >= landingAction.numFrames) {
        return set_mario_action(m, landingAction.endAction, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return setAPressAction(m, landingAction.aPressedAction, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, landingAction.offFloorAction, 0)
    }

    return false
}

const act_jump_land = (m) => {
    if (common_landing_cancels(m, sJumpLandAction, set_jumping_action)) {
        return true
    }

    common_landing_action(m, MARIO_ANIM_LAND_FROM_SINGLE_JUMP, ACT_FREEFALL)
    return false
}

const act_freefall_land = (m) => {
    if (common_landing_cancels(m, sFreefallLandAction, set_jumping_action)) {
        return true
    }

    common_landing_action(m, MARIO_ANIM_GENERAL_LAND, ACT_FREEFALL)
    return false
}

const act_side_flip_land = (m) => {
    if (common_landing_cancels(m, sSideFlipLandAction, set_jumping_action)) {
        return true
    }

    if (common_landing_action(m, MARIO_ANIM_SLIDEFLIP_LAND, ACT_FREEFALL) != GROUND_STEP_HIT_WALL) {
        m.marioObj.gfx.angle[1] = s16(m.marioObj.gfx.angle[1] + 0x8000)
    }

    return false
}

const act_double_jump_land = (m) => {
    if (common_landing_cancels(m, sDoubleJumpLandAction, set_triple_jump_action)) {
        return true
    }

    common_landing_action(m, MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, ACT_FREEFALL)
    return false
}

const act_triple_jump_land = (m) => {
    m.input &= ~INPUT_A_PRESSED

    if (common_landing_cancels(m, sTripleJumpLandAction, set_jumping_action)) {
        return true
    }

    if (!(m.input & INPUT_NONZERO_ANALOG)) {
        play_sound_if_no_flag(m, SOUND_MARIO_HAHA, MARIO_MARIO_SOUND_PLAYED)
    }

    common_landing_action(m, MARIO_ANIM_TRIPLE_JUMP_LAND, ACT_FREEFALL)
    return false
}

const act_backflip_land = (m) => {
    if (!(m.input & INPUT_Z_DOWN)) {
        m.input &= ~INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, sBackflipLandAction, set_jumping_action)) {
        return true
    }

    if (!(m.input & INPUT_NONZERO_ANALOG)) {
        play_sound_if_no_flag(m, SOUND_MARIO_HAHA, MARIO_MARIO_SOUND_PLAYED)
    }

    common_landing_action(m, MARIO_ANIM_TRIPLE_JUMP_LAND, ACT_FREEFALL)
    return false
}

const update_sliding_angle = (m, accel, lossFactor) => {
    let newFacingDYaw

    const floor = m.floor
    const slopeAngle = atan2s(floor.normal.z, floor.normal.x)
    const steepness = Math.sqrt(floor.normal.x * floor.normal.x + floor.normal.z * floor.normal.z)

    m.slideVelX += accel * steepness * Math.sin(slopeAngle / 0x8000 * Math.PI)
    m.slideVelZ += accel * steepness * Math.cos(slopeAngle / 0x8000 * Math.PI)

    m.slideVelX *= lossFactor
    m.slideVelZ *= lossFactor

    m.slideYaw = atan2s(m.slideVelZ, m.slideVelX)

    let facingDYaw = s16(m.faceAngle[1] - m.slideYaw);
    newFacingDYaw = facingDYaw

    //! -0x4000 not handled - can slide down a slope while facing perpendicular to it
    if (newFacingDYaw > 0 && newFacingDYaw <= 0x4000) {
        if ((newFacingDYaw -= 0x200) < 0) {
            newFacingDYaw = 0
        }
    } else if (newFacingDYaw > -0x4000 && newFacingDYaw < 0) {
        if ((newFacingDYaw += 0x200) > 0) {
            newFacingDYaw = 0
        }
    } else if (newFacingDYaw > 0x4000 && newFacingDYaw < 0x8000) {
        if ((newFacingDYaw += 0x200) > 0x8000) {
            newFacingDYaw = 0x8000
        }
    } else if (newFacingDYaw > -0x8000 && newFacingDYaw < -0x4000) {
        if ((newFacingDYaw -= 0x200) < -0x8000) {
            newFacingDYaw = -0x8000
        }
    }

    m.faceAngle[1] = m.slideYaw + newFacingDYaw

    m.vel[0] = m.slideVelX
    m.vel[1] = 0.0
    m.vel[2] = m.slideVelZ

    //! Speed is capped a frame late (butt slide HSG)
    m.forwardVel = Math.sqrt(m.slideVelX * m.slideVelX + m.slideVelZ * m.slideVelZ)
    if (m.forwardVel > 100.0) {
        m.slideVelX = m.slideVelX * 100.0 / m.forwardVel
        m.slideVelZ = m.slideVelZ * 100.0 / m.forwardVel
    }

    if (newFacingDYaw < -0x4000 || newFacingDYaw > 0x4000) {
        m.forwardVel *= -1.0
    }

}

const update_sliding = (m, stopSpeed) => {
    let stopped = 0
    let accel, lossFactor

    let intendedDYaw = m.intendedYaw - m.slideYaw
    intendedDYaw = intendedDYaw > 32767 ? intendedDYaw - 65536 : intendedDYaw
    intendedDYaw = intendedDYaw < -32768 ? intendedDYaw + 65536 : intendedDYaw
    let forward = Math.cos(intendedDYaw / 0x8000 * Math.PI)
    let sideward = Math.sin(intendedDYaw / 0x8000 * Math.PI)

    //! 10k glitch
    if (forward < 0.0 && m.forwardVel >= 0.0) {
        forward *= 0.5 + 0.5 * m.forwardVel / 100.0
    }

    switch (mario_get_floor_class(m)) {
        case SURFACE_CLASS_VERY_SLIPPERY:
            accel = 10.0
            lossFactor = m.intendedMag / 32.0 * forward * 0.02 + 0.98
            break

        case SURFACE_CLASS_SLIPPERY:
            accel = 8.0
            lossFactor = m.intendedMag / 32.0 * forward * 0.02 + 0.96
            break

        default:
            accel = 7.0
            lossFactor = m.intendedMag / 32.0 * forward * 0.02 + 0.92
            break

        case SURFACE_CLASS_NOT_SLIPPERY:
            accel = 5.0
            lossFactor = m.intendedMag / 32.0 * forward * 0.02 + 0.92
            break
    }

    const oldSpeed = Math.sqrt(m.slideVelX * m.slideVelX + m.slideVelZ * m.slideVelZ)

    //! This is attempting to use trig derivatives to rotate mario's speed.
    // It is slightly off/asymmetric since it uses the new X speed, but the old
    // Z speed.
    m.slideVelX += m.slideVelZ * (m.intendedMag / 32.0) * sideward * 0.05
    m.slideVelZ -= m.slideVelX * (m.intendedMag / 32.0) * sideward * 0.05

    const newSpeed = Math.sqrt(m.slideVelX * m.slideVelX + m.slideVelZ * m.slideVelZ)

    if (oldSpeed > 0.0 && newSpeed > 0.0) {
        m.slideVelX = m.slideVelX * oldSpeed / newSpeed
        m.slideVelZ = m.slideVelZ * oldSpeed / newSpeed
    }

    update_sliding_angle(m, accel, lossFactor)

    if (!mario_floor_is_slope(m) && m.forwardVel * m.forwardVel < stopSpeed * stopSpeed) {
        set_forward_vel(m, 0.0)
        stopped = 1
    }
    return stopped

}

const align_with_floor = (m) => {
    m.pos[1] = m.floorHeight
    mtxf_align_terrain_triangle(sFloorAlignMatrix[m.unk00], m.pos, m.faceAngle[1], 40.0)
    m.marioObj.gfx.throwMatrix = sFloorAlignMatrix[m.unk00]
}

const common_slide_action = (m, endAction, airAction, animation) => {
    const pos = []

    vec3f_copy(pos, m.pos)
    play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.gfx.cameraToObject)

    adjust_sound_for_speed(m)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, airAction, 0)
            if (m.forwardVel < -50.0 || 50.0 < m.forwardVel) {
                play_sound(SOUND_MARIO_HOOHOO, m.marioObj.gfx.cameraToObject)
            }
            break

        case GROUND_STEP_NONE:
            set_mario_animation(m, animation)
            align_with_floor(m)
            m.particleFlags |= PARTICLE_DUST
            break

        case GROUND_STEP_HIT_WALL:
            if (!mario_floor_is_slippery(m)) {
                if (m.forwardVel > 16.0) {
                    m.particleFlags |= PARTICLE_VERTICAL_STAR
                }
                slide_bonk(m, ACT_GROUND_BONK, endAction)
            } else if (m.wall != null) {
                let wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x)
                let slideSpeed = sqrtf(m.slideVelX * m.slideVelX + m.slideVelZ * m.slideVelZ)

                if ((slideSpeed *= 0.9) < 4.0) {
                    slideSpeed = 4.0;
                }

                m.slideYaw = s16(wallAngle - s16(s16(m.slideYaw - wallAngle) + 0x8000))

                m.vel[0] = m.slideVelX = slideSpeed * sins(m.slideYaw)
                m.vel[2] = m.slideVelZ = slideSpeed * coss(m.slideYaw)
            }

            align_with_floor(m)
            break
    }
}

const common_slide_action_with_jump = (m, stopAction, jumpAction, airAction, animation) => {
    if (m.actionTimer == 5) {
        if (m.input & INPUT_A_PRESSED) {
            return set_jumping_action(m, jumpAction, 0)
        }
    } else {
        m.actionTimer++
    }

    if (update_sliding(m, 4.0)) {
        return set_mario_action(m, stopAction, 0)
    }

    common_slide_action(m, stopAction, airAction, animation)
    return false

}

const act_burning_ground = (m) => {
    if (m.input & INPUT_A_PRESSED) {
        return set_mario_action(m, ACT_BURNING_JUMP, 0)
    }

    m.marioObj.rawData[oMarioBurnTimer] += 2
    if (m.marioObj.rawData[oMarioBurnTimer] > 160) {
        return set_mario_action(m, ACT_WALKING, 0)
    }

    if (m.waterLevel - m.floorHeight > 50.0) {
        play_sound(SOUND_GENERAL_FLAME_OUT, m.marioObj.gfx.cameraToObject)
        return set_mario_action(m, ACT_WALKING, 0)
    }

    if (m.forwardVel < 8.0) {
        m.forwardVel = 8.0
    }
    if (m.forwardVel > 48.0) {
        m.forwardVel = 48.0
    }

    m.forwardVel = approach_f32(m.forwardVel, 32.0, 4.0, 1.0)

    if (m.input & INPUT_NONZERO_ANALOG) {
        m.faceAngle[1] =
            m.intendedYaw - approach_s32(s16(m.intendedYaw - m.faceAngle[1]), 0, 0x600, 0x600);
    }

    apply_slope_accel(m)

    if (perform_ground_step(m) == GROUND_STEP_LEFT_GROUND) {
        set_mario_action(m, ACT_BURNING_FALL, 0)
    }

    set_mario_anim_with_accel(m, MARIO_ANIM_RUNNING, s32(m.forwardVel / 2.0 * 0x10000))
    play_step_sound(m, 9, 45)

    m.particleFlags |= PARTICLE_FIRE
    play_sound(SOUND_MOVING_LAVA_BURN, m.marioObj.gfx.cameraToObject)

    m.health -= 10
    if (m.health < 0x100) {
        set_mario_action(m, ACT_STANDING_DEATH, 0)
    }

    m.marioBodyState.eyeState = MARIO_EYES_DEAD

    // reset_rumble_timers()
    return false
}

const tilt_body_butt_slide = (m) => {
    let intendedDYaw = m.intendedYaw - m.faceAngle[1]
    if (intendedDYaw > 32767) intendedDYaw -= 65536
    if (intendedDYaw < -32768) intendedDYaw += 65536
    m.marioBodyState.torsoAngle[0] = 5461.3335 * m.intendedMag / 32.0 * Math.cos(intendedDYaw / 0x8000 * Math.PI)
    m.marioBodyState.torsoAngle[2] = -(5461.3335 * m.intendedMag / 32.0 * Math.sin(intendedDYaw / 0x8000 * Math.PI))
}

const stomach_slide_action = (m, stopAction, airAction, animation) => {
    if (m.actionTimer == 5) {
        if (!(m.input & INPUT_ABOVE_SLIDE) && (m.input & (INPUT_A_PRESSED | INPUT_B_PRESSED))) {
            // queue_rumble_data(5, 80);
            return drop_and_set_mario_action(
                m, m.forwardVel >= 0.0 ? ACT_FORWARD_ROLLOUT : ACT_BACKWARD_ROLLOUT, 0)
        }
    } else {
        m.actionTimer++
    }

    if (update_sliding(m, 4.0)) {
        return set_mario_action(m, stopAction, 0);
    }

    common_slide_action(m, stopAction, airAction, animation);
    return false
}

const push_or_sidle_wall = (m, startPos) => {
    let wallAngle
    let dWallAngle
    let dx = m.pos[0] - startPos[0]
    let dz = m.pos[2] - startPos[2]
    let movedDistance = Math.sqrt(dx * dx + dz * dz)
    //! (Speed Crash) If a wall is after moving 16384 distance, this crashes.
    let val04 = s32(movedDistance * 2.0 * 0x10000)

    if (m.forwardVel > 6.0) {
        set_forward_vel(m, 6.0)
    }

    if (m.wall != null) {
        wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x)
        dWallAngle = s16(wallAngle - m.faceAngle[1])
    }

    if (m.wall == null || dWallAngle <= -0x71C8 || dWallAngle >= 0x71C8) {
        m.flags |= MARIO_UNKNOWN_31
        set_mario_animation(m, MARIO_ANIM_PUSHING)
        play_step_sound(m, 6, 18)
    } else {
        if (dWallAngle < 0) {
            set_mario_anim_with_accel(m, MARIO_ANIM_SIDESTEP_RIGHT, val04)
        } else {
            set_mario_anim_with_accel(m, MARIO_ANIM_SIDESTEP_LEFT, val04)
        }

        if (m.marioObj.gfx.animInfo.animFrame < 20) {
            play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.gfx.cameraToObject)
            m.particleFlags |= PARTICLE_DUST
        }

        m.actionState = 1
        m.actionArg = s16(wallAngle + 0x8000)
        m.marioObj.gfx.angle[1] = s16(wallAngle + 0x8000)
        m.marioObj.gfx.angle[2] = find_floor_slope(m, 0x4000)
    }
}

const act_butt_slide = (m) => {
    const cancel = common_slide_action_with_jump(m, ACT_BUTT_SLIDE_STOP, ACT_JUMP, ACT_BUTT_SLIDE_AIR,
        MARIO_ANIM_SLIDE);
    tilt_body_butt_slide(m)
    return cancel
}

const act_hold_butt_slide = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_BUTT_SLIDE, 0)
    }

    const cancel = common_slide_action_with_jump(m, ACT_HOLD_BUTT_SLIDE_STOP, ACT_HOLD_JUMP, ACT_HOLD_BUTT_SLIDE_AIR, MARIO_ANIM_SLIDING_ON_BOTTOM_WITH_LIGHT_OBJ)
    tilt_body_butt_slide(m)
    return cancel
}

const act_stomach_slide = (m) => {
    const cancel = stomach_slide_action(m, ACT_STOMACH_SLIDE_STOP, ACT_FREEFALL, MARIO_ANIM_SLIDE_DIVE)
    return cancel
}

const act_hold_stomach_slide = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_STOMACH_SLIDE, 0)
    }

    const cancel = stomach_slide_action(m, ACT_DIVE_PICKING_UP, ACT_HOLD_FREEFALL, MARIO_ANIM_SLIDE_DIVE)
    return cancel
}

const act_crouch_slide = (m) => {
    if (m.actionTimer < 30) {
        m.actionTimer++
        if (m.input & INPUT_A_PRESSED) {
            if (m.forwardVel > 10.0) {
                return set_jumping_action(m, ACT_LONG_JUMP, 0)
            }
        }
    }

    if (m.input & INPUT_B_PRESSED) {
        if (m.forwardVel >= 10.0) {
            return set_mario_action(m, ACT_SLIDE_KICK, 0)
        } else {
            return set_mario_action(m, ACT_MOVE_PUNCHING, 0x0009)
        }
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_JUMP, 0)
    }

    return common_slide_action_with_jump(m, ACT_CROUCHING, ACT_JUMP, ACT_FREEFALL,
        MARIO_ANIM_START_CROUCHING)
}

export const act_hold_jump_land = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_JUMP_LAND_STOP, 0)
    }

    if (common_landing_cancels(m, sHoldJumpLandAction, set_jumping_action)) {
        return true
    }

    common_landing_action(m, MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ, ACT_HOLD_FREEFALL)
    return false
}

export const act_hold_freefall_land = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_FREEFALL_LAND_STOP, 0)
    }

    if (common_landing_cancels(m, sHoldFreefallLandAction, set_jumping_action)) {
        return true
    }

    common_landing_action(m, MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, ACT_HOLD_FREEFALL)
    return false
}

const act_long_jump_land = (m) => {
    if (!(m.input & INPUT_Z_DOWN)) {
        m.input &= ~INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, sLongJumpLandAction, set_jumping_action)) {
        return true
    }

    if (!(m.input & INPUT_NONZERO_ANALOG)) {
        play_sound_if_no_flag(m, SOUND_MARIO_UH2_2, MARIO_MARIO_SOUND_PLAYED);
    }

    common_landing_action(m,
                          !m.marioObj.oMarioLongJumpIsSlow ? MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP
                                                             : MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP,
                          ACT_FREEFALL)
    return false
}

const act_dive_slide = (m) => {
    if (!(m.input & INPUT_ABOVE_SLIDE) && (m.input & (INPUT_A_PRESSED | INPUT_B_PRESSED))) {
        return set_mario_action(m, m.forwardVel > 0.0 ? ACT_FORWARD_ROLLOUT : ACT_BACKWARD_ROLLOUT, 0)
    }

    play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)

    if (update_sliding(m, 8.0) && is_anim_at_end(m)) {
        set_forward_vel(m, 0.0)
        set_mario_action(m, ACT_STOMACH_SLIDE_STOP, 0)
    }

    common_slide_action(m, ACT_STOMACH_SLIDE_STOP, ACT_FREEFALL, MARIO_ANIM_DIVE)
    return false
}

const should_begin_sliding = (m) => {
    if (window.cheats.disableSlopePhysics) return

    if (m.input & INPUT_ABOVE_SLIDE) {
        const slideLevel = (m.area.terrainType & TERRAIN_MASK) == TERRAIN_SLIDE
        const movingBackward = m.forwardVel <= -1.0

        if (slideLevel || movingBackward || mario_facing_downhill(m, false)) {
            return true
        }
    }

    return false
}

const check_ground_dive_or_punch = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        if (m.forwardVel >= 29.0 && m.controller.stickMag > 48.0) {
            m.vel[1] = 20.0
            return set_mario_action(m, ACT_DIVE, 1)
        }

        return set_mario_action(m, ACT_MOVE_PUNCHING, 0)
    }

    return false
}

const act_crawling = (m) => {
    if (should_begin_sliding(m)) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_JUMP, 0)
    }

    if (check_ground_dive_or_punch(m)) {
        return true
    }

    if (m.input & INPUT_UNKNOWN_5) {
        return set_mario_action(m, ACT_STOP_CRAWLING, 0)
    }

    if (!(m.input & INPUT_Z_DOWN)) {
        return set_mario_action(m, ACT_STOP_CRAWLING, 0)
    }

    m.intendedMag *= 0.1

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            break
        case GROUND_STEP_HIT_WALL:
            if (m.forwardVel > 10) {
                set_forward_vel(m, 10)
            }
        case GROUND_STEP_NONE:
            align_with_floor(m)
            break
        default: throw "unimplemented case in act_crawling"
    }

    const val04 = parseInt(m.intendedMag * 2.0 * 0x10000)
    set_mario_anim_with_accel(m, MARIO_ANIM_CRAWLING, val04)
    play_step_sound(m, 26, 79)
    return false
}

const act_move_punching = (m) => {
        if (should_begin_sliding(m)) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.actionState == 0 && (m.input & INPUT_A_DOWN)) {
        return set_mario_action(m, ACT_JUMP_KICK, 0)
    }

    m.actionState = 1

    mario_update_punch_sequence(m)

    if (m.forwardVel >= 0.0) {
        apply_slope_decel(m, 0.5)
    } else {
        if ((m.forwardVel += 8.0) >= 0.0) {
            m.forwardVel = 0.0
        }
        apply_slope_accel(m)
    }

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 0)
            break
        case GROUND_STEP_NONE:
            m.particleFlags |= PARTICLE_DUST
            break
    }

    return false
}

export const act_hold_walking = (m) => {
    if (m.heldObj.behavior == gLinker.behaviors.bhvJumpingBox) {
        return set_mario_action(m, ACT_CRAZY_BOX_BOUNCE, 0)
    }

    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_WALKING, 0)
    }

    if (should_begin_sliding(m)) {
        return set_mario_action(m, ACT_HOLD_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_HOLD_JUMP, 0)
    }

    if (m.input & INPUT_UNKNOWN_5) {
        return set_mario_action(m, ACT_HOLD_DECELERATING, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return drop_and_set_mario_action(m, ACT_CROUCH_SLIDE, 0)
    }

    m.intendedMag *= 0.4

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_HOLD_FREEFALL, 0)
            break

        case GROUND_STEP_HIT_WALL:
            if (m.forwardVel > 16.0) {
                mario_set_forward_vel(m, 16.0)
            }
            break
    }

    anim_and_audio_for_hold_walk(m)

    if (0.4 * m.intendedMag - m.forwardVel > 10.0) {
        m.particleFlags |= PARTICLE_DUST
    }

    return false
}

export const act_hold_heavy_walking = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_HEAVY_THROW, 0)
    }

    if (should_begin_sliding(m)) {
        return drop_and_set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_UNKNOWN_5) {
        return set_mario_action(m, ACT_HOLD_HEAVY_IDLE, 0)
    }

    m.intendedMag *= 0.1

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            drop_and_set_mario_action(m, ACT_FREEFALL, 0)
            break

        case GROUND_STEP_HIT_WALL:
            if (m.forwardVel > 10.0) {
                mario_set_forward_vel(m, 10.0)
            }
            break
    }

    anim_and_audio_for_heavy_walk(m)
    return false
}

const act_slide_kick_slide = (m) => {
    if (m.input & INPUT_A_PRESSED) {
       return set_jumping_action(m, ACT_FORWARD_ROLLOUT, 0)
    }

    set_mario_animation(m, MARIO_ANIM_SLIDE_KICK)
    if (is_anim_at_end(m) && m.forwardVel < 1.0) {
        return set_mario_action(m, ACT_SLIDE_KICK_SLIDE_STOP, 0)
    }

    update_sliding(m, 1.0)

    switch (perform_ground_step(m)) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, ACT_FREEFALL, 2)
            break
        case GROUND_STEP_HIT_WALL:
            break
    }

    play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.gfx.cameraToObject);
    m.particleFlags |= PARTICLE_DUST
    return false
}

const common_ground_knockback_action = (m, animation, arg2, arg3, arg4) => {
    if (arg3) {
        play_mario_heavy_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
    }

    if (arg4 > 0) {
        play_sound_if_no_flag(m, SOUND_MARIO_ATTACKED, MARIO_MARIO_SOUND_PLAYED)
    } else {
        play_sound_if_no_flag(m, SOUND_MARIO_OOOF2, MARIO_MARIO_SOUND_PLAYED)
    }

    if (m.forwardVel > 32.0) {
        m.forwardVel = 32.0
    }
    if (m.forwardVel < -32.0) {
        m.forwardVel = -32.0
    }

    const val04 = set_mario_animation(m, animation)
    if (val04 < arg2) {
        apply_landing_accel(m, 0.9)
    } else if (m .forwardVel >= 0.0) {
        set_forward_vel(m, 0.1)
    } else {
        set_forward_vel(m, -0.1)
    }

    if (perform_ground_step(m) == GROUND_STEP_LEFT_GROUND) {
        if (m.forwardVel >= 0.0) {
            set_mario_action(m, ACT_FORWARD_AIR_KB, arg4)
        } else {
            set_mario_action(m, ACT_BACKWARD_AIR_KB, arg4)
        }
    } else if (is_anim_at_end(m)) {
        if (m.health < 0x100) {
            set_mario_action(m, ACT_STANDING_DEATH, 0)
        } else {
            if (arg4 > 0) {
                m.invincTimer = 30
            }
            set_mario_action(m, ACT_IDLE, 0)
        }
    }

    return val04

}

export const act_forward_ground_kb = (m) => {
    common_ground_knockback_action(m, MARIO_ANIM_FORWARD_KB, 0x14, true, m.actionArg)
    return false
}

export const act_backward_ground_kb = (m) => {
    common_ground_knockback_action(m, MARIO_ANIM_BACKWARD_KB, 0x16, true, m.actionArg)
    return false
}

export const act_soft_forward_ground_kb = (m) => {
    common_ground_knockback_action(m, MARIO_ANIM_SOFT_FRONT_KB, 0x64, false, m.actionArg)
    return false
}

export const act_soft_backward_ground_kb = (m) => {
    common_ground_knockback_action(m, MARIO_ANIM_SOFT_BACK_KB, 0x64, false, m.actionArg)
    return false
}

export const act_hard_backward_ground_kb = (m) => {
    let animFrame =
        common_ground_knockback_action(m, MARIO_ANIM_FALL_OVER_BACKWARDS, 43, true, m.actionArg)
    if (animFrame == 43 && m.health < 0x100) {
        set_mario_action(m, ACT_DEATH_ON_BACK, 0)
    }

    if (animFrame == 54 && m.prevAction == ACT_SPECIAL_DEATH_EXIT) {
        play_sound(SOUND_MARIO_MAMA_MIA, m.marioObj.gfx.cameraToObject)
    }

    if (animFrame == 69) {
        play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)
    }

    return false
}

export const act_hard_forward_ground_kb = (m) => {
    const val04 = common_ground_knockback_action(m, MARIO_ANIM_LAND_ON_STOMACH, 0x15, true, m.actionArg)
    return false
}

const act_ground_bonk = (m) => {
    let animFrame =
        common_ground_knockback_action(m, MARIO_ANIM_GROUND_BONK, 32, true, m.actionArg)
    if (animFrame == 32) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }
    return false
}

const act_death_exit_land = (m) => {
    let animFrame

    apply_landing_accel(m, 0.9)
    play_mario_heavy_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)

    animFrame = set_mario_animation(m, MARIO_ANIM_FALL_OVER_BACKWARDS)

    if (animFrame == 54) {
        play_sound(SOUND_MARIO_MAMA_MIA, m.marioObj.gfx.cameraToObject);
    }
    if (animFrame == 68) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }

    if (is_anim_at_end(m)) {
        set_mario_action(m, ACT_IDLE, 0)
    }

    return false
}

const common_landing_action = (m, animation, airAction) => {
    let stepResult

    if (m.input & INPUT_NONZERO_ANALOG) {
        apply_landing_accel(m, 0.98)
    } else if (m.forwardVel >= 16.0) {
        apply_slope_decel(m, 2.0)
    } else {
        m.vel[1] = 0.0
    }

    stepResult = perform_ground_step(m)
    switch (stepResult) {
        case GROUND_STEP_LEFT_GROUND:
            set_mario_action(m, airAction, 0)
            break

        case GROUND_STEP_HIT_WALL:
            set_mario_animation(m, MARIO_ANIM_PUSHING)
            break
    }

    if (m.forwardVel > 16.0) {
        m.particleFlags |= PARTICLE_DUST
    }

    set_mario_animation(m, animation)
    play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)

    // if (m.floor.type >= SURFACE_SHALLOW_QUICKSAND && m.floor.type <= SURFACE_MOVING_QUICKSAND) {
    //     m.quicksandDepth += (4 - m.actionTimer) * 3.5f - 0.5f;
    // }

    return stepResult
}

const check_common_moving_cancels = (m) => {
    if (m.pos[1] < m.waterLevel - 100) {
        return set_water_plunge_action(m)
    }

    if (!(m.action & ACT_FLAG_INVULNERABLE) && (m.input & INPUT_STOMPED)) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0);
    }

    if (m.input & INPUT_SQUISHED) {
        return drop_and_set_mario_action(m, ACT_SQUISHED, 0)
    }

    if (!(m.action & ACT_FLAG_INVULNERABLE)) {
        if (m.health < 0x100) {
            return drop_and_set_mario_action(m, ACT_STANDING_DEATH, 0)
        }
    }

    return false
}

export const mario_execute_moving_action = (m) => {
    let cancel

    if (check_common_moving_cancels(m)) {
        return true
    }
    
    // if (mario_update_quicksand(m, 0.25)) {
    //     return true
    // }

    switch (m.action) {
        case ACT_WALKING:                  cancel = act_walking(m);                  break
        case ACT_HOLD_WALKING:             cancel = act_hold_walking(m);             break
        case ACT_HOLD_HEAVY_WALKING:       cancel = act_hold_heavy_walking(m);       break
        case ACT_TURNING_AROUND:           cancel = act_turning_around(m);           break
        case ACT_FINISH_TURNING_AROUND:    cancel = act_finish_turning_around(m);    break
        case ACT_BRAKING:                  cancel = act_braking(m);                  break
        case ACT_RIDING_SHELL_GROUND:      cancel = act_riding_shell_ground(m);      break
        case ACT_CRAWLING:                 cancel = act_crawling(m);                 break
        case ACT_BURNING_GROUND:           cancel = act_burning_ground(m);           break
        case ACT_DECELERATING:             cancel = act_decelerating(m);             break
        case ACT_HOLD_DECELERATING:        cancel = act_hold_decelerating(m);        break
        case ACT_BUTT_SLIDE:               cancel = act_butt_slide(m);               break
        case ACT_STOMACH_SLIDE:            cancel = act_stomach_slide(m);            break
        case ACT_HOLD_BUTT_SLIDE:          cancel = act_hold_butt_slide(m);          break
        case ACT_HOLD_STOMACH_SLIDE:       cancel = act_hold_stomach_slide(m);       break
        case ACT_DIVE_SLIDE:               cancel = act_dive_slide(m);               break
        case ACT_MOVE_PUNCHING:            cancel = act_move_punching(m);            break
        case ACT_CROUCH_SLIDE:             cancel = act_crouch_slide(m);             break
        case ACT_SLIDE_KICK_SLIDE:         cancel = act_slide_kick_slide(m);         break
        case ACT_HARD_BACKWARD_GROUND_KB:  cancel = act_hard_backward_ground_kb(m);  break
        case ACT_HARD_FORWARD_GROUND_KB:   cancel = act_hard_forward_ground_kb(m);   break
        case ACT_BACKWARD_GROUND_KB:       cancel = act_backward_ground_kb(m);       break
        case ACT_FORWARD_GROUND_KB:        cancel = act_forward_ground_kb(m);        break
        case ACT_SOFT_BACKWARD_GROUND_KB:  cancel = act_soft_backward_ground_kb(m);  break
        case ACT_SOFT_FORWARD_GROUND_KB:   cancel = act_soft_forward_ground_kb(m);   break
        case ACT_GROUND_BONK:              cancel = act_ground_bonk(m);              break
        case ACT_DEATH_EXIT_LAND:          cancel = act_death_exit_land(m);          break
        case ACT_JUMP_LAND:                cancel = act_jump_land(m);                break
        case ACT_FREEFALL_LAND:            cancel = act_freefall_land(m);            break
        case ACT_DOUBLE_JUMP_LAND:         cancel = act_double_jump_land(m);         break
        case ACT_SIDE_FLIP_LAND:           cancel = act_side_flip_land(m);           break
        case ACT_HOLD_JUMP_LAND:           cancel = act_hold_jump_land(m);           break
        case ACT_HOLD_FREEFALL_LAND:       cancel = act_hold_freefall_land(m);       break
        case ACT_TRIPLE_JUMP_LAND:         cancel = act_triple_jump_land(m);         break
        case ACT_BACKFLIP_LAND:            cancel = act_backflip_land(m);            break
        case ACT_QUICKSAND_JUMP_LAND:      cancel = act_quicksand_jump_land(m);      break
        case ACT_HOLD_QUICKSAND_JUMP_LAND: cancel = act_hold_quicksand_jump_land(m); break
        case ACT_LONG_JUMP_LAND:           cancel = act_long_jump_land(m);           break
    }

    if (!cancel && (m.input & INPUT_IN_WATER)) {
        m.particleFlags |= PARTICLE_WAVE_TRAIL
        m.particleFlags &= ~PARTICLE_DUST
    }

    return cancel
}
