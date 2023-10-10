import {
    cur_obj_has_behavior, spawn_object_relative, cur_obj_update_floor_and_walls,
    cur_obj_call_action_function, cur_obj_move_standard, obj_has_behavior, obj_scale, 
    obj_copy_behavior_params, cur_obj_hide, spawn_mist_particles, cur_obj_become_tangible,
    obj_set_angle, cur_obj_nearest_object_with_behavior, cur_obj_unhide, cur_obj_set_pos_to_home,
    cur_obj_become_intangible, cur_obj_scale, obj_mark_for_deletion, spawn_object, cur_obj_angle_to_home,
    cur_obj_rotate_yaw_toward, cur_obj_move_using_fvel_and_gravity, abs_angle_diff,
    cur_obj_lateral_dist_from_mario_to_home, mario_is_in_air_action, increment_velocity_toward_range,
    cur_obj_set_vel_from_mario_vel, cur_obj_disable, cur_obj_set_pos_to_home_with_debug,
    cur_obj_forward_vel_approach_upward, obj_set_hitbox

} from "../ObjectHelpers"

import {
    oForwardVel, oVelY, oGravity, oBooInitialMoveYaw, oMoveAngleYaw, oRoom, oDistanceToMario,
    oBooTargetOpacity, oOpacity, oBooBaseScale, oBooOscillationTimer, oAngleToMario, oFaceAngleYaw,
    oMerryGoRoundBooManagerNumBoosKilled, oInteractStatus, oGraphYOffset, oBehParams, oAction,
    oMerryGoRoundBooManagerNumBoosSpawned, oHomeX, oHomeY, oHomeZ, oBehParams2ndByte, oPosY, oTimer,
    oFlags, oBooMoveYawBeforeHit, oBooMoveYawDuringHit, oBooDeathStatus, oFaceAngleRoll,
    oMerryGoRoundStopped, oBooParentBigBoo, oBigBooNumMinionBoosKilled, oHealth, oInteractType,
    oBooNegatedAggressiveness, oBooTurningSpeed, oWallHitboxRadius, oFaceAnglePitch, oPosZ, 

    ACTIVE_FLAG_IN_DIFFERENT_ROOM, ACTIVE_FLAG_DEACTIVATED, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, oMoveFlags, OBJ_MOVE_HIT_WALL, ACTIVE_FLAG_MOVE_THROUGH_GRATE
} from "../../include/object_constants"

import {
    bhvGhostHuntBoo, bhvMerryGoRoundBooManager, bhvBalconyBigBoo, bhvMerryGoRoundBigBoo,
    bhvMerryGoRoundBoo, bhvGhostHuntBigBoo, bhvBooCage, bhvBoo
} from "../BehaviorData"

import {
    SOUND_OBJ_BOO_LAUGH_LONG, SOUND_ENV_ELEVATOR2, SOUND_GENERAL_UNKNOWN4_LOWPRIO,
    SOUND_OBJ_BOO_LAUGH_SHORT, SOUND_OBJ_BOO_BOUNCE_TOP, SOUND_OBJ_DYING_ENEMY1, SOUND_OBJ_THWOMP
} from "../../include/sounds"

import { MODEL_BOO, MODEL_HAUNTED_CAGE } from "../../include/model_ids"
import { TIME_STOP_MARIO_OPENED_DOOR, gDebugInfo } from "../ObjectListProcessor"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { random_u16, coss, sins, random_float } from "../../utils"
import { play_puzzle_jingle } from "../../audio/external"
import { create_sound_spawner, cur_obj_play_sound_2 } from "../SpawnSound"
import { CameraInstance as Camera } from "../Camera"
import {
    INTERACT_BOUNCE_TOP, INT_STATUS_INTERACTED, INT_STATUS_WAS_ATTACKED, ATTACK_FROM_ABOVE, INT_STATUS_ATTACK_MASK
} from "../Interaction"

// Boo obj const
export const BOO_DEATH_STATUS_ALIVE = 0
export const BOO_DEATH_STATUS_DYING = 1
export const BOO_DEATH_STATUS_DEAD =  2

