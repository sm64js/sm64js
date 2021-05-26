import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ssl_seg7_area_1_collision } from "./areas/1/collision.inc"
import { ssl_geo_000648 } from "./areas/1/geo.inc"
import { palm_tree_geo } from "../../actors/tree/geo.inc"
import { MODEL_SSL_PALM_TREE } from "../../include/model_ids"

export const level_ssl_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_SSL_PALM_TREE, palm_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, ssl_geo_000648] },
    { command: LevelCommands.terrain, args: [ssl_seg7_area_1_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 90, /*pos*/   653, 1038,  6566] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]


gLinker.level_scripts.level_ssl_entry = level_ssl_entry
