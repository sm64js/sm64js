// // sparkle_spawn_star.c.inc
import * as _Linker from "../../game/Linker"
import { oInteractionSubtype, oBehParams, oInteractStatus, oHomeX, oHomeZ, oHomeY, oPosX, oPosZ, oPosY, oForwardVel, oAngleVelYaw, oAction, oTimer, ACTIVE_FLAG_INITIATED_TIME_STOP, oBehParams2ndByte, oMoveAngleYaw, oVelY, oGravity, oFaceAngleYaw } from "../../include/object_constants"
import { COURSE_NUM_TO_INDEX } from "../../levels/course_defines"
import { AreaInstance as Area } from "../Area"
import { INTERACT_STAR_OR_KEY, INT_STATUS_INTERACTED, INT_SUBTYPE_NO_EXIT } from "../Interaction"
import { clear_time_stop_flags, cur_obj_angle_to_home, cur_obj_move_using_vel_and_gravity, cur_obj_set_model, obj_set_angle, set_time_stop_flags, spawn_mist_particles, spawn_object, obj_set_hitbox } from "../ObjectHelpers"
import { save_file_get_star_flags } from "../SaveFile"
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound"
import { SpawnObjectInstance as SpawnObject } from "../SpawnObject"
import { sqrtf } from "../../engine/math_util"
import { CUTSCENE_STAR_SPAWN, CameraInstance as Camera } from "../Camera"
import { TIME_STOP_ENABLED, TIME_STOP_MARIO_AND_DOORS } from "../ObjectListProcessor"
import { MODEL_NONE, MODEL_TRANSPARENT_STAR } from "../../include/model_ids"
import { SOUND_ENV_STAR, SOUND_GENERAL2_STAR_APPEARS } from "../../include/sounds"

let sSparkleSpawnStarHitbox = {
    interactType: INTERACT_STAR_OR_KEY,
    downOffset: 0,
    damageOrCoinValue: 0,
    health: 0,
    numLootCoins: 0,
    radius: 80,
    height: 50,
    hurtboxRadius: 0,
    hurtboxHeight: 0,
}

const bhv_spawned_star_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_NO_EXIT)) {
        o.rawData[oBehParams] = o.parentObj.rawData[oBehParams];
    }

    let starIndex = (o.rawData[oBehParams] >> 24) & 0xFF;

    // if (1 << starIndex & save_file_get_star_flags(Area.gCurrSaveFileNum - 1, COURSE_NUM_TO_INDEX(Area.gCurrCourseNum))) {
    //     cur_obj_set_model(MODEL_TRANSPARENT_STAR);
    // }

    cur_obj_play_sound_2(SOUND_GENERAL2_STAR_APPEARS);
}

const set_sparkle_spawn_star_hitbox = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    obj_set_hitbox(o, sSparkleSpawnStarHitbox);
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        SpawnObject.mark_obj_for_deletion(o);
        o.rawData[oInteractStatus] = 0;
    }
}

const set_home_to_mario = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    o.rawData[oHomeX] = gLinker.Mario.rawData[oPosX];
    o.rawData[oHomeZ] = gLinker.Mario.rawData[oPosZ];
    o.rawData[oHomeY] = gLinker.Mario.rawData[oPosY];
    o.rawData[oHomeY] += 250.0;
    o.rawData[oPosY] = o.rawData[oHomeY];

    let width = o.rawData[oHomeX] - o.rawData[oPosX];
    let length = o.rawData[oHomeZ] - o.rawData[oPosZ];
    o.rawData[oForwardVel] = sqrtf(width * width + length * length) / 23.0;
}

const set_y_home_to_pos = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    o.rawData[oForwardVel] = 0.0;
    o.rawData[oHomeY] = o.rawData[oPosY];
}


const slow_star_rotation = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    if (o.rawData[oAngleVelYaw] > 0x400) {
        o.rawData[oAngleVelYaw] -= 0x40;
    }
}

const bhv_spawned_star_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oAction] == 0) {
        if (o.rawData[oTimer] == 0) {
            Camera.cutscene_object(CUTSCENE_STAR_SPAWN, o);
            set_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_MARIO_AND_DOORS);
            o.activeFlags |= ACTIVE_FLAG_INITIATED_TIME_STOP;
            o.rawData[oAngleVelYaw] = 0x800;

            if (o.rawData[oBehParams2ndByte] == 0) set_home_to_mario();
            else set_y_home_to_pos();

            o.rawData[oMoveAngleYaw] = cur_obj_angle_to_home();
            o.rawData[oVelY] = 50.0;
            o.rawData[oGravity] = -4.0;
            spawn_mist_particles();
        }

        cur_obj_play_sound_1(SOUND_ENV_STAR);
        spawn_object(o, MODEL_NONE, gLinker.behaviors.bhvSparkleSpawn);

        if (o.rawData[oVelY] < 0 && o.rawData[oPosY] < o.rawData[oHomeY]) {
            o.rawData[oAction]++;
            o.rawData[oForwardVel] = 0;
            o.rawData[oVelY] = 20.0;
            o.rawData[oGravity] = -1.0;

            // play_power_star_jingle(true);
        }
    } else if (o.rawData[oAction] == 1) {
        if (o.rawData[oVelY] < -4.0) o.rawData[oVelY] = -4.0;
        
        if (o.rawData[oVelY] < 0 && o.rawData[oPosY] < o.rawData[oHomeY]) {
            Camera.gObjCutsceneDone = true;
            o.rawData[oVelY] = 0;
            o.rawData[oGravity] = 0;
            o.rawData[oAction]++;
        }

        spawn_object(o, MODEL_NONE, gLinker.behaviors.bhvSparkleSpawn);
    } else if (o.rawData[oAction] == 2) {
        if (Camera.gCamera.cutscene == 0 && Camera.gRecentCutscene == 0) {
            clear_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_MARIO_AND_DOORS);
            o.activeFlags &= ~ACTIVE_FLAG_INITIATED_TIME_STOP;
            o.rawData[oAction]++;
        }
    } else {
        set_sparkle_spawn_star_hitbox();
        slow_star_rotation();
    }

    cur_obj_move_using_vel_and_gravity();
    o.rawData[oFaceAngleYaw] += o.rawData[oAngleVelYaw]
    o.rawData[oInteractStatus] = 0;
}

export const bhv_spawn_star_no_level_exit = (starIndex) => {
    let star = spawn_object(sp20, MODEL_STAR, gLinker.behaviors.bhvSpawnedStarNoLevelExit);
    star.rawData[oBehParams] = starIndex << 24;
    star.rawData[oInteractionSubtype] = INT_SUBTYPE_NO_EXIT;
    obj_set_angle(star, 0, 0, 0);
}

gLinker.bhv_spawned_star_init = bhv_spawned_star_init
gLinker.bhv_spawned_star_loop = bhv_spawned_star_loop
