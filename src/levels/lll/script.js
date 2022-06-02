// Lll

import {
    OBJECT, RETURN, OBJECT_WITH_ACTS, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, TERRAIN, MACRO_OBJECTS, SHOW_DIALOG, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA,
    MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_LEVEL_GEOMETRY_03, MODEL_LEVEL_GEOMETRY_04, MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06, MODEL_LEVEL_GEOMETRY_07, MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_0A, MODEL_LEVEL_GEOMETRY_0B, MODEL_LEVEL_GEOMETRY_0C,
    MODEL_LEVEL_GEOMETRY_0D, MODEL_LEVEL_GEOMETRY_0E, MODEL_LLL_DRAWBRIDGE_PART,
    MODEL_LLL_ROTATING_BLOCK_FIRE_BARS, MODEL_LLL_ROTATING_HEXAGONAL_RING,
    MODEL_LLL_SINKING_RECTANGULAR_PLATFORM, MODEL_LLL_SINKING_SQUARE_PLATFORMS,
    MODEL_LLL_TILTING_SQUARE_PLATFORM, MODEL_NONE, MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM,
    MODEL_LLL_SINKING_ROCK_BLOCK, MODEL_LLL_ROLLING_LOG, MODEL_LLL_ROTATING_HEXAGONAL_PLATFORM,
    MODEL_BULLY_BOSS, MODEL_BULLY, MODEL_EXCLAMATION_BOX, MODEL_STAR,
    MODEL_LLL_VOLCANO_FALLING_TRAP, MODEL_CHECKERBOARD_PLATFORM, MODEL_MARIO,
    MODEL_LLL_BOWSER_PIECE_1, MODEL_LLL_BOWSER_PIECE_2, MODEL_LLL_BOWSER_PIECE_3,
    MODEL_LLL_BOWSER_PIECE_4, MODEL_LLL_BOWSER_PIECE_5, MODEL_LLL_BOWSER_PIECE_6,
    MODEL_LLL_BOWSER_PIECE_7, MODEL_LLL_BOWSER_PIECE_8, MODEL_LLL_BOWSER_PIECE_9,
    MODEL_LLL_BOWSER_PIECE_10, MODEL_LLL_BOWSER_PIECE_11, MODEL_LLL_BOWSER_PIECE_12,
    MODEL_LLL_BOWSER_PIECE_13, MODEL_LLL_BOWSER_PIECE_14, MODEL_LLL_WOOD_BRIDGE,
    MODEL_LLL_LARGE_WOOD_BRIDGE, MODEL_LLL_FALLING_PLATFORM, MODEL_LLL_LARGE_FALLING_PLATFORM
} from "../../include/model_ids"

import {
    script_func_global_1, script_func_global_3, script_func_global_18
} from "../global_scripts"

import { lll_geo_0009E0 } from "./areas/1/4/geo.inc"

import { lll_geo_0009F8 } from "./areas/1/5/geo.inc"

import { lll_geo_000A10 } from "./areas/1/6/geo.inc"

import { lll_geo_000A28 } from "./areas/1/7/geo.inc"

import { lll_geo_000A40 } from "./areas/1/8/geo.inc"

import { lll_geo_000A60 } from "./areas/1/9/geo.inc"

import { lll_geo_000A90 } from "./areas/1/11/geo.inc"

import { lll_geo_000AA8 } from "./areas/1/12/geo.inc"

import { lll_geo_000AC0 } from "./areas/1/13/geo.inc"

import { lll_geo_000AD8 } from "./areas/1/14/geo.inc"

import { lll_geo_000AF0 } from "./areas/1/15/geo.inc"

import { lll_geo_000B20 } from "./drawbridge_part/geo.inc"

import { lll_geo_000B38 } from "./rotating_block_fire_bars/geo.inc"

import { lll_geo_000BB0 } from "./rotating_hexagonal_ring/geo.inc"

import {
    lll_geo_000C10, lll_geo_000C30, lll_geo_000C50, lll_geo_000C70, lll_geo_000C90,
    lll_geo_000CB0, lll_geo_000CD0, lll_geo_000CF0, lll_geo_000D10, lll_geo_000D30,
    lll_geo_000D50, lll_geo_000D70, lll_geo_000D90, lll_geo_000DB0
} from "./puzzle_piece/geo.inc"

import { lll_geo_000B08 } from "./moving_octagonal_mesh_platform/geo.inc"

