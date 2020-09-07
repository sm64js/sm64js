import * as Mario from "./Mario"
import { stop_and_set_height_to_floor } from "./MarioStep"

const stuck_in_ground_handler = (m, animation, unstuckFrame, target2, target3, endAction) => {

    let animFrame = Mario.set_mario_animation(m, animation)

    if (m.input & Mario.INPUT_A_PRESSED) {
        m.actionTimer++
        if (m.actionTimer >= 5 && animFrame < unstuckFrame - 1) {
            animFrame = unstuckFrame - 1
            Mario.set_anim_to_frame(m, animFrame)
        }
    }

    stop_and_set_height_to_floor(m)

    if (animFrame == -1) {
        ///play sound and particles
    } else if (animFrame == unstuckFrame) {
        //rumble data
        ///play sound and particles
    } else if (animFrame == target2 || animFrame == target3) {
        ///play landing sound
    }

    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, endAction, 0)
    }

}

const act_butt_stuck_in_ground = (m) => {
    stuck_in_ground_handler(m, Mario.MARIO_ANIM_BOTTOM_STUCK_IN_GROUND, 127, 136, -2, Mario.ACT_GROUND_POUND_LAND)
    return 0
}

export const mario_execute_cutscene_action = (m) => {

    switch (m.action) {
        case Mario.ACT_BUTT_STUCK_IN_GROUND: return act_butt_stuck_in_ground(m)
        default: throw "unknown action cutscene"
    }
}