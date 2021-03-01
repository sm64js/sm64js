import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { castle_grounds_seg7_collision_level } from "./areas/1/collision.inc"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"


export const level_castle_grounds_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, null] },
    { command: LevelCommands.terrain, args: [castle_grounds_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 180, -9999, 9999, 9999] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]