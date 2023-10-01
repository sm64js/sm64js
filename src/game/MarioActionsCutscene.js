import * as _Linker from "./Linker"

import {
    set_mario_animation, is_anim_at_end, update_mario_pos_for_anim,

    check_common_action_exits, check_common_hold_action_exits, drop_and_set_mario_action,
    is_anim_past_end, set_jump_from_landing, set_jumping_action, set_mario_action,
    set_water_plunge_action, update_mario_sound_and_camera, play_sound_if_no_flag,
    mario_set_forward_vel, play_mario_landing_sound_once, set_mario_anim_with_accel, ACT_GROUP_MASK, ACT_GROUP_STATIONARY, ACT_GROUP_MOVING, ACT_FLAG_RIDING_SHELL, ACT_FLAG_INVULNERABLE, MARIO_TELEPORTING,
    set_anim_to_frame, play_sound_and_spawn_particles
} from "./Mario"

import { AreaInstance as Area } from "./Area"

import {
    stop_and_set_height_to_floor, perform_air_step,
    stationary_ground_step, perform_ground_step
} from "./MarioStep"

import {
    mario_throw_held_object, get_door_save_file_flag, mario_obj_angle_to_object
} from "./Interaction"

import {
    IngameMenuInstance as IngameMenu, MENU_MODE_NONE, MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN, MENU_OPT_NONE
} from "./IngameMenu"

import {
    s16, sins, coss
} from "../utils"

import { 
    approach_s32,
    atan2s, vec3f_copy, vec3s_set
} from "../engine/math_util"

import {
    vec3f_set
} from "../engine/math_util"

import {
    enable_time_stop, disable_time_stop, spawn_object, spawn_object_abs_with_rot
} from "./ObjectHelpers"

import {
    gLastCompletedCourseNum,
    save_file_set_flags
} from "./SaveFile"

import { LevelUpdateInstance as LevelUpdate, WARP_OP_TELEPORT } from "./LevelUpdate"
import { level_trigger_warp, WARP_OP_STAR_EXIT } from "./LevelUpdate"

import {
    oInteractStatus, oMoveAngleYaw,
    oPosX, oPosY, oPosZ,


    oAction, oPrevAction, oSubAction, oTimer, oFlags,
    oBehParams, oBehParams2ndByte,
    oAnimations, oAnimState, oActiveParticleFlags,
    oIntangibleTimer, oInteractionSubtype, oInteractType,
    oHealth, oHeldState,

    oHomeX, oHomeY, oHomeZ, oAngleToHome,
    oVelX, oVelY, oVelZ,
    oParentRelativePosX, oParentRelativePosY, oParentRelativePosZ,
    oGraphYOffset,

    oAngleVelPitch, oAngleVelRoll, oAngleVelYaw,
    oForwardVel, oForwardVelS32,
    oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw,
    oDrawingDistance, oOpacity,

    oBounciness, oBuoyancy, oDragStrength, oFriction, oGravity,
    oCollisionDistance, oDamageOrCoinValue, oNumLootCoins,
    oMoveAnglePitch, oMoveAngleRoll, oMoveFlags,
    oWallAngle, oWallHitboxRadius,

    oFloor, oFloorHeight, oFloorRoom, oFloorType, oRoom,
    oAngleToMario, oDistanceToMario,

    oDeathSound, oSoundStateID,
    oDialogResponse, oDialogState,

    oUnk1A8, oUnk94, oUnkBC, oUnkC0,

    oMarioReadingSignDPosX, oMarioReadingSignDPosZ, oMarioPoleUnk108
} from "../include/object_constants"

import {
    ACT_DISAPPEARED,  ACT_INTRO_CUTSCENE,  ACT_STAR_DANCE_EXIT,  ACT_STAR_DANCE_NO_EXIT, 
    ACT_STAR_DANCE_WATER,  ACT_FALL_AFTER_STAR_GRAB,  ACT_READING_AUTOMATIC_DIALOG, 
    ACT_READING_NPC_DIALOG,  ACT_DEBUG_FREE_MOVE,  ACT_READING_SIGN,  ACT_JUMBO_STAR_CUTSCENE, 
    ACT_WAITING_FOR_DIALOG,  ACT_STANDING_DEATH,  ACT_QUICKSAND_DEATH,  ACT_ELECTROCUTION, 
    ACT_SUFFOCATION,  ACT_DEATH_ON_STOMACH,  ACT_DEATH_ON_BACK,  ACT_EATEN_BY_BUBBA, 
    ACT_END_PEACH_CUTSCENE,  ACT_CREDITS_CUTSCENE,  ACT_END_WAVING_CUTSCENE,  ACT_PULLING_DOOR, 
    ACT_PUSHING_DOOR,  ACT_WARP_DOOR_SPAWN,  ACT_EMERGE_FROM_PIPE,  ACT_SPAWN_SPIN_AIRBORNE, 
    ACT_SPAWN_SPIN_LANDING,  ACT_EXIT_AIRBORNE,  ACT_EXIT_LAND_SAVE_DIALOG,  ACT_DEATH_EXIT, 
    ACT_UNUSED_DEATH_EXIT,  ACT_FALLING_DEATH_EXIT,  ACT_SPECIAL_EXIT_AIRBORNE,  ACT_SPECIAL_DEATH_EXIT,
    ACT_FALLING_EXIT_AIRBORNE,  ACT_UNLOCKING_KEY_DOOR,  ACT_UNLOCKING_STAR_DOOR, 
    ACT_ENTERING_STAR_DOOR,  ACT_SPAWN_NO_SPIN_AIRBORNE,  ACT_SPAWN_NO_SPIN_LANDING, 
    ACT_BBH_ENTER_JUMP,  ACT_BBH_ENTER_SPIN,  ACT_TELEPORT_FADE_OUT,  ACT_TELEPORT_FADE_IN, 
    ACT_SHOCKED,  ACT_SQUISHED,  ACT_HEAD_STUCK_IN_GROUND,  ACT_BUTT_STUCK_IN_GROUND, 
    ACT_FEET_STUCK_IN_GROUND, ACT_PUTTING_ON_CAP,

    MARIO_METAL_CAP, MARIO_METAL_SHOCK, MARIO_CAP_ON_HEAD,
    MARIO_ANIM_A_POSE, MARIO_ANIM_PULL_DOOR_WALK_IN, MARIO_ANIM_PUSH_DOOR_WALK_IN,
    MARIO_ANIM_GENERAL_FALL, MARIO_MARIO_SOUND_PLAYED, GROUND_STEP_LEFT_GROUND,
    MARIO_ACTION_SOUND_PLAYED, MARIO_CAP_IN_HAND,

    ACT_IDLE, AIR_STEP_LANDED,
    ACT_AIR_THROW_LAND, ACT_BACKFLIP, ACT_BACKFLIP_LAND_STOP, ACT_BEGIN_SLIDING, ACT_BRAKING_STOP,
    ACT_BUTT_SLIDE_STOP, ACT_COUGHING, ACT_CRAWLING, ACT_CRAZY_BOX_BOUNCE, ACT_CROUCH_SLIDE,
    ACT_CROUCHING, ACT_DOUBLE_JUMP_LAND_STOP, MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, ACT_FIRST_PERSON,
    ACT_FREEFALL, ACT_FREEFALL_LAND_STOP, ACT_GROUND_POUND_LAND, ACT_HEAVY_THROW,
    ACT_HOLD_BUTT_SLIDE_STOP, ACT_HOLD_FREEFALL, ACT_HOLD_FREEFALL_LAND_STOP, ACT_HOLD_HEAVY_IDLE,
    ACT_HOLD_BEGIN_SLIDING, ACT_HOLD_HEAVY_WALKING, ACT_HOLD_IDLE, ACT_HOLD_JUMP,
    ACT_HOLD_JUMP_LAND_STOP, ACT_HOLD_PANTING_UNUSED, ACT_HOLD_WALKING, ACT_IN_QUICKSAND,
    ACT_JUMP, ACT_JUMP_LAND_STOP, ACT_LAVA_BOOST_LAND, ACT_LONG_JUMP_LAND_STOP, ACT_PANTING,
    ACT_PUNCHING, ACT_SHIVERING, ACT_SHOCKWAVE_BOUNCE, ACT_SIDE_FLIP_LAND_STOP, ACT_SLEEPING,
    ACT_SLIDE_KICK_SLIDE_STOP, ACT_STANDING_AGAINST_WALL,
    ACT_START_CRAWLING, ACT_START_CROUCHING, ACT_START_SLEEPING,
    ACT_STOP_CRAWLING, ACT_STOP_CROUCHING, ACT_THROWING, ACT_TRIPLE_JUMP_LAND_STOP, ACT_TWIRL_LAND,
    ACT_UNKNOWN_0002020E, ACT_WAKING_UP, ACT_WALKING, ACT_DEATH_EXIT_LAND, ACT_HARD_BACKWARD_GROUND_KB,

    INPUT_A_PRESSED, INPUT_ABOVE_SLIDE, INPUT_B_PRESSED, INPUT_FIRST_PERSON, INPUT_IN_WATER,
    INPUT_NONZERO_ANALOG, INPUT_OFF_FLOOR, INPUT_SQUISHED, INPUT_STOMPED, INPUT_Z_DOWN,

    MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP, MARIO_ANIM_CROUCH_FROM_SLIDE_KICK,
    MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP, MARIO_ANIM_CROUCHING, MARIO_ANIM_GENERAL_LAND,
    MARIO_ANIM_GROUND_POUND_LANDING, MARIO_ANIM_IDLE_HEAD_CENTER, MARIO_ANIM_IDLE_HEAD_LEFT,
    MARIO_ANIM_IDLE_HEAD_RIGHT, MARIO_ANIM_IDLE_HEAVY_OBJ, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ,
    MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ, MARIO_ANIM_LAND_FROM_DOUBLE_JUMP,
    MARIO_ANIM_LAND_FROM_SINGLE_JUMP, MARIO_ANIM_SLIDEFLIP_LAND, MARIO_ANIM_STAND_AGAINST_WALL,
    MARIO_ANIM_START_CRAWLING, MARIO_ANIM_START_CROUCHING, MARIO_ANIM_STOP_CRAWLING,
    MARIO_ANIM_STOP_CROUCHING, MARIO_ANIM_STOP_SKID, MARIO_ANIM_STOP_SLIDE,
    MARIO_ANIM_THROW_LIGHT_OBJECT, MARIO_ANIM_TRIPLE_JUMP_LAND, MARIO_ANIM_FIRST_PERSON,
    MARIO_ANIM_WATER_IDLE, MARIO_ANIM_SUMMON_STAR, MARIO_ANIM_RETURN_STAR_APPROACH_DOOR,
    MARIO_ANIM_SHOCKED, MARIO_ANIM_FORWARD_SPINNING, MARIO_ANIM_WALKING, MARIO_ANIM_DYING_ON_BACK,
    MARIO_ANIM_DYING_FALL_OVER, MARIO_ANIM_BACKWARD_AIR_KB, MARIO_ANIM_PUT_CAP_ON,
    MARIO_ANIM_STAR_DANCE, MARIO_ANIM_TAKE_CAP_OFF_THEN_ON, MARIO_ANIM_THROW_CATCH_KEY,
    MARIO_ANIM_MISSING_CAP, MARIO_ANIM_SINGLE_JUMP, MARIO_ANIM_SUFFOCATING,

    INPUT_IN_POISON_GAS,

    play_mario_landing_sound,
} from "./Mario"

import { MARIO_EYES_DEAD, MARIO_HAND_PEACE_SIGN, MARIO_HAND_OPEN, MARIO_EYES_HALF_CLOSED } from "../include/mario_geo_switch_case_ids"

import {
    MODEL_CASTLE_GROUNDS_WARP_PIPE,
    MODEL_STAR
} from "../include/model_ids"

import {
    INT_STATUS_MARIO_DROP_OBJECT, INT_SUBTYPE_DROP_IMMEDIATELY
} from "./Interaction"

import {
    DIALOG_021, DIALOG_038
 } from "../text/us/dialogs"

import {
    PARTICLE_IDLE_WATER_WAVE, PARTICLE_SPARKLES
} from "../include/mario_constants"

import { GRAPH_RENDER_ACTIVE, geo_update_animation_frame } from "../engine/graph_node"

import { WARP_OP_WARP_DOOR, WARP_OP_DEATH } from "./LevelUpdate"

import {
    SOUND_MARIO_ATTACKED, SOUND_ACTION_TERRAIN_LANDING, SOUND_MARIO_HERE_WE_GO, SOUND_MARIO_WAAAOOOW, 
    SOUND_MARIO_DYING, SOUND_MARIO_YAHOO, SOUND_MARIO_OOOF, SOUND_MARIO_OOOF2, SOUND_MARIO_HAHA, 
    SOUND_MARIO_YAH_WAH_HOO, SOUND_MARIO_HOOHOO,

    SOUND_ACTION_TERRAIN_BODY_HIT_GROUND, SOUND_ACTION_UNKNOWN43D, SOUND_ACTION_UNKNOWN43E,
    SOUND_ACTION_BRUSH_HAIR, SOUND_ACTION_KEY_SWISH, SOUND_ACTION_PAT_BACK, SOUND_ACTION_UNKNOWN45C, SOUND_ACTION_READ_SIGN, SOUND_ACTION_TELEPORT, SOUND_MENU_EXIT_PIPE, SOUND_MENU_ENTER_PIPE
} from "../include/sounds"

import { LEVEL_BOWSER_1, LEVEL_BOWSER_2, LEVEL_THI } from "../levels/level_defines_constants"
import { COURSE_BITDW, COURSE_BITFS } from "../levels/course_defines"

import { play_sound } from "../audio/external"

import { CameraInstance as Camera, CAM_EVENT_START_INTRO } from "./Camera"
import { play_mario_heavy_landing_sound } from "./Mario"

let sIntroWarpPipeObj = null
let sEndPeachObj = null
let sEndRightToadObj = null
let sEndLeftToadObj = null
let sEndJumboStarObj = null
let sEndPeachAnimation = null
let sEndToadAnims = new Array(2)

// set_mario_npc_dialog
// actionArg
export const MARIO_DIALOG_STOP       = 0
export const MARIO_DIALOG_LOOK_FRONT = 1 // no head turn
export const MARIO_DIALOG_LOOK_UP    = 2
export const MARIO_DIALOG_LOOK_DOWN  = 3
// dialogState
export const MARIO_DIALOG_STATUS_NONE  = 0
export const MARIO_DIALOG_STATUS_START = 1
export const MARIO_DIALOG_STATUS_SPEAK = 2

