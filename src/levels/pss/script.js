import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { pss_geo_000100 } from "./areas/1/geo.inc"
import { pss_seg7_collision } from "./areas/1/collision.inc"

export const level_pss_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, pss_geo_000100] },
    { command: LevelCommands.terrain, args: [pss_seg7_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 270, 5632, 6451, -5631] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
