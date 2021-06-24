import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ccm_seg7_area_2_collision } from "./areas/2/collision.inc"
import { ccm_geo_0005E8 } from "./areas/2/geo.inc"

export const level_ccm_2_entry = [
    { command: LevelCommands.init_level},
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [2, ccm_geo_0005E8] },
    { command: LevelCommands.terrain, args: [ccm_seg7_area_2_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 2, /*yaw*/ 90, /*pos*/ -5836, 7465, -6143] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]