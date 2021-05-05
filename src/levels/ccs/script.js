import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ccs_seg7_area_1_collision } from "./areas/1/collision.inc"
import { ccs_geo_0005E8 } from "./areas/1/geo.inc"

export const level_ccs_entry = [
    { command: LevelCommands.init_level},
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, ccs_geo_0005E8] },
    { command: LevelCommands.terrain, args: [ccs_seg7_area_1_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 90, /*pos*/ -5836, 7465, -6143] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]