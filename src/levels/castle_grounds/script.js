import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario, bhvExtraMario } from "../../game/BehaviorData"
import { castle_grounds_geo_00073C } from "./areas/1/geo"
import { castle_grounds_seg7_collision_level } from "./areas/1/collision.inc"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { MODEL_BOB_BUBBLY_TREE, MODEL_LEVEL_GEOMETRY_03 } from "../../include/model_ids"
import { castle_grounds_geo_0006F4 } from "./areas/1/3/geo.inc"

window.bhvExtraMario = bhvExtraMario

export const level_castle_grounds_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, castle_grounds_geo_0006F4] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, castle_grounds_geo_00073C] },
    { command: LevelCommands.terrain, args: [castle_grounds_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.free_level_pool },
    { command: LevelCommands.set_mario_pos, args: [1, 180, -1328, 260, 4664] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]