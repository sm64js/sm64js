import * as IDB from "idb-keyval"
var msgpack = require("msgpack-lite")

import { vec3s_set } from "../engine/math_util"
import {
    COURSE_BBH,
    COURSE_WF,
    COURSE_CCM,
    COURSE_NONE,
    COURSE_HMC,
    COURSE_SSL,
    COURSE_BOB,
    COURSE_SL,
    COURSE_WDW,
    COURSE_JRB,
    COURSE_THI,
    COURSE_TTC,
    COURSE_RR,
    COURSE_BITDW,
    COURSE_VCUTM,
    COURSE_BITFS,
    COURSE_SA,
    COURSE_BITS,
    COURSE_LLL,
    COURSE_DDD,
    COURSE_CAKE_END,
    COURSE_PSS,
    COURSE_COTMC,
    COURSE_TOTWC,
    COURSE_WMOTR,
    COURSE_TTM,
    COURSE_COUNT,
} from "../include/course_table"
import { COURSE_MIN, COURSE_NUM_TO_INDEX, COURSE_STAGES_COUNT, COURSE_STAGES_MAX } from "../levels/course_defines"
import { LEVEL_BOWSER_1, LEVEL_BOWSER_2, LEVEL_BOWSER_3 } from "../levels/level_defines_constants"
import { AreaInstance as Area } from "./Area"
import { GameInstance as Game } from "./Game"

const NUM_SAVE_FILES = 4

const SAVE_FILE_A = 0;
const SAVE_FILE_B = 1;
const SAVE_FILE_C = 2;
const SAVE_FILE_D = 3;

export let gLastCompletedCourseNum = COURSE_NONE
export let gLastCompletedStarNum = 0
export let sUnusedGotGlobalCoinHiScore = false
export let gGotFileCoinHiScore = false
export let gCurrCourseStarFlags = 0
export let gMainMenuDataModified = false
export let gSaveFileModified = false
export let gSpecialTripleJump = false
let gDummyFlags = 0
export let gWarpCheckpoint = {
    actNum: 0,
    courseNum: 0,
    levelID: 0,
    areaNum: 0,
    warpNode: 0,
}

export const gSaveBuffer = {
    files: new Array(NUM_SAVE_FILES).fill({
        capLevel: 0,
        capArea: 0,
        capPos: [0, 0, 0],
        flags: 0,
        courseStars: new Array(COURSE_COUNT).fill(0),
        courseCoinScores: new Array(COURSE_STAGES_COUNT).fill(0),
    }),
    menuData: {
        soundMode: 0,
        coinScoreAges: new Array(NUM_SAVE_FILES).fill(0),
    }
}

export const gLevelToCourseNumTable = [
    COURSE_NONE,     COURSE_NONE,  COURSE_NONE,  COURSE_BBH,
    COURSE_CCM,      COURSE_NONE,  COURSE_HMC,   COURSE_SSL,
    COURSE_BOB,      COURSE_SL,    COURSE_WDW,   COURSE_JRB,
    COURSE_THI,      COURSE_TTC,   COURSE_RR,    COURSE_NONE,
    COURSE_BITDW,    COURSE_VCUTM, COURSE_BITFS, COURSE_SA,
    COURSE_BITS,     COURSE_LLL,   COURSE_DDD,   COURSE_WF,
    COURSE_CAKE_END, COURSE_NONE,  COURSE_PSS,   COURSE_COTMC,
    COURSE_TOTWC,    COURSE_BITDW, COURSE_WMOTR, COURSE_NONE,
    COURSE_BITFS,    COURSE_BITS,  COURSE_NONE,  COURSE_TTM,
    COURSE_NONE,     COURSE_NONE,
]

