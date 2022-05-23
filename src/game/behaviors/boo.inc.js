import {
    cur_obj_has_behavior, spawn_object_relative, cur_obj_update_floor_and_walls,
    cur_obj_call_action_function, cur_obj_move_standard, obj_has_behavior, obj_scale
} from "../ObjectHelpers"

import {
    oForwardVel, oVelY, oGravity, oBooInitialMoveYaw, oMoveAngleYaw, oRoom, oDistanceToMario,
    oBooTargetOpacity, oOpacity, oBooBaseScale, oBooOscillationTimer, oAngleToMario, oFaceAngleYaw,
    oMerryGoRoundBooManagerNumBoosKilled, oInteractStatus, oGraphYOffset,

    ACTIVE_FLAG_IN_DIFFERENT_ROOM, ACTIVE_FLAG_DEACTIVATED
} from "../../include/object_constants"

import { MODEL_BOO } from "../../include/model_ids"
import { SOUND_OBJ_BOO_LAUGH_LONG } from "../../include/sounds"
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

gLinker.bhv_boo_init = bhv_boo_init
gLinker.bhv_courtyard_boo_triplet_init = bhv_courtyard_boo_triplet_init
gLinker.bhv_boo_loop = bhv_boo_loop
gLinker.bhv_big_boo_loop = bhv_big_boo_loop