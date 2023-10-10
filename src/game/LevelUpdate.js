import * as _Linker from "./Linker"
import { AreaInstance as Area, MARIO_SPAWN_UNKNOWN_27 } from "./Area"
import { COURSE_NONE, COURSE_STAGES_MAX } from "../levels/course_defines"
import * as Mario from "./Mario"
import { CameraInstance as Camera, CAM_MOVE_PAUSE_SCREEN } from "./Camera"
import * as CourseTable from "../include/course_table"
import { disable_warp_checkpoint, gLevelToCourseNumTable } from "./SaveFile"
import { s16, sins, coss } from "../utils"

import { fadeout_music, raise_background_noise } from "./SoundInit"

import {
    ACT_FLAG_INTANGIBLE, ACT_UNINITIALIZED,
    ACT_DEATH_EXIT,
    ACT_EMERGE_FROM_PIPE,
    ACT_EXIT_AIRBORNE,
    ACT_FALLING_DEATH_EXIT,
    ACT_FALLING_EXIT_AIRBORNE,
    ACT_FLYING,
    ACT_HARD_BACKWARD_AIR_KB,
    ACT_IDLE,
    ACT_SPAWN_NO_SPIN_AIRBORNE,
    ACT_SPAWN_SPIN_AIRBORNE,
    ACT_SPECIAL_DEATH_EXIT,
    ACT_SPECIAL_EXIT_AIRBORNE,
    ACT_TELEPORT_FADE_IN,
    ACT_UNUSED_DEATH_EXIT,
    ACT_WARP_DOOR_SPAWN,
    ACT_WATER_IDLE,
    ACT_INTRO_CUTSCENE,
} from "./Mario"

import { GameInstance as Game } from "../game/Game"

import {
    oBehParams, oPosX, oPosY, oPosZ, oMoveAngleYaw
} from "../include/object_constants"

import { LEVEL_BOWSER_1, LEVEL_BOWSER_2, LEVEL_BOWSER_3, LEVEL_CASTLE } from "../levels/level_defines_constants"

import {
    WARP_TRANSITION_FADE_FROM_COLOR,
    WARP_TRANSITION_FADE_INTO_COLOR,
    WARP_TRANSITION_FADE_FROM_STAR,
    WARP_TRANSITION_FADE_INTO_STAR,
    WARP_TRANSITION_FADE_FROM_CIRCLE,
    WARP_TRANSITION_FADE_INTO_CIRCLE,
    WARP_TRANSITION_FADE_INTO_MARIO,
    WARP_TRANSITION_FADE_FROM_BOWSER,
    WARP_TRANSITION_FADE_INTO_BOWSER,
    MARIO_SPAWN_AIRBORNE,
    MARIO_SPAWN_AIRBORNE_DEATH,
    MARIO_SPAWN_AIRBORNE_STAR_COLLECT,
    MARIO_SPAWN_DEATH,
    MARIO_SPAWN_DOOR_WARP,
    MARIO_SPAWN_FLYING,
    MARIO_SPAWN_HARD_AIR_KNOCKBACK,
    MARIO_SPAWN_INSTANT_ACTIVE,
    MARIO_SPAWN_LAUNCH_DEATH,
    MARIO_SPAWN_LAUNCH_STAR_COLLECT,
    MARIO_SPAWN_PAINTING_DEATH,
    MARIO_SPAWN_PAINTING_STAR_COLLECT,
    MARIO_SPAWN_SPIN_AIRBORNE,
    MARIO_SPAWN_SPIN_AIRBORNE_CIRCLE,
    MARIO_SPAWN_SWIMMING,
    MARIO_SPAWN_TELEPORT,
    MARIO_SPAWN_UNKNOWN_02,
    MARIO_SPAWN_UNKNOWN_03
} from "./Area"

import { play_sound, gGlobalSoundSource } from "../audio/external"

import {
    SOUND_ACTION_FLYING_FAST,
    SOUND_ACTION_TERRAIN_LANDING,
    SOUND_GENERAL_COIN,
    SOUND_GENERAL_COIN_WATER,
    SOUND_MENU_BOWSER_LAUGH,
    SOUND_MENU_MARIO_CASTLE_WARP,
    SOUND_MENU_POWER_METER,
    SOUND_MENU_STAR_SOUND,
    SOUND_MOVING_AIM_CANNON,
    SOUND_OBJ_POUNDING_CANNON,
} from "../include/sounds"
import { SET_BACKGROUND_MUSIC } from "../engine/LevelCommands"
import { IngameMenuInstance as IngameMenu, MENU_MODE_RENDER_PAUSE_SCREEN, MENU_OPT_DEFAULT, MENU_OPT_NONE } from "./IngameMenu"


export const TIMER_CONTROL_SHOW  = 0
export const TIMER_CONTROL_START = 1
export const TIMER_CONTROL_STOP  = 2
export const TIMER_CONTROL_HIDE  = 3

export const WARP_OP_NONE          = 0x00
export const WARP_OP_UNKNOWN_01    = 0x01
export const WARP_OP_UNKNOWN_02    = 0x02
export const WARP_OP_WARP_DOOR     = 0x03
export const WARP_OP_WARP_OBJECT   = 0x04
export const WARP_OP_TELEPORT      = 0x05
export const WARP_OP_STAR_EXIT     = 0x11
export const WARP_OP_DEATH         = 0x12
export const WARP_OP_WARP_FLOOR    = 0x13
export const WARP_OP_GAME_OVER     = 0x14
export const WARP_OP_CREDITS_END   = 0x15
export const WARP_OP_DEMO_NEXT     = 0x16
export const WARP_OP_CREDITS_START = 0x17
export const WARP_OP_CREDITS_NEXT  = 0x18
export const WARP_OP_DEMO_END      = 0x19

export const WARP_OP_TRIGGERS_LEVEL_SELECT = 0x10


const PLAY_MODE_NORMAL  =  0
const PLAY_MODE_PAUSED  =  2
const PLAY_MODE_CHANGE_AREA  =  3
const PLAY_MODE_CHANGE_LEVEL  =  4
const PLAY_MODE_FRAME_ADVANCE = 5

const WARP_TYPE_NOT_WARPING = 0
const WARP_TYPE_CHANGE_LEVEL = 1
const WARP_TYPE_CHANGE_AREA = 2
const WARP_TYPE_SAME_AREA = 3

