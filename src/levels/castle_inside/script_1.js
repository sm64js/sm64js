import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { inside_castle_seg7_area_1_collision } from "./areas/1/collision.inc"
import { inside_castle_seg7_area_1_rooms } from "./areas/1/room.inc"
import { castle_geo_001400 } from "./areas/1/geo.inc"

export const level_castle_inside_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, castle_geo_001400] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_1_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_1_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 180, /*pos*/ -1023, 0, 1152] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]