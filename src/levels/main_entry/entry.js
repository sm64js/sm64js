import { LevelCommandsInstance } from "../../engine/LevelCommands"
import { level_intro_entry_1 } from "../intro/script"

export const level_script_entry = [
    { command: LevelCommandsInstance.init_level },
    { command: LevelCommandsInstance.sleep, args: [2] },
    { command: LevelCommandsInstance.blackout, args: [false] },
    { command: LevelCommandsInstance.set_register, args: [0] },
    { command: LevelCommandsInstance.execute, args: [level_intro_entry_1] } 
]
