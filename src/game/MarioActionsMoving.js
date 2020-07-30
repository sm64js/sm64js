import * as Mario from "./Mario"
import { SURFACE_SLOW } from "../include/surface_terrains"
import { perform_ground_step } from "./MarioStep"
import { approach_number } from "../engine/math_util"


const apply_slope_accel = (m) => {
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

    m.faceAngle[1] = m.intendedYaw //cheat super responsive controls
    ///m.faceAngle[1] = approach_number(parseInt(m.intendedYaw - m.faceAngle[1]), 0, 0x800, 0x800)

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
                    throw "didn't finish this case in anim_and_audio_for_walk"
                }
                break

            case 1:
                if (val04 > 8.0) {
                    m.actionTimer = 2
                } else {
                    /// this should be tip toe and should not be in here
                    throw "didn't finish this case in anim_and_audio_for_walk"

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

        marioObj.oMarioWalkingPitch = targetPitch
        marioObj.header.gfx.angle[0] = marioObj.oMarioWalkingPitch
    }

}

const begin_braking_action = (m) => {
    if (m.forwardVel >= 16.0 && m.floor.normal.y >= 0.17364818) {
        return Mario.set_mario_action(m, Mario.ACT_BRAKING, 0)
    }

    return Mario.set_mario_action(m, Mario.ACT_DECELERATING, 0)
}

const analog_stick_held_back = (m) => {
    let intendedDYaw = m.intendedYaw - m.faceAngle[1]
    intendedDYaw = intendedDYaw > 32767 ? intendedDYaw - 65536 : intendedDYaw
    intendedDYaw = intendedDYaw < -32768 ? intendedDYaw + 65536 : intendedDYaw
    return intendedDYaw < -0x471C || intendedDYaw > 0x471C
}

const act_walking = (m) => {

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jump_from_landing(m)
    }

    if (m.input & Mario.INPUT_UNKNOWN_5) {
        return begin_braking_action(m)
    }

    if (analog_stick_held_back(m) && m.forwardVel >= 16.0) {
        return Mario.set_mario_action(m, Mario.ACT_TURNING_AROUND, 0)
    }


    m.actionState = 0

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_NONE:
            anim_and_audio_for_walk(m)
            if (m.intendedMag - m.forwardVel > 16.0) m.particleFlags |= Mario.PARTICLE_DUST
            break
        default: throw "unkown ground step in act_walking"
    }

    return 0
}

const act_braking = (m) => {

    if (!(m.input & Mario.INPUT_FIRST_PERSON) && (m.input &
        (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE))) {
        return Mario.check_common_action_exits(m)
    }

    if (apply_slope_decel(m, 2.0)) {
        return Mario.set_mario_action(m, Mario.ACT_BRAKING_STOP, 0)
    }

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_NONE:
            m.particleFlags |= Mario.PARTICLE_DUST
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
        if (m.input & Mario.INPUT_NONZERO_ANALOG) {
            return Mario.set_mario_action(m, Mario.ACT_WALKING, 0)
        }
    }

    if (update_decelerating_speed(m)) {
        return Mario.set_mario_action(m, Mario.ACT_IDLE, 0);
    }

    switch (perform_ground_step(m)) {
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

    update_walking_speed(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_TURNING_PART2)

    if (perform_ground_step(m) == Mario.GROUND_STEP_LEFT_GROUND) {}

    if (Mario.is_anim_at_end(m)) 
        Mario.set_mario_action(m, Mario.ACT_WALKING, 0)

    m.marioObj.header.gfx.angle[1] += 0x8000
    return 0
}

const common_landing_cancels = (m, landingAction, setAPressAction) => {
    if (++m.actionTimer >= landingAction.numFrames) {
        return Mario.set_mario_action(m, landingAction.endAction, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) return true

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
            throw "not implemented step result - hit wall  - common_landing_action"
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

export const mario_execute_moving_action = (m) => {

    switch (m.action) {
        case Mario.ACT_WALKING: return act_walking(m)
        case Mario.ACT_DECELERATING: return act_decelerating(m)
        case Mario.ACT_BRAKING: return act_braking(m)
        case Mario.ACT_TURNING_AROUND: return act_turning_around(m)
        case Mario.ACT_FINISH_TURNING_AROUND: return act_finish_turning_around(m)
        case Mario.ACT_JUMP_LAND: return act_jump_land(m)
        default: throw "unknown action moving"
    }
}