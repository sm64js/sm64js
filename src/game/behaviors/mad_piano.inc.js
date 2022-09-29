// mad_piano.inc.js

import { sqrtf } from "../../engine/math_util"
import { oMoveAngleYaw } from "../../include/object_constants"
import { MAD_PIANO_ACT_WAIT } from "../../include/object_constants"
import { MAD_PIANO_ACT_ATTACK } from "../../include/object_constants"
import { oDistanceToMario } from "../../include/object_constants"
import { oTimer } from "../../include/object_constants"
import { oAction } from "../../include/object_constants"
import { oForwardVel } from "../../include/object_constants"
import { oHomeX } from "../../include/object_constants"
import { oHomeZ } from "../../include/object_constants"
import { oAngleToMario } from "../../include/object_constants"
import { oPosZ } from "../../include/object_constants"
import { oPosX } from "../../include/object_constants"
import { oFaceAngleYaw } from "../../include/object_constants"
import { ACTIVE_FLAG_IN_DIFFERENT_ROOM } from "../../include/object_constants"
import { INTERACT_MR_BLIZZARD } from "../Interaction"
import { obj_check_attacks } from "../ObjBehaviors2"
import { cur_obj_move_standard } from "../ObjectHelpers"
import { cur_obj_become_intangible } from "../ObjectHelpers"
import { cur_obj_update_floor_and_walls } from "../ObjectHelpers"
import { cur_obj_rotate_yaw_toward } from "../ObjectHelpers"
import { cur_obj_check_if_at_animation_end } from "../ObjectHelpers"
import { cur_obj_become_tangible } from "../ObjectHelpers"
import { cur_obj_init_animation_with_sound } from "../ObjectHelpers"

const sMadPianoHitbox = {
    interactType: INTERACT_MR_BLIZZARD,
    downOffset: 0,
    damageOrCoinValue: 3,
    health: 99,
    numLootCoins: 0,
    radius: 200,
    height: 150,
    hurtboxRadius: 200,
    hurtboxHeight: 150,
}

const mad_piano_act_wait = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
    
    cur_obj_init_animation_with_sound(0)

    if (o.rawData[oDistanceToMario] < 500.0) {
        if (o.rawData[oTimer] > 20 && gMarioStates[0].forwardVel > 10.0) {
            o.rawData[oAction] = MAD_PIANO_ACT_ATTACK
            cur_obj_become_tangible()
        }
    } else {
        o.rawData[oTimer] = 0
    }
}

const mad_piano_act_attack = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_update_floor_and_walls()
    cur_obj_init_animation_with_sound(1)
    // cur_obj_play_sound_at_anim_range(0, 0, SOUND_OBJ_MAD_PIANO_CHOMPING);

    if (o.rawData[oDistanceToMario] < 500.0) {
        o.rawData[oTimer] = 0
    }

    if (o.rawData[oTimer] > 80 && cur_obj_check_if_at_animation_end()) {
        o.rawData[oAction] = MAD_PIANO_ACT_WAIT
        o.rawData[oForwardVel] = 0.0
        cur_obj_become_intangible()
    } else {
        let dx = o.rawData[oPosX] - o.rawData[oHomeX]
        let dz = o.rawData[oPosZ] - o.rawData[oHomeZ]
        let distToHome = sqrtf(dx * dx + dz * dz)

        if (distToHome > 400.0) {
            distToHome = 400.0 / distToHome
            o.rawData[oPosX] = o.rawData[oHomeX] + dx * distToHome
            o.rawData[oPosZ] = o.rawData[oHomeZ] + dz * distToHome
        }

        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 400)
        o.rawData[oForwardVel] = 5.0
    }

    obj_check_attacks(sMadPianoHitbox, o.rawData[oAction])
    cur_obj_move_standard(78)
}

export const bhv_mad_piano_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        o.rawData[oFaceAngleYaw] = o.rawData[oMoveAngleYaw] - 0x4000

        switch (o.rawData[oAction]) {
            case MAD_PIANO_ACT_WAIT:
                mad_piano_act_wait()
                break
            case MAD_PIANO_ACT_ATTACK:
                mad_piano_act_attack()
                break
        }
    }
}

gLinker.bhv_mad_piano_update = bhv_mad_piano_update