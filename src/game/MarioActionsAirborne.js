import * as Mario from "./Mario"

export const common_air_action_step = (m, landAction, animation, stepArg) => {
    throw "common air action step"
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