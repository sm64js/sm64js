import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bob_geo_000488 } from "./areas/1/geo.inc"
import { bob_seg7_collision_level } from "./areas/1/collision.inc"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { MODEL_BOB_BUBBLY_TREE } from "../../include/model_ids"

export const level_bob_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, bob_geo_000488] },
    { command: LevelCommands.terrain, args: [bob_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 135, -6558, 0, 6464] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
