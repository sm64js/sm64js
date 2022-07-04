import { AREA, CALL, CALL_LOOP, END_AREA, INIT_LEVEL, JUMP_LINK, LOAD_MODEL_FROM_GEO,
         MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, RETURN, TERRAIN, TERRAIN_TYPE, WARP_NODE,
         WARP_NO_CHECKPOINT, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import { script_func_global_1, script_func_global_10 } from "../global_scripts"

import {
    MODEL_NONE, MODEL_BOO, MODEL_MARIO, MODEL_COURTYARD_SPIKY_TREE, MODEL_COURTYARD_WOODEN_DOOR,
    MODEL_LEVEL_GEOMETRY_03
} from "../../include/model_ids"

import { LEVEL_BBH, LEVEL_CASTLE, LEVEL_CASTLE_GROUNDS, LEVEL_CASTLE_COURTYARD } from "../level_defines_constants"

import { TERRAIN_STONE                       } from "../../include/surface_terrains"

import { castle_courtyard_seg7_collision } from "./areas/1/collision.inc"
import { castle_courtyard_geo_000218           } from "./areas/1/geo.inc"
import { castle_courtyard_seg7_macro_objs      } from "./areas/1/macro.inc"

import { castle_courtyard_geo_000200           } from "./areas/1/spire/geo.inc"

import { spiky_tree_geo                     } from "../../actors/tree/geo.inc"
import { wooden_door_geo                    } from "../../actors/door/geo.inc"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_NONE, /*pos*/     0, 200, -1652, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvAmbientSounds'),
    OBJECT(/*model*/ MODEL_NONE, /*pos*/ -2700,   0, -1652, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvBirdsSoundLoop'),
    OBJECT(/*model*/ MODEL_NONE, /*pos*/  2700,   0, -1652, /*angle*/ 0, 0, 0, /*behParam*/ 0x00010000, /*beh*/ 'bhvBirdsSoundLoop'),
    RETURN(),
]

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_BOO, /*pos*/ -3217, 100,  -101, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvCourtyardBooTriplet'),
    OBJECT(/*model*/ MODEL_BOO, /*pos*/  3317, 100, -1701, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvCourtyardBooTriplet'),
    OBJECT(/*model*/ MODEL_BOO, /*pos*/   -71,   1, -1387, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ 'bhvCourtyardBooTriplet'),
    RETURN(),
]

export const level_castle_courtyard_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO, /*behParam*/ 0x00000001, /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    JUMP_LINK(script_func_global_10),
    LOAD_MODEL_FROM_GEO(MODEL_COURTYARD_SPIKY_TREE,  spiky_tree_geo),
    LOAD_MODEL_FROM_GEO(MODEL_COURTYARD_WOODEN_DOOR, wooden_door_geo),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,     castle_courtyard_geo_000200),

    AREA(/*index*/ 1, castle_courtyard_geo_000218),
        OBJECT(/*model*/ MODEL_BOO,  /*pos*/ -2360, -100, -2712, /*angle*/ 0,   0, 0, /*behParam*/ 0x01050000, /*beh*/ 'bhvBooWithCage'),
        OBJECT(/*model*/ MODEL_NONE, /*pos*/     0,   51, -1000, /*angle*/ 0, 180, 0, /*behParam*/ 0x000A0000, /*beh*/ 'bhvLaunchStarCollectWarp'),
        OBJECT(/*model*/ MODEL_NONE, /*pos*/     0,   51, -1000, /*angle*/ 0, 180, 0, /*behParam*/ 0x000B0000, /*beh*/ 'bhvLaunchDeathWarp'),
        WARP_NODE(/*id*/ 0x05, /*destLevel*/ LEVEL_BBH, /*destArea*/ 0x01, /*destNode*/ 0x0A, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0A, /*destLevel*/ LEVEL_CASTLE_COURTYARD, /*destArea*/ 0x01, /*destNode*/ 0x0A, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0B, /*destLevel*/ LEVEL_CASTLE_COURTYARD, /*destArea*/ 0x01, /*destNode*/ 0x0B, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x01, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 0x01, /*destNode*/ 0x02, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1, /*destLevel*/ LEVEL_CASTLE_GROUNDS, /*destArea*/ 0x01, /*destNode*/ 0x03, /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        TERRAIN(/*terrainData*/ castle_courtyard_seg7_collision),
        MACRO_OBJECTS(/*objList*/ castle_courtyard_seg7_macro_objs),
        // SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_SOUND_PLAYER),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1, /*yaw*/ 180, /*pos*/ -14, 0, -201),
    CALL(/*arg*/ 0, /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1, /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
]

gLinker.level_scripts.level_castle_courtyard_entry = level_castle_courtyard_entry
