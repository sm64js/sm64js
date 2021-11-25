import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { intro_geo_0002D0, intro_geo_00035C } from "./geo"
import { WARP_TRANSITION_FADE_FROM_STAR, WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"
import { level_main_scripts_entry } from "../scripts"
import { lvl_intro_update, intro_default } from "../../menu/level_select_menu"
import { getSelectedLevel } from "../../utils"

const level_intro_entry_2 = [
    ['init_level'],
    ['blackout', true],
    ['load_mario_head', LevelCommands.REGULAR_FACE],
    ['alloc_level_pool'],
    ['begin_area', 1, intro_geo_00035C],
    ['end_area'],
    ['free_level_pool'],
    ['sleep', 2],
    ['blackout', false],
    ['cleardemoptr'],
    /// Get Set script variable 
    /// Jump IF
    ['load_area', 1],
    /// Set Menu Music
    ['transition', WARP_TRANSITION_FADE_FROM_STAR, 20, 0, 0, 0],
    ['call_loop', 1, intro_default, null],
    ['unload_area', 1],
    ['set_register', getSelectedLevel],
    ['execute', level_main_scripts_entry],
    /// Jump If
    /// Jump IF
    /// JUMP
]

export const level_intro_entry_1 = [
    ['init_level'],
    ['alloc_level_pool'],
    ['begin_area', 1, intro_geo_0002D0],
    ['end_area'],
    ['free_level_pool'],
    // Call lvl intro update with var 0 - play sound its a me mario
    ['load_area', 1],
    ['sleep', 100],
    ['transition', WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0],
    ['sleep', 16],
    ['unload_area', 1],
    ['sleep', 2],
    ['execute', level_intro_entry_2]
]

