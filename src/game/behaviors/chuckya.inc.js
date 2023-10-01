import { SurfaceCollisionInstance as SurfaceCollision } from "../../engine/SurfaceCollision"
import { ACTIVE_FLAG_DEACTIVATED, HELD_DROPPED, HELD_FREE, HELD_HELD, HELD_THROWN, OBJ_MOVE_HIT_WALL, OBJ_MOVE_LANDED, OBJ_MOVE_MASK_IN_WATER, oAction, oAngleToMario, oChuckyaUnk100, oChuckyaUnk88, oChuckyaUnkFC, oForwardVel, oHeldState, oInteractStatus, oInteractionSubtype, oMoveAngleYaw, oMoveFlags, oPosX, oPosY, oPosZ, oSubAction, oTimer, oVelY } from "../../include/object_constants"
import { SOUND_AIR_CHUCKYA_MOVE, SOUND_OBJ_CHUCKYA_DEATH, SOUND_OBJ_UNKNOWN3, SOUND_OBJ_UNKNOWN4 } from "../../include/sounds"
import { coss, random_float, sins } from "../../utils"
import { INT_STATUS_GRABBED_MARIO, INT_STATUS_MARIO_UNK2, INT_STATUS_MARIO_UNK6, INT_SUBTYPE_GRABS_MARIO } from "../Interaction"
import { abs_angle_diff, cur_obj_angle_to_home, cur_obj_call_action_function, cur_obj_check_anim_frame, cur_obj_get_thrown_or_placed, cur_obj_init_animation_and_check_if_near_end, cur_obj_init_animation_with_sound, cur_obj_lateral_dist_from_mario_to_home, cur_obj_lateral_dist_to_home, cur_obj_move_standard, cur_obj_rotate_yaw_toward, cur_obj_scale, cur_obj_unrender_set_action_and_anim, cur_obj_update_floor_and_walls, obj_angle_to_object, obj_mark_for_deletion, obj_set_gfx_pos_at_obj_pos, obj_spawn_loot_yellow_coins, player_performed_grab_escape_action, spawn_mist_particles_with_sound } from "../ObjectHelpers"
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound"

// MOVE TO METAL_BOX.INC.JS
export const check_if_moving_over_floor = (a0, a1) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let sp24 = {};
    let sp20 = o.rawData[oPosX] + sins(o.rawData[oMoveAngleYaw]) * a1;
    let sp18 = o.rawData[oPosZ] + coss(o.rawData[oMoveAngleYaw]) * a1;
    let floorHeight = SurfaceCollision.find_floor(sp20, o.rawData[oPosY], sp18, sp24);

    return (Math.abs(floorHeight - o.rawData[oPosY]) < a0)
}

export const common_anchor_mario_behavior = (forwardVel, yVel, interactions) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    switch (o.parentObj.rawData[oChuckyaUnk88]) {
        case 1:
            obj_set_gfx_pos_at_obj_pos(gMarioObject, o)
            break

        case 2:
            gMarioObject.rawData[oInteractStatus] |= (INT_STATUS_MARIO_UNK2 + interactions)
            gMarioStates[0].forwardVel = forwardVel
            gMarioStates[0].vel[1] = yVel
            o.parentObj.rawData[oChuckyaUnk88] = 0
            break

        case 3:
            gMarioObject.rawData[oInteractStatus] |= (INT_STATUS_MARIO_UNK2 | INT_STATUS_MARIO_UNK6)
            gMarioStates[0].forwardVel = 10.0
            gMarioStates[0].vel[1] = 10.0
            o.parentObj.rawData[oChuckyaUnk88] = 0
            break
    }

    o.rawData[oMoveAngleYaw] = o.parentObj.rawData[oMoveAngleYaw]

    if (o.parentObj.activeFlags == ACTIVE_FLAG_DEACTIVATED) {
        obj_mark_for_deletion(o)
    }
}

const bhv_chuckya_anchor_mario_loop = () => {
    common_anchor_mario_behavior(40.0, 40.0, INT_STATUS_MARIO_UNK6);
}

export const approach_forward_vel = (forwardVelWrapper, limit, step) => {
    let sp4 = 0;


    if (forwardVelWrapper.forwardVel > limit) {
        forwardVelWrapper.forwardVel -= step;
        if (forwardVelWrapper.forwardVel < limit) {
            forwardVelWrapper.forwardVel = limit;
        }
    } else if (forwardVelWrapper.forwardVel < limit) {
        forwardVelWrapper.forwardVel += step;
        if (forwardVelWrapper.forwardVel > limit) {
            forwardVelWrapper.forwardVel = limit;
        }
    } else sp4 = 1;

    return sp4;
}

