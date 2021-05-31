import * as _Linker from "../../game/Linker"

import {
    cur_obj_unhide, obj_mark_for_deletion, cur_obj_angle_to_home, cur_obj_rotate_yaw_toward,
    spawn_object_relative_with_scale, cur_obj_set_model, obj_set_billboard, spawn_object_relative,
    spawn_object, cur_obj_update_floor_and_walls, cur_obj_scale, cur_obj_move_standard
 } from "../ObjectHelpers"

import { s16, coss, random_u16 } from "../../utils"

import { obj_check_attacks } from "../ObjBehaviors2"

import {
    random_linear_offset, approach_number_ptr, obj_move_pitch_approach,
    obj_compute_vel_from_move_pitch
} from "../ObjBehaviors2"

import {
    oAction, oMoveAngleYaw,  oPosX, oPosY,  oPosZ, oTimer, oHomeY, oFloorHeight, oGraphYOffset,
    oBehParams2ndByte, oDistanceToMario,
    oTripletButterflyBaseYaw, oTripletButterflySpeed, oTripletButterflyScale,
    oTripletButterflySelectedButterfly, oTripletButterflyType, oTripletButterflyTargetYaw,
    oTripletButterflyTargetPitch
} from "../../include/object_constants"

import { MODEL_BUTTERFLY, MODEL_SMOKE, MODEL_BOWLING_BALL, MODEL_1UP } from "../../include/model_ids"

import { INTERACT_MR_BLIZZARD } from "../Interaction"


/* Triplet butterfly */
/* oAction */
const TRIPLET_BUTTERFLY_ACT_INIT = 0
const TRIPLET_BUTTERFLY_ACT_WANDER = 1
const TRIPLET_BUTTERFLY_ACT_ACTIVATE = 2
const TRIPLET_BUTTERFLY_ACT_EXPLODE = 3

/* oBehParams2ndByte */
const TRIPLET_BUTTERFLY_BP_BUTTERFLY_NUM = 0x00000003
const TRIPLET_BUTTERFLY_BP_NO_BOMBS = 0x00000004

/* oTripletButterflyType */
const TRIPLET_BUTTERFLY_TYPE_NORMAL = -1
const TRIPLET_BUTTERFLY_TYPE_EXPLODES = 0
const TRIPLET_BUTTERFLY_TYPE_SPAWN_1UP = 1


const sTripletButterflyExplodeHitbox = {
    interactType:      INTERACT_MR_BLIZZARD,
    downOffset:        50,
    damageOrCoinValue: 2,
    health:            1,
    numLootCoins:      0,
    radius:            100,
    height:            50,
    hurtboxRadius:     100,
    hurtboxHeight:     50
}

const sTripletButterflyActivationData = [
    { model: MODEL_BOWLING_BALL, behavior: null, scale: 0.5 },
    { model: MODEL_1UP, behavior: 'bhv1upWalking', scale: 1.0 },
]

const triplet_butterfly_act_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*s32*/ butterflyNum
    let /*s32*/ i

    butterflyNum = o.rawData[oBehParams2ndByte] & TRIPLET_BUTTERFLY_BP_BUTTERFLY_NUM
    if (butterflyNum != 0 || o.rawData[oDistanceToMario] < 200.0) {
        if (butterflyNum == 0) {
            for (i = 1; i <= 2; i++) {
                spawn_object_relative(i, 0, 0, 0, o, MODEL_BUTTERFLY, 'bhvTripletButterfly')
            }

            o.rawData[oTripletButterflySelectedButterfly] = random_u16() % 3
        }

          //! TODO: Describe this glitch
        if (o.parentObj.rawData[oTripletButterflySelectedButterfly] == o.rawData[oBehParams2ndByte]) {
            o.rawData[oTripletButterflyType] = TRIPLET_BUTTERFLY_TYPE_SPAWN_1UP
        } else if (o.parentObj.rawData[oBehParams2ndByte] & TRIPLET_BUTTERFLY_BP_NO_BOMBS) {
            o.rawData[oTripletButterflyType] = TRIPLET_BUTTERFLY_TYPE_NORMAL
        }
          // Default butterfly type is TRIPLET_BUTTERFLY_TYPE_EXPLODES

        o.rawData[oAction] = TRIPLET_BUTTERFLY_ACT_WANDER

        o.rawData[oTripletButterflyBaseYaw] = s16(o.rawData[oBehParams2ndByte] * (0x10000 / 3))
        o.rawData[oMoveAngleYaw] = s16(o.rawData[oTripletButterflyBaseYaw] + random_linear_offset(0, 0x5555))
        o.rawData[oTripletButterflySpeed] = random_linear_offset(15, 15)

        cur_obj_unhide()
    }
}

