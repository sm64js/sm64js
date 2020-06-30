import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { level_castle_grounds_entry } from "./castle_grounds/script"

export const LEVEL_CASTLE_GROUNDS = 16

export const level_defines_list = [
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry]
    }
]