import { bhvMario, bhvCastleFlagWaving, bhvManyBlueFishSpawner, bhvButterfly } from "../../game/BehaviorData"
import { castle_grounds_geo_00073C } from "./areas/1/geo"
import { castle_grounds_geo_0006F4 } from "./areas/1/3/geo.inc"
import { castle_grounds_geo_000660 } from "./areas/1/11/geo.inc"
import { castle_grounds_seg7_collision_level } from "./areas/1/collision.inc"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { butterfly_geo } from "../../actors/butterfly/geo.inc"
import { fish_geo } from "../../actors/blue_fish/geo.inc"
import { MODEL_NONE, MODEL_BOB_BUBBLY_TREE, MODEL_LEVEL_GEOMETRY_03, MODEL_CASTLE_GROUNDS_FLAG, MODEL_BUBBLE, MODEL_BUTTERFLY, MODEL_FISH } from "../../include/model_ids"


export const script_func_local_2 = [
    ['place_object', /*acts?*/ 0x1F, /*model*/ MODEL_NONE,                        /*pos*/  5223, -975,  1667, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvManyBlueFishSpawner],
    ['return']
]

export const script_func_local_3 = [
    ['place_object', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['place_object', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['place_object', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['place_object', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['return']
]

export const script_func_local_4 = [
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4508,  406,  4400, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4408,  406,  4500, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4708,  406,  4100, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2621, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2321, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  6543,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  6143,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5773,  775, -5722, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5873,  775, -5622, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5473,  775, -5322, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -1504,  326,  3196, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['place_object', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -1204,  326,  3296, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['return']
]

export const level_castle_grounds_entry = [
    ['init_level'],
    ['init_mario', 1, 1, bhvMario],
    ['load_model_from_geo', MODEL_LEVEL_GEOMETRY_03, castle_grounds_geo_0006F4],
    ['load_model_from_geo', MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo],
    ['load_model_from_geo', MODEL_CASTLE_GROUNDS_FLAG, castle_grounds_geo_000660],
    ['load_model_from_geo', MODEL_BUTTERFLY, butterfly_geo],  // in main instead
    ['load_model_from_geo', MODEL_FISH, fish_geo],  // in main instead
    ['begin_area', 1, castle_grounds_geo_00073C],
    ['jump_link', script_func_local_2],
    ['jump_link', script_func_local_3],
    ['jump_link', script_func_local_4],
    ['terrain', castle_grounds_seg7_collision_level],
    ['end_area'],
    ['free_level_pool'],
    ['set_mario_pos', 1, 180, -1328, 260, 4664],
    ['call', 0, LevelUpdate.lvl_init_or_update, LevelUpdate],
    ['call_loop', 1, LevelUpdate.lvl_init_or_update, LevelUpdate]
]