const WARP_NODE_F0 = 0xF0
const WARP_NODE_DEATH = 0xF1
const WARP_NODE_F2 = 0xF2
const WARP_NODE_WARP_FLOOR = 0xF3
const WARP_NODE_CREDITS_START = 0xF8
const WARP_NODE_CREDITS_NEXT = 0xF9
const WARP_NODE_CREDITS_END = 0xFA

const WARP_NODE_CREDITS_MIN = 0xF8


class HudDisplay {
    constructor(lives, coins, stars, wedges, keys, flags, timer) {
        this.lives = lives
        this.coins = coins
        this.stars = stars
        this.wedges = wedges
        this.keys = keys
        this.flags = flags
        this.timer = timer
    }
}


const sProtoWarpBhvSpawnType = [
    ['bhvDoorWarp',                MARIO_SPAWN_DOOR_WARP],
    ['bhvStar',                    MARIO_SPAWN_UNKNOWN_02],
    ['bhvExitPodiumWarp',          MARIO_SPAWN_UNKNOWN_03],
    ['bhvWarp',                    MARIO_SPAWN_UNKNOWN_03],
    ['bhvWarpPipe',                MARIO_SPAWN_UNKNOWN_03],
    ['bhvFadingWarp',              MARIO_SPAWN_TELEPORT],
    ['bhvInstantActiveWarp',       MARIO_SPAWN_INSTANT_ACTIVE],
    ['bhvAirborneWarp',            MARIO_SPAWN_AIRBORNE],
    ['bhvHardAirKnockBackWarp',    MARIO_SPAWN_HARD_AIR_KNOCKBACK],
    ['bhvSpinAirborneCircleWarp',  MARIO_SPAWN_SPIN_AIRBORNE_CIRCLE],
    ['bhvDeathWarp',               MARIO_SPAWN_DEATH],
    ['bhvSpinAirborneWarp',        MARIO_SPAWN_SPIN_AIRBORNE],
    ['bhvFlyingWarp',              MARIO_SPAWN_FLYING],
    ['bhvSwimmingWarp',            MARIO_SPAWN_SWIMMING],
    ['bhvPaintingStarCollectWarp', MARIO_SPAWN_PAINTING_STAR_COLLECT],
    ['bhvPaintingDeathWarp',       MARIO_SPAWN_PAINTING_DEATH],
    ['bhvAirborneStarCollectWarp', MARIO_SPAWN_AIRBORNE_STAR_COLLECT],
    ['bhvAirborneDeathWarp',       MARIO_SPAWN_AIRBORNE_DEATH],
    ['bhvLaunchStarCollectWarp',   MARIO_SPAWN_LAUNCH_STAR_COLLECT],
    ['bhvLaunchDeathWarp',         MARIO_SPAWN_LAUNCH_DEATH],
]


class LevelUpdate {
    constructor() {
        this.gMarioState =  {
            unk00: 0, input: 0, flags: 0, particleFlags: 0, action: 0,
            prevAction: 0, terrainsoundAddend: 0, actionState: 0, actionTimer: 0,
            actionArg: 0, intendedMag: 0, intendedYaw: 0, invincTimer: 0,
            framesSinceA: 0, framesSinceB: 0, wallKickTimer: 0, doubleJumpTimer: 0,
            faceAngle: [0, 0, 0],
            angleVel: [0, 0, 0],
            slideYaw: 0, twirlYaw: 0,
            pos: [0, 0, 0],
            vel: [0, 0, 0],
            forwardVel: 0, slideVelX: 0, slideVelY: 0,
            ///// And a ton more
        }

        // HUDDisplayFlag enum
        this.HUD_DISPLAY_FLAG_LIVES = 0x0001
        this.HUD_DISPLAY_FLAG_COIN_COUNT = 0x0002
        this.HUD_DISPLAY_FLAG_STAR_COUNT = 0x0004
        this.HUD_DISPLAY_FLAG_CAMERA_AND_POWER = 0x0008
        this.HUD_DISPLAY_FLAG_KEYS = 0x0010
        this.HUD_DISPLAY_FLAG_UNKNOWN_0020 = 0x0020
        this.HUD_DISPLAY_FLAG_TIMER = 0x0040
        this.HUD_DISPLAY_FLAG_EMPHASIZE_POWER = 0x8000
        this.HUD_DISPLAY_NONE = 0x0000
        this.HUD_DISPLAY_DEFAULT = this.HUD_DISPLAY_FLAG_LIVES | this.HUD_DISPLAY_FLAG_COIN_COUNT | this.HUD_DISPLAY_FLAG_STAR_COUNT | this.HUD_DISPLAY_FLAG_CAMERA_AND_POWER | this.HUD_DISPLAY_FLAG_KEYS | this.HUD_DISPLAY_FLAG_UNKNOWN_0020
        this.gHudDisplay = new HudDisplay()

        this.sCurrPlayMode = 0
        this.sTransitionTimer = 0
        this.sTransitionUpdate = null
        this.sWarpDest = {
            type: 0, levelNum: 0, areaIdx: 0, nodeId: 0, arg: 0
        }
        this.warpSpecialLevel = 0
        this.sDelayedWarpOp = 0
        this.sDelayedWarpTimer = 0
        this.sSourceWarpNodeId = 0
        this.sDelayedWarpArg = 0
        this.sTimerRunning = 0
        this.gNeverEnteredCastle = 0

        this.sWarpCheckpointActive = 0

        this.sWarpBhvSpawnType = null
    }

    init_mario_warp_spawn_type() {
        if (!this.sWarpBhvSpawnType) {
            this.sWarpBhvSpawnType = []
            for (let i = 0; i < sProtoWarpBhvSpawnType.length; ++i) {
                this.sWarpBhvSpawnType[i] = [gLinker.behaviors[sProtoWarpBhvSpawnType[i][0]], sProtoWarpBhvSpawnType[i][1]]
            }
        }
    }

    lvl_init_from_save_file(arg0, levelNum) {
        this.sWarpDest.type = WARP_TYPE_NOT_WARPING
        this.sDelayedWarpOp = WARP_OP_NONE
        // this.gNeverEnteredCastle = !save_file_exists(gCurrSaveFileNum - 1)

        Area.gCurrLevelNum = levelNum
        Area.gCurrCourseNum = COURSE_NONE
        Area.gSavedCourseNum = COURSE_NONE
        Area.gCurrCreditsEntry = null
        // this.gSpecialTripleJump = 0

        Mario.init_mario_from_save_file()
        disable_warp_checkpoint();
        // save_file_move_cap_to_default_location();
        Camera.select_mario_cam_mode()
        // set_yoshi_as_not_dead();

        return levelNum
    }

