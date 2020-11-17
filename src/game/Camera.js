import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE } from "../engine/graph_node"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { AreaInstance as Area } from "./Area"
import { LEVEL_CASTLE_GROUNDS, LEVEL_BOB, LEVEL_CCM, LEVEL_PSS } from "../levels/level_defines_constants"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { atan2s } from "../engine/math_util"
import * as MathUtil from "../engine/math_util"
import { ACT_FLAG_METAL_WATER, ACT_FLAG_ON_POLE, ACT_FLAG_HANGING, ACT_RIDING_HOOT, ACT_LONG_JUMP, ACT_TOP_OF_POLE, ACT_SLEEPING, ACT_START_SLEEPING } from "./Mario"
import { oPosY } from "../include/object_constants"
import { SURFACE_DEATH_PLANE } from "../include/surface_terrains"

const CAM_FOV_DEFAULT = 2

const CAM_ANGLE_MARIO = 1
const CAM_ANGLE_LAKITU = 2


const CAM_MODE_MARIO_ACTIVE          =  0x01
const CAM_MODE_LAKITU_WAS_ZOOMED_OUT =  0x02
const CAM_MODE_MARIO_SELECTED        =  0x04

const CAMERA_MODE_NONE              = 0x00
const CAMERA_MODE_RADIAL            = 0x01
const CAMERA_MODE_OUTWARD_RADIAL    = 0x02
const CAMERA_MODE_BEHIND_MARIO      = 0x03
const CAMERA_MODE_CLOSE             = 0x04 // Inside Castle / Big Boo's Haunt
const CAMERA_MODE_C_UP              = 0x06
const CAMERA_MODE_WATER_SURFACE     = 0x08
const CAMERA_MODE_SLIDE_HOOT        = 0x09
const CAMERA_MODE_INSIDE_CANNON     = 0x0A
const CAMERA_MODE_BOSS_FIGHT        = 0x0B
const CAMERA_MODE_PARALLEL_TRACKING = 0x0C
const CAMERA_MODE_FIXED             = 0x0D
const CAMERA_MODE_8_DIRECTIONS      = 0x0E // AKA Parallel Camera, Bowser Courses & Rainbow Road
const CAMERA_MODE_FREE_ROAM         = 0x10
const CAMERA_MODE_SPIRAL_STAIRS     = 0x11


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

const L_CBUTTONS =	0x0002
const R_CBUTTONS =	0x0001
const D_CBUTTONS =	0x0004
const U_CBUTTONS =	0x0008


const DOOR_DEFAULT         = 0
const DOOR_LEAVING_SPECIAL = 1
const DOOR_ENTER_LOBBY     = 2