const chuckya_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;
    
    let sp3C;
    let sp28 = o.rawData[oSubAction];
    const wrapper = {}

    if (o.rawData[oTimer] == 0) o.rawData[oChuckyaUnkFC] = 0;

    o.rawData[oAngleToMario] = obj_angle_to_object(o, gMarioObject);

    switch (sp28) {
        case 0:
            o.rawData[oForwardVel] = 0.0;
            if (cur_obj_lateral_dist_from_mario_to_home() < 2000.0) {
                cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x400);
                if (o.rawData[oChuckyaUnkFC] > 40 || abs_angle_diff(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario]) < 0x1000) o.rawData[oSubAction] = 1;
            } else o.rawData[oSubAction] = 3;

            break;
        
        case 1:
            wrapper.forwardVel = o.rawData[oForwardVel];
            approach_forward_vel(wrapper, 30.0, 4.0);
            o.rawData[oForwardVel] = wrapper.forwardVel;

            if (abs_angle_diff(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario]) > 0x4000) o.rawData[oSubAction] = 2;
            if (cur_obj_lateral_dist_from_mario_to_home() > 2000.0) o.rawData[oSubAction] = 3;
            break;

        case 2:
            wrapper.forwardVel = o.rawData[oForwardVel];
            approach_forward_vel(wrapper, 0.0, 4.0);
            o.rawData[oForwardVel] = wrapper.forwardVel;

            if (o.rawData[oChuckyaUnkFC] > 48) o.rawData[oSubAction] = 0;
            break;

        case 3:
            if (cur_obj_lateral_dist_to_home() < 500.0) o.rawData[oForwardVel] = 0.0;
            else {
                wrapper.forwardVel = o.rawData[oForwardVel];
                approach_forward_vel(wrapper, 10.0, 4.0);
                o.rawData[oForwardVel] = wrapper.forwardVel;

                o.rawData[oAngleToMario] = cur_obj_angle_to_home();
                cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x800);
            }

            if (cur_obj_lateral_dist_from_mario_to_home() < 1900.0) o.rawData[oSubAction] = 0;
            break;
    }

    if (o.rawData[oSubAction] != sp28) o.rawData[oChuckyaUnkFC] = 0;
    else o.rawData[oChuckyaUnkFC]++;

    cur_obj_init_animation_with_sound(4);

    if (o.rawData[oForwardVel] > 1.0) cur_obj_play_sound_1(SOUND_AIR_CHUCKYA_MOVE);

    // print_debug_bottom_up(`fg ${sp3C}`)
    // print_debug_bottom_up(`sp ${o.rawData[oForwardVel]}`)
}

const chuckya_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    if (o.rawData[oSubAction] == 0) {
        if (cur_obj_init_animation_and_check_if_near_end(0)) o.rawData[oSubAction]++;
        o.rawData[oChuckyaUnkFC] = random_float() * 30.0 + 10.0;
        o.rawData[oChuckyaUnk100] = 0;
        o.rawData[oForwardVel] = 0.0;
    } else if (o.rawData[oSubAction] == 1) {
        o.rawData[oChuckyaUnk100] += player_performed_grab_escape_action();
        // print_debug_bottom_up(`${o.rawData[oChuckyaUnk100]}`)
        if (o.rawData[oChuckyaUnk100] > 10) {
            o.rawData[oChuckyaUnk88] = 3;
            o.rawData[oAction] = 3;
            o.rawData[oInteractStatus] &= ~INT_STATUS_GRABBED_MARIO;
        } else {
            cur_obj_init_animation_with_sound(1);
            o.rawData[oChuckyaUnkFC]--;
            if (o.rawData[oChuckyaUnkFC] < 0 && (check_if_moving_over_floor(50.0, 150.0) || o.rawData[oChuckyaUnkFC] < -16)) {
                o.rawData[oSubAction]++;
            }
        }
    } else {
        cur_obj_init_animation_with_sound(3);
        if (cur_obj_check_anim_frame(18)) {
            cur_obj_play_sound_2(SOUND_OBJ_UNKNOWN4);
            o.rawData[oChuckyaUnk88] = 2;
            o.rawData[oAction] = 3;
            o.rawData[oInteractStatus] &= ~INT_STATUS_GRABBED_MARIO;
        }
    }
}

const chuckya_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oMoveFlags] & (OBJ_MOVE_HIT_WALL | OBJ_MOVE_MASK_IN_WATER | OBJ_MOVE_LANDED)) {
        obj_mark_for_deletion(o);
        obj_spawn_loot_yellow_coins(o, 5, 20.0);
        spawn_mist_particles_with_sound(SOUND_OBJ_CHUCKYA_DEATH);
    }
}

const chuckya_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oForwardVel] = 0.0;
    o.rawData[oVelY] = 0.0;
    cur_obj_init_animation_with_sound(4);
    if (o.rawData[oTimer] > 100) o.rawData[oAction] = 0;
}

const sChuchyaActions = [ chuckya_act_0, chuckya_act_1, chuckya_act_2, chuckya_act_3 ];

const chuckya_move = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    cur_obj_update_floor_and_walls();
    cur_obj_call_action_function(sChuchyaActions);
    cur_obj_move_standard(-30);
    if (o.rawData[oInteractStatus] & INT_STATUS_GRABBED_MARIO) {
        o.rawData[oAction] = 1;
        o.rawData[oChuckyaUnk88] = 1;
        cur_obj_play_sound_2(SOUND_OBJ_UNKNOWN3);
    }
}

const bhv_chuckya_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let forwardVel = 20.0;
    let velY = 50.0;

    cur_obj_scale(2.0);
    o.rawData[oInteractionSubtype] |= INT_SUBTYPE_GRABS_MARIO;

    switch (o.rawData[oHeldState]) {
        case HELD_FREE:
            chuckya_move();
            break;
        case HELD_HELD:
            cur_obj_unrender_set_action_and_anim(2, 0);
            break;
        case HELD_THROWN:
        case HELD_DROPPED:
            cur_obj_get_thrown_or_placed(forwardVel, velY, 2);
            break;
    }

    o.rawData[oInteractStatus] = 0;

    // print_debug_bottom_up(`md ${o.rawData[oAction]}`)
}

gLinker.bhv_chuckya_anchor_mario_loop = bhv_chuckya_anchor_mario_loop
gLinker.bhv_chuckya_loop = bhv_chuckya_loop