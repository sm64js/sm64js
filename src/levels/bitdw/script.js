// Bitdw

import {
    OBJECT, RETURN, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA, WARP_NODE, TERRAIN,
    MACRO_OBJECTS, SHOW_DIALOG, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL,
    CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_BITDW_SQUARE_PLATFORM, MODEL_BITDW_SEESAW_PLATFORM, MODEL_BITDW_SLIDING_PLATFORM,
    MODEL_BITDW_FERRIS_WHEEL_AXLE, MODEL_BITDW_STAIRCASE, MODEL_PURPLE_SWITCH, MODEL_NONE,
    MODEL_MARIO, MODEL_LEVEL_GEOMETRY_03, MODEL_LEVEL_GEOMETRY_04, MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06, MODEL_LEVEL_GEOMETRY_07, MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_09, MODEL_LEVEL_GEOMETRY_0A, MODEL_LEVEL_GEOMETRY_0B,
    MODEL_LEVEL_GEOMETRY_0C, MODEL_LEVEL_GEOMETRY_0D, MODEL_LEVEL_GEOMETRY_0E,
    MODEL_LEVEL_GEOMETRY_0F, MODEL_LEVEL_GEOMETRY_10, MODEL_LEVEL_GEOMETRY_11,
    MODEL_BITDW_WARP_PIPE, MODEL_BITDW_BLUE_PLATFORM, MODEL_BITDW_STAIRCASE_FRAME4,
    MODEL_BITDW_STAIRCASE_FRAME3, MODEL_BITDW_STAIRCASE_FRAME2, MODEL_BITDW_STAIRCASE_FRAME1
} from "../../include/model_ids"

import {
    script_func_global_12, script_func_global_18, script_func_global_1
} from "../global_scripts"

import { geo_bitdw_0003C0 } from "./areas/1/starting_platform/geo.inc"
import { geo_bitdw_0003D8 } from "./areas/1/large_platform/geo.inc"
import { geo_bitdw_0003F0 } from "./areas/1/wooden_bridge_and_fences/geo.inc"
import { geo_bitdw_000408 } from "./areas/1/quartzy_path_1/geo.inc"
import { geo_bitdw_000420 } from "./areas/1/quartzy_path_2/geo.inc"
import { geo_bitdw_000438 } from "./areas/1/quartzy_path_fences/geo.inc"
import { geo_bitdw_000450 } from "./areas/1/octogonal_platform/geo.inc"
import { geo_bitdw_000468 } from "./areas/1/platform_with_hill/geo.inc"
import { geo_bitdw_000480 } from "./areas/1/wooden_platform/geo.inc"
import { geo_bitdw_000498 } from "./areas/1/platforms_and_tilting/geo.inc"
import { geo_bitdw_0004B0 } from "./areas/1/platforms_and_tilting_2/geo.inc"
import { geo_bitdw_0004C8 } from "./areas/1/quartz_crystal/geo.inc"
import { geo_bitdw_0004E0 } from "./areas/1/staircase_slope_and_platform/geo.inc"
import { geo_bitdw_0004F8 } from "./areas/1/track_for_pyramid_platforms/geo.inc"
import { geo_bitdw_000510 } from "./areas/1/narrow_path_platform/geo.inc"
import { geo_bitdw_000558 } from "./square_platform/geo.inc"
import { geo_bitdw_000540 } from "./seesaw_platform/geo.inc"
import { geo_bitdw_000528 } from "./sliding_platform/geo.inc"
import { geo_bitdw_000570 } from "./ferris_wheel_axle/geo.inc"
import { geo_bitdw_000588 } from "./ferris_platform/geo.inc"
import { geo_bitdw_0005A0 } from "./collapsing_stairs_1/geo.inc"
import { geo_bitdw_0005B8 } from "./collapsing_stairs_2/geo.inc"
import { geo_bitdw_0005D0 } from "./collapsing_stairs_3/geo.inc"
import { geo_bitdw_0005E8 } from "./collapsing_stairs_4/geo.inc"
import { geo_bitdw_000600 } from "./collapsing_stairs_5/geo.inc"
import { geo_bitdw_000618 } from "./areas/1/geo.inc"
import { warp_pipe_geo } from "../../actors/warp_pipe/geo.inc"

