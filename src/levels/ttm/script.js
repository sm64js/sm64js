// Ttm

import {
    OBJECT, RETURN, OBJECT_WITH_ACTS, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, PAINTING_WARP_NODE, TERRAIN, MACRO_OBJECTS, SET_BACKGROUND_MUSIC, TERRAIN_TYPE,
    END_AREA, INSTANT_WARP, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_TTM_ROLLING_LOG, MODEL_NONE, MODEL_DL_MONTY_MOLE_HOLE, MODEL_MONTY_MOLE, MODEL_UKIKI,
    MODEL_STAR, MODEL_TTM_STAR_CAGE, MODEL_TTM_BLUE_SMILEY, MODEL_TTM_YELLOW_SMILEY,
    MODEL_TTM_STAR_SMILEY, MODEL_TTM_MOON_SMILEY, MODEL_MARIO, MODEL_TTM_SLIDE_EXIT_PODIUM,
    MODEL_LEVEL_GEOMETRY_03, MODEL_LEVEL_GEOMETRY_04, MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06, MODEL_LEVEL_GEOMETRY_07, MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_09, MODEL_LEVEL_GEOMETRY_0A, MODEL_LEVEL_GEOMETRY_0B,
    MODEL_LEVEL_GEOMETRY_0C, MODEL_LEVEL_GEOMETRY_0D, MODEL_LEVEL_GEOMETRY_0F,
    MODEL_LEVEL_GEOMETRY_10, MODEL_LEVEL_GEOMETRY_11, MODEL_LEVEL_GEOMETRY_12,
    MODEL_LEVEL_GEOMETRY_13, MODEL_LEVEL_GEOMETRY_14, MODEL_LEVEL_GEOMETRY_15,
    MODEL_LEVEL_GEOMETRY_16
} from "../../include/model_ids"

import {
    script_func_global_1/*, script_func_global_7*/
} from "../global_scripts"

import { ttm_geo_000730 } from "./rolling_log/geo.inc"

import { ttm_geo_000D14 } from "./blue_smiley/geo.inc"

import { ttm_geo_000DBC } from "./moon_smiley/geo.inc"

import { ttm_geo_000748 } from "./areas/1/3/geo.inc"

import { ttm_geo_000778 } from "./areas/1/4/geo.inc"

import { ttm_geo_0007A8 } from "./areas/1/5/geo.inc"

import { ttm_geo_0007D8 } from "./areas/1/6/geo.inc"

import { ttm_geo_000808 } from "./areas/1/7/geo.inc"

import { ttm_geo_000830 } from "./areas/1/8/geo.inc"

import { ttm_geo_000858 } from "./areas/1/9/geo.inc"

import { ttm_geo_000880 } from "./areas/1/10/geo.inc"

import { ttm_geo_0008A8 } from "./areas/1/11/geo.inc"

import { ttm_geo_0008D0 } from "./areas/1/12/geo.inc"

import { ttm_geo_0008F8 } from "./areas/1/13/geo.inc"

import { ttm_geo_000920 } from "./areas/1/14/geo.inc"

import { ttm_geo_000948 } from "./areas/1/15/geo.inc"

import { ttm_geo_000970 } from "./areas/1/16/geo.inc"

import { ttm_geo_000990 } from "./areas/1/17/geo.inc"

import { ttm_geo_0009C0 } from "./areas/1/18/geo.inc"

import { ttm_geo_0009F0 } from "./areas/1/19/geo.inc"

import { ttm_geo_000A18 } from "./areas/1/20/geo.inc"

import { ttm_geo_000A40 } from "./areas/1/21/geo.inc"

import { ttm_geo_000A70 } from "./areas/1/geo.inc"

import {
    LEVEL_TTM, LEVEL_CASTLE
} from "../level_defines_constants"

import {
    WARP_NO_CHECKPOINT, WARP_CHECKPOINT
} from "../../engine/LevelCommands"

import { ttm_seg7_area_1_collision } from "./areas/1/collision.inc"

