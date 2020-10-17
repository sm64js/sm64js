import * as Mario from "./Mario"
import { SURFACE_SLOW, SURFACE_CLASS_VERY_SLIPPERY, SURFACE_CLASS_SLIPPERY, SURFACE_CLASS_NOT_SLIPPERY, TERRAIN_MASK, TERRAIN_SLIDE } from "../include/surface_terrains"
import * as SurfaceTerrains from "../include/surface_terrains"
import { mario_bonk_reflection, perform_ground_step } from "./MarioStep"
import { approach_number, atan2s } from "../engine/math_util"
import { oMarioWalkingPitch } from "../include/object_constants"
import { mario_update_punch_sequence } from "./MarioActionsObject"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { int16 }  from '../utils';


const apply_slope_accel = (m) => {

    /////////////////////////// Cheat disabling walk/run acceleration for slopes
    let slopeAccel
    const floorDYaw = int16(m.floorAngle - m.faceAngle[1])

    const floor = m.floor;
    const steepness = Math.sqrt(floor.normal.x * floor.normal.x + floor.normal.z * floor.normal.z);

    if (Mario.mario_floor_is_slope(m)) {
        let slopeClass = 0;

        if (m.action != Mario.ACT_SOFT_BACKWARD_GROUND_KB && m.action != Mario.ACT_SOFT_FORWARD_GROUND_KB) {
            slopeClass = Mario.mario_get_floor_class(m);
        }

        switch (slopeClass) {
            case SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY:
                slopeAccel = 5.3;
                break;
            case SurfaceTerrains.SURFACE_CLASS_SLIPPERY:
                slopeAccel = 2.7;
                break;
            default:
                slopeAccel = 1.7;
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

const apply_slope_decel = (m, decelCoef) => {
    let stopped = 0
    let decel
    switch (Mario.mario_get_floor_class(m)) {
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
    } else if (m.floor.normal.y >= 0.95) {
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

    while (val0C) {
        switch (m.actionTimer) {
          case 0:
                if (val04 > 8.0) {
                    m.actionTimer = 2
                } else {
                    let val14 = parseInt(val04 / 4.0 * 0x10000)
                    if (val14 < 0x1000) {
                        val14 = 0x1000
                    }
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_START_TIPTOE, val14)
                    //play step sound
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
                    //play step sound

                    val0C = 0

                }
                break

            case 2:
                if (val04 < 5.0) {
                    m.actionTimer = 1
                } else if (val04 > 22.0) {
                    m.actionTimer = 3
                } else {
                    val14 = val04 / 4.0 * 0x10000
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, parseInt(val14))
                    val0C = 0
                }   
                break

            case 3:
                if (val04 < 18.0) {
                    m.actionTimer = 2
                } else {
                    val14 = val04 / 4.0 * 0x10000
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_RUNNING, parseInt(val14))
                    val0C = 0
                }
                break
            default: throw "default case mario anim and audio for walk"

        }

        marioObj.rawData[oMarioWalkingPitch] = targetPitch
        marioObj.header.gfx.angle[0] = marioObj.rawData[oMarioWalkingPitch]
    }

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
            offsetY: -10.0
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
    let intendedDYaw = int16(m.intendedYaw - m.faceAngle[1]);
    return intendedDYaw < -0x471C || intendedDYaw > 0x471C
}

const act_walking = (m) => {
    let startPos;
    const startYaw = m.faceAngle[1]

    if (should_begin_sliding(m)) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
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
            if (m.intendedMag - m.forwardVel > 16.0) m.particleFlags |= Mario.PARTICLE_DUST
            break
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GENERAL_FALL)
            break
        case Mario.GROUND_STEP_HIT_WALL:
            push_or_sidle_wall(m, startPos);
            m.actionTimer = 0;
            break
        default: throw "unkown ground step in act_walking"
    }

    check_ledge_climb_down(m)
    tilt_body_walking(m, startYaw)
    return 0
}

const slide_bonk = (m, fastAction, slowAction) => {
    if (m.forwardVel > 16.0) {
        mario_bonk_reflection(m, true);
        Mario.drop_and_set_mario_action(m, fastAction, 0);
    } else {
        Mario.set_forward_vel(m, 0.0);
        Mario.set_mario_action(m, slowAction, 0);
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
            m.particleFlags |= Mario.PARTICLE_DUST
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
            Mario.set_forward_vel(m, 0)
            break
        // nothing here yet
    }

    let val0C = m.forwardVel / 4.0 * 0x10000
    if (val0C < 0x1000) val0C = 0x1000

    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, val0C)

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
            m.particleFlags |= Mario.PARTICLE_DUST
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

