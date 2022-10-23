import * as Mario from "./Mario"
import * as MarioConstants from "../include/mario_constants"
import { SURFACE_SLOW, SURFACE_CLASS_VERY_SLIPPERY, SURFACE_CLASS_SLIPPERY, SURFACE_CLASS_NOT_SLIPPERY, TERRAIN_MASK, TERRAIN_SLIDE } from "../include/surface_terrains"
import * as SurfaceTerrains from "../include/surface_terrains"
import { mario_bonk_reflection, perform_ground_step, perform_air_step, mario_push_off_steep_floor } from "./MarioStep"
import { approach_number, atan2s, approach_s32, vec3f_copy, sqrtf } from "../engine/math_util"
import { oMarioWalkingPitch } from "../include/object_constants"
import { mario_update_punch_sequence } from "./MarioActionsObject"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { s16, s32, sins, coss }  from "../utils"
import { play_sound } from "../audio/external"
import { SOUND_ACTION_METAL_STEP_TIPTOE,
         SOUND_ACTION_METAL_STEP,
         SOUND_ACTION_TERRAIN_STEP_TIPTOE,
         SOUND_ACTION_TERRAIN_STEP,
         SOUND_ACTION_QUICKSAND_STEP,
         SOUND_MARIO_HAHA,
         SOUND_MARIO_HOOHOO,
         SOUND_MARIO_UH2_2,
         SOUND_MARIO_MAMA_MIA,
         SOUND_ACTION_TERRAIN_BODY_HIT_GROUND,
         SOUND_MARIO_ATTACKED,
         SOUND_MARIO_OOOF2,
         SOUND_ACTION_TERRAIN_LANDING,
         SOUND_MOVING_TERRAIN_SLIDE        } from "../include/sounds"

export const tilt_body_running = (m) => {
    let pitch = Mario.find_floor_slope(m, 0)
    pitch = s16(pitch * m.forwardVel / 40.0)
    return s16(-pitch)
}

export const play_step_sound = (m, frame1, frame2) => {
    if (Mario.is_anim_past_frame(m, frame1) || Mario.is_anim_past_frame(m, frame2)) {
        if (m.flags & Mario.MARIO_METAL_CAP) {
            if (m.marioObj.header.gfx.unk38.animID == Mario.MARIO_ANIM_TIPTOE) {
                Mario.play_sound_and_spawn_particles(m, SOUND_ACTION_METAL_STEP_TIPTOE, 0)
            } else {
                Mario.play_sound_and_spawn_particles(m, SOUND_ACTION_METAL_STEP, 0)
            }
        } else if (m.quicksandDepth > 50.0) {
            play_sound(SOUND_ACTION_QUICKSAND_STEP, m.marioObj.header.gfx.cameraToObject)
        } else if (m.marioObj.header.gfx.unk38.animID == Mario.MARIO_ANIM_TIPTOE) {
            Mario.play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_STEP_TIPTOE, 0)
        } else {
            Mario.play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_STEP, 0)
        }
    }
}

const apply_slope_accel = (m) => {

    /////////////////////////// Cheat disabling walk/run acceleration for slopes
    let slopeAccel
    let floorDYaw = s16(m.floorAngle - m.faceAngle[1])

    const floor = m.floor;
    const steepness = Math.sqrt(floor.normal.x * floor.normal.x + floor.normal.z * floor.normal.z);

    if (Mario.mario_floor_is_slope(m)) {
        let slopeClass = 0;

        if (m.action != Mario.ACT_SOFT_BACKWARD_GROUND_KB && m.action != Mario.ACT_SOFT_FORWARD_GROUND_KB) {
            slopeClass = Mario.mario_get_floor_class(m);
        }

        switch (slopeClass) {
            case SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY:
                slopeAccel = 5.1;
                break;
            case SurfaceTerrains.SURFACE_CLASS_SLIPPERY:
                slopeAccel = 2.5;
                break;
            default:
                slopeAccel = 1.5;
                break;
            case SurfaceTerrains.SURFACE_CLASS_NOT_SLIPPERY:
                slopeAccel = 0.0;
                break;
        }
        if (floorDYaw > -0x4000 && floorDYaw < 0x4000) {
            m.forwardVel += slopeAccel * steepness;
        } else {
            m.forwardVel -= slopeAccel * steepness;
        }
    }
    /////////////////////////// End Cheat disabling walk/run acceleration for slopes

    m.slideYaw = m.faceAngle[1]

    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[1] = 0.0
    m.vel[2] = m.slideVelZ

}

const coef_values = [2.0, 1.0, 2.0]

const apply_slope_decel = (m, decelCoef) => {
    let stopped = 0
    let decel
    switch (Mario.mario_get_floor_class(m)) {
        default: decel = decelCoef * coef_values[Mario.get_character_type(m)]; break
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
	
    if (Mario.get_character_type(m) == 1) maxTargetSpeed = 50

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
        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_MOVE_IN_QUICKSAND, val14)
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
                        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_START_TIPTOE, val14)
                        play_step_sound(m, 7, 22)
                        if (Mario.is_anim_past_frame(m, 23)) {
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
                        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_TIPTOE, val14)
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
                        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, parseInt(val14))
                        play_step_sound(m, 10, 49)

                        val0C = 0
                    }   
                    break

                case 3:
                    if (val04 < 18.0) {
                        m.actionTimer = 2
                    } else {
                        val14 = s32(val04 / 4.0 * 0x10000)
                        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_RUNNING, parseInt(val14))
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
        marioObj.header.gfx.angle[0] = marioObj.rawData[oMarioWalkingPitch]
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
                    set_mario_anim_with_accel(m, Mario.MARIO_ANIM_SLOW_WALK_WITH_LIGHT_OBJ, val0C)
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
                    set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALK_WITH_LIGHT_OBJ, val0C)
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
                    set_mario_anim_with_accel(m, Mario.MARIO_ANIM_RUN_WITH_LIGHT_OBJ, val0C)
                    play_step_sound(m, 10, 49)

                    going = false
                }
                break
        }
    }
}