    lvl_set_current_level(arg0, levelNum) {
        let warpCheckpointActive = this.sWarpCheckpointActive
        this.sWarpCheckpointActive = 0

        Area.gCurrLevelNum = levelNum
        Area.gCurrCourseNum = gLevelToCourseNumTable[levelNum - 1]

        // if (gCurrDemoInput != NULL || gCurrCreditsEntry != NULL || gCurrCourseNum == COURSE_NONE) {
        //     return false;
        // }

        if (Area.gCurrLevelNum != LEVEL_BOWSER_1 && Area.gCurrLevelNum != LEVEL_BOWSER_2
            && Area.gCurrLevelNum != LEVEL_BOWSER_3) {
            this.gMarioState.numCoins = 0
            this.gHudDisplay.coins = 0
            // gCurrCourseStarFlags = save_file_get_star_flags(gCurrSaveFileNum - 1, gCurrCourseNum - 1);
        }

        if (Area.gSavedCourseNum != Area.gCurrCourseNum) {
            Area.gSavedCourseNum = Area.gCurrCourseNum
            disable_warp_checkpoint();
        }

        if (Area.gCurrCourseNum > COURSE_STAGES_MAX || warpCheckpointActive) {
            return false;
        }

        // if (gDebugLevelSelect && !gShowProfiler) {
        //     return false;
        // }

        return true
    }

    lvl_init_or_update(initOrUpdate) {
        return initOrUpdate ? this.update_level() : this.init_level()
    }

    init_level() {
        let val4 = 0

        this.set_play_mode(PLAY_MODE_NORMAL)

        this.sDelayedWarpOp = WARP_OP_NONE
        this.sTransitionTimer = 0
        this.warpSpecialLevel = 0

        if (this.gCurrCreditsEntry == undefined) { // Compares to NULL in C code
            this.gHudDisplay.flags = this.HUD_DISPLAY_DEFAULT;
        } else {
            this.gHudDisplay.flags = this.HUD_DISPLAY_NONE;
        }

        this.sTimerRunning = 0

        if (this.sWarpDest.type != WARP_TYPE_NOT_WARPING) {
            if (this.sWarpDest.nodeId >= WARP_NODE_CREDITS_MIN) {
                this.warp_credits()
            } else {
                this.warp_level()
            }
        } else {
            if (Area.gMarioSpawnInfo.areaIndex >= 0) {
                Area.load_mario_area()
                Mario.init_marios()
            }

            if (Area.gCurrentArea) {
                Camera.reset_camera(Area.gCurrentArea.camera)

                if (false) { // gCurrDemoInput != null) {
                    Mario.set_mario_action(this.gMarioState, ACT_IDLE, 0)
                } else if (true) { // !gDebugLevelSelect) {
                    if (this.gMarioState.action != ACT_UNINITIALIZED) {
                        // CHANGE TO FALSE TO TEST INTRO //
                        if (true) { // save_file_exists(gCurrSaveFileNum - 1)) {
                            Mario.set_mario_action(this.gMarioState, ACT_IDLE, 0)
                        } else {
                            Mario.set_mario_action(this.gMarioState, ACT_INTRO_CUTSCENE, 0)
                            val4 = 1
                        }
                    }
                }
            }

            if (val4 != 0) {
                Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x5A, 0xFF, 0xFF, 0xFF)
            } else {
                Area.play_transition(WARP_TRANSITION_FADE_FROM_STAR, 0x10, 0xFF, 0xFF, 0xFF)
            }

            // if (gCurrDemoInput == null) {
            //     set_background_music(gCurrentArea.musicParam, gCurrentArea.musicParam2, 0)
            // }

        }
        
        // if (gMarioState.action == ACT_INTRO_CUTSCENE) {
        //     sound_banks_disable(SEQ_PLAYER_SFX, SOUND_BANKS_DISABLED_DURING_INTRO_CUTSCENE)
        // }
        return true
    }


    level_control_timer(timerOp) {
        switch (timerOp) {
            case TIMER_CONTROL_SHOW:
                this.gHudDisplay.flags |= this.HUD_DISPLAY_FLAG_TIMER
                this.sTimerRunning = 0
                this.gHudDisplay.timer = 0
                break

            case TIMER_CONTROL_START:
                this.sTimerRunning = 1
                break

            case TIMER_CONTROL_STOP:
                this.sTimerRunning = 0
                break

            case TIMER_CONTROL_HIDE:
                this.gHudDisplay.flags &= ~this.HUD_DISPLAY_FLAG_TIMER
                this.sTimerRunning = 0
                this.gHudDisplay.timer = 0
                break
        }

        return this.gHudDisplay.timer
    }

    pressed_pause() {
        let /*u32*/ val4 = IngameMenu.get_dialog_id() >= 0
        let /*u32*/ intangible = (this.gMarioState.action & ACT_FLAG_INTANGIBLE) != 0

        if (!intangible && !val4 && !Area.gWarpTransition.isActive && this.sDelayedWarpOp == WARP_OP_NONE
            && window.playerInput.buttonPressedStart) {
            return true
        }

        return false
    }

    warp_special(level) {
        this.sCurrPlayMode = PLAY_MODE_CHANGE_LEVEL
        this.warpSpecialLevel = level
        this.gMarioState.health = 0x880
        this.gMarioState.hurtCounter = 0
        this.gMarioState.healCounter = 0
    }

    fade_into_special_warp(level, color) {
        if (color != 0) {
            color = 0xFF
        }

        fadeout_music(190)
        Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x10, color, color, color)
        this.level_set_transition(30, null)

        this.warp_special(level)
    }

// export const stub_level_update_1 = () => {
// }

// export const load_level_init_text = (arg) => {
//     let /*s32*/ gotAchievement
//     let /*u32*/ dialogID = Area.gCurrentArea.dialog[arg]

//     switch (dialogID) {
//         case DIALOG_129:
//             gotAchievement = save_file_get_flags() & SAVE_FLAG_HAVE_VANISH_CAP
//             break

//         case DIALOG_130:
//             gotAchievement = save_file_get_flags() & SAVE_FLAG_HAVE_METAL_CAP
//             break

//         case DIALOG_131:
//             gotAchievement = save_file_get_flags() & SAVE_FLAG_HAVE_WING_CAP
//             break

//         case 255:
//             gotAchievement = 1
//             break

//         default:
//             gotAchievement = save_file_get_star_flags(gCurrSaveFileNum - 1, gCurrCourseNum - 1)
//             break
//     }

