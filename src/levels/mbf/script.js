import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { special_area_1_geo } from "./areas/1/geo.inc"
import { special_area_1_collision } from "./areas/1/collision.inc"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { castle_grounds_geo_000660 } from "../castle_grounds/areas/1/11/geo.inc"


import {
    MODEL_BOB_BUBBLY_TREE, MODEL_CASTLE_GROUNDS_FLAG
} from "../../include/model_ids"


const script_load_four_flag = [
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*acts?*/ 0x1F, /*model*/ MODEL_CASTLE_GROUNDS_FLAG, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.return },
]

export const level_mbf_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_GROUNDS_FLAG, castle_grounds_geo_000660] },
    { command: LevelCommands.begin_area, args: [1, special_area_1_geo] },
    { command: LevelCommands.jump_link, args: [script_load_four_flag] },
    { command: LevelCommands.terrain, args: [special_area_1_collision] },
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, 180, 0, 18000, 0, true, 10000, 10000] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
