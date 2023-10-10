// king_bobomb.c.inc
import { GeoRendererInstance as GeoRenderer } from "../../engine/GeoRenderer"
import { Mat4 } from "../../engine/math_util"
import { DIALOG_FLAG_TEXT_DEFAULT, DIALOG_FLAG_TURN_TO_MARIO, HELD_DROPPED, HELD_FREE, HELD_HELD, HELD_THROWN, oAction, oAngleToMario, OBJ_FLAG_HOLDABLE, OBJ_MOVE_LANDED, OBJ_MOVE_ON_GROUND, oDistanceToMario, oFlags, oForwardVel, oGravity, oHealth, oHeldState, oHomeX, oHomeY, oInteractionSubtype, oInteractStatus, oInteractType, oKingBobombUnk100, oKingBobombUnk104, oKingBobombUnk108, oKingBobombUnk88, oKingBobombUnkF8, oKingBobombUnkFC, oMoveAngleYaw, oMoveFlags, oPosX, oPosY, oSubAction, oTimer, oVelY } from "../../include/object_constants"
import { NO_SOUND, SOUND_OBJ2_KING_BOBOMB_DAMAGE, SOUND_OBJ_KING_BOBOMB, SOUND_OBJ_KING_BOBOMB_JUMP, SOUND_OBJ_KING_WHOMP_DEATH, SOUND_OBJ_POUNDING1_HIGHPRIO, SOUND_OBJ_UNKNOWN3, SOUND_OBJ_UNKNOWN4 } from "../../include/sounds"
import { INTERACT_DAMAGE, INTERACT_GRABBABLE, INT_STATUS_GRABBED_MARIO, INT_STATUS_MARIO_UNK6, INT_SUBTYPE_GRABS_MARIO } from "../Interaction"
import { cur_obj_update_floor_and_walls, cur_obj_move_standard, cur_obj_move_using_fvel_and_gravity, cur_obj_call_action_function, cur_obj_enable_rendering, cur_obj_disable_rendering, cur_obj_become_intangible, cur_obj_init_animation_with_sound, cur_obj_set_pos_to_home, cur_obj_can_mario_activate_textbox_2, cur_obj_update_dialog_with_cutscene, approach_s16_symmetric, cur_obj_become_tangible, cur_obj_check_anim_frame, cur_obj_shake_screen, cur_obj_init_animation_and_check_if_near_end, cur_obj_init_animation_and_anim_frame, cur_obj_rotate_yaw_toward, cur_obj_check_grabbed_mario, player_performed_grab_escape_action, cur_obj_check_if_near_animation_end, cur_obj_init_animation_and_extend_if_at_end, cur_obj_angle_to_home, cur_obj_hide, cur_obj_spawn_star_at_y_offset, cur_obj_unrender_set_action_and_anim, cur_obj_get_thrown_or_placed } from "../ObjectHelpers"
import { create_sound_spawner, cur_obj_play_sound_2, exec_anim_sound_state } from "../SpawnSound"
import { CameraInstance as Camera, CUTSCENE_DIALOG, SHAKE_POS_SMALL } from "../Camera"
import { SEQ_PLAYER_LEVEL } from "../../audio/external"
import { DIALOG_017, DIALOG_116, DIALOG_128 } from "../../text/us/dialogs"
import { SEQ_EVENT_BOSS } from "../../include/seq_ids"
import { common_anchor_mario_behavior } from "./chuckya.inc"
import { arc_to_goal_pos } from "./grand_star.inc"
import { MARIO_DIALOG_LOOK_UP } from "../MarioActionsCutscene"
import { spawn_mist_particles_variable } from "./white_puff.inc"
import { spawn_triangle_break_particles } from "./break_particles.inc"
import { MODEL_DIRT_ANIMATION } from "../../include/model_ids"

export const bhv_bobomb_anchor_mario_loop = () => {
    common_anchor_mario_behavior(50.0, 50.0, INT_STATUS_MARIO_UNK6);
}

