import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { level_castle_grounds_entry } from "./castle_grounds/script"
import { LEVEL_CASTLE_GROUNDS } from "./level_defines_constants"

export const level_defines_list = [
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry]
    }
]