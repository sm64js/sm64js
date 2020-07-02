import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { castle_grounds_geo_00073C } from "./areas/1/geo"

export const level_castle_grounds_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.begin_area, args: [1, castle_grounds_geo_00073C] },
]