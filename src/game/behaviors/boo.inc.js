import {
    cur_obj_has_behavior, spawn_object_relative, cur_obj_update_floor_and_walls,
    cur_obj_call_action_function, cur_obj_move_standard, obj_has_behavior, obj_scale, 
    obj_copy_behavior_params, cur_obj_hide
} from "../ObjectHelpers"

import {
    oForwardVel, oVelY, oGravity, oBooInitialMoveYaw, oMoveAngleYaw, oRoom, oDistanceToMario,
    oBooTargetOpacity, oOpacity, oBooBaseScale, oBooOscillationTimer, oAngleToMario, oFaceAngleYaw,
    oMerryGoRoundBooManagerNumBoosKilled, oInteractStatus, oGraphYOffset, oBehParams, oAction,
    oMerryGoRoundBooManagerNumBoosSpawned, oHomeX, oHomeY, oHomeZ, oBehParams2ndByte, oPosY, oTimer,

    ACTIVE_FLAG_IN_DIFFERENT_ROOM, ACTIVE_FLAG_DEACTIVATED
} from "../../include/object_constants"

import { MODEL_BOO, MODEL_HAUNTED_CAGE } from "../../include/model_ids"
import { SOUND_OBJ_BOO_LAUGH_LONG, SOUND_ENV_ELEVATOR2, SOUND_GENERAL_UNKNOWN4_LOWPRIO } from "../../include/sounds"
import { TIME_STOP_MARIO_OPENED_DOOR } from "../ObjectListProcessor"
import { bhvGhostHuntBoo, bhvMerryGoRoundBooManager } from "../BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { random_u16 } from "../../utils"
import { obj_set_hitbox } from "../ObjBehaviors2"

export const SPAWN_CASTLE_BOO_STAR_REQUIREMENT = 12

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

const sCourtyardBooTripletPositions = [
    [ 0, 50, 0 ],
    [ 210, 110, 210 ],
    [ -210, 70, -210 ],
]

const boo_stop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oForwardVel] = 0
    o.rawData[oVelY] = 0
    o.rawData[oGravity] = 0
}

export const bhv_boo_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oBooInitialMoveYaw] = o.oMoveAngleYaw
}

const boo_should_be_stopped = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (cur_obj_has_behavior(bhvMerryGoRoundBigBoo) || cur_obj_has_behavior(bhvMerryGoRoundBoo)) {
        if (!gMarioOnMerryGoRound) {
            return true
        } else {
            return false
        }
    } else {
        if (o.rawData[activeFlags] & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
            return true
        }

        if (o.rawData[oRoom] == 10 && (gTimeStopState & TIME_STOP_MARIO_OPENED_DOOR)) {
            return true
        }
    }

    return false
}

