import * as MODEL from "../include/model_ids"
import { LAYER_ALPHA, LAYER_OPAQUE } from "../engine/GeoLayout"

import { ALLOC_LEVEL_POOL, AREA, BLACKOUT, CALL, CALL_LOOP, CLEARDEMOPTR, CLEAR_LEVEL, END_AREA,
         EXECUTE, EXIT, FREE_LEVEL_POOL, GET_AREA, INIT_LEVEL, JUMP_LINK, LOAD_AREA,
         LOAD_MARIO_HEAD, LOAD_MIO0, LOAD_MODEL_FROM_GEO, LOAD_MODEL_FROM_DL, LOAD_RAW,
         MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS, RETURN, SET_REG, SLEEP,
         SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, TRANSITION, UNLOAD_AREA
} from "../engine/LevelCommands"

// geos
import { amp_geo                     } from "../actors/amp/geo.inc"
import { birds_geo                   } from "../actors/bird/geo.inc"
import { blue_coin_switch_geo        } from "../actors/blue_coin_switch/geo.inc"
import { black_bobomb_geo            } from "../actors/bobomb/geo.inc"
import { bobomb_buddy_geo            } from "../actors/bobomb/geo.inc"
import { bowling_ball_geo            } from "../actors/bowling_ball/geo.inc"
import { bowling_ball_track_geo      } from "../actors/bowling_ball/geo.inc"
import { breakable_box_geo           } from "../actors/breakable_box/geo.inc"
import { breakable_box_small_geo     } from "../actors/breakable_box/geo.inc"
import { cannon_barrel_geo           } from "../actors/cannon_barrel/geo.inc"
import { cannon_base_geo             } from "../actors/cannon_base/geo.inc"
import { chain_chomp_geo             } from "../actors/chain_chomp/geo.inc"
import { checkerboard_platform_geo   } from "../actors/checkerboard_platform/geo.inc"
import { chuckya_geo                 } from "../actors/chuckya/geo.inc"
import { exclamation_box_geo         } from "../actors/exclamation_box/geo.inc"
import { exclamation_box_outline_geo } from "../actors/exclamation_box_outline/geo.inc"
import { flyguy_geo                  } from "../actors/flyguy/geo.inc"
import { goomba_geo                  } from "../actors/goomba/geo.inc"
import { heart_geo                   } from "../actors/heart/geo.inc"
import { koopa_shell_geo             } from "../actors/koopa_shell/geo.inc"
import { metal_box_geo               } from "../actors/metal_box/geo.inc"
import { metal_box_dl                } from "../actors/metal_box/model.inc"
import { metallic_ball_geo           } from "../actors/chain_ball/geo.inc"
import { purple_switch_geo           } from "../actors/purple_switch/geo.inc"
import { water_bomb_geo              } from "../actors/water_bubble/geo.inc"
import { water_bomb_shadow_geo       } from "../actors/water_bubble/geo.inc"
import { wooden_post_geo             } from "../actors/poundable_pole/geo.inc"
import { yoshi_geo                   } from "../actors/yoshi/geo.inc"


import { boo_geo } from "../actors/boo/geo.inc"
import { small_key_geo } from "../actors/small_key/geo.inc"
import { haunted_chair_geo } from "../actors/chair/geo.inc"
import { mad_piano_geo } from "../actors/mad_piano/geo.inc"
import { bookend_geo } from "../actors/book/geo.inc"
import { bookend_part_geo } from "../actors/bookend/geo.inc"
import { haunted_cage_geo } from "../actors/haunted_cage/geo.inc"


// dls
import { cannon_lid_seg8_dl_080048E0              } from "../actors/cannon_lid/model.inc"
import { exclamation_box_outline_seg8_dl_08025F08 } from "../actors/exclamation_box_outline/model.inc"


