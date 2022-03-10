import { LevelCommandsInstance as LevelCommands, SET_BACKGROUND_MUSIC } from "../../engine/LevelCommands"
import { SEQ_LEVEL_GRASS } from "../../include/seq_ids"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { raceway_area_1_geo } from "./areas/1/geo.inc"
import { raceway_area_1_collision } from "./areas/1/collision.inc"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"

import { MODEL_BOB_BUBBLY_TREE } from "../../include/model_ids"

export const level_raceway_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, raceway_area_1_geo] },
    { command: LevelCommands.terrain, args: [raceway_area_1_collision] },
    SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_GRASS),
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 24.5, 1088, 138, 1401] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]