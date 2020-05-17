import { LevelCommandsInstance } from "../../engine/level_script"
import { intro_geo_0002D0 } from "./geo"

export let level_intro_entry_1 = [
    { command: LevelCommandsInstance.init_level },
    { command: LevelCommandsInstance.alloc_level_pool },
    { command: LevelCommandsInstance.begin_area, args: [1, intro_geo_0002D0] },
    { command: LevelCommandsInstance.sleep, args: [75] }
]

// repeat forever
level_intro_entry_1.push(
    { command: LevelCommandsInstance.execute, args: [/*seg*/ 0x14, /*script*/ null, /*scriptEnd*/ null, /*entry*/ level_intro_entry_1] }
)