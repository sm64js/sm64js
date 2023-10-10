// // cap.c.inc
import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_hide,
cur_obj_unhide, obj_mark_for_deletion, cur_obj_scale, obj_turn_toward_object, approach_symmetric,
cur_obj_move_using_fvel_and_gravity, cur_obj_was_attacked_or_ground_pounded, obj_set_hitbox } from
"../ObjectHelpers"
import { object_step, obj_flicker_and_disappear, OBJ_COL_FLAG_GROUNDED, sObjFloor } from "../ObjBehaviors"
import { sins, coss, int16, s16, random_int16, random_float } from "../../utils"
import { oPosX, oPosY, oPosZ, oVelY, oFaceAnglePitch, oFaceAngleYaw, oMoveAngleYaw, oMoveAnglePitch,
oForwardVel, oHomeX, oHomeY, oHomeZ, oAction, oAnimState, oTimer, oDistanceToMario, oInteractStatus,
oBehParams2ndByte, oExclamationBoxUnkF4, oExclamationBoxUnkF8, oExclamationBoxUnkFC, oGraphYOffset,
oGravity, oFloorHeight, oFlags, oBehParams, oFriction, oBuoyancy, oOpacity, oCapUnkF4, oCapUnkF8,
ACTIVE_FLAG_DEACTIVATED, } from "../../include/object_constants"
import { INTERACT_CAP, INT_STATUS_INTERACTED } from "../Interaction"
import { SURFACE_DEATH_PLANE, SURFACE_DEEP_MOVING_QUICKSAND, SURFACE_DEEP_QUICKSAND, SURFACE_INSTANT_MOVING_QUICKSAND, SURFACE_INSTANT_QUICKSAND, SURFACE_MOVING_QUICKSAND, SURFACE_QUICKSAND, SURFACE_SHALLOW_MOVING_QUICKSAND, SURFACE_SHALLOW_QUICKSAND } from "../../include/surface_terrains"
import { save_file_clear_flags, save_file_set_cap_pos } from "../SaveFile"


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
    const o = gLinker.ObjectListProcessor.gCurrentObject
    obj_set_hitbox(o, sCapHitbox)
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
        o.rawData[oInteractStatus] = 0
        return true
    }

    return false
}

const cap_despawn = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] > 300) {
        obj_flicker_and_disappear(o, 300)
    }
}

const cap_check_quicksand = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (sObjFloor == null) return

    switch (sObjFloor.type) {
        case SURFACE_DEATH_PLANE:
            o.activeFlags = ACTIVE_FLAG_DEACTIVATED
            break
        case SURFACE_SHALLOW_QUICKSAND:
        case SURFACE_DEEP_QUICKSAND:
        case SURFACE_QUICKSAND:
            o.rawData[oAction] = 10
            o.rawData[oForwardVel] = 0.0
            break

        case SURFACE_DEEP_MOVING_QUICKSAND:
        case SURFACE_SHALLOW_MOVING_QUICKSAND:
        case SURFACE_MOVING_QUICKSAND:
            o.rawData[oAction] = 11
            o.rawData[oMoveAngleYaw] = (sObjFloor.force * 0xFF) << 8
            o.rawData[oForwardVel] = 8 + 2 * (0 - ((sObjFloor.force & 0xFF00) >> 8))
            break
        
        case SURFACE_INSTANT_QUICKSAND:
            o.rawData[oAction] = 12
            o.rawData[oForwardVel] = 0.0
            break
        
        case SURFACE_INSTANT_MOVING_QUICKSAND:
            o.rawData[oAction] = 13
            o.rawData[oMoveAngleYaw] = (sObjFloor.force & 0xFF) << 8
            o.rawData[oForwardVel] = 8 + 2 * (0 - ((sObjFloor.force & 0xFF00) >> 8))
            break
    }
}

