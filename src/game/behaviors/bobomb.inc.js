import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { is_point_within_radius_of_mario, object_step, obj_return_home_if_safe,
         obj_check_if_facing_toward_angle, obj_check_floor_death, sObjFloor,
         OBJ_COL_FLAG_GROUNDED, obj_spawn_yellow_coins, curr_obj_random_blink } from "../ObjBehaviors"
import { oPosX, oPosY, oPosZ, oAnimState, oBobombBlinkTimer, oHeldState, HELD_FREE,
         oBehParams, oBehParams2ndByte, oBobombBuddyRole, oAction, oBobombBuddyCannonStatus,
         oBobombBuddyHasTalkedToMario, oDistanceToMario, oBobombBuddyBlinkTimer,
         oBobombBuddyPosXCopy, oBobombBuddyPosYCopy, oBobombBuddyPosZCopy,
         BOBOMB_BP_STYPE_GENERIC,
         BOBOMB_ACT_PATROL, BOBOMB_ACT_CHASE_MARIO, BOBOMB_ACT_EXPLODE, BOBOMB_ACT_LAVA_DEATH, BOBOMB_ACT_DEATH_PLANE_DEATH, oBobombFuseTimer, oForwardVel, oGravity, oFriction, oBuoyancy, oInteractionSubtype, oHomeX, oHomeY, oHomeZ, oMoveAngleYaw, oAngleToMario, oBobombFuseLit, oSmokeTimer, oTimer, ACTIVE_FLAGS_DEACTIVATED, oInteractStatus, oVelY, BOBOMB_ACT_LAUNCHED, oGraphYOffset, oVelX, oVelZ } from "../../include/object_constants"
import { INT_SUBTYPE_NPC, INT_SUBTYPE_KICKABLE, INTERACT_GRABBABLE, INT_STATUS_INTERACTED, INT_STATUS_MARIO_UNK1, INT_STATUS_TOUCHED_BOB_OMB } from "../Interaction"
import { obj_turn_toward_object, obj_attack_collided_from_other_object, cur_obj_scale, spawn_object,
         obj_mark_for_deletion, cur_obj_nearest_object_with_behavior, approach_s16_symmetric } from "../ObjectHelpers"
import { set_object_visibility } from "../ObjBehaviors"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { MODEL_EXPLOSION, MODEL_BLACK_BOBOMB, MODEL_SMOKE } from "../../include/model_ids"
import { bhvExplosion, bhvBobomb, bhvBobombFuseSmoke } from "../BehaviorData"
import { create_respawner } from "./corkbox.inc"
import { int32 } from "../../utils"

import { SOUND_OBJ_BOBOMB_WALK, SOUND_ACTION_READ_SIGN } from "../../include/sounds"
import { cur_obj_play_sound_2 } from "../SpawnSound"

/* Bob-omb Buddy */
    /* oBehParams2ndByte */
    const BOBOMB_BUDDY_BP_STYPE_GENERIC = 0
    const BOBOMB_BUDDY_BP_STYPE_BOB_GRASS_KBB = 1
    const BOBOMB_BUDDY_BP_STYPE_BOB_CANNON_KBB = 2
    const BOBOMB_BUDDY_BP_STYPE_BOB_GRASS = 3
    /* oAction */
    const BOBOMB_BUDDY_ACT_IDLE = 0
    const BOBOMB_BUDDY_ACT_TURN_TO_TALK = 2
    const BOBOMB_BUDDY_ACT_TALK = 3
    /* oBobombBuddyRole */
    const BOBOMB_BUDDY_ROLE_ADVICE = 0
    const BOBOMB_BUDDY_ROLE_CANNON = 1
    /* oBobombBuddyCannonStatus */
    const BOBOMB_BUDDY_CANNON_UNOPENED = 0
    const BOBOMB_BUDDY_CANNON_OPENING = 1
    const BOBOMB_BUDDY_CANNON_OPENED = 2
    const BOBOMB_BUDDY_CANNON_STOP_TALKING = 3
    /* oBobombBuddyHasTalkedToMario */
    const BOBOMB_BUDDY_HAS_NOT_TALKED = 0
    const BOBOMB_BUDDY_HAS_TALKED = 2


