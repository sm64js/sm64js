import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { level_defines_list                 } from "./level_defines"
import { GeoLayoutInstance as Geo           } from "../engine/GeoLayout"
const LAYER_ALPHA = Geo.LAYER_ALPHA

import { ALLOC_LEVEL_POOL, AREA, BLACKOUT, CALL, CALL_LOOP, CLEARDEMOPTR, CLEAR_LEVEL, END_AREA,
         EXECUTE, EXIT, FREE_LEVEL_POOL, GET_AREA, INIT_LEVEL, JUMP_IF, JUMP_LINK, LOAD_AREA,
         LOAD_MARIO_HEAD, LOAD_MIO0, LOAD_MODEL_FROM_GEO, LOAD_MODEL_FROM_DL, LOAD_RAW,
         MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS, RETURN, SET_REG, SLEEP,
         SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, TRANSITION, UNLOAD_AREA,
         LOOP_BEGIN, LOOP_UNTIL, OP_AND, OP_NAND, OP_EQ, OP_NEQ, OP_LT, OP_LEQ, OP_GT, OP_GEQ,
} from "../engine/LevelCommands"

import { MODEL_MARIO, MODEL_SMOKE, MODEL_SPARKLES, MODEL_BUBBLE, MODEL_SMALL_WATER_SPLASH,
         MODEL_IDLE_WATER_WAVE, MODEL_WATER_SPLASH, MODEL_WAVE_TRAIL, MODEL_YELLOW_COIN,
         MODEL_STAR, MODEL_TRANSPARENT_STAR, MODEL_WOODEN_SIGNPOST,
         MODEL_WHITE_PARTICLE_SMALL, MODEL_RED_FLAME, MODEL_BLUE_FLAME, MODEL_BURN_SMOKE,
         MODEL_LEAVES, MODEL_PURPLE_MARBLE, MODEL_FISH, MODEL_FISH_SHADOW, 
         MODEL_SPARKLES_ANIMATION, MODEL_SAND_DUST, MODEL_BUTTERFLY, MODEL_BURN_SMOKE_UNUSED,
         MODEL_PEBBLE, MODEL_MIST, MODEL_WHITE_PUFF, MODEL_WHITE_PARTICLE_DL, 
         MODEL_WHITE_PARTICLE, MODEL_YELLOW_COIN_NO_SHADOW, MODEL_BLUE_COIN,
         MODEL_BLUE_COIN_NO_SHADOW, MODEL_MARIOS_WINGED_METAL_CAP, MODEL_MARIOS_METAL_CAP,       
         MODEL_MARIOS_WING_CAP, MODEL_MARIOS_CAP, MODEL_BOWSER_KEY_CUTSCENE, MODEL_BOWSER_KEY,
         MODEL_RED_FLAME_SHADOW, MODEL_1UP, MODEL_RED_COIN, MODEL_RED_COIN_NO_SHADOW,
         MODEL_NUMBER, MODEL_EXPLOSION, MODEL_DIRT_ANIMATION, MODEL_CARTOON_STAR        } from "../include/model_ids"

import { fish_geo,
         fish_shadow_geo             } from "../actors/blue_fish/geo.inc"
import { bowser_key_cutscene_geo,
         bowser_key_geo              } from "../actors/bowser_key/geo.inc"
import { bubble_geo,
         purple_marble_geo           } from "../actors/bubble/geo.inc"
import { burn_smoke_geo              } from "../actors/burn_smoke/geo.inc"
import { butterfly_geo               } from "../actors/butterfly/geo.inc"
import { red_coin_geo,
         red_coin_no_shadow_geo,
         yellow_coin_geo,
         yellow_coin_no_shadow_geo,
         blue_coin_geo,
         blue_coin_no_shadow_geo     } from "../actors/coin/geo.inc"
import { dirt_animation_geo,
         cartoon_star_geo            } from "../actors/dirt/geo.inc"
import { explosion_geo               } from "../actors/explosion/geo.inc"
import { red_flame_geo,
         red_flame_shadow_geo,
         blue_flame_geo              } from "../actors/flame/geo.inc"
import { leaves_geo                  } from "../actors/leaves/geo.inc"
import { mario_geo                   } from "../actors/mario/geo.inc"
import { marios_cap_geo,
         marios_metal_cap_geo,
         marios_wing_cap_geo,
         marios_winged_metal_cap_geo } from "../actors/mario_cap/geo.inc"
import { mist_geo,
         white_puff_geo              } from "../actors/mist/geo.inc"
import { mushroom_1up_geo            } from "../actors/mushroom_1up/geo.inc"
import { number_geo                  } from "../actors/number/geo.inc"
import { pebble_seg3_dl_0301CB00     } from "../actors/pebble/model.inc"
import { sand_seg3_dl_0302BCD0       } from "../actors/sand/model.inc"
import { sparkles_geo                } from "../actors/sparkle/geo.inc"
import { sparkles_animation_geo      } from "../actors/sparkle_animation/geo.inc"
import { star_geo                    } from "../actors/star/geo.inc"
import { small_water_splash_geo      } from "../actors/stomp_smoke/geo.inc"
import { transparent_star_geo        } from "../actors/transparent_star/geo.inc"
import { smoke_geo                   } from "../actors/walk_smoke/geo.inc"
import { water_splash_geo            } from "../actors/water_splash/geo.inc"
import { idle_water_wave_geo,
        wave_trail_geo               } from "../actors/water_wave/geo.inc"