// static Vp sEndCutsceneVp = { { { 640, 480, 511, 0 }, { 640, 480, 511, 0 } } }
// static struct CreditsEntry *sDispCreditsEntry = null

// // related to peach gfx?
// static s8 D_8032CBE4 = 0
let D_8032CBE8 = 0
let D_8032CBEC = [ 2, 3, 2, 1, 2, 3, 2 ]

// static let /*u8*/ sStarsNeededForDialog[] = { 1, 3, 8, 30, 50, 70 }

// /**
//  * Data for the jumbo star cutscene. It specifies the flight path after triple
//  * jumping. Each entry is one keyframe.
//  * The first number is playback speed, 1000 is the maximum and means it lasts
//  * 1 frame. 20 means that it lasts 1000/20 = 50 frames.
//  * Speed 0 marks the last keyframe. Since the cubic spline looks 3 keyframes
//  * ahead, there should be at least 2 more entries afterwards.
//  * The last three numbers of each entry are x, y and z coordinates of points
//  * that define the curve.
//  */
// static Vec4s sJumboStarKeyframes[27] = {
//     { 20, 0, 678, -2916 },      { 30, 0, 680, -3500 },      { 40, 1000, 700, -4000 },
//     { 50, 2500, 750, -3500 },   { 50, 3500, 800, -2000 },   { 50, 4000, 850, 0 },
//     { 50, 3500, 900, 2000 },    { 50, 2000, 950, 3500 },    { 50, 0, 1000, 4000 },
//     { 50, -2000, 1050, 3500 },  { 50, -3500, 1100, 2000 },  { 50, -4000, 1150, 0 },
//     { 50, -3500, 1200, -2000 }, { 50, -2000, 1250, -3500 }, { 50, 0, 1300, -4000 },
//     { 50, 2000, 1350, -3500 },  { 50, 3500, 1400, -2000 },  { 50, 4000, 1450, 0 },
//     { 50, 3500, 1500, 2000 },   { 50, 2000, 1600, 3500 },   { 50, 0, 1700, 4000 },
//     { 50, -2000, 1800, 3500 },  { 50, -3500, 1900, 2000 },  { 30, -4000, 2000, 0 },
//     { 0, -3500, 2100, -2000 },  { 0, -2000, 2200, -3500 },  { 0, 0, 2300, -4000 },
// }

// /**
//  * get_credits_str_width: Calculate width of a Credits String
//  * Loop over each character in a credits string and increment the length. If the
//  * character is a space, increment by 4; otherwise increment by 7. Once the next
//  * character is a null character (equal to 0), stop counting the length since
//  * that's the end of the string.
//  */
// export const get_credits_str_width = (str) => {
//     let /*u32*/ c
//     let /*s32*/ length = 0

//     while ((c = *str++) != 0) {
//         length += (c == ' ' ? 4 : 7)
//     }

//     return length
// }

// #define CREDIT_TEXT_MARGIN_X ((s32)(GFX_DIMENSIONS_ASPECT_RATIO * 21))
// #define CREDIT_TEXT_X_LEFT GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(CREDIT_TEXT_MARGIN_X)
// #define CREDIT_TEXT_X_RIGHT GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(CREDIT_TEXT_MARGIN_X)

// /**
//  * print_displaying_credits_entry: Print the current displaying Credits Entry
//  * Called in render_game. This function checks if sDispCreditsEntry points to a
//  * credits entry (see act_credits_cutscene), and if so, display it. The reason
//  * this is called every frame in render_game is because the credits need to
//  * display on top of everything else.
//  * To print a credits entry, we take the first character of the first string,
//  * subtract the value of the 0 character, and use that as the number of lines to
//  * print, excluding the title. Then, we print the title (after advancing the
//  * pointer by 1) at X 28, Y either 28 or 172, depending on the print at bottom
//  * flag. Finally, we print each line using the number of lines previously stored
//  * as a counter, and increase the Y value by either the constant 16 (JP only) or
//  * by the value of lineHeight.
//  */
// export const print_displaying_credits_entry = () => {
//     char **currStrPtr
//     char *titleStr
//     let /*s16*/ numLines
//     let /*s16*/ strY
// #ifndef VERSION_JP
//     let /*s16*/ lineHeight
// #endif

//     if (sDispCreditsEntry != null) {
//         currStrPtr = (char **) sDispCreditsEntry.unk0C
//         titleStr = *currStrPtr++
//         numLines = *titleStr++ - '0'

//         strY = (sDispCreditsEntry.unk02 & 0x20 ? 28 : 172) + (numLines == 1) * 16
// #ifndef VERSION_JP
//         lineHeight = 16
// #endif

//         dl_rgba16_begin_cutscene_msg_fade()
//         print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY, titleStr)

// #ifndef VERSION_JP
//         switch (numLines) {
//             case 4:
//                 print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY + 24, *currStrPtr++)
//                 numLines = 2
//                 lineHeight = 24
//                 break
//             case 5:
//                 print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY + 16, *currStrPtr++)
//                 numLines = 3
//                 break
// #ifdef VERSION_EU
//             case 6:
//                 print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY + 32, *currStrPtr++)
//                 numLines = 3
//                 break
//             case 7:
//                 print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY + 16, *currStrPtr++)
//                 print_credits_str_ascii(CREDIT_TEXT_X_LEFT, strY + 32, *currStrPtr++)
//                 numLines = 3
//                 break
// #endif
//         }
// #endif

//         while (numLines-- > 0) {
//             print_credits_str_ascii(CREDIT_TEXT_X_RIGHT - get_credits_str_width(*currStrPtr), strY, *currStrPtr)

// #ifdef VERSION_JP
//             strY += 16
// #else
//             strY += lineHeight
// #endif

//             currStrPtr++
//         }

//         dl_rgba16_stop_cutscene_msg_fade()
//         sDispCreditsEntry = null
//     }
// }

// export const bhv_end_peach_loop = () => {
//     cur_obj_init_animation_with_sound(sEndPeachAnimation)
//     if (cur_obj_check_if_near_animation_end()) {
//           // anims: 0-3, 4, 5, 6-8, 9, 10, 11
//         if (sEndPeachAnimation < 3 || sEndPeachAnimation == 6 || sEndPeachAnimation == 7) {
//             sEndPeachAnimation++
//         }
//     }
// }

// export const bhv_end_toad_loop = () => {
//     let /*s32*/ toadAnimIndex = (gCurrentObject.rawData[oPosX] >= 0.0)

//     cur_obj_init_animation_with_sound(sEndToadAnims[toadAnimIndex])
//     if (cur_obj_check_if_near_animation_end()) {
//           // 0-1, 2-3, 4, 5, 6, 7
//         if (sEndToadAnims[toadAnimIndex] == 0 || sEndToadAnims[toadAnimIndex] == 2) {
//             sEndToadAnims[toadAnimIndex]++
//         }
//     }
// }

// Geo switch case function for controlling Peach's eye state.
export const geo_switch_peach_eyes = (run, node, a2) => {
    let switchCase = node
    let /*s16*/ timer

    if (run == 1) {
        if (D_8032CBE4 == 0) {
            timer = (gLinker.GeoRenderer.gAreaUpdateCounter + 0x20) >> 1 & 0x1F
            if (timer < 7) {
                switchCase.selectedCase = D_8032CBE8 * 4 + D_8032CBEC[timer]
            } else {
                switchCase.selectedCase = D_8032CBE8 * 4 + 1
            }
        } else {
            switchCase.selectedCase = D_8032CBE8 * 4 + D_8032CBE4 - 1
        }
    }

    return false
}

// // unused
// const stub_is_textbox_active = (a0) => {
//     if (get_dialog_id() == -1) {
//         *a0 = 0
//     }
// }

// /**
//  * get_star_collection_dialog: Determine what dialog should show when Mario
//  * collects a star.
//  * Determines if Mario has collected enough stars to get a dialog for it, and
//  * if so, return the dialog ID. Otherwise, return false. A dialog is returned if
//  * numStars has reached a milestone and prevNumStarsForDialog has not reached it.
//  */
// export const get_star_collection_dialog = (m) => {
//     let /*s32*/ i
//     let /*s32*/ dialogID = 0
//     let /*s32*/ numStarsRequired

// export const ARRAY_COUNT = (i) => {
//         numStarsRequired = sStarsNeededForDialog[i]
//         if (m.prevNumStarsForDialog < numStarsRequired && m.numStars >= numStarsRequired) {
//             dialogID = i + DIALOG_141
//             break
//         }
//     }

//     m.prevNumStarsForDialog = m.numStars
//     return dialogID
// }

// // save menu handler
// export const handle_save_menu = (m) => {
//     let /*s32*/ dialogID
//       // wait for the menu to show up
//     if (is_anim_past_end(m) && gSaveOptSelectIndex != 0) {
//           // save and continue / save and quit
//         if (gSaveOptSelectIndex == SAVE_OPT_SAVE_AND_CONTINUE || gSaveOptSelectIndex == SAVE_OPT_SAVE_AND_QUIT) {
//             save_file_do_save(gCurrSaveFileNum - 1)

//             if (gSaveOptSelectIndex == SAVE_OPT_SAVE_AND_QUIT) {
//                 fade_into_special_warp(-2, 0);   // reset game
//             }
//         }

//           // not quitting
//         if (gSaveOptSelectIndex != SAVE_OPT_SAVE_AND_QUIT) {
//             disable_time_stop()
//             m.faceAngle[1] += 0x8000
//               // figure out what dialog to show, if we should
//             dialogID = get_star_collection_dialog(m)
//             if (dialogID != 0) {
//                 play_peachs_jingle()
//                   // look up for dialog
//                 set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG, dialogID)
//             } else {
//                 set_mario_action(m, ACT_IDLE, 0)
//             }
//         }
//     }
// }

// /**
//  * spawn_obj_at_mario_rel_yaw: Spawns object at Mario with relative yaw.
//  * Spawns object with given behavior and model and copies over Mario's position
//  * and yaw plus relative yaw.
//  */
// export const spawn_obj_at_mario_rel_yaw = (m, model, behavior, relYaw) => {
//     struct Object *o = spawn_object(m.marioObj, model, behavior)

//     o.rawData[oFaceAngleYaw] = m.faceAngle[1] + relYaw
//     o.rawData[oPosX] = m.pos[0]
//     o.rawData[oPosY] = m.pos[1]
//     o.rawData[oPosZ] = m.pos[2]

//     return o
// }

/**
 * cutscene_take_cap_off: Put Mario's cap on.
 * Clears "cap on head" flag, sets "cap in hand" flag, plays sound
 * SOUND_ACTION_UNKNOWN43D.
 */
export const cutscene_take_cap_off = (m) => {
    m.flags &= ~MARIO_CAP_ON_HEAD
    m.flags |= MARIO_CAP_IN_HAND
    play_sound(SOUND_ACTION_UNKNOWN43D, m.marioObj.gfx.cameraToObject)
}

/**
 * cutscene_put_cap_on: Put Mario's cap on.
 * Clears "cap in hand" flag, sets "cap on head" flag, plays sound
 * SOUND_ACTION_UNKNOWN43E.
 */
export const cutscene_put_cap_on = (m) => {
    m.flags &= ~MARIO_CAP_IN_HAND
    m.flags |= MARIO_CAP_ON_HEAD
    play_sound(SOUND_ACTION_UNKNOWN43E, m.marioObj.gfx.cameraToObject)
}

// /**
//  * mario_ready_to_speak: Determine if Mario is able to speak to a NPC
//  * The following conditions must be met in order for Mario to be considered
//  * ready to speak.
//  * 1: Mario's action must be in the stationary or moving action groups, or if
//  *    not, he must be in the "waiting for dialog" state.
//  * 2: Mario mat not be riding a shell or be invulnerable.
//  * 3: Mario must not be in first person mode.
//  */
export const mario_ready_to_speak = () => {
    const gMarioState = gLinker.LevelUpdate.gMarioState

    let /*u32*/ actionGroup = gMarioState.action & ACT_GROUP_MASK
    let /*s32*/ isReadyToSpeak = 0

    if ((gMarioState.action == ACT_WAITING_FOR_DIALOG || actionGroup == ACT_GROUP_STATIONARY
         || actionGroup == ACT_GROUP_MOVING)
        && (!(gMarioState.action & (ACT_FLAG_RIDING_SHELL | ACT_FLAG_INVULNERABLE))
            && gMarioState.action != ACT_FIRST_PERSON)) {
        isReadyToSpeak = 1
    }

    return isReadyToSpeak
}

// (can) place Mario in dialog?
// initiate dialog?
// return values:
// 0 = not in dialog
// 1 = starting dialog
// 2 = speaking
export const set_mario_npc_dialog = (actionArg) => {
    const gMarioState = gLinker.LevelUpdate.gMarioState
    
    let /*s32*/ dialogState = MARIO_DIALOG_STATUS_NONE

      // in dialog
    if (gMarioState.action == ACT_READING_NPC_DIALOG) {
        if (gMarioState.actionState < 8) {
            dialogState = MARIO_DIALOG_STATUS_START;   // starting dialog
        }
        if (gMarioState.actionState == 8) {
            if (actionArg == MARIO_DIALOG_STOP) {
                gMarioState.actionState++;   // exit dialog
            } else {
                dialogState = MARIO_DIALOG_STATUS_SPEAK
            }
        }
    } else if (actionArg != 0 && mario_ready_to_speak()) {
        gMarioState.usedObj = gLinker.ObjectListProcessor.gCurrentObject
        set_mario_action(gMarioState, ACT_READING_NPC_DIALOG, actionArg)
        dialogState = MARIO_DIALOG_STATUS_START
    }

    return dialogState
}

