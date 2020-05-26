import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { intro_geo_0002D0 } from "./geo"
import { WARP_TRANSITION_FADE_INTO_COLOR } from "../../game/Area"

export let level_intro_entry_1 = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.alloc_level_pool },
    { command: LevelCommands.begin_area, args: [1, intro_geo_0002D0] },
    { command: LevelCommands.free_level_pool },
    { command: LevelCommands.load_area, args: [1] },
    { command: LevelCommands.sleep, args: [75] },
    { command: LevelCommands.transition, args: [WARP_TRANSITION_FADE_INTO_COLOR, 16, 0, 0, 0] },
    { command: LevelCommands.sleep, args: [16] },
    { command: LevelCommands.unload_area, args: [1] },
    { command: LevelCommands.sleep, args: [2] },
]

// repeat forever
level_intro_entry_1.push(
    { command: LevelCommands.execute, args: [level_intro_entry_1] }
)