export const anim_and_audio_for_heavy_walk = (m) => {
    let val04 = s32(m.intendedMag * 0x10000)
    set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALK_WITH_HEAVY_OBJ, val04)
    play_step_sound(m, 26, 79)
}

const tilt_body_walking = (m, startYaw) => {
    const val0C = m.marioBodyState
    const animID = m.marioObj.header.gfx.unk38.animID
    let dYaw, val02, val00

    if (animID == Mario.MARIO_ANIM_WALKING || animID == Mario.MARIO_ANIM_RUNNING) {
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

        if (SurfaceCollision.find_wall_collisions(wallCols) != 0) {
            const floorWrapper = {}
            const floorHeight = SurfaceCollision.find_floor(wallCols.x, wallCols.y, wallCols.z, floorWrapper)
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

                        Mario.set_mario_action(m, Mario.ACT_LEDGE_CLIMB_DOWN, 0)
                        Mario.set_mario_animation(m, Mario.MARIO_ANIM_CLIMB_DOWN_LEDGE)
                    }
                }
            }
        }
    }
}

const begin_braking_action = (m) => {
    if (m.actionState == 1) {
        m.faceAngle[1] = m.actionArg;
        return Mario.set_mario_action(m, Mario.ACT_STANDING_AGAINST_WALL, 0);
    }

    if (m.forwardVel >= 16.0 && m.floor.normal.y >= 0.17364818) {
        return Mario.set_mario_action(m, Mario.ACT_BRAKING, 0)
    }

    return Mario.set_mario_action(m, Mario.ACT_DECELERATING, 0)
}

const analog_stick_held_back = (m) => {
    let intendedDYaw = s16(m.intendedYaw - m.faceAngle[1]);
    return intendedDYaw < -0x471C || intendedDYaw > 0x471C
}

const act_walking = (m) => {
    let startPos;
    const startYaw = m.faceAngle[1]

    if (should_begin_sliding(m)) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }
	
    if (m.input & Mario.INPUT_PARACHUTE && window.sm64js.ext) {
		m.input ^= Mario.INPUT_PARACHUTE
        return Mario.set_mario_action(m, Mario.ACT_KARTING, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jump_from_landing(m)
    }

    if (check_ground_dive_or_punch(m)) {
        return 1
    }

    if (m.input & Mario.INPUT_UNKNOWN_5) {
        return begin_braking_action(m)
    }

    if (analog_stick_held_back(m) && m.forwardVel >= 16.0) {
        return Mario.set_mario_action(m, Mario.ACT_TURNING_AROUND, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_CROUCH_SLIDE, 0)
    }

    m.actionState = 0

    startPos = [...m.pos];
    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_NONE:
            anim_and_audio_for_walk(m)
            if (m.intendedMag - m.forwardVel > 16.0) m.particleFlags |= MarioConstants.PARTICLE_DUST
            break
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GENERAL_FALL)
            break
        case Mario.GROUND_STEP_HIT_WALL:
            push_or_sidle_wall(m, startPos);
            m.actionTimer = 0;
            break
        default: throw "unknown ground step in act_walking"
    }

    check_ledge_climb_down(m)
    tilt_body_walking(m, startYaw)
    return 0
}

const slide_bonk = (m, fastAction, slowAction) => {
    if (m.forwardVel > 16.0) {
        mario_bonk_reflection(m, 1)
        Mario.drop_and_set_mario_action(m, fastAction, 0)
    } else {
        Mario.set_forward_vel(m, 0.0)
        Mario.set_mario_action(m, slowAction, 0)
    }
}

const set_triple_jump_action = (m) => {
    if (m.flags & Mario.MARIO_WING_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_FLYING_TRIPLE_JUMP, 0)
    } else if (m.forwardVel > 20.0) {
        return Mario.set_mario_action(m, Mario.ACT_TRIPLE_JUMP, 0)
    } else {
        return Mario.set_mario_action(m, Mario.ACT_JUMP, 0)
    }
}

const act_braking = (m) => {

    if (!(m.input & Mario.INPUT_FIRST_PERSON) && (m.input &
        (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE))) {
        return Mario.check_common_action_exits(m)
    }

    if (apply_slope_decel(m, 2.0)) {
        return Mario.set_mario_action(m, Mario.ACT_BRAKING_STOP, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_MOVE_PUNCHING, 0)
    }

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            break
        case Mario.GROUND_STEP_NONE:
            m.particleFlags |= MarioConstants.PARTICLE_DUST
            break
        case Mario.GROUND_STEP_HIT_WALL:
            slide_bonk(m, Mario.ACT_BACKWARD_GROUND_KB, Mario.ACT_BRAKING_STOP);
            break
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SKID_ON_GROUND)
    return 0
}

const update_decelerating_speed = (m) => {
    let stopped = 0
    
    m.forwardVel = approach_number(m.forwardVel, 0.0, 1.0, 1.0)

    if (m.forwardVel == 0.0) stopped = 1

    Mario.set_forward_vel(m, m.forwardVel)

    return stopped
}