// actionargs:
// 1 : no head turn
// 2 : look up
// 3 : look down
// actionstate values:
// 0 - 7: looking toward npc
// 8: in dialog
// 9 - 22: looking away from npc
// 23: end
export const act_reading_npc_dialog = (m) => {
    let /*s32*/ headTurnAmount = 0
    let /*s16*/ angleToNPC

    if (m.actionArg == MARIO_DIALOG_LOOK_UP) {
        headTurnAmount = -1024
    }
    if (m.actionArg == MARIO_DIALOG_LOOK_DOWN) {
        headTurnAmount = 384
    }

    if (m.actionState < 8) {
          // turn to NPC
        angleToNPC = mario_obj_angle_to_object(m, m.usedObj)
        m.faceAngle[1] =
            angleToNPC - approach_s32((angleToNPC - m.faceAngle[1]) << 16 >> 16, 0, 2048, 2048)
          // turn head to npc
        m.actionTimer += headTurnAmount
          // set animation
        set_mario_animation(m, m.heldObj == null ? MARIO_ANIM_FIRST_PERSON
                                                  : MARIO_ANIM_IDLE_WITH_LIGHT_OBJ)
    } else if (m.actionState >= 9 && m.actionState < 17) {
          // look back from facing NPC
        m.actionTimer -= headTurnAmount
    } else if (m.actionState == 23) {
        if (m.flags & MARIO_CAP_IN_HAND) {
            set_mario_action(m, ACT_PUTTING_ON_CAP, 0)
        } else {
            set_mario_action(m, m.heldObj == null ? ACT_IDLE : ACT_HOLD_IDLE, 0)
        }
    }
    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)
    vec3s_set(m.marioBodyState.headAngle, m.actionTimer, 0, 0)

    if (m.actionState != 8) {
        m.actionState++
    }
    return false
}

// puts Mario in a state where he's waiting for (npc) dialog; doesn't do much
export const act_waiting_for_dialog = (m) => {
    set_mario_animation(m, m.heldObj == null ? MARIO_ANIM_FIRST_PERSON : MARIO_ANIM_IDLE_WITH_LIGHT_OBJ)
    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)
    return false
}

// makes Mario disappear and triggers warp
export const act_disappeared = (m) => {
    set_mario_animation(m, MARIO_ANIM_A_POSE)
    stop_and_set_height_to_floor(m)
    m.marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
    if (m.actionArg) {
        m.actionArg--
        if ((m.actionArg & 0xFFFF) == 0) {
            level_trigger_warp(m, m.actionArg >> 16)
        }
    }
    return false
}

export const act_reading_automatic_dialog = (m) => {
    let /*u32*/ actionArg

    m.actionState++
    if (m.actionState == 2) {
        enable_time_stop()
    }
    if (m.actionState < 9) {
        set_mario_animation(m, m.prevAction == ACT_STAR_DANCE_WATER ? MARIO_ANIM_WATER_IDLE
                                                                     : MARIO_ANIM_FIRST_PERSON)
        // always look up for automatic dialogs
        m.actionTimer -= 1024
    } else {
          // set Mario dialog
        if (m.actionState == 9) {
            actionArg = m.actionArg
            if (actionArg & 0xFFFF0000 == 0) {
                IngameMenu.create_dialog_box(actionArg & 0xFFFF0000)
            } else {
                IngameMenu.create_dialog_box_with_var(actionArg & 0xFFFF0000, actionArg & 0xFFFF)
            }
        }
          // wait until dialog is done
        else if (m.actionState == 10) {
            if (IngameMenu.get_dialog_id() >= 0) {
                m.actionState--
            }
        }
          // look back down
        else if (m.actionState < 19) {
            m.actionTimer += 1024
        }
          // finished action
        else if (m.actionState == 25) {
            disable_time_stop()
            if (LevelUpdate.gNeverEnteredCastle) {
                LevelUpdate.gNeverEnteredCastle = 0
                // play_cutscene_music(SEQUENCE_ARGS(0, SEQ_LEVEL_INSIDE_CASTLE))
            }
            if (m.prevAction == ACT_STAR_DANCE_WATER) {
                set_mario_action(m, ACT_WATER_IDLE, 0)   // 100c star?
            } else {
                  // make Mario walk into door after star dialog
                set_mario_action(m, m.prevAction == ACT_UNLOCKING_STAR_DOOR ? ACT_WALKING : ACT_IDLE, 0)
            }
        }
    }
    // apply head turn
    m.marioBodyState.headAngle = [m.actionTimer, 0, 0]
    return false
}

export const act_reading_sign = (m) => {
    const marioObj = m.marioObj
    const gCamera = gLinker.Camera.gCamera

    play_sound_if_no_flag(m, SOUND_ACTION_READ_SIGN, MARIO_ACTION_SOUND_PLAYED)

    switch (m.actionState) {
        // start dialog
        case 0:
            Camera.trigger_cutscene_dialog(1)
            enable_time_stop()
            // reading sign
            set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)
            m.actionState = 1
            // intentional fall through
        // turn toward sign
        case 1:
            m.faceAngle[1] += marioObj.rawData[oMarioPoleUnk108] / 11
            m.pos[0] += marioObj.rawData[oMarioReadingSignDPosX] / 11.0
            m.pos[2] += marioObj.rawData[oMarioReadingSignDPosZ] / 11.0
            // create the text box
            if (m.actionTimer++ == 10) {
                IngameMenu.create_dialog_inverted_box(m.usedObj.rawData[oBehParams2ndByte])
                m.actionState = 2
            }
            break
            // in dialog
        case 2:
            // dialog finished
            if (gCamera.cutscene == 0) {
                disable_time_stop()
                set_mario_action(m, ACT_IDLE, 0)
            }
            break
    }
}

// export const act_debug_free_move = (m) => {
//     struct Surface *surf
//     let /*f32*/ floorHeight
//     Vec3f pos
//     let /*f32*/ speed
//     let /*u32*/ action

//       // integer immediates, generates convert instructions for some reason
//     speed = gPlayer1Controller.buttonDown & B_BUTTON ? 4 : 1
//     if (gPlayer1Controller.buttonDown & L_TRIG) {
//         speed = 0.01
//     }

//     set_mario_animation(m, MARIO_ANIM_A_POSE)
//     vec3f_copy(pos, m.pos)

//     if (gPlayer1Controller.buttonDown & U_JPAD) {
//         pos[1] += 16.0 * speed
//     }
//     if (gPlayer1Controller.buttonDown & D_JPAD) {
//         pos[1] -= 16.0 * speed
//     }

//     if (m.intendedMag > 0) {
//         pos[0] += 32.0 * speed * sins(m.intendedYaw)
//         pos[2] += 32.0 * speed * coss(m.intendedYaw)
//     }

//     resolve_and_return_wall_collisions(pos, 60.0, 50.0)

//     floorHeight = find_floor(pos[0], pos[1], pos[2], &surf)
//     if (surf != null) {
//         if (pos[1] < floorHeight) {
//             pos[1] = floorHeight
//         }
//         vec3f_copy(m.pos, pos)
//     }

//     m.faceAngle[1] = m.intendedYaw
//     vec3f_copy(m.marioObj.gfx.pos, m.pos)
//     vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)

//     if (gPlayer1Controller.buttonPressed == A_BUTTON) {
//         if (m.pos[1] <= m.waterLevel - 100) {
//             action = ACT_WATER_IDLE
//         } else {
//             action = ACT_IDLE
//         }
//         set_mario_action(m, action, 0)
//     }

//     return false
// }

export const general_star_dance_handler = (m, isInWater) => {
    let /*s32*/ dialogID
    if (m.actionState == 0) {
        switch (++m.actionTimer) {
            case 1:
                // spawn_object(m.marioObj, MODEL_STAR, gLinker.behaviors.bhvCelebrationStar)
                // disable_background_sound()
                // if (m.actionArg & 1) {
                //     play_course_clear()
                // } else {
                //     if (Area.gCurrLevelNum == LEVEL_BOWSER_1 || Area.gCurrLevelNum == LEVEL_BOWSER_2) {
                //         play_music(SEQ_PLAYER_ENV, SEQUENCE_ARGS(15, SEQ_EVENT_CUTSCENE_COLLECT_KEY), 0)
                //     } else {
                //         play_music(SEQ_PLAYER_ENV, SEQUENCE_ARGS(15, SEQ_EVENT_CUTSCENE_COLLECT_STAR), 0)
                //     }
                // }
                break

            case 42:
                play_sound(SOUND_MARIO_HERE_WE_GO, m.marioObj.gfx.cameraToObject)
                break

            case 80:
                if ((m.actionArg & 1) == 0) {
                    level_trigger_warp(m, WARP_OP_STAR_EXIT)
                } else {
                    enable_time_stop()
                    // create_dialog_box_with_response(gLastCompletedStarNum == 7 ? DIALOG_013 : DIALOG_014)
                    m.actionState = 1
                }
                break
        }
    } else if (m.actionState == 1 /*&& gDialogResponse*/) {
        // if (gDialogResponse == 1) {
        //     save_file_do_save(gCurrSaveFileNum - 1)
        // }
        m.actionState = 2
        disable_time_stop()
        // enable_background_sound()
        dialogID = 0 // get_star_collection_dialog(m)
        if (dialogID != 0) {
            // look up for dialog
            set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG, dialogID)
        } else {
            set_mario_action(m, isInWater ? ACT_WATER_IDLE : ACT_IDLE, 0)
        }
    }
}

export const act_star_dance = (m) => {
    m.faceAngle[1] = m.area.camera.yaw
    set_mario_animation(m, m.actionState == 2 ? MARIO_ANIM_RETURN_FROM_STAR_DANCE
                                               : MARIO_ANIM_STAR_DANCE)
    general_star_dance_handler(m, 0)
    if (m.actionState != 2 && m.actionTimer >= 40) {
        m.marioBodyState.handState = MARIO_HAND_PEACE_SIGN
    }
    stop_and_set_height_to_floor(m)
    return false
}

export const act_star_dance_water = (m) => {
    m.faceAngle[1] = m.area.camera.yaw
    set_mario_animation(m, m.actionState == 2 ? MARIO_ANIM_RETURN_FROM_WATER_STAR_DANCE
                                               : MARIO_ANIM_WATER_STAR_DANCE)
    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)
    general_star_dance_handler(m, 1)
    if (m.actionState != 2 && m.actionTimer >= 62) {
        m.marioBodyState.handState = MARIO_HAND_PEACE_SIGN
    }
    return false
}

export const act_fall_after_star_grab = (m) => {
    if (m.pos[1] < m.waterLevel - 130) {
        play_sound(SOUND_ACTION_UNKNOWN430, m.marioObj.gfx.cameraToObject)
        m.particleFlags |= PARTICLE_WATER_SPLASH
        return set_mario_action(m, ACT_STAR_DANCE_WATER, m.actionArg)
    }
    if (perform_air_step(m, 1) == AIR_STEP_LANDED) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
        set_mario_action(m, m.actionArg & 1 ? ACT_STAR_DANCE_NO_EXIT : ACT_STAR_DANCE_EXIT,
                         m.actionArg)
    }
    set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
    return false
}

export const common_death_handler = (m, animation, frameToDeathWarp) => {
    let /*s32*/ animFrame = set_mario_animation(m, animation)
    if (animFrame == frameToDeathWarp) {
        level_trigger_warp(m, WARP_OP_DEATH)
    }
    m.marioBodyState.eyeState = MARIO_EYES_DEAD
    stop_and_set_height_to_floor(m)
    return animFrame
}

export const act_standing_death = (m) => {
    if (m.input & INPUT_IN_POISON_GAS) {
        return set_mario_action(m, ACT_SUFFOCATION, 0)
    }

    play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
    common_death_handler(m, MARIO_ANIM_DYING_FALL_OVER, 80)
    // const animFrame = geo_update_animation_frame(m.gfx.animInfo, null)
    // if (animFrame == 77) {
    play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
    // }
    set_mario_action(m, ACT_IDLE, 0)
    return false
}

export const act_electrocution = (m) => {
    //play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
    //common_death_handler(m, MARIO_ANIM_ELECTROCUTION, 43)
    return false
}

export const act_suffocation = (m) => {
    play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
    common_death_handler(m, MARIO_ANIM_SUFFOCATING, 86)
    return false
}

export const act_death_on_back = (m) => {
    play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
    if (common_death_handler(m, MARIO_ANIM_DYING_ON_BACK, 54) == 40) {
        play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
    }
    return false
}

export const act_death_on_stomach = (m) => {
    play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
    if (common_death_handler(m, MARIO_ANIM_DYING_ON_STOMACH, 37) == 37) {
        play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
    }
    return false
}

export const act_quicksand_death = (m) => {
    if (m.actionState == 0) {
        set_mario_animation(m, MARIO_ANIM_DYING_IN_QUICKSAND)
        set_anim_to_frame(m, 60)
        m.actionState = 1
    }
    if (m.actionState == 1) {
        if (m.quicksandDepth >= 100.0) {
            play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_ACTION_SOUND_PLAYED)
        }
        if ((m.quicksandDepth += 5.0) >= 180.0) {
            level_trigger_warp(m, WARP_OP_DEATH)
            m.actionState = 2
        }
    }
    stationary_ground_step(m)
    play_sound(SOUND_MOVING_QUICKSAND_DEATH, m.marioObj.gfx.cameraToObject)
    return false
}

// export const act_eaten_by_bubba = (m) => {
//     play_sound_if_no_flag(m, SOUND_MARIO_DYING, MARIO_ACTION_SOUND_PLAYED)
//     set_mario_animation(m, MARIO_ANIM_A_POSE)
//     m.marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
//     m.health = 0xFF
//     if (m.actionTimer++ == 60) {
//         level_trigger_warp(m, WARP_OP_DEATH)
//     }
//     return false
// }

// set animation and forwardVel; when perform_air_step returns AIR_STEP_LANDED,
// set the new action
const launch_mario_until_land = (m, endAction, animation, forwardVel) => {
    let /*s32*/ airStepLanded
    mario_set_forward_vel(m, forwardVel)
    set_mario_animation(m, animation)
    airStepLanded = (perform_air_step(m, 0) == AIR_STEP_LANDED)
    if (airStepLanded) {
        set_mario_action(m, endAction, 0)
    }
    return airStepLanded
}

// export const act_unlocking_key_door = (m) => {
//     m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]

//     m.pos[0] = m.usedObj.rawData[oPosX] + coss(m.faceAngle[1]) * 75.0
//     m.pos[2] = m.usedObj.rawData[oPosZ] + sins(m.faceAngle[1]) * 75.0

//     if (m.actionArg & 2) {
//         m.faceAngle[1] += 0x8000
//     }

//     if (m.actionTimer == 0) {
//         spawn_obj_at_mario_rel_yaw(m, MODEL_BOWSER_KEY_CUTSCENE, bhvBowserKeyUnlockDoor, 0)
//         set_mario_animation(m, MARIO_ANIM_UNLOCK_DOOR)
//     }

