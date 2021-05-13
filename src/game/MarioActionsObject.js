import * as Mario from "./Mario"
import { perform_ground_step, stationary_ground_step } from "./MarioStep"
import * as Particles from "../include/mario_constants"
import * as Interaction from "./Interaction"

import { play_sound } from "../audio/external"
import * as Sound from "../include/sounds"

const sPunchingForwardVelocities = [0, 1, 1, 2, 3, 5, 7, 10]

const animated_stationary_ground_step = (m, animation, endAction) => {
    stationary_ground_step(m)
    Mario.set_mario_animation(m, animation)
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, endAction, 0)
    }
}

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
        case 0:
            play_sound(Sound.SOUND_MARIO_PUNCH_YAH, m.marioObj.header.gfx.cameraToObject)
            // Fall-through:
        case 1:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_FIRST_PUNCH)
            if (Mario.is_anim_past_end(m)) {
                m.actionArg = 2
            } else {
                m.actionArg = 1
            }

            if (m.marioObj.header.gfx.unk38.animFrame >= 2) {
                if (Interaction.mario_check_object_grab(m)) {
                   return 1
                }

                m.flags |= Mario.MARIO_PUNCHING
            }

            if (m.actionArg == 2) {
                m.marioBodyState.punchState = (0 << 6) | 4
            }
            break
        case 2:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_FIRST_PUNCH_FAST)

            if (m.marioObj.header.gfx.unk38.animFrame <= 0) {
                m.flags |= Mario.MARIO_PUNCHING
            }

            if (m.input & Mario.INPUT_B_PRESSED) {
                m.actionArg = 3
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, endAction, 0)
            }
            break

        case 3:
            play_sound(Sound.SOUND_MARIO_PUNCH_WAH, m.marioObj.header.gfx.cameraToObject)
            // Fall-through:
        case 4:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_SECOND_PUNCH)
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
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_SECOND_PUNCH_FAST)
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
            play_mario_action_sound(m, Sound.SOUND_MARIO_PUNCH_HOO, 1)
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
            play_mario_action_sound(m, Sound.SOUND_MARIO_PUNCH_HOO, 1)
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_BREAKDANCE)
            animFrame = m.marioObj.header.gfx.unk38.animFrame

            if (animFrame >= 2 && animFrame < 8) {
                m.flags |= Mario.MARIO_TRIPPING
            }

            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, crouchEndAction, 0)
            }
            break
    }

    return 0
}

const act_punching = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

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

const act_picking_up = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.actionState == 0 && Mario.is_anim_at_end(m)) {
        //! While the animation is playing, it is possible for the used object
        // to unload. This allows you to pick up a vacant or newly loaded object
        // slot (cloning via fake object).
        mario_grab_used_object(m)
        play_sound_if_no_flag(m, Sound.SOUND_MARIO_HRMM, Mario.MARIO_MARIO_SOUND_PLAYED)
        m.actionState = 1
    }

    if (m.actionState == 1) {
        if (m.heldObj.rawData[oInteractionSubtype] & Interaction.INT_SUBTYPE_GRABS_MARIO) {
            m.marioBodyState.grabPos = GRAB_POS_HEAVY_OBJ
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GRAB_HEAVY_OBJECT)
            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, Mario.ACT_HOLD_HEAVY_IDLE, 0)
            }
        } else {
            m.marioBodyState.grabPos = GRAB_POS_LIGHT_OBJ
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_PICK_UP_LIGHT_OBJ)
            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, Mario.ACT_HOLD_IDLE, 0)
            }
        }
    }

    stationary_ground_step(m)
    return 0
}

const act_dive_picking_up = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

    //! Hands-free holding. Landing on a slope or being pushed off a ledge while
    // landing from a dive grab sets Mario's action to a non-holding action
    // without dropping the object, causing the hands-free holding glitch.
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_STOP_SLIDE_LIGHT_OBJ, Mario.ACT_HOLD_IDLE)
    return 0
}

const act_placing_down = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (++m.actionTimer == 8) {
        mario_drop_held_object(m)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_PLACE_LIGHT_OBJ, Mario.ACT_IDLE)
    return 0
}

const act_throwing = (m) => {
    if (m.heldObj && (m.heldObj.rawData[oInteractionSubtype] & Interaction.INT_SUBTYPE_HOLDABLE_NPC)) {
        return Mario.set_mario_action(m, Mario.ACT_PLACING_DOWN, 0)
    }

    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (++m.actionTimer == 7) {
        mario_throw_held_object(m)
        play_sound_if_no_flag(m, Sound.SOUND_MARIO_WAH2, Mario.MARIO_MARIO_SOUND_PLAYED)
        play_sound_if_no_flag(m, Sound.SOUND_ACTION_THROW, Mario.MARIO_ACTION_SOUND_PLAYED)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_GROUND_THROW, Mario.ACT_IDLE)
    return 0
}

const act_heavy_throw = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (++m.actionTimer == 13) {
        mario_drop_held_object(m)
        play_sound_if_no_flag(m, Sound.SOUND_MARIO_WAH2, Mario.MARIO_MARIO_SOUND_PLAYED)
        play_sound_if_no_flag(m, Sound.SOUND_ACTION_THROW, Mario.MARIO_ACTION_SOUND_PLAYED)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_HEAVY_THROW, Mario.ACT_IDLE)
    return 0
}

const act_stomach_slide_stop = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return Mario.set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0);
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    animated_stationary_ground_step(m, Mario.MARIO_ANIM_SLOW_LAND_FROM_DIVE, Mario.ACT_IDLE)
    return 0
}

