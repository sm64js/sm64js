import * as _Linker from "../game/Linker"
import { EXECUTE, RETURN, JUMP_IF, OP_EQ, GET_AREA, EXIT } from "../engine/LevelCommands"

import {
    LEVEL_BBH, LEVEL_CCM, LEVEL_CASTLE, LEVEL_HMC, LEVEL_SSL, LEVEL_BOB, LEVEL_SL, LEVEL_WDW, LEVEL_JRB, LEVEL_THI,
    LEVEL_TTC, LEVEL_RR, LEVEL_CASTLE_GROUNDS, LEVEL_BITDW, LEVEL_VCUTM, LEVEL_BITFS, LEVEL_SA, LEVEL_BITS, LEVEL_LLL,
    LEVEL_DDD, LEVEL_WF, LEVEL_ENDING, LEVEL_CASTLE_COURTYARD, LEVEL_PSS, LEVEL_COTMC, LEVEL_TOTWC, LEVEL_BOWSER_1,
    LEVEL_WMOTR, LEVEL_BOWSER_2, LEVEL_BOWSER_3, LEVEL_TTM
} from "./level_defines_constants"

import { level_bbh_entry } from "./bbh/script"
import { level_ccm_entry } from "./ccm/script"
import { level_castle_inside_entry } from "./castle_inside/script"
import { level_hmc_entry } from "./hmc/script"
import { level_ssl_entry } from "./ssl/script"
import { level_bob_entry } from "./bob/script"
import { level_sl_entry } from "./sl/script"
import { level_wdw_entry } from "./wdw/script"
import { level_jrb_entry } from "./jrb/script"
import { level_thi_entry } from "./thi/script"
// import { level_ttc_entry } from "./ttc/script"
// import { level_rr_entry } from "./rr/script"
import { level_castle_grounds_entry } from "./castle_grounds/script"
import { level_bitdw_entry } from "./bitdw/script"
// import { level_vcutm_entry } from "./vcutm/script"
// import { level_bitfs_entry } from "./bitfs/script"
// import { level_sa_entry } from "./sa/script"
// import { level_bits_entry } from "./bits/script"
// import { level_lll_entry } from "./lll/script"
import { level_ddd_entry } from "./ddd/script"
import { level_wf_entry } from "./wf/script"
// import { level_ending_entry } from "./ending/script"
import { level_castle_courtyard_entry } from "./castle_courtyard/script"
import { level_pss_entry } from "./pss/script"
import { level_cotmc_entry } from "./cotmc/script"
// import { level_totwc_entry } from "./totwc/script"
import { level_bowser_1_entry } from "./bowser_1/script"
// import { level_wmotr_entry } from "./wmotr/script"
// import { level_bowser_2_entry } from "./bowser_2/script"
// import { level_bowser_3_entry } from "./bowser_3/script"
import { level_ttm_entry } from "./ttm/script"

const script_exec_bbh              = [ EXECUTE('level_bbh_entry'),              RETURN() ]
const script_exec_ccm              = [ EXECUTE('level_ccm_entry'),              RETURN() ]
const script_exec_castle_inside    = [ EXECUTE('level_castle_inside_entry'),    RETURN() ]
const script_exec_hmc              = [ EXECUTE('level_hmc_entry'),              RETURN() ]
const script_exec_ssl              = [ EXECUTE('level_ssl_entry'),              RETURN() ]
const script_exec_bob              = [ EXECUTE('level_bob_entry'),              RETURN() ]
const script_exec_sl               = [ EXECUTE('level_sl_entry'),               RETURN() ]
const script_exec_wdw              = [ EXECUTE('level_wdw_entry'),              RETURN() ]
const script_exec_jrb              = [ EXECUTE('level_jrb_entry'),              RETURN() ]
const script_exec_thi              = [ EXECUTE('level_thi_entry'),              RETURN() ]
const script_exec_ttc              = [ EXECUTE('level_ttc_entry'),              RETURN() ]
const script_exec_rr               = [ EXECUTE('level_rr_entry'),               RETURN() ]
const script_exec_castle_grounds   = [ EXECUTE('level_castle_grounds_entry'),   RETURN() ]
const script_exec_bitdw            = [ EXECUTE('level_bitdw_entry'),            RETURN() ]
const script_exec_vcutm            = [ EXECUTE('level_vcutm_entry'),            RETURN() ]
const script_exec_bitfs            = [ EXECUTE('level_bitfs_entry'),            RETURN() ]
const script_exec_sa               = [ EXECUTE('level_sa_entry'),               RETURN() ]
const script_exec_bits             = [ EXECUTE('level_bits_entry'),             RETURN() ]
const script_exec_lll              = [ EXECUTE('level_lll_entry'),              RETURN() ]
const script_exec_ddd              = [ EXECUTE('level_ddd_entry'),              RETURN() ]
const script_exec_wf               = [ EXECUTE('level_wf_entry'),               RETURN() ]
const script_exec_ending           = [ EXECUTE('level_ending_entry'),           RETURN() ]
const script_exec_castle_courtyard = [ EXECUTE('level_castle_courtyard_entry'), RETURN() ]
const script_exec_pss              = [ EXECUTE('level_pss_entry'),              RETURN() ]
const script_exec_cotmc            = [ EXECUTE('level_cotmc_entry'),            RETURN() ]
const script_exec_totwc            = [ EXECUTE('level_totwc_entry'),            RETURN() ]
const script_exec_bowser_1         = [ EXECUTE('level_bowser_1_entry'),         RETURN() ]
const script_exec_wmotr            = [ EXECUTE('level_wmotr_entry'),            RETURN() ]
const script_exec_bowser_2         = [ EXECUTE('level_bowser_2_entry'),         RETURN() ]
const script_exec_bowser_3         = [ EXECUTE('level_bowser_3_entry'),         RETURN() ]
const script_exec_ttm              = [ EXECUTE('level_ttm_entry'),              RETURN() ]