import { lll_geo_000DE8 } from "./rolling_log/geo.inc"

import { lll_geo_000A78 } from "./areas/1/10/geo.inc"

import { lll_geo_000B80 } from "./collapsing_wooden_platform/geo.inc"

import { lll_geo_000B98 } from "./long_wooden_bridge/geo.inc"

import { lll_geo_000E00 } from "./areas/1/geo.inc"

import {
    LEVEL_LLL, LEVEL_CASTLE
} from "../level_defines_constants"

import {
    WARP_NO_CHECKPOINT, WARP_CHECKPOINT
} from "../../engine/LevelCommands"

import { lll_seg7_area_1_collision } from "./areas/1/collision.inc"

import { lll_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import { DIALOG_097 } from "../../text/us/dialogs"

import { SEQ_LEVEL_HOT } from "../../include/seq_ids"

import { TERRAIN_STONE } from "../../include/surface_terrains"

import { lll_geo_000EC0 } from "./areas/2/geo.inc"

import { lll_seg7_area_2_collision } from "./areas/2/collision.inc"

import { lll_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { ACT_1, ACT_2, ACT_3, ACT_4, ACT_5, ACT_6, ALL_ACTS } from "../../include/model_ids"


import { lll_geo_000BC8 } from "./sinking_rectangular_platform/geo.inc"

import { lll_geo_000BE0 } from "./sinking_square_platform/geo.inc"

import { lll_geo_000BF8 } from "./tilting_square_platform/geo.inc"

import { lll_geo_000DD0 } from "./sinking_rock_block/geo.inc"

import { lll_geo_000B50 } from "./wooden_float_small/geo.inc"

import { lll_geo_000B68 } from "./wooden_float_large/geo.inc"

import { lll_geo_000EA8 } from "./volcano_falling_trap/geo.inc"

// Unlike most levels, level geometry objects in LLL are defined as regular objects instead of terrain objects.
const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_03,  /*pos*/  3840,    0,  -5631,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_04,  /*pos*/  4992,    0,   -639,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_05,  /*pos*/  7168,    0,   1408,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_06,  /*pos*/     0,    0,   3712,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_07,  /*pos*/ -3199,    0,   3456,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_08,  /*pos*/ -5119,    0,  -2047,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0A,  /*pos*/     0,    0,      0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0B,  /*pos*/     0,    0,   6272,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0C,  /*pos*/  5632,    0,   1408,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0C,  /*pos*/  2048,    0,   3456,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0C,  /*pos*/ -4607,    0,   3456,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0C,  /*pos*/ -5119,    0,   -511,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0D,  /*pos*/     0,    0,  -2047,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStaticObject'),
    // This behavior differs from the rest in that it actually has collision rather than being purely visual.
    // A likely explanation is that this object was added in after the collision model was made, and they didn't want
    // to redo the collision so they just added a new behavior for it.
    OBJECT(/*model*/ MODEL_LEVEL_GEOMETRY_0E,  /*pos*/ -5115,  300,  -3200,  /*angle*/ 0,   90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllHexagonalMesh'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_LLL_DRAWBRIDGE_PART,                 /*pos*/ -1919,   307,   3648,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllDrawbridgeSpawner'),
    OBJECT(/*model*/ MODEL_LLL_ROTATING_BLOCK_FIRE_BARS,        /*pos*/ -5119,   307,  -4095,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllRotatingBlockWithFireBars'),
    OBJECT(/*model*/ MODEL_LLL_ROTATING_HEXAGONAL_RING,         /*pos*/     0,     0,      0,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllRotatingHexagonalRing'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_RECTANGULAR_PLATFORM,    /*pos*/  3968,     0,   1408,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingRectangularPlatform'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_RECTANGULAR_PLATFORM,    /*pos*/ -5759,     0,   3072,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingRectangularPlatform'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_RECTANGULAR_PLATFORM,    /*pos*/  2816,     0,    512,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingRectangularPlatform'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_RECTANGULAR_PLATFORM,    /*pos*/ -1791,     0,  -4095,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingRectangularPlatform'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_SQUARE_PLATFORMS,        /*pos*/  3840,     0,  -3199,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingSquarePlatforms'),
    OBJECT(/*model*/ MODEL_LLL_TILTING_SQUARE_PLATFORM,         /*pos*/   922,  -153,   2150,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_LLL_TILTING_SQUARE_PLATFORM,         /*pos*/  1741,  -153,   1741,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_LLL_TILTING_SQUARE_PLATFORM,         /*pos*/  1741,  -153,   2560,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_LLL_TILTING_SQUARE_PLATFORM,         /*pos*/  2099,  -153,   -306,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_NONE,                                /*pos*/ -5119,   102,   1024,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllBowserPuzzle'),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM,  /*pos*/  1124,     0,  -4607,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllMovingOctagonalMeshPlatform'),
    OBJECT(/*model*/ MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM,  /*pos*/  7168,     0,   2432,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvLllMovingOctagonalMeshPlatform'),
    OBJECT(/*model*/ MODEL_LLL_SINKING_ROCK_BLOCK,              /*pos*/  7168,     0,   7296,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllSinkingRockBlock'),
    OBJECT(/*model*/ MODEL_LLL_ROLLING_LOG,                     /*pos*/  6144,   307,   6016,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllRollingLog'),
    OBJECT(/*model*/ MODEL_LLL_ROTATING_HEXAGONAL_PLATFORM,     /*pos*/ -5119,     0,  -4095,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllRotatingHexagonalPlatform'),
    OBJECT(/*model*/ MODEL_NONE,                                /*pos*/ -3583,     0,  -4095,  /*angle*/ 0,   0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllFloatingWoodBridge'),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -3199,   307,   3456,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvMrI'),
    OBJECT(/*model*/ MODEL_BULLY_BOSS,       /*pos*/     0,   307,  -4385,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBigBully'),
    OBJECT(/*model*/ MODEL_BULLY_BOSS,       /*pos*/  4046,  2234,  -5521,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvBigBullyWithMinions'),
    OBJECT(/*model*/ MODEL_BULLY,            /*pos*/ -5119,   307,  -2482,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallBully'),
    OBJECT(/*model*/ MODEL_BULLY,            /*pos*/     0,   307,   3712,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallBully'),
    OBJECT(/*model*/ MODEL_BULLY,            /*pos*/  6813,   307,   1613,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallBully'),
    OBJECT(/*model*/ MODEL_BULLY,            /*pos*/  7168,   307,    998,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallBully'),
    OBJECT(/*model*/ MODEL_BULLY,            /*pos*/ -5130,   285,  -1663,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallBully'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/     0,   200,  -2048,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/   500,     2,   5000,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/  -700,     2,   4500,  /*angle*/ 0,   90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -6300,     2,   2625,  /*angle*/ 0,   90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -3280,     2,  -4854,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/  5996,     2,   -390,  /*angle*/ 0,  315,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/  5423,     2,  -1991,  /*angle*/ 0,  315,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/  4921,     2,  -1504,  /*angle*/ 0,   90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBouncingFireball'),
    OBJECT_WITH_ACTS(/*model*/ MODEL_EXCLAMATION_BOX,  /*pos*/  1050,   550,   6200,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00030000,  /*beh*/ 'bhvExclamationBox',  /*acts*/ ACT_5 | ACT_6),
    RETURN(),
];

const script_func_local_5 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,  /*pos*/ -4400,  350,   250,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvHiddenRedCoinStar',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/  3100,  400,  7900,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_6 = [
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/   728,  2606,  -2754,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00380000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/  1043,  2972,  -2679,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x004E0000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/  1078,  3078,  -2269,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00660000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/  1413,  3222,  -2190,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00520000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/   783,  1126,    -47,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00660000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/   662,  2150,    708,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00660000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/  2943,   476,     10,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/ -2759,  2350,  -1108,  /*angle*/ 0,   60,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/ -2472,  2350,  -1605,  /*angle*/ 0,   60,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_LLL_VOLCANO_FALLING_TRAP,      /*pos*/  -485,  1203,   2933,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllVolcanoFallingTrap'),
    OBJECT(/*model*/ MODEL_LLL_ROTATING_BLOCK_FIRE_BARS,  /*pos*/   417,  2150,    583,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvLllRotatingBlockWithFireBars'),
    OBJECT(/*model*/ MODEL_CHECKERBOARD_PLATFORM,         /*pos*/  -764,     0,   1664,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x08A50000,  /*beh*/ 'bhvPlatformOnTrack'),
    OBJECT(/*model*/ MODEL_CHECKERBOARD_PLATFORM,         /*pos*/   184,   980,  -1366,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x08A60000,  /*beh*/ 'bhvPlatformOnTrack'),
    OBJECT(/*model*/ MODEL_NONE,                          /*pos*/   -26,   103,  -2649,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvVolcanoSoundLoop'),
    RETURN(),
];

const script_func_local_7 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 2523,  3850,  -901,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvStar',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 1800,  3400,  1450,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',  /*acts*/ ALL_ACTS),
    RETURN(),
];

export const level_lll_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    JUMP_LINK(script_func_global_3),
    JUMP_LINK(script_func_global_18),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,                   lll_geo_0009E0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_04,                   lll_geo_0009F8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_05,                   lll_geo_000A10),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_06,                   lll_geo_000A28),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_07,                   lll_geo_000A40),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_08,                   lll_geo_000A60),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0A,                   lll_geo_000A90),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0B,                   lll_geo_000AA8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0C,                   lll_geo_000AC0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0D,                   lll_geo_000AD8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0E,                   lll_geo_000AF0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_DRAWBRIDGE_PART,                 lll_geo_000B20),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_ROTATING_BLOCK_FIRE_BARS,        lll_geo_000B38),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_ROTATING_HEXAGONAL_RING,         lll_geo_000BB0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_SINKING_RECTANGULAR_PLATFORM,    lll_geo_000BC8),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_SINKING_SQUARE_PLATFORMS,        lll_geo_000BE0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_TILTING_SQUARE_PLATFORM,         lll_geo_000BF8),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_1,                  lll_geo_000C10),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_2,                  lll_geo_000C30),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_3,                  lll_geo_000C50),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_4,                  lll_geo_000C70),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_5,                  lll_geo_000C90),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_6,                  lll_geo_000CB0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_7,                  lll_geo_000CD0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_8,                  lll_geo_000CF0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_9,                  lll_geo_000D10),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_10,                 lll_geo_000D30),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_11,                 lll_geo_000D50),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_12,                 lll_geo_000D70),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_13,                 lll_geo_000D90),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_BOWSER_PIECE_14,                 lll_geo_000DB0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM,  lll_geo_000B08),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_SINKING_ROCK_BLOCK,              lll_geo_000DD0),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_ROLLING_LOG,                     lll_geo_000DE8),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_ROTATING_HEXAGONAL_PLATFORM,     lll_geo_000A78),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_WOOD_BRIDGE,                     lll_geo_000B50),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_LARGE_WOOD_BRIDGE,               lll_geo_000B68),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_FALLING_PLATFORM,                lll_geo_000B80),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_LARGE_FALLING_PLATFORM,          lll_geo_000B98),
    LOAD_MODEL_FROM_GEO(MODEL_LLL_VOLCANO_FALLING_TRAP,            lll_geo_000EA8),

    AREA(/*index*/ 1,  lll_geo_000E00),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3839,  1154,  6272,  /*angle*/ 0,    90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/     0,   105,     0,  /*angle*/ 0,     0,  0,  /*behParam*/ 0x190B0000,  /*beh*/ 'bhvWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3200,    11,  3456,  /*angle*/ 0,  -100,  0,  /*behParam*/ 0x000C0000,  /*beh*/ 'bhvFadingWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -5888,   154,  6656,  /*angle*/ 0,   100,  0,  /*behParam*/ 0x000D0000,  /*beh*/ 'bhvFadingWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_LLL,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_LLL,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_LLL,  /*destArea*/ 0x01,  /*destNode*/ 0x0D,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0D,  /*destLevel*/ LEVEL_LLL,  /*destArea*/ 0x01,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x32,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x64,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        JUMP_LINK(script_func_local_4),
        JUMP_LINK(script_func_local_5),
        TERRAIN(/*terrainData*/ lll_seg7_area_1_collision),
        MACRO_OBJECTS(/*objList*/ lll_seg7_area_1_macro_objs),
        SHOW_DIALOG(/*index*/ 0x00,  DIALOG_097),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_HOT),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    AREA(/*index*/ 2,  lll_geo_000EC0),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -955,  1103,  -1029,  /*angle*/ 0,  118,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_LLL,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x32,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x64,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_6),
        JUMP_LINK(script_func_local_7),
        TERRAIN(/*terrainData*/ lll_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ lll_seg7_area_2_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0004,  /*seq*/ SEQ_LEVEL_HOT),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 90,  /*pos*/ -3839,  154,  6272),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_lll_entry = level_lll_entry

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