const act_decelerating = (m) => {
    // let val0C
    let slopeClass = Mario.mario_get_floor_class(m)

    if (!(m.input & Mario.INPUT_FIRST_PERSON)) {
        if (should_begin_sliding(m)) {
            return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0);
        }

        if (m.input & Mario.INPUT_A_PRESSED) {
            return Mario.set_jump_from_landing(m)
        }

        if (check_ground_dive_or_punch(m)) {
            return 1
        }

        if (m.input & Mario.INPUT_NONZERO_ANALOG) {
            return Mario.set_mario_action(m, Mario.ACT_WALKING, 0)
        }

        if (m.input & Mario.INPUT_Z_PRESSED) {
            return Mario.set_mario_action(m, Mario.ACT_CROUCH_SLIDE, 0)
        }
    }

    if (update_decelerating_speed(m)) {
        return Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
    }

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            break
        case Mario.GROUND_STEP_HIT_WALL:
            if (slopeClass == SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY) {
                mario_bonk_reflection(m, 1)
            } else {
                Mario.set_forward_vel(m, 0)
            }
            break
    }

    if (slopeClass == SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_HEAD_LEFT)
        play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.header.gfx.cameraToObject)
        Mario.adjust_sound_for_speed(m)
        m.particleFlags |= MarioConstants.PARTICLE_DUST
    } else {
        // (Speed Crash) Crashes if speed exceeds 2^17.
        let val0C = s32(m.forwardVel / 4.0 * 0x10000)
        if (val0C < 0x1000) {
            val0C = 0x1000
        }

        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, val0C)
        play_step_sound(m, 10, 49)
    }

    return 0
}

const begin_walking_action = (m, forwardVel, action, actionArg) => {
    m.faceAngle[1] = m.intendedYaw
    Mario.set_forward_vel(m, forwardVel)
    return Mario.set_mario_action(m, action, actionArg)
}

const act_turning_around = (m) => {
    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_SIDE_FLIP, 0)
    }

    if (m.input & Mario.INPUT_UNKNOWN_5) {
        return Mario.set_mario_action(m, Mario.ACT_BRAKING, 0)
    }

    if (!analog_stick_held_back(m)) {
        return Mario.set_mario_action(m, Mario.ACT_WALKING, 0)
    }

    if (apply_slope_decel(m, 2.0)) {

        return begin_walking_action(m, 8.0, Mario.ACT_FINISH_TURNING_AROUND, 0)
    }

    switch (perform_ground_step(m)) {

        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            break

        case Mario.GROUND_STEP_NONE:
            m.particleFlags |= MarioConstants.PARTICLE_DUST
            break
    }

    if (m.forwardVel >= 18.0) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_TURNING_PART1)
    } else {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_TURNING_PART2)
        if (Mario.is_anim_at_end(m)) {
            if (m.forwardVel > 0.0) {
                begin_walking_action(m, -m.forwardVel, Mario.ACT_WALKING, 0)
            } else {
                begin_walking_action(m, 8.0, Mario.ACT_WALKING, 0)
            }
        }
    }

    return 0
}

const act_finish_turning_around = (m) => {
    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_SIDE_FLIP, 0)
    }

    update_walking_speed(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_TURNING_PART2)

    if (perform_ground_step(m) == Mario.GROUND_STEP_LEFT_GROUND) {}

    if (Mario.is_anim_at_end(m)) 
        Mario.set_mario_action(m, Mario.ACT_WALKING, 0)

    m.marioObj.header.gfx.angle[1] += 0x8000
    return 0
}

