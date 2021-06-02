// Cotmc

import {
    OBJECT, RETURN, INIT_LEVEL, MARIO, JUMP_LINK, AREA, WARP_NODE, TERRAIN, MACRO_OBJECTS,
    SHOW_DIALOG, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP,
    CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_CAP_SWITCH, MODEL_NONE, MODEL_MARIO
} from "../../include/model_ids"

import {
    /*script_func_global_9, */script_func_global_18, script_func_global_1
} from "../global_scripts"

import { cotmc_geo_0001A0 } from "./areas/1/geo.inc"

import {
    LEVEL_COTMC, LEVEL_CASTLE, LEVEL_CASTLE_GROUNDS
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { cotmc_seg7_collision_level } from "./areas/1/collision.inc"

import { cotmc_seg7_macro_objs } from "./areas/1/macro.inc"

import { DIALOG_130 } from "../../text/us/dialogs"

import { SEQ_LEVEL_UNDERGROUND } from "../../include/seq_ids"

import { TERRAIN_STONE } from "../../include/surface_terrains"







const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_CAP_SWITCH,  /*pos*/ 0,   363,  -6144,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvCapSwitch'),
    //OBJECT(/*model*/ MODEL_NONE,        /*pos*/ 0,   500,  -7373,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvWaterfallSoundLoop'),
    //OBJECT(/*model*/ MODEL_NONE,        /*pos*/ 0,   500,   3584,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvWaterfallSoundLoop'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,        /*pos*/ 0,  -200,  -7000,  /*angle*/ 0,  0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvHiddenRedCoinStar'),
    RETURN(),
];

export const level_cotmc_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    //JUMP_LINK(script_func_global_9),
    JUMP_LINK(script_func_global_18),
    JUMP_LINK(script_func_global_1),

    AREA(/*index*/ 1,  cotmc_geo_0001A0),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -4185,  1020,  -47,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_COTMC,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x34,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x66,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF3,  /*destLevel*/ LEVEL_CASTLE_GROUNDS,  /*destArea*/ 0x01,  /*destNode*/ 0x14,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_1),
        TERRAIN(/*terrainData*/ cotmc_seg7_collision_level),
        //MACRO_OBJECTS(/*objList*/ cotmc_seg7_macro_objs),
        SHOW_DIALOG(/*index*/ 0x00,  DIALOG_130),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0004,  /*seq*/ SEQ_LEVEL_UNDERGROUND),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 90,  /*pos*/ -4185,  20,  -47),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_cotmc_entry = level_cotmc_entry

// 2021-05-30 20:59:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
