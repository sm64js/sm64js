import * as Mario from "./Mario"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { WARP_OP_DEATH } from "./LevelUpdate"
import {
    set_mario_animation, is_anim_at_end, //update_mario_pos_for_anim,

    check_common_action_exits, /*check_common_hold_action_exits,*/ drop_and_set_mario_action,
    is_anim_past_end, set_jump_from_landing, set_jumping_action, set_mario_action,
    set_water_plunge_action, update_mario_sound_and_camera, play_sound_if_no_flag,
    mario_set_forward_vel, play_mario_landing_sound_once, set_mario_anim_with_accel,

    ACT_DISAPPEARED,  ACT_INTRO_CUTSCENE,  ACT_STAR_DANCE_EXIT,  ACT_STAR_DANCE_NO_EXIT, 
    ACT_STAR_DANCE_WATER,  ACT_FALL_AFTER_STAR_GRAB,  ACT_READING_AUTOMATIC_DIALOG, 
    ACT_READING_NPC_DIALOG,  ACT_DEBUG_FREE_MOVE,  ACT_READING_SIGN,  ACT_JUMBO_STAR_CUTSCENE, 
    ACT_WAITING_FOR_DIALOG,  ACT_STANDING_DEATH,  ACT_QUICKSAND_DEATH,  ACT_ELECTROCUTION, 
    ACT_SUFFOCATION,  ACT_DEATH_ON_STOMACH,  ACT_DEATH_ON_BACK,  ACT_EATEN_BY_BUBBA, 
    ACT_END_PEACH_CUTSCENE,  ACT_CREDITS_CUTSCENE,  ACT_END_WAVING_CUTSCENE,  ACT_PULLING_DOOR, 
    ACT_PUSHING_DOOR,  ACT_WARP_DOOR_SPAWN,  ACT_EMERGE_FROM_PIPE,  ACT_SPAWN_SPIN_AIRBORNE, 
    ACT_SPAWN_SPIN_LANDING,  ACT_EXIT_AIRBORNE,  ACT_EXIT_LAND_SAVE_DIALOG,  ACT_DEATH_EXIT, 
    ACT_UNUSED_DEATH_EXIT,  ACT_FALLING_DEATH_EXIT,  ACT_SPECIAL_EXIT_AIRBORNE,  ACT_SPECIAL_DEATH_EXIT,
    ACT_FALLING_EXIT_AIRBORNE,  ACT_UNLOCKING_KEY_DOOR,  ACT_UNLOCKING_STAR_DOOR, 
    ACT_ENTERING_STAR_DOOR,  ACT_SPAWN_NO_SPIN_AIRBORNE,  ACT_SPAWN_NO_SPIN_LANDING, 
    ACT_BBH_ENTER_JUMP,  ACT_BBH_ENTER_SPIN,  ACT_TELEPORT_FADE_OUT,  ACT_TELEPORT_FADE_IN, 
    ACT_SHOCKED,  ACT_SQUISHED,  ACT_HEAD_STUCK_IN_GROUND,  ACT_BUTT_STUCK_IN_GROUND, 
    ACT_FEET_STUCK_IN_GROUND, ACT_PUTTING_ON_CAP,

    MARIO_METAL_CAP, MARIO_METAL_SHOCK, MARIO_CAP_ON_HEAD,
    MARIO_ANIM_A_POSE, MARIO_ANIM_PULL_DOOR_WALK_IN, MARIO_ANIM_PUSH_DOOR_WALK_IN,
    MARIO_ANIM_GENERAL_FALL, MARIO_MARIO_SOUND_PLAYED, GROUND_STEP_LEFT_GROUND,
    MARIO_ACTION_SOUND_PLAYED,

    ACT_IDLE, AIR_STEP_LANDED,
    ACT_AIR_THROW_LAND, ACT_BACKFLIP, ACT_BACKFLIP_LAND_STOP, ACT_BEGIN_SLIDING, ACT_BRAKING_STOP,
    ACT_BUTT_SLIDE_STOP, ACT_COUGHING, ACT_CRAWLING, ACT_CRAZY_BOX_BOUNCE, ACT_CROUCH_SLIDE,
    ACT_CROUCHING, ACT_DOUBLE_JUMP_LAND_STOP, MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, ACT_FIRST_PERSON,
    ACT_FREEFALL, ACT_FREEFALL_LAND_STOP, ACT_GROUND_POUND_LAND, ACT_HEAVY_THROW,
    ACT_HOLD_BUTT_SLIDE_STOP, ACT_HOLD_FREEFALL, ACT_HOLD_FREEFALL_LAND_STOP, ACT_HOLD_HEAVY_IDLE,
    ACT_HOLD_BEGIN_SLIDING, ACT_HOLD_HEAVY_WALKING, ACT_HOLD_IDLE, ACT_HOLD_JUMP,
    ACT_HOLD_JUMP_LAND_STOP, ACT_HOLD_PANTING_UNUSED, ACT_HOLD_WALKING, ACT_IN_QUICKSAND,
    ACT_JUMP, ACT_JUMP_LAND_STOP, ACT_LAVA_BOOST_LAND, ACT_LONG_JUMP_LAND_STOP, ACT_PANTING,
    ACT_PUNCHING, ACT_SHIVERING, ACT_SHOCKWAVE_BOUNCE, ACT_SIDE_FLIP_LAND_STOP, ACT_SLEEPING,
    ACT_SLIDE_KICK_SLIDE_STOP, ACT_STANDING_AGAINST_WALL,
    ACT_START_CRAWLING, ACT_START_CROUCHING, ACT_START_SLEEPING,
    ACT_STOP_CRAWLING, ACT_STOP_CROUCHING, ACT_THROWING, ACT_TRIPLE_JUMP_LAND_STOP, ACT_TWIRL_LAND,
    ACT_UNKNOWN_0002020E, ACT_WAKING_UP, ACT_WALKING, ACT_DEATH_EXIT_LAND, ACT_HARD_BACKWARD_GROUND_KB,

    INPUT_A_PRESSED, INPUT_ABOVE_SLIDE, INPUT_B_PRESSED, INPUT_FIRST_PERSON, INPUT_IN_WATER,
    INPUT_NONZERO_ANALOG, INPUT_OFF_FLOOR, INPUT_SQUISHED, INPUT_UNKNOWN_10, INPUT_Z_DOWN,

    MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP, MARIO_ANIM_CROUCH_FROM_SLIDE_KICK,
    MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP, MARIO_ANIM_CROUCHING, MARIO_ANIM_GENERAL_LAND,
    MARIO_ANIM_GROUND_POUND_LANDING, MARIO_ANIM_IDLE_HEAD_CENTER, MARIO_ANIM_IDLE_HEAD_LEFT,
    MARIO_ANIM_IDLE_HEAD_RIGHT, MARIO_ANIM_IDLE_HEAVY_OBJ, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ,
    MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ, MARIO_ANIM_LAND_FROM_DOUBLE_JUMP,
    MARIO_ANIM_LAND_FROM_SINGLE_JUMP, MARIO_ANIM_SLIDEFLIP_LAND, MARIO_ANIM_STAND_AGAINST_WALL,
    MARIO_ANIM_START_CRAWLING, MARIO_ANIM_START_CROUCHING, MARIO_ANIM_STOP_CRAWLING,
    MARIO_ANIM_STOP_CROUCHING, MARIO_ANIM_STOP_SKID, MARIO_ANIM_STOP_SLIDE,
    MARIO_ANIM_THROW_LIGHT_OBJECT, MARIO_ANIM_TRIPLE_JUMP_LAND, MARIO_ANIM_FIRST_PERSON,
    MARIO_ANIM_WATER_IDLE, MARIO_ANIM_SUMMON_STAR, MARIO_ANIM_RETURN_STAR_APPROACH_DOOR,
    MARIO_ANIM_SHOCKED, MARIO_ANIM_FORWARD_SPINNING, MARIO_ANIM_WALKING, MARIO_ANIM_DYING_ON_BACK,
    MARIO_ANIM_DYING_FALL_OVER, MARIO_ANIM_BACKWARD_AIR_KB,

    INPUT_IN_POISON_GAS,

    play_mario_landing_sound
} from "./Mario"

