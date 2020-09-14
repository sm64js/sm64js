import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario, bhvExtraMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { castle_grounds_geo_00073C } from "./areas/1/geo"
import { castle_grounds_geo_0006F4 } from "./areas/1/3/geo.inc"
import { castle_grounds_geo_000660 } from "./areas/1/11/geo.inc"
import { castle_grounds_seg7_collision_level } from "./areas/1/collision.inc"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { MODEL_BOB_BUBBLY_TREE, MODEL_LEVEL_GEOMETRY_03, MODEL_CASTLE_GROUNDS_FLAG } from "../../include/model_ids"

export const script_func_local_3 = [
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3213, 3348, -3011, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ -3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/  3835, 3348, -6647, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.return },
]


export const level_castle_grounds_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, castle_grounds_geo_0006F4] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_GROUNDS_FLAG, castle_grounds_geo_000660] },
    { command: LevelCommands.begin_area, args: [1, castle_grounds_geo_00073C] },
    { command: LevelCommands.jump_link, args: [script_func_local_3] },
    { command: LevelCommands.terrain, args: [castle_grounds_seg7_collision_level] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.free_level_pool },
    { command: LevelCommands.set_mario_pos, args: [1, 180, -1328, 260, 4664] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]