// game progress flags
export const SAVE_FLAG_FILE_EXISTS /* 0x00000001 */ = 1 << 0
export const SAVE_FLAG_HAVE_WING_CAP /* 0x00000002 */ = 1 << 1
export const SAVE_FLAG_HAVE_METAL_CAP /* 0x00000004 */ = 1 << 2
export const SAVE_FLAG_HAVE_VANISH_CAP /* 0x00000008 */ = 1 << 3
export const SAVE_FLAG_HAVE_KEY_1 /* 0x00000010 */ = 1 << 4
export const SAVE_FLAG_HAVE_KEY_2 /* 0x00000020 */ = 1 << 5
export const SAVE_FLAG_UNLOCKED_BASEMENT_DOOR /* 0x00000040 */ = 1 << 6
export const SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR /* 0x00000080 */ = 1 << 7
export const SAVE_FLAG_DDD_MOVED_BACK /* 0x00000100 */ = 1 << 8
export const SAVE_FLAG_MOAT_DRAINED /* 0x00000200 */ = 1 << 9
export const SAVE_FLAG_UNLOCKED_PSS_DOOR /* 0x00000400 */ = 1 << 10
export const SAVE_FLAG_UNLOCKED_WF_DOOR /* 0x00000800 */ = 1 << 11
export const SAVE_FLAG_UNLOCKED_CCM_DOOR /* 0x00001000 */ = 1 << 12
export const SAVE_FLAG_UNLOCKED_JRB_DOOR /* 0x00002000 */ = 1 << 13
export const SAVE_FLAG_UNLOCKED_BITDW_DOOR /* 0x00004000 */ = 1 << 14
export const SAVE_FLAG_UNLOCKED_BITFS_DOOR /* 0x00008000 */ = 1 << 15
export const SAVE_FLAG_CAP_ON_GROUND /* 0x00010000 */ = 1 << 16
export const SAVE_FLAG_CAP_ON_KLEPTO /* 0x00020000 */ = 1 << 17
export const SAVE_FLAG_CAP_ON_UKIKI /* 0x00040000 */ = 1 << 18
export const SAVE_FLAG_CAP_ON_MR_BLIZZARD /* 0x00080000 */ = 1 << 19
export const SAVE_FLAG_UNLOCKED_50_STAR_DOOR /* 0x00100000 */ = 1 << 20
export const SAVE_FLAG_COLLECTED_TOAD_STAR_1 /* 0x01000000 */ = 1 << 24
export const SAVE_FLAG_COLLECTED_TOAD_STAR_2 /* 0x02000000 */ = 1 << 25
export const SAVE_FLAG_COLLECTED_TOAD_STAR_3 /* 0x04000000 */ = 1 << 26
export const SAVE_FLAG_COLLECTED_MIPS_STAR_1 /* 0x08000000 */ = 1 << 27
export const SAVE_FLAG_COLLECTED_MIPS_STAR_2 /* 0x10000000 */ = 1 << 28

// #define SAVE_FLAG_TO_STAR_FLAG(cmd) (((cmd) >> 24) & 0x7F)
export const SAVE_FLAG_TO_STAR_FLAG = (cmd) => {
    return (cmd >> 24) & 0x7f
}
// #define const STAR_FLAG_TO_SAVE_FLAG(cmd) ((cmd) << 24)
export const STAR_FLAG_TO_SAVE_FLAG = (cmd) => {
    return cmd << 24
}

const deep_copy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const reset_save_buffer = () => {
    gSaveBuffer.files = new Array(NUM_SAVE_FILES).fill({
        capLevel: 0,
        capArea: 0,
        capPos: [0, 0, 0],
        flags: 0,
        courseStars: new Array(COURSE_COUNT).fill(0),
        courseCoinScores: new Array(COURSE_STAGES_COUNT).fill(0),
    })
    gSaveBuffer.menuData = {
        soundMode: 0,
        coinScoreAges: new Array(NUM_SAVE_FILES).fill(0),
    }
}

window.saveGame = () => {
    if (gMainMenuDataModified) {
        IDB.set("save_file", msgpack.encode(gSaveBuffer))
        gMainMenuDataModified = false;
    }

    console.log("Saved Game:", gSaveBuffer)
}

window.loadGame = () => {
    IDB.get("save_file").then((data) => {
        if (data) {
            gSaveBuffer = msgpack.decode(data)
        } else {
            reset_save_buffer();
        }
    })
    
    console.log("Loaded Game:", gSaveBuffer)
}

export const get_coin_score_age = (fileIndex, courseIndex) => {
    return (gSaveBuffer.menuData.coinScoreAges[fileIndex] >> (2 * courseIndex)) & 0x3
}

export const set_coin_score_age = (fileIndex, courseIndex, age) => {
    let mask = 0x3 << (2 * courseIndex)

    gSaveBuffer.menuData.coinScoreAges[fileIndex] &= ~mask
    gSaveBuffer.menuData.coinScoreAges[fileIndex] |= age << (2 * courseIndex)
}