//     switch (m.marioObj.gfx.animInfo.animFrame) {
//         case 79:
//             play_sound(SOUND_GENERAL_DOOR_INSERT_KEY, m.marioObj.gfx.cameraToObject)
//             break
//         case 111:
//             play_sound(SOUND_GENERAL_DOOR_TURN_KEY, m.marioObj.gfx.cameraToObject)
//             break
//     }

//     update_mario_pos_for_anim(m)
//     stop_and_set_height_to_floor(m)

//     if (is_anim_at_end(m)) {
//         if (m.usedObj.rawData[oBehParams] >> 24 == 1) {
//             save_file_set_flags(SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR)
//             save_file_clear_flags(SAVE_FLAG_HAVE_KEY_2)
//         } else {
//             save_file_set_flags(SAVE_FLAG_UNLOCKED_BASEMENT_DOOR)
//             save_file_clear_flags(SAVE_FLAG_HAVE_KEY_1)
//         }
//         set_mario_action(m, ACT_WALKING, 0)
//     }

//     m.actionTimer++
//     return false
// }

export const act_unlocking_star_door = (m) => {
    switch (m.actionState) {
        case 0:
            m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]
            if (m.actionArg & 2) {
                m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
            }
            m.marioObj.rawData[oMarioReadingSignDPosX] = m.pos[0]
            m.marioObj.rawData[oMarioReadingSignDPosZ] = m.pos[2]
            set_mario_animation(m, MARIO_ANIM_SUMMON_STAR)
            m.actionState++
            break
        case 1:
            if (is_anim_at_end(m)) {
                spawn_object(m.marioObj, MODEL_STAR, 'bhvUnlockDoorStar')
                m.actionState++
            }
            break
        case 2:
            if (m.actionTimer++ == 70) {
                set_mario_animation(m, MARIO_ANIM_RETURN_STAR_APPROACH_DOOR)
                m.actionState++
            }
            break
        case 3:
            if (is_anim_at_end(m)) {
                save_file_set_flags(get_door_save_file_flag(m.usedObj))
                set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG, DIALOG_038)
            }
            break
    }

    m.pos[0] = m.marioObj.rawData[oMarioReadingSignDPosX]
    m.pos[2] = m.marioObj.rawData[oMarioReadingSignDPosZ]

    update_mario_pos_for_anim(m)
    stop_and_set_height_to_floor(m)

    return false
}

export const act_entering_star_door = (m) => {
    let /*f32*/ targetDX
    let /*f32*/ targetDZ
    let /*s16*/ targetAngle

    if (m.actionTimer++ == 0) {
        m.interactObj.rawData[oInteractStatus] = 0x00010000

          // ~30 degrees / 1/12 rot
        targetAngle = m.usedObj.rawData[oMoveAngleYaw] + 0x1555
        if (m.actionArg & 2) {
            targetAngle += 0x5556   // ~120 degrees / 1/3 rot (total 150d / 5/12)
        }

          // targetDX and targetDZ are the offsets to add to Mario's position to
          // have Mario stand 150 units in front of the door

        targetDX = m.usedObj.rawData[oPosX] + 150.0 * sins(targetAngle) - m.pos[0]
        targetDZ = m.usedObj.rawData[oPosZ] + 150.0 * coss(targetAngle) - m.pos[2]

        m.marioObj.rawData[oMarioReadingSignDPosX] = targetDX / 20.0
        m.marioObj.rawData[oMarioReadingSignDPosZ] = targetDZ / 20.0

        m.faceAngle[1] = atan2s(targetDZ, targetDX)
    }

      // set Mario's animation
    if (m.actionTimer < 15) {
        set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)
    }

      // go through door? for 20 frames
    else if (m.actionTimer < 35) {
        m.pos[0] += m.marioObj.rawData[oMarioReadingSignDPosX]
        m.pos[2] += m.marioObj.rawData[oMarioReadingSignDPosZ]

        set_mario_anim_with_accel(m, MARIO_ANIM_WALKING, 0x00028000)
    }

    else {
        m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]

        if (m.actionArg & 2) {
            m.faceAngle[1] += 0x8000
        }

        m.pos[0] += 12.0 * sins(m.faceAngle[1])
        m.pos[2] += 12.0 * coss(m.faceAngle[1])

        set_mario_anim_with_accel(m, MARIO_ANIM_WALKING, 0x00028000)
    }

    stop_and_set_height_to_floor(m)

    if (m.actionTimer == 48) {
        set_mario_action(m, ACT_IDLE, 0)
    }

    return false
}

export const act_going_through_door = (m) => {
    if (m.actionTimer == 0) {
        if (m.actionArg & 1) {
            m.interactObj.rawData[oInteractStatus] = 0x00010000
            set_mario_animation(m, MARIO_ANIM_PULL_DOOR_WALK_IN)
        } else {
            m.interactObj.rawData[oInteractStatus] = 0x00020000
            set_mario_animation(m, MARIO_ANIM_PUSH_DOOR_WALK_IN)
        }
    }
    m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]
    m.pos[0] = m.usedObj.rawData[oPosX]
    m.pos[2] = m.usedObj.rawData[oPosZ]

    update_mario_pos_for_anim(m)
    stop_and_set_height_to_floor(m)

    if (m.actionArg & 4) {
        if (m.actionTimer == 16) {
            level_trigger_warp(m, WARP_OP_WARP_DOOR)
        }
    } else if (is_anim_at_end(m)) {
        if (m.actionArg & 2) {
            m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
        }
        set_mario_action(m, ACT_IDLE, 0)
    }

    m.actionTimer++
    return false
}

export const act_warp_door_spawn = (m) => {
    if (m.actionState == 0) {
        m.actionState = 1
        if (m.actionArg & 1) {
            m.usedObj.rawData[oInteractStatus] = 0x00040000
        } else {
            m.usedObj.rawData[oInteractStatus] = 0x00080000
        }
    } else if (m.usedObj.rawData[oAction] == 0) {
        if (LevelUpdate.gNeverEnteredCastle == 1 && Area.gCurrLevelNum == LEVEL_CASTLE) {
            set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG, DIALOG_021)
        } else {
            set_mario_action(m, ACT_IDLE, 0)
        }
    }
    set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)
    stop_and_set_height_to_floor(m)
    return false
}

export const act_emerge_from_pipe = (m) => {
    let marioObj = m.marioObj;

    m.actionTimer++;

    if (m.actionTimer < 11) {
        marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE;
        return false;
    }

    marioObj.gfx.flags |= GRAPH_RENDER_ACTIVE;

    play_sound_if_no_flag(m, SOUND_MARIO_YAHOO, MARIO_MARIO_SOUND_PLAYED);

    if (Area.gCurrLevelNum == LEVEL_THI) {
        Area.gCurrAreaIndex == 2
            ? play_sound_if_no_flag(m, SOUND_MENU_EXIT_PIPE, MARIO_ACTION_SOUND_PLAYED)
            : play_sound_if_no_flag(m, SOUND_MENU_ENTER_PIPE, MARIO_ACTION_SOUND_PLAYED);
    }

    if (launch_mario_until_land(m, ACT_JUMP_LAND_STOP, MARIO_ANIM_SINGLE_JUMP, 8.0)) {
        mario_set_forward_vel(m, 0.0);
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING);
    }
    return false;
}

export const act_spawn_spin_airborne = (m) => {
    // entered water, exit action
    if (m.pos[1] < m.waterLevel - 100) {
        LevelUpdate.load_level_init_text(0)
        return set_water_plunge_action(m)
    }

      // updates all velocity variables based on m->forwardVel
    mario_set_forward_vel(m, m.forwardVel)

      // landed on floor, play spawn land animation
    if (perform_air_step(m, 0.0) == AIR_STEP_LANDED) {
        //play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
        set_mario_action(m, ACT_SPAWN_SPIN_LANDING, 0)
    }

      // is 300 units above floor, spin and play woosh sounds
    if (m.actionState == 0 && m.pos[1] - m.floorHeight > 300.0) {
        if (set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING) == 0) {   // first anim frame
            //play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
        }
    }

      // under 300 units above floor, enter freefall animation
    else {
        m.actionState = 1
        set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
    }

    return false
}

export const act_spawn_spin_landing = (m) => {
    stop_and_set_height_to_floor(m)
    set_mario_animation(m, MARIO_ANIM_GENERAL_LAND)
    if (is_anim_at_end(m)) {
        LevelUpdate.load_level_init_text(0)
        set_mario_action(m, ACT_IDLE, 0)
    }
    return false
}

// /**
//  * act_exit_airborne: Jump out of a level after collecting a Power Star (no
//  ** sparkles)
//  * Mario always faces a level entrance when he launches out of it, whether he
//  * died or he collected a star/key. Because of that, we need him to move away
//  * from the painting by setting his speed to -32.0 and have him face away from
//  * the painting by adding 0x8000 (180 deg) to his graphics angle. We also set
//  * his heal counter to 31 to restore 7.75 units of his health, and enable the
//  * particle flag that generates sparkles.
//  */
export const act_exit_airborne = (m) => {
    if (15 < m.actionTimer++ && launch_mario_until_land(m, ACT_EXIT_LAND_SAVE_DIALOG, MARIO_ANIM_GENERAL_FALL, -32.0)) {
        // heal Mario
        m.healCounter = 31
    }
    // rotate him to face away from the entrance
    m.marioObj.gfx.angle[1] += 0x8000
    m.particleFlags |= PARTICLE_SPARKLES
    return false
}

export const act_falling_exit_airborne = (m) => {
    if (launch_mario_until_land(m, ACT_EXIT_LAND_SAVE_DIALOG, MARIO_ANIM_GENERAL_FALL, 0.0)) {
        // heal Mario
        m.healCounter = 31
    }
    // rotate Mario to face away from the entrance
    m.marioObj.gfx.angle[1] += 0x8000
    m.particleFlags |= PARTICLE_SPARKLES
    return false
}

export const act_exit_land_save_dialog = (m) => {
    let /*s32*/ animFrame
    stationary_ground_step(m)
    play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)
    switch (m.actionState) {
          // determine type of exit
        case 0:
            set_mario_animation(m, m.actionArg == 0 ? MARIO_ANIM_GENERAL_LAND
                                                     : MARIO_ANIM_LAND_FROM_SINGLE_JUMP)
            if (is_anim_past_end(m)) {
                if (gLastCompletedCourseNum != COURSE_BITDW
                    && gLastCompletedCourseNum != COURSE_BITFS) {
                    enable_time_stop()
                }

                IngameMenu.set_menu_mode(MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN)
                Area.gSaveOptSelectIndex = MENU_OPT_NONE

                m.actionState = 3 // star exit with cap
                if (!(m.flags & MARIO_CAP_ON_HEAD)) {
                    m.actionState = 2 // star exit without cap
                }
                if (gLastCompletedCourseNum == COURSE_BITDW
                    || gLastCompletedCourseNum == COURSE_BITFS) {
                    m.actionState = 1 // key exit
                }
            }
            break
        // key exit
        case 1:
            animFrame = set_mario_animation(m, MARIO_ANIM_THROW_CATCH_KEY)
            switch (animFrame) {
                case -1:
                    // spawn_obj_at_mario_rel_yaw(m, MODEL_BOWSER_KEY_CUTSCENE, bhvBowserKeyCourseExit, -32768)
                    //! fall through
                case 67:
                    play_sound(SOUND_ACTION_KEY_SWISH, m.marioObj.gfx.cameraToObject)
                    //! fall through
                case 83:
                    play_sound(SOUND_ACTION_PAT_BACK, m.marioObj.gfx.cameraToObject)
                    //! fall through
                case 111:
                    play_sound(SOUND_ACTION_UNKNOWN45C, m.marioObj.gfx.cameraToObject)
                    // no break
            }
            // handle_save_menu(m)
            break
        // exit without cap
        case 2:
            animFrame = set_mario_animation(m, MARIO_ANIM_MISSING_CAP)
            if ((animFrame >= 18 && animFrame < 55) || (animFrame >= 112 && animFrame < 134)) {
                m.marioBodyState.handState = MARIO_HAND_OPEN
            }
            if (!(animFrame < 109) && animFrame < 154) {
                m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
            }

            // handle_save_menu(m)
            break
        // exit with cap
        case 3:
            animFrame = set_mario_animation(m, MARIO_ANIM_TAKE_CAP_OFF_THEN_ON)
            switch (animFrame) {
                case 12:
                    cutscene_take_cap_off(m)
                    break
                case 37:
                  // fall through
                case 53:
                    play_sound(SOUND_ACTION_BRUSH_HAIR, m.marioObj.gfx.cameraToObject)
                    break
                case 82:
                    cutscene_put_cap_on(m)
                    break
                // to prevent a softlock due to lack of handle_save_menu
                case 99:
                    set_mario_action(m, ACT_IDLE, 0)
                    m.faceAngle[1] += 0x8000
                    break
            }
            // handle_save_menu(m)
            break
    }

    m.marioObj.gfx.angle[1] += 0x8000
    return false
}

export const act_death_exit = (m) => {
     if (15 < m.actionTimer++ 
         && launch_mario_until_land(m, ACT_DEATH_EXIT_LAND, MARIO_ANIM_GENERAL_FALL, -32)) {
/*#ifdef VERSION_JP
    play_sound(SOUND_MARIO_OOOF, m.marioObj.gfx.cameraToObject)
#else
    play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
#endif
#ifdef VERSION_SH
    queue_rumble_data(5, 80)
#endif*/
        m.numLives--
        // restore 7.75 units of health
        m.healCounter = 31
    }
    // one unit of health
    m.health = 0x0100
    return false
}

// export const act_unused_death_exit = (m) => {
//     if (launch_mario_until_land(m, ACT_FREEFALL_LAND_STOP, MARIO_ANIM_GENERAL_FALL, 0.0)) {
// #ifdef VERSION_JP
//         play_sound(SOUND_MARIO_OOOF, m.marioObj.gfx.cameraToObject)
// #else
//         play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
// #endif
//         m.numLives--
//           // restore 7.75 units of health
//         m.healCounter = 31
//     }
//       // one unit of health
//     m.health = 0x0100
//     return false
// }

export const act_falling_death_exit = (m) => {
    if (launch_mario_until_land(m, ACT_DEATH_EXIT_LAND, MARIO_ANIM_GENERAL_FALL, 0.0)) {
// #ifdef VERSION_JP
//         play_sound(SOUND_MARIO_OOOF, m.marioObj.gfx.cameraToObject)
// #else
//         play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
// #endif
// #ifdef VERSION_SH
//         queue_rumble_data(5, 80)
// #endif
        m.numLives--
          // restore 7.75 units of health
        m.healCounter = 31
    }
      // one unit of health
    m.health = 0x0100
    return false
}

