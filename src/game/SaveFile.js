import { COURSE_BBH, COURSE_CCM, COURSE_NONE, COURSE_HMC, COURSE_SSL, COURSE_BOB, COURSE_SL, COURSE_WDW, COURSE_JRB, COURSE_THI, COURSE_TTC, COURSE_RR, COURSE_BITDW, COURSE_VCUTM, COURSE_BITFS, COURSE_SA, COURSE_BITS, COURSE_LLL, COURSE_DDD, COURSE_CAKE_END, COURSE_PSS, COURSE_COTMC, COURSE_TOTWC, COURSE_WMOTR, COURSE_TTM } from "../include/course_table";

// struct SaveFile
// {
//     // Location of lost cap.
//     // Note: the coordinates get set, but are never actually used, since the
//     // cap can always be found in a fixed spot within the course
//     u8 capLevel;
//     u8 capArea;
//     Vec3s capPos;

//     u32 flags;

//     // Star flags for each course.
//     // The most significant bit of the byte *following* each course is set if the
//     // cannon is open.
//     u8 courseStars[COURSE_COUNT];

//     u8 courseCoinScores[COURSE_STAGES_COUNT];

//     struct SaveBlockSignature signature;
// };

// enum SaveFileIndex {
//     SAVE_FILE_A,
//     SAVE_FILE_B,
//     SAVE_FILE_C,
//     SAVE_FILE_D
// };

// struct MainMenuSaveData
// {
//     // Each save file has a 2 bit "age" for each course. The higher this value,
//     // the older the high score is. This is used for tie-breaking when displaying
//     // on the high score screen.
//     u32 coinScoreAges[NUM_SAVE_FILES];
//     u16 soundMode;

// #ifdef VERSION_EU
//     u16 language;
// #define SUBTRAHEND 8
// #else
// #define SUBTRAHEND 6
// #endif

//     // Pad to match the EEPROM size of 0x200 (10 bytes on JP/US, 8 bytes on EU)
//     u8 filler[EEPROM_SIZE / 2 - SUBTRAHEND - NUM_SAVE_FILES * (4 + sizeof(struct SaveFile))];

//     struct SaveBlockSignature signature;
// };

// struct SaveBuffer
// {
//     // Each of the four save files has two copies. If one is bad, the other is used as a backup.
//     struct SaveFile files[NUM_SAVE_FILES][2];
//     // The main menu data has two copies. If one is bad, the other is used as a backup.
//     struct MainMenuSaveData menuData[2];
// };

export const gLastCompletedCourseNum = null
export const gLastCompletedStarNum = null
export const sUnusedGotGlobalCoinHiScore = null
export const gGotFileCoinHiScore = null
export const gCurrCourseStarFlags = null
export const gSpecialTripleJump = null
export const gLevelToCourseNumTable = [
    COURSE_NONE,
    COURSE_NONE,
    COURSE_NONE,
    COURSE_BBH,
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
    COURSE_NONE,
    COURSE_BITDW,
    COURSE_VCUTM,
    COURSE_BITFS,
    COURSE_SA,
    COURSE_BITS,
    COURSE_LLL,
    COURSE_DDD,
    COURSE_WDW,
    COURSE_CAKE_END,
    COURSE_NONE,
    COURSE_PSS,
    COURSE_COTMC,
    COURSE_TOTWC,
    COURSE_BITDW,
    COURSE_WMOTR,
    COURSE_NONE,
    COURSE_BITFS,
    COURSE_BITS,
    COURSE_NONE,
    COURSE_TTM,
    COURSE_NONE,
    COURSE_NONE
]

