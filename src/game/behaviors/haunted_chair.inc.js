// haunted_chair.inc.js

import {
    oHauntedChairUnk104, oFaceAngleRoll, oHauntedChairUnk100, oFaceAngleYaw,
    oFaceAnglePitch, oHauntedChairUnkF8, oTimer, oDistanceToMario, oHomeZ,
    oHauntedChairUnkFC, oAction, oGravity, oMoveAnglePitch, oAngleToMario,
    oMoveAngleYaw, OBJ_MOVE_MASK_ON_GROUND, OBJ_MOVE_HIT_WALL, oMoveFlags,
    ACTIVE_FLAG_IN_DIFFERENT_ROOM, oVelY, oHomeX, oHauntedChairUnkF4
} from "../../include/object_constants";
import { SOUND_GENERAL_HAUNTED_CHAIR, SOUND_GENERAL_SWISH_AIR_2, SOUND_GENERAL_HAUNTED_CHAIR_MOVE } from "../../include/sounds";
import { bhvMadPiano } from "../BehaviorData";
import { INTERACT_MR_BLIZZARD } from "../Interaction";
import {
    obj_die_if_health_non_positive, obj_check_attacks, cur_obj_spin_all_dimensions,
    obj_compute_vel_from_move_pitch, obj_turn_pitch_toward_mario, oscillate_toward
} from "../ObjBehaviors2";
import {
    obj_angle_to_object, cur_obj_move_standard, cur_obj_push_mario_away_from_cylinder,
    cur_obj_update_floor_and_walls, lateral_dist_between_objects, cur_obj_find_nearest_object_with_behavior
} from "../ObjectHelpers";
import { cur_obj_play_sound_2 } from "../SpawnSound";

const sHauntedChairHitbox = {
    interactType: INTERACT_MR_BLIZZARD,
    downOffset: 0,
    damageOrCoinValue: 2,
    health: 0,
    numLootCoins: 0,
    radius: 50,
    height: 50,
    hurtboxRadius: 50,
    hurtboxHeight: 50,
}

export const bhv_haunted_chair_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let val04 = {}
    let val00

    let distWrapper = { dist: val00 }
    val04 = cur_obj_find_nearest_object_with_behavior(o, bhvMadPiano, distWrapper)
    val00 = distWrapper.dist

    if (val04 != null && val00 < 300.0) {
        o.parentObj = val04
    } else {
        o.rawData[oHauntedChairUnkF4] = 1
    }
}

const haunted_chair_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.parentObj != o) {
        if (o.rawData[oHauntedChairUnk104] == 0) {
            if (lateral_dist_between_objects(o, o.parentObj) < 250.0) {
                let val0E = obj_angle_to_object(o, o.parentObj) - o.rawData[oFaceAngleYaw] + 0x2000

                if (val0E & 0x4000) {
                    o.rawData[oHauntedChairUnk100] = o.rawData[oFaceAngleRoll]

                    if (val0E > 0) {
                        o.rawData[oHauntedChairUnk104] = 0x4000
                    } else {
                        o.rawData[oHauntedChairUnk104] = -0x4000
                    }
                } else {
                    o.rawData[oHauntedChairUnk100] = o.rawData[oFaceAnglePitch]

                    if (val0E < 0) {
                        o.rawData[oHauntedChairUnk104] = 0x5000
                    } else {
                        o.rawData[oHauntedChairUnk104] = -0x4000
                    }
                }

                if (o.rawData[oHauntedChairUnk104] < 0) {
                    o.rawData[oHauntedChairUnkF8] = -1500.0
                } else {
                    o.rawData[oHauntedChairUnkF8] = 1500.0
                }
            }
        } else {
            let valWrap = { value: o.rawData[oHauntedChairUnk100] }
            let velWrap = { value: o.rawData[oHauntedChairUnkF8] }
            oscillate_toward(valWrap, velWrap, o.rawData[oHauntedChairUnk104], 4000.0, 20.0, 2.0)
            o.rawData[oHauntedChairUnk100] = valWrap.value
            o.rawData[oHauntedChairUnkF8] = velWrap.value
        }
    } else if (o.rawData[oHauntedChairUnkF4] != 0) {
        if (o.rawData[oDistanceToMario] < 500.0) {
            o.rawData[oHauntedChairUnkF4]--
        }

        o.rawData[oTimer] = 0
    } else {
        if (o.rawData[oTimer] & 0x8) {
            let val08

            if (o.rawData[oFaceAnglePitch] < 0) {
                cur_obj_play_sound_2(SOUND_GENERAL_HAUNTED_CHAIR_MOVE)
                val08 = 4.0
            } else {
                val08 = -4.0
            }

            o.rawData[oHomeX] -= val08
            o.rawData[oHomeZ] -= val08

            o.rawData[oFaceAnglePitch] = o.rawData[oFaceAngleRoll] = 50.0 * val08
        } else {
            o.rawData[oFaceAnglePitch] = o.rawData[oFaceAngleRoll] = 0
        }

        if (o.rawData[oTimer] > 30) {
            o.rawData[oAction] = 1

            o.rawData[oHauntedChairUnkF8] = 0.0
            o.rawData[oHauntedChairUnkFC] = 200.0
            o.rawData[oHauntedChairUnkF4] = 40
        }
    }

    cur_obj_push_mario_away_from_cylinder(80.0, 120.0)
}

