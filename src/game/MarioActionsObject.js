import * as Mario from "./Mario"
import { perform_ground_step, stationary_ground_step } from "./MarioStep"

const sPunchingForwardVelocities = [0, 1, 1, 2, 3, 5, 7, 10]

export const mario_update_punch_sequence = (m) => {
    let endAction, crouchEndAction

    if (m.action & Mario.ACT_FLAG_MOVING) {
        endAction = Mario.ACT_WALKING
        crouchEndAction = Mario.ACT_CROUCH_SLIDE
    } else {
        endAction = Mario.ACT_IDLE
        crouchEndAction = Mario.ACT_CROUCHING
    }

    let animFrame

    switch (m.actionArg) {
        case 0: /// play sound - no break
        case 1:
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_FIRST_PUNCH)
            if (Mario.is_anim_past_end(m)) {
                m.actionArg = 2
            } else {
                m.actionArg = 1
            }

            m.flags |= Mario.MARIO_PUNCHING

            if (m.marioObj.header.gfx.unk38.animFrame >= 2) {
                //if (mario_check_object_grab(m)) {
                //    return 1
                //}
            }

            if (m.actionArg == 2) {
                m.marioBodyState.punchState = (0 << 6) | 4
            }
            break
        case 2:
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_FIRST_PUNCH_FAST)
            //if (m.marioObj.header.gfx.unk38.animFrame <= 0) {
                m.flags |= Mario.MARIO_PUNCHING
            //}

            if (m.input & Mario.INPUT_B_PRESSED) {
                m.actionArg = 3
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, endAction, 0)
            }
            break

        case 3: ///play sound - no break
        case 4:
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_SECOND_PUNCH)
            if (Mario.is_anim_past_end(m)) {
                m.actionArg = 5
            } else { m.actionArg = 4 }

            if (m.marioObj.header.gfx.unk38.animFrame > 0) {
                m.flags |= Mario.MARIO_PUNCHING
            }

            if (m.actionArg == 5) {
                m.marioBodyState.punchState = (1 << 6) | 4
            }
            break

        case 5:
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_SECOND_PUNCH_FAST)
            if (m.marioObj.header.gfx.unk38.animFrame <= 0) {
                m.flags |= Mario.MARIO_PUNCHING
            }

            if (m.input & Mario.INPUT_B_PRESSED) {
                m.actionArg = 6
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, endAction, 0)
            }
            break

        case 6:
            //play_mario_action_sound(m, SOUND_MARIO_PUNCH_HOO, 1)
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_GROUND_KICK)
            if (animFrame == 0) {
                m.marioBodyState.punchState = (2 << 6) | 6
            }

            if (animFrame >= 0 && animFrame < 8) {
                m.flags |= Mario.MARIO_KICKING
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, endAction, 0)
            }
            break

        case 9:
            animFrame = Mario.set_mario_animation(m, Mario.MARIO_ANIM_BREAKDANCE)
            animFrame = m.marioObj.header.gfx.unk38.animFrame

            if (animFrame >= 2 && animFrame < 8) {
                m.flags |= Mario.MARIO_TRIPPING
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, crouchEndAction, 0)
            }
            break

        default: throw "unimplemented mario punch sequence case - breakdance?"
    }

    return 0
}

const act_punching = (m) => {

    if (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m)
    }

    if (m.actionState == 0 && (m.input & Mario.INPUT_A_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_JUMP_KICK, 0)
    }

    m.actionState = 1
    if (m.actionArg == 0) { m.actionTimer = 7 }

    Mario.set_forward_vel(m, sPunchingForwardVelocities[m.actionTimer])
    if (m.actionTimer > 0) { m.actionTimer-- }

    mario_update_punch_sequence(m)
    perform_ground_step(m)
    return 0

}

const animated_stationary_ground_step = (m, animation, endAction) => {
    stationary_ground_step(m)
    Mario.set_mario_animation(m, animation)
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, endAction, 0)
    }
}

const act_stomach_slide_stop = (m) => {
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_SLOW_LAND_FROM_DIVE, Mario.ACT_IDLE)
    return 0
}

export const mario_execute_object_action = (m) => {

    switch (m.action) {
        case Mario.ACT_PUNCHING: return act_punching(m)
        case Mario.ACT_STOMACH_SLIDE_STOP: return act_stomach_slide_stop(m)
        default: throw "unknown action object"
    }
}