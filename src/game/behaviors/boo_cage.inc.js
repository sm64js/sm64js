import {
    oBooDeathStatus, oAction, oVelY, oFaceAnglePitch, oFaceAngleRoll, oMoveFlags, oTimer,
    
    OBJ_MOVE_LANDED, OBJ_MOVE_UNDERWATER_ON_GROUND, OBJ_MOVE_AT_WATER_SURFACE,
    OBJ_MOVE_ON_GROUND
} from "../../include/object_constants"

import {
    obj_copy_pos_and_angle, obj_set_hitbox, cur_obj_update_floor_and_walls, cur_obj_move_standard, cur_obj_become_tangible,
    spawn_object, cur_obj_scale, obj_check_if_collided_with_object, cur_obj_become_intangible
} from "../ObjectHelpers"

import {
    MODEL_NONE
} from "../../include/model_ids"

import {
    bhvSparkleSpawn
} from "../BehaviorData"

import { play_puzzle_jingle } from "../../audio/external"
import { SOUND_GENERAL_SOFT_LANDING } from "../../include/sounds"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { INTERACT_BBH_ENTRANCE } from "../Interaction"
import { BOO_DEATH_STATUS_ALIVE } from "./boo.inc"

const sBooCageHitbox = {
    interactType:       INTERACT_BBH_ENTRANCE,
    downOffset:         0,
    damageOrCoinValue:  0,
    health:             0,
    numLootCoins:       0,
    radius:             120,
    height:             300,
    hurtboxRadius:      0,
    hurtboxHeight:      0,
}

/* Boo Cage */
    /* oAction */
const BOO_CAGE_ACT_IN_BOO           = 0
const BOO_CAGE_ACT_FALLING          = 1
const BOO_CAGE_ACT_ON_GROUND        = 2
const BOO_CAGE_ACT_MARIO_JUMPING_IN = 3
const BOO_CAGE_ACT_USELESS          = 4

export const bhv_boo_cage_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    obj_set_hitbox(o, sBooCageHitbox);

    switch (o.rawData[oAction]) {
        case BOO_CAGE_ACT_IN_BOO:
            // Don't let Mario enter BBH until the boo is killed
            cur_obj_become_intangible();

            // Useless scale. This is also found in the code for BOO_CAGE_ACT_ON_GROUND.
            // Was the boo cage originally meant to have been shrunk and grow while falling?
            cur_obj_scale(1.0);

            // If the cage's parent boo is killed, set the action to BOO_CAGE_ACT_FALLING,
            // give the cage an initial Y velocity of 60 units/frame, and play the puzzle jingle.
            // Otherwise, stay inside the boo.
            if (o.parentObj.rawData[oBooDeathStatus] != BOO_DEATH_STATUS_ALIVE) {
                o.rawData[oAction]++;
                o.rawData[oVelY] = 60.0;
                play_puzzle_jingle();
            } else {
                obj_copy_pos_and_angle(o, o.parentObj);
            }

            break;

        case BOO_CAGE_ACT_FALLING:
            // Reset pitch and roll. This is useless, since the cage never rotates.
            // Was it meant to rotate inside the boo, like the beta boo key?
            o.rawData[oFaceAnglePitch] = 0;
            o.rawData[oFaceAngleRoll] = 0;

            // Apply standard physics to the cage.
            cur_obj_update_floor_and_walls();
            cur_obj_move_standard(-78);

            // Spawn sparkles while the cage falls.
            spawn_object(o, MODEL_NONE, bhvSparkleSpawn);

            // When the cage lands/bounces, play a landing/bouncing sound.
            if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
                cur_obj_play_sound_2(SOUND_GENERAL_SOFT_LANDING);
            }

            // Once the cage stops bouncing and settles on the ground,
            // set the action to BOO_CAGE_ACT_ON_GROUND.
            // This is the only use of the OBJ_MOVE_AT_WATER_SURFACE flag in the game.
            // It seems to serve no purpose here.
            if (o.rawData[oMoveFlags] & (OBJ_MOVE_UNDERWATER_ON_GROUND | OBJ_MOVE_AT_WATER_SURFACE | OBJ_MOVE_ON_GROUND)) {
                o.rawData[oAction]++;
            }

            break;

        case BOO_CAGE_ACT_ON_GROUND:
            // Allow Mario to enter the cage once it's still on the ground.
            cur_obj_become_tangible();

            // The other useless scale
            cur_obj_scale(1.0);

            // Set the action to BOO_CAGE_ACT_MARIO_JUMPING_IN when Mario jumps in.
            if (obj_check_if_collided_with_object(o, gMarioObject)) {
                o.rawData[oAction]++;
            }

            break;

        case BOO_CAGE_ACT_MARIO_JUMPING_IN:
            // All this action does is wait 100 frames after Mario starts
            // jumping into the cage to set the action to BOO_CAGE_ACT_USELESS,
            // which does nothing. By extension, this action is also useless.

            if (o.rawData[oTimer] > 100) {
                o.rawData[oAction]++;
            }

            break;

        case BOO_CAGE_ACT_USELESS:
            break;
    }
}

gLinker.bhv_boo_cage_loop = bhv_boo_cage_loop