export const script_exec_level_table = [
    GET_AREA('gCurrLevelNum'),
    JUMP_IF( OP_EQ, LEVEL_BBH,              script_exec_bbh ),
    JUMP_IF( OP_EQ, LEVEL_CCM,              script_exec_ccm ),
    JUMP_IF( OP_EQ, LEVEL_CASTLE,           script_exec_castle_inside ),
    JUMP_IF( OP_EQ, LEVEL_HMC,              script_exec_hmc ),
    JUMP_IF( OP_EQ, LEVEL_SSL,              script_exec_ssl ),
    JUMP_IF( OP_EQ, LEVEL_BOB,              script_exec_bob ),
    JUMP_IF( OP_EQ, LEVEL_SL,               script_exec_sl ),
    JUMP_IF( OP_EQ, LEVEL_WDW,              script_exec_wdw ),
    JUMP_IF( OP_EQ, LEVEL_JRB,              script_exec_jrb ),
    JUMP_IF( OP_EQ, LEVEL_THI,              script_exec_thi ),
    JUMP_IF( OP_EQ, LEVEL_TTC,              script_exec_ttc ),
    JUMP_IF( OP_EQ, LEVEL_RR,               script_exec_rr ),
    JUMP_IF( OP_EQ, LEVEL_CASTLE_GROUNDS,   script_exec_castle_grounds ),
    JUMP_IF( OP_EQ, LEVEL_BITDW,            script_exec_bitdw ),
    JUMP_IF( OP_EQ, LEVEL_VCUTM,            script_exec_vcutm ),
    JUMP_IF( OP_EQ, LEVEL_BITFS,            script_exec_bitfs ),
    JUMP_IF( OP_EQ, LEVEL_SA,               script_exec_sa ),
    JUMP_IF( OP_EQ, LEVEL_BITS,             script_exec_bits ),
    JUMP_IF( OP_EQ, LEVEL_LLL,              script_exec_lll ),
    JUMP_IF( OP_EQ, LEVEL_DDD,              script_exec_ddd ),
    JUMP_IF( OP_EQ, LEVEL_WF,               script_exec_wf ),
    JUMP_IF( OP_EQ, LEVEL_ENDING,           script_exec_ending ),
    JUMP_IF( OP_EQ, LEVEL_CASTLE_COURTYARD, script_exec_castle_courtyard ),
    JUMP_IF( OP_EQ, LEVEL_PSS,              script_exec_pss ),
    JUMP_IF( OP_EQ, LEVEL_COTMC,            script_exec_cotmc ),
    JUMP_IF( OP_EQ, LEVEL_TOTWC,            script_exec_totwc ),
    JUMP_IF( OP_EQ, LEVEL_BOWSER_1,         script_exec_bowser_1 ),
    JUMP_IF( OP_EQ, LEVEL_WMOTR,            script_exec_wmotr ),
    JUMP_IF( OP_EQ, LEVEL_BOWSER_2,         script_exec_bowser_2 ),
    JUMP_IF( OP_EQ, LEVEL_BOWSER_3,         script_exec_bowser_3 ),
    JUMP_IF( OP_EQ, LEVEL_TTM,              script_exec_ttm ),
    EXIT(),
]

gLinker.level_scripts.script_exec_level_table = script_exec_level_table
