import * as Mario from "./Mario"
import * as MarioConstants from "../include/mario_constants"
import { stationary_ground_step } from "./MarioStep"

const check_common_idle_cancels = (m) => {

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_JUMP, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {

        m.faceAngle[1] = m.intendedYaw

        return Mario.set_mario_action(m, Mario.ACT_WALKING, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_PUNCHING, 0)
    }

    if (m.input & Mario.INPUT_Z_DOWN) {
        return Mario.set_mario_action(m, Mario.ACT_START_CROUCHING, 0)
    }

    if (m.input & Mario.INPUT_TAUNT) {
        return Mario.set_mario_action(m, Mario.ACT_TAUNT, m.controller.taunt)
    }

    return 0
}

const act_idle = (m) => {

    if (m.input & Mario.INPUT_PARACHUTE && window.sm64js.ext) {
		m.input ^= Mario.INPUT_PARACHUTE
        return Mario.set_mario_action(m, Mario.ACT_KARTING, 0)
    }
	
    if (check_common_idle_cancels(m)) {
        return 1
    }

    if (m.actionArg & 1) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_STAND_AGAINST_WALL);
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

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_PUNCHING, 0)
    }

    if (!(m.input & Mario.INPUT_FIRST_PERSON)
        && m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m)
    }

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

    if (m.input & Mario.INPUT_A_PRESSED) {
        if (!action) {
            return Mario.set_jump_from_landing(m)
        } else {
            return Mario.set_jumping_action(m, action, 0)
        }
    }

    if (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_PUNCHING, 0)
    }

    return 0
}

const act_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_LAND_FROM_SINGLE_JUMP, Mario.ACT_IDLE)
    return 0
}

const act_standing_against_wall = (m) => {
    if (m.input & Mario.INPUT_UNKNOWN_10) {
        return set_mario_action(m, Mario.ACT_SHOCKWAVE_BOUNCE, 0);
    }

    if (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m);
    }

    if (m.input & Mario.INPUT_FIRST_PERSON) {
        return Mario.set_mario_action(m, Mario.ACT_FIRST_PERSON, 0);
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_PUNCHING, 0);
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_STAND_AGAINST_WALL);
    stationary_ground_step(m);
    return 0;
}

const act_freefall_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_GENERAL_LAND, Mario.ACT_IDLE)
    return 0
}

const act_side_flip_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_SLIDEFLIP_LAND, Mario.ACT_IDLE)
    m.marioObj.header.gfx.angle[1] += 0x8000
    return 0
}

const act_double_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return 1

    landing_step(m, Mario.MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, Mario.ACT_IDLE)
    return 0
}

const act_triple_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, Mario.ACT_JUMP)) return 1

    landing_step(m, Mario.MARIO_ANIM_TRIPLE_JUMP_LAND, Mario.ACT_IDLE)
    return 0
}

const act_start_crouching = (m) => {

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_BACKFLIP, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_START_CROUCHING)
    if (Mario.is_anim_past_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_CROUCHING, 0)
    }
    return 0
}

const act_crouching = (m) => {

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_BACKFLIP, 0)
    }

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    if (!(m.input & Mario.INPUT_Z_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_STOP_CROUCHING, 0)
    }

    if (m.input & Mario.INPUT_NONZERO_ANALOG) {
        return Mario.set_mario_action(m, Mario.ACT_START_CRAWLING, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_PUNCHING, 9)
    }

    stationary_ground_step(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_CROUCHING)
    return 0
}

const act_stop_crouching = (m) => {

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_jumping_action(m, Mario.ACT_BACKFLIP, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m);
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_STOP_CROUCHING)
    if (Mario.is_anim_past_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
    }
    return 0
}

const act_backflip_land_stop = (m) => {
    if (!(m.input & Mario.INPUT_Z_DOWN) || m.marioObj.header.gfx.unk38.animFrame >= 6) {
        m.input &= -3
    }

    if (check_common_landing_cancels(m, Mario.ACT_BACKFLIP)) {
        return 1
    }

    landing_step(m, Mario.MARIO_ANIM_TRIPLE_JUMP_LAND, Mario.ACT_IDLE)
    return 0
}

const act_long_jump_land_stop = (m) => {
    m.input &= -0x2001
    if (check_common_landing_cancels(m, Mario.ACT_JUMP)) {
        return 1
    }

    landing_step(m,
                  !m.marioObj.oMarioLongJumpIsSlow ? Mario.MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP
                                                     : Mario.MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP,
                  Mario.ACT_CROUCHING)
    return 0
}

const act_start_crawling = (m) => {
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_START_CRAWLING)
    if (Mario.is_anim_past_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_CRAWLING, 0)
    }
    return 0
}

const act_stop_crawling = (m) => {

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_STOP_CRAWLING)
    if (Mario.is_anim_past_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_CROUCHING, 0)
    }
    return 0

}