const common_landing_cancels = (m, landingAction, setAPressAction) => {

    m.doubleJumpTimer = landingAction.unk02

    if (should_begin_sliding(m)) {
        return Mario.set_mario_action(m, landingAction.slideAction, 0);
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

const common_landing_action = (m, animation, airAction) => {

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {
        apply_landing_accel(m, 0.98)
    } else if (m.forwardVel >= 16.0) {
        apply_slope_decel(m, 2.0)
    } else {
        m.vel[1] = 0.0
    }

    const stepResult = perform_ground_step(m)
    switch (stepResult) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, airAction, 0); break
        case Mario.GROUND_STEP_HIT_WALL:
            break
    }

    if (m.forwardVel > 16.0) m.particleFlags |= Mario.PARTICLE_DUST

    Mario.set_mario_animation(m, animation)

    return stepResult

}

const act_jump_land = (m) => {
    if (common_landing_cancels(m, Mario.sJumpLandAction, Mario.set_jumping_action)) return 1

    common_landing_action(m, Mario.MARIO_ANIM_LAND_FROM_SINGLE_JUMP, Mario.ACT_FREEFALL)
    return 0
}

const act_freefall_land = (m) => {
    if (common_landing_cancels(m, Mario.sFreefallLandAction, Mario.set_jumping_action)) return 1

    common_landing_action(m, Mario.MARIO_ANIM_GENERAL_LAND, Mario.ACT_FREEFALL)
    return 0
}

const act_side_flip_land = (m) => {
    if (common_landing_cancels(m, Mario.sSideFlipLandAction, Mario.set_jumping_action)) return 1

    if (common_landing_action(m, Mario.MARIO_ANIM_SLIDEFLIP_LAND, Mario.ACT_FREEFALL) != Mario.GROUND_STEP_HIT_WALL) {
        m.marioObj.header.gfx.angle[1] += 0x8000
    }

    return 0
}

const act_double_jump_land = (m) => {
    if (common_landing_cancels(m, Mario.sDoubleJumpLandAction, set_triple_jump_action)) return 1

    common_landing_action(m, Mario.MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, Mario.ACT_FREEFALL)
    return 0
}

const act_triple_jump_land = (m) => {
    m.input &= ~Mario.INPUT_A_PRESSED

    if (common_landing_cancels(m, Mario.sTripleJumpLandAction, Mario.set_jumping_action)) return 1

    common_landing_action(m, Mario.MARIO_ANIM_TRIPLE_JUMP_LAND, Mario.ACT_FREEFALL)
    return 0
}

const set_triple_jump_action = (m) => {
    if (m.forwardVel > 20.0) return Mario.set_mario_action(m, Mario.ACT_TRIPLE_JUMP, 0)
    else return Mario.set_mario_action(m, Mario.ACT_JUMP, 0)
}

