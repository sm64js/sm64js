// mr_i.inc.c

import { MODEL_PURPLE_MARBLE } from "../../include/model_ids";
import { ACTIVE_FLAG_DEACTIVATED, ACTIVE_FLAG_IN_DIFFERENT_ROOM, OBJ_MOVE_HIT_WALL, oAction, oAngleVelYaw, oAnimState, oBehParams2ndByte, oDistanceToMario, oFaceAnglePitch, oFaceAngleYaw, oForwardVel, oGraphYOffset, oInteractStatus, oMoveAnglePitch, oMoveAngleYaw, oMoveFlags, oMrIScale, oMrIUnk100, oMrIUnk104, oMrIUnk108, oMrIUnk110, oMrIUnkF4, oMrIUnkFC, oPosX, oPosY, oPosZ, oTimer, oVelY } from "../../include/object_constants"
import { SOUND_OBJ2_MRI_SPINNING, SOUND_OBJ_MRI_DEATH, SOUND_OBJ_MRI_SHOOT } from "../../include/sounds";
import { coss, random_float, random_u16, sins } from "../../utils"
import { INTERACT_DAMAGE, INT_STATUS_INTERACTED } from "../Interaction";
import { abs_angle_diff, cur_obj_become_intangible, cur_obj_call_action_function, cur_obj_move_using_fvel_and_gravity, cur_obj_scale, cur_obj_set_pos_to_home, cur_obj_shake_y, cur_obj_spawn_loot_blue_coin, cur_obj_update_floor_and_walls, obj_angle_to_object, obj_build_transform_from_pos_and_angle, obj_copy_angle, obj_copy_pos_and_angle, obj_mark_for_deletion, obj_set_angle, obj_set_parent_relative_pos, obj_translate_local, obj_turn_toward_object, spawn_mist_particles, spawn_object, obj_set_hitbox } from "../ObjectHelpers";
import { cur_obj_play_sound_2 } from "../SpawnSound";
import { spawn_default_star } from "./spawn_star.inc";

// Particle loop used for MrI + Piranha Plant
const bhv_piranha_particle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    // If object timer has been reset
    if (o.rawData[oTimer] == 0) {
        o.rawData[oVelY] = 20.0 + 20.0 * random_float();
        o.rawData[oForwardVel] = 20.0 + 20.0 * random_float();
        o.rawData[oMoveAngleYaw] = random_u16();
    }
    
    cur_obj_move_using_fvel_and_gravity();
}

/**** PARTICLE ACTS ****/
// Act 0: Wait until object has been interacted with
const mr_i_piranha_particle_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    cur_obj_scale(3.0);
    o.rawData[oForwardVel] = 20.0;
    cur_obj_update_floor_and_walls();

    // If object has been interacted with
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED)
        o.rawData[oAction] = 1;
    // If object has been removed in some way
    else if (o.rawData[oTimer] > 100 || o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL || o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
        obj_mark_for_deletion(o);
        spawn_mist_particles();
    }
}

// Act 1: Spawn particles and remove spawner
const mr_i_piranha_particle_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    obj_mark_for_deletion(o);
    for (let i = 0; i < 10; i++) {
        spawn_object(o, MODEL_PURPLE_MARBLE, gLinker.behaviors.bhvPurpleParticle);
    }
}

const sMrIParticleActions = [
    mr_i_piranha_particle_act_0,
    mr_i_piranha_particle_act_1,
]

const bhv_mr_i_particle_loop = () => {
    cur_obj_call_action_function(sMrIParticleActions);
}

/**** MrI ACTS ****/

const spawn_mr_i_particle = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    let scale = o.gfx.scale[1];

    let particle = spawn_object(o, MODEL_PURPLE_MARBLE, gLinker.behaviors.bhvMrIParticle);
    particle.rawData[oPosX] += sins(o.rawData[oMoveAngleYaw] * 90.0 * scale)
    particle.rawData[oPosY] += 50.0 * scale;
    particle.rawData[oPosZ] += coss(o.rawData[oMoveAngleYaw] * 90.0 * scale)

    cur_obj_play_sound_2(SOUND_OBJ_MRI_SHOOT);
}