const BOO_NOT_ATTACKED =       0
const BOO_ATTACKED =           1
const BOO_BOUNCED_ON =        -1

const SPAWN_CASTLE_BOO_STAR_REQUIREMENT = 12

const sBooGivingStarHitbox = {
    interactType:       0,
    downOffset:         0,
    damageOrCoinValue:  3,
    health:             3,
    numLootCoins:       0,
    radius:             140,
    height:             80,
    hurtboxRadius:      40,
    hurtboxHeight:      60,
}

const sBooHitRotations = [
    6047, 5664, 5292, 4934, 4587, 4254, 3933, 3624, 3329, 3046, 2775,
    2517, 2271, 2039, 1818, 1611, 1416, 1233, 1063, 906,  761,  629,
    509,  402,  308,  226,  157,  100,  56,   25,   4,    0,
]

const sCourtyardBooTripletPositions = [
    [ 0, 50, 0 ],
    [ 210, 110, 210 ],
    [ -210, 70, -210 ],
]

const boo_stop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oForwardVel] = 0.0
    o.rawData[oVelY] = 0.0
    o.rawData[oGravity] = 0.0
}

export const bhv_boo_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oBooInitialMoveYaw] = o.rawData[oMoveAngleYaw]
}

const boo_should_be_stopped = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (cur_obj_has_behavior(bhvMerryGoRoundBigBoo) || cur_obj_has_behavior(bhvMerryGoRoundBoo)) {
        if (!ObjectListProc.gMarioOnMerryGoRound) {
            return true
        } else {
            return false
        }
    } else {
        if (o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
            return true
        }

        if (o.rawData[oRoom] == 10 && (ObjectListProc.gTimeStopState & TIME_STOP_MARIO_OPENED_DOOR)) {
            return true
        }
    }

    return false
}

const boo_should_be_active = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let activationRadius = cur_obj_has_behavior(bhvBalconyBigBoo)?5000.0:1500.0

    if (cur_obj_has_behavior(bhvMerryGoRoundBigBoo) || cur_obj_has_behavior(bhvMerryGoRoundBoo)) {
        return Boolean(ObjectListProc.gMarioOnMerryGoRound)
    } else if (o.rawData[oRoom] == -1) {
        if (o.rawData[oDistanceToMario] < activationRadius) {
            return true
        }
    } else if (!boo_should_be_stopped()) {
        if (o.rawData[oDistanceToMario] < activationRadius && (o.rawData[oRoom] == ObjectListProc.gMarioCurrentRoom || ObjectListProc.gMarioCurrentRoom == 0)) {
            return true
        }
    }

    return false
}

export const bhv_courtyard_boo_triplet_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (LevelUpdate.gHudDisplay.stars < SPAWN_CASTLE_BOO_STAR_REQUIREMENT) {
        obj_mark_for_deletion(o);
    } else {
        for (let i = 0; i < 3; i++) {
            let boo = spawn_object_relative(
                1, sCourtyardBooTripletPositions[i][0], sCourtyardBooTripletPositions[i][1],
                sCourtyardBooTripletPositions[i][2], o, MODEL_BOO, bhvGhostHuntBoo);

            boo.rawData[oMoveAngleYaw] = random_u16();
        }
    }
}

const boo_approach_target_opacity_and_update_scale = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oBooTargetOpacity] != o.rawData[oOpacity]) {
        if (o.rawData[oBooTargetOpacity] > o.rawData[oOpacity]) {
            o.rawData[oOpacity] += 20

            if (o.rawData[oBooTargetOpacity] < o.rawData[oOpacity]) {
                o.rawData[oOpacity] = o.rawData[oBooTargetOpacity]
            }
        } else {
            o.rawData[oOpacity] -= 20;

            if (o.rawData[oBooTargetOpacity] > o.rawData[oOpacity]) {
                o.rawData[oOpacity] = o.rawData[oBooTargetOpacity]
            }
        }
    }

    let scale = (o.rawData[oOpacity] / 255.0 * 0.4 + 0.6) * o.rawData[oBooBaseScale]
    obj_scale(o, scale) // why no cur_obj_scale? was cur_obj_scale written later?
}

