import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { dolphin_area_1_geo } from "./areas/1/geo.inc"
import { dolphin_area_1_collision } from "./areas/1/collision.inc"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"

import {
    MODEL_BOB_BUBBLY_TREE
} from "../../include/model_ids"

export const level_dolphin_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, dolphin_area_1_geo] },
    { command: LevelCommands.terrain, args: [dolphin_area_1_collision] },
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, 90, 789, 433, -47] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]