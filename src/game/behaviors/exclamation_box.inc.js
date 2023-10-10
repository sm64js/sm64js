// exclamation_box.c.inc
import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_hide,
cur_obj_unhide, obj_mark_for_deletion, cur_obj_scale, obj_turn_toward_object, approach_symmetric,
cur_obj_move_using_fvel_and_gravity, cur_obj_was_attacked_or_ground_pounded, obj_set_hitbox } from "../ObjectHelpers"
import { s16, random_float, sins } from "../../utils"
import { spawn_mist_particles_variable  } from "./white_puff.inc"
import { spawn_triangle_break_particles } from "./break_particles.inc"
import { create_sound_spawner } from "../SpawnSound"
import { oAction,  oAnimState,  oBehParams2ndByte,  oBehParams,  oExclamationBoxUnkF4, 
oExclamationBoxUnkF8,  oExclamationBoxUnkFC,  oFlags,  oFloorHeight,  oForwardVel,  oGraphYOffset, 
oGravity,  oHomeY,  oInteractStatus,  oMoveAngleYaw,  oPosY,  oTimer,  oVelY } from "../../include/object_constants"
import { MODEL_1UP, MODEL_EXCLAMATION_POINT, MODEL_EXCLAMATION_BOX, MODEL_EXCLAMATION_BOX_OUTLINE,
MODEL_KOOPA_SHELL, MODEL_MARIOS_CAP, MODEL_MARIOS_METAL_CAP, MODEL_MARIOS_WING_CAP, MODEL_NONE,
MODEL_STAR, MODEL_YELLOW_COIN } from "../../include/model_ids"
import { SOUND_GENERAL_BREAK_BOX } from "../../include/sounds"
import { INTERACT_BREAKABLE } from "../Interaction"
import { save_file_get_flags,  SAVE_FLAG_HAVE_WING_CAP, SAVE_FLAG_HAVE_METAL_CAP,
SAVE_FLAG_HAVE_VANISH_CAP } from "../SaveFile"


const sExclamationBoxHitbox = {
     interactType:  INTERACT_BREAKABLE,
     downOffset:  5,
     damageOrCoinValue:  0,
     health:  1,
     numLootCoins:  0,
     radius:  40,
     height:  30,
     hurtboxRadius:  40,
     hurtboxHeight:  30,
};

// struct Struct802C0DF0 {
//     u8 type;
//     u8 unk1;
//     u8 unk2;
//     u8 model;
//     const BehaviorScript *behavior;
// };

const sExclamationBoxContents_init = () => {
    sExclamationBoxContents = {}

}

let _sExclamationBoxContents;
const sExclamationBoxContents = (type) => {
    if (!_sExclamationBoxContents) {
        let proto = [
            [  0, 0, 0, MODEL_MARIOS_WING_CAP,  'bhvWingCap' ],
            [  1, 0, 0, MODEL_MARIOS_METAL_CAP, 'bhvMetalCap' ],
            [  2, 0, 0, MODEL_MARIOS_CAP,       'bhvVanishCap' ],
            [  3, 0, 0, MODEL_KOOPA_SHELL,      'bhvKoopaShell' ],
            [  4, 0, 0, MODEL_YELLOW_COIN,      'bhvSingleCoinGetsSpawned' ],
            [  5, 0, 0, MODEL_NONE,             'bhvThreeCoinsSpawn' ],
            [  6, 0, 0, MODEL_NONE,             'bhvTenCoinsSpawn' ],
            [  7, 0, 0, MODEL_1UP,              'bhv1upWalking' ],
            [  8, 0, 0, MODEL_STAR,             'bhvSpawnedStar' ],
            [  9, 0, 0, MODEL_1UP,              'bhv1upRunningAway' ],
            [ 10, 0, 1, MODEL_STAR,             'bhvSpawnedStar' ],
            [ 11, 0, 2, MODEL_STAR,             'bhvSpawnedStar' ],
            [ 12, 0, 3, MODEL_STAR,             'bhvSpawnedStar' ],
            [ 13, 0, 4, MODEL_STAR,             'bhvSpawnedStar' ],
            [ 14, 0, 5, MODEL_STAR,             'bhvSpawnedStar' ] ]

        _sExclamationBoxContents = {}
        proto.forEach(c => {
            _sExclamationBoxContents[c[0]] = {
                unk2: c[2], model: c[3], behavior: c[4]
            }
        })
    }

    return _sExclamationBoxContents[type]
}

const bhv_rotating_exclamation_box_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.parentObj.rawData[oAction] != 1)
        obj_mark_for_deletion(o)
}


const cap_flags = [ SAVE_FLAG_HAVE_WING_CAP, SAVE_FLAG_HAVE_METAL_CAP, SAVE_FLAG_HAVE_VANISH_CAP ]

const DEBUG_HAVE = SAVE_FLAG_HAVE_WING_CAP | SAVE_FLAG_HAVE_METAL_CAP | SAVE_FLAG_HAVE_VANISH_CAP