import {
    stop_and_set_height_to_floor, perform_air_step,
    stationary_ground_step, perform_ground_step
} from "./MarioStep"

import {
    s16, sins, coss
} from "../utils"

import { 
    vec3f_set, atan2s
} from "../engine/math_util"

import * as Particles from "../include/mario_constants"

import {
    SOUND_MARIO_ATTACKED, SOUND_ACTION_TERRAIN_LANDING, SOUND_MARIO_HERE_WE_GO, SOUND_MARIO_WAAAOOOW, 
    SOUND_MARIO_DYING, SOUND_MARIO_YAHOO, SOUND_MARIO_OOOF, SOUND_MARIO_OOOF2, SOUND_MARIO_HAHA, 
    SOUND_MARIO_YAH_WAH_HOO, SOUND_MARIO_HOOHOO,

    SOUND_ACTION_TERRAIN_BODY_HIT_GROUND
} from "../include/sounds"

export const act_shocked = (m) => {
    //play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_ACTION_SOUND_PLAYED)
    //play_sound(SOUND_MOVING_SHOCKED, m.marioObj.gfx.cameraToObject)
    //set_camera_shake_from_hit(SHAKE_SHOCK)

    if (set_mario_animation(m, MARIO_ANIM_SHOCKED) == 0) {
        m.actionTimer++
        m.flags |= MARIO_METAL_SHOCK
    }

    if (m.actionArg == 0) {
        mario_set_forward_vel(m, 0.0)
        if (perform_air_step(m, 1) == AIR_STEP_LANDED) {
            //play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            m.actionArg = 1
        }
    } else {
        if (m.actionTimer >= 6) {
            m.invincTimer = 30
            set_mario_action(m, m.health < 0x0100 ? ACT_ELECTROCUTION : ACT_IDLE, 0)
        }
        stop_and_set_height_to_floor(m)
    }

    return 0
}

