import { LevelCommandsInstance as LevelCommands, OBJECT, RETURN } from "../../engine/LevelCommands"
import { bhvMario, bhvStaticObject, bhvCollisionObj } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { inside_castle_seg7_area_1_collision } from "./areas/1/collision.inc"
import { inside_castle_seg7_area_1_rooms } from "./areas/1/room.inc"
import { castle_geo_001400 } from "./areas/1/geo.inc"

import { MODEL_CASTLE_CASTLE_DOOR, MODEL_CASTLE_DOOR_0_STARS, MODEL_CASTLE_DOOR_1_STAR, MODEL_CASTLE_DOOR_3_STARS, MODEL_CASTLE_WOODEN_DOOR } from "../../include/model_ids"
import { wooden_door_geo, castle_door_0_star_geo, castle_door_1_star_geo, castle_door_3_stars_geo, castle_door_geo } from "../../actors/door/geo.inc"
import { door_seg3_collision_0301CE78 } from "../../actors/warp_collision/collision.inc"

// doors
const script_func_local_1 = [
    OBJECT(/*model*/ MODEL_CASTLE_CASTLE_DOOR, /*pos*/ -1100, 0, 2202, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)),
    OBJECT(/*model*/ MODEL_CASTLE_CASTLE_DOOR, /*pos*/ -946, 0, 2202, /*angle*/ 0, 180, 0, /*behParam*/ 0x0000000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)),
    OBJECT(/*model*/ MODEL_CASTLE_WOODEN_DOOR, /*pos*/ -1023, -101, -5170, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvCollisionObj(door_seg3_collision_0301CE78)),
    OBJECT(/*model*/ MODEL_CASTLE_WOODEN_DOOR, /*pos*/ -271, 0, -824, /*angle*/ 0, 45, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_WOODEN_DOOR, /*pos*/ -1775, 0, -824, /*angle*/ 0, -45, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_0_STARS, /*pos*/ -3122, 205, -793, /*angle*/ 0, 90, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_1_STAR, /*pos*/ 256, 0, -1074, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_1_STAR, /*pos*/ 644, 614, -1476, /*angle*/ 0, -45, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_3_STARS, /*pos*/ 1075, 205, -229, /*angle*/ 0, -90, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    OBJECT(/*model*/ MODEL_CASTLE_DOOR_3_STARS, /*pos*/ -2303, 0, -1074, /*angle*/ 0, 0, 0, /*behParam*/ 0x0000000, /*beh*/ bhvStaticObject),
    RETURN(),
]

export const level_castle_inside_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_CASTLE_DOOR, castle_door_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_WOODEN_DOOR, wooden_door_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_0_STARS, castle_door_0_star_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_1_STAR, castle_door_1_star_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_3_STARS, castle_door_3_stars_geo] },
    { command: LevelCommands.begin_area, args: [1, castle_geo_001400] },
    { command: LevelCommands.jump_link, args: [script_func_local_1] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_1_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_1_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 180, /*pos*/ -1023, 0, 1152] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]