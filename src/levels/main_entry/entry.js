import { LevelCommands } from "../../engine/level_script"

window.levelCommands = new LevelCommands()

export const level_script_entry = [
    { command: window.levelCommands.init_level },
    { command: window.levelCommands.sleep, args: [/*frames*/ 2] },
    { command: window.levelCommands.blackout, args: [/*active*/ false] },
    { command: window.levelCommands.set_register, args: [0] },
    //{ command: LevelCommands.execute, args: [/*seg*/ 0x14, /*script*/ _introSegmentRomStart, /*scriptEnd*/ _introSegmentRomEnd, /*entry*/ level_intro_entry_1] } 
]