const apply_landing_accel = (m, frictionFactor) => {
    let stopped = false

    apply_slope_accel(m)

    if (!Mario.mario_floor_is_slope(m)) {
        m.forwardVel *= frictionFactor
        if (m.forwardVel * m.forwardVel < 1.0) {
            Mario.set_forward_vel(m, 0.0)
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
        return Mario.set_mario_action(m, landingAction.slideAction, 0);
    }

    if (m.input & Mario.INPUT_FIRST_PERSON) {
        return Mario.set_mario_action(m, landingAction.endAction, 0)
    }

    if (++m.actionTimer >= landingAction.numFrames) {
        return Mario.set_mario_action(m, landingAction.endAction, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return setAPressAction(m, landingAction.aPressedAction, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, landingAction.offFloorAction, 0)
    }

    return false
}

const act_jump_land = (m) => {
    if (common_landing_cancels(m, Mario.sJumpLandAction, Mario.set_jumping_action)) {
        return 1
    }

    common_landing_action(m, Mario.MARIO_ANIM_LAND_FROM_SINGLE_JUMP, Mario.ACT_FREEFALL)
    return 0
}

const act_freefall_land = (m) => {
    if (common_landing_cancels(m, Mario.sFreefallLandAction, Mario.set_jumping_action)) {
        return 1
    }

    common_landing_action(m, Mario.MARIO_ANIM_GENERAL_LAND, Mario.ACT_FREEFALL)
    return 0
}

const act_side_flip_land = (m) => {
    if (common_landing_cancels(m, Mario.sSideFlipLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (common_landing_action(m, Mario.MARIO_ANIM_SLIDEFLIP_LAND, Mario.ACT_FREEFALL) != Mario.GROUND_STEP_HIT_WALL) {
        m.marioObj.header.gfx.angle[1] = s16(m.marioObj.header.gfx.angle[1] + 0x8000)
    }

    return 0
}

const act_double_jump_land = (m) => {
    if (common_landing_cancels(m, Mario.sDoubleJumpLandAction, set_triple_jump_action)) {
        return 1
    }

    common_landing_action(m, Mario.MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, Mario.ACT_FREEFALL)
    return 0
}

const act_triple_jump_land = (m) => {
    m.input &= ~Mario.INPUT_A_PRESSED

    if (common_landing_cancels(m, Mario.sTripleJumpLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (!(m.input & Mario.INPUT_NONZERO_ANALOG)) {
        Mario.play_sound_if_no_flag(m, SOUND_MARIO_HAHA, Mario.MARIO_MARIO_SOUND_PLAYED)
    }

    common_landing_action(m, Mario.MARIO_ANIM_TRIPLE_JUMP_LAND, Mario.ACT_FREEFALL)
    return 0
}

const act_backflip_land = (m) => {
    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        m.input &= ~Mario.INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, Mario.sBackflipLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (!(m.input & Mario.INPUT_NONZERO_ANALOG)) {
        Mario.play_sound_if_no_flag(m, SOUND_MARIO_HAHA, Mario.MARIO_MARIO_SOUND_PLAYED)
    }

    common_landing_action(m, Mario.MARIO_ANIM_TRIPLE_JUMP_LAND, Mario.ACT_FREEFALL)
    return 0
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

    switch (Mario.mario_get_floor_class(m)) {
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

    if (!Mario.mario_floor_is_slope(m) && m.forwardVel * m.forwardVel < stopSpeed * stopSpeed) {
        Mario.set_forward_vel(m, 0.0)
        stopped = 1
    }
    return stopped

}

const align_with_floor = (m) => {
    m.pos[1] = m.floorHeight
    // Todo other stuff here
}

const common_slide_action = (m, endAction, airAction, animation) => {
    const pos = []

    vec3f_copy(pos, m.pos)
    play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.header.gfx.cameraToObject)

    Mario.adjust_sound_for_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, airAction, 0)
            if (m.forwardVel < -50.0 || 50.0 < m.forwardVel) {
                play_sound(SOUND_MARIO_HOOHOO, m.marioObj.header.gfx.cameraToObject)
            }
            break

        case Mario.GROUND_STEP_NONE:
            Mario.set_mario_animation(m, animation)
            align_with_floor(m)
            m.particleFlags |= MarioConstants.PARTICLE_DUST
            break

        case Mario.GROUND_STEP_HIT_WALL:
            if (!Mario.mario_floor_is_slippery(m)) {
                if (!m.wall) break

                if (m.forwardVel > 16.0) {
                    m.particleFlags |= MarioConstants.PARTICLE_VERTICAL_STAR
                }
                slide_bonk(m, Mario.ACT_GROUND_BONK, endAction)
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
        if (m.input & Mario.INPUT_A_PRESSED) {
            return Mario.set_jumping_action(m, jumpAction, 0)
        }
    } else {
        m.actionTimer++
    }

    if (update_sliding(m, 4.0)) {
        return Mario.set_mario_action(m, stopAction, 0)
    }

    common_slide_action(m, stopAction, airAction, animation)
    return 0

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
        if (!(m.input & Mario.INPUT_ABOVE_SLIDE) && (m.input & (Mario.INPUT_A_PRESSED | Mario.INPUT_B_PRESSED))) {
            // queue_rumble_data(5, 80);
            return Mario.drop_and_set_mario_action(
                m, m.forwardVel >= 0.0 ? Mario.ACT_FORWARD_ROLLOUT : Mario.ACT_BACKWARD_ROLLOUT, 0)
        }
    } else {
        m.actionTimer++
    }

    if (update_sliding(m, 4.0)) {
        return Mario.set_mario_action(m, stopAction, 0);
    }

    common_slide_action(m, stopAction, airAction, animation);
    return 0
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
        Mario.set_forward_vel(m, 6.0)
    }

    if (m.wall != null) {
        wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x)
        dWallAngle = s16(wallAngle - m.faceAngle[1])
    }

    if (m.wall == null || dWallAngle <= -0x71C8 || dWallAngle >= 0x71C8) {
        m.flags |= Mario.MARIO_UNKNOWN_31
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_PUSHING)
        play_step_sound(m, 6, 18)
    } else {
        if (dWallAngle < 0) {
            Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_SIDESTEP_RIGHT, val04)
        } else {
            Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_SIDESTEP_LEFT, val04)
        }

        if (m.marioObj.header.gfx.unk38.animFrame < 20) {
            play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.header.gfx.cameraToObject)
            m.particleFlags |= MarioConstants.PARTICLE_DUST
        }

        m.actionState = 1
        m.actionArg = s16(wallAngle + 0x8000)
        m.marioObj.header.gfx.angle[1] = s16(wallAngle + 0x8000)
        m.marioObj.header.gfx.angle[2] = Mario.find_floor_slope(m, 0x4000)
    }
}

const act_butt_slide = (m) => {
    const cancel = common_slide_action_with_jump(m, Mario.ACT_BUTT_SLIDE_STOP, Mario.ACT_JUMP, Mario.ACT_BUTT_SLIDE_AIR,
        Mario.MARIO_ANIM_SLIDE);
    tilt_body_butt_slide(m)
    return cancel
}

const act_stomach_slide = (m) => {
    const cancel = stomach_slide_action(m, Mario.ACT_STOMACH_SLIDE_STOP, Mario.ACT_FREEFALL, Mario.MARIO_ANIM_SLIDE_DIVE)
    return cancel
}

