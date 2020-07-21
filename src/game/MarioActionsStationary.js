import { MarioInstance as Mario } from "./Mario";

const act_idle = (m) => {

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

    // stationary_ground_step(m) seems like probably not needed until want to make him walk

    return 0
}

export const mario_execute_stationary_action = (m) => {

    switch (m.action) {
        case Mario.ACT_IDLE: return act_idle(m)
    }
}