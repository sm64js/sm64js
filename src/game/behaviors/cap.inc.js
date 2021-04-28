// // cap.c.inc
import { ObjectListProcessorInstance as O } from "../ObjectListProcessor"
import { spawn_object, cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_hide,
    cur_obj_unhide, obj_mark_for_deletion,
    cur_obj_scale, obj_turn_toward_object, approach_symmetric,
    cur_obj_move_using_fvel_and_gravity,
    cur_obj_was_attacked_or_ground_pounded } from "../ObjectHelpers"
import {
    object_step,
    obj_flicker_and_disappear,
    OBJ_COL_FLAG_GROUNDED
} from "../ObjBehaviors"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { sins, coss, int16, s16, random_int16, random_float } from "../../utils"

import { oPosX,
         oPosY,
         oPosZ,
         oVelY,
         oFaceAnglePitch,
         oFaceAngleYaw,
         oMoveAngleYaw,
         oMoveAnglePitch,
         oForwardVel,
         oHomeX,
         oHomeY,
         oHomeZ,
         oAction,
         oAnimState,
         oTimer,
         oDistanceToMario,
         oInteractStatus,
         oBehParams2ndByte,
         oExclamationBoxUnkF4,
         oExclamationBoxUnkF8,
         oExclamationBoxUnkFC,
         oGraphYOffset,
         oGravity,
         oFloorHeight,
         oFlags,
         oBehParams,
         oFriction,
         oBuoyancy,
         oOpacity,
         oCapUnkF4,
         oCapUnkF8,
         ACTIVE_FLAG_DEACTIVATED,
} from "../../include/object_constants"

import { INTERACT_CAP, INT_STATUS_INTERACTED } from "../Interaction"

const sCapHitbox = {
     interactType:       INTERACT_CAP,
     downOffset:         0,
     damageOrCoinValue:  0,
     health:             0,
     numLootCoins:       0,
     radius:             80,
     height:             80,
     hurtboxRadius:      90,
     hurtboxHeight:      90,
}

const cap_set_hitbox = () => {
    const o = O.gCurrentObject
    obj_set_hitbox(o, sCapHitbox)
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
        o.rawData[oInteractStatus] = 0
        return 1
    }

    return 0
}

const cap_despawn = () => {
    const o = O.gCurrentObject
    if (o.rawData[oTimer] > 300) {
        obj_flicker_and_disappear(o, 300)
    }
}

const cap_check_quicksand = () => {
//     if (sObjFloor == NULL)
//         return;

//     switch (sObjFloor.type) {
//         case SURFACE_DEATH_PLANE:
//             o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
//             break;

//         case SURFACE_SHALLOW_QUICKSAND:
//         case SURFACE_DEEP_QUICKSAND:
//         case SURFACE_QUICKSAND:
//             o.rawData[oAction] = 10;
//             o.rawData[oForwardVel] = 0.0f;
//             break;

//         case SURFACE_DEEP_MOVING_QUICKSAND:
//         case SURFACE_SHALLOW_MOVING_QUICKSAND:
//         case SURFACE_MOVING_QUICKSAND:
//             o.rawData[oAction] = 11;
//             o.rawData[oMoveAngleYaw] = (sObjFloor.force & 0xFF) << 8;
//             o.rawData[oForwardVel] = 8 + 2 * (0 - ((sObjFloor.force & 0xFF00) >> 8));
//             break;

//         case SURFACE_INSTANT_QUICKSAND:
//             o.rawData[oAction] = 12;
//             o.rawData[oForwardVel] = 0.0f;
//             break;

//         case SURFACE_INSTANT_MOVING_QUICKSAND:
//             o.rawData[oAction] = 13;
//             o.rawData[oMoveAngleYaw] = (sObjFloor.force & 0xFF) << 8;
//             o.rawData[oForwardVel] = 8 + 2 * (0 - ((sObjFloor.force & 0xFF00) >> 8));
//             break;
//     }
}

const cap_sink_quicksand = () => {
//     switch (o.rawData[oAction]) {
//         case 10:
//             if (o.rawData[oTimer] < 10) {
//                 o.rawData[oGraphYOffset] += -1.0f;
//                 o.rawData[oFaceAnglePitch] = 0x2000;
//             }
//             break;

//         case 11:
//             if (o.rawData[oTimer] < 10)
//                 o.rawData[oGraphYOffset] += -3.0f;

//             o.rawData[oFaceAnglePitch] = 0x2000;
//             break;

//         case 12:
//             o.rawData[oGraphYOffset] += -1.0f;
//             if (o.rawData[oTimer] >= 21)
//                 o.activeFlags = ACTIVE_FLAG_DEACTIVATED;

//             break;

//         case 13:
//             o.rawData[oGraphYOffset] += -6.0f;
//             if (o.rawData[oTimer] >= 21)
//                 o.activeFlags = ACTIVE_FLAG_DEACTIVATED;

//             o.rawData[oFaceAnglePitch] = 0x2000;
//             break;
//     }

//     cap_check_quicksand();
}