const king_bobomb_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oForwardVel] = 0.0
    o.rawData[oVelY] = 0.0
    if (o.rawData[oSubAction] == 0) {
        cur_obj_become_intangible()
        Camera.gSecondCameraFocus = o
        cur_obj_init_animation_with_sound(5)
        cur_obj_set_pos_to_home()
        o.rawData[oHealth] = 3
        if (cur_obj_can_mario_activate_textbox_2(500.0, 100.0)) {
            o.rawData[oSubAction]++
        //     seq_player_lower_volume(SEQ_PLAYER_LEVEL, 60, 40)
        }
    } else if (cur_obj_update_dialog_with_cutscene(2, 1, CUTSCENE_DIALOG, DIALOG_017)) {
        o.rawData[oAction] = 2
        o.rawData[oFlags] |= OBJ_FLAG_HOLDABLE
    }
}

export const mario_is_far_below_object = (arg0) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    if (arg0 < o.rawData[oPosY] - gMarioObject.rawData[oPosY]) {
        return true
    } else {
        return false
    }
}

export const king_bobomb_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oForwardVel] = 0
    o.rawData[oVelY] = 0
    cur_obj_init_animation_with_sound(11)
    o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw, o.rawData[oAngleToMario]], 0x200)
    if (o.rawData[oDistanceToMario] < 2500.0) {
        o.rawData[oAction] = 2
    }
    if (mario_is_far_below_object(1200.0)) {
        o.rawData[oAction] = 0
        // stop_background_music(SEQUENCE_ARGS(4, SEQ_EVENT_BOSS))
    }
}

const king_bobomb_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_become_tangible()

    if (o.rawData[oPosY] - o.rawData[oHomeY] < -100.0) { // Thrown off hill
        o.rawData[oAction] = 5
        cur_obj_become_intangible()
    }
    if (o.rawData[oKingBobombUnk100] == 0) {
        if (cur_obj_check_anim_frame(15)) {
            cur_obj_shake_screen(SHAKE_POS_SMALL)
        }
        if (cur_obj_init_animation_and_check_if_near_end(4)) {
            o.rawData[oKingBobombUnk100]++
        }
    } else {
        if (o.rawData[oKingBobombUnk100] == 1) {
            cur_obj_init_animation_and_anim_frame(11, 7)
            o.rawData[oKingBobombUnk100] = 2
        } else {
            cur_obj_init_animation_with_sound(11)
        }
        if (o.rawData[oKingBobombUnk108] == 0) {
            o.rawData[oForwardVel] = 3.0
            cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x100)
        } else {
            o.rawData[oForwardVel] = 0.0
            o.rawData[oKingBobombUnk108]--
        }
    }
    if (cur_obj_check_grabbed_mario()) {
        o.rawData[oAction] = 3
    }
    if (mario_is_far_below_object(1200.0)) {
        o.rawData[oAction] = 0
        // stop_background_music(SEQUENCE_ARGS(4, SEQ_EVENT_BOSS))
    }
}

const king_bobomb_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oSubAction] == 0) {
        o.rawData[oForwardVel] = 0.0
        o.rawData[oKingBobombUnk104] = 0
        o.rawData[oKingBobombUnkFC] = 0
        if (o.rawData[oTimer] == 0) {
            cur_obj_play_sound_2(SOUND_OBJ_UNKNOWN3)
        }
        if (cur_obj_init_animation_and_check_if_near_end(0)) {
            o.rawData[oSubAction]++
            cur_obj_init_animation_and_anim_frame(1, 0)
        }
    } else {
        if (o.rawData[oSubAction] == 1) {
            cur_obj_init_animation_with_sound(1)
            o.rawData[oKingBobombUnkFC] += player_performed_grab_escape_action()
            // print_debug_bottom_up("%d", o.rawData[oKingBobombUnkFC])
            if (o.rawData[oKingBobombUnkFC] > 10) {
                o.rawData[oKingBobombUnk88] = 3
                o.rawData[oAction] = 2
                o.rawData[oKingBobombUnk108] = 35
                o.rawData[oInteractStatus] &= ~(INT_STATUS_GRABBED_MARIO)
            } else {
                o.rawData[oForwardVel] = 3.0
                if (o.rawData[oKingBobombUnk104] > 20 && cur_obj_rotate_yaw_toward(0, 0x400)) {
                    o.rawData[oSubAction]++
                    cur_obj_init_animation_and_anim_frame(9, 22)
                }
            }
            o.rawData[oKingBobombUnk104]++
        } else {
            cur_obj_init_animation_with_sound(9)
            if (cur_obj_check_anim_frame(31)) {
                o.rawData[oKingBobombUnk88] = 2
                cur_obj_play_sound_2(SOUND_OBJ_UNKNOWN4)
            } else if (cur_obj_check_if_near_animation_end()) {
                o.rawData[oAction] = 1
                o.rawData[oInteractStatus] &= ~(INT_STATUS_GRABBED_MARIO)
            }
        }
    }
}

