import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { hmc_seg7_collision_level } from "./areas/1/collision.inc"
import { hmc_geo_000B90 } from "./areas/1/geo.inc"

import {
    MODEL_HMC_HAZY_MAZE_DOOR
} from "../../include/model_ids"

export const level_hmc_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, hmc_geo_000B90] },
    { command: LevelCommands.terrain, args: [hmc_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 135, /*pos*/ -7152, 2161, 7181] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]