const triplet_butterfly_act_wander = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oDistanceToMario] > 1500.0) {
        obj_mark_for_deletion(o)
    } else {
        approach_number_ptr(o.rawData, oTripletButterflySpeed, 8.0, 0.5)
        if (o.rawData[oTimer] < 60) {
            o.rawData[oTripletButterflyTargetYaw] = cur_obj_angle_to_home()
        } else {
            o.rawData[oTripletButterflyTargetYaw] = o.rawData[oTripletButterflyBaseYaw]

            if (o.rawData[oTimer] > 110 && o.rawData[oDistanceToMario] < 200.0
                && o.rawData[oTripletButterflyType] > TRIPLET_BUTTERFLY_TYPE_NORMAL) {
                o.rawData[oAction] = TRIPLET_BUTTERFLY_ACT_ACTIVATE
                o.rawData[oTripletButterflySpeed] = 0.0
            }
        }

        if (o.rawData[oHomeY] < o.rawData[oFloorHeight]) {
            o.rawData[oHomeY] = o.rawData[oFloorHeight]
        }

        if (o.rawData[oPosY] < o.rawData[oHomeY] + random_linear_offset(50, 50)) {
            o.rawData[oTripletButterflyTargetPitch] = -0x2000
        } else {
            o.rawData[oTripletButterflyTargetPitch] = 0x2000
        }

        obj_move_pitch_approach(o.rawData[oTripletButterflyTargetPitch], 400)
        cur_obj_rotate_yaw_toward(o.rawData[oTripletButterflyTargetYaw], random_linear_offset(400, 800))
    }
}

const triplet_butterfly_act_activate = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] > 20) {
        if (o.rawData[oTripletButterflyModel] == 0) {
            spawn_object_relative_with_scale(0, 0, -40, 0, 1.5, o, MODEL_SMOKE, 'bhvWhitePuffSmoke2')
            o.rawData[oTripletButterflyModel] = sTripletButterflyActivationData[o.rawData[oTripletButterflyType]].model
            cur_obj_set_model(o.rawData[oTripletButterflyModel])
            obj_set_billboard(o)
            o.rawData[oTripletButterflyScale] = 0.0
            o.rawData[oHomeY] = o.rawData[oPosY]
        } else if (o.rawData[oTripletButterflyScale]
                   >= sTripletButterflyActivationData[o.rawData[oTripletButterflyType]].scale) {
            if (o.rawData[oTripletButterflyType] != TRIPLET_BUTTERFLY_TYPE_EXPLODES) {
                spawn_object(o, o.rawData[oTripletButterflyModel],
                             sTripletButterflyActivationData[o.rawData[oTripletButterflyType]].behavior)
                obj_mark_for_deletion(o)
            } else {
                o.rawData[oAction] = TRIPLET_BUTTERFLY_ACT_EXPLODE
                o.rawData[oWallHitboxRadius] = 100.0
            }
        }

        o.rawData[oTripletButterflyScale] +=
            sTripletButterflyActivationData[o.rawData[oTripletButterflyType]].scale / 30.0
        if (o.rawData[oTripletButterflyType] == TRIPLET_BUTTERFLY_TYPE_EXPLODES) {
            o.rawData[oGraphYOffset] = 250.0 * o.rawData[oTripletButterflyScale]
            o.rawData[oPosY] = o.rawData[oHomeY] - o.rawData[oGraphYOffset]
        }
    }
}

const triplet_butterfly_act_explode = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*f32*/ scaleIncrease

    obj_check_attacks(sTripletButterflyExplodeHitbox, -1)

    if (o.rawData[oAction] == -1 || (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) || o.rawData[oTimer] >= 158) {
        o.rawData[oPosY] += o.rawData[oGraphYOffset]
        spawn_object(o, MODEL_EXPLOSION, bhvExplosion)
        obj_mark_for_deletion(o)
    } else {
        if (o.rawData[oTimer] > 120) {
            scaleIncrease = 0.04 * coss(o.rawData[oTripletButterflyScalePhase])
            if (scaleIncrease > 0.0) {
                scaleIncrease *= 4.5
                o.rawData[oTripletButterflyScalePhase] += 10000
            } else {
                o.rawData[oTripletButterflyScalePhase] += 4000
            }

            o.rawData[oTripletButterflyScale] += scaleIncrease
        }

        approach_number_ptr(o.rawData, oTripletButterflySpeed, 20.0, 1.0)
        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 800)
        obj_turn_pitch_toward_mario(-100.0, 800)
    }
}

export const bhv_triplet_butterfly_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_update_floor_and_walls()

    switch (o.rawData[oAction]) {
        case TRIPLET_BUTTERFLY_ACT_INIT:
            triplet_butterfly_act_init()
            break
        case TRIPLET_BUTTERFLY_ACT_WANDER:
            triplet_butterfly_act_wander()
            break
        case TRIPLET_BUTTERFLY_ACT_ACTIVATE:
            triplet_butterfly_act_activate()
            break
        case TRIPLET_BUTTERFLY_ACT_EXPLODE:
            triplet_butterfly_act_explode()
            break
    }

    cur_obj_scale(o.rawData[oTripletButterflyScale])
    obj_compute_vel_from_move_pitch(o.rawData[oTripletButterflySpeed])
    cur_obj_move_standard(78)
}


gLinker.bhv_triplet_butterfly_update = bhv_triplet_butterfly_update
