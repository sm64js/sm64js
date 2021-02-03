import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { bbh_seg7_collision_level } from "./areas/1/collision.inc"
import { bbh_seg7_rooms } from "./areas/1/room.inc"
import { geo_bbh_000F00 } from "./areas/1/geo.inc"

export const level_bbh_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, geo_bbh_000F00] },
    { command: LevelCommands.terrain, args: [bbh_seg7_collision_level] },
    { command: LevelCommands.rooms, args: [bbh_seg7_rooms] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [/*area*/ 1, /*yaw*/ 180, /*pos*/ 666 /*lol*/, -204, 5350] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]