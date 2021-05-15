import { AREA, CALL, CALL_LOOP, END_AREA, INIT_LEVEL, JUMP_LINK, LOAD_MODEL_FROM_GEO,
    MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, RETURN, TERRAIN, TERRAIN_TYPE
} from "../../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { thi_geo_000608 } from "./areas/1/geo.inc"
import { thi_geo_0006D4 } from "./areas/2/geo.inc"
import { thi_geo_0005C8 } from "./areas/1/6/geo.inc"
import { thi_geo_0005B0 } from "./areas/1/6/geo.inc"
import { thi_geo_0005F0 } from "./areas/1/7/geo.inc"
import { thi_seg7_area_1_collision } from "./areas/1/collision.inc"
import { thi_seg7_area_2_collision } from "./areas/2/collision.inc"

import { MODEL_MARIO, MODEL_THI_BUBBLY_TREE, MODEL_GOOMBA, MODEL_PIRANHA_PLANT, 
    MODEL_BUBBA, MODEL_KOOPA_WITH_SHELL, MODEL_NONE
} from "../../include/model_ids"

import { bhvMario, bhvGoomba, bhvGoombaTripletSpawner
} from "../../game/BehaviorData"

import { TERRAIN_GRASS                       } from "../../include/surface_terrains"
import { bubbly_tree_geo                     } from "../../actors/tree/geo.inc"

const script_func_local_1 = [
    RETURN(),
]

const script_func_local_4 = [
    //OBJECT_WITH_ACTS(/*model*/ MODEL_KOOPA_WITH_SHELL, /*pos*/ -1900,  -511,  2400, /*angle*/ 0, -30, 0, /*behParam*/ 0x02030000, /*beh*/ bhvKoopa,             /*acts*/ ACT_3),
    //OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,             /*pos*/  7400, -1537, -6300, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvKoopaRaceEndpoint, /*acts*/ ACT_3),
    OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -6556, -2969,  6565, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvGoombaTripletSpawner),
    OBJECT(/*model*/ MODEL_GOOMBA,           /*pos*/  6517, -2559,  4327, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvGoomba),
    //OBJECT(/*model*/ MODEL_PIRANHA_PLANT,    /*pos*/ -6336, -2047, -3861, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvFirePiranhaPlant),
    //OBJECT(/*model*/ MODEL_PIRANHA_PLANT,    /*pos*/ -5740, -2047, -6578, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvFirePiranhaPlant),
    //OBJECT(/*model*/ MODEL_PIRANHA_PLANT,    /*pos*/ -6481, -2047, -5998, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvFirePiranhaPlant),
    //OBJECT(/*model*/ MODEL_PIRANHA_PLANT,    /*pos*/ -5577, -2047, -4961, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvFirePiranhaPlant),
    //OBJECT(/*model*/ MODEL_PIRANHA_PLANT,    /*pos*/ -6865, -2047, -4568, /*angle*/ 0,   0, 0, /*behParam*/ 0x00010000, /*beh*/ bhvFirePiranhaPlant),
    //OBJECT(/*model*/ MODEL_NONE,             /*pos*/ -4413,   204, -2140, /*angle*/ 0,   0, 0, /*behParam*/ 0x00030000, /*beh*/ bhvThiBowlingBallSpawner),
    //OBJECT(/*model*/ MODEL_BUBBA,            /*pos*/ -6241, -3300,  -716, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvBubba),
    //OBJECT(/*model*/ MODEL_BUBBA,            /*pos*/  1624, -3300,  8142, /*angle*/ 0,   0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvBubba),
    RETURN(),
]

export const level_thi_entry = [
    INIT_LEVEL(),
    MARIO(MODEL_MARIO, 1, bhvMario),
    JUMP_LINK(script_func_local_1),
    JUMP_LINK(script_func_local_4),
    LOAD_MODEL_FROM_GEO(MODEL_THI_BUBBLY_TREE, bubbly_tree_geo),
    AREA(1, thi_geo_000608),
        TERRAIN(/*terrainData*/ thi_seg7_area_1_collision),
        //MACRO_OBJECTS(/*objList*/ thi_seg7_area_1_macro_objs),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),

    MARIO_POS(/*area*/ 1, /*yaw*/ 149, /*pos*/ -7372, -2969, 7373),
    CALL(0, LevelUpdate.lvl_init_or_update, LevelUpdate),
    CALL_LOOP(1, LevelUpdate.lvl_init_or_update, LevelUpdate),
]