class Camera {
    constructor() {

        this.CAM_MOVE_C_UP_MODE = 0x2000

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

    approach_asymptotic_bool(currentWrapper, target, multiplier) {
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

    set_or_approach_symmetric(currentWrapper, target, increment) {
        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            this.camera_approach_symmetric_bool(currentWrapper, target, increment)
        } else {
            currentWrapper.current = target
        }
        if (currentWrapper.current == target) {
            return false
        } else {
            return true
        }
    }

    set_or_approach_asymptotic(currentWrapper, goal, scale) {
        if (this.sStatusFlags & CAM_FLAG_SMOOTH_MOVEMENT) {
            this.approach_asymptotic_bool(currentWrapper, goal, scale)
        } else {
            currentWrapper.current = goal
        }
        if (currentWrapper.current == goal) {
            return false
        } else {
            return true
        }
    }

    camera_approach_symmetric_bool(currentWrapper, target, increment) {
        let dist = target - currentWrapper.current
        if (dist < -32768) dist += 65536
        if (dist > 32767) dist -= 65536

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

    set_or_approach_vec3_asymptotic(dst, goal, xMul, yMul, zMul) {
        let wrapper = { current: dst[0] }
        this.set_or_approach_asymptotic(wrapper, goal[0], xMul)
        dst[0] = wrapper.current
        wrapper.current = dst[1]
        this.set_or_approach_asymptotic(wrapper, goal[1], yMul)
        dst[1] = wrapper.current
        wrapper.current = dst[2]
        this.set_or_approach_asymptotic(wrapper, goal[2], zMul)
        dst[2] = wrapper.current
    }

    scale_along_line(dst, from, to, scale) {
        const tempVec =  new Array(3)

        tempVec[0] = (to[0] - from[0]) * scale + from[0]
        tempVec[1] = (to[1] - from[1]) * scale + from[1]
        tempVec[2] = (to[2] - from[2]) * scale + from[2]

        dst = [...tempVec]
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
                if (this.is_within_100_units_of_mario(-1328, 260, 4646) != 1) {
                    marioOffset[0] = -400
                    marioOffset[2] = -800
                }
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

    update_camera(c) {

        this.gCamera = c

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

        switch (c.mode) {
            case CAMERA_MODE_FREE_ROAM:
                this.mode_lakitu_camera(c)
                break
            default: throw "unknown camera case"
        }

        ObjectListProc.gCheckingSurfaceCollisionsForCamera = false

        this.update_lakitu(c) 

        this.gLakituState.lastFrameAction = this.gPlayerCameraState.action

    }

    calc_hor_dist(a, b) {
        const distX = b[0] - a[0]
        const distZ = b[2] - a[2]
        return Math.sqrt(distX * distX + distZ * distZ)
    }

    calc_y_to_curr_floor(posOffWrapper, posMul, posBound, focOffWrapper, focMul, focBound) {
        const floorHeight = this.sMarioGeometry.currFloorHeight
        const waterHeight = -99999

        if (!(this.gPlayerCameraState.action & ACT_FLAG_METAL_WATER)) {
            if (floorHeight < (waterHeight)) {
                floorHeight = waterHeight
            }
        }

        const marioObj = LevelUpdate.gMarioState

        if (this.gPlayerCameraState.action & ACT_FLAG_ON_POLE) {
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
        if (this.gPlayerCameraState.action == ACT_LONG_JUMP ||
            (this.gPlayerCameraState.action != ACT_TOP_OF_POLE && (this.gPlayerCameraState.action & ACT_FLAG_ON_POLE))) {
            pan[0] = -pan[0]
        }

        // Slowly make the actual pan, sPanDistance, approach the calculated pan
        // If mario is sleeping, then don't pan
        const wrapper = { current: this.sPanDistance }
        if (this.sStatusFlags & CAM_FLAG_SLEEPING) {
            this.approach_asymptotic_bool(wrapper, 0, 0.025)
        } else {
            this.approach_asymptotic_bool(wrapper, pan[0], 0.025)
        }

        this.sPanDistance = wrapper.current

        // Now apply the pan. It's a dir vector to the left or right, rotated by the camera's yaw to mario
        pan[0] = this.sPanDistance
        yaw = -yaw
        this.rotate_in_xz(pan, pan, yaw)
        MathUtil.vec3f_add(c.focus, pan)
    }


    handle_c_button_movement(c) {
        let cSideYaw;
    
        // Zoom in
        if (window.playerInput.buttonPressedCu) {
            if (c.mode != CAMERA_MODE_FIXED && (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT)) {
                this.gCameraMovementFlags &= ~CAM_MOVE_ZOOMED_OUT;
                // play_sound_cbutton_up();
            } else {
                // set_mode_c_up(c);
                // if (sZeroZoomDist > gCameraZoomDist) {
                //     sZoomAmount = -gCameraZoomDist;
                // } else {
                //     sZoomAmount = gCameraZoomDist;
                // }
            }
        }
        if (c.mode != CAMERA_MODE_FIXED) {
            // Zoom out
            if (window.playerInput.buttonPressedCd) {
                if (this.gCameraMovementFlags & CAM_MOVE_ZOOMED_OUT) {
                    this.gCameraMovementFlags |= CAM_MOVE_ALREADY_ZOOMED_OUT;
                    this.sZoomAmount = this.gCameraZoomDist + 400;
                } else {
                    this.gCameraMovementFlags |= CAM_MOVE_ZOOMED_OUT;
                    this.sZoomAmount = this.gCameraZoomDist + 400;
                    // play_sound_cbutton_down();
                }
            }
    
            // Rotate left or right
            cSideYaw = 0x1000;
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

    update_default_camera(c) {


        let nextYawVel
        let yawVel = 0
        let yawGoal = parseInt(this.gPlayerCameraState.faceAngle[1] + (180 * 0x10000 / 360))
        if (yawGoal > 32767) yawGoal -= 65536

        let closeToMario = 0
        let ceilHeight = 20000

        const distPitchYaw = {}
        MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, distPitchYaw)
        let { dist, pitch, yaw } = distPitchYaw

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
                this.sZoomAmount = 0;
            }
            if (dist > zoomDist) {
                if ((dist -= 30) < zoomDist) {
                    dist = zoomDist;
                }
            }
            if (dist < zoomDist) {
                if ((dist += 30) > zoomDist) {
                    dist = zoomDist;
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
                yaw += 0x200;
            }
            if (this.sCSideButtonYaw > 0) {
                yaw -= 0x200;
            }
            const wrapper = { current: this.sCSideButtonYaw }
            this.camera_approach_symmetric_bool(wrapper, 0, 0x100);
            this.sCSideButtonYaw = wrapper.current
            nextYawVel = 0;
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
                MathUtil.vec3f_get_dist_and_angle(this.gPlayerCameraState.pos, c.pos, distPitchYaw)
                dist = distPitchYaw.dist
                pitch = distPitchYaw.pitch
                yaw = distPitchYaw.yaw
            }
            closeToMario |= 1
        }

        if (-16 < window.playerInput.stickY) c.yaw = yaw

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
                const yawWrapper = { current: parseInt(yaw) }
                this.camera_approach_symmetric_bool(yawWrapper, yawGoal, parseInt(yawVel))
                yaw = yawWrapper.current
            }
        }

        // Only zoom out if not obstructed by walls and lakitu hasn't collided with any
        if (avoidStatus == 0 && !(this.sStatusFlags & CAM_FLAG_COLLIDED_WITH_WALL)) {
            const distWrapper = { current: dist }
            this.approach_asymptotic_bool(distWrapper, zoomDist - 100, 0.05)
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


        if (this.gPlayerCameraState.action & ACT_FLAG_HANGING || this.gPlayerCameraState.action == ACT_RIDING_HOOT) {
            /// TODO hanging or riding
        }

        if (this.gPlayerCameraState.action & ACT_FLAG_ON_POLE) {
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

        if (this.gCameraMovementFlags & CAM_MOVE_PAUSE_SCREEN) { }
        else {
            const newYaw = this.next_lakitu_state(newPos, newFoc, c.pos, c.focus, this.sOldPosition, this.sOldFocus, c.nextYaw)

            let wrapper = { current: parseInt(c.yaw) }
            this.set_or_approach_symmetric(wrapper, parseInt(newYaw), parseInt(this.sYawSpeed))
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
            this.set_or_approach_vec3_asymptotic(this.gLakituState.curPos, newPos,
                                                 this.gLakituState.posHSpeed, this.gLakituState.posVSpeed,
                                                 this.gLakituState.posHSpeed)
            this.set_or_approach_vec3_asymptotic(this.gLakituState.curFocus, newFoc,
                                                 this.gLakituState.focHSpeed, this.gLakituState.focVSpeed,
                                                 this.gLakituState.focHSpeed)


            // Adjust lakitu's speed back to normal --- so gross
            wrapper = { current: this.gLakituState.focHSpeed }
            this.set_or_approach_asymptotic(wrapper, 0.8, 0.05)
            this.gLakituState.focHSpeed = wrapper.current
            wrapper.current = this.gLakituState.focVSpeed
            this.set_or_approach_asymptotic(wrapper, 0.3, 0.05)
            this.gLakituState.focVSpeed = wrapper.current
            wrapper.current = this.gLakituState.posHSpeed
            this.set_or_approach_asymptotic(wrapper, 0.3, 0.05)
            this.gLakituState.posHSpeed = wrapper.current
            wrapper.current = this.gLakituState.posVSpeed
            this.set_or_approach_asymptotic(wrapper, 0.3, 0.05)
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
/*        graphNode.pos[0] = (Math.sin(graphNode.myDemoAngle) * graphNode.myDemoRadius) + LevelUpdate.gMarioState[0].pos[0]
        graphNode.pos[2] = (Math.cos(graphNode.myDemoAngle) * graphNode.myDemoRadius) + LevelUpdate.gMarioState[0].pos[2]

        graphNode.focus = [ ...LevelUpdate.gMarioState[0].pos ]*/

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

        if ((m.action == ACT_SLEEPING) || (m.action == ACT_START_SLEEPING)) {
            throw "sleeping"
        } else {
            const wrapper = { current: this.sFOVState.fov }
            this.camera_approach_symmetric_bool(wrapper, 45, (45 - this.sFOVState.fov) / 30)
        }
    }
}

export const CameraInstance = new Camera()
