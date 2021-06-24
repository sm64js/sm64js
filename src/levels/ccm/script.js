// Ccm

import {
    OBJECT, RETURN, OBJECT_WITH_ACTS, INIT_LEVEL, MARIO, JUMP_LINK, LOAD_MODEL_FROM_GEO, AREA,
    WARP_NODE, TERRAIN, MACRO_OBJECTS, SHOW_DIALOG, SET_BACKGROUND_MUSIC, TERRAIN_TYPE, END_AREA,
    MARIO_POS, CALL, CALL_LOOP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, EXIT
} from "../../engine/LevelCommands"

import {
    MODEL_CCM_ROPEWAY_LIFT, MODEL_PENGUIN, MODEL_MR_BLIZZARD, MODEL_CCM_SNOWMAN_BASE, MODEL_NONE,
    MODEL_CCM_SNOWMAN_HEAD, MODEL_STAR, MODEL_MARIO, MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04, MODEL_LEVEL_GEOMETRY_05, MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07, MODEL_CCM_CABIN_DOOR, MODEL_CCM_SNOW_TREE
} from "../../include/model_ids"

import {
    script_func_global_1, /*script_func_global_8,*/ script_func_global_17
} from "../global_scripts"

import { ccm_geo_00042C } from "./areas/1/6/geo.inc"

import { ccm_geo_00045C } from "./areas/1/7/geo.inc"

import { ccm_geo_000494 } from "./areas/1/8/geo.inc"

import { ccm_geo_0004BC } from "./areas/1/9/geo.inc"

import { ccm_geo_0004E4 } from "./areas/1/10/geo.inc"

import { ccm_geo_0003D0 } from "./ropeway_lift/geo.inc"

import { ccm_geo_00051C } from "./areas/1/geo.inc"

import {
    LEVEL_CCM, LEVEL_CASTLE
} from "../level_defines_constants"

import { WARP_NO_CHECKPOINT } from "../../engine/LevelCommands"

import { ccm_seg7_area_1_collision } from "./areas/1/collision.inc"

import { ccm_seg7_area_1_macro_objs } from "./areas/1/macro.inc"

import { DIALOG_048 } from "../../text/us/dialogs"

import {
    SEQ_LEVEL_SNOW, SEQ_LEVEL_SLIDE
} from "../../include/seq_ids"

import {
    TERRAIN_SNOW, TERRAIN_SLIDE
} from "../../include/surface_terrains"

import { ccm_geo_0005E8 } from "./areas/2/geo.inc"

import { ccm_seg7_area_2_collision } from "./areas/2/collision.inc"

import { ccm_seg7_area_2_macro_objs } from "./areas/2/macro.inc"

import { cabin_door_geo } from "../../actors/door/geo.inc"

import { snow_tree_geo } from "../../actors/tree/geo.inc"

import { ccm_geo_00040C } from "./snowman_head/geo.inc"
import { ccm_geo_0003F0 } from "./snowman_base/geo.inc"