const bhv_mr_i_body_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    obj_copy_pos_and_angle(o, o.parentObj);

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        obj_copy_angle(o, o.parentObj);
        obj_set_parent_relative_pos(o, 0, 0, o.gfx.scale[1] * 100.0);
        obj_build_transform_from_pos_and_angle(o, 44, 15);
        obj_translate_local(o, 6, 44);
        o.rawData[oFaceAnglePitch] = o.rawData[oMoveAnglePitch];
        o.rawData[oGraphYOffset] = o.gfx.scale[1] * 100.0;
    }

    if (o.parentObj.rawData[oMrIUnk110] != 0) {
        o.rawData[oAnimState] = -1;
    } else {
        o.rawData[oAnimState]++;
        if (o.rawData[oAnimState] == 15) {
            o.parentObj.rawData[oMrIUnk110] = 0;
        }
    }

    if (o.parentObj.activeFlags == ACTIVE_FLAG_DEACTIVATED) {
        obj_mark_for_deletion(o);
    }
}

const mr_i_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    let scale;
    let sp20;
    let shake;
    let yaw;
    let prevYaw;

    o.rawData[oBehParams2ndByte] != 0 ? scale = 2.0    : scale = 1.0;
    o.rawData[oMrIUnk100]        <  0 ? yaw = 0x1000 : yaw = -0x1000;
    
    let sp2C = (o.rawData[oTimer] + 1) / 96.0;

    if (o.rawData[oTimer] < 64) {
        prevYaw = o.rawData[oMoveAngleYaw];
        o.rawData[oMoveAngleYaw] += yaw * coss(0x4000 * sp2C);

        if (prevYaw < 0 && o.rawData[oMoveAngleYaw] >= 0) cur_obj_play_sound_2(SOUND_OBJ2_MRI_SPINNING);

        o.rawData[oMoveAnglePitch] = (1.0 - coss(0x4000 * sp2C)) * -0x4000;
        cur_obj_shake_y(4.0);
    } else if (o.rawData[oTimer] < 96) {
        if (o.rawData[oTimer] == 64) cur_obj_play_sound_2(SOUND_OBJ_MRI_DEATH);

        shake = (o.rawData[oTimer] - 63) / 32;
        o.rawData[oMoveAngleYaw] += yaw * coss(0x4000 * sp2C);
        o.rawData[oMoveAnglePitch] = (1.0 - coss(0x4000 * sp2C)) * -0x4000;

        cur_obj_shake_y((1.0 - shake) * 4);
        sp20 = coss(0x4000 * shake) * 0.4 + 0.6;
        cur_obj_scale(sp20 * scale);
    } else if (o.rawData[oTimer] < 168) {
        if (o.rawData[oTimer == 104]) {
            cur_obj_become_intangible();
            spawn_mist_particles();
            o.rawData[oMrIScale] = scale * 0.6;

            if (o.rawData[oBehParams2ndByte] != 0) {
                o.rawData[oPosY] += 100.0;
                spawn_default_star(1370, 2000.0, -320.0);
                obj_mark_for_deletion(o);
            } else cur_obj_spawn_loot_blue_coin();
        }

        o.rawData[oMrIScale] -= 0.2 * scale;

        if (o.rawData[oMrIScale] < 0) o.rawData[oMrIScale] = 0;
        cur_obj_scale(o.rawData[oMrIScale]);
    } else obj_mark_for_deletion(o);
}

