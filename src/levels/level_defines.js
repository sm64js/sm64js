import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LEVEL_CASTLE_GROUNDS, LEVEL_CASTLE_COURTYARD, LEVEL_BOB, LEVEL_CCM, LEVEL_WF, LEVEL_PSS, LEVEL_TTM, LEVEL_HMC, LEVEL_BBH, LEVEL_SSL, LEVEL_MBF, LEVEL_CTF00 } from "./level_defines_constants"

import { level_castle_grounds_entry } from "./castle_grounds/script"


export const level_defines_list = [
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry]
    }
]
