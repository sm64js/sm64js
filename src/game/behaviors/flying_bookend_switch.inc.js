import { gGlobalSoundSource, play_puzzle_jingle, play_sound } from "../../audio/external"
import { MODEL_BOOKEND_PART, MODEL_BOOKEND } from "../../include/model_ids"
import {
    oTimer, ACTIVE_FLAG_IN_DIFFERENT_ROOM, oPosZ, oHomeZ,
    OBJ_MOVE_MASK_ON_GROUND, oNumLootCoins, oGraphYOffset, oMoveFlags, oMoveAnglePitch,
    oAngleToMario, oDamageOrCoinValue, OBJ_MOVE_HIT_WALL, oDeathSound, oForwardVel,
    oPosX, oBookSwitchManagerUnkF8, oBehParams2ndByte, oDistanceToMario,
    oBookSwitchManagerUnkF4, oBookendUnkF4, oBookendUnkF8, oFaceAngleRoll,
    oFaceAnglePitch, oAction
} from "../../include/object_constants"
import {
    SOUND_OBJ_POUNDING1, SOUND_GENERAL2_RIGHT_ANSWER, SOUND_MENU_CAMERA_BUZZ,
    SOUND_OBJ_DEFAULT_DEATH
} from "../../include/sounds"
import { random_u16 } from "../../utils"
import { bhvFlyingBookend, bhvBookSwitch, bhvHauntedBookshelf } from "../BehaviorData"
import { INTERACT_BREAKABLE, ATTACK_FROM_BELOW, ATTACK_KICK_OR_TRIP, ATTACK_PUNCH, INTERACT_HIT_FROM_BELOW } from "../Interaction"
import {
    obj_forward_vel_approach, obj_face_pitch_approach, obj_face_roll_approach,
    obj_die_if_health_non_positive, approach_f32_ptr, obj_turn_pitch_toward_mario,
    obj_compute_vel_from_move_pitch, obj_check_attacks, obj_is_near_to_and_facing_mario
} from "../ObjBehaviors2"
import {
    spawn_object_abs_with_rot, cur_obj_set_model, cur_obj_move_using_fvel_and_gravity,
    cur_obj_init_animation_with_sound, cur_obj_update_floor_and_walls,
    cur_obj_move_standard, spawn_object, cur_obj_nearest_object_with_behavior,
    cur_obj_rotate_yaw_toward, cur_obj_init_animation_and_check_if_near_end,
    cur_obj_scale, cur_obj_push_mario_away_from_cylinder, cur_obj_become_tangible,
    cur_obj_become_intangible, spawn_object_relative, obj_mark_for_deletion
} from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

const sFlyingBookendHitbox = {
    interactType: INTERACT_HIT_FROM_BELOW,
    downOffset: 0,
    damageOrCoinValue: 2,
    health: 0,
    numLootCoins: -1,
    radius: 60,
    height: 30,
    hurtboxRadius: 40,
    hurtboxHeight: 30
}

const D_80331B30 = [
    { unk00: 52, unk02: 150 },
    { unk00: 135, unk02: 3 },
    { unk00: -75, unk02: 78 }
]

const sBookSwitchHitbox = {
    interactType: INTERACT_BREAKABLE,
    downOffset: 0,
    damageOrCoinValue: 0,
    health: 99,
    numLootCoins: 0,
    radius: 20,
    height: 30,
    hurtboxRadius: 20,
    hurtboxHeight: 30
}

const flying_bookend_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    
    if (obj_is_near_to_and_facing_mario(400.0, 0x3000)) {
        cur_obj_play_sound_2(SOUND_OBJ_DEFAULT_DEATH)

        o.rawData[oAction] = 1
        o.rawData[oBookendUnkF4] = o.rawData[oFaceAnglePitch] + 0x7FFF
        o.rawData[oBookendUnkF8] = o.rawData[oFaceAngleRoll] - 0x7FFF

        cur_obj_set_model(MODEL_BOOKEND_PART)
    }
}

const flying_bookend_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (obj_forward_vel_approach(3.0, 1.0)) {
        if (cur_obj_init_animation_and_check_if_near_end(2)) {
            o.rawData[oAction] = 2
            o.rawData[oForwardVel] = 0.0
        } else {
            o.rawData[oForwardVel] = 3.0

            if (o.rawData[oTimer] > 5) {
                obj_face_pitch_approach(o.rawData[oBookendUnkF4], 2000)
                if (o.rawData[oTimer] >= 10) {
                    obj_face_roll_approach(o.rawData[oBookendUnkF8], 2000)
                    if (o.rawData[oTimer] >= 20) {
                        let pxWrapper = { px: o.gfx.scale[0] }
                        approach_f32_ptr(pxWrapper, 3.0, 0.2)
                        o.gfx.scale[0] = pxWrapper.px
                    }
                }
            }
        }
    }

    cur_obj_move_using_fvel_and_gravity()
}

