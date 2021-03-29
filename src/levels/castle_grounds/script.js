import { GeoLayoutInstance as Geo                       } from "../../engine/GeoLayout"

import { bhvMario, bhvCastleFlagWaving,
         bhvManyBlueFishSpawner, bhvButterfly           } from "../../game/BehaviorData"
import { castle_grounds_geo_00073C                      } from "./areas/1/geo"
import { castle_grounds_geo_0006F4                      } from "./areas/1/3/geo.inc"
import { castle_grounds_geo_000660                      } from "./areas/1/11/geo.inc"
import { castle_grounds_seg7_collision_level            } from "./areas/1/collision.inc"
import { LevelUpdateInstance as LevelUpdate             } from "../../game/LevelUpdate"
import { bubbly_tree_geo                                } from "../../actors/tree/geo.inc"
import { butterfly_geo                                  } from "../../actors/butterfly/geo.inc"
import { fish_geo                                       } from "../../actors/blue_fish/geo.inc"
import { water_splash_geo, small_water_splash_geo       } from "../../actors/water_splash/geo.inc"
import { white_particle_small_dl                        } from "../../actors/white_particle_small/model.inc"
import { MODEL_NONE, MODEL_MARIO,
         MODEL_LEVEL_GEOMETRY_03,
         MODEL_BOB_BUBBLY_TREE, MODEL_FISH,
         MODEL_CASTLE_GROUNDS_FLAG, MODEL_BUBBLE,
         MODEL_BUTTERFLY, MODEL_WATER_SPLASH,
         MODEL_SMALL_WATER_SPLASH,
         MODEL_WHITE_PARTICLE_SMALL                     } from "../../include/model_ids"


const script_func_local_1 = [
    ['RETURN']
]
const script_func_local_2 = [
    ['OBJECT', /*acts?*/ 0x1F, /*model*/ MODEL_NONE,                        /*pos*/  5223, -975,  1667, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvManyBlueFishSpawner],
    ['RETURN']
]

const script_func_local_3 = [
    ['OBJECT', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['OBJECT', /*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving],
    ['RETURN']
]

const script_func_local_4 = [
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4508,  406,  4400, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4408,  406,  4500, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -4708,  406,  4100, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2621, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -6003,  473, -2321, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  6543,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  6143,  461,  -617, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5773,  775, -5722, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5873,  775, -5622, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/  5473,  775, -5322, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -1504,  326,  3196, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['OBJECT', 0x1F, /*model*/ MODEL_BUTTERFLY, /*pos*/ -1204,  326,  3296, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvButterfly],
    ['RETURN']
]

export const level_castle_grounds_entry = [
    ['INIT_LEVEL'],
    ['MARIO', MODEL_MARIO, 1, bhvMario],
    ['LOAD_MODEL_FROM_GEO', MODEL_LEVEL_GEOMETRY_03,    castle_grounds_geo_0006F4],
    ['LOAD_MODEL_FROM_GEO', MODEL_BOB_BUBBLY_TREE,      bubbly_tree_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CASTLE_GROUNDS_FLAG,  castle_grounds_geo_000660],
    ['LOAD_MODEL_FROM_GEO', MODEL_BUTTERFLY,            butterfly_geo],             // in main instead
    ['LOAD_MODEL_FROM_GEO', MODEL_FISH,                 fish_geo],                  // in main instead
    ['LOAD_MODEL_FROM_GEO', MODEL_WATER_SPLASH,         water_splash_geo],          // etc.
    ['LOAD_MODEL_FROM_DL',  MODEL_WHITE_PARTICLE_SMALL, white_particle_small_dl, Geo.LAYER_ALPHA],
    ['LOAD_MODEL_FROM_GEO', MODEL_SMALL_WATER_SPLASH,   small_water_splash_geo],
    ['AREA', 1, castle_grounds_geo_00073C],
        ['JUMP_LINK', script_func_local_1],
        ['JUMP_LINK', script_func_local_2],
        ['JUMP_LINK', script_func_local_3],
        ['JUMP_LINK', script_func_local_4],
        ['TERRAIN', castle_grounds_seg7_collision_level],
    ['END_AREA'],
    ['MARIO_POS', 1, 180, -1328, 260, 4664],
    ['CALL', 0, LevelUpdate.lvl_init_or_update, LevelUpdate],
    ['CALL_LOOP', 1, LevelUpdate.lvl_init_or_update, LevelUpdate]
]
