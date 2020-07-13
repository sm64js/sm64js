import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { intro_geo_0002D0, intro_geo_00035C } from "./geo"
import { WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"
import { LEVEL_CASTLE_GROUNDS } from "../level_defines"
import { level_main_scripts_entry } from "../scripts"

export let level_intro_entry_2 = [
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
    /// Transition WARP_TRANSITION_FADE_FROM_STAR
    { command: LevelCommands.sleep, args: [160000000] },
    /// Call Loop
    /// Jump If
    /// Jump IF
    /// JUMP
]

export let level_intro_entry_1 = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.alloc_level_pool },
    { command: LevelCommands.begin_area, args: [1, intro_geo_0002D0] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.free_level_pool },
    // Call lvl intro update with var 0 - play sound its a me mario
    { command: LevelCommands.load_area, args: [1] },
    { command: LevelCommands.sleep, args: [75] },
    { command: LevelCommands.transition, args: [WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0] }, /// implement this
    { command: LevelCommands.sleep, args: [16] },
    { command: LevelCommands.unload_area, args: [1] },
    { command: LevelCommands.sleep, args: [2] },
    { command: LevelCommands.set_register, args: [LEVEL_CASTLE_GROUNDS] },
    { command: LevelCommands.execute, args: [level_main_scripts_entry] }
]

