// Ddd

import {
    OBJECT, RETURN, OBJECT_WITH_ACTS, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, /*WHIRLPOOL, */INSTANT_WARP, TERRAIN, MACRO_OBJECTS, SET_BACKGROUND_MUSIC,
    TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_SUSHI, MODEL_NONE, MODEL_DL_WHIRLPOOL, MODEL_MANTA_RAY, MODEL_DDD_BOWSER_SUB_DOOR,
    MODEL_DDD_BOWSER_SUB, MODEL_DDD_POLE, MODEL_STAR, MODEL_MARIO
} from "../../include/model_ids"

import {
    script_func_global_1, /*script_func_global_5,*/ script_func_global_14
} from "../global_scripts"

import { ddd_geo_000478 } from "./sub_door/geo.inc"

import { ddd_geo_0004A0 } from "./submarine/geo.inc"

import { ddd_geo_000450 } from "./pole/geo.inc"

import { ddd_geo_0004C0 } from "./areas/1/geo.inc"

import {
    LEVEL_DDD, LEVEL_CASTLE, LEVEL_CASTLE_GROUNDS
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { ddd_seg7_area_1_collision } from "./areas/1/collision.inc"

import { ddd_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import { SEQ_LEVEL_WATER } from "../../include/seq_ids"

import { TERRAIN_WATER } from "../../include/surface_terrains"

import { ddd_geo_000570 } from "./areas/2/geo.inc"

import { ddd_seg7_area_2_collision } from "./areas/2/collision.inc"

import { ddd_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { ALL_ACTS, ACT_2, ACT_3, ACT_4, ACT_5, ACT_6 } from "../../include/model_ids"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_SUSHI,         /*pos*/ -3071,   -270,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSushiShark'),
    OBJECT(/*model*/ MODEL_SUSHI,         /*pos*/ -3071,  -4270,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSushiShark'),
    OBJECT(/*model*/ MODEL_NONE,          /*pos*/ -3071,   -130,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFish3'),
    OBJECT(/*model*/ MODEL_NONE,          /*pos*/ -3071,  -4270,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFish2'),
    OBJECT(/*model*/ MODEL_NONE,          /*pos*/ -3071,  -2000,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvChirpChirp'),
    OBJECT(/*model*/ MODEL_NONE,          /*pos*/ -3071,  -3000,    0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvChirpChirp'),
    OBJECT(/*model*/ MODEL_DL_WHIRLPOOL,  /*pos*/ -3174,  -4915,  102,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvWhirlpool'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,       /*pos*/ -2400,  -4607,  125,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvTreasureChests',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_MANTA_RAY,  /*pos*/ -4640,  -1380,   40,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvMantaRay',        /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_DDD_BOWSER_SUB_DOOR,  /*pos*/    0,     0,      0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserSubDoor'),
    OBJECT(/*model*/ MODEL_DDD_BOWSER_SUB,       /*pos*/    0,     0,      0,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowsersSub'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 5120,  1005,   3584,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x001E0000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 5605,  1005,   3380,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00150000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 1800,  1005,   1275,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 4000,  1005,   1075,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 1830,  1005,    520,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00140000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 4000,  1005,   1275,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x000B0000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 5760,  1005,    360,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00170000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 3310,  1005,  -1945,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00170000,  /*beh*/ 'bhvDDDPole'),
    OBJECT(/*model*/ MODEL_DDD_POLE,             /*pos*/ 3550,  1005,  -2250,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x000D0000,  /*beh*/ 'bhvDDDPole'),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 3404,  -3319,  -489,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvJetStream'),
    RETURN(),
];

const script_func_local_5 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 3900,    850,   -600,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStar',                     /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,  /*pos*/ 5513,   1200,    900,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvHiddenRedCoinStar',     /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,  /*pos*/ 3404,  -3319,   -489,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvJetStreamRingSpawner',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ 2030,  -3700,  -2780,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',                     /*acts*/ ALL_ACTS),
    RETURN(),
];

export const level_ddd_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_5),
    JUMP_LINK(script_func_global_14),
    LOAD_MODEL_FROM_GEO(MODEL_DDD_BOWSER_SUB_DOOR,  ddd_geo_000478),
    LOAD_MODEL_FROM_GEO(MODEL_DDD_BOWSER_SUB,       ddd_geo_0004A0),
    LOAD_MODEL_FROM_GEO(MODEL_DDD_POLE,             ddd_geo_000450),

    AREA(/*index*/ 1,  ddd_geo_0004C0),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -3071,  3000,  0,  /*angle*/ 0,  7,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_DDD,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x35,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x67,  /*flags*/ WARP_NO_CHECKPOINT),
        //WHIRLPOOL(/*unk2*/ 0,  /*unk3*/ 0,  /*pos*/ -3174,  -4915,  102,  /*strength*/ 20),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        INSTANT_WARP(/*index*/ 3,  /*destArea*/ 2,  /*displace*/ -8192,  0,  0),
        TERRAIN(/*terrainData*/ ddd_seg7_area_1_collision),
        //MACRO_OBJECTS(/*objList*/ ddd_seg7_area_1_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0003,  /*seq*/ SEQ_LEVEL_WATER),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_WATER),
    END_AREA(),

    AREA(/*index*/ 2,  ddd_geo_000570),
        //WHIRLPOOL(/*unk2*/ 0,  /*unk3*/ 0,  /*pos*/ 3355,  -3575,  -515,  /*strength*/ -30),
        //WHIRLPOOL(/*unk2*/ 1,  /*unk3*/ 2,  /*pos*/ 3917,  -2040,  -6041,  /*strength*/ 50),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x35,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x67,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF3,  /*destLevel*/ LEVEL_CASTLE_GROUNDS,  /*destArea*/ 0x01,  /*destNode*/ 0x1E,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_3),
        JUMP_LINK(script_func_local_4),
        JUMP_LINK(script_func_local_5),
        INSTANT_WARP(/*index*/ 2,  /*destArea*/ 1,  /*displace*/ 8192,  0,  0),
        TERRAIN(/*terrainData*/ ddd_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ ddd_seg7_area_2_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0003,  /*seq*/ SEQ_LEVEL_WATER),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_WATER),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 180,  /*pos*/ -3071,  3000,  500),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_ddd_entry = level_ddd_entry

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