const act_backflip_land = (m) => {
    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        m.input &= ~Mario.INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, Mario.sBackflipLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (!(m.input & Mario.INPUT_NONZERO_ANALOG)) {
        //play_sound_if_no_flag(m, SOUND_MARIO_HAHA, MARIO_MARIO_SOUND_PLAYED)
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

    let facingDYaw = int16(m.faceAngle[1] - m.slideYaw);
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

const common_slide_action = (m, stopAction, airAction, animation) => {
    const val14 = [ ...m.pos ]

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_LEFT_GROUND:
            Mario.set_mario_action(m, airAction, 0)
            if (m.forwardVel < -50.0 || 50.0 < m.forwardVel) {
                //play_sound(SOUND_MARIO_HOOHOO, m->marioObj->header.gfx.cameraToObject)
            }
            break
        case Mario.GROUND_STEP_NONE:
            Mario.set_mario_animation(m, animation)
            align_with_floor(m)
            m.particleFlags |= Mario.PARTICLE_DUST
            break
        case Mario.GROUND_STEP_HIT_WALL:
            align_with_floor(m)
            break
        default: throw "common slide action default case"
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
    let intendedDYaw = m.intendedYaw - m.faceAngle[1];
    if (intendedDYaw > 32767) intendedDYaw -= 65536;
    if (intendedDYaw < -32768) intendedDYaw += 65536;
    m.marioBodyState.torsoAngle[0] = 5461.3335 * m.intendedMag / 32.0 * Math.cos(intendedDYaw / 0x8000 * Math.PI);
    m.marioBodyState.torsoAngle[2] = -(5461.3335 * m.intendedMag / 32.0 * Math.sin(intendedDYaw / 0x8000 * Math.PI));
}

const stomach_slide_action = (m, stopAction, airAction, animation) => {
    if (m.actionTimer == 5) {
        if (!(m.input & Mario.INPUT_ABOVE_SLIDE) && (m.input & (Mario.INPUT_A_PRESSED | Mario.INPUT_B_PRESSED))) {
            // queue_rumble_data(5, 80);
            return Mario.drop_and_set_mario_action(
                m, m.forwardVel >= 0.0 ? Mario.ACT_FORWARD_ROLLOUT : Mario.ACT_BACKWARD_ROLLOUT, 0);
        }
    } else {
        m.actionTimer++;
    }

    if (update_sliding(m, 4.0)) {
        return Mario.set_mario_action(m, stopAction, 0);
    }

    common_slide_action(m, stopAction, airAction, animation);
    return false;
}

const push_or_sidle_wall = (m, startPos) => {
    let wallAngle;
    let dWallAngle;
    let dx = m.pos[0] - startPos[0];
    let dz = m.pos[2] - startPos[2];
    let movedDistance = Math.sqrt(dx * dx + dz * dz);
    //! (Speed Crash) If a wall is after moving 16384 distance, this crashes.
    let val04 = (movedDistance * 2.0 * 0x10000);

    if (m.forwardVel > 6.0) {
        Mario.set_forward_vel(m, 6.0);
    }

    if (m.wall != null) {
        wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x);
        dWallAngle = int16(wallAngle - m.faceAngle[1]);
    }

    if (m.wall == null || dWallAngle <= -0x71C8 || dWallAngle >= 0x71C8) {
        m.flags |= Mario.MARIO_UNKNOWN_31;
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_PUSHING);
        // play_step_sound(m, 6, 18);
    } else {
        if (dWallAngle < 0) {
            Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_SIDESTEP_RIGHT, val04);
        } else {
            Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_SIDESTEP_LEFT, val04);
        }

        if (m.marioObj.header.gfx.unk38.animFrame < 20) {
            // play_sound(SOUND_MOVING_TERRAIN_SLIDE + m.terrainSoundAddend, m.marioObj.header.gfx.cameraToObject);
            m.particleFlags |= Mario.PARTICLE_DUST;
        }

        m.actionState = 1;
        m.actionArg = int16(wallAngle + 0x8000)
        m.marioObj.header.gfx.angle[1] = int16(wallAngle + 0x8000);
        m.marioObj.header.gfx.angle[2] = Mario.find_floor_slope(m, 0x4000);
    }
}

const act_butt_slide = (m) => {
    const cancel = common_slide_action_with_jump(m, Mario.ACT_BUTT_SLIDE_STOP, Mario.ACT_JUMP, Mario.ACT_BUTT_SLIDE_AIR,
        Mario.MARIO_ANIM_SLIDE);
    tilt_body_butt_slide(m);
    return cancel;
}

const act_stomach_slide = (m) => {
    const cancel = stomach_slide_action(m, Mario.ACT_STOMACH_SLIDE_STOP, Mario.ACT_FREEFALL, Mario.MARIO_ANIM_SLIDE_DIVE);
    return cancel;
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

const act_long_jump_land = (m) => {
    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        m.input &= ~Mario.INPUT_A_PRESSED
    }

    if (common_landing_cancels(m, Mario.sLongJumpLandAction, Mario.set_jumping_action)) {
        return 1
    }

    if (!(m.input & Mario.INPUT_NONZERO_ANALOG)) {
        //play_sound_if_no_flag(m, SOUND_MARIO_UH2_2, MARIO_MARIO_SOUND_PLAYED);
    }

    common_landing_action(m,
                          !m.marioObj.oMarioLongJumpIsSlow ? Mario.MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP
                                                             : Mario.MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP,
                          Mario.ACT_FREEFALL)
    return 0
}

