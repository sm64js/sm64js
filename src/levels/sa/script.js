// Sa

import {
    OBJECT, RETURN, INIT_LEVEL, MARIO, JUMP_LINK, AREA, WARP_NODE, TERRAIN, MACRO_OBJECTS,
    SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL,
    SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_NONE, MODEL_MARIO
} from "../../include/model_ids"

import {
    script_func_global_5, script_func_global_14
} from "../global_scripts"

import { sa_geo_000170 } from "./areas/1/geo.inc"

import {
    LEVEL_SA, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { sa_seg7_collision } from "./areas/1/collision.inc"

import { sa_seg7_macro_objs } from "./areas/1/macro.inc"

import { TERRAIN_WATER } from "../../include/surface_terrains"

import { SEQ_LEVEL_WATER, SEQ_VARIATION } from "../../include/seq_ids"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  -1000,  0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvFishSpawner'),
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  -1000,  0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00020000,  /*beh*/ 'bhvFishSpawner'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  -4250,  0,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvHiddenRedCoinStar'),
    RETURN(),
];

export const level_sa_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_5),
    JUMP_LINK(script_func_global_14),

    AREA(/*index*/ 1,  sa_geo_000170),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  -1535,  0,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSwimmingWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_SA,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x27,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x28,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        TERRAIN(/*terrainData*/ sa_seg7_collision),
        MACRO_OBJECTS(/*objList*/ sa_seg7_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0003,  /*seq*/ (SEQ_LEVEL_WATER | SEQ_VARIATION)),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_WATER),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 90,  /*pos*/ 0,  -1535,  0),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_sa_entry = level_sa_entry

// 2022-07-04 22:02:29 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
