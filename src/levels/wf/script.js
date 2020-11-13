import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bubbly_tree_geo } from "../../actors/tree/geo.inc"
import { yellow_sphere_geo } from "../../actors/yellow_sphere_small/geo.inc"
import { wf_seg7_collision_070102D8 } from "./areas/1/collision.inc"
import { wf_geo_000BF8 } from "./areas/1/geo.inc"

import { bhvStaticObject, bhvGiantPole, bhvPoleGrabbing, bhvYellowBall } from "../../game/BehaviorData"

import { wf_geo_0007E0 } from "./areas/1/5/geo.inc"
import { wf_geo_000820 } from "./areas/1/6/geo.inc"
import { wf_geo_000860 } from "./areas/1/7/geo.inc"
import { wf_geo_000878 } from "./areas/1/8/geo.inc"
import { wf_geo_000890 } from "./areas/1/9/geo.inc"
import { wf_geo_0008A8 } from "./areas/1/10/geo.inc"
import { wf_geo_0008E8 } from "./areas/1/11/geo.inc"
import { wf_geo_000900 } from "./areas/1/12/geo.inc"
import { wf_geo_000AE0 } from "./areas/1/14/geo.inc"
import { wf_geo_000940 } from "./areas/1/13/geo.inc"
import { wf_geo_000958 } from "./areas/1/15/geo.inc"
import { wf_geo_0009A0 } from "./areas/1/16/geo.inc"
import { wf_geo_0009D0 } from "./areas/1/18/geo.inc"
import { wf_geo_0009E8 } from "./areas/1/19/geo.inc"

import {
    MODEL_LEVEL_GEOMETRY_00,
    MODEL_LEVEL_GEOMETRY_01,
    MODEL_LEVEL_GEOMETRY_02,
    MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04,
    MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07,
    MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_09,
    MODEL_LEVEL_GEOMETRY_0A,
    MODEL_LEVEL_GEOMETRY_0B,
    MODEL_LEVEL_GEOMETRY_0C,
    MODEL_LEVEL_GEOMETRY_0D,
    MODEL_LEVEL_GEOMETRY_0E,
    MODEL_LEVEL_GEOMETRY_0F,
    MODEL_LEVEL_GEOMETRY_10,
    MODEL_LEVEL_GEOMETRY_11,
    MODEL_LEVEL_GEOMETRY_12,
    MODEL_LEVEL_GEOMETRY_13,
    MODEL_LEVEL_GEOMETRY_14,
    MODEL_LEVEL_GEOMETRY_15,
    MODEL_LEVEL_GEOMETRY_16,
	
	MODEL_BOB_BUBBLY_TREE,
	
	MODEL_YELLOW_SPHERE,
	
	MODEL_WF_GIANT_POLE,
	
	MODEL_NONE,
} from "../../include/model_ids"

export const level_wf_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
	{ command: LevelCommands.load_model_from_geo, args: [MODEL_YELLOW_SPHERE, yellow_sphere_geo] },
	{ command: LevelCommands.load_model_from_geo, args: [MODEL_BOB_BUBBLY_TREE, bubbly_tree_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, wf_geo_0007E0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_04, wf_geo_000820] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_05, wf_geo_000860] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_06, wf_geo_000878] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_07, wf_geo_000890] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_08, wf_geo_0008A8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_09, wf_geo_0008E8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0A, wf_geo_000900] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0C, wf_geo_000940] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0D, wf_geo_000AE0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0E, wf_geo_000958] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0F, wf_geo_0009A0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_11, wf_geo_0009D0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_12, wf_geo_0009E8] },
    { command: LevelCommands.begin_area, args: [1, wf_geo_000BF8] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_03, 2305, 2432,  -255, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_04, 3405, 1664, -1791, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_05, 3840,    0, -2303, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_05, 3840,    0, -1279, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_06,    0,    0,     0, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_07, 1757, 3519, -3151, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_0A, 3840,  794,  2688, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_LEVEL_GEOMETRY_0C, 1408, 2522,  2431, 0,0,0, 0x00000000, bhvStaticObject] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_WF_GIANT_POLE    ,-2560, 2560,  -256, 0,0,0, 0x00000000, bhvGiantPole   ] },
	{ command: LevelCommands.place_object, args: [0x1F, MODEL_NONE             ,-2495, 1331,  -256, 0,0,0, 0x003D0000, bhvPoleGrabbing] },
    { command: LevelCommands.terrain, args: [wf_seg7_collision_070102D8] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 90, 2600, 1256,  5120] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