//     if (!gotAchievement) {
//         level_set_transition(-1, null)
//         create_dialog_box(dialogID)
//     }
// }

    init_door_warp(spawnInfo, arg1) {
        if (arg1 & 0x00000002) {
            spawnInfo.startAngle[1] += s16(0x8000)
        }

        spawnInfo.startPos[0] += 300.0 * sins(spawnInfo.startAngle[1])
        spawnInfo.startPos[2] += 300.0 * coss(spawnInfo.startAngle[1])
    }

// export const set_mario_initial_cap_powerup = (m) => {
//     let /*u32*/ capCourseIndex = gCurrCourseNum - COURSE_CAP_COURSES

//     switch (capCourseIndex) {
//         case COURSE_COTMC - COURSE_CAP_COURSES:
//             m.flags |= MARIO_METAL_CAP | MARIO_CAP_ON_HEAD
//             m.capTimer = 600
//             break

//         case COURSE_TOTWC - COURSE_CAP_COURSES:
//             m.flags |= MARIO_WING_CAP | MARIO_CAP_ON_HEAD
//             m.capTimer = 1200
//             break

//         case COURSE_VCUTM - COURSE_CAP_COURSES:
//             m.flags |= MARIO_VANISH_CAP | MARIO_CAP_ON_HEAD
//             m.capTimer = 600
//             break
//     }
// }

    set_mario_initial_action(m, spawnType, actionArg) {
        switch (spawnType) {
            case MARIO_SPAWN_DOOR_WARP:
                Mario.set_mario_action(m, ACT_WARP_DOOR_SPAWN, actionArg)
                break
            case MARIO_SPAWN_UNKNOWN_02:
                Mario.set_mario_action(m, ACT_IDLE, 0)
                break
            case MARIO_SPAWN_UNKNOWN_03:
                Mario.set_mario_action(m, ACT_EMERGE_FROM_PIPE, 0)
                break
            case MARIO_SPAWN_TELEPORT:
                Mario.set_mario_action(m, ACT_TELEPORT_FADE_IN, 0)
                break
            case MARIO_SPAWN_INSTANT_ACTIVE:
                Mario.set_mario_action(m, ACT_IDLE, 0)
                break
            case MARIO_SPAWN_AIRBORNE:
                Mario.set_mario_action(m, ACT_SPAWN_NO_SPIN_AIRBORNE, 0)
                break
            case MARIO_SPAWN_HARD_AIR_KNOCKBACK:
                Mario.set_mario_action(m, ACT_HARD_BACKWARD_AIR_KB, 0)
                break
            case MARIO_SPAWN_SPIN_AIRBORNE_CIRCLE:
                Mario.set_mario_action(m, ACT_SPAWN_SPIN_AIRBORNE, 0)
                break
            case MARIO_SPAWN_DEATH:
                Mario.set_mario_action(m, ACT_FALLING_DEATH_EXIT, 0)
                break
            case MARIO_SPAWN_SPIN_AIRBORNE:
                Mario.set_mario_action(m, ACT_SPAWN_SPIN_AIRBORNE, 0)
                break
            case MARIO_SPAWN_FLYING:
                Mario.set_mario_action(m, ACT_FLYING, 2)
                break
            case MARIO_SPAWN_SWIMMING:
                Mario.set_mario_action(m, ACT_WATER_IDLE, 1)
                break
            case MARIO_SPAWN_PAINTING_STAR_COLLECT:
                Mario.set_mario_action(m, ACT_EXIT_AIRBORNE, 0)
                break
            case MARIO_SPAWN_PAINTING_DEATH:
                Mario.set_mario_action(m, ACT_DEATH_EXIT, 0)
                break
            case MARIO_SPAWN_AIRBORNE_STAR_COLLECT:
                Mario.set_mario_action(m, ACT_FALLING_EXIT_AIRBORNE, 0)
                break
            case MARIO_SPAWN_AIRBORNE_DEATH:
                Mario.set_mario_action(m, ACT_UNUSED_DEATH_EXIT, 0)
                break
            case MARIO_SPAWN_LAUNCH_STAR_COLLECT:
                Mario.set_mario_action(m, ACT_SPECIAL_EXIT_AIRBORNE, 0)
                break
            case MARIO_SPAWN_LAUNCH_DEATH:
                Mario.set_mario_action(m, ACT_SPECIAL_DEATH_EXIT, 0)
                break
        }

        // set_mario_initial_cap_powerup(m)
    }

    init_mario_after_warp() {
        const spawnNode = Area.area_get_warp_node(this.sWarpDest.nodeId)
        const marioSpawnType = Area.get_mario_spawn_type(spawnNode.object)

        if (this.gMarioState.action != ACT_UNINITIALIZED) {
            Area.gMarioSpawnInfo.startPos[0] = spawnNode.object.rawData[oPosX]
            Area.gMarioSpawnInfo.startPos[1] = spawnNode.object.rawData[oPosY]
            Area.gMarioSpawnInfo.startPos[2] = spawnNode.object.rawData[oPosZ]

            Area.gMarioSpawnInfo.startAngle[0] = 0
            Area.gMarioSpawnInfo.startAngle[1] = spawnNode.object.rawData[oMoveAngleYaw]
            Area.gMarioSpawnInfo.startAngle[2] = 0

            if (marioSpawnType == MARIO_SPAWN_DOOR_WARP) {
                this.init_door_warp(Area.gMarioSpawnInfo, this.sWarpDest.arg)
            }

            if (this.sWarpDest.type == WARP_TYPE_CHANGE_LEVEL || this.sWarpDest.type == WARP_TYPE_CHANGE_AREA) {
                Area.gMarioSpawnInfo.areaIndex = this.sWarpDest.areaIdx
                Area.load_mario_area()
            }

            Mario.init_marios()
            this.set_mario_initial_action(this.gMarioState, marioSpawnType, this.sWarpDest.arg)

            this.gMarioState.interactObj = spawnNode.object
            this.gMarioState.usedObj = spawnNode.object
        }

        Camera.reset_camera(Area.gCurrentArea.camera)
        this.sWarpDest.type = WARP_TYPE_NOT_WARPING
        this.sDelayedWarpOp = WARP_OP_NONE

        switch (marioSpawnType) {
            case MARIO_SPAWN_UNKNOWN_03:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_STAR, 0x10, 0x00, 0x00, 0x00)
                break
            case MARIO_SPAWN_DOOR_WARP:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_CIRCLE, 0x10, 0x00, 0x00, 0x00)
                break
            case MARIO_SPAWN_TELEPORT:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x14, 0xFF, 0xFF, 0xFF)
                break
            case MARIO_SPAWN_SPIN_AIRBORNE:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x1A, 0xFF, 0xFF, 0xFF)
                break
            case MARIO_SPAWN_SPIN_AIRBORNE_CIRCLE:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_CIRCLE, 0x10, 0x00, 0x00, 0x00)
                break
            case MARIO_SPAWN_UNKNOWN_27:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x10, 0x00, 0x00, 0x00)
                break
            default:
                Area.play_transition(WARP_TRANSITION_FADE_FROM_STAR, 0x10, 0x00, 0x00, 0x00)
                break
        }

        if (Game.gCurrDemoInput == null) {
        //     set_background_music(Area.gCurrentArea.musicParam, Area.gCurrentArea.musicParam2, 0)

        //     if (gMarioState.flags & MARIO_METAL_CAP) {
        //         play_cap_music(SEQUENCE_ARGS(4, SEQ_EVENT_METAL_CAP))
        //     }

        //     if (gMarioState.flags & (MARIO_VANISH_CAP | MARIO_WING_CAP)) {
        //         play_cap_music(SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP))
        //     }

        //     if (Area.gCurrLevelNum == LEVEL_BOB
        //         && get_current_background_music() != SEQUENCE_ARGS(4, SEQ_LEVEL_SLIDE)
        //         && sTimerRunning) {
        //         play_music(SEQ_PLAYER_LEVEL, SEQUENCE_ARGS(4, SEQ_LEVEL_SLIDE), 0)
        //     }

        //     if (this.sWarpDest.levelNum == LEVEL_CASTLE && this.sWarpDest.areaIdx == 1
        //         && (this.sWarpDest.nodeId == 31 || this.sWarpDest.nodeId == 32)
        //     )
        //         play_sound(SOUND_MENU_MARIO_CASTLE_WARP, gGlobalSoundSource)
        //     if (this.sWarpDest.levelNum == LEVEL_CASTLE_GROUNDS && this.sWarpDest.areaIdx == 1
        //         && (this.sWarpDest.nodeId == 7 || this.sWarpDest.nodeId == 10 || this.sWarpDest.nodeId == 20
        //             || this.sWarpDest.nodeId == 30)) {
        //         play_sound(SOUND_MENU_MARIO_CASTLE_WARP, gGlobalSoundSource)
        //     }
        }
    }

