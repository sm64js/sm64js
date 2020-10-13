import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LEVEL_CASTLE_GROUNDS, LEVEL_BOB, LEVEL_CCM } from "./level_defines_constants"
import { level_castle_grounds_entry } from "./castle_grounds/script"
import { level_bob_entry } from "./bob/script"
import { level_ccm_entry } from "./ccm/script"

export const level_defines_list = [
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_BOB, level_bob_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CCM, level_ccm_entry]
    }
]