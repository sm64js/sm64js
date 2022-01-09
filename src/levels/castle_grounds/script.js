import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { MODEL_NONE,
    MODEL_MARIO,
    MODEL_LEVEL_GEOMETRY_03,
    MODEL_CASTLE_GROUNDS_VCUTM_GRILL,
    MODEL_CASTLE_GROUNDS_FLAG,
    MODEL_CASTLE_GROUNDS_CANNON_GRILL,
    MODEL_BUTTERFLY,
    MODEL_BUBBLE,
    MODEL_BOB_BUBBLY_TREE,
    MODEL_MIST,
    MODEL_WHITE_PUFF,                    
    MODEL_CASTLE_GROUNDS_CASTLE_DOOR,
    MODEL_CASTLE_GROUNDS_METAL_DOOR} from "../../include/model_ids"

import { bhvMario,
    bhvCastleFlagWaving,
    bhvManyBlueFishSpawner,
    bhvButterfly,
    bhvWaterMist2,
    bhvMoatGrills,
    bhvCollisionObj                          } from "../../game/BehaviorData"

import { castle_grounds_geo_00073C           } from "./areas/1/geo"
import { castle_grounds_geo_0006F4           } from "./areas/1/3/geo.inc"
import { castle_grounds_geo_00070C           } from "./areas/1/7/geo.inc"
import { castle_grounds_geo_000660           } from "./areas/1/11/geo.inc"
import { bubbly_tree_geo                     } from "../../actors/tree/geo.inc"
import { castle_door_geo, metal_door_geo                     } from "../../actors/door/geo.inc"
import { door_seg3_collision_0301CE78        } from "../../actors/warp_collision/collision.inc"
import { castle_grounds_seg7_collision_level } from "./areas/1/collision.inc"
import { castle_grounds_seg7_macro_objs      } from "./areas/1/macro.inc"

const script_func_local_2 = [
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/ -5812,  100, -5937, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvWaterfallSoundLoop],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/ -7430, 1500,   873, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvBirdsSoundLoop],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/   -80, 1500,  5004, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvBirdsSoundLoop],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/  7131, 1500, -2989, /*angle*/ 0,   0, 0, /*behParam*/ 0x00020000, /*beh*/ bhvBirdsSoundLoop],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/ -7430, 1500, -5937, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvAmbientSounds],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_VCUTM_GRILL,  /*pos*/     0,    0,     0, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvMoatGrills],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/     0,    0,     0, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvInvisibleObjectsUnderBridge],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -4878, -787, -5690, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -4996, -787, -5548, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5114, -787, -5406, /*angle*/ 0,   0, 0, /*behParam*/ 0x00020000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5212, -787, -5219, /*angle*/ 0,   0, 0, /*behParam*/ 0x00030000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5311, -787, -5033, /*angle*/ 0,   0, 0, /*behParam*/ 0x00040000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5419, -787, -4895, /*angle*/ 0,   0, 0, /*behParam*/ 0x00050000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5527, -787, -4757, /*angle*/ 0,   0, 0, /*behParam*/ 0x00060000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5686, -787, -4733, /*angle*/ 0,   0, 0, /*behParam*/ 0x00070000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_MIST,                        /*pos*/ -5845, -787, -4710, /*angle*/ 0,   0, 0, /*behParam*/ 0x00080000, /*beh*/ bhvWaterMist2],
    ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/  5223, -975,  1667, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvManyBlueFishSpawner],
    // ['OBJECT', /*model*/ MODEL_BIRDS,                       /*pos*/ -5069,  850,  3221, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvBird],
    // ['OBJECT', /*model*/ MODEL_BIRDS,                       /*pos*/ -4711,  742,   433, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvBird],
    // ['OBJECT', /*model*/ MODEL_BIRDS,                       /*pos*/  5774,  913, -1114, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvBird],
    // ['OBJECT', /*model*/ MODEL_NONE,                        /*pos*/ -1328,  260,  4664, /*angle*/ 0, 180, 0, /*behParam*/ 0x00280000, /*beh*/ bhvIntroScene],
    // ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_CANNON_GRILL, /*pos*/     0,    0,     0, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvHiddenAt120Stars],
    // ['OBJECT', /*model*/ MODEL_LAKITU,                      /*pos*/    11,  803, -3015, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvCameraLakitu],
    ['RETURN']
]

const script_func_local_3 = [
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['RETURN']
]

const script_func_local_4 = [
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -4508,  406,  4400, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -4408,  406,  4500, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -4708,  406,  4100, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2621, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2321, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/  6543,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/  6143,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/  5773,  775, -5722, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/  5873,  775, -5622, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/  5473,  775, -5322, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -1504,  326,  3196, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', /*model*/ MODEL_BUTTERFLY, /*pos*/ -1204,  326,  3296, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    // ['OBJECT', /*model*/ MODEL_YOSHI,     /*pos*/     0, 3174, -5625, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvYoshi],
    ['RETURN']
]

// doors
const script_func_local_5 = [
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_METAL_DOOR, /*pos*/ 3292, -506, -2931, /*angle*/ 0, 225, 0, /*behParam*/ 0x0002000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_CASTLE_DOOR, /*pos*/ -76, 803, -3155, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)],
    ['OBJECT', /*model*/ MODEL_CASTLE_GROUNDS_CASTLE_DOOR, /*pos*/ 77, 803, -3155, /*angle*/ 0, 180, 0, /*behParam*/ 0x0001000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)],
    ['RETURN']
]

export const level_castle_grounds_entry = [
    ['INIT_LEVEL'],
    ['MARIO', MODEL_MARIO, 1, bhvMario],
    ['LOAD_MODEL_FROM_GEO', MODEL_LEVEL_GEOMETRY_03,    castle_grounds_geo_0006F4],
    ['LOAD_MODEL_FROM_GEO', MODEL_BOB_BUBBLY_TREE,      bubbly_tree_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CASTLE_GROUNDS_FLAG,  castle_grounds_geo_000660],
    ['LOAD_MODEL_FROM_GEO', MODEL_CASTLE_GROUNDS_CASTLE_DOOR, castle_door_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CASTLE_GROUNDS_METAL_DOOR, metal_door_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CASTLE_GROUNDS_VCUTM_GRILL, castle_grounds_geo_00070C],
    ['AREA', 1, castle_grounds_geo_00073C],
        //['JUMP_LINK', script_func_local_1],
        ['JUMP_LINK', script_func_local_2],
        ['JUMP_LINK', script_func_local_3],
        ['JUMP_LINK', script_func_local_4],
        ['JUMP_LINK', script_func_local_5],
        ['TERRAIN', castle_grounds_seg7_collision_level],
        ['MACRO_OBJECTS', castle_grounds_seg7_macro_objs],
    ['END_AREA'],
    ['MARIO_POS', 1, 180, -1328, 260, 4664],
    ['CALL', 0, LevelUpdate.lvl_init_or_update, LevelUpdate],
    ['CALL_LOOP', 1, LevelUpdate.lvl_init_or_update, LevelUpdate]
]