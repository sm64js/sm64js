import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE } from "../engine/graph_node"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { TIME_STOP_ENABLED, TIME_STOP_DIALOG } from "./ObjectListProcessor"
import { AreaInstance as Area } from "./Area"
import {
    LEVEL_NONE, LEVEL_UNKNOWN_1, LEVEL_UNKNOWN_2, LEVEL_UNKNOWN_3, LEVEL_BBH, LEVEL_CCM, LEVEL_CASTLE, LEVEL_HMC,
    LEVEL_SSL, LEVEL_BOB, LEVEL_SL, LEVEL_WDW, LEVEL_JRB, LEVEL_THI, LEVEL_TTC, LEVEL_RR, LEVEL_CASTLE_GROUNDS,
    LEVEL_BITDW, LEVEL_VCUTM, LEVEL_BITFS, LEVEL_SA, LEVEL_BITS, LEVEL_LLL, LEVEL_DDD, LEVEL_WF, LEVEL_ENDING,
    LEVEL_CASTLE_COURTYARD, LEVEL_PSS, LEVEL_COTMC, LEVEL_TOTWC, LEVEL_BOWSER_1, LEVEL_WMOTR, LEVEL_UNKNOWN_32,
    LEVEL_BOWSER_2, LEVEL_BOWSER_3, LEVEL_UNKNOWN_35, LEVEL_TTM, LEVEL_UNKNOWN_37, LEVEL_UNKNOWN_38, LEVEL_COUNT
} from "../levels/level_defines_constants"

import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { atan2s, vec3f_set, sqrtf,vec3f_set_dist_and_angle } from "../engine/math_util"
import * as MathUtil from "../engine/math_util"
import * as Mario from "./Mario"
import { oBehParams2ndByte, oHeldState, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oPosX, oPosY, oPosZ } from "../include/object_constants"
import { CELL_HEIGHT_LIMIT, FLOOR_LOWER_LIMIT, SURFACE_DEATH_PLANE, SURFACE_IS_PAINTING_WARP, SURFACE_WALL_MISC } from "../include/surface_terrains"
import { sins, s16, int16, coss } from "../utils"
import { HudInstance as Hud } from "./Hud"
import { CAM_SELECTION_FIXED, CAM_SELECTION_MARIO, DIALOG_RESPONSE_NONE } from "./IngameMenu"
import { DIALOG_001, DIALOG_020, DIALOG_NONE } from "../text/us/dialogs"
import { gLastCompletedStarNum } from "./SaveFile"
import { COURSE_MAX, COURSE_NONE } from "../levels/course_defines"
import { level_defines } from "../levels/level_defines_constants"
import { set_time_stop_flags, clear_time_stop_flags } from "./ObjectHelpers"
import { IngameMenuInstance as IngameMenu } from "./IngameMenu"
import {
    seq_player_lower_volume, SEQ_PLAYER_LEVEL, seq_player_unlower_volume,
    play_sound, gGlobalSoundSource
} from "../audio/external"
import { SOUND_MENU_CAMERA_ZOOM_OUT, SOUND_MENU_CAMERA_ZOOM_IN, SOUND_PEACH_DEAR_MARIO } from "../include/sounds"
import { ACT_BUTT_STUCK_IN_GROUND } from "./Mario"
import { ACT_HEAD_STUCK_IN_GROUND } from "./Mario"
import { ACT_FEET_STUCK_IN_GROUND } from "./Mario"
import { SURFACE_CAMERA_MIDDLE } from "../include/surface_terrains"
import { SURFACE_CAMERA_ROTATE_RIGHT } from "../include/surface_terrains"
import { SURFACE_CAMERA_ROTATE_LEFT } from "../include/surface_terrains"
import { SOUND_MENU_CAMERA_BUZZ } from "../include/sounds"
import { SOUND_MENU_CLICK_CHANGE_VIEW } from "../include/sounds"
import { ACT_RIDING_HOOT } from "./Mario"
import { vec3f_copy } from "../engine/math_util"
import { vec3f_get_dist_and_angle } from "../engine/math_util"
import { approach_f32 } from "../engine/math_util"
import { SURFACE_CLOSE_CAMERA } from "../include/surface_terrains"
import { SURFACE_NO_CAM_COL_SLIPPERY } from "../include/surface_terrains"
import { ACT_GETTING_BLOWN } from "./Mario"
import { LEVEL_MAX } from "../levels/level_defines_constants"
import { SEQUENCE_ARGS } from "../audio/external"
import { SEQ_EVENT_PEACH_MESSAGE } from "../include/seq_ids"
import { play_music } from "../audio/external"
import { SEQ_EVENT_CUTSCENE_INTRO } from "../include/seq_ids"
import { SURFACE_CAMERA_FREE_ROAM } from "../include/surface_terrains"
import { SURFACE_CAMERA_8_DIR } from "../include/surface_terrains"
import { SURFACE_BOSS_FIGHT_CAMERA } from "../include/surface_terrains"
import { SURFACE_INSTANT_WARP_1B } from "../include/surface_terrains"
import { SURFACE_INSTANT_WARP_1C } from "../include/surface_terrains"
import { MARIO_DIALOG_STATUS_SPEAK } from "./MarioActionsCutscene"
import { MARIO_DIALOG_LOOK_FRONT } from "./MarioActionsCutscene"
import { set_mario_npc_dialog } from "./MarioActionsCutscene"
import { pitch } from "style-loader"
import { DROP_TO_FLOOR } from "../engine/BehaviorCommands"

export const DEGREES = (d) => {return s16(d * 0x10000 / 360)}

const LEVEL_AREA_INDEX = (levelNum, areaNum) => {return (levelNum << 4) + areaNum}

const surfaceObj = {
    type: 0,
    force: 0, 
    flags: 0,
    room: 0,
    lowerY: 0,
    upperY: 0,
    vertex1: [0, 0, 0],
    vertex2: [0, 0, 0],
    vertex3: [0, 0, 0],
    normal: {x: 0, y: 0, z: 0},
    originOffset: 0,
    object: {}
}

const CameraTrigger = {
    area: 0,
    event: {
        mode: 0,
        defMode: 0,
        yaw: 0,
        focus: [0, 0, 0],
        pos: [0, 0, 0],
        areaCenX: 0,
        areaCenZ: 0,
        cutscene: 0,
        nextYaw: 0,
        doorStatus: 0,
        areaCenY: 0
    },
    centerX: 0,
    centerY: 0,
    centerZ: 0,
    boundsX: 0,
    boundsY: 0,
    boundsZ: 0,
    boundsYaw: 0
}

const WallColDataObj = {
    x: 0, y: 0, z: 0,
    offsetY: 0,
    radius: 0,
    numWalls: 0,
    walls: [JSON.parse(JSON.stringify(surfaceObj)), JSON.parse(JSON.stringify(surfaceObj)), JSON.parse(JSON.stringify(surfaceObj)), JSON.parse(JSON.stringify(surfaceObj))]
}

export const AREA_BBH                = LEVEL_AREA_INDEX(LEVEL_BBH, 1)
export const AREA_CCM_OUTSIDE        = LEVEL_AREA_INDEX(LEVEL_CCM, 1)
export const AREA_CCM_SLIDE          = LEVEL_AREA_INDEX(LEVEL_CCM, 2)
export const AREA_CASTLE_LOBBY       = LEVEL_AREA_INDEX(LEVEL_CASTLE, 1)
export const AREA_CASTLE_TIPPY       = LEVEL_AREA_INDEX(LEVEL_CASTLE, 2)
export const AREA_CASTLE_BASEMENT    = LEVEL_AREA_INDEX(LEVEL_CASTLE, 3)
export const AREA_HMC                = LEVEL_AREA_INDEX(LEVEL_HMC, 1)
export const AREA_SSL_OUTSIDE        = LEVEL_AREA_INDEX(LEVEL_SSL, 1)
export const AREA_SSL_PYRAMID        = LEVEL_AREA_INDEX(LEVEL_SSL, 2)
export const AREA_SSL_EYEROK         = LEVEL_AREA_INDEX(LEVEL_SSL, 3)
export const AREA_BOB                = LEVEL_AREA_INDEX(LEVEL_BOB, 1)
export const AREA_SL_OUTSIDE         = LEVEL_AREA_INDEX(LEVEL_SL, 1)
export const AREA_SL_IGLOO           = LEVEL_AREA_INDEX(LEVEL_SL, 2)
export const AREA_WDW_MAIN           = LEVEL_AREA_INDEX(LEVEL_WDW, 1)
export const AREA_WDW_TOWN           = LEVEL_AREA_INDEX(LEVEL_WDW, 2)
export const AREA_JRB_MAIN           = LEVEL_AREA_INDEX(LEVEL_JRB, 1)
export const AREA_JRB_SHIP           = LEVEL_AREA_INDEX(LEVEL_JRB, 2)
export const AREA_THI_HUGE           = LEVEL_AREA_INDEX(LEVEL_THI, 1)
export const AREA_THI_TINY           = LEVEL_AREA_INDEX(LEVEL_THI, 2)
export const AREA_THI_WIGGLER        = LEVEL_AREA_INDEX(LEVEL_THI, 3)
export const AREA_TTC                = LEVEL_AREA_INDEX(LEVEL_TTC, 1)
export const AREA_RR                 = LEVEL_AREA_INDEX(LEVEL_RR, 1)
export const AREA_CASTLE_GROUNDS     = LEVEL_AREA_INDEX(LEVEL_CASTLE_GROUNDS, 1)
export const AREA_BITDW              = LEVEL_AREA_INDEX(LEVEL_BITDW, 1)
export const AREA_VCUTM              = LEVEL_AREA_INDEX(LEVEL_VCUTM, 1)
export const AREA_BITFS              = LEVEL_AREA_INDEX(LEVEL_BITFS, 1)
export const AREA_SA                 = LEVEL_AREA_INDEX(LEVEL_SA, 1)
export const AREA_BITS               = LEVEL_AREA_INDEX(LEVEL_BITS, 1)
export const AREA_LLL_OUTSIDE        = LEVEL_AREA_INDEX(LEVEL_LLL, 1)
export const AREA_LLL_VOLCANO        = LEVEL_AREA_INDEX(LEVEL_LLL, 2)
export const AREA_DDD_WHIRLPOOL      = LEVEL_AREA_INDEX(LEVEL_DDD, 1)
export const AREA_DDD_SUB            = LEVEL_AREA_INDEX(LEVEL_DDD, 2)
export const AREA_WF                 = LEVEL_AREA_INDEX(LEVEL_WF, 1)
export const AREA_ENDING             = LEVEL_AREA_INDEX(LEVEL_ENDING, 1)
export const AREA_COURTYARD          = LEVEL_AREA_INDEX(LEVEL_CASTLE_COURTYARD, 1)
export const AREA_PSS                = LEVEL_AREA_INDEX(LEVEL_PSS, 1)
export const AREA_COTMC              = LEVEL_AREA_INDEX(LEVEL_COTMC, 1)
export const AREA_TOTWC              = LEVEL_AREA_INDEX(LEVEL_TOTWC, 1)
export const AREA_BOWSER_1           = LEVEL_AREA_INDEX(LEVEL_BOWSER_1, 1)
export const AREA_WMOTR              = LEVEL_AREA_INDEX(LEVEL_WMOTR, 1)
export const AREA_BOWSER_2           = LEVEL_AREA_INDEX(LEVEL_BOWSER_2, 1)
export const AREA_BOWSER_3           = LEVEL_AREA_INDEX(LEVEL_BOWSER_3, 1)
export const AREA_TTM_OUTSIDE        = LEVEL_AREA_INDEX(LEVEL_TTM, 1)

const CAM_MODE_MARIO_ACTIVE          =  0x01
const CAM_MODE_LAKITU_WAS_ZOOMED_OUT =  0x02
const CAM_MODE_MARIO_SELECTED        =  0x04

const CAM_ANGLE_MARIO  = 1
const CAM_ANGLE_LAKITU = 2

export const CAMERA_MODE_NONE              = 0x00
export const CAMERA_MODE_RADIAL            = 0x01
export const CAMERA_MODE_OUTWARD_RADIAL    = 0x02
export const CAMERA_MODE_BEHIND_MARIO      = 0x03
export const CAMERA_MODE_CLOSE             = 0x04 // Inside Castle / Big Boo's Haunt
export const CAMERA_MODE_C_UP              = 0x06
export const CAMERA_MODE_WATER_SURFACE     = 0x08
export const CAMERA_MODE_SLIDE_HOOT        = 0x09
export const CAMERA_MODE_INSIDE_CANNON     = 0x0A
export const CAMERA_MODE_BOSS_FIGHT        = 0x0B
export const CAMERA_MODE_PARALLEL_TRACKING = 0x0C
export const CAMERA_MODE_FIXED             = 0x0D
export const CAMERA_MODE_8_DIRECTIONS      = 0x0E // AKA Parallel Camera, Bowser Courses & Rainbow Road
export const CAMERA_MODE_FREE_ROAM         = 0x10
export const CAMERA_MODE_SPIRAL_STAIRS     = 0x11


const CAM_MOVE_RETURN_TO_MIDDLE       = 0x0001
const CAM_MOVE_ZOOMED_OUT             = 0x0002
const CAM_MOVE_ROTATE_RIGHT           = 0x0004
const CAM_MOVE_ROTATE_LEFT            = 0x0008
const CAM_MOVE_ENTERED_ROTATE_SURFACE = 0x0010
const CAM_MOVE_METAL_BELOW_WATER      = 0x0020
const CAM_MOVE_FIX_IN_PLACE           = 0x0040
const CAM_MOVE_UNKNOWN_8              = 0x0080
const CAM_MOVING_INTO_MODE            = 0x0100
const CAM_MOVE_STARTED_EXITING_C_UP   = 0x0200
const CAM_MOVE_UNKNOWN_11             = 0x0400
const CAM_MOVE_INIT_CAMERA            = 0x0800
const CAM_MOVE_ALREADY_ZOOMED_OUT     = 0x1000
const CAM_MOVE_C_UP_MODE              = 0x2000
const CAM_MOVE_SUBMERGED              = 0x4000
export const CAM_MOVE_PAUSE_SCREEN           = 0x8000

const CAM_MOVE_ROTATE                 = (CAM_MOVE_ROTATE_RIGHT | CAM_MOVE_ROTATE_LEFT | CAM_MOVE_RETURN_TO_MIDDLE)
/// These flags force the camera to move a certain way
const CAM_MOVE_RESTRICT               = (CAM_MOVE_ENTERED_ROTATE_SURFACE | CAM_MOVE_METAL_BELOW_WATER | CAM_MOVE_FIX_IN_PLACE | CAM_MOVE_UNKNOWN_8)

const CAM_SOUND_C_UP_PLAYED           = 0x01
const CAM_SOUND_MARIO_ACTIVE          = 0x02
const CAM_SOUND_NORMAL_ACTIVE         = 0x04
const CAM_SOUND_UNUSED_SELECT_MARIO   = 0x08
const CAM_SOUND_UNUSED_SELECT_FIXED   = 0x10
const CAM_SOUND_FIXED_ACTIVE          = 0x20

const CAM_FLAG_SMOOTH_MOVEMENT        = 0x0001
const CAM_FLAG_BLOCK_SMOOTH_MOVEMENT  = 0x0002
const CAM_FLAG_FRAME_AFTER_CAM_INIT   = 0x0004
const CAM_FLAG_CHANGED_PARTRACK_INDEX = 0x0008
const CAM_FLAG_CCM_SLIDE_SHORTCUT     = 0x0010
const CAM_FLAG_CAM_NEAR_WALL          = 0x0020
const CAM_FLAG_SLEEPING               = 0x0040
const CAM_FLAG_UNUSED_7               = 0x0080
const CAM_FLAG_UNUSED_8               = 0x0100
const CAM_FLAG_COLLIDED_WITH_WALL     = 0x0200
const CAM_FLAG_START_TRANSITION       = 0x0400
const CAM_FLAG_TRANSITION_OUT_OF_C_UP = 0x0800
const CAM_FLAG_BLOCK_AREA_PROCESSING  = 0x1000
const CAM_FLAG_UNUSED_13              = 0x2000
const CAM_FLAG_UNUSED_CUTSCENE_ACTIVE = 0x4000
const CAM_FLAG_BEHIND_MARIO_POST_DOOR = 0x8000

export const CAM_STATUS_NONE   = 0
export const CAM_STATUS_MARIO  = 1 << 0
export const CAM_STATUS_LAKITU = 1 << 1
export const CAM_STATUS_FIXED  = 1 << 2
export const CAM_STATUS_C_DOWN = 1 << 3
export const CAM_STATUS_C_UP   = 1 << 4

export const CAM_STATUS_MODE_GROUP   = (CAM_STATUS_MARIO | CAM_STATUS_LAKITU | CAM_STATUS_FIXED)
export const CAM_STATUS_C_MODE_GROUP = (CAM_STATUS_C_DOWN | CAM_STATUS_C_UP)

const L_CBUTTONS =	0x0002
const R_CBUTTONS =	0x0001
const D_CBUTTONS =	0x0004
const U_CBUTTONS =	0x0008
export const CBUTTON_MASK = (U_CBUTTONS | D_CBUTTONS | L_CBUTTONS | R_CBUTTONS)

export const CAM_EVENT_CANNON              = 1
export const CAM_EVENT_SHOT_FROM_CANNON    = 2
export const CAM_EVENT_UNUSED_3            = 3
export const CAM_EVENT_BOWSER_INIT         = 4
export const CAM_EVENT_DOOR_WARP           = 5
export const CAM_EVENT_DOOR                = 6
export const CAM_EVENT_BOWSER_JUMP         = 7
export const CAM_EVENT_BOWSER_THROW_BOUNCE = 8
export const CAM_EVENT_START_INTRO         = 9
export const CAM_EVENT_START_GRAND_STAR    = 10
export const CAM_EVENT_START_ENDING        = 11
export const CAM_EVENT_START_END_WAVING    = 12
export const CAM_EVENT_START_CREDITS       = 13

// EXPERIMENTAL, lose "CAMERA" prefix
export const EVENT_CANNON              = 1
export const EVENT_SHOT_FROM_CANNON    = 2
export const EVENT_UNUSED_3            = 3
export const EVENT_BOWSER_INIT         = 4
export const EVENT_DOOR_WARP           = 5
export const EVENT_DOOR                = 6
export const EVENT_BOWSER_JUMP         = 7
export const EVENT_BOWSER_THROW_BOUNCE = 8
export const EVENT_START_INTRO         = 9
export const EVENT_START_GRAND_STAR    = 10
export const EVENT_START_ENDING        = 11
export const EVENT_START_END_WAVING    = 12
export const EVENT_START_CREDITS       = 13

export const SHAKE_ATTACK         = 1
export const SHAKE_GROUND_POUND   = 2
export const SHAKE_SMALL_DAMAGE   = 3
export const SHAKE_MED_DAMAGE     = 4
export const SHAKE_LARGE_DAMAGE   = 5
export const SHAKE_HIT_FROM_BELOW = 8
export const SHAKE_FALL_DAMAGE    = 9
export const SHAKE_SHOCK          = 10

export const SHAKE_ENV_EXPLOSION           = 1
export const SHAKE_ENV_BOWSER_THROW_BOUNCE = 2
export const SHAKE_ENV_BOWSER_JUMP         = 3
export const SHAKE_ENV_UNUSED_5            = 5
export const SHAKE_ENV_UNUSED_6            = 6
export const SHAKE_ENV_UNUSED_7            = 7
export const SHAKE_ENV_PYRAMID_EXPLODE     = 8
export const SHAKE_ENV_JRB_SHIP_DRAIN      = 9
export const SHAKE_ENV_FALLING_BITS_PLAT   = 10

export const SHAKE_FOV_SMALL     = 1
export const SHAKE_FOV_UNUSED    = 2
export const SHAKE_FOV_MEDIUM    = 3
export const SHAKE_FOV_LARGE     = 4

export const SHAKE_POS_SMALL         = 1
export const SHAKE_POS_MEDIUM        = 2
export const SHAKE_POS_LARGE         = 3
export const SHAKE_POS_BOWLING_BALL  = 4

export const CUTSCENE_DOOR_PULL            = 130
export const CUTSCENE_DOOR_PUSH            = 131
export const CUTSCENE_ENTER_CANNON         = 133
export const CUTSCENE_ENTER_PAINTING       = 134
export const CUTSCENE_DEATH_EXIT           = 135
export const CUTSCENE_DOOR_WARP            = 139
export const CUTSCENE_DOOR_PULL_MODE       = 140
export const CUTSCENE_DOOR_PUSH_MODE       = 141
export const CUTSCENE_INTRO_PEACH          = 142
export const CUTSCENE_DANCE_ROTATE         = 143
export const CUTSCENE_ENTER_BOWSER_ARENA   = 144
export const CUTSCENE_0F_UNUSED            = 145 // Never activated, stub cutscene functions
export const CUTSCENE_UNUSED_EXIT          = 147 // Never activated
export const CUTSCENE_SLIDING_DOORS_OPEN   = 149
export const CUTSCENE_PREPARE_CANNON       = 150
export const CUTSCENE_UNLOCK_KEY_DOOR      = 151
export const CUTSCENE_STANDING_DEATH       = 152
export const CUTSCENE_DEATH_ON_STOMACH     = 153
export const CUTSCENE_DEATH_ON_BACK        = 154
export const CUTSCENE_QUICKSAND_DEATH      = 155
export const CUTSCENE_SUFFOCATION_DEATH    = 156
export const CUTSCENE_EXIT_BOWSER_SUCC     = 157
export const CUTSCENE_EXIT_BOWSER_DEATH    = 158 // Never activated
export const CUTSCENE_WATER_DEATH          = 159 // Not in cutscene switch
export const CUTSCENE_EXIT_PAINTING_SUCC   = 160
export const CUTSCENE_CAP_SWITCH_PRESS     = 161
export const CUTSCENE_DIALOG               = 162
export const CUTSCENE_RACE_DIALOG          = 163
export const CUTSCENE_ENTER_PYRAMID_TOP    = 164
export const CUTSCENE_DANCE_FLY_AWAY       = 165
export const CUTSCENE_DANCE_CLOSEUP        = 166
export const CUTSCENE_KEY_DANCE            = 167
export const CUTSCENE_SSL_PYRAMID_EXPLODE  = 168 // Never activated
export const CUTSCENE_EXIT_SPECIAL_SUCC    = 169
export const CUTSCENE_NONPAINTING_DEATH    = 170
export const CUTSCENE_READ_MESSAGE         = 171
export const CUTSCENE_ENDING               = 172
export const CUTSCENE_STAR_SPAWN           = 173
export const CUTSCENE_GRAND_STAR           = 174
export const CUTSCENE_DANCE_DEFAULT        = 175
export const CUTSCENE_RED_COIN_STAR_SPAWN  = 176
export const CUTSCENE_END_WAVING           = 177
export const CUTSCENE_CREDITS              = 178
export const CUTSCENE_EXIT_WATERFALL       = 179
export const CUTSCENE_EXIT_FALL_WMOTR      = 180
export const CUTSCENE_ENTER_POOL           = 181

/**
 * Stop the cutscene.
 */
export const CUTSCENE_STOP         = 0x8000
/**
 * Play the current cutscene shot indefinitely (until canceled).
 */
export const CUTSCENE_LOOP         = 0x7FFF

export const HAND_CAM_SHAKE_OFF                  = 0
export const HAND_CAM_SHAKE_CUTSCENE             = 1
export const HAND_CAM_SHAKE_UNUSED               = 2
export const HAND_CAM_SHAKE_HANG_OWL             = 3
export const HAND_CAM_SHAKE_HIGH                 = 4
export const HAND_CAM_SHAKE_STAR_DANCE           = 5
export const HAND_CAM_SHAKE_LOW                  = 6

const DOOR_DEFAULT         = 0
const DOOR_LEAVING_SPECIAL = 1
const DOOR_ENTER_LOBBY     = 2

// Might rename these to reflect what they are used for instead "SET_45" etc.
export const CAM_FOV_SET_45      = 1
export const CAM_FOV_DEFAULT     = 2
export const CAM_FOV_APP_45      = 4
export const CAM_FOV_SET_30      = 5
export const CAM_FOV_APP_20      = 6
export const CAM_FOV_BBH         = 7
export const CAM_FOV_APP_80      = 9
export const CAM_FOV_APP_30      = 10
export const CAM_FOV_APP_60      = 11
export const CAM_FOV_ZOOM_30     = 12
export const CAM_FOV_SET_29      = 13

export const ZOOMOUT_AREA_MASK = (level1Area1, level1Area2, level1Area3, level1Area4,
                                  level2Area1, level2Area2, level2Area3, level2Area4) => {
    return ((level2Area4) << 7 |
            (level2Area3) << 6 |
            (level2Area2) << 5 |
            (level2Area1) << 4 |
            (level1Area4) << 3 |
            (level1Area3) << 2 |
            (level1Area2) << 1 |
            (level1Area1) << 0)
}

export const NULL_TRIGGER = {area: 0, event: null, centerX: 0, centerY: 0, centerZ: 0, boundsX: 0, boundsY: 0, boundsZ: 0, boundsYaw: 0}

export const DROT = (value, index) => {return ((value >> (32 - (index + 1) * 8)) & 0xF0) >> 4 | ((value >> (32 - (index + 1) * 8)) & 0x0F) << 4}
export const DANCE_ENTRY = (c) => { return [DROT(c, 0), DROT(c, 1), DROT(c, 2)] }
export const DEFINE_COURSES_END = () => {}
export const DEFINE_COURSE = (_, cutscenes) => { return DANCE_ENTRY(cutscenes) }
export const DEFINE_BONUS_COURSE = (_, cutscenes) => { return DANCE_ENTRY(cutscenes) }

export const gIntroLakituStartToPipeFocus = [
    { index: 0,  speed: 32, point: [ 58, -250, 346 ] },
    { index: 1,  speed: 50, point: [ -159, -382, 224 ] },
    { index: 2,  speed: 37, point: [ 0, -277, 237 ] },
    { index: 3,  speed: 15, point: [ 1, -44, 245 ] },
    { index: 4,  speed: 35, point: [ 0, -89, 228 ] },
    { index: 5,  speed: 15, point: [ 28, 3, 259 ] },
    { index: 6,  speed: 25, point: [ -38, -201, 371 ] },
    { index: 7,  speed: 20, point: [ -642, 118, 652 ] },
    { index: 8,  speed: 25, point: [ 103, -90, 861 ] },
    { index: 9,  speed: 25, point: [ 294, 145, 579 ] },
    { index: 10, speed: 30, point: [ 220, -42, 500 ] },
    { index: 11, speed: 20, point: [ 10, -134, 200 ] },
    { index: 12, speed: 20, point: [ -143, -145, 351 ] },
    { index: 13, speed: 14, point: [ -256, -65, 528 ] },
    { index: 14, speed: 20, point: [ -251, -52, 459 ] },
    { index: 15, speed: 25, point: [ -382, 520, 395 ] },
    { index: 16, speed: 25, point: [ -341, 240, 653 ] },
    { index: 17, speed: 5,  point: [ -262, 700, 143 ] },
    { index: 18, speed: 15, point: [ -760, 32, 27 ] },
    { index: 19, speed: 20, point: [ -756, -6, -26 ] },
    { index: 20, speed: 20, point: [ -613, 5, 424 ] },
    { index: 21, speed: 20, point: [ -22, -100, 312 ] },
    { index: 22, speed: 25, point: [ 212, 80, 61 ] },
    { index: 23, speed: 20, point: [ 230, -28, 230 ] },
    { index: 24, speed: 35, point: [ -83, -51, 303 ] },
    { index: 25, speed: 17, point: [ 126, 90, 640 ] },
    { index: 26, speed: 9,  point: [ 158, 95, 763 ] },
    { index: 27, speed: 8,  point: [ 113, -25, 1033 ] },
    { index: 28, speed: 20, point: [ 57, -53, 1291 ] },
    { index: 29, speed: 15, point: [ 73, -34, 1350 ] },
    { index: 30, speed: 7,  point: [ 0, 96, 1400 ] },
    { index: 31, speed: 8,  point: [ -59, 269, 1450 ] },
    { index: 32, speed: 15, point: [ 57, 1705, 1500 ] },
    { index: 0,  speed: 15, point: [ -227, 511, 1550 ] },
    { index: -1, speed: 15, point: [ -227, 511, 1600 ] }
]

export const gIntroLakituStartToPipeOffsetFromCamera = [
    { index: 0,  speed: 0, point: [ -46, 87, -15 ] },
    { index: 1,  speed: 0, point: [ -38, 91, -11 ] },
    { index: 2,  speed: 0, point: [ -31, 93, -13 ] },
    { index: 3,  speed: 0, point: [ -50, 84, -16 ] },
    { index: 4,  speed: 0, point: [ -52, 83, -17 ] },
    { index: 5,  speed: 0, point: [ -10, 99, 3 ] },
    { index: 6,  speed: 0, point: [ -54, 83, -10 ] },
    { index: 7,  speed: 0, point: [ -31, 85, -40 ] },
    { index: 8,  speed: 0, point: [ -34, 91, 19 ] },
    { index: 9,  speed: 0, point: [ -9, 95, 28 ] },
    { index: 10, speed: 0, point: [ 17, 72, 66 ] },
    { index: 11, speed: 0, point: [ 88, -7, 45 ] },
    { index: 12, speed: 0, point: [ 96, -6, -26 ] },
    { index: 13, speed: 0, point: [ 56, -1, -82 ] },
    { index: 14, speed: 0, point: [ 40, 65, -63 ] },
    { index: 15, speed: 0, point: [ -26, -3, -96 ] },
    { index: 16, speed: 0, point: [ 92, 82, 19 ] }, 
    { index: 17, speed: 0, point: [ 92, 32, 19 ] },
    { index: 18, speed: 0, point: [ 92, 32, 19 ] },
    { index: 19, speed: 0, point: [ 92, 102, 19 ] },
    { index: 20, speed: 0, point: [ -69, 59, -70 ] },
    { index: 21, speed: 0, point: [ -77, 109, -61 ] },
    { index: 22, speed: 0, point: [ -87, 59, -46 ] },
    { index: 23, speed: 0, point: [ -99, -3, 11 ] },
    { index: 24, speed: 0, point: [ -99, -11, 5 ] },
    { index: 25, speed: 0, point: [ -97, -6, 19 ] },
    { index: 26, speed: 0, point: [ -97, 22, -7 ] },
    { index: 27, speed: 0, point: [ -98, -11, -13 ] },
    { index: 28, speed: 0, point: [ -97, -11, 19 ] },
    { index: 29, speed: 0, point: [ -91, -11, 38 ] },
    { index: 30, speed: 0, point: [ -76, -11, 63 ] },
    { index: 31, speed: 0, point: [ -13, 33, 93 ] },
    { index: 32, speed: 0, point: [ 51, -11, 84 ] },
    { index: 33, speed: 0, point: [ 51, -11, 84 ] },
    { index: -1, speed: 0, point: [ 51, -11, 84 ] }
]

const sIntroPipeToDialogPosition = [
    {index: 0, speed: 0, point: [-785, 625, 4527]},
    {index: 1, speed: 0, point: [-785, 625, 4527]},
    {index: 2, speed: 0, point: [-1286, 644, 4376]},
    {index: 3, speed: 0, point: [-1286, 623, 4387]},
    {index: 4, speed: 0, point: [-1286, 388, 3963]},
    {index: 5, speed: 0, point: [-1286, 358, 4093]},
    {index: 6, speed: 0, point: [-1386, 354, 4159]},
    {index: 7, speed: 0, point: [-1477, 306, 4223]},
    {index: 8, speed: 0, point: [-1540, 299, 4378]},
    {index: 9, speed: 0, point: [-1473, 316, 4574]},
    {index: 0, speed: 0, point: [-1328, 485, 5017]},
    {index: 0, speed: 0, point: [-1328, 485, 5017]},
    {index: 0, speed: 0, point: [-1328, 485, 5017]},
    {index: -1, speed: 0, point: [-1328, 485, 5017]},
]

const sIntroPipeToDialogFocus = [
    {index: 0, speed: 20, point: [-1248, 450, 4596]},
    {index: 1, speed: 59, point: [-1258, 485, 4606]},
    {index: 2, speed: 59, point: [-1379, 344, 4769]},
    {index: 3, speed: 20, point: [-1335, 366, 4815]},
    {index: 4, speed: 23, point: [-1315, 370, 4450]},
    {index: 5, speed: 40, point: [-1322, 333, 4591]},
    {index: 6, speed: 25, point: [-1185, 329, 4616]},
    {index: 7, speed: 21, point: [-1059, 380, 4487]},
    {index: 8, speed: 14, point: [-1086, 421, 4206]},
    {index: 9, speed: 21, point: [-1321, 346, 4098]},
    {index: 0, speed: 0, point: [-1328, 385, 4354]},
    {index: 0, speed: 0, point: [-1328, 385, 4354]},
    {index: 0, speed: 0, point: [-1328, 385, 4354]},
    {index: -1, speed: 0, point: [-1328, 385, 4354]},
]

class Camera {
    constructor() {
        this.floor = null

        this.gCameraMovementFlags = 0

        this.gPlayerCameraState = {
            action: 0,
            pos: [0, 0, 0],
            faceAngle: [0, 0, 0],
            headRotation: [0, 0, 0],
            cameraEvent: 0,
            usedObj: null
        }

        this.sFOVState = {
            fovFunc: 0,
            fov: 0.0
        }

        this.sMarioGeometry = {
            currFloor: {},
            currFloorHeight: 0,
            currFloorType: 0,
            currCeil: {},
            currCeilType: 0,
            currCeilHeight: 0,
            prevFloor: {},
            prevFloorHeight: 0,
            prevFloorType: 0,
            prevCeil: {},
            prevCeilHeight: 0,
            prevCeilType: 0,
            /// Unused, but recalculated every frame
            waterHeight: 0,
        }

        this.sModeTransition = {
             posPitch: 0,
             posYaw: 0,
             posDist: 0,
             focPitch: 0,
             focYaw: 0,
             focDist: 0,
             framesLeft: 0,
             marioPos: [0,0,0]
        }

        this.sModeTransitions = [
            null,
            this.update_radial_camera.bind(this),
            this.update_outward_radial_camera.bind(this),
            this.update_behind_mario_camera.bind(this),
            this.update_mario_camera.bind(this),
            null,
            this.update_c_up.bind(this),
            this.update_mario_camera.bind(this),
            this.nop_update_water_camera.bind(this),
            this.update_slide_or_0f_camera.bind(this),
            this.update_in_cannon.bind(this),
            this.update_boss_fight_camera.bind(this),
            this.update_parallel_tracking_camera.bind(this),
            this.update_fixed_camera.bind(this),
            this.update_8_directions_camera.bind(this),
            this.update_slide_or_0f_camera.bind(this),
            this.update_mario_camera.bind(this),
            this.update_spiral_stairs_camera.bind(this),
        ]

        this.sCameraStoreCutscene = {
            pos: [0, 0, 0],
            focus: [0, 0, 0],
            panDist: 0,
            cannonYOffset: 0
        }

        this.sCameraStoreCUp = {
            pos: [0, 0, 0],
            focus: [0, 0, 0],
            panDist: 0,
            cannonYOffset: 0
        }

        this.gLakituState = {
            curFocus: [0.0, 0.0, 0.0],
            curPos: [0.0, 0.0, 0.0],
            goalFocus: [0.0, 0.0, 0.0],
            goalPos: [0.0, 0.0, 0.0],

            shakeMagnitude: [0.0, 0.0, 0.0],
            shakePitchPhase: 0,
            shakeYawPhase: 0,
            shakeRollPhase: 0,

            mode: 0,
            defMode: 0,

            roll: 0, yaw: 0,
            nextYaw: 0,

            focus: [0, 0, 0],
            pos: [0, 0, 0],

            lastFrameAction: 0,
            focHSpeed: 0, focVSpeed: 0,
            posHSpeed: 0, posVSpeed: 0,
            keyDanceRoll: 0
        }

        this.sParTrackPath = {
            startOfPath: 0,
            pos: [0, 0, 0],
            distThresh: 0,
            zoom: 0
        }

        this.sParTrackIndex = 0

        this.sParTrackTransOff = {
            pos: [0, 0, 0],
            focus: [0, 0, 0],
            panDist: 0,
            cannonYOffset: 0,
        }

        this.sModeInfo = {
            newMode: 0,
            lastMode: 0,
            max: 0,
            frame: 0,
            transitionStart: {
                focus: [0, 0, 0],
                pos: [0, 0, 0],
                dist: 0,
                pitch: 0,
                yaw: 0
            },
            transitionEnd: {
                focus: [0, 0, 0],
                pos: [0, 0, 0],
                dist: 0,
                pitch: 0,
                yaw: 0
            }
        }
        
        this.sCutsceneSplineSegment = 0
        this.sCutsceneSplineSegmentProgress = 0

        this.sZoomOutAreaMasks = [
            ZOOMOUT_AREA_MASK(0,0,0,0, 0,0,0,0), // Unused         | Unused
            ZOOMOUT_AREA_MASK(0,0,0,0, 0,0,0,0), // Unused         | Unused
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // BBH            | CCM
            ZOOMOUT_AREA_MASK(0,0,0,0, 0,0,0,0), // CASTLE_INSIDE  | HMC
            ZOOMOUT_AREA_MASK(1,0,0,0, 1,0,0,0), // SSL            | BOB
            ZOOMOUT_AREA_MASK(1,0,0,0, 1,0,0,0), // SL             | WDW
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,1,0,0), // JRB            | THI
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // TTC            | RR
            ZOOMOUT_AREA_MASK(1,0,0,0, 1,0,0,0), // CASTLE_GROUNDS | BITDW
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // VCUTM          | BITFS
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // SA             | BITS
            ZOOMOUT_AREA_MASK(1,0,0,0, 0,0,0,0), // LLL            | DDD
            ZOOMOUT_AREA_MASK(1,0,0,0, 0,0,0,0), // WF             | ENDING
            ZOOMOUT_AREA_MASK(0,0,0,0, 0,0,0,0), // COURTYARD      | PSS
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // COTMC          | TOTWC
            ZOOMOUT_AREA_MASK(1,0,0,0, 1,0,0,0), // BOWSER_1       | WMOTR
            ZOOMOUT_AREA_MASK(0,0,0,0, 1,0,0,0), // Unused         | BOWSER_2
            ZOOMOUT_AREA_MASK(1,0,0,0, 0,0,0,0), // BOWSER_3       | Unused
            ZOOMOUT_AREA_MASK(1,0,0,0, 0,0,0,0), // TTM            | Unused
            ZOOMOUT_AREA_MASK(0,0,0,0, 0,0,0,0), // Unused         | Unused
        ]

        this.sHandheldShakeSpline = [
            {index: -1, unused: 0, point: [0, 0, 0]},
            {index: -1, unused: 0, point: [0, 0, 0]},
            {index: -1, unused: 0, point: [0, 0, 0]},
            {index: -1, unused: 0, point: [0, 0, 0]},
        ]
        this.sHandheldShakeTimer = 0.0
        this.sHandheldShakePitch = 0
        this.sHandheldShakeYaw = 0
        this.sHandheldShakeRoll = 0

        this.sBBHLibraryParTrackPath = [
            {startOfPath: 1, pos: [-929.0, 1619.0, -1490.0], distThresh: 50.0, zoom: 0.0},
            {startOfPath: 0, pos: [-2118.0, 1619.0, -1490.0], distThresh: 50.0, zoom: 0.0},
            {startOfPath: 0, pos: [0.0, 0.0, 0.0], distThresh: 0.0, zoom: 0.0},
        ]

        // {area: , event: , centerX: , centerY: , centerZ: , boundsX: , boundsY: , boundsZ: , boundsYaw: },
        
        /**
         * The SL triggers operate camera behavior in front of the snowman who blows air.
         * The first sets a 8 direction mode, while the latter (which encompasses the former)
         * sets free roam mode.
         *
         * This behavior is exploitable, since the ranges assume that Mario must pass through the latter on
         * exit. Using hyperspeed, the earlier area can be directly exited from, keeping the changes it applies.
         */
        this.sCamSL = [
            {area: 1, event: this.cam_sl_snowman_head_8dir.bind(this), centerX: 1119, centerY: 3584, centerZ: 1125, boundsX: 1177, boundsY: 358, boundsZ: 358, boundsYaw: -0x1D27},
            // This trigger surrounds the previous one
            {area: 1, event: this.cam_sl_free_roam.bind(this), centerX: 1119, centerY: 3584, centerZ: 1125, boundsX: 4096, boundsY: 4096, boundsZ: 4096, boundsYaw: -0x1D27},
            NULL_TRIGGER
        ]

        /**
         * The THI triggers are specifically for the tunnel near the start of the Huge Island.
         * The first helps the camera from getting stuck on the starting side, the latter aligns with the
         * tunnel. Both sides achieve their effect by editing the camera yaw.
         */
        this.sCamTHI = [
            {area: 1, event: this.cam_thi_move_cam_through_tunnel.bind(this), centerX: -4609, centerY: -2969, centerZ: 6448, boundsX: 100, boundsY: 300, boundsZ: 300, boundsYaw: 0},
            {area: 1, event: this.cam_thi_look_through_tunnel.bind(this), centerX: -4809, centerY: -2969, centerZ: 6448, boundsX: 100, boundsY: 300, boundsZ: 300, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The HMC triggers are mostly for warping the camera below platforms, but the second trigger is used to
         * start the cutscene for entering the CotMC pool.
         */
        this.sCamHMC = [
            {area: 1, event: this.cam_hmc_enter_maze.bind(this), centerX: 1996, centerY: 102, centerZ: 0, boundsX: 205, boundsY: 100, boundsZ: 205, boundsYaw: 0},
            {area: 1, event: this.cam_castle_hmc_start_pool_cutscene.bind(this), centerX: 3350, centerY: -4689, centerZ: 4800, boundsX: 600, boundsY: 50, boundsZ: 600, boundsYaw: 0},
            {area: 1, event: this.cam_hmc_elevator_black_hole.bind(this), centerX: -3278, centerY: 1236, centerZ: 1379, boundsX: 358, boundsY: 200, boundsZ: 358, boundsYaw: 0},
            {area: 1, event: this.cam_hmc_elevator_maze_emergency_exit.bind(this), centerX: -2816, centerY: 2055, centerZ: -2560, boundsX: 358, boundsY: 200, boundsZ: 358, boundsYaw: 0},
            {area: 1, event: this.cam_hmc_elevator_lake, centerX: -3532, centerY: 1543, centerZ: -7040, boundsX: 358, boundsY: 200, boundsZ: 358, boundsYaw: 0},
            {area: 1, event: this.cam_hmc_elevator_maze, centerX: -972, centerY: 1543, centerZ: -7347, boundsX: 358, boundsY: 200, boundsZ: 358, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The SSL triggers are for starting the enter pyramid top cutscene,
         * setting close mode in the middle of the pyramid, and setting the boss fight camera mode to outward
         * radial.
         */
        this.sCamSSL = [
            {area: 1, event: this.cam_ssl_enter_pyramid_top.bind(this), centerX: -2048, centerY: 1080, centerZ: -1024, boundsX: 150, boundsY: 150, boundsZ: 150, boundsYaw: 0},
            {area: 2, event: this.cam_ssl_pyramid_center.bind(this), centerX: 0, centerY: -104, centerZ: -104, boundsX: 1248, boundsY: 1536, boundsZ: 2950, boundsYaw: 0},
            {area: 2, event: this.cam_ssl_pyramid_center.bind(this), centerX: 0, centerY: 2500, centerZ: 256, boundsX: 515, boundsY: 5000, boundsZ: 515, boundsYaw: 0},
            {area: 3, event: this.cam_ssl_boss_room.bind(this), centerX: 0, centerY: -1534, centerZ: -2040, boundsX: 1000, boundsY: 800, boundsZ: 1000, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The RR triggers are for changing between fixed and 8 direction mode when entering / leaving the building at
         * the end of the ride.
         */
        this.sCamRR = [
            {area: 1, event: this.cam_rr_exit_building_side.bind(this), centerX: -4197, centerY: 3819, centerZ: -3087, boundsX: 1769, boundsY: 1490, boundsZ: 342, boundsYaw: 0},
            {area: 1, event: this.cam_rr_enter_building_side.bind(this), centerX: -4197, centerY: 3819, centerZ: -3771, boundsX: 769, boundsY: 490, boundsZ: 342, boundsYaw: 0},
            {area: 1, event: this.cam_rr_enter_building_window.bind(this), centerX: -5603, centerY: 4834, centerZ: -5209, boundsX: 300, boundsY: 600, boundsZ: 591, boundsYaw: 0},
            {area: 1, event: this.cam_rr_enter_building.bind(this), centerX: -2609, centerY: 3730, centerZ: -5463, boundsX: 300, boundsY: 650, boundsZ: 577, boundsYaw: 0},
            {area: 1, event: this.cam_rr_exit_building_top.bind(this), centerX: -4196, centerY: 7343, centerZ: -5155, boundsX: 4500, boundsY: 1000, boundsZ: 4500, boundsYaw: 0},
            {area: 1, event: this.cam_rr_enter_building.bind(this), centerX: -4196, centerY: 6043, centerZ: -5155, boundsX: 500, boundsY: 300, boundsZ: 500, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The CotMC trigger is only used to prevent fix Lakitu in place when Mario exits through the waterfall.
         */
        this.sCamCotMC = [
            {area: 1, event: this.cam_cotmc_exit_waterfall.bind(this), centerX: 0, centerY: 1500, centerZ: 3500, boundsX: 550, boundsY: 10000, boundsZ: 1500, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The CCM triggers are used to set the flag that says when Mario is in the slide shortcut.
         */
        this.sCamCCM = [
            {area: 2, event: this.cam_ccm_enter_slide_shortcut.bind(this), centerX: -4846, centerY: 2061, centerZ: 27, boundsX: 1229, boundsY: 1342, boundsZ: 396, boundsYaw: 0},
            {area: 2, event: this.cam_ccm_leave_slide_shortcut.bind(this), centerX: -6412, centerY: -3917, centerZ: -6246, boundsX: 307, boundsY: 185, boundsZ: 132, boundsYaw: 0},
            NULL_TRIGGER
        ]

        /**
         * The Castle triggers are used to set the camera to fixed mode when entering the lobby, and to set it
         * to close mode when leaving it. They also set the mode to spiral staircase.
         *
         * There are two triggers for looking up and down straight staircases when Mario is at the start,
         * and one trigger that starts the enter pool cutscene when Mario enters HMC.
         */
        this.sCamCastle = [
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -1100, centerY: 657, centerZ: -1346, boundsX: 300, boundsY: 150, boundsZ: 300, boundsYaw: 0},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: -1099, centerY: 657, centerZ: -803, boundsX: 300, boundsY: 150, boundsZ: 300, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -2304, centerY: -264, centerZ: -4072, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -2304, centerY: 145, centerZ: -1344, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: -2304, centerY: 145, centerZ: -802, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            //! Sets the camera mode when leaving secret aquarium
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: 2816, centerY: 1200, centerZ: -256, boundsX: 100, boundsY: 100, boundsZ: 100, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: 256, centerY: -161, centerZ: -4226, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: 256, centerY: 145, centerZ: -1344, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: 256, centerY: 145, centerZ: -802, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -1023, centerY: 44, centerZ: -4870, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -459, centerY: 145, centerZ: -1020, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0x6000},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: -85, centerY: 145, centerZ: -627, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -1589, centerY: 145, centerZ: -1020, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: -0x6000},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: -1963, centerY: 145, centerZ: -627, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_leave_lobby_sliding_door.bind(this), centerX: -2838, centerY: 657, centerZ: -1659, boundsX: 200, boundsY: 150, boundsZ: 150, boundsYaw: 0x2000},
            {area: 1, event: this.cam_castle_enter_lobby_sliding_door.bind(this), centerX: -2319, centerY: 512, centerZ: -1266, boundsX: 300, boundsY: 150, boundsZ: 300, boundsYaw: 0x2000},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: 844, centerY: 759, centerZ: -1657, boundsX: 40, boundsY: 150, boundsZ: 40, boundsYaw: -0x2000},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: 442, centerY: 759, centerZ: -1292, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: -0x2000},
            {area: 2, event: this.cam_castle_enter_spiral_stairs.bind(this), centerX: -1000, centerY: 657, centerZ: 1740, boundsX: 200, boundsY: 300, boundsZ: 200, boundsYaw: 0},
            {area: 2, event: this.cam_castle_enter_spiral_stairs.bind(this), centerX: -996, centerY: 1348, centerZ: 1814, boundsX: 200, boundsY: 300, boundsZ: 200, boundsYaw: 0},
            {area: 2, event: this.cam_castle_close_mode.bind(this), centerX: -946, centerY: 657, centerZ: 2721, boundsX: 50, boundsY: 150, boundsZ: 50, boundsYaw: 0},
            {area: 2, event: this.cam_castle_close_mode.bind(this), centerX: -996, centerY: 1348, centerZ: 907, boundsX: 50, boundsY: 150, boundsZ: 50, boundsYaw: 0},
            {area: 2, event: this.cam_castle_close_mode.bind(this), centerX: -997, centerY: 1348, centerZ: 1450, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -4942, centerY: 452, centerZ: -461, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0x4000},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -3393, centerY: 350, centerZ: -793, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0x4000},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: -2851, centerY: 350, centerZ: -792, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0x4000},
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: 803, centerY: 350, centerZ: -228, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: -0x4000},
            //! Duplicate camera trigger outside JRB door
            {area: 1, event: this.cam_castle_enter_lobby.bind(this), centerX: 803, centerY: 350, centerZ: -228, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: -0x4000},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: 1345, centerY: 350, centerZ: -229, boundsX: 140, boundsY: 150, boundsZ: 140, boundsYaw: 0x4000},
            {area: 1, event: this.cam_castle_close_mode.bind(this), centerX: -946, centerY: -929, centerZ: 622, boundsX: 300, boundsY: 150, boundsZ: 300, boundsYaw: 0},
            {area: 2, event: this.cam_castle_look_upstairs.bind(this), centerX: -205, centerY: 1456, centerZ: 2508, boundsX: 210, boundsY: 928, boundsZ: 718, boundsYaw: 0},
            {area: 1, event: this.cam_castle_basement_look_downstairs.bind(this), centerX: -1027, centerY: -587, centerZ: -718, boundsX: 318, boundsY: 486, boundsZ: 577, boundsYaw: 0},
            {area: 1, event: this.cam_castle_lobby_entrance.bind(this), centerX: -1023, centerY: 376, centerZ: 1830, boundsX: 300, boundsY: 400, boundsZ: 300, boundsYaw: 0},
            {area: 3, event: this.cam_castle_hmc_start_pool_cutscene.bind(this), centerX: 2485, centerY: -1689, centerZ: -2659, boundsX: 600, boundsY: 50, boundsZ: 600, boundsYaw: 0},
            NULL_TRIGGER
        ]
        /**
         * The BBH triggers are the most complex, they cause the camera to enter fixed mode for each room,
         * transition between rooms, and enter free roam when outside.
         *
         * The triggers are also responsible for warping the camera below platforms.
         */
        // {area: 1, event: cam_bbh_.bind(this), centerX: , centerY: , centerZ: , boundsX: , boundsY: , boundsZ: , boundsYaw: 0},
        this.sCamBBH = [
            {area: 1, event: this.cam_bbh_enter_front_door.bind(this), centerX: 742, centerY: 0, centerZ: 2369, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_leave_front_door.bind(this), centerX: 741, centerY: 0, centerZ: 1827, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 222, centerY: 0, centerZ: 1458, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 222, centerY: 0, centerZ: 639, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 435, centerY: 0, centerZ: 222, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1613, centerY: 0, centerZ: 222, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1827, centerY: 0, centerZ: 1459, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: -495, centerY: 819, centerZ: 222, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: -495, centerY: 819, centerZ: 640, boundsX: 250, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 179, centerY: 819, centerZ: 222, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1613, centerY: 819, centerZ: 222, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1827, centerY: 819, centerZ: 486, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1827, centerY: 819, centerZ: 1818, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_lower.bind(this), centerX: 2369, centerY: 0, centerZ: 1459, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_lower.bind(this), centerX: 3354, centerY: 0, centerZ: 1347, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_lower.bind(this), centerX: 2867, centerY: 514, centerZ: 1843, boundsX: 512, boundsY: 102, boundsZ: 409, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_4.bind(this), centerX: 3354, centerY: 0, centerZ: 804, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_4.bind(this), centerX: 1613, centerY: 0, centerZ: -320, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_8.bind(this), centerX: 435, centerY: 0, centerZ: -320, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_5_library.bind(this), centerX: -2021, centerY: 0, centerZ: 803, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_5_library.bind(this), centerX: -320, centerY: 0, centerZ: 640, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_5_library_to_hidden_transition.bind(this), centerX: -1536, centerY: 358, centerZ: -254, boundsX: 716, boundsY: 363, boundsZ: 102, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_5_hidden_to_library_transition.bind(this), centerX: -1536, centerY: 358, centerZ: -459, boundsX: 716, boundsY: 363, boundsZ: 102, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_5_hidden.bind(this), centerX: -1560, centerY: 0, centerZ: -1314, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_3.bind(this), centerX: -320, centerY: 0, centerZ: 1459, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_3.bind(this), centerX: -2021, centerY: 0, centerZ: 1345, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_library.bind(this), centerX: 2369, centerY: 819, centerZ: 486, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_library.bind(this), centerX: 2369, centerY: 1741, centerZ: 486, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_library_to_trapdoor_transition.bind(this), centerX: 2867, centerY: 1228, centerZ: 1174, boundsX: 716, boundsY: 414, boundsZ: 102, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_trapdoor_transition.bind(this), centerX: 2867, centerY: 1228, centerZ: 1378, boundsX: 716, boundsY: 414, boundsZ: 102, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_2_trapdoor.bind(this), centerX: 2369, centerY: 819, centerZ: 1818, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_9_attic.bind(this), centerX: 1829, centerY: 1741, centerZ: 486, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_9_attic.bind(this), centerX: 741, centerY: 1741, centerZ: 1587, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_9_attic_transition.bind(this), centerX: 102, centerY: 2048, centerZ: -191, boundsX: 100, boundsY: 310, boundsZ: 307, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_9_mr_i_transition.bind(this), centerX: 409, centerY: 2048, centerZ: -191, boundsX: 100, boundsY: 310, boundsZ: 307, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_13_balcony.bind(this), centerX: 742, centerY: 1922, centerZ: 2164, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_fall_off_roof.bind(this), centerX: 587, centerY: 1322, centerZ: 2677, boundsX: 1000, boundsY: 400, boundsZ: 600, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_3.bind(this), centerX: -1037, centerY: 819, centerZ: 1408, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_3.bind(this), centerX: -1970, centerY: 1024, centerZ: 1345, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_8.bind(this), centerX: 179, centerY: 819, centerZ: -320, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_7_mr_i.bind(this), centerX: 1613, centerY: 819, centerZ: -320, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_7_mr_i_to_coffins_transition.bind(this), centerX: 2099, centerY: 1228, centerZ: -819, boundsX: 102, boundsY: 414, boundsZ: 716, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_7_coffins_to_mr_i_transition.bind(this), centerX: 2304, centerY: 1228, centerZ: -819, boundsX: 102, boundsY: 414, boundsZ: 716, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_6.bind(this), centerX: -1037, centerY: 819, centerZ: 640, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_6.bind(this), centerX: -1970, centerY: 1024, centerZ: 803, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_1.bind(this), centerX: 1827, centerY: 819, centerZ: 640, boundsX: 200, boundsY: 200, boundsZ: 200, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_fall_into_pool.bind(this), centerX: 2355, centerY: -1112, centerZ: -193, boundsX: 1228, boundsY: 500, boundsZ: 1343, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_fall_into_pool.bind(this), centerX: 2355, centerY: -1727, centerZ: 1410, boundsX: 1228, boundsY: 500, boundsZ: 705, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_elevator_room_lower.bind(this), centerX: 0, centerY: -2457, centerZ: 1827, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_elevator_room_lower.bind(this), centerX: 0, centerY: -2457, centerZ: 2369, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_elevator_room_lower.bind(this), centerX: 0, centerY: -2457, centerZ: 4929, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_elevator_room_lower.bind(this), centerX: 0, centerY: -2457, centerZ: 4387, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_0_back_entrance.bind(this), centerX: 1887, centerY: -2457, centerZ: 204, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_0.bind(this), centerX: 1272, centerY: -2457, centerZ: 204, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_0.bind(this), centerX: -1681, centerY: -2457, centerZ: 204, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_0_back_entrance.bind(this), centerX: -2296, centerY: -2457, centerZ: 204, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_elevator.bind(this), centerX: -2939, centerY: -605, centerZ: 5367, boundsX: 800, boundsY: 100, boundsZ: 800, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_12_upper.bind(this), centerX: -2939, centerY: -205, centerZ: 5367, boundsX: 300, boundsY: 100, boundsZ: 300, boundsYaw: 0},
            {area: 1, event: this.cam_bbh_room_12_upper.bind(this), centerX: -2332, centerY: -204, centerZ: 4714, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0x6000},
            {area: 1, event: this.cam_bbh_room_0_back_entrance.bind(this), centerX: -1939, centerY: -204, centerZ: 4340, boundsX: 250, boundsY: 200, boundsZ: 250, boundsYaw: 0x6000},
            NULL_TRIGGER
        ]

        this.sCameraTriggers = [
            null, null, null, null, this.sCamBBH, this.sCamCCM,
            this.sCamCastle, this.sCamHMC, this.sCamSSL, null, this.sCamSL, null,
            null, this.sCamTHI, null, this.sCamRR, null, null, null, null, null,
            null, null, null, null, null, null, null, this.sCamCotMC, null, null,
            null, null, null, null, null, null, null, null, null, null,
        ]

        this.sBobCreditsSplinePositions = [
            {index: 1, speed: 0, point: [5984, 3255, 4975]},
            {index: 2, speed: 0, point: [4423, 3315, 1888]},
            {index: 3, speed: 0, point: [776, 2740, -1825]},
            {index: 4, speed: 0, point: [-146, 3894, -3167]},
            {index: -1, speed: 0, point: [741, 4387, -5474]},
        ]

        this.sBobCreditsSplineFocus = [
            {index: 0, speed: 30, point: [5817, 3306, 4507]},
            {index: 0, speed: 40, point: [4025, 3378, 1593]},
            {index: 0, speed: 50, point: [1088, 2652, -2205]},
            {index: 0, speed: 60, point: [205, 3959, -3517]},
            {index: -1, speed: 60, point: [1231, 4400, -5649]},
        ]

        this.sWfCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-301, 1399, 2643]},
            {index: 0, speed: 0, point: [-182, 2374, 4572]},
            {index: 0, speed: 0, point: [4696, 3864, 413]},
            {index: 0, speed: 0, point: [1738, 4891, -1516]},
            {index: -1, speed: 0, point: [1783, 4891, -1516]},
        ]

        this.sWfCreditsSplineFocus = [
            {index: 1, speed: 30, point: [-249, 1484, 2153]},
            {index: 2, speed: 40, point: [-200, 2470, 4082]},
            {index: 3, speed: 40, point: [4200, 3916, 370]},
            {index: 4, speed: 40, point: [1523, 4976, -1072]},
            {index: -1, speed: 50, point: [1523, 4976, -1072]},
        ]

        this.sJrbCreditsSplinePositions = [
            {index: 0, speed: 0, point: [5538, -4272, 2376]},
            {index: 0, speed: 0, point: [5997, -3303, 2261]},
            {index: 0, speed: 0, point: [6345, -3255, 2179]},
            {index: 0, speed: 0, point: [6345, -3255, 2179]},
            {index: -1, speed: 0, point: [6694, -3203, 2116]},
        ]

        this.sJrbCreditsSplineFocus = [
            {index: 0, speed: 50, point: [5261, -4683, 2443]},
            {index: 0, speed: 50, point: [5726, -3675, 2456]},
            {index: 0, speed: 50, point: [6268, -2817, 2409]},
            {index: 0, speed: 50, point: [6596, -2866, 2369]},
            {index: -1, speed: 50, point: [7186, -3153, 2041]},
        ]

        this.sCcmSlideCreditsSplinePositions = [
            {index: 1, speed: 0, point: [-6324, 6745, -5626]},
            {index: 1, speed: 0, point: [-6324, 6745, -5626]},
            {index: 2, speed: 0, point: [-6108, 6762, -5770]},
            {index: 3, speed: 0, point: [-5771, 6787, -5962]},
            {index: -1, speed: 0, point: [-5672, 6790, -5979]},
        ]

        this.sCcmSlideCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-5911, 6758, -5908]},
            {index: 1, speed: 50, point: [-5911, 6758, -5908]},
            {index: 2, speed: 50, point: [-5652, 6814, -5968]},
            {index: 3, speed: 50, point: [-5277, 6801, -6043]},
            {index: -1, speed: 50, point: [-5179, 6804, -6060]},
        ]

        this.sBbhCreditsSplinePositions = [
            {index: 1, speed: 0, point: [1088, 341, 2447]},
            {index: 2, speed: 0, point: [1338, 610, 2808]},
            {index: 3, speed: 0, point: [2267, 1612, 2966]},
            {index: -1, speed: 0, point: [2296, 1913, 2990]},
        ]

        this.sBbhCreditsSplineFocus = [
            {index: 1, speed: 50, point: [1160, 263, 1958]},
            {index: 2, speed: 50, point: [1034, 472, 2436]},
            {index: 3, speed: 50, point: [1915, 1833, 2688]},
            {index: -1, speed: 50, point: [2134, 2316, 2742]},
        ]

        this.sHmcCreditsSplinePositions = [
            {index: 1, speed: 0, point: [-5952, 1807, -5882]},
            {index: 2, speed: 0, point: [-5623, 1749, -4863]},
            {index: 3, speed: 0, point: [-5472, 1955, -2520]},
            {index: 4, speed: 0, point: [-5544, 1187, -1085]},
            {index: -1, speed: 0, point: [-5547, 391, -721]},
        ]

        this.sHmcCreditsSplineFocus = [
            {index: 1, speed: 210, point: [-5952, 1884, -6376]},
            {index: 2, speed: 58, point: [-5891, 1711, -5283]},
            {index: 3, speed: 30, point: [-5595, 1699, -2108]},
            {index: 4, speed: 31, point: [-5546, 794, -777]},
            {index: -1, speed: 31, point: [-5548, -85, -572]},
        ]

        this.sThiWigglerCreditsSplinePositions = [
            {index: 1, speed: 0, point: [-1411, 2474, -1276]},
            {index: 2, speed: 0, point: [-1606, 2479, -434]},
            {index: -1, speed: 0, point: [-1170, 2122, 1337]},
        ]

        this.sThiWigglerCreditsSplineFocus = [
            {index: 1, speed: 50, point: [-1053, 2512, -928]},
            {index: 2, speed: 50, point: [-1234, 2377, -114]},
            {index: -1, speed: 50, point: [-758, 2147, 1054]},
        ]

        this.sVolcanoCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-1445, 1094, 1617]},
            {index: 0, speed: 0, point: [-1509, 649, 871]},
            {index: 0, speed: 0, point: [-1133, 420, -248]},
            {index: 0, speed: 0, point: [-778, 359, -1052]},
            {index: 0, speed: 0, point: [-565, 260, -1730]},
            {index: -1, speed: 0, point: [1274, 473, -275]},
        ]

        this.sVolcanoCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-1500, 757, 1251]},
            {index: 0, speed: 50, point: [-1401, 439, 431]},
            {index: 0, speed: 50, point: [-749, 270, -532]},
            {index: 0, speed: 50, point: [-396, 270, -1363]},
            {index: 0, speed: 50, point: [-321, 143, -2151]},
            {index: -1, speed: 50, point: [1002, 460, -694]},
        ]

        this.sSslCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-4262, 4658, -5015]},
            {index: 0, speed: 0, point: [-3274, 2963, -4661]},
            {index: 0, speed: 0, point: [-2568, 812, -6528]},
            {index: 0, speed: 0, point: [-414, 660, -7232]},
            {index: 0, speed: 0, point: [1466, 660, -6898]},
            {index: -1, speed: 0, point: [2724, 660, -6298]},
        ]

        this.sSslCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-4083, 4277, -4745]},
            {index: 0, speed: 50, point: [-2975, 2574, -4759]},
            {index: 0, speed: 50, point: [-2343, 736, -6088]},
            {index: 0, speed: 50, point: [-535, 572, -6755]},
            {index: 0, speed: 50, point: [1311, 597, -6427]},
            {index: -1, speed: 50, point: [2448, 612, -5884]},
        ]

        this.sDddCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-874, -4933, 366]},
            {index: 0, speed: 0, point: [-1463, -4782, 963]},
            {index: 0, speed: 0, point: [-1893, -4684, 1303]},
            {index: 0, speed: 0, point: [-2818, -4503, 1583]},
            {index: 0, speed: 0, point: [-4095, -2924, 730]},
            {index: 0, speed: 0, point: [-4737, -1594, -63]},
            {index: -1, speed: 0, point: [-4681, -1084, -623]},
        ]

        this.sDddCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-1276, -4683, 622]},
            {index: 0, speed: 50, point: [-1858, -4407, 1097]},
            {index: 0, speed: 50, point: [-2324, -4332, 1318]},
            {index: 0, speed: 50, point: [-3138, -4048, 1434]},
            {index: 0, speed: 50, point: [-4353, -2444, 533]},
            {index: 0, speed: 50, point: [-4807, -1169, -436]},
            {index: -1, speed: 50, point: [-4665, -664, -1007]},
        ]

        this.sSlCreditsSplinePositions = [
            {index: 0, speed: 0, point: [939, 6654, 6196]},
            {index: 0, speed: 0, point: [1873, 5160, 3714]},
            {index: 0, speed: 0, point: [3120, 3564, 1314]},
            {index: -1, speed: 0, point: [2881, 4231, 573]},
        ]

        this.sSlCreditsSplineFocus = [
            {index: 0, speed: 50, point: [875, 6411, 5763]},
            {index: 0, speed: 50, point: [1659, 4951, 3313]},
            {index: 0, speed: 50, point: [2630, 3565, 1215]},
            {index: -1, speed: 50, point: [2417, 4056, 639]},
        ]

        this.sWdwCreditsSplinePositions = [
            {index: 0, speed: 0, point: [3927, 2573, 3685]},
            {index: 0, speed: 0, point: [2389, 2054, 1210]},
            {index: 0, speed: 0, point: [2309, 2069, 22]},
            {index: -1, speed: 0, point: [2122, 2271, -979]},
        ]

        this.sWdwCreditsSplineFocus = [
            {index: 0, speed: 50, point: [3637, 2460, 3294]},
            {index: 0, speed: 50, point: [1984, 2067, 918]},
            {index: 0, speed: 50, point: [1941, 2255, -261]},
            {index: -1, speed: 50, point: [1779, 2587, -1158]},
        ]

        this.sTtmCreditsSplinePositions = [
            {index: 0, speed: 0, point: [386, 2535, 644]},
            {index: 0, speed: 0, point: [1105, 2576, 918]},
            {index: 0, speed: 0, point: [3565, 2261, 2098]},
            {index: 0, speed: 0, point: [6715, -2791, 4554]},
            {index: 0, speed: 0, point: [3917, -3130, 3656]},
            {index: -1, speed: 0, point: [3917, -3130, 3656]},
        ]

        this.sTtmCreditsSplineFocus = [
            {index: 1, speed: 50, point: [751, 2434, 318]},
            {index: 2, speed: 50, point: [768, 2382, 603]},
            {index: 3, speed: 50, point: [3115, 2086, 1969]},
            {index: 4, speed: 50, point: [6370, -3108, 4727]},
            {index: 5, speed: 50, point: [4172, -3385, 4001]},
            {index: -1, speed: 50, point: [4172, -3385, 4001]},
        ]

        this.sThiHugeCreditsSplinePositions = [
            {index: 1, speed: 0, point: [6990, -1000, -4858]},
            {index: 2, speed: 0, point: [7886, -1055, 2878]},
            {index: 3, speed: 0, point: [1952, -1481, 10920]},
            {index: 4, speed: 0, point: [-1684, -219, 2819]},
            {index: 5, speed: 0, point: [-2427, -131, 2755]},
            {index: 6, speed: 0, point: [-3246, 416, 3286]},
            {index: -1, speed: 0, point: [-3246, 416, 3286]},
        ]

        this.sThiHugeCreditsSplineFocus = [
            {index: 1, speed: 50, point: [7022, -965, -5356]},
            {index: 2, speed: 50, point: [7799, -915, 2405]},
            {index: 3, speed: 50, point: [1878, -1137, 10568]},
            {index: 4, speed: 50, point: [-1931, -308, 2394]},
            {index: 5, speed: 50, point: [-2066, -386, 2521]},
            {index: 6, speed: 50, point: [-2875, 182, 3045]},
            {index: -1, speed: 50, point: [-2875, 182, 3045]},
        ]

        this.sTtcCreditsSplinePositions = [
            {index: 1, speed: 0, point: [-1724, 277, -994]},
            {index: 2, speed: 0, point: [-1720, 456, -995]},
            {index: 3, speed: 0, point: [-1655, 810, -1014]},
            {index: -1, speed: 0, point: [-1753, 883, -1009]},
        ]

        this.sTtcCreditsSplineFocus = [
            {index: 1, speed: 50, point: [-1554, 742, -1063]},
            {index: 2, speed: 50, point: [-1245, 571, -1102]},
            {index: 3, speed: 50, point: [-1220, 603, -1151]},
            {index: -1, speed: 50, point: [-1412, 520, -1053]},
        ]

        this.sRrCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-1818, 4036, 97]},
            {index: 0, speed: 0, point: [-575, 3460, -505]},
            {index: 0, speed: 0, point: [1191, 3611, -1134]},
            {index: -1, speed: 0, point: [2701, 3777, -3686]},
        ]

        this.sRrCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-1376, 3885, -81]},
            {index: 0, speed: 50, point: [-146, 3343, -734]},
            {index: 0, speed: 50, point: [1570, 3446, -1415]},
            {index: -1, speed: 50, point: [2794, 3627, -3218]},
        ]

        this.sSaCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-295, -396, -585]},
            {index: 1, speed: 0, point: [-295, -396, -585]},
            {index: 2, speed: 0, point: [-292, -856, -573]},
            {index: 3, speed: 0, point: [-312, -856, -541]},
            {index: -1, speed: 0, point: [175, -856, -654]},
        ]

        this.sSaCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-175, -594, -142]},
            {index: 1, speed: 50, point: [-175, -594, -142]},
            {index: 2, speed: 50, point: [-195, -956, -92]},
            {index: 3, speed: 50, point: [-572, -956, -150]},
            {index: -1, speed: 50, point: [-307, -956, -537]},
        ]

        this.sCotmcCreditsSplinePositions = [
            {index: 0, speed: 0, point: [-296, 495, 1607]},
            {index: 0, speed: 0, point: [-430, 541, 654]},
            {index: 0, speed: 0, point: [-466, 601, -359]},
            {index: 0, speed: 0, point: [-217, 433, -1549]},
            {index: -1, speed: 0, point: [-95, 366, -2922]},
        ]

        this.sCotmcCreditsSplineFocus = [
            {index: 0, speed: 50, point: [-176, 483, 2092]},
            {index: 0, speed: 50, point: [-122, 392, 1019]},
            {index: 0, speed: 50, point: [-268, 450, -792]},
            {index: 0, speed: 50, point: [-172, 399, -2046]},
            {index: -1, speed: 50, point: [-51, 355, -3420]},
        ]

        this.sDddSubCreditsSplinePositions = [
            {index: 0, speed: 0, point: [4656, 2171, 5028]},
            {index: 0, speed: 0, point: [4548, 1182, 4596]},
            {index: 0, speed: 0, point: [5007, 813, 3257]},
            {index: 0, speed: 0, point: [5681, 648, 1060]},
            {index: -1, speed: 0, point: [4644, 774, 113]},
        ]

        this.sDddSubCreditsSplineFocus = [
            {index: 0, speed: 50, point: [4512, 2183, 4549]},
            {index: 0, speed: 50, point: [4327, 838, 4308]},
            {index: 0, speed: 50, point: [4774, 749, 2819]},
            {index: 0, speed: 50, point: [5279, 660, 763]},
            {index: -1, speed: 50, point: [4194, 885, -75]},
        ]

        this.sCcmOutsideCreditsSplinePositions = [
            {index: 1, speed: 0, point: [1427, -1387, 5409]},
            {index: 2, speed: 0, point: [-1646, -1536, 4526]},
            {index: 3, speed: 0, point: [-3852, -1448, 3913]},
            {index: -1, speed: 0, point: [-5199, -1366, 1886]},
        ]

        this.sCcmOutsideCreditsSplineFocus = [
            {index: 1, speed: 50, point: [958, -1481, 5262]},
            {index: 2, speed: 50, point: [-2123, -1600, 4391]},
            {index: 3, speed: 50, point: [-3957, -1401, 3426]},
            {index: -1, speed: 50, point: [-4730, -1215, 1795]},
        ]

        /******************************************************************************************************
         * Cutscenes
         ******************************************************************************************************/

        /**
         * Cutscene that plays when Mario beats the game.
         */
        this.sCutsceneEnding = [
            { shot: this.cutscene_ending_mario_fall.bind(this), duration: 170 }
        ]

        this.sCutsceneDoorWarp = [
            { shot: this.cutscene_door_start.bind(this), duration: 1 },
            { shot: this.cutscene_door_loop.bind(this), duration: CUTSCENE_LOOP }
        ]
    
        this.sCutsceneDoorPull = [
            { shot: this.cutscene_door_start.bind(this), duration: 1 },
            { shot: this.cutscene_door_fix_cam.bind(this), duration: 30 },
            { shot: this.cutscene_door_move_behind_mario.bind(this), duration: 1 },
            { shot: this.cutscene_door_follow_mario.bind(this), duration: 50 },
            { shot: this.cutscene_door_end.bind(this), duration: 0 }
        ]

        this.sCutsceneDoorPush = [
            { shot: this.cutscene_door_start.bind(this), duration: 1 },
            { shot: this.cutscene_door_fix_cam.bind(this), duration: 20 },
            { shot: this.cutscene_door_move_behind_mario.bind(this), duration: 1 },
            { shot: this.cutscene_door_follow_mario.bind(this), duration: 50 },
            { shot: this.cutscene_door_end.bind(this), duration: 0 }
        ]

        this.sCutsceneDoorPullMode = [
            { shot: this.cutscene_door_start.bind(this), duration: 1 },
            { shot: this.cutscene_door_fix_cam.bind(this), duration: 30 },
            { shot: this.cutscene_door_mode.bind(this), duration: CUTSCENE_LOOP }
        ]

        this.sCutsceneDoorPushMode = [
            { shot: this.cutscene_door_start.bind(this), duration: 1 },
            { shot: this.cutscene_door_fix_cam.bind(this), duration: 20 },
            { shot: this.cutscene_door_mode.bind(this), duration: CUTSCENE_LOOP }
        ]

        this.sCutsceneEnterCannon = [
            { shot: this.cutscene_enter_cannon_start.bind(this), duration: 1 },
            { shot: this.cutscene_enter_cannon_raise.bind(this), duration: 121 },
            { shot: this.cutscene_enter_cannon_end.bind(this), duration: 0 }
        ]

        this.sCutsceneStarSpawn = [
            { shot: this.cutscene_star_spawn.bind(this), duration: CUTSCENE_LOOP },
            { shot: this.cutscene_star_spawn_back.bind(this), duration: 15 },
            { shot: this.cutscene_star_spawn_end.bind(this), duration: 0 },
        ]

        this.sCutsceneExitPaintingSuccess = [
            { shot: this.cutscene_exit_painting.bind(this), duration: 180 },
            { shot: this.cutscene_exit_painting_end.bind(this), duration: 0 }
        ]

        this.sCutsceneUnlockKeyDoor = [
            { shot: this.cutscene_unlock_key_door.bind(this), duration: 200 },
            { shot: this.cutscene_double_doors_end.bind(this), duration: 0 }
        ]

        this.sCutsceneSlidingDoorsOpen = [
            { shot: this.cutscene_sliding_doors_open.bind(this), duration: 50 },
            { shot: this.cutscene_double_doors_end.bind(this), duration: 0 }
        ]

        this.sCutsceneIntroPeach = [
            { shot: this.cutscene_intro_peach_letter.bind(this), duration: CUTSCENE_LOOP },
            { shot: this.cutscene_intro_peach_reset_fov.bind(this), duration: 35 },
            { shot: this.cutscene_intro_peach_fly_to_pipe.bind(this), duration: 820 },
            { shot: this.cutscene_intro_peach_mario_appears.bind(this), duration: 270 },
            { shot: this.cutscene_intro_peach_dialog.bind(this), duration: CUTSCENE_LOOP }
        ]

        this.sCutsceneCapSwitchPress = [
            { shot: this.cutscene_cap_switch_press.bind(this), duration: CUTSCENE_LOOP }
        ]

        /* this.sCutsceneExitBowserSuccess = [
            { shot: this.cutscene_exit_bowser_succ.bind(this), duration: 190 },
            { shot: this.cutscene_non_painting_end.bind(this), duration: 0 }
        ] */

        /* this.sCutsceneExitBowserDeath = [
            { shot: this.cutscene_exit_bowser_death.bind(this), duration: 120 },
            { shot: this.cutscene_non_painting_end.bind(this), duration: 0 }
        ] */

        /* this.sCutsceneExitSpecialSuccess = [
            { shot: this.cutscene_exit_non_painting_succ.bind(this), duration: 163 },
            { shot: this.cutscene_non_painting_end.bind(this), duration: 0 }
        ] */

        /* this.sCutsceneNonPaintingDeath = [
            { shot: this.cutscene_non_painting_death.bind(this), duration: 120 },
            { shot: this.cutscene_non_painting_end.bind(this), duration: 0 }
        ] */

        this.sCutsceneDialog = [
            { shot: this.cutscene_dialog.bind(this), duration: CUTSCENE_LOOP },
            { shot: this.cutscene_dialog_set_flag.bind(this), duration: 15 },
            { shot: this.cutscene_dialog_end.bind(this), duration: 0 }
        ]

        this.sCutsceneReadMessage = [
            { shot: this.cutscene_read_message.bind(this), duration: CUTSCENE_LOOP },
            { shot: this.cutscene_read_message_set_flag.bind(this), duration: 15 },
            { shot: this.cutscene_read_message_end.bind(this), duration: 0 }
        ]
        
        this.sCutsceneVars = [
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
            { point: [0, 0, 0], unusedPoint: [0, 0, 0], angle: [0, 0, 0] },
        ]

        this.cutsceneShots = [
            [ CUTSCENE_STAR_SPAWN, this.sCutsceneStarSpawn ],
            // [ CUTSCENE_RED_COIN_STAR_SPAWN, this.sCutsceneRedCoinStarSpawn ],
            // [ CUTSCENE_ENDING, this.sCutsceneEnding ],
            // [ CUTSCENE_GRAND_STAR, this.sCutsceneGrandStar ],
            [ CUTSCENE_DOOR_WARP, this.sCutsceneDoorWarp ],
            [ CUTSCENE_DOOR_PULL, this.sCutsceneDoorPull ],
            [ CUTSCENE_DOOR_PUSH, this.sCutsceneDoorPush ],
            // [ CUTSCENE_DOOR_PULL_MODE, this.sCutsceneDoorPullMode ],
            // [ CUTSCENE_DOOR_PUSH_MODE, this.sCutsceneDoorPushMode ],
            [ CUTSCENE_ENTER_CANNON, this.sCutsceneEnterCannon ],
            // [ CUTSCENE_ENTER_PAINTING, this.sCutsceneEnterPainting ],
            // [ CUTSCENE_DEATH_EXIT, this.sCutsceneDeathExit ],
            [ CUTSCENE_EXIT_PAINTING_SUCC, this.sCutsceneExitPaintingSuccess ],
            // [ CUTSCENE_UNUSED_EXIT,  this.sCutsceneUnusedExit ],
            [ CUTSCENE_INTRO_PEACH, this.sCutsceneIntroPeach ],
            // [ CUTSCENE_ENTER_BOWSER_ARENA, this.sCutsceneEnterBowserArena ],
            // [ CUTSCENE_DANCE_ROTATE, this.sCutsceneDanceDefaultRotate ],
            // [ CUTSCENE_DANCE_DEFAULT, this.sCutsceneDanceDefaultRotate ],
            // [ CUTSCENE_DANCE_FLY_AWAY, this.sCutsceneDanceFlyAway ],
            // [ CUTSCENE_DANCE_CLOSEUP, this.sCutsceneDanceCloseup ],
            // [ CUTSCENE_KEY_DANCE, this.sCutsceneKeyDance ],
            // [ CUTSCENE_0F_UNUSED, this.sCutsceneUnused ],
            // [ CUTSCENE_END_WAVING, this.sCutsceneEndWaving ],
            // [ CUTSCENE_CREDITS, this.sCutsceneCredits ],
            [ CUTSCENE_CAP_SWITCH_PRESS, this.sCutsceneCapSwitchPress ],
            [ CUTSCENE_SLIDING_DOORS_OPEN, this.sCutsceneSlidingDoorsOpen ],
            // [ CUTSCENE_PREPARE_CANNON, this.sCutscenePrepareCannon ],
            [ CUTSCENE_UNLOCK_KEY_DOOR, this.sCutsceneUnlockKeyDoor ],
            // [ CUTSCENE_STANDING_DEATH, this.sCutsceneStandingDeath ],
            // [ CUTSCENE_ENTER_POOL, this.sCutsceneEnterPool ],
            // [ CUTSCENE_DEATH_ON_STOMACH, this.sCutsceneDeathStomach ],
            // [ CUTSCENE_DEATH_ON_BACK, this.sCutsceneDeathOnBack ],
            // [ CUTSCENE_QUICKSAND_DEATH, this.sCutsceneQuicksandDeath ],
            // [ CUTSCENE_SUFFOCATION_DEATH, this.sCutsceneSuffocation ],
            // [ CUTSCENE_EXIT_BOWSER_SUCC, this.sCutsceneExitBowserSuccess ],
            // [ CUTSCENE_EXIT_BOWSER_DEATH, this.sCutsceneExitBowserDeath ],
            // [ CUTSCENE_EXIT_SPECIAL_SUCC, this.sCutsceneExitSpecialSuccess ],
            // [ CUTSCENE_EXIT_WATERFALL, this.sCutsceneExitWaterfall ],
            // [ CUTSCENE_EXIT_FALL_WMOTR, this.sCutsceneFallToCastleGrounds ],
            // [ CUTSCENE_NONPAINTING_DEATH, this.sCutsceneNonPaintingDeath ],
            [ CUTSCENE_DIALOG, this.sCutsceneDialog ],
            [ CUTSCENE_READ_MESSAGE, this.sCutsceneReadMessage ],
            // [ CUTSCENE_RACE_DIALOG, this.sCutsceneDialog ],
            // [ CUTSCENE_ENTER_PYRAMID_TOP, this.sCutsceneEnterPyramidTop ],
            // [ CUTSCENE_SSL_PYRAMID_EXPLODE, this.sCutscenePyramidTopExplode ],
        ]
        this.sCurCreditsSplinePos = Array(32).fill({})
        this.sCurCreditsSplineFocus = Array(32).fill({})

        this.sOldPosition = [0, 0, 0]
        this.sOldFocus = [0, 0, 0]
        this.sObjectCutscene = 0
        this.gRecentCutscene = 0
        this.sFixedModeBasePosition = [ 646.0, 143.0, -1513.0 ]
        this.sCutsceneDialogResponse = DIALOG_RESPONSE_NONE
        this.sCameraYawAfterDoorCutscene = 0
        this.sHandheldShakeMag = 0
        this.sAvoidYawVel = 0
        this.sHandheldShakeInc = 0.0
        this.sDanceCutsceneIndexTable = [ 0x44, 0x44, 0x44, 0x04 ]
        this.sDanceCutsceneTable = [CUTSCENE_DANCE_FLY_AWAY, CUTSCENE_DANCE_ROTATE, CUTSCENE_DANCE_CLOSEUP, CUTSCENE_KEY_DANCE, CUTSCENE_DANCE_DEFAULT,
                                    false,                   false,                 false,                  false,              true,]
    }

    /**
     * Starts a camera shake triggered by an interaction
     */
    set_camera_shake_from_hit(shake) {
        switch (shake) {
            case SHAKE_ATTACK:
                // Makes the camera stop for a bit
                this.gLakituState.focHSpeed = 0
                this.gLakituState.posHSpeed = 0
                break

            case SHAKE_FALL_DAMAGE:
                this.set_camera_pitch_shake(0x60, 0x3, 0x8000)
                this.set_camera_roll_shake(0x60, 0x3, 0x8000)
                break

            case SHAKE_GROUND_POUND:
                this.set_camera_pitch_shake(0x60, 0xC, 0x8000)
                break

            case SHAKE_SMALL_DAMAGE:
                if (this.gPlayerCameraState.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
                    this.set_camera_yaw_shake(0x200, 0x10, 0x1000)
                    this.set_camera_roll_shake(0x400, 0x20, 0x1000)
                    this.set_fov_shake(0x100, 0x30, 0x8000)
                } else {
                    this.set_camera_yaw_shake(0x80, 0x8, 0x4000)
                    this.set_camera_roll_shake(0x80, 0x8, 0x4000)
                    this.set_fov_shake(0x100, 0x30, 0x8000)
                }

                this.gLakituState.focHSpeed = 0
                this.gLakituState.posHSpeed = 0
                break

            case SHAKE_MED_DAMAGE:
                if (this.gPlayerCameraState.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
                    this.set_camera_yaw_shake(0x400, 0x20, 0x1000)
                    this.set_camera_roll_shake(0x600, 0x30, 0x1000)
                    this.set_fov_shake(0x180, 0x40, 0x8000)
                } else {
                    this.set_camera_yaw_shake(0x100, 0x10, 0x4000)
                    this.set_camera_roll_shake(0x100, 0x10, 0x4000)
                    this.set_fov_shake(0x180, 0x40, 0x8000)
                }

                this.gLakituState.focHSpeed = 0
                this.gLakituState.posHSpeed = 0
                break

            case SHAKE_LARGE_DAMAGE:
                if (this.gPlayerCameraState.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
                    this.set_camera_yaw_shake(0x600, 0x30, 0x1000)
                    this.set_camera_roll_shake(0x800, 0x40, 0x1000)
                    this.set_fov_shake(0x200, 0x50, 0x8000)
                } else {
                    this.set_camera_yaw_shake(0x180, 0x20, 0x4000)
                    this.set_camera_roll_shake(0x200, 0x20, 0x4000)
                    this.set_fov_shake(0x200, 0x50, 0x8000)
                }

                this.gLakituState.focHSpeed = 0
                this.gLakituState.posHSpeed = 0
                break

            case SHAKE_HIT_FROM_BELOW:
                this.gLakituState.focHSpeed = 0.07
                this.gLakituState.posHSpeed = 0.07
                break

            case SHAKE_SHOCK:
                this.set_camera_pitch_shake(random_float() * 64.0, 0x8, 0x8000)
                this.set_camera_yaw_shake(random_float() * 64.0, 0x8, 0x8000)
                break

            default: throw "broken camera shake - " + shake
        }
    }

    /**
     * Start a shake from the environment
     */
    set_environmental_camera_shake(shake) {
        switch (shake) {
            case SHAKE_ENV_EXPLOSION:
                this.set_camera_pitch_shake(0x60, 0x8, 0x4000)
                break
            case SHAKE_ENV_BOWSER_THROW_BOUNCE:
                this.set_camera_pitch_shake(0xC0, 0x8, 0x4000);
                break;
    
            case SHAKE_ENV_BOWSER_JUMP:
                this.set_camera_pitch_shake(0x100, 0x8, 0x3000);
                break;
    
            case SHAKE_ENV_UNUSED_6:
                this.set_camera_roll_shake(0x80, 0x10, 0x3000);
                break;
        
            case SHAKE_ENV_UNUSED_7:
                this.set_camera_pitch_shake(0x20, 0x8, 0x8000);
                break;
        
            case SHAKE_ENV_PYRAMID_EXPLODE:
                this.set_camera_pitch_shake(0x40, 0x8, 0x8000);
                break;
        
            case SHAKE_ENV_JRB_SHIP_DRAIN:
                this.set_camera_pitch_shake(0x20, 0x8, 0x8000);
                this.set_camera_roll_shake(0x400, 0x10, 0x100);
                break;
        
            case SHAKE_ENV_FALLING_BITS_PLAT:
                this.set_camera_pitch_shake(0x40, 0x2, 0x8000);
                break;
        
            case SHAKE_ENV_UNUSED_5:
                this.set_camera_yaw_shake(-0x200, 0x80, 0x200);
                break;
        }
    }

    /**
     * Starts a camera shake, but scales the amplitude by the point's distance from the camera
     */
     set_camera_shake_from_point(shake, posX, posY, posZ) {
        switch (shake) {
            case SHAKE_POS_BOWLING_BALL:
                this.set_pitch_shake_from_point(0x28, 0x8, 0x4000, 2000.0, posX, posY, posZ)
                break

            case SHAKE_POS_SMALL:
                this.set_pitch_shake_from_point(0x80, 0x8, 0x4000, 4000.0, posX, posY, posZ)
                this.set_fov_shake_from_point_preset(SHAKE_FOV_SMALL, posX, posY, posZ)
                break

            case SHAKE_POS_MEDIUM:
                this.set_pitch_shake_from_point(0xC0, 0x8, 0x4000, 6000.0, posX, posY, posZ)
                this.set_fov_shake_from_point_preset(SHAKE_FOV_MEDIUM, posX, posY, posZ)
                break

            case SHAKE_POS_LARGE:
                this.set_pitch_shake_from_point(0x100, 0x8, 0x3000, 8000.0, posX, posY, posZ)
                this.set_fov_shake_from_point_preset(SHAKE_FOV_LARGE, posX, posY, posZ)
                break
        }
    }

    /**
     * Calculates Mario's distance to the floor, or the water level if it is above the floor. Then:
     * `posOff` is set to the distance multiplied by posMul and bounded to [-posBound, posBound]
     * `focOff` is set to the distance multiplied by focMul and bounded to [-focBound, focBound]
     *
     * Notes:
     *      posMul is always 1.0f, focMul is always 0.9f
     *      both ranges are always 200.f
     *          Since focMul is 0.9, `focOff` is closer to the floor than `posOff`
     *      posOff and focOff are sometimes the same address, which just ignores the pos calculation
     *! Doesn't return anything, but required to match on -O2
    */
    calc_y_to_curr_floor(posOffWrapper, posMul, posBound, focOffWrapper, focMul, focBound) {
        let floorHeight = this.sMarioGeometry.currFloorHeight
        let waterHeight = SurfaceCollision.find_water_level(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[2])

        if (!(this.gPlayerCameraState.action & Mario.ACT_FLAG_METAL_WATER)) {
            if (floorHeight < waterHeight) {
                floorHeight = waterHeight
            }
        }

        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE) {
            if (this.gPlayerCameraState.currFloorHeight >= gMarioStates[0].usedObj.rawData[oPosY] && this.gPlayerCameraState.pos[1] < 0.7 * gMarioStates[0].usedObj.hitboxHeight + gMarioStates[0].usedObj.rawData[oPosY]) {
                posBound = 1200
            }
        }

        posOffWrapper.posOff = (floorHeight - this.gPlayerCameraState.pos[1]) * posMul

        if (posOffWrapper.posOff > posBound) {
            posOffWrapper.posOff = posBound
        }

        if (posOffWrapper.posOff < -posBound) {
            posOffWrapper.posOff = -posBound
        }

        focOffWrapper.focOff = (floorHeight - this.gPlayerCameraState.pos[1]) * focMul

        if (focOffWrapper.focOff > focBound) {
            focOffWrapper.focOff = focBound
        }

        if (focOffWrapper.focOff < -focBound) {
            focOffWrapper.focOff = -focBound
        }
    }

    focus_on_mario(focus, pos, posYOff, focYOff, dist, pitch, yaw) {
        let marioPos = [0, 0, 0]

        marioPos[0] = this.gPlayerCameraState.pos[0]
        marioPos[1] = this.gPlayerCameraState.pos[1] + posYOff
        marioPos[2] = this.gPlayerCameraState.pos[2]

        MathUtil.vec3f_set_dist_and_angle(marioPos, pos, dist, pitch + this.sLakituPitch, yaw)

        focus[0] = this.gPlayerCameraState.pos[0]
        focus[1] = this.gPlayerCameraState.pos[1] + focYOff
        focus[2] = this.gPlayerCameraState.pos[2]
    }

    /**
     * Set the camera's y coordinate to goalHeight, respecting floors and ceilings in the way
     */
    set_camera_height(c, goalHeight) {
        let marioFloorHeight
        let marioCeilHeight
        let camFloorHeight
        let baseOff = 125.0

        let camCeilHeight = SurfaceCollision.find_ceil(c.pos[0], this.gLakituState.goalPos[1] - 50.0, c.pos[2], {})

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_HANGING) {
            marioCeilHeight = this.sMarioGeometry.currCeilHeight
            marioFloorHeight = this.sMarioGeometry.currFloorHeight

            if (marioFloorHeight < marioCeilHeight - 400.0) {
                marioFloorHeight = marioCeilHeight - 400.0
            }

            goalHeight = marioFloorHeight + (marioCeilHeight - marioFloorHeight) * 0.4

            if (this.gPlayerCameraState.pos[1] - 400 > goalHeight) {
                goalHeight = this.gPlayerCameraState.pos[1] - 400
            }

            this.approach_camera_height(c, goalHeight, 5.0)
        } else {
            camFloorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1] + 100.0, c.pos[2], {})
            marioFloorHeight = baseOff + this.sMarioGeometry.currFloorHeight

            if (camFloorHeight < marioFloorHeight) {
                camFloorHeight = marioFloorHeight
            }
            if (goalHeight < camFloorHeight) {
                goalHeight = camFloorHeight
                c.pos[1] = goalHeight
            }
            // Warp camera to goalHeight if further than 1000 and Mario is stuck in the ground
            if (this.gPlayerCameraState.action == Mario.ACT_BUTT_STUCK_IN_GROUND ||
                this.gPlayerCameraState.action == Mario.ACT_HEAD_STUCK_IN_GROUND ||
                this.gPlayerCameraState.action == Mario.ACT_FEET_STUCK_IN_GROUND) {
                if (Math.abs(c.pos[1] - goalHeight) > 1000.0) {
                    c.pos[1] = goalHeight
                }
            }
            this.approach_camera_height(c, goalHeight, 20.0)
            if (camCeilHeight != CELL_HEIGHT_LIMIT) {
                camCeilHeight -= baseOff
                if ((c.pos[1] > camCeilHeight && this.sMarioGeometry.currFloorHeight + baseOff < camCeilHeight) ||
                (this.sMarioGeometry.currCeilHeight != CELL_HEIGHT_LIMIT && this.sMarioGeometry.currCeilHeight > camCeilHeight && c.pos[1] > camCeilHeight)) {
                    c.pos[1] = camCeilHeight
                }
            }
        }
    }

    /**
     * Pitch the camera down when the camera is facing down a slope
     */
    look_down_slopes(camYaw) {
        // Default pitch
        let pitch = 0x05B0
        // x and z offsets towards the camera
        let xOff = this.gPlayerCameraState.pos[0] + sins(camYaw) * 40.0
        let zOff = this.gPlayerCameraState.pos[2] + coss(camYaw) * 40.0

        let floorWrapper = {}
        let floorDY = SurfaceCollision.find_floor(xOff, this.gPlayerCameraState.pos[1], zOff, floorWrapper) - this.gPlayerCameraState.pos[1]
        let floor = floorWrapper.floor

        if (floor != null) {
            if (floor.type != SURFACE_WALL_MISC && floorDY > 0) {
                if (floor.normal.z == 0.0 && floorDY < 100.0) {
                    pitch = 0x05B0
                } else {
                    // Add the slope's angle of declination to the pitch
                    pitch += atan2s(40.0, floorDY)
                }
            }
        }

        return pitch
    }

    /**
     * Look ahead to the left or right in the direction the player is facing
     * The calculation for pan[0] could be simplified to:
     *      yaw = -yaw;
     *      pan[0] = sins(sMarioCamState->faceAngle[1] + yaw) * sins(0xC00) * dist;
     * Perhaps, early in development, the pan used to be calculated for both the x and z directions
     *
     * Since this function only affects the camera's focus, Mario's movement direction isn't affected.
     */
    pan_ahead_of_player(c) {
        const pan = [0,0,0]

        // Get distance and angle from camera to mario.
        const output = {}
        MathUtil.vec3f_get_dist_and_angle(c.pos, this.gPlayerCameraState.pos, output)
        let dist = output.dist; let pitch = output.pitch; let yaw = output.yaw

        // The camera will pan ahead up to about 30% of the camera's distance to mario.
        pan[2] = sins(0xC00) * dist

        this.rotate_in_xz(pan, pan, this.gPlayerCameraState.faceAngle[1])
        // rotate in the opposite direction
        yaw = -yaw
        this.rotate_in_xz(pan, pan, yaw)
        // Only pan left or right
        pan[2] = 0.0

        // If mario is long jumping, or on a flag pole (but not at the top), then pan in the opposite direction
        if (this.gPlayerCameraState.action == Mario.ACT_LONG_JUMP ||
            (this.gPlayerCameraState.action != Mario.ACT_TOP_OF_POLE && (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE))) {
            pan[0] = -pan[0]
        }

        // Slowly make the actual pan, sPanDistance, approach the calculated pan
        // If mario is sleeping, then don't pan
        let wrapper = { current: this.sPanDistance }
        if (this.sStatusFlags & CAM_FLAG_SLEEPING) {
            this.approach_f32_asymptotic_bool(wrapper, 0, 0.025)
        } else {
            this.approach_f32_asymptotic_bool(wrapper, pan[0], 0.025)
        }
        this.sPanDistance = wrapper.current

        // Now apply the pan. It's a dir vector to the left or right, rotated by the camera's yaw to mario
        pan[0] = this.sPanDistance
        yaw = -yaw
        this.rotate_in_xz(pan, pan, yaw)
        MathUtil.vec3f_add(c.focus, pan)
    }

    find_in_bounds_yaw_wdw_bob_thi(pos, origin, yaw) {
        switch (this.gCurrLevelArea) {
            case AREA_WDW_MAIN:
                yaw = this.clamp_positions_and_find_yaw(pos, origin, 4508.0, -3739.0, 4508.0, -3739.0)
                break
            case AREA_BOB:
                yaw = this.clamp_positions_and_find_yaw(pos, origin, 8000.0, -8000.0, 7050.0, -8000.0)
                break
            case AREA_THI_HUGE:
                yaw = this.clamp_positions_and_find_yaw(pos, origin, 8192.0, -8192.0, 8192.0, -8192.0)
                break
            case AREA_THI_TINY:
                yaw = this.clamp_positions_and_find_yaw(pos, origin, 2458.0, -2458.0, 2458.0, -2458.0)
                break
        }
        return yaw
    }

    /**
     * Rotates the camera around the area's center point.
     */
    update_radial_camera(c, focus, pos) {
        let cenDistX = this.gPlayerCameraState.pos[0] - c.areaCenX
        let cenDistZ = this.gPlayerCameraState.pos[2] - c.areaCenZ
        let camYaw = atan2s(cenDistZ, cenDistX) + this.sModeOffsetYaw
        let pitch = this.look_down_slopes(camYaw)
        let yOff = 125.0
        let baseDist = 1000.0

        this.sAreaYaw = camYaw - this.sModeOffsetYaw
        let wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        let posY = wrapper.posOff; let focusY = wrapper.focOff;
        this.focus_on_mario(focus, pos, posY + yOff, focusY + yOff, this.sLakituDist + baseDist, pitch, camYaw)
        camYaw = this.find_in_bounds_yaw_wdw_bob_thi(pos, focus, camYaw)
        
        return camYaw
    }

    /**
     * Update the camera during 8 directional mode
     */
    update_8_directions_camera(c, focus, pos) {
        let camYaw = this.s8DirModeBaseYaw + this.s8DirModeYawOffset
        let pitch = this.look_down_slopes(camYaw)
        let yOff = 125.0
        let baseDist = 1000.0

        this.sAreaYaw = camYaw
        let wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        let posY = wrapper.posOff; let focusY = wrapper.focOff;
        this.focus_on_mario(focus, pos, posY + yOff, focusY + yOff, this.sLakituDist + baseDist, pitch, camYaw)
        this.pan_ahead_of_player(c)
        if (this.gCurrLevelArea == AREA_DDD_SUB) {
            camYaw = this.clamp_positions_and_find_yaw(pos, focus, 6839.0, 995.0, 5994.0, -3945.0)
        }

        return camYaw
    }

    /**
     * Moves the camera for the radial and outward radial camera modes.
     *
     * If sModeOffsetYaw is 0, the camera points directly at the area center point.
     */
    radial_camera_move(c) {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

        let maxAreaYaw = DEGREES(60)
        let minAreaYaw = DEGREES(-60)
        let rotateSpeed = 0x1000
        let areaDistX = this.gPlayerCameraState.pos[0] - c.areaCenX
        let areaDistZ = this.gPlayerCameraState.pos[2] - c.areaCenZ
        let wrapper = {}

        // How much the camera's yaw changed
        let yawOffset = this.calculate_yaw(this.gPlayerCameraState.pos, c.pos) - atan2s(areaDistZ, areaDistX)

        if (yawOffset > maxAreaYaw) {yawOffset = maxAreaYaw}
        if (yawOffset < minAreaYaw) {yawOffset = minAreaYaw}

        // Check if Mario stepped on a surface that rotates the camera. For example, when Mario enters the
        // gate in BoB, the camera turns right to face up the hill path
        if (!(this.gCameraMovementFlags & CAM_MOVE_ROTATE)) {
            if (this.sMarioGeometry.currFloorType == SURFACE_CAMERA_MIDDLE && this.sMarioGeometry.prevFloorType != SURFACE_CAMERA_MIDDLE) {
                this.gCameraMovementFlags |= (CAM_MOVE_RETURN_TO_MIDDLE | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            if (this.sMarioGeometry.currFloorType == SURFACE_CAMERA_ROTATE_RIGHT && this.sMarioGeometry.prevFloorType != SURFACE_CAMERA_ROTATE_RIGHT) {
                this.gCameraMovementFlags |= (CAM_MOVE_ROTATE_RIGHT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            if (this.sMarioGeometry.currFloorType == SURFACE_CAMERA_ROTATE_LEFT && this.sMarioGeometry.prevFloorType != SURFACE_CAMERA_ROTATE_LEFT) {
                this.gCameraMovementFlags |= (CAM_MOVE_ROTATE_LEFT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
        }

        if (this.gCameraMovementFlags & CAM_MOVE_ENTERED_ROTATE_SURFACE) {
            rotateSpeed = 0x200
        }

        if (c.mode == CAMERA_MODE_OUTWARD_RADIAL) {
            areaDistX = -areaDistX
            areaDistZ = -areaDistZ
        }

        // Avoid obstructing walls
        let yawWrapper = {}
        let avoidStatus = this.rotate_camera_around_walls(c, c.pos, yawWrapper, 0x400)
        let avoidYaw = wrapper.yaw
        if (avoidStatus == 3) {
            if (avoidYaw - atan2s(areaDistZ, areaDistX) + DEGREES(90) < 0) {
                avoidYaw += DEGREES(180)
            }

            // We want to change sModeOffsetYaw so that the player is no longer obstructed by the wall.
            // So, we make avoidYaw relative to the yaw around the area center
            avoidYaw -= atan2s(areaDistZ, areaDistX)

            // Bound avoid yaw to radial mode constraints
            if (avoidYaw > DEGREES(105)) { avoidYaw = DEGREES(105) }
            if (avoidYaw < DEGREES(-105)) { avoidYaw = DEGREES(-105) }
        }

        if (this.gCameraMovementFlags & CAM_MOVE_RETURN_TO_MIDDLE) {
            yawWrapper.current = this.sModeOffsetYaw
            if (this.camera_approach_f32_symmetric_bool(yawWrapper, 0, rotateSpeed) == 0) {
                this.gCameraMovementFlags &= ~CAM_MOVE_RETURN_TO_MIDDLE
            }
            this.sModeOffsetYaw = yawWrapper.current
        } else {
            // Prevent the player from rotating into obstructing walls
            if ((this.gCameraMovementFlags & CAM_MOVE_ROTATE_RIGHT) && avoidStatus == 3 && avoidYaw + 0x10 < this.sModeOffsetYaw) {
                this.sModeOffsetYaw = avoidYaw
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_RIGHT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            if ((this.gCameraMovementFlags & CAM_MOVE_ROTATE_LEFT) && avoidStatus == 3 && avoidYaw + 0x10 > this.sModeOffsetYaw) {
                this.sModeOffsetYaw = avoidYaw
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_LEFT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            
            // If it's the first time rotating, just rotate to +-60 degrees
            yawWrapper.current = this.sModeOffsetYaw
            if (!(this.s2ndRotateFlags & CAM_MOVE_ROTATE_RIGHT) && (this.gCameraMovementFlags & CAM_MOVE_ROTATE_RIGHT) && this.camera_approach_s16_symmetric_bool(yawWrapper, maxAreaYaw, rotateSpeed) == 0) {
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_RIGHT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            if (!(this.s2ndRotateFlags & CAM_MOVE_ROTATE_LEFT) && (this.gCameraMovementFlags & CAM_MOVE_ROTATE_LEFT) && this.camera_approach_s16_symmetric_bool(yawWrapper, minAreaYaw, rotateSpeed) == 0) {
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_LEFT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
            }
            this.sModeOffsetYaw = yawWrapper.current

            // If it's the second time rotating, rotate all the way to +-105 degrees.
            if ((this.s2ndRotateFlags & CAM_MOVE_ROTATE_RIGHT) && (this.gCameraMovementFlags & CAM_MOVE_ROTATE_RIGHT) && this.camera_approach_s16_symmetric_bool(yawWrapper, DEGREES(105), rotateSpeed) == 0) {
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_RIGHT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
                this.s2ndRotateFlags &= ~CAM_MOVE_ROTATE_RIGHT
            }
            if ((this.s2ndRotateFlags & CAM_MOVE_ROTATE_LEFT) && (this.gCameraMovementFlags & CAM_MOVE_ROTATE_LEFT) && this.camera_approach_s16_symmetric_bool(yawWrapper, DEGREES(-105), rotateSpeed) == 0) {
                this.gCameraMovementFlags &= ~(CAM_MOVE_ROTATE_LEFT | CAM_MOVE_ENTERED_ROTATE_SURFACE)
                this.s2ndRotateFlags &= ~CAM_MOVE_ROTATE_LEFT
            }
            this.sModeOffsetYaw = yawWrapper.current
        }
        if (!(this.gCameraMovementFlags & CAM_MOVE_ROTATE)) {
            // If not rotating, rotate away from walls obscuring Mario from view
            if (avoidStatus == 3) {
                yawWrapper.current = this.sModeOffsetYaw
                this.approach_s16_asymptotic_bool(yawWrapper, avoidYaw, 10)
                this.sModeOffsetYaw = yawWrapper.current
            } else {
                if (c.mode == CAMERA_MODE_RADIAL) {
                    // sModeOffsetYaw only updates when Mario is moving
                    rotateSpeed = gMarioStates[0].forwardVel / 32.0 * 128.0
                    yawWrapper.current = this.sModeOffsetYaw
                    this.camera_approach_s16_symmetric_bool(yawWrapper, yawOffset, rotateSpeed)
                    this.sModeOffsetYaw = yawWrapper.current
                }
                if (c.mode == CAMERA_MODE_OUTWARD_RADIAL) {
                    this.sModeOffsetYaw = this.offset_yaw_outward_radial(c, atan2s(areaDistZ, areaDistX))
                }
            }
        }

        // Bound sModeOffsetYaw within (-120, 120) degrees
        if (this.sModeOffsetYaw > 0x5554) { this.sModeOffsetYaw = 0x5554 }
        if (this.sModeOffsetYaw < -0x5554) { this.sModeOffsetYaw = -0x5554 }
    }

    /**
     * Moves Lakitu from zoomed in to zoomed out and vice versa.
     * When C-Down mode is not active, sLakituDist and sLakituPitch decrease to 0.
     */
    lakitu_zoom(rangeDist, rangePitch) {
        if (this.sLakituDist < 0) {
            this.sLakituDist += 30
            if (this.sLakituDist > 0) {
                this.sLakituDist = 0
            }
        } else if (rangeDist < this.sLakituDist) {
            this.sLakituDist -= 30
            if (this.sLakituDist < rangeDist) {
                this.sLakituDist = rangeDist
            }
        } else if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            this.sLakituDist += 30
            if (this.sLakituDist > rangeDist) {
                this.sLakituDist = rangeDist
            }
        } else {
            this.sLakituDist -= 30
            if (this.sLakituDist < 0) {
                this.sLakituDist = 0
            }
        }

        if (this.gCurrLevelArea == AREA_SSL_PYRAMID && this.gCamera.mode == CAMERA_MODE_OUTWARD_RADIAL) {
            rangePitch /= 2
        }

        if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            this.sLakituPitch += rangePitch / 13
            if (this.sLakituPitch > rangePitch) {
                this.sLakituPitch = rangePitch
            }
        } else {
            this.sLakituPitch -= rangePitch / 13
            if (this.sLakituPitch < 0) {
                this.sLakituPitch = 0
            }
        }
    }

    radial_camera_input_default(c) {
        this.radial_camera_input(c, 0.0)
    }

    /**
     * Makes Lakitu cam's yaw match the angle turned towards in C-Up mode, and makes Lakitu slowly fly back
     * to the distance he was at before C-Up
     */
    update_yaw_and_dist_from_c_up(c) {
        let dist = 1000.0

        this.sModeOffsetYaw = this.sModeInfo.transitionStart.yaw - this.sAreaYaw
        this.sLakituDist = this.sModeInfo.transitionStart.dist - dist
        // No longer in C-Up
        this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE
    }

    /**
     * Handles input and updates for the radial camera mode
     */
    mode_radial_camera(c) {
        let pos = [0, 0, 0]
        let oldAreaYaw = this.sAreaYaw

        if (this.gCameraMovementFlags & CAM_MOVING_INTO_MODE) {
            this.update_yaw_and_dist_from_c_up(c)
        }

        this.radial_camera_input_default(c)
        this.radial_camera_move(c)

        if (c.mode == CAMERA_MODE_RADIAL) {
            this.lakitu_zoom(400.0, 0x900)
        }
        c.nextYaw = this.update_radial_camera(c, c.focus, pos)
        c.pos[0] = pos[0]
        c.pos[2] = pos[2]
        this.sAreaYawChange = this.sAreaYaw - oldAreaYaw
        if (this.gPlayerCameraState.action == ACT_RIDING_HOOT) {
            pos[1] += 500.0
        }
        this.set_camera_height(c, pos[1])
        this.pan_ahead_of_player(c)
    }

    /**
     * A mode that only has 8 camera angles, 45 degrees apart
     */
    mode_8_directions_camera(c) {
        let pos = [0, 0, 0]
        let oldAreaYaw = this.sAreaYaw

        this.radial_camera_input(c, 0.0)

        if (this.sCButtonsPressed & R_CBUTTONS) {
            this.s8DirModeYawOffset += DEGREES(45)
            this.play_sound_cbutton_side()
        }
        if (this.sCButtonsPressed & L_CBUTTONS) {
            this.s8DirModeYawOffset -= DEGREES(45)
            this.play_sound_cbutton_side()
        }

        this.lakitu_zoom(400.0, 0x900)
        c.nextYaw = this.update_8_directions_camera(c, c.focus, pos)
        c.pos[0] = pos[0]
        c.pos[2] = pos[2]
        this.sAreaYawChange = this.sAreaYaw - oldAreaYaw
        this.set_camera_height(c, pos[1])
    }

    /**
     * Updates the camera in outward radial mode.
     * sModeOffsetYaw is calculated in radial_camera_move, which calls offset_yaw_outward_radial
     */
    update_outward_radial_camera(c, focus, pos) {
        let xDistFocToMario = this.gPlayerCameraState.pos[0] - c.areaCenX
        let zDistFocToMario = this.gPlayerCameraState.pos[2] - c.areaCenZ
        let camYaw = atan2s(zDistFocToMario, xDistFocToMario) + this.sModeOffsetYaw + DEGREES(180)
        let pitch = this.look_down_slopes(camYaw)
        let baseDist = 1000.0
        // A base offset of 125.f is ~= Mario's eye height
        let yOff = 125.0

        this.sAreaYaw = camYaw - this.sModeOffsetYaw - DEGREES(180)
        const wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        this.focus_on_mario(focus, pos, wrapper.posOff + yOff, wrapper.focOff + yOff, this.sLakituDist + baseDist, pitch, camYaw)
        
        return camYaw
    }

    mode_outward_radial_camera(c) {
        let pos = [0, 0, 0]
        let oldAreaYaw = this.sAreaYaw

        if (this.gCameraMovementFlags & CAM_MOVING_INTO_MODE) {
            this.update_yaw_and_dist_from_c_up(c)
        }
        this.radial_camera_input_default(c)
        this.radial_camera_move(c)
        this.lakitu_zoom(400.0, 0x900)
        c.nextYaw = this.update_outward_radial_camera(c, c.focus, pos)
        c.pos[0] = pos[0]
        c.pos[2] = pos[2]
        this.sAreaYawChange = this.sAreaYaw - oldAreaYaw
        if (this.gPlayerCameraState.action == ACT_RIDING_HOOT) {
            pos[1] += 500.0
        }
        this.set_camera_height(c, pos[1])
        this.pan_ahead_of_player(c)
    }

    /**
     * Move the camera in parallel tracking mode
     *
     * Uses the line between the next two points in sParTrackPath
     * The camera can move forward/back and side to side, but it will face perpendicular to that line
     *
     * Although, annoyingly, it's not truly parallel, the function returns the yaw from the camera to Mario,
     * so Mario will run slightly towards the camera.
     */
    update_parallel_tracking_camera(c, focus, pos) {
        let path = [ [0, 0, 0], [0, 0, 0] ]
        let parMidPoint = [0, 0, 0]
        let marioOffset = [0, 0, 0]
        let camOffset = [0, 0, 0]
        /// Adjusts the focus to look where Mario is facing. Unused since marioOffset is copied to focus
        let focOffset = [0, 0, 0]
        let parScale = 0.5
        let marioFloorDist = 0
        let marioPos = [0, 0, 0]
        let pathAngle = [0, 0, 0]
        // Variables for changing to the next/prev path in the list
        let oldPos = [0, 0, 0]
        let prevPathPos = [0, 0, 0]
        let nextPathPos = [0, 0, 0]
        let distToNext
        let distToPrev
        let prevPitch
        let nextPitch
        let prevYaw
        let nextYaw
        
        // Store camera pos, for changing between paths
        vec3f_copy(oldPos, pos)

        vec3f_copy(path[0], this.sParTrackPath[this.sParTrackIndex].pos)
        vec3f_copy(path[1], this.sParTrackPath[this.sParTrackIndex + 1].pos)

        let distThresh = this.sParTrackPath[this.sParTrackIndex].distThresh
        let zoom = this.sParTrackPath[this.sParTrackIndex].zoom
        let wrapper = {posOff: marioFloorDist, focOff: marioFloorDist}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        marioFloorDist = wrapper.posOff

        marioPos[0] = this.gPlayerCameraState.pos[0]
        // Mario's y pos + ~Mario's height + Mario's height above the floor
        marioPos[1] = this.gPlayerCameraState.pos[1] + 150.0 + marioFloorDist
        marioPos[2] = this.gPlayerCameraState.pos[2]

        // Calculate middle of the path (parScale is 0.5f)
        parMidPoint[0] = path[0][0] + (path[1][0] - path[0][0]) * parScale
        parMidPoint[1] = path[0][1] + (path[1][1] - path[0][1]) * parScale
        parMidPoint[2] = path[0][2] + (path[1][2] - path[0][2]) * parScale
        
        // Get direction of path
        wrapper = {}
        vec3f_get_dist_and_angle(path[0], path[1], wrapper)
        let pathLength = wrapper.dist; let pathPitch = wrapper.pitch; let pathYaw = wrapper.yaw

        marioOffset[0] = marioPos[0] - parMidPoint[0]
        marioOffset[1] = marioPos[1] - parMidPoint[1]
        marioOffset[2] = marioPos[2] - parMidPoint[2]

        // Make marioOffset point from the midpoint -> the start of the path
        // Rotating by -yaw then -pitch moves the hor dist from the midpoint into marioOffset's z coordinate
        // marioOffset[0] = the (perpendicular) horizontal distance from the path
        // marioOffset[1] = the vertical distance from the path
        // marioOffset[2] = the (parallel) horizontal distance from the path's midpoint
        pathYaw = -pathYaw
        this.rotate_in_xz(marioOffset, marioOffset, pathYaw)
        pathYaw = -pathYaw
        pathPitch = -pathPitch
        this.rotate_in_yz(marioOffset, marioOffset, pathPitch)
        pathPitch = -pathPitch
        vec3f_copy(focOffset, marioOffset)

        // OK
        focOffset[0] = -focOffset[0] * 0.0
        focOffset[1] = focOffset[1] * 0.0

        // Repeat above calcs with camOffset
        camOffset[0] = pos[0] - parMidPoint[0]
        camOffset[1] = pos[1] - parMidPoint[1]
        camOffset[2] = pos[2] - parMidPoint[2]
        pathYaw = -pathYaw
        this.rotate_in_xz(camOffset, camOffset, pathYaw)
        pathYaw = -pathYaw
        pathPitch = -pathPitch
        this.rotate_in_yz(camOffset, camOffset, pathPitch)
        pathPitch = -pathPitch
        vec3f_copy(focOffset, marioOffset)

        // If Mario is distThresh units away from the camera along the path, move the camera
        //! When distThresh != 0, it causes Mario to move slightly towards the camera when running sideways
        //! Set each ParallelTrackingPoint's distThresh to 0 to make Mario truly run parallel to the path
        if (marioOffset[2] > camOffset[2]) {
            if (marioOffset[2] - camOffset[2] > distThresh) {
                camOffset[2] = marioOffset[2] - distThresh
            }
        } else {
            if (marioOffset[2] - camOffset[2] < -distThresh) {
                camOffset[2] = marioOffset[2] + distThresh
            }
        }

        // If zoom != 0.0, the camera will move zoom% closer to Mario
        marioOffset[0] = -marioOffset[0] * zoom
        marioOffset[1] = marioOffset[1] * zoom
        marioOffset[2] = camOffset[2]

        //! Does nothing because focOffset[0] is always 0
        focOffset[0] *= 0.3
        //! Does nothing because focOffset[1] is always 0
        focOffset[1] *= 0.3

        pathAngle[0] = pathPitch
        pathAngle[1] = pathYaw //! No effect

        // make marioOffset[2] == distance from the start of the path
        marioOffset[2] = pathLength / 2 - marioOffset[2]

        pathAngle[1] = pathYaw + DEGREES(180)
        pathAngle[2] = 0

        // Rotate the offset in the direction of the path again
        this.offset_rotated(pos, path[0], marioOffset, pathAngle)
        wrapper = {}
        vec3f_get_dist_and_angle(path[0], c.pos, wrapper)
        let camParDist = wrapper.dist; pathPitch = wrapper.pitch; pathYaw = wrapper.yaw;

        // Adjust the focus. Does nothing, focus is set to Mario at the end
        focOffset[2] = pathLength / 2 - focOffset[2]
        this.offset_rotated(c.focus, path[0], focOffset, pathAngle)

        // Changing paths, update the stored position offset
        if (this.sStatusFlags & CAM_FLAG_CHANGED_PARTRACK_INDEX) {
            this.sStatusFlags &= ~CAM_FLAG_CHANGED_PARTRACK_INDEX
            this.sParTrackTransOff.pos[0] = oldPos[0] - c.pos[0]
            this.sParTrackTransOff.pos[1] = oldPos[1] - c.pos[1]
            this.sParTrackTransOff.pos[2] = oldPos[2] - c.pos[2]
        }
        // Slowly transition to the next path
        wrapper = {current: this.sParTrackTransOff.pos[0]}
        this.approach_f32_asymptotic_bool(wrapper, 0.0, 0.025);
        this.sParTrackTransOff.pos[0] = wrapper.current; wrapper.current = this.sParTrackTransOff.pos[1]
        this.approach_f32_asymptotic_bool(wrapper, 0.0, 0.025);
        this.sParTrackTransOff.pos[1] = wrapper.current; wrapper.current = this.sParTrackTransOff.pos[2]
        this.approach_f32_asymptotic_bool(wrapper, 0.0, 0.025);
        this.sParTrackTransOff.pos[2] = wrapper.current
        MathUtil.vec3f_add(c.pos, this.sParTrackTransOff.pos);
        
        // Check if the camera should go to the next path
        if (this.sParTrackPath[this.sParTrackIndex + 1].startOfPath != 0) {
            // get Mario's distance to the next path
            wrapper = {pitch: nextPitch, yaw: nextYaw}
            this.calculate_angles(this.sParTrackPath[this.sParTrackIndex + 1].pos, this.sParTrackPath[this.sParTrackIndex + 2].pos, wrapper)
            prevPitch = wrapper.pitch; prevYaw = wrapper.yaw
            vec3f_set_dist_and_angle(this.sParTrackPath[this.sParTrackIndex].pos, nextPathPos, 400.0, prevPitch, prevYaw)
            distToPrev = this.calc_abs_dist(marioPos, nextPathPos)

            // get Mario's distance to the previous path
            wrapper = {pitch: prevPitch, yaw: prevYaw}
            this.calculate_angles(this.sParTrackPath[this.sParTrackIndex + 1].pos, this.sParTrackPath[this.sParTrackIndex].pos, wrapper)
            nextPitch = wrapper.pitch; nextYaw = wrapper.yaw
            vec3f_set_dist_and_angle(this.sParTrackPath[this.sParTrackIndex + 1].pos, nextPathPos, 400.0, nextPitch, nextYaw)
            distToNext = this.calc_abs_dist(marioPos, prevPathPos)

            if (distToPrev > distToNext) {
                this.sParTrackIndex++
                this.sStatusFlags |= CAM_FLAG_CHANGED_PARTRACK_INDEX
            }
        }

        // Check if the camera should go to the previous path
        if (this.sParTrackIndex != 0) {
            // get Mario's distance to the next path
            wrapper = {pitch: nextPitch, yaw: nextYaw}
            this.calculate_angles(this.sParTrackPath[this.sParTrackIndex].pos, this.sParTrackPath[this.sParTrackIndex + 1].pos, wrapper)
            nextPitch = wrapper.pitch; nextYaw = wrapper.yaw
            vec3f_set_dist_and_angle(this.sParTrackPath[this.sParTrackIndex].pos, nextPathPos, 700.0, nextPitch, nextYaw)
            distToPrev = this.calc_abs_dist(marioPos, nextPathPos)

            // get Mario's distance to the previous path
            wrapper = {pitch: prevPitch, yaw: prevYaw}
            this.calculate_angles(this.sParTrackPath[this.sParTrackIndex].pos, this.sParTrackPath[this.sParTrackIndex - 1].pos, wrapper)
            prevPitch = wrapper.pitch; prevYaw = wrapper.yaw
            vec3f_set_dist_and_angle(this.sParTrackPath[this.sParTrackIndex].pos, prevPathPos, 700.0, prevPitch, prevYaw)
            distToNext = this.calc_abs_dist(marioPos, prevPathPos)
            if (distToPrev > distToNext) {
                this.sParTrackIndex--
                this.sStatusFlags |= CAM_FLAG_CHANGED_PARTRACK_INDEX
            }
        }

        // Update the camera focus and return the camera's yaw
        vec3f_copy(focus, marioPos)
        wrapper = {dist: camParDist, pitch: pathPitch, yaw: pathYaw}
        vec3f_get_dist_and_angle(focus, pos, wrapper)
        return wrapper.yaw
    }

    /**
     * Updates the camera during fixed mode.
     */
    update_fixed_camera(c, focus, pos) {
        let goalHeight
        let heightOffset
        let scaleToMario = 0.5
        let pitch
        let yaw
        let basePos = [0, 0, 0]
        let faceAngle = [0, 0, 0]

        this.play_camera_buzz_if_c_sideways()

        // Don't move closer to Mario in these areas
        switch (this.gCurrLevelArea) {
            case AREA_RR:
                scaleToMario = 0.0
                heightOffset = 0.0
                break
            case AREA_CASTLE_LOBBY:
                scaleToMario = 0.3
                heightOffset = 0.0
                break
            case AREA_BBH:
                scaleToMario = 0.0
                heightOffset = 0.0
                break
        }

        this.handle_c_button_movement(c)
        this.play_camera_buzz_if_cdown()

        let wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        let focusFloorOff = wrapper.focOff
        vec3f_copy(focus, this.gPlayerCameraState.pos)
        focus[1] += focusFloorOff + 125.0
        wrapper = {}
        MathUtil.vec3f_get_dist_and_angle(focus, c.pos, wrapper)
        let distCamToFocus = wrapper.dist; faceAngle[0] = wrapper.pitch; faceAngle[1] = wrapper.yaw
        faceAngle[2] = 0

        vec3f_copy(basePos, this.sFixedModeBasePosition)
        MathUtil.vec3f_add(basePos, this.sCastleEntranceOffset)

        if (this.sMarioGeometry.currFloorType != SURFACE_DEATH_PLANE
            && this.sMarioGeometry.currFloorHeight != FLOOR_LOWER_LIMIT) {
            goalHeight = this.sMarioGeometry.currFloorHeight + basePos[1] + heightOffset
        } else {
            goalHeight = this.gLakituState.goalPos[1]
        }

        if (300 > distCamToFocus) {
            goalHeight += 300 - distCamToFocus
        }

        let ceilHeight = SurfaceCollision.find_ceil(c.pos[0], goalHeight - 100.0, c.pos[2], {})
        if (ceilHeight != CELL_HEIGHT_LIMIT) {
            ceilHeight -= 125.0
            if (goalHeight > ceilHeight) {
                goalHeight = ceilHeight
            }
        }

        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            wrapper = { current: c.pos[1] }
            this.camera_approach_f32_symmetric_bool(wrapper, goalHeight, 15.0)
            c.pos[1] = wrapper.current
        } else {
            if (goalHeight < this.gPlayerCameraState.pos[1] - 500.0) {
                goalHeight = this.gPlayerCameraState.pos[1] - 500.0
            }
            c.pos[1] = goalHeight
        }

        c.pos[0] = basePos[0] + (this.gPlayerCameraState.pos[0] - basePos[0]) * scaleToMario
        c.pos[2] = basePos[2] + (this.gPlayerCameraState.pos[2] - basePos[2]) * scaleToMario

        if (scaleToMario != 0.0) {
            wrapper = { dist: distCamToFocus, pitch: pitch, yaw: yaw }
            MathUtil.vec3f_get_dist_and_angle(c.focus, c.pos, wrapper)
            distCamToFocus = wrapper.dist; pitch = wrapper.pitch; yaw = wrapper.yaw
            if (distCamToFocus > 1000.0) {
                distCamToFocus = 1000.0
                MathUtil.vec3f_set_dist_and_angle(c.focus, c.pos, distCamToFocus, pitch, yaw)
            }
        }

        return faceAngle[1]
    }

    /**
     * Updates the camera during a boss fight
     */
    update_boss_fight_camera(c, focus, pos) {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
        let o = {}
        let focusDistance
        // Floor normal values
        let nx
        let ny
        let nz
        /// Floor originOffset
        let oo
        let yaw
        let heldState
        let floor = JSON.parse(JSON.stringify(surfaceObj))
        let secondFocus = new Array(3)
        let holdFocOffset = [ 0.0, -150.0, -125.0 ]

        this.handle_c_button_movement(c)

        // Start camera shakes if bowser jumps or gets thrown.
        if (this.gPlayerCameraState.cameraEvent == CAM_EVENT_BOWSER_JUMP) {
            this.set_environmental_camera_shake(SHAKE_ENV_BOWSER_JUMP)
            this.gPlayerCameraState.cameraEvent = 0
        }
        if (this.gPlayerCameraState.cameraEvent == CAM_EVENT_BOWSER_THROW_BOUNCE) {
            this.set_environmental_camera_shake(SHAKE_ENV_BOWSER_THROW_BOUNCE)
            this.gPlayerCameraState.cameraEvent = 0
        }

        yaw = this.sModeOffsetYaw + DEGREES(45)
        // Get boss's position and whether Mario is holding it.
        o = this.gSecondCameraFocus
        if (o != null) {
            this.object_pos_to_vec3f(secondFocus, o)
            heldState = o.rawData[oHeldState]
        } else {
            // If no boss is there, just rotate around the area's center point.
            secondFocus[0] = c.areaCenX
            secondFocus[1] = this.gPlayerCameraState.pos[1]
            secondFocus[2] = c.areaCenZ
            heldState = 0
        }

        focusDistance = this.calc_abs_dist(this.gPlayerCameraState.pos, secondFocus) * 1.6
        if (focusDistance < 800.0) {
            focusDistance = 800.0
        } else if (focusDistance > 5000.0) {
            focusDistance = 5000.0
        }

        // If holding the boss, add a slight offset to secondFocus so that the spinning is more pronounced.
        if (heldState == 1) {
            this.offset_rotated(secondFocus, this.gPlayerCameraState.pos, holdFocOffset, this.gPlayerCameraState.faceAngle)
        }

        // Set the camera focus to the average of Mario and secondFocus
        focus[0] = (this.gPlayerCameraState.pos[0] + secondFocus[0]) / 2.0
        focus[1] = (this.gPlayerCameraState.pos[1] + secondFocus[1]) / 2.0 + 125.0
        focus[2] = (this.gPlayerCameraState.pos[2] + secondFocus[2]) / 2.0
        // Calculate the camera's position as an offset from the focus
        // When C-Down is not active, this
        MathUtil.vec3f_set_dist_and_angle(focus, pos, focusDistance, 0x1000, yaw)
        // Find the floor of the arena
        pos[1] = SurfaceCollision.find_floor(c.areaCenX, CELL_HEIGHT_LIMIT, c.areaCenZ, floor)
        if (floor != null) {
            nx = floor.normal.x
            ny = floor.normal.y
            nz = floor.normal.z
            oo = floor.originOffset
            pos[1] = 300.0 - (nx * pos[0] + nz * pos[2] + oo) / ny
            switch (this.gCurrLevelArea) {
                case AREA_BOB:
                    pos[1] += 125.0
                    break // bug fix from og game
                case AREA_WF:
                    pos[1] += 125.0
                    break
            }
        }

        // Prevent the camera from going to the ground in the outside boss fight
        if (Area.gCurrLevelNum == LEVEL_BBH) { pos[1] = 2047.0 }

        // Rotate from C-Button input
        if (this.sCSideButtonYaw < 0) {
            this.sModeOffsetYaw += 0x200
            this.sCSideButtonYaw += 0x100
            if (this.sCSideButtonYaw > 0) {
                this.sCSideButtonYaw = 0
            }
        }
        if (this.sCSideButtonYaw > 0) {
            this.sModeOffsetYaw -= 0x200
            this.sCSideButtonYaw -= 0x100
            if (this.sCSideButtonYaw < 0) {
                this.sCSideButtonYaw = 0
            }
        }

        focus[1] = (this.gPlayerCameraState.pos[1] + secondFocus[1]) / 2.0 + 100.0
        if (heldState == 1) {
            focus[1] += 300.0 * sins((gMarioStates[0].angleVel[1] > 0.0) ?  gMarioStates[0].angleVel[1]
                                                                         : -gMarioStates[0].angleVel[1])
        }

        //! Unnecessary conditional, focusDistance is already bounded to 800
        if (focusDistance < 400.0) {
            focusDistance = 400.0
        }

        // Set C-Down distance and pitch.
        // C-Down will essentially double the distance from the center.
        // sLakituPitch approaches 33.75 degrees.
        this.lakitu_zoom(focusDistance, 0x1800)

        // Move the camera position back as sLakituDist and sLakituPitch increase.
        // This doesn't zoom out of bounds because pos is set above each frame.
        // The constant 0x1000 doubles the pitch from the center when sLakituPitch is 0
        // When Lakitu is fully zoomed out, the pitch comes to 0x3800, or 78.75 degrees, up from the focus.
        MathUtil.vec3f_set_dist_and_angle(pos, pos, this.sLakituDist, this.sLakituPitch + 0x1000, yaw)

        return yaw
    }

    mode_boss_fight_camera(c) {
        c.nextYaw = this.update_boss_fight_camera(c, c.focus, c.pos)
    }

    /**
     * Parallel tracking mode, the camera faces perpendicular to a line defined by sParTrackPath
     *
     * @see update_parallel_tracking_camera
     */

    mode_parallel_tracking_camera(c) {
        this.radial_camera_input(c, 0.0)
        this.set_fov_function(CAM_FOV_DEFAULT)
        c.nextYaw = this.update_parallel_tracking_camera(c, c.focus, c.pos)
        this.camera_approach_s16_symmetric_bool({current: null}, 0, 0x0400)
    }

    /**
     * Fixed camera mode, the camera rotates around a point and looks and zooms toward Mario.
     */
    mode_fixed_camera(c) {
        if (Area.gCurrLevelNum == LEVEL_BBH) {
            this.set_fov_function(CAM_FOV_BBH)
        } else {
            this.set_fov_function(CAM_FOV_APP_45)
        }
        c.nextYaw = this.update_fixed_camera(c, c.focus, c.pos)
        c.yaw = c.nextYaw
        this.pan_ahead_of_player(c)
        this.sCastleEntranceOffset = [0.0, 0.0, 0.0]
    }

    /**
     * Updates the camera in BEHIND_MARIO mode.
     *
     * The C-Buttons rotate the camera 90 degrees left/right and 67.5 degrees up/down.
     */
    update_behind_mario_camera(c, focus, pos) {
        let absPitch
        let dist, pitch, yaw
        let goalPitch = this.gPlayerCameraState.faceAngle[0]
        let marioYaw = s16(this.gPlayerCameraState.faceAngle[1] + DEGREES(180))
        let goalYawOff = 0
        let yawSpeed
        let pitchInc = 32
        let maxDist = 800
        let focYOff = 125
        let wrapper = {}

        // Zoom in when Mario R_TRIG mode is active
        if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
            maxDist = 350
            focYOff = 120
        }
        if (!(this.gPlayerCameraState.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER))) {
            pitchInc = 128
        }

        // Focus on Mario
        this.vec3f_copy(focus, this.gPlayerCameraState.pos)
        c.focus[1] += focYOff
        //! @bug unnecessary
        // dist = calc_abs_dist(focus, pos);
        //! @bug unnecessary
        // pitch = calculate_pitch(focus, pos);
        MathUtil.vec3f_get_dist_and_angle(focus, pos, wrapper);
        dist = wrapper.dist; pitch = wrapper.pitch; yaw = wrapper.yaw
        if (dist > maxDist) {
            dist = maxDist
        }
        absPitch = pitch
        if (absPitch < 0) {
            absPitch = -absPitch
        }

        // Determine the yaw speed based on absPitch. A higher absPitch (further away from looking straight)
        // translates to a slower speed
        // Note: Pitch is always within +- 90 degrees or +-0x4000, and 0x4000 / 0x200 = 32
        yawSpeed = s16(32 - s16(absPitch / 0x200))
        if (yawSpeed < 1) {
            yawSpeed = 1
        }
        if (yawSpeed > 32) {
            yawSpeed = 32
        }

        if (this.sCSideButtonYaw != 0) {
            wrapper.current = this.sCSideButtonYaw
            this.camera_approach_s16_symmetric_bool(wrapper, 0, 1)
            this.sCSideButtonYaw = wrapper.current
            yawSpeed = 8
        }
        if (this.sBehindMarioSoundTimer != 0) {
            goalPitch = 0
            wrapper.current = this.sBehindMarioSoundTimer
            this.camera_approach_s16_symmetric_bool(wrapper, 0, 1)
            this.sBehindMarioSoundTimer = wrapper.current
            pitchInc = 0x800
        }

        if (this.sBehindMarioSoundTimer == 28) {
            if (this.sCSideButtonYaw < 5 || this.sCSideButtonYaw > 28) {
                this.play_sound_cbutton_up();
            }
        }
        if (this.sCSideButtonYaw == 28) {
            if (this.sBehindMarioSoundTimer < 5 || this.sBehindMarioSoundTimer > 28) {
                this.play_sound_cbutton_up();
            }
        }

        // C-Button input. Note: Camera rotates in the opposite direction of the button (airplane controls)
        //! @bug C-Right and C-Up take precedence due to the way input is handled here

        // Rotate right
        if (this.sCButtonsPressed & L_CBUTTONS) {
            if (window.playerInput.buttonPressedCl) {
                this.play_sound_cbutton_side();
            }
            if (dist < maxDist) {
                wrapper.current = dist
                this.camera_approach_f32_symmetric_bool(wrapper, maxDist, 5)
                dist = wrapper.current
            }
            goalYawOff = -0x3FF8
            this.sCSideButtonYaw = 30
            yawSpeed = 2
        }
        // Rotate left
        if (this.sCButtonsPressed & R_CBUTTONS) {
            if (window.playerInput.buttonPressedCr) {
                this.play_sound_cbutton_side();
            }
            if (dist < maxDist) {
                wrapper.current = dist
                this.camera_approach_f32_symmetric_bool(wrapper, maxDist, 5)
                dist = wrapper.current
            }
            goalYawOff = 0x3FF8
            this.sCSideButtonYaw = 30
            yawSpeed = 2
        }
        // Rotate up
        if (this.sCButtonsPressed & D_CBUTTONS) {
            if (window.playerInput.buttonPressedCu || window.playerInput.buttonPressedCd) {
                this.play_sound_cbutton_side();
            }
            if (dist < maxDist) {
                wrapper.current = dist
                this.camera_approach_f32_symmetric_bool(wrapper, maxDist, 5)
                dist = wrapper.current                
            }
            goalPitch = -0x3000
            this.sBehindMarioSoundTimer = 30
            pitchInc = 0x800
        }
        // Rotate down
        if (this.sCButtonsPressed & U_CBUTTONS) {
            if (window.playerInput.buttonPressedCu || window.playerInput.buttonPressedCd) {
                this.play_sound_cbutton_side();
            }
            if (dist < maxDist) {
                wrapper.current = dist
                this.camera_approach_f32_symmetric_bool(wrapper, maxDist, 5)
                dist = wrapper.current                
            }
            goalPitch = 0x3000
            this.sBehindMarioSoundTimer = 30
            pitchInc = 0x800
        }

        wrapper.current = yaw
        this.approach_s16_asymptotic_bool(wrapper, s16(marioYaw + goalYawOff), yawSpeed)
        yaw = wrapper.current

        wrapper.current = pitch
        this.camera_approach_s16_symmetric_bool(wrapper, goalPitch, pitchInc)
        pitch = wrapper.current
        if (dist < 300) {
            dist = 300
        }
        MathUtil.vec3f_set_dist_and_angle(focus, pos, dist, pitch, yaw)
        if (this.gCurrLevelArea == AREA_WDW_MAIN) {
            yaw = this.clamp_positions_and_find_yaw(pos, focus, 4508, -3739, 4508, -3739)
        }
        if (this.gCurrLevelArea == AREA_THI_HUGE) {
            yaw = this.clamp_positions_and_find_yaw(pos, focus, 8192, -8192, 8192, -8192)
        }
        if (this.gCurrLevelArea == AREA_THI_TINY) {
            yaw = this.clamp_positions_and_find_yaw(pos, focus, 2458, -2458, 2458, -2458)
        }

        return yaw
    }

    /**
     * "Behind Mario" mode: used when Mario is flying, on the water's surface, or shot from a cannon
     */
    mode_behind_mario(c) {
        const marioState = LevelUpdate.gMarioState
        let newPos = [], oldPos = []
        let waterHeight, floorHeight
        let distPitchYaw = {}
        let yaw

        this.vec3f_copy(oldPos, c.pos)
        this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE
        this.vec3f_copy(newPos, c.pos)
        yaw = this.update_behind_mario_camera(c, c.focus, newPos)
        c.pos[0] = newPos[0]
        c.pos[2] = newPos[2]

        // Keep the camera above the water surface if swimming
        if (c.mode == CAMERA_MODE_WATER_SURFACE) {
            floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1], c.pos[2], {})
            newPos[1] = marioState.waterLevel + 120
            if (newPos[1] < (floorHeight += 120)) {
                newPos[1] = floorHeight
            }
        }
        this.approach_camera_height(c, newPos[1], 50)
        waterHeight = SurfaceCollision.find_water_level(c.pos[0], c.pos[2]) + 100
        if (c.pos[1] <= waterHeight) {
            this.gCameraMovementFlags |= CAM_MOVE_SUBMERGED
        } else {
            this.gCameraMovementFlags &= ~CAM_MOVE_SUBMERGED
        }

        this.resolve_geometry_collisions(c.pos, oldPos)
        // Prevent camera getting too far away
        MathUtil.vec3f_get_dist_and_angle(c.focus, c.pos, distPitchYaw)
        if (distPitchYaw.dist > 800) {
            distPitchYaw.dist = 800
            MathUtil.vec3f_set_dist_and_angle(c.focus, c.pos, distPitchYaw.dist, distPitchYaw.pitch, distPitchYaw.yaw);
        }
        this.pan_ahead_of_player(c)

        return yaw
    }

    /**
     * Update the camera in slide and hoot mode.
     *
     * In slide mode, keep the camera 800 units from Mario
     */
    update_slide_camera(c) {
        let floor = null
        let floorHeight
        let pos = [0, 0, 0]
        let distCamToFocus
        let maxCamDist
        let pitchScale
        let camPitch
        let camYaw
        let goalPitch = 0x1555
        let goalYaw = this.gPlayerCameraState.faceAngle[1] + DEGREES(180)

        // Zoom in when inside the CCM shortcut
        if (this.sStatusFlags & CAM_FLAG_CCM_SLIDE_SHORTCUT) {
            this.sLakituDist = approach_f32(this.sLakituDist, -600.0, 20.0, 20.0)
        } else {
            this.sLakituDist = approach_f32(this.sLakituDist, 0.0, 20.0, 20.0)
        }

        // No C-Button input in this mode, notify the player with a buzzer
        play_camera_buzz_if_cbutton()

        // Focus on Mario
        vec3f_copy(c.focus, this.gPlayerCameraState.pos)
        c.focus[1] += 50.0

        let wrapper = {dist: distCamToFocus, pitch: camPitch, yaw: camYaw}
        vec3f_get_dist_and_angle(c.focus, c.pos, wrapper)
        distCamToFocus = wrapper.dist; camPitch = wrapper.pitch; camYaw = wrapper.yaw;
        maxCamDist = 800.0

        // In hoot mode, zoom further out and rotate faster
        wrapper.current = camYaw
        if (this.gPlayerCameraState.action == Mario.ACT_RIDING_HOOT) {
            maxCamDist = 1000.0
            goalPitch = 0x2800
            this.camera_approach_s16_symmetric_bool(wrapper, goalYaw, 0x100)
        } else {
            this.camera_approach_s16_symmetric_bool(wrapper, goalYaw, 0x80)
        }
        camYaw = wrapper.current; wrapper.current = camPitch
        this.camera_approach_s16_symmetric_bool(wrapper, goalPitch, 0x100)
        camPitch = wrapper.current

        // Hoot mode
        if (this.gPlayerCameraState.action != Mario.ACT_RIDING_HOOT && this.sMarioGeometry.currFloorType == SURFACE_DEATH_PLANE) {
            wrapper = {}
            vec3f_set_dist_and_angle(c.focus, pos, maxCamDist + this.sLakituDist, camPitch, camYaw)
            c.pos[0] = pos[0]
            c.pos[2] = pos[2]
            wrapper.current = c.pos[1]
            this.camera_approach_f32_symmetric_bool(wrapper, c.focus, 30.0)
            c.pos[1] = wrapper.current; wrapper = {dist: distCamToFocus, pitch: camPitch, yaw: camYaw}
            vec3f_get_dist_and_angle(c.pos, c.focus, wrapper)
            distCamToFocus = wrapper.dist; camPitch = wrapper.pitch; camYaw = wrapper.yaw;
            pitchScale = (distCamToFocus - maxCamDist + this.sLakituDist) / 10000.0
            if (pitchScale > 1.0) {
                pitchScale = 1.0
            }
            camPitch += 0x1000 * pitchScale
            vec3f_set_dist_and_angle(c.pos, c.focus, distCamToFocus, camPitch, camYaw)
        
        // Slide mode
        } else {
            vec3f_set_dist_and_angle(c.focus, c.pos, maxCamDist + this.sLakituDist, camPitch, camYaw)
            this.sStatusFlags |= CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
            
            // Stay above the slide floor
            wrapper.floor = floor
            floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1] + 200.0, c.pos[2], wrapper) + 125.0
            floor = wrapper.floor
            if (c.pos[1] < floorHeight) {
                c.pos[1] = floorHeight
            }
            // Stay closer than maxCamDist
            wrapper = {dist: distCamToFocus, pitch: camPitch, yaw: camYaw}
            vec3f_get_dist_and_angle(c.focus, c.pos, wrapper)
            distCamToFocus = wrapper.dist; camPitch = wrapper.pitch; camYaw = wrapper.yaw
            if (distCamToFocus > maxCamDist + this.sLakituDist) {
                distCamToFocus = maxCamDist + this.sLakituDist
                vec3f_set_dist_and_angle(c.focus, c.pos, distCamToFocus, camPitch, camYaw)
            }
        }

        camYaw = this.calculate_yaw(c.focus, c.pos)
        return camYaw
    }

    mode_behind_mario_camera(c) {
        c.nextYaw = this.mode_behind_mario(c)
    }

    nop_update_water_camera(c, focus, pos) {
        return 0
    }

    /**
     * Exactly the same as BEHIND_MARIO
     */
    mode_water_surface_camera(c) {
        c.nextYaw = this.mode_behind_mario(c)
    }

    /**
     * Used in sModeTransitions for CLOSE and FREE_ROAM mode
     */
    update_mario_camera(c, focus, pos) {
        let yaw = this.gPlayerCameraState.faceAngle[1] + this.sModeOffsetYaw + DEGREES(180)
        this.focus_on_mario(focus, pos, 125, 125, this.gCameraZoomDist, 0x05B0, yaw)

        return this.gPlayerCameraState.faceAngle[1]
    }

    /**
     * Update the camera in default, close, and free roam mode
     *
     * The camera moves behind Mario, and can rotate all the way around
     */
    update_default_camera(c) {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

        let tempPos = [0, 0, 0]
        let cPos = [0, 0, 0]
        let marioFloor = {}
        let cFloor = {}
        let tempFloor = {}
        let ceil = {}
        let camFloorHeight = 0
        let tempFloorHeight = 0
        let marioFloorHeight = 0
        let zoomDist
        let waterHeight = 0
        let gasHeight = 0
        let avoidYaw = 0
        let yawGoal = this.gPlayerCameraState.faceAngle[1] + DEGREES(180)
        let posHeight = 0
        let focHeight = 0
        let distFromWater = 0
        let tempPitch = 0
        let tempYaw = 0
        let xzDist = 0
        let nextYawVel = 0
        let yawVel = 0
        let scale = 0
        let avoidStatus = 0
        let closeToMario = 0
        let ceilHeight = 20000
        let yawDir = 0

        this.handle_c_button_movement(c);
        let wrapper = {}
        MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper);
        let dist = wrapper.dist; let pitch = wrapper.pitch; let yaw = wrapper.yaw

        // If C-Down is active, determine what distance the camera should be from mario
        if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            //! In Mario mode, the camera is zoomed out further than in lakitu mode (1400 vs 1200)
            if (this.set_cam_angle(0) == CAM_ANGLE_MARIO) {
                zoomDist = this.gCameraZoomDist + 1050;
            } else {
                zoomDist = this.gCameraZoomDist + 400;
            }
        } else {
            zoomDist = this.gCameraZoomDist;
        }

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_HANGING || this.gPlayerCameraState.action == Mario.ACT_RIDING_HOOT) {
            zoomDist *= 0.8
            this.set_handheld_shake(HAND_CAM_SHAKE_HANG_OWL)
        }
        
        // If not zooming out, only allow dist to decrease
        if (this.sZoomAmount == 0.0) {
            if (dist > zoomDist) {
                dist -= 50
                if (dist < zoomDist) {
                    dist = zoomDist
                }
            }
        } else {
            if ((this.sZoomAmount -= 30) < 0) {
                this.sZoomAmount = 0
            }
            if (dist > zoomDist) {
                dist -= 30
                if (dist < zoomDist) {
                    dist = zoomDist
                }
            }
            if (dist < zoomDist) {
                dist += 30
                if (dist > zoomDist) {
                    dist = zoomDist
                }
            }
        }

        // Determine how fast to rotate the camera
        if (this.sCSideButtonYaw == 0) {
            if (c.mode == CAMERA_MODE_FREE_ROAM) {
                nextYawVel = 0xC0
            } else {
                nextYawVel = 0x100
            }
            if ((window.playerInput.stickX != 0 || window.playerInput.stickY != 0) != 0) {
                nextYawVel = 0x20
            }
        } else {
            if (this.sCSideButtonYaw < 0) {
                yaw += 0x200
            }
            if (this.sCSideButtonYaw > 0) {
                yaw -= 0x200
            }
            const wrapper = { current: this.sCSideButtonYaw }
            this.camera_approach_s16_symmetric_bool(wrapper, 0, 0x100)
            this.sCSideButtonYaw = wrapper.current
            nextYawVel = 0
        }

        this.sYawSpeed = 0x400
        xzDist = this.calc_hor_dist(this.gPlayerCameraState.pos, c.pos)

        if (this.sStatusFlags & CAM_FLAG_BEHIND_MARIO_POST_DOOR) {
            if (xzDist >= 250) {
                this.sStatusFlags &= ~CAM_FLAG_BEHIND_MARIO_POST_DOOR
            }
            if (Math.abs((this.gPlayerCameraState.faceAngle[1] - yaw) / 2) < 0x1800) {
                this.sStatusFlags &= ~CAM_FLAG_BEHIND_MARIO_POST_DOOR
                yaw = this.sCameraYawAfterDoorCutscene + DEGREES(180)
                dist = 800.0
                this.sStatusFlags |= CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
            }
        } else if (xzDist < 250) {
            // Turn rapidly if very close to mario
            c.pos[0] += (250 - xzDist) * sins(yaw)
            c.pos[2] += (250 - xzDist) * coss(yaw)
            if (this.sCSideButtonYaw == 0) {
                nextYawVel = 0x1000
                this.sYawSpeed = 0
                wrapper = {}
                MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper);
                dist = wrapper.dist; pitch = wrapper.pitch; yaw = wrapper.yaw
            }
            closeToMario |= 1
        }

        if (-16 < window.playerInput.stickY) {
            c.yaw = yaw
        }

        wrapper = { posOff: posHeight, focOff: focHeight }
        this.calc_y_to_curr_floor(wrapper, 1, 200, wrapper, 0.9, 200)
        posHeight = wrapper.posOff
        focHeight = wrapper.focOff
        vec3f_copy(cPos, c.pos)
        wrapper = {}
        avoidStatus = this.rotate_camera_around_walls(c, cPos, wrapper, 0x600)
        wrapper.yaw = avoidYaw

        // If a wall is blocking the view of Mario, then rotate in the calculated direction
        if (avoidStatus == 3) {
            this.sAvoidYawVel = yaw
            this.sStatusFlags |= CAM_FLAG_COLLIDED_WITH_WALL
            // Rotate to avoid the wall
            wrapper = { current: yaw }
            this.approach_s16_asymptotic_bool(wrapper, avoidYaw, 10)
            yaw = wrapper.current
            this.sAvoidYawVel = (this.sAvoidYawVel - yaw) / 0x100
        } else {
            if (gMarioStates[0].forwardVel == 0.0) {
                if (this.sStatusFlags & CAM_FLAG_COLLIDED_WITH_WALL) {
                    if ((yawGoal - yaw) / 0x100 >= 0) {
                        yawDir = -1
                    } else {
                        yawDir = 1
                    }
                    if ((this.sAvoidYawVel > 0 && yawDir > 0) || (this.sAvoidYawVel < 0 && yawDir < 0)) {
                        yawVel = nextYawVel
                    }
                } else {
                    yawVel = nextYawVel
                }
            } else {
                if (nextYawVel == 0x1000) {
                    yawVel = nextYawVel
                }
                this.sStatusFlags &= ~CAM_FLAG_COLLIDED_WITH_WALL
            }

            // If a wall is near the camera, turn twice as fast
            if (avoidStatus != 0) {
                yawVel += yawVel
            }
            // ...Unless the camera already rotated from being close to mario
            if ((closeToMario & 1) && avoidStatus != 0) {
                yawVel = 0
            }
            if (yawVel != 0 && IngameMenu.get_dialog_id() == DIALOG_NONE) {
                let yawWrapper = { current: yaw }
                this.camera_approach_s16_symmetric_bool(yawWrapper, yawGoal, yawVel)
                yaw = yawWrapper.current
            }
        }

        // Only zoom out if not obstructed by walls and lakitu hasn't collided with any
        if (avoidStatus == 0 && !(this.sStatusFlags & CAM_FLAG_COLLIDED_WITH_WALL)) {
            const distWrapper = { current: dist }
            this.approach_f32_asymptotic_bool(distWrapper, zoomDist - 100, 0.05)
            dist = distWrapper.current
        }

        MathUtil.vec3f_set_dist_and_angle(this.gPlayerCameraState.pos, cPos, dist, pitch, yaw)
        cPos[1] += posHeight + 125.0

        if (this.collide_with_walls(cPos, 10.0, 80.0) != 0) {
            this.sStatusFlags |= CAM_FLAG_COLLIDED_WITH_WALL
        }

        c.focus = [
            this.gPlayerCameraState.pos[0],
            this.gPlayerCameraState.pos[1] + 125 + focHeight,
            this.gPlayerCameraState.pos[2]
        ]

        marioFloorHeight = 125.0 + this.sMarioGeometry.currFloorHeight
        marioFloor = this.sMarioGeometry.currFloor

        camFloorHeight = SurfaceCollision.find_floor(cPos[0], cPos[1] + 50, cPos[2], cFloor) + 125

        for (let scale = 0.1; scale < 1.0; scale += 0.2) {
            this.scale_along_line(tempPos, cPos, this.gPlayerCameraState.pos, scale)
            tempFloorHeight = SurfaceCollision.find_floor(tempPos[0], tempPos[1], tempPos[2], tempFloor) + 125
            if (tempFloor.floor && tempFloorHeight > marioFloorHeight) {
                marioFloorHeight = tempFloorHeight
                marioFloor = tempFloor.floor
            }
        }

        // Lower the camera in mario mode
        if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
            marioFloorHeight -= 35.0
            camFloorHeight -= 35.0
            c.focus[1] -= 25.0
        }

        // If there's water below the camera, decide whether to keep the camera above the water surface
        waterHeight = SurfaceCollision.find_water_level(cPos[0], cPos[2])
        if (waterHeight != FLOOR_LOWER_LIMIT) {
            waterHeight += 125.0
            distFromWater = waterHeight - marioFloorHeight
            if (!(this.gCameraMovementFlags & CAM_MOVE_METAL_BELOW_WATER)) {
                if (distFromWater > 800.0 && (this.gPlayerCameraState.action & Mario.ACT_FLAG_METAL_WATER)) {
                    this.gCameraMovementFlags |= CAM_MOVE_METAL_BELOW_WATER
                }
            } else {
                if (distFromWater < 400.0 || !(this.gPlayerCameraState.action & Mario.ACT_FLAG_METAL_WATER)) {
                    this.gCameraMovementFlags &= ~CAM_MOVE_METAL_BELOW_WATER
                }
            }
            // If not wearing the metal cap, always stay above
            if (!(this.gCameraMovementFlags & CAM_MOVE_METAL_BELOW_WATER) && camFloorHeight < waterHeight) {
                camFloorHeight = waterHeight
            }
        } else {
            this.gCameraMovementFlags &= ~CAM_MOVE_METAL_BELOW_WATER
        }

        cPos[1] = camFloorHeight
        this.vec3f_copy(tempPos, cPos)
        tempPos[1] -= 125.0
        if (marioFloor != null && camFloorHeight <= marioFloorHeight) {
            avoidStatus = this.is_range_behind_surface(c.focus, tempPos, marioFloor, 0, -1)
            if (avoidStatus != 1 && ceilHeight > marioFloorHeight) {
                camFloorHeight = marioFloorHeight
            }
        }

        posHeight = 0.0
        if (c.mode == CAMERA_MODE_FREE_ROAM) {
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                posHeight = 375
                if (this.gCurrLevelArea == AREA_SSL_PYRAMID) {
                    posHeight /= 2
                }
            } else {
                posHeight = 100.0
            }
        }
        if ((this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) && (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            posHeight = 610
            if (this.gCurrLevelArea == AREA_SSL_PYRAMID || Area.gCurrLevelNum == LEVEL_CASTLE) {
                posHeight /= 2
            }
        }

        // Make Lakitu fly above the gas
        gasHeight = SurfaceCollision.find_poison_gas_level(cPos[0], cPos[2])
        if (gasHeight != FLOOR_LOWER_LIMIT) {
            gasHeight += 130.0
            if (gasHeight > c.pos[1]) {
                c.pos[1] = gasHeight
            }
        }


        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_HANGING || this.gPlayerCameraState.action == Mario.ACT_RIDING_HOOT) {
            /// TODO hanging or riding
        }

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE) {
            camFloorHeight = LevelUpdate.gMarioState.usedObj.rawData[oPosY] + 125.0
            if (this.gPlayerCameraState.pos[1] - 100.0 > camFloorHeight) {
                camFloorHeight = this.gPlayerCameraState.pos[1] - 100.0
            }
            ceilHeight = CELL_HEIGHT_LIMIT
            this.vec3f_copy(c.focus, this.gPlayerCameraState.pos)
        }
        if (camFloorHeight != FLOOR_LOWER_LIMIT) {
            camFloorHeight += posHeight
            this.approach_camera_height(c, camFloorHeight, 20.0)
        }
        c.pos[0] = cPos[0]
        c.pos[2] = cPos[2]
        cPos[0] = this.gLakituState.goalPos[0]
        cPos[1] = c.pos[1]
        cPos[2] = this.gLakituState.goalPos[2]
        wrapper = { dist: dist, pitch: tempPitch, yaw: tempYaw }
        MathUtil.vec3f_get_dist_and_angle(cPos, c.pos, wrapper)
        dist = wrapper.dist; tempPitch = wrapper.pitch; tempYaw = wrapper.yaw;
        // Prevent the camera from lagging behind too much
        if (dist > 50.0) {
            dist = 50.0
            MathUtil.vec3f_set_dist_and_angle(cPos, c.pos, dist, tempPitch, tempYaw)
        }
        if (this.sMarioGeometry.currFloorType != SURFACE_DEATH_PLANE) {
            MathUtil.vec3f_get_dist_and_angle(c.focus, c.pos, wrapper)
            dist = wrapper.dist; tempPitch = wrapper.pitch; tempYaw = wrapper.yaw;
            if (dist > zoomDist) {
                dist = zoomDist
                MathUtil.vec3f_set_dist_and_angle(c.focus, c.pos, dist, tempPitch, tempYaw)
            }
        }
        if (ceilHeight != CELL_HEIGHT_LIMIT) {
            ceilHeight -= 150.0
            avoidStatus = SurfaceCollision.is_range_behind_surface(c.pos, this.gPlayerCameraState.pos, ceil, 0, -1)
            if (c.pos[1] > ceilHeight && avoidStatus == 1) {
                c.pos[1] = ceilHeight
            }
        }

        if (this.gCurrLevelArea == AREA_WDW_TOWN) {
            yaw = this.clamp_positions_and_find_yaw(c.pos, c.focus, 2254.0, -3789.0, 3790.0, -2253.0)
        }
        return yaw

    }

    /**
     * The default camera mode
     * Used by close and free roam modes
     */
    mode_default_camera(c) {
        this.set_fov_function(CAM_FOV_DEFAULT);
        c.nextYaw = this.update_default_camera(c)
        this.pan_ahead_of_player(c)
    }

    /**
     * The mode used by close and free roam
     */
    mode_lakitu_camera(c) {
        this.gCameraZoomDist = 800
        this.mode_default_camera(c)
    }

    /**
     * When no other mode is active and the current R button mode is Mario
     */
    mode_mario_camera(c) {
        this.gCameraZoomDist = 350
        this.mode_default_camera(c)
    }

    /**
     * Rotates the camera around the spiral staircase.
     */
    update_spiral_stairs_camera(c, focus, pos) {
        /// The returned yaw
        let camYaw
        // unused
        let focPitch
        /// The focus (Mario)'s yaw around the stairs
        let focYaw
        // unused
        let posPitch
        /// The camera's yaw around the stairs
        let posYaw
        let cPos = [0, 0, 0]
        let checkPos = [0, 0, 0]
        let dist
        let focusHeight
        let floorHeight
        let focY

        this.handle_c_button_movement(c)
        // Set base pos to the center of the staircase
        vec3f_set(this.sFixedModeBasePosition, -1280.0, 614.0, 1740.0)

        // Focus on Mario, and move the focus up the staircase with him
        let wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        focusHeight = wrapper.focOff
        focus[0] = this.gPlayerCameraState.pos[0]
        focY = this.gPlayerCameraState.pos[1] + 125.0 + focusHeight
        focus[2] = this.gPlayerCameraState.pos[2]

        vec3f_copy(cPos, pos)
        wrapper = {}
        vec3f_get_dist_and_angle(this.sFixedModeBasePosition, focus, wrapper)
        dist = wrapper.dist; focPitch = wrapper.pitch; focYaw = wrapper.yaw
        vec3f_get_dist_and_angle(this.sFixedModeBasePosition, cPos, wrapper)
        dist = wrapper.dist; posPitch = wrapper.pitch; posYaw = wrapper.yaw

        this.sSpiralStairsYawOffset = posYaw - focYaw
        // posYaw will change if Mario is more than 90 degrees around the stairs, relative to the camera
        if (this.sSpiralStairsYawOffset < DEGREES(-90)) {
            this.sSpiralStairsYawOffset = DEGREES(-90)
        }
        if (this.sSpiralStairsYawOffset > DEGREES(90)) {
            this.sSpiralStairsYawOffset = DEGREES(90)
        }
        focYaw += this.sSpiralStairsYawOffset
        posYaw = focYaw
        //! @bug unnecessary
        wrapper.current = posYaw
        this.camera_approach_s16_symmetric_bool(wrapper, focYaw, 0x1000)
        posYaw = wrapper.current

        vec3f_set_dist_and_angle(this.sFixedModeBasePosition, cPos, 300.0, 0, posYaw)

        // Move the camera's y coord up/down the staircase
        checkPos[0] = focus[0] + (cPos[0] - focus[0]) * 0.7
        checkPos[1] = focus[1] + (cPos[1] - focus[1]) * 0.7 + 300.0
        checkPos[2] = focus[2] + (cPos[2] - focus[2]) * 0.7
        
        floorHeight = SurfaceCollision.find_floor(checkPos[0], checkPos[1] + 50.0, checkPos[2], {})
        if (floorHeight != FLOOR_LOWER_LIMIT) {
            if (floorHeight < this.sMarioGeometry.currFloorHeight) {
                floorHeight = this.sMarioGeometry.currFloorHeight
            }
            floorHeight += 125.0
            pos[1] = approach_f32(pos[1], floorHeight, 30.0, 30.0)
        }

        wrapper.current = focus[1]
        this.camera_approach_f32_symmetric_bool(wrapper, focY, 30.0)
        focus[1] = wrapper.current
        pos[0] = cPos[0]
        pos[2] = cPos[2]
        camYaw = this.calculate_yaw(focus, pos)

        return camYaw
    }

    /**
     * The mode used in the spiral staircase in the castle
     */
    mode_spiral_stairs_camera(c) {
        c.nextYaw = this.update_spiral_stairs_camera(c, c.focus, c.pos)
    }

    update_slide_or_0f_camera(c, focus, pos) {
        let yaw = this.gPlayerCameraState.faceAngle[1] + this.sModeOffsetYaw + DEGREES(180)
        
        this.focus_on_mario(focus, pos, 125.0, 125.0, 800.0, 5461, yaw)
        return this.gPlayerCameraState.faceAngle[1]
    }

    /**
     * Slide/hoot mode.
     * In this mode, the camera is always at the back of Mario, because Mario generally only moves forward.
     */
    mode_slide_camera(c) {
        if (this.sMarioGeometry.currFloorType == SURFACE_CLOSE_CAMERA || this.sMarioGeometry.currFloorType == SURFACE_NO_CAM_COL_SLIPPERY) {
            this.mode_lakitu_camera()
        } else {
            if (this.sCButtonsPressed & U_CBUTTONS) {
                this.gCameraMovementFlags |= CAM_MOVE_C_UP_MODE
            }
            c.nextYaw = this.update_slide_camera(c)
        }
    }

    store_lakitu_cam_info_for_c_up(c) {
        this.vec3f_copy(this.sCameraStoreCUp.pos, c.pos)
        this.vec3f_sub(this.sCameraStoreCUp.pos, this.gPlayerCameraState.pos)
        // Only store the y value, and as an offset from Mario, for some reason
        vec3f_set(this.sCameraStoreCUp, 0.0, c.focus[1] - this.gPlayerCameraState.pos[1], 0.0)
    }

    /**
     * Start C-Up mode. The actual mode change is handled in update_mario_inputs() in mario.c
     *
     * @see update_mario_inputs
     */
    set_mode_c_up(c) {
        if (!(this.gCameraMovementFlags & CAM_MOVE_C_UP_MODE)) {
            this.gCameraMovementFlags |= CAM_MOVE_C_UP_MODE
            this.store_lakitu_cam_info_for_c_up(c)
            this.sCameraSoundFlags &= ~CAM_SOUND_C_UP_PLAYED
            return true
        }
        return false
    }

    /**
     * Zoom the camera out of C-Up mode, avoiding moving into a wall, if possible, by searching for an open
     * direction.
     */
    exit_c_up(c) {
        let surface = null
        let checkFoc = [0, 0, 0]
        let curPos = [0, 0, 0]
        // Variables for searching for an open direction
        let searching = 0
        /// The current sector of the circle that we are checking
        let sector
        let ceilHeight
        let floorHeight
        let curDist = 0
        let curPitch = 0
        let curYaw = 0
        let checkYaw = 0

        if ((this.gCameraMovementFlags & CAM_MOVE_C_UP_MODE) && !(this.gCameraMovementFlags & CAM_MOVE_STARTED_EXITING_C_UP)) {
            this.vec3f_copy(checkFoc, c.focus)
            checkFoc[0] = this.gPlayerCameraState.pos[0]
            checkFoc[2] = this.gPlayerCameraState.pos[2]
            let wrapper = {dist: curDist, pitch: curPitch, yaw: curYaw}
            vec3f_get_dist_and_angle(checkFoc, c.pos, wrapper)
            curDist = wrapper.dist; curPitch = wrapper.pitch; curYaw = wrapper.yaw
            this.vec3f_copy(curPos, c.pos)
            curDist = 80.0

            // Search for an open direction to zoom out in, if the camera is changing to close, free roam,
            // or spiral-stairs mode
            if (this.sModeInfo.lastMode == CAMERA_MODE_SPIRAL_STAIRS || this.sModeInfo.lastMode == CAMERA_MODE_CLOSE || this.sModeInfo.lastMode == CAMERA_MODE_FREE_ROAM) {
                searching = 1
                // Check the whole circle around Mario for an open direction to zoom out to
                for (sector = 0; sector < 16 && searching == 1; sector++) {
                    vec3f_set_dist_and_angle(checkFoc, curPos, curDist, 0, curYaw + checkYaw)

                    // If there are no walls this way,
                    wrapper = {x: curPos[0], y: curPos[1], z: curPos[2]}
                    if (SurfaceCollision.f32_find_wall_collision(wrapper, 20.0, 50.0) == 0) {
                        curPos[0] = wrapper.x; curPos[1] = wrapper.y; curPos[2] = wrapper.z
                        // Start close to Mario, check for walls, floors, and ceilings all the way to the
                        // zoomed out distance
                        for (let d = curDist; d < this.gCameraZoomDist; d += 20.0) {
                            vec3f_set_dist_and_angle(checkFoc, curPos, d, 0, curYaw + checkYaw)

                            // Check if we're zooming out into a floor or ceiling
                            let ceilWrapper = {ceil: surface}
                            ceilHeight = SurfaceCollision.find_ceil(curPos[0], curPos[1] - 150.0, curPos[2], ceilWrapper) - 10.0
                            surface = ceilWrapper.ceil
                            if (surface != null && ceilHeight < curPos[1]) {
                                break
                            }
                            ceilWrapper.floor = ceilWrapper.ceil
                            floorHeight = SurfaceCollision.find_floor(curPos[0], curPos[1] + 150.0, curPos[2], ceilWrapper) + 10.0
                            surface = ceilWrapper.floor
                            if (surface != null && floorHeight > curPos[1]) {
                                break
                            }

                            // Stop checking this direction if there is a wall blocking the way
                            wrapper = {x: curPos[0], y: curPos[1], z: curPos[2]}
                            if (SurfaceCollision.f32_find_wall_collision(wrapper, 20.0, 50.0) == 1) {
                                curPos[0] = wrapper.x; curPos[1] = wrapper.y; curPos[2] = wrapper.z
                                break
                            } else {
                                curPos[0] = wrapper.x; curPos[1] = wrapper.y; curPos[2] = wrapper.z
                            }
                        }

                        // If there was no collision found all the way to the max distance, it's an opening
                        if (d >= this.gCameraZoomDist) {
                            searching = 0
                        }
                    } else {
                        curPos[0] = wrapper.x; curPos[1] = wrapper.y; curPos[2] = wrapper.z
                    }

                    // Alternate left and right, checking each 1/16th (22.5 degrees) of the circle
                    if (searching == 1) {
                        checkYaw = -checkYaw
                        if (checkYaw < 0) {
                            checkYaw -= 0x1000
                        } else {
                            checkYaw += 0x1000
                        }
                    }
                }

                // Update the stored focus and pos to the direction found in the search
                if (searching == 0) {
                    vec3f_set_dist_and_angle(checkFoc, this.sCameraStoreCUp.pos, this.gCameraZoomDist, 0, curYaw + checkYaw)
                    this.vec3f_copy(this.sCameraStoreCUp.focus, checkFoc)
                    this.vec3f_sub(this.sCameraStoreCUp.pos, this.gPlayerCameraState.pos)
                    this.vec3f_sub(this.sCameraStoreCUp.focus, this.gPlayerCameraState.pos)
                }

                this.gCameraMovementFlags |= CAM_MOVE_STARTED_EXITING_C_UP
                this.transition_next_state(c, 15)
            } else {
                // Let the next camera mode handle it
                this.gCameraMovementFlags &= ~(CAM_MOVE_STARTED_EXITING_C_UP | CAM_MOVE_C_UP_MODE)
                vec3f_set_dist_and_angle(checkFoc, c.pos, curDist, curPitch, curYaw + checkYaw)
            }
            play_sound_cbutton_down()
        }
        return 0
    }

    /**
     * The mode used when C-Up is pressed.
     */
    update_c_up(c, focus, pos) {
        let pitch = this.sCUpCameraPitch
        let yaw = this.gPlayerCameraState.faceAngle[1] + this.sModeOffsetYaw + DEGREES(180)

        this.focus_on_mario(focus, pos, 125.0, 125.0, 250.0, pitch, yaw)
        return this.gPlayerCameraState.faceAngle[1]
    }

    /**
     * Make Mario's head move in C-Up mode.
     */
    move_mario_head_c_up(c) {
        this.sCUpCameraPitch += window.playerInput.stickY * 10.0
        this.sModeOffsetYaw -= window.playerInput.stickX * 10.0

        // Bound looking up to nearly 80 degrees.
        if (this.sCUpCameraPitch > 0x38E3) {
            this.sCUpCameraPitch = 0x38E3
        }
        // Bound looking down to -45 degrees
        if (this.sCUpCameraPitch < -0x2000) {
            this.sCUpCameraPitch = -0x2000
        }

        // Bound the camera yaw to +-120 degrees
        if (this.sModeOffsetYaw > 0x5555) {
            this.sModeOffsetYaw = 0x5555
        }
        if (this.sModeOffsetYaw < -0x5555) {
            this.sModeOffsetYaw = -0x5555
        }

        // Give Mario's neck natural-looking constraints
        this.gPlayerCameraState.headRotation[0] = this.sCUpCameraPitch * 3 / 4
        this.gPlayerCameraState.headRotation[1] = this.sModeOffsetYaw * 3 / 4
    }

    /**
     * Zooms the camera in for C-Up mode
     */
    move_into_c_up(c) {
        let start = this.sModeInfo.transitionStart
        let end = this.sModeInfo.transitionEnd

        let dist  = end.dist  - start.dist
        let pitch = end.pitch - start.pitch
        let yaw   = end.yaw   - start.yaw

        // Linearly interpolate from start to end position's polar coordinates
        dist  = start.dist  + dist  * this.sModeInfo.frame / this.sModeInfo.max
        pitch = start.pitch + pitch * this.sModeInfo.frame / this.sModeInfo.max
        yaw   = start.yaw   + yaw   * this.sModeInfo.frame / this.sModeInfo.max

        // Linearly interpolate the focus from start to end
        c.focus[0] = start.focus[0] + (end.focus[0] - start.focus[0]) * this.sModeInfo.frame / this.sModeInfo.max
        c.focus[1] = start.focus[1] + (end.focus[1] - start.focus[1]) * this.sModeInfo.frame / this.sModeInfo.max
        c.focus[2] = start.focus[2] + (end.focus[2] - start.focus[2]) * this.sModeInfo.frame / this.sModeInfo.max

        MathUtil.vec3f_add(c.focus, this.gPlayerCameraState.pos)
        vec3f_set_dist_and_angle(c.focus, c.pos, dist, pitch, yaw)

        this.gPlayerCameraState.headRotation[0] = 0
        this.gPlayerCameraState.headRotation[1] = 0

        // Finished zooming in
        this.sModeInfo.frame++
        if (this.sModeInfo.frame == this.sModeInfo.max) {
            this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE
        }
    }

    /**
     * The main update function for C-Up mode
     */
    mode_c_up_camera(c) {
        // Play a sound when entering C-Up mode
        if (!(this.sCameraSoundFlags & CAM_SOUND_C_UP_PLAYED)) {
            this.play_sound_cbutton_up()
            this.sCameraSoundFlags |= CAM_SOUND_C_UP_PLAYED
        }

        // Zoom in first
        if (this.gCameraMovementFlags & CAM_MOVING_INTO_MODE) {
            this.gCameraMovementFlags |= CAM_MOVE_C_UP_MODE
            this.move_into_c_up(c)
            return 1
        }

        if (!(this.gCameraMovementFlags & CAM_MOVE_STARTED_EXITING_C_UP)) {
            // Normal update
            this.move_mario_head_c_up(c)
            this.update_c_up(c, c.focus, c.pos)
        } else {
            // Exiting C-Up
            if (this.sStatusFlags & CAM_FLAG_TRANSITION_OUT_OF_C_UP) {
                // Retrieve the previous position and focus
                this.vec3f_copy(c.pos, this.sCameraStoreCUp.pos)
                MathUtil.vec3f_add(c.pos, this.gPlayerCameraState.pos)
                this.vec3f_copy(c.focus, this.sCameraStoreCUp.focus)
                MathUtil.vec3f_add(c.focus, this.gPlayerCameraState.pos)
                // Make Mario look forward
                let wrapper = {current: this.gPlayerCameraState.headRotation[0]}
                this.camera_approach_s16_symmetric_bool(wrapper, 0, 1024)
                this.gPlayerCameraState.headRotation[0] = wrapper.current
                wrapper.current = this.gPlayerCameraState.headRotation[1]
                this.camera_approach_s16_symmetric_bool(wrapper, 0, 1024)
                this.gPlayerCameraState.headRotation[1] = wrapper.current
            } else {
                // Finished exiting C-Up
                this.gCameraMovementFlags &= ~(CAM_MOVE_STARTED_EXITING_C_UP | CAM_MOVE_C_UP_MODE)
            }
        }
        this.sPanDistance = 0.0

        // Exit C-Up mode
        if (window.playerInput.buttonPressedA || window.playerInput.buttonPressedB || window.playerInput.buttonPressedCd || window.playerInput.buttonPressedCl || window.playerInput.buttonPressedCr) {
            this.exit_c_up(c)
        }
        return 0
    }

    /**
     * Used when Mario is in a cannon.
     */
    update_in_cannon(c, focus, pos) {
        this.focus_on_mario(pos, focus, 125.0 + this.sCannonYOffset, 125.0, 800.0, this.gPlayerCameraState.faceAngle[0], this.gPlayerCameraState.faceAngle[1])

        return this.gPlayerCameraState.faceAngle[1]
    }

    /**
     * Updates the camera when Mario is in a cannon.
     * sCannonYOffset is used to make the camera rotate down when Mario has just entered the cannon
     */
    mode_cannon_camera(c) {
        this.sLakituPitch = 0
        this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE
        c.nextYaw = this.update_in_cannon(c, c.focus, c.pos)
        if (window.playerInput.buttonPressedA) {
            this.set_camera_mode(c, CAMERA_MODE_BEHIND_MARIO, 1)
            this.sPanDistance = 0.0
            this.sCannonYOffset = 0.0
            this.sStatusFlags &= ~CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
        } else {
            this.sCannonYOffset = approach_f32(this.sCannonYOffset, 0.0, 100.0, 100.0)
        }
    }

    /**
     * Cause Lakitu to fly to the next Camera position and focus over a number of frames.
     *
     * At the end of each frame, Lakitu's position and focus ("state") are stored.
     * Calling this function makes next_lakitu_state() fly from the last frame's state to the
     * current frame's calculated state.
     *
     * @see next_lakitu_state()
     */
    transition_next_state(c, frames) {
        if (!(this.sStatusFlags & CAM_FLAG_FRAME_AFTER_CAM_INIT)) {
            this.sStatusFlags |= (CAM_FLAG_START_TRANSITION | CAM_FLAG_TRANSITION_OUT_OF_C_UP)
            this.sModeTransition.framesLeft = frames
        }
    }

    /**
     * Sets the camera mode to `newMode` and initializes sModeTransition with `numFrames` frames
     *
     * Used to change the camera mode to 'level-oriented' modes
     *      namely: RADIAL/OUTWARD_RADIAL, 8_DIRECTIONS, FREE_ROAM, CLOSE, SPIRAL_STAIRS, and SLIDE_HOOT
     */
    transition_to_camera_mode(c, newMode, numFrames) {
        if (c.mode != newMode) {
            this.sModeInfo.newMode = (newMode != -1) ? newMode : this.sModeInfo.lastMode
            this.sModeInfo.lastMode = c.mode
            c.mode = this.sModeInfo.newMode

            // Clear movement flags that would affect the transition
            this.gCameraMovementFlags &= ~(CAM_MOVE_RESTRICT | CAM_MOVE_ROTATE)
            if (!(this.sStatusFlags & CAM_FLAG_FRAME_AFTER_CAM_INIT)) {
                this.transition_next_state(c, numFrames)
                this.sCUpCameraPitch = 0
                this.sModeOffsetYaw = 0
                this.sLakituDist = 0
                this.sLakituPitch = 0
                this.sAreaYawChange = 0
                this.sPanDistance = 0.0
                this.sCannonYOffset = 0.0
            }
        }
    }

    /**
     * Used to change the camera mode between its default/previous and certain Mario-oriented modes,
     *      namely: C_UP, WATER_SURFACE, CLOSE, and BEHIND_MARIO
     *
     * Stores the current pos and focus in sModeInfo->transitionStart, and
     * stores the next pos and focus into sModeInfo->transitionEnd. These two fields are used in
     * move_into_c_up().
     *
     * @param mode the mode to change to, or -1 to switch to the previous mode
     * @param frames number of frames the transition should last, only used when entering C_UP
     */

    set_camera_mode(c, mode, frames) {
        let start = this.sModeInfo.transitionStart
        let end = this.sModeInfo.transitionEnd

        if (mode == CAMERA_MODE_WATER_SURFACE && this.gCurrLevelArea == AREA_TTM_OUTSIDE) {

        } else {
            // Clear movement flags that would affect the transition
            this.gCameraMovementFlags &= ~(CAM_MOVE_RESTRICT | CAM_MOVE_ROTATE)
            this.gCameraMovementFlags |= CAM_MOVING_INTO_MODE
            if (mode == CAMERA_MODE_NONE) {
                mode = CAMERA_MODE_CLOSE
            }
            this.sCUpCameraPitch = 0
            this.sModeOffsetYaw = 0
            this.sLakituDist = 0
            this.sLakituPitch = 0
            this.sAreaYawChange = 0

            this.sModeInfo.newMode = (mode != -1) ? mode : this.sModeInfo.lastMode
            this.sModeInfo.lastMode = c.mode
            this.sModeInfo.max = frames
            this.sModeInfo.frame = 1

            c.mode = this.sModeInfo.newMode
            this.gLakituState.mode = c.mode

            this.vec3f_copy(end.focus, c.focus)
            this.vec3f_sub(end.focus, this.gPlayerCameraState.pos);

            this.vec3f_copy(end.pos, c.pos)
            this.vec3f_sub(end.pos, this.gPlayerCameraState.pos)

            // sModeTransitions
            if (this.sModeTransitions[this.sModeInfo.newMode] == null) {
                throw "unknown camera case: " + this.sModeInfo.newMode
            } else {
                this.sModeTransitions[this.sModeInfo.newMode](c, end.focus, end.pos)
            }

            // End was updated by sModeTransitions
            this.vec3f_sub(end.focus, this.gPlayerCameraState.pos);
            this.vec3f_sub(end.pos, this.gPlayerCameraState.pos);

            this.vec3f_copy(start.focus, this.gLakituState.curFocus);
            this.vec3f_sub(start.focus, this.gPlayerCameraState.pos);

            this.vec3f_copy(start.pos, this.gLakituState.curPos);
            this.vec3f_sub(start.pos, this.gPlayerCameraState.pos);

            MathUtil.vec3f_get_dist_and_angle(start.focus, start.pos, start)
            MathUtil.vec3f_get_dist_and_angle(end.focus, end.pos, end)
        }
    }

    /**
     * Updates Lakitu's position/focus and applies camera shakes.
     */
    update_lakitu(c) {
        let newPos = [0,0,0], newFoc = [0,0,0]
        if (!(this.gCameraMovementFlags & CAM_MOVE_PAUSE_SCREEN)) {
            let newYaw = this.next_lakitu_state(newPos, newFoc, c.pos, c.focus, this.sOldPosition, this.sOldFocus, c.nextYaw)

            let wrapper = { current: c.yaw }
            this.set_or_approach_s16_symmetric(wrapper, newYaw, this.sYawSpeed)
            c.yaw = wrapper.current
            this.sStatusFlags &= ~CAM_FLAG_UNUSED_CUTSCENE_ACTIVE

            // Update old state
            vec3f_copy(this.sOldPosition, newPos)
            vec3f_copy(this.sOldFocus, newFoc)

            this.gLakituState.yaw = c.yaw
            this.gLakituState.nextYaw = c.nextYaw
            vec3f_copy(this.gLakituState.goalPos, c.pos)
            vec3f_copy(this.gLakituState.goalFocus, c.focus)

            // Simulate lakitu flying to the new position and turning towards the new focus
            //console.log("lakitu pos: " + this.gLakituState.pos + " goal: " + newPos)
            this.set_or_approach_vec3f_asymptotic(this.gLakituState.curPos, newPos,
                                                 this.gLakituState.posHSpeed, this.gLakituState.posVSpeed,
                                                 this.gLakituState.posHSpeed)
            this.set_or_approach_vec3f_asymptotic(this.gLakituState.curFocus, newFoc,
                                                 this.gLakituState.focHSpeed, this.gLakituState.focVSpeed,
                                                 this.gLakituState.focHSpeed)


            // Adjust lakitu's speed back to normal --- so gross
            wrapper = { current: this.gLakituState.focHSpeed }
            this.set_or_approach_f32_asymptotic(wrapper, 0.8, 0.05)
            this.gLakituState.focHSpeed = wrapper.current
            wrapper.current = this.gLakituState.focVSpeed
            this.set_or_approach_f32_asymptotic(wrapper, 0.3, 0.05)
            this.gLakituState.focVSpeed = wrapper.current
            wrapper.current = this.gLakituState.posHSpeed
            this.set_or_approach_f32_asymptotic(wrapper, 0.3, 0.05)
            this.gLakituState.posHSpeed = wrapper.current
            wrapper.current = this.gLakituState.posVSpeed
            this.set_or_approach_f32_asymptotic(wrapper, 0.3, 0.05)
            this.gLakituState.posVSpeed = wrapper.current

            // Turn on smooth movement when it hasn't been blocked for 2 frames
            if (this.sStatusFlags & CAM_FLAG_BLOCK_SMOOTH_MOVEMENT) {
                this.sStatusFlags &= ~CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
            } else {
                this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
            }
            vec3f_copy(this.gLakituState.pos, this.gLakituState.curPos)
            vec3f_copy(this.gLakituState.focus, this.gLakituState.curFocus)

            const output = {}
            MathUtil.vec3f_get_dist_and_angle(this.gLakituState.pos, this.gLakituState.focus, output)
            this.gLakituState.focusDistance = output.dist
            this.gLakituState.oldPitch = output.pitch
            this.gLakituState.oldYaw = output.yaw

            this.gLakituState.roll = 0

            // Apply camera shakes
            this.shake_camera_pitch(this.gLakituState.pos, this.gLakituState.focus)
            this.shake_camera_yaw(this.gLakituState.pos, this.gLakituState.focus)
            this.shake_camera_roll()
            this.shake_camera_handheld(this.gLakituState.pos, this.gLakituState.focus)

            if (this.gPlayerCameraState.action == Mario.ACT_DIVE && this.gLakituState.lastFrameAction != Mario.ACT_DIVE) {
                this.set_camera_shake_from_hit(SHAKE_HIT_FROM_BELOW)
            }

            this.gLakituState.roll += this.sHandheldShakeRoll
            this.gLakituState.roll += this.gLakituState.keyDanceRoll

            if (c.mode != CAMERA_MODE_C_UP && c.cutscene == 0) {
                ObjectListProc.gCheckingSurfaceCollisionsForCamera = true
                let distToFloor = SurfaceCollision.find_floor(this.gLakituState.pos[0], this.gLakituState.pos[1] + 20, this.gLakituState.pos[2], {})
                if (distToFloor != FLOOR_LOWER_LIMIT) {
                    distToFloor += 100
                    if (this.gLakituState.pos[1] < (distToFloor)) {
                        this.gLakituState.pos[1] = distToFloor
                    } else {
                        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false
                    }
                }
            }

            vec3f_copy(this.sModeTransition.marioPos, this.gPlayerCameraState.pos)
        }

        this.clamp_pitch(this.gLakituState.pos, this.gLakituState.focus, 0x3E00, -0x3E00)
        this.gLakituState.mode = c.mode
        this.gLakituState.defMode = c.defMode
    }

    /**
     * The main camera update function.
     * Gets controller input, checks for cutscenes, handles mode changes, and moves the camera
     */
    update_camera(c) {
        this.gCamera = c
        this.update_camera_hud_status(c)
        if (c.cutscene == 0) {
            // Only process R_TRIG if 'fixed' is not selected in the menu
            if (this.cam_select_alt_mode(0) == CAM_SELECTION_MARIO) {
                if (window.playerInput.buttonPressedRt) {
                    if (this.set_cam_angle(0) == CAM_ANGLE_LAKITU) {
                        this.set_cam_angle(CAM_ANGLE_MARIO)
                    } else {
                        this.set_cam_angle(CAM_ANGLE_LAKITU)
                    }
                }
            }
            this.play_sound_if_cam_switched_to_lakitu_or_mario()
        }

        this.sStatusFlags &= ~CAM_FLAG_FRAME_AFTER_CAM_INIT
        if (this.gCameraMovementFlags & CAM_MOVE_INIT_CAMERA) {
            this.init_camera(c)
            this.gCameraMovementFlags &= ~CAM_MOVE_INIT_CAMERA
            this.sStatusFlags |= CAM_FLAG_FRAME_AFTER_CAM_INIT
        }

        // Store previous geometry information 
        this.sMarioGeometry.prevFloorHeight = this.sMarioGeometry.currFloorHeight
        this.sMarioGeometry.prevCeilHeight = this.sMarioGeometry.currCeilHeight
        this.sMarioGeometry.prevFloor = this.sMarioGeometry.currFloor
        this.sMarioGeometry.prevCeil = this.sMarioGeometry.currCeil
        this.sMarioGeometry.prevFloorType = this.sMarioGeometry.currFloorType
        this.sMarioGeometry.prevCeilType = this.sMarioGeometry.currCeilType

        this.find_mario_floor_and_ceil(this.sMarioGeometry) 
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = true
        vec3f_copy(c.pos, this.gLakituState.goalPos)
        vec3f_copy(c.focus, this.gLakituState.goalFocus)

        c.yaw = this.gLakituState.yaw
        c.nextYaw = this.gLakituState.nextYaw
        c.mode = this.gLakituState.mode
        c.defMode = this.gLakituState.defMode

        this.camera_course_processing(c)
        this.stub_camera_3(c)
        let wrapper = {}
        c.sCButtonsPressed = this.find_c_buttons_pressed(c.sCButtonsPressed, wrapper);

        if (c.cutscene != 0) {
            this.sYawSpeed = 0
            this.play_cutscene(c)
            this.sFramesSinceCutsceneEnded = 0
        } else {
            // Clear the recent cutscene after 8 frames
            if (this.gRecentCutscene != 0 && this.sFramesSinceCutsceneEnded < 8) {
                this.sFramesSinceCutsceneEnded++
                if (this.sFramesSinceCutsceneEnded >= 8) {
                    this.gRecentCutscene = 0
                    this.sFramesSinceCutsceneEnded = 0
                }
            }
        }
        // If not in a cutscene, do mode processing
        if (c.cutscene == 0) {
            this.sYawSpeed = 0x400

            if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
                switch (c.mode) {
                        case CAMERA_MODE_BEHIND_MARIO:
                            this.mode_behind_mario_camera(c)
                            break

                        case CAMERA_MODE_C_UP:
                            this.mode_c_up_camera(c)
                            break

                        case CAMERA_MODE_WATER_SURFACE:
                            this.mode_water_surface_camera(c)
                            break

                        case CAMERA_MODE_INSIDE_CANNON:
                            this.mode_cannon_camera(c)
                            break

                        default:
                            this.mode_mario_camera(c)
                    }
            } else {
                switch (c.mode) {
                    case CAMERA_MODE_BEHIND_MARIO:
                        this.mode_behind_mario_camera(c)
                        break

                    case CAMERA_MODE_C_UP:
                        mode_c_up_camera(c);
                        break;

                    case CAMERA_MODE_WATER_SURFACE:
                        this.mode_water_surface_camera(c)
                        break

                    case CAMERA_MODE_INSIDE_CANNON:
                        this.mode_cannon_camera(c);
                        break;

                    case CAMERA_MODE_8_DIRECTIONS:
                        this.mode_8_directions_camera(c);
                        break;

                    case CAMERA_MODE_RADIAL:
                        this.mode_radial_camera(c);
                        break;

                    case CAMERA_MODE_OUTWARD_RADIAL:
                        this.mode_outward_radial_camera(c);
                        break;

                    case CAMERA_MODE_CLOSE:
                        this.mode_lakitu_camera(c)
                        break

                    case CAMERA_MODE_FREE_ROAM:
                        this.mode_lakitu_camera(c)
                        break

                    case CAMERA_MODE_BOSS_FIGHT:
                        this.mode_boss_fight_camera(c);
                        break;

                    case CAMERA_MODE_PARALLEL_TRACKING:
                        this.mode_parallel_tracking_camera(c);
                        break;

                    case CAMERA_MODE_SLIDE_HOOT:
                        this.mode_slide_camera(c);
                        break;

                    case CAMERA_MODE_FIXED:
                        this.mode_fixed_camera(c);
                        break;

                    case CAMERA_MODE_SPIRAL_STAIRS:
                        this.mode_spiral_stairs_camera(c);
                        break;

                    default: throw "unknown camera case: " + c.mode
                }
            }
        }

        this.start_cutscene(c, this.get_cutscene_from_mario_status(c))
        this.stub_camera_2(c)
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false
        if (Area.gCurrLevelNum != LEVEL_CASTLE) {
            // If fixed camera is selected as the alternate mode, then fix the camera as long as the right
            // trigger is held
            if ((c.cutscene == 0 && window.playerInput.buttonDownRt && this.cam_select_alt_mode(0) == CAM_SELECTION_FIXED)
            || (this.gCameraMovementFlags & CAM_MOVE_FIX_IN_PLACE)
            || (this.gPlayerCameraState.action) == ACT_GETTING_BLOWN) {
                
                // If this is the first frame that R_TRIG is held, play the "click" sound
                if (c.cutscene == 0 && (window.playerInput.buttonPressedRt) && this.cam_select_alt_mode(0) == CAM_SELECTION_FIXED) {
                    this.sCameraSoundFlags |= CAM_SOUND_FIXED_ACTIVE
                    this.play_sound_rbutton_changed()
                }

                // Fixed mode only prevents Lakitu from moving. The camera pos still updates, so
                // Lakitu will fly to his next position as normal whenever R_TRIG is released.
                this.gLakituState.posHSpeed = 0.0
                this.gLakituState.posVSpeed = 0.0

                c.newYaw = this.calculate_yaw(this.gLakituState.focus, this.gLakituState.pos)
                c.yaw = c.nextYaw
                this.gCameraMovementFlags &= ~CAM_MOVE_FIX_IN_PLACE
            } else {
                if (this.sCameraSoundFlags & CAM_SOUND_FIXED_ACTIVE) {
                    this.play_sound_rbutton_changed()
                    this.sCameraSoundFlags &= ~CAM_SOUND_FIXED_ACTIVE
                }
            }
        } else {
            if ((window.playerInput.buttonPressedRt) && this.cam_select_alt_mode(0) == CAM_SELECTION_FIXED) {
                this.play_sound_button_change_blocked()
            }
        }

        this.update_lakitu(c) 

        this.gLakituState.lastFrameAction = this.gPlayerCameraState.action
    }

    /**
     * Reset all the camera variables to their arcane defaults
     */
    reset_camera(c) {
        this.gCamera = c
        this.gCameraMovementFlags = 0
        this.s2ndRotateFlags = 0
        this.sStatusFlags = 0
        this.gCutsceneTimer = 0
        this.sCutsceneShot = 0
        this.gCutsceneObjSpawn = 0
        this.gObjCutsceneDone = false
        this.gCutsceneFocus = null
        this.gSecondCameraFocus = null
        this.sCButtonsPressed = 0
        vec3f_copy(this.sModeTransition.marioPos, this.gPlayerCameraState.pos)
        this.sModeTransition.framesLeft = 0
        this.gCameraMovementFlags = 0
        this.gCameraMovementFlags |= CAM_MOVE_INIT_CAMERA
        this.sStatusFlags = 0
        this.sCameraSoundFlags = 0
        this.sCUpCameraPitch = 0
        this.sModeOffsetYaw = 0
        this.sSpiralStairsYawOffset = 0
        this.sLakituDist = 0
        this.sLakituPitch = 0
        this.sAreaYaw = 0
        this.sAreaYawChange = 0
        this.sPanDistance = 0
        this.sCannonYOffset = 0
        this.sZoomAmount = 0
        this.sZeroZoomDist = 0
        this.sBehindMarioSoundTimer = 0;
        this.sCSideButtonYaw = 0;
        this.s8DirModeBaseYaw = 0;
        this.s8DirModeYawOffset = 0;
        c.doorStatus = DOOR_DEFAULT
        this.gPlayerCameraState.headRotation[0] = 0
        this.gPlayerCameraState.headRotation[1] = 0
        this.gPlayerCameraState.cameraEvent = 0
        this.gPlayerCameraState.usedObj = null
        this.gLakituState.shakeMagnitude[0] = 0
        this.gLakituState.shakeMagnitude[1] = 0
        this.gLakituState.shakeMagnitude[2] = 0
        this.gLakituState.lastFrameAction = 0
        this.sFOVState.fovFunc = CAM_FOV_DEFAULT
        this.sFOVState.fov = 45
        this.sFOVState.fovOffset = 0
        this.sObjectCutscene = 0
        this.gRecentCutscene = 0
    }

    init_camera(c) {
        this.sCreditsPlayer2Pitch = 0
        this.sCreditsPlayer2Yaw = 0
        this.gPrevLevel = this.gCurrLevelArea / 16
        this.gCurrLevelArea = Area.gCurrLevelNum * 16 + Area.gCurrentArea.index
        this.sSelectionFlags &= CAM_MODE_MARIO_SELECTED
        this.sFramesPaused = 0
        this.gLakituState.mode = c.mode
        this.gLakituState.defMode = c.defMode
        this.gLakituState.posHSpeed = 0.3
        this.gLakituState.posVSpeed = 0.3
        this.gLakituState.focHSpeed = 0.8
        this.gLakituState.roll = 0
        this.gLakituState.keyDanceRoll = 0
        this.sHandheldShakeMag = 0
        this.sHandheldShakeInc = 0.0

        this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT

        this.sCastleEntranceOffset = [0, 0, 0]
        this.sPlayer2FocusOffset = [0, 0, 0] 

        this.find_mario_floor_and_ceil(this.sMarioGeometry)
        this.sMarioGeometry.prevFloorHeight = this.sMarioGeometry.currFloorHeight 
        this.sMarioGeometry.prevCeilHeight = this.sMarioGeometry.currCeilHeight
        this.sMarioGeometry.prevFloor = this.sMarioGeometry.currFloor
        this.sMarioGeometry.prevCeil = this.sMarioGeometry.currCeil
        this.sMarioGeometry.prevFloorType = this.sMarioGeometry.currFloorType
        this.sMarioGeometry.prevCeilType = this.sMarioGeometry.currCeilType

        c.cutscene = 0
        const marioOffset = [0, 125, 400]

        switch (Area.gCurrLevelNum) {
            case LEVEL_BOWSER_1:
                this.start_cutscene(c, CUTSCENE_ENTER_BOWSER_ARENA)
                break
            case LEVEL_BOWSER_2:
                this.start_cutscene(c, CUTSCENE_ENTER_BOWSER_ARENA)
                break
            case LEVEL_BOWSER_3:
                this.start_cutscene(c, CUTSCENE_ENTER_BOWSER_ARENA)
                break

            //! Hardcoded position checks determine which cutscene to play when Mario enters castle grounds.
            case LEVEL_CASTLE_GROUNDS:
                if (!this.is_within_100_units_of_mario(-1328, 260, 4646)) {
                    marioOffset[0] = -400
                    marioOffset[2] = -800
                }
                if (this.is_within_100_units_of_mario(-6901.0, 2376.0, -6509.0)) {
                    this.start_cutscene(c, CUTSCENE_EXIT_WATERFALL)
                }
                if (this.is_within_100_units_of_mario(5408.0, 4500.0, 3637.0)) {
                    this.start_cutscene(c, CUTSCENE_EXIT_FALL_WMOTR)
                }
                this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
                break
            case LEVEL_SA:
                marioOffset[2] = 200.0
                break
            case LEVEL_CASTLE_COURTYARD:
                marioOffset[2] = -300.0
                break
            case LEVEL_LLL:
                this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
                break;
            case LEVEL_CASTLE:
                marioOffset[2] = 150.0
                break
            case LEVEL_RR:
                vec3f_set(this.sFixedModeBasePosition, -2985.0, 478.0, -5568.0)
                break
        }
        switch (this.gCurrLevelArea) {
            case AREA_SSL_EYEROK:
                vec3f_set(marioOffset, 0.0, 500.0, -100.0)
                break
            case AREA_CCM_SLIDE:
                marioOffset[2] = -300.0
                break
            case AREA_THI_WIGGLER:
                marioOffset[2] = -300.0
                break
            case AREA_SL_IGLOO:
                marioOffset[2] = -300.0
                break
            case AREA_SL_OUTSIDE:
                if (this.is_within_100_units_of_mario(257.0, 2150.0, 1399.0)) {
                    marioOffset[2] = -300.0
                }
                break
            case AREA_CCM_OUTSIDE:
                this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
                break
            case AREA_TTM_OUTSIDE:
                this.gLakituState.mode = CAMERA_MODE_RADIAL
                break
        }
        if (!this.gLakituState.mode) this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
        c.mode = this.gLakituState.mode

        if (c.mode == CAMERA_MODE_8_DIRECTIONS) {
            this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
        }

        this.offset_rotated(c.pos, this.gPlayerCameraState.pos, marioOffset, this.gPlayerCameraState.faceAngle)
        if (c.mode != CAMERA_MODE_BEHIND_MARIO) {
            c.pos[1] = SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 100, this.gPlayerCameraState.pos[2], this) + 125
        }
        vec3f_copy(c.focus, this.gPlayerCameraState.pos)
        vec3f_copy(this.gLakituState.curPos, c.pos)
        vec3f_copy(this.gLakituState.curFocus, c.focus)
        vec3f_copy(this.gLakituState.goalPos, c.pos)
        vec3f_copy(this.gLakituState.goalFocus, c.focus)
        vec3f_copy(this.gLakituState.pos, c.pos)
        vec3f_copy(this.gLakituState.focus, c.focus)

        this.gLakituState.yaw = this.calculate_yaw(c.focus, c.pos)
        this.gLakituState.nextYaw = this.gLakituState.yaw
        c.yaw = this.gLakituState.yaw
        c.nextYaw = this.gLakituState.yaw
    }

    /**
     * Zooms out the camera if paused and the level is 'outside', as determined by sZoomOutAreaMasks.
     *
     * Because gCurrLevelArea is assigned gCurrLevelNum * 16 + gCurrentArea->index,
     * dividing by 32 maps 2 levels to one index.
     *
     * areaBit definition:
     * (gCurrLevelArea & 0x10) / 4):
     *      This adds 4 to the shift if the level is an odd multiple of 16
     *
     * ((gCurrLevelArea & 0xF) - 1) & 3):
     *      This isolates the lower 16 'area' bits, subtracts 1 because areas are 1-indexed, and effectively
     *      modulo-4's the result, because each 8-bit mask only has 4 area bits for each level
     */
    zoom_out_if_paused_and_outside(c) {
        let areaMaskIndex = this.gCurrLevelArea / 32
        let areaBit = 2 << (((this.gCurrLevelArea & 0x10) / 4) + (((this.gCurrLevelArea & 0xF) - 1) & 3))

        if (areaMaskIndex >= LEVEL_MAX / 2) {
            areaMaskIndex = 0
            areaBit = 0
        }
        if (this.gCameraMovementFlags & CAM_MOVE_PAUSE_SCREEN) {
            if (this.sFramesPaused >= 2) {
                if (this.sZoomOutAreaMasks[areaMaskIndex] & areaBit) {
                    
                    c.focus[0] = this.gCamera.areaCenX
                    c.focus[1] = (this.gPlayerCameraState.pos[1] + this.gCamera/areaCenY) / 2
                    c.focus[2] = this.gCamera.areaCenZ
                    let wrapper = {}
                    vec3f_get_dist_and_angle(c.focus, this.gPlayerCameraState.pos, wrapper)
                    let yaw = wrapper.yaw
                    vec3f_set_dist_and_angle(this.gPlayerCameraState.pos, c.pos, 6000.0, 0x1000, yaw)
                    if (Area.gCurrLevelNum != LEVEL_THI) {
                        this.find_in_bounds_yaw_wdw_bob_thi(c.pos, c.focus, 0)
                    }
                }
            } else {
                this.sFramesPaused++
            }
        } else {
            this.sFramesPaused = 0
        }
    }

    select_mario_cam_mode() {
        this.sSelectionFlags = CAM_MODE_MARIO_SELECTED
    }

    /**
     * Allocate the GraphNodeCamera's config.camera, and copy `c`'s focus to the Camera's area center point.
     */
    create_camera(graphNode) {
        const mode = graphNode.config.mode

        graphNode.config.camera = {
            mode: mode,
            defMode: mode,
            cutscene: 0,
            doorStatus: DOOR_DEFAULT,
            areaCenX: graphNode.focus[0],
            areaCenY: graphNode.focus[1],
            areaCenZ: graphNode.focus[2],
            yaw: 0,
            pos: [...graphNode.pos],
            focus: [...graphNode.focus]
        }
    }

    update_graph_node_camera(graphNode) {
        graphNode.rollScreen = this.gLakituState.roll
        vec3f_copy(graphNode.pos, this.gLakituState.pos)
        vec3f_copy(graphNode.focus, this.gLakituState.focus)
        this.zoom_out_if_paused_and_outside(graphNode)
    }

    geo_camera_main(callContext, graphNode) {
        switch (callContext) {
            case GEO_CONTEXT_CREATE:
                this.create_camera(graphNode)
                break
            case GEO_CONTEXT_RENDER:
                this.update_graph_node_camera(graphNode)
                break
        }
    }

    stub_camera_2(c) {
    }
    stub_camera_3(c) {
    }

    vec3f_sub(dst, src) {
        dst[0] -= src[0]
        dst[1] -= src[1]
        dst[2] -= src[2]
    }

    object_pos_to_vec3f(dst, o) {
        dst[0] = o.rawData[oPosX]
        dst[1] = o.rawData[oPosY]
        dst[2] = o.rawData[oPosZ]
    }

    vec3f_to_object_pos(o, src) {
        o.rawData[oPosX] = src[0]
        o.rawData[oPosY] = src[1]
        o.rawData[oPosZ] = src[2]
    }

    /**
     * Produces values using a cubic b-spline curve. Basically Q is the used output,
     * u is a value between 0 and 1 that represents the position along the spline,
     * and a0-a3 are parameters that define the spline.
     *
     * The spline is described at www2.cs.uregina.ca/~anima/408/Notes/Interpolation/UniformBSpline.htm
     */
    evaluate_cubic_spline(u, Q, a0, a1, a2, a3) {
        let B = [0,0,0,0]

        if (u > 1.0) {
            u = 1.0
        }

        B[0] = ((1.0 - u) ** 3) / 6.0
        B[1] = (u ** 3) / 2.0 - u ** 2 + 0.6666667
        B[2] = -(u ** 3) / 2.0 + (u ** 2) / 2.0 + u / 2.0 + 0.16666667
        B[3] = (u ** 3) / 6.0

        Q[0] = B[0] * a0[0] + B[1] * a1[0] + B[2] * a2[0] + B[3] * a3[0]
        Q[1] = B[0] * a0[1] + B[1] * a1[1] + B[2] * a2[1] + B[3] * a3[0]
        Q[2] = B[0] * a0[2] + B[1] * a1[2] + B[2] * a2[2] + B[3] * a3[0]
    }

    /**
     * NOTE: ptrWrapper.splineSegment, ptrWrapper.progress are the vars
     * 
     * Computes the point that is `progress` percent of the way through segment `splineSegment` of `spline`,
     * and stores the result in `p`. `progress` and `splineSegment` are updated if `progress` becomes >= 1.0.
     *
     * When neither of the next two points' speeds == 0, the number of frames is between 1 and 255. Otherwise
     * it's infinite.
     *
     * To calculate the number of frames it will take to progress through a spline segment:
     * If the next two speeds are the same and nonzero, it's 1.0 / firstSpeed.
     *
     * s1 and s2 are short hand for first/secondSpeed. The progress at any frame n is defined by a recurrency relation:
     *      p(n+1) = (s2 - s1 + 1) * p(n) + s1
     * Which can be written as
     *      p(n) = (s2 * ((s2 - s1 + 1)^(n) - 1)) / (s2 - s1)
     *
     * Solving for the number of frames:
     *      n = log(((s2 - s1) / s1) + 1) / log(s2 - s1 + 1)
     *
     * @return 1 if the point has reached the end of the spline, when `progress` reaches 1.0 or greater, and
     * the 4th CutsceneSplinePoint in the current segment away from spline[splineSegment] has an index of -1.
     */
    move_point_along_spline(p, spline, ptrWrapper) {
        
        let finished = 0
        let controlPoints = [
            [0,0,0],[0,0,0],[0,0,0],[0,0,0]
        ]
        let u = ptrWrapper.progress
        let firstSpeed = 0
        let secondSpeed = 0
        let segment = ptrWrapper.splineSegment

        if (ptrWrapper.splineSegment < 0) {
            segment = 0
            u = 0
        }
        if (spline[segment].index == -1 || spline[segment + 1].index == -1 || spline[segment + 2].index == -1) {
            return 1
        }

        for (let i = 0; i < 4; i++) {
            controlPoints[i][0] = spline[segment + i].point[0]
            controlPoints[i][1] = spline[segment + i].point[1]
            controlPoints[i][2] = spline[segment + i].point[2]
        }
        this.evaluate_cubic_spline(u, p, controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3])

        if (spline[ptrWrapper.splineSegment + 1].speed != 0) {
            firstSpeed = 1.0 / spline[ptrWrapper.splineSegment + 1].speed
        }
        if (spline[ptrWrapper.splineSegment + 2].speed != 0) {
            secondSpeed = 1.0 / spline[ptrWrapper.splineSegment + 1].speed
        }
        let progressChange = (secondSpeed - firstSpeed) * ptrWrapper.progress + firstSpeed

        ptrWrapper.progress += progressChange
        if (1 <= ptrWrapper.progress) {
            ptrWrapper.splineSegment++
            if (spline[ptrWrapper.splineSegment + 3].index == -1) {
                ptrWrapper.splineSegment = 0
                finished = 1
            }
            ptrWrapper.progress--
        }

        return finished
    }

    /**
     * If `selection` is 0, just get the current selection
     * If `selection` is 1, select 'Mario' as the alt mode.
     * If `selection` is 2, select 'fixed' as the alt mode.
     *
     * @return the current selection
     */
    cam_select_alt_mode(selection) {
        let mode = CAM_SELECTION_FIXED

        if (selection == CAM_SELECTION_MARIO) {
            if (!(this.sSelectionFlags & CAM_MODE_MARIO_SELECTED)) {
                this.sSelectionFlags |= CAM_MODE_MARIO_SELECTED
            }
            this.sCameraSoundFlags |= CAM_SOUND_UNUSED_SELECT_MARIO
        }

        // The alternate mode is up-close, but the player just selected fixed in the pause menu
        if (selection == CAM_SELECTION_FIXED && (this.sSelectionFlags & CAM_MODE_MARIO_SELECTED)) {
            // So change to normal mode in case the user paused in up-close mode
            this.set_cam_angle(CAM_ANGLE_LAKITU)
            this.sSelectionFlags &= ~CAM_MODE_MARIO_SELECTED
            this.sCameraSoundFlags |= CAM_SOUND_UNUSED_SELECT_FIXED
        }

        if (this.sSelectionFlags & CAM_MODE_MARIO_SELECTED) {
            mode = CAM_SELECTION_MARIO
        }
        return mode
    }

    /**
     * Sets the camera angle to either Lakitu or Mario mode. Returns the current mode.
     *
     * If `mode` is 0, just returns the current mode.
     * If `mode` is 1, start Mario mode
     * If `mode` is 2, start Lakitu mode
     */
    set_cam_angle(mode) {
        let curMode = CAM_ANGLE_LAKITU
        
        // Switch to Mario mode
        if (mode == CAM_ANGLE_MARIO && !(this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            this.sSelectionFlags |= CAM_MODE_MARIO_ACTIVE
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                this.sSelectionFlags |= CAM_MODE_LAKITU_WAS_ZOOMED_OUT
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
            }
            this.sCameraSoundFlags |= CAM_SOUND_MARIO_ACTIVE
        }

        // Switch back to normal mode
        if (mode == CAM_ANGLE_LAKITU && (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            this.sSelectionFlags &= ~CAM_MODE_MARIO_ACTIVE
            if (this.sSelectionFlags & CAM_MODE_LAKITU_WAS_ZOOMED_OUT) {
                this.sSelectionFlags &= ~CAM_MODE_LAKITU_WAS_ZOOMED_OUT
                this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
            } else {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
            }
            this.sCameraSoundFlags |= CAM_SOUND_NORMAL_ACTIVE
        }
        if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
            curMode = CAM_ANGLE_MARIO
        }
        return curMode
    }

    /**
     * Enables the handheld shake effect for this frame.
     *
     * @see shake_camera_handheld()
     */
    set_handheld_shake(mode) {
        switch (mode) {
                // They're not in numerical order because that would be too simple...
            case HAND_CAM_SHAKE_CUTSCENE: // Lowest increment
                this.sHandheldShakeMag = 0x600;
                this.sHandheldShakeInc = 0.04;
                break;
            case HAND_CAM_SHAKE_LOW: // Lowest magnitude
                sHandheldShakeMag = 0x300;
                sHandheldShakeInc = 0.06;
                break;
            case HAND_CAM_SHAKE_HIGH: // Highest mag and inc
                sHandheldShakeMag = 0x1000;
                sHandheldShakeInc = 0.1;
                break;
            case HAND_CAM_SHAKE_UNUSED: // Never used
                sHandheldShakeMag = 0x600;
                sHandheldShakeInc = 0.07;
                break;
            case HAND_CAM_SHAKE_HANG_OWL: // exactly the same as UNUSED...
                sHandheldShakeMag = 0x600;
                sHandheldShakeInc = 0.07;
                break;
            case HAND_CAM_SHAKE_STAR_DANCE: // Slightly steadier than HANG_OWL and UNUSED
                sHandheldShakeMag = 0x400;
                sHandheldShakeInc = 0.07;
                break;
            default:
                sHandheldShakeMag = 0x0;
                sHandheldShakeInc = 0.0;
        }
    }

    /**
     * When sHandheldShakeMag is nonzero, this function adds small random offsets to `focus` every time
     * sHandheldShakeTimer increases above 1.0, simulating the camera shake caused by unsteady hands.
     *
     * This function must be called every frame in order to actually apply the effect, since the effect's
     * mag and inc are set to 0 every frame at the end of this function.
     */
    shake_camera_handheld(pos, focus) {
        let shakeOffset = [0,0,0]
        let shakeSpline = [
            [0,0,0],[0,0,0],[0,0,0],[0,0,0]
        ]

        if (this.sHandheldShakeMag == 0) {
            vec3f_set(shakeOffset, 0.0, 0.0, 0.0)
        } else {
            for (let i = 0; i < 4; i++) {
                shakeSpline[i][0] = sHandheldShakeSpline[i].point[0]
                shakeSpline[i][1] = sHandheldShakeSpline[i].point[1]
                shakeSpline[i][2] = sHandheldShakeSpline[i].point[2]
            }
            this.evaluate_cubic_spline(this.sHandheldShakeTime, shakeOffset, shakeSpline[0], shakeSpline[1], shakeSpline[2], shakeSpline[3])
            this.sHandheldShakeTimer += this.sHandheldShakeInc
            if (1.0 <= this.sHandheldShakeTimer) {
                // The first 3 control points are always (0,0,0), so the random spline is always just a
                // straight line
                for (let i = 0; i < 4; i++) {
                    vec3f_copy(this.sHandheldShakeSpline[i].point, this.sHandheldShakeSpline[i + 1].point)
                }
                this.random_vec3s(this.sHandheldShakeSpline[3].point, this.sHandheldShakeMag, this.sHandheldShakeMag, this.sHandheldShakeMag / 2)
                this.sHandheldShakeTimer -= 1.0
            }
        }

        let wrapper = {current: this.sHandheldShakePitch}
        this.approach_s16_asymptotic_bool(wrapper, shakeOffset[0], 0x08)
        this.sHandheldShakePitch = wrapper.current; wrapper.current = this.sHandheldShakeYaw
        this.approach_s16_asymptotic_bool(wrapper, shakeOffset[0], 0x08)
        this.sHandheldShakeYaw = wrapper.current; wrapper.current = this.sHandheldShakeRoll
        this.approach_s16_asymptotic_bool(wrapper, shakeOffset[0], 0x08)
        this.sHandheldShakeRoll = wrapper.current

        if (this.sHandheldShakePitch | this.sHandheldShakeYaw) {
            wrapper = {}
            vec3f_get_dist_and_angle(pos, focus, wrapper)
            wrapper.pitch += this.sHandheldShakePitch
            wrapper.yaw += this.sHandheldShakeYaw
            vec3f_set_dist_and_angle(pos, focus, wrapper.dist, wrapper.pitch, wrapper.yaw)
        }

        // Unless called every frame, the effect will stop after the first time.
        this.sHandheldShakeMag = 0
        this.sHandheldShakeInc = 0.0
    }

    /**
     * NOTE: wrapper vars are ptrWrapper.buttonsPressed, ptrWrapper.buttonsDown
     * 
     * Updates C Button input state and stores it in `currentState`
     */
    find_c_buttons_pressed(currentState, ptrWrapper) {
        ptrWrapper.buttonsPressed &= CBUTTON_MASK;
        ptrWrapper.buttonsDown &= CBUTTON_MASK;
    
        if (window.playerInput.buttonPressedCl) {
            currentState |= L_CBUTTONS;
            currentState &= ~R_CBUTTONS;
        }
        if (!(window.playerInput.buttonDownCl)) {
            currentState &= ~L_CBUTTONS;
        }
    
        if (window.playerInput.buttonPressedCr) {
            currentState |= R_CBUTTONS;
            currentState &= ~L_CBUTTONS;
        }
        if (!(window.playerInput.buttonDownCr)) {
            currentState &= ~R_CBUTTONS;
        }

        if (window.playerInput.buttonPressedCu) {
            currentState |= U_CBUTTONS;
            currentState &= ~D_CBUTTONS;
        }
        if (!(window.playerInput.buttonDownCu)) {
            currentState &= ~U_CBUTTONS;
        }
        if (window.playerInput.buttonPressedCd) {
            currentState |= D_CBUTTONS;
            currentState &= ~U_CBUTTONS;
        }
        if (!(window.playerInput.buttonDownCd)) {
            currentState &= ~D_CBUTTONS;
        }
    
        return currentState;
    }

    /**
     * Determine which icon to show on the HUD
     */
    update_camera_hud_status(c) {
        let status = CAM_STATUS_NONE
    
        let isFixedCam = false // = c.cutscene != 0 || ((this.gPlayer1Controller.buttonDown & R_TRIG) && cam_select_alt_mode(0) == CAM_SELECTION_FIXED)

        if (isFixedCam) {
            status |= CAM_STATUS_FIXED
        } else if (this.set_cam_angle(0) == CAM_ANGLE_MARIO) {
            status |= CAM_STATUS_MARIO
        } else {
            status |= CAM_STATUS_LAKITU
        }
        if (this.gCameraMovementFlags & this.CAM_MOVE_ZOOMED_OUT > 0) {
            status |= CAM_STATUS_C_DOWN
        }
        if (this.gCameraMovementFlags & CAM_MOVE_C_UP_MODE > 0) {
            status |= CAM_STATUS_C_UP
        }
        Hud.set_hud_camera_status(status)
        return status
    }

    /**
     * Check `pos` for collisions within `radius`, and update `pos`
     *
     * @return the number of collisions found
     */
    collide_with_walls(pos, offsetY, radius) {
        let collisionData = JSON.parse(JSON.stringify(WallColDataObj))
        let wall = JSON.parse(JSON.stringify(surfaceObj))
        let normX = 0
        let normY = 0
        let normZ = 0
        let originOffset = 0
        let offset = 0
        let offsetAbsolute = 0
        let newPos = [ [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
        let numCollisions = 0

        collisionData.x = pos[0]
        collisionData.y = pos[1]
        collisionData.z = pos[2]
        collisionData.radius = radius
        collisionData.offsetY = offsetY
        numCollisions = SurfaceCollision.find_wall_collisions(collisionData)
        if (numCollisions != 0) {
            for (let i = 0; i < collisionData.numWalls; i++) {
                wall = collisionData.walls[collisionData.numWalls - 1]
                this.vec3f_copy(newPos[i], pos)
                normX = wall.normal.x
                normY = wall.normal.y
                normZ = wall.normal.z
                originOffset = wall.originOffset
                offset = normX * newPos[i][0] + normY * newPos[i][1] + normZ * newPos[i][2] + originOffset
                offsetAbsolute = Math.abs(offset)
                if (offsetAbsolute < radius) {
                    newPos[i][0] += normX * (radius - offset)
                    newPos[i][2] += normZ * (radius - offset)
                    this.vec3f_copy(pos, newPos[i])
                }
            }
        }
        return numCollisions
    }

    /**
     * Compare a vector to a position, return TRUE if they match.
     */
    vec3f_compare(pos, posX, posY, posZ) {
        let equal = false

        if (pos[0] == posX && pos[1] == posY && pos[2] == posZ) {
            equal = true
        }
        return equal
    }

    clamp_pitch(from, to, maxPitch, minPitch) {
        let outOfRange = 0

        const output = {}
        MathUtil.vec3f_get_dist_and_angle(from, to, output)
        if (output.pitch > maxPitch) {
            output.pitch = maxPitch
            outOfRange++
        }
        if (output.pitch < minPitch) {
            output.pitch = minPitch
            outOfRange++
        }

        MathUtil.vec3f_set_dist_and_angle(from, to, output.dist, output.pitch, output.yaw)
        return outOfRange
    }

    is_within_100_units_of_mario(posX, posY, posZ) {
        const pos = [posX, posY, posZ]
        return this.calc_abs_dist(this.gPlayerCameraState.pos, pos) < 100
    }

    set_or_approach_f32_asymptotic(currentWrapper, goal, scale) {
        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            this.approach_f32_asymptotic_bool(currentWrapper, goal, scale)
        } else {
            currentWrapper.current = goal
        }
        if (currentWrapper.current == goal) {
            return false
        } else {
            return true
        }
    }

    /**
     * Approaches an f32 value by taking the difference between the target and current value
     * and adding a fraction of that to the current value.
     * Edits the current value directly, returns TRUE if the target has been reached, FALSE otherwise.
     */
    approach_f32_asymptotic_bool(currentWrapper, target, multiplier) {
        if (multiplier > 1) {
            multiplier = 1
        }
        currentWrapper.current = currentWrapper.current + (target - currentWrapper.current) * multiplier
        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    /**
     * Nearly the same as the above function, returns new value instead.
     */
    approach_f32_asymptotic(current, target, multiplier) {
        return current + (target - current) * multiplier
    }

    /**
     * Approaches an s16 value in the same fashion as approach_f32_asymptotic_bool, returns TRUE if target
     * is reached. Note: Since this function takes integers as parameters, the last argument is the
     * reciprocal of what it would be in the previous two functions.
     */
    approach_s16_asymptotic_bool(currentWrapper, target, divisor) {
        let temp = currentWrapper.current

        if (divisor == 0) {
            currentWrapper.current = target
        } else {
            temp = s16(temp - target)
            temp = s16(temp - s16(temp / divisor))
            temp = s16(temp + target)
            currentWrapper.current = temp
        }
        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    /**
     * Approaches an s16 value in the same fashion as approach_f32_asymptotic, returns the new value.
     * Note: last parameter is the reciprocal of what it would be in the f32 functions
     */
    approach_s16_asymptotic(current, target, divisor) {

        if (divisor == 0) {
            return target
        } else {
            return ((current - target) - (current - target) / divisor) + target
        }
    }

    /**
     * Applies the approach_f32_asymptotic_bool function to each of the X, Y, & Z components of the given
     * vector.
     */
    approach_vec3f_asymptotic(current, target, xMul, yMul, zMul) {
        const wrapper = { current: current[0] }
        this.approach_f32_asymptotic_bool(wrapper, target[0], xMul)
        current[0] = wrapper.current
        wrapper.current = current[1]
        this.approach_f32_asymptotic_bool(wrapper, target[1], yMul)
        current[1] = wrapper.current
        wrapper.current = current[2]
        this.approach_f32_asymptotic_bool(wrapper, target[2], zMul)
        current[2] = wrapper.current
    }

    /**
     * Applies the set_or_approach_f32_asymptotic_bool function to each of the X, Y, & Z components of the
     * given vector.
     */
    set_or_approach_vec3f_asymptotic(dst, goal, xMul, yMul, zMul) {
        const wrapper = { current: dst[0] }
        this.set_or_approach_f32_asymptotic(wrapper, goal[0], xMul)
        dst[0] = wrapper.current
        wrapper.current = dst[1]
        this.set_or_approach_f32_asymptotic(wrapper, goal[1], yMul)
        dst[1] = wrapper.current
        wrapper.current = dst[2]
        this.set_or_approach_f32_asymptotic(wrapper, goal[2], zMul)
        dst[2] = wrapper.current
    }

    /**
     * Applies the approach_s32_asymptotic function to each of the X, Y, & Z components of the given
     * vector.
     */
    approach_vec3s_asymptotic(current, target, xMul, yMul, zMul) {
        const wrapper = { current: current[0] }
        this.approach_s16_asymptotic_bool(wrapper, target[0], xMul);
        current[0] = wrapper.current
        wrapper.current = current[1]
        this.approach_s16_asymptotic_bool(wrapper, target[1], yMul);
        current[1] = wrapper.current
        wrapper.current = current[2]
        this.approach_s16_asymptotic_bool(wrapper, target[2], zMul);
        current[2] = wrapper.current
    }

    camera_approach_s16_symmetric_bool(currentWrapper, target, increment) {
        let dist = s16(target - currentWrapper.current)

        if (increment < 0) {
            increment = -1 * increment
        }
        if (dist > 0) {
            dist = s16(dist - increment)
            if (dist >= 0) {
                currentWrapper.current = s16(target - dist)
            } else {
                currentWrapper.current = target
            }
        } else {
            dist = s16(dist + increment)
            if (dist <= 0) {
                currentWrapper.current = s16(target - dist)
            } else {
                currentWrapper.current = target
            }
        }

        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    camera_approach_s16_symmetric(current, target, increment) {
        let dist = target - current

        if (increment < 0 ) {
            increment = -increment
        }
        if (dist > 0) {
            dist -= increment
            if (dist >= 0) {
                current = target - dist
            } else {
                current = target
            }
        } else {
            dist += increment
            if (dist <= 0) {
                current = target - dist
            } else {
                current = target
            }
        }
        return current
    }

    set_or_approach_s16_symmetric(currentWrapper, target, increment) {
        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            this.camera_approach_s16_symmetric_bool(currentWrapper, target, increment)
        } else {
            currentWrapper.current = target
        }
        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    /**
     * Approaches a value by a given increment, returns FALSE if the target is reached.
     * Appears to be a strange way of implementing approach_f32_symmetric from object_helpers.c.
     * It could possibly be an older version of the function
     */
    camera_approach_f32_symmetric_bool(currentWrapper, target, increment) {
        let dist = target - currentWrapper.current

        if (increment < 0) {
            increment = -1 * increment
        }
        if (dist > 0) {
            dist -= increment
            if (dist >= 0) {
                currentWrapper.current = target - dist
            } else {
                currentWrapper.current = target
            }
        } else {
            dist += increment
            if (dist <= 0) {
                currentWrapper.current = target - dist
            } else {
                currentWrapper.current = target
            }
        }

        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    /**
     * Nearly the same as the above function, this one returns the new value in place of a bool.
     */
    camera_approach_f32_symmetric(current, target, increment) {
        let dist = target - current

        if (increment < 0) {
            increment = -1 * increment
        }
        if (dist > 0) {
            dist -= increment
            if (dist >= 0) {
                current = target - dist
            } else {
                current = target
            }
        } else {
            dist += increment
            if (dist <= 0) {
                current = target - dist
            } else {
                current = target
            }
        }
        return current
    }

    /**
     * Generate a vector with all three values about zero. The
     * three ranges determine how wide the range about zero.
     */
    random_vec3s(dst, xRange, yRange, zRange) {
        let randomFloat = random_float()
        let tempXRange = xRange
        dst[0] = randomFloat * tempXRange - tempXRange / 2

        
        randomFloat = random_float()
        let tempYRange = yRange
        dst[0] = randomFloat * tempYRange - tempYRange / 2
        
        randomFloat = random_float()
        let tempZRange = zRange
        dst[0] = randomFloat * tempZRange - tempZRange / 2
    }
    
    /**
     * Decrease value by multiplying it by the distance from (`posX`, `posY`, `posZ`) to
     * the camera divided by `maxDist`
     *
     * @return the reduced value
     */
    reduce_by_dist_from_camera(value, maxDist, posX, posY, posZ) {
        let /*s16*/ res = 0
          // Direction from pos to (Lakitu's) goalPos
        let /*f32*/ goalDX = this.gLakituState.goalPos[0] - posX
        let /*f32*/ goalDY = this.gLakituState.goalPos[1] - posY
        let /*f32*/ goalDZ = this.gLakituState.goalPos[2] - posZ

        let dist = MathUtil.sqrtf(goalDX * goalDX + goalDY * goalDY + goalDZ * goalDZ)
        if (maxDist > dist) {
            const pos = [posX, posY, posZ]
            const result = {}
            MathUtil.vec3f_get_dist_and_angle(this.gLakituState.goalPos, pos, result)
            dist = result.dist
            let pitch = result.pitch
            let yaw = result.yaw

            if (dist < maxDist) {
                const goalResult = {}
                this.calculate_angles(this.gLakituState.goalPos, this.gLakituState.goalFocus, goalResult)
                let /*s16*/ goalPitch = goalResult.pitch
                let /*s16*/ goalYaw = goalResult.yaw

                pitch = s16(pitch - goalPitch)
                yaw = s16(yaw - goalYaw)
                dist -= 2000.0
                if (dist < 0.0) {
                    dist = 0.0
                }
                maxDist -= 2000.0
                if (maxDist < 2000.0) {
                    maxDist = 2000.0
                }
                res = value * (1.0 - dist / maxDist)
                if (pitch < -0x1800 || pitch > 0x400 ||
                    yaw   < -0x1800 || yaw >   0x1800) {
                    res /= 2
                }
            }
        }
        return res
    }

    clamp_positions_and_find_yaw(pos, origin, xMax, xMin, zMax, zMin) {
        let yaw = this.gCamera.nextYaw

        if (pos[0] >= xMax) {
            pos[0] = xMax
        }
        if (pos[0] <= xMin) {
            pos[0] = xMin
        }
        if (pos[2] >= zMax) {
            pos[2] = zMax
        }
        if (pos[2] <= zMin) {
            pos[2] = zMin
        }
        yaw = this.calculate_yaw(origin, pos)
        return yaw
    }

    /**
     * The yaw passed here is the yaw of the direction FROM Mario TO Lakitu.
     *
     * wallYaw always has 90 degrees added to it before this is called -- it's parallel to the wall.
     *
     * @return the new yaw from Mario to rotate towards.
     *
     * @warning this is jank. It actually returns the yaw that will rotate further INTO the wall. So, the
     *          developers just add 180 degrees to the result.
     */
     calc_avoid_yaw(yawFromMario, wallYaw) {
        let yawDiff = 0

        yawDiff = wallYaw - yawFromMario + DEGREES(90)

        if (yawDiff < 0) {
            // Deflect to the right
            yawFromMario = wallYaw
        } else {
            // Note: this favors the left side if the wall is exactly perpendicular to the camera.
            // Deflect to the left
            yawFromMario = wallYaw + DEGREES(180)
        }
        return yawFromMario
    }

    /**
     * Checks if `surf` is within the rect prism defined by xMax, yMax, and zMax
     *
     * @param surf surface to check
     * @param xMax absolute-value max size in x, set to -1 to ignore
     * @param yMax absolute-value max size in y, set to -1 to ignore
     * @param zMax absolute-value max size in z, set to -1 to ignore
     */
    is_surf_within_bounding_box(surf, xMax, yMax, zMax) {
        // Surface vertex coordinates
        let sx = [0, 0, 0]
        let sy = [0, 0, 0]
        let sz = [0, 0, 0]
        // Max delta between x, y, and z
        let dxMax = 0
        let dyMax = 0
        let dzMax = 0
        // Current deltas between x, y, and z
        let dx = 0
        let dy = 0
        let dz = 0

        let j = 0
        let smaller = false

        sx[0] = surf.vertex1[0]
        sx[1] = surf.vertex2[0]
        sx[2] = surf.vertex3[0]
        sy[0] = surf.vertex1[1]
        sy[1] = surf.vertex2[1]
        sy[2] = surf.vertex3[1]
        sz[0] = surf.vertex1[2]
        sz[1] = surf.vertex2[2]
        sz[2] = surf.vertex3[2]

        for (let i = 0; i < 3; i++) {
            j = i + 1
            if (j >= 3) {
                j = 0
            }
            dx = Math.abs(sx[i] - sx[j])
            if (dx > dxMax) {
                dxMax = dx
            }
            dy = Math.abs(sy[i] - sy[j])
            if (dy > dyMax) {
                dyMax = dy
            }
            dz = Math.abs(sz[i] - sz[j])
            if (dz > dzMax) {
                dzMax = dz
            }
        }
        if (yMax != -1.0) {
            if (dyMax < yMax) {
                smaller = true
            }
        }
        if (xMax != -1.0 && zMax != -1.0) {
            if (dxMax < xMax && dzMax < zMax) {
                smaller = true
            }
        }
        return smaller
    }

    /**
     * Checks if `pos` is behind the surface, using the dot product.
     *
     * Because the function only uses `surf`s first vertex, some surfaces can shadow others.
     */
    is_behind_surface(pos, surf) {
        let behindSurface = 0
        // Surface normal
        let normX = (surf.vertex2[1] - surf.vertex1[1]) * (surf.vertex3[2] - surf.vertex2[2]) -
                    (surf.vertex3[1] - surf.vertex2[1]) * (surf.vertex2[2] - surf.vertex1[2])
        let normY = (surf.vertex2[2] - surf.vertex1[2]) * (surf.vertex3[0] - surf.vertex2[0]) -
                    (surf.vertex3[2] - surf.vertex2[2]) * (surf.vertex2[0] - surf.vertex1[0])
        let normZ = (surf.vertex2[0] - surf.vertex1[0]) * (surf.vertex3[1] - surf.vertex2[1]) -
                    (surf.vertex3[0] - surf.vertex2[0]) * (surf.vertex2[1] - surf.vertex1[1])
        let dirX = surf.vertex1[0] - pos[0]
        let dirY = surf.vertex1[1] - pos[1]
        let dirZ = surf.vertex1[2] - pos[2]

        if (dirX * normX + dirY * normY + dirZ * normZ < 0) {
            behindSurface = 1
        }
        return behindSurface
        
    }

    /**
     * Checks if the whole circular sector is behind the surface.
     */
    is_range_behind_surface(from, to, surf, range, surfType) {
        let behindSurface = true
        let leftBehind = 0
        let rightBehind = 0
        let check = { dist: 0, pitch: 0, yaw: 0 }
        let checkPos = [0, 0, 0]

        if (surf != null) {
            if (surfType == -1 || surf.type != surfType) {
                if (range == 0) {
                    behindSurface = this.is_behind_surface(to, surf)
                } else {
                    MathUtil.vec3f_get_dist_and_angle(from, to, check)
                    MathUtil.vec3f_set_dist_and_angle(from, checkPos, check.dist, check.pitch, check.yaw + range)
                    leftBehind = this.is_behind_surface(checkPos, surf)
                    MathUtil.vec3f_set_dist_and_angle(from, checkPos, check.dist, check.pitch, check.yaw - range)
                    rightBehind = this.is_behind_surface(checkPos, surf)
                    behindSurface = leftBehind * rightBehind
                }
            }
        }
        return behindSurface
    }

    is_mario_behind_surface(c, surf) {
        return this.is_behind_surface(this.gPlayerCameraState.pos, surf)
    }

    /**
     * Calculates the distance between two points and sets a vector to a point
     * scaled along a line between them. Typically, somewhere in the middle.
     */
    scale_along_line(dst, from, to, scale) {
        const tempVec =  new Array(3)

        tempVec[0] = (to[0] - from[0]) * scale + from[0]
        tempVec[1] = (to[1] - from[1]) * scale + from[1]
        tempVec[2] = (to[2] - from[2]) * scale + from[2]

        dst[0] = tempVec[0]
        dst[1] = tempVec[1]
        dst[2] = tempVec[2]
    }

    /**
     * Effectively created a rectangular prism defined by a vector starting at the center
     * and extending to the corners. If the position is in this box, the function returns true.
     */
    is_pos_in_bounds(pos, center, bounds, boundsYaw) {
        let inBound = false
        let rel = [
            center[0] - pos[0],
            center[1] - pos[1],
            center[2] - pos[2]
        ]

        this.rotate_in_xz(rel, rel, boundsYaw)

        if (-bounds[0] < rel[0] && rel[0] < bounds[0] &&
            -bounds[1] < rel[1] && rel[1] < bounds[1] &&
            -bounds[2] < rel[2] && rel[2] < bounds[2]) {
                inBound = true
        }
        return inBound
    }

    calculate_pitch(from, to) {
        let dx = to[0] - from[0]
        let dy = to[1] - from[1]
        let dz = to[2] - from[2]
        return atan2s(sqrtf(dx * dx + dz * dz), dy)
    }

    calculate_yaw(from, to) {
        const dx = to[0] - from[0]
        const dz = to[2] - from[2]
        return atan2s(dz, dx)
    }

    /**
     * Calculates the pitch and yaw between two vectors.
     */
     calculate_angles(from, to, result) {
        let /*f32*/ dx = to[0] - from[0]
        let /*f32*/ dy = to[1] - from[1]
        let /*f32*/ dz = to[2] - from[2]

        result.pitch = MathUtil.atan2s(MathUtil.sqrtf(dx * dx + dz * dz), dy)
        result.yaw = MathUtil.atan2s(dz, dx)
    }

    /**
     * Finds the distance between two vectors.
     */
    calc_abs_dist(a, b) {
        const distX = b[0] - a[0]
        const distY = b[1] - a[1]
        const distZ = b[2] - a[2]
        return Math.sqrt(distX * distX + distY * distY + distZ * distZ)
    }

    /**
     * Finds the horizontal distance between two vectors.
     */
    calc_hor_dist(a, b) {
        const distX = b[0] - a[0]
        const distZ = b[2] - a[2]
        return MathUtil.sqrtf(distX * distX + distZ * distZ)
    }

    /**
     * Rotates a vector in the horizontal plane and copies it to a new vector.
     */
    rotate_in_xz(dst, src, yaw) {
        let tempVec = [0, 0, 0]
        vec3f_copy(tempVec, src)
        dst[0] = tempVec[2] * sins(yaw) + tempVec[0] * coss(yaw)
        dst[1] = tempVec[1]
        dst[2] = tempVec[2] * coss(yaw) - tempVec[0] * sins(yaw)
    }

    /**
     * Rotates a vector in the YZ plane and copies it to a new vector.
     *
     * Note: This function also flips the Z axis, so +Z moves forward, not backward like it would in world
     * space. If possible, use vec3f_set_dist_and_angle()
     */
    rotate_in_yz(dst, src, pitch) {
        let tempVec = [0, 0, 0]
        vec3f_copy(tempVec, src)
        dst[0] = -(tempVec[2] * coss(pitch) - tempVec[0] * sins(pitch))
        dst[1] =   tempVec[2] * coss(pitch) + tempVec[0] * sins(pitch)
        dst[2] =   tempVec[0]
    }

    /**
     * Start shaking the camera's pitch (up and down)
     */
    set_camera_pitch_shake(mag, decay, inc) {
        mag = s16(mag)
        if (this.gLakituState.shakeMagnitude[0] < mag) {
            this.gLakituState.shakeMagnitude[0] = mag
            this.gLakituState.shakePitchDecay = s16(decay)
            this.gLakituState.shakePitchVel = s16(inc)
        }
    }

    /**
     * Start shaking the camera's yaw (side to side)
     */
    set_camera_yaw_shake(mag, decay, inc) {
        mag = s16(mag)
        if (Math.abs(mag) > Math.abs(this.gLakituState.shakeMagnitude[1])) {
            this.gLakituState.shakeMagnitude[1] = mag
            this.gLakituState.shakeYawDecay = s16(decay)
            this.gLakituState.shakeYawVel = s16(inc)
        }
    }

    /**
     * Start shaking the camera's roll (rotate screen clockwise and counterclockwise)
     */
    set_camera_roll_shake(mag, decay, inc) {
        mag = s16(mag)
        if (this.gLakituState.shakeMagnitude[2] < mag) {
            this.gLakituState.shakeMagnitude[2] = mag
            this.gLakituState.shakeRollDecay = s16(decay)
            this.gLakituState.shakeRollVel = s16(inc)
        }
    }

    /**
     * Start shaking the camera's pitch, but reduce `mag` by it's distance from the camera
     */
    set_pitch_shake_from_point(mag, decay, inc, maxDist, posX, posY, posZ) {
        const pos = [posX, posY, posZ]
        // let /*f32*/ dist
        // let s16 dummyPitch
        // let /*s16*/ dummyYaw

        // dist unused!
        // MathUtil.vec3f_get_dist_and_angle(this.gLakituState.goalPos, pos, &dist, &dummyPitch, &dummyYaw)
        mag = this.reduce_by_dist_from_camera(mag, maxDist, posX, posY, posZ)
        if (mag != 0) {
            this.set_camera_pitch_shake(mag, decay, inc)
        }
    }

    /**
     * Start shaking the camera's yaw, but reduce `mag` by it's distance from the camera
     */
    set_yaw_shake_from_point(mag, decay, inc, maxDist, posX, posY, posZ) {
        mag = this.reduce_by_dist_from_camera(mag, maxDist, posX, posY, posZ)
        if (mag != 0) {
            this.set_camera_yaw_shake(mag, decay, inc)
        }
    }

    /**
     * Update the shake offset by `increment`
     */
    increment_shake_offset(offsetWrapper, increment) {
        if (increment == -0x8000) {
            offsetWrapper.value = (offsetWrapper.value & 0x8000) + 0xC000
        } else {
            offsetWrapper.value += increment
        }
    }

    /**
     * Apply a vertical shake to the camera by adjusting its pitch
     */
    shake_camera_pitch(pos, focus) {
        if (this.gLakituState.shakeMagnitude[0] | this.gLakituState.shakeMagnitude[1]) {
            const output = {}
            MathUtil.vec3f_get_dist_and_angle(pos, focus, output)
            output.pitch += this.gLakituState.shakeMagnitude[0] * sins(this.gLakituState.shakePitchPhase)
            MathUtil.vec3f_set_dist_and_angle(pos, focus, output.dist, output.pitch, output.yaw)
            const wrapper = { value: this.gLakituState.shakePitchPhase }
            this.increment_shake_offset(wrapper, this.gLakituState.shakePitchVel)
            this.gLakituState.shakePitchPhase = wrapper.value
            const currentWrapper = { current: this.gLakituState.shakeMagnitude[0] }
            if (this.camera_approach_s16_symmetric_bool(currentWrapper, 0, this.gLakituState.shakePitchDecay) == 0) {
                this.gLakituState.shakePitchPhase = 0
            }
            this.gLakituState.shakeMagnitude[0] = currentWrapper.current
        }
    }

    /**
     * Apply a horizontal shake to the camera by adjusting its yaw
     */
    shake_camera_yaw(pos, focus) {
        if (this.gLakituState.shakeMagnitude[1] != 0) {
            const output = {}
            MathUtil.vec3f_get_dist_and_angle(pos, focus, output)
            output.yaw += this.gLakituState.shakeMagnitude[1] * sins(this.gLakituState.shakeYawPhase)
            MathUtil.vec3f_set_dist_and_angle(pos, focus, output.dist, output.pitch, output.yaw)
            const wrapper = { value: this.gLakituState.shakeYawPhase }
            this.increment_shake_offset(wrapper, this.gLakituState.shakeYawVel)
            this.gLakituState.shakeYawPhase = wrapper.value
            const currentWrapper = { current: this.gLakituState.shakeMagnitude[1] }
            if (this.camera_approach_s16_symmetric_bool(currentWrapper, 0, this.gLakituState.shakeYawDecay) == 0) {
                this.gLakituState.shakeYawPhase = 0
            }
            this.gLakituState.shakeMagnitude[1] = currentWrapper.current
        }
    }

    /**
     * Apply a rotational shake to the camera by adjusting its roll
     */
    shake_camera_roll() {
        if (this.gLakituState.shakeMagnitude[2] != 0) {
            const wrapper = { value: this.gLakituState.shakeRollPhase }
            this.increment_shake_offset(wrapper, this.gLakituState.shakeRollVel)
            this.gLakituState.shakeRollPhase = wrapper.value
            this.gLakituState.roll += s16(this.gLakituState.shakeMagnitude[2] * sins(this.gLakituState.shakeRollPhase))
            const currentWrapper = { current: this.gLakituState.shakeMagnitude[2] }
            if (this.camera_approach_s16_symmetric_bool(currentWrapper, 0, this.gLakituState.shakeRollDecay) == 0) {
                this.gLakituState.shakeRollPhase = 0
            }
            this.gLakituState.shakeMagnitude[2] = currentWrapper.current
        }

    }

    /**
     * Add an offset to the camera's yaw, used in levels that are inside a rectangular building, like the
     * pyramid or TTC.
     */
    offset_yaw_outward_radial(c, areaYaw) {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
        let yawGoal = DEGREES(60)
        let yaw = this.sModeOffsetYaw
        let distFromAreaCenter
        let areaCenter = [0, 0, 0]
        let dYaw
        const yawWrapper = {}
        switch (this.gCurrLevelArea) {
            case AREA_TTC:
                areaCenter[0] = c.areaCenX
                areaCenter[1] = this.gPlayerCameraState.pos[1]
                areaCenter[2] = c.areaCenZ
                distFromAreaCenter = this.calc_abs_dist(areaCenter, this.gPlayerCameraState.pos)
                if (800.0 > distFromAreaCenter) {
                    yawGoal = 0x3800
                }
                break
            case AREA_SSL_PYRAMID:
                // This mask splits the 360 degrees of yaw into 4 corners. It adds 45 degrees so that the yaw
                // offset at the corner will be 0, but the yaw offset near the center will face more towards
                // the direction Mario is running in.
                yawGoal = (areaYaw & 0xC000) - areaYaw + DEGREES(45)
                if (yawGoal < 0) {
                    yawGoal = -yawGoal
                }
                yawGoal = yawGoal / 32 * 48
                break
            case AREA_LLL_OUTSIDE:
                yawGoal = 0
                break
        }
        dYaw = gMarioStates[0].forwardVel / 32.0 * 128.0

        yawWrapper.current = yaw
        if (this.sAreaYawChange < 0) {
            this.camera_approach_s16_symmetric_bool(yawWrapper, -yawGoal, dYaw)
        }
        if (this.sAreaYawChange > 0) {
            this.camera_approach_s16_symmetric_bool(yawWrapper, yawGoal, dYaw)
        }
        // When the final yaw is out of [-60,60] degrees, approach yawGoal faster than dYaw will ever be,
        // making the camera lock in one direction until yawGoal drops below 60 (or Mario presses a C button)
        if (yaw < -DEGREES(60)) {
            //! Maybe they meant to reverse yawGoal's sign?
            this.camera_approach_s16_symmetric_bool(yawWrapper, -yawGoal, 0x200)
        }
        if (yaw > DEGREES(60)) {
            //! Maybe they meant to reverse yawGoal's sign?
            this.camera_approach_s16_symmetric_bool(yawWrapper, yawGoal, 0x200)
        }
        return yawWrapper.current
    }

    /**
     * Plays the background music that starts while peach reads the intro message.
     */
    cutscene_intro_peach_play_message_music() {
        play_music(SEQ_PLAYER_LEVEL, SEQUENCE_ARGS(4, SEQ_EVENT_PEACH_MESSAGE), 0)
    }

    /**
     * Plays the music that starts after peach fades and Lakitu appears.
     */
    cutscene_intro_peach_play_lakitu_flying_music() {
        play_music(SEQ_PLAYER_LEVEL, SEQUENCE_ARGS(15, SEQ_EVENT_CUTSCENE_INTRO), 0)
    }

    play_camera_buzz_if_cdown() {
        if (this.sCButtonsPressed & D_CBUTTONS) {
            this.play_sound_button_change_blocked()
        }
    }

    play_camera_buzz_if_cbutton() {
        if (this.sCButtonsPressed & CBUTTON_MASK) {
            this.play_sound_button_change_blocked()
        }
    }

    play_camera_buzz_if_c_sideways() {
        if ((this.sCButtonsPressed & L_CBUTTONS) || (this.sCButtonsPressed & R_CBUTTONS)) {
            this.play_sound_button_change_blocked()
        }
    }

    play_sound_cbutton_up() {
        play_sound(SOUND_MENU_CAMERA_ZOOM_IN, gGlobalSoundSource)
    }

    play_sound_cbutton_down() {
        play_sound(SOUND_MENU_CAMERA_ZOOM_OUT, gGlobalSoundSource)
    }

    play_sound_cbutton_side() {
        play_sound(SOUND_MENU_CAMERA_BUZZ, gGlobalSoundSource)
    }

    play_sound_button_change_blocked() {
        play_sound(SOUND_MENU_CLICK_CHANGE_VIEW, gGlobalSoundSource)
    }

    play_sound_rbutton_changed() {
        play_sound(SOUND_MENU_CLICK_CHANGE_VIEW, gGlobalSoundSource)
    }

    play_sound_if_cam_switched_to_lakitu_or_mario() {
        if (this.sCameraSoundFlags & CAM_SOUND_MARIO_ACTIVE) {
            this.play_sound_rbutton_changed()
        }
        if (this.sCameraSoundFlags & CAM_SOUND_NORMAL_ACTIVE) {
            this.play_sound_rbutton_changed
        }
        this.sCameraSoundFlags &= ~(CAM_SOUND_MARIO_ACTIVE | CAM_SOUND_NORMAL_ACTIVE)
    }

    /**
     * Handles input for radial, outwards radial, parallel tracking, and 8 direction mode.
     */
    radial_camera_input(c, unused) {
        let dummy = 0

        if ((this.gCameraMovementFlags & CAM_MOVE_ENTERED_ROTATE_SURFACE) || !(this.gCameraMovementFlags & CAM_MOVE_ROTATE)) {
            // If C-L or C-R are pressed, the camera is rotating
            if (this.sCButtonsPressed & (L_CBUTTONS | R_CBUTTONS)) {
                this.gCameraMovementFlags &= ~CAM_MOVE_ENTERED_ROTATE_SURFACE
                //  @bug this does not clear the rotation flags set by the surface. It's possible to set
                //       both ROTATE_LEFT and ROTATE_RIGHT, locking the camera.
                //       Ex: If a surface set CAM_MOVE_ROTATE_RIGHT and the user presses C-R, it locks the
                //       camera until a different mode is activated
            }

            // Rotate Right and left
            if (this.sCButtonsPressed & R_CBUTTONS) {
                if (this.sModeOffsetYaw > -0x800) {
                    // The camera is now rotating right
                    if (!(this.gCameraMovementFlags & CAM_MOVE_ROTATE_RIGHT)) {
                        this.gCameraMovementFlags |= CAM_MOVE_ROTATE_RIGHT
                    }

                    if (c.mode == CAMERA_MODE_RADIAL) {
                        // if > ~48 degrees, we're rotating for the second time.
                        if (this.sModeOffsetYaw > 0x22AA) {
                            this.s2ndRotateFlags |= CAM_MOVE_ROTATE_RIGHT
                        }

                        if (this.sModeOffsetYaw == DEGREES(105)) {
                            this.play_sound_button_change_blocked()
                        } else {
                            this.play_sound_cbutton_side()
                        }
                    } else {
                        if (this.sModeOffsetYaw == DEGREES(60)) {
                            this.play_sound_button_change_blocked()
                        } else {
                            this.play_sound_cbutton_side()
                        }
                    }
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_RETURN_TO_MIDDLE
                    this.play_sound_cbutton_up()
                }
            }
            if (this.sCButtonsPressed & L_CBUTTONS) {
                if (this.sModeOffsetYaw < 0x800) {
                    if (!(this.gCameraMovementFlags & CAM_MOVE_ROTATE_LEFT)) {
                        this.gCameraMovementFlags |= CAM_MOVE_ROTATE_LEFT
                    }

                    if (c.mode == CAMERA_MODE_RADIAL) {
                        // if < ~48 degrees, we're rotating for the second time.
                        if (this.sModeOffsetYaw < -0x22AA) {
                            this.s2ndRotateFlags |= CAM_MOVE_ROTATE_LEFT
                        }

                        if (this.sModeOffsetYaw == DEGREES(-105)) {
                            this.play_sound_button_change_blocked()
                        } else {
                            this.play_sound_cbutton_side()
                        }
                    } else {
                        if (this.sModeOffsetYaw == DEGREES(-60)) {
                            this.play_sound_button_change_blocked()
                        } else {
                            this.play_sound_cbutton_side()
                        }
                    }
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_RETURN_TO_MIDDLE
                    this.play_sound_cbutton_up()
                }
            }
        }

        // Zoom in / enter C-Up
        if (this.sCButtonsPressed & U_CBUTTONS) {
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
                this.play_sound_cbutton_up()
            } else {
                this.set_mode_c_up(c)
            }
        }

        // Zoom out
        if (this.sCButtonsPressed & D_CBUTTONS) {
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                this.gCameraMovementFlags |= CAM_MOVE_ALREADY_ZOOMED_OUT
            } else {
                this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
                this.play_sound_cbutton_down()
            }
        }

        //! returning uninitialized variable (not)
        return dummy
    }

    /**
     * Starts a cutscene dialog. Only has an effect when `trigger` is 1
     */
    trigger_cutscene_dialog(trigger) {
        let result = 0

        if (trigger == 1) {
            this.start_object_cutscene_without_focus(CUTSCENE_READ_MESSAGE)
        }
        return result
    }

    /**
     * Updates the camera based on which C buttons are pressed this frame
     */
    handle_c_button_movement(c) {
        let cSideYaw
    
        // Zoom in
        if (window.playerInput.buttonPressedCu) {
            if (c.mode != CAMERA_MODE_FIXED && (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT)) {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
                this.play_sound_cbutton_up()
            } else {
                this.set_mode_c_up(c)
                if (this.sZeroZoomDist > this.gCameraZoomDist) {
                    this.sZoomAmount = -this.gCameraZoomDist
                } else {
                    this.sZoomAmount = this.gCameraZoomDist
                }
            }
        }
        if (c.mode != CAMERA_MODE_FIXED) {
            // Zoom out
            if (window.playerInput.buttonPressedCd) {
                if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                    this.gCameraMovementFlags |= CAM_MOVE_ALREADY_ZOOMED_OUT
                    this.sZoomAmount = this.gCameraZoomDist + 400
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
                    this.sZoomAmount = this.gCameraZoomDist + 400
                    this.play_sound_cbutton_down()
                }
            }
    
            // Rotate left or right
            cSideYaw = 0x1000
            if (window.playerInput.buttonPressedCr) {
                if (this.gCameraMovementFlags & CAM_MOVE_ROTATE_LEFT) {
                    this.gCameraMovementFlags &= ~CAM_MOVE_ROTATE_LEFT;
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_ROTATE_RIGHT;
                    // if (sCSideButtonYaw == 0) {
                    //     play_sound_cbutton_side();
                    // }
                    this.sCSideButtonYaw = -cSideYaw;
                }
            }
            if (window.playerInput.buttonPressedCl) {
                if (this.gCameraMovementFlags & CAM_MOVE_ROTATE_RIGHT) {
                    this.gCameraMovementFlags &= ~CAM_MOVE_ROTATE_RIGHT;
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_ROTATE_LEFT;
                    // if (sCSideButtonYaw == 0) {
                    //     play_sound_cbutton_side();
                    // }
                    this.sCSideButtonYaw = cSideYaw;
                }
            }
        }
    }

    /**
     * Zero the 10 cvars.
    */
    clear_cutscene_vars(c) {
        for (let i = 0; i < 10; i++) {
            MathUtil.vec3f_set(this.sCutsceneVars[i].point, 0.0, 0.0, 0.0)
            MathUtil.vec3f_set(this.sCutsceneVars[i].unusedPoint, 0.0, 0.0, 0.0)
            MathUtil.vec3f_set(this.sCutsceneVars[i].angle, 0, 0, 0)
        }
    }

    /**
     * Start the cutscene, `cutscene`, if it is not already playing.
     */
    start_cutscene(c, cutscene) {
        if (c.cutscene != cutscene) {
            c.cutscene = cutscene
            this.clear_cutscene_vars(c)
        }
    }

    /**
     * Look up the victory dance cutscene in sDanceCutsceneTable
     *
     * First the index entry is determined based on the course and the star that was just picked up
     * Like the entries in sZoomOutAreaMasks, each entry represents two stars
     * The current courses's 4 bits of the index entry are used as the actual index into sDanceCutsceneTable
     *
     * @return the victory cutscene to use
     */
    determine_dance_cutscene(c) {
        let cutscene = 0
        let cutsceneIndex = 0
        let starIndex = Math.floor((gLastCompletedStarNum - 1) / 2)
        let courseNum = Area.gCurrCourseNum

        if (starIndex > 3) {
            starIndex = 0
        }
        if (courseNum > COURSE_MAX) {
            courseNum = COURSE_NONE
        }
        cutsceneIndex = this.sDanceCutsceneIndexTable[starIndex]

        if (gLastCompletedStarNum & 1) {
            // Odd stars take the lower four bytes
            cutsceneIndex &= 0xF
        } else {
            // Even stars use the upper four bytes
            cutsceneIndex = cutsceneIndex >> 4;
        }
        cutscene = this.sDanceCutsceneTable[cutsceneIndex]
        return cutscene
    }

    /**
     * @return `pullResult` or `pushResult` depending on Mario's door action
     */
    open_door_cutscene(pullResult, pushResult) {
        let result

        if (this.gPlayerCameraState.action == Mario.ACT_PULLING_DOOR) {
            result = pullResult
        } else if (this.gPlayerCameraState.action == Mario.ACT_PUSHING_DOOR) {
            result = pushResult
        }
        return result
    }

    /**
     * If no cutscenes are playing, determines if a cutscene should play based on Mario's action and
     * cameraEvent
     *
     * @return the cutscene that should start, 0 if none
     */
    get_cutscene_from_mario_status(c) {
        let cutscene = c.cutscene
        const bowserLevelCheck = [LEVEL_BOWSER_1, LEVEL_BOWSER_2, LEVEL_BOWSER_3].includes(this.gPrevLevel)

        if (cutscene == 0) {
            // A cutscene started by an object, if any, will start if nothing else happened
            cutscene = this.sObjectCutscene
            this.sObjectCutscene = 0
            if (this.gPlayerCameraState.cameraEvent == CAM_EVENT_DOOR) {
                switch (this.gCurrLevelArea) {
                    case AREA_CASTLE_LOBBY:
                        //! doorStatus is never DOOR_ENTER_LOBBY when cameraEvent == 6, because
                        //! doorStatus is only used for the star door in the lobby, which uses
                        //! ACT_ENTERING_STAR_DOOR
                        if (c.mode == CAMERA_MODE_SPIRAL_STAIRS || c.mode == CAMERA_MODE_CLOSE || c.doorStatus == DOOR_ENTER_LOBBY) {
                            cutscene = this.open_door_cutscene(CUTSCENE_DOOR_PULL_MODE, CUTSCENE_DOOR_PUSH_MODE)
                        } else {
                            cutscene = this.open_door_cutscene(CUTSCENE_DOOR_PULL, CUTSCENE_DOOR_PUSH)
                        }
                        break
                    case AREA_BBH:
                        //! Castle Lobby uses 0 to mean 'no special modes', but BBH uses 1...
                        //   CreateSource: skill issue
                        
                        if (c.doorStatus == DOOR_LEAVING_SPECIAL) {
                            cutscene = this.open_door_cutscene(CUTSCENE_DOOR_PULL, CUTSCENE_DOOR_PUSH)
                        } else {
                            cutscene = this.open_door_cutscene(CUTSCENE_DOOR_PULL_MODE, CUTSCENE_DOOR_PUSH_MODE)
                        }
                        break
                    default:
                        cutscene = this.open_door_cutscene(CUTSCENE_DOOR_PULL, CUTSCENE_DOOR_PUSH)
                        break
                }
            } else if (this.gPlayerCameraState.cameraEvent == CAM_EVENT_DOOR_WARP) {
                cutscene = CUTSCENE_DOOR_WARP
            } else if (this.gPlayerCameraState.cameraEvent == CAM_EVENT_CANNON) {
                cutscene = CUTSCENE_ENTER_CANNON
            } else if (SURFACE_IS_PAINTING_WARP(this.sMarioGeometry.currFloorType)) {
                cutscene = CUTSCENE_ENTER_PAINTING
            }
            switch (this.gPlayerCameraState.action) {
                case Mario.ACT_DEATH_EXIT:
                    cutscene = CUTSCENE_DEATH_EXIT
                    break
                case Mario.ACT_EXIT_AIRBORNE:
                    cutscene = CUTSCENE_EXIT_PAINTING_SUCC
                    break
                case Mario.ACT_SPECIAL_EXIT_AIRBORNE:
                    if (bowserLevelCheck) {
                        cutscene = CUTSCENE_EXIT_BOWSER_DEATH
                    } else {
                        cutscene = CUTSCENE_NONPAINTING_DEATH
                    }
                    break
                case Mario.ACT_ENTERING_STAR_DOOR:
                    if (c.doorStatus == DOOR_DEFAULT) {
                        cutscene = CUTSCENE_SLIDING_DOORS_OPEN;
                    } else {
                        cutscene = CUTSCENE_DOOR_PULL_MODE;
                    }
                    break
                case Mario.ACT_UNLOCKING_KEY_DOOR:
                    cutscene = CUTSCENE_UNLOCK_KEY_DOOR;
                    break;
                case Mario.ACT_WATER_DEATH:
                    cutscene = CUTSCENE_WATER_DEATH;
                    break;
                case Mario.ACT_DEATH_ON_BACK:
                    cutscene = CUTSCENE_DEATH_ON_BACK;
                    break;
                case Mario.ACT_DEATH_ON_STOMACH:
                    cutscene = CUTSCENE_DEATH_ON_STOMACH;
                    break;
                case Mario.ACT_STANDING_DEATH:
                    cutscene = CUTSCENE_STANDING_DEATH;
                    break;
                case Mario.ACT_SUFFOCATION:
                    cutscene = CUTSCENE_SUFFOCATION_DEATH;
                    break;
                case Mario.ACT_QUICKSAND_DEATH:
                    cutscene = CUTSCENE_QUICKSAND_DEATH;
                    break;
                case Mario.ACT_ELECTROCUTION:
                    cutscene = CUTSCENE_STANDING_DEATH;
                    break;
                case Mario.ACT_STAR_DANCE_EXIT:
                    cutscene = this.determine_dance_cutscene(c);
                    break;
                case Mario.ACT_STAR_DANCE_WATER:
                    cutscene = this.determine_dance_cutscene(c);
                    break;
                case Mario.ACT_STAR_DANCE_NO_EXIT:
                    cutscene = CUTSCENE_DANCE_DEFAULT;
                    break;
            }
            switch (this.gPlayerCameraState.cameraEvent) {
                case CAM_EVENT_START_INTRO:
                    cutscene = CUTSCENE_INTRO_PEACH;
                    break;
                case CAM_EVENT_START_GRAND_STAR:
                    cutscene = CUTSCENE_GRAND_STAR;
                    break;
                case CAM_EVENT_START_ENDING:
                    cutscene = CUTSCENE_ENDING;
                    break;
                case CAM_EVENT_START_END_WAVING:
                    cutscene = CUTSCENE_END_WAVING;
                    break;
                case CAM_EVENT_START_CREDITS:
                    cutscene = CUTSCENE_CREDITS;
                    break;
            }
        }
        //! doorStatus is reset every frame. CameraTriggers need to constantly set doorStatus
        c.doorStatus = DOOR_DEFAULT;

        return cutscene
    }

    /**
     * Moves the camera when Mario has triggered a warp
     */
    warp_camera(displacementX, displacementY, displacementZ) {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
        
        let displacement = [displacementX, displacementY, displacementZ]
        let marioStates = gMarioStates[0]
        let start = this.sModeInfo.transitionStart
        let end = this.sModeInfo.transitionEnd

        this.gCurrLevelArea = Area.gCurrLevelNum * 16 + Area.gCurrentArea.index

        MathUtil.vec3f_add(this.gLakituState.curPos, displacement)
        MathUtil.vec3f_add(this.gLakituState.curFocus, displacement)
        MathUtil.vec3f_add(this.gLakituState.goalPos, displacement)
        MathUtil.vec3f_add(this.gLakituState.goalFocus, displacement)
        marioStates.waterLevel += displacementY

        MathUtil.vec3f_add(start.focus, displacement)
        MathUtil.vec3f_add(start.pos, displacement)
        MathUtil.vec3f_add(end.focus, displacement)
        MathUtil.vec3f_add(end.pos, displacement)
    }

    approach_camera_height(c, goal, inc) {
        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            if (c.pos[1] < goal) {
                if ((c.pos[1] += inc) > goal) {
                    c.pos[1] = goal
                }
            } else {
                if ((c.pos[1] -= inc) < goal) {
                    c.pos[1] = goal
                }
            }
        } else {
            c.pos[1] = goal
        }
    }

    stub_camera_4(a, b, c, d) {}
    
    /**
     * Set the camera's focus to Mario's position, and add several relative offsets.
     *
     * @param leftRight offset to Mario's left/right, relative to his faceAngle
     * @param yOff y offset
     * @param forwBack offset to Mario's front/back, relative to his faceAngle
     * @param yawOff offset to Mario's faceAngle, changes the direction of `leftRight` and `forwBack`
     */
    set_focus_rel_mario(c, leftRight, yOff, forwBack, yawOff) {
        let wrapper = {}
        this.calc_y_to_curr_floor(wrapper, 1.0, 200.0, wrapper, 0.9, 200.0)
        let focFloorYOff = wrapper.focOff

        let yaw = this.gPlayerCameraState.faceAngle[1] + yawOff
        c.focus[2] = this.gPlayerCameraState.pos[2] + forwBack * coss(yaw) - leftRight * sins(yaw)
        c.focus[0] = this.gPlayerCameraState.pos[0] + forwBack * sins(yaw) + leftRight * coss(yaw)
        c.focus[1] = this.gPlayerCameraState.pos[1] + yOff + focFloorYOff
    }

    /**
     * Rotates the offset `to` according to the pitch and yaw values in `rotation`.
     * Adds `from` to the rotated offset, and stores the result in `dst`.
     *
     * @warning Flips the Z axis, so that relative to `rotation`, -Z moves forwards and +Z moves backwards.
     */
    offset_rotated(dst, from, to, rotation) {
        let pitchRotated = [0, 0, 0]

        pitchRotated[2] = -(to[2] * coss(rotation[0]) - to[1] * sins(rotation[0]))
        pitchRotated[1] =   to[2] * sins(rotation[0]) + to[1] * coss(rotation[0])
        pitchRotated[0] =   to[0]

        dst[0] = from[0] + pitchRotated[2] * sins(rotation[1]) + pitchRotated[0] * coss(rotation[1])
        dst[1] = from[1] + pitchRotated[1]
        dst[2] = from[2] + pitchRotated[2] * coss(rotation[1]) - pitchRotated[0] * sins(rotation[1])
    }

    /**
     * Rotates the offset defined by (`xTo`, `yTo`, `zTo`) according to the pitch and yaw values in `rotation`.
     * Adds `from` to the rotated offset, and stores the result in `dst`.
     *
     * @warning Flips the Z axis, so that relative to `rotation`, -Z moves forwards and +Z moves backwards.
     */
    offset_rotated_coords(dst, from, rotation, xTo, yTo, zTo) {
        let to = [xTo, yTo, zTo]
        this.offset_rotated(dst, from, to, rotation)
    }

    determine_pushing_or_pulling_door(currentWrapper) {
        if (this.gPlayerCameraState.action == Mario.ACT_PULLING_DOOR) {
            currentWrapper.current = 0
        } else {
            currentWrapper.current = DEGREES(-180)
        }
    }
    
    /**
     * Calculate Lakitu's next position and focus, according to gCamera's state,
     * and store them in `newPos` and `newFoc`.
     *
     * @param newPos where Lakitu should fly towards this frame
     * @param newFoc where Lakitu should look towards this frame
     *
     * @param curPos gCamera's pos this frame
     * @param curFoc gCamera's foc this frame
     *
     * @param oldPos gCamera's pos last frame
     * @param oldFoc gCamera's foc last frame
     *
     * @return Lakitu's next yaw, which is the same as the yaw passed in if no transition happened
     */
    next_lakitu_state(newPos, newFoc, curPos, curFoc, oldPos, oldFoc, yaw) {
        let startPos = [0, 0, 0]
        let startFoc = [0, 0, 0]
        let goalDist = 0
        let goalPitch = 0
        let goalYaw = 0
        let yawVelocity = 0
        let pitchVelocity = 0
        let distVelocity = 0
        let wrapper = {}
        let nextPos = [0, 0, 0]
        let nextFoc = [0, 0, 0]
        let floorHeight = 0
        let floor = {}
        let distTimer = this.sModeTransition.framesLeft
        let angleTimer = this.sModeTransition.framesLeft
        
        // If not transitioning, just use gCamera's current pos and foc
        vec3f_copy(newPos, curPos);
        vec3f_copy(newFoc, curFoc);

        if (this.sStatusFlags & CAM_FLAG_START_TRANSITION) {
            for (let i = 0; i < 3; i++) {
                // Add Mario's displacement from this frame to the last frame's pos and focus
                // Makes the transition start from where the camera would have moved
                startPos[i] = oldPos[i] + this.gPlayerCameraState.pos[i] - this.sModeTransition.marioPos[i]
                startFoc[i] = oldFoc[i] + this.gPlayerCameraState.pos[i] - this.sModeTransition.marioPos[i]
            }

            vec3f_get_dist_and_angle(curFoc, startFoc, wrapper);
            this.sModeTransition.focDist = wrapper.dist; this.sModeTransition.focPitch = wrapper.pitch; this.sModeTransition.focYaw = wrapper.yaw;
            vec3f_get_dist_and_angle(curFoc, startPos, wrapper);
            this.sModeTransition.posDist = wrapper.dist; this.sModeTransition.posPitch = wrapper.pitch; this.sModeTransition.posYaw = wrapper.yaw;
            
            this.sStatusFlags &= ~CAM_FLAG_START_TRANSITION
        }

        // Transition from the last mode to the current one
        if (this.sModeTransition.framesLeft > 0) {
            vec3f_get_dist_and_angle(curFoc, startFoc, wrapper)
            goalDist = wrapper.dist; goalPitch = wrapper.pitch; goalYaw = wrapper.yaw;
            distVelocity = Math.abs(goalDist - this.sModeTransition.posDist) / distTimer;
            pitchVelocity = Math.abs(goalPitch - this.sModeTransition.posPitch) / angleTimer;
            yawVelocity = Math.abs(goalYaw - this.sModeTransition.posYaw) / angleTimer;

            wrapper.current = this.sModeTransition.posDist
            this.camera_approach_f32_symmetric_bool(wrapper, goalDist, distVelocity)
            this.sModeTransition.posDist = wrapper.current
            wrapper.current = this.sModeTransition.posYaw
            this.camera_approach_s16_symmetric_bool(wrapper, goalYaw, yawVelocity)
            this.sModeTransition.posYaw = wrapper.current
            wrapper.current = this.sModeTransition.posPitch
            this.camera_approach_s16_symmetric_bool(wrapper, goalPitch, pitchVelocity)
            this.sModeTransition.posPitch = wrapper.current

            vec3f_set_dist_and_angle(curFoc, nextPos, this.sModeTransition.posDist, this.sModeTransition.posPitch, this.sModeTransition.posYaw);

            const output = {}
            vec3f_get_dist_and_angle(curPos, curFoc, output)
            goalDist = output.dist; goalPitch = output.pitch; goalYaw = output.yaw;
        
            pitchVelocity = this.sModeTransition.focPitch / this.sModeTransition.framesLeft
            yawVelocity = this.sModeTransition.focYaw / this.sModeTransition.framesLeft
            distVelocity = this.sModeTransition.focDist / this.sModeTransition.framesLeft

            wrapper.current = this.sModeTransition.focPitch
            this.camera_approach_f32_symmetric_bool(wrapper, goalPitch, pitchVelocity)
            this.sModeTransition.focPitch = wrapper.current
            wrapper.current = this.sModeTransition.focYaw
            this.camera_approach_s16_symmetric_bool(wrapper, goalYaw, yawVelocity)
            this.sModeTransition.focYaw = wrapper.current
            wrapper = { current: this.sModeTransition.focDist }
            this.camera_approach_s16_symmetric_bool(wrapper, 0, distVelocity)
            this.sModeTransition.focDist = wrapper.current

            vec3f_set_dist_and_angle(curFoc, nextFoc, this.sModeTransition.focDist, this.sModeTransition.focPitch, this.sModeTransition.focYaw);
        
            this.vec3f_copy(newFoc, nextFoc)
            this.vec3f_copy(newPos, nextPos)

            if (this.gCamera.cutscene != 0 || !(this.gCameraMovementFlags & CAM_MOVE_C_UP_MODE)) {
                floorHeight = SurfaceCollision.find_floor(newPos[0], newPos[1], newPos[2], floor)
                if (floorHeight != FLOOR_LOWER_LIMIT) {
                    floorHeight += 125.0
                    if (floorHeight > newPos[1]) {
                        newPos[1] = floorHeight
                    }
                }
                wrapper = { x: newPos[0], y: newPos[1], z: newPos[2] }
                SurfaceCollision.f32_find_wall_collision(wrapper, 0.0, 100.0)
                newPos[0] = wrapper.x; newPos[1] = wrapper.y; newPos[2] = wrapper.z;
            }
            this.sModeTransition.framesLeft--
            yaw = this.calculate_yaw(newFoc, newPos)
        } else {
            this.sModeTransition.posDist = 0
            this.sModeTransition.posPitch = 0
            this.sModeTransition.posYaw = 0
            this.sStatusFlags &= ~CAM_FLAG_TRANSITION_OUT_OF_C_UP
        }
        this.vec3f_copy(this.sModeTransition.marioPos, this.gPlayerCameraState.pos)
        return yaw
    }

    /**
     * Start fixed camera mode, setting the base position to (`x`, `y`, `z`)
     *
     * @return TRUE if the base pos was updated
     */
    set_camera_mode_fixed(c, x, y, z) {
        let basePosSet = false
        let posX = x
        let posY = y
        let posZ = z

        if (this.sFixedModeBasePosition[0] != posX || this.sFixedModeBasePosition[1] != posY || this.sFixedModeBasePosition[2] != posZ) {
            basePosSet = true
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        }
        this.sFixedModeBasePosition = [posX, posY, posZ]
        if (c.mode != CAMERA_MODE_FIXED) {
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            c.mode = CAMERA_MODE_FIXED
            c.pos = [this.sFixedModeBasePosition[0], this.gPlayerCameraState.pos[1], this.sFixedModeBasePosition[2]]
        }
        return basePosSet
    }

    set_camera_mode_8_directions(c) {
        if (c.mode != CAMERA_MODE_8_DIRECTIONS) {
            c.mode = CAMERA_MODE_8_DIRECTIONS
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            this.s8DirModeBaseYaw = 0
            this.s8DirModeYawOffset = 0
        }
    }

    /**
     * If the camera mode is not already the boss fight camera (camera with two foci)
     * set it to be so.
     */
    set_camera_mode_boss_fight(c) {
        if (c.mode != CAMERA_MODE_BOSS_FIGHT) {
            this.transition_to_camera_mode(c, CAMERA_MODE_BOSS_FIGHT, 15)
            this.sModeOffsetYaw = c.nextYaw - DEGREES(45)
        }
    }

    set_camera_mode_close_cam(modeWrapper) {
        if (modeWrapper.mode != CAMERA_MODE_CLOSE) {
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            modeWrapper.mode = CAMERA_MODE_CLOSE
        }
    }
    
    /**
     * Change to radial mode.
     * If the difference in yaw between pos -> Mario and pos > focus is < 90 degrees, transition.
     * Otherwise jump to radial mode.
     */
    set_camera_mode_radial(c, transitionTime) {
        let focus = [c.areaCenX, this.gPlayerCameraState.pos[1], c.areaCenZ]

        if (c.mode != CAMERA_MODE_RADIAL) {
            let yaw = this.calculate_yaw(focus, this.gPlayerCameraState.pos) - this.calculate_yaw(c.focus, c.pos) + DEGREES(90)
            if (yaw > 0) {
                this.transition_to_camera_mode(c, CAMERA_MODE_RADIAL, transitionTime)
            } else {
                c.mode = CAMERA_MODE_RADIAL
                this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            }
            this.sModeOffsetYaw = 0
        }
    }

    parallel_tracking_init(c, path) {
        if (c.mode != CAMERA_MODE_PARALLEL_TRACKING) {
            this.sParTrackPath = path
            this.sParTrackIndex = 0
            this.sParTrackTransOff.pos[0] = 0.0
            this.sParTrackTransOff.pos[1] = 0.0
            this.sParTrackTransOff.pos[2] = 0.0
            // Place the camera in the middle of the path
            c.pos[0] = (this.sParTrackPath[0].pos[0] + this.sParTrackPath[1].pos[0]) / 2
            c.pos[1] = (this.sParTrackPath[0].pos[1] + this.sParTrackPath[1].pos[1]) / 2
            c.pos[2] = (this.sParTrackPath[0].pos[2] + this.sParTrackPath[1].pos[2]) / 2
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            c.mode = CAMERA_MODE_PARALLEL_TRACKING
        }
    }

    /**
     * Set the fixed camera base pos depending on the current level area
     */
    set_fixed_cam_axis_sa_lobby() {
        switch (this.gCurrLevelArea) {
            case AREA_SA:
                this.sFixedModeBasePosition = [646.0, 143.0, -1513.0]
                break
            case AREA_CASTLE_LOBBY:
                this.sFixedModeBasePosition = [-577.0, 143.0, 1443.0]
                break
        }
    }

    /**
     * Block area-specific CameraTrigger and special surface modes.
     * Generally, block area mode changes if:
     *      Mario is wearing the metal cap, or at the water's surface, or the camera is in Mario mode
     *
     * However, if the level is WDW, DDD, or COTMC (levels that have metal cap and water):
     *      Only block area mode changes if Mario is in a cannon,
     *      or if the camera is in Mario mode and Mario is not swimming or in water with the metal cap
     */
    check_blocking_area_processing(mode) {
        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_METAL_WATER || mode == CAMERA_MODE_BEHIND_MARIO || mode == CAMERA_MODE_WATER_SURFACE) {
            this.sStatusFlags |= CAM_FLAG_BLOCK_AREA_PROCESSING
        }

        if (Area.gCurrLevelNum == LEVEL_DDD || Area.gCurrLevelNum == LEVEL_WDW || Area.gCurrLevelNum == LEVEL_COTMC) {
            this.sStatusFlags &= ~CAM_FLAG_BLOCK_AREA_PROCESSING
        }

        if ((mode == CAMERA_MODE_BEHIND_MARIO && !(this.gPlayerCameraState.action &(Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER))) || mode == CAMERA_MODE_INSIDE_CANNON) {
            this.sStatusFlags |= CAM_FLAG_BLOCK_AREA_PROCESSING
        }
    }

    cam_rr_exit_building_side(c) {
        this.set_camera_mode_8_directions(c)
        this.s8DirModeBaseYaw = DEGREES(90)
    }

    cam_rr_exit_building_top(c) {
        this.set_camera_mode_8_directions(c)
        if (c.pos[1] < 6343.0) {
            c.pos[1] = 7543.0
            this.gLakituState.goalPos[1] = c.pos[1]
            this.gLakituState.curPos[1] = c.pos[1]
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        }
    }

    cam_rr_enter_building_window(c) {
        if (c.mode != CAMERA_MODE_FIXED) {
            this.set_camera_mode_fixed(c, -2974, 478, -3975)
        }
    }

    cam_rr_enter_building(c) {
        if (c.mode != CAMERA_MODE_FIXED) {
            this.set_camera_mode_fixed(c, -2953, 798, -3943)
        }
        // Prevent the camera from being above the roof
        if (c.pos[1] > 6043.0) {
            c.pos[1] = 6043.0
        }
    }

    cam_rr_enter_building_side(c) {
        if (c.mode != CAMERA_MODE_FIXED) {
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            c.mode = CAMERA_MODE_FIXED
        }
    }

    /**
     * Fix the camera in place as Mario gets exits out the MC cave into the waterfall.
     */
    cam_cotmc_exit_waterfall(c) {
        this.gCameraMovementFlags |= CAM_MOVE_FIX_IN_PLACE
    }

    /**
     * Sets 8 directional mode and blocks the next trigger from processing.
     * Activated when Mario is walking in front of the snowman's head.
     */
    cam_sl_snowman_head_8dir(c) {
        this.sStatusFlags |= CAM_FLAG_BLOCK_AREA_PROCESSING
        this.transition_to_camera_mode(c, CAMERA_MODE_8_DIRECTIONS, 60)
        this.s8DirModeBaseYaw = 0x1D27
    }

    /**
     * Sets free roam mode in SL, called by a trigger that covers a large area and surrounds the 8 direction
     * trigger.
     */
    cam_sl_free_roam(c) {
        this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 60)
    }

    move_camera_through_floor_while_descending(c, height) {
        if ((this.sMarioGeometry.currFloorHeight < height - 100.0) && (this.sMarioGeometry.currFloorHeight)) {
            c.pos[1] = height - 400.0
            this.gLakituState.curPos[1] = height - 400.0
            this.gLakituState.goalPos[1] = height - 400.0
        }
    }

    cam_hmc_enter_maze(c) {
        if (c.pos[1] > 102.0) {
            let wrapper = {}
            vec3f_get_dist_and_angle(c.focus, this.gLakituState.goalPos, wrapper)
            vec3f_set_dist_and_angle(c.focus, this.gLakituState.goalPos, wrapper.pitch, wrapper.yaw)
            this.gLakituState.goalPos[1] = -800.0
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        }
    }

    cam_hmc_elevator_black_hole(c) {
        this.move_camera_through_floor_while_descending(c, 1536.0)
    }

    cam_hmc_elevator_maze_emergency_exit(c) {
        this.move_camera_through_floor_while_descending(c, 2355.0)
    }

    cam_hmc_elevator_lake(c) {
        this.move_camera_through_floor_while_descending(c, 1843.0)
    }

    cam_hmc_elevator_maze(c) {
        this.move_camera_through_floor_while_descending(c, 1843.0)
    }

    /**
     * Starts the "Enter Pyramid Top" cutscene.
     */
    cam_ssl_enter_pyramid_top(c) {
        this.start_object_cutscene_without_focus(CUTSCENE_ENTER_PYRAMID_TOP)
    }

    /**
     * Change to close mode in the center of the pyramid. Outside this trigger, the default mode is outwards
     * radial.
     */
    cam_ssl_pyramid_center(c) {
        this.sStatusFlags |= CAM_FLAG_BLOCK_AREA_PROCESSING
        this.transition_to_camera_mode(c, CAMERA_MODE_CLOSE, 90)
    }

    /**
     * Changes the mode back to outward radial in the boss room inside the pyramid.
     */
    cam_ssl_boss_room(c) {
        this.sStatusFlags |= CAM_FLAG_BLOCK_AREA_PROCESSING
        this.transition_to_camera_mode(c, CAMERA_MODE_OUTWARD_RADIAL, 90)
    }

    /**
     * Moves the camera to through the tunnel by forcing sModeOffsetYaw
     */
    cam_thi_move_cam_through_tunnel(c) {
        if (this.sModeOffsetYaw < DEGREES(60)) {
            this.sModeOffsetYaw = DEGREES(60)
        }
    }

    /**
     * Aligns the camera to look through the tunnel
     */
    cam_thi_look_through_tunnel(c) {
        // ~82.5 degrees
        if (this.sModeOffsetYaw > 0x3AAA) {
            this.sModeOffsetYaw = 0x3AAA
        }
    }

    /**
     * Starts the pool entrance cutscene if Mario is not exiting the pool.
     * Used in both the castle and HMC.
     */
    cam_castle_hmc_start_pool_cutscene(c) {
        if ((this.gPlayerCameraState.action != Mario.ACT_SPECIAL_DEATH_EXIT) && (this.gPlayerCameraState.action != Mario.ACT_SPECIAL_EXIT_AIRBORNE)) {
            this.start_cutscene(c, CUTSCENE_ENTER_POOL)
        }
    }

    /**
     * Sets the fixed mode pos offset so that the camera faces the doorway when Mario is near the entrance
     * to the castle lobby
     */
    cam_castle_lobby_entrance(c) {
        this.sCastleEntranceOffset = [-813.0 - this.sFixedModeBasePosition[0], 378.0 - this.sFixedModeBasePosition[1], 1103.0 - this.sFixedModeBasePosition[2]]
    }

    /**
     * Make the camera look up the stairs from the 2nd to 3rd floor of the castle
     */
    cam_castle_look_upstairs(c) {
        let floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1], c.pos[2], {})

        // If Mario is on the first few steps, fix the camera pos, making it look up
        if ((this.sMarioGeometry.currFloorHeight > 1229.0) && (floorHeight < 1229.0) && (this.sCSideButtonYaw == 0)) {
            c.pos = [-227.0, 1425.0, 1533.0]
        }
    }

    /**
     * Make the camera look down the stairs towards the basement star door
     */
    cam_castle_basement_look_downstairs(c) {
        let floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1], c.pos[2], {})

        // Fix the camera pos, making it look downwards. Only active on the top few steps
        if ((floorHeight > -110.0) && (this.sCSideButtonYaw == 0)) {
            c.pos = [-980.0, 249.0, -1398.0]
        }
    }

    /**
     * Enter the fixed-mode castle lobby. A trigger for this is placed in every entrance so that the camera
     * changes to fixed mode.
     */
    cam_castle_enter_lobby(c) {
        if (c.mode != CAMERA_MODE_FIXED) {
            this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
            this.set_fixed_cam_axis_sa_lobby(c.mode)
            c.mode = CAMERA_MODE_FIXED
        }
    }

    /**
     * Starts spiral stairs mode.
     */
    cam_castle_enter_spiral_stairs(c) {
        this.transition_to_camera_mode(c, CAMERA_MODE_SPIRAL_STAIRS, 20)
    }

    /**
     * The default mode when outside of the lobby and spiral staircase. A trigger for this is placed at
     * every door leaving the lobby and spiral staircase.
     */
    cam_castle_close_mode(c) {
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
    }

    /**
     * Functions the same as cam_castle_close_mode, but sets doorStatus so that the camera will enter
     * fixed-mode when Mario leaves the room.
     */
    cam_castle_leave_lobby_sliding_door(c) {
        this.cam_castle_close_mode(c)
        c.doorStatus = DOOR_ENTER_LOBBY
    }

    /**
     * Just calls cam_castle_enter_lobby
     */
    cam_castle_enter_lobby_sliding_door(c) {
        this.cam_castle_enter_lobby(c)
    }

    cam_bbh_room_6(c) {
        this.parallel_tracking_init(c, this.sBBHLibraryParTrackPath)
    }

    cam_bbh_fall_off_roof(c) {
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
    }

    cam_bbh_fall_into_pool(c) {
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
        let dir = [0.0, 0.0, 300.0]
        this.offset_rotated(this.gLakituState.goalPos, this.gPlayerCameraState.pos, dir, this.gPlayerCameraState.faceAngle)
        this.gLakituState.goalPos[1] = 2300.0
        vec3f_copy(c.pos, this.gLakituState.goalPos)
        this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
    }

    cam_bbh_room_1(c) {
        this.set_camera_mode_fixed(c, 956, 440, 1994)
    }

    cam_bbh_leave_front_door(c) {
        c.doorStatus = DOOR_LEAVING_SPECIAL
        this.cam_bbh_room_1(c)
    }

    cam_bbh_room_2_lower(c) {
        this.set_camera_mode_fixed(c, 2591, 400, 1284)
    }

    cam_bbh_room_4(c) {
        this.set_camera_mode_fixed(c, 3529, 340, -1384)
    }

    cam_bbh_room_8(c) {
        this.set_camera_mode_fixed(c, -500, 740, -1306)
    }

    /**
     * In BBH's room 5's library (the first floor room with the vanish cap/boo painting)
     * set the camera mode to fixed and position to (-2172, 200, 675)
     */
    cam_bbh_room_5_library(c) {
        this.set_camera_mode_fixed(c, -2172, 200, 675)
    }

    /**
     * In BBH's room 5 (the first floor room with the vanish cap/boo painting)
     * set the camera mode to to the hidden room's position
     * if coming from the library.
     */
    cam_bbh_room_5_library_to_hidden_transition(c) {
        if (this.set_camera_mode_fixed(c, -2172, 200, 675) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_5_hidden_to_library_transition(c) {
        if (this.set_camera_mode_fixed(c, -2172, 200, 675) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_5_hidden(c) {
        c.doorStatus = DOOR_LEAVING_SPECIAL
        this.set_camera_mode_fixed(c, -1542, 320, -307)
    }

    cam_bbh_room_3(c) {
        this.set_camera_mode_fixed(c, -1893, 320, 2327)
    }

    cam_bbh_room_7_mr_i(c) {
        this.set_camera_mode_fixed(c, 1371, 360, -1302)
    }

    cam_bbh_room_7_mr_i_to_coffins_transition(c) {
        if (this.set_camera_mode_fixed(c, 1371, 360, -1302) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_7_coffins_to_mr_i_transition(c) {
        if (this.set_camera_mode_fixed(c, 2115, 260, -772) == 1) {
            this.transition_next_state(c, 20);
        }
    }

    cam_bbh_elevator_room_lower(c) {
        c.doorStatus = DOOR_LEAVING_SPECIAL
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
    }

    cam_bbh_room_0_back_entrance(c) {
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
    }

    cam_bbh_elevator(c) {
        if (c.mode == CAMERA_MODE_FIXED) {
            let wrapper = c.mode
            this.set_camera_mode_close_cam(wrapper)
            c.mode = wrapper.mode
            c.pos[1] = -405.0
            this.gLakituState.goalPos[1] = -405.0
        }
    }

    cam_bbh_room_12_upper(c) {
        c.doorStatus = DOOR_LEAVING_SPECIAL
        this.set_camera_mode_fixed(c, -2932, 296, 4429)
    }

    cam_bbh_enter_front_door(c) {
        let wrapper = {mode: c.mode}
        this.set_camera_mode_close_cam(wrapper)
        c.mode = wrapper.mode
    }

    cam_bbh_room_2_library(c) {
        this.set_camera_mode_fixed(c, 3493, 440, 617)
    }

    cam_bbh_room_2_library_to_trapdoor_transition(c) {
        if (this.set_camera_mode_fixed(c, 3493, 440, 617) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_2_trapdoor(c) {
        this.set_camera_mode_fixed(c, 3502, 440, 1217)
    }

    cam_bbh_room_2_trapdoor_transition(c) {
        if (this.set_camera_mode_fixed(c, 3502, 440, 1217) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_9_attic(c) {
        this.set_camera_mode_fixed(c, -670, 460, 372)
    }

    cam_bbh_room_9_attic_transition(c) {
        if (this.set_camera_mode_fixed(c, -670, 460, 372) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_9_mr_i_transition(c) {
        if (this.set_camera_mode_fixed(c, 131, 380, -263) == 1) {
            this.transition_next_state(c, 20)
        }
    }

    cam_bbh_room_13_balcony(c) {
        this.set_camera_mode_fixed(c, 210, 420, 3109)
    }

    cam_bbh_room_0(c) {
        c.doorStatus = DOOR_LEAVING_SPECIAL
        this.set_camera_mode_fixed(c, 210, 420, 3109)
    }

    cam_ccm_enter_slide_shortcut(c) {
        this.sStatusFlags |= CAM_FLAG_CCM_SLIDE_SHORTCUT
    }

    cam_ccm_leave_slide_shortcut(c) {
        this.sStatusFlags &= ~CAM_FLAG_CCM_SLIDE_SHORTCUT
    }

    /**
     * Apply any modes that are triggered by special floor surface types
     */
    surface_type_modes(c) {
        let modeChanged = 0

        switch (this.sMarioGeometry.currFloorType) {
            case SURFACE_CLOSE_CAMERA:
                this.transition_to_camera_mode(c, CAMERA_MODE_CLOSE, 90)
                modeChanged++
                break

            case SURFACE_CAMERA_FREE_ROAM:
                this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 90)
                modeChanged++
                break

            case SURFACE_NO_CAM_COL_SLIPPERY:
                this.transition_to_camera_mode(c, CAMERA_MODE_CLOSE, 90)
                modeChanged++
                break
        }
        return modeChanged
    }

    /**
     * Set the camera mode to `mode` if Mario is not standing on a special surface
     */
    set_mode_if_not_set_by_surface(c, mode) {
        let modeChanged = this.surface_type_modes(c)

        if (modeChanged == 0 && mode != 0) {
            this.transition_to_camera_mode(c, mode, 90)
        }

        return modeChanged
    }

    /**
     * Used in THI, check if Mario is standing on any of the special surfaces in that area
     */
    surface_type_modes_thi(c) {
        switch (this.sMarioGeometry.currFloorType) {
            case SURFACE_CLOSE_CAMERA:
                if (c.mode != CAMERA_MODE_CLOSE) {
                    this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 90)
                }
                break

            case SURFACE_CAMERA_FREE_ROAM:
                if (c.mode != CAMERA_MODE_CLOSE) {
                    this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 90)
                }
                break

            case SURFACE_NO_CAM_COL_SLIPPERY:
                if (c.mode != CAMERA_MODE_CLOSE) {
                    this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 90)
                }
                break

            case SURFACE_CAMERA_8_DIR:
                this.transition_to_camera_mode(c, CAMERA_MODE_8_DIRECTIONS, 90)
                break

            default:
                this.transition_to_camera_mode(c, CAMERA_MODE_RADIAL, 90)
        }
    }

    camera_course_processing(c) {
        let level = Area.gCurrLevelNum
        let mode = 0
        let area = Area.gCurrentArea.index
        // Bounds iterator
        let b
        // Camera trigger's bounding box
        let insideBounds = false
        let oldMode = c.mode

        if (c.mode == CAMERA_MODE_C_UP) {
            c.mode = this.sModeInfo.lastMode
        }
        this.check_blocking_area_processing(c.mode)
        if (level > LEVEL_COUNT + 1) {
            level = LEVEL_COUNT + 1
        }

        if (this.sCameraTriggers[level] != null) {
            b = 0

            // Process positional triggers.
            // All triggered events are called, not just the first one.
            while (this.sCameraTriggers[level][b].event != null) {

                // Check only the current area's triggers
                if (this.sCameraTriggers[level][b].area == area) {
                    // Copy the bounding box into center and bounds
                    let center = [this.sCameraTriggers[level][b].centerX,
                                  this.sCameraTriggers[level][b].centerY,
                                  this.sCameraTriggers[level][b].centerZ]
                    let bounds = [this.sCameraTriggers[level][b].boundsX,
                                  this.sCameraTriggers[level][b].boundsY,
                                  this.sCameraTriggers[level][b].boundsZ]
                    
                    // Check if Mario is inside the bounds
                    if (this.is_pos_in_bounds(this.gPlayerCameraState.pos, center, bounds, this.sCameraTriggers[level][b].boundsYaw) == true) {
                        //! This should be checked before calling is_pos_in_bounds. (It doesn't belong
                        //! outside the while loop because some events disable area processing)
                        if (!(this.sStatusFlags & CAM_FLAG_BLOCK_AREA_PROCESSING)) {
                            this.sCameraTriggers[level][b].event(c)
                            insideBounds = true
                        }
                    }
                }

                if (this.sCameraTriggers[level][b].area == -1) {
                    // Default triggers are only active if Mario is not already inside another trigger
                    if (!insideBounds) {
                        if (!(this.sStatusFlags & CAM_FLAG_BLOCK_AREA_PROCESSING)) {
                            this.sCameraTriggers[level][b].event(c)
                        }
                    }
                }

                b++
            }
        }
        
        // Area-specific camera processing
        if (!(this.sStatusFlags & CAM_FLAG_BLOCK_AREA_PROCESSING)) {
            switch (this.gCurrLevelArea) {
                case AREA_WF:
                    if (this.gPlayerCameraState.action == ACT_RIDING_HOOT) {
                        this.transition_to_camera_mode(c, CAMERA_MODE_SLIDE_HOOT, 60)
                    } else {
                        switch (this.sMarioGeometry.currFloorType) {
                            case SURFACE_CAMERA_8_DIR:
                                this.transition_to_camera_mode(c, CAMERA_MODE_8_DIRECTIONS, 90)
                                this.s8DirModeBaseYaw = DEGREES(90)
                                break

                            case SURFACE_BOSS_FIGHT_CAMERA:
                                if (Area.gCurrActNum == 1) {
                                    this.set_camera_mode_boss_fight(c)
                                } else {
                                    this.set_camera_mode_radial(c, 60)
                                }
                                break
                            default:
                                this.set_camera_mode_radial(c, 60)
                        }
                    }
                    break

                case AREA_BBH:
                    // if camera is fixed at bbh_room_13_balcony_camera (but as floats)
                    if (this.sFixedModeBasePosition == [210.0, 420.0, 3109.0]) {
                        if (this.gPlayerCameraState.pos[1] < 1800.0) {
                            this.transition_to_camera_mode(c, CAMERA_MODE_CLOSE, 30)
                        }
                    }
                    break

                case AREA_SSL_PYRAMID:
                    this.set_mode_if_not_set_by_surface(c, CAMERA_MODE_OUTWARD_RADIAL)
                    break

                case AREA_SSL_OUTSIDE:
                    this.set_mode_if_not_set_by_surface(c, CAMERA_MODE_RADIAL)
                    break

                case AREA_THI_HUGE:
                    break

                case AREA_THI_TINY:
                    this.surface_type_modes_thi(c)
                    break

                case AREA_TTC:
                    this.set_mode_if_not_set_by_surface(c, CAMERA_MODE_OUTWARD_RADIAL)
                    break

                case AREA_BOB:
                    if (this.set_mode_if_not_set_by_surface(c, CAMERA_MODE_NONE) == 0) {
                        if (this.sMarioGeometry.currFloorType == SURFACE_BOSS_FIGHT_CAMERA) {
                            this.set_camera_mode_boss_fight(c)
                        } else {
                            if (c.mode == CAMERA_MODE_CLOSE) {
                                this.transition_to_camera_mode(c, CAMERA_MODE_RADIAL, 60)
                            } else {
                                this.set_camera_mode_radial(c, 60)
                            }
                        }
                    }
                    break

                case AREA_WDW_MAIN:
                    if (this.sMarioGeometry.currFloorType == SURFACE_INSTANT_WARP_1B) {
                        c.defMode = CAMERA_MODE_RADIAL
                    }
                    break

                case AREA_WDW_TOWN:
                    if (this.sMarioGeometry.currFloorType == SURFACE_INSTANT_WARP_1C) {
                        c.defMode = CAMERA_MODE_CLOSE
                    }
                    break

                case AREA_DDD_WHIRLPOOL:
                    break

                case AREA_DDD_SUB:
                    if (c.mode != CAMERA_MODE_BEHIND_MARIO && c.mode != CAMERA_MODE_WATER_SURFACE) {
                        if ((this.gPlayerCameraState.action & ACT_FLAG_ON_POLE) != 0 || this.sMarioGeometry.currFloorHeight > 800.0) {
                            this.transition_to_camera_mode(c, CAMERA_MODE_8_DIRECTIONS, 60)
                        } else {
                            if (this.gPlayerCameraState.pos[1] < 800.0) {
                                this.transition_to_camera_mode(c, CAMERA_MODE_FREE_ROAM, 60)
                            }
                        }
                    }
                    break
            }
        }

        this.sStatusFlags &= ~CAM_FLAG_BLOCK_AREA_PROCESSING
        if (oldMode == CAMERA_MODE_C_UP) {
            this.sModeInfo.lastMode = c.mode
            c.mode = oldMode
        }
        return c.mode
    }

    /**
     * Move `pos` between the nearest floor and ceiling
     * @param lastGood unused, passed as the last position the camera was in
     */
    resolve_geometry_collisions(pos, lastGood) {
        let wrapper = {x: pos[0], y: pos[1], z: pos[2]}
        SurfaceCollision.f32_find_wall_collision(wrapper, 0.0, 100.0)
        let floorY = SurfaceCollision.find_floor(wrapper.x, wrapper.y + 50.0, wrapper.z, {})
        let ceilY = SurfaceCollision.find_ceil(wrapper.x, wrapper.y - 50.0, wrapper.z, {})
        pos[0] = wrapper.x; pos[1] = wrapper.y; pos[2] = wrapper.z

        if (FLOOR_LOWER_LIMIT != floorY && CELL_HEIGHT_LIMIT == ceilY) {
            floorY += 125.0
            if (pos[1] < floorY) {
                pos[1] = floorY
            }
        }

        if (FLOOR_LOWER_LIMIT == floorY && CELL_HEIGHT_LIMIT != ceilY) {
            ceilY -= 125.0
            if (pos[1] > ceilY) {
                pos[1] = ceilY
            }
        }

        if (FLOOR_LOWER_LIMIT != floorY && CELL_HEIGHT_LIMIT != ceilY) {
            floorY += 125.0
            ceilY -= 125.0

            if (pos[1] <= floorY && pos[1] < ceilY) { pos[1] = floorY }
            if (pos[1] > floorY && pos[1] >= ceilY) { pos[1] = ceilY }
            if (pos[1] <= floorY && pos[1] >= ceilY) { pos[1] = (floorY + ceilY) * 0.5 }
        }
    }

    rotate_camera_around_walls(c, cPos, yawWrapper, yawRange) {
        let colData = JSON.parse(JSON.stringify(WallColDataObj))
        let wall = JSON.parse(JSON.stringify(surfaceObj))
        let dummyDist = 0
        let checkDist = 0
        let coarseRadius = 0
        let fineRadius = 0
        let wallYaw = 0
        let horWallNorm = 0
        let dummyPitch = 0
        // The yaw of the vector from Mario to the camera.
        let yawFromMario = 0
        let status = 0
        
        let wrapper = { dist: dummyDist, pitch: dummyPitch, yaw: yawFromMario }
        MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, cPos, wrapper)
        dummyDist = wrapper.dist
        dummyPitch = wrapper.pitch
        yawFromMario = wrapper.yaw
        this.sStatusFlags &= ~CAM_FLAG_CAM_NEAR_WALL
        colData.offsetY = 100.0
        // The distance from Mario to Lakitu
        checkDist = 0.0
        /// The radius used to find potential walls to avoid.
        /// Increases to 250.f, but the max collision radius is 200.f
        coarseRadius = 150.0
        /// This only increases when there is a wall collision found in the coarse pass
        fineRadius = 100.0

        for (let step = 0; step < 8; step++) {
            // Start at Mario, move backwards to Lakitu's position
            colData.x = this.gPlayerCameraState.pos[0] + ((cPos[0] - this.gPlayerCameraState.pos[0]) * checkDist)
            colData.y = this.gPlayerCameraState.pos[1] + ((cPos[1] - this.gPlayerCameraState.pos[0]) * checkDist)
            colData.z = this.gPlayerCameraState.pos[2] + ((cPos[2] - this.gPlayerCameraState.pos[0]) * checkDist)
            colData.radius = coarseRadius
            // Increase the coarse check radius
            wrapper = { current: coarseRadius }
            this.camera_approach_f32_symmetric_bool(wrapper, 250.0, 30.0)
            coarseRadius = wrapper.current

            if (SurfaceCollision.find_wall_collisions(colData) != 0) {
                wall = colData.walls[colData.numWalls - 1]

                // If we're over halfway from Mario to Lakitu, then there's a wall near the camera, but
                // not necessarily obstructing Mario
                if (step >= 5) {
                    this.sStatusFlags |= CAM_FLAG_CAM_NEAR_WALL
                    if (status < 1) {
                        status = 1
                        wall = colData.walls[colData.numWalls - 1]
                        // wallYaw is parallel to the wall, not perpendicular
                        wallYaw = atan2s(wall.normal.z, wall.normal.x) + DEGREES(90)
                        // Calculate the avoid direction. The function returns the opposite direction so add 180
                        // degrees.
                        yawWrapper.yaw = this.calc_avoid_yaw(yawFromMario, wallYaw) + DEGREES(180)
                    }
                }

                colData.x = this.gPlayerCameraState.pos[0] + ((cPos[0] - this.gPlayerCameraState.pos[0]) * checkDist)
                colData.y = this.gPlayerCameraState.pos[1] + ((cPos[1] - this.gPlayerCameraState.pos[0]) * checkDist)
                colData.z = this.gPlayerCameraState.pos[2] + ((cPos[2] - this.gPlayerCameraState.pos[0]) * checkDist)
                colData.radius = fineRadius
                // Increase the fine check radius
                wrapper = { current: fineRadius }
                this.camera_approach_f32_symmetric_bool(wrapper, 200.0, 20.0)
                fineRadius = wrapper.current
                wrapper.current
                if (SurfaceCollision.find_wall_collisions(colData) != 0) {
                    wall = colData.walls[colData.numWalls - 1]
                    horWallNorm = atan2s(wall.normal.z, wall.normal.x)
                    wallYaw = horWallNorm + DEGREES(90)
                    // If Mario would be blocked by the surface, then avoid it
                    if ((this.is_range_behind_surface(this.gPlayerCameraState.pos, cPos, wall, yawRange, SURFACE_WALL_MISC) == 0)
                        && (this.is_mario_behind_surface(c, wall) == true)
                        // Also check if the wall is tall enough to cover Mario
                        && (this.is_surf_within_bounding_box(wall, -1.0, 150.0, -1.0) == false)) {
                            // Calculate the avoid direction. The function returns the opposite direction so add 180
                        // degrees.
                        yawWrapper.yaw = this.calc_avoid_yaw(yawFromMario, wallYaw) + DEGREES(180)
                        wrapper = { current: yawWrapper.yaw }
                        this.camera_approach_s16_symmetric_bool(wrapper, horWallNorm, yawRange)
                        yawWrapper.yaw = wrapper.current
                        status = 3
                        step = 8
                    }
                }
            }
            checkDist += 0.125
        }
        
        return status
    }

    /**
     * Stores type and height of the nearest floor and ceiling to Mario in `pg`
     *
     * Note: Also finds the water level, but waterHeight is unused
     */
    find_mario_floor_and_ceil(pg) {
        let surf = {}
        let ceil = {}
        let tempCheckingSurfaceCollisionsForCamera = ObjectListProc.gCheckingSurfaceCollisionsForCamera
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = true

        if (SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 10.0, this.gPlayerCameraState.pos[2], surf) != FLOOR_LOWER_LIMIT) {
            pg.currFloorType = surf.floor.type
            if (isNaN(surf.floor.type)) throw "error in finding mario floor: " + surf.floor.type
        } else {
            pg.currFloorType = 0
        }

        if (SurfaceCollision.find_ceil(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] - 10.0, this.gPlayerCameraState.pos[2], surf) != CELL_HEIGHT_LIMIT) {
            pg.currFloorType = surf.ceil.type
            if (isNaN(surf.ceil.type)) throw "error in finding mario ceil: " + surf.ceil.type
        } else {
            pg.currFloorType = 0
        }

        pg.currCeilType = 0

        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false

        let wrapper = {floor: pg.currFloor, ceil: ceil.currCeil}
        pg.currFloorHeight = SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 10.0, this.gPlayerCameraState.pos[2], wrapper)
        pg.currCeilHeight = SurfaceCollision.find_ceil(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] - 10.0, this.gPlayerCameraState.pos[2], wrapper)
        pg.currFloor = wrapper.floor
        pg.currCeil = wrapper.ceil
        pg.waterHeight = SurfaceCollision.find_water_level(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[2])
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = tempCheckingSurfaceCollisionsForCamera
    }

    /**
     * Start a cutscene focusing on an object
     * This will play if nothing else happened in the same frame, like exiting or warping.
     */
    start_object_cutscene(cutscene, o) {
        this.sObjectCutscene = cutscene
        this.gRecentCutscene = 0
        this.gCutsceneFocus = o
        this.gObjCutsceneDone = false
    }

    /**
     * Start a low-priority cutscene without focusing on an object
     * This will play if nothing else happened in the same frame, like exiting or warping.
     */
    start_object_cutscene_without_focus(cutscene) {
        this.sObjectCutscene = cutscene
        this.sCutsceneDialogResponse = DIALOG_RESPONSE_NONE
        return 0
    }

    cutscene_object_with_dialog(cutscene, o, dialogID) {
        let response = DIALOG_RESPONSE_NONE

        if ((this.gCamera.cutscene == 0) && (this.sObjectCutscene == 0)) {
            if (this.gRecentCutscene != cutscene) {
                this.start_object_cutscene(cutscene, o)
                if (dialogID != DIALOG_NONE) {
                    this.sCutsceneDialogID = dialogID
                } else {
                    this.sCutsceneDialogID = DIALOG_001
                }
            } else {
                response = this.sCutsceneDialogResponse
            }

            this.gRecentCutscene = 0
        }
        return response
    }

    cutscene_object_without_dialog(cutscene, o) {
        let response = this.cutscene_object_with_dialog(cutscene, o, DIALOG_NONE)
        return response
    }

    /**
     * @return 0 if not started, 1 if started, and -1 if finished
     */
    cutscene_object(cutscene, o) {
        let status = 0

        if ((this.gCamera.cutscene == 0) && (this.sObjectCutscene == 0)) {
            if (this.gRecentCutscene != cutscene) {
                this.start_object_cutscene(cutscene, o)
                status = 1
            } else {
                status = -1
            }
        }

        return status
    }

    /**
     * Update the camera's yaw and nextYaw. This is called from cutscenes to ignore the camera mode's yaw.
     */
    update_camera_yaw(c) {
        c.nextYaw = this.calculate_yaw(c.focus, c.pos)
        c.yaw = c.nextYaw
    }

    cutscene_reset_spline() {
        this.sCutsceneSplineSegment = 0
        this.sCutsceneSplineSegmentProgress = 0
    }

    stop_cutscene_and_retrieve_stored_info(c) {
        this.gCutsceneTimer = CUTSCENE_STOP
        c.cutscene = 0
        vec3f_copy(c.focus, this.sCameraStoreCutscene.focus)
        vec3f_copy(c.pos, this.sCameraStoreCutscene.pos)
    }

    cap_switch_save(dummy) {
        // save_file_do_save(Area.gCurrSaveFileNum - 1)
    }

    init_spline_point(splineWrapper, index, speed, point) {
        splineWrapper.spline.index = index
        splineWrapper.spline.speed = speed
        vec3f_copy(splineWrapper.spline.point, point)
    }

    copy_spline_segment(dst, src) {
        let j = 0
        let i = 0

        wrapper = {spline: dst[i]}
        this.init_spline_point(wrapper, src[j].index, src[j].speed, src[j].point)
        dst[i] = wrapper.spline
        i++
        while (j > 16) {
            while (src[j].index != -1) {
                wrapper = {spline: dst[i]}
                this.init_spline_point(wrapper, src[j].index, src[j].speed, src[j].point)
                dst[i] = wrapper.spline
                i++
                j++
            }
        }

        // Create the end of the spline by duplicating the last point
        wrapper.spline = dst[i]
        this.init_spline_point(wrapper, 0, src[j].speed, src[j].point)
        dst[i] = wrapper.spline; wrapper.spline = dst[i + 1]
        this.init_spline_point(wrapper, 0, 0, src[j].point)
        dst[i + 1] = wrapper.spline; wrapper.spline = dst[i + 2]
        this.init_spline_point(wrapper, 0, 0, src[j].point)
        dst[i + 2] = wrapper.spline; wrapper.spline = dst[i + 3]
        this.init_spline_point(wrapper, -1, 0, src[j].point)
        dst[i + 3] = wrapper.spline
    }

    /**
     * Triggers Mario to enter a dialog state. This is used to make Mario look at the focus of a cutscene,
     * for example, bowser.
     * @param state 0 = stop, 1 = start, 2 = start and look up, and 3 = start and look down
     *
     * @return if Mario left the dialog state, return CUTSCENE_LOOP, else return gCutsceneTimer
     */
    cutscene_common_set_dialog_state(state) {
        timer = this.gCutsceneTimer
        // If the dialog ended, return CUTSCENE_LOOP, which would end the cutscene shot
        if (set_mario_npc_dialog(state) == MARIO_DIALOG_STATUS_SPEAK) {
            timer = CUTSCENE_LOOP
        }
        return timer
    }

    /**
     * Cause Mario to enter the normal dialog state.
     */
    cutscene_mario_dialog(c) {
        this.gCutsceneTimer = this.cutscene_common_set_dialog_state(MARIO_DIALOG_LOOK_FRONT)
    }

    /**
     * Lower the volume (US only) and start the peach letter background music
     */
    cutscene_intro_peach_start_letter_music(c) {
        seq_player_lower_volume(SEQ_PLAYER_LEVEL, 60, 40)
        this.cutscene_intro_peach_play_message_music()
    }

    /**
     * Raise the volume (not in JP) and start the flying music.
     */
    cutscene_intro_peach_start_flying_music(c) {
        seq_player_unlower_volume(SEQ_PLAYER_LEVEL, 60)
        this.cutscene_intro_peach_play_lakitu_flying_music()
    }

    reset_pan_distance(c) {
        this.sPanDistance = 0
    }

    /**
     * Store camera info for the cannon opening cutscene
     */
    store_info_cannon(c) {
        vec3f_copy(this.sCameraStoreCutscene.pos, c.pos)
        vec3f_copy(this.sCameraStoreCutscene.focus, c.focus)
        this.sCameraStoreCutscene.panDist = this.sPanDistance
        this.sCameraStoreCutscene.cannonYOffset = this.sCannonYOffset
    }

    /**
     * Retrieve camera info for the cannon opening cutscene
     */
    retrieve_info_cannon(c) {
        vec3f_copy(c.pos, this.sCameraStoreCutscene.pos)
        vec3f_copy(c.focus, this.sCameraStoreCutscene.focus)
        this.sPanDistance = this.sCameraStoreCutscene.panDist
        this.sCannonYOffset = this.sCameraStoreCutscene.cannonYOffset
    }

    /**
     * Store camera info for the star spawn cutscene
     */
    store_info_star(c) {
        this.reset_pan_distance(c)
        this.vec3f_copy(this.sCameraStoreCutscene.pos, c.pos)
        this.sCameraStoreCutscene.focus[0] = this.gPlayerCameraState.pos[0]
        this.sCameraStoreCutscene.focus[1] = c.focus[1]
        this.sCameraStoreCutscene.focus[2] = this.gPlayerCameraState.pos[2]
    }

    /**
     * Retrieve camera info for the star spawn cutscene
     */
    retrieve_info_star(c) {
        this.vec3f_copy(c.pos, this.sCameraStoreCutscene.pos)
        this.vec3f_copy(c.focus, this.sCameraStoreCutscene.focus)
    }

    /**
     * Rotate the camera's focus around the camera's position by incYaw and incPitch
     */
    pan_camera(c, incPitch, incYaw) {
        let wrapper = {}
        vec3f_get_dist_and_angle(c.pos, c.focus, wrapper)
        wrapper.pitch += incPitch; wrapper.yaw += incYaw
        vec3f_set_dist_and_angle(c.pos, c.focus, wrapper.dist, wrapper.pitch, wrapper.yaw)
    }

    cutscene_shake_explosion(c) {
        this.set_environmental_camera_shake(SHAKE_ENV_EXPLOSION)
        this.cutscene_set_fov_shake_preset(1)
    }

    /**
     * Change the spherical coordinates of `to` relative to `from` by `incDist`, `incPitch`, and `incYaw`
     *
     * @param from    the base position
     * @param[out] to the destination position
     */
    rotate_and_move_vec3f(to, from, incDist, incPitch, incYaw) {
        let wrapper = {}
        vec3f_get_dist_and_angle(from, to, wrapper)
        wrapper.dist += incDist; wrapper.pitch += incPitch; wrapper.yaw += incYaw
        vec3f_set_dist_and_angle(from, to, wrapper.dist, wrapper.pitch, wrapper.yaw)
    }

    set_flag_post_door(c) {
        this.sStatusFlags |= CAM_FLAG_BEHIND_MARIO_POST_DOOR
        this.sCameraYawAfterDoorCutscene = this.calculate_yaw(c.focus, c.pos)
    }

    cutscene_soften_music(c) {
        seq_player_lower_volume(SEQ_PLAYER_LEVEL, 60, 40)
    }

    cutscene_unsoften_music(c) {
        seq_player_unlower_volume(SEQ_PLAYER_LEVEL, 60)
    }

    /**
     * Set the camera position and focus for when Mario falls from the sky.
     */
    cutscene_ending_mario_fall_start(c) {
        c.focus = [-26.0, 0.0, -137.0]
        c.pos = [165.0, 4725.0, 324.0]
    }

    /**
     * Focus on Mario when he's falling from the sky.
     */
    cutscene_ending_mario_fall_focus_mario(c) {
        let offset = [0.0, 80.0, Math.abs(this.gPlayerCameraState.pos[1] - c.pos[1]) * -0.1]
        if (offset[2] > -100.0) {
            offset[2] = -100.0
        }

        this.offset_rotated(c.focus, this.gPlayerCameraState.pos, offset, gPlayerCameraState.faceAngle)
    }

    /**
     * Mario falls from the sky after the grand star cutscene.
     */
    cutscene_ending_mario_fall(c) {
        this.cutscene_ending_mario_fall_start = this.cutscene_ending_mario_fall_start.bind(this)
        this.cutscene_ending_mario_fall_focus_mario = this.cutscene_ending_mario_fall_focus_mario.bind(this)
        this.cutscene_event(this.cutscene_ending_mario_fall_start, c, 0, 0)
        this.cutscene_event(this.cutscene_ending_mario_fall_focus_mario, c, 0, -1)
    }

    cutscene_ending_mario_land_closeup(c) {
        c.focus = [85.0, 826.0, 250.0]
        c.pos = [-51.0, 988.0, -202.0]
    }

    // ---------------- //

    define_camera_triggers() {
        
    }

    vec3f_copy(dest, src) {
        dest[0] = src[0]
        dest[1] = src[1]
        dest[2] = src[2]
    }

    set_cam_angle(mode) {
        let curMode = CAM_ANGLE_LAKITU
        
        // Switch to Mario mode
        if (mode == CAM_ANGLE_MARIO && !(this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            this.sSelectionFlags |= CAM_MODE_MARIO_ACTIVE
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                this.sSelectionFlags |= CAM_MODE_LAKITU_WAS_ZOOMED_OUT
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
            }
            this.sCameraSoundFlags |= CAM_SOUND_MARIO_ACTIVE
        }

        // Switch back to normal mode
        if (mode == CAM_ANGLE_LAKITU && (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            this.sSelectionFlags &= ~CAM_MODE_MARIO_ACTIVE
            if (this.sSelectionFlags & CAM_MODE_LAKITU_WAS_ZOOMED_OUT) {
                this.sSelectionFlags &= ~CAM_MODE_LAKITU_WAS_ZOOMED_OUT
                this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
            } else {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
            }
            this.sCameraSoundFlags |= CAM_SOUND_NORMAL_ACTIVE
        }
        if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
            curMode = CAM_ANGLE_MARIO
        }
        return curMode
    }

    trigger_cutscene_dialog(trigger) {
        let result = 0

        if (trigger == 1) {
            this.start_object_cutscene_without_focus(CUTSCENE_READ_MESSAGE)
        }
        return result
    }
    
    

    set_fov_shake(amplitude, decay, shakeSpeed) {
        if (amplitude > this.sFOVState.shakeAmplitude) {
            this.sFOVState.shakeAmplitude = amplitude
            this.sFOVState.decay = decay
            this.sFOVState.shakeSpeed = shakeSpeed
        }
    }

    cutscene_star_spawn_store_info(c) {
        this.store_info_star(c)
    }

    /**
     * Focus on the top of the star.
     */
    cutscene_star_spawn_focus_star(c) {
        let starPos = {0: 0, 1: 0, 2: 0}
        if (this.gCutsceneFocus != null) {
            this.object_pos_to_vec3f(starPos, this.gCutsceneFocus)
            starPos[1] += this.gCutsceneFocus.hitboxHeight
            this.approach_vec3f_asymptotic(c.focus, starPos, 0.1, 0.1, 0.1)
        }
    }

    /**
     * Use boss fight mode's update function to move the focus back.
     */
    cutscene_star_spawn_update_boss_fight(c) {
        let pos = {0: 0, 1: 0, 2: 0}
        let focus = {0: 0, 1: 0, 2: 0}

        this.update_boss_fight_camera(c, focus, pos)
        this.approach_vec3f_asymptotic(c.focus, focus, 0.2, 0.2, 0.2)
        this.approach_vec3f_asymptotic(c.pos, pos, 0.2, 0.2, 0.2)
    }

    /**
     * Fly back to the camera's previous pos and focus.
     */
    cutscene_star_spawn_fly_back(c) {
        this.retrieve_info_star(c)
        this.transition_next_state(c, 15)
    }

    /**
     * Plays when a star spawns (ie from a box).
     */
    cutscene_star_spawn(c) {
        this.cutscene_star_spawn_store_info = this.cutscene_star_spawn_store_info.bind(this)
        this.cutscene_star_spawn_focus_star = this.cutscene_star_spawn_focus_star.bind(this)
        this.cutscene_event(this.cutscene_star_spawn_store_info, c, 0, 0)
        this.cutscene_event(this.cutscene_star_spawn_focus_star, c, 0, -1)
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT

        if (this.gObjCutsceneDone) {
            // Set the timer to CUTSCENE_LOOP, which start the next shot.
            this.gCutsceneTimer = CUTSCENE_LOOP
        }
    }

    /**
     * Move the camera back to Mario.
     */
    cutscene_star_spawn_back(c) {
        if ((c.mode == CAMERA_MODE_BOSS_FIGHT) && (this.set_cam_angle(0) == CAM_ANGLE_LAKITU)) {
            this.cutscene_star_spawn_update_boss_fight = this.cutscene_star_spawn_update_boss_fight.bind(this)
            this.cutscene_event(this.cutscene_star_spawn_update_boss_fight, c, 0, -1)
        } else {
            this.cutscene_star_spawn_fly_back = this.cutscene_star_spawn_fly_back.bind(this)
            this.cutscene_event(this.cutscene_star_spawn_fly_back, c, 0, 0)
        }

        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
    }

    cutscene_star_spawn_end(c) {
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.gCutsceneTimer = CUTSCENE_STOP
        c.cutscene = 0
    }

    /**
     * cvar8 is Mario's position and faceAngle
     *
     * cvar9.point is gCutsceneFocus's position
     * cvar9.angle[1] is the yaw between Mario and the gCutsceneFocus
     */
    cutscene_dialog_start(c) {
        this.cutscene_soften_music(c)
        set_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_DIALOG)

        if (c.mode == CAMERA_MODE_BOSS_FIGHT) {
            this.vec3f_copy(this.sCameraStoreCutscene.focus, c.focus)
            this.vec3f_copy(this.sCameraStoreCutscene.pos, c.pos)
        } else {
            this.store_info_star(c)
        }

        // Store Mario's position and faceAngle
        this.sCutsceneVars[8].angle[0] = 0
        this.vec3f_copy(this.sCutsceneVars[8].point, this.gPlayerCameraState.pos)
        this.sCutsceneVars[8].point[1] += 125.0

        // Store gCutsceneFocus's position and yaw
        this.object_pos_to_vec3f(this.sCutsceneVars[9].point, this.gCutsceneFocus)
        this.sCutsceneVars[9].point[1] += this.gCutsceneFocus.hitboxHeight + 200.0
        this.sCutsceneVars[9].angle[1] = this.calculate_yaw(this.sCutsceneVars[8].point, this.sCutsceneVars[9].point)

        let yaw = this.calculate_yaw(this.gPlayerCameraState.pos, this.gLakituState.curPos)
        if ((yaw - this.sCutsceneVars[9].angle[1]) & 0x8000) {
            this.sCutsceneVars[9].angle[1] -= 0x6000
        } else {
            this.sCutsceneVars[9].angle[1] += 0x6000
        }
    }

    /**
     * Move closer to Mario and the object, adjusting to their difference in height.
     * The camera's generally ends up looking over Mario's shoulder.
     */
    cutscene_dialog_move_mario_shoulder(c) {
        let dist, pitch, yaw = 0
        let focus = [0, 0, 0]
        let pos = [0, 0, 0]

        this.scale_along_line(focus, this.sCutsceneVars[9].point, this.gPlayerCameraState.pos, 0.7)
        let wrapper = {dist: dist, pitch: pitch, yaw: yaw}
        vec3f_get_dist_and_angle(c.pos, focus, wrapper)
        dist = wrapper.dist; pitch = wrapper.pitch; yaw = wrapper.yaw;
        pitch = this.calculate_pitch(c.pos, this.sCutsceneVars[9].point)
        vec3f_set_dist_and_angle(c.pos, pos, dist, pitch, yaw)

        focus[1] += (this.sCutsceneVars[9].point[1] - focus[1]) * 0.1
        this.approach_vec3f_asymptotic(c.focus, focus, 0.2, 0.2, 0.2)

        this.vec3f_copy(pos, c.pos)

        // Set y pos to cvar8's y (top of focus object)
        pos[1] = this.sCutsceneVars[8].point[1]
        wrapper = {dist: dist, pitch: pitch, yaw: yaw}
        vec3f_get_dist_and_angle(this.sCutsceneVars[8].point, pos, wrapper)
        dist = wrapper.dist; pitch = wrapper.pitch; yaw = wrapper.yaw;
        wrapper.current = yaw
        this.approach_s16_asymptotic_bool(wrapper, this.sCutsceneVars[9].angle[1], 0x10)
        yaw = wrapper.current
        wrapper.current = dist
        this.approach_f32_asymptotic_bool(wrapper, 180.0, 0.05)
        dist = wrapper.current
        vec3f_set_dist_and_angle(this.sCutsceneVars[8].point, pos, dist, pitch, yaw)

        // Move up if Mario is below the focus object, down is Mario is above
        pos[1] = this.sCutsceneVars[8].point[1] + sins(this.calculate_pitch(this.sCutsceneVars[9].point, this.sCutsceneVars[8].point)) * 100.0

        wrapper.current = c.pos[1]
        this.approach_f32_asymptotic_bool(wrapper, pos[1], 0.05)
        c.pos[0] = pos[0]
        c.pos[1] = wrapper.current
        c.pos[2] = pos[2]
    }

    /**
     * Create the dialog with sCutsceneDialogID
     */
    cutscene_dialog_create_dialog_box(c) {
        if (c.cutscene == CUTSCENE_RACE_DIALOG) {
            IngameMenu.create_dialog_box_with_response(this.sCutsceneDialogID)
        } else {
            IngameMenu.create_dialog_box(this.sCutsceneDialogID)
        }
    }

    /**
     * Cutscene that plays when Mario talks to an object.
     */
    cutscene_dialog(c) {
        this.cutscene_dialog_start = this.cutscene_dialog_start.bind(this)
        this.cutscene_dialog_move_mario_shoulder = this.cutscene_dialog_move_mario_shoulder.bind(this)
        this.cutscene_dialog_create_dialog_box = this.cutscene_dialog_create_dialog_box.bind(this)
        this.cutscene_event(this.cutscene_dialog_start, c, 0, 0)
        this.cutscene_event(this.cutscene_dialog_move_mario_shoulder, c, 0, -1)
        this.cutscene_event(this.cutscene_dialog_create_dialog_box, c, 10, 10)
    }

    /**
     * Sets the CAM_FLAG_UNUSED_CUTSCENE_ACTIVE flag, which does nothing.
     */
    cutscene_dialog_set_flag(c) {
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
    }

    cutscene_dialog_end(c) {
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
        c.cutscene = 0
        clear_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_DIALOG)
    }

    cutscene_read_message_start(c) {
        this.cutscene_unsoften_music(c)
        this.transition_next_state(c, 30)
        this.reset_pan_distance(c)
        this.store_info_star(c)
        
        this.sCutsceneVars[1].angle[0] = this.sCUpCameraPitch
        this.sCutsceneVars[1].angle[1] = this.sModeOffsetYaw
        this.sCUpCameraPitch = -0x830
        this.sModeOffsetYaw = 0
        this.sCutsceneVars[0].angle[0] = 0
    }

    cutscene_read_message(c) {
        this.cutscene_read_message_start = this.cutscene_read_message_start.bind(this)
        this.cutscene_event(this.cutscene_read_message_start, c, 0, 0)
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT

        if (window.playerInput.buttonPressedA) {
            this.sCutsceneVars[0].angle[0] = 1
        }

        switch (this.sCutsceneVars[0].angle[0]) {
            // Do nothing until message is gone.
            case 0:
                if (IngameMenu.get_dialog_id() != DIALOG_NONE) {
                    this.sCutsceneVars[0].angle[0]++
                    set_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_DIALOG)
                }
                break
            // Leave the dialog.
            case 1:
                this.move_mario_head_c_up(c)
                this.update_c_up(c, c.focus, c.pos)

                // This could cause softlocks. If a message starts one frame after another one closes, the
                // cutscene will never end.
                if (IngameMenu.get_dialog_id() == DIALOG_NONE) {
                    this.gCutsceneTimer = CUTSCENE_LOOP
                    this.retrieve_info_star(c)
                    this.transition_next_state(c, 15)
                    this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
                    clear_time_stop_flags(TIME_STOP_ENABLED | TIME_STOP_DIALOG)
                    // Retrieve previous state
                    this.sCUpCameraPitch = this.sCutsceneVars[1].angle[0]
                    this.sModeOffsetYaw = this.sCutsceneVars[1].angle[1]
                    this.cutscene_unsoften_music(c)
                }
        }
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
    }

    /**
     * Set CAM_FLAG_UNUSED_CUTSCENE_ACTIVE, which does nothing.
     */
    cutscene_read_message_set_flag(c) {
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
    }

    /**
     * End the message cutscene.
     */
    cutscene_read_message_end(c) {
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
        c.cutscene = 0
    }

    /**
     * Set the camera pos depending on which level Mario exited.
     */
    cutscene_non_painting_set_cam_pos(c) {
        switch (this.gPrevLevel) {
            case LEVEL_HMC:
            case LEVEL_COTMC:
                vec3f_set(c.pos, 3465.0, -1008.0, -2961.0);
                break;
            
            case LEVEL_RR:
                vec3f_set(c.pos, 3741.0, 3151.0, 6065.0)
                break

            case LEVEL_WMOTR:
                vec3f_set(c.pos, 1972.0, 3230.0, 5891.0)
                break

            default:
                this.offset_rotated(c.pos, this.sCutsceneVars[7].point, this.sCutsceneVars[5].point, this.sCutsceneVars[7].angle)
                c.pos[1] = SurfaceCollision.find_floor(c.pos[0], c.pos[1] + 1000.0, c.pos[2], {}) + 125.0
        }
    }

    /**
     * Update the camera focus depending on which level Mario exited.
     */
    cutscene_non_painting_set_cam_focus(c) {
        this.offset_rotated(c.focus, this.sCutsceneVars[7].point, this.sCutsceneVars[6].point, this.sCutsceneVars[7].angle)

        if (this.gPrevLevel == LEVEL_COTMC || this.gPrevLevel == LEVEL_HMC || this.gPrevLevel == LEVEL_RR || this.gPrevLevel == LEVEL_WMOTR) {
            c.focus[0] = c.pos[0] + (this.gPlayerCameraState.pos[0] - c.pos[0]) * 0.7
            c.focus[1] = c.pos[1] + (this.gPlayerCameraState.pos[1] - c.pos[1]) * 0.4
            c.focus[2] = c.pos[2] + (this.gPlayerCameraState.pos[2] - c.pos[2]) * 0.7
        } else {
            c.focus[1] = c.pos[1] + (this.gPlayerCameraState.pos[1] - c.pos[1]) * 0.2
        }
    }

    // -----

    /**
     * Set cvar7 to Mario's pos and faceAngle
     * Set cvar6 to the focus offset from Mario.
     * set cvar5 to the pos offset from Mario. (This is always overwritten)
     */
    cutscene_non_painting_death_start(c) {
        vec3f_copy(this.sCutsceneVars[7].point, this.gPlayerCameraState.pos)
        vec3f_copy(this.sCutsceneVars[7].angle, this.gPlayerCameraState.faceAngle)
        vec3f_set(this.sCutsceneVars[6].point, -42.0, 350.0, 727.0)
    }

    /**
     * Set the offset from Mario depending on the course Mario exited.
     * This overrides cutscene_non_painting_death_start()
     */
    cutscene_non_painting_death_override_offset(c) {
        switch (this.gPrevLevel) {
            case LEVEL_HMC:
            case LEVEL_COTMC:
                vec3f_set(this.sCutsceneVars[5].point, 187.0, 369.0, -197.0)
                break
            default:
                vec3f_set(this.sCutsceneVars[5].point, 107.0, 246.0, 1307.0)
        }
    }

    /**
     * Cutscene played when Mario dies in a non-painting course, like HMC or BBH.
     */
    cutscene_non_painting_death(c) {
        this.cutscene_non_painting_death = this.cutscene_non_painting_death.bind(this)
        this.cutscene_non_painting_death_override_offset = this.cutscene_non_painting_death_override_offset.bind(this)
        this.cutscene_non_painting_set_cam_pos = this.cutscene_non_painting_set_cam_pos.bind(this)
        this.cutscene_non_painting_set_cam_focus = this.cutscene_non_painting_set_cam_focus.bind(this)
        this.cutscene_event(this.cutscene_non_painting_death, c, 0, 0)
        this.cutscene_event(this.cutscene_non_painting_death_override_offset, c, 0, 0)
        this.cutscene_event(this.cutscene_non_painting_set_cam_pos, c, 0, -1)
        this.cutscene_event(this.cutscene_non_painting_set_cam_focus, c, 0, -1)
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE
    }

    /**
     * Set cvars:
     * cvar3 is an offset applied to the camera's rotation around Mario. It starts at 0x1200
     * cvar 1 is more complicated:
     *      First the yaw from Mario to the camera is calculated. cvar1 is the high byte of the difference
     *      between that yaw and Mario's faceAngle plus 0x1200. The reason for taking the high byte is
     *      because cvar1 rotates until is reaches 0, so it's important that it's a multiple of 0x100.
     */
    cutscene_cap_switch_press_start(c) {
        this.store_info_star(c)
        let yaw = this.calculate_yaw(this.gPlayerCameraState.pos, c.pos)
        this.sCutsceneVars[3].angle[1] = 0x1200
        // Basically the amount of rotation to get from behind Mario to in front of Mario
        this.sCutsceneVars[1].angle[1] = (yaw - (this.gPlayerCameraState.faceAngle[1] + this.sCutsceneVars[3].angle[1])) & 0xFF00
    }

    /**
     * Rotate around Mario. As each cvar stops updating, the rotation slows until the camera ends up in
     * front of Mario.
     */
    cutscene_cap_switch_press_rotate_around_mario(c) {
        const wrapper = {}
        vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper)

        // cvar3 wraps around until it reaches 0x1000
        if (this.sCutsceneVars[3].angle[1] != 0x1000) this.sCutsceneVars[3].angle[1] += 0x100

        // cvar1 wraps until 0
        if (this.sCutsceneVars[1].angle[1] != 0) this.sCutsceneVars[1].angle[1] += 0x100

        wrapper.yaw = this.gPlayerCameraState.faceAngle[1] + this.sCutsceneVars[3].angle[1] + this.sCutsceneVars[1].angle[1]
        vec3f_set_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper.dist, wrapper.pitch, wrapper.yaw)
    }

    /**
     * Move the camera slightly downwards.
     */
    cutscene_cap_switch_press_lower_cam(c) { this.rotate_and_move_vec3f(c.pos, this.gPlayerCameraState.pos, 0, -0x20, 0) }

    /**
     * Move the camera closer to Mario.
     */
    cutscene_cap_switch_press_approach_mario(c) {
        let w = {}
        vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, w)
        w.current = w.dist
        this.approach_f32_asymptotic_bool(w, 195.0, 0.2)
        w.dist = w.current; w.current = w.pitch
        this.approach_s16_asymptotic_bool(w, 0, 0x10)
        w.pitch = w.current
        vec3f_set_dist_and_angle(this.gPlayerCameraState.pos, c.pos, w.dist, w.pitch, w.yaw)

        w.current = c.focus[0]; this.approach_f32_asymptotic_bool(w, this.gPlayerCameraState.pos[0], 0.1)
        c.focus[0] = w.current; w.current = c.focus[1]; this.approach_f32_asymptotic_bool(w, this.gPlayerCameraState.pos[1] + 110.0, 0.1)
        c.focus[1] = w.current; w.current = c.focus[2]; this.approach_f32_asymptotic_bool(w, this.gPlayerCameraState.pos[2], 0.1)
        c.focus[2] = w.current
    }

    cutscene_cap_switch_press_pan_left(c) {
        vec3f_copy(c.focus, this.gPlayerCameraState.pos)
        c.focus[1] += 110.0
        const wrapper = {current: this.sCutsceneVars[9].angle[1]}
        this.camera_approach_s16_symmetric_bool(wrapper, 0x800, 0x20)
        this.pan_camera(c, this.sCutsceneVars[0].angle[0], this.sCutsceneVars[0].angle[1])
    }

    /**
     * Create a dialog box with the cap switch's text.
     */
    cutscene_cap_switch_press_create_dialog(c) {
        create_dialog_box_with_response(this.gCutsceneFocus.rawData[oBehParams2ndByte] + DIALOG_010)
    }

    /**
     * Cutscene that plays when Mario presses a cap switch.
     */
    cutscene_cap_switch_press(c) {
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE

        this.cutscene_cap_switch_press_start = this.cutscene_cap_switch_press_start.bind(this)
        this.cutscene_cap_switch_press_approach_mario = this.cutscene_cap_switch_press_approach_mario.bind(this)
        this.cutscene_cap_switch_press_pan_left = this.cutscene_cap_switch_press_pan_left.bind(this)
        this.cutscene_cap_switch_press_rotate_around_mario = this.cutscene_cap_switch_press_rotate_around_mario.bind(this)
        this.cutscene_cap_switch_press_lower_cam = this.cutscene_cap_switch_press_lower_cam.bind(this)
        this.cutscene_cap_switch_press_create_dialog = this.cutscene_cap_switch_press_create_dialog.bind(this)
        this.cutscene_event(this.cutscene_cap_switch_press_start, c, 0, 0);
        this.cutscene_event(this.cutscene_cap_switch_press_approach_mario, c, 0, 30);
        this.cutscene_event(this.cutscene_cap_switch_press_pan_left, c, 0, -1);
        this.cutscene_event(this.cutscene_cap_switch_press_rotate_around_mario, c, 30, -1);
        this.cutscene_event(this.cutscene_cap_switch_press_lower_cam, c, 10, 70);
        this.cutscene_event(this.cutscene_cap_switch_press_create_dialog, c, 10, 10);
        vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, {})

        if (IngameMenu.gDialogResponse != DIALOG_RESPONSE_NONE) this.sCutsceneVars[4].angle[0] = IngameMenu.gDialogResponse

        if (IngameMenu.get_dialog_id() == DIALOG_NONE && this.sCutsceneVars[4].angle[0] != 0) {
            this.sCutsceneDialogResponse = this.sCutsceneVars[4].angle[0]
            if (this.sCutsceneVars[4].angle[0] == 1) this.cap_switch_save(this.gCutsceneFocus.rawData[oBehParams2ndByte])
            this.stop_cutscene_and_retrieve_stored_info(c)
            this.transition_next_state(c, 30)
        }
    }

    /**
     * Sets cvars:
     * cvar0 is the camera's position
     * cvar1 is the camera's focus
     * cvar2 is the goal position
     * cvar3 is the goal focus
     */
    cutscene_unlock_key_door_start(c) {
        let posOff = [0, 0, 0]
        let focusOff = [0, 0, 0]

        this.vec3f_copy(this.sCutsceneVars[0].point, c.pos)
        this.vec3f_copy(this.sCutsceneVars[1].point, c.focus)
        MathUtil.vec3f_set(posOff, -206.0, 108.0, 234.0)
        MathUtil.vec3f_set(focusOff, 48.0, 104.0, -193.0)
        this.offset_rotated(this.sCutsceneVars[2].point, this.gPlayerCameraState.pos, posOff, this.gPlayerCameraState.faceAngle)
        this.offset_rotated(this.sCutsceneVars[3].point, this.gPlayerCameraState.pos, focusOff, this.gPlayerCameraState.faceAngle)
    }

    /**
     * Move the camera to the cvars position and focus, closer to Mario.
     * Gives a better view of the key.
     */
    cutscene_unlock_key_door_approach_mario(c) {
        this.approach_vec3f_asymptotic(c.pos, this.sCutsceneVars[2].point, 0.1, 0.1, 0.1)
        this.approach_vec3f_asymptotic(c.focus, this.sCutsceneVars[3].point, 0.1, 0.1, 0.1)
    }

    cutscene_unlock_key_door_focus_lock(c) {
        const wrapper = { current: this.sCutsceneVars[3].point[1] }
        this.approach_f32_asymptotic_bool(wrapper, this.gPlayerCameraState.pos[1] + 140.0, 0.07)
        this.sCutsceneVars[3].point[1] = wrapper.current
    }

    /**
     * Move back to the previous pos and focus, stored in cvar0 and cvar1.
     */
    cutscene_unlock_key_door_fly_back(c) {
        this.approach_vec3f_asymptotic(c.pos, this.sCutsceneVars[0].point, 0.1, 0.1, 0.1)
        this.approach_vec3f_asymptotic(c.focus, this.sCutsceneVars[1].point, 0.1, 0.1, 0.1)
    }

    /**
     * Shake the camera's fov when the key is put in the lock.
     */
    cutscene_unlock_key_door_fov_shake(c) {
        this.cutscene_set_fov_shake_preset(1)
    }

    /**
     * Cutscene that plays when Mario unlocks a key door.
     */
    cutscene_unlock_key_door(c) {
        this.cutscene_unlock_key_door_start = this.cutscene_unlock_key_door_start.bind(this)
        this.cutscene_unlock_key_door_approach_mario = this.cutscene_unlock_key_door_approach_mario.bind(this)
        this.cutscene_unlock_key_door_fly_back = this.cutscene_unlock_key_door_fly_back.bind(this)
        this.cutscene_unlock_key_door_fov_shake = this.cutscene_unlock_key_door_fov_shake.bind(this)
        this.cutscene_unlock_key_door_focus_lock = this.cutscene_unlock_key_door_focus_lock.bind(this)
        this.cutscene_event(this.cutscene_unlock_key_door_start, c, 0, 0);
        this.cutscene_event(this.cutscene_unlock_key_door_approach_mario, c, 0, 123);
        this.cutscene_event(this.cutscene_unlock_key_door_fly_back, c, 124, -1);
        this.cutscene_event(this.cutscene_unlock_key_door_fov_shake, c, 79, 79);
        this.cutscene_event(this.cutscene_unlock_key_door_focus_lock, c, 70, 110);
    }

    /**
     * Move the camera along `positionSpline` and point its focus at the corresponding point along
     * `focusSpline`. sCutsceneSplineSegmentProgress is updated after pos and focus are calculated.
     */
    intro_peach_move_camera_start_to_pipe(c, positionSpline, focusSpline) {

        /**
         * The position spline's speed parameters are all 0, so sCutsceneSplineSegmentProgress doesn't get
         * updated. Otherwise position would move two frames ahead, and c->focus would always be one frame
         * further along the spline than c->pos.
         */
        
        const wrapper = {splineSegment: this.sCutsceneSplineSegment, progress: this.sCutsceneSplineSegmentProgress}
        this.move_point_along_spline(c.pos, positionSpline, wrapper)
        let focusReturn = this.move_point_along_spline(c.focus, focusSpline, wrapper)
        this.sCutsceneSplineSegment = wrapper.splineSegment; this.sCutsceneSplineSegmentProgress = wrapper.progress;
        
        // The two splines used by this function are reflected in the horizontal plane for some reason,
        // so they are rotated every frame. Why do this, Nintendo?
        this.rotate_in_xz(c.focus, c.focus, DEGREES(-180));
        this.rotate_in_xz(c.pos, c.pos, DEGREES(-180));
        
        let offset = [-1328.0, 260.0, 4664.0];
        MathUtil.vec3f_add(c.focus, offset)
        MathUtil.vec3f_add(c.pos, offset)
        return focusReturn;
    }

    peach_letter_text(c) {
        IngameMenu.create_dialog_box(DIALOG_020);
    }

    play_sound_peach_reading_letter(c) {
        play_sound(SOUND_PEACH_DEAR_MARIO, gGlobalSoundSource);
    }

    cutscene_intro_peach_start_to_pipe_spline(c) {
        console.log(this.gLakituState.pos)
        if (this.intro_peach_move_camera_start_to_pipe(c, sIntroPipeToDialogPosition, sIntroPipeToDialogFocus) != 0) {
            this.gCameraMovementFlags &= ~CAM_MOVE_C_UP_MODE;
            this.gCutsceneTimer = CUTSCENE_LOOP;
        }
    }

    /**
     * Loop the cutscene until Mario exits the dialog.
     */ 
    cutscene_intro_peach_dialog(c) {
        if (IngameMenu.get_dialog_id() == DIALOG_NONE) {
            vec3f_copy(this.gLakituState.goalPos, c.pos)
            vec3f_copy(this.gLakituState.goalFocus, c.focus);
            this.sStatusFlags |= (CAM_FLAG_SMOOTH_MOVEMENT | CAM_FLAG_UNUSED_CUTSCENE_ACTIVE)
            this.gCutsceneTimer = CUTSCENE_STOP
            c.cutscene = 0;
        }
    }

    cutscene_intro_peach_follow_pipe_spline(c) {
        const wrapper = {splineSegment: this.sCutsceneSplineSegment, progress: this.sCutsceneSplineSegmentProgress}
        this.move_point_along_spline(c.pos, sIntroPipeToDialogPosition, wrapper)
        this.move_point_along_spline(c.focus, sIntroPipeToDialogFocus, wrapper)
        this.sCutsceneSplineSegment = wrapper.splineSegment; this.sCutsceneSplineSegmentProgress = wrapper.progress
    }
    
    cutscene_intro_peach_clear_cutscene_status(c) { this.gPlayerCameraState.cameraEvent = 0 }

    /**
     * Set fov to 8 degrees, then zoom out to 30.
     */
    cutscene_intro_peach_zoom_fov(c) {
        this.sFOVState.fovFunc = 8.0
        this.set_fov_function(CAM_FOV_ZOOM_30);
    }

    /**
     * Reset the spline progress, turn on handheld shake.
     */
    cutscene_intro_peach_reset_spline(c) {
        this.sCutsceneSplineSegment = 0;
        this.sCutsceneSplineSegmentProgress = 0.1;
        //! @bug since this event is only called for one frame, this handheld shake is turned off on the
        //! next frame.
        this.set_handheld_shake(HAND_CAM_SHAKE_HIGH);
    }

    /**
     * Turn off handheld shake. This was likely written before handheld shake was changed to turn off every
     * frame, as it's the only instance of HAND_CAM_SHAKE_OFF.
     */
    cutscene_intro_peach_handheld_shake_off(c) { this.set_handheld_shake(HAND_CAM_SHAKE_OFF); }

    intro_pipe_exit_text(c) { create_dialog_box(DIALOG_033); }

    play_sound_intro_turn_on_hud(c) { this.play_sound_rbutton_changed(); }

    /**
     * Fly to the pipe. Near the end, the camera jumps to Lakitu's position and the hud turns on.
     */
    cutscene_intro_peach_fly_to_pipe(c) {
        this.play_sound_intro_turn_on_hud = this.play_sound_intro_turn_on_hud.bind(this)
        this.cutscene_intro_peach_start_flying_music = this.cutscene_intro_peach_start_flying_music.bind(this)
        this.cutscene_intro_peach_start_to_pipe_spline = this.cutscene_intro_peach_start_to_pipe_spline.bind(this)
        this.cutscene_intro_peach_clear_cutscene_status = this.cutscene_intro_peach_clear_cutscene_status.bind(this)
        
        this.cutscene_event(this.play_sound_intro_turn_on_hud, c, 818, 818);
        this.cutscene_spawn_obj(6, 1)
        this.cutscene_event(this.cutscene_intro_peach_start_flying_music, c, 0, 0)
        this.cutscene_event(this.cutscene_intro_peach_start_to_pipe_spline, c, 0, -1)
        this.cutscene_event(this.cutscene_intro_peach_clear_cutscene_status, c, 717, 717)

        this.clamp_pitch(c.pos, c.focus, 0x3B00, -0x3B00)
        this.sCutsceneVars[1].point[1] = 400.0
    }

    /**
     * Lakitu flies around the warp pipe, then Mario jumps out.
     */
    cutscene_intro_peach_mario_appears(c) {
        this.gPlayerCameraState.cameraEvent = 0;

        this.cutscene_intro_peach_reset_spline = this.cutscene_intro_peach_reset_spline.bind(this)
        this.cutscene_intro_peach_follow_pipe_spline = this.cutscene_intro_peach_follow_pipe_spline.bind(this)
        this.cutscene_intro_peach_handheld_shake_off = this.cutscene_intro_peach_handheld_shake_off.bind(this)
        this.intro_pipe_exit_text = this.intro_pipe_exit_text.bind(this)
        this.cutscene_event(this.cutscene_intro_peach_reset_spline, c, 0, 0);
        this.cutscene_event(this.cutscene_intro_peach_follow_pipe_spline, c, 0, -1);
        this.cutscene_event(this.cutscene_intro_peach_handheld_shake_off, c, 70, 70);
        this.cutscene_event(this.intro_pipe_exit_text, c, 250, 250);

        const wrapper = {current: this.sCutsceneVars[1].point[1]}
        this.approach_f32_asymptotic_bool(wrapper, this.sMarioGeometry.currFloorHeight + 80.0 + (this.gPlayerCameraState.pos[1] - this.sMarioGeometry.currFloorHeight) * 1.1, 0.4)
        this.sCutsceneVars[1].point[1] = wrapper.current
        
        // Make the camera look up as Mario jumps out of the pipe
        if (c.focus[1] < this.sCutsceneVars[1].point[1]) c.focus[1] = this.sCutsceneVars[1].point[1]
        
        this.sStatusFlags |= CAM_FLAG_UNUSED_CUTSCENE_ACTIVE;
    }

    /**
     * Reset the fov. This gives the effect of peach zooming out as she fades.
     */
    cutscene_intro_peach_reset_fov(c) { this.set_fov_function(CAM_FOV_DEFAULT) }

    cutscene_intro_peach_letter(c) {
        this.cutscene_spawn_obj(5, 0);

        this.cutscene_intro_peach_zoom_fov = this.cutscene_intro_peach_zoom_fov.bind(this)
        this.cutscene_intro_peach_start_letter_music = this.cutscene_intro_peach_start_letter_music.bind(this)
        this.cutscene_intro_peach_start_to_pipe_spline = this.cutscene_intro_peach_start_to_pipe_spline.bind(this)
        this.peach_letter_text = this.peach_letter_text.bind(this)
        this.play_sound_peach_reading_letter = this.play_sound_peach_reading_letter.bind(this)
        
        this.cutscene_event(this.cutscene_intro_peach_zoom_fov, c, 0, 0)
        this.cutscene_event(this.cutscene_intro_peach_start_letter_music, c, 65, 65)
        this.cutscene_event(this.cutscene_intro_peach_start_to_pipe_spline, c, 0, 0)
        this.cutscene_event(this.peach_letter_text, c, 65, 65)
        this.cutscene_event(this.play_sound_peach_reading_letter, c, 83, 83)

        if (this.gCutsceneTimer > 120 /* && IngameMenu.get_dialog_id() == DIALOG_NONE */) this.gCutsceneTimer = CUTSCENE_LOOP

        this.clamp_pitch(c.pos, c.focus, 0x3B00, -0x3B00)
    }

    /**
     * Follow splines through the courses of the game.
     */
    cutscene_credits(c) {
        let focus = {}
        let pos = {}

        this.cutscene_reset_spline = this.cutscene_reset_spline.bind(this)
        this.cutscene_event(this.cutscene_reset_spline, c, 0, 0);

        switch (this.gCurrLevelArea) {
            case AREA_BOB:
                pos = this.sBobCreditsSplinePositions
                focus = this.sBobCreditsSplineFocus
                break;
            case AREA_WF:
                pos = this.sWfCreditsSplinePositions
                focus = this.sWfCreditsSplineFocus
                break;
            case AREA_JRB_MAIN:
                pos = this.sJrbCreditsSplinePositions
                focus = this.sJrbCreditsSplineFocus
                break;
            case AREA_CCM_SLIDE:
                pos = this.sCcmSlideCreditsSplinePositions
                focus = this.sCcmSlideCreditsSplineFocus
                break;
            case AREA_BBH:
                pos = this.sBbhCreditsSplinePositions
                focus = this.sBbhCreditsSplineFocus
                break;
            case AREA_HMC:
                pos = this.sHmcCreditsSplinePositions
                focus = this.sHmcCreditsSplineFocus
                break;
            case AREA_THI_WIGGLER:
                pos = this.sThiWigglerCreditsSplinePositions
                focus = this.sThiWigglerCreditsSplineFocus
                break;
            case AREA_LLL_VOLCANO:
                pos = this.sVolcanoCreditsSplinePositions
                focus = this.sVolcanoCreditsSplineFocus
                break;
            case AREA_SSL_OUTSIDE:
                pos = this.sSslCreditsSplinePositions
                focus = this.sSslCreditsSplineFocus
                break;
            case AREA_DDD_WHIRLPOOL:
                pos = this.sDddCreditsSplinePositions
                focus = this.sDddCreditsSplineFocus
                break;
            case AREA_SL_OUTSIDE:
                pos = this.sSlCreditsSplinePositions
                focus = this.sSlCreditsSplineFocus
                break;
            case AREA_WDW:
                pos = this.sWdwCreditsSplinePositions
                focus = this.sWdwCreditsSplineFocus
                break;
            case AREA_TTM_OUTSIDE:
                pos = this.sTtmCreditsSplinePositions
                focus = this.sTtmCreditsSplineFocus
                break;
            case AREA_THI_HUGE:
                pos = this.sThiHugeCreditsSplinePositions
                focus = this.sThiHugeCreditsSplineFocus
                break;
            case AREA_TTC:
                pos = this.sTtcCreditsSplinePositions
                focus = this.sTtcCreditsSplineFocus
                break;
            case AREA_RR:
                pos = this.sRrCreditsSplinePositions
                focus = this.sRrCreditsSplineFocus
                break;
            case AREA_SA:
                pos = this.sSaCreditsSplinePositions
                focus = this.sSaCreditsSplineFocus
                break;
            case AREA_COTMC:
                pos = this.sCotmcCreditsSplinePositions
                focus = this.sCotmcCreditsSplineFocus
                break;
            case AREA_DDD_SUB:
                pos = this.sDddSubCreditsSplinePositions
                focus = this.sDddSubCreditsSplineFocus
                break;
            case AREA_CCM_OUTSIDE:
                pos = this.sCcmOutsideCreditsSplinePositions
                focus = this.sCcmOutsideCreditsSplineFocus
                break;
            default:
                pos = sCcmOutsideCreditsSplinePositions;
                focus = sCcmOutsideCreditsSplineFocus;
        }
        this.copy_spline_segment(this.sCurCreditsSplinePos, pos)
        this.copy_spline_segment(this.sCurCreditsSplineFocus, focus)
        const wrapper = {splineSegment: this.sCutsceneSplineSegment, progress: this.sCutsceneSplineSegmentProgress}
        this.move_point_along_spline(c.pos, this.sCurCreditsSplinePos, wrapper)
        this.move_point_along_spline(c.focus, this.sCurCreditsSplineFocus, wrapper)
        this.sCutsceneSplineSegment = wrapper.splineSegment; this.sCutsceneSplineSegmentProgress = wrapper.progress
    }

    /**
     * Set the camera pos relative to Mario.
     */
    cutscene_sliding_doors_open_start(c) {
        const wrapper = { dist: 0, pitch: 0, yaw: 0 }

        MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper)

        // If the camera is too close, warp it backwards set it to a better angle.
        if (wrapper.dist < 500.0) {
            wrapper.dist = 500.0
            wrapper.yaw = this.gPlayerCameraState.faceAngle[1] + 0x8800
            wrapper.pitch = 0x800
        }

        MathUtil.vec3f_set_dist_and_angle(this.gPlayerCameraState.pos, c.pos, wrapper.dist, wrapper.pitch, wrapper.yaw)
    }

    /**
     * cvar1: Mario's position
     * cvar0.angle: Mario's angle
     * cvar0.point: offset from Mario
     */
    cutscene_sliding_doors_open_set_cvars(c) {
        this.vec3f_copy(this.sCutsceneVars[1].point, this.gPlayerCameraState.pos)
        this.vec3f_copy(this.sCutsceneVars[0].angle, this.gPlayerCameraState.faceAngle)
        MathUtil.vec3f_set(this.sCutsceneVars[0].point, 80.0, 325.0, 200.0)
    }

    /**
     * Decrease the cvar0 y offset to 75, which would simulate Lakitu flying under the doorway.
     * However, the initial y offset is too high for Lakitu to reach 75 in time.
     */
    cutscene_sliding_doors_go_under_doorway(c) {
        const wrapper = { current: this.sCutsceneVars[0].point[1] }
        this.camera_approach_f32_symmetric_bool(wrapper, 75.0, 10.0)
        this.sCutsceneVars[0].point[1] = wrapper.current
    }

    /**
     * Approach a y offset of 125 again.
     */
    cutscene_sliding_doors_fly_back_up(c) {
        const wrapper = { current: this.sCutsceneVars[0].point[1] }
        this.camera_approach_f32_symmetric_bool(wrapper, 125.0, 10.0)
        this.sCutsceneVars[0].point[1] = wrapper.current
    }

    /**
     * Follow Mario through the door, by approaching cvar1.point.
     */
    cutscene_sliding_doors_follow_mario(c) {
        let pos = {0: 0, 1: 0, 2: 0}
        
        this.vec3f_copy(pos, c.pos)
        // Update cvar1 with Mario's position (the y value doesn't change)
        this.sCutsceneVars[1].point[0] = this.gPlayerCameraState.pos[0]
        this.sCutsceneVars[1].point[2] = this.gPlayerCameraState.pos[2]

        // Decrease cvar0's offsets, moving the camera behind Mario at his eye height.
        const wrapper = { current: this.sCutsceneVars[0].point[0] }
        this.approach_f32_asymptotic_bool(wrapper, 0, 0.1)
        this.sCutsceneVars[0].point[0] = wrapper.current
        wrapper.current = this.sCutsceneVars[0].point[2]
        this.camera_approach_f32_symmetric_bool(wrapper, 125.0, 50.0)
        this.sCutsceneVars[0].point[2] = wrapper.current
        // Update cvar0's angle
        this.approach_vec3s_asymptotic(this.sCutsceneVars[0].angle, this.gPlayerCameraState.faceAngle, 16, 16, 16)

        // Apply the offset to the camera's position
        this.offset_rotated(pos, this.sCutsceneVars[1].point, this.sCutsceneVars[0].point, this.sCutsceneVars[0].angle)
        this.approach_vec3f_asymptotic(c.pos, pos, 0.15, 0.05, 0.15)

        // Focus on Mario's eye height
        this.set_focus_rel_mario(c, 0, 125.0, 0, 0)
    }

    /**
     * Plays when Mario opens the sliding doors.
     * Note: the star door unlocking event is not a cutscene, it's handled by Mario separately.
     */
    cutscene_sliding_doors_open(c) {
        this.reset_pan_distance(c)

        this.cutscene_sliding_doors_open_start = this.cutscene_sliding_doors_open_start.bind(this)
        this.cutscene_sliding_doors_open_set_cvars = this.cutscene_sliding_doors_open_set_cvars.bind(this)
        this.cutscene_sliding_doors_go_under_doorway = this.cutscene_sliding_doors_go_under_doorway.bind(this)
        this.cutscene_sliding_doors_fly_back_up = this.cutscene_sliding_doors_fly_back_up.bind(this)
        this.cutscene_sliding_doors_follow_mario = this.cutscene_sliding_doors_follow_mario.bind(this)
        
        this.cutscene_event(this.cutscene_sliding_doors_open_start, c, 0, 8);
        this.cutscene_event(this.cutscene_sliding_doors_open_set_cvars, c, 8, 8);
        this.cutscene_event(this.cutscene_sliding_doors_go_under_doorway, c, 8, 28);
        this.cutscene_event(this.cutscene_sliding_doors_fly_back_up, c, 29, -1);
        this.cutscene_event(this.cutscene_sliding_doors_follow_mario, c, 8, -1);
    }

    /**
     * Ends the double door cutscene.
     */
    cutscene_double_doors_end(c) {
        this.set_flag_post_door(c)
        c.cutscene = 0
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
    }

    /**
     * Plays when Mario enters a painting. The camera flies up to the painting's center, then it slowly
     * zooms in until the star select screen appears.
     */
    cutscene_enter_painting(c) {
        let paintingAngle = []
        this.set_fov_function(CAM_FOV_APP_20);
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT

        // if (gRipplingPainting != null) {
        // }
        c.mode = CAMERA_MODE_CLOSE
    }

    /**
     * Warp the camera to Mario, then use his faceAngle to calculate the right relative position.
     *
     * cvar0.point is Mario's position
     * cvar0.angle is Mario's faceAngle
     *
     * cvar1 is the camera's position relative to Mario
     * cvar2 is the camera's focus relative to Mario
     */
    cutscene_exit_painting_start(c) {
        let floor = JSON.parse(JSON.stringify(surfaceObj))
        let floorHeight = 0

        MathUtil.vec3f_set(this.sCutsceneVars[2].point, 258.0, -352.0, 1189.0)
        MathUtil.vec3f_set(this.sCutsceneVars[1].point, 65.0, -155.0, 444.0)

        if (this.gPrevLevel == LEVEL_TTM) {
            this.sCutsceneVars[1].point[1] = 0.0
            this.sCutsceneVars[1].point[2] = 0.0
        }
        this.vec3f_copy(this.sCutsceneVars[0].point, this.gPlayerCameraState.pos)
        this.sCutsceneVars[0].angle[0] = 0
        this.sCutsceneVars[0].angle[1] = this.gPlayerCameraState.faceAngle[1]
        this.sCutsceneVars[0].angle[2] = 0
        this.offset_rotated(c.focus, this.sCutsceneVars[0].point, this.sCutsceneVars[1].point, this.sCutsceneVars[0].angle)
        this.offset_rotated(c.pos, this.sCutsceneVars[0].point, this.sCutsceneVars[2].point, this.sCutsceneVars[0].angle)
        floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1] + 10.0, c.pos[2], floor)

        if (floorHeight != FLOOR_LOWER_LIMIT) {
            floorHeight += 60.0
            if (c.pos[1] < floorHeight) {
                c.pos[1] = floorHeight
            }
        }
    }

    /**
     * Decrease cvar2's x and z offset, moving closer to Mario.
     */
    cutscene_exit_painting_move_to_mario(c) {
        let pos = { 0: 0, 0: 1, 0: 2 }

        //! Tricky math: Since offset_rotated() flips Z offsets, you'd expect a positive Z offset to move
        //! the camera into the wall. However, Mario's faceAngle always points into the painting, so a
        //! positive Z offset moves the camera "behind" Mario, away from the painting.
        //!
        //! In the success cutscene, when Mario jumps out face-first, only his gfx angle is updated. His
        //! actual face angle isn't updated until after the cutscene.
        const wrapper = { current: this.sCutsceneVars[2].point[0] }
        this.approach_f32_asymptotic_bool(wrapper, 178.0, 0.05)
        this.sCutsceneVars[2].point[0] = wrapper.current
        wrapper.current = this.sCutsceneVars[2].point[2]
        this.approach_f32_asymptotic_bool(wrapper, 880.0, 0.05)
        this.sCutsceneVars[2].point[2] = wrapper.current

        this.offset_rotated(pos, this.sCutsceneVars[0].point, this.sCutsceneVars[2].point, this.sCutsceneVars[0].angle)
        c.pos[0] = pos[0]
        c.pos[2] = pos[2]
    }

    /**
     * Move the camera down to the floor Mario lands on.
     */
    cutscene_exit_painting_move_to_floor(c) {
        let floor = JSON.parse(JSON.stringify(surfaceObj))
        let floorHeight = [0, 0, 0]

        this.vec3f_copy(floorHeight, this.gPlayerCameraState.pos)
        floorHeight[1] = SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 10.0, this.gPlayerCameraState.pos[2], floor)

        if (floor != null) {
            floorHeight[1] += (this.gPlayerCameraState.pos[1] - floorHeight[1]) * 0.7 + 125.0
            this.approach_vec3f_asymptotic(c.focus, floorHeight, 0.2, 0.2, 0.2)

            if (floorHeight[1] < c.pos[1]) {
                const wrapper = { current: c.pos[1] } 
                this.approach_f32_asymptotic_bool(wrapper, floorHeight[1], 0.05)
            }
        }
    }
    
    /**
     * Cutscene played when Mario leaves a painting, either due to death or collecting a star.
     */
    cutscene_exit_painting(c) {
        this.cutscene_exit_painting_start = this.cutscene_exit_painting_start.bind(this)
        this.cutscene_exit_painting_move_to_mario = this.cutscene_exit_painting_move_to_mario.bind(this)
        this.cutscene_exit_painting_move_to_floor = this.cutscene_exit_painting_move_to_floor.bind(this)
        this.cutscene_event(this.cutscene_exit_painting_start, c, 0, 0);
        this.cutscene_event(this.cutscene_exit_painting_move_to_mario, c, 5, -1);
        this.cutscene_event(this.cutscene_exit_painting_move_to_floor, c, 5, -1);

        //! Hardcoded position. TTM's painting is close to an opposite wall, so just fix the pos.
        if (this.gPrevLevel == LEVEL_TTM) {
            MathUtil.vec3f_set(c.pos, -296.0, 1261.0, 3521.0)
        }

        this.update_camera_yaw(c)
    }

    /**
     * Give control back to the player.
     */
    cutscene_exit_painting_end(c) {
        c.mode = CAMERA_MODE_CLOSE
        c.cutscene = 0
        this.gCutsceneTimer = CUTSCENE_STOP
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.sStatusFlags &= ~CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
        this.update_camera_yaw(c)
    }

    /**
     * End the cutscene, starting cannon mode.
     */
    cutscene_enter_cannon_end(c) {
        this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        this.sStatusFlags |= CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
        c.mode = CAMERA_MODE_INSIDE_CANNON
        c.cutscene = 0
        this.sCannonYOffset = 800.0
    }

    /**
     * Rotate around the cannon as it rises out of the hole.
     */
    cutscene_enter_cannon_raise(c) {
        const o = this.gPlayerCameraState.usedObj
        let floorHeight;
        let cannonFocus = [0, 0, 0]
        let cannonAngle = [0, 0, 0]

        // Shake the camera when the cannon is fully raised
        this.cutscene_shake_explosion = this.cutscene_shake_explosion.bind(this)
        this.cutscene_event(this.cutscene_shake_explosion, c, 70, 70)
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        const wrapper = { current: this.sCutsceneVars[1].angle[0] }
        this.camera_approach_s16_symmetric_bool(wrapper, 0, 0x80)
        this.sCutsceneVars[1].angle[0] = wrapper.current
        wrapper.current = this.sCutsceneVars[2].angle[0]
        this.camera_approach_s16_symmetric_bool(wrapper, 0, 0x80)
        this.sCutsceneVars[2].angle[0] = wrapper.current
        // Move the camera around the cannon, gradually rotating and moving closer
        vec3f_set_dist_and_angle(this.sCutsceneVars[0].point, c.pos, this.sCutsceneVars[1].point[2], this.sCutsceneVars[1].angle[0], this.sCutsceneVars[1].angle[1]);
        this.sCutsceneVars[1].point[2] = approach_f32(this.sCutsceneVars[1].point[2], 400.0, 5.0, 5.0)
        this.sCutsceneVars[1].angle[1] += 0x40
        this.sCutsceneVars[3].point[1] += 2.0
        c.pos[1] += this.sCutsceneVars[3].point[1]

        if (o != null) {
            this.sCutsceneVars[0].point[1] = o.rawData[oPosY]
            cannonAngle[0] = o.rawData[oMoveAnglePitch]
            cannonAngle[1] = o.rawData[oMoveAngleYaw]
            cannonAngle[2] = o.rawData[oMoveAngleRoll]
            c.focus[0] = o.rawData[oPosX]
            c.focus[1] = o.rawData[oPosY]
            c.focus[2] = o.rawData[oPosZ]
            cannonFocus[0] = 0.0
            cannonFocus[1] = 100.0
            cannonFocus[2] = 0.0
            this.offset_rotated(c.focus, c.focus, cannonFocus, cannonAngle)
        }

        floorHeight = SurfaceCollision.find_floor(c.pos[0], c.pos[1] + 500.0, c.pos[2], {})

        if (c.pos[1] < floorHeight) c.pos[1] = floorHeight;
    }

    /**
     * Start the cannon entering cutscene
     */
    cutscene_enter_cannon_start(c) {
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.gPlayerCameraState.cameraEvent = 0;
        const o = this.gPlayerCameraState.usedObj
        // Store the cannon's position and angle in cvar0
        if (o != null) {
            this.sCutsceneVars[0].point[0] = o.rawData[oPosX]
            this.sCutsceneVars[0].point[1] = o.rawData[oPosY]
            this.sCutsceneVars[0].point[2] = o.rawData[oPosZ]
            this.sCutsceneVars[0].angle[0] = o.rawData[oMoveAnglePitch]
            this.sCutsceneVars[0].angle[1] = o.rawData[oMoveAngleYaw]
            this.sCutsceneVars[0].angle[2] = o.rawData[oMoveAngleRoll]
        }

        // Store the camera's polar offset from the cannon in cvar1
        const wrapper = {dist: this.sCutsceneVars[1].point[2], pitch: this.sCutsceneVars[1].angle[0], yaw: this.sCutsceneVars[1].angle[1]}
        vec3f_get_dist_and_angle(this.sCutsceneVars[0].point, c.pos, wrapper)
        this.sCutsceneVars[1].point[2] = wrapper.dist; this.sCutsceneVars[1].angle[0] = wrapper.pitch; this.sCutsceneVars[1].angle[1] = wrapper.yaw;
        this.sCutsceneVars[3].point[1] = 0.0
        //! cvar4 is unused in this cutscene
        this.sCutsceneVars[4].point[1] = 0.0
    }

    /**
     * Store the camera's pos and focus for the door cutscene
     */
    cutscene_door_start(c) {
        this.vec3f_copy(this.sCutsceneVars[0].point, c.pos)
        this.vec3f_copy(this.sCutsceneVars[1].point, c.focus)
    }

    /**
     * Fix the camera in place while the door opens.
     */
    cutscene_door_fix_cam(c) {
        this.vec3f_copy(c.pos, this.sCutsceneVars[0].point)
        this.vec3f_copy(c.focus, this.sCutsceneVars[1].point)
    }

    /**
     * Loop until Mario is no longer using the door.
     */
    cutscene_door_loop(c) {
        //! bitwise AND instead of boolean
        if ((this.gPlayerCameraState.action != Mario.ACT_PULLING_DOOR) & (this.gPlayerCameraState.action != Mario.ACT_PUSHING_DOOR)) {
            this.gCutsceneTimer = CUTSCENE_STOP
            c.cutscene = 0
        }
    }

    /**
     * Warp the camera behind Mario.
     */
    cutscene_door_move_behind_mario(c) {
        let camOffset = [0, 0, 0]
        let doorRotation = 0

        this.reset_pan_distance(c)
        const wrapper = { current: doorRotation }
        this.determine_pushing_or_pulling_door(wrapper)
        doorRotation = wrapper.current
        this.set_focus_rel_mario(c, 0.0, 125.0, 0.0, 0)
        MathUtil.vec3s_set(this.sCutsceneVars[0].angle, 0, this.gPlayerCameraState.faceAngle[1] + doorRotation, 0)
        MathUtil.vec3f_set(camOffset, 0.0, 125.0, 250.0)

        camOffset[0] = 0.0

        this.offset_rotated(c.pos, this.gPlayerCameraState.pos, camOffset, this.sCutsceneVars[0].angle)
    }

    /**
     * Follow Mario through the door.
     */
    cutscene_door_follow_mario(c) {
        this.set_focus_rel_mario(c, 0.0, 125.0, 0.0, 0)
        const wrapper = { pitch: 0, yaw: 0, dist: 0 }
        MathUtil.vec3f_get_dist_and_angle(c.focus, c.pos, wrapper)
        wrapper.current = wrapper.dist
        this.camera_approach_f32_symmetric_bool(wrapper, 150.0, 7.0)
        MathUtil.vec3f_set_dist_and_angle(c.focus, c.pos, wrapper.current, wrapper.pitch, wrapper.yaw)
        this.update_camera_yaw(c)
    }

    /**
     * Ends the door cutscene. Sets the camera mode to close mode unless the default is free roam.
     */
    cutscene_door_end(c) {
        if (c.defMode == CAMERA_MODE_FREE_ROAM) {
            c.mode = CAMERA_MODE_FREE_ROAM
        } else {
            c.mode = CAMERA_MODE_CLOSE
        }

        c.cutscene = 0
        this.gCutsceneTimer = CUTSCENE_STOP
        this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
        this.sStatusFlags &= ~CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
        this.set_flag_post_door(c)
        this.update_camera_yaw(c)
    }

    /**
     * Used for entering a room that uses a specific camera mode, like the castle lobby or BBH
     */
    cutscene_door_mode(c) {
        this.reset_pan_distance(c)
        this.camera_course_processing(c)

        if (c.mode == CAMERA_MODE_FIXED) {
            c.nextYaw = this.update_fixed_camera(c, c.focus, c.pos)
        } else if (c.mode == CAMERA_MODE_PARALLEL_TRACKING) {
            c.nextYaw = this.update_parallel_tracking_camera(c, c.focus, c.pos)
        }

        c.yaw = c.nextYaw

        // Loop until Mario is no longer using the door
        if (this.gPlayerCameraState.action != Mario.ACT_ENTERING_STAR_DOOR
            && this.gPlayerCameraState.action != Mario.ACT_PULLING_DOOR
            && this.gPlayerCameraState.action != Mario.ACT_PUSHING_DOOR) {
            
            this.gCutsceneTimer = CUTSCENE_STOP
            c.cutscene = 0
        }
    }

    /**
     * Play the current cutscene until either gCutsceneTimer reaches the max time, or c->cutscene is set to 0
     *
     * Note that CAM_FLAG_SMOOTH_MOVEMENT is cleared while a cutscene is playing, so cutscenes set it for
     * the duration they want the flag to be active.
     */
    play_cutscene(c) {
        let oldCutscene = c.cutscene
        let cutsceneDuration
        this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE

        let cutsceneNum

        for (let i = 0; i < this.cutsceneShots.length; i++) {
            if (c.cutscene == this.cutsceneShots[i][0]) {
                cutsceneNum = i
            }
        }

        if (c.cutscene != 0 && cutsceneNum != undefined) {
            cutsceneDuration = this.cutsceneShots[cutsceneNum][1][this.sCutsceneShot].duration
            this.cutsceneShots[cutsceneNum][1][this.sCutsceneShot].shot(c)
            if ((cutsceneDuration != 0) && !(this.gCutsceneTimer & CUTSCENE_STOP)) {
                //! @bug This should check for 0x7FFF (CUTSCENE_LOOP)
                //! instead, cutscenes that last longer than 0x3FFF frames will never end on their own
                if (this.gCutsceneTimer < 0x3FFF) {
                    this.gCutsceneTimer++
                }
                //! Because gCutsceneTimer is often set to 0x7FFF (CUTSCENE_LOOP), this conditional can only
                //! check for == due to overflow
                if (this.gCutsceneTimer == cutsceneDuration) {
                    this.sCutsceneShot++
                    this.gCutsceneTimer = 0
                }
            } else {
                this.gPlayerCameraState.cameraEvent = 0
                this.sCutsceneShot = 0
                this.gCutsceneTimer = 0
            }
    
            this.sAreaYawChange = 0
    
            // The cutscene just ended
            if ((c.cutscene == 0) && (oldCutscene != 0)) {
                this.gRecentCutscene = oldCutscene;
            }
        } else {
            this.gCutsceneTimer = CUTSCENE_STOP
            c.cutscene = 0
            this.gCutsceneTimer = CUTSCENE_STOP
            this.sStatusFlags |= CAM_FLAG_SMOOTH_MOVEMENT
            this.sStatusFlags &= ~CAM_FLAG_BLOCK_SMOOTH_MOVEMENT
            this.update_camera_yaw(c)
        }

    }

    /**
     * Call the event while `start` <= gCutsceneTimer <= `end`
     * If `end` is -1, call for the rest of the shot.
     */
    cutscene_event(event, c, start, end) {
        if (start <= this.gCutsceneTimer) {
            if (end == -1 || end >= this.gCutsceneTimer) {
                event(c)
            }
        }

        return false
    }

    /**
     * Set gCutsceneObjSpawn when gCutsceneTimer == `frame`.
     *
     * @see intro_scene.inc.c for details on which objects are spawned.
     */
    cutscene_spawn_obj(obj, frame) {
        if (frame == this.gCutsceneTimer) {
            this.gCutsceneObjSpawn = obj;
        }
        return 0;
    }

    /**
     * Start shaking the camera's field of view.
     *
     * @param shakeSpeed How fast the shake should progress through its period. The shake offset is
     *                   calculated from coss(), so this parameter can be thought of as an angular velocity.
     */
    set_fov_shake(amplitude, decay, shakeSpeed) {
        if (amplitude > this.sFOVState.shakeAmplitude) {
            this.sFOVState.shakeAmplitude = amplitude
            this.sFOVState.decay = decay
            this.sFOVState.shakeSpeed = shakeSpeed
        }
    }

    /**
     * Start shaking the camera's field of view, but reduce `amplitude` by distance from camera
     */
    set_fov_shake_from_point(amplitude, decay, shakeSpeed, maxDist, posX, posY, posZ) {
        amplitude = this.reduce_by_dist_from_camera(amplitude, maxDist, posX, posY, posZ)

        if (amplitude != 0) {
            this.set_fov_shake(amplitude, decay, shakeSpeed)
        }
    }

    /**
     * Add a cyclic offset to the camera's field of view based on a cosine wave
     */
    shake_camera_fov(perspective) {
        if (this.sFOVState.shakeAmplitude != 0.0) {
            this.sFOVState.fovOffset = coss(this.sFOVState.shakePhase) * this.sFOVState.shakeAmplitude / 0x100
            this.sFOVState.shakePhase += this.sFOVState.shakeSpeed
            const wrapper = { current: this.sFOVState.shakeAmplitude }
            this.camera_approach_f32_symmetric_bool(wrapper, 0.0, this.sFOVState.decay)
            perspective.fov += this.sFOVState.fovOffset ? this.sFOVState.fovOffset : 0
        } else {
            this.sFOVState.shakePhase = 0
        }
    }

    set_fov_30() {
        this.sFOVState.fov = 30.0
    }

    approach_fov_20(m) {
        const wrapper = { current: this.sFOVState.fov }
        this.camera_approach_f32_symmetric_bool(wrapper, 20.0, 0.3)
        this.sFOVState.fov = wrapper.current
    }

    set_fov_45(m) {
        this.sFOVState.fov = 45.0
    }

    set_fov_29(m) {
        this.sFOVState.fov = 29.0;
    }

    zoom_fov_30() {
        // Pretty sure approach_f32_asymptotic_bool would do a much nicer job here, but you do you,
        // Nintendo.
        const wrapper = { current: this.sFOVState.fov }
        this.camera_approach_f32_symmetric_bool(wrapper, 30.0, (30.0 - this.sFOVState.fov) / 60.0)
        this.sFOVState.fov = wrapper.current
    }

    /**
     * This is the default fov function. It makes fov approach 45 degrees, and it handles zooming in when
     * Mario falls a sleep.
     */
    fov_default(m) {
        this.sStatusFlags &= ~CAM_FLAG_SLEEPING

        const wrapper = { current: this.sFOVState.fov }
        if ((m.action == Mario.ACT_SLEEPING) || (m.action == Mario.ACT_START_SLEEPING)) {
            this.camera_approach_f32_symmetric_bool(wrapper, 30.0, (30.0 - this.sFOVState.fov) / 30.0)
            this.sFOVState.fov = wrapper.current
            this.sStatusFlags |= CAM_FLAG_SLEEPING
        } else {
            this.camera_approach_f32_symmetric_bool(wrapper, 45.0, (45.0 - this.sFOVState.fov) / 30.0)
            this.sFOVState.fov = wrapper.current
        }
    }

    approach_fov_30(m) {
        const wrapper = {current: this.sFOVState.fov}
        camera_approach_f32_symmetric_bool(wrapper, 30.0, 1.0);
        this.sFOVState.fov = wrapper.current
    }

    approach_fov_60(m) {
        const wrapper = {current: this.sFOVState.fov}
        camera_approach_f32_symmetric_bool(wrapper, 60.0, 1.0);
        this.sFOVState.fov = wrapper.current
    }

    approach_fov_45(m) {
        this.sFOVState.fov = approach_f32(this.sFOVState.fov, 45.0, 2.0, 2.0);
    }

    approach_fov_80(m) {
        const wrapper = {current: this.sFOVState.fov}
        camera_approach_f32_symmetric_bool(wrapper, 80.0, 3.5);
        this.sFOVState.fov = wrapper.current
    }

    set_fov_bbh(m) {
        let targetFoV = this.sFOVState.fov;

        if (m.area.camera.mode == CAMERA_MODE_FIXED && m.area.camera.cutscene == 0) {
            targetFoV = 60.0
        } else {
            targetFoV = 45.0
        }

        this.sFOVState.fov = approach_f32(this.sFOVState.fov, targetFoV, 2.0, 2.0)
    }

    /**
     * Sets the field of view for the GraphNodeCamera
     */
    geo_camera_fov(callContext, graphNode) {

        const marioState = gLinker.LevelUpdate.gMarioState
        const fovFunc = this.sFOVState.fovFunc

        if (callContext == GEO_CONTEXT_RENDER) {
            switch (fovFunc) {
                case CAM_FOV_SET_45:
                    this.set_fov_45(marioState)
                    break
                case CAM_FOV_SET_29:
                    this.set_fov_29(marioState)
                    break
                case CAM_FOV_ZOOM_30:
                    this.zoom_fov_30(marioState)
                    break
                case CAM_FOV_DEFAULT:
                    this.fov_default(marioState)
                    break
                case CAM_FOV_BBH:
                    this.set_fov_bbh(marioState)
                    break
                case CAM_FOV_APP_45:
                    this.approach_fov_45(marioState)
                    break
                case CAM_FOV_SET_30:
                    this.set_fov_30(marioState)
                    break
                case CAM_FOV_APP_20:
                    this.approach_fov_20(marioState)
                    break
                case CAM_FOV_APP_80:
                    this.approach_fov_80(marioState)
                    break
                case CAM_FOV_APP_30:
                    this.approach_fov_30(marioState)
                    break
                case CAM_FOV_APP_60:
                    this.approach_fov_60(marioState)
                    break
                default: throw "default switch case - geo camera fov - " + fovFunc
            }
        }

        graphNode.fov = this.sFOVState.fov

        this.shake_camera_fov(graphNode)
    }

    /**
     * Change the camera's FOV mode.
     *
     * @see geo_camera_fov
     */
    set_fov_function(func) {
        this.sFOVState.fovFunc = func
    }


    /**
     * Start a preset fov shake. Used in cutscenes
     */
    cutscene_set_fov_shake_preset(preset) {
        switch (preset) {
            case 1:
                this.set_fov_shake(0x100, 0x30, 0x8000)
                break
            case 2:
                this.set_fov_shake(0x400, 0x20, 0x4000)
                break
        }
    }
    
    /**
     * Start a preset fov shake that is reduced by the point's distance from the camera.
     * Used in set_camera_shake_from_point
     *
     * @see set_camera_shake_from_point
     */
    set_fov_shake_from_point_preset(preset, posX, posY, posZ) {
        switch (preset) {
            case SHAKE_FOV_SMALL:
                this.set_fov_shake_from_point(0x100, 0x30, 0x8000, 3000.0, posX, posY, posZ)
                break
            case SHAKE_FOV_MEDIUM:
                this.set_fov_shake_from_point(0x200, 0x30, 0x8000, 4000.0, posX, posY, posZ)
                break
            case SHAKE_FOV_LARGE:
                this.set_fov_shake_from_point(0x300, 0x30, 0x8000, 6000.0, posX, posY, posZ)
                break
            case SHAKE_FOV_UNUSED:
                this.set_fov_shake_from_point(0x800, 0x20, 0x4000, 3000.0, posX, posY, posZ)
                break
        }
    }

    /**
     * Rotate the object towards the point `point`.
     */
    obj_rotate_towards_point(o, point, pitchOff, yawOff, pitchDiv, yawDiv) {
        let oPos = [0, 0, 0];
        let wrapper = {};
        this.object_pos_to_vec3f(oPos, o);
        vec3f_get_dist_and_angle(oPos, point, wrapper);
        o.rawData[oMoveAnglePitch] = this.approach_s16_asymptotic(o.rawData[oMoveAnglePitch], pitchOff - pitch, pitchDiv);
        o.rawData[oMoveAngleYaw] = this.approach_s16_asymptotic(o.rawData[oMoveAngleYaw], yaw + yawOff, yawDiv);
    }
}

export const CameraInstance = new Camera()
gLinker.Camera = CameraInstance

export const geo_camera_main = CameraInstance.geo_camera_main
export const geo_camera_fov = CameraInstance.geo_camera_fov