const cap_sink_quicksand = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case 10:
            if (o.rawData[oTimer] < 10) {
                o.rawData[oGraphYOffset] += -1.0;
                o.rawData[oFaceAnglePitch] = 0x2000;
            }
            break;

        case 11:
            if (o.rawData[oTimer] < 10) {
                o.rawData[oGraphYOffset] += -3.0;
            }
            o.rawData[oFaceAnglePitch] = 0x2000;
            break;

        case 12:
            o.rawData[oGraphYOffset] += -1.0;
            if (o.rawData[oTimer] >= 21) {
                o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
            }
            break;

        case 13:
            o.rawData[oGraphYOffset] += -6.0;
            if (o.rawData[oTimer] >= 21) {
                o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
            }
            o.rawData[oFaceAnglePitch] = 0x2000;
            break;
    }

    cap_check_quicksand();
}

const bhv_wing_cap_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 1.2
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 255
    o.rawData[oCapUnkF8] = 0
}

const cap_scale_vertically = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oCapUnkF8] += 0x2000
    o.gfx.scale[1] = coss(o.rawData[oCapUnkF8]) * 0.3 + 0.7
    if (o.rawData[oCapUnkF8] == 0x10000) {
        o.rawData[oCapUnkF8] = 0
        o.rawData[oCapUnkF4] = 2
    }
}

const wing_vanish_cap_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
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

const bhv_wing_vanish_cap_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
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
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 2.4
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 1.5
    o.rawData[oOpacity] = 0xFF
}

const metal_cap_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oFaceAngleYaw] += o.rawData[oForwardVel] * 128.0
    let collisionFlags = object_step()

    if (collisionFlags & OBJ_COL_FLAG_GROUNDED) {
        cap_check_quicksand()
    }
}

export const bhv_metal_cap_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    switch (o.rawData[oAction]) {
        case 0:
            metal_cap_act_0();
            break;

        default:
            object_step();
            cap_sink_quicksand();
            break;
    }

    if (o.rawData[oTimer] > 20)
        cur_obj_become_tangible();

    cap_set_hitbox();
    cap_despawn();
}

const bhv_normal_cap_init = () => {
    o.rawData[oGravity] = 0.7
    o.rawData[oFriction] = 0.89
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 0xFF

    save_file_set_cap_pos(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
}

const normal_cap_set_save_flags = () => {
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
}

const normal_cap_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let sp1E;

    o.rawData[oFaceAngleYaw] += o.rawData[oForwardVel] * 128.0;
    o.rawData[oFaceAnglePitch] += o.rawData[oForwardVel] * 80.0;
    sp1E = object_step();
    if (sp1E & 0x01) {
        cap_check_quicksand();

        if (o.rawData[oVelY] != 0.0) {
            o.rawData[oCapUnkF4] = 1;
            o.rawData[oVelY] = 0.0;
            o.rawData[oFaceAnglePitch] = 0;
        }
    }

    if (o.rawData[oCapUnkF4] == 1)
        cap_scale_vertically();
}

const bhv_normal_cap_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    switch (o.rawData[oAction]) {
        case 0:
            normal_cap_act_0();
            break;

        default:
            object_step();
            cap_sink_quicksand();
            break;
    }

    if (o.rawData[oForwardVel] != 0)
        save_file_set_cap_pos(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ]);

    if (o.activeFlags == ACTIVE_FLAG_DEACTIVATED)
        normal_cap_set_save_flags();

    if (cap_set_hitbox() == 1)
        save_file_clear_flags(SAVE_FLAG_CAP_ON_GROUND);
}

const bhv_vanish_cap_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 1.2
    o.rawData[oFriction] = 0.999
    o.rawData[oBuoyancy] = 0.9
    o.rawData[oOpacity] = 150
}


gLinker.bhv_metal_cap_init = bhv_metal_cap_init
gLinker.bhv_metal_cap_loop = bhv_metal_cap_loop
gLinker.bhv_normal_cap_init = bhv_normal_cap_init
gLinker.bhv_normal_cap_loop = bhv_normal_cap_loop
gLinker.bhv_vanish_cap_init = bhv_vanish_cap_init
gLinker.bhv_wing_cap_init = bhv_wing_cap_init
gLinker.bhv_wing_vanish_cap_loop = bhv_wing_vanish_cap_loop
