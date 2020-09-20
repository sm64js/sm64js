import { AreaInstance as Area, WARP_TRANSITION_FADE_FROM_STAR, WARP_TRANSITION_FADE_FROM_COLOR } from "./Area"
import { COURSE_NONE } from "../levels/course_defines"
import * as Mario from "./Mario"
import { CameraInstance as Camera } from "./Camera"

const PLAY_MODE_NORMAL  =  0
const PLAY_MODE_PAUSED  =  2
const PLAY_MODE_CHANGE_AREA  =  3
const PLAY_MODE_CHANGE_LEVEL  =  4
const PLAY_MODE_FRAME_ADVANCE = 5

const WARP_TYPE_NOT_WARPING = 0
const WARP_TYPE_CHANGE_LEVEL = 1
const WARP_TYPE_CHANGE_AREA = 2
const WARP_TYPE_SAME_AREA = 3

class LevelUpdate {
    constructor() {
        this.gMarioState = {
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

        this.sWarpDest = {
            type: 0, levelNum: 0, areaIdx: 0, nodeId: 0, arg: 0
        }
    }

    lvl_init_from_save_file(arg0, levelNum) {
        Area.gCurrLevelNum = levelNum
        Area.gCurrCourseNum = COURSE_NONE
        Area.gSavedCourseNum = COURSE_NONE
        Area.gCurrCreditsEntry = null

        Mario.init_mario_from_save_file()
        Camera.select_mario_cam_mode()

        return levelNum
    }

    lvl_init_or_update(initOrUpdate) {
        return initOrUpdate ? this.update_level() : this.init_level()
    }

    init_level() {

        let val4 = 0

        this.set_play_mode(PLAY_MODE_NORMAL)

        if (this.sWarpDest.type != WARP_TYPE_NOT_WARPING) {
            throw "init_level - not warping"
        } else {
            if (Area.gMarioSpawnInfo.areaIndex >= 0) {
                Area.load_mario_area()
                Mario.init_marios()
            }

            if (Area.gCurrentArea) {
                Camera.reset_camera(Area.gCurrentArea.camera)
            }

            if (val4 != 0) {
                Area.play_transition(WARP_TRANSITION_FADE_FROM_COLOR, 0x5A, 0xFF, 0xFF, 0xFF)
            } else {
                Area.play_transition(WARP_TRANSITION_FADE_FROM_STAR, 0x10, 0xFF, 0xFF, 0xFF)
            }

        }
        
        return 1
    }

    play_mode_normal() {

        //lots more here
        Area.area_update_objects()

        if (Area.gCurrentArea) {
            Camera.update_camera(Area.gCurrentArea.camera)
        }

        return 0
    }

    update_level() {
        let changeLevel

        switch (this.sCurrPlayMode) {
            case PLAY_MODE_NORMAL:
                changeLevel = this.play_mode_normal()
                break
        }

        return changeLevel
    }

    set_play_mode(playMode) {
        this.sCurrPlayMode = playMode
        this.D_80339ECA = 0
    }
}

export const LevelUpdateInstance = new LevelUpdate()