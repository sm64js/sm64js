import { AreaInstance as Area } from "./Area"
import { COURSE_NONE } from "../levels/course_defines"
import { MarioInstance as Mario } from "./Mario"
import { CameraInstance as Camera } from "./Camera"

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
}

export const LevelUpdateInstance = new LevelUpdate()