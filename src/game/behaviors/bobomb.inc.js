import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { is_point_within_radius_of_mario, object_step, obj_return_home_if_safe, obj_check_if_facing_toward_angle, obj_check_floor_death, sObjFloor, OBJ_COL_FLAG_GROUNDED, obj_spawn_yellow_coins } from "../ObjBehaviors"
import { oPosX, oPosY, oPosZ, oAnimState, oBobombBlinkTimer, oHeldState, HELD_FREE, oBehParams, oBehParams2ndByte, BOBOMB_BP_STYPE_GENERIC, oAction, BOBOMB_ACT_PATROL, BOBOMB_ACT_CHASE_MARIO, BOBOMB_ACT_EXPLODE, oBobombFuseTimer, oForwardVel, oGravity, oFriction, oBuoyancy, oInteractionSubtype, oHomeX, oHomeY, oHomeZ, oMoveAngleYaw, oAngleToMario, oBobombFuseLit, oSmokeTimer, oTimer, ACTIVE_FLAGS_DEACTIVATED, oInteractStatus, oVelY, BOBOMB_ACT_LAUNCHED, oGraphYOffset, oVelX, oVelZ } from "../../include/object_constants"
import { INT_SUBTYPE_KICKABLE, INTERACT_GRABBABLE, INT_STATUS_INTERACTED, INT_STATUS_MARIO_UNK1, INT_STATUS_TOUCHED_BOB_OMB } from "../Interaction"
import { obj_turn_toward_object, obj_attack_collided_from_other_object, cur_obj_scale, spawn_object, obj_mark_for_deletion } from "../ObjectHelpers"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { MODEL_EXPLOSION, MODEL_BLACK_BOBOMB, MODEL_SMOKE } from "../../include/model_ids"
import { bhvExplosion, bhvBobomb, bhvBobombFuseSmoke } from "../BehaviorData"
import { create_respawner } from "./corkbox.inc"
import { int32 } from "../../utils"

const sBobombHitbox = {
    interactType: INTERACT_GRABBABLE,
    downOffset: 0,
    damageOrCoinValue: 0,
    health: 0,
    numLootCoins: 0,
    radius: 65,
    height: 113,
    hurtboxRadius: 0,
    hurtboxHeight: 0
}

const curr_obj_random_blink = (blinkTimer) => {

    const o = ObjectListProc.gCurrentObject

    if (blinkTimer.value == 0) {
        if (parseInt(Math.random() * 100.0) == 0) {
            o.rawData[oAnimState] = 1
            blinkTimer.value = 1
        }
    } else {
        blinkTimer.value++
        if (blinkTimer.value >= 6)
            o.rawData[oAnimState] = 0
        if (blinkTimer.value >= 11)
            o.rawData[oAnimState] = 1
        if (blinkTimer.value >= 16) {
            o.rawData[oAnimState] = 0
            blinkTimer.value = 0
        }
    }
}

export const bhv_bobomb_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGravity] = 2.5
    o.rawData[oFriction] = 0.8
    o.rawData[oBuoyancy] = 1.3
    o.rawData[oInteractionSubtype] = INT_SUBTYPE_KICKABLE
}

const bobomb_act_patrol = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oForwardVel] = 5.0

    const collisionFlags = object_step()
    if ((obj_return_home_if_safe(o, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 400) == 1)
        && (obj_check_if_facing_toward_angle(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario], 0x2000) == 1)) {
        o.rawData[oBobombFuseLit] = 1
        o.rawData[oAction] = BOBOMB_ACT_CHASE_MARIO
    }
    obj_check_floor_death(collisionFlags, sObjFloor)
}

const bobomb_act_chase_mario = () => {

    const o = ObjectListProc.gCurrentObject

    const sp1a = ++o.header.gfx.unk38.animFrame
    o.rawData[oForwardVel] = 20.0

    const collisionFlags = object_step()

    /// TODO sound
    //if (sp1a == 5 || sp1a == 16)
    //    cur_obj_play_sound_2(SOUND_OBJ_BOBOMB_WALK)

    obj_turn_toward_object(o, ObjectListProc.gMarioObject, 16, 0x800)
    obj_check_floor_death(collisionFlags, sObjFloor)
}

const bobomb_spawn_coin = () => {
    const o = ObjectListProc.gCurrentObject

    if (((o.rawData[oBehParams] >> 8) & 0x1) == 0) {
        obj_spawn_yellow_coins(o, 1)
        o.rawData[oBehParams] = 0x100
        ObjectListProc.set_object_respawn_info_bits(o, 1)
    }
}

