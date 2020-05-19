import { LevelCommandsInstance } from "../../engine/LevelCommands"
import { intro_geo_0002D0 } from "./geo"
import { WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"

export let level_intro_entry_1 = [
    { command: LevelCommandsInstance.init_level },
    { command: LevelCommandsInstance.alloc_level_pool },
    { command: LevelCommandsInstance.begin_area, args: [1, intro_geo_0002D0] },
    { command: LevelCommandsInstance.free_level_pool },
    { command: LevelCommandsInstance.load_area, args: [1] },
    { command: LevelCommandsInstance.sleep, args: [75] },
    { command: LevelCommandsInstance.transition, args: [WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0] },
    { command: LevelCommandsInstance.sleep, args: [16] },
    { command: LevelCommandsInstance.unload_area, args: [1] }
]

// repeat forever
level_intro_entry_1.push(
    { command: LevelCommandsInstance.execute, args: [/*seg*/ 0x14, /*script*/ null, /*scriptEnd*/ null, /*entry*/ level_intro_entry_1] }
)