const flying_bookend_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_init_animation_with_sound(1)
    cur_obj_update_floor_and_walls()

    if (o.rawData[oForwardVel] == 0.0) {
        obj_turn_pitch_toward_mario(120.0, 1000)
        o.rawData[oFaceAnglePitch] = o.rawData[oMoveAnglePitch] + 0x7FFF
        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 1000)

        if (o.rawData[oTimer] > 30) {
            obj_compute_vel_from_move_pitch(50.0)
        }
    }

    cur_obj_move_standard(78)
}

const flying_bookend_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oDamageOrCoinValue] = 1
    o.rawData[oNumLootCoins] = 0

    if (o.rawData[oTimer] > 3) {
        o.rawData[oAction] = 2
        o.rawData[oForwardVel] = 50.0
    }

    obj_forward_vel_approach(50.0, 2.0)
    cur_obj_move_using_fvel_and_gravity()
}

export const bhv_flying_bookend_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        o.rawData[oDeathSound] = SOUND_OBJ_POUNDING1
        cur_obj_scale(o.gfx.scale[0])
    }

    switch (o.rawData[oAction]) {
        case 0:
            flying_bookend_act_0()
            break
        case 1:
            flying_bookend_act_1()
            break
        case 2:
            flying_bookend_act_2()
            break
        case 3:
            flying_bookend_act_3()
            break
    }

    obj_check_attacks(sFlyingBookendHitbox, -1)

    if (o.rawData[oAction] == -1 || (o.rawData[oMoveFlags] & (OBJ_MOVE_MASK_ON_GROUND | OBJ_MOVE_HIT_WALL))) {
        o.rawData[oNumLootCoins] = 0
        obj_die_if_health_non_positive()
    }

    o.rawData[oGraphYOffset] = 30.0 * o.gfx.scale[0]
}

export const bhv_bookend_spawn_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        if (o.rawData[oTimer] > 40 && obj_is_near_to_and_facing_mario(600.0, 0x2000)) {
            let sp1C = spawn_object(o, MODEL_BOOKEND, bhvFlyingBookend)

            if (sp1C != null) {
                sp1C.rawData[oAction] = 3
                cur_obj_play_sound_2(SOUND_OBJ_DEFAULT_DEATH)
            }

            o.rawData[oTimer] = 0
        }
    }
}

const bookshelf_manager_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        for (let i = 0; i < 3; i++) {
            spawn_object_relative(i, D_80331B30[i].unk00, D_80331B30[i].unk02, 0, o, MODEL_BOOKEND, bhvBookSwitch)
        }
    }
    o.rawData[oAction] = 1
}

const bookshelf_manager_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oBookSwitchManagerUnkF8] == 0) {
        if (obj_is_near_to_and_facing_mario(500.0, 0x3000)) {
            o.rawData[oBookSwitchManagerUnkF8] = 1
        }
    } else if (o.rawData[oTimer] > 60) {
        o.rawData[oAction] = 2
        o.rawData[oBookSwitchManagerUnkF8] = 0
    }
}

const bookshelf_manager_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(o.activeFlags & ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        if (o.rawData[oBookSwitchManagerUnkF4] < 0) {
            if (o.rawData[oTimer] > 30) {
                o.rawData[oBookSwitchManagerUnkF4] = o.rawData[oBookSwitchManagerUnkF8] = 0
            } else if (o.rawData[oTimer] > 10) {
                o.rawData[oBookSwitchManagerUnkF8] = 1
            }
        } else {
            if (o.rawData[oBookSwitchManagerUnkF4] >= 3) {
                if (o.rawData[oTimer] > 100) {
                    o.parentObj = cur_obj_nearest_object_with_behavior(o, bhvHauntedBookshelf)
                    o.parentObj.rawData[oAction] = 1
                    o.rawData[oPosX] = o.parentObj.rawData[oPosX]
                    o.rawData[oAction] = 3
                } else if (o.rawData[oTimer] == 30) {
                    play_puzzle_jingle()
                }
            } else {
                o.rawData[oTimer] = 0
            }
        }
    } else {
        o.rawData[oAction] = 4
    }
}

