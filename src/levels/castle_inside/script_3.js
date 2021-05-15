import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { inside_castle_seg7_area_3_collision } from "./areas/3/collision.inc"
import { inside_castle_seg7_area_3_rooms } from "./areas/3/room.inc"
import { castle_geo_001C10 } from "./areas/3/geo.inc"

export const level_castle_inside_3_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [3, castle_geo_001C10] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_3_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_3_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 3, /*yaw*/ 0, /*pos*/  -1024, -1074, 1023] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]