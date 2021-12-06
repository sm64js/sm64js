import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { gj_area_1_geo } from "./areas/1/geo.inc"
import { gj_area_1_collision } from "./areas/1/collision.inc"

export const level_gj_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, gj_area_1_geo] },
    { command: LevelCommands.terrain, args: [gj_area_1_collision] },
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, -90, 6241, 182, -383] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
