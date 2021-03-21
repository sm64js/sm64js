import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LEVEL_CASTLE_GROUNDS, LEVEL_BOB, LEVEL_CCM, LEVEL_CCS, LEVEL_WF, LEVEL_PSS, LEVEL_TTM, LEVEL_HMC, LEVEL_BBH, LEVEL_CASTLE_COURTYARD, LEVEL_SSL, LEVEL_SL, LEVEL_CASTLE, LEVEL_CASTLE_2 } from "./level_defines_constants"

import { level_castle_grounds_entry } from "./castle_grounds/script"
import { level_bob_entry } from "./bob/script"
import { level_ccm_entry } from "./ccm/script"
import { level_ccs_entry } from "./ccs/script"
import { level_pss_entry } from "./pss/script"
import { level_ttm_entry } from "./ttm/script"
import { level_wf_entry } from "./wf/script"
import { level_hmc_entry } from "./hmc/script"
import { level_bbh_entry } from "./bbh/script"
import { level_castle_courtyard_entry } from "./castle_courtyard/script"
import { level_ssl_entry } from "./ssl/script"
import { level_sl_entry } from "./sl/script"
import { level_castle_inside_entry } from "./castle_inside/script_1"
import { level_castle_inside_2_entry } from "./castle_inside/script_2"

export const level_defines_list = [
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_COURTYARD, level_castle_courtyard_entry]
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
        args: [LevelCommands.OP_EQ, LEVEL_CCS, level_ccs_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_PSS, level_pss_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_TTM, level_ttm_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_WF, level_wf_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_HMC, level_hmc_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_BBH, level_bbh_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_SSL, level_ssl_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_SL, level_sl_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE, level_castle_inside_entry]
    },
    {
        command: LevelCommands.jump_if,
        args: [LevelCommands.OP_EQ, LEVEL_CASTLE_2, level_castle_inside_2_entry]
    }
]
