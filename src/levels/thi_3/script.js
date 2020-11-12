import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { thi_geo_00079C } from "./areas/3/geo.inc"
import { thi_seg7_area_3_collision } from "./areas/3/collision.inc"

export const level_thi_area_3_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [3, thi_geo_00079C] },
    { command: LevelCommands.terrain, args: [thi_seg7_area_3_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 3, /*yaw*/ 149, /*pos*/ -7372, -2969, 7373] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
