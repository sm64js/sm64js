import * as Mario from "./Mario"
import { perform_air_step } from "./MarioStep"
import { approach_number } from "../engine/math_util"

const update_air_without_turn = (m) => {
    let sidewaysSpeed = 0.0

    let dragThreshold = m.action == Mario.ACT_LONG_JUMP ? 48.0: 32.0
    m.forwardVel = approach_number(m.forwardVel, 0.0, 0.35, 0.35)

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {
        let intendedDYaw = m.intendedYaw - m.faceAngle[1]
        let intendedMag = m.intendedMag / 32.0

        m.forwardVel += intendedMag * Math.cos(intendedDYaw / 0x8000 * Math.PI) * 1.5
        sidewaysSpeed = intendedMag * Math.sin(intendedDYaw  / 0x8000 * Math.PI) * 10.0
    }

    //! Uncapped air speed. Net positive when moving forward.
    if (m.forwardVel > dragThreshold) {
        m.forwardVel -= 1.0
    }
    if (m.forwardVel < -16.0) {
        m.forwardVel += 2.0
    }

    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.slideVelX += sidewaysSpeed * Math.sin((m.faceAngle[1] + 0x4000) / 0x8000 * Math.PI)
    m.slideVelZ += sidewaysSpeed * Math.cos((m.faceAngle[1] + 0x4000)  / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[2] = m.slideVelZ

}

export const common_air_action_step = (m, landAction, animation, stepArg) => {
    ///TODO add this, this moves mario slightly while in air by joystick
    update_air_without_turn(m)

    const stepResult = perform_air_step(m, stepArg)

    switch (stepResult) {
        case Mario.AIR_STEP_NONE:
            Mario.set_mario_animation(m, animation); break
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, landAction, 0); break
        default: throw "unkown air step result in common_air_action_step"
    }

    return stepResult
}

export const act_jump = (m) => {
    common_air_action_step(m, Mario.ACT_JUMP_LAND, Mario.MARIO_ANIM_SINGLE_JUMP,
        Mario.AIR_STEP_CHECK_LEDGE_GRAB | Mario.AIR_STEP_CHECK_HANG)

    return 0
}

export const mario_execute_airborne_action = (m) => {

    switch (m.action) {
        case Mario.ACT_JUMP: return act_jump(m)
        default: throw "unkown action airborne"
    }
}