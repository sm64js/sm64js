import { LevelCommandsInstance as LevelCommands, SET_BACKGROUND_MUSIC } from "../../engine/LevelCommands"
import { SEQ_LEVEL_WATER } from "../../include/seq_ids"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { clouded_area_1_geo } from "./areas/1/geo.inc"
import { clouded_area_1_collision } from "./areas/1/collision.inc"
import { MODEL_STAR } from "../../include/model_ids"

export const level_clouded_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, clouded_area_1_geo] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.terrain, args: [clouded_area_1_collision] },
    SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_WATER),
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, 0, -67, -247, 5186] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