const sBobombHitbox = {
    interactType:       INTERACT_GRABBABLE,
    downOffset:         0,
    damageOrCoinValue:  0,
    health:             0,
    numLootCoins:       0,
    radius:             65,
    height:             113,
    hurtboxRadius:      0,
    hurtboxHeight:      0
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

    if (sp1a == 5 || sp1a == 16) {
       cur_obj_play_sound_2(SOUND_OBJ_BOBOMB_WALK)
    }

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

    if (o.rawData[oBobombFuseTimer] >= 151)
        o.rawData[oAction] = 3
}

const stationary_bobomb_free_loop = () => {
    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case BOBOMB_ACT_LAUNCHED:
            bobomb_act_launched()
            break;

        case BOBOMB_ACT_EXPLODE:
            bobomb_act_explode()
            break;

        case BOBOMB_ACT_LAVA_DEATH:
            // if (obj_lava_death() == 1)
            //     create_respawner(MODEL_BLACK_BOBOMB, bhvBobomb, 3000);
            break;

        case BOBOMB_ACT_DEATH_PLANE_DEATH:
            // o->activeFlags = ACTIVE_FLAG_DEACTIVATED;
            // create_respawner(MODEL_BLACK_BOBOMB, bhvBobomb, 3000);
            break;
    }

    bobomb_check_interactions()

    if (o.rawData[oBobombFuseTimer] >= 151)
        o.rawData[oAction] = 3
}

const bobomb_free_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oBehParams2ndByte] == BOBOMB_BP_STYPE_GENERIC)
        generic_bobomb_free_loop()
    else 
        stationary_bobomb_free_loop()
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

        curr_obj_random_blink(oBobombBlinkTimer)

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

//--------------------------

const bhv_bobomb_buddy_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oGravity] = 2.5
    o.rawData[oFriction] = 0.8
    o.rawData[oBuoyancy] = 1.3
    o.rawData[oInteractionSubtype] = INT_SUBTYPE_NPC
}

const bobomb_buddy_act_idle = () => {
    const o = ObjectListProc.gCurrentObject
    let sp1a = o.header.gfx.unk38.animFrame

    o.rawData[oBobombBuddyPosXCopy] = o.rawData[oPosX]
    o.rawData[oBobombBuddyPosYCopy] = o.rawData[oPosY]
    o.rawData[oBobombBuddyPosZCopy] = o.rawData[oPosZ]

    object_step()

    if (sp1a == 5 || sp1a == 16) {
        cur_obj_play_sound_2(SOUND_OBJ_BOBOMB_WALK)
    }

    if (o.rawData[oDistanceToMario] < 1000.0)
        o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario], 0x140)

    if (o.rawData[oInteractStatus] == INT_STATUS_INTERACTED)
        o.rawData[oAction] = BOBOMB_BUDDY_ACT_TURN_TO_TALK
}

/**
 * Function for the Bob-omb Buddy cannon guy.
 * dialogFirstText is the first dialogID called when Bob-omb Buddy
 * starts to talk to Mario to prepare the cannon(s) for him.
 * Then the camera goes to the nearest cannon, to play the "prepare cannon" cutscene
 * dialogSecondText is called after Bob-omb Buddy has the cannon(s) ready and
 * then tells Mario that is "Ready for blastoff".
 */
const bobomb_buddy_cannon_dialog = (dialogFirstText, dialogSecondText) => {
    // const o = ObjectListProc.gCurrentObject
    // let cannonClosed
    // let /*s16*/ buddyText, cutscene

    // switch (o.rawData[oBobombBuddyCannonStatus]) {
    //     case BOBOMB_BUDDY_CANNON_UNOPENED:
    //         buddyText = cutscene_object_with_dialog(CUTSCENE_DIALOG, o, dialogFirstText)
    //         if (buddyText != 0) {
    //             save_file_set_cannon_unlocked()
    //             cannonClosed = cur_obj_nearest_object_with_behavior(bhvCannonClosed)
    //             if (cannonClosed != 0)
    //                 o.rawData[oBobombBuddyCannonStatus] = BOBOMB_BUDDY_CANNON_OPENING
    //             else
    //                 o.rawData[oBobombBuddyCannonStatus] = BOBOMB_BUDDY_CANNON_STOP_TALKING
    //         }
    //         break

    //     case BOBOMB_BUDDY_CANNON_OPENING:
    //         cannonClosed = cur_obj_nearest_object_with_behavior(bhvCannonClosed)
    //         cutscene = cutscene_object(CUTSCENE_PREPARE_CANNON, cannonClosed)
    //         if (cutscene == -1)
    //             o.rawData[oBobombBuddyCannonStatus] = BOBOMB_BUDDY_CANNON_OPENED
    //         break

    //     case BOBOMB_BUDDY_CANNON_OPENED:
    //         buddyText = cutscene_object_with_dialog(CUTSCENE_DIALOG, o, dialogSecondText)
    //         if (buddyText != 0)
    //             o.rawData[oBobombBuddyCannonStatus] = BOBOMB_BUDDY_CANNON_STOP_TALKING
    //         break

    //     case BOBOMB_BUDDY_CANNON_STOP_TALKING:
    //         set_mario_npc_dialog(0)

    //         o.activeFlags &= ~ACTIVE_FLAG_INITIATED_TIME_STOP
    //         o.rawData[oBobombBuddyHasTalkedToMario] = BOBOMB_BUDDY_HAS_TALKED
    //         o.rawData[oInteractStatus] = 0
    //         o.rawData[oAction] = BOBOMB_BUDDY_ACT_IDLE
    //         o.rawData[oBobombBuddyCannonStatus] = BOBOMB_BUDDY_CANNON_OPENED
    //         break
    // }
}

