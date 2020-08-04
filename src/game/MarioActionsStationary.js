import * as Mario from "./Mario"
import { stationary_ground_step } from "./MarioStep"
import { StartGroup } from "../goddard/dynlists/dynlist_macros"

const check_common_idle_cancels = (m) => {

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_JUMP, 0)
    }

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {

        m.faceAngle[1] = m.intendedYaw

        return Mario.set_mario_action(m, Mario.ACT_WALKING, 0)
    }

    return 0
}

const act_idle = (m) => {

    if (check_common_idle_cancels(m)) {
        return 1
    }

    if (m.actionArg & 1) {
        throw "action arg mario stand against wall"
    } else {
        switch (m.actionState) {
            case 0: Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_HEAD_LEFT); break
            case 1: Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_HEAD_RIGHT); break
            case 2: Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_HEAD_CENTER); break
        }

        if (Mario.is_anim_at_end(m)) {
            if (++m.actionState == 3) {
                m.actionState = 0
            }
        }
    }

    stationary_ground_step(m)

    return 0
}

const stopping_step = (m, animId, action) => {
    stationary_ground_step(m)
    Mario.set_mario_animation(m, animId)
    if (Mario.is_anim_at_end(m)) Mario.set_mario_action(m, action, 0)
}

const act_braking_stop = (m) => {

    stopping_step(m, Mario.MARIO_ANIM_STOP_SKID, Mario.ACT_IDLE)
    return 0
}


const landing_step = (m, arg1, action) => {
    stationary_ground_step(m)
    Mario.set_mario_animation(m, arg1)
    if (Mario.is_anim_at_end(m)) return Mario.set_mario_action(m, action, 0)
    return 0
}

const check_common_landing_cancels = (m, action) => {

    if (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m)
    }

    return 0
}

const act_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_LAND_FROM_SINGLE_JUMP, Mario.ACT_IDLE)
    return 0
}

const act_freefall_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_GENERAL_LAND, Mario.ACT_IDLE)
    return 0
}

export const mario_execute_stationary_action = (m) => {

    switch (m.action) {
        case Mario.ACT_IDLE: return act_idle(m)
        case Mario.ACT_BRAKING_STOP: return act_braking_stop(m)
        case Mario.ACT_JUMP_LAND_STOP: return act_jump_land_stop(m)
        case Mario.ACT_FREEFALL_LAND_STOP: return act_freefall_land_stop(m)
        default: throw "unkown action stationary"
    }
}