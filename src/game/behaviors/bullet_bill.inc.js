// bullet_bill.inc.js

import {
    cur_obj_scale, cur_obj_become_tangible, cur_obj_set_pos_to_home, abs_angle_diff, cur_obj_update_floor_and_walls,
    cur_obj_rotate_yaw_toward, cur_obj_play_sound_2, cur_obj_shake_screen, spawn_mist_particles, cur_obj_become_intangible,
    cur_obj_call_action_function, cur_obj_check_interacted
} from "../ObjectHelpers"

import {
    oBulletBillInitialMoveYaw, oMoveAngleYaw, oForwardVel, oFaceAnglePitch, oFaceAngleRoll, oMoveFlags, oAction,
    oAngleToMario, oMoveAngleYaw, oDistanceToMario, oAction, oTimer
} from "../../include/object_constants"

export const bhv_white_puff_smoke_init = () => {
    cur_obj_scale(random_float() * 2 + 2.0);
}

export const bhv_bullet_bill_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oBulletBillInitialMoveYaw] = o.oMoveAngleYaw
}
export const bullet_bill_act_0 = () => {
    cur_obj_become_tangible()

    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oForwardVel] = 0
    o.rawData[oMoveAngleYaw] = o.oBulletBillInitialMoveYaw
    o.rawData[oFaceAnglePitch] = 0
    o.rawData[oFaceAngleRoll] = 0
    o.rawData[oMoveFlags] = 0
    cur_obj_set_pos_to_home()
    o.rawData[oAction] = 1
}

export const bullet_bill_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let sp1E = abs_angle_diff(o.oAngleToMario, o.oMoveAngleYaw)

    if (sp1E < 0x2000 & 400.0 < o.oDistanceToMario & o.oDistanceToMario < 1500.0) {
        o.oAction = 2
    }
}

export const bullet_bill_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.oTimer < 40) {
        o.oForwardVel = 3.0
    } else if (o.oTimer < 50) {
        if (o.oTimer % 2) {
            o.oForwardVel = 3.0
        } else {
            o.oForwardVel = -3.0
        }
    } else {
        if (o.oTimer > 70) {
            cur_obj_update_floor_and_walls()
        }

        spawn_object(o, MODEL_SMOKE, bhvWhitePuffSmoke)
        o.oForwardVel = 30.0

        if (o.oDistanceToMario > 300.0) {
            cur_obj_rotate_yaw_toward(o.oAngleToMario, 0x100);
        }

        if (o.oTimer == 50) {
            cur_obj_play_sound_2(SOUND_OBJ_POUNDING_CANNON);
            cur_obj_shake_screen(SHAKE_POS_SMALL);
        }

        if (o.oTimer > 150 || o.oMoveFlags & OBJ_MOVE_HIT_WALL) {
            o.oAction = 3
            spawn_mist_particles()
        }
    }
}

export const bullet_bill_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.oAction = 0
}

export const bullet_bill_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.oTimer == 0) {
        o.oForwardVel = -30.0;
        cur_obj_become_intangible()
    }

    o.oFaceAnglePitch += 0x1000;
    o.oFaceAngleRoll += 0x1000;
    o.oPosY += 20.0;

    if (o.oTimer > 90) {
        o.oAction = 0;
    }
}

export const sBulletBillActions = [
    bullet_bill_act_0,
    bullet_bill_act_1,
    bullet_bill_act_2,
    bullet_bill_act_3,
    bullet_bill_act_4,
]

export const bhv_bullet_bill_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    cur_obj_call_action_function(sBulletBillActions);
    if (cur_obj_check_interacted()) {
        o.oAction = 4
    }
}