export const script_func_global_1 = () => { return [
    
    LOAD_MODEL_FROM_GEO(MODEL.BLUE_COIN_SWITCH,        blue_coin_switch_geo),
    LOAD_MODEL_FROM_GEO(MODEL.AMP,                     amp_geo),
    LOAD_MODEL_FROM_GEO(MODEL.PURPLE_SWITCH,           purple_switch_geo),
    LOAD_MODEL_FROM_GEO(MODEL.CHECKERBOARD_PLATFORM,   checkerboard_platform_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BREAKABLE_BOX,           breakable_box_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BREAKABLE_BOX_SMALL,     breakable_box_small_geo),
    LOAD_MODEL_FROM_GEO(MODEL.EXCLAMATION_BOX_OUTLINE, exclamation_box_outline_geo),
    LOAD_MODEL_FROM_GEO(MODEL.EXCLAMATION_BOX,         exclamation_box_geo),
    LOAD_MODEL_FROM_GEO(MODEL.GOOMBA,                  goomba_geo),
    LOAD_MODEL_FROM_DL( MODEL.EXCLAMATION_POINT,       exclamation_box_outline_seg8_dl_08025F08, LAYER_ALPHA),
    LOAD_MODEL_FROM_GEO(MODEL.KOOPA_SHELL,             koopa_shell_geo),
    LOAD_MODEL_FROM_GEO(MODEL.METAL_BOX,               metal_box_geo),
    LOAD_MODEL_FROM_DL( MODEL.METAL_BOX_DL,            metal_box_dl,                             LAYER_OPAQUE),
    LOAD_MODEL_FROM_GEO(MODEL.BLACK_BOBOMB,            black_bobomb_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BOBOMB_BUDDY,            bobomb_buddy_geo),
    LOAD_MODEL_FROM_DL( MODEL.DL_CANNON_LID,           cannon_lid_seg8_dl_080048E0,              LAYER_OPAQUE),
    LOAD_MODEL_FROM_GEO(MODEL.BOWLING_BALL,            bowling_ball_geo),
    LOAD_MODEL_FROM_GEO(MODEL.CANNON_BARREL,           cannon_barrel_geo),
    LOAD_MODEL_FROM_GEO(MODEL.CANNON_BASE,             cannon_base_geo),
    LOAD_MODEL_FROM_GEO(MODEL.HEART,                   heart_geo),
    LOAD_MODEL_FROM_GEO(MODEL.FLYGUY,                  flyguy_geo),
    LOAD_MODEL_FROM_GEO(MODEL.CHUCKYA,                 chuckya_geo),
    LOAD_MODEL_FROM_GEO(MODEL.TRAJECTORY_MARKER_BALL,  bowling_ball_track_geo),
    RETURN(),
]}

// export const script_func_global_2 = () => { return [
//     LOAD_MODEL_FROM_GEO(MODEL.BULLET_BILL,             bullet_bill_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.YELLOW_SPHERE,           yellow_sphere_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.HOOT,                    hoot_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.YOSHI_EGG,               yoshi_egg_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.THWOMP,                  thwomp_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.HEAVE_HO,                heave_ho_geo),
//     RETURN(),
// ]}

// export const script_func_global_3 = () => { return [
//     LOAD_MODEL_FROM_GEO(MODEL.BLARGG,                  blargg_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.BULLY,                   bully_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.BULLY_BOSS,              bully_boss_geo),
//     RETURN(),
// ]}

export const script_func_global_4 = () => { return [
    LOAD_MODEL_FROM_GEO(MODEL.WATER_BOMB,              water_bomb_geo),
    LOAD_MODEL_FROM_GEO(MODEL.WATER_BOMB_SHADOW,       water_bomb_shadow_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.KING_BOBOMB,             king_bobomb_geo),
    RETURN(),
]}

// export const script_func_global_5 = () => { return [
//     LOAD_MODEL_FROM_GEO(MODEL.MANTA_RAY,               manta_seg5_geo_05008D14),
//     LOAD_MODEL_FROM_GEO(MODEL.UNAGI,                   unagi_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.SUSHI,                   sushi_geo),
//     LOAD_MODEL_FROM_DL( MODEL.DL_WHIRLPOOL,            whirlpool_seg5_dl_05013CB8, LAYER_TRANSPARENT),
//     LOAD_MODEL_FROM_GEO(MODEL.CLAM_SHELL,              clam_shell_geo),
//     RETURN(),
// ]}

// export const script_func_global_6 = () => { return [
//     LOAD_MODEL_FROM_GEO(MODEL.POKEY_HEAD,              pokey_head_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.POKEY_BODY_PART,         pokey_body_part_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.TWEESTER,                tweester_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.KLEPTO,                  klepto_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.EYEROK_LEFT_HAND,        eyerok_left_hand_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.EYEROK_RIGHT_HAND,       eyerok_right_hand_geo),
//     RETURN(),
// ]}

// export const script_func_global_7 = () => { return [
//     LOAD_MODEL_FROM_DL( MODEL.DL_MONTY_MOLE_HOLE,      monty_mole_hole_seg5_dl_05000840, LAYER_TRANSPARENT_DECAL),
//     LOAD_MODEL_FROM_GEO(MODEL.MONTY_MOLE,              monty_mole_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.UKIKI,                   ukiki_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.FWOOSH,                  fwoosh_geo),
//     RETURN(),
// ]}

// export const script_func_global_8 = () => { return [
//     LOAD_MODEL_FROM_GEO(MODEL.SPINDRIFT,               spindrift_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.MR_BLIZZARD_HIDDEN,      mr_blizzard_hidden_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.MR_BLIZZARD,             mr_blizzard_geo),
//     LOAD_MODEL_FROM_GEO(MODEL.PENGUIN,                 penguin_geo),
//     RETURN(),
// ]}

