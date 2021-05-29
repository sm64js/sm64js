// Bowser 1

import {
    INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA, OBJECT, WARP_NODE, TERRAIN,
    SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL,
    SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_MARIO, MODEL_LEVEL_GEOMETRY_03, MODEL_NONE
} from "../../include/model_ids"

import { script_func_global_13 } from "../global_scripts"
import { bowser_1_geo_0000D0 } from "./areas/1/geo.inc"
import { bowser_1_yellow_sphere_geo } from "../../actors/yellow_sphere/geo.inc"

import {
    LEVEL_BOWSER_1, LEVEL_CASTLE, LEVEL_BITDW
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"
import { bowser_1_seg7_collision_level } from "./areas/1/collision.inc"
import { SEQ_LEVEL_BOSS_KOOPA } from "../../include/seq_ids"
import { TERRAIN_STONE } from "../../include/surface_terrains"


export const level_bowser_1_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_13),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,  bowser_1_yellow_sphere_geo),

    AREA(/*index*/ 1,  bowser_1_geo_0000D0),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  1307,  0,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneCircleWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_BOWSER_1,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x24,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_BITDW,  /*destArea*/ 0x01,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        TERRAIN(/*terrainData*/ bowser_1_seg7_collision_level),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0002,  /*seq*/ SEQ_LEVEL_BOSS_KOOPA),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 180,  /*pos*/ 0,  307,  0),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_bowser_1_entry = level_bowser_1_entry

// 2021-05-28 04:16:48 -0700 (Convert.rb 2021-05-28 04:03:04 -0700)
