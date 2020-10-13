import * as Mario from "./Mario"
import { perform_air_step, mario_bonk_reflection } from "./MarioStep"
import { approach_number, atan2s } from "../engine/math_util"
import { oMarioSteepJumpYaw } from "../include/object_constants"

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

const update_air_with_turn = (m) => {
    let dragThreshold, intendedDYaw, intendedMag;

    // if (!check_horizontal_wind(m)) {
        dragThreshold = m.action == Mario.ACT_LONG_JUMP ? 48.0 : 32.0;
        m.forwardVel = approach_number(m.forwardVel, 0.0, 0.35, 0.35);

        if (m.input & Mario.INPUT_NONZERO_ANALOG) {
            intendedDYaw = m.intendedYaw - m.faceAngle[1];
            if (intendedDYaw > 32767) intendedDYaw -= 65536
            if (intendedDYaw < -32768) intendedDYaw += 65536
            intendedMag = m.intendedMag / 32.0;

            m.forwardVel += 1.5 * Math.cos(intendedDYaw / 0x8000 * Math.PI) * intendedMag;
            m.faceAngle[1] += Math.floor(512.0 * Math.sin(intendedDYaw / 0x8000 * Math.PI) * intendedMag)
        }

        //! Uncapped air speed. Net positive when moving forward.
        if (m.forwardVel > dragThreshold) {
            m.forwardVel -= 1.0;
        }
        if (m.forwardVel < -16.0) {
            m.forwardVel += 2.0;
        }

        m.vel[0] = m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI);
        m.vel[2] = m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI);
    // }
}

const act_butt_slide_air = (m) => {
    if (++(m.actionTimer) > 30 && m.pos[1] - m.floorHeight > 500.0) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 1);
    }

    update_air_with_turn(m);

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_LANDED:
            if (m.actionState == 0 && m.vel[1] < 0.0 && m.floor.normal.y >= 0.9848077) {
                m.vel[1] = -m.vel[1] / 2.0;
                m.actionState = 1;
            } else {
                Mario.set_mario_action(m, Mario.ACT_BUTT_SLIDE, 0);
            }
            // play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING);
            break;

        case Mario.AIR_STEP_HIT_WALL:
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0;
            }
            m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR;
            Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, 0);
            break;

        // case AIR_STEP_HIT_LAVA_WALL:
        //     lava_boost_on_wall(m);
        //     break;
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SLIDE);
    return false;
}

const common_air_action_step = (m, landAction, animation, stepArg) => {

    ///TODO add this, this moves mario slightly while in air by joystick
    update_air_without_turn(m)

    const stepResult = perform_air_step(m, stepArg)

    switch (stepResult) {
        case Mario.AIR_STEP_NONE:
            Mario.set_mario_animation(m, animation); break
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, landAction, 0); break
        case Mario.AIR_STEP_HIT_WALL:
            Mario.set_mario_animation(m, animation)
            if (m.forwardVel > 16.0) {
                mario_bonk_reflection(m, false)
                m.faceAngle[1] += 0x8000

                if (m.wall) {
                    Mario.set_mario_action(m, Mario.ACT_AIR_HIT_WALL, 0)
                } else {
                    if (m.vel[1] > 0) m.vel[1] = 0

/*                    if (m.forwardVel >= 38.0) {
                        m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR
                        Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB)
                    } else {
                        if (m.forwardVel > 8.0) Mario.set_forward_vel(m, -8.0)
                        return Mario.set_mario_action(m, Mario.ACT_SOFT_BONK, 0)
                    }*/
                }
            } else {
                Mario.set_forward_vel(m, 0.0)
            }
            break
        case Mario.AIR_STEP_GRABBED_LEDGE:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_ON_LEDGE)
            Mario.drop_and_set_mario_action(m, Mario.ACT_LEDGE_GRAB, 0)
            break
        case Mario.AIR_STEP_GRABBED_CEILING:
            Mario.set_mario_action(m, Mario.ACT_START_HANGING, 0)
            break

        default: throw "unkown air step result in common_air_action_step"
    }

    return stepResult
}

