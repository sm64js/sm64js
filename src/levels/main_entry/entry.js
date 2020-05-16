import { LevelCommands } from "../../engine/level_script"

export const level_script_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.sleep, args: [/*frames*/ 2] },
    { command: LevelCommands.blackout, args: [/*active*/ false] },
    { command: LevelCommands.set_register, args: [0] },
    //{ command: LevelCommands.execute, args: [/*seg*/ 0x14, /*script*/ _introSegmentRomStart, /*scriptEnd*/ _introSegmentRomEnd, /*entry*/ level_intro_entry_1] } 
]