const act_crouch_slide = (m) => {

    if (m.actionTimer < 30) {
        m.actionTimer++
        if (m.input & Mario.INPUT_A_PRESSED) {
            if (m.forwardVel > 10.0) {
                return Mario.set_jumping_action(m, Mario.ACT_LONG_JUMP, 0)
            }
        }
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        if (m.forwardVel >= 10.0) {
            return Mario.set_mario_action(m, Mario.ACT_SLIDE_KICK, 0)
        } else {
            return Mario.set_mario_action(m, Mario.ACT_MOVE_PUNCHING, 0x0009)
        }
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_JUMP, 0)
    }

    return common_slide_action_with_jump(m, Mario.ACT_CROUCHING, Mario.ACT_JUMP, Mario.ACT_FREEFALL,
        Mario.MARIO_ANIM_START_CROUCHING)
}

//Hacky way to smooth kart.
const kart_angle_smoothing = (m, speed, angle) => {
		angle[1] = m.marioObj.header.gfx.angle[1]
		const targetAngle0 = -Mario.find_floor_slope(m, 0x0)
		const targetAngle2 = Mario.find_floor_slope(m, 0x4000)
        const kartAngleMultiplier0 = 0.65
        const kartAngleMultiplier2 = 0.8
		if (angle[0] < targetAngle0) {
			angle[0] += speed*kartAngleMultiplier0
			if (angle[0] > targetAngle0) {
				angle[0] = targetAngle0
			}
		} else {
			angle[0] -= speed*kartAngleMultiplier0
			if (angle[0] < targetAngle0) {
				angle[0] = targetAngle0
			}
		}
		if (angle[2] < targetAngle2) {
			angle[2] += speed*kartAngleMultiplier2
			if (angle[2] > targetAngle2) {
				angle[2] = targetAngle2
			}
		} else {
			angle[2] -= speed*kartAngleMultiplier2
			if (angle[2] < targetAngle2) {
				angle[2] = targetAngle2
			}
		}
		m.marioObj.header.gfx.angle = angle
}

const act_karting = (m) => {
	const ANGLE_BUF = [...m.marioObj.header.gfx.angle]
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SLIDING_ON_BOTTOM_WITH_LIGHT_OBJ, 0)
    m.marioBodyState.torsoAngle[0] = 0x1000
    m.marioBodyState.torsoAngle[2] = 0x0000
	let Vel = m.forwardVel
	if (m.forwardVel > 16) {
		m.particleFlags |= MarioConstants.PARTICLE_DUST;	
	}
	if (!(m.input & Mario.INPUT_OFF_FLOOR)) {
		//m.actionState = 0
		if ((m.input & Mario.INPUT_A_DOWN || m.input & Mario.INPUT_Z_DOWN) && !should_begin_sliding(m)) {
			Vel += 1.3 * ((m.input & Mario.INPUT_Z_DOWN) ? -1 : 1)
		} else {
			Vel *= 0.95545
		}
	}
			if (Vel < -35) Vel = -35
			if (Vel > 70) Vel = 70
    if (m.input & Mario.INPUT_B_PRESSED && !(m.input & Mario.INPUT_OFF_FLOOR) && m.actionState == 0 && m.vel[1] <= 0.0) {
		m.input |= Mario.INPUT_OFF_FLOOR // Prevent crash / infinite loop.
		m.actionState = 1
		m.pos[1] += 12
		m.vel[1] = 32
    }
    if (m.input & Mario.INPUT_PARACHUTE && !(m.input & Mario.INPUT_OFF_FLOOR) && Math.abs(m.forwardVel) < 16) {
		m.input ^= Mario.INPUT_PARACHUTE
        return Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
    }
    if (m.input & Mario.INPUT_NONZERO_ANALOG && m.actionState == 0) {
		let number16 = parseInt(m.intendedYaw - m.faceAngle[1])
		let change = Math.round(10 + (Vel*10))
		number16 = number16 > 32767 ? number16 - 65536 : number16
		number16 = number16 < -32768 ? number16 + 65536 : number16
		m.faceAngle[1] = m.intendedYaw - approach_number(number16, 0, change, change)
    }
	m.forwardVel = Vel
	if (m.input & Mario.INPUT_OFF_FLOOR || m.actionState == 1) {
		switch (perform_air_step(m, 1)) {
				case Mario.AIR_STEP_NONE:
					break
				case Mario.AIR_STEP_LANDED:
					if (m.vel[1] < -32 && !(m.input & Mario.INPUT_OFF_FLOOR) && !(m.input & Mario.INPUT_ABOVE_SLIDE)) {
						m.vel[1] *= -0.25
					} else {
					m.actionState = 0
					}
					break
				case Mario.AIR_STEP_HIT_WALL:
					m.forwardVel *= -0.2
					Mario.set_forward_vel(m, 1.25 * m.forwardVel)
					break
				case Mario.AIR_STEP_GRABBED_LEDGE:
					break
				case Mario.AIR_STEP_GRABBED_CEILING:
					break
				case Mario.AIR_STEP_HIT_LAVA_WALL:
					break
				default: throw "unknown air step in act_karting"
			}
		m.marioObj.header.gfx.angle[2] = 0
		m.marioObj.header.gfx.angle[0] = m.vel[1] * -50.0
	}
	else
	{
		switch (perform_ground_step(m)) {
			case Mario.GROUND_STEP_NONE:
				break
			case Mario.GROUND_STEP_LEFT_GROUND:
				if (!(m.input & Mario.INPUT_ABOVE_SLIDE)) m.pos[1] += 12
				m.actionState = 1
				break
			case Mario.GROUND_STEP_HIT_WALL:
				m.forwardVel *= 0.75
				break
			default: throw "unknown ground step in act_karting"
		}
		if (m.actionState == 0) {
			apply_slope_accel(m)
			kart_angle_smoothing(m, 0x800, ANGLE_BUF)
		}
	}
	if (should_begin_sliding(m) && !(m.input & Mario.INPUT_OFF_FLOOR)) {
		update_sliding(m)
		m.actionState == 0
	}
	m.marioObj.header.gfx.pos[1] += m.actionState == 1 ? 12 : 24
    return 0;
}