const common_air_knockback_step = (m, landAction, hardFallAction, animation, speed) => {

    Mario.set_forward_vel(m, speed)

    let stepResult = perform_air_step(m, 0)
    switch (stepResult) {
        case Mario.AIR_STEP_NONE:
            Mario.set_mario_animation(m, animation)
            break

        case Mario.AIR_STEP_LANDED:
            // if (m.action == ACT_SOFT_BONK) {
            //     queue_rumble_data(5, 80);
            // }
            // if (!check_fall_damage_or_get_stuck(m, hardFallAction)) {
            Mario.set_mario_action(m, landAction, m.actionArg)
            // }
            break

        case Mario.AIR_STEP_HIT_WALL:

            if (m.wall) {
                Mario.set_mario_animation(m, Mario.MARIO_ANIM_BACKWARD_AIR_KB)
                mario_bonk_reflection(m, false)

                if (m.vel[1] > 0.0) {
                    m.vel[1] = 0.0
                }

                Mario.set_forward_vel(m, -speed)
            }

            break

        // case AIR_STEP_HIT_LAVA_WALL:
        //     lava_boost_on_wall(m);
        //     break;
    }

    return stepResult
}

const check_wall_kick = (m) => {
    if ((m.input & Mario.INPUT_A_PRESSED) && m.wallKickTimer != 0 && m.prevAction == Mario.ACT_AIR_HIT_WALL) {
        m.faceAngle[1] += 0x8000
        return Mario.set_mario_action(m, Mario.ACT_WALL_KICK_AIR, 0)
    }

    return 0
}

const act_soft_bonk = (m) => {
    if (check_wall_kick(m)) { return 1 }

    // play_sound_if_no_flag(m, SOUND_MARIO_UH, MARIO_MARIO_SOUND_PLAYED);

    common_air_knockback_step(m, Mario.ACT_FREEFALL_LAND, Mario.ACT_HARD_BACKWARD_GROUND_KB, 0x0056, m.forwardVel)
    return 0
}

const check_kick_or_dive_in_air = (m) => {
    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, m.forwardVel > 28.0 ? Mario.ACT_DIVE : Mario.ACT_JUMP_KICK, 0)
    }
    return 0
}

const act_jump = (m) => {

    if (check_kick_or_dive_in_air(m)) return 1

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    //play sound
    common_air_action_step(m, Mario.ACT_JUMP_LAND, Mario.MARIO_ANIM_SINGLE_JUMP,
        Mario.AIR_STEP_CHECK_LEDGE_GRAB | Mario.AIR_STEP_CHECK_HANG)

    return 0
}

const act_freefall = (m) => {
    let animation

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    switch (m.actionArg) {
        case 0: animation = Mario.MARIO_ANIM_GENERAL_FALL; break
        case 1: animation = Mario.MARIO_ANIM_FALL_FROM_SLIDE; break
        case 2: animation = Mario.MARIO_ANIM_FALL_FROM_SLIDE_KICK; break
        default: throw "act freefall unknown action arg"
    }

    common_air_action_step(m, Mario.ACT_FREEFALL_LAND, animation, Mario.AIR_STEP_CHECK_LEDGE_GRAB)
    return 0
}

const act_side_flip = (m) => {

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    if (common_air_action_step(m, Mario.ACT_SIDE_FLIP_LAND, Mario.MARIO_ANIM_SLIDEFLIP, Mario.AIR_STEP_CHECK_LEDGE_GRAB) != Mario.AIR_STEP_GRABBED_LEDGE) {
        m.marioObj.header.gfx.angle[1] += 0x8000
    }

    return 0
}

const act_double_jump = (m) => {

    let animation = (m.vel[1] >= 0.0) ? Mario.MARIO_ANIM_DOUBLE_JUMP_RISE : Mario.MARIO_ANIM_DOUBLE_JUMP_FALL

    if (check_kick_or_dive_in_air(m)) return 1

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    common_air_action_step(m, Mario.ACT_DOUBLE_JUMP_LAND, animation, Mario.AIR_STEP_CHECK_LEDGE_GRAB | Mario.AIR_STEP_CHECK_HANG)

    return 0
}

const act_triple_jump = (m) => {

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    common_air_action_step(m, Mario.ACT_TRIPLE_JUMP_LAND, Mario.MARIO_ANIM_TRIPLE_JUMP, 0)
    return 0
}

const act_wall_kick_air = (m) => {

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    common_air_action_step(m, Mario.ACT_JUMP_LAND, Mario.MARIO_ANIM_SLIDEJUMP, Mario.AIR_STEP_CHECK_LEDGE_GRAB)
    return 0
}

const act_top_of_pole_jump = (m) => {
    common_air_action_step(m, Mario.ACT_FREEFALL_LAND, Mario.MARIO_ANIM_HANDSTAND_JUMP, Mario.AIR_STEP_CHECK_LEDGE_GRAB)
    return 0
}

