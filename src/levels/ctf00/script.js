import { LevelCommandsInstance as LevelCommands, SET_BACKGROUND_MUSIC } from "../../engine/LevelCommands"
import { SEQ_LEVEL_GRASS } from "../../include/seq_ids"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ctf00_area_1_geo } from "./areas/1/geo.inc"
import { ctf00_area_1_collision } from "./areas/1/collision.inc"

import {
    MODEL_STAR
} from "../../include/model_ids"


const script_load_two_flag = [
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.return },
]

export const level_ctf00_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, ctf00_area_1_geo] },
    { command: LevelCommands.jump_link, args: [script_load_two_flag] },
    { command: LevelCommands.terrain, args: [ctf00_area_1_collision] },
    SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_GRASS),
    { command: LevelCommands.end_area },
	{ command: LevelCommands.set_mario_pos, args: [1, 0, 0, 3461, 0] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