// game progress flags
export const SAVE_FLAG_FILE_EXISTS            /* 0x00000001 */ = (1 << 0)
export const SAVE_FLAG_HAVE_WING_CAP          /* 0x00000002 */ = (1 << 1)
export const SAVE_FLAG_HAVE_METAL_CAP         /* 0x00000004 */ = (1 << 2)
export const SAVE_FLAG_HAVE_VANISH_CAP        /* 0x00000008 */ = (1 << 3)
export const SAVE_FLAG_HAVE_KEY_1             /* 0x00000010 */ = (1 << 4)
export const SAVE_FLAG_HAVE_KEY_2             /* 0x00000020 */ = (1 << 5)
export const SAVE_FLAG_UNLOCKED_BASEMENT_DOOR /* 0x00000040 */ = (1 << 6)
export const SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR /* 0x00000080 */ = (1 << 7)
export const SAVE_FLAG_DDD_MOVED_BACK         /* 0x00000100 */ = (1 << 8)
export const SAVE_FLAG_MOAT_DRAINED           /* 0x00000200 */ = (1 << 9)
export const SAVE_FLAG_UNLOCKED_PSS_DOOR      /* 0x00000400 */ = (1 << 10)
export const SAVE_FLAG_UNLOCKED_WF_DOOR       /* 0x00000800 */ = (1 << 11)
export const SAVE_FLAG_UNLOCKED_CCM_DOOR      /* 0x00001000 */ = (1 << 12)
export const SAVE_FLAG_UNLOCKED_JRB_DOOR      /* 0x00002000 */ = (1 << 13)
export const SAVE_FLAG_UNLOCKED_BITDW_DOOR    /* 0x00004000 */ = (1 << 14)
export const SAVE_FLAG_UNLOCKED_BITFS_DOOR    /* 0x00008000 */ = (1 << 15)
export const SAVE_FLAG_CAP_ON_GROUND          /* 0x00010000 */ = (1 << 16)
export const SAVE_FLAG_CAP_ON_KLEPTO          /* 0x00020000 */ = (1 << 17)
export const SAVE_FLAG_CAP_ON_UKIKI           /* 0x00040000 */ = (1 << 18)
export const SAVE_FLAG_CAP_ON_MR_BLIZZARD     /* 0x00080000 */ = (1 << 19)
export const SAVE_FLAG_UNLOCKED_50_STAR_DOOR  /* 0x00100000 */ = (1 << 20)
export const SAVE_FLAG_COLLECTED_TOAD_STAR_1  /* 0x01000000 */ = (1 << 24)
export const SAVE_FLAG_COLLECTED_TOAD_STAR_2  /* 0x02000000 */ = (1 << 25)
export const SAVE_FLAG_COLLECTED_TOAD_STAR_3  /* 0x04000000 */ = (1 << 26)
export const SAVE_FLAG_COLLECTED_MIPS_STAR_1  /* 0x08000000 */ = (1 << 27)
export const SAVE_FLAG_COLLECTED_MIPS_STAR_2  /* 0x10000000 */ = (1 << 28)

// export const SAVE_FLAG_TO_STAR_FLAG(cmd) (((cmd) >> 24) & 0x7F)
// export const STAR_FLAG_TO_SAVE_FLAG(cmd) ((cmd) << 24)

// Variable for setting a warp checkpoint.

// possibly a WarpDest struct where arg is a union. TODO: Check?
// struct WarpCheckpoint {
//     /*0x00*/ u8 actNum;
//     /*0x01*/ u8 courseNum;
//     0x02 u8 levelID;
//     /*0x03*/ u8 areaNum;
//     /*0x04*/ u8 warpNode;
// };

export let gWarpCheckpoint = null

export let gMainMenuDataModified = false
export let gSaveFileModified = false
let gDummyFlags = 0

export const save_file_get_flags = (force) => {
    if (force) {
        return gDummyFlags | force
    } else {
        return gDummyFlags
    }
    // if (gCurrCreditsEntry != NULL || gCurrDemoInput != NULL) {
    //     return 0;
    // }
    // return gSaveBuffer.files[gCurrSaveFileNum - 1][0].flags;
}

export const save_file_set_flags = (flags) => {
    gDummyFlags |= (flags | SAVE_FLAG_FILE_EXISTS)
    gSaveFileModified = true
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

/**
 * Return the bitset of obtained stars in the specified course.
 * If course is -1, return the bitset of obtained castle secret stars.
 */
export const save_file_get_star_flags = (fileIndex, courseIndex) => {
    let /*u32*/ starFlags

    // if (courseIndex == -1) {
    //     starFlags = SAVE_FLAG_TO_STAR_FLAG(gSaveBuffer.files[fileIndex][0].flags)
    // } else {
    //     starFlags = gSaveBuffer.files[fileIndex][0].courseStars[courseIndex] & 0x7F
    // }
    starFlags = 0x7F

    return starFlags
}
