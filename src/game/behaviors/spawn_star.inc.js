import { ObjectListProcessorInstance as ObjectListProc, TIME_STOP_ENABLED, TIME_STOP_MARIO_AND_DOORS } from "../ObjectListProcessor"
import { oFaceAngleYaw, oInteractStatus, oBehParams, oBehParams2ndByte, oPosX, oPosY, oPosZ, oHomeX, oHomeZ, oHomeY, oFaceAnglePitch, oFaceAngleRoll, oMoveAngleYaw, oStarSpawnDisFromHome, oVelY, oForwardVel, oStarSpawnUnkFC, ACTIVE_FLAG_INITIATED_TIME_STOP, oAction, oTimer } from "../../include/object_constants"
import { INT_STATUS_INTERACTED, INTERACT_STAR_OR_KEY } from "../Interaction"
import { save_file_get_star_flags, } from "../SaveFile"
import { AreaInstance as Area } from "../Area"
import { MODEL_TRANSPARENT_STAR, MODEL_STAR, MODEL_NONE } from "../../include/model_ids"
import { clear_time_stop_flags, cur_obj_become_intangible, cur_obj_become_tangible, obj_mark_for_deletion, set_time_stop_flags, spawn_object, spawn_object_abs_with_rot, obj_set_hitbox } from "../ObjectHelpers"
import { bhvSparkleSpawn, bhvStarSpawnCoordinates } from "../BehaviorData"
import { atan2s, sqrtf } from "../../engine/math_util"
import { COURSE_BBH } from "../../include/course_table"
import { CUTSCENE_RED_COIN_STAR_SPAWN, CUTSCENE_STAR_SPAWN } from "../Camera"
import { CameraInstance as Camera } from "../Camera"
import { obj_move_xyz_using_fvel_and_yaw } from "../ObjBehaviors"
import { sins } from "../../utils"
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound"
import { SOUND_ENV_STAR, SOUND_GENERAL_STAR_APPEARS } from "../../include/sounds"
import { SpawnObjectInstance as SpawnObject } from "../SpawnObject"

const sCollectStarHitbox = {
    interactType:      INTERACT_STAR_OR_KEY,
    downOffset:        0,
    damageOrCoinValue: 0,
    health:            0,
    numLootCoins:      0,
    radius:            80,
    height:            50,
    hurtboxRadius:     0,
    hurtboxHeight:     0
}

const bhv_collect_star_init = () => {
    const o = ObjectListProc.gCurrentObject

    let starId
    let currentLevelStarFlags

    starId = (o.rawData[oBehParams] >> 24) & 0xFF
    currentLevelStarFlags = save_file_get_star_flags(Area.gCurrSaveFileNum - 1, Area.gCurrCourseNum - 1)
    /*if (currentLevelStarFlags & (1 << starId)) {
        o.gfx.sharedChild = Area.gLoadedGraphNodes[MODEL_TRANSPARENT_STAR]
    } else {
        o.gfx.sharedChild = Area.gLoadedGraphNodes[MODEL_STAR]
    }*/

    obj_set_hitbox(o, sCollectStarHitbox)
}

const bhv_collect_star_loop = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oFaceAngleYaw] += 0x800

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        SpawnObject.mark_obj_for_deletion(o)
        o.rawData[oInteractStatus] = 0
    }
}

export const bhv_star_spawn_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oMoveAngleYaw] = atan2s(o.rawData[oHomeZ] - o.rawData[oPosZ], o.rawData[oHomeX] - o.rawData[oPosX])
    o.rawData[oStarSpawnDisFromHome] = sqrtf((o.rawData[oHomeX] - o.rawData[oPosX]) ** 2 + (o.rawData[oHomeZ] - o.rawData[oPosZ]) ** 2)
    o.rawData[oVelY] = (o.rawData[oHomeY] - o.rawData[oPosY]) / 30.0
    o.rawData[oForwardVel] = o.rawData[oStarSpawnDisFromHome] / 30.0
    o.rawData[oStarSpawnUnkFC] = o.rawData[oPosY]

    if (o.rawData[oBehParams2ndByte] == 0 || gCurrCourseNum == COURSE_BBH) {
        Camera.cutscene_object(CUTSCENE_STAR_SPAWN, o)
    } else {
        Camera.cutscene_object(CUTSCENE_RED_COIN_STAR_SPAWN, o)
    }

    set_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_MARIO_AND_DOORS)
    o.activeFlags |= ACTIVE_FLAG_INITIATED_TIME_STOP
    cur_obj_become_intangible()
}