import { ALL_ACTS, ACT_2, ACT_3, ACT_4, ACT_5, ACT_6 } from "../../include/model_ids"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_CCM_ROPEWAY_LIFT,  /*pos*/ 531,  -4430,  6426,     /*angle*/ 0,    0,  0,  /*behParam*/ 0x07120000,  /*beh*/ 'bhvPlatformOnTrack'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_PENGUIN,           /*pos*/  2650,  -3735,   3970,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvSmallPenguin'),
    OBJECT(/*model*/ MODEL_PENGUIN,           /*pos*/  -555,   3470,  -1000,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSmallPenguin'),
    OBJECT(/*model*/ MODEL_MR_BLIZZARD,       /*pos*/ -2376,  -1589,   4256,  /*angle*/ 0,  252,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvMrBlizzard'),
    OBJECT(/*model*/ MODEL_MR_BLIZZARD,       /*pos*/  -394,  -1589,   4878,  /*angle*/ 0,   74,  0,  /*behParam*/ 0x00010000,  /*beh*/ 'bhvMrBlizzard'),
    OBJECT_WITH_ACTS(/*model*/ MODEL_CCM_SNOWMAN_BASE,  /*pos*/  2560,   2662,  -1122,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvSnowmansBottom',  /*acts*/ ACT_5),
    RETURN(),
];

const script_func_local_3 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,              /*pos*/  2665,  -4607,   4525,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvCcmTouchedStarSpawn',  /*act*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_PENGUIN,           /*pos*/  3450,  -4700,   4550,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x01000000,  /*beh*/ 'bhvTuxiesMother',           /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_NONE,              /*pos*/  4200,   -927,    400,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x03000000,  /*beh*/ 'bhvHiddenRedCoinStar',    /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_CCM_SNOWMAN_HEAD,  /*pos*/ -4230,  -1169,   1813,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x04000000,  /*beh*/ 'bhvSnowmansHead',           /*acts*/ ALL_ACTS),
    OBJECT_WITH_ACTS(/*model*/ MODEL_STAR,              /*pos*/ -2000,  -2200,  -3000,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x05000000,  /*beh*/ 'bhvStar',                    /*acts*/ ALL_ACTS),
    RETURN(),
];

const script_func_local_4 = [
    OBJECT_WITH_ACTS(/*model*/ MODEL_PENGUIN,  /*pos*/ -4952,   6656,  -6075,  /*angle*/ 0,  270,  0,  /*behParam*/ 0x02000000,  /*beh*/ 'bhvRacingPenguin',    /*acts*/ ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6),
    OBJECT(/*model*/ MODEL_NONE,     /*pos*/ -6500,  -5836,  -6400,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvPenguinRaceFinishLine'),
    OBJECT(/*model*/ MODEL_NONE,     /*pos*/ -6393,   -716,   7503,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvPenguinRaceShortcutCheck'),
//#ifndef VERSION_JP
//    OBJECT(/*model*/ MODEL_NONE,     /*pos*/ -4943,   1321,    667,  /*angle*/ 0,    0,  0,  /*behParam*/ 0x00000000,  /*beh*/ 'bhvPlaysMusicTrackWhenTouched'), murica
//#endif
    RETURN(),
];

export const level_ccm_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    //JUMP_LINK(script_func_global_8),
    JUMP_LINK(script_func_global_17),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,  ccm_geo_00042C),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_04,  ccm_geo_00045C),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_05,  ccm_geo_000494),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_06,  ccm_geo_0004BC),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_07,  ccm_geo_0004E4),
    LOAD_MODEL_FROM_GEO(MODEL_CCM_CABIN_DOOR,     cabin_door_geo),
    LOAD_MODEL_FROM_GEO(MODEL_CCM_SNOW_TREE,      snow_tree_geo),
    LOAD_MODEL_FROM_GEO(MODEL_CCM_ROPEWAY_LIFT,   ccm_geo_0003D0),
    LOAD_MODEL_FROM_GEO(MODEL_CCM_SNOWMAN_BASE,   ccm_geo_0003F0),
    LOAD_MODEL_FROM_GEO(MODEL_CCM_SNOWMAN_HEAD,   ccm_geo_00040C),

    AREA(/*index*/ 1,  ccm_geo_00051C),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -1512,   3560,  -2305,  /*angle*/ 0,   140,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvSpinAirborneWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  -181,   2918,  -1486,  /*angle*/ 0,     0,  0,  /*behParam*/ 0x0F1E0000,  /*beh*/ 'bhvWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -1847,   2815,   -321,  /*angle*/ 0,  -158,  0,  /*behParam*/ 0x001F0000,  /*beh*/ 'bhvFadingWarp'),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/  3349,  -4694,   -183,  /*angle*/ 0,   -34,  0,  /*behParam*/ 0x00200000,  /*beh*/ 'bhvFadingWarp'),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x01,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x14,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x02,  /*destNode*/ 0x14,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x1E,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x1F,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x01,  /*destNode*/ 0x20,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x20,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x01,  /*destNode*/ 0x1F,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x33,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x65,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_1),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_3),
        TERRAIN(/*terrainData*/ ccm_seg7_area_1_collision),
        MACRO_OBJECTS(/*objList*/ ccm_seg7_area_1_macro_objs),
        SHOW_DIALOG(/*index*/ 0x00,  DIALOG_048),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000,  /*seq*/ SEQ_LEVEL_SNOW),
        //TERRAIN_TYPE(/*terrainType*/ TERRAIN_SNOW),
    END_AREA(),

    AREA(/*index*/ 2,  ccm_geo_0005E8),
        OBJECT(/*model*/ MODEL_NONE,  /*pos*/ -5836,  7465,  -6143,  /*angle*/ 0,  90,  0,  /*behParam*/ 0x000A0000,  /*beh*/ 'bhvAirborneWarp'),
        WARP_NODE(/*id*/ 0x14,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x01,  /*destNode*/ 0x14,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0x0A,  /*destLevel*/ LEVEL_CCM,  /*destArea*/ 0x02,  /*destNode*/ 0x0A,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x33,  /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1,  /*destLevel*/ LEVEL_CASTLE,  /*destArea*/ 0x01,  /*destNode*/ 0x65,  /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_4),
        TERRAIN(/*terrainData*/ ccm_seg7_area_2_collision),
        MACRO_OBJECTS(/*objList*/ ccm_seg7_area_2_macro_objs),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0001,  /*seq*/ SEQ_LEVEL_SLIDE),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_SLIDE),
    END_AREA(),

    MARIO_POS(/*area*/ 1,  /*yaw*/ 140,  /*pos*/ -1512,  2560,  -2305),
    CALL(/*arg*/ 0,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1,  /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];


gLinker.level_scripts.level_ccm_entry = level_ccm_entry

// 2021-05-31 10:28:57 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
