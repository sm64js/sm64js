import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { level_defines_list } from "./level_defines"
import { mario_geo } from "../actors/mario/geo.inc"


export const script_exec_level_table = [
    {
        command: LevelCommands.get_or_set,
        args: [ LevelCommands.OP_GET, LevelCommands.VAR_CURR_LEVEL_NUM ]
    },
    ...level_defines_list
]

export const level_main_scripts_entry = [
    { command: LevelCommands.alloc_level_pool },
    { command: LevelCommands.load_model_from_geo, args: [1, mario_geo] },
    { command: LevelCommands.free_level_pool },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_from_save_file, LevelUpdate] },
    { command: LevelCommands.jump_link, args: [script_exec_level_table] }
]