// // waits 11 frames before actually executing, also has reduced fvel
export const act_special_exit_airborne = (m) => {
    const marioObj = m.marioObj

    play_sound_if_no_flag(m, SOUND_MARIO_YAHOO, MARIO_MARIO_SOUND_PLAYED)

    if (m.actionTimer++ < 11) {
        marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
        return false
    }

    if (launch_mario_until_land(m, ACT_EXIT_LAND_SAVE_DIALOG, MARIO_ANIM_SINGLE_JUMP, -24.0)) {
          // heal Mario
        m.healCounter = 31
        m.actionArg = 1
    }

    m.particleFlags |= PARTICLE_SPARKLES
    // rotate Mario to face away from the entrance
    marioObj.gfx.angle[1] += 0x8000
    // show Mario
    marioObj.gfx.flags |= GRAPH_RENDER_ACTIVE

    return false
}

export const act_special_death_exit = (m) => {
    const marioObj = m.marioObj

    if (m.actionTimer++ < 11) {
        marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
        return false
    }

    if (launch_mario_until_land(m, ACT_HARD_BACKWARD_GROUND_KB, MARIO_ANIM_BACKWARD_AIR_KB, -24.0)) {
// #ifdef VERSION_SH
//         queue_rumble_data(5, 80)
// #endif
        m.numLives--
        m.healCounter = 31
    }
    // show Mario
    marioObj.gfx.flags |= GRAPH_RENDER_ACTIVE
    // one unit of health
    m.health = 0x0100

    return false
}

const act_spawn_no_spin_airborne = (m) => {
    launch_mario_until_land(m, ACT_SPAWN_NO_SPIN_LANDING, MARIO_ANIM_GENERAL_FALL, 0.0)
    if (m.pos[1] < m.waterLevel - 100) {
        set_water_plunge_action(m)
    }
    return false
}

const act_spawn_no_spin_landing = (m) => {
    play_mario_landing_sound_once(m, SOUND_ACTION_TERRAIN_LANDING)
    set_mario_animation(m, MARIO_ANIM_GENERAL_LAND)
    stop_and_set_height_to_floor(m)
    if (is_anim_at_end(m)) {
        LevelUpdate.load_level_init_text(0)
        set_mario_action(m, ACT_IDLE, 0)
    }
    return false
}

// export const act_bbh_enter_spin = (m) => {
//     let /*f32*/ floorDist
//     let /*f32*/ scale
//     let /*f32*/ cageDX
//     let /*f32*/ cageDZ
//     let /*f32*/ cageDist
//     let /*f32*/ forwardVel

//     cageDX = m.usedObj.rawData[oPosX] - m.pos[0]
//     cageDZ = m.usedObj.rawData[oPosZ] - m.pos[2]
//     cageDist = sqrtf(cageDX * cageDX + cageDZ * cageDZ)

//     if (cageDist > 20.0) {
//         forwardVel = 10.0
//     } else {
//         forwardVel = cageDist / 2.0
//     }
//     if (forwardVel < 0.5) {
//         forwardVel = 0.0
//     }

//     switch (m.actionState) {
//         case 0:
//             floorDist = 512.0 - (m.pos[1] - m.floorHeight)
//             m.vel[1] = floorDist > 0 ? sqrtf(4.0 * floorDist + 1.0) - 1.0 : 2.0

//             m.actionState = 1
//             m.actionTimer = 100
//               // fall through

//         case 1:
//             m.faceAngle[1] = atan2s(cageDZ, cageDX)
//             mario_set_forward_vel(m, forwardVel)

//             if (set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING) == 0) {
//                 play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
//             }

//             m.flags &= ~MARIO_UNKNOWN_08
//             perform_air_step(m, 0)
//             if (m.vel[1] <= 0) {
//                 m.actionState = 2
//             }
//             break

//         case 2:
//               // fall through
//         case 3:
//             m.faceAngle[1] = atan2s(cageDZ, cageDX)
//             mario_set_forward_vel(m, forwardVel)
//             m.flags &= ~MARIO_UNKNOWN_08
//             if (perform_air_step(m, 0) == AIR_STEP_LANDED) {
//                 level_trigger_warp(m, WARP_OP_UNKNOWN_02)
// #ifdef VERSION_SH
//                 queue_rumble_data(15, 80)
// #endif
//                 m.actionState = 4
//             }
//             if (m.actionState == 2) {
//                 if (m.marioObj.gfx.animInfo.animFrame == 0) {
//                     m.actionState = 3
//                 }
//             } else {
//                 play_sound_if_no_flag(m, SOUND_ACTION_SHRINK_INTO_BBH, MARIO_ACTION_SOUND_PLAYED)
//                 set_mario_animation(m, MARIO_ANIM_DIVE)
//                 m.marioObj.gfx.angle[0] = atan2s(m.forwardVel, -m.vel[1])
//             }
//             m.squishTimer = 0xFF
//             if (m.actionTimer >= 11) {
//                 m.actionTimer -= 6
//                 scale = m.actionTimer / 100.0
//                 vec3f_set(m.marioObj.gfx.scale, scale, scale, scale)
//             }
//             break

//         case 4:
//             stop_and_set_height_to_floor(m)
//             m.marioObj.gfx.flags |= GRAPH_RENDER_INVISIBLE
//             break
//     }

//     return false
// }

// export const act_bbh_enter_jump = (m) => {
//     let /*f32*/ cageDX
//     let /*f32*/ cageDZ
//     let /*f32*/ cageDist

//     play_mario_action_sound(
//         m, m.flags & MARIO_METAL_CAP ? SOUND_ACTION_METAL_JUMP : SOUND_ACTION_TERRAIN_JUMP, 1)
//     play_mario_jump_sound(m)

//     if (m.actionState == 0) {
//         cageDX = m.usedObj.rawData[oPosX] - m.pos[0]
//         cageDZ = m.usedObj.rawData[oPosZ] - m.pos[2]
//         cageDist = sqrtf(cageDX * cageDX + cageDZ * cageDZ)

//         m.vel[1] = 60.0
//         m.faceAngle[1] = atan2s(cageDZ, cageDX)
//         mario_set_forward_vel(m, cageDist / 20.0)

//         m.flags &= ~MARIO_UNKNOWN_08
//         m.actionState = 1
//     }

//     set_mario_animation(m, MARIO_ANIM_DOUBLE_JUMP_RISE)
//     perform_air_step(m, 0)

//     if (m.vel[1] <= 0.0) {
//         set_mario_action(m, ACT_BBH_ENTER_SPIN, 0)
//     }

//     return false
// }

export const act_teleport_fade_out = (m) => {
    play_sound_if_no_flag(m, SOUND_ACTION_TELEPORT, MARIO_ACTION_SOUND_PLAYED)
    set_mario_animation(m, m.prevAction == ACT_CROUCHING ? MARIO_ANIM_CROUCHING : MARIO_ANIM_FIRST_PERSON)

    m.flags |= MARIO_TELEPORTING

    if (m.actionTimer < 32) {
        m.fadeWarpOpacity = (-m.actionTimer << 3) + 0xF8
    }

    if (m.actionTimer++ == 20) {
        level_trigger_warp(m, WARP_OP_TELEPORT)
    }

    stop_and_set_height_to_floor(m)

    return false
}

export const act_teleport_fade_in = (m) => {
    play_sound_if_no_flag(m, SOUND_ACTION_TELEPORT, MARIO_ACTION_SOUND_PLAYED)
    set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)

    if (m.actionTimer < 32) {
        m.flags |= MARIO_TELEPORTING
        m.fadeWarpOpacity = m.actionTimer << 3
    } else {
        m.flags &= ~MARIO_TELEPORTING
    }

    if (m.actionTimer++ == 32) {
        if (m.pos[1] < m.waterLevel - 100) {
            // Check if the camera is not underwater.
            if (m.area.camera.mode != CAMERA_MODE_WATER_SURFACE) {
                set_camera_mode(m.area.camera, CAMERA_MODE_WATER_SURFACE, 1)
            }
            set_mario_action(m, ACT_WATER_IDLE, 0)
        } else {
            set_mario_action(m, ACT_IDLE, 0)
        }
    }

    stop_and_set_height_to_floor(m)

    return false
}

 export const act_shocked = (m) => {
    //play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_ACTION_SOUND_PLAYED)
    //play_sound(SOUND_MOVING_SHOCKED, m.marioObj.gfx.cameraToObject)
    //set_camera_shake_from_hit(SHAKE_SHOCK)

    if (set_mario_animation(m, MARIO_ANIM_SHOCKED) == 0) {
        m.actionTimer++
        m.flags |= MARIO_METAL_SHOCK
    }

    if (m.actionArg == 0) {
        mario_set_forward_vel(m, 0.0)
        if (perform_air_step(m, 1) == AIR_STEP_LANDED) {
            //play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            m.actionArg = 1
        }
    } else {
        if (m.actionTimer >= 6) {
            m.invincTimer = 30
            set_mario_action(m, m.health < 0x0100 ? ACT_ELECTROCUTION : ACT_IDLE, 0)
        }
        stop_and_set_height_to_floor(m)
    }

    return false
}

const act_squished = (m) => {
    let /*f32*/ squishAmount
    let /*f32*/ spaceUnderCeil
    let /*s16*/ surfAngle
    let /*s32*/ underSteepSurf = 0   // seems to be responsible for setting velocity?

    if ((spaceUnderCeil = m.ceilHeight - m.floorHeight) < 0) {
        spaceUnderCeil = 0
    }

    switch (m.actionState) {
        case 0:
            if (spaceUnderCeil > 160.0) {
                m.squishTimer = 0
                return set_mario_action(m, ACT_IDLE, 0)
            }

            m.squishTimer = 0xFF

            if (spaceUnderCeil >= 10.1) {
                  // Mario becomes a pancake
                squishAmount = spaceUnderCeil / 160.0
                vec3f_set(m.marioObj.gfx.scale, 2.0 - squishAmount, squishAmount,
                          2.0 - squishAmount)
            } else {
                if (!(m.flags & MARIO_METAL_CAP) && m.invincTimer == 0) {
                      // cap on: 3 units; cap off: 4.5 units
                    m.hurtCounter += m.flags & MARIO_CAP_ON_HEAD ? 12 : 18
                    play_sound_if_no_flag(m, SOUND_MARIO_ATTACKED, MARIO_MARIO_SOUND_PLAYED)
                }

                  // Both of the 1.8's are really floats, but one of them has to
                  // be written as a double for this to match on -O2.
                vec3f_set(m.marioObj.gfx.scale, 1.8, 0.05, 1.8)
                m.actionState = 1
            }
            break
        case 1:
            if (spaceUnderCeil >= 30.0) {
                m.actionState = 2
            }
            break
        case 2:
            m.actionTimer++
            if (m.actionTimer >= 15) {
                  // 1 unit of health
                if (m.health < 0x0100) {
                    level_trigger_warp(m, WARP_OP_DEATH)
                      // woosh, he's gone!
                    set_mario_action(m, ACT_DISAPPEARED, 0)
                } else if (m.hurtCounter == 0) {
                      // un-squish animation
                    m.squishTimer = 30
                    set_mario_action(m, ACT_IDLE, 0)
                }
            }
            break
    }

      // steep floor
    if (m.floor && m.floor.normal.y < 0.5) {
        surfAngle = atan2s(m.floor.normal.z, m.floor.normal.x)
        underSteepSurf = 1
    }
      // steep ceiling
    if (m.ceil && -0.5 < m.ceil.normal.y) {
        surfAngle = atan2s(m.ceil.normal.z, m.ceil.normal.x)
        underSteepSurf = 1
    }

    if (underSteepSurf) {
        m.vel[0] = sins(surfAngle) * 10.0
        m.vel[2] = coss(surfAngle) * 10.0
        m.vel[1] = 0

          // check if there's no floor 10 units away from the surface
        if (perform_ground_step(m) == GROUND_STEP_LEFT_GROUND) {
              // instant un-squish
            m.squishTimer = 0
            set_mario_action(m, ACT_IDLE, 0)
            return false
        }
    }

      // squished for more than 10 seconds, so kill Mario
    if (m.actionArg++ > 300) {
          // 0 units of health
        m.health = 0x00FF
        m.hurtCounter = 0
        level_trigger_warp(m, WARP_OP_DEATH)
          // woosh, he's gone!
        set_mario_action(m, ACT_DISAPPEARED, 0)
    }
    stop_and_set_height_to_floor(m)
    set_mario_animation(m, MARIO_ANIM_A_POSE)
    return false
}

export const act_putting_on_cap = (m) => {
    let /*s32*/ animFrame = set_mario_animation(m, MARIO_ANIM_PUT_CAP_ON)

    if (animFrame == 0) {
        enable_time_stop()
    }

    if (animFrame == 28) {
        cutscene_put_cap_on(m)
    }

    if (is_anim_at_end(m)) {
        set_mario_action(m, ACT_IDLE, 0)
        disable_time_stop()
    }

    stationary_ground_step(m)
    return false
}

const stuck_in_ground_handler = (m, animation, unstuckFrame, target2, target3, endAction) => {
    let /*s32*/ animFrame = set_mario_animation(m, animation)

    if (m.input & INPUT_A_PRESSED) {
        m.actionTimer++
        if (m.actionTimer >= 5 && animFrame < unstuckFrame - 1) {
            animFrame = unstuckFrame - 1
            set_anim_to_frame(m, animFrame)
        }
    }

    stop_and_set_height_to_floor(m)

    if (animFrame == -1) {
        play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_STUCK_IN_GROUND, 1)
    } else if (animFrame == unstuckFrame) {
// #ifdef VERSION_SH
//         queue_rumble_data(5, 80)
// #endif
        play_sound_and_spawn_particles(m, SOUND_ACTION_UNSTUCK_FROM_GROUND, 1)
    } else if (animFrame == target2 || animFrame == target3) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }

    if (is_anim_at_end(m)) {
        set_mario_action(m, endAction, 0)
    }
}

export const act_head_stuck_in_ground = (m) => {
    stuck_in_ground_handler(m, MARIO_ANIM_HEAD_STUCK_IN_GROUND, 96, 105, 135, ACT_IDLE)
    return false
}

export const act_butt_stuck_in_ground = (m) => {
    stuck_in_ground_handler(m, MARIO_ANIM_BOTTOM_STUCK_IN_GROUND, 127, 136, -2, ACT_GROUND_POUND_LAND)
    return false
}