/**
 * Mark a coin score for a save file as the newest out of all save files.
 */
export const touch_coin_score_age = (fileIndex, courseIndex) => {
    let currentAge = get_coin_score_age(fileIndex, courseIndex)

    if (currentAge != 0) {
        for (let i = 0; i < NUM_SAVE_FILES; i++) {
            let age = get_coin_score_age(i, courseIndex)
            if (age < currentAge) {
                set_coin_score_age(i, courseIndex, age + 1)
            }
        }

        set_coin_score_age(fileIndex, courseIndex, 0)
        gMainMenuDataModified = true
    }
}

/**
 * Mark all coin scores for a save file as new.
 */
export const touch_high_score_ages = (fileIndex) => {
    for (let i = COURSE_NUM_TO_INDEX(COURSE_MIN); i <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX); i++) {
        touch_coin_score_age(fileIndex, i)
    }
}

// restore_save_file_data: use loadGame

// save_file_do_save: use saveGame

export const save_file_erase = (fileIndex) => {
    touch_high_score_ages(fileIndex);
    
    gSaveBuffer.files[fileIndex] = {
        capLevel: 0,
        capArea: 0,
        capPos: [0, 0, 0],
        flags: 0,
        courseStars: new Array(COURSE_COUNT).fill(0),
        courseCoinScores: new Array(COURSE_STAGES_COUNT).fill(0),
    }

    gSaveFileModified = true;
    window.saveGame();
}

export const save_file_copy = (srcFileIndex, destFileIndex) => {
    touch_high_score_ages(destFileIndex);
    gSaveBuffer.files[destFileIndex] = deep_copy(gSaveBuffer.files[srcFileIndex])

    gSaveFileModified = true;
    window.saveGame();
}

export const save_file_load_all = () => {
    gMainMenuDataModified = false;
    gSaveFileModified = false;
    reset_save_buffer();
    window.loadGame();
}

// save_file_reload: not required

/**
 * Update the current save file after collecting a star or a key.
 * If coin score is greater than the current high score, update it.
 */
export const save_file_collect_star_or_key = (coinScore, starIndex) => {
    let fileIndex = Area.gCurrSaveFileNum - 1
    let courseIndex = COURSE_NUM_TO_INDEX(Area.gCurrCourseNum)
    let starFlag = 1 << starIndex

    gLastCompletedCourseNum = courseIndex + 1
    gLastCompletedStarNum = starIndex + 1
    gGotFileCoinHiScore = false
    sUnusedGotGlobalCoinHiScore = false;

    if (courseIndex >= COURSE_NUM_TO_INDEX(COURSE_MIN) && courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) {
        if ((coinScore > save_file_get_max_coin_score(courseIndex)) & 0xffff) {
            sUnusedGotGlobalCoinHiScore = true
        }

        if (coinScore > save_file_get_max_coin_score(courseIndex)) {
            gSaveBuffer.files[fileIndex].courseCoinScores[courseIndex] = coinScore
            touch_coin_score_age(fileIndex, courseIndex)

            gGotFileCoinHiScore = true
            gSaveFileModified = true
        }
    }

    switch (Area.gCurrLevelNum) {
        case LEVEL_BOWSER_1:
            if (!(save_file_get_flags() & (SAVE_FLAG_HAVE_KEY_1 | SAVE_FLAG_UNLOCKED_BASEMENT_DOOR))) {
                save_file_set_flags(SAVE_FLAG_HAVE_KEY_1)
            }
            break

        case LEVEL_BOWSER_2:
            if (!(save_file_get_flags() & (SAVE_FLAG_HAVE_KEY_2 | SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR))) {
                save_file_set_flags(SAVE_FLAG_HAVE_KEY_2)
            }
            break

        case LEVEL_BOWSER_3:
            break

        default:
            if (!(save_file_get_star_flags(fileIndex, courseIndex) & starFlag)) {
                save_file_set_star_flags(fileIndex, courseIndex, starFlag)
            }
            break
    }
}

export const save_file_exists = (fileIndex) => {
    return (gSaveBuffer.files[fileIndex].flags & SAVE_FLAG_FILE_EXISTS) != 0
}

