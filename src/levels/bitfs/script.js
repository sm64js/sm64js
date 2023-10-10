// Bitfs

import {
    OBJECT, RETURN, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA, WARP_NODE, TERRAIN,
    MACRO_OBJECTS, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP,
    CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_BITFS_PLATFORM_ON_TRACK, MODEL_BITFS_TILTING_SQUARE_PLATFORM,
    MODEL_BITFS_SINKING_PLATFORMS, MODEL_BITFS_SINKING_CAGE_PLATFORM, MODEL_BITFS_ELEVATOR,
    MODEL_BITFS_STRETCHING_PLATFORMS, MODEL_BITFS_SEESAW_PLATFORM,
    MODEL_BITFS_MOVING_SQUARE_PLATFORM, MODEL_BITFS_SLIDING_PLATFORM,
    MODEL_BITFS_TUMBLING_PLATFORM, MODEL_NONE, MODEL_MARIO, MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04, MODEL_LEVEL_GEOMETRY_05, MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07, MODEL_LEVEL_GEOMETRY_08, MODEL_LEVEL_GEOMETRY_09,
    MODEL_LEVEL_GEOMETRY_0A, MODEL_LEVEL_GEOMETRY_0B, MODEL_LEVEL_GEOMETRY_0C,
    MODEL_LEVEL_GEOMETRY_0D, MODEL_LEVEL_GEOMETRY_0E, MODEL_LEVEL_GEOMETRY_0F,
    MODEL_LEVEL_GEOMETRY_10, MODEL_LEVEL_GEOMETRY_11, MODEL_LEVEL_GEOMETRY_12,
    MODEL_LEVEL_GEOMETRY_13, MODEL_LEVEL_GEOMETRY_14, MODEL_LEVEL_GEOMETRY_15,
    MODEL_BITFS_BLUE_POLE, MODEL_BITFS_TUMBLING_PLATFORM_PART
} from "../../include/model_ids"

import {
    script_func_global_3, script_func_global_18, script_func_global_1
} from "../global_scripts"

import { bitfs_geo_0004B0 } from "./areas/1/2/geo.inc"

import { bitfs_geo_0004C8 } from "./areas/1/3/geo.inc"

import { bitfs_geo_0004E0 } from "./areas/1/4/geo.inc"

import { bitfs_geo_0004F8 } from "./areas/1/5/geo.inc"

import { bitfs_geo_000510 } from "./areas/1/6/geo.inc"

import { bitfs_geo_000528 } from "./areas/1/7/geo.inc"

import { bitfs_geo_000540 } from "./areas/1/8/geo.inc"

import { bitfs_geo_000558 } from "./areas/1/9/geo.inc"

import { bitfs_geo_000570 } from "./areas/1/10/geo.inc"

import { bitfs_geo_000588 } from "./areas/1/11/geo.inc"

import { bitfs_geo_0005A0 } from "./areas/1/12/geo.inc"

import { bitfs_geo_0005B8 } from "./areas/1/13/geo.inc"

import { bitfs_geo_0005D0 } from "./areas/1/14/geo.inc"

import { bitfs_geo_0005E8 } from "./areas/1/15/geo.inc"

import { bitfs_geo_000600 } from "./areas/1/16/geo.inc"

import { bitfs_geo_000618 } from "./areas/1/17/geo.inc"

import { bitfs_geo_000630 } from "./areas/1/18/geo.inc"

import { bitfs_geo_000648 } from "./areas/1/19/geo.inc"

import { bitfs_geo_000660 } from "./areas/1/20/geo.inc"

import { bitfs_geo_000758 } from "./platform_on_track/geo.inc"

import { bitfs_geo_000678 } from "./elevator/geo.inc"

import { bitfs_geo_000728 } from "./moving_square_platform/geo.inc"

import { bitfs_geo_0007A0 } from "./areas/1/geo.inc"