// export const script_func_global_9 = () => { return [
//     LOAD_MODEL_FROM_DL( MODEL.CAP_SWITCH_EXCLAMATION,  cap_switch_exclamation_seg5_dl_05002E00, LAYER_ALPHA),
//     LOAD_MODEL_FROM_GEO(MODEL.CAP_SWITCH,              cap_switch_geo),
//     LOAD_MODEL_FROM_DL( MODEL.CAP_SWITCH_BASE,         cap_switch_base_seg5_dl_05003120,        LAYER_OPAQUE),
//     RETURN(),
// ]}

export const script_func_global_10 = () => { return [
    LOAD_MODEL_FROM_GEO(MODEL.BOO,                     boo_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BETA_BOO_KEY,            small_key_geo),
    LOAD_MODEL_FROM_GEO(MODEL.HAUNTED_CHAIR,           haunted_chair_geo),
    LOAD_MODEL_FROM_GEO(MODEL.MAD_PIANO,               mad_piano_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BOOKEND_PART,            bookend_part_geo),
    LOAD_MODEL_FROM_GEO(MODEL.BOOKEND,                 bookend_geo),
    LOAD_MODEL_FROM_GEO(MODEL.HAUNTED_CAGE,            haunted_cage_geo),
    RETURN(),
]}

export const script_func_global_11 = () => { return [
    LOAD_MODEL_FROM_GEO(MODEL.BIRDS,                   birds_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.PEACH,                   peach_geo),
    LOAD_MODEL_FROM_GEO(MODEL.YOSHI,                   yoshi_geo),
    RETURN(),
]}

export const script_func_global_12 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.ENEMY_LAKITU,            enemy_lakitu_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SPINY_BALL,              spiny_ball_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SPINY,                   spiny_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.WIGGLER_HEAD,            wiggler_head_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.WIGGLER_BODY,            wiggler_body_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BUBBA,                   bubba_geo),
    RETURN(),
]}

export const script_func_global_13 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER,                  bowser_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER_BOMB_CHILD_OBJ,   bowser_bomb_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER_BOMB,             bowser_bomb_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER_SMOKE,            bowser_impact_smoke_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER_FLAMES,           bowser_flames_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER_WAVE,             invisible_bowser_accessory_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOWSER2,                 bowser2_geo),
    RETURN(),
]}

export const script_func_global_14 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.BUB,                     bub_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.TREASURE_CHEST_BASE,     treasure_chest_base_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.TREASURE_CHEST_LID,      treasure_chest_lid_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.CYAN_FISH,               cyan_fish_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.WATER_RING,              water_ring_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.WATER_MINE,              water_mine_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SEAWEED,                 seaweed_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SKEETER,                 skeeter_geo),
    RETURN(),
]}

export const script_func_global_15 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.PIRANHA_PLANT,           piranha_plant_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.WHOMP,                   whomp_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.KOOPA_WITH_SHELL,        koopa_with_shell_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.KOOPA_WITHOUT_SHELL,     koopa_without_shell_geo),
    LOAD_MODEL_FROM_GEO(MODEL.METALLIC_BALL,           metallic_ball_geo),
    LOAD_MODEL_FROM_GEO(MODEL.CHAIN_CHOMP,             chain_chomp_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.KOOPA_FLAG,              koopa_flag_geo),
    LOAD_MODEL_FROM_GEO(MODEL.WOODEN_POST,             wooden_post_geo),
    RETURN(),
]}

export const script_func_global_16 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.MIPS,                    mips_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BOO_CASTLE,              boo_castle_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.LAKITU,                  lakitu_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.TOAD,                    toad_geo),
    RETURN(),
]}

export const script_func_global_17 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.CHILL_BULLY,             chilly_chief_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.BIG_CHILL_BULLY,         chilly_chief_big_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.MONEYBAG,                moneybag_geo),
    RETURN(),
]}

export const script_func_global_18 = () => { return [
    // LOAD_MODEL_FROM_GEO(MODEL.SWOOP,                   swoop_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SCUTTLEBUG,              scuttlebug_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.MR_I_IRIS,               mr_i_iris_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.MR_I,                    mr_i_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.DORRIE,                  dorrie_geo),
    // LOAD_MODEL_FROM_GEO(MODEL.SNUFIT,                  snufit_geo),
    RETURN(),
]}


gLinker.level_scripts.script_func_global_1  = script_func_global_1
gLinker.level_scripts.script_func_global_4  = script_func_global_4
gLinker.level_scripts.script_func_global_11 = script_func_global_11
gLinker.level_scripts.script_func_global_12 = script_func_global_12
gLinker.level_scripts.script_func_global_13 = script_func_global_13
gLinker.level_scripts.script_func_global_14 = script_func_global_14
gLinker.level_scripts.script_func_global_15 = script_func_global_15
gLinker.level_scripts.script_func_global_16 = script_func_global_16
gLinker.level_scripts.script_func_global_17 = script_func_global_17
gLinker.level_scripts.script_func_global_18 = script_func_global_18