const act_long_jump_land = (m) => {
    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        m.input &= ~Mario.INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, Mario.sLongJumpLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (!(m.input & Mario.INPUT_NONZERO_ANALOG)) {
        Mario.play_sound_if_no_flag(m, SOUND_MARIO_UH2_2, Mario.MARIO_MARIO_SOUND_PLAYED)
    }

    common_landing_action(m,
                          !m.marioObj.oMarioLongJumpIsSlow ? Mario.MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP
                                                             : Mario.MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP,
                          Mario.ACT_FREEFALL)
    return 0
}

const f_vel_values = [30, 40, 50]

const act_dive_slide = (m) => {
    if (!(m.input & Mario.INPUT_ABOVE_SLIDE)) {
        if ((m.input & Mario.INPUT_A_PRESSED) || (m.input & Mario.INPUT_B_PRESSED && !window.sm64js.ext)) {
            return Mario.set_mario_action(m, m.forwardVel > 0.0 ? Mario.ACT_FORWARD_ROLLOUT : Mario.ACT_BACKWARD_ROLLOUT, 0)
        }
    }
    if (!(m.input & Mario.INPUT_ABOVE_SLIDE) && (m.input & Mario.INPUT_B_PRESSED) && window.sm64js.ext) {
		m.vel[1] = 16.0
		Mario.set_forward_vel(m, f_vel_values[Mario.get_character_type(m)])
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    Mario.play_sound_if_no_flag(m, SOUND_MARIO_UH2_2, Mario.MARIO_MARIO_SOUND_PLAYED);

    if (update_sliding(m, 8.0) && Mario.is_anim_at_end(m)) {
        Mario.set_forward_vel(m, 0.0)
        Mario.set_mario_action(m, Mario.ACT_STOMACH_SLIDE_STOP, 0)
    }

    common_slide_action(m, Mario.ACT_STOMACH_SLIDE_STOP, Mario.ACT_FREEFALL, Mario.MARIO_ANIM_DIVE)
    return 0
}

const act_pound_roll = (m) => {

    if (!(m.input & Mario.INPUT_ABOVE_SLIDE) && !(m.input & Mario.INPUT_A_PRESSED)) {
		Mario.set_forward_vel(m, 30)
    } else {
        Mario.set_mario_action(m, Mario.ACT_BUTT_SLIDE_STOP, 0)
    }

    common_slide_action(m, Mario.ACT_STOMACH_SLIDE_STOP, Mario.ACT_FREEFALL, Mario.MARIO_ANIM_FORWARD_SPINNING)
    return 0
}

const should_begin_sliding = (m) => {

    //return 0 /// cheat disable sliding on slopes

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        const slideLevel = (m.area.terrainType & TERRAIN_MASK) == TERRAIN_SLIDE
        const movingBackward = m.forwardVel <= -1.0

        if (slideLevel || movingBackward || Mario.mario_facing_downhill(m, false)) {
            return 1
        }
    }

    return 0
}

const check_ground_dive_or_punch = (m) => {
    if (m.input & Mario.INPUT_B_PRESSED) {
        if (m.forwardVel >= 29.0  && Mario.get_character_type(m) != 2 && m.controller.stickMag > 48.0) {
            m.vel[1] = 20.0
            return Mario.set_mario_action(m, Mario.ACT_DIVE, 1)
        }
        else {
            return Mario.set_mario_action(m, Mario.ACT_MOVE_PUNCHING, 0)
        }

        return Mario.set_mario_action(m, Mario.ACT_MOVE_PUNCHING, 0)
    }

    return 0
}

const act_crawling = (m) => {
    if (should_begin_sliding(m)) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_JUMP, 0)
    }

    if (check_ground_dive_or_punch(m)) {
        return 1
    }

    if (m.input & Mario.INPUT_UNKNOWN_5) {
        return Mario.set_mario_action(m, Mario.ACT_STOP_CRAWLING, 0)
    }

    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_STOP_CRAWLING, 0)
    }

    m.intendedMag *= 0.1

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            break
        case Mario.GROUND_STEP_HIT_WALL:
            if (m.forwardVel > 10) {
                Mario.set_forward_vel(m, 10)
            }
        case Mario.GROUND_STEP_NONE:
            align_with_floor(m)
            break
        default: throw "unimplemented case in act_crawling"
    }

    const val04 = parseInt(m.intendedMag * 2.0 * 0x10000)
    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_CRAWLING, val04)
    play_step_sound(m, 26, 79)
    return 0
}

const act_move_punching = (m) => {
    if (should_begin_sliding(m)) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    if (m.actionState == 0 && (m.input & Mario.INPUT_A_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_JUMP_KICK, 0)
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
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            break
        case Mario.GROUND_STEP_NONE:
            m.particleFlags |= MarioConstants.PARTICLE_DUST
            break
    }

    return 0
}