const act_backflip = (m) => {
    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    common_air_action_step(m, Mario.ACT_BACKFLIP_LAND, Mario.MARIO_ANIM_BACKFLIP, 0)
    return 0
}

const act_long_jump = (m) => {
    let animation
    if (!m.marioObj.oMarioLongJumpIsSlow) {
        animation = Mario.MARIO_ANIM_FAST_LONGJUMP
    } else {
        animation = Mario.MARIO_ANIM_SLOW_LONGJUMP
    }

    //play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_YAHOO);

    common_air_action_step(m, Mario.ACT_LONG_JUMP_LAND, animation, Mario.AIR_STEP_CHECK_LEDGE_GRAB)

    return 0
}

const act_dive = (m) => {

    //play sounds

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_DIVE)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_NONE:
            if (m.vel[1] < 0.0 && m.faceAngle[0] > -0x2AAA) {
                m.faceAngle[0] -= 0x200
                if (m.faceAngle[0] < -0x2AAA) {
                    m.faceAngle[0] = -0x2AAA
                }
            }
            m.marioObj.header.gfx.angle[0] = -m.faceAngle[0]
            break
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, Mario.ACT_DIVE_SLIDE)
            m.faceAngle[0] = 0
            break
        case Mario.AIR_STEP_HIT_WALL:

            if (m.wall) {
                mario_bonk_reflection(m, true)
                m.faceAngle[0] = 0
                if (m.vel[1] > 0.0) m.vel[1] = 0.0
                m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR
                Mario.drop_and_set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, 0)
            }

            break
        default: throw "unimplemented air step case in act dive"
    }


    return 0
}


export const act_backward_air_kb = (m) => {
    if (check_wall_kick(m)) { return 1 }

    //play_knockback_sound(m);

    common_air_knockback_step(m, Mario.ACT_BACKWARD_GROUND_KB, Mario.ACT_HARD_BACKWARD_GROUND_KB, 0x0002, -16.0)
    return 0
}

export const act_forward_air_kb = (m) => {
    if (check_wall_kick(m)) { return 1 }

    //play_knockback_sound(m);

    common_air_knockback_step(m, Mario.ACT_FORWARD_GROUND_KB, Mario.ACT_HARD_FORWARD_GROUND_KB, 0x0002, 16.0)
    return 0
}

export const act_hard_backward_air_kb = (m) => {
    //play_knockback_sound(m);

    common_air_knockback_step(m, Mario.ACT_HARD_BACKWARD_GROUND_KB, Mario.ACT_HARD_BACKWARD_GROUND_KB, 0x0002, -16.0)
    return 0
}

export const act_hard_forward_air_kb = (m) => {
    //play_knockback_sound(m);

    common_air_knockback_step(m, Mario.ACT_HARD_FORWARD_GROUND_KB, Mario.ACT_HARD_FORWARD_GROUND_KB, 0x002D, 16.0)
    return 0
}

const act_jump_kick = (m) => {

    if (m.actionState == 0) {
        //play sound
        m.marioObj.header.gfx.unk38.animID = -1
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_AIR_KICK)
        m.actionState = 1
    }

    const animFrame = m.marioObj.header.gfx.unk38.animFrame
    if (animFrame == 0) {
        m.marioBodyState.punchState = (2 << 6) | 6
    }
    if (animFrame >= 0 && animFrame < 8) {
        m.flags |= Mario.MARIO_KICKING
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL_LAND, 0)
            break
        case Mario.AIR_STEP_HIT_WALL:
            if (m.wall) {
                Mario.set_forward_vel(m, 0)
            }
            break
    }

    return 0
}

const act_forward_rollout = (m) => {
    if (m.actionState == 0) {
        m.vel[1] = 30.0
        m.actionState = 1
    }

    //play sound

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_NONE:
            if (m.actionState == 1) {
                if (Mario.set_mario_animation(m, Mario.MARIO_ANIM_FORWARD_SPINNING) == 4) {
                    //play sound
                }
            } else {
                Mario.set_mario_animation(m, Mario.MARIO_ANIM_GENERAL_FALL)
            }
            break
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL_LAND_STOP, 0)
            //play landing sound
            break
        case Mario.AIR_STEP_HIT_WALL:
            if (m.wall) {
                Mario.set_forward_vel(m, 0)
            }
            break
        default: throw "unimplemented case in act_forward_rollout"
    }

    if (m.actionState == 1 && Mario.is_anim_past_end(m)) {
        m.actionState = 2
    }

    return 0
}