const boo_oscillate = (ignoreOpacity) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oFaceAnglePitch] = sins(o.rawData[oBooOscillationTimer]) * 0x400

    if (o.rawData[oOpacity] == 255 || ignoreOpacity == true) {
        o.gfx.scale[0] = sins(o.rawData[oBooOscillationTimer]) * 0.08 + o.rawData[oBooBaseScale]
        o.gfx.scale[1] = -sins(o.rawData[oBooOscillationTimer]) * 0.08 + o.rawData[oBooBaseScale]
        o.gfx.scale[2] = o.gfx.scale[0];
        o.rawData[oGravity] = sins(o.rawData[oBooOscillationTimer]) * o.rawData[oBooBaseScale];
        o.rawData[oBooOscillationTimer] += 0x400;
    }
}

const boo_vanish_or_appear = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let relativeAngleToMario = abs_angle_diff(o.rawData[oAngleToMario], o.rawData[oFaceAngleYaw])
    let relativeMarioFaceAngle = abs_angle_diff(o.rawData[oMoveAngleYaw], gMarioObject.rawData[oFaceAngleYaw])
    let relativeAngleToMarioThreshhold = 0x1568
    let relativeMarioFaceAngleThreshhold = 0x6B58
    let doneAppearing = false

    o.rawData[oVelY] = 0.0

     if (relativeAngleToMario > relativeAngleToMarioThreshhold || relativeMarioFaceAngle <  relativeMarioFaceAngleThreshhold) {
        if (o.rawData[oOpacity] == 40) {
            o.rawData[oBooTargetOpacity] = 255
            cur_obj_play_sound_2(SOUND_OBJ_BOO_LAUGH_LONG)
        }
        
        if (o.rawData[oOpacity] > 180) {
            doneAppearing = true
        }
     } else if (o.rawData[oOpacity] == 255) {
        o.rawData[oBooTargetOpacity] = 40
     }
    return doneAppearing
}

const boo_set_move_yaw_for_during_hit = (hurt) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    cur_obj_become_intangible()

    o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
    o.rawData[oBooMoveYawBeforeHit] = o.rawData[oMoveAngleYaw]

    if (hurt) {
        o.rawData[oBooMoveYawDuringHit] = gMarioObject.rawData[oMoveAngleYaw]
    } else if (coss(o.rawData[oMoveAngleYaw] - o.rawData[oAngleToMario]) < 0) {
        o.rawData[oBooMoveYawDuringHit] = o.rawData[oMoveAngleYaw]
    } else {
        o.rawData[oBooMoveYawDuringHit] = (o.rawData[oMoveAngleYaw] + 0x8000)
    }
}

const boo_move_during_hit = (roll, fVel) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let oscillationVel = o.rawData[oTimer] * 0x800 + 0x800

    o.rawData[oForwardVel] = fVel
    o.rawData[oVelY] = coss(oscillationVel)
    o.rawData[oMoveAngleYaw] = o.rawData[oBooMoveYawBeforeHit]

    if (roll) {
        o.rawData[oFaceAngleYaw]  += sBooHitRotations[o.rawData[oTimer]]
        o.rawData[oFaceAngleRoll] += sBooHitRotations[o.rawData[oTimer]]
    }
}

const big_boo_shake_after_hit = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let oscillationVel = o.rawData[oTimer] * 0x2000 - 0x3E000;
    o.rawData[oFaceAngleYaw] += coss(oscillationVel) * 0x400
}

const boo_reset_after_hit = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oMoveAngleYaw] = o.rawData[oBooMoveYawBeforeHit]
    o.rawData[oFlags] |= OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
    o.rawData[oInteractStatus] = 0
}

const boo_update_after_bounced_on = (a0) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    boo_stop()

    if (o.rawData[oTimer] == 0) {
        boo_set_move_yaw_for_during_hit(false)
    }

    if (o.rawData[oTimer] < 32) {
        boo_move_during_hit(false, sBooHitRotations[o.rawData[oTimer]] / 5000.0 * a0)
    } else {
        cur_obj_become_tangible()
        boo_reset_after_hit()
        o.rawData[oAction] = 1
        return true
    }

    return false
}