const boo_should_be_active = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let activationRadius = cur_obj_has_behavior(bhvBalconyBigBoo)?5000.0:1500.0

    if (cur_obj_has_behavior(bhvMerryGoRoundBigBoo) || cur_obj_has_behavior(bhvMerryGoRoundBoo)) {
        return gMarioOnMerryGoRound
    } else if (o.rawData[oRoom] == -1) {
        if (o.rawData[oDistanceToMario] < activationRadius) {
            return true
        }
    } else if (!boo_should_be_stopped()) {
        if (o.rawData[oDistanceToMario] < activationRadius && (o.rawData[oRoom] == gMarioCurrentRoom || gMarioCurrentRoom == 0)) {
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
    o.oFaceAnglePitch = sins(o.rawData[oBooOscillationTimer]) * 0x400

    if (o.rawData[oOpacity] == 255 || ignoreOpacity == true) {
        o.header.gfx.scale[0] = sins(o.rawData[oBooOscillationTimer]) * 0.08 + o.rawData[oBooBaseScale]
        o.header.gfx.scale[1] = -sins(o.rawData[oBooOscillationTimer]) * 0.08 + o.rawData[oBooBaseScale]
        o.header.gfx.scale[2] = o.header.gfx.scale[0];
        o.rawData[oGravity] = sins(o.rawData[oBooOscillationTimer]) * o.rawData[oBooBaseScale];
        o.rawData[oBooOscillationTimer] += 0x400;
    }
}

const boo_vanish_or_appear = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let relativeAngleToMario = abs_angle_diff(o.rawData[oAngleToMario], o.rawData[oMoveAngleYaw])
    let relativeMarioFaceAngle = abs_angle_diff(o.rawData[oMoveAngleYaw], gMarioObject.rawData[oFaceAngleYaw])
    let relativeAngleToMarioThreshhold = 0x1568
    let relativeMarioFaceAngleThreshhold = 0x6B58
    let doneAppearing = false

    o.rawData[oVelY] = 0

    if (relativeAngleToMario > relativeAngleToMarioThreshhold || relativeMarioFaceAngle < relativeMarioFaceAngleThreshhold) {
        if (o.rawData[oOpacity] == 40) {
            o.rawData[oBooTargetOpacity] == 255
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

}

const boo_move_during_hit = (roll, fVel) => {

}

const big_boo_shake_after_hit = () => {

}

const boo_reset_after_hit = () => {

}

const boo_update_after_bounced_on = (a0) => {

}

const big_boo_update_during_nonlethal_hit = (a0) => {

}

const boo_update_during_death = () => {

}

const obj_has_attack_type = (attackType) => {

}

const boo_get_attack_status = () => {

}

const boo_chase_mario = (a0, a1, a2) => {

}

const boo_act_0 = () => {

}

const boo_act_5 = () => {

}

const boo_act_1 = () => {

}

const boo_act_2 = () => {

}

const boo_act_3 = () => {

}

const boo_act_4 = () => {

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
    const parent = o.parentObj

    cur_obj_update_floor_and_walls()
    cur_obj_call_action_function(sBooActions)
    cur_obj_move_standard(78)
    boo_approach_target_opacity_and_update_scale()

    if (obj_has_behavior(o.parentObj, bhvMerryGoRoundBooManager) && o.rawData[activeFlags] == ACTIVE_FLAG_DEACTIVATED) {
        o.parentObj.oMerryGoRoundBooManagerNumBoosKilled++
    }

    o.rawData[oInteractStatus] = 0
}

const big_boo_act_0 = () => {

}

const big_boo_act_1 = () => {
    
}

const big_boo_act_2 = () => {
    
}

const big_boo_spawn_ghost_hunt_star = () => {

}

const big_boo_spawn_balcony_star = () => {

}

const big_boo_spawn_merry_go_round_star = () => {

}

const big_boo_act_3 = () => {
    
}

const big_boo_act_4 = () => {
    
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

}

const boo_with_cage_act_1 = () => {
    
}

const boo_with_cage_act_2 = () => {
    
}

const boo_with_cage_act_3 = () => {
    
}

export const bhv_boo_with_cage_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (gHudDisplay.stars < SPAWN_CASTLE_BOO_STAR_REQUIREMENT) {
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

                    play_sound(SOUND_GENERAL2_RIGHT_ANSWER, gGlobalSoundSource);
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
    gSecondCameraFocus = o
}

export const bhv_animated_texture_loop = () => {
    cur_obj_set_pos_to_home_with_debug()
}

export const bhv_boo_in_castle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oBooBaseScale] = 2.0

    if (o.rawData[oAction] == 0) {
        cur_obj_hide()

        if (gHudDisplay.stars < SPAWN_CASTLE_BOO_STAR_REQUIREMENT) {
            obj_mark_for_deletion(o);
        }

        if (gMarioCurrentRoom == 1) {
            o.rawData[oAction]++
        }
    } else if (o.rawData[oAction] == 1) {
        cur_obj_unhide();

        o.rawData[oOpacity] = 180;

        if (o.rawData[oTimer] == 0) {
            cur_obj_scale(o.rawData[oBooBaseScale]);
        }

        if (o.rawData[oDistanceToMario] < 1000.0) {
            o.rawData[oAction++]
            cur_obj_play_sound_2(SOUND_OBJ_BOO_LAUGH_LONG);
        }

        o.rawData[oForwardVel] = 0.0;
        let targetAngle = o.rawData[oAngleToMario]
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
    boo_oscillate(TRUE)
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