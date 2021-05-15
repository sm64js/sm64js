import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { castle_courtyard_seg7_collision } from "./areas/1/collision.inc"
import { castle_courtyard_geo_000218 } from "./areas/1/geo.inc"
import { spiky_tree_geo } from "../../actors/tree/geo.inc"
import { MODEL_COURTYARD_SPIKY_TREE, MODEL_LEVEL_GEOMETRY_03 } from "../../include/model_ids"


export const level_castle_courtyard_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    //{ command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, castle_courtyard_geo_000218] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_COURTYARD_SPIKY_TREE, spiky_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, castle_courtyard_geo_000218] },
    { command: LevelCommands.terrain, args: [castle_courtyard_seg7_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ -180, /*pos*/ -11, 0, 290] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
