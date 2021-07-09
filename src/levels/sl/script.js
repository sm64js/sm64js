// Sl

import {
    OBJECT_WITH_ACTS, RETURN, OBJECT, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, TERRAIN, MACRO_OBJECTS, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS,
    CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_STAR, MODEL_NONE, MODEL_PENGUIN, MODEL_BIG_CHILL_BULLY, MODEL_MR_BLIZZARD_HIDDEN,
    MODEL_MARIO, MODEL_SL_SNOW_TRIANGLE, MODEL_SL_CRACKED_ICE, MODEL_SL_CRACKED_ICE_CHUNK,
    MODEL_SL_SNOW_TREE
} from "../../include/model_ids"

import {
    script_func_global_1, /*script_func_global_8,*/ script_func_global_17
} from "../global_scripts"

import { sl_geo_0003A8 } from "./areas/1/geo.inc"

import {
    LEVEL_SL, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { sl_seg7_area_1_collision } from "./areas/1/collision.inc"

import { sl_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import {
    SEQ_LEVEL_SNOW, SEQ_LEVEL_UNDERGROUND
} from "../../include/seq_ids"

import { TERRAIN_SNOW } from "../../include/surface_terrains"

import { snow_tree_geo } from "../../actors/tree/geo.inc"
import { sl_geo_000484 } from "./areas/2/geo.inc"

import { sl_seg7_area_2_collision } from "./areas/2/collision.inc"

import { sl_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { ALL_ACTS } from "../../include/model_ids"

const script_func_local_1 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/  700,  4500,   690,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 4350,  1350,  4350,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,  /*pos*/ 5000,  1200,     0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvHiddenRedCoinStar',  /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/  977,  1024,  2075,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSnowMoundSpawn'),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_PENGUIN,             /*pos*/ 1715,  3328,    518,  /*angle*/ 0,  -51,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSLWalkingPenguin'),
    OBJECT(/*model*/ MODEL_NONE,                /*pos*/  700,  3428,    700,  /*angle*/ 0,   30,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSLSnowmanWind'),
    OBJECT(/*model*/ MODEL_NONE,                /*pos*/  480,  2300,   1370,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvIgloo'),
    OBJECT(/*model*/ MODEL_BIG_CHILL_BULLY,     /*pos*/  315,  1331,  -4852,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvBigChillBully'),
    OBJECT(/*model*/ MODEL_MR_BLIZZARD_HIDDEN,  /*pos*/ 2954,   970,    750,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvMrBlizzard'),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 0,  500,  1000,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',  /*acts*/ ALL_ACTS),
    RETURN(),
];

export const level_sl_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_8),
    JUMP_LINK(script_func_global_17),
    //LOAD_MODEL_FROM_GEO(MODEL_SL_SNOW_TRIANGLE,       sl_geo_000390),
    //LOAD_MODEL_FROM_GEO(MODEL_SL_CRACKED_ICE,         sl_geo_000360),
    //LOAD_MODEL_FROM_GEO(MODEL_SL_CRACKED_ICE_CHUNK,   sl_geo_000378),
    LOAD_MODEL_FROM_GEO(MODEL_SL_SNOW_TREE,           snow_tree_geo),

    AREA(/*index*/ 1,  sl_geo_0003A8),
        //OBJECT(/*model*/ MODEL_NONE,  /*pos*/  5541,  2024,    443,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        //OBJECT(/*model*/ MODEL_NONE,  /*pos*/   257,  2150,   1399,  /*angle*/ 0,  290,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvInstantActiveWarp'),
        //OBJECT(/*model*/ MODEL_NONE,  /*pos*/   569,  2150,   1336,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x060C0000,  /*beh*/ 'bhvWarp'),
        //OBJECT(/*model*/ MODEL_NONE,  /*pos*/  5468,  1056,  -5400,  /*angle*/ 0,  -20,  0,  /*behParam*/ 0x000D0000,  /*beh*/ 'bhvFadingWarp'),
        //OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3698,  1024,  -1237,  /*angle*/ 0,    6,  0,  /*behParam*/ 0x000E0000,  /*beh*/ 'bhvFadingWarp'), warps commented out due to water not being unloaded breaking the area.
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x01,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0C,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0D,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x01,  /*destNode*/ 0x0E,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0E,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x01,  /*destNode*/ 0x0D,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x36,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x68,  /*flags*/ WARP_NO_CHECKPOINT),
        TERRAIN(/*terrainData*/ sl_seg7_area_1_collision),
        MACRO_OBJECTS(/*objList*/ sl_seg7_area_1_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_SNOW),
        //TERRAIN_TYPE(/*terrainType*/ TERRAIN_SNOW),
    END_AREA(),

    AREA(/*index*/ 2,  sl_geo_000484),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  0,  2867,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvInstantActiveWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  0,  3277,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x140B0000,  /*beh*/ 'bhvWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_SL,  /*destArea*/ 0x01,  /*destNode*/ 0x0B,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_4),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x36,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x02,  /*destNode*/ 0x68,  /*flags*/ WARP_NO_CHECKPOINT),
        TERRAIN(/*terrainData*/ sl_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ sl_seg7_area_2_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0004,  /*seq*/ SEQ_LEVEL_UNDERGROUND),
        //TERRAIN_TYPE(/*terrainType*/ TERRAIN_SNOW),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 270,  /*pos*/ 5541,  1024,  443),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_sl_entry = level_sl_entry

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