export const save_file_get_max_coin_score = (courseIndex) => {
    let maxCoinScore = -1
    let maxScoreAge = -1
    let maxScoreFileNum = 0

    for (let fileIndex = 0; fileIndex < NUM_SAVE_FILES; fileIndex++) {
        if (save_file_get_star_flags(fileIndex, courseIndex) != 0) {
            let coinScore = save_file_get_course_coin_score(fileIndex, courseIndex)
            let scoreAge = get_coin_score_age(fileIndex, courseIndex)
            if (coinScore > maxCoinScore || (coinScore == maxCoinScore && scoreAge > maxScoreAge)) {
                maxCoinScore = coinScore
                maxScoreAge = scoreAge
                maxScoreFileNum = fileIndex + 1
            }
        }
    }
    return (maxScoreFileNum << 16) + Math.max(maxCoinScore, 0)
}

export const save_file_get_course_star_count = (fileIndex, courseIndex) => {
    let /*s32*/ i
    let /*s32*/ count = 0
    let /*u8*/ flag = 1
    let /*u8*/ starFlags = save_file_get_star_flags(fileIndex, courseIndex)

    for (i = 0; i < 7; i++, flag <<= 1) {
        if (starFlags & flag) {
            count++
        }
    }
    return count
}

export const save_file_get_total_star_count = (fileIndex, minCourse, maxCourse) => {
    let count = 0

    // Get standard course star count.
    for (; minCourse <= 14; minCourse++) {
        count += save_file_get_course_star_count(fileIndex, minCourse)
    }

    // Add castle secret star count.
    return save_file_get_course_star_count(fileIndex, COURSE_NUM_TO_INDEX(COURSE_NONE)) + count
}

export const save_file_set_flags = (flags) => {
    gSaveBuffer.files[Area.gCurrSaveFileNum - 1].flags |= flags | SAVE_FLAG_FILE_EXISTS
    gSaveFileModified = true
}

export const save_file_clear_flags = (flags) => {
    gSaveBuffer.files[Area.gCurrSaveFileNum - 1].flags &= ~flags
    gSaveBuffer.files[Area.gCurrSaveFileNum - 1].flags |= SAVE_FLAG_FILE_EXISTS
    gSaveFileModified = true
}

export const save_file_get_flags = () => {
    if (Area.gCurrCreditsEntry != null || Game.gCurrDemoInput != null) {
        return false
    }
    return gSaveBuffer.files[Area.gCurrSaveFileNum - 1].flags
}

/**
 * Return the bitset of obtained stars in the specified course.
 * If course is -1, return the bitset of obtained castle secret stars.
 */
export const save_file_get_star_flags = (fileIndex, courseIndex) => {
    // does not work for some reason?
    let /*u32*/ starFlags

    if (courseIndex == -1) {
        starFlags = SAVE_FLAG_TO_STAR_FLAG(gSaveBuffer.files[fileIndex].flags)
    } else {
        starFlags = gSaveBuffer.files[fileIndex].courseStars[courseIndex]
    }

    return starFlags
}

/**
 * Add to the bitset of obtained stars in the specified course.
 * If course is COURSE_NONE, add to the bitset of obtained castle secret stars.
 */
export const save_file_set_star_flags = (fileIndex, courseIndex, starFlags) => {
    if (courseIndex == COURSE_NUM_TO_INDEX(COURSE_NONE)) {
        gSaveBuffer.files[fileIndex].flags |= STAR_FLAG_TO_SAVE_FLAG(starFlags)
    } else {
        gSaveBuffer.files[fileIndex].courseStars[courseIndex] |= starFlags
    }

    gSaveBuffer.files[fileIndex].flags |= SAVE_FLAG_FILE_EXISTS
    gSaveFileModified = true
}

export const save_file_get_course_coin_score = (fileIndex, courseIndex) => {
    return gSaveBuffer.files[fileIndex].courseCoinScores[courseIndex]
}

/**
 * Return TRUE if the cannon is unlocked in the current course.
 */
export const save_file_is_cannon_unlocked = () => {
    return (gSaveBuffer.files[Area.gCurrSaveFileNum - 1].courseStars[Area.gCurrCourseNum] & (1 << 7)) != 0
}

/**
 * Sets the cannon status to unlocked in the current course.
 */