export const act_feet_stuck_in_ground = (m) => {
    stuck_in_ground_handler(m, MARIO_ANIM_LEGS_STUCK_IN_GROUND, 116, 129, -2, ACT_IDLE)
    return false
}

/**
 * advance_cutscene_step: Advances the current step in the current cutscene.
 * Resets action state and action timer, adds 1 to the action arg (responsible
 * for keeping track of what step of the cutscene Mario is in.)
 */
const advance_cutscene_step = (m) => {
    m.actionState = 0
    m.actionTimer = 0
    m.actionArg++
}

const intro_cutscene_hide_hud_and_mario = (m) => {
    LevelUpdate.gHudDisplay.flags = LevelUpdate.HUD_DISPLAY_NONE
    m.statusForCamera.cameraEvent = CAM_EVENT_START_INTRO
    m.marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
    advance_cutscene_step(m)
}

const TIMER_SPAWN_PIPE = 37

const intro_cutscene_peach_lakitu_scene = (m) => {
    const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
    if (m.statusForCamera.cameraEvent != CAM_EVENT_START_INTRO) {
        if (m.actionTimer == TIMER_SPAWN_PIPE) {
            sIntroWarpPipeObj =
                spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_CASTLE_GROUNDS_WARP_PIPE,
                                          gLinker.behaviors.bhvStaticObject, -1328, 60, 4664, 0, 180, 0)
            advance_cutscene_step(m)
        }
        m.actionTimer++
    }
}

const TIMER_RAISE_PIPE = 38

// const intro_cutscene_raise_pipe = (m) => {
//     sIntroWarpPipeObj.rawData[oPosY] = camera_approach_f32_symmetric(sIntroWarpPipeObj.rawData[oPosY], 260.0, 10.0)

//     if (m.actionTimer == 0) {
//         play_sound(SOUND_MENU_EXIT_PIPE, sIntroWarpPipeObj.gfx.cameraToObject)
//     }

//     if (m.actionTimer++ == TIMER_RAISE_PIPE) {
//         m.vel[1] = 60.0
//         advance_cutscene_step(m)
//     }
// }
// #undef TIMER_RAISE_PIPE

// const intro_cutscene_jump_out_of_pipe = (m) => {
//     if (m.actionTimer == 25) {
//         gHudDisplay.flags = HUD_DISPLAY_DEFAULT
//     }

//     if (m.actionTimer++ >= 118) {
//         m.marioObj.gfx.flags |= GRAPH_RENDER_ACTIVE

// #ifdef VERSION_EU
//           // For some reason these calls were swapped.
//         play_sound_if_no_flag(m, SOUND_ACTION_HIT_3, MARIO_ACTION_SOUND_PLAYED)
//         play_sound_if_no_flag(m, SOUND_MARIO_YAHOO, MARIO_MARIO_SOUND_PLAYED)
// #else
//         play_sound_if_no_flag(m, SOUND_MARIO_YAHOO, MARIO_MARIO_SOUND_PLAYED)
//     #ifndef VERSION_JP
//         play_sound_if_no_flag(m, SOUND_ACTION_HIT_3, MARIO_ACTION_SOUND_PLAYED)
//     #endif
// #endif

//         set_mario_animation(m, MARIO_ANIM_SINGLE_JUMP)
//         mario_set_forward_vel(m, 10.0)
//         if (perform_air_step(m, 0) == AIR_STEP_LANDED) {
//             sound_banks_enable(SEQ_PLAYER_SFX, SOUND_BANKS_DISABLED_DURING_INTRO_CUTSCENE)
//             play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
// #ifndef VERSION_JP
//             play_sound(SOUND_MARIO_HAHA, m.marioObj.gfx.cameraToObject)
// #endif
//             advance_cutscene_step(m)
//         }
//     }
// }

// const intro_cutscene_land_outside_pipe = (m) => {
//     set_mario_animation(m, MARIO_ANIM_LAND_FROM_SINGLE_JUMP)

//     if (is_anim_at_end(m)) {
//         advance_cutscene_step(m)
//     }

//     stop_and_set_height_to_floor(m)
// }

// const intro_cutscene_lower_pipe = (m) => {
//     if (m.actionTimer++ == 0) {
//         play_sound(SOUND_MENU_ENTER_PIPE, sIntroWarpPipeObj.gfx.cameraToObject)
//         set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)
//     }

//     sIntroWarpPipeObj.rawData[oPosY] -= 5.0
//     if (sIntroWarpPipeObj.rawData[oPosY] <= 50.0) {
//         obj_mark_for_deletion(sIntroWarpPipeObj)
//         advance_cutscene_step(m)
//     }

//     stop_and_set_height_to_floor(m)
// }

// const intro_cutscene_set_mario_to_idle = (m) => {
//     if (gCamera.cutscene == 0) {
//         gCameraMovementFlags &= ~CAM_MOVE_C_UP_MODE
//         set_mario_action(m, ACT_IDLE, 0)
//     }

//     stop_and_set_height_to_floor(m)
// }

const INTRO_CUTSCENE_HIDE_HUD_AND_MARIO = 0
const INTRO_CUTSCENE_PEACH_LAKITU_SCENE = 1
const INTRO_CUTSCENE_RAISE_PIPE = 2
const INTRO_CUTSCENE_JUMP_OUT_OF_PIPE = 3
const INTRO_CUTSCENE_LAND_OUTSIDE_PIPE = 4
const INTRO_CUTSCENE_LOWER_PIPE = 5
const INTRO_CUTSCENE_SET_MARIO_TO_IDL = 6

const act_intro_cutscene = (m) => {
    switch (m.actionArg) {
        case INTRO_CUTSCENE_HIDE_HUD_AND_MARIO:
            intro_cutscene_hide_hud_and_mario(m)
            break
        case INTRO_CUTSCENE_PEACH_LAKITU_SCENE:
            intro_cutscene_peach_lakitu_scene(m)
            break
        case INTRO_CUTSCENE_RAISE_PIPE:
            intro_cutscene_raise_pipe(m)
            break
        case INTRO_CUTSCENE_JUMP_OUT_OF_PIPE:
            intro_cutscene_jump_out_of_pipe(m)
            break
        case INTRO_CUTSCENE_LAND_OUTSIDE_PIPE:
            intro_cutscene_land_outside_pipe(m)
            break
        case INTRO_CUTSCENE_LOWER_PIPE:
            intro_cutscene_lower_pipe(m)
            break
        case INTRO_CUTSCENE_SET_MARIO_TO_IDLE:
            intro_cutscene_set_mario_to_idle(m)
            break
    }
    return false
}

// // jumbo star cutscene: Mario lands after grabbing the jumbo star
// const jumbo_star_cutscene_falling = (m) => {
//     if (m.actionState == 0) {
//         m.input |= INPUT_A_DOWN
//         m.flags |= (MARIO_WING_CAP | MARIO_CAP_ON_HEAD)

//         m.faceAngle[1] = -0x8000
//         m.pos[0] = 0.0
//         m.pos[2] = 0.0

//         mario_set_forward_vel(m, 0.0)
//         set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)

//         if (perform_air_step(m, 1) == AIR_STEP_LANDED) {
//             play_cutscene_music(SEQUENCE_ARGS(15, SEQ_EVENT_CUTSCENE_VICTORY))
//             play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
//             m.actionState++
//         }
//     } else {
//         set_mario_animation(m, MARIO_ANIM_GENERAL_LAND)
//         if (is_anim_at_end(m)) {
//             m.statusForCamera.cameraEvent = CAM_EVENT_START_GRAND_STAR
//             advance_cutscene_step(m)
//         }
//     }
// }

// // jumbo star cutscene: Mario takes off
// const jumbo_star_cutscene_taking_off = (m) => {
//     struct Object *marioObj = m.marioObj
//     let /*s32*/ animFrame

//     if (m.actionState == 0) {
//         set_mario_animation(m, MARIO_ANIM_FINAL_BOWSER_RAISE_HAND_SPIN)
//         marioObj.rawData.asF32[0x22] = 0.0

//         if (is_anim_past_end(m)) {
//             play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
//             m.actionState++
//         }
//     } else {
//         animFrame = set_mario_animation(m, MARIO_ANIM_FINAL_BOWSER_WING_CAP_TAKE_OFF)
//         if (animFrame == 3 || animFrame == 28 || animFrame == 60) {
//             play_sound_and_spawn_particles(m, SOUND_ACTION_TERRAIN_JUMP, 1)
//         }
//         if (animFrame >= 3) {
//             marioObj.rawData.asF32[0x22] -= 32.0
//         }

//         switch (animFrame) {
//             case 3:
//                 play_sound(SOUND_MARIO_YAH_WAH_HOO + (gAudioRandom % 3 << 16),
//                            m.marioObj.gfx.cameraToObject)
//                 break

//             case 28:
//                 play_sound(SOUND_MARIO_HOOHOO, m.marioObj.gfx.cameraToObject)
//                 break

//             case 60:
//                 play_sound(SOUND_MARIO_YAHOO, m.marioObj.gfx.cameraToObject)
//                 break
//         }
//         m.particleFlags |= PARTICLE_SPARKLES

//         if (is_anim_past_end(m)) {
//             advance_cutscene_step(m)
//         }
//     }

//     vec3f_set(m.pos, 0.0, 307.0, marioObj.rawData.asF32[0x22])
//     update_mario_pos_for_anim(m)
//     vec3f_copy(marioObj.gfx.pos, m.pos)
//     vec3s_set(marioObj.gfx.angle, 0, m.faceAngle[1], 0)

//       // not sure why they did this, probably was from being used to action
//       // functions
//     return false
// }

// // jumbo star cutscene: Mario flying
// const jumbo_star_cutscene_flying = (m) => {
//     Vec3f targetPos
//     UNUSED struct Object *marioObj = m.marioObj
//     let /*f32*/ targetDX
//     let /*f32*/ targetDY
//     let /*f32*/ targetDZ
//     let /*f32*/ targetHyp
//     let /*s16*/ targetAngle

//     switch (m.actionState) {
//         case 0:
//             set_mario_animation(m, MARIO_ANIM_WING_CAP_FLY)
//             anim_spline_init(sJumboStarKeyframes)
//             m.actionState++
//               // fall through
//         case 1:
//             if (anim_spline_poll(targetPos)) {
//                   // does this twice
//                 set_mario_action(m, ACT_FREEFALL, 0)
//                 m.actionState++
//             } else {
//                 targetDX = targetPos[0] - m.pos[0]
//                 targetDY = targetPos[1] - m.pos[1]
//                 targetDZ = targetPos[2] - m.pos[2]
//                 targetHyp = sqrtf(targetDX * targetDX + targetDZ * targetDZ)
//                 targetAngle = atan2s(targetDZ, targetDX)

//                 vec3f_copy(m.pos, targetPos)
//                 m.marioObj.gfx.angle[0] = -atan2s(targetHyp, targetDY)
//                 m.marioObj.gfx.angle[1] = targetAngle
//                 m.marioObj.gfx.angle[2] = ((m.faceAngle[1] - targetAngle) << 16 >> 16) * 20
//                 m.faceAngle[1] = targetAngle
//             }
//             break
//         case 2:
//             set_mario_action(m, ACT_FREEFALL, 0)
//             break
//     }

//     m.marioBodyState.handState = MARIO_HAND_RIGHT_OPEN
//     vec3f_copy(m.marioObj.gfx.pos, m.pos)
//     m.particleFlags |= PARTICLE_SPARKLES

//     if (m.actionTimer++ == 500) {
//         level_trigger_warp(m, WARP_OP_CREDITS_START)
//     }

//     return false
// }

// enum { JUMBO_STAR_CUTSCENE_FALLING, JUMBO_STAR_CUTSCENE_TAKING_OFF, JUMBO_STAR_CUTSCENE_FLYING }

// const act_jumbo_star_cutscene = (m) => {
//     switch (m.actionArg) {
//         case JUMBO_STAR_CUTSCENE_FALLING:
//             jumbo_star_cutscene_falling(m)
//             break
//         case JUMBO_STAR_CUTSCENE_TAKING_OFF:
//             jumbo_star_cutscene_taking_off(m)
//             break
//         case JUMBO_STAR_CUTSCENE_FLYING:
//             jumbo_star_cutscene_flying(m)
//             break
//     }
//     return false
// }

// export const generate_yellow_sparkles = (x, y, z, radius) => {
//     static let /*s32*/ sSparkleGenTheta = 0
//     static let /*s32*/ sSparkleGenPhi = 0

//     let /*s16*/ offsetX = radius * coss(sSparkleGenTheta) * sins(sSparkleGenPhi)
//     let /*s16*/ offsetY = radius * sins(sSparkleGenTheta)
//     let /*s16*/ offsetZ = radius * coss(sSparkleGenTheta) * coss(sSparkleGenPhi)

//     spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_NONE, bhvSparkleSpawn, x + offsetX, y + offsetY,
//                               z + offsetZ, 0, 0, 0)

//       //! copy paste error
//     offsetX = offsetX * 4 / 3
//     offsetX = offsetY * 4 / 3
//     offsetX = offsetZ * 4 / 3

//     spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_NONE, bhvSparkleSpawn, x - offsetX, y - offsetY,
//                               z - offsetZ, 0, 0, 0)

//     sSparkleGenTheta += 0x3800
//     sSparkleGenPhi += 0x6000
// }

// // not sure what this does, returns the height of the floor.
// // (animation related?)
// const end_obj_set_visual_pos = (o) => {
//     struct Surface *surf
//     Vec3s sp24
//     let /*f32*/ sp20
//     let /*f32*/ sp1C
//     let /*f32*/ sp18

//     find_mario_anim_flags_and_translation(o, o.gfx.angle[1], sp24)

//     sp20 = o.gfx.pos[0] + sp24[0]
//     sp1C = o.gfx.pos[1] + 10.0
//     sp18 = o.gfx.pos[2] + sp24[2]

//     return find_floor(sp20, sp1C, sp18, &surf)
// }

// // make Mario fall and soften wing cap gravity
// const end_peach_cutscene_mario_falling = (m) => {
//     if (m.actionTimer == 1) {
//         m.statusForCamera.cameraEvent = CAM_EVENT_START_ENDING
//     }

//     m.input |= INPUT_A_DOWN
//     m.flags |= (MARIO_WING_CAP | MARIO_CAP_ON_HEAD)

//     set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
//     mario_set_forward_vel(m, 0.0)

