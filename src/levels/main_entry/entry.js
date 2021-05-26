import { level_intro_entry_1 } from "../intro/script"

import { ALLOC_LEVEL_POOL, AREA, BLACKOUT, CALL, CALL_LOOP, CLEARDEMOPTR, CLEAR_LEVEL, END_AREA,
         EXECUTE, EXIT, FREE_LEVEL_POOL, GET_AREA, INIT_LEVEL, JUMP, JUMP_LINK, LOAD_AREA,
         LOAD_MARIO_HEAD, LOAD_MIO0, LOAD_MODEL_FROM_GEO, LOAD_MODEL_FROM_DL, LOAD_RAW,
         MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS, RETURN, SET_REG, SLEEP,
         SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, TRANSITION, UNLOAD_AREA
} from "../../engine/LevelCommands"

export const level_script_entry = [
    INIT_LEVEL(),
    SLEEP(2),
    BLACKOUT(false),
    SET_REG(0),
    // EXECUTE(level_intro_entry_1),
    EXECUTE('level_intro_splash_screen'),
    JUMP('level_script_entry'),
]

gLinker.level_scripts.level_script_entry = level_script_entry