const exclamation_box_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oBehParams2ndByte] < 3) {
        o.rawData[oAnimState] = o.rawData[oBehParams2ndByte]
        if ((save_file_get_flags(DEBUG_HAVE) & cap_flags[o.rawData[oBehParams2ndByte]])
            || ((o.rawData[oBehParams] >> 24) & 0xFF) != 0)
            o.rawData[oAction] = 2
        else
            o.rawData[oAction] = 1
    } else {
        o.rawData[oAnimState] = 3
        o.rawData[oAction] = 2
    }
}

const exclamation_box_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_become_intangible()
    if (o.rawData[oTimer] == 0) {
        spawn_object(o, MODEL_EXCLAMATION_POINT, bhvRotatingExclamationMark)
        cur_obj_set_model(MODEL_EXCLAMATION_BOX_OUTLINE)
    }
    if ((save_file_get_flags(DEBUG_HAVE) & cap_flags[o.rawData[oBehParams2ndByte]])
        || ((o.rawData[oBehParams] >> 24) & 0xFF) != 0) {
        o.rawData[oAction] = 2
        cur_obj_set_model(MODEL_EXCLAMATION_BOX)
    }
}

const exclamation_box_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    obj_set_hitbox(o, sExclamationBoxHitbox)
    if (o.rawData[oTimer] == 0) {
        cur_obj_unhide()
        cur_obj_become_tangible()
        o.rawData[oInteractStatus] = 0
        o.rawData[oPosY] = o.rawData[oHomeY]
        o.rawData[oGraphYOffset] = 0.0
    }
    if (cur_obj_was_attacked_or_ground_pounded()) {
        cur_obj_become_intangible()
        o.rawData[oExclamationBoxUnkFC] = 0x4000
        o.rawData[oVelY] = 30.0
        o.rawData[oGravity] = -8.0
        o.rawData[oFloorHeight] = o.rawData[oPosY]
        o.rawData[oAction] = 3
    }
    gLinker.SurfaceLoad.load_object_collision_model()
}

const exclamation_box_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_move_using_fvel_and_gravity()
    if (o.rawData[oVelY] < 0.0) {
        o.rawData[oVelY] = 0.0
        o.rawData[oGravity] = 0.0
    }
    o.rawData[oExclamationBoxUnkF8] = (sins(o.rawData[oExclamationBoxUnkFC]) + 1.0) * 0.3 + 0.0
    o.rawData[oExclamationBoxUnkF4] = (-sins(o.rawData[oExclamationBoxUnkFC]) + 1.0) * 0.5 + 1.0
    o.rawData[oGraphYOffset] = (-sins(o.rawData[oExclamationBoxUnkFC]) + 1.0) * 26.0
    o.rawData[oExclamationBoxUnkFC] = s16(o.rawData[oExclamationBoxUnkFC] + 0x1000)
    o.gfx.scale[0] = o.rawData[oExclamationBoxUnkF4] * 2.0
    o.gfx.scale[1] = o.rawData[oExclamationBoxUnkF8] * 2.0
    o.gfx.scale[2] = o.rawData[oExclamationBoxUnkF4] * 2.0
    if (o.rawData[oTimer] == 7) {
        o.rawData[oAction] = 4
    }
}

const exclamation_box_spawn_contents = (type) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let obj
    const contents = sExclamationBoxContents(type)

    obj = spawn_object(o, contents.model, contents.behavior)
    obj.rawData[oVelY] = 20.0
    obj.rawData[oForwardVel] = 3.0
    obj.rawData[oMoveAngleYaw] = gMarioObject.rawData[oMoveAngleYaw]
    o.rawData[oBehParams] |= contents.unk2 << 24
    if (contents.model == MODEL_STAR) {
        o.rawData[oFlags] |= 0x4000
    }
}

const exclamation_box_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    exclamation_box_spawn_contents(o.rawData[oBehParams2ndByte])
    spawn_mist_particles_variable(0, 0, 46.0)
    spawn_triangle_break_particles(20, 139, 0.3, o.rawData[oAnimState])
    create_sound_spawner(SOUND_GENERAL_BREAK_BOX)
    if (o.rawData[oBehParams2ndByte] < 3) {
        o.rawData[oAction] = 5
        cur_obj_hide()
    } else {
        obj_mark_for_deletion(o)
    }
}

const exclamation_box_act_5 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] > 300)
        o.rawData[oAction] = 2
}

const sExclamationBoxActions = [ exclamation_box_act_0, exclamation_box_act_1,
                                 exclamation_box_act_2, exclamation_box_act_3,
                                 exclamation_box_act_4, exclamation_box_act_5 ]

const bhv_exclamation_box_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_scale(2.0)
    sExclamationBoxActions[o.rawData[oAction]]()
}


gLinker.bhv_rotating_exclamation_box_loop = bhv_rotating_exclamation_box_loop
gLinker.bhv_exclamation_box_loop = bhv_exclamation_box_loop