const act_dive_slide = (m) => {

    if (!(m.input & Mario.INPUT_ABOVE_SLIDE) && (m.input & (Mario.INPUT_A_PRESSED | Mario.INPUT_B_PRESSED))) {
        return Mario.set_mario_action(m, m.forwardVel > 0.0 ? Mario.ACT_FORWARD_ROLLOUT : Mario.ACT_BACKWARD_ROLLOUT, 0)
    }

    //play sound

    if (update_sliding(m, 8.0) && Mario.is_anim_at_end(m)) {
        Mario.set_forward_vel(m, 0.0)
        Mario.set_mario_action(m, Mario.ACT_STOMACH_SLIDE_STOP, 0)
    }

    common_slide_action(m, Mario.ACT_STOMACH_SLIDE_STOP, Mario.ACT_FREEFALL, Mario.MARIO_ANIM_DIVE)
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
        if (m.forwardVel >= 29.0 && m.controller.stickMag > 48.0) {
            m.vel[1] = 20.0
            return Mario.set_mario_action(m, Mario.ACT_DIVE, 1)
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
    //play step sound
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
            m.particleFlags |= Mario.PARTICLE_DUST
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

    //play sound
    m.particleFlags |= Mario.PARTICLE_DUST
    return 0
}

const common_ground_knockback_action = (m, animation, arg2, arg3, arg4) => {
/*    if (arg3) {
        play_mario_heavy_landing_sound_once(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND);
    }*/

/*    if (arg4 > 0) {
        play_sound_if_no_flag(m, SOUND_MARIO_ATTACKED, MARIO_MARIO_SOUND_PLAYED);
    } else {
        play_sound_if_no_flag(m, SOUND_MARIO_OOOF2, MARIO_MARIO_SOUND_PLAYED);
    }*/

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
            //set_mario_action(m, ACT_STANDING_DEATH, 0)
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
    return 0
}

export const act_hard_forward_ground_kb = (m) => {
    const val04 = common_ground_knockback_action(m, Mario.MARIO_ANIM_LAND_ON_STOMACH, 0x15, true, m.actionArg)
    return 0
}


export const mario_execute_moving_action = (m) => {

    switch (m.action) {
        case Mario.ACT_WALKING: return act_walking(m)
        case Mario.ACT_DECELERATING: return act_decelerating(m)
        case Mario.ACT_BRAKING: return act_braking(m)
        case Mario.ACT_TURNING_AROUND: return act_turning_around(m)
        case Mario.ACT_FINISH_TURNING_AROUND: return act_finish_turning_around(m)
        case Mario.ACT_JUMP_LAND: return act_jump_land(m)
        case Mario.ACT_FREEFALL_LAND: return act_freefall_land(m)
        case Mario.ACT_BUTT_SLIDE: return act_butt_slide(m)
        case Mario.ACT_STOMACH_SLIDE: return act_stomach_slide(m)
        case Mario.ACT_SIDE_FLIP_LAND: return act_side_flip_land(m)
        case Mario.ACT_DOUBLE_JUMP_LAND: return act_double_jump_land(m)
        case Mario.ACT_TRIPLE_JUMP_LAND: return act_triple_jump_land(m)
        case Mario.ACT_BACKFLIP_LAND: return act_backflip_land(m)
        case Mario.ACT_CROUCH_SLIDE: return act_crouch_slide(m)
        case Mario.ACT_LONG_JUMP_LAND: return act_long_jump_land(m)
        case Mario.ACT_DIVE_SLIDE: return act_dive_slide(m)
        case Mario.ACT_CRAWLING: return act_crawling(m)
        case Mario.ACT_MOVE_PUNCHING: return act_move_punching(m)
        case Mario.ACT_SLIDE_KICK_SLIDE: return act_slide_kick_slide(m)
        case Mario.ACT_BACKWARD_GROUND_KB: return act_backward_ground_kb(m)
        case Mario.ACT_FORWARD_GROUND_KB: return act_forward_ground_kb(m)
        case Mario.ACT_SOFT_FORWARD_GROUND_KB: return act_soft_forward_ground_kb(m)
        case Mario.ACT_SOFT_BACKWARD_GROUND_KB: return act_soft_backward_ground_kb(m)
        case Mario.ACT_HARD_BACKWARD_GROUND_KB: return act_hard_backward_ground_kb(m)
        case Mario.ACT_HARD_FORWARD_GROUND_KB: return act_hard_forward_ground_kb(m)
        default: throw "unknown action moving: " + m.action.toString(16)
    }
}
