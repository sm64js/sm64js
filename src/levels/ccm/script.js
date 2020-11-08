import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ccm_seg7_area_1_collision } from "./areas/1/collision.inc"
import { ccm_geo_00051C } from "./areas/1/geo.inc"
import { ccm_geo_00042C } from "./areas/1/6/geo.inc"
import { snow_tree_geo } from "../../actors/tree/geo.inc"

import {
    MODEL_CCM_SNOW_TREE,
    MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04,
    MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07
} from "../../include/model_ids"

export const level_ccm_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, ccm_geo_00042C] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_04, ccm_geo_00042C] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_05, ccm_geo_00042C] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_06, ccm_geo_00042C] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_07, ccm_geo_00042C] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CCM_SNOW_TREE, snow_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, ccm_geo_00051C] },
    { command: LevelCommands.terrain, args: [ccm_seg7_area_1_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 140, -1512, 2560, -2305] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]