import { white_particle_geo          } from "../actors/white_particle/geo.inc"
import { white_particle_dl           } from "../actors/white_particle/model.inc"
import { white_particle_small_dl     } from "../actors/white_particle_small/model.inc"
import { wooden_signpost_geo         } from "../actors/wooden_signpost/geo.inc"

import { level_main_menu_entry_2 } from "./menu/script"

import {
    LEVEL_BBH, LEVEL_CCM, LEVEL_CASTLE, LEVEL_HMC, LEVEL_SSL, LEVEL_BOB, LEVEL_SL, LEVEL_WDW, LEVEL_JRB, LEVEL_THI,
    LEVEL_TTC, LEVEL_RR, LEVEL_CASTLE_GROUNDS, LEVEL_BITDW, LEVEL_VCUTM, LEVEL_BITFS, LEVEL_SA, LEVEL_BITS, LEVEL_LLL,
    LEVEL_DDD, LEVEL_WF, LEVEL_ENDING, LEVEL_CASTLE_COURTYARD, LEVEL_PSS, LEVEL_COTMC, LEVEL_TOTWC, LEVEL_BOWSER_1,
    LEVEL_WMOTR, LEVEL_BOWSER_2, LEVEL_BOWSER_3, LEVEL_TTM
} from "./level_defines_constants"

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


const getSelectedLevel = () => {
    const mapSelect = document.getElementById("mapSelect").value

    switch (mapSelect) {
        case "Castle Grounds": return LEVEL_CASTLE_GROUNDS
        case "Castle Courtyard": return LEVEL_CASTLE_COURTYARD
        case "Bob-omb Battlefield": return LEVEL_BOB
        case "Cool, Cool Mountain": return LEVEL_CCM
        case "Princess's Secret Slide": return LEVEL_PSS
        case "Tall, Tall Mountain": return LEVEL_TTM
        case "Whomps Fortress": return LEVEL_WF
        case "Hazy Maze Cave": return LEVEL_HMC
        case "Big Boo's Haunt": return LEVEL_BBH
        case "Shifting Sand Land": return LEVEL_SSL
        case "Snowman's Land": return LEVEL_SL
        case "Castle Inside": return LEVEL_CASTLE
        case "Castle Inside Second Level": return LEVEL_CASTLE_2
        case "Cool, Cool Mountain Slide": return LEVEL_CCS
    }

    return LEVEL_CASTLE_GROUNDS
}


// export const level_defines_list = [
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_BBH, level_bbh_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_BOB, level_bob_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CASTLE, level_castle_inside_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CASTLE_2, level_castle_inside_2_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CASTLE_COURTYARD, level_castle_courtyard_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CASTLE_GROUNDS, level_castle_grounds_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CCM, level_ccm_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CCM_2, level_ccm_2_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_CCS, level_ccs_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_HMC, level_hmc_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_PSS, level_pss_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_SL, level_sl_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_SSL, level_ssl_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_TTM, level_ttm_entry),
//     JUMP_IF(/*op*/ OP_EQ, LEVEL_WF, level_wf_entry),
// ]