// used for warps inside one level
    warp_area() {
        if (this.sWarpDest.type != WARP_TYPE_NOT_WARPING) {
            if (this.sWarpDest.type == WARP_TYPE_CHANGE_AREA) {
                this.level_control_timer(TIMER_CONTROL_HIDE)
                Area.unload_mario_area()
                Area.load_area(this.sWarpDest.areaIdx)
            }

            this.init_mario_after_warp()
        }
    }

    // used for warps between levels
    warp_level() {
        Area.gCurrLevelNum = this.sWarpDest.levelNum

        this.level_control_timer(TIMER_CONTROL_HIDE)

        Area.load_area(this.sWarpDest.areaIdx)
        this.init_mario_after_warp()
    }

// export const warp_credits = () => {
//     let /*s32*/ marioAction

//     switch (this.sWarpDest.nodeId) {
//         case WARP_NODE_CREDITS_START:
//             marioAction = ACT_END_PEACH_CUTSCENE
//             break

//         case WARP_NODE_CREDITS_NEXT:
//             marioAction = ACT_CREDITS_CUTSCENE
//             break

//         case WARP_NODE_CREDITS_END:
//             marioAction = ACT_END_WAVING_CUTSCENE
//             break
//     }

//     Area.gCurrLevelNum = this.sWarpDest.levelNum

//     load_area(this.sWarpDest.areaIdx)

//     vec3s_set(Area.gMarioSpawnInfo.startPos, gCurrCreditsEntry.marioPos[0],
//               gCurrCreditsEntry.marioPos[1], gCurrCreditsEntry.marioPos[2])

//     vec3s_set(Area.gMarioSpawnInfo.startAngle, 0, 0x100 * gCurrCreditsEntry.marioAngle, 0)

//     Area.gMarioSpawnInfo.areaIndex = this.sWarpDest.areaIdx

//     load_mario_area()
//     init_mario()

//     Mario.set_mario_action(gMarioState, marioAction, 0)

//     reset_camera(Area.gCurrentArea.camera)

//     this.sWarpDest.type = WARP_TYPE_NOT_WARPING
//     this.sDelayedWarpOp = WARP_OP_NONE

//     Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x14, 0x00, 0x00, 0x00)

//     if (gCurrCreditsEntry == null || gCurrCreditsEntry == sCreditsSequence) {
//         set_background_music(Area.gCurrentArea.musicParam, Area.gCurrentArea.musicParam2, 0)
//     }
// }

// export const check_instant_warp = () => {
//     let /*s16*/ cameraAngle
//     struct Surface *floor

//     if (Area.gCurrLevelNum == LEVEL_CASTLE
// export const save_file_get_total_star_count = (1, 1, 70) => {
//         return
//     }

//     if ((floor = gMarioState.floor) != null) {
//         let /*s32*/ index = floor.type - SURFACE_INSTANT_WARP_1B
//         if (index >= INSTANT_WARP_INDEX_START && index < INSTANT_WARP_INDEX_STOP
//             && Area.gCurrentArea.instantWarps != null) {
//             struct InstantWarp *warp = &Area.gCurrentArea.instantWarps[index]

//             if (warp.id != 0) {
//                 gMarioState.pos[0] += warp.displacement[0]
//                 gMarioState.pos[1] += warp.displacement[1]
//                 gMarioState.pos[2] += warp.displacement[2]

//                 gMarioState.marioObj.rawData[oPosX] = gMarioState.pos[0]
//                 gMarioState.marioObj.rawData[oPosY] = gMarioState.pos[1]
//                 gMarioState.marioObj.rawData[oPosZ] = gMarioState.pos[2]

//                 cameraAngle = gMarioState.area.camera.yaw

//                 change_area(warp.area)
//                 gMarioState.area = Area.gCurrentArea

//                 warp_camera(warp.displacement[0], warp.displacement[1], warp.displacement[2])