const big_boo_update_during_nonlethal_hit = (a0) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    boo_stop()
    if (o.rawData[oTimer] == 0) {
        boo_set_move_yaw_for_during_hit(true)
    }

    if (o.rawData[oTimer] < 32) {
        boo_move_during_hit(true, sBooHitRotations[o.rawData[oTimer]] / 5000.0 * a0);
    } else if (o.rawData[oTimer] < 48) {
        big_boo_shake_after_hit();
    } else {
        cur_obj_become_tangible();
        boo_reset_after_hit();
        o.rawData[oAction] = 1;

        return true;
    }

    return false;
}

const boo_update_during_death = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let parentBigBoo

    if (o.rawData[oTimer] == 0) {
        o.rawData[oForwardVel] = 40.0
        o.rawData[oMoveAngleYaw] = gMarioObject.rawData[oMoveAngleYaw]
        o.rawData[oBooDeathStatus] = BOO_DEATH_STATUS_DYING
        o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
    } else {
        if (o.rawData[oTimer] == 5) {
            o.rawData[oBooTargetOpacity] = 0
        }

        if (o.rawData[oTimer] > 30 || o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
            spawn_mist_particles()
            o.rawData[oBooDeathStatus] = BOO_DEATH_STATUS_DEAD

            if (o.rawData[oBooParentBigBoo != null]) {
                parentBigBoo = o.rawData[oBooParentBigBoo]
                if (!cur_obj_has_behavior(bhvBoo)) {
                    parentBigBoo.rawData[oBigBooNumMinionBoosKilled]++
                }
            }
            
            return true
        }
    }

    o.rawData[oVelY] = 5.0
    o.rawData[oFaceAngleRoll] += 0x800;
    o.rawData[oFaceAngleYaw] += 0x800;
}

const obj_has_attack_type = (attackType) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if ((o.rawData[oInteractStatus] & INT_STATUS_ATTACK_MASK) == attackType) {
        return true;
    } else {
        return false;
    }
}

const boo_get_attack_status = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    let attackStatus = BOO_NOT_ATTACKED;

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if ((o.rawData[oInteractStatus] & INT_STATUS_WAS_ATTACKED) && !obj_has_attack_type(ATTACK_FROM_ABOVE)) {
            cur_obj_become_intangible();

            o.rawData[oInteractStatus] = 0;

            cur_obj_play_sound_2(SOUND_OBJ_BOO_LAUGH_SHORT);

            attackStatus = BOO_ATTACKED;
        } else {
            cur_obj_play_sound_2(SOUND_OBJ_BOO_BOUNCE_TOP);

            o.rawData[oInteractStatus] = 0;

            attackStatus = BOO_BOUNCED_ON;
        }
    }

    return attackStatus;
}

const boo_chase_mario = (a0, a1, a2) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let sp1A

    if (boo_vanish_or_appear()) {
        o.rawData[oInteractType] = INTERACT_BOUNCE_TOP;

        if (cur_obj_lateral_dist_from_mario_to_home() > 1500.0) {
            sp1A = cur_obj_angle_to_home();
        } else {
            sp1A = o.rawData[oAngleToMario];
        }

        cur_obj_rotate_yaw_toward(sp1A, a1);
        o.rawData[oVelY] = 0;

        if (!mario_is_in_air_action()) {
            let sp1C = o.rawData[oPosY] - gMarioObject.rawData[oPosY];
            if (a0 < sp1C && sp1C < 500.0) {
                o.rawData[oVelY] = increment_velocity_toward_range(o.rawData[oPosY], gMarioObject.rawData[oPosY] + 50.0, 10.0, 2.0);
            }
        }

        cur_obj_set_vel_from_mario_vel(10.0 - o.rawData[oBooNegatedAggressiveness], a2);

        if (o.rawData[oForwardVel] != 0) {
            boo_oscillate(false);
        }
    } else {
        o.rawData[oInteractType] = 0;
        boo_stop();
    }
}

