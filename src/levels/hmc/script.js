import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { hmc_seg7_collision_level } from "./areas/1/collision.inc"
import {hmc_geo} from "./areas/1/geo_fix_att"

import {
    MODEL_HMC_HAZY_MAZE_DOOR
} from "../../include/model_ids"

export const level_hmc_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, hmc_geo] },
    { command: LevelCommands.terrain, args: [hmc_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 135, /*pos*/ -7152, 2161, 7181] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]

/*
import {
    cave_09000000,
    cave_09001000,
    cave_09001800,
    cave_09002800,
    cave_09003000,
    cave_09003800,
    cave_09004800,
    cave_09005800,
    cave_09006800,
    cave_09007000,
    cave_09007800,
    cave_09008800,
    cave_09009800,
    cave_0900A000,
    cave_0900A800,
    cave_0900B800,
    cave_0900C000
} from "../../../../../textures/cave"
import {
	hmc_seg7_texture_07000000,
    hmc_seg7_texture_07001000,
    hmc_seg7_texture_07002000,
    hmc_seg7_texture_07003000,
    hmc_seg7_texture_07003800,
    hmc_seg7_texture_07004000,
    hmc_seg7_texture_07004800,
} from "../../../texture.inc"
*/