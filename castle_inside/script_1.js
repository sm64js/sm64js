import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { inside_castle_seg7_area_1_collision } from "./areas/1/collision.inc"
import { inside_castle_seg7_area_1_rooms } from "./areas/1/room.inc"
import { castle_geo_001400 } from "./areas/1/geo.inc"
import { castle_door_geo } from "../../actors/door/geo.inc"
import { wooden_door_geo } from "../../actors/door/geo.inc"
//import { metal_door_geo } from "../../actors/door/geo.inc" (for basement)
import { castle_door_0_star_geo } from "../../actors/door/geo.inc"
import { castle_door_1_star_geo } from "../../actors/door/geo.inc"
import { castle_door_3_stars_geo } from "../../actors/door/geo.inc"
import { key_door_geo } from "../../actors/door/geo.inc"
import { castle_geo_000F00 } from "../../levels/castle_inside/star_door/geo.inc"
import { castle_geo_000F18 } from "../../levels/castle_inside/trap_door/geo.inc"
import { MODEL_CASTLE_KEY_DOOR, MODEL_CASTLE_STAR_DOOR_8_STARS, MODEL_CASTLE_BOWSER_TRAP, MODEL_CASTLE_DOOR_3_STARS, MODEL_CASTLE_DOOR_1_STAR, MODEL_CASTLE_CASTLE_DOOR, MODEL_CASTLE_WOODEN_DOOR, MODEL_CASTLE_METAL_DOOR, MODEL_CASTLE_DOOR_0_STARS } from "../../include/model_ids"
//import { MODEL_CASTLE_STAR_DOOR_30_STARS } from "../../include/model_ids" ( for basment ) 

export const script_func_local_1 = [
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_8_STARS, /*pos*/ -2706,   512, -1409, /*angle*/ 0,  45, 0] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_8_STARS, /*pos*/ -2598,   512, -1517, /*angle*/ 0, 225, 0] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/ -1100,   512, -1074, /*angle*/ 0,   0, 0] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/  -946,   512, -1074, /*angle*/ 0, 180, 0] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/ -1100, -1074,   922, /*angle*/ 0,   0, 0] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/  -946, -1074,   922, /*angle*/ 0, 180, 0] },
    { command: LevelCommands.return }
]


export const level_castle_inside_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_CASTLE_DOOR, castle_door_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_WOODEN_DOOR, wooden_door_geo] },
    //{ command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_METAL_DOOR, metal_door_geo] }, (for basement)
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_0_STARS, castle_door_0_star_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_1_STAR, castle_door_1_star_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_DOOR_3_STARS, castle_door_3_stars_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_KEY_DOOR, key_door_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_BOWSER_TRAP, castle_geo_000F18] },
    { command: LevelCommands.begin_area, args: [1, castle_geo_001400] },
    { command: LevelCommands.jump_link, args: [script_func_local_1] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_1_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_1_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 180, /*pos*/ -1023, 0, 1152] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
// The different sets of star doors all use different model IDs, despite them all loading the same geo layout.
// It is possible that star doors were originally going to have numbers on them, similar to the other locked doors.
//{ command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_STAR_DOOR_30_STARS, castle_geo_000F00] }, (for basement)
{ command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_STAR_DOOR_8_STARS, castle_geo_000F00] },
]
