import { AREA, CALL, CALL_LOOP, CLEAR_LEVEL, END_AREA, EXIT, FREE_LEVEL_POOL, INIT_LEVEL, JUMP_LINK, LOAD_MODEL_FROM_GEO, MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, RETURN, SET_BACKGROUND_MUSIC, SHOW_DIALOG, SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, WARP_NODE, WARP_NO_CHECKPOINT } from "../../engine/LevelCommands";
import { MODEL_CAP_SWITCH, MODEL_LEVEL_GEOMETRY_03, MODEL_MARIO, MODEL_NONE } from "../../include/model_ids";
import { SEQ_LEVEL_SLIDE } from "../../include/seq_ids";
import { TERRAIN_STONE } from "../../include/surface_terrains";
import { DIALOG_131 } from "../../text/us/dialogs";
import { script_func_global_1, script_func_global_9 } from "../global_scripts";
import { LEVEL_CASTLE, LEVEL_TOTWC } from "../level_defines_constants";
import { totwc_seg7_collision } from "./areas/1/collision.inc";
import { totwc_geo_000188 } from "./areas/1/geo.inc";
import { totwc_seg7_macro_objs } from "./areas/1/macro.inc";
import { totwc_geo_000160 } from "./cloud/geo.inc";

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_CAP_SWITCH, /*pos*/   0, -2047, 10, /*angle*/ 0, 0, 0, /*bhvParam*/ 0, /*bhv*/ 'bhvCapSwitch'),
    RETURN(),
];

const script_func_local_2 = [
    OBJECT(/*model*/ MODEL_NONE,       /*pos*/ 800, -1700,  0, /*angle*/ 0, 0, 0, /*bhvParam*/ 0, /*bhv*/ 'bhvHiddenRedCoinStar'),
    RETURN(),
];

export const level_totwc_entry = [
    INIT_LEVEL(),
    MARIO(/*model*/ MODEL_MARIO,  /*behParam*/ 0x00000001,  /*beh*/ 'bhvMario'),
    JUMP_LINK(script_func_global_1),
    JUMP_LINK(script_func_global_9),
    LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03, totwc_geo_000160),

    AREA(/*index*/ 1, totwc_geo_000188),
        OBJECT(/*model*/ MODEL_NONE, /*pos*/ -4095, 2935, 0, /*angle*/ 0, 90, 0, /*bhvParam*/ 0x000A0000, /*bhv*/ 'bhvFlyingWarp'),
        WARP_NODE(/*id*/ 0x0A, /*destLevel*/ LEVEL_TOTWC,  /*destArea*/ 1, /*destNode*/ 0x0A, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF3, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 1, /*destNode*/ 0x20, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF0, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 1, /*destNode*/ 0x26, /*flags*/ WARP_NO_CHECKPOINT),
        WARP_NODE(/*id*/ 0xF1, /*destLevel*/ LEVEL_CASTLE, /*destArea*/ 1, /*destNode*/ 0x23, /*flags*/ WARP_NO_CHECKPOINT),
        JUMP_LINK(script_func_local_2),
        JUMP_LINK(script_func_local_1),
        TERRAIN(/*terrainData*/ totwc_seg7_collision),
        MACRO_OBJECTS(/*objList*/ totwc_seg7_macro_objs),
        SHOW_DIALOG(/*index*/ 0x00, DIALOG_131),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_SLIDE),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_STONE),
    END_AREA(),

    MARIO_POS(/*area*/ 1, /*yaw*/ 90, /*pos*/ -4095, 2935, 0),
    CALL(/*arg*/ 0, /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CALL_LOOP(/*arg*/ 1, /*func*/ 'LevelUpdate.lvl_init_or_update'),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    EXIT(),
];

gLinker.level_scripts.level_totwc_entry = level_totwc_entry