const act_squished = (m) => {
    let /*f32*/ squishAmount
    let /*f32*/ spaceUnderCeil
    let /*s16*/ surfAngle
    let /*s32*/ underSteepSurf = 0   // seems to be responsible for setting velocity?

    if ((spaceUnderCeil = m.ceilHeight - m.floorHeight) < 0) {
        spaceUnderCeil = 0
    }

    switch (m.actionState) {
        case 0:
            if (spaceUnderCeil > 160.0) {
                m.squishTimer = 0
                return set_mario_action(m, ACT_IDLE, 0)
            }

            m.squishTimer = 0xFF

            if (spaceUnderCeil >= 10.1) {
                  // Mario becomes a pancake
                squishAmount = spaceUnderCeil / 160.0
                vec3f_set(m.marioObj.header.gfx.scale, 2.0 - squishAmount, squishAmount,
                          2.0 - squishAmount)
            } else {
                if (!(m.flags & MARIO_METAL_CAP) && m.invincTimer == 0) {
                      // cap on: 3 units; cap off: 4.5 units
                    m.hurtCounter += m.flags & MARIO_CAP_ON_HEAD ? 12 : 18
                    play_sound_if_no_flag(m, SOUND_MARIO_ATTACKED, MARIO_MARIO_SOUND_PLAYED)
                }

                  // Both of the 1.8's are really floats, but one of them has to
                  // be written as a double for this to match on -O2.
                vec3f_set(m.marioObj.gfx.scale, 1.8, 0.05, 1.8)
                m.actionState = 1
            }
            break
        case 1:
            if (spaceUnderCeil >= 30.0) {
                m.actionState = 2
            }
            break
        case 2:
            m.actionTimer++
            if (m.actionTimer >= 15) {
                  // 1 unit of health
                if (m.health < 0x0100) {
                    LevelUpdate.level_trigger_warp(m, WARP_OP_DEATH)
                      // woosh, he's gone!
                    set_mario_action(m, ACT_DISAPPEARED, 0)
                } else if (m.hurtCounter == 0) {
                      // un-squish animation
                    m.squishTimer = 30
                    set_mario_action(m, ACT_IDLE, 0)
                }
            }
            break
    }

      // steep floor
    if (m.floor && m.floor.normal.y < 0.5) {
        surfAngle = atan2s(m.floor.normal.z, m.floor.normal.x)
        underSteepSurf = 1
    }
      // steep ceiling
    if (m.ceil && -0.5 < m.ceil.normal.y) {
        surfAngle = atan2s(m.ceil.normal.z, m.ceil.normal.x)
        underSteepSurf = 1
    }

    if (underSteepSurf) {
        m.vel[0] = sins(surfAngle) * 10.0
        m.vel[2] = coss(surfAngle) * 10.0
        m.vel[1] = 0

          // check if there's no floor 10 units away from the surface
        if (perform_ground_step(m) == GROUND_STEP_LEFT_GROUND) {
              // instant un-squish
            m.squishTimer = 0
            set_mario_action(m, ACT_IDLE, 0)
            return 0
        }
    }

      // squished for more than 10 seconds, so kill Mario
    if (m.actionArg++ > 300) {
          // 0 units of health
        m.health = 0x00FF
        m.hurtCounter = 0
        LevelUpdate.level_trigger_warp(m, WARP_OP_DEATH)
          // woosh, he's gone!
        set_mario_action(m, ACT_DISAPPEARED, 0)
    }
    stop_and_set_height_to_floor(m)
    set_mario_animation(m, MARIO_ANIM_A_POSE)
    return 0
}

