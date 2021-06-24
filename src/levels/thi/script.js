// Thi

import {
    RETURN, OBJECT_WITH_ACTS, OBJECT, WARP_NODE, INIT_LEVEL, MARIO, JUMP_LINK,
    LOAD_MODEL_FROM_GEO, AREA, TERRAIN, MACRO_OBJECTS, SET_BACKGROUND_MUSIC, TERRAIN_TYPE,
    END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_NONE, MODEL_WIGGLER_HEAD, MODEL_KOOPA_WITH_SHELL, MODEL_GOOMBA, MODEL_PIRANHA_PLANT,
    MODEL_BUBBA, MODEL_THI_HUGE_ISLAND_TOP, MODEL_THI_TINY_ISLAND_TOP, MODEL_THI_WARP_PIPE,
    MODEL_MARIO, MODEL_THI_BUBBLY_TREE, MODEL_LEVEL_GEOMETRY_03
} from "../../include/model_ids"

import {
    LEVEL_THI, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import {
    script_func_global_1, script_func_global_12, script_func_global_15
} from "../global_scripts"

import { thi_geo_0005F0 } from "./areas/1/7/geo.inc"

import {
    thi_geo_0005B0, thi_geo_0005C8
} from "./areas/1/6/geo.inc"

import { thi_geo_000608 } from "./areas/1/geo.inc"

import { thi_seg7_area_1_collision } from "./areas/1/collision.inc"

import { thi_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import {
    SEQ_LEVEL_GRASS, SEQ_LEVEL_UNDERGROUND
} from "../../include/seq_ids"

import { TERRAIN_GRASS } from "../../include/surface_terrains"

import { thi_geo_0006D4 } from "./areas/2/geo.inc"

import { thi_seg7_area_2_collision } from "./areas/2/collision.inc"

import { thi_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { thi_geo_00079C } from "./areas/3/geo.inc"

import { thi_seg7_area_3_collision } from "./areas/3/collision.inc"

import { thi_seg7_area_3_macro_objs } from "./areas/3/macro.inc"

import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { warp_pipe_geo } from "../../actors/warp_pipe/geo.inc"

import { ALL_ACTS, ACT_3 } from "../../include/model_ids"

const script_func_local_1 = [
    RETURN(),
];

const script_func_local_2 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,     /*pos*/     0,  -700,  -4500,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvHiddenStar',           /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,              /*pos*/ -1800,    800,  -1500,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvHiddenRedCoinStar',  /*acts*/ ALL_ACTS),
    OBJECT(/*model*/ MODEL_WIGGLER_HEAD,      /*pos*/    17,   1843,    -62,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvWigglerHead'),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_KOOPA_WITH_SHELL,  /*pos*/ -1900,   -511,   2400,  /*angle*/ 0,  -30,  0,  /*behParam*/ 0x02030000,  /*beh*/ 'bhvKoopa',              /*acts*/ ACT_3),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,              /*pos*/  7400,  -1537,  -6300,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvKoopaRaceEndpoint',  /*acts*/ ACT_3),
    //OBJECT(/*model*/ MODEL_NONE,              /*pos*/ -6556,  -2969,   6565,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvGoombaTripletSpawner'),
    //OBJECT(/*model*/ MODEL_GOOMBA,            /*pos*/  6517,  -2559,   4327,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvGoomba'),
    OBJECT(/*model*/ MODEL_PIRANHA_PLANT,     /*pos*/ -6336,  -2047,  -3861,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvFirePiranhaPlant'),
    OBJECT(/*model*/ MODEL_PIRANHA_PLANT,     /*pos*/ -5740,  -2047,  -6578,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvFirePiranhaPlant'),
    OBJECT(/*model*/ MODEL_PIRANHA_PLANT,     /*pos*/ -6481,  -2047,  -5998,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvFirePiranhaPlant'),
    OBJECT(/*model*/ MODEL_PIRANHA_PLANT,     /*pos*/ -5577,  -2047,  -4961,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvFirePiranhaPlant'),
    OBJECT(/*model*/ MODEL_PIRANHA_PLANT,     /*pos*/ -6865,  -2047,  -4568,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvFirePiranhaPlant'),
    OBJECT(/*model*/ MODEL_NONE,              /*pos*/ -4413,    204,  -2140,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00030000,  /*beh*/ 'bhvThiBowlingBallSpawner'),
    OBJECT(/*model*/ MODEL_BUBBA,             /*pos*/ -6241,  -3300,   -716,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBubba'),
    OBJECT(/*model*/ MODEL_BUBBA,             /*pos*/  1624,  -3300,   8142,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBubba'),
    RETURN(),
];

const script_func_local_5 = [
    OBJECT(/*model*/ MODEL_THI_HUGE_ISLAND_TOP,  /*pos*/     0,  3891,  -1533,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvThiHugeIslandTop'),
    RETURN(),
];

const script_func_local_6 = [
    OBJECT(/*model*/ MODEL_THI_TINY_ISLAND_TOP,  /*pos*/     0,  1167,   -460,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvThiTinyIslandTop'),
    OBJECT(/*model*/ MODEL_NONE,                 /*pos*/ -1382,    80,   -649,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00040000,  /*beh*/ 'bhvThiBowlingBallSpawner'),
    RETURN(),
];

const script_func_local_7 = [
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/  6656,  -1536,  -5632,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00320000,  /*beh*/ 'bhvWarpPipe'),
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/ -5888,  -2048,  -5888,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00330000,  /*beh*/ 'bhvWarpPipe'),
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/ -3072,    512,  -3840,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00340000,  /*beh*/ 'bhvWarpPipe'),
    WARP_NODE(/*id*/ 0x32,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x32,  /*flags*/ WARP_NO_CHECKPOINT),
    WARP_NODE(/*id*/ 0x33,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x33,  /*flags*/ WARP_NO_CHECKPOINT),
    WARP_NODE(/*id*/ 0x34,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
    RETURN(),
];

const script_func_local_8 = [
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/  1997,  -461,  -1690,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00320000,  /*beh*/ 'bhvWarpPipe'),
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/ -1766,  -614,  -1766,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00330000,  /*beh*/ 'bhvWarpPipe'),
    OBJECT(/*model*/ MODEL_THI_WARP_PIPE,  /*pos*/  -922,   154,  -1152,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00340000,  /*beh*/ 'bhvWarpPipe'),
    WARP_NODE(/*id*/ 0x32,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x32,  /*flags*/ WARP_NO_CHECKPOINT),
    WARP_NODE(/*id*/ 0x33,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x33,  /*flags*/ WARP_NO_CHECKPOINT),
    WARP_NODE(/*id*/ 0x34,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
    RETURN(),
];

export const level_thi_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    JUMP_LINK(script_func_global_12),
    JUMP_LINK(script_func_global_15),
    LOAD_MODEL_FROM_GEO(MODEL_THI_BUBBLY_TREE,      bubbly_tree_geo),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,    thi_geo_0005F0),
    LOAD_MODEL_FROM_GEO(MODEL_THI_WARP_PIPE,        warp_pipe_geo),
    LOAD_MODEL_FROM_GEO(MODEL_THI_HUGE_ISLAND_TOP,  thi_geo_0005B0),
    LOAD_MODEL_FROM_GEO(MODEL_THI_TINY_ISLAND_TOP,  thi_geo_0005C8),

    AREA(/*index*/ 1,  thi_geo_000608),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -7372,  -1969,   7373,  /*angle*/ 0,  149,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/   410,   -512,    922,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvInstantActiveWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/   410,   -512,    717,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x050C0000,  /*beh*/ 'bhvWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/     0,   3170,  -1570,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x0A0D0000,  /*beh*/ 'bhvWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x03,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0D,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x03,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x37,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x69,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_7),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_5),
        JUMP_LINK(script_func_local_4),
        TERRAIN(/*terrainData*/ thi_seg7_area_1_collision),
        MACRO_OBJECTS(/*objList*/ thi_seg7_area_1_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_GRASS),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),

    AREA(/*index*/ 2,  thi_geo_0006D4),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -2211,   110,   2212,  /*angle*/ 0,   149,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/   280,  -767,  -4180,  /*angle*/ 0,     0,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvFadingWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -1638,     0,  -1988,  /*angle*/ 0,  -126,  0,  /*behParam*/ 0x000C0000,  /*beh*/ 'bhvFadingWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x02,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x33,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x65,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_8),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_6),
        TERRAIN(/*terrainData*/ thi_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ thi_seg7_area_2_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_GRASS),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),

    AREA(/*index*/ 3,  thi_geo_00079C),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 512,  1024,  2150,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvInstantActiveWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/   0,  3277,     0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 512,  1024,  2355,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x050C0000,  /*beh*/ 'bhvWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x03,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x03,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_THI,  /*destArea*/ 0x01,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x37,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x69,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_3),
        TERRAIN(/*terrainData*/ thi_seg7_area_3_collision),
        MACRO_OBJECTS(/*objList*/ thi_seg7_area_3_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0004,  /*seq*/ SEQ_LEVEL_UNDERGROUND),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 149,  /*pos*/ -7372,  -2969,  7373),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_thi_entry = level_thi_entry

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
