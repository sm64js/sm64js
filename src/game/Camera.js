import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE } from "../engine/graph_node"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { AreaInstance as Area } from "./Area"
import {
    LEVEL_NONE, LEVEL_UNKNOWN_1, LEVEL_UNKNOWN_2, LEVEL_UNKNOWN_3, LEVEL_BBH, LEVEL_CCM, LEVEL_CASTLE, LEVEL_HMC,
    LEVEL_SSL, LEVEL_BOB, LEVEL_SL, LEVEL_WDW, LEVEL_JRB, LEVEL_THI, LEVEL_TTC, LEVEL_RR, LEVEL_CASTLE_GROUNDS,
    LEVEL_BITDW, LEVEL_VCUTM, LEVEL_BITFS, LEVEL_SA, LEVEL_BITS, LEVEL_LLL, LEVEL_DDD, LEVEL_WF, LEVEL_ENDING,
    LEVEL_CASTLE_COURTYARD, LEVEL_PSS, LEVEL_COTMC, LEVEL_TOTWC, LEVEL_BOWSER_1, LEVEL_WMOTR, LEVEL_UNKNOWN_32,
    LEVEL_BOWSER_2, LEVEL_BOWSER_3, LEVEL_UNKNOWN_35, LEVEL_TTM, LEVEL_UNKNOWN_37, LEVEL_UNKNOWN_38
} from "../levels/level_defines_constants"

import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { atan2s } from "../engine/math_util"
import * as MathUtil from "../engine/math_util"
import * as Mario from "./Mario"
import { oHeldState, oPosX, oPosY, oPosZ } from "../include/object_constants"
import { CELL_HEIGHT_LIMIT, FLOOR_LOWER_LIMIT, SURFACE_DEATH_PLANE, SURFACE_IS_PAINTING_WARP } from "../include/surface_terrains"
import { sins, s16, int16 } from "../utils"
import { HudInstance as Hud } from "./Hud"
import { DIALOG_RESPONSE_NONE } from "./IngameMenu"
import { DIALOG_001, DIALOG_NONE } from "../text/us/dialogs"
import { gLastCompletedStarNum } from "./SaveFile"
import { COURSE_MAX, COURSE_NONE } from "../levels/course_defines"

export const DEGREES = (d) => {return s16(d * 0x10000 / 360)}

const LEVEL_AREA_INDEX = (levelNum, areaNum) => {return (levelNum << 4) + areaNum}

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

const CAM_SELECTION_MARIO = 1
const CAM_SELECTION_FIXED = 2

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
const CAM_MOVE_PAUSE_SCREEN           = 0x8000

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

const CAM_STATUS_NONE   = 0
const CAM_STATUS_MARIO  = 1 << 0
const CAM_STATUS_LAKITU = 1 << 1
const CAM_STATUS_FIXED  = 1 << 2
const CAM_STATUS_C_DOWN = 1 << 3
const CAM_STATUS_C_UP   = 1 << 4

const CAM_STATUS_MODE_GROUP   = (CAM_STATUS_MARIO | CAM_STATUS_LAKITU | CAM_STATUS_FIXED)
const CAM_STATUS_C_MODE_GROUP = (CAM_STATUS_C_DOWN | CAM_STATUS_C_UP)

