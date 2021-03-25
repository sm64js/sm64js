import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { level_defines_list } from "./level_defines"
import { mario_geo } from "../actors/mario/geo.inc"
import { MODEL_MARIO, MODEL_SMOKE, MODEL_CARTOON_STAR, MODEL_DIRT_ANIMATION, MODEL_MIST, MODEL_BUBBLE, MODEL_YELLOW_COIN, MODEL_YELLOW_COIN_NO_SHADOW, MODEL_SPARKLES, MODEL_RED_COIN, MODEL_RED_COIN_NO_SHADOW } from "../include/model_ids"
import { smoke_geo } from "../actors/walk_smoke/geo.inc"
import { cartoon_star_geo, dirt_animation_geo } from "../actors/dirt/geo.inc"
import { mist_geo } from "../actors/mist/geo.inc"
import { bubble_geo } from "../actors/bubble/geo.inc"
import { yellow_coin_geo, yellow_coin_no_shadow_geo, red_coin_geo, red_coin_no_shadow_geo } from "../actors/coin/geo.inc"
import { sparkles_geo } from "../actors/sparkle/geo.inc"

export const script_exec_level_table = [
    ['get_area', 'gCurrLevelNum'],
    ...level_defines_list
]

export const level_main_scripts_entry = [
    ['alloc_level_pool'],
    ['load_model_from_geo', MODEL_MARIO, mario_geo],
    ['load_model_from_geo', MODEL_SMOKE, smoke_geo],
    ['load_model_from_geo', MODEL_SPARKLES, sparkles_geo],
    ['load_model_from_geo', MODEL_BUBBLE, bubble_geo],
    ['load_model_from_geo', MODEL_YELLOW_COIN, yellow_coin_geo],
    ['load_model_from_geo', MODEL_YELLOW_COIN_NO_SHADOW, yellow_coin_no_shadow_geo],
    ['load_model_from_geo', MODEL_RED_COIN, red_coin_geo],
    ['load_model_from_geo', MODEL_RED_COIN_NO_SHADOW, red_coin_no_shadow_geo],
    ['load_model_from_geo', MODEL_CARTOON_STAR, cartoon_star_geo],
    ['load_model_from_geo', MODEL_DIRT_ANIMATION, dirt_animation_geo],
    ['load_model_from_geo', MODEL_MIST, mist_geo],
    ['free_level_pool'],
    ['call', 0, LevelUpdate.lvl_init_from_save_file, LevelUpdate],
    ['call', 0, LevelUpdate.lvl_set_current_level, LevelUpdate],
    ['jump_link', script_exec_level_table]
]
