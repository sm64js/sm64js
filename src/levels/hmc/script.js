// Hmc

import {
    OBJECT, RETURN, OBJECT_WITH_ACTS, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, TERRAIN, MACRO_OBJECTS, ROOMS, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA,
    MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_RED_FLAME, MODEL_NONE, MODEL_HMC_METAL_PLATFORM, MODEL_HMC_ELEVATOR_PLATFORM,
    MODEL_PURPLE_SWITCH, MODEL_CHECKERBOARD_PLATFORM, MODEL_DORRIE, MODEL_STAR, MODEL_MARIO,
    MODEL_HMC_WOODEN_DOOR, MODEL_HMC_METAL_DOOR, MODEL_HMC_HAZY_MAZE_DOOR,
    MODEL_HMC_METAL_ARROW_PLATFORM, MODEL_HMC_ROLLING_ROCK, MODEL_HMC_ROCK_PIECE,
    MODEL_HMC_ROCK_SMALL_PIECE, MODEL_HMC_RED_GRILLS
} from "../../include/model_ids"

import {
    script_func_global_1, /*script_func_global_7,*/ script_func_global_18
} from "../global_scripts"

import { hmc_geo_0005A0 } from "./arrow_platform/geo.inc"

import { hmc_geo_0005B8 } from "./arrow_platform_button/geo.inc"

import { hmc_geo_0005D0 } from "./elevator_platform/geo.inc"

import { hmc_geo_000548 } from "./rolling_rock/geo.inc"

import { hmc_geo_000570 } from "./rolling_rock_fragment_1/geo.inc"

import { hmc_geo_000588 } from "./rolling_rock_fragment_2/geo.inc"

import { hmc_geo_000530 } from "./areas/1/grill_door/geo.inc"

import { hmc_geo_000B90 } from "./areas/1/geo.inc"

import {
    LEVEL_HMC, LEVEL_COTMC, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { hmc_seg7_collision_level } from "./areas/1/collision.inc"

import { hmc_seg7_macro_objs } from "./areas/1/macro.inc"

import { SEQ_LEVEL_UNDERGROUND } from "../../include/seq_ids"

import { TERRAIN_STONE } from "../../include/surface_terrains"

import { wooden_door_geo, metal_door_geo, hazy_maze_door_geo } from "../../actors/door/geo.inc"

import { hmc_seg7_rooms } from "./areas/1/room.inc"

import { ALL_ACTS } from "../../include/model_ids"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 4936,  -357,  -4146,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 5018,  -460,  -5559,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 1997,   666,   -235,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 1762,  -460,  -2610,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 4178,  -255,  -3737,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 2233,  -460,    256,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 5510,  -255,  -3429,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 4690,  -357,   -767,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 3462,  -255,  -1125,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 1762,   666,      0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 1762,  -460,    256,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 6482,   461,   3226,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 1075,   461,   6543,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 6912,   461,   6543,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 6912,   461,   3697,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 6482,   461,   7014,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_RED_FLAME,  /*pos*/ 3817,   717,   1034,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFlame'),
    OBJECT(/*model*/ MODEL_NONE,       /*pos*/  799,  1024,   4434,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00B80000,  /*beh*/ 'bhvPoleGrabbing'),
    OBJECT(/*model*/ MODEL_NONE,       /*pos*/  889,  1024,   3277,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00B80000,  /*beh*/ 'bhvPoleGrabbing'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_HMC_METAL_PLATFORM,     /*pos*/  1100,    950,   6350,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvControllablePlatform'),
    OBJECT(/*model*/ MODEL_HMC_ELEVATOR_PLATFORM,  /*pos*/ -3243,   1434,   1392,  /*angle*/ 0,   27,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvHmcElevatorPlatform'),
    OBJECT(/*model*/ MODEL_HMC_ELEVATOR_PLATFORM,  /*pos*/ -2816,   2253,  -2509,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvHmcElevatorPlatform'),
    OBJECT(/*model*/ MODEL_HMC_ELEVATOR_PLATFORM,  /*pos*/  -973,   1741,  -7347,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvHmcElevatorPlatform'),
    OBJECT(/*model*/ MODEL_HMC_ELEVATOR_PLATFORM,  /*pos*/ -3533,   1741,  -7040,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00030000,  /*beh*/ 'bhvHmcElevatorPlatform'),
    OBJECT(/*model*/ MODEL_NONE,                   /*pos*/   614,  -4690,   2330,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvOpenableGrill'),
    OBJECT(/*model*/ MODEL_PURPLE_SWITCH,          /*pos*/  -307,  -4997,   2483,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFloorSwitchGrills'),
    OBJECT(/*model*/ MODEL_CHECKERBOARD_PLATFORM,  /*pos*/  1270,   2000,   4000,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x09A40000,  /*beh*/ 'bhvPlatformOnTrack'),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT(/*model*/ MODEL_DORRIE,  /*pos*/ -3533,  -4969,   3558,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvDorrie'),
    OBJECT(/*model*/ MODEL_NONE,    /*pos*/ -6093,   3075,  -7807,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBigBoulderGenerator'),
    OBJECT(/*model*/ MODEL_NONE,    /*pos*/  -500,   1600,   3500,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00040000,  /*beh*/ 'bhvFlamethrower'),
    OBJECT(/*model*/ MODEL_NONE,    /*pos*/  -500,   1600,   3800,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00040000,  /*beh*/ 'bhvFlamethrower'),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ -3600,  -4000,   3600,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,  /*pos*/  4000,    300,   5000,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvHiddenRedCoinStar',  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/  6200,  -4400,   2300,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ -2100,   2100,  -7550,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ -6500,   2700,  -1600,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,  /*pos*/ -5000,   3050,  -6700,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',                  /*acts*/ ALL_ACTS),
    RETURN(),
];

export const level_hmc_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_7),
    JUMP_LINK(script_func_global_18),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_WOODEN_DOOR,           wooden_door_geo),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_METAL_DOOR,            metal_door_geo),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_HAZY_MAZE_DOOR,        hazy_maze_door_geo),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_METAL_PLATFORM,        hmc_geo_0005A0),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_METAL_ARROW_PLATFORM,  hmc_geo_0005B8),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_ELEVATOR_PLATFORM,     hmc_geo_0005D0),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_ROLLING_ROCK,          hmc_geo_000548),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_ROCK_PIECE,            hmc_geo_000570),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_ROCK_SMALL_PIECE,      hmc_geo_000588),
    LOAD_MODEL_FROM_GEO(MODEL_HMC_RED_GRILLS,            hmc_geo_000530),

    AREA(/*index*/ 1,  hmc_geo_000B90),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -7152,   3161,  7181,  /*angle*/ 0,  135,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  3351,  -4690,  4773,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x340B0000,  /*beh*/ 'bhvWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_HMC,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B,  /*destLevel*/ LEVEL_COTMC,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        JUMP_LINK(script_func_local_4),
        TERRAIN(/*terrainData*/ hmc_seg7_collision_level),
        MACRO_OBJECTS(/*objList*/ hmc_seg7_macro_objs),
        ROOMS(/*surfaceRooms*/ hmc_seg7_rooms),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0004,  /*seq*/ SEQ_LEVEL_UNDERGROUND),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 135,  /*pos*/ -7152,  2161,  7181),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];

gLinker.level_scripts.level_hmc_entry = level_hmc_entry

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