export const bhv_wing_cap_init = () => {
    const o = O.gCurrentObject
    o.rawData[oGravity] = 1.2
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 255
    o.rawData[oCapUnkF8] = 0
}

const cap_scale_vertically = () => {
    const o = O.gCurrentObject
    o.rawData[oCapUnkF8] += 0x2000
    o.header.gfx.scale[1] = coss(o.rawData[oCapUnkF8]) * 0.3 + 0.7
    if (o.rawData[oCapUnkF8] == 0x10000) {
        o.rawData[oCapUnkF8] = 0
        o.rawData[oCapUnkF4] = 2
    }
}

const wing_vanish_cap_act_0 = () => {
    const o = O.gCurrentObject
    let collisionFlags

    o.rawData[oFaceAngleYaw] += o.rawData[oForwardVel] * 128.0
    collisionFlags = object_step()
    if (collisionFlags & OBJ_COL_FLAG_GROUNDED) {
        cap_check_quicksand()
        if (o.rawData[oVelY] != 0.0) {
            o.rawData[oCapUnkF4] = 1
            o.rawData[oVelY] = 0.0
        }
    }

    if (o.rawData[oCapUnkF4] == 1) {
        cap_scale_vertically()
    }
}

export const bhv_wing_vanish_cap_loop = () => {
    const o = O.gCurrentObject
    switch (o.rawData[oAction]) {
        case 0:
            wing_vanish_cap_act_0()
            break

        default:
            object_step()
            cap_sink_quicksand()
            break
    }

    if (o.rawData[oTimer] > 20)
        cur_obj_become_tangible()

    cap_despawn()
    cap_set_hitbox()
}

export const bhv_metal_cap_init = () => {
    o.rawData[oGravity] = 2.4
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 1.5
    o.rawData[oOpacity] = 0xFF
}

// void metal_cap_act_0(void) {
//     s16 sp1E;

//     o.rawData[oFaceAngleYaw] += o.rawData[oForwardVel] * 128.0f;
//     sp1E = object_step();
//     if (sp1E & 0x01)
//         cap_check_quicksand();
// }

export const bhv_metal_cap_loop = () => {
//     switch (o.rawData[oAction]) {
//         case 0:
//             metal_cap_act_0();
//             break;

//         default:
//             object_step();
//             cap_sink_quicksand();
//             break;
//     }

//     if (o.rawData[oTimer] > 20)
//         cur_obj_become_tangible();

//     cap_set_hitbox();
//     cap_despawn();
}

export const bhv_normal_cap_init = () => {
    o.rawData[oGravity] = 0.7
    o.rawData[oFriction] = 0.89
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 0xFF

    // save_file_set_cap_pos(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
}

// void normal_cap_set_save_flags(void) {
//     save_file_clear_flags(SAVE_FLAG_CAP_ON_GROUND);

//     switch (gCurrCourseNum) {
//         case COURSE_SSL:
//             save_file_set_flags(SAVE_FLAG_CAP_ON_KLEPTO);
//             break;

//         case COURSE_SL:
//             save_file_set_flags(SAVE_FLAG_CAP_ON_MR_BLIZZARD);
//             break;

//         case COURSE_TTM:
//             save_file_set_flags(SAVE_FLAG_CAP_ON_UKIKI);
//             break;

//         default:
//             save_file_set_flags(SAVE_FLAG_CAP_ON_KLEPTO);
//             break;
//     }
// }

// void normal_cap_act_0(void) {
//     s16 sp1E;

//     o.rawData[oFaceAngleYaw] += o.rawData[oForwardVel] * 128.0f;
//     o.rawData[oFaceAnglePitch] += o.rawData[oForwardVel] * 80.0f;
//     sp1E = object_step();
//     if (sp1E & 0x01) {
//         cap_check_quicksand();

//         if (o.rawData[oVelY] != 0.0f) {
//             o.rawData[oCapUnkF4] = 1;
//             o.rawData[oVelY] = 0.0f;
//             o.rawData[oFaceAnglePitch] = 0;
//         }
//     }

//     if (o.rawData[oCapUnkF4] == 1)
//         cap_scale_vertically();
// }

export const bhv_normal_cap_loop = () => {
//     switch (o.rawData[oAction]) {
//         case 0:
//             normal_cap_act_0();
//             break;

//         default:
//             object_step();
//             cap_sink_quicksand();
//             break;
//     }

//     if ((s32) o.rawData[oForwardVel] != 0)
//         save_file_set_cap_pos(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ]);

//     if (o.activeFlags == ACTIVE_FLAG_DEACTIVATED)
//         normal_cap_set_save_flags();

//     if (cap_set_hitbox() == 1)
//         save_file_clear_flags(SAVE_FLAG_CAP_ON_GROUND);
}

export const bhv_vanish_cap_init = () => {
    o.rawData[oGravity] = 1.2
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 150
}