const act_picking_up_bowser = (m) => {
    if (m.actionState == 0) {
        m.actionState = 1
        m.angleVel[1] = 0
        m.marioBodyState.grabPos = GRAB_POS_BOWSER
        mario_grab_used_object(m)
        play_sound(Sound.SOUND_MARIO_HRMM, m.marioObj.header.gfx.cameraToObject)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_GRAB_BOWSER)
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_HOLDING_BOWSER, 0)
    }

    stationary_ground_step(m)
    return 0
}

const act_holding_bowser = (m) => {
    let /*s16*/ spin

    if (m.input & Mario.INPUT_B_PRESSED) {
        if (m.angleVel[1] <= -0xE00 || m.angleVel[1] >= 0xE00) {
            play_sound(Sound.SOUND_MARIO_SO_LONGA_BOWSER, m.marioObj.header.gfx.cameraToObject)
        } else {
            play_sound(Sound.SOUND_MARIO_HERE_WE_GO, m.marioObj.header.gfx.cameraToObject)
        }
        return Mario.set_mario_action(m, Mario.ACT_RELEASING_BOWSER, 0)
    }

    if (m.angleVel[1] == 0) {
        if (m.actionTimer++ > 120) {
            return Mario.set_mario_action(m, Mario.ACT_RELEASING_BOWSER, 1)
        }

        Mario.set_mario_animation(m, Mario.MARIO_ANIM_HOLDING_BOWSER)
    } else {
        m.actionTimer = 0
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_SWINGING_BOWSER)
    }

    if (m.intendedMag > 20.0) {
        if (m.actionArg == 0) {
            m.actionArg = 1
            m.twirlYaw = m.intendedYaw
        } else {
              // spin = acceleration
            spin = s16(m.intendedYaw - m.twirlYaw) / 0x80

            if (spin < -0x80) {
                spin = -0x80
            }
            if (spin > 0x80) {
                spin = 0x80
            }

            m.twirlYaw = m.intendedYaw
            m.angleVel[1] = s16(m.angleVel[1] + spin)

            if (m.angleVel[1] > 0x1000) {
                m.angleVel[1] = 0x1000
            }
            if (m.angleVel[1] < -0x1000) {
                m.angleVel[1] = -0x1000
            }
        }
    } else {
        m.actionArg = 0
        m.angleVel[1] = approach_s32(m.angleVel[1], 0, 64, 64)
    }

      // spin = starting yaw
    spin = m.faceAngle[1]
    m.faceAngle[1] = s16(m.faceAngle[1] + m.angleVel[1])

      // play sound on overflow
    if (m.angleVel[1] <= -0x100 && spin < m.faceAngle[1]) {
        play_sound(Sound.SOUND_OBJ_BOWSER_SPINNING, m.marioObj.header.gfx.cameraToObject)
    }
    if (m.angleVel[1] >= 0x100 && spin > m.faceAngle[1]) {
        play_sound(Sound.SOUND_OBJ_BOWSER_SPINNING, m.marioObj.header.gfx.cameraToObject)
    }

    stationary_ground_step(m)
    if (m.angleVel[1] >= 0) {
        m.marioObj.header.gfx.angle[0] = -m.angleVel[1]
    } else {
        m.marioObj.header.gfx.angle[0] = m.angleVel[1]
    }

    return 0
}

const act_releasing_bowser = (m) => {
    if (++m.actionTimer == 1) {
        if (m.actionArg == 0) {
            mario_throw_held_object(m)
        } else {
            mario_drop_held_object(m)
        }
    }

    m.angleVel[1] = 0
    animated_stationary_ground_step(m, Mario.MARIO_ANIM_RELEASE_BOWSER, Mario.ACT_IDLE)
    return 0
}

const check_common_object_cancels = (m) => {
    let /*f32*/ waterSurface = m.waterLevel - 100
    if (m.pos[1] < waterSurface) {
        return set_water_plunge_action(m)
    }

    if (m.input & Mario.INPUT_SQUISHED) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SQUISHED, 0)
    }

    if (m.health < 0x100) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_STANDING_DEATH, 0)
    }

    return 0
}

export const mario_execute_object_action = (m) => {
    let /*s32*/ cancel

    if (check_common_object_cancels(m)) {
        return 1
    }

    // if (mario_update_quicksand(m, 0.5)) {
    //     return 1
    // }

    switch (m.action) {
        case Mario.ACT_PUNCHING:           cancel = act_punching(m);           break
        case Mario.ACT_PICKING_UP:         cancel = act_picking_up(m);         break
        case Mario.ACT_DIVE_PICKING_UP:    cancel = act_dive_picking_up(m);    break
        case Mario.ACT_STOMACH_SLIDE_STOP: cancel = act_stomach_slide_stop(m); break
        case Mario.ACT_PLACING_DOWN:       cancel = act_placing_down(m);       break
        case Mario.ACT_THROWING:           cancel = act_throwing(m);           break
        case Mario.ACT_HEAVY_THROW:        cancel = act_heavy_throw(m);        break
        case Mario.ACT_PICKING_UP_BOWSER:  cancel = act_picking_up_bowser(m);  break
        case Mario.ACT_HOLDING_BOWSER:     cancel = act_holding_bowser(m);     break
        case Mario.ACT_RELEASING_BOWSER:   cancel = act_releasing_bowser(m);   break
    }

    if (!cancel && (m.input & Mario.INPUT_IN_WATER)) {
        m.particleFlags |= Particles.PARTICLE_IDLE_WATER_WAVE
    }

    return cancel
}
