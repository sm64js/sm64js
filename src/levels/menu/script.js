import { INIT_LEVEL, ALLOC_LEVEL_POOL, LOAD_MODEL_FROM_GEO, AREA, OBJECT, END_AREA,
    FREE_LEVEL_POOL, LOAD_AREA, /*SET_MENU_MUSIC,*/ TRANSITION, CALL, CALL_LOOP, /*GET_OR_SET,*/
    /*STOP_MUSIC*/ SLEEP, CLEAR_LEVEL, SLEEP_BEFORE_EXIT, SET_REG, EXIT_AND_EXECUTE,
    JUMP_IF, LOAD_MIO0, LOAD_RAW, TERRAIN, LABEL, EXIT, OP_EQ, OP_NEQ, FIXED_LOAD
} from "../../engine/LevelCommands"

import { WARP_TRANSITION_FADE_FROM_COLOR, WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"

import {
    geo_menu_act_selector_strings
} from "./geo"

import {
    main_menu_seg7_collision
} from "./leveldata"

import { MODEL_NONE, MODEL_MAIN_MENU_MARIO_SAVE_BUTTON, MODEL_MAIN_MENU_RED_ERASE_BUTTON, MODEL_MAIN_MENU_BLUE_COPY_BUTTON, 
    MODEL_MAIN_MENU_YELLOW_FILE_BUTTON, MODEL_MAIN_MENU_GREEN_SCORE_BUTTON, MODEL_MAIN_MENU_MARIO_SAVE_BUTTON_FADE,
    MODEL_MAIN_MENU_MARIO_NEW_BUTTON, MODEL_MAIN_MENU_MARIO_NEW_BUTTON_FADE, MODEL_MAIN_MENU_PURPLE_SOUND_BUTTON,
    MODEL_MAIN_MENU_GENERIC_BUTTON
} from "../../include/model_ids"

import { 
    geo_menu_mario_save_button,
    geo_menu_erase_button,
    geo_menu_copy_button,
    geo_menu_file_button,
    geo_menu_score_button,
    geo_menu_mario_save_button_fade,
    geo_menu_mario_new_button,
    geo_menu_mario_new_button_fade,
    geo_menu_sound_button,
    geo_menu_generic_button,
    geo_menu_file_select_strings_and_menu_cursor
} from "./geo"

import { LEVEL_CASTLE_GROUNDS } from "../level_defines_constants"

const level_main_menu_entry_1 = [
    INIT_LEVEL(),
    FIXED_LOAD(),
    LOAD_MIO0(),
    LOAD_RAW(),
    ALLOC_LEVEL_POOL(),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_MARIO_SAVE_BUTTON,      geo_menu_mario_save_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_RED_ERASE_BUTTON,       geo_menu_erase_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_BLUE_COPY_BUTTON,       geo_menu_copy_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_YELLOW_FILE_BUTTON,     geo_menu_file_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_GREEN_SCORE_BUTTON,     geo_menu_score_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_MARIO_SAVE_BUTTON_FADE, geo_menu_mario_save_button_fade),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_MARIO_NEW_BUTTON,       geo_menu_mario_new_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_MARIO_NEW_BUTTON_FADE,  geo_menu_mario_new_button_fade),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_PURPLE_SOUND_BUTTON,    geo_menu_sound_button),
    LOAD_MODEL_FROM_GEO(MODEL_MAIN_MENU_GENERIC_BUTTON,         geo_menu_generic_button),

    AREA(/*index*/ 1, geo_menu_file_select_strings_and_menu_cursor),
        OBJECT(/*model*/ MODEL_NONE,         /*pos*/ 0, 0, -19000, /*angle*/ 0, 0, 0, /*behParam*/ 0x04000000, /*beh*/ 'bhvMenuButtonManager'),
        OBJECT(/*model*/ MODEL_MAIN_MENU_YELLOW_FILE_BUTTON, /*pos*/ 0, 0, -19000, /*angle*/ 0, 0, 0, /*behParam*/ 0x04000000, /*beh*/ 'bhvYellowBackgroundInMenu'),
        TERRAIN(/*terrainData*/ main_menu_seg7_collision),
    END_AREA(),

    FREE_LEVEL_POOL(),
    LOAD_AREA(/*area*/ 1),
    // SET_MENU_MUSIC(/*seq*/ 0x0021),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_FROM_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    // CALL(/*arg*/ 0, /*func*/ lvl_init_menu_values_and_cursor_pos),
    // CALL_LOOP(/*arg*/ 0, /*func*/ lvl_update_obj_and_load_file_selected),
    // GET_OR_SET(/*op*/ OP_SET, /*var*/ VAR_CURR_SAVE_FILE_NUM),
    // STOP_MUSIC(/*fadeOutTime*/ 0x00BE),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP_BEFORE_EXIT(/*frames*/ 1),
    SET_REG(/*value*/ LEVEL_CASTLE_GROUNDS),
    EXIT_AND_EXECUTE('level_main_scripts_entry'),
]

export const level_main_menu_entry_2 = [
    /*0*/ CALL(/*arg*/ 0, /*func*/ 'LevelUpdate.lvl_set_current_level'),
    /*2*/ JUMP_IF(/*op*/ OP_EQ, /*arg*/ 0, null, 42),
    /*2*/ JUMP_IF(/*op*/ OP_NEQ, /*arg*/ 0, null, 42),
    /*5*/ INIT_LEVEL(),
    /*6*/ FIXED_LOAD(),
    /*10*/ LOAD_MIO0(),
    /*13*/ ALLOC_LEVEL_POOL(),

    /*14*/ AREA(/*index*/ 2, geo_menu_act_selector_strings),
        /*16*/ OBJECT(/*model*/ MODEL_NONE, /*pos*/ 0, -100, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x04000000, /*beh*/ 'bhvActSelector'),
        /*22*/ TERRAIN(/*terrainData*/ main_menu_seg7_collision),
    /*24*/ END_AREA(),

    /*25*/ FREE_LEVEL_POOL(),
    /*26*/ LOAD_AREA(/*area*/ 2),
           // sVisibleStars is set to 0 during FIXED_LOAD above on N64, but not when NO_SEGMENTED_MEMORY is used.
           // lvl_init_act_selector_values_and_stars must be called here otherwise the previous
           // value is retained and causes incorrect drawing during the 16 transition frames.
           CALL(/*arg*/ 0, /*func*/ 'lvl_init_act_selector_values_and_stars'),
    /*27*/ TRANSITION(/*transType*/ WARP_TRANSITION_FADE_FROM_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    /*29*/ SLEEP(/*frames*/ 16),
//    /*30*/ SET_MENU_MUSIC(/*seq*/ 0x000D),
    /*31*/ CALL(/*arg*/ 0, /*func*/ 'lvl_init_act_selector_values_and_stars'),
    /*33*/ CALL_LOOP(/*arg*/ 0, /*func*/ 'lvl_update_obj_and_load_act_button_actions'),
//    /*35*/ GET_OR_SET(/*op*/ OP_SET, /*var*/ VAR_CURR_ACT_NUM),
//    /*36*/ STOP_MUSIC(/*fadeOutTime*/ 0x00BE),
    /*37*/ TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    /*39*/ SLEEP(/*frames*/ 16),
    /*40*/ CLEAR_LEVEL(),
    /*41*/ SLEEP_BEFORE_EXIT(/*frames*/ 1),
    // L1:
           LABEL(42),
    /*42*/ EXIT(),
]

gLinker.level_scripts.level_main_menu_entry_1 = level_main_menu_entry_1
gLinker.level_scripts.level_main_menu_entry_2 = level_main_menu_entry_2