const bobomb_act_explode = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] < 5) {
        cur_obj_scale(1.0 + o.rawData[oTimer] / 5.0)
    } else {
        const explosion = spawn_object(o, MODEL_EXPLOSION, bhvExplosion)
        explosion.rawData[oGraphYOffset] += 100.0

        bobomb_spawn_coin()
        create_respawner(MODEL_BLACK_BOBOMB, bhvBobomb, 3000)
        o.activeFlags = ACTIVE_FLAGS_DEACTIVATED // unload object
    }

}

const bobomb_act_launched = () => {
    const o = ObjectListProc.gCurrentObject

    const collisionFlags = object_step()
    if ((collisionFlags & OBJ_COL_FLAG_GROUNDED) == OBJ_COL_FLAG_GROUNDED) {
        o.rawData[oAction] = BOBOMB_ACT_EXPLODE
    }
}

const bobomb_check_interactions = () => {
    const o = ObjectListProc.gCurrentObject
    obj_set_hitbox(o, sBobombHitbox)

    if ((o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) != 0) {
        if ((o.rawData[oInteractStatus] & INT_STATUS_MARIO_UNK1) != 0) {
            o.rawData[oMoveAngleYaw] = ObjectListProc.gMarioObject.header.gfx.angle[1]
            o.rawData[oForwardVel] = 25.0
            o.rawData[oVelY] = 30
            o.rawData[oAction] = BOBOMB_ACT_LAUNCHED
        }

        if ((o.rawData[oInteractStatus] & INT_STATUS_TOUCHED_BOB_OMB) != 0) {
            o.rawData[oAction] = BOBOMB_ACT_EXPLODE
        }

        o.rawData[oInteractStatus] = 0
    }

    if (obj_attack_collided_from_other_object(o) == 1) {
        o.rawData[oAction] = BOBOMB_ACT_EXPLODE
    }
}

const generic_bobomb_free_loop = () => {

    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case BOBOMB_ACT_PATROL:
            bobomb_act_patrol()
            break
        case BOBOMB_ACT_CHASE_MARIO:
            bobomb_act_chase_mario()
            break
        case BOBOMB_ACT_LAUNCHED:
            bobomb_act_launched()
            break
        case BOBOMB_ACT_EXPLODE:
            bobomb_act_explode()
            break
        default: throw "unimplemented bobomb action - generic_bobomb_free_loop"
    }

    bobomb_check_interactions()

    if (o.rawData[oBobombFuseTimer] >= 151) o.rawData[oAction] = 3

}

const bobomb_free_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oBehParams2ndByte] == BOBOMB_BP_STYPE_GENERIC)
        generic_bobomb_free_loop()
    else 
        throw "implement stationary bobomb"
}

export const bhv_bobomb_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 4000) != 0) {

        switch (o.rawData[oHeldState]) {
            case HELD_FREE:
                bobomb_free_loop()
                break
            default: throw "need to implement bobomb held states"
        }

        const blinkWrapper = { value: o.rawData[oBobombBlinkTimer] }
        curr_obj_random_blink(blinkWrapper)
        o.rawData[oBobombBlinkTimer] = blinkWrapper.value

        if (o.rawData[oBobombFuseLit] == 1) {
            let dustPeriodMinus1
            if (o.rawData[oBobombFuseTimer] >= 121)
                dustPeriodMinus1 = 1
            else 
                dustPeriodMinus1 = 7

            if ((dustPeriodMinus1 & o.rawData[oBobombFuseTimer]) == 0) {
                spawn_object(o, MODEL_SMOKE, bhvBobombFuseSmoke)
            }

            // TODO Smoke Lit Sound

            o.rawData[oBobombFuseTimer]++
        }
        
    }
}

export const bhv_bobomb_fuse_smoke_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oPosX] += int32(Math.random() * 80) - 40
    o.rawData[oPosY] += int32(Math.random() * 80) + 60
    o.rawData[oPosZ] += int32(Math.random() * 80) - 40
    cur_obj_scale(1.2)
}

export const bhv_dust_smoke_loop = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oPosX] += o.rawData[oVelX]
    o.rawData[oPosY] += o.rawData[oVelY]
    o.rawData[oPosZ] += o.rawData[oVelZ]

    if (o.rawData[oSmokeTimer] == 10) {
        obj_mark_for_deletion(o)
    }

    o.rawData[oSmokeTimer]++
}