const haunted_chair_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_update_floor_and_walls()

    if (o.rawData[oTimer] < 70) {
        if (o.rawData[oTimer] < 50) {
            o.rawData[oVelY] = 6.0
        } else {
            o.rawData[oVelY] = 0.0
        }

        o.rawData[oGravity] = 0.0

        let valWrap = {value: o.rawData[oFaceAnglePitch]}
        let velWrap = {value: o.rawData[oHauntedChairUnkF8]}
        oscillate_toward(valWrap, velWrap, -4000, 200.0, 20.0, 2.0)
        o.rawData[oFaceAnglePitch] = valWrap.value
        o.rawData[oHauntedChairUnkF8] = velWrap.value

        valWrap = {value: o.rawData[oFaceAngleRoll]}
        velWrap = {value: o.rawData[oHauntedChairUnkFC]}
        oscillate_toward(valWrap, velWrap, 0, 0.0, 20.0, 1.0)
        o.rawData[oFaceAngleRoll] = valWrap.value
        o.rawData[oHauntedChairUnkFC] = velWrap.value
    } else {
        if (o.rawData[oHauntedChairUnkF4] != 0) {
            o.rawData[oHauntedChairUnkF4]--
            if (o.rawData[oHauntedChairUnkF4] == 0) {
                cur_obj_play_sound_2(SOUND_GENERAL_HAUNTED_CHAIR)

                o.rawData[oMoveAnglePitch] = obj_turn_pitch_toward_mario(120.0, 0)
                o.rawData[oMoveAngleYaw] = o.rawData[oAngleToMario]

                obj_compute_vel_from_move_pitch(50.0)
            } else if (o.rawData[oHauntedChairUnkF4] > 20) {
                if (window.gGlobalTimer % 4 == 0) {
                    cur_obj_play_sound_2(SOUND_GENERAL_SWISH_AIR_2)
                }

                o.rawData[oFaceAngleYaw] += 10000
            }
        } else if (o.rawData[oMoveFlags] & (OBJ_MOVE_MASK_ON_GROUND | OBJ_MOVE_HIT_WALL)) {
            obj_die_if_health_non_positive()
        }
    }

    obj_check_attacks(sHauntedChairHitbox, o.rawData[oAction])
    cur_obj_move_standard(78)
}

export const bhv_haunted_chair_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        switch (o.rawData[oAction]) {
            case 0:
                haunted_chair_act_0()
                break
            case 1:
                haunted_chair_act_1()
                break
        }

        cur_obj_spin_all_dimensions(30.0, 30.0)
    }
}

gLinker.bhv_haunted_chair_init = bhv_haunted_chair_init
gLinker.bhv_haunted_chair_loop = bhv_haunted_chair_loop