const act_backward_rollout = (m) => {
    if (m.actionState == 0) {
        m.vel[1] = 30.0
        m.actionState = 1
    }

    //play sound

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_NONE:
            if (m.actionState == 1) {
                if (Mario.set_mario_animation(m, Mario.MARIO_ANIM_BACKWARD_SPINNING) == 4) {
                    //play sound
                }
            } else {
                Mario.set_mario_animation(m, Mario.MARIO_ANIM_GENERAL_FALL)
            }
            break
        case Mario.AIR_STEP_LANDED:
            Mario.set_mario_action(m, Mario.ACT_FREEFALL_LAND_STOP, 0)
            //play landing sound
            break
        case Mario.AIR_STEP_HIT_WALL:
            if (m.wall) {
                Mario.set_forward_vel(m, 0)
            }
            break
        default: throw "unimplemented case in act_forward_rollout"
    }

    if (m.actionState == 1 && m.marioObj.header.gfx.unk38.animFrame == 2) {
        m.actionState = 2
    }

    return 0
}

const act_slide_kick = (m) => {
    if (m.actionState == 0 && m.actionTimer == 0) {
        //play sound
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_SLIDE_KICK)
    }

    if (++(m.actionTimer) > 30 && m.pos[1] - m.floorHeight > 500.0) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 2)
    }

    update_air_without_turn(m)

    switch (perform_air_step(m)) {
        case Mario.AIR_STEP_NONE:
            if (m.actionState == 0) {
                m.marioObj.header.gfx.angle[0] = atan2s(m.forwardVel, -m.vel[1])
                if (m.marioObj.header.gfx.angle[0] > 0x1800) {
                    m.marioObj.header.gfx.angle[0] = 0x1800
                }
            }
            break
        case Mario.AIR_STEP_LANDED:
            if (m.actionState == 0 && m.vel[1] < 0.0) {
                m.vel[1] = -m.vel[1] / 2.0
                m.actionState = 1
                m.actionTimer = 0
            } else {
                Mario.set_mario_action(m, Mario.ACT_SLIDE_KICK_SLIDE, 0)
            }
            //play landing sound
            break
        case Mario.AIR_STEP_HIT_WALL:
            if (m.wall) {
                if (m.vel[1] > 0) m.vel[1] = 0
                m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR
                Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, 0)
            }
            break
        default: throw "unimplemented case in act slide kick"
    }

    return 0
}

const act_ground_pound = (m) => {

    //play sound

    if (m.actionState == 0) {
        if (m.actionTimer < 10) {
            const yOffset = 20 - (2 * m.actionTimer)
            if (m.pos[1] + yOffset + 160.0 < m.ceilHeight) {
                m.pos[1] += yOffset
                m.peakHeight = m.pos[1]
                m.marioObj.header.gfx.pos = [...m.pos]
            }
        }

        m.vel[1] = -50.0

        Mario.set_forward_vel(m, 0.0)

        Mario.set_mario_animation(m, m.actionArg == 0 ? Mario.MARIO_ANIM_START_GROUND_POUND : Mario.MARIO_ANIM_TRIPLE_JUMP_GROUND_POUND)

        if (m.actionTimer == 0) {
            //play sound
        }

        m.actionTimer++
        if (m.actionTimer >= m.marioObj.header.gfx.unk38.curAnim.unk08 + 4) {
            //play sound
            m.actionState = 1
        }
    } else {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_GROUND_POUND)

        const stepResult = perform_air_step(m, 0)
        if (stepResult == Mario.AIR_STEP_LANDED) {
            //play heave landed sound
            m.particleFlags |= Mario.PARTICLE_MIST_CIRCLE | Mario.PARTICLE_HORIZONTAL_STAR
            Mario.set_mario_action(m, Mario.ACT_GROUND_POUND_LAND, 0)
        } else if (stepResult == Mario.AIR_STEP_HIT_WALL) {
            if (m.wall) {
                if (m.vel[1] > 0.0) m.vel[1] = 0.0

                m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR
                Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, 0)
            }
        }
    }

    return 0

}