const king_bobomb_act_4 = () => { // bobomb been thrown
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oPosY] - o.rawData[oHomeY] > -100.0) { // not thrown off hill
        if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
            o.rawData[oHealth]--

            o.rawData[oForwardVel] = 0.0
            o.rawData[oVelY] = 0.0

            cur_obj_play_sound_2(SOUND_OBJ_KING_BOBOMB)

            if (o.rawData[oHealth] != 0) {
                o.rawData[oAction] = 6
            } else {
                o.rawData[oAction] = 7
            }
        }
    } else if (o.rawData[oSubAction] == 0) {
        if (o.rawData[oMoveFlags] & OBJ_MOVE_ON_GROUND) {
            o.rawData[oForwardVel] = 0.0
            o.rawData[oVelY] = 0.0

            o.rawData[oSubAction]++
        } else if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
            cur_obj_play_sound_2(SOUND_OBJ_KING_BOBOMB)
        }
    } else {
        if (cur_obj_init_animation_and_check_if_near_end(10)) {
            o.rawData[oAction] = 5 // Go back to top of hill
        }

        o.rawData[oSubAction]++
    }
}

const king_bobomb_act_5 = () => { // bobomb returns home
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oSubAction]) {
        case 0:
            if (o.rawData[oTimer] == 0) {
                cur_obj_play_sound_2(SOUND_OBJ_KING_BOBOMB_JUMP)
            }
            o.rawData[oKingBobombUnkF8] = 1
            cur_obj_init_animation_and_extend_if_at_end(8)
            o.rawData[oMoveAngleYaw] = cur_obj_angle_to_home()
            if (o.rawData[oPosY] < o.rawData[oHomeY]) {
                o.rawData[oVelY] = 100.0
            } else {
                arc_to_goal_pos(o.rawData[oHomeX], o.rawData[oPosX], 100.0, -4.0)
                o.rawData[oSubAction]++
            }
            break
        
        case 1:
            cur_obj_init_animation_and_extend_if_at_end(8)
            
            if (o.rawData[oVelY] < 0 && o.rawData[oPosY] < o.rawData[oHomeY]) {
                o.rawData[oPosY] = o.rawData[oHomeY]
                o.rawData[oVelY] = 0
                o.rawData[oForwardVel] = 0
                o.rawData[oGravity] = -4.0

                o.rawData[oKingBobombUnkF8] = 0

                cur_obj_init_animation_with_sound(7)
                cur_obj_play_sound_2(SOUND_OBJ_KING_BOBOMB)
                cur_obj_shake_screen(SHAKE_POS_SMALL)

                o.rawData[oSubAction]++
            }
            break
        
            case 2:
                if (cur_obj_init_animation_and_check_if_near_end(7)) {
                    o.rawData[oSubAction]++
                }
                break

            case 3:
                if (mario_is_far_below_object(1200.0)) {
                    o.rawData[oAction] = 0
                    // stop_background_music(SEQUENCE_ARGS(4, SEQ_EVENT_BOSS))
                }

                if (cur_obj_can_mario_activate_textbox_2(500.0, 100.0)) {
                    o.rawData[oSubAction]++
                }
                break

            case 4:
                if (cur_obj_update_dialog_with_cutscene(MARIO_DIALOG_LOOK_UP, DIALOG_FLAG_TURN_TO_MARIO, CUTSCENE_DIALOG, DIALOG_128)) {
                    o.rawData[oAction] = 2
                }
                break
    }
}

