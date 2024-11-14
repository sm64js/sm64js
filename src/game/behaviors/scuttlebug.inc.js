import { MODEL_SCUTTLEBUG } from "../../include/model_ids";
import { ACTIVE_FLAG_DEACTIVATED, oAction, oAngleToMario, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, OBJ_MOVE_HIT_EDGE, OBJ_MOVE_HIT_WALL, OBJ_MOVE_LANDED, OBJ_MOVE_MASK_ON_GROUND, oDistanceToMario, oFlags, oForwardVel, oHomeX, oHomeY, oHomeZ, oInteractStatus, oMoveAngleYaw, oMoveFlags, oPosX, oPosY, oPosZ, oScuttlebugSpawnerUnk88, oScuttlebugSpawnerUnkF4, oScuttlebugUnkF4, oScuttlebugUnkF8, oScuttlebugUnkFC, oSubAction, oTimer, oVelY, oWallAngle } from "../../include/object_constants";
import { SOUND_OBJ2_SCUTTLEBUG_ALERT, SOUND_OBJ_DYING_ENEMY1, SOUND_OBJ_GOOMBA_ALERT } from "../../include/sounds";
import { set_obj_anim_with_accel_and_sound } from "../BehaviorActions";
import { INTERACT_BOUNCE_TOP } from "../Interaction";
import { abs_angle_diff, cur_obj_angle_to_home, cur_obj_init_animation_with_accel_and_sound, cur_obj_lateral_dist_from_mario_to_home, cur_obj_move_standard, cur_obj_rotate_yaw_toward, cur_obj_set_hitbox_and_die_if_attacked, cur_obj_update_floor_and_walls, obj_angle_to_object, obj_is_hidden, obj_mark_for_deletion, spawn_object } from "../ObjectHelpers";
import { cur_obj_play_sound_2 } from "../SpawnSound";
import { bhvScuttlebug } from "../BehaviorData"

const sScuttlebugHitbox = {
    interactType: INTERACT_BOUNCE_TOP,
    downOffset: 0,
    damageOrCoinValue: 1,
    health: 1,
    numLootCoins: 3,
    radius: 130,
    height: 70,
    hurtboxRadius: 90,
    hurtboxHeight: 60
}

const update_angle_from_move_flags = (angle) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
        angle = o.rawData[oWallAngle]
        return 1
    } else if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_EDGE) {
        angle = o.rawData[oMoveAngleYaw] + 0x8000
        return -1
    }
}

