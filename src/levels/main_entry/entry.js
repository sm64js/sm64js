import { LevelCommandsInstance } from "../../engine/LevelCommands"
import { LEVEL_CASTLE_GROUNDS } from "../level_defines_constants"
import { level_main_scripts_entry } from "../scripts"

export const level_script_entry = [
    { command: LevelCommandsInstance.init_level },
    { command: LevelCommandsInstance.set_register, args: [LEVEL_CASTLE_GROUNDS] },
    { command: LevelCommandsInstance.execute, args: [level_main_scripts_entry] }
]