const king_bobomb_act_6 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oSubAction] == 0) {
        if (o.rawData[oTimer] == 0) {
            o.rawData[oKingBobombUnk104] = 0
            cur_obj_play_sound_2(SOUND_OBJ_KING_BOBOMB)
            cur_obj_play_sound_2(SOUND_OBJ2_KING_BOBOMB_DAMAGE)
            cur_obj_shake_screen(SHAKE_POS_SMALL)
            spawn_mist_particles_variable(0, 0, 100.0)
            o.rawData[oInteractType] = INTERACT_DAMAGE
            cur_obj_become_tangible()
        }
        if (cur_obj_init_animation_and_check_if_near_end(2)) {
            o.rawData[oKingBobombUnk104]++
        }
        if (o.rawData[oKingBobombUnk104] > 3) {
            o.rawData[oSubAction]++
        }
    } else if (o.rawData[oSubAction] == 1) {
        if (cur_obj_init_animation_and_check_if_near_end(10)) {
            o.rawData[oSubAction]++
            o.rawData[oInteractType] = INTERACT_GRABBABLE
            cur_obj_become_intangible()
        }
    } else {
        cur_obj_init_animation_with_sound(11)
        if (cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x800) == true) {
            o.rawData[oAction] = 2
        }
    }
}


const king_bobomb_act_7 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_init_animation_with_sound(2)
    if (cur_obj_update_dialog_with_cutscene(MARIO_DIALOG_LOOK_UP, DIALOG_FLAG_TEXT_DEFAULT, CUTSCENE_DIALOG, DIALOG_116)) {
        create_sound_spawner(SOUND_OBJ_KING_WHOMP_DEATH)
        cur_obj_hide()
        cur_obj_become_intangible()
        spawn_mist_particles_variable(0, 0, 200.0)
        spawn_triangle_break_particles(20, MODEL_DIRT_ANIMATION, 3.0, 4)
        cur_obj_shake_screen(SHAKE_POS_SMALL)
        cur_obj_spawn_star_at_y_offset(2000.0, 4500.0, -4500.0, 200.0)
        o.rawData[oAction] = 8
    }
}

const king_bobomb_act_8 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    if (o.rawData[oTimer] == 60) {
        // stop_background_music(SEQUENCE_ARGS(4, SEQ_EVENT_BOSS));
    }
}

const sKingBobombActions = [
    king_bobomb_act_0, king_bobomb_act_1, king_bobomb_act_2, king_bobomb_act_3, king_bobomb_act_4,
    king_bobomb_act_5, king_bobomb_act_6, king_bobomb_act_7, king_bobomb_act_8,
];
const sKingBobombSoundStates = [
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 1, animFrame1: 1, animFrame2: 20, soundMagic: SOUND_OBJ_POUNDING1_HIGHPRIO },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 1, animFrame1: 15, animFrame2: -1, soundMagic: SOUND_OBJ_POUNDING1_HIGHPRIO },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 1, animFrame1: 33, animFrame2: -1, soundMagic: SOUND_OBJ_POUNDING1_HIGHPRIO },
    { playSound: 0, animFrame1: 0, animFrame2: 0, soundMagic: NO_SOUND },
    { playSound: 1, animFrame1: 1, animFrame2: 15, soundMagic: SOUND_OBJ_POUNDING1_HIGHPRIO },
];

const king_bobomb_move = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_update_floor_and_walls();
    if (o.rawData[oKingBobombUnkF8] == 0) {
        cur_obj_move_standard(-78);
    } else {
        cur_obj_move_using_fvel_and_gravity();
    }
    cur_obj_call_action_function(sKingBobombActions);
    // exec_anim_sound_state(sKingBobombSoundStates); // errors in SpawnSound.js: playSound is not able to be read
    if (o.rawData[oDistanceToMario] < 5000.0) {
        cur_obj_enable_rendering();
    } else {
        cur_obj_disable_rendering();
    }
}

export const bhv_king_bobomb_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    let sp34 = 20.0;
    let sp30 = 50.0;
    o.rawData[oInteractionSubtype] |= INT_SUBTYPE_GRABS_MARIO;
    switch (o.rawData[oHeldState]) {
        case HELD_FREE:
            king_bobomb_move();
            break;
        case HELD_HELD:
            cur_obj_unrender_set_action_and_anim(6, 1);
            break;
        case HELD_THROWN:
        case HELD_DROPPED:
            cur_obj_get_thrown_or_placed(sp34, sp30, 4);
            cur_obj_become_intangible();
            o.rawData[oPosY] += 20.0;
            break;
    }
    o.rawData[oInteractStatus] = 0;
}

gLinker.bhv_king_bobomb_loop = bhv_king_bobomb_loop
gLinker.bhv_bobomb_anchor_mario_loop = bhv_bobomb_anchor_mario_loop