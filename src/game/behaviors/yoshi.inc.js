// yoshi.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_init_animation, approach_s16_symmetric } from "../ObjectHelpers"
import { object_step, is_point_close_to_object, create_respawner, curr_obj_random_blink } from "../ObjBehaviors"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { s16, random_float } from "../../utils"
import { atan2s } from "../../engine/math_util"
import { oPosX, oPosY, oPosZ, oVelY, oMoveAngleYaw, oForwardVel, oHomeX, oHomeY, oHomeZ, oAction,
         oTimer, oInteractStatus, oInteractionSubtype, oGravity, oFriction, oBuoyancy, oAngleToMario } from "../../include/object_constants"
import { MODEL_YOSHI } from "../../include/model_ids"
import { SOUND_GENERAL_YOSHI_WALK, SOUND_GENERAL_ENEMY_ALERT1, SOUND_GENERAL_COLLECT_1UP,
         SOUND_MENU_YOSHI_GAIN_LIVES } from "../../include/sounds"
import { INT_SUBTYPE_NPC, INT_STATUS_INTERACTED } from "../Interaction"
import { ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"
import { play_puzzle_jingle } from "../../audio/external"


/* Yoshi */
const oYoshiBlinkTimer  = 0x1B
const oYoshiChosenHome  = 0x1D
const oYoshiTargetYaw   = 0x1E

/* oAction */
const YOSHI_ACT_IDLE = 0
const YOSHI_ACT_WALK = 1
const YOSHI_ACT_TALK = 2
const YOSHI_ACT_WALK_JUMP_OFF_ROOF = 3
const YOSHI_ACT_FINISH_JUMPING_AND_DESPAWN = 4
const YOSHI_ACT_GIVE_PRESENT = 5
const YOSHI_ACT_CREDITS = 10


// X/Z coordinates of Yoshi's homes that he switches between.
// Note that this doesn't contain the Y coordinate since the castle roof is flat,
// so o->oHomeY is never updated.
const sYoshiHomeLocations = [ 0, -5625, -1364, -5912, -1403, -4609, -1004, -5308 ]

const bhv_yoshi_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oGravity] = 2.0
    o.rawData[oFriction] = 0.9
    o.rawData[oBuoyancy] = 1.3
    o.rawData[oInteractionSubtype] = INT_SUBTYPE_NPC

    // if (save_file_get_total_star_count(gCurrSaveFileNum - 1, COURSE_MIN - 1, COURSE_MAX - 1) < 120
    //     || sYoshiDead == 1) {
    //     o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    // }
}

const yoshi_walk_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
   let /*s16*/sp24 = o.gfx.animInfo.animFrame

    o.rawData[oForwardVel] = 10.0
    let sp26 = object_step()
    o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[oYoshiTargetYaw], 0x500)
    if (is_point_close_to_object(o, o.rawData[oHomeX], 3174.0, o.rawData[oHomeZ], 200))
        o.rawData[oAction] = YOSHI_ACT_IDLE

    cur_obj_init_animation(1)
    if (sp24 == 0 || sp24 == 15)
        cur_obj_play_sound_2(SOUND_GENERAL_YOSHI_WALK)

    if (o.rawData[oInteractStatus] == INT_STATUS_INTERACTED)
        o.rawData[oAction] = YOSHI_ACT_TALK

    if (o.rawData[oPosY] < 2100.0) {
        create_respawner(MODEL_YOSHI, bhvYoshi, 3000)
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

const yoshi_idle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let chosenHome

    if (o.rawData[oTimer] > 90) {
        chosenHome = s16(random_float() * 3.99)

        if (o.rawData[oYoshiChosenHome] == chosenHome) {
            return
        } else {
            o.rawData[oYoshiChosenHome] = chosenHome
        }

        o.rawData[oHomeX] = sYoshiHomeLocations[o.rawData[oYoshiChosenHome] * 2]
        o.rawData[oHomeZ] = sYoshiHomeLocations[o.rawData[oYoshiChosenHome] * 2 + 1]
        o.rawData[oYoshiTargetYaw] = atan2s(o.rawData[oHomeZ] - o.rawData[oPosZ], o.rawData[oHomeX] - o.rawData[oPosX])
        o.rawData[oAction] = YOSHI_ACT_WALK
    }

    cur_obj_init_animation(0)
    if (o.rawData[oInteractStatus] == INT_STATUS_INTERACTED)
        o.rawData[oAction] = YOSHI_ACT_TALK

      // Credits; Yoshi appears at this position overlooking the castle near the end of the credits
    // if (gPlayerCameraState.cameraEvent == CAM_EVENT_START_ENDING ||
    //     gPlayerCameraState.cameraEvent == CAM_EVENT_START_END_WAVING) {
    //     o.rawData[oAction] = YOSHI_ACT_CREDITS
    //     o.rawData[oPosX] = -1798.0
    //     o.rawData[oPosY] = 3174.0
    //     o.rawData[oPosZ] = -3644.0
    // }
}


