import * as Mario from "./Mario"
import { stop_and_set_height_to_floor } from "./MarioStep"
import * as Particles from "../include/mario_constants"

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
        // case Mario.ACT_SHOCKED:							cancel = act_shocked(m);                	break;
        // case Mario.ACT_SQUISHED:							cancel = act_squished(m);               	break;
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