import {
    LEVEL_BITDW, LEVEL_BOWSER_1, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"
import { bitdw_seg7_collision_level } from "./areas/1/collision.inc"
import { bitdw_seg7_macro_objs } from "./areas/1/macro.inc"
import { DIALOG_090 } from "../../text/us/dialogs"
import { SEQ_LEVEL_KOOPA_ROAD } from "../../include/seq_ids"
import { TERRAIN_STONE } from "../../include/surface_terrains"


const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -1966,  -3154,   3586,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00000000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -1352,  -3154,   4200,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00020000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -2963,   1017,  -2464,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00000000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -2349,   1017,  -1849,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00020000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -2349,   1017,  -1235,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00000000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SQUARE_PLATFORM,    /*pos*/ -1735,   1017,   -621,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00020000,  /*beh*/ 'bhvSquarishPathMoving'),
    OBJECT(/*model*/ MODEL_BITDW_SEESAW_PLATFORM,    /*pos*/  1491,   1273,    512,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSeesawPlatform'),
    OBJECT(/*model*/ MODEL_BITDW_SEESAW_PLATFORM,    /*pos*/  -147,    894,    512,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSeesawPlatform'),
    OBJECT(/*model*/ MODEL_BITDW_SLIDING_PLATFORM,   /*pos*/ -5728,    819,  -2151,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x03CE0000,  /*beh*/ 'bhvSlidingPlatform2'),
    OBJECT(/*model*/ MODEL_BITDW_FERRIS_WHEEL_AXLE,  /*pos*/  -204,  -1924,   3381,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00010000,  /*beh*/ 'bhvFerrisWheelAxle'),
    OBJECT(/*model*/ MODEL_BITDW_STAIRCASE,          /*pos*/  5279,   1740,     -6,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00010000,  /*beh*/ 'bhvAnimatesOnFloorSwitchPress'),
    OBJECT(/*model*/ MODEL_PURPLE_SWITCH,            /*pos*/  3922,   1740,     -7,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x00000000,  /*beh*/ 'bhvFloorSwitchAnimatesObject'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3092,  -2795,  2842,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/  2463,  -2386,  2844,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlamethrower'),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/  7180,   3000,     0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserCourseRedCoinStar'),
    RETURN(),
];

export const level_bitdw_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_12),
    JUMP_LINK(script_func_global_18),
    JUMP_LINK(script_func_global_1),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,        geo_bitdw_0003C0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_04,        geo_bitdw_0003D8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_05,        geo_bitdw_0003F0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_06,        geo_bitdw_000408),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_07,        geo_bitdw_000420),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_08,        geo_bitdw_000438),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_09,        geo_bitdw_000450),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0A,        geo_bitdw_000468),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0B,        geo_bitdw_000480),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0C,        geo_bitdw_000498),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0D,        geo_bitdw_0004B0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0E,        geo_bitdw_0004C8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_0F,        geo_bitdw_0004E0),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_10,        geo_bitdw_0004F8),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_11,        geo_bitdw_000510),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_WARP_PIPE,          warp_pipe_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_SQUARE_PLATFORM,    geo_bitdw_000558),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_SEESAW_PLATFORM,    geo_bitdw_000540),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_SLIDING_PLATFORM,   geo_bitdw_000528),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_FERRIS_WHEEL_AXLE,  geo_bitdw_000570),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_BLUE_PLATFORM,      geo_bitdw_000588),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_STAIRCASE_FRAME4,   geo_bitdw_0005A0),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_STAIRCASE_FRAME3,   geo_bitdw_0005B8),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_STAIRCASE_FRAME2,   geo_bitdw_0005D0),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_STAIRCASE_FRAME1,   geo_bitdw_0005E8),
    LOAD_MODEL_FROM_GEO(MODEL_BITDW_STAIRCASE,          geo_bitdw_000600),

    AREA(/*index*/ 1,  geo_bitdw_000618),
        OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -7443,  -2153,  3886,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        OBJECT(/*model*/ MODEL_BITDW_WARP_PIPE,  /*pos*/  6816,   2860,    -7,  /*angle*/ 0,  0,  0,   /*behParam*/ 0x000B0000,  /*beh*/ 'bhvWarpPipe'),
        OBJECT(/*model*/ MODEL_NONE,             /*pos*/  5910,   3500,    -7,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000C0000,  /*beh*/ 'bhvDeathWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_BITDW,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_BOWSER_1,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_BITDW,  /*destArea*/ 0x01,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x25,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        TERRAIN(/*terrainData*/ bitdw_seg7_collision_level),
        MACRO_OBJECTS(/*objList*/ bitdw_seg7_macro_objs),
        SHOW_DIALOG(/*index*/ 0x00,  DIALOG_090),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_KOOPA_ROAD),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 90,  /*pos*/ -7443,  -3153,  3886),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_bitdw_entry = level_bitdw_entry

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
