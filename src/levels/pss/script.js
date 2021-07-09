// Pss

import {
    INIT_LEVEL, MARIO, JUMP_LINK, AREA, OBJECT, WARP_NODE, TERRAIN, MACRO_OBJECTS, TERRAIN_TYPE,
    SET_BACKGROUND_MUSIC, END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT,
    EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_MARIO, MODEL_NONE
} from "../../include/model_ids"

import {
    script_func_global_1/*, script_func_global_9*/
} from "../global_scripts"

import { pss_geo_000100 } from "./areas/1/geo.inc"

import {
    LEVEL_PSS, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { pss_seg7_collision } from "./areas/1/collision.inc"

import { pss_seg7_macro_objs } from "./areas/1/macro.inc"

import { TERRAIN_SLIDE } from "../../include/surface_terrains"

import { SEQ_LEVEL_SLIDE } from "../../include/seq_ids"

export const level_pss_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_9),

    AREA(/*index*/ 1,  pss_geo_000100),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 5632,  6751,  -5631,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_PSS,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF3,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x20,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x26,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x23,  /*flags*/ WARP_NO_CHECKPOINT),
        TERRAIN(/*terrainData*/ pss_seg7_collision),
        MACRO_OBJECTS(/*objList*/ pss_seg7_macro_objs),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_SLIDE),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0001,  /*seq*/ SEQ_LEVEL_SLIDE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 270,  /*pos*/ 5632,  6451,  -5631),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_pss_entry = level_pss_entry

// 2021-06-03 16:44:44 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
