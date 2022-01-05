import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { totwc_seg7_collision } from "./areas/1/collision.inc"
import { totwc_geo_000188 } from "./areas/1/geo.inc"
import { totwc_seg7_macro_objs } from "./areas/1/macro.inc"

// const script_func_local_1 = [
//     OBJECT(/*model*/ MODEL_CAP_SWITCH, /*pos*/   0, -2047, 10, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCapSwitch),
//     { command: LevelCommands.return }
// ]

// const script_func_local_2 = [
//     OBJECT(/*model*/ MODEL_NONE,       /*pos*/ 800, -1700,  0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvHiddenRedCoinStar),
//     { command: LevelCommands.return }
// ]

export const level_totwc_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, totwc_geo_000188] },
    { command: LevelCommands.terrain, args: [totwc_seg7_collision] },
    { command: LevelCommands.macro_objects, args: [totwc_seg7_macro_objs] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 90, -4095, 2935, 0, true] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]