//                 gMarioState.area.camera.yaw = cameraAngle
//             }
//         }
//     }
// }

    music_changed_through_warp(arg) {
        // let warpNode = Area.area_get_warp_node(arg)
        // let levelNum = warpNode.destLevel & 0x7F
        // let destArea = warpNode.destArea
        let /*s16*/ val4 = 1
        let /*s16*/ sp2C

        // if (levelNum == LEVEL_BOB && levelNum == Area.gCurrLevelNum && destArea == gCurrAreaIndex) {
        //     sp2C = get_current_background_music()
        //     if (sp2C == SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP | SEQ_VARIATION)
        //         || sp2C == SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP)) {
        //         val4 = 0
        //     }
        // } else {
        //     let /*u16*/ val8 = gAreas[destArea].musicParam
        //     let /*u16*/ val6 = gAreas[destArea].musicParam2

        //     val4 = levelNum == Area.gCurrLevelNum && val8 == Area.gCurrentArea.musicParam
        //            && val6 == Area.gCurrentArea.musicParam2

        //     if (get_current_background_music() != val6) {
        //         val4 = 0
        //     }
        // }
        return val4
    }

    /**
     * Set the current warp type and destination level/area/node.
     */
    initiate_warp(destLevel, destArea, destWarpNode, arg) {
        if (destWarpNode >= WARP_NODE_CREDITS_MIN) {
            this.sWarpDest.type = WARP_TYPE_CHANGE_LEVEL
        } else if (destLevel != Area.gCurrLevelNum) {
            this.sWarpDest.type = WARP_TYPE_CHANGE_LEVEL
        } else if (destArea != Area.gCurrentArea.index) {
            this.sWarpDest.type = WARP_TYPE_CHANGE_AREA
        } else {
            this.sWarpDest.type = WARP_TYPE_SAME_AREA
        }

        this.sWarpDest.levelNum = destLevel
        this.sWarpDest.areaIdx  = destArea
        this.sWarpDest.nodeId   = destWarpNode
        this.sWarpDest.arg      = arg
    }

// // From Surface 0xD3 to 0xFC
// #define PAINTING_WARP_INDEX_START 0x00   // Value greater than or equal to Surface 0xD3
// #define PAINTING_WARP_INDEX_FA 0x2A      // THI Huge Painting index left
// #define PAINTING_WARP_INDEX_END 0x2D     // Value less than Surface 0xFD

// /**
//  * Check if Mario is above and close to a painting warp floor, and return the
//  * corresponding warp node.
//  */
// export const get_painting_warp_node = () => {
//     struct WarpNode *warpNode = null
//     let /*s32*/ paintingIndex = gMarioState.floor.type - SURFACE_PAINTING_WARP_D3

//     if (paintingIndex >= PAINTING_WARP_INDEX_START && paintingIndex < PAINTING_WARP_INDEX_END) {
//         if (paintingIndex < PAINTING_WARP_INDEX_FA
//             || gMarioState.pos[1] - gMarioState.floorHeight < 80.0) {
//             warpNode = &Area.gCurrentArea.paintingWarpNodes[paintingIndex]
//         }
//     }

//     return warpNode
// }

// /**
//  * Check is Mario has entered a painting, and if so, initiate a warp.
//  */
// export const initiate_painting_warp = () => {
//     if (Area.gCurrentArea.paintingWarpNodes != null && gMarioState.floor != null) {
//         struct WarpNode warpNode
//         struct WarpNode *pWarpNode = get_painting_warp_node()

//         if (pWarpNode != null) {
//             if (gMarioState.action & ACT_FLAG_INTANGIBLE) {
//                 play_painting_eject_sound()
//             } else if (pWarpNode.id != 0) {
//                 warpNode = *pWarpNode

//                 if (!(warpNode.destLevel & 0x80)) {
//                     sWarpCheckpointActive = check_warp_checkpoint(&warpNode)
//                 }

//                 initiate_warp(warpNode.destLevel & 0x7F, warpNode.destArea, warpNode.destNode, 0)
//                 check_if_should_set_warp_checkpoint(&warpNode)

//                 Area.play_transition_after_delay(WARP_TRANSITION_FADE_INTO_COLOR, 30, 255, 255, 255, 45)
//                 level_set_transition(74, basic_update)

//                 Mario.set_mario_action(gMarioState, ACT_DISAPPEARED, 0)

//                 gMarioState.marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE

//                 play_sound(SOUND_MENU_STAR_SOUND, gGlobalSoundSource)
//                 fadeout_music(398)
// #ifdef VERSION_SH
//                 queue_rumble_data(80, 70)
//                 func_sh_8024C89C(1)
// #endif
//             }
//         }
//     }
// }

    /**
     * If there is not already a delayed warp, schedule one. The source node is
     * based on the warp operation and sometimes Mario's used object.
     * Return the time left until the delayed warp is initiated.
     */
    level_trigger_warp(m, warpOp) {
        let /*s32*/ val04 = 1

        if (this.sDelayedWarpOp == WARP_OP_NONE) {
            m.invincTimer = -1
            this.sDelayedWarpArg = 0
            this.sDelayedWarpOp = warpOp

            switch (warpOp) {
                case WARP_OP_DEMO_NEXT:
                case WARP_OP_DEMO_END:
                    this.sDelayedWarpTimer = 20
                    this.sSourceWarpNodeId = WARP_NODE_F0
                    Area.gSavedCourseNum = COURSE_NONE
                    val04 = 0
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_STAR, 0x14, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_CREDITS_END:
                    this.sDelayedWarpTimer = 60
                    this.sSourceWarpNodeId = WARP_NODE_F0
                    val04 = 0
                    Area.gSavedCourseNum = COURSE_NONE
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x3C, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_STAR_EXIT:
                    this.sDelayedWarpTimer = 32
                    this.sSourceWarpNodeId = WARP_NODE_F0
                    Area.gSavedCourseNum = COURSE_NONE
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_MARIO, 0x20, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_DEATH:
                    if (m.numLives == 0) {
                        this.sDelayedWarpOp = WARP_OP_GAME_OVER
                    }
                    this.sDelayedWarpTimer = 48
                    this.sSourceWarpNodeId = WARP_NODE_DEATH
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_BOWSER, 0x30, 0x00, 0x00, 0x00)
                    play_sound(SOUND_MENU_BOWSER_LAUGH, gGlobalSoundSource)
                    break

                case WARP_OP_WARP_FLOOR:
                    this.sSourceWarpNodeId = WARP_NODE_WARP_FLOOR
                    if (!Area.area_get_warp_node(this.sSourceWarpNodeId)) {
                        if (m.numLives == 0) {
                            this.sDelayedWarpOp = WARP_OP_GAME_OVER
                        } else {
                            this.sSourceWarpNodeId = WARP_NODE_DEATH
                        }
                    }
                    this.sDelayedWarpTimer = 20
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_CIRCLE, 0x14, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_UNKNOWN_01:   // enter totwc
                    this.sDelayedWarpTimer = 30
                    this.sSourceWarpNodeId = WARP_NODE_F2
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x1E, 0xFF, 0xFF, 0xFF)
                    play_sound(SOUND_MENU_STAR_SOUND, gGlobalSoundSource)
                    break

                case WARP_OP_UNKNOWN_02:   // bbh enter
                    this.sDelayedWarpTimer = 30
                    this.sSourceWarpNodeId = (m.usedObj.rawData[oBehParams] & 0x00FF0000) >> 16
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x1E, 0xFF, 0xFF, 0xFF)
                    break

                case WARP_OP_TELEPORT:
                    this.sDelayedWarpTimer = 20
                    this.sSourceWarpNodeId = (m.usedObj.rawData[oBehParams] & 0x00FF0000) >> 16
                    val04 = !this.music_changed_through_warp(this.sSourceWarpNodeId)
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x14, 0xFF, 0xFF, 0xFF)
                    break

                case WARP_OP_WARP_DOOR:
                    this.sDelayedWarpTimer = 20
                    this.sDelayedWarpArg = m.actionArg
                    this.sSourceWarpNodeId = (m.usedObj.rawData[oBehParams] & 0x00FF0000) >> 16
                    val04 = !this.music_changed_through_warp(this.sSourceWarpNodeId)
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_CIRCLE, 0x14, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_WARP_OBJECT:
                    this.sDelayedWarpTimer = 20
                    this.sSourceWarpNodeId = (m.usedObj.rawData[oBehParams] & 0x00FF0000) >> 16
                    val04 = !this.music_changed_through_warp(this.sSourceWarpNodeId)
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_STAR, 0x14, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_CREDITS_START:
                    this.sDelayedWarpTimer = 30
                    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x1E, 0x00, 0x00, 0x00)
                    break

                case WARP_OP_CREDITS_NEXT:
                    if (gCurrCreditsEntry == sCreditsSequence[0]) {
                        this.sDelayedWarpTimer = 60
                        Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x3C, 0x00, 0x00, 0x00)
                    } else {
                        this.sDelayedWarpTimer = 20
                        Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 0x14, 0x00, 0x00, 0x00)
                    }
                    val04 = 0
                    break
            }

            if (val04 && true) {  // !gCurrDemoInput) {
                fadeout_music((3 * this.sDelayedWarpTimer / 2) * 8 - 2)
            }
        }

        return this.sDelayedWarpTimer
    }

    /**
     * If a delayed warp is ready, initiate it.
     */
    initiate_delayed_warp() {
        let warpNode
        let destWarpNode

        if (this.sDelayedWarpOp != WARP_OP_NONE && --this.sDelayedWarpTimer == 0) {
            // reset_dialog_render_state()

            if (false) {  // gDebugLevelSelect && (this.sDelayedWarpOp & WARP_OP_TRIGGERS_LEVEL_SELECT)) {
                this.warp_special(-9)
            } else if (false) {  // gCurrDemoInput != null) {
                if (this.sDelayedWarpOp == WARP_OP_DEMO_END) {
                    this.warp_special(-8)
                } else {
                    this.warp_special(-2)
                }
            } else {
                switch (this.sDelayedWarpOp) {
                    case WARP_OP_GAME_OVER:
                        // save_file_reload()
                        this.warp_special(-3)
                        break

                    case WARP_OP_CREDITS_END:
                        this.warp_special(-1)
                        sound_banks_enable(SEQ_PLAYER_SFX,
                                           SOUND_BANKS_ALL & ~SOUND_BANKS_DISABLED_AFTER_CREDITS)
                        break

                    case WARP_OP_DEMO_NEXT:
                        this.warp_special(-2)
                        break

                    case WARP_OP_CREDITS_START:
                        gCurrCreditsEntry = sCreditsSequence[0]
                        this.initiate_warp(gCurrCreditsEntry.levelNum, gCurrCreditsEntry.areaIndex,
                                      WARP_NODE_CREDITS_START, 0)
                        break

                    case WARP_OP_CREDITS_NEXT:
                        sound_banks_disable(SEQ_PLAYER_SFX, SOUND_BANKS_ALL)

                        gCurrCreditsEntry += 1
                        gCurrActNum = gCurrCreditsEntry.unk02 & 0x07
                        if ((gCurrCreditsEntry + 1).levelNum == LEVEL_NONE) {
                            destWarpNode = WARP_NODE_CREDITS_END
                        } else {
                            destWarpNode = WARP_NODE_CREDITS_NEXT
                        }

                        this.initiate_warp(gCurrCreditsEntry.levelNum, gCurrCreditsEntry.areaIndex,
                                      destWarpNode, 0)
                        break

                    default:
                        warpNode = Area.area_get_warp_node(this.sSourceWarpNodeId)

                        this.initiate_warp(warpNode.destLevel & 0x7F, warpNode.destArea,
                                      warpNode.destNode, this.sDelayedWarpArg)

                        // check_if_should_set_warp_checkpoint(warpNode)
                        if (this.sWarpDest.type != WARP_TYPE_CHANGE_LEVEL) {
                            this.level_set_transition(2, null)
                        }
                        break
                }
            }
        }
    }


    play_mode_normal() {
        // if (gCurrDemoInput != null) {
        //     print_intro_text()
        //     if (gPlayer1Controller.buttonPressed & END_DEMO) {
        //         this.level_trigger_warp(gMarioState,
        //                            Area.gCurrLevelNum == LEVEL_PSS ? WARP_OP_DEMO_END : WARP_OP_DEMO_NEXT)
        //     } else if (!gWarpTransition.isActive && this.sDelayedWarpOp == WARP_OP_NONE
        //                && (gPlayer1Controller.buttonPressed & START_BUTTON)) {
        //         this.level_trigger_warp(gMarioState, WARP_OP_DEMO_NEXT)
        //     }
        // }

        this.warp_area()
        // check_instant_warp()

        // if (sTimerRunning && gHudDisplay.timer < 17999) {
        //     gHudDisplay.timer += 1
        // }

        Area.area_update_objects()
        this.update_hud_values()

        if (Area.gCurrentArea) {
            Camera.update_camera(Area.gCurrentArea.camera)
        }

        // initiate_painting_warp()
        this.initiate_delayed_warp()

          // If either initiate_painting_warp or initiate_delayed_warp initiated a
          // warp, change play mode accordingly.
        if (this.sCurrPlayMode == PLAY_MODE_NORMAL) {
            if (this.sWarpDest.type == WARP_TYPE_CHANGE_LEVEL) {
                this.set_play_mode(PLAY_MODE_CHANGE_LEVEL)
            } else if (this.sTransitionTimer != 0) {
                this.set_play_mode(PLAY_MODE_CHANGE_AREA)
            } else if (this.pressed_pause()) {
                // lower_background_noise(1)
                Camera.gCameraMovementFlags |= CAM_MOVE_PAUSE_SCREEN
                this.set_play_mode(PLAY_MODE_PAUSED)
            }
        }

        return false
    }

    play_mode_paused() {
        if (Area.gMenuOptSelectIndex == MENU_OPT_NONE) {
            IngameMenu.set_menu_mode(MENU_MODE_RENDER_PAUSE_SCREEN);
        } else if (Area.gMenuOptSelectIndex == MENU_OPT_DEFAULT) {
            raise_background_noise(1);
            Camera.gCameraMovementFlags &= ~CAM_MOVE_PAUSE_SCREEN;
            this.set_play_mode(PLAY_MODE_NORMAL);
        } else { // MENU_OPT_EXIT_COURSE
            if (window.gDebugLevelSelect) {
                this.fade_into_special_warp(-9, 1);
            } else {
                this.initiate_warp(LEVEL_CASTLE, 1, 0x1F, 0);
                this.fade_into_special_warp(0, 0);
                Area.gSavedCourseNum = COURSE_NONE;
            }

            Camera.gCameraMovementFlags &= ~CAM_MOVE_PAUSE_SCREEN;
        }

        return 0;
    }

    /**
     * Set the transition, which is a period of time after the warp is initiated
     * but before it actually occurs. If updateFunction is not NULL, it will be
     * called each frame during the transition.
     */
    level_set_transition(length, updateFunction) {
        this.sTransitionTimer = length
        this.sTransitionUpdate = updateFunction
    }

    /**
     * Play the transition and then return to normal play mode.
     */
    play_mode_change_area() {
          //! This maybe was supposed to be sTransitionTimer == -1? sTransitionUpdate
          // is never set to -1.
        if (this.sTransitionTimer == - 1) {
            Camera.update_camera(Area.gCurrentArea.camera)
        } else if (this.sTransitionUpdate) {
            this.sTransitionUpdate.call(this.sTransitionTimer)
        }

        if (this.sTransitionTimer > 0) {
            this.sTransitionTimer -= 1
        }

        if (this.sTransitionTimer == 0) {
            this.sTransitionUpdate = null
            this.set_play_mode(PLAY_MODE_NORMAL)
        }

        return false
    }

    /**
     * Play the transition and then return to normal play mode.
     */
    play_mode_change_level() {
        if (this.sTransitionUpdate) {
            sTransitionUpdate.call(this.sTransitionTimer)
        }

        if (--this.sTransitionTimer == -1) {
            this.gHudDisplay.flags = this.HUD_DISPLAY_NONE
            this.sTransitionTimer = 0
            this.sTransitionUpdate = null

            if (this.sWarpDest.type != WARP_TYPE_NOT_WARPING) {
                return this.sWarpDest.levelNum
            } else {
                return this.warpSpecialLevel
            }
        }

        return false
    }


    update_level() {
        let changeLevel

        switch (this.sCurrPlayMode) {
            case PLAY_MODE_NORMAL:
                changeLevel = this.play_mode_normal()
                break
            case PLAY_MODE_PAUSED:
                changeLevel = this.play_mode_paused()
                break
            case PLAY_MODE_CHANGE_AREA:
                changeLevel = this.play_mode_change_area()
                break
            case PLAY_MODE_CHANGE_LEVEL:
                changeLevel = this.play_mode_change_level()
                break
            case PLAY_MODE_FRAME_ADVANCE:
                changeLevel = this.play_mode_frame_advance()
                break
        }

        if (changeLevel) {
            // reset_volume()
            // enable_background_sound()
        }

        return changeLevel
    }

    set_play_mode(playMode) {
        this.sCurrPlayMode = playMode
    }

    load_level_init_text(arg) {}

    update_hud_values() {
        if (this.gCurrCreditsEntry == null) {
            const numHealthWedges = this.gMarioState.health > 0 ? this.gMarioState.health >> 8 : 0

            if (Area.gCurrCourseNum > 0) {
                this.gHudDisplay.flags |= this.HUD_DISPLAY_FLAG_COIN_COUNT;
            } else {
                this.gHudDisplay.flags &= ~this.HUD_DISPLAY_FLAG_COIN_COUNT;
            }
    
            if (this.gHudDisplay.coins < this.gMarioState.numCoins) {

                if (window.gGlobalTimer & 0x00000001) {
                    let coinSound
                    if (this.gMarioState.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
                        //coinSound = SOUND_GENERAL_COIN_WATER;
                    } else {
                        //coinSound = SOUND_GENERAL_COIN;
                    }
    
                    this.gHudDisplay.coins += 1;
                    //play_sound(coinSound, this.gMarioState.marioObj.gfx.cameraToObject)
                }
            }
    
            if (this.gMarioState.numLives > 100) {
                this.gMarioState.numLives = 100;
            }
    
            var BUGFIX_MAX_LIVES = false;
            if (BUGFIX_MAX_LIVES) {
                if (this.gMarioState.numCoins > 999) {
                    this.gMarioState.numCoins = 999;
                }
        
                if (this.gHudDisplay.coins > 999) {
                    this.gHudDisplay.coins = 999;
                }
            } else {
                if (this.gMarioState.numCoins > 999) {
                    this.gMarioState.numLives = 999; //! Wrong variable
                }
            }
    
            this.gHudDisplay.stars = this.gMarioState.numStars;
            this.gHudDisplay.lives = this.gMarioState.numLives;
            this.gHudDisplay.keys = this.gMarioState.numKeys;

            if (numHealthWedges > this.gHudDisplay.wedges) {
                //play_sound(SOUND_MENU_POWER_METER, gDefaultSoundArgs);
            }
            this.gHudDisplay.wedges = numHealthWedges;
    
            if (this.gMarioState.hurtCounter > 0) {
                this.gHudDisplay.flags |= this.HUD_DISPLAY_FLAG_EMPHASIZE_POWER;
            } else {
                this.gHudDisplay.flags &= ~this.HUD_DISPLAY_FLAG_EMPHASIZE_POWER;
            }
        }
    }
}

export const LevelUpdateInstance = new LevelUpdate()
gLinker.LevelUpdate = LevelUpdateInstance

export const level_trigger_warp = (m, warpOp) => { LevelUpdateInstance.level_trigger_warp(m, warpOp) }
