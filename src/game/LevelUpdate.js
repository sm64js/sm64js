import { AreaInstance as Area, WARP_TRANSITION_FADE_FROM_STAR, WARP_TRANSITION_FADE_FROM_COLOR } from "./Area"
import { COURSE_NONE } from "../levels/course_defines"
import * as Mario from "./Mario"
import { CameraInstance as Camera } from "./Camera"
import * as CourseTable from "../include/course_table"
import { gLevelToCourseNumTable } from "./SaveFile"

const PLAY_MODE_NORMAL  =  0
const PLAY_MODE_PAUSED  =  2
const PLAY_MODE_CHANGE_AREA  =  3
const PLAY_MODE_CHANGE_LEVEL  =  4
const PLAY_MODE_FRAME_ADVANCE = 5

const WARP_TYPE_NOT_WARPING = 0
const WARP_TYPE_CHANGE_LEVEL = 1
const WARP_TYPE_CHANGE_AREA = 2
const WARP_TYPE_SAME_AREA = 3

class HudDisplay {
    constructor(lives, coins, stars, wedges, keys, flags, timer) {
        this.lives = lives;
        this.coins = coins;
        this.stars = stars;
        this.wedges = wedges;
        this.keys = keys;
        this.flags = flags;
        this.timer = timer;
    }
};

class LevelUpdate {
    constructor() {
        // HUDDisplayFlag enum
        this.HUD_DISPLAY_FLAG_LIVES = 0x0001;
        this.HUD_DISPLAY_FLAG_COIN_COUNT = 0x0002;
        this.HUD_DISPLAY_FLAG_STAR_COUNT = 0x0004;
        this.HUD_DISPLAY_FLAG_CAMERA_AND_POWER = 0x0008;
        this.HUD_DISPLAY_FLAG_KEYS = 0x0010;
        this.HUD_DISPLAY_FLAG_UNKNOWN_0020 = 0x0020;
        this.HUD_DISPLAY_FLAG_TIMER = 0x0040;
        this.HUD_DISPLAY_FLAG_EMPHASIZE_POWER = 0x8000;
        this.HUD_DISPLAY_NONE = 0x0000;
        this.HUD_DISPLAY_DEFAULT = this.HUD_DISPLAY_FLAG_LIVES | this.HUD_DISPLAY_FLAG_COIN_COUNT | this.HUD_DISPLAY_FLAG_STAR_COUNT | this.HUD_DISPLAY_FLAG_CAMERA_AND_POWER | this.HUD_DISPLAY_FLAG_KEYS | this.HUD_DISPLAY_FLAG_UNKNOWN_0020;
        this.gHudDisplay = new HudDisplay();
        
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

    lvl_set_current_level(arg0, levelNum) {
        Area.gCurrLevelNum = levelNum
        Area.gCurrCourseNum = gLevelToCourseNumTable[levelNum - 1]

        // TODO lots of missing code here

        return 1
    }

    lvl_init_or_update(initOrUpdate) {
        return initOrUpdate ? this.update_level() : this.init_level()
    }

    init_level() {

        let val4 = 0

        this.set_play_mode(PLAY_MODE_NORMAL)

        if (this.gCurrCreditsEntry == undefined) { // Compares to NULL in C code
            this.gHudDisplay.flags = this.HUD_DISPLAY_DEFAULT;
        } else {
            this.gHudDisplay.flags = this.HUD_DISPLAY_NONE;
        }

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
        this.update_hud_values();

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
                    //play_sound(coinSound, this.gMarioState.marioObj.header.gfx.cameraToObject)
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