const act_air_hit_wall = (m) => {
    if (++(m.actionTimer) <= 2) { // 2
        if (m.input & Mario.INPUT_A_PRESSED) {
            m.vel[1] = 52.0
            m.faceAngle[1] += 0x8000
            return Mario.set_mario_action(m, Mario.ACT_WALL_KICK_AIR, 0)
        }
    } else if (m.forwardVel >= 38.0) {
        m.wallKickTimer = 5
        if (m.vel[1] > 0.0) {
            m.vel[1] = 0.0
        }

        m.particleFlags |= Mario.PARTICLE_VERTICAL_STAR
        return Mario.set_mario_action(m, Mario.ACT_BACKWARD_AIR_KB, 0) 
    } else {
        m.wallKickTimer = 5
        if (m.vel[1] > 0.0) {
            m.vel[1] = 0.0
        }

        if (m.forwardVel > 8.0) {
            Mario.set_forward_vel(m, -8.0)
        }
        return Mario.set_mario_action(m, Mario.ACT_SOFT_BONK, 0)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_START_WALLKICK)

    return 1  /// Nintendo glitch
}

const act_thrown_backward = (m) => {

    const landAction = Mario.ACT_FREEFALL_LAND

    ///play sound

    const animation = Mario.MARIO_ANIM_BACKWARD_AIR_KB
    //// temporary should be common_air_knockback_step
    common_air_action_step(m, landAction, animation, Mario.AIR_STEP_CHECK_LEDGE_GRAB)
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    m.forwardVel *= 0.98
    return 0
}

const act_knocked_up = (m) => {

    const landAction = Mario.ACT_BUTT_STUCK_IN_GROUND
    const animation = Mario.MARIO_ANIM_BACKWARD_AIR_KB

    common_air_knockback_step(m, landAction, landAction, animation, 0)
    return 0

}

const act_steep_jump = (m) => {
    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_DIVE, 0)
    }

    //play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0);
    Mario.set_forward_vel(m, 0.98 * m.forwardVel)

    switch (perform_air_step(m, 0)) {
        case Mario.AIR_STEP_LANDED:
            //if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                m.faceAngle[0] = 0
                Mario.set_mario_action(m, m.forwardVel < 0.0 ? Mario.ACT_BEGIN_SLIDING : Mario.ACT_JUMP_LAND, 0)
            //}
            break

        case Mario.AIR_STEP_HIT_WALL:
            Mario.set_forward_vel(m, 0.0)
            break
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SINGLE_JUMP)
    m.marioObj.header.gfx.angle[1] = m.marioObj.rawData[oMarioSteepJumpYaw]
    return 0
}

export const mario_execute_airborne_action = (m) => {

    switch (m.action) {
        case Mario.ACT_JUMP: return act_jump(m)
        case Mario.ACT_STEEP_JUMP: return act_steep_jump(m)
        case Mario.ACT_SOFT_BONK: return act_soft_bonk(m)
        case Mario.ACT_FREEFALL: return act_freefall(m)
        case Mario.ACT_SIDE_FLIP: return act_side_flip(m)
        case Mario.ACT_DOUBLE_JUMP: return act_double_jump(m)
        case Mario.ACT_TRIPLE_JUMP: return act_triple_jump(m)
        case Mario.ACT_WALL_KICK_AIR: return act_wall_kick_air(m)
        case Mario.ACT_TOP_OF_POLE_JUMP: return act_top_of_pole_jump(m)
        case Mario.ACT_BACKFLIP: return act_backflip(m)
        case Mario.ACT_LONG_JUMP: return act_long_jump(m)
        case Mario.ACT_DIVE: return act_dive(m)
        case Mario.ACT_JUMP_KICK: return act_jump_kick(m)
        case Mario.ACT_BUTT_SLIDE_AIR: return act_butt_slide_air(m)
        case Mario.ACT_FORWARD_ROLLOUT: return act_forward_rollout(m)
        case Mario.ACT_BACKWARD_ROLLOUT: return act_backward_rollout(m)
        case Mario.ACT_SLIDE_KICK: return act_slide_kick(m)
        case Mario.ACT_GROUND_POUND: return act_ground_pound(m)
        case Mario.ACT_AIR_HIT_WALL: return act_air_hit_wall(m)
        case Mario.ACT_BACKWARD_AIR_KB: return act_backward_air_kb(m)
        case Mario.ACT_FORWARD_AIR_KB: return act_forward_air_kb(m)
        case Mario.ACT_HARD_BACKWARD_AIR_KB: return act_hard_backward_air_kb(m)
        case Mario.ACT_HARD_FORWARD_AIR_KB: return act_hard_forward_air_kb(m)

        case Mario.ACT_THROWN_BACKWARD: return act_thrown_backward(m)
        case Mario.ACT_KNOCKED_UP: return act_knocked_up(m)

        default: throw "unkown action airborne"
    }
}