const act_slide_kick_slide = (m) => {
    if (m.input & Mario.INPUT_A_PRESSED) {
       return Mario.set_jumping_action(m, Mario.ACT_FORWARD_ROLLOUT, 0)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SLIDE_KICK)
    if (Mario.is_anim_at_end(m) && m.forwardVel < 1.0) {
        return Mario.set_mario_action(m, Mario.ACT_SLIDE_KICK_SLIDE_STOP, 0)
    }

    update_sliding(m, 1.0)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 2)
            break
        case Mario.GROUND_STEP_HIT_WALL:
            break
    }

    play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.header.gfx.cameraToObject);
    m.particleFlags |= MarioConstants.PARTICLE_DUST
    return 0
}

const common_ground_knockback_action = (m, animation, arg2, arg3, arg4) => {
    if (arg3) {
        Mario.play_mario_heavy_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
    }

    if (arg4 > 0) {
        Mario.play_sound_if_no_flag(m, SOUND_MARIO_ATTACKED, Mario.MARIO_MARIO_SOUND_PLAYED)
    } else {
        Mario.play_sound_if_no_flag(m, SOUND_MARIO_OOOF2, Mario.MARIO_MARIO_SOUND_PLAYED)
    }

    if (m.forwardVel > 32.0) {
        m.forwardVel = 32.0
    }
    if (m.forwardVel < -32.0) {
        m.forwardVel = -32.0
    }

    const val04 = Mario.set_mario_animation(m, animation)
    if (val04 < arg2) {
        apply_landing_accel(m, 0.9)
    } else if (m .forwardVel >= 0.0) {
        Mario.set_forward_vel(m, 0.1)
    } else {
        Mario.set_forward_vel(m, -0.1)
    }

    if (perform_ground_step(m) == Mario.GROUND_STEP_LEFT_GROUND) {
        if (m.forwardVel >= 0.0) {
            Mario.set_mario_action(m, Mario.ACT_FORWARD_AIR_KB, arg4)
        } else {
            Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, arg4)
        }
    } else if (Mario.is_anim_at_end(m)) {
        if (m.health < 0x100) {
            Mario.set_mario_action(m, Mario.ACT_STANDING_DEATH, 0)
        } else {
            if (arg4 > 0) {
                m.invincTimer = 30
            }
            Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
        }
    }

    return val04

}

export const act_forward_ground_kb = (m) => {
    common_ground_knockback_action(m, Mario.MARIO_ANIM_FORWARD_KB, 0x14, true, m.actionArg)
    return 0
}

export const act_backward_ground_kb = (m) => {
    common_ground_knockback_action(m, Mario.MARIO_ANIM_BACKWARD_KB, 0x16, true, m.actionArg)
    return 0
}

export const act_soft_forward_ground_kb = (m) => {
    common_ground_knockback_action(m, Mario.MARIO_ANIM_SOFT_FRONT_KB, 0x64, false, m.actionArg)
    return 0
}

export const act_soft_backward_ground_kb = (m) => {
    common_ground_knockback_action(m, Mario.MARIO_ANIM_SOFT_BACK_KB, 0x64, false, m.actionArg)
    return 0
}

export const act_hard_backward_ground_kb = (m) => {
    const val04 = common_ground_knockback_action(m, Mario.MARIO_ANIM_FALL_OVER_BACKWARDS, 0x2B, true, m.actionArg)
    if (val04 == 43 && m.health < 0x100) {
        Mario.set_mario_action(m, Mario.ACT_DEATH_ON_BACK, 0);
    }
	return 0
}

export const act_hard_forward_ground_kb = (m) => {
    let animFrame =
        common_ground_knockback_action(m, Mario.MARIO_ANIM_FALL_OVER_BACKWARDS, 43, true, m.actionArg)
    if (animFrame == 43 && m.health < 0x100) {
        Mario.set_mario_action(m, Mario.ACT_DEATH_ON_BACK, 0)
    }

    if (animFrame == 54 && m.prevAction == Mario.ACT_SPECIAL_DEATH_EXIT) {
        play_sound(SOUND_MARIO_MAMA_MIA, m.marioObj.header.gfx.cameraToObject)
    }

    if (animFrame == 69) {
        Mario.play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)
    }

	return 0
}

const act_ground_bonk = (m) => {
    let animFrame =
        common_ground_knockback_action(m, Mario.MARIO_ANIM_GROUND_BONK, 32, true, m.actionArg)
    if (animFrame == 32) {
        Mario.play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }
    return 0
}

const act_death_exit_land = (m) => {
    let animFrame

    apply_landing_accel(m, 0.9)
    play_mario_heavy_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)

    animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_FALL_OVER_BACKWARDS)

    if (animFrame == 54) {
        play_sound(SOUND_MARIO_MAMA_MIA, m.marioObj.header.gfx.cameraToObject);
    }
    if (animFrame == 68) {
        Mario.play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }

    if (is_anim_at_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
    }

    return 0
}

const common_landing_action = (m, animation, airAction) => {
    let stepResult

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {
        apply_landing_accel(m, 0.98)
    } else if (m.forwardVel >= 16.0) {
        apply_slope_decel(m, 2.0)
    } else {
        m.vel[1] = 0.0
    }

    stepResult = perform_ground_step(m)
    switch (stepResult) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, airAction, 0)
            break

        case Mario.GROUND_STEP_HIT_WALL:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_PUSHING)
            break
    }

    if (m.forwardVel > 16.0) {
        m.particleFlags |= MarioConstants.PARTICLE_DUST
    }

    Mario.set_mario_animation(m, animation)
    Mario.play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)

    // if (m->floor->type >= SURFACE_SHALLOW_QUICKSAND && m->floor->type <= SURFACE_MOVING_QUICKSAND) {
    //     m->quicksandDepth += (4 - m->actionTimer) * 3.5f - 0.5f;
    // }

    return stepResult
}

