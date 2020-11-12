import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LEVEL_CASTLE_GROUNDS, LEVEL_BOB, LEVEL_CCM, LEVEL_WF, LEVEL_PSS, LEVEL_DDD, LEVEL_TTM, LEVEL_THI_3 } from "./level_defines_constants"
import { level_castle_grounds_entry } from "./castle_grounds/script"
import { level_bob_entry } from "./bob/script"
import { level_ccm_entry } from "./ccm/script"
import { level_pss_entry } from "./pss/script"
import { level_ddd_entry } from "./ddd/script"
import { level_ttm_entry } from "./ttm/script"
import { level_thi_area_3_entry } from "./thi_3/script"

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
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_PSS, level_pss_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_DDD, level_ddd_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_TTM, level_ttm_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_THI_3, level_thi_area_3_entry]
    }
]
