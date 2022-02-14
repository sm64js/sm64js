// Bowser 2

import {
    OBJECT, RETURN, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA, WARP_NODE, TERRAIN,
    SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL,
    SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_BOWSER_2_TILTING_ARENA, MODEL_BOWSER_BOMB, MODEL_MARIO, MODEL_NONE
} from "../../include/model_ids"

import { script_func_global_13 } from "../global_scripts"

import { bowser_2_geo_000170 } from "./tilting_platform/geo.inc"
import { bowser_2_geo_000188 } from "./areas/1/geo.inc"

import {
    LEVEL_BOWSER_2, LEVEL_CASTLE, LEVEL_BITFS
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { bowser_2_seg7_collision_lava } from "./areas/1/collision.inc"

import { SEQ_LEVEL_BOSS_KOOPA } from "../../include/seq_ids"

import { TERRAIN_STONE } from "../../include/surface_terrains"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_BOWSER_2_TILTING_ARENA,  /*pos*/     0,     0,      0,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvTiltingBowserLavaPlatform'),
    OBJECT(/*model*/ MODEL_BOWSER_BOMB,             /*pos*/     4,  1329,   3598,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserBomb'),
    OBJECT(/*model*/ MODEL_BOWSER_BOMB,             /*pos*/  3584,  1329,      0,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserBomb'),
    OBJECT(/*model*/ MODEL_BOWSER_BOMB,             /*pos*/     0,  1329,  -3583,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserBomb'),
    OBJECT(/*model*/ MODEL_BOWSER_BOMB,             /*pos*/ -3583,  1329,      0,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvBowserBomb'),
    RETURN(),
];

export const level_bowser_2_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_13),
    LOAD_MODEL_FROM_GEO(MODEL_BOWSER_2_TILTING_ARENA,  bowser_2_geo_000170),

    AREA(/*index*/ 1,  bowser_2_geo_000188),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ 0,  2229,  0,  /*angle*/ 0,  180,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneCircleWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_BOWSER_2,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x03,  /*destNode*/ 0x36,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_BITFS,  /*destArea*/ 0x01,  /*destNode*/ 0x0C,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        TERRAIN(/*terrainData*/ bowser_2_seg7_collision_lava),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0002,  /*seq*/ SEQ_LEVEL_BOSS_KOOPA),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 180,  /*pos*/ 0,  1229,  0),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_bowser_2_entry = level_bowser_2_entry

// 2021-08-02 18:37:25 -0400 (Convert.rb 2021-07-22 11:15:52 -0400)
