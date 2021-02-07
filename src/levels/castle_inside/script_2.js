import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"

import { inside_castle_seg7_area_2_collision } from "./areas/2/collision.inc"
import { inside_castle_seg7_area_2_rooms } from "./areas/2/room.inc"
import { castle_geo_001858 } from "./areas/2/geo.inc"

export const level_castle_inside_2_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [2, castle_geo_001858] },
    { command: LevelCommands.terrain, args: [inside_castle_seg7_area_2_collision] },
    { command: LevelCommands.rooms, args: [inside_castle_seg7_area_2_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 2, /*yaw*/ 180, /*pos*/  -977, 1203, 2569,] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]