//     if (perform_air_step(m, 0) == AIR_STEP_LANDED) {
//         play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
//         advance_cutscene_step(m)
//     }
// }

// // set Mario on the ground, wait and spawn the jumbo star outside the castle.
// const end_peach_cutscene_mario_landing = (m) => {
//     set_mario_animation(m, MARIO_ANIM_GENERAL_LAND)
//     stop_and_set_height_to_floor(m)

//     if (is_anim_at_end(m)) {
//           // make wing cap run out
//         m.capTimer = 60

//         sEndJumboStarObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_STAR, bhvStaticObject, 0,
//                                                      2528, -1800, 0, 0, 0)
//         obj_scale(sEndJumboStarObj, 3.0)
//         advance_cutscene_step(m)
//     }
// }

// // raise hand animation, lower hand animation, do some special effects
// const end_peach_cutscene_summon_jumbo_star = (m) => {
//     set_mario_animation(m, m.actionState == 0 ? MARIO_ANIM_CREDITS_RAISE_HAND
//                                                : MARIO_ANIM_CREDITS_LOWER_HAND)

// export const is_anim_past_end = (m) => {
//         m.actionState++
//     }
//     if (m.actionTimer == 90) {
//         play_cutscene_music(SEQUENCE_ARGS(0, SEQ_EVENT_CUTSCENE_ENDING))
//     }
//     if (m.actionTimer == 255) {
//         advance_cutscene_step(m)
//     }

//     sEndJumboStarObj.rawData[oFaceAngleYaw] += 0x0400
//     generate_yellow_sparkles(0, 2528, -1800, 250.0)
//     play_sound(SOUND_AIR_PEACH_TWINKLE, sEndJumboStarObj.gfx.cameraToObject)
// }

// #if defined(VERSION_EU)
//     #define TIMER_FADE_IN_PEACH 201
//     #define TIMER_DESCEND_PEACH 280
// #elif defined(VERSION_SH)
//     #define TIMER_FADE_IN_PEACH 276
//     #define TIMER_DESCEND_PEACH 400
// #else
//     #define TIMER_FADE_IN_PEACH 276
//     #define TIMER_DESCEND_PEACH 355
// #endif

// // free peach from the stained glass window
// const end_peach_cutscene_spawn_peach = (m) => {
//     if (m.actionTimer == 1) {
//         play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 14, 255, 255, 255)
//     }
//     if (m.actionTimer == 2) {
//         play_sound(SOUND_MENU_STAR_SOUND, gGlobalSoundSource)
//     }
//     if (m.actionTimer == 44) {
//         play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 192, 255, 255, 255)
//     }
//     if (m.actionTimer == 40) {
//         obj_mark_for_deletion(sEndJumboStarObj)

//         sEndPeachObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_PEACH, bhvEndPeach, 0, 2428,
//                                                  -1300, 0, 0, 0)
//         gCutsceneFocus = sEndPeachObj

//         sEndRightToadObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_TOAD, bhvEndToad, 200,
//                                                      906, -1290, 0, 0, 0)

//         sEndLeftToadObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_TOAD, bhvEndToad, -200,
//                                                     906, -1290, 0, 0, 0)

//         sEndPeachObj.rawData[oOpacity] = 127
//         sEndRightToadObj.rawData[oOpacity] = 255
//         sEndLeftToadObj.rawData[oOpacity] = 255

//         D_8032CBE4 = 4
//         sEndPeachAnimation = 4

//         sEndToadAnims[0] = 4
//         sEndToadAnims[1] = 5
//     }

//     if (m.actionTimer >= TIMER_FADE_IN_PEACH) {
//         sEndPeachObj.rawData[oOpacity] = camera_approach_f32_symmetric(sEndPeachObj.rawData[oOpacity], 255.0, 2.0)
//     }
//     if (m.actionTimer >= 40) {
//         generate_yellow_sparkles(0, 2628, -1300, 150.0)
//     }

//     if (m.actionTimer == TIMER_DESCEND_PEACH) {
//         advance_cutscene_step(m)
//     }
//       // probably added sounds later and missed the previous >= 40 check
//     if (m.actionTimer >= 40) {
//         play_sound(SOUND_AIR_PEACH_TWINKLE, sEndPeachObj.gfx.cameraToObject)
//     }
// }

// #ifdef VERSION_EU
//     #define TIMER_RUN_TO_PEACH 531
// #else
//     #define TIMER_RUN_TO_PEACH 584
// #endif

// // descend peach
// const end_peach_cutscene_descend_peach = (m) => {
//     generate_yellow_sparkles(0, sEndPeachObj.rawData[oPosY], -1300, 150.0)

//     if (sEndPeachObj.rawData[oPosY] >= 1300.0) {
//         if (m.actionState < 60) {
//             m.actionState += 5
//         }
//     } else {
//         if (m.actionState >= 27) {
//             m.actionState -= 2
//         }
//         set_mario_animation(m, MARIO_ANIM_CREDITS_RETURN_FROM_LOOK_UP)
//     }

//     if ((sEndPeachObj.rawData[oPosY] -= m.actionState / 10) <= 907.0) {
//         sEndPeachObj.rawData[oPosY] = 906.0
//     }

//     play_sound(SOUND_AIR_PEACH_TWINKLE, sEndPeachObj.gfx.cameraToObject)

//     if (m.actionTimer >= TIMER_RUN_TO_PEACH) {
//         advance_cutscene_step(m)
//     }
// }

// #undef TIMER_RUN_TO_PEACH

// // Mario runs to peach
// const end_peach_cutscene_run_to_peach = (m) => {
//     struct Surface *surf

//     if (m.actionTimer == 22) {
//         sEndPeachAnimation = 5
//     }

//     if ((m.pos[2] -= 20.0) <= -1181.0) {
//         m.pos[2] = -1180.0
//         advance_cutscene_step(m)
//     }

//     m.pos[1] = find_floor(m.pos[0], m.pos[1], m.pos[2], &surf)

//     set_mario_anim_with_accel(m, MARIO_ANIM_RUNNING, 0x00080000)
//     play_step_sound(m, 9, 45)

//     vec3f_copy(m.marioObj.gfx.pos, m.pos)
//     m.particleFlags |= PARTICLE_DUST
// }

// // dialog 1
// // "Mario!"
// // "The power of the Stars is restored to the castle..."
// const end_peach_cutscene_dialog_1 = (m) => {
//     let /*s32*/ animFrame = set_mario_animation(m, m.actionState == 0 ? MARIO_ANIM_CREDITS_TAKE_OFF_CAP
//                                                                : MARIO_ANIM_CREDITS_LOOK_UP)

//     if (m.actionState == 0) {
//         if (animFrame == 8) {
//             cutscene_take_cap_off(m)
//         }

//         if (is_anim_at_end(m)) {
//             m.actionState++
//         }
//     }

//     switch (m.actionTimer) {
// #ifdef VERSION_SH
//         case 110:
// #else
//         case 80:
// #endif
//             sEndPeachAnimation = 6
//             break
            
// #ifdef VERSION_SH
//         case 111:
// #else
//         case 81:
// #endif
//             D_8032CBE4 = 3
//             break

// #ifdef VERSION_SH
//         case 175:
// #else
//         case 145:
// #endif
//             D_8032CBE4 = 2
//             break

// #ifdef VERSION_SH
//         case 258:
// #else
//         case 228:
// #endif
//             D_8032CBE4 = 1
//             D_8032CBE8 = 1
//             break

// #ifdef VERSION_SH
//         case 260:
// #else
//         case 230:
// #endif
//             set_cutscene_message(160, 227, 0, 30)
// #ifndef VERSION_JP
//             seq_player_lower_volume(SEQ_PLAYER_LEVEL, 60, 40)
//             play_sound(SOUND_PEACH_MARIO, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

// #ifdef VERSION_SH
//         case 305:
// #else
//         case 275:
// #endif
//             D_8032CBE4 = 0
//             D_8032CBE8 = 0
//             break

// #ifdef VERSION_SH
//         case 320:
// #else
//         case 290:
// #endif
//             set_cutscene_message(160, 227, 1, 60)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_POWER_OF_THE_STARS, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

// #ifdef VERSION_SH
//         case 510:
// #else
//         case 480:
// #endif
//             advance_cutscene_step(m)
//             break
//     }
// }

// #if defined(VERSION_EU)
//     #define TIMER_SOMETHING_SPECIAL 150
//     #define TIMER_PEACH_KISS        260
// #elif defined(VERSION_SH)
//     #define TIMER_SOMETHING_SPECIAL 170
//     #define TIMER_PEACH_KISS        250
// #else
//     #define TIMER_SOMETHING_SPECIAL 130
//     #define TIMER_PEACH_KISS        200
// #endif

// // dialog 2
// // "...and it's all thanks to you!"
// // "Thank you Mario!"
// // "We have to do something special for you..."
// const end_peach_cutscene_dialog_2 = (m) => {
//     sEndPeachAnimation = 9

//     switch (m.actionTimer) {
// #ifdef VERSION_SH
//         case 39:
// #else
//         case 29:
// #endif
//             set_cutscene_message(160, 227, 2, 30)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_THANKS_TO_YOU, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

// #ifdef VERSION_SH
//         case 65:
// #else        
//         case 45:
// #endif
//             D_8032CBE8 = 1
//             break

// #ifdef VERSION_SH
//         case 105:
// #else
//         case 75:
// #endif
//             set_cutscene_message(160, 227, 3, 30)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_THANK_YOU_MARIO, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

//         case TIMER_SOMETHING_SPECIAL:
//             set_cutscene_message(160, 227, 4, 40)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_SOMETHING_SPECIAL, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

//         case TIMER_PEACH_KISS:
//             advance_cutscene_step(m)
//             break
//     }
// }

// #undef TIMER_SOMETHING_SPECIAL
// #undef TIMER_PEACH_KISS

// // blink twice then have half-shut eyes (see end_peach_cutscene_kiss_from_peach)
// static let /*u8*/ sMarioBlinkOverride[20] = {
//     MARIO_EYES_HALF_CLOSED, MARIO_EYES_HALF_CLOSED, MARIO_EYES_CLOSED, MARIO_EYES_CLOSED,
//     MARIO_EYES_HALF_CLOSED, MARIO_EYES_HALF_CLOSED, MARIO_EYES_OPEN,   MARIO_EYES_OPEN,
//     MARIO_EYES_HALF_CLOSED, MARIO_EYES_HALF_CLOSED, MARIO_EYES_CLOSED, MARIO_EYES_CLOSED,
//     MARIO_EYES_HALF_CLOSED, MARIO_EYES_HALF_CLOSED, MARIO_EYES_OPEN,   MARIO_EYES_OPEN,
//     MARIO_EYES_HALF_CLOSED, MARIO_EYES_HALF_CLOSED, MARIO_EYES_CLOSED, MARIO_EYES_CLOSED,
// }

// const end_peach_cutscene_kiss_from_peach = (m) => {
//     sEndPeachAnimation = 10

//     if (m.actionTimer >= 90) {
//         m.marioBodyState.eyeState =
//             m.actionTimer < 110 ? sMarioBlinkOverride[m.actionTimer - 90] : MARIO_EYES_HALF_CLOSED
//     }

//     switch (m.actionTimer) {
//         case 8:
//             D_8032CBE8 = 0
//             break

//         case 10:
//             D_8032CBE4 = 3
//             break

//         case 50:
//             D_8032CBE4 = 4
//             break

//         case 75:
//             m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
//             break

//         case 76:
//             m.marioBodyState.eyeState = MARIO_EYES_CLOSED
//             break

//         case 100:
//             D_8032CBE4 = 3
//             break

//         case 136:
//             D_8032CBE4 = 0
//             break

//         case 140:
//             advance_cutscene_step(m)
//             break
//     }
// }

// const end_peach_cutscene_star_dance = (m) => {
//     let /*s32*/ animFrame = set_mario_animation(m, MARIO_ANIM_CREDITS_PEACE_SIGN)

//     if (animFrame == 77) {
//         cutscene_put_cap_on(m)
//     }
//     if (animFrame == 88) {
//         play_sound(SOUND_MARIO_HERE_WE_GO, m.marioObj.gfx.cameraToObject)
//     }
//     if (animFrame >= 98) {
//         m.marioBodyState.handState = MARIO_HAND_PEACE_SIGN
//     }

//     if (m.actionTimer < 52) {
//         m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
//     }

//     switch (m.actionTimer) {
//         case 70:
//             D_8032CBE4 = 1
//             break

//         case 86:
//             D_8032CBE4 = 2
//             break

//         case 90:
//             D_8032CBE4 = 3
//             break

//         case 120:
//             D_8032CBE4 = 0
//             break

//         case 140:
// #ifndef VERSION_JP
//             seq_player_unlower_volume(SEQ_PLAYER_LEVEL, 60)
// #endif
//             play_cutscene_music(SEQUENCE_ARGS(15, SEQ_EVENT_CUTSCENE_CREDITS))
//             break

//         case 142:
//             advance_cutscene_step(m)
//             break
//     }
// }

// // dialog 3
// // "Listen everybody"
// // "let's bake a delicious cake..."
// // "...for Mario..."
// const end_peach_cutscene_dialog_3 = (m) => {
//     set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)

//     sEndPeachObj.rawData[oPosY] = end_obj_set_visual_pos(sEndPeachObj)
//     sEndRightToadObj.rawData[oPosY] = end_obj_set_visual_pos(sEndRightToadObj)
//     sEndLeftToadObj.rawData[oPosY] = end_obj_set_visual_pos(sEndLeftToadObj)

//     switch (m.actionTimer) {
//         case 1:
//             sEndPeachAnimation = 0
//             sEndToadAnims[0] = 0
//             sEndToadAnims[1] = 2
//             D_8032CBE8 = 1
//             set_cutscene_message(160, 227, 5, 30)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_BAKE_A_CAKE, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break

//         case 55:
//             set_cutscene_message(160, 227, 6, 40)
//             break

//         case 130:
//             set_cutscene_message(160, 227, 7, 50)
// #ifndef VERSION_JP
//             play_sound(SOUND_PEACH_FOR_MARIO, sEndPeachObj.gfx.cameraToObject)
// #endif
//             break
//     }

//     if (m.actionTimer == 350) {
//         advance_cutscene_step(m)
//     }
// }

// // "Mario!"
// const end_peach_cutscene_run_to_castle = (m) => {
//     set_mario_animation(m, m.actionState == 0 ? MARIO_ANIM_CREDITS_START_WALK_LOOK_UP
//                                                : MARIO_ANIM_CREDITS_LOOK_BACK_THEN_RUN)

