import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { level_defines_list } from "./level_defines"

export const script_exec_level_table = [
    {
        command: LevelCommands.get_or_set,
        args: [ LevelCommands.OP_GET, LevelCommands.VAR_CURR_LEVEL_NUM ]
    },
    ...level_defines_list
]

export const level_main_scripts_entry = [
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_from_save_file, LevelUpdate] },
    { command: LevelCommands.jump_link, args: [script_exec_level_table] }
]