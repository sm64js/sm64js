import { LevelCommandsInstance as LevelCommands, OBJECT, RETURN } from "../../engine/LevelCommands"
import { bhvMario, bhvStaticObject } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { inside_castle_seg7_area_2_collision } from "./areas/2/collision.inc"
import { inside_castle_seg7_area_2_rooms } from "./areas/2/room.inc"
import { castle_geo_001858 } from "./areas/2/geo.inc"

import { MODEL_CASTLE_DOOR_0_STARS, MODEL_CASTLE_WOODEN_DOOR } from "../../include/model_ids"
import { wooden_door_geo, castle_door_0_star_geo } from "../../actors/door/geo.inc"

const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_CASTLE_WOODEN_DOOR, /*pos*/ -997, 1203, 1178, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_0_STARS, /*pos*/ -2695, 1203, 1828, /*angle*/ 0, 90, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_0_STARS, /*pos*/ 6994, 1203, 1828, /*angle*/ 0, 90, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_0_STARS, /*pos*/ 1670, 1203, 1828, /*angle*/ 0, -90, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    RETURN(),
]

export const level_castle_inside_2_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_WOODEN_DOOR, wooden_door_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_0_STARS, castle_door_0_star_geo] },
    { command: LevelCommands.begin_area, args: [2, castle_geo_001858] },
    { command: LevelCommands.jump_link, args: [script_func_local_1] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_2_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_2_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 2, /*yaw*/ -180, /*pos*/  -999, 1203, 1005] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]