export const common_death_handler = (m, animation, frameToDeathWarp) => {
	const animFrame = Mario.set_mario_animation(m, animation);
    if (animFrame == frameToDeathWarp) {
        Mario.respawn_player(m)
    }
    // m.marioBodyState.eyeState = MARIO_EYES_DEAD - Todo?? Can't find the define for this.
    stop_and_set_height_to_floor(m);
    return animFrame;
}

const act_standing_death = (m) => {
	if (m.input & Mario.INPUT_IN_POISON_GAS) {
		return Mario.set_mario_action(m, Mario.ACT_SUFFOCATION, 0);
	}
	
	//play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED);
    common_death_handler(m, Mario.MARIO_ANIM_DYING_FALL_OVER, 80);
	if (m.marioObj.header.gfx.unk38.animFrame == 77) {
		//play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND);
	}
	return 0
}

const act_death_on_back = (m) => {
	//play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED);
    if (common_death_handler(m, Mario.MARIO_ANIM_DYING_ON_BACK, 54) == 40) {
        //play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND);
    }
	return 0
}

const act_death_on_stomach = (m) => {
	//play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED);
    if (common_death_handler(m, Mario.MARIO_ANIM_DYING_ON_STOMACH, 37) == 37) {
        //play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND);
    }
	return 0
}

const act_suffocation = (m) => {
	//play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED);
    common_death_handler(m, Mario.MARIO_ANIM_SUFFOCATING, 86)
	return 0
}

