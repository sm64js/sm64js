import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { inside_castle_seg7_area_2_collision } from "./areas/2/collision.inc"
import { inside_castle_seg7_area_2_rooms } from "./areas/2/room.inc"
import { castle_geo_001858 } from "./areas/2/geo.inc"
import { MODEL_CASTLE_KEY_DOOR, MODEL_CASTLE_STAR_DOOR_50_STARS, MODEL_CASTLE_STAR_DOOR_70_STARS } from "../../include/model_ids"
import { castle_geo_000F00 } from "../../levels/castle_inside/star_door/geo.inc"

export const script_func_local_2 = [
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/ -1100, 512, 3021, /*angle*/ 0,   0, 0] }, // /*behParam*/ 0x00000000, /*beh*/ bhvDoorWarp] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_KEY_DOOR, /*pos*/  -946, 512, 3021, /*angle*/ 0, 180, 0] }, // /*behParam*/ 0x00010000, /*beh*/ bhvDoorWarp] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_50_STARS, /*pos*/ -281, 2253, 4762, /*angle*/ 0,   0, 0] }, // /*behParam*/ 0x32000000, /*beh*/ bhvStardoor] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_50_STARS, /*pos*/ -127, 2253, 4762, /*angle*/ 0, 180, 0] }, // /*behParam*/ 0x32000000, /*beh*/ bhvStarDoor] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_70_STARS, /*pos*/ -281, 3174, 3772, /*angle*/ 0,   0, 0] }, // /*behParam*/ 0x46000000, /*beh*/ bhvStarDoor] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_CASTLE_STAR_DOOR_70_STARS, /*pos*/ -127, 3174, 3772, /*angle*/ 0, 180, 0] }, // /*behParam*/ 0x46000000, /*beh*/ bhvStarDoor] },
    { command: LevelCommands.return },
]

export const level_castle_inside_2_entry = [
    { command: LevelCommands.return },
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [2, castle_geo_001858] },
    { command: LevelCommands.jump_link, args: [script_func_local_2] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_2_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_2_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 2, /*yaw*/ 180, /*pos*/  -977, 1203, 2569,] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
 // The different sets of star doors all use different model IDs, despite them all loading the same geo layout.
    // It is possible that star doors were originally going to have numbers on them, similar to the other locked doors.
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_STAR_DOOR_50_STARS, castle_geo_000F00] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CASTLE_STAR_DOOR_70_STARS, castle_geo_000F00] },
]