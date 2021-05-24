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
import { oPosY } from "../include/object_constants"
import { SURFACE_DEATH_PLANE } from "../include/surface_terrains"
import { sins, s16, int16 } from "../utils"
import { HudInstance as Hud } from "./Hud"


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

        this.sOldPosition = [0, 0, 0]
        this.sOldFocus = [0, 0, 0]
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
        if (window.cheats.debug_camera_off == true) {
            return
        }

        this.gCamera = c
        this.update_camera_hud_status(c)

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
        newPos[0] = curPos[0]
        newPos[1] = curPos[1]
        newPos[2] = curPos[2]

        newFoc[0] = curFoc[0]
        newFoc[1] = curFoc[1]
        newFoc[2] = curFoc[2]

        if (this.sStatusFlags & CAM_FLAG_START_TRANSITION) {
            throw "CAM_FLAG_START_TRANSITION"
        }

        // Transition from the last mode to the current one
        if (this.sModeTransition.framesLeft > 0) {
            throw "Transition from the last mode to the current one"
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

    set_environmental_camera_shake(shake) {
        switch (shake) {
            case SHAKE_ENV_EXPLOSION:
                this.set_camera_pitch_shake(0x60, 0x8, 0x4000)
                break
            default: throw "unimplemented camera shake type " + shake
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