const boo_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.activeFlags |= ACTIVE_FLAG_MOVE_THROUGH_GRATE;

    if (o.rawData[oBehParams2ndByte] == 2) {
        o.rawData[oRoom] = 10;
    }

    cur_obj_set_pos_to_home();
    o.rawData[oMoveAngleYaw] = o.rawData[oBooInitialMoveYaw];
    boo_stop();

    o.rawData[oBooParentBigBoo] = cur_obj_nearest_object_with_behavior(o, bhvGhostHuntBigBoo);
    o.rawData[oBooBaseScale] = 1.0;
    o.rawData[oBooTargetOpacity] = 255;

    if (boo_should_be_active()) {
        // Condition is met if the object is bhvBalconyBigBoo or bhvMerryGoRoundBoo
        if (o.rawData[oBehParams2ndByte] == 2) {
            o.rawData[oBooParentBigBoo] = null;
            o.rawData[oAction] = 5;
        } else {
            o.rawData[oAction] = 1;
        }
    }
}

const boo_act_5 = () => {
    if (o.rawData[oTimer] < 30) {
        o.rawData[oVelY] = 0;
        o.rawData[oForwardVel] = 13.0;
        boo_oscillate(false);
        o.rawData[oWallHitboxRadius] = 0;
    } else {
        o.rawData[oAction] = 1;
        o.rawData[oWallHitboxRadius] = 30.0;
    }
}

const boo_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        o.rawData[oBooNegatedAggressiveness] = -random_float() * 5.0;
        o.rawData[oBooTurningSpeed] = random_float() * 128.0;
    }

    boo_chase_mario(-100.0, o.rawData[oBooTurningSpeed] + 0x180, 0.5);

    let attackStatus = boo_get_attack_status();

    if (boo_should_be_stopped()) {
        o.rawData[oAction] = 0;
    }

    if (attackStatus == BOO_BOUNCED_ON) {
        o.rawData[oAction] = 2;
    }

    if (attackStatus == BOO_ATTACKED) {
        o.rawData[oAction] = 3;
    }

    if (attackStatus == BOO_ATTACKED) {
        create_sound_spawner(SOUND_OBJ_DYING_ENEMY1);
    }
}

const boo_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (boo_update_after_bounced_on(20.0)) {
        o.rawData[oAction] = 1;
    }
}

const boo_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (boo_update_during_death()) {
        if (o.rawData[oBehParams2ndByte] != 0) {
            obj_mark_for_deletion(o);
        } else {
            o.rawData[oAction] = 4;
            cur_obj_disable();
        }
    }
}

const boo_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let dialogID;

    // If there are no remaining "minion" boos, show the dialog of the Big Boo
    //if (cur_obj_nearest_object_with_behavior(o, bhvGhostHuntBoo) == null) {
    //    dialogID = DIALOG_108;
    //} else {
    //    dialogID = DIALOG_107;
    //}

    //if (cur_obj_update_dialog(MARIO_DIALOG_LOOK_UP, DIALOG_FLAG_TEXT_DEFAULT, dialogID, 0)) {
        create_sound_spawner(SOUND_OBJ_DYING_ENEMY1);
        obj_mark_for_deletion(o);

    //    if (dialogID == DIALOG_108) { // If the Big Boo should spawn, play the jingle
    //        play_puzzle_jingle();
    //    }
    //}
}

const sBooActions = [
    boo_act_0,
    boo_act_1,
    boo_act_2,
    boo_act_3,
    boo_act_4,
    boo_act_5,
]

export const bhv_boo_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_update_floor_and_walls()
    cur_obj_call_action_function(sBooActions)
    cur_obj_move_standard(78)
    boo_approach_target_opacity_and_update_scale()

    if (obj_has_behavior(o.parentObj, bhvMerryGoRoundBooManager) && o.activeFlags == ACTIVE_FLAG_DEACTIVATED) {
        o.parentObj.rawData[oMerryGoRoundBooManagerNumBoosKilled]++
    }

    o.rawData[oInteractStatus] = 0
}