import { ttm_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import {
    SEQ_LEVEL_GRASS, SEQ_LEVEL_SLIDE
} from "../../include/seq_ids"

import {
    TERRAIN_STONE, TERRAIN_SLIDE
} from "../../include/surface_terrains"

import { ttm_geo_000B5C } from "./areas/2/geo.inc"

import { ttm_seg7_area_2_collision } from "./areas/2/collision.inc"

import { ttm_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { ttm_geo_000BEC } from "./areas/3/geo.inc"

import { ttm_seg7_area_3_collision } from "./areas/3/collision.inc"

import { ttm_seg7_area_3_macro_objs } from "./areas/3/macro.inc"

import { ttm_geo_000C84 } from "./areas/4/geo.inc"

import { ttm_seg7_area_4_collision } from "./areas/4/collision.inc"

import { ttm_seg7_area_4_macro_objs } from "./areas/4/macro.inc"

import { ttm_geo_000DF4 } from "./slide_exit_podium/geo.inc"
import { ttm_geo_000710 } from "./star_cage/geo.inc"
import { ttm_geo_000D4C } from "./yellow_smiley/geo.inc"
import { ttm_geo_000D84 } from "./star_smiley/geo.inc"

import { ALL_ACTS, ACT_1, ACT_2 } from "../../include/model_ids"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_TTM_ROLLING_LOG,     /*pos*/  4360,  -1722,   4001,  /*angle*/ 0,   48,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvTtmRollingLog'),
    RETURN(),
];

const script_func_local_2 = [
    //OBJECT(/*model*/ MODEL_NONE,                /*pos*/ -1639,   1146,  -1742,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvTtmBowlingBallSpawner'), Causes issues
    OBJECT(/*model*/ MODEL_NONE,                /*pos*/  3295,  -3692,   2928,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvWaterfallSoundLoop'),
    OBJECT(/*model*/ MODEL_NONE,                /*pos*/  2004,  -1580,   1283,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvWaterfallSoundLoop'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2077,  -1023,  -1969,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2500,  -1023,  -2157,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2048,  -1023,  -2307,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2351,  -1023,  -2416,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2400,  -2559,  -2185,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -1435,  -2559,  -3118,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -1677,  -2559,  -3507,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -1869,  -2559,  -2704,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_DL_MONTY_MOLE_HOLE,  /*pos*/ -2525,  -2559,  -2626,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMoleHole'),
    OBJECT(/*model*/ MODEL_MONTY_MOLE,          /*pos*/     0,      0,      0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMontyMole'),
    OBJECT(/*model*/ MODEL_MONTY_MOLE,          /*pos*/     0,      0,      0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvMontyMole'),
    OBJECT(/*model*/ MODEL_NONE,                /*pos*/  3625,    560,    165,  /*angle*/ 0,  330,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvCloud'),
    OBJECT_WITH_ACTS(/*model*/ MODEL_UKIKI,               /*pos*/   729,   2307,    335,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvUkiki',        /*acts*/ ACT_2),
    OBJECT_WITH_ACTS(/*model*/ MODEL_UKIKI,               /*pos*/  1992,  -1548,   2944,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvUkiki',        /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,            /*pos*/  1200,   2600,    150,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStar',               /*acts*/ ACT_1),
    OBJECT_WITH_ACTS(/*model*/ MODEL_TTM_STAR_CAGE,   /*pos*/  2496,   1670,   1492,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvUkikiCage',          /*acts*/ ACT_2),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,            /*pos*/ -3250,  -2500,  -3700,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvHiddenRedCoinStar',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,            /*pos*/ -2900,  -2700,   3650,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvStar',               /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,            /*pos*/  1800,   1200,   1050,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvStar',               /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,            /*pos*/  7300,  -3100,   1300,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',               /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT(/*model*/ MODEL_TTM_BLUE_SMILEY,    /*pos*/  4389,   3620,    624,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_YELLOW_SMILEY,  /*pos*/ -1251,   2493,   2224,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_STAR_SMILEY,    /*pos*/ -2547,   1365,   -520,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_MOON_SMILEY,    /*pos*/  -324,    989,  -4090,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    RETURN(),
];

const script_func_local_5 = [
    OBJECT(/*model*/ MODEL_TTM_BLUE_SMILEY,    /*pos*/  7867,   -959,  -6085,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_BLUE_SMILEY,    /*pos*/ -5241,   5329,   9466,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_YELLOW_SMILEY,  /*pos*/ -1869,  -5311,   7358,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_STAR_SMILEY,    /*pos*/ -9095,   4262,   5348,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_MOON_SMILEY,    /*pos*/ -8477,    730,  -7122,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_MOON_SMILEY,    /*pos*/  6160,  -6076,   7861,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    RETURN(),
];

const script_func_local_6 = [
    OBJECT(/*model*/ MODEL_TTM_YELLOW_SMILEY,  /*pos*/  5157,   1974,  -8292,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_STAR_SMILEY,    /*pos*/ 11106,   2588,    381,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_TTM_MOON_SMILEY,    /*pos*/    37,   1974,  -1124,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    RETURN(),
];

const script_func_local_7 = [
    RETURN(),
];

export const level_ttm_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_7),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_SLIDE_EXIT_PODIUM,  ttm_geo_000DF4),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_ROLLING_LOG,        ttm_geo_000730),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_STAR_CAGE,         ttm_geo_000710),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_BLUE_SMILEY,        ttm_geo_000D14),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_YELLOW_SMILEY,      ttm_geo_000D4C),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_STAR_SMILEY,        ttm_geo_000D84),
    LOAD_MODEL_FROM_GEO(MODEL_TTM_MOON_SMILEY,        ttm_geo_000DBC),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,      ttm_geo_000748),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_04,      ttm_geo_000778),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_05,      ttm_geo_0007A8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_06,      ttm_geo_0007D8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_07,      ttm_geo_000808),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_08,      ttm_geo_000830),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_09,      ttm_geo_000858),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0A,      ttm_geo_000880),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0B,      ttm_geo_0008A8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0C,      ttm_geo_0008D0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0D,      ttm_geo_0008F8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0F,      ttm_geo_000920),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_10,      ttm_geo_000948),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_11,      ttm_geo_000970),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_12,      ttm_geo_000990),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_13,      ttm_geo_0009C0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_14,      ttm_geo_0009F0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_15,      ttm_geo_000A18),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_16,      ttm_geo_000A40),

    AREA(/*index*/ 1,  ttm_geo_000A70),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/   102,  -3332,   5734,  /*angle*/ 0,    45,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -2447,  -2457,   3952,  /*angle*/ 0,  -105,  0,  /*behParam*/ 0x00140000,  /*beh*/ 'bhvAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  2267,  -3006,  -3788,  /*angle*/ 0,   148,  0,  /*behParam*/ 0x00150000,  /*beh*/ 'bhvFadingWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  -557,  -3448,  -4146,  /*angle*/ 0,  -168,  0,  /*behParam*/ 0x00160000,  /*beh*/ 'bhvFadingWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x14,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x01,  /*destNode*/ 0x14,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x15,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x01,  /*destNode*/ 0x16,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x16,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x01,  /*destNode*/ 0x15,  /*flags*/ WARP_NO_CHECKPOINT),
        PAINTING_WARP_NODE(/*id*/ 0x00,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_CHECKPOINT),
        PAINTING_WARP_NODE(/*id*/ 0x01,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_CHECKPOINT),
        PAINTING_WARP_NODE(/*id*/ 0x02,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        TERRAIN(/*terrainData*/ ttm_seg7_area_1_collision),
        MACRO_OBJECTS(/*objList*/ ttm_seg7_area_1_macro_objs), //Bob-ombs aren't ready for TTM yet, they crash the game in certain situations, for example, them walking down a steep hill crashes the game, there is also a mystery Bob-omb that is at the death barrier that also crashes the game. I also commented out the goomba spawner at the beginning of the level because if Goombas enter the water the game also crashes.
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_GRASS),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    AREA(/*index*/ 2,  ttm_geo_000B5C),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 7000,  5381,  6750,  /*angle*/ 0,  225,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_4),
        TERRAIN(/*terrainData*/ ttm_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ ttm_seg7_area_2_macro_objs),
        INSTANT_WARP(/*index*/ 2,  /*destArea*/ 3,  /*displace*/ 10240,  7168,  10240),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0001,  /*seq*/ SEQ_LEVEL_SLIDE),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_SLIDE),
    END_AREA(),

    AREA(/*index*/ 3,  ttm_geo_000BEC),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_5),
        TERRAIN(/*terrainData*/ ttm_seg7_area_3_collision),
        MACRO_OBJECTS(/*objList*/ ttm_seg7_area_3_macro_objs),
        INSTANT_WARP(/*index*/ 3,  /*destArea*/ 4,  /*displace*/ -11264,  13312,  3072),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0001,  /*seq*/ SEQ_LEVEL_SLIDE),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_SLIDE),
    END_AREA(),

    AREA(/*index*/ 4,  ttm_geo_000C84),
        OBJECT(/*model*/ MODEL_TTM_SLIDE_EXIT_PODIUM,  /*pos*/ -7285,  -1866,  -4812,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvExitPodiumWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_TTM,  /*destArea*/ 0x01,  /*destNode*/ 0x14,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_6),
        JUMP_LINK(script_func_local_7),
        TERRAIN(/*terrainData*/ ttm_seg7_area_4_collision),
        MACRO_OBJECTS(/*objList*/ ttm_seg7_area_4_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0001,  /*seq*/ SEQ_LEVEL_SLIDE),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_SLIDE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 45,  /*pos*/ 102,  -4332,  5734),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_ttm_entry = level_ttm_entry

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