const check_for_instant_quicksand = (m) => {
	// if (m.floor.type == SURFACE_INSTANT_QUICKSAND && m.action & Mario.ACT_FLAG_INVULNERABLE 
		// && m.action != Mario.ACT_QUICKSAND_DEATH) {
		// //update_mario_sound_and_camera(m) - TODO
		// return Mario.drop_and_set_mario_action(m, Mario.ACT_QUICKSAND_DEATH, 0)
	// }
	return 0
}

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
	let cancel;
    
	if (check_for_instant_quicksand(m)) {
        return 1
    }
    switch (m.action) {
        //case Mario.ACT_DISAPPEARED:						cancel = act_disappeared(m);            	break;
        // case Mario.ACT_INTRO_CUTSCENE:					cancel = act_intro_cutscene(m);         	break;
        // case Mario.ACT_STAR_DANCE_EXIT:					cancel = act_star_dance(m);             	break;
        // case Mario.ACT_STAR_DANCE_NO_EXIT:				cancel = act_star_dance(m);             	break;
        // case Mario.ACT_STAR_DANCE_WATER:					cancel = act_star_dance_water(m);       	break;
        // case Mario.ACT_FALL_AFTER_STAR_GRAB:				cancel = act_fall_after_star_grab(m);   	break;
        // case Mario.ACT_READING_AUTOMATIC_DIALOG:			cancel = act_reading_automatic_dialog(m);	break;
        // case Mario.ACT_READING_NPC_DIALOG:				cancel = act_reading_npc_dialog(m);     	break;
        // case Mario.ACT_DEBUG_FREE_MOVE:					cancel = act_debug_free_move(m);        	break;
        // case Mario.ACT_READING_SIGN:						cancel = act_reading_sign(m);           	break;
        // case Mario.ACT_JUMBO_STAR_CUTSCENE:				cancel = act_jumbo_star_cutscene(m);    	break;
        // case Mario.ACT_WAITING_FOR_DIALOG:				cancel = act_waiting_for_dialog(m);     	break;
        case Mario.ACT_STANDING_DEATH:						cancel = act_standing_death(m);         	break;
        //case Mario.ACT_QUICKSAND_DEATH:					cancel = act_quicksand_death(m);        	break;
        //case Mario.ACT_ELECTROCUTION:						cancel = act_electrocution(m);          	break;
        case Mario.ACT_SUFFOCATION:							cancel = act_suffocation(m);            	break;
        case Mario.ACT_DEATH_ON_STOMACH:					cancel = act_death_on_stomach(m);       	break;
        case Mario.ACT_DEATH_ON_BACK:						cancel = act_death_on_back(m);          	break;
        // case Mario.ACT_EATEN_BY_BUBBA:					cancel = act_eaten_by_bubba(m);         	break;
        // case Mario.ACT_END_PEACH_CUTSCENE:				cancel = act_end_peach_cutscene(m);     	break;
        // case Mario.ACT_CREDITS_CUTSCENE:					cancel = act_credits_cutscene(m);       	break;
        // case Mario.ACT_END_WAVING_CUTSCENE:				cancel = act_end_waving_cutscene(m);    	break;
        // case Mario.ACT_PULLING_DOOR:						cancel = act_going_through_door(m);     	break;
        // case Mario.ACT_PUSHING_DOOR:						cancel = act_going_through_door(m);     	break;
        // case Mario.ACT_WARP_DOOR_SPAWN:					cancel = act_warp_door_spawn(m);        	break;
        // case Mario.ACT_EMERGE_FROM_PIPE:					cancel = act_emerge_from_pipe(m);       	break;
        // case Mario.ACT_SPAWN_SPIN_AIRBORNE:				cancel = act_spawn_spin_airborne(m);    	break;
        // case Mario.ACT_SPAWN_SPIN_LANDING:				cancel = act_spawn_spin_landing(m);     	break;
        // case Mario.ACT_EXIT_AIRBORNE:					cancel = act_exit_airborne(m);          	break;
        // case Mario.ACT_EXIT_LAND_SAVE_DIALOG:			cancel = act_exit_land_save_dialog(m);  	break;
        // case Mario.ACT_DEATH_EXIT:						cancel = act_death_exit(m);             	break;
        // case Mario.ACT_UNUSED_DEATH_EXIT:				cancel = act_unused_death_exit(m);      	break;
        // case Mario.ACT_FALLING_DEATH_EXIT:				cancel = act_falling_death_exit(m);     	break;
        // case Mario.ACT_SPECIAL_EXIT_AIRBORNE:			cancel = act_special_exit_airborne(m);  	break;
        // case Mario.ACT_SPECIAL_DEATH_EXIT:				cancel = act_special_death_exit(m);     	break;
        // case Mario.ACT_FALLING_EXIT_AIRBORNE:			cancel = act_falling_exit_airborne(m);  	break;
        // case Mario.ACT_UNLOCKING_KEY_DOOR:				cancel = act_unlocking_key_door(m);     	break;
        // case Mario.ACT_UNLOCKING_STAR_DOOR:				cancel = act_unlocking_star_door(m);    	break;
        // case Mario.ACT_ENTERING_STAR_DOOR:				cancel = act_entering_star_door(m);     	break;
        // case Mario.ACT_SPAWN_NO_SPIN_AIRBORNE:			cancel = act_spawn_no_spin_airborne(m); 	break;
        // case Mario.ACT_SPAWN_NO_SPIN_LANDING:			cancel = act_spawn_no_spin_landing(m);  	break;
        // case Mario.ACT_BBH_ENTER_JUMP:					cancel = act_bbh_enter_jump(m);         	break;
        // case Mario.ACT_BBH_ENTER_SPIN:					cancel = act_bbh_enter_spin(m);         	break;
        // case Mario.ACT_TELEPORT_FADE_OUT:				cancel = act_teleport_fade_out(m);      	break;
        // case Mario.ACT_TELEPORT_FADE_IN:					cancel = act_teleport_fade_in(m);       	break;
        case Mario.ACT_SHOCKED:							    cancel = act_shocked(m);                	break;
        case Mario.ACT_SQUISHED:							cancel = act_squished(m);               	break;
        // case Mario.ACT_HEAD_STUCK_IN_GROUND:				cancel = act_head_stuck_in_ground(m);   	break;
        case Mario.ACT_BUTT_STUCK_IN_GROUND:				cancel = act_butt_stuck_in_ground(m);   	break;
        // case Mario.ACT_FEET_STUCK_IN_GROUND:				cancel = act_feet_stuck_in_ground(m);   	break;
        // case Mario.ACT_PUTTING_ON_CAP:					cancel = act_putting_on_cap(m);         	break;
        default: throw "unknown action cutscene"
    }
	
    if (!cancel && (m.input & Mario.INPUT_IN_WATER)) {
        m.particleFlags |= Particles.PARTICLE_IDLE_WATER_WAVE;
    }
	
	return cancel
}