const big_boo_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (cur_obj_has_behavior(bhvBalconyBigBoo)) {
        obj_set_secondary_camera_focus();
        // number of killed boos set > 5 so that boo always loads
        // redundant? this is also done in behavior_data.s
        o.rawData[oBigBooNumMinionBoosKilled] = 10;
    }

    o.rawData[oBooParentBigBoo] = null;
    if (boo_should_be_active() && o.rawData[oBigBooNumMinionBoosKilled] >= gDebugInfo[5][0] + 5) {
        o.rawData[oAction] = 1;

        cur_obj_set_pos_to_home();
        o.rawData[oMoveAngleYaw] = o.rawData[oBooInitialMoveYaw];

        cur_obj_unhide();

        o.rawData[oBooTargetOpacity] = 255;
        o.rawData[oBooBaseScale] = 3.0;
        o.rawData[oHealth] = 3;

        cur_obj_scale(3.0);
        cur_obj_become_tangible();
    } else {
        cur_obj_hide();
        cur_obj_become_intangible();
        boo_stop();
    }
}

const big_boo_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    let sp22;
    let sp1C;

    if (o.rawData[oHealth] == 3) {
        sp22 = 0x180; sp1C = 0.5;
    } else if (o.rawData[oHealth] == 2) {
        sp22 = 0x240; sp1C = 0.6;
    } else {
        sp22 = 0x300; sp1C = 0.8;
    }

    boo_chase_mario(-100.0, sp22, sp1C);

    let attackStatus = boo_get_attack_status();

    // redundant; this check is in boo_should_be_stopped
    if (cur_obj_has_behavior(bhvMerryGoRoundBigBoo)) {
        if (!ObjectListProc.gMarioOnMerryGoRound) {
            o.rawData[oAction] = 0;
        }
    } else if (boo_should_be_stopped()) {
        o.rawData[oAction] = 0;
    }

    if (attackStatus == BOO_BOUNCED_ON) {
        o.rawData[oAction] = 2;
    }

    if (attackStatus == BOO_ATTACKED) {
        o.rawData[oAction] = 3;
    }

    if (attackStatus == BOO_ATTACKED) {
        create_sound_spawner(SOUND_OBJ_THWOMP);
    }
}

const big_boo_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (boo_update_after_bounced_on(20.0)) {
        o.rawData[oAction] = 1;
    }
}

const big_boo_spawn_ghost_hunt_star = () => {
    //spawn_default_star(980.0, 1100.0, 250.0)
}

const big_boo_spawn_balcony_star = () => {
    //spawn_default_star(700.0, 3200.0, 1900.0)
}

const big_boo_spawn_merry_go_round_star = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    //spawn_default_star(-1600.0, -2100.0, 205.0)

    let merryGoRound = cur_obj_nearest_object_with_behavior(o, gLinker.behaviors.bhvMerryGoRound);

    if (merryGoRound != null) {
        merryGoRound.rawData[oMerryGoRoundStopped] = true;
    }
}

const big_boo_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        o.rawData[oHealth]--
    }

    if (o.rawData[oHealth] == 0) {
        if (boo_update_during_death()) {
            cur_obj_disable();

            o.rawData[oAction] = 4;

            obj_set_angle(o, 0, 0, 0);

            if (o.rawData[oBehParams2ndByte] == 0) {
                big_boo_spawn_ghost_hunt_star();
            } else if (o.rawData[oBehParams2ndByte] == 1) {
                big_boo_spawn_merry_go_round_star();
            } else {
                big_boo_spawn_balcony_star();
            }
        }
    } else {
        if (o.rawData[oTimer] == 0) {
            spawn_mist_particles();
            o.rawData[oBooBaseScale] -= 0.5;
        }

        if (big_boo_update_during_nonlethal_hit(40.0)) {
            o.rawData[oAction] = 1;
        }
    }
}

const big_boo_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        o.rawData[oHealth]--;
    }

    if (o.rawData[oHealth] == 0) {
        if (boo_update_during_death()) {
            cur_obj_disable();

            o.rawData[oAction] = 4;

            obj_set_angle(o, 0, 0, 0);

            if (o.rawData[oBehParams2ndByte] == 0) {
                big_boo_spawn_ghost_hunt_star();
            } else if (o.rawData[oBehParams2ndByte] == 1) {
                big_boo_spawn_merry_go_round_star();
            } else {
                big_boo_spawn_balcony_star();
            }
        }
    } else {
        if (o.rawData[oTimer] == 0) {
            spawn_mist_particles();
            o.rawData[oBooBaseScale] -= 0.5;
        }

        if (big_boo_update_during_nonlethal_hit(40.0)) {
            o.rawData[oAction] = 1;
        }
    }
}