const act_slide_kick_slide_stop = (m) => {

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    stopping_step(m, Mario.MARIO_ANIM_CROUCH_FROM_SLIDE_KICK, Mario.ACT_CROUCHING)
    return 0
}

const act_ground_pound_land = (m) => {
    m.actionState = 1

    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_ABOVE_SLIDE) {
        return Mario.set_mario_action(m, Mario.ACT_BUTT_SLIDE, 0)
    }

    // odyssey
	if (m.input & Mario.INPUT_A_PRESSED && window.sm64js.ext) {
		m.vel[1] = 50.0
		Mario.set_forward_vel(m, 20.0)
		return Mario.set_mario_action(m, Mario.ACT_TRIPLE_JUMP, 0)
	}
    
    if ((m.input & Mario.INPUT_Z_DOWN) && !(m.input & Mario.INPUT_A_DOWN) && Mario.get_character_type(m) == 2) {
        return Mario.set_mario_action(m, Mario.ACT_POUND_ROLL, 0)
    }

    landing_step(m, Mario.MARIO_ANIM_GROUND_POUND_LANDING, Mario.ACT_BUTT_SLIDE_STOP)
    return 0
}

const act_butt_slide_stop = (m) => {
    if (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE)) {
        return Mario.check_common_action_exits(m)
    }

    stopping_step(m, Mario.MARIO_ANIM_STOP_SLIDE, Mario.ACT_IDLE)

    if (m.marioObj.header.gfx.unk38.animFrame == 6) {
        //play landing sound
    }

    return 0
}

const check_common_stationary_cancels = (m) => {
    if (m.pos[1] < m.waterLevel - 100) {
        if (m.action == Mario.ACT_SPAWN_SPIN_LANDING) {
            load_level_init_text(0)
        }
        Mario.update_mario_sound_and_camera(m)
        return Mario.set_water_plunge_action(m)
    }

    if (m.input & Mario.INPUT_SQUISHED) {
        Mario.update_mario_sound_and_camera(m)
        return Mario.drop_and_set_mario_action(m, Mario.ACT_SQUISHED, 0)
    }

    if (m.action != Mario.ACT_UNKNOWN_0002020E) {
        if (m.health < 0x100) {
            Mario.update_mario_sound_and_camera(m)
            return Mario.drop_and_set_mario_action(m, Mario.ACT_STANDING_DEATH, 0)
        }
    }
    return 0
}

export const mario_execute_stationary_action = (m) => {
    let cancel

    if (check_common_stationary_cancels(m)) {
        return 1
    }

    switch (m.action) {
        case Mario.ACT_IDLE:                  cancel = act_idle(m);                  break;
        case Mario.ACT_BRAKING_STOP:          cancel = act_braking_stop(m);          break;
        case Mario.ACT_JUMP_LAND_STOP:        cancel = act_jump_land_stop(m);        break;
        case Mario.ACT_STANDING_AGAINST_WALL: cancel = act_standing_against_wall(m); break;
        case Mario.ACT_FREEFALL_LAND_STOP:    cancel = act_freefall_land_stop(m);    break;
        case Mario.ACT_SIDE_FLIP_LAND_STOP:   cancel = act_side_flip_land_stop(m);   break;
        case Mario.ACT_DOUBLE_JUMP_LAND_STOP: cancel = act_double_jump_land_stop(m); break;
        case Mario.ACT_TRIPLE_JUMP_LAND_STOP: cancel = act_triple_jump_land_stop(m); break;
        case Mario.ACT_START_CROUCHING:       cancel = act_start_crouching(m);       break;
        case Mario.ACT_CROUCHING:             cancel = act_crouching(m);             break;
        case Mario.ACT_STOP_CROUCHING:        cancel = act_stop_crouching(m);        break;
        case Mario.ACT_BACKFLIP_LAND_STOP:    cancel = act_backflip_land_stop(m);    break;
        case Mario.ACT_LONG_JUMP_LAND_STOP:   cancel = act_long_jump_land_stop(m);   break;
        case Mario.ACT_START_CRAWLING:        cancel = act_start_crawling(m);        break;
        case Mario.ACT_STOP_CRAWLING:         cancel = act_stop_crawling(m);         break;
        case Mario.ACT_SLIDE_KICK_SLIDE_STOP: cancel = act_slide_kick_slide_stop(m); break;
        case Mario.ACT_GROUND_POUND_LAND:     cancel = act_ground_pound_land(m);     break;
        case Mario.ACT_BUTT_SLIDE_STOP:       cancel = act_butt_slide_stop(m);       break;
        default:
            throw "unkown action stationary"
    }

    if (!cancel && (m.input & Mario.INPUT_IN_WATER)) {
        m.particleFlags |= MarioConstants.PARTICLE_IDLE_WATER_WAVE
    }

    return cancel
}