const bookshelf_manager_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] > 85) {
        o.rawData[oAction] = 4
    } else {
        o.rawData[oForwardVel] = o.parentObj.rawData[oPosX] - o.rawData[oPosX]
        o.rawData[oPosX] = o.parentObj.rawData[oPosX]
    }
}

const bookshelf_manager_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oBookSwitchManagerUnkF4] >= 3) {
        obj_mark_for_deletion(o)
    } else {
        o.rawData[oAction] = 0
    }
}

export const bhv_haunted_bookshelf_manager_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case 0:
            bookshelf_manager_act_0()
            break
        case 1:
            bookshelf_manager_act_1()
            break
        case 2:
            bookshelf_manager_act_2()
            break
        case 3:
            bookshelf_manager_act_3()
            break
        case 4:
            bookshelf_manager_act_4()
            break
    }
}

export const bhv_book_switch_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    o.gfx.scale[0] = 2.0
    o.gfx.scale[1] = 0.9

    if (o.parentObj.rawData[oAction] == 4) {
        obj_mark_for_deletion(o)
    } else {
        let attackType = obj_check_attacks(sBookSwitchHitbox, o.rawData[oAction])

        if (o.parentObj.rawData[oBookSwitchManagerUnkF8] != 0 || o.rawData[oAction] == 1) {
            if (o.rawData[oDistanceToMario] < 100.0) {
                cur_obj_become_tangible()
            } else {
                cur_obj_become_intangible()
            }

            o.rawData[oAction] = 1

            if (o.rawData[oBookSwitchManagerUnkF4] == 0.0) {
                cur_obj_play_sound_2(SOUND_OBJ_DEFAULT_DEATH)
            }

            let pxWrapper = {px: o.rawData[oBookSwitchManagerUnkF4]}
            if (approach_f32_ptr(pxWrapper, 50.0, 20.0)) {
                o.rawData[oBookSwitchManagerUnkF4] = pxWrapper.px
                if (o.parentObj.rawData[oBookSwitchManagerUnkF4] >= 0 && o.rawData[oTimer] > 60
                    &&  (attackType == ATTACK_PUNCH || attackType == ATTACK_KICK_OR_TRIP || attackType == ATTACK_FROM_BELOW)) {
                    o.rawData[oAction] = 2
                }
            } else {
                o.rawData[oTimer] = 0
                o.rawData[oBookSwitchManagerUnkF4] = pxWrapper.px
            }
        } else {
            cur_obj_become_intangible()

            let pxWrapper = {px: o.rawData[oBookSwitchManagerUnkF4]}
            if (approach_f32_ptr(pxWrapper, 0.0, 20.0) && o.rawData[oAction] != 0) {
                o.rawData[oBookSwitchManagerUnkF4] = pxWrapper.px
                if (o.parentObj.rawData[oBookSwitchManagerUnkF4] == o.rawData[oBehParams2ndByte]) {
                    play_sound(SOUND_GENERAL2_RIGHT_ANSWER, gGlobalSoundSource)
                    o.parentObj.rawData[oBookSwitchManagerUnkF4]++
                } else {
                    let sp36 = random_u16() & 0x1
                    let sp34 = gMarioObject.rawData[oPosZ] + 1.5 * gMarioStates[0].vel[2]

                    play_sound(SOUND_MENU_CAMERA_BUZZ, gGlobalSoundSource)

                    if (sp34 > 0) {
                        sp34 = 0
                    }

                    let sp38 = spawn_object_abs_with_rot(o, MODEL_BOOKEND, bhvFlyingBookend, 0x1FC * sp36 - 0x8CA, 890, sp34, 0, 0x8000 * sp36 + 0x4000, 0)

                    if (sp38 != null) {
                        sp38.rawData[oAction] = 3
                    }

                    o.parentObj.rawData[oBookSwitchManagerUnkF4] = -1
                }

                o.rawData[oAction] = 0
            } else {
                o.rawData[oBookSwitchManagerUnkF4] = pxWrapper.px
            }
        }

        o.rawData[oPosX] += o.parentObj.rawData[oForwardVel]
        o.rawData[oPosZ] = o.rawData[oHomeZ] - o.rawData[oBookSwitchManagerUnkF4]
        cur_obj_push_mario_away_from_cylinder(70.0, 70.0)
    }
}

gLinker.bhv_flying_bookend_loop = bhv_flying_bookend_loop
gLinker.bhv_bookend_spawn_loop = bhv_bookend_spawn_loop
gLinker.bhv_haunted_bookshelf_manager_loop = bhv_haunted_bookshelf_manager_loop
gLinker.bhv_book_switch_loop = bhv_book_switch_loop