const sBooGivingStarActions = [
    big_boo_act_0,
    big_boo_act_1,
    big_boo_act_2,
    big_boo_act_3,
    big_boo_act_4,
]

export const bhv_big_boo_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    obj_set_hitbox(o, sBooGivingStarHitbox)

    o.rawData[oGraphYOffset] = o.rawData[oBooBaseScale] * 60.0

    cur_obj_update_floor_and_walls()
    cur_obj_call_action_function(sBooGivingStarActions)
    cur_obj_move_standard(78)
    boo_approach_target_opacity_and_update_scale()

    o.rawData[oInteractStatus] = 0
}

const boo_with_cage_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oBooParentBigBoo] = null;
    o.rawData[oBooTargetOpacity] = 255;
    o.rawData[oBooBaseScale] = 2.0;

    cur_obj_scale(2.0);
    cur_obj_become_tangible();

    if (boo_should_be_active()) {
        o.rawData[oAction] = 1;
    }
}

const boo_with_cage_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    boo_chase_mario(100.0, 512, 0.5);

    let attackStatus = boo_get_attack_status();

    if (boo_should_be_stopped()) {
        o.rawData[oAction] = 0;
    }

    if (attackStatus == BOO_BOUNCED_ON) {
        o.rawData[oAction] = 2;
    }

    if (attackStatus == BOO_ATTACKED) {
        o.rawData[oAction] = 3;
    }
}

const boo_with_cage_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (boo_update_after_bounced_on(20.0)) {
        o.rawData[oAction] = 1
    }
}

const boo_with_cage_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (boo_update_during_death()) {
        obj_mark_for_deletion(o)
    }
}

export const bhv_boo_with_cage_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (LevelUpdate.gHudDisplay.stars < SPAWN_CASTLE_BOO_STAR_REQUIREMENT) {
        obj_mark_for_deletion(o);
    } else {
        let cage = spawn_object(o, MODEL_HAUNTED_CAGE, bhvBooCage);
        cage.oBehParams = o.rawData[oBehParams]
    }
}

const sBooWithCageActions = [
    boo_with_cage_act_0,
    boo_with_cage_act_1,
    boo_with_cage_act_2,
    boo_with_cage_act_3,
]

export const bhv_boo_with_cage_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    //PARTIAL_UPDATE

    cur_obj_update_floor_and_walls();
    cur_obj_call_action_function(sBooWithCageActions);
    cur_obj_move_standard(78);

    boo_approach_target_opacity_and_update_scale();

    o.rawData[oInteractStatus] = 0
}

export const bhv_merry_go_round_boo_manager_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case 0:
            if (o.rawData[oDistanceToMario] < 1000.0) {
                if (o.rawData[oMerryGoRoundBooManagerNumBoosKilled] < 5) {
                    if (o.rawData[oMerryGoRoundBooManagerNumBoosSpawned] != 5) {
                        if (o.rawData[oMerryGoRoundBooManagerNumBoosSpawned] - o.rawData[oMerryGoRoundBooManagerNumBoosKilled] < 2) {
                            spawn_object(o, MODEL_BOO, bhvMerryGoRoundBoo);
                            o.rawData[oMerryGoRoundBooManagerNumBoosSpawned]++;
                        }
                    }

                    o.rawData[oAction]++
                }

                if (o.rawData[oMerryGoRoundBooManagerNumBoosKilled] >= 5) {
                    let boo = spawn_object(o, MODEL_BOO, bhvMerryGoRoundBigBoo);
                    obj_copy_behavior_params(boo, o);

                    o.rawData[oAction] = 2

                    play_puzzle_jingle();
                }
            }

            break

        case 1:
            if (o.rawData[oTimer] > 60) {
                o.rawData[oAction] = 0
            }

            break

        case 2:
            break
    }
}