export const bhv_star_spawn_loop = () =>{
    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case 0:
            o.rawData[oFaceAngleYaw] += 0x1000
            if (o.rawData[oTimer] > 20) {
                o.rawData[oAction] = 1
            }
            break
        
        case 1:
            obj_move_xyz_using_fvel_and_yaw(o)
            o.rawData[oStarSpawnUnkFC] += o.rawData[oVelY]
            o.rawData[oPosY] = o.rawData[oStarSpawnUnkFC] + sins((o.rawData[oTimer] * 0x8000) / 30) * 400.0
            o.rawData[oFaceAngleYaw] += 0x1000
            spawn_object(o, MODEL_NONE, bhvSparkleSpawn)
            cur_obj_play_sound_1(SOUND_ENV_STAR)
            if (o.rawData[oTimer] == 30) {
                o.rawData[oAction] = 2
                o.rawData[oForwardVel] = 0
                // play_power_star_jingle(true)
            }
            break

        case 2:
            if (o.rawData[oTimer] < 20) {
                o.rawData[oVelY] = 20 - o.rawData[oTimer]
            } else {
                o.rawData[oVelY] = -10.0
            }

            spawn_object(o, MODEL_NONE, bhvSparkleSpawn)
            obj_move_xyz_using_fvel_and_yaw(o)
            o.rawData[oFaceAngleYaw] = o.rawData[oFaceAngleYaw] - o.rawData[oTimer] * 0x10 + 0x1000
            cur_obj_play_sound_1(SOUND_ENV_STAR)

            if (o.rawData[oPosY] < o.rawData[oHomeY]) {
                cur_obj_play_sound_2(SOUND_GENERAL_STAR_APPEARS)
                cur_obj_become_tangible()
                o.rawData[oPosY] = o.rawData[oHomeY]
                o.rawData[oAction] = 3
            }
            break

        case 3:
            o.rawData[oFaceAngleYaw] += 0x800
            if (o.rawData[oTimer] == 20) {
                Camera.gObjCutsceneDone = true
                clear_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_MARIO_AND_DOORS)
                o.activeFlags &= ~ACTIVE_FLAG_INITIATED_TIME_STOP
            }

            if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
                obj_mark_for_deletion(o)
                o.rawData[oInteractStatus] = 0
            }
            break
    }
}

const spawn_star = (sp30, sp34, sp38, sp3C) => {
    const o = ObjectListProc.gCurrentObject

    sp30 = spawn_object_abs_with_rot(o, MODEL_STAR, bhvStarSpawnCoordinates, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 0, 0, 0)
    sp30.rawData[oBehParams] = o.rawData[oBehParams]
    sp30.rawData[oHomeX] = sp34
    sp30.rawData[oHomeY] = sp38
    sp30.rawData[oHomeZ] = sp3C
    sp30.rawData[oFaceAnglePitch] = 0
    sp30.rawData[oFaceAngleRoll] = 0
    return sp30
}

export const spawn_default_star = (sp20, sp24, sp28) => {
    let sp1C = new Object()
    sp1C = spawn_star(sp1C, sp20, sp24, sp28)
    sp1C.rawData[oBehParams2ndByte] = 0
}

gLinker.bhv_collect_star_init = bhv_collect_star_init
gLinker.bhv_collect_star_loop = bhv_collect_star_loop
gLinker.bhv_star_spawn_init = bhv_star_spawn_init
gLinker.bhv_star_spawn_loop = bhv_star_spawn_loop