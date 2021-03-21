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

const level_intro_entry_2 = () => {
    return [
        { command: LevelCommands.init_level },
        { command: LevelCommands.blackout, args: [true] },
        { command: LevelCommands.load_mario_head, args: [LevelCommands.REGULAR_FACE] },
        { command: LevelCommands.alloc_level_pool },
        { command: LevelCommands.begin_area, args: [1, intro_geo_00035C] },
        { command: LevelCommands.end_area },
        { command: LevelCommands.free_level_pool },
        { command: LevelCommands.sleep, args: [2] },
        { command: LevelCommands.blackout, args: [false] },
        { command: LevelCommands.cleardemoptr },
        /// Get Set script variable 
        /// Jump IF
        { command: LevelCommands.load_area, args: [1] },
        /// Set Menu Music
        { command: LevelCommands.transition, args: [WARP_TRANSITION_FADE_FROM_STAR, 20, 0, 0, 0] },
        { command: LevelCommands.sleep, args: [20] },
        { command: LevelCommands.call_loop, args: [1, lvl_intro_update, null] },
        { command: LevelCommands.unload_area, args: [1] },
        { command: LevelCommands.set_register, args: [getSelectedLevel] },
        { command: LevelCommands.execute, args: [level_main_scripts_entry] }
        /// Jump If
        /// Jump IF
        /// JUMP
    ]
}

export const level_intro_entry_1 = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.alloc_level_pool },
    { command: LevelCommands.begin_area, args: [1, intro_geo_0002D0] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.free_level_pool },
    // Call lvl intro update with var 0 - play sound its a me mario
    { command: LevelCommands.load_area, args: [1] },
    { command: LevelCommands.sleep, args: [75] },
    { command: LevelCommands.transition, args: [WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0] }, 
    { command: LevelCommands.sleep, args: [16] },
    { command: LevelCommands.unload_area, args: [1] },
    { command: LevelCommands.sleep, args: [2] },
    { command: LevelCommands.execute, args: [level_intro_entry_2] }
]

