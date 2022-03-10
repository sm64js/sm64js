import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"

import { ALLOC_LEVEL_POOL, AREA, BLACKOUT, CALL, CALL_LOOP, CLEARDEMOPTR, CLEAR_LEVEL, END_AREA,
    EXECUTE, EXIT, FREE_LEVEL_POOL, GET_AREA, INIT_LEVEL, JUMP_LINK, LOAD_AREA,
    LOAD_MARIO_HEAD, LOAD_MIO0, LOAD_MODEL_FROM_GEO, LOAD_MODEL_FROM_DL, LOAD_RAW,
    MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS, RETURN, SET_REGISTER, SLEEP,
    SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, TRANSITION, UNLOAD_AREA
} from "../../engine/LevelCommands"

import { intro_geo_0002D0, intro_geo_00035C } from "./geo"
import { WARP_TRANSITION_FADE_FROM_STAR, WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"
import { level_main_scripts_entry } from "../scripts"
import { lvl_intro_update, intro_default } from "../../menu/level_select_menu"
import { getSelectedLevel } from "../../utils"

const level_intro_entry_2 = [
    INIT_LEVEL(),
    BLACKOUT(true),
    LOAD_MARIO_HEAD(LevelCommands.REGULAR_FACE),
    ALLOC_LEVEL_POOL(),
    AREA(1, intro_geo_00035C),
    END_AREA(),
    FREE_LEVEL_POOL(),
    SLEEP(2),
    BLACKOUT(false),
    CLEARDEMOPTR(),
    /// Get Set script variable 
    /// Jump IF
    LOAD_AREA(1),
    /// Set Menu Music
    TRANSITION(WARP_TRANSITION_FADE_FROM_STAR, 20, 0, 0, 0),
    SLEEP(20),
    CALL_LOOP(1, intro_default, null),
    UNLOAD_AREA(1),
    SET_REGISTER(getSelectedLevel),
    EXECUTE(level_main_scripts_entry),
    /// Jump If
    /// Jump IF
    /// JUMP
]

export const level_intro_entry_1 = [
    // joe debug:
    // debug short circuit to selected level
    // SET_REGISTER(getSelectedLevel),
    // EXECUTE(level_main_scripts_entry),

    INIT_LEVEL(),
    ALLOC_LEVEL_POOL(),
    AREA(1, intro_geo_0002D0),
    END_AREA(),
    FREE_LEVEL_POOL(),
    // Call lvl intro update with var 0 - play sound its a me mario
    LOAD_AREA(1),
    SLEEP(75),
    TRANSITION(WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0),
    SLEEP(16),
    UNLOAD_AREA(1),
    SLEEP(2),
    EXECUTE(level_intro_entry_2),
]