const check_common_moving_cancels = (m) => {
    if (m.pos[1] < m.waterLevel - 100) {
        return Mario.set_water_plunge_action(m)
    }

    if (!(m.action & Mario.ACT_FLAG_INVULNERABLE) && (m.input & Mario.INPUT_UNKNOWN_10)) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0);
    }

    if (m.input & Mario.INPUT_SQUISHED) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SQUISHED, 0)
    }

    if (!(m.action & Mario.ACT_FLAG_INVULNERABLE)) {
        if (m.health < 0x100) {
            return Mario.drop_and_set_mario_action(m, Mario.ACT_STANDING_DEATH, 0)
        }
    }

    return 0
}

export const mario_execute_moving_action = (m) => {
    let cancel
    
    if (check_common_moving_cancels(m)) {
        return 1
    }
    
    // if (mario_update_quicksand(m, 0.25)) {
    //     return 1
    // }

    switch (m.action) {
        case Mario.ACT_WALKING:                  cancel = act_walking(m);                  break
        case Mario.ACT_HOLD_WALKING:             cancel = act_hold_walking(m);             break
        case Mario.ACT_HOLD_HEAVY_WALKING:       cancel = act_hold_heavy_walking(m);       break
        case Mario.ACT_TURNING_AROUND:           cancel = act_turning_around(m);           break
        case Mario.ACT_FINISH_TURNING_AROUND:    cancel = act_finish_turning_around(m);    break
        case Mario.ACT_BRAKING:                  cancel = act_braking(m);                  break
        case Mario.ACT_RIDING_SHELL_GROUND:      cancel = act_riding_shell_ground(m);      break
        case Mario.ACT_CRAWLING:                 cancel = act_crawling(m);                 break
        case Mario.ACT_BURNING_GROUND:           cancel = act_burning_ground(m);           break
        case Mario.ACT_DECELERATING:             cancel = act_decelerating(m);             break
        case Mario.ACT_HOLD_DECELERATING:        cancel = act_hold_decelerating(m);        break
        case Mario.ACT_BUTT_SLIDE:               cancel = act_butt_slide(m);               break
        case Mario.ACT_KARTING:                  cancel = act_karting(m);                  break
        case Mario.ACT_STOMACH_SLIDE:            cancel = act_stomach_slide(m);            break
        case Mario.ACT_HOLD_BUTT_SLIDE:          cancel = act_hold_butt_slide(m);          break
        case Mario.ACT_HOLD_STOMACH_SLIDE:       cancel = act_hold_stomach_slide(m);       break
        case Mario.ACT_DIVE_SLIDE:               cancel = act_dive_slide(m);               break
        case Mario.ACT_MOVE_PUNCHING:            cancel = act_move_punching(m);            break
        case Mario.ACT_CROUCH_SLIDE:             cancel = act_crouch_slide(m);             break
        case Mario.ACT_SLIDE_KICK_SLIDE:         cancel = act_slide_kick_slide(m);         break
        case Mario.ACT_HARD_BACKWARD_GROUND_KB:  cancel = act_hard_backward_ground_kb(m);  break
        case Mario.ACT_HARD_FORWARD_GROUND_KB:   cancel = act_hard_forward_ground_kb(m);   break
        case Mario.ACT_BACKWARD_GROUND_KB:       cancel = act_backward_ground_kb(m);       break
        case Mario.ACT_FORWARD_GROUND_KB:        cancel = act_forward_ground_kb(m);        break
        case Mario.ACT_SOFT_BACKWARD_GROUND_KB:  cancel = act_soft_backward_ground_kb(m);  break
        case Mario.ACT_SOFT_FORWARD_GROUND_KB:   cancel = act_soft_forward_ground_kb(m);   break
        case Mario.ACT_GROUND_BONK:              cancel = act_ground_bonk(m);              break
        case Mario.ACT_DEATH_EXIT_LAND:          cancel = act_death_exit_land(m);          break
        case Mario.ACT_JUMP_LAND:                cancel = act_jump_land(m);                break
        case Mario.ACT_FREEFALL_LAND:            cancel = act_freefall_land(m);            break
        case Mario.ACT_DOUBLE_JUMP_LAND:         cancel = act_double_jump_land(m);         break
        case Mario.ACT_SIDE_FLIP_LAND:           cancel = act_side_flip_land(m);           break
        case Mario.ACT_HOLD_JUMP_LAND:           cancel = act_hold_jump_land(m);           break
        case Mario.ACT_HOLD_FREEFALL_LAND:       cancel = act_hold_freefall_land(m);       break
        case Mario.ACT_TRIPLE_JUMP_LAND:         cancel = act_triple_jump_land(m);         break
        case Mario.ACT_BACKFLIP_LAND:            cancel = act_backflip_land(m);            break
        case Mario.ACT_QUICKSAND_JUMP_LAND:      cancel = act_quicksand_jump_land(m);      break
        case Mario.ACT_HOLD_QUICKSAND_JUMP_LAND: cancel = act_hold_quicksand_jump_land(m); break
        case Mario.ACT_LONG_JUMP_LAND:           cancel = act_long_jump_land(m);           break
        case Mario.ACT_POUND_ROLL:               cancel = act_pound_roll(m);               break
    }

    if (!cancel && (m.input & Mario.INPUT_IN_WATER)) {
        m.particleFlags |= MarioConstants.PARTICLE_WAVE_TRAIL
        m.particleFlags &= ~MarioConstants.PARTICLE_DUST
    }

    return cancel
}
