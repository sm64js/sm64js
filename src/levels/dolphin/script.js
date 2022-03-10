import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { dolphin_area_1_geo } from "./areas/1/geo.inc"
import { dolphin_area_1_collision } from "./areas/1/collision.inc"
import { palm_tree_geo } from "../../actors/tree/geo.inc"

import { MODEL_SSL_PALM_TREE, MODEL_STAR } from "../../include/model_ids"

export const level_dolphin_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_SSL_PALM_TREE, palm_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, dolphin_area_1_geo] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.terrain, args: [dolphin_area_1_collision] },
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, 90, -12729, 343, -339] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]