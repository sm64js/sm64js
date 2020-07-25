import { MarioInstance as Mario } from "./Mario"
import { stationary_ground_step } from "./MarioStep"

const check_common_idle_cancels = (m) => {

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

export const mario_execute_stationary_action = (m) => {

    switch (m.action) {
        case Mario.ACT_IDLE: return act_idle(m)
        case Mario.ACT_BRAKING_STOP: return act_braking_stop(m)
        default: throw "unkown action stationary--"
    }
}