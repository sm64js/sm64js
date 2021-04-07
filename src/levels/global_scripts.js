// import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { MODEL_BLACK_BOBOMB,
         MODEL_CANNON_BARREL,
         MODEL_CANNON_BASE,
         MODEL_CHAIN_CHOMP,
         MODEL_CHECKERBOARD_PLATFORM,
         MODEL_EXPLOSION,
         MODEL_GOOMBA,
         MODEL_METALLIC_BALL,
         MODEL_WOODEN_POST } from "../include/model_ids"

import { black_bobomb_geo          } from "../actors/bobomb/geo.inc"
import { cannon_barrel_geo         } from "../actors/cannon_barrel/geo.inc"
import { cannon_base_geo           } from "../actors/cannon_base/geo.inc"
import { chain_chomp_geo           } from "../actors/chain_chomp/geo.inc"
import { checkerboard_platform_geo } from "../actors/checkerboard_platform/geo.inc"
import { explosion_geo             } from "../actors/explosion/geo.inc"
import { goomba_geo                } from "../actors/goomba/geo.inc"
import { metallic_ball_geo         } from "../actors/chain_ball/geo.inc"
import { wooden_post_geo           } from "../actors/poundable_pole/geo.inc"

export const script_func_global_1 = [
    // ['LOAD_MODEL_FROM_GEO', MODEL_BLUE_COIN_SWITCH,        blue_coin_switch_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_AMP,                     amp_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_PURPLE_SWITCH,           purple_switch_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CHECKERBOARD_PLATFORM,   checkerboard_platform_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_BREAKABLE_BOX,           breakable_box_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_BREAKABLE_BOX_SMALL,     breakable_box_small_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_EXCLAMATION_BOX_OUTLINE, exclamation_box_outline_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_EXCLAMATION_BOX,         exclamation_box_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_GOOMBA,                  goomba_geo],
    // ['LOAD_MODEL_FROM_DL',  MODEL_EXCLAMATION_POINT,       exclamation_box_outline_seg8_dl_08025F08, LAYER_ALPHA],
    // ['LOAD_MODEL_FROM_GEO', MODEL_KOOPA_SHELL,             koopa_shell_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_METAL_BOX,               metal_box_geo],
    // ['LOAD_MODEL_FROM_DL',  MODEL_METAL_BOX_DL,            metal_box_dl,                             LAYER_OPAQUE],
    ['LOAD_MODEL_FROM_GEO', MODEL_BLACK_BOBOMB,            black_bobomb_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_BOBOMB_BUDDY,            bobomb_buddy_geo],
    // ['LOAD_MODEL_FROM_DL',  MODEL_DL_CANNON_LID,           cannon_lid_seg8_dl_080048E0,              LAYER_OPAQUE],
    // ['LOAD_MODEL_FROM_GEO', MODEL_BOWLING_BALL,            bowling_ball_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CANNON_BARREL,           cannon_barrel_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CANNON_BASE,             cannon_base_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_HEART,                   heart_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_FLYGUY,                  flyguy_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_CHUCKYA,                 chuckya_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_TRAJECTORY_MARKER_BALL,  bowling_ball_track_geo],
    ['RETURN'],
]


export const script_func_global_15 = [
    // ['LOAD_MODEL_FROM_GEO', MODEL_PIRANHA_PLANT,           piranha_plant_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_WHOMP,                   whomp_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_KOOPA_WITH_SHELL,        koopa_with_shell_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_KOOPA_WITHOUT_SHELL,     koopa_without_shell_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_METALLIC_BALL,           metallic_ball_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_CHAIN_CHOMP,             chain_chomp_geo],
    // ['LOAD_MODEL_FROM_GEO', MODEL_KOOPA_FLAG,              koopa_flag_geo],
    ['LOAD_MODEL_FROM_GEO', MODEL_WOODEN_POST,             wooden_post_geo],
    ['RETURN'],
]