//     m.marioObj.gfx.pos[1] = end_obj_set_visual_pos(m.marioObj)

// export const is_anim_past_end = (m) => {
//         m.actionState = 1
//     }

//     if (m.actionTimer == 95) {
//         set_cutscene_message(160, 227, 0, 40)
// #ifndef VERSION_JP
//         play_sound(SOUND_PEACH_MARIO2, sEndPeachObj.gfx.cameraToObject)
// #endif
//     }
//     if (m.actionTimer == 389) {
//         advance_cutscene_step(m)
//     }
// }

// const end_peach_cutscene_fade_out = (m) => {
//     if (m.actionState == 0) {
//         level_trigger_warp(m, WARP_OP_CREDITS_NEXT)
//         gPaintingMarioYEntry = 1500.0;   // ensure medium water level in WDW credits cutscene
//         m.actionState = 1
//     }
// }

// enum {
//     END_PEACH_CUTSCENE_MARIO_FALLING,
//     END_PEACH_CUTSCENE_MARIO_LANDING,
//     END_PEACH_CUTSCENE_SUMMON_JUMBO_STAR,
//     END_PEACH_CUTSCENE_SPAWN_PEACH,
//     END_PEACH_CUTSCENE_DESCEND_PEACH,
//     END_PEACH_CUTSCENE_RUN_TO_PEACH,
//     END_PEACH_CUTSCENE_DIALOG_1,
//     END_PEACH_CUTSCENE_DIALOG_2,
//     END_PEACH_CUTSCENE_KISS_FROM_PEACH,
//     END_PEACH_CUTSCENE_STAR_DANCE,
//     END_PEACH_CUTSCENE_DIALOG_3,
//     END_PEACH_CUTSCENE_RUN_TO_CASTLE,
//     END_PEACH_CUTSCENE_FADE_OUT
// }

// const act_end_peach_cutscene = (m) => {
//     switch (m.actionArg) {
//         case END_PEACH_CUTSCENE_MARIO_FALLING:
//             end_peach_cutscene_mario_falling(m)
//             break
//         case END_PEACH_CUTSCENE_MARIO_LANDING:
//             end_peach_cutscene_mario_landing(m)
//             break
//         case END_PEACH_CUTSCENE_SUMMON_JUMBO_STAR:
//             end_peach_cutscene_summon_jumbo_star(m)
//             break
//         case END_PEACH_CUTSCENE_SPAWN_PEACH:
//             end_peach_cutscene_spawn_peach(m)
//             break
//         case END_PEACH_CUTSCENE_DESCEND_PEACH:
//             end_peach_cutscene_descend_peach(m)
//             break
//         case END_PEACH_CUTSCENE_RUN_TO_PEACH:
//             end_peach_cutscene_run_to_peach(m)
//             break
//         case END_PEACH_CUTSCENE_DIALOG_1:
//             end_peach_cutscene_dialog_1(m)
//             break
//         case END_PEACH_CUTSCENE_DIALOG_2:
//             end_peach_cutscene_dialog_2(m)
//             break
//         case END_PEACH_CUTSCENE_KISS_FROM_PEACH:
//             end_peach_cutscene_kiss_from_peach(m)
//             break
//         case END_PEACH_CUTSCENE_STAR_DANCE:
//             end_peach_cutscene_star_dance(m)
//             break
//         case END_PEACH_CUTSCENE_DIALOG_3:
//             end_peach_cutscene_dialog_3(m)
//             break
//         case END_PEACH_CUTSCENE_RUN_TO_CASTLE:
//             end_peach_cutscene_run_to_castle(m)
//             break
//         case END_PEACH_CUTSCENE_FADE_OUT:
//             end_peach_cutscene_fade_out(m)
//             break
//     }

//     m.actionTimer++

//     sEndCutsceneVp.vp.vscale[0] = 640
//     sEndCutsceneVp.vp.vscale[1] = 360
//     sEndCutsceneVp.vp.vtrans[0] = 640
//     sEndCutsceneVp.vp.vtrans[1] = 480
//     override_viewport_and_clip(null, &sEndCutsceneVp, 0, 0, 0)

//     return false
// }

// #if defined(VERSION_EU)
//     #define TIMER_CREDITS_SHOW      51
//     #define TIMER_CREDITS_PROGRESS  80
//     #define TIMER_CREDITS_WARP     160
// #elif defined(VERSION_SH)
//     #define TIMER_CREDITS_SHOW      61
//     #define TIMER_CREDITS_PROGRESS  90
//     #define TIMER_CREDITS_WARP     204
// #else
//     #define TIMER_CREDITS_SHOW      61
//     #define TIMER_CREDITS_PROGRESS  90
//     #define TIMER_CREDITS_WARP     200
// #endif

// const act_credits_cutscene = (m) => {
//     let /*s32*/ width
//     let /*s32*/ height

//     m.statusForCamera.cameraEvent = CAM_EVENT_START_CREDITS
//       // checks if Mario is underwater (JRB, DDD, SA, etc.)
//     if (m.pos[1] < m.waterLevel - 100) {
//         if (m.area.camera.mode != CAMERA_MODE_BEHIND_MARIO) {
//             set_camera_mode(m.area.camera, CAMERA_MODE_BEHIND_MARIO, 1)
//         }
//         set_mario_animation(m, MARIO_ANIM_WATER_IDLE)
//         vec3f_copy(m.marioObj.gfx.pos, m.pos)
//           // will copy over roll and pitch, if set
//         vec3s_copy(m.marioObj.gfx.angle, m.faceAngle)
//         m.particleFlags |= PARTICLE_BUBBLE
//     } else {
//         set_mario_animation(m, MARIO_ANIM_FIRST_PERSON)
//         if (m.actionTimer > 0) {
//             stop_and_set_height_to_floor(m)
//         }
//     }

//     if (m.actionTimer >= TIMER_CREDITS_SHOW) {
//         if (m.actionState < 40) {
//             m.actionState += 2
//         }

//         width = m.actionState * 640 / 100
//         height = m.actionState * 480 / 100

//         sEndCutsceneVp.vp.vscale[0] = 640 - width
//         sEndCutsceneVp.vp.vscale[1] = 480 - height
//         sEndCutsceneVp.vp.vtrans[0] =
//             (gCurrCreditsEntry.unk02 & 0x10 ? width : -width) * 56 / 100 + 640
//         sEndCutsceneVp.vp.vtrans[1] =
//             (gCurrCreditsEntry.unk02 & 0x20 ? height : -height) * 66 / 100 + 480

//         override_viewport_and_clip(&sEndCutsceneVp, 0, 0, 0, 0)
//     }

//     if (m.actionTimer == TIMER_CREDITS_PROGRESS) {
//         reset_cutscene_msg_fade()
//     }

//     if (m.actionTimer >= TIMER_CREDITS_PROGRESS) {
//         sDispCreditsEntry = gCurrCreditsEntry
//     }

//     if (m.actionTimer++ == TIMER_CREDITS_WARP) {
//         level_trigger_warp(m, WARP_OP_CREDITS_NEXT)
//     }

//     m.marioObj.gfx.angle[1] += (gCurrCreditsEntry.unk02 & 0xC0) << 8

//     return false
// }

// const act_end_waving_cutscene = (m) => {
//     if (m.actionState == 0) {
//         m.statusForCamera.cameraEvent = CAM_EVENT_START_END_WAVING

//         sEndPeachObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_PEACH, bhvEndPeach, 60, 906,
//                                                  -1180, 0, 0, 0)

//         sEndRightToadObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_TOAD, bhvEndToad, 180,
//                                                      906, -1170, 0, 0, 0)

//         sEndLeftToadObj = spawn_object_abs_with_rot(gCurrentObject, 0, MODEL_TOAD, bhvEndToad, -180,
//                                                     906, -1170, 0, 0, 0)

//         sEndPeachObj.rawData[oOpacity] = 255
//         sEndRightToadObj.rawData[oOpacity] = 255
//         sEndLeftToadObj.rawData[oOpacity] = 255

//         sEndPeachAnimation = 11
//         sEndToadAnims[0] = 6
//         sEndToadAnims[1] = 7

//         m.actionState = 1
//     }

//     set_mario_animation(m, MARIO_ANIM_CREDITS_WAVING)
//     stop_and_set_height_to_floor(m)

//     m.marioObj.gfx.angle[1] += 0x8000
//     m.marioObj.gfx.pos[0] -= 60.0
//     m.marioBodyState.handState = MARIO_HAND_RIGHT_OPEN

//     if (m.actionTimer++ == 300) {
//         level_trigger_warp(m, WARP_OP_CREDITS_END)
//     }

//     return false
// }

// const check_for_instant_quicksand = (m) => {
//     if (m.floor.type == SURFACE_INSTANT_QUICKSAND && m.action & ACT_FLAG_INVULNERABLE
//         && m.action != ACT_QUICKSAND_DEATH) {
//         update_mario_sound_and_camera(m)
//         return drop_and_set_mario_action(m, ACT_QUICKSAND_DEATH, 0)
//     }
//     return false
// }

export const mario_execute_cutscene_action = (m) => {
    let cancel

    // if (check_for_instant_quicksand(m)) {
    //     return true
    // }

    switch (m.action) {
        case ACT_DISAPPEARED:                cancel = act_disappeared(m);                break
        case ACT_INTRO_CUTSCENE:             cancel = act_intro_cutscene(m);             break
        case ACT_STAR_DANCE_EXIT:            cancel = act_star_dance(m);                 break
        case ACT_STAR_DANCE_NO_EXIT:         cancel = act_star_dance(m);                 break
        case ACT_STAR_DANCE_WATER:           cancel = act_star_dance_water(m);           break
        case ACT_FALL_AFTER_STAR_GRAB:       cancel = act_fall_after_star_grab(m);       break
        case ACT_READING_AUTOMATIC_DIALOG:   cancel = act_reading_automatic_dialog(m);   break
        case ACT_READING_NPC_DIALOG:         cancel = act_reading_npc_dialog(m);         break
        case ACT_DEBUG_FREE_MOVE:            cancel = act_debug_free_move(m);            break
        case ACT_READING_SIGN:               cancel = act_reading_sign(m);               break
        case ACT_JUMBO_STAR_CUTSCENE:        cancel = act_jumbo_star_cutscene(m);        break
        case ACT_WAITING_FOR_DIALOG:         cancel = act_waiting_for_dialog(m);         break
        case ACT_STANDING_DEATH:             cancel = act_standing_death(m);             break
        case ACT_QUICKSAND_DEATH:            cancel = act_quicksand_death(m);            break
        case ACT_ELECTROCUTION:              cancel = act_electrocution(m);              break
        case ACT_SUFFOCATION:                cancel = act_suffocation(m);                break
        case ACT_DEATH_ON_STOMACH:           cancel = act_death_on_stomach(m);           break
        case ACT_DEATH_ON_BACK:              cancel = act_death_on_back(m);              break
        case ACT_EATEN_BY_BUBBA:             cancel = act_eaten_by_bubba(m);             break
        case ACT_END_PEACH_CUTSCENE:         cancel = act_end_peach_cutscene(m);         break
        case ACT_CREDITS_CUTSCENE:           cancel = act_credits_cutscene(m);           break
        case ACT_END_WAVING_CUTSCENE:        cancel = act_end_waving_cutscene(m);        break
        case ACT_PULLING_DOOR:
        case ACT_PUSHING_DOOR:               cancel = act_going_through_door(m);         break
        case ACT_WARP_DOOR_SPAWN:            cancel = act_warp_door_spawn(m);            break
        case ACT_EMERGE_FROM_PIPE:           cancel = act_emerge_from_pipe(m);           break
        case ACT_SPAWN_SPIN_AIRBORNE:        cancel = act_spawn_spin_airborne(m);        break
        case ACT_SPAWN_SPIN_LANDING:         cancel = act_spawn_spin_landing(m);         break
        case ACT_EXIT_AIRBORNE:              cancel = act_exit_airborne(m);              break
        case ACT_EXIT_LAND_SAVE_DIALOG:      cancel = act_exit_land_save_dialog(m);      break
        case ACT_DEATH_EXIT:                 cancel = act_death_exit(m);                 break
        case ACT_UNUSED_DEATH_EXIT:          cancel = act_unused_death_exit(m);          break
        case ACT_FALLING_DEATH_EXIT:         cancel = act_falling_death_exit(m);         break
        case ACT_SPECIAL_EXIT_AIRBORNE:      cancel = act_special_exit_airborne(m);      break
        case ACT_SPECIAL_DEATH_EXIT:         cancel = act_special_death_exit(m);         break
        case ACT_FALLING_EXIT_AIRBORNE:      cancel = act_falling_exit_airborne(m);      break
        case ACT_UNLOCKING_KEY_DOOR:         cancel = act_unlocking_key_door(m);         break
        case ACT_UNLOCKING_STAR_DOOR:        cancel = act_unlocking_star_door(m);        break
        case ACT_ENTERING_STAR_DOOR:         cancel = act_entering_star_door(m);         break
        case ACT_SPAWN_NO_SPIN_AIRBORNE:     cancel = act_spawn_no_spin_airborne(m);     break
        case ACT_SPAWN_NO_SPIN_LANDING:      cancel = act_spawn_no_spin_landing(m);      break
        case ACT_BBH_ENTER_JUMP:             cancel = act_bbh_enter_jump(m);             break
        case ACT_BBH_ENTER_SPIN:             cancel = act_bbh_enter_spin(m);             break
        case ACT_TELEPORT_FADE_OUT:          cancel = act_teleport_fade_out(m);          break
        case ACT_TELEPORT_FADE_IN:           cancel = act_teleport_fade_in(m);           break
        case ACT_SHOCKED:                    cancel = act_shocked(m);                    break
        case ACT_SQUISHED:                   cancel = act_squished(m);                   break
        case ACT_HEAD_STUCK_IN_GROUND:       cancel = act_head_stuck_in_ground(m);       break
        case ACT_BUTT_STUCK_IN_GROUND:       cancel = act_butt_stuck_in_ground(m);       break
        case ACT_FEET_STUCK_IN_GROUND:       cancel = act_feet_stuck_in_ground(m);       break
        case ACT_PUTTING_ON_CAP:             cancel = act_putting_on_cap(m);             break
    }

    if (!cancel && (m.input & INPUT_IN_WATER)) {
        m.particleFlags |= PARTICLE_IDLE_WATER_WAVE
    }

    return cancel
}