const bobomb_buddy_act_talk = () => {
    const o = ObjectListProc.gCurrentObject

    // DEBUG
    o.rawData[oBobombBuddyHasTalkedToMario] = BOBOMB_BUDDY_HAS_TALKED
    o.rawData[oInteractStatus] = 0
    o.rawData[oAction] = BOBOMB_BUDDY_ACT_IDLE

    // if (set_mario_npc_dialog(1) == 2) {
    //     o.activeFlags |= ACTIVE_FLAG_INITIATED_TIME_STOP

    //     switch (o.rawData[oBobombBuddyRole]) {
    //         case BOBOMB_BUDDY_ROLE_ADVICE:
    //             if (cutscene_object_with_dialog(CUTSCENE_DIALOG, o, o.rawData[oBehParams2ndByte])
    //                 != BOBOMB_BUDDY_BP_STYPE_GENERIC) {
    //                 set_mario_npc_dialog(0)

    //                 o.activeFlags &= ~ACTIVE_FLAG_INITIATED_TIME_STOP
    //                 o.rawData[oBobombBuddyHasTalkedToMario] = BOBOMB_BUDDY_HAS_TALKED
    //                 o.rawData[oInteractStatus] = 0
    //                 o.rawData[oAction] = BOBOMB_BUDDY_ACT_IDLE
    //             }
    //             break

    //         case BOBOMB_BUDDY_ROLE_CANNON:
    //             if (gCurrCourseNum == COURSE_BOB)
    //                 bobomb_buddy_cannon_dialog(DIALOG_004, DIALOG_105)
    //             else
    //                 bobomb_buddy_cannon_dialog(DIALOG_047, DIALOG_106)
    //             break
    //     }
    // }
}

const bobomb_buddy_act_turn_to_talk = () => {
    const o = ObjectListProc.gCurrentObject
    let /*s16*/ sp1e = o.header.gfx.unk38.animFrame
    if ((sp1e == 5) || (sp1e == 16)) {
        cur_obj_play_sound_2(SOUND_OBJ_BOBOMB_WALK)
    }

    o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario], 0x1000)
    if (Math.floor(o.rawData[oMoveAngleYaw]) == Math.floor(o.rawData[oAngleToMario])) {
        o.rawData[oAction] = BOBOMB_BUDDY_ACT_TALK
    }

    cur_obj_play_sound_2(SOUND_ACTION_READ_SIGN)
}

const bobomb_buddy_actions = () => {
    const o = ObjectListProc.gCurrentObject
    switch (o.rawData[oAction]) {
        case BOBOMB_BUDDY_ACT_IDLE:
            bobomb_buddy_act_idle()
            break

        case BOBOMB_BUDDY_ACT_TURN_TO_TALK:
            bobomb_buddy_act_turn_to_talk()
            break

        case BOBOMB_BUDDY_ACT_TALK:
            bobomb_buddy_act_talk()
            break
    }

    set_object_visibility(o, 3000)
}

const bhv_bobomb_buddy_loop = () => {
    const o = ObjectListProc.gCurrentObject
    bobomb_buddy_actions()

    curr_obj_random_blink(oBobombBuddyBlinkTimer)

    o.rawData[oInteractStatus] = 0
}

gLinker.bhv_bobomb_buddy_init = bhv_bobomb_buddy_init
gLinker.bhv_bobomb_buddy_loop = bhv_bobomb_buddy_loop