export const level_main_scripts_entry = [
    ALLOC_LEVEL_POOL(),
    LOAD_MODEL_FROM_GEO(MODEL_MARIO,                   mario_geo),
    LOAD_MODEL_FROM_GEO(MODEL_SMOKE,                   smoke_geo),
    LOAD_MODEL_FROM_GEO(MODEL_SPARKLES,                sparkles_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BUBBLE,                  bubble_geo),
    LOAD_MODEL_FROM_GEO(MODEL_SMALL_WATER_SPLASH,      small_water_splash_geo),
    LOAD_MODEL_FROM_GEO(MODEL_IDLE_WATER_WAVE,         idle_water_wave_geo),
    LOAD_MODEL_FROM_GEO(MODEL_WATER_SPLASH,            water_splash_geo),
    LOAD_MODEL_FROM_GEO(MODEL_WAVE_TRAIL,              wave_trail_geo),
    LOAD_MODEL_FROM_GEO(MODEL_YELLOW_COIN,             yellow_coin_geo),
    LOAD_MODEL_FROM_GEO(MODEL_STAR,                    star_geo),
    LOAD_MODEL_FROM_GEO(MODEL_TRANSPARENT_STAR,        transparent_star_geo),
    LOAD_MODEL_FROM_GEO(MODEL_WOODEN_SIGNPOST,         wooden_signpost_geo),
    LOAD_MODEL_FROM_DL( MODEL_WHITE_PARTICLE_SMALL,    white_particle_small_dl,     LAYER_ALPHA),
    LOAD_MODEL_FROM_GEO(MODEL_RED_FLAME,               red_flame_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BLUE_FLAME,              blue_flame_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BURN_SMOKE,              burn_smoke_geo),
    LOAD_MODEL_FROM_GEO(MODEL_LEAVES,                  leaves_geo),
    LOAD_MODEL_FROM_GEO(MODEL_PURPLE_MARBLE,           purple_marble_geo),
    LOAD_MODEL_FROM_GEO(MODEL_FISH,                    fish_geo),
    LOAD_MODEL_FROM_GEO(MODEL_FISH_SHADOW,             fish_shadow_geo),
    LOAD_MODEL_FROM_GEO(MODEL_SPARKLES_ANIMATION,      sparkles_animation_geo),
    LOAD_MODEL_FROM_DL( MODEL_SAND_DUST,               sand_seg3_dl_0302BCD0,       LAYER_ALPHA),
    LOAD_MODEL_FROM_GEO(MODEL_BUTTERFLY,               butterfly_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BURN_SMOKE_UNUSED,       burn_smoke_geo),
    LOAD_MODEL_FROM_DL( MODEL_PEBBLE,                  pebble_seg3_dl_0301CB00,     LAYER_ALPHA),
    LOAD_MODEL_FROM_GEO(MODEL_MIST,                    mist_geo),
    LOAD_MODEL_FROM_GEO(MODEL_WHITE_PUFF,              white_puff_geo),
    LOAD_MODEL_FROM_DL( MODEL_WHITE_PARTICLE_DL,       white_particle_dl,           LAYER_ALPHA),
    LOAD_MODEL_FROM_GEO(MODEL_WHITE_PARTICLE,          white_particle_geo),
    LOAD_MODEL_FROM_GEO(MODEL_YELLOW_COIN_NO_SHADOW,   yellow_coin_no_shadow_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BLUE_COIN,               blue_coin_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BLUE_COIN_NO_SHADOW,     blue_coin_no_shadow_geo),
    LOAD_MODEL_FROM_GEO(MODEL_MARIOS_WINGED_METAL_CAP, marios_winged_metal_cap_geo),
    LOAD_MODEL_FROM_GEO(MODEL_MARIOS_METAL_CAP,        marios_metal_cap_geo),
    LOAD_MODEL_FROM_GEO(MODEL_MARIOS_WING_CAP,         marios_wing_cap_geo),
    LOAD_MODEL_FROM_GEO(MODEL_MARIOS_CAP,              marios_cap_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BOWSER_KEY_CUTSCENE,     bowser_key_cutscene_geo),
    LOAD_MODEL_FROM_GEO(MODEL_BOWSER_KEY,              bowser_key_geo),
    LOAD_MODEL_FROM_GEO(MODEL_RED_FLAME_SHADOW,        red_flame_shadow_geo),
    LOAD_MODEL_FROM_GEO(MODEL_1UP,                     mushroom_1up_geo),
    LOAD_MODEL_FROM_GEO(MODEL_RED_COIN,                red_coin_geo),
    LOAD_MODEL_FROM_GEO(MODEL_RED_COIN_NO_SHADOW,      red_coin_no_shadow_geo),
    LOAD_MODEL_FROM_GEO(MODEL_NUMBER,                  number_geo),
    LOAD_MODEL_FROM_GEO(MODEL_EXPLOSION,               explosion_geo),
    LOAD_MODEL_FROM_GEO(MODEL_DIRT_ANIMATION,          dirt_animation_geo),
    LOAD_MODEL_FROM_GEO(MODEL_CARTOON_STAR,            cartoon_star_geo),
    FREE_LEVEL_POOL(),
    CALL(/*arg*/ 0, /*func*/ 'LevelUpdate.lvl_init_from_save_file'),

    SET_REG(getSelectedLevel),  // DEBUG
    LOOP_BEGIN(),
        EXECUTE('level_main_menu_entry_2'),
        JUMP_LINK('script_exec_level_table'),
        SLEEP(/*frames*/ 1),
    LOOP_UNTIL(/*op*/ OP_LT, /*arg*/ 0),

    // LOOP_BEGIN(),
    //     EXECUTE(/*seg*/ 0x14, _menuSegmentRomStart, _menuSegmentRomEnd, level_main_menu_entry_2),
    //     JUMP_LINK(script_exec_level_table),
    //     SLEEP(/*frames*/ 1),
    // LOOP_UNTIL(/*op*/ OP_LT, /*arg*/ 0),
    // JUMP_IF(/*op*/ OP_EQ, /*arg*/ -1, script_L2),
    // JUMP_IF(/*op*/ OP_EQ, /*arg*/ -2, goto_mario_head_regular),
    // JUMP_IF(/*op*/ OP_EQ, /*arg*/ -3, goto_mario_head_dizzy),
    // JUMP_IF(/*op*/ OP_EQ, /*arg*/ -8, script_L1),
    // JUMP_IF(/*op*/ OP_EQ, /*arg*/ -9, script_L5),
]


gLinker.level_scripts.level_main_scripts_entry = level_main_scripts_entry
gLinker.level_scripts.script_exec_level_table = script_exec_level_table
