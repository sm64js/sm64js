import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { thi_geo_0006D4 } from "./areas/2/geo.inc"
import { thi_seg7_area_2_collision } from "./areas/2/collision.inc"

export const level_thi_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, thi_geo_0006D4] },
    { command: LevelCommands.terrain, args: [thi_seg7_area_2_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [2, 0, 280, -767, -4180] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