const yoshi_talk_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oMoveAngleYaw] == o.rawData[oAngleToMario]) {
        cur_obj_init_animation(0)
        // if (set_mario_npc_dialog(1) == 2) {
        //     o.activeFlags |= ACTIVE_FLAG_INITIATED_TIME_STOP
        //     if (cutscene_object_with_dialog(CUTSCENE_DIALOG, o, DIALOG_161)) {
        //         o.activeFlags &= ~ACTIVE_FLAG_INITIATED_TIME_STOP
        //         o.rawData[oInteractStatus] = 0
        //         o.rawData[oHomeX] = sYoshiHomeLocations[2]
        //         o.rawData[oHomeZ] = sYoshiHomeLocations[3]
        //         o.rawData[oYoshiTargetYaw] = atan2s(o.rawData[oHomeZ] - o.rawData[oPosZ], o.rawData[oHomeX] - o.rawData[oPosX])
        //         o.rawData[oAction] = YOSHI_ACT_GIVE_PRESENT
        //     }
        // }
    } else {
        cur_obj_init_animation(1)
        play_puzzle_jingle()
        o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario], 0x500)
    }
}

// void yoshi_walk_and_jump_off_roof_loop(void) {
//     s16 sp26 = o->.gfx.animInfo.animFrame;

//     o->oForwardVel = 10.0f;
//     object_step();
//     cur_obj_init_animation(1);
//     if (o->oTimer == 0)
//         cutscene_object(CUTSCENE_STAR_SPAWN, o);

//     o->oMoveAngleYaw = approach_s16_symmetric(o->oMoveAngleYaw, o->oYoshiTargetYaw, 0x500);
//     if (is_point_close_to_object(o, o->oHomeX, 3174.0f, o->oHomeZ, 200)) {
//         cur_obj_init_animation(2);
//         cur_obj_play_sound_2(SOUND_GENERAL_ENEMY_ALERT1);
//         o->oForwardVel = 50.0f;
//         o->oVelY = 40.0f;
//         o->oMoveAngleYaw = -0x3FFF;
//         o->oAction = YOSHI_ACT_FINISH_JUMPING_AND_DESPAWN;
//     }

//     if (sp26 == 0 || sp26 == 15) {
//         cur_obj_play_sound_2(SOUND_GENERAL_YOSHI_WALK);
//     }
// }

// void yoshi_finish_jumping_and_despawn_loop(void) {
//     cur_obj_extend_animation_if_at_end();
//     obj_move_xyz_using_fvel_and_yaw(o);
//     o->oVelY -= 2.0;
//     if (o->oPosY < 2100.0f) {
//         set_mario_npc_dialog(0);
//         gObjCutsceneDone = TRUE;
//         sYoshiDead = TRUE;
//         o->activeFlags = ACTIVE_FLAG_DEACTIVATED;
//     }
// }

// void yoshi_give_present_loop(void) {
//     s32 sp1C = gGlobalTimer;

//     if (gHudDisplay.lives == 100) {
//         play_sound(SOUND_GENERAL_COLLECT_1UP, gGlobalSoundSource);
//         gSpecialTripleJump = TRUE;
//         o->oAction = YOSHI_ACT_WALK_JUMP_OFF_ROOF;
//         return;
//     }

//     if ((sp1C & 0x03) == 0) {
//         play_sound(SOUND_MENU_YOSHI_GAIN_LIVES, gGlobalSoundSource);
//         gMarioState->numLives++;
//     }
// }

const bhv_yoshi_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case YOSHI_ACT_IDLE:
            yoshi_idle_loop()
            break

        case YOSHI_ACT_WALK:
            yoshi_walk_loop()
            break

        case YOSHI_ACT_TALK:
            yoshi_talk_loop()
            break

        case YOSHI_ACT_WALK_JUMP_OFF_ROOF:
            yoshi_walk_and_jump_off_roof_loop()
            break

        case YOSHI_ACT_FINISH_JUMPING_AND_DESPAWN:
            yoshi_finish_jumping_and_despawn_loop()
            break

        case YOSHI_ACT_GIVE_PRESENT:
            yoshi_give_present_loop()
            break

        case YOSHI_ACT_CREDITS:
            cur_obj_init_animation(0)
            break
    }

    curr_obj_random_blink(oYoshiBlinkTimer)
}


gLinker.bhv_yoshi_init = bhv_yoshi_init
gLinker.bhv_yoshi_loop = bhv_yoshi_loop
