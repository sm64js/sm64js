import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { intro_geo_0002D0, intro_geo_00035C } from "./geo"
import { WARP_TRANSITION_FADE_INTO_COLOR, WARP_TRANSITION_FADE_FROM_STAR } from "../../game/Area"
import { level_main_scripts_entry } from "../scripts"
import { lvl_intro_update } from "../../menu/level_select_menu"
import { LEVEL_CASTLE_GROUNDS, LEVEL_CASTLE, LEVEL_CASTLE_2, LEVEL_CASTLE_COURTYARD, LEVEL_BOB, LEVEL_CCM, LEVEL_CCS, LEVEL_PSS, LEVEL_TTM, LEVEL_WF, LEVEL_HMC, LEVEL_BBH, LEVEL_SSL, LEVEL_SL } from "../level_defines_constants"

const getSelectedLevel = () => {
    const mapSelect = document.getElementById("mapSelect").value

    switch (mapSelect) {
        case "Castle Grounds": return LEVEL_CASTLE_GROUNDS
        case "Castle Courtyard": return LEVEL_CASTLE_COURTYARD
        case "Bob-omb Battlefield": return LEVEL_BOB
        case "Cool, Cool Mountain": return LEVEL_CCM
        case "Princess's Secret Slide": return LEVEL_PSS
        case "Tall, Tall Mountain": return LEVEL_TTM
        case "Whomps Fortress": return LEVEL_WF
        case "Hazy Maze Cave": return LEVEL_HMC
        case "Big Boo's Haunt": return LEVEL_BBH
        case "Shifting Sand Land": return LEVEL_SSL
        case "Snowman's Land": return LEVEL_SL
        case "Castle Inside First Level": return LEVEL_CASTLE
        case "Castle Inside Second Level": return LEVEL_CASTLE_2
        case "Cool, Cool Mountain Slide": return LEVEL_CCS
    }

    return LEVEL_CASTLE_GROUNDS
}

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
    ['sleep', 20],
    ['call_loop', 1, lvl_intro_update, null],
    ['unload_area', 1],
    ['set_register', getSelectedLevel],
    ['execute', level_main_scripts_entry]
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
    ['sleep', 75],
    ['transition', WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0],
    ['sleep', 16],
    ['unload_area', 1],
    ['sleep', 2],
    ['execute', level_intro_entry_2]
]