const L_CBUTTONS =	0x0002
const R_CBUTTONS =	0x0001
const D_CBUTTONS =	0x0004
const U_CBUTTONS =	0x0008


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
            currFloorHeight: 0
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

        this.sCameraStoreCutscene = {
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

        this.sCutsceneStarSpawn = [
            { shot: this.cutscene_star_spawn.bind(this), duration: CUTSCENE_LOOP },
            { shot: this.cutscene_star_spawn_back.bind(this), duration: 15 },
            { shot: this.cutscene_star_spawn_end.bind(this), duration: 0 },
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
            // [ CUTSCENE_RED_COIN_STAR_SPAWN, sCutsceneRedCoinStarSpawn ],
            // [ CUTSCENE_ENDING, sCutsceneEnding ],
            // [ CUTSCENE_GRAND_STAR, sCutsceneGrandStar ],
            // [ CUTSCENE_DOOR_WARP, sCutsceneDoorWarp ],
            // [ CUTSCENE_DOOR_PULL, sCutsceneDoorPull ],
            // [ CUTSCENE_DOOR_PUSH, sCutsceneDoorPush ],
            // [ CUTSCENE_DOOR_PULL_MODE, sCutsceneDoorPullMode ],
            // [ CUTSCENE_DOOR_PUSH_MODE, sCutsceneDoorPushMode ],
            // [ CUTSCENE_ENTER_CANNON, sCutsceneEnterCannon ],
            // [ CUTSCENE_ENTER_PAINTING, sCutsceneEnterPainting ],
            // [ CUTSCENE_DEATH_EXIT, sCutsceneDeathExit ],
            // [ CUTSCENE_EXIT_PAINTING_SUCC, sCutsceneExitPaintingSuccess ],
            // [ CUTSCENE_UNUSED_EXIT, sCutsceneUnusedExit ],
            // [ CUTSCENE_INTRO_PEACH, sCutsceneIntroPeach ],
            // [ CUTSCENE_ENTER_BOWSER_ARENA, sCutsceneEnterBowserArena ],
            // [ CUTSCENE_DANCE_ROTATE, sCutsceneDanceDefaultRotate ],
            // [ CUTSCENE_DANCE_DEFAULT, sCutsceneDanceDefaultRotate ],
            // [ CUTSCENE_DANCE_FLY_AWAY, sCutsceneDanceFlyAway ],
            // [ CUTSCENE_DANCE_CLOSEUP, sCutsceneDanceCloseup ],
            // [ CUTSCENE_KEY_DANCE, sCutsceneKeyDance ],
            // [ CUTSCENE_0F_UNUSED, sCutsceneUnused ],
            // [ CUTSCENE_END_WAVING, sCutsceneEndWaving ],
            // [ CUTSCENE_CREDITS, sCutsceneCredits ],
            // [ CUTSCENE_CAP_SWITCH_PRESS, sCutsceneCapSwitchPress ],
            // [ CUTSCENE_SLIDING_DOORS_OPEN, sCutsceneSlidingDoorsOpen ],
            // [ CUTSCENE_PREPARE_CANNON, sCutscenePrepareCannon ],
            // [ CUTSCENE_UNLOCK_KEY_DOOR, sCutsceneUnlockKeyDoor ],
            // [ CUTSCENE_STANDING_DEATH, sCutsceneStandingDeath ],
            // [ CUTSCENE_ENTER_POOL, sCutsceneEnterPool ],
            // [ CUTSCENE_DEATH_ON_STOMACH, sCutsceneDeathStomach ],
            // [ CUTSCENE_DEATH_ON_BACK, sCutsceneDeathOnBack ],
            // [ CUTSCENE_QUICKSAND_DEATH, sCutsceneQuicksandDeath ],
            // [ CUTSCENE_SUFFOCATION_DEATH, sCutsceneSuffocation ],
            // [ CUTSCENE_EXIT_BOWSER_SUCC, sCutsceneExitBowserSuccess ],
            // [ CUTSCENE_EXIT_BOWSER_DEATH, sCutsceneExitBowserDeath ],
            // [ CUTSCENE_EXIT_SPECIAL_SUCC, sCutsceneExitSpecialSuccess ],
            // [ CUTSCENE_EXIT_WATERFALL, sCutsceneExitWaterfall ],
            // [ CUTSCENE_EXIT_FALL_WMOTR, sCutsceneFallToCastleGrounds ],
            // [ CUTSCENE_NONPAINTING_DEATH, sCutsceneNonPaintingDeath ],
            // [ CUTSCENE_DIALOG, sCutsceneDialog ],
            // [ CUTSCENE_READ_MESSAGE, sCutsceneReadMessage ],
            // [ CUTSCENE_RACE_DIALOG, sCutsceneDialog ],
            // [ CUTSCENE_ENTER_PYRAMID_TOP, sCutsceneEnterPyramidTop ],
            // [ CUTSCENE_SSL_PYRAMID_EXPLODE, sCutscenePyramidTopExplode ],
        ]

        this.sOldPosition = [0, 0, 0]
        this.sOldFocus = [0, 0, 0]
        this.sObjectCutscene = 0
        this.gRecentCutscene = 0
        this.sCutsceneDialogResponse = DIALOG_RESPONSE_NONE
        this.sDanceCutsceneIndexTable = [ 0x44, 0x44, 0x44, 0x04 ]
        this.sDanceCutsceneTable = [CUTSCENE_DANCE_FLY_AWAY, CUTSCENE_DANCE_ROTATE, CUTSCENE_DANCE_CLOSEUP, CUTSCENE_KEY_DANCE, CUTSCENE_DANCE_DEFAULT,
                                    false,                   false,                 false,                  false,              true,]
    }

    select_mario_cam_mode() {
        this.sSelectionFlags = CAM_MODE_MARIO_SELECTED
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

    calc_abs_dist(a, b) {
        const distX = b[0] - a[0]
        const distY = b[1] - a[1]
        const distZ = b[2] - a[2]
        return Math.sqrt(distX * distX + distY * distY + distZ * distZ)
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

    is_within_100_units_of_mario(posX, posY, posZ) {
        const pos = [posX, posY, posZ]
        return this.calc_abs_dist(this.gPlayerCameraState.pos, pos) < 100
    }

    calculate_yaw(from, to) {
        const dx = to[0] - from[0]
        const dz = to[2] - from[2]
        return atan2s(dz, dx)
    }

    rotate_in_xz(dst, src, yaw) {
        const tempVec = [...src]

        dst[0] = tempVec[2] * Math.sin(yaw / 0x8000 * Math.PI) + tempVec[0] * Math.cos(yaw / 0x8000 * Math.PI)
        dst[1] = tempVec[1]
        dst[2] = tempVec[2] * Math.cos(yaw / 0x8000 * Math.PI) - tempVec[0] * Math.sin(yaw / 0x8000 * Math.PI)
    }

    offset_rotated(dst, from, to, rotation) {
        const pitchRotated = [0, 0, 0]

        pitchRotated[2] = -(to[2] * Math.cos(rotation[0] / 0x8000 * Math.PI) - to[1] * Math.sin(rotation[0] / 0x8000 * Math.PI))
        pitchRotated[1] = to[2] * Math.sin(rotation[0] / 0x8000 * Math.PI) + to[1] * Math.cos(rotation[0] / 0x8000 * Math.PI)
        pitchRotated[0] = to[0]

        dst[0] = from[0] + pitchRotated[2] * Math.sin(rotation[1] / 0x8000 * Math.PI) + pitchRotated[0] * Math.cos(rotation[1] / 0x8000 * Math.PI)
        dst[1] = from[1] + pitchRotated[1]
        dst[2] = from[2] + pitchRotated[2] * Math.cos(rotation[1] / 0x8000 * Math.PI) - pitchRotated[0] * Math.sin(rotation[1] / 0x8000 * Math.PI)
    }

    find_mario_floor_and_ceil(pg) {
        const surf = {}
        const tempCheckingSurfaceCollisionsForCamera = ObjectListProc.gCheckingSurfaceCollisionsForCamera
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = true

        if (SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 10.0, this.gPlayerCameraState.pos[2], surf) != -11000) {
            pg.currFloorType = surf.floor.type
            if (isNaN(surf.floor.type)) throw "error in find_mario_floor_and_ceil: " + surf.floor.type
        } else {
            pg.currFloorType = 0
        }

        pg.currCeilType = 0

        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false

        const floorWrapper = {}
        pg.currFloorHeight = SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 10.0, this.gPlayerCameraState.pos[2], floorWrapper)
        pg.currFloor = floorWrapper.floor
        pg.currCeilHeight = 20000
        pg.waterHeight = -999999
        ObjectListProc.gCheckingSurfaceCollisionsForCamera = tempCheckingSurfaceCollisionsForCamera
    }

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

    approach_vec3f_asymptotic(current, target, xMul, yMul, zMul) {
        let wrapper = { current: current[0] }
        this.approach_f32_asymptotic_bool(wrapper, target[0], xMul)
        current[0] = wrapper.current
        wrapper.current = current[1]
        this.approach_f32_asymptotic_bool(wrapper, target[1], yMul)
        current[1] = wrapper.current
        wrapper.current = current[2]
        this.approach_f32_asymptotic_bool(wrapper, target[2], zMul)
        current[2] = wrapper.current
    }

    set_or_approach_vec3f_asymptotic(dst, goal, xMul, yMul, zMul) {
        let wrapper = { current: dst[0] }
        this.set_or_approach_f32_asymptotic(wrapper, goal[0], xMul)
        dst[0] = wrapper.current
        wrapper.current = dst[1]
        this.set_or_approach_f32_asymptotic(wrapper, goal[1], yMul)
        dst[1] = wrapper.current
        wrapper.current = dst[2]
        this.set_or_approach_f32_asymptotic(wrapper, goal[2], zMul)
        dst[2] = wrapper.current
    }

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

    scale_along_line(dst, from, to, scale) {
        const tempVec =  new Array(3)

        tempVec[0] = (to[0] - from[0]) * scale + from[0]
        tempVec[1] = (to[1] - from[1]) * scale + from[1]
        tempVec[2] = (to[2] - from[2]) * scale + from[2]

        dst[0] = tempVec[0]
        dst[1] = tempVec[1]
        dst[2] = tempVec[2]
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
        this.sModeTransition.marioPos = [...this.gPlayerCameraState.pos]
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

        this.sBehindMarioSoundTimer = 0
        this.sCSideButtonYaw = 0
        this.s8DirModeBaseYaw = 0
        this.s8DirModeYawOffset = 0
        c.doorStatus = DOOR_DEFAULT

        this.gPlayerCameraState.headRotation[0] = 0
        this.gPlayerCameraState.headRotation[1] = 0

        this.gPlayerCameraState.cameraEvent = 0
        this.gPlayerCameraState.usedObj = null

        this.gLakituState.lastFrameAction = 0
        this.sFOVState.fovFunc = CAM_FOV_DEFAULT
        this.sFOVState.fov = 45
        this.sFOVState.fovOffset = 0
    }

    create_camera(graphNode) {
        const mode = graphNode.config.mode

        graphNode.config.camera = {
            mode,
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

/*        Object.assign(graphNode, {
            pos: [-1328.0, 1200.0, 6064.0],
            focus: [-1328.0, 260, 4664.0],
            myDemoAngle: 0,
            myDemoRadius: 1500
        })*/
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
        this.gLakituState.focHSpeed = 0.3 // @bug set focHSpeed back-to-back
        this.gLakituState.roll = 0
        this.gLakituState.keyDanceRoll = 0

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
            case LEVEL_CASTLE_GROUNDS:
                // if (this.is_within_100_units_of_mario(-1328, 260, 4646) != 1) {
                //     marioOffset[0] = -400
                //     marioOffset[2] = -800
                // }
                this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
                break
            case LEVEL_BOB:  /// TODO
                this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
                break
            case LEVEL_CCM:  /// TODO
                this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
                break
            case LEVEL_PSS:  /// TODO
                this.gLakituState.mode = CAMERA_MODE_FREE_ROAM
            default: this.gLakituState.mode = CAMERA_MODE_FREE_ROAM // throw err 'camera not implemented'
        }

        if (c.mode == CAMERA_MODE_8_DIRECTIONS) {
            this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT
        }

        this.offset_rotated(c.pos, this.gPlayerCameraState.pos, marioOffset, this.gPlayerCameraState.faceAngle)
        if (c.mode != CAMERA_MODE_BEHIND_MARIO) {
            c.pos[1] = SurfaceCollision.find_floor(this.gPlayerCameraState.pos[0], this.gPlayerCameraState.pos[1] + 100, this.gPlayerCameraState.pos[2], this) + 125
        }
        c.focus = [...this.gPlayerCameraState.pos]
        this.gLakituState.curPos = [...c.pos]
        this.gLakituState.curFocus = [...c.focus]
        this.gLakituState.goalPos = [...c.pos]
        this.gLakituState.goalFocus = [...c.focus]
        this.gLakituState.pos = [...c.pos]
        this.gLakituState.focus = [...c.focus]

        if (c.mode == CAMERA_MODE_FIXED) {
            throw "fixed camera case not implemented"
        }

        this.gLakituState.yaw = this.calculate_yaw(c.focus, c.pos)
        this.gLakituState.nextYaw = this.gLakituState.yaw
        c.yaw = this.gLakituState.yaw
        c.nextYaw = this.gLakituState.yaw
    }

    find_c_buttons_pressed(currentState) {
        // buttonsPressed &= CBUTTON_MASK;
        // buttonsDown &= CBUTTON_MASK;
    
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

    transition_next_state(c, frames) {
        if (!(this.sStatusFlags & CAM_FLAG_FRAME_AFTER_CAM_INIT)) {
            this.sStatusFlags |= (CAM_FLAG_START_TRANSITION | CAM_FLAG_TRANSITION_OUT_OF_C_UP)
            this.sModeTransition.framesLeft = frames
        }
    }


    set_camera_mode(c, mode, frames) {
        const start = this.sModeInfo.transitionStart
        const end = this.sModeInfo.transitionEnd

        if (false) {  // mode == CAMERA_MODE_WATER_SURFACE && gCurrLevelArea == AREA_TTM_OUTSIDE) {
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
            switch (this.sModeInfo.newMode) {
                case CAMERA_MODE_BEHIND_MARIO:
                    this.sAreaYaw = this.update_behind_mario_camera(c, end.focus, end.pos)
                    break

                case CAMERA_MODE_WATER_SURFACE:
                    // nop_update_water_camera
                    break

                case CAMERA_MODE_CLOSE:
                case CAMERA_MODE_FREE_ROAM:
                    this.sAreaYaw = this.update_mario_camera(c, end.focus, end.pos)
                    break

                default: throw "unknown camera case"
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


    update_mario_camera(c, focus, pos) {
        let yaw = this.gPlayerCameraState.faceAngle[1] + this.sModeOffsetYaw + DEGREES(180)
        this.focus_on_mario(focus, pos, 125, 125, this.gCameraZoomDist, 0x05B0, yaw)

        return this.gPlayerCameraState.faceAngle[1]
    }

    mode_mario_camera(c) {
        this.gCameraZoomDist = 350
        this.mode_default_camera(c)
    }

    vec3f_copy(dest, src) {
        dest[0] = src[0]
        dest[1] = src[1]
        dest[2] = src[2]
    }

    vec3f_sub(dst, src) {
        dst[0] -= src[0]
        dst[1] -= src[1]
        dst[2] -= src[2]
    }

    update_camera(c) {
        this.gCamera = c
        this.update_camera_hud_status(c)
        if (c.cutscene == 0) {
            // Only process R_TRIG if 'fixed' is not selected in the menu
            if (this.cam_select_alt_mode(0) == CAM_SELECTION_MARIO) {
                if (/*window.playerInput.buttonPressedRt*/ false) {
                    if (this.set_cam_angle(0) == CAM_ANGLE_LAKITU) {
                        this.set_cam_angle(CAM_ANGLE_MARIO)
                    } else {
                        this.set_cam_angle(CAM_ANGLE_LAKITU)
                    }
                }
            }
            // this.play_sound_if_cam_switched_to_lakitu_or_mario()
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
        c.pos = [...this.gLakituState.goalPos]
        c.focus = [...this.gLakituState.goalFocus]

        c.yaw = this.gLakituState.yaw
        c.nextYaw = this.gLakituState.nextYaw
        c.mode = this.gLakituState.mode
        c.defMode = this.gLakituState.defMode

        c.sCButtonsPressed = this.find_c_buttons_pressed(c.sCButtonsPressed);

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

                    // case CAMERA_MODE_C_UP:
                    //     this.mode_c_up_camera(c)
                    //     break

                    case CAMERA_MODE_WATER_SURFACE:
                        this.mode_water_surface_camera(c)
                        break

                    // case CAMERA_MODE_INSIDE_CANNON:
                    //     this.mode_cannon_camera(c)
                    //     break

                    default:
                        this.mode_mario_camera(c)
                }
            } else {
                switch (c.mode) {
                    case CAMERA_MODE_BEHIND_MARIO:
                        this.mode_behind_mario_camera(c)
                        break

                    // case CAMERA_MODE_C_UP:
                    //     mode_c_up_camera(c);
                    //     break;

                    case CAMERA_MODE_WATER_SURFACE:
                        this.mode_water_surface_camera(c)
                        break

                    // case CAMERA_MODE_INSIDE_CANNON:
                    //     mode_cannon_camera(c);
                    //     break;

                    // case CAMERA_MODE_8_DIRECTIONS:
                    //     mode_8_directions_camera(c);
                    //     break;

                    // case CAMERA_MODE_RADIAL:
                    //     mode_radial_camera(c);
                    //     break;

                    // case CAMERA_MODE_OUTWARD_RADIAL:
                    //     mode_outward_radial_camera(c);
                    //     break;

                    case CAMERA_MODE_CLOSE:
                        this.mode_lakitu_camera(c)
                        break

                case CAMERA_MODE_FREE_ROAM:
                    this.mode_lakitu_camera(c)
                    break

                    // case CAMERA_MODE_BOSS_FIGHT:
                    //     mode_boss_fight_camera(c);
                    //     break;

                    // case CAMERA_MODE_PARALLEL_TRACKING:
                    //     mode_parallel_tracking_camera(c);
                    //     break;

                    // case CAMERA_MODE_SLIDE_HOOT:
                    //     mode_slide_camera(c);
                    //     break;

                    // case CAMERA_MODE_FIXED:
                    //     mode_fixed_camera(c);
                    //     break;

                    // case CAMERA_MODE_SPIRAL_STAIRS:
                    //     mode_spiral_stairs_camera(c);
                    //     break;

                    default: throw "unknown camera case"
                }
            }
        }

        this.start_cutscene(c, this.get_cutscene_from_mario_status(c))

        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false

        this.update_lakitu(c) 

        this.gLakituState.lastFrameAction = this.gPlayerCameraState.action

    }

    update_camera_hud_status(c) {
        status = CAM_STATUS_NONE
    
        var isFixedCam = false
        // var isFixedCam = c.cutscene != 0 || ((this.gPlayer1Controller.buttonDown & R_TRIG) && cam_select_alt_mode(0) == CAM_SELECTION_FIXED)

        if (isFixedCam) {
            status |= CAM_STATUS_FIXED
        // } else if (set_cam_angle(0) == CAM_ANGLE_MARIO) {
            // status |= CAM_STATUS_MARIO
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
        let floor = {
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
        pos[1] = find_floor(c.areaCenX, CELL_HEIGHT_LIMIT, c.areaCenZ, floor)
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

    calc_hor_dist(a, b) {
        const distX = b[0] - a[0]
        const distZ = b[2] - a[2]
        return Math.sqrt(distX * distX + distZ * distZ)
    }

    calc_y_to_curr_floor(posOffWrapper, posMul, posBound, focOffWrapper, focMul, focBound) {
        const floorHeight = this.sMarioGeometry.currFloorHeight
        const waterHeight = -99999

        if (!(this.gPlayerCameraState.action & Mario.ACT_FLAG_METAL_WATER)) {
            if (floorHeight < (waterHeight)) {
                floorHeight = waterHeight
            }
        }

        const marioObj = LevelUpdate.gMarioState

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE) {
            const pole = marioObj.usedObj
            const poleHitboxHeight = pole.hitboxHeight

            if (this.gPlayerCameraState.currFloorHeight >= pole.rawData[oPosY] && this.gPlayerCameraState.pos[1] < 0.7 * poleHitboxHeight + pole.rawData[oPosY]) {
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

        focOffWrapper.focOff = (floorHeight - this.gPlayerCameraState.pos[1]) * posMul

        if (focOffWrapper.focOff > focBound) {
            focOffWrapper.focOff = focBound
        }

        if (focOffWrapper.focOff < -focBound) {
            focOffWrapper.focOff = -focBound
        }
    }

    pan_ahead_of_player(c) {
        const pan = [0,0,0]

        // Get distance and angle from camera to mario.
        const output = {}
        MathUtil.vec3f_get_dist_and_angle(c.pos, this.gPlayerCameraState.pos, output)
        const dist = output.dist
        let yaw = output.yaw

        // The camera will pan ahead up to about 30% of the camera's distance to mario.
        pan[2] = Math.sin(0xC00 / 0x8000 * Math.PI) * dist

        this.rotate_in_xz(pan, pan, this.gPlayerCameraState.faceAngle[1])
        // rotate in the opposite direction
        yaw = -yaw
        this.rotate_in_xz(pan, pan, yaw)
        // Only pan left or right
        pan[2] = 0

        // If mario is long jumping, or on a flag pole (but not at the top), then pan in the opposite direction
        if (this.gPlayerCameraState.action == Mario.ACT_LONG_JUMP ||
            (this.gPlayerCameraState.action != Mario.ACT_TOP_OF_POLE && (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE))) {
            pan[0] = -pan[0]
        }

        // Slowly make the actual pan, sPanDistance, approach the calculated pan
        // If mario is sleeping, then don't pan
        const wrapper = { current: this.sPanDistance }
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

    lakitu_zoom(rangeDist, rangePitch) {
        if (this.sLakituDist < 0) {
            if (this.sLakituDist + 30 > 0) {
                this.sLakituDist = 0
            }
        } else if (rangeDist < this.sLakituDist) {
            if (this.sLakituDist - 30 < rangeDist) {
                this.sLakituDist = rangeDist
            }
        } else if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            if (this.sLakituDist + 30 > rangeDist) {
                this.sLakituDist = rangeDist
            }
        } else {
            if (this.sLakituDist - 30 < 0) {
                this.sLakituDist = 0
            }
        }

        if (this.gCurrLevelArea == AREA_SSL_PYRAMID && this.gCamera.mode == CAMERA_MODE_OUTWARD_RADIAL) {
            rangePitch /= 2
        }

        if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            if (this.sLakituPitch + rangePitch / 13 > rangePitch) {
                this.sLakituPitch = rangePitch
            }
        } else {
            if (this.sLakituPitch - rangePitch / 13 < 0) {
                this.sLakituPitch = 0
            }
        }
    }

    trigger_cutscene_dialog(trigger) {
        let result = 0

        if (trigger == 1) {
            this.start_object_cutscene_without_focus(CUTSCENE_READ_MESSAGE)
        }
        return result
    }

    start_object_cutscene(cutscene, o) {
        this.sObjectCutscene = cutscene
        this.gRecentCutscene = 0
        this.gCutsceneFocus = o
        this.gObjCutsceneDone = false
    }

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

    handle_c_button_movement(c) {
        let cSideYaw
    
        // Zoom in
        if (window.playerInput.buttonPressedCu) {
            if (c.mode != CAMERA_MODE_FIXED && (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT)) {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT
                // play_sound_cbutton_up()
            } else {
                // set_mode_c_up(c)
                // if (sZeroZoomDist > gCameraZoomDist) {
                //     sZoomAmount = -gCameraZoomDist
                // } else {
                //     sZoomAmount = gCameraZoomDist
                // }
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
                    // play_sound_cbutton_down()
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

    clear_cutscene_vars(c) {
        for (let i = 0; i < 10; i++) {
            MathUtil.vec3f_set(this.sCutsceneVars[i].point, 0.0, 0.0, 0.0)
            MathUtil.vec3f_set(this.sCutsceneVars[i].unusedPoint, 0.0, 0.0, 0.0)
            MathUtil.vec3f_set(this.sCutsceneVars[i].angle, 0, 0, 0)
        }
    }

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
        let distPitchYaw = {}

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
        MathUtil.vec3f_get_dist_and_angle(focus, pos, distPitchYaw);
        ({dist, pitch, yaw} = distPitchYaw)
        if (dist > maxDist) {
            dist = maxDist
        }
        if ((absPitch = pitch) < 0) {
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
                // play_sound_cbutton_up();
            }
        }
        if (this.sCSideButtonYaw == 28) {
            if (this.sBehindMarioSoundTimer < 5 || this.sBehindMarioSoundTimer > 28) {
                // play_sound_cbutton_up();
            }
        }

        // C-Button input. Note: Camera rotates in the opposite direction of the button (airplane controls)
        //! @bug C-Right and C-Up take precedence due to the way input is handled here

        // Rotate right
        if (this.sCButtonsPressed & L_CBUTTONS) {
            if (window.playerInput.buttonPressedCl) {
                // play_sound_cbutton_side();
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
                // play_sound_cbutton_side();
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
                // play_sound_cbutton_side();
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
                // play_sound_cbutton_side();
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
        // if (this.gCurrLevelArea == AREA_WDW_MAIN) {
        //     yaw = this.clamp_positions_and_find_yaw(pos, focus, 4508, -3739, 4508, -3739)
        // }
        // if (this.gCurrLevelArea == AREA_THI_HUGE) {
        //     yaw = this.clamp_positions_and_find_yaw(pos, focus, 8192, -8192, 8192, -8192)
        // }
        // if (this.gCurrLevelArea == AREA_THI_TINY) {
        //     yaw = this.clamp_positions_and_find_yaw(pos, focus, 2458, -2458, 2458, -2458)
        // }

        return yaw
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


    mode_behind_mario(c) {
        const marioState = LevelUpdate.gMarioState
        let newPos = [], oldPos = []
        let waterHeight, floorHeight
        const distPitchYaw = {}
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


    resolve_geometry_collisions(pos, lastGood) {
        // TODO
        }

    mode_behind_mario_camera(c) {
        c.nextYaw = this.mode_behind_mario(c)
    }

    /**
     * Exactly the same as BEHIND_MARIO
     */
    mode_water_surface_camera(c) {
        c.nextYaw = this.mode_behind_mario(c)
    }


    update_default_camera(c) {
        let nextYawVel
        let yawVel = 0
        let yawGoal = s16(this.gPlayerCameraState.faceAngle[1] + DEGREES(180))
        let closeToMario = 0
        let ceilHeight = 20000
        let dist, pitch, yaw
        let distPitchYaw = {}

        MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, distPitchYaw);
        ({dist, pitch, yaw} = distPitchYaw)

        let zoomDist = this.gCameraZoomDist

        this.handle_c_button_movement(c);

        // If C-Down is active, determine what distance the camera should be from mario
        if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
            //! In Mario mode, the camera is zoomed out further than in lakitu mode (1400 vs 1200)
            // if (set_cam_angle(0) == CAM_ANGLE_MARIO) {
            //     zoomDist = gCameraZoomDist + 1050;
            // } else {
                zoomDist = this.gCameraZoomDist + 400;
            // }
        } else {
            zoomDist = this.gCameraZoomDist;
        }
        
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
                if ((dist -= 30) < zoomDist) {
                    dist = zoomDist
                }
            }
            if (dist < zoomDist) {
                if ((dist += 30) > zoomDist) {
                    dist = zoomDist
                }
            }
        }

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
                yaw = s16(yaw + 0x200)
            }
            if (this.sCSideButtonYaw > 0) {
                yaw = s16(yaw - 0x200)
            }
            const wrapper = { current: this.sCSideButtonYaw }
            this.camera_approach_s16_symmetric_bool(wrapper, 0, 0x100)
            this.sCSideButtonYaw = wrapper.current
            nextYawVel = 0
        }

        this.sYawSpeed = 0x400
        const xzDist = this.calc_hor_dist(this.gPlayerCameraState.pos, c.pos)

        if (this.sStatusFlags & CAM_FLAG_BEHIND_MARIO_POST_DOOR) {
            throw "behind post door"
        } else if (xzDist < 250) {
            // Turn rapidly if very close to mario
            c.pos[0] += (250 - xzDist) * Math.sin(yaw / 0x8000 * Math.PI)
            c.pos[2] += (250 - xzDist) * Math.cos(yaw / 0x8000 * Math.PI)
            if (this.sCSideButtonYaw == 0) {
                nextYawVel = 0x1000
                this.sYawSpeed = 0
                MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, distPitchYaw);
                ({dist, pitch, yaw} = distPitchYaw)
            }
            closeToMario |= 1
        }

        if (-16 < window.playerInput.stickY) {
            c.yaw = yaw
        }

        const posHeightWrapper = {}, focHeightWrapper = {}
        this.calc_y_to_curr_floor(posHeightWrapper, 1, 200, focHeightWrapper, 0.9, 200)
        let posHeight = posHeightWrapper.posOff
        const focHeight = focHeightWrapper.focOff
        const cPos = [...c.pos]
        let avoidStatus = 0 //rotate_camera_around_walls(c, cPos, &avoidYaw, 0x600) TODO


        if (avoidStatus == 3) { //TODO
            throw "implement this"
        } else {
            if (LevelUpdate.gMarioState.forwardVel == 0) {
                yawVel = nextYawVel
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
            if (yawVel != 0) {
                const yawWrapper = { current: yaw }
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
        cPos[1] += posHeight + 125

        if (false) { //collided with walls TODO
            this.sStatusFlags |= CAM_FLAG_COLLIDED_WITH_WALL
        }

        c.focus = [
            this.gPlayerCameraState.pos[0],
            this.gPlayerCameraState.pos[1] + 125 + focHeight,
            this.gPlayerCameraState.pos[2]
        ]

        let marioFloorHeight = 125 + this.sMarioGeometry.currFloorHeight
        let marioFloor = this.sMarioGeometry.currFloor

        let camFloorHeight = SurfaceCollision.find_floor(cPos[0], cPos[1] + 50, cPos[2], {}) + 125

        let tempPos = [0,0,0]

        for (let scale = 0.1; scale < 1.0; scale += 0.2) {
            this.scale_along_line(tempPos, cPos, this.gPlayerCameraState.pos, scale)
            const tempFloor = {}
            const tempFloorHeight = SurfaceCollision.find_floor(tempPos[0], tempPos[1], tempPos[2], tempFloor) + 125
            if (tempFloor.floor && tempFloorHeight > marioFloorHeight) {
                marioFloorHeight = tempFloorHeight
                marioFloor = tempFloor.floor
            }
        }

        // Lower the camera in mario mode
        if (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE) {
            marioFloorHeight -= 35
            camFloorHeight -= 35
            c.focus[1] -= 25
        }

        // If there's water below the camera, decide whether to keep the camera above the water surface
        const waterHeight = -11000
        if (waterHeight != -11000) {
            throw "If there's water below the camera, decide whether to keep the camera above the water surface"
        } else {
            this.gCameraMovementFlags &= ~CAM_MOVE_METAL_BELOW_WATER
        }

        cPos[1] = camFloorHeight
        tempPos = [...cPos]
        tempPos[1] -= 125
        if (marioFloor && camFloorHeight <= marioFloorHeight) {
            avoidStatus = 0 ////is range behing surface() TODO FIX
            if (avoidStatus != 1 && ceilHeight > marioFloorHeight) {
                camFloorHeight = marioFloorHeight
            } else {
                throw "range behind surface"
            }
        }

        posHeight = 0
        if (c.mode == CAMERA_MODE_FREE_ROAM) {
            if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                posHeight = 375
                /// if pyramin level
            } else {
                posHeight = 100
            }
        }
        if ((this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) && (this.sSelectionFlags & CAM_MODE_MARIO_ACTIVE)) {
            posHeight = 610
            /// if pyramid level or LEVEL_CASTLE (indoor?)
        }

        ///Poison Gas


        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_HANGING || this.gPlayerCameraState.action == Mario.ACT_RIDING_HOOT) {
            /// TODO hanging or riding
        }

        if (this.gPlayerCameraState.action & Mario.ACT_FLAG_ON_POLE) {
            camFloorHeight = LevelUpdate.gMarioState.usedObj.rawData[oPosY] + 125
            if (this.gPlayerCameraState.pos[1] - 100 > camFloorHeight) {
                camFloorHeight = this.gPlayerCameraState.pos[1] - 100
            }
            ceilHeight = 20000
            c.focus = [...this.gPlayerCameraState.pos]
        }
        if (camFloorHeight != -11000) {
            camFloorHeight += posHeight
            this.approach_camera_height(c, camFloorHeight, 20)
        }
        c.pos[0] = cPos[0]
        c.pos[2] = cPos[2]
        cPos[0] = this.gLakituState.goalPos[0]
        cPos[1] = c.pos[1]
        cPos[2] = this.gLakituState.goalPos[2]
        const output = {}
        MathUtil.vec3f_get_dist_and_angle(cPos, c.pos, output)
        dist = output.dist
        // Prevent the camera from lagging behind too much
        if (dist > 50) {
            dist = 50
            MathUtil.vec3f_set_dist_and_angle(cPos, c.pos, dist, output.pitch, output.yaw)
        }
        if (this.sMarioGeometry.currFloorType != SURFACE_DEATH_PLANE) {
            MathUtil.vec3f_get_dist_and_angle(c.focus, c.pos, output)
            dist = output.dist
            if (dist > zoomDist) {
                dist = zoomDist
                MathUtil.vec3f_set_dist_and_angle(c.focus, c.pos, dist, output.pitch, output.yaw)
            }
        }


        if (ceilHeight != 20000) {
            throw "there is a ceiling in update camera"
        }

        /// if Level area == AREA_WDW_TOWN
        return yaw

    }

    mode_default_camera(c) {
        this.sFOVState.fovFunc = CAM_FOV_DEFAULT
        c.nextYaw = this.update_default_camera(c)
        this.pan_ahead_of_player(c)
    }

    mode_lakitu_camera(c) {
        this.gCameraZoomDist = 800
        this.mode_default_camera(c)
    }

    next_lakitu_state(newPos, newFoc, curPos, curFoc, oldPos, oldFoc, yaw) {
        let startPos = [0, 0, 0]
        let startFoc = [0, 0, 0]
        let goalDist = 0
        let goalPitch = 0
        let goalYaw = 0
        let yawVelocity
        let pitchVelocity
        let distVelocity
        let wrapper
        let nextPos = [0, 0, 0]
        let nextFoc = [0, 0, 0]
        let floorHeight
        let floor = {
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
        let distTimer = this.sModeTransition.framesLeft
        let angleTimer = this.sModeTransition.framesLeft
        
        // If not transitioning, just use gCamera's current pos and foc
        this.vec3f_copy(newPos, curPos)
        this.vec3f_copy(newFoc, curFoc)

        if (this.sStatusFlags & CAM_FLAG_START_TRANSITION) {
            for (let i = 0; i < 3; i++) {
                // Add Mario's displacement from this frame to the last frame's pos and focus
                // Makes the transition start from where the camera would have moved
                startPos[i] = oldPos[i] + this.gPlayerCameraState.pos[i] - this.sModeTransition.marioPos[i]
                startFoc[i] = oldFoc[i] + this.gPlayerCameraState.pos[i] - this.sModeTransition.marioPos[i]
            }

            this.sModeTransition.focDist = MathUtil.sqrtf((startFoc[0] - curFoc[0]) ** 2 + (startFoc[1] - curFoc[1]) ** 2 + (startFoc[2] - curFoc[2]) ** 2)
            this.sModeTransition.focPitch = MathUtil.atan2s(MathUtil.sqrtf((startFoc[0] - curFoc[0]) ** 2 + (startFoc[1] - curFoc[1]) ** 2 + (startFoc[2] - curFoc[2]) ** 2))
            this.sModeTransition.focYaw = MathUtil.atan2s((startFoc[0] - curFoc[0]) ** 2 + (startFoc[1] - curFoc[1]) ** 2 + (startFoc[2] - curFoc[2]) ** 2)

            this.sModeTransition.posDist = MathUtil.sqrtf((startPos[0] - curFoc[0]) ** 2 + (startPos[1] - curFoc[1]) ** 2 + (startPos[2] - curFoc[2]) ** 2)
            this.sModeTransition.posPitch = MathUtil.atan2s(MathUtil.sqrtf((startPos[0] - curFoc[0]) ** 2 + (startPos[1] - curFoc[1]) ** 2 + (startPos[2] - curFoc[2]) ** 2))
            this.sModeTransition.posYaw = MathUtil.atan2s((startPos[0] - curFoc[0]) ** 2 + (startPos[1] - curFoc[1]) ** 2 + (startPos[2] - curFoc[2]) ** 2)
            
            this.sStatusFlags &= ~CAM_FLAG_START_TRANSITION
        }

        // Transition from the last mode to the current one
        if (this.sModeTransition.framesLeft > 0) {
            goalDist = MathUtil.sqrtf((curPos[0] - curFoc[0]) ** 2 + (curPos[1] - curFoc[1]) ** 2 + (curPos[2] - curFoc[2]) ** 2)
            goalPitch = MathUtil.atan2s(MathUtil.sqrtf((curPos[0] - curFoc[0]) ** 2 + (curPos[1] - curFoc[1]) ** 2 + (curPos[2] - curFoc[2]) ** 2))
            goalYaw = MathUtil.atan2s((curPos[0] - curFoc[0]) ** 2 + (curPos[1] - curFoc[1]) ** 2 + (curPos[2] - curFoc[2]) ** 2)
            
            distVelocity = Math.abs(goalDist - this.sModeTransition.posDist) / distTimer;
            pitchVelocity = Math.abs(goalPitch - this.sModeTransition.posPitch) / angleTimer;
            yawVelocity = Math.abs(goalYaw - this.sModeTransition.posYaw) / angleTimer;

            wrapper = { current: this.sModeTransition.posDist }
            this.camera_approach_f32_symmetric_bool(wrapper, goalDist, distVelocity)
            this.sModeTransition.posDist = wrapper.current
            wrapper.current = this.sModeTransition.posYaw
            this.camera_approach_f32_symmetric_bool(wrapper, goalYaw, yawVelocity)
            this.sModeTransition.posYaw = wrapper.current
            wrapper.current = this.sModeTransition.posPitch
            this.camera_approach_f32_symmetric_bool(wrapper, goalPitch, pitchVelocity)
            this.sModeTransition.posPitch = wrapper.current

            this.sModeTransition.posDist = MathUtil.sqrtf((nextPos[0] - curFoc[0]) ** 2 + (nextPos[1] - curFoc[1]) ** 2 + (nextPos[2] - curFoc[2]) ** 2)
            this.sModeTransition.posPitch = MathUtil.atan2s(MathUtil.sqrtf((nextPos[0] - curFoc[0]) ** 2 + (nextPos[1] - curFoc[1]) ** 2 + (nextPos[2] - curFoc[2]) ** 2))
            this.sModeTransition.posYaw = MathUtil.atan2s((nextPos[0] - curFoc[0]) ** 2 + (nextPos[1] - curFoc[1]) ** 2 + (nextPos[2] - curFoc[2]) ** 2)

            goalDist = MathUtil.sqrtf((curFoc[0] - curPos[0]) ** 2 + (curFoc[1] - curPos[1]) ** 2 + (curFoc[2] - curPos[2]) ** 2)
            goalPitch = MathUtil.atan2s(MathUtil.sqrtf((curFoc[0] - curPos[0]) ** 2 + (curFoc[1] - curPos[1]) ** 2 + (curFoc[2] - curPos[2]) ** 2))
            goalYaw = MathUtil.atan2s((curPos[0] - curPos[0]) ** 2 + (curFoc[1] - curPos[1]) ** 2 + (curFoc[2] - curPos[2]) ** 2)
        
            pitchVelocity = this.sModeTransition.focPitch / this.sModeTransition.framesLeft
            yawVelocity = this.sModeTransition.focYaw / this.sModeTransition.framesLeft
            distVelocity = this.sModeTransition.focDist / this.sModeTransition.framesLeft

            wrapper = { current: this.sModeTransition.focDist }
            this.camera_approach_f32_symmetric_bool(wrapper, goalDist, distVelocity)
            this.sModeTransition.focDist = wrapper.current
            wrapper.current = this.sModeTransition.focYaw
            this.camera_approach_f32_symmetric_bool(wrapper, goalYaw, yawVelocity)
            this.sModeTransition.focYaw = wrapper.current
            wrapper.current = this.sModeTransition.focPitch
            this.camera_approach_f32_symmetric_bool(wrapper, goalPitch, pitchVelocity)
            this.sModeTransition.focPitch = wrapper.current

            goalDist = MathUtil.sqrtf((curFoc[0] - nextFoc[0]) ** 2 + (curFoc[1] - nextFoc[1]) ** 2 + (curFoc[2] - nextFoc[2]) ** 2)
            goalPitch = MathUtil.atan2s(MathUtil.sqrtf((curFoc[0] - nextFoc[0]) ** 2 + (curFoc[1] - nextFoc[1]) ** 2 + (curFoc[2] - nextFoc[2]) ** 2))
            goalYaw = MathUtil.atan2s((curFoc[0] - nextFoc[0]) ** 2 + (curFoc[1] - nextFoc[1]) ** 2 + (curFoc[2] - nextFoc[2]) ** 2)
        
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
            }
            this.sModeTransition.framesLeft--
            yaw = this.calculate_yaw(newFoc, newPos)
        } else {
            this.sModeTransition.posDist = 0
            this.sModeTransition.posPitch = 0
            this.sModeTransition.posYaw = 0
            this.sStatusFlags &= ~CAM_FLAG_TRANSITION_OUT_OF_C_UP
        }

        this.sModeTransition.marioPos = [...this.gPlayerCameraState.pos]
        return yaw
    }

    update_lakitu(c) {
        let newPos = [0,0,0], newFoc = [0,0,0]

        if (this.gCameraMovementFlags & CAM_MOVE_PAUSE_SCREEN) {
        } else {
            const newYaw = this.next_lakitu_state(newPos, newFoc, c.pos, c.focus, this.sOldPosition, this.sOldFocus, c.nextYaw)

            let wrapper = { current: c.yaw }
            this.set_or_approach_s16_symmetric(wrapper, newYaw, this.sYawSpeed)
            c.yaw = wrapper.current
            this.sStatusFlags &= ~CAM_FLAG_UNUSED_CUTSCENE_ACTIVE

            // Update old state
            this.sOldPosition = [...newPos]
            this.sOldFocus = [...newFoc]

            this.gLakituState.yaw = c.yaw
            this.gLakituState.nextYaw = c.nextYaw
            this.gLakituState.goalPos = [...c.pos]
            this.gLakituState.goalFocus = [...c.focus]

            // Simulate lakitu flying to the new position and turning towards the new focus
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

            this.gLakituState.pos = [...this.gLakituState.curPos]
            this.gLakituState.focus = [...this.gLakituState.curFocus]

            const output = {}
            MathUtil.vec3f_get_dist_and_angle(this.gLakituState.pos, this.gLakituState.focus, output)
            this.gLakituState.focusDistance = output.dist
            this.gLakituState.oldPitch = output.pitch
            this.gLakituState.oldYaw = output.yaw

            this.gLakituState.roll = 0

            // Apply camera shakes TODO
            this.shake_camera_pitch(this.gLakituState.pos, this.gLakituState.focus)
            this.shake_camera_yaw(this.gLakituState.pos, this.gLakituState.focus)
            this.shake_camera_roll(this.gLakituState.roll)
            //shake_camera_handheld()

            if (this.gPlayerCameraState.action == Mario.ACT_DIVE && this.gLakituState.lastFrameAction != Mario.ACT_DIVE) {
                this.set_camera_shake_from_hit(SHAKE_HIT_FROM_BELOW)
            }

            this.gLakituState.roll += this.gLakituState.keyDanceRoll

            if (c.mode != CAMERA_MODE_C_UP && c.cutscene == 0) {
                ObjectListProc.gCheckingSurfaceCollisionsForCamera = true
                let distToFloor = SurfaceCollision.find_floor(this.gLakituState.pos[0], this.gLakituState.pos[1] + 20, this.gLakituState.pos[2], {})
                if (distToFloor != -11000) {
                    distToFloor += 100
                    if (this.gLakituState.pos[1] < (distToFloor)) {
                        this.gLakituState.pos[1] = distToFloor
                    } else {
                        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false
                    }
                }
            }

            this.sModeTransition.marioPos = [...this.gPlayerCameraState.pos]
        }

        this.clamp_pitch(this.gLakituState.pos, this.gLakituState.focus, 0x3E00, -0x3E00)
        this.gLakituState.mode = c.mode
        this.gLakituState.defMode = c.defMode
    }

    update_graph_node_camera(graphNode) {
        // graphNode.myDemoAngle += 0.02
/*        graphNode.pos[0] = (Math.sin(graphNode.myDemoAngle) * graphNode.myDemoRadius) + LevelUpdate.gMarioState.pos[0]
        graphNode.pos[2] = (Math.cos(graphNode.myDemoAngle) * graphNode.myDemoRadius) + LevelUpdate.gMarioState.pos[2]

        graphNode.focus = [ ...LevelUpdate.gMarioState.pos ]*/

        graphNode.rollScreen = this.gLakituState.roll
        graphNode.pos = [...this.gLakituState.pos]
        graphNode.focus = [...this.gLakituState.focus]

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

    object_pos_to_vec3f(dst, o) {
        dst[0] = o.rawData[oPosX]
        dst[1] = o.rawData[oPosY]
        dst[2] = o.rawData[oPosZ]
    }

    geo_camera_fov(callContext, graphNode) {

        const marioState = LevelUpdate.gMarioState
        const fovFunc = this.sFOVState.fovFunc

        if (callContext == GEO_CONTEXT_RENDER) {
            switch (fovFunc) {
                case CAM_FOV_DEFAULT:
                    this.fov_default(marioState)
                    break
                default: throw "default switch case - geo camera fov - " + fovFunc
            }
        }

        graphNode.fov = this.sFOVState.fov

        ///this.shake_camera_fov(graphNode)
    }

    fov_default(m) {
        this.sStatusFlags &= ~CAM_FLAG_SLEEPING

        if ((m.action == Mario.ACT_SLEEPING) || (m.action == Mario.ACT_START_SLEEPING)) {
            throw "sleeping"
        } else {
            const wrapper = { current: this.sFOVState.fov }
            this.camera_approach_f32_symmetric_bool(wrapper, 45, (45 - this.sFOVState.fov) / 30)
        }
    }

    set_camera_shake_from_hit(shake) {
        switch (shake) {
            case SHAKE_ATTACK:
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
                    this.set_fov_shake(0x180, 0x40, 0x8000);
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
                    this.set_fov_shake(0x200, 0x50, 0x8000);
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

            default: throw "unimplemented camera shake - " + shake
        }
    }

    increment_shake_offset(offsetWrapper, increment) {
        if (increment == -0x8000) {
            offsetWrapper.value = (offsetWrapper.value & 0x8000) + 0xC000
        } else {
            offsetWrapper.value += increment
        }
    }

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

    set_camera_pitch_shake(mag, decay, inc) {
        mag = s16(mag)
        if (this.gLakituState.shakeMagnitude[0] < mag) {
            this.gLakituState.shakeMagnitude[0] = mag
            this.gLakituState.shakePitchDecay = s16(decay)
            this.gLakituState.shakePitchVel = s16(inc)
        }
    }

    set_camera_yaw_shake(mag, decay, inc) {
        mag = s16(mag)
        if (Math.abs(mag) > Math.abs(this.gLakituState.shakeMagnitude[1])) {
            this.gLakituState.shakeMagnitude[1] = mag
            this.gLakituState.shakeYawDecay = s16(decay)
            this.gLakituState.shakeYawVel = s16(inc)
        }
    }

    set_camera_roll_shake(mag, decay, inc) {
        mag = s16(mag)
        if (this.gLakituState.shakeMagnitude[2] < mag) {
            this.gLakituState.shakeMagnitude[2] = mag
            this.gLakituState.shakeRollDecay = s16(decay)
            this.gLakituState.shakeRollVel = s16(inc)
        }
    }

    set_fov_shake(amplitude, decay, shakeSpeed) {
        if (amplitude > this.sFOVState.shakeAmplitude) {
            this.sFOVState.shakeAmplitude = amplitude
            this.sFOVState.decay = decay
            this.sFOVState.shakeSpeed = shakeSpeed
        }
    }

    reset_pan_distance(c) {
        this.sPanDistance = 0
    }
    
    /**
     * Store camera info for the star spawn cutscene
     */
    store_info_star(c) {
        CameraInstance.reset_pan_distance(c)
        CameraInstance.vec3f_copy(CameraInstance.sCameraStoreCutscene.pos, c.pos)
        CameraInstance.sCameraStoreCutscene.focus[0] = CameraInstance.gPlayerCameraState.pos[0]
        CameraInstance.sCameraStoreCutscene.focus[1] = c.focus[1]
        CameraInstance.sCameraStoreCutscene.focus[2] = CameraInstance.gPlayerCameraState.pos[2]
    }

    /**
     * Retrieve camera info for the star spawn cutscene
     */
    retrieve_info_star(c) {
        CameraInstance.vec3f_copy(c.pos, CameraInstance.sCameraStoreCutscene.pos)
        CameraInstance.vec3f_copy(c.focus, CameraInstance.sCameraStoreCutscene.focus)
    }

    /**
     * Focus on the top of the star.
     */
    cutscene_star_spawn_focus_star(c) {
        let starPos = new Array(3)
        if (CameraInstance.gCutsceneFocus != null) {
            CameraInstance.object_pos_to_vec3f(starPos, CameraInstance.gCutsceneFocus)
            starPos[1] += CameraInstance.gCutsceneFocus.hitboxHeight
            CameraInstance.approach_vec3f_asymptotic(c.focus, starPos, 0.1, 0.1, 0.1)
        }
    }

    /**
     * Use boss fight mode's update function to move the focus back.
     */
    cutscene_star_spawn_update_boss_fight(c) {
        let pos, focus = new Array(3)

        this.update_boss_fight_camera(c, focus, pos)
        this.approach_vec3f_asymptotic(c.focus, focus, 0.2, 0.2, 0.2)
        this.approach_vec3f_asymptotic(c.pos, pos, 0.2, 0.2, 0.2)
    }

    /**
     * Fly back to the camera's previous pos and focus.
     */
    cutscene_star_spawn_fly_back(c) {
        CameraInstance.retrieve_info_star(c)
        CameraInstance.transition_next_state(c, 15)
    }

    /**
     * Plays when a star spawns (ie from a box).
     */
    cutscene_star_spawn(c) {
        this.cutscene_event(this.store_info_star, c, 0, 0)
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
            this.cutscene_event(this.cutscene_star_spawn_update_boss_fight, c, 0, -1)
        } else {
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

    play_cutscene(c) {
        let oldCutscene = c.cutscene
        let cutsceneDuration
        this.sStatusFlags &= ~CAM_FLAG_SMOOTH_MOVEMENT
        this.gCameraMovementFlags &= ~CAM_MOVING_INTO_MODE

        for (let i = 0; i < this.cutsceneShots.length; i++) {
            if (c.cutscene == this.cutsceneShots[i][0]) {
                cutsceneDuration = this.cutsceneShots[i][1].duration
                for (let j = 0; j < this.cutsceneShots[i][1].length; j++) {
                    this.cutsceneShots[i][1][j].shot(c)
                }
                break
            }
        }

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
    }

    cutscene_event(event, c, start, end) {
        if (start <= this.gCutsceneTimer) {
            if (end == -1 || end >= this.gCutsceneTimer) {
                event(c)
            }
        }

        return 0
    }

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

}

export const CameraInstance = new Camera()
gLinker.Camera = CameraInstance

export const geo_camera_main = CameraInstance.geo_camera_main
export const geo_camera_fov = CameraInstance.geo_camera_fov