export const save_file_set_cannon_unlocked = () => {
    gSaveBuffer.files[Area.gCurrSaveFileNum - 1].courseStars[Area.gCurrCourseNum] |= 1 << 7
    gSaveBuffer.files[Area.gCurrSaveFileNum - 1].flags |= SAVE_FLAG_FILE_EXISTS
    gSaveFileModified = true
}

export const save_file_set_cap_pos = (x, y, z) => {
    let saveFile = gSaveBuffer.files[Area.gCurrSaveFileNum - 1]

    saveFile.capLevel = Area.gCurrLevelNum
    saveFile.capArea = Area.gCurrAreaIndex
    vec3s_set(saveFile.capPos, x, y, z)
    save_file_set_flags(SAVE_FLAG_CAP_ON_GROUND)
}

export const save_file_get_cap_pos = (capPos) => {
    let saveFile = gSaveBuffer.files[Area.gCurrSaveFileNum - 1]
    let flags = save_file_get_flags()

    if (
        saveFile.capLevel == Area.gCurrLevelNum &&
        saveFile.capArea == Area.gCurrAreaIndex &&
        flags & SAVE_FLAG_CAP_ON_GROUND
    ) {
        capPos = [...saveFile.capPos]
        return true
    }
    return false
}

export const save_file_set_sound_mode = (mode) => {
    gSaveBuffer.menuData.soundMode = mode

    gMainMenuDataModified = true
    window.saveGame();
}

export const save_file_get_sound_mode = () => {
    return gSaveBuffer.menuData.soundMode
}

export const save_file_move_cap_to_default_location = () => {
    if (save_file_get_flags() & SAVE_FLAG_CAP_ON_GROUND) {
        switch (gSaveBuffer.files[Area.gCurrSaveFileNum - 1].capLevel) {
            case LEVEL_SSL:
                save_file_set_flags(SAVE_FLAG_CAP_ON_KLEPTO)
                break
            case LEVEL_SL:
                save_file_set_flags(SAVE_FLAG_CAP_ON_MR_BLIZZARD)
                break
            case LEVEL_TTM:
                save_file_set_flags(SAVE_FLAG_CAP_ON_UKIKI)
                break
        }
        save_file_clear_flags(SAVE_FLAG_CAP_ON_GROUND)
    }
}

export const disable_warp_checkpoint = () => {
    // check_warp_checkpoint() checks to see if gWarpCheckpoint.courseNum != COURSE_NONE
    gWarpCheckpoint.courseNum = COURSE_NONE
}

/**
 * Checks the upper bit of the WarpNode->destLevel byte to see if the
 * game should set a warp checkpoint.
 */
export const check_if_should_set_warp_checkpoint = (warpNode) => {
    if (warpNode.destLevel & 0x80) {
        // Overwrite the warp checkpoint variables.
        gWarpCheckpoint.actNum = Area.gCurrActNum
        gWarpCheckpoint.courseNum = Area.gCurrCourseNum
        gWarpCheckpoint.levelID = warpNode.destLevel & 0x7f
        gWarpCheckpoint.areaNum = warpNode.destArea
        gWarpCheckpoint.warpNode = warpNode.destNode
    }
}

/**
 * Checks to see if a checkpoint is properly active or not. This will
 * also update the level, area, and destination node of the input WarpNode.
 * returns TRUE if input WarpNode was updated, and FALSE if not.
 */
export const check_warp_checkpoint = (warpNode) => {
    let warpCheckpointActive = false
    let currCourseNum = gLevelToCourseNumTable[(warpNode.destLevel & 0x7f) - 1]

    // gSavedCourseNum is only used in this function.
    if (
        gWarpCheckpoint.courseNum != COURSE_NONE &&
        gLinker.Area.gSavedCourseNum == currCourseNum &&
        gWarpCheckpoint.actNum == gCurrActNum
    ) {
        warpNode.destLevel = gWarpCheckpoint.levelID
        warpNode.destArea = gWarpCheckpoint.areaNum
        warpNode.destNode = gWarpCheckpoint.warpNode
        warpCheckpointActive = true
    } else {
        // Disable the warp checkpoint just in case the other 2 conditions failed?
        gWarpCheckpoint.courseNum = COURSE_NONE
    }

    return warpCheckpointActive
}

export const set_curr_course_star_flags = () => {
    gCurrCourseStarFlags = save_file_get_star_flags(Area.gCurrSaveFileNum - 1, Area.gCurrCourseNum - 1);
}