const bhv_scuttlebug_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let sp18

    cur_obj_update_floor_and_walls()

    if (o.rawData[oSubAction] != 0
        && cur_obj_set_hitbox_and_die_if_attacked(sScuttlebugHitbox, SOUND_OBJ_DYING_ENEMY1, o.rawData[oScuttlebugUnkF4])) {
        o.rawData[oSubAction] = 3
    }

    if (o.rawData[oSubAction] != 1) {
        o.rawData[oScuttlebugUnkF8] = 0
    }

    switch (o.rawData[oSubAction]) {
        case 0:
            if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
                cur_obj_play_sound_2(SOUND_OBJ_GOOMBA_ALERT)
            }
            if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
                o.rawData[oHomeX] = o.rawData[oPosX]
                o.rawData[oHomeY] = o.rawData[oPosY]
                o.rawData[oHomeZ] = o.rawData[oPosZ]
                o.rawData[oSubAction]++
            }
            break;
        
        case 1:
            o.rawData[oForwardVel] = 5.0
            if (cur_obj_lateral_dist_from_mario_to_home() > 1000.0) {
                o.rawData[oAngleToMario] = cur_obj_angle_to_home()
            } else {
                if (o.rawData[oScuttlebugUnkF8] == 0) {
                    o.rawData[oScuttlebugUnkFC] = 0
                    o.rawData[oAngleToMario] = obj_angle_to_object(o, gMarioObject)
                    if (abs_angle_diff(o.rawData[oAngleToMario], o.rawData[oMoveAngleYaw]) < 0x800) {
                        o.rawData[oScuttlebugUnkF8] = 1
                        o.rawData[oVelY] = 20.0
                        cur_obj_play_sound_2(SOUND_OBJ2_SCUTTLEBUG_ALERT)
                    }
                } else if (o.rawData[oScuttlebugUnkF8] == 1) {
                    o.rawData[oForwardVel] = 15.0
                    o.rawData[oScuttlebugUnkFC]++
                    if (o.rawData[oScuttlebugUnkFC] > 50) {
                        o.rawData[oScuttlebugUnkF8] = 0
                    }
                }
            }
            if (update_angle_from_move_flags(o.rawData[oAngleToMario])) {
                o.rawData[oSubAction] = 2
            }
            cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x200)
            break
        
        case 2:
            o.rawData[oForwardVel] = 5.0
            if (o.rawData[oMoveAngleYaw] == o.rawData[oAngleToMario]) {
                o.rawData[oSubAction] = 1
            }
            if (o.rawData[oPosY] - o.rawData[oHomeY] < -200.0) {
                obj_mark_for_deletion(o)
            }
            cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x400)
            break
        
        case 3:
            o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
            o.rawData[oForwardVel] = -10.0
            o.rawData[oVelY] = 30.0
            cur_obj_play_sound_2(SOUND_OBJ2_SCUTTLEBUG_ALERT)
            o.rawData[oSubAction]++
            break
        
        case 4:
            o.rawData[oForwardVel] = -10.0
            if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
                o.rawData[oSubAction]++
                o.rawData[oVelY] = 0.0
                o.rawData[oScuttlebugUnkFC] = 0
                o.rawData[oFlags] |= OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
                o.rawData[oInteractStatus] = 0
            }
            break
        
        case 5:
            o.rawData[oForwardVel] = 2.0
            o.rawData[oScuttlebugUnkFC]++
            if (o.rawData[oScuttlebugUnkFC] > 30) {
                o.rawData[oSubAction] = 0
            }
            break
    }

    if (o.rawData[oForwardVel] < 10.0) {
        sp18 = 1.0
    } else {
        sp18 = 3.0
    }

    cur_obj_init_animation_with_accel_and_sound(0, sp18)

    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        set_obj_anim_with_accel_and_sound(1, 23, SOUND_OBJ2_SCUTTLEBUG_ALERT)
    }

    if (o.parentObj != o) {
        if (obj_is_hidden(o)) {
            obj_mark_for_deletion(o)
        }
        if (o.activeFlags == ACTIVE_FLAG_DEACTIVATED) {
            o.parentObj.rawData[oScuttlebugSpawnerUnk88] = 1
        }
    }

    cur_obj_move_standard(-50)
}

const bhv_scuttlebug_spawn_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oAction] == 0) {
        if (o.rawData[oTimer] > 30 && 500.0 < o.rawData[oDistanceToMario] && o.rawData[oDistanceToMario] < 1500.0) {
            cur_obj_play_sound_2(SOUND_OBJ2_SCUTTLEBUG_ALERT)
            const scuttlebug = spawn_object(o, MODEL_SCUTTLEBUG, bhvScuttlebug)
            scuttlebug.rawData[oScuttlebugUnkF4] = o.rawData[oScuttlebugSpawnerUnkF4]
            scuttlebug.rawData[oForwardVel] = 30.0
            scuttlebug.rawData[oVelY] = 90.0
            o.rawData[oAction]++
            o.rawData[oScuttlebugUnkF4] = 1
        }
    } else if (o.rawData[oScuttlebugSpawnerUnk88] != 0) {
        o.rawData[oScuttlebugSpawnerUnk88] = 0
        o.rawData[oAction] = 0
    }
}

gLinker.bhv_scuttlebug_loop = bhv_scuttlebug_loop
gLinker.bhv_scuttlebug_spawn_loop = bhv_scuttlebug_spawn_loop