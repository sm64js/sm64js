/**
 * Behavior for bhvCoffinSpawner and bhvCoffin.
 * The coffins are spawned by a singular spawner,
 * with half being able to stand up.
 * Coffins unload after leaving the room.
 */

import { MODEL_BBH_WOODEN_TOMB } from "../../include/model_ids"
import { ACTIVE_FLAG_IN_DIFFERENT_ROOM, COFFIN_ACT_IDLE, COFFIN_ACT_STAND_UP, COFFIN_BP_STATIC, COFFIN_SPAWNER_ACT_COFFINS_UNLOADED, oAction, oAngleVelPitch, oBehParams2ndByte, oDistanceToMario, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAngleYaw, oPosX, oPosY, oPosZ, oTimer } from "../../include/object_constants"
import { SOUND_GENERAL_BUTTON_PRESS_2_LOWPRIO, SOUND_GENERAL_ELEVATOR_MOVE_2 } from "../../include/sounds"
import { coss, sins } from "../../utils"
import { bhvCoffin } from "../BehaviorData"
import { ACT_SQUISHED } from "../Mario"
import { obj_face_pitch_approach, obj_perform_position_op, obj_set_dist_from_home, POS_OP_RESTORE_POSITION, POS_OP_SAVE_POSITION } from "../ObjBehaviors2"
import { absf, approach_s16_symmetric, approach_symmetric, obj_mark_for_deletion, spawn_object_relative } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { spawn_mist_from_global } from "./ground_particles.inc"

/**
 * struct Lateral Position {
 *     s16 x;
 *     s16 z;
 * };
 */
const x = 0
const z = 1

/**
 * Array of positions for all coffins relative to their spawner.
 */
const coffinRelativePos = [
    [412, -150], [762, -150], [1112, -150],
    [412,  150], [762,  150], [1112,  150],
]

/**
 * Loop behavior for the object that spawns the six coffins in BBH.
 * Loads the coffins when in the room, they unload themselves.
 */
export const bhv_coffin_spawner_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let coffin
    let relativeZ

    if (o.rawData[oAction] == COFFIN_SPAWNER_ACT_COFFINS_UNLOADED) {
        if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
            for (let i = 0; i < 6; i++) {
                relativeZ = coffinRelativePos[i][z]

                coffin = spawn_object_relative(i & 1, coffinRelativePos[i][x], 0, relativeZ, o, MODEL_BBH_WOODEN_TOMB, bhvCoffin) //bhvCoffin
                
                if (coffin != null) {
                    if (relativeZ > 0) {
                        coffin.rawData[oFaceAngleYaw] = 0x8000;
                    }
                }
            }

            o.rawData[oAction]++
        }
    } else if (o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM) {
        o.rawData[oAction] = COFFIN_SPAWNER_ACT_COFFINS_UNLOADED
    }
}

/**
 * The main action for the coffins. Coffins with COFFIN_BP_STATIC skip the behavior, while
 * the other coffins will enter a standing action when Mario is near.
 * Also controls laying the coffin down after it has stood up.
 */
const coffin_act_idle = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioState = gLinker.LevelUpdate.gMarioState

    if (o.rawData[oBehParams2ndByte] != COFFIN_BP_STATIC) {
        if (o.rawData[oFaceAnglePitch] != 0) {
            o.rawData[oAngleVelPitch] = approach_symmetric(o.rawData[oAngleVelPitch], -2000, 200)

            if (obj_face_pitch_approach(0, -o.rawData[oAngleVelPitch])) {
                cur_obj_play_sound_2(SOUND_GENERAL_ELEVATOR_MOVE_2)

                obj_perform_position_op(POS_OP_SAVE_POSITION)
                o.rawData[oMoveAngleYaw] = o.rawData[oFaceAngleYaw] - 0x4000
                obj_set_dist_from_home(200.0)
                spawn_mist_from_global()
                obj_perform_position_op(POS_OP_RESTORE_POSITION)
            }

            o.rawData[oTimer] = 0
        } else {
            const yawCos = coss(o.rawData[oFaceAngleYaw])
            const yawSin = sins(o.rawData[oFaceAngleYaw])

            const dx = gMarioObject.rawData[oPosX] - o.rawData[oPosX]
            const dz = gMarioObject.rawData[oPosZ] - o.rawData[oPosZ]

            const distForwards = dx * yawCos + dz * yawSin
            const distSideways = dz * yawCos - dx * yawSin

            if (o.rawData[oTimer] > 60
                && (o.rawData[oDistanceToMario] > 100.0 || gMarioState.action == ACT_SQUISHED)
                && gMarioObject.rawData[oPosY] - o.rawData[oPosY] < 200.0 && absf(distForwards) < 140.0
                && distSideways < 150.0 && distSideways > -450.0) {
                cur_obj_play_sound_2(SOUND_GENERAL_BUTTON_PRESS_2_LOWPRIO)
                o.rawData[oAction] = COFFIN_ACT_STAND_UP
            }

            o.rawData[oAngleVelPitch] = 0
        }
    }
}

/**
 * Stand up the coffin and keep it standing until the timer hits 60.
 */
const coffin_act_stand_up = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oFaceAnglePitch] != 0x4000) {
        o.rawData[oAngleVelPitch] = approach_symmetric(o.rawData[oAngleVelPitch], 1000, 200)
        obj_face_pitch_approach(0x4000, o.rawData[oAngleVelPitch])
    } else {
        if (o.rawData[oTimer] > 60) {
            o.rawData[oAction] = COFFIN_ACT_IDLE
            o.rawData[oFaceAngleRoll] = 0
        } else if (o.rawData[oTimer] > 30) {
            if (window.gGlobalTimer % 4 == 0) {
                cur_obj_play_sound_2(SOUND_GENERAL_ELEVATOR_MOVE_2)
            }
            o.rawData[oFaceAngleRoll] = 400 * (window.gGlobalTimer % 2) - 200
        }

        o.rawData[oAngleVelPitch] = 0
    }
}

/**
 * Main behavior for each coffin. Unloads the coffin if the spawner enters
 * that action.
 */
export const bhv_coffin_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.parentObj.rawData[oAction] == COFFIN_SPAWNER_ACT_COFFINS_UNLOADED) {
        obj_mark_for_deletion(o)
    } else {
        o.gfx.scale[1] = 1.1

        switch (o.rawData[oAction]) {
            case COFFIN_ACT_IDLE:
                coffin_act_idle()
                break
            
            case COFFIN_ACT_STAND_UP:
                coffin_act_stand_up()
                break
        }

        gLinker.SurfaceLoad.load_object_collision_model()
    }
}

gLinker.bhv_coffin_spawner_loop = bhv_coffin_spawner_loop
gLinker.bhv_coffin_loop = bhv_coffin_loop