import {
    LEVEL_BITFS, LEVEL_BOWSER_2, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { bitfs_seg7_collision_level } from "./areas/1/collision.inc"

import { bitfs_seg7_macro_objs } from "./areas/1/macro.inc"

import { SEQ_LEVEL_KOOPA_ROAD } from "../../include/seq_ids"

import { TERRAIN_STONE } from "../../include/surface_terrains"

import { bitfs_geo_0006C0 } from "./tilting_square_platform/geo.inc"
import { bitfs_geo_000770 } from "./sinking_platforms/geo.inc"
import { bitfs_geo_0006A8 } from "./sinking_cage_pole/geo.inc"
import { bitfs_geo_000690 } from "./sinking_cage_platform/geo.inc"
import { bitfs_geo_000708 } from "./stretching_platform/geo.inc"
import { bitfs_geo_000788 } from "./seesaw_platform/geo.inc"
import { bitfs_geo_000740 } from "./sliding_platform/geo.inc"
import { bitfs_geo_0006D8 } from "./tumbling_platform_near/geo.inc"
import { bitfs_geo_0006F0 } from "./tumbling_platform_far/geo.inc"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_BITFS_PLATFORM_ON_TRACK,        /*pos*/ -5733,  -3071,     0,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x07330000,  /*beh*/ 'bhvPlatformOnTrack'),
    OBJECT(/*model*/ MODEL_BITFS_TILTING_SQUARE_PLATFORM,  /*pos*/ -1945,  -3225,  -715,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_BITFS_TILTING_SQUARE_PLATFORM,  /*pos*/ -2866,  -3225,  -715,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsTiltingInvertedPyramid'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_PLATFORMS,        /*pos*/ -1381,   3487,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsSinkingPlatforms'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_PLATFORMS,        /*pos*/  1126,  -3065,   307,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsSinkingPlatforms'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_PLATFORMS,        /*pos*/ -3225,   3487,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsSinkingPlatforms'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_CAGE_PLATFORM,    /*pos*/  6605,  -3071,   266,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvBitfsSinkingCagePlatform'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_CAGE_PLATFORM,    /*pos*/  1843,   3584,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00010000,  /*beh*/ 'bhvBitfsSinkingCagePlatform'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_CAGE_PLATFORM,    /*pos*/   614,   3584,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00010000,  /*beh*/ 'bhvBitfsSinkingCagePlatform'),
    OBJECT(/*model*/ MODEL_BITFS_SINKING_CAGE_PLATFORM,    /*pos*/  3072,   3584,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00010000,  /*beh*/ 'bhvBitfsSinkingCagePlatform'),
    OBJECT(/*model*/ MODEL_BITFS_ELEVATOR,                 /*pos*/  2867,  -1279,   307,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x029F0000,  /*beh*/ 'bhvActivatedBackAndForthPlatform'),
    OBJECT(/*model*/ MODEL_BITFS_STRETCHING_PLATFORMS,     /*pos*/ -5836,    410,   300,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00000000,  /*beh*/ 'bhvSquishablePlatform'),
    OBJECT(/*model*/ MODEL_BITFS_SEESAW_PLATFORM,          /*pos*/  4454,  -2226,   266,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00040000,  /*beh*/ 'bhvSeesawPlatform'),
    OBJECT(/*model*/ MODEL_BITFS_SEESAW_PLATFORM,          /*pos*/  5786,  -2380,   266,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00040000,  /*beh*/ 'bhvSeesawPlatform'),
    OBJECT(/*model*/ MODEL_BITFS_MOVING_SQUARE_PLATFORM,   /*pos*/ -3890,    102,   617,  /*angle*/ 0,  90,  0,   /*behParam*/ 0x010C0000,  /*beh*/ 'bhvSlidingPlatform2'),
    OBJECT(/*model*/ MODEL_BITFS_MOVING_SQUARE_PLATFORM,   /*pos*/ -3276,    102,     2,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x010C0000,  /*beh*/ 'bhvSlidingPlatform2'),
    OBJECT(/*model*/ MODEL_BITFS_SLIDING_PLATFORM,         /*pos*/  2103,    198,   312,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x019F0000,  /*beh*/ 'bhvSlidingPlatform2'),
    OBJECT(/*model*/ MODEL_BITFS_TUMBLING_PLATFORM,        /*pos*/  4979,   4250,    96,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00030000,  /*beh*/ 'bhvTumblingBridge'),
    OBJECT(/*model*/ MODEL_NONE,                           /*pos*/  3890,  -2043,   266,  /*angle*/ 0,  0,  0,    /*behParam*/ 0x00520000,  /*beh*/ 'bhvPoleGrabbing'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3226,  3584,  -822,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -1382,  3584,  -822,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/  1229,   307,  -412,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/  1200,  5700,   160,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserCourseRedCoinStar'),
    RETURN(),
];

export const level_bitfs_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_3),
    JUMP_LINK(script_func_global_18),
    JUMP_LINK(script_func_global_1),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,              bitfs_geo_0004B0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_04,              bitfs_geo_0004C8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_05,              bitfs_geo_0004E0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_06,              bitfs_geo_0004F8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_07,              bitfs_geo_000510),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_08,              bitfs_geo_000528),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_09,              bitfs_geo_000540),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0A,              bitfs_geo_000558),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0B,              bitfs_geo_000570),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0C,              bitfs_geo_000588),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0D,              bitfs_geo_0005A0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0E,              bitfs_geo_0005B8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0F,              bitfs_geo_0005D0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_10,              bitfs_geo_0005E8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_11,              bitfs_geo_000600),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_12,              bitfs_geo_000618),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_13,              bitfs_geo_000630),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_14,              bitfs_geo_000648),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_15,              bitfs_geo_000660),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_PLATFORM_ON_TRACK,        bitfs_geo_000758),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_TILTING_SQUARE_PLATFORM,  bitfs_geo_0006C0),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_SINKING_PLATFORMS,        bitfs_geo_000770),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_BLUE_POLE,                bitfs_geo_0006A8),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_SINKING_CAGE_PLATFORM,    bitfs_geo_000690),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_ELEVATOR,                 bitfs_geo_000678),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_STRETCHING_PLATFORMS,     bitfs_geo_000708),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_SEESAW_PLATFORM,          bitfs_geo_000788),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_MOVING_SQUARE_PLATFORM,   bitfs_geo_000728),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_SLIDING_PLATFORM,         bitfs_geo_000740),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_TUMBLING_PLATFORM_PART,   bitfs_geo_0006D8),
    LOAD_MODEL_FROM_GEO(MODEL_BITFS_TUMBLING_PLATFORM,        bitfs_geo_0006F0),

    AREA(/*index*/ 1,  bitfs_geo_0007A0),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -7577,  -1764,   0,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  6735,   3681,  99,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x140B0000,  /*beh*/ 'bhvWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  5886,   5000,  99,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000C0000,  /*beh*/ 'bhvDeathWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_BITFS,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_BOWSER_2,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_BITFS,  /*destArea*/ 0x01,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x68,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        TERRAIN(/*terrainData*/ bitfs_seg7_collision_level),
        MACRO_OBJECTS(/*objList*/ bitfs_seg7_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_KOOPA_ROAD),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 90,  /*pos*/ -7577,  -2764,  0),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_bitfs_entry = level_bitfs_entry

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