export const obj_set_secondary_camera_focus = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    Camera.gSecondCameraFocus = o
}

export const bhv_animated_texture_loop = () => {
    cur_obj_set_pos_to_home_with_debug()
}

export const bhv_boo_in_castle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oBooBaseScale] = 2.0

    let targetAngle

    if (o.rawData[oAction] == 0) {
        cur_obj_hide()

        if (LevelUpdate.gHudDisplay.stars < SPAWN_CASTLE_BOO_STAR_REQUIREMENT) {
            obj_mark_for_deletion(o);
        }

        if (ObjectListProc.gMarioCurrentRoom == 1) {
            o.rawData[oAction]++
        }
    } else if (o.rawData[oAction] == 1) {
        cur_obj_unhide();

        o.rawData[oOpacity] = 180;

        if (o.rawData[oTimer] == 0) {
            cur_obj_scale(o.rawData[oBooBaseScale]);
        }

        if (o.rawData[oDistanceToMario] < 1000.0) {
            o.rawData[oAction]++
            cur_obj_play_sound_2(SOUND_OBJ_BOO_LAUGH_LONG);
        }

        o.rawData[oForwardVel] = 0.0;
        targetAngle = o.rawData[oAngleToMario]
    } else {
        cur_obj_forward_vel_approach_upward(32.0, 1.0);

        o.rawData[oHomeX] = -1000.0
        o.rawData[oHomeZ] = -9000.0

        targetAngle = cur_obj_angle_to_home();

        if (o.rawData[oPosZ] < -5000.0) {
            if (o.rawData[oOpacity] > 0) {
                o.rawData[oOpacity] -= 20
            } else {
                o.rawData[oOpacity] = 0
            }
        }

        if (o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
            o.rawData[oAction] = 1
        }
    }

    o.rawData[oVelY] = 0.0;

    targetAngle = cur_obj_angle_to_home()

    cur_obj_rotate_yaw_toward(targetAngle, 0x5A8)
    boo_oscillate(true)
    cur_obj_move_using_fvel_and_gravity()
}

export const bhv_boo_staircase = () => {
    let targetY

    switch (o.rawData[oBehParams2ndByte]) {
        case 1:
            targetY = 0.0;
            break;
        case 0:
            targetY = -206.0;
            break;
        case 2:
            targetY = -413.0;
            break;
    }

    switch (o.rawData[oAction]) {
        case 0:
            o.rawData[oPosY] = o.rawData[oHomeY] - 620.0;
            o.rawData[oAction]++;
            // fallthrough
        case 1:
            o.rawData[oPosY] += 8.0;
            cur_obj_play_sound_1(SOUND_ENV_ELEVATOR2);

            if (o.rawData[oPosY] > targetY) {
                o.rawData[oPosY] = targetY;
                o.rawData[oAction]++;
            }

            break;

        case 2:
            if (o.rawData[oTimer] == 0) {
                cur_obj_play_sound_2(SOUND_GENERAL_UNKNOWN4_LOWPRIO);
            }

            if (jiggle_bbh_stair(o.rawData[oTimer])) {
                o.rawData[oAction]++;
            }

            break;

        case 3:
            if (o.rawData[oTimer] == 0 && o.rawData[oBehParams2ndByte] == 1) {
                play_puzzle_jingle();
            }

            break;
    }
}

gLinker.bhv_boo_init = bhv_boo_init
gLinker.bhv_courtyard_boo_triplet_init = bhv_courtyard_boo_triplet_init
gLinker.bhv_boo_loop = bhv_boo_loop
gLinker.bhv_big_boo_loop = bhv_big_boo_loop
gLinker.bhv_boo_with_cage_init = bhv_boo_with_cage_init
gLinker.bhv_boo_with_cage_loop = bhv_boo_with_cage_loop
gLinker.bhv_merry_go_round_boo_manager_loop = bhv_merry_go_round_boo_manager_loop
gLinker.obj_set_secondary_camera_focus = obj_set_secondary_camera_focus
gLinker.bhv_animated_texture_loop = bhv_animated_texture_loop
gLinker.bhv_boo_in_castle_loop = bhv_boo_in_castle_loop
