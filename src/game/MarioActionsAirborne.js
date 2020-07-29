import * as Mario from "./Mario"
import { perform_air_step } from "./MarioStep"


export const common_air_action_step = (m, landAction, animation, stepArg) => {
    ///TODO add this, this moves mario slightly while in air by joystick
    //update_air_without_turn(m)

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