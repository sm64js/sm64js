import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { level_defines_list } from "./level_defines"
import { mario_geo } from "../actors/mario/geo.inc"
import { MODEL_MARIO, MODEL_SMOKE, MODEL_CARTOON_STAR, MODEL_DIRT_ANIMATION, MODEL_MIST } from "../include/model_ids"
import { smoke_geo } from "../actors/walk_smoke/geo.inc"
import { cartoon_star_geo, dirt_animation_geo } from "../actors/dirt/geo.inc"
import { mist_geo } from "../actors/mist/geo.inc"

export const script_exec_level_table = [
    {
        command: LevelCommands.get_or_set,
        args: [ LevelCommands.OP_GET, LevelCommands.VAR_CURR_LEVEL_NUM ]
    },
    ...level_defines_list
]

export const level_main_scripts_entry = [
    { command: LevelCommands.alloc_level_pool },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_MARIO, mario_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_SMOKE, smoke_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CARTOON_STAR, cartoon_star_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_DIRT_ANIMATION, dirt_animation_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_MIST, mist_geo] },
    { command: LevelCommands.free_level_pool },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_from_save_file, LevelUpdate] },
    { command: LevelCommands.jump_link, args: [script_exec_level_table] }
]