const mr_i_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    if (o.rawData[oTimer] == 0) {
        if (o.rawData[oBehParams2ndByte] != 0) o.rawData[oMrIUnkF4] = 200;
        else o.rawData[oMrIUnkF4] = 120;
        o.rawData[oMrIUnkFC] = 0;
        o.rawData[oMrIUnk100] = 0;
        o.rawData[oMrIUnk104] = 0;
    }

    let prevAngle = o.rawData[oMoveAngleYaw];
    obj_turn_toward_object(o, gMarioObject, 0x10, 0x800);
    obj_turn_toward_object(o, gMarioObject, 0x0F, 0x400);
    let adjAngle = prevAngle - o.rawData[oMoveAngleYaw];

    if (adjAngle == 0) {
        o.rawData[oMrIUnkFC] = 0;
        o.rawData[oMrIUnk100] = 0;
    } else if (adjAngle > 0) {
        o.rawData[oMrIUnk100] > 0 ? o.rawData[oMrIUnkFC] += adjAngle : o.rawData[oMrIUnkFC] = 0;
        o.rawData[oMrIUnk100] = 0;
    } else {
        o.rawData[oMrIUnk100] > 0 ? o.rawData[oMrIUnkFC] -= adjAngle : o.rawData[oMrIUnkFC] = 0;
        o.rawData[oMrIUnk100] = -1;
    }

    if (o.rawData[oMrIUnkFC] == 0) o.rawData[oMrIUnkF4] = 120;
    if (o.rawData[oMrIUnkFC] > 65536) o.rawData[oAction] = 3;

    o.rawData[oMrIUnkF4]--;

    if (o.rawData[oMrIUnkF4] == 0) {
        o.rawData[oMrIUnkF4] = 120;
        o.rawData[oMrIUnkFC] = 0;
    }

    if (o.rawData[oMrIUnkFC] < 5000) {
        if (o.rawData[oMrIUnk104] == o.rawData[oMrIUnk108]) o.rawData[oMrIUnk110] = 1;

        if (o.rawData[oMrIUnk104] == o.rawData[oMrIUnk108] + 20) {
            spawn_mr_i_particle();
            o.rawData[oMrIUnk104] = 0;
            o.rawData[oMrIUnk108] = random_float() * 50.0 + 50.0;
        }
        o.rawData[oMrIUnk104]++;
    } else {
        o.rawData[oMrIUnk104] = 0;
        o.rawData[oMrIUnk108] = random_float() * 50.0 + 50.0;
    }

    if (o.rawData[oDistanceToMario] > 800.0) o.rawData[oAction] = 1;
}

const mr_i_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    let sp1E = obj_angle_to_object(o, gMarioObject);
    let sp1C = abs_angle_diff(o.rawData[oMoveAngleYaw], sp1E);
    let sp1A = abs_angle_diff(o.rawData[oMoveAngleYaw], gMarioObject.rawData[oFaceAngleYaw]);

    if (o.rawData[oTimer] == 0) {
        cur_obj_become_intangible();
        o.rawData[oMoveAnglePitch] = 0;
        o.rawData[oMrIUnk104] = 30;
        o.rawData[oMrIUnk108] = random_float() * 20.0;
        o.rawData[oMrIUnk108] & 1 ? o.rawData[oAngleVelYaw] = -256 : o.rawData[oAngleVelYaw] = 256;
    }

    if (sp1C < 1024 && sp1A > 0x4000) {
        o.rawData[oDistanceToMario] < 700.0 ? o.rawData[oAction] = 2 : o.rawData[oMrIUnk104]++;
    } else {
        o.rawData[oMoveAngleYaw] += o.rawData[oAngleVelYaw];
        o.rawData[oMrIUnk104] = 30;
    }

    if (o.rawData[oMrIUnk104] == o.rawData[oMrIUnk108] + 60) o.rawData[oMrIUnk110] = 1;

    if (o.rawData[oMrIUnk104] == o.rawData[oMrIUnk108] + 80) {
        o.rawData[oMrIUnk104] = 0;
        o.rawData[oMrIUnk108] = random_float() * 80.0;
        spawn_mr_i_particle();
    }
}

const mr_i_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    obj_set_angle(o, 0, 0, 0);
    cur_obj_scale(o.rawData[oBehParams2ndByte] + 1);

    if (o.rawData[oTimer] == 0) cur_obj_set_pos_to_home();
    if (o.rawData[oDistanceToMario] < 1000.0) o.rawData[oAction] = 1;
}

const sMrIActions = [
    mr_i_act_0,
    mr_i_act_1,
    mr_i_act_2,
    mr_i_act_3,
]

const sMrIHitbox = {
    interactionType: INTERACT_DAMAGE,
    downOffset: 0,
    damageOrCoinValue: 2,
    health: 2,
    numLootCoins: 5,
    radius: 80,
    height: 150,
    hurtboxRadius: 0,
    hurtboxHeight: 0,
}

const bhv_mr_i_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    obj_set_hitbox(o, sMrIHitbox);
    cur_obj_call_action_function(sMrIActions);

    if (o.rawData[oAction] != 3) {
        if (o.rawData[oDistanceToMario] > 3000.0 || o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)
            o.rawData[oAction] = 0;
    }

    o.rawData[oInteractStatus] = 0;
}

gLinker.bhv_piranha_particle_loop = bhv_piranha_particle_loop;
gLinker.bhv_mr_i_particle_loop = bhv_mr_i_particle_loop;
gLinker.bhv_mr_i_body_loop = bhv_mr_i_body_loop;
gLinker.bhv_mr_i_loop = bhv_mr_i_loop;