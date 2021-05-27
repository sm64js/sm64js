import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"

import { ALLOC_LEVEL_POOL, AREA, BLACKOUT, CALL, CALL_LOOP, CLEARDEMOPTR, CLEAR_LEVEL, END_AREA,
         EXECUTE, EXIT, FREE_LEVEL_POOL, GET_AREA, INIT_LEVEL, JUMP, JUMP_IF, JUMP_LINK, LOAD_AREA,
         LOAD_MARIO_HEAD, LOAD_MIO0, LOAD_MODEL_FROM_GEO, LOAD_MODEL_FROM_DL, LOAD_RAW,
         MACRO_OBJECTS, MARIO, MARIO_POS, OBJECT, OBJECT_WITH_ACTS, RETURN, SET_REG, SLEEP,
         SLEEP_BEFORE_EXIT, TERRAIN, TERRAIN_TYPE, TRANSITION, UNLOAD_AREA, EXIT_AND_EXECUTE,
         OP_EQ
} from "../../engine/LevelCommands"

import { intro_geo_0002D0, intro_geo_mario_head_regular, intro_geo_mario_head_dizzy, intro_geo_000414 } from "./geo"
import { WARP_TRANSITION_FADE_INTO_COLOR, WARP_TRANSITION_FADE_FROM_STAR, WARP_TRANSITION_FADE_FROM_COLOR } from "../../game/Area"
import { level_main_scripts_entry } from "../scripts"
import { lvl_intro_update } from "../../menu/level_select_menu"

export const level_intro_splash_screen = [
    // JOE DEBUG
    EXIT_AND_EXECUTE('level_main_scripts_entry'),

    INIT_LEVEL(),

    // Load "Super Mario 64" logo
    AREA(/*index*/ 1, intro_geo_0002D0),
    END_AREA(),

    // Start animation
    LOAD_AREA(/*area*/ 1),

    CALL(/*arg*/ 0, /*func*/ lvl_intro_update),
    SLEEP(/*frames*/ 75),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0x00, 0x00, 0x00),
    SLEEP(/*frames*/ 16),
    // CMD2A(/*unk2*/ 1),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    EXIT_AND_EXECUTE('level_intro_mario_head_regular'),
]


export const level_intro_mario_head_regular = [
    INIT_LEVEL(),
    BLACKOUT(/*active*/ true),
    LOAD_MARIO_HEAD(/*loadHeadID*/ LevelCommands.REGULAR_FACE),

    AREA(/*index*/ 1, intro_geo_mario_head_regular),
    END_AREA(),

    SLEEP(/*frames*/ 2),
    BLACKOUT(/*active*/ false),
    LOAD_AREA(/*area*/ 1),
    // SET_MENU_MUSIC(/*seq*/ 0x0002),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_FROM_STAR, /*time*/ 20, /*color*/ 0x00, 0x00, 0x00),
    SLEEP(/*frames*/ 20),
    CALL_LOOP(/*arg*/ 1, /*func*/ lvl_intro_update),
    JUMP_IF(/*op*/ OP_EQ, /*arg*/ 100, 'script_intro_L1'),
    JUMP_IF(/*op*/ OP_EQ, /*arg*/ 101, 'script_intro_L2'),
    JUMP('script_intro_L4'),
]

export const level_intro_mario_head_dizzy = [
    INIT_LEVEL(),
    BLACKOUT(/*active*/ true),
    LOAD_MARIO_HEAD(/*loadHeadID*/ LevelCommands.DIZZY_FACE),

    AREA(/*index*/ 1, intro_geo_mario_head_dizzy),
    END_AREA(),

    SLEEP(/*frames*/ 2),
    BLACKOUT(/*active*/ false),
    LOAD_AREA(/*area*/ 1),
    // SET_MENU_MUSIC(/*seq*/ 0x0082),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_FROM_STAR, /*time*/ 20, /*color*/ 0x00, 0x00, 0x00),
    SLEEP(/*frames*/ 20),
    CALL_LOOP(/*arg*/ 2, /*func*/ lvl_intro_update),
    JUMP_IF(/*op*/ OP_EQ, /*arg*/ 100, 'script_intro_L1'),
    JUMP_IF(/*op*/ OP_EQ, /*arg*/ 101, 'script_intro_L2'),
    JUMP('script_intro_L4'),
]

const level_intro_entry_4 = [
    INIT_LEVEL(),

    AREA(/*index*/ 1, intro_geo_000414),
    END_AREA(),

    LOAD_AREA(/*area*/ 1),
    // SET_MENU_MUSIC(/*seq*/ 0x0002),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_FROM_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CALL_LOOP(/*arg*/ 3, /*func*/ lvl_intro_update),
    JUMP_IF(/*op*/ OP_EQ, /*arg*/ -1, 'script_intro_L5'),
    JUMP('script_intro_L3'),
]

const script_intro_L1 = [
    // STOP_MUSIC(/*fadeOutTime*/ 0x00BE),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    SET_REG(/*value*/ 16),
    EXIT_AND_EXECUTE('level_main_menu_entry_1'),
]

const script_intro_L2 = [
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    EXIT_AND_EXECUTE('level_intro_entry_4'),
]

const script_intro_L3 = [
    // STOP_MUSIC(/*fadeOutTime*/ 0x00BE),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    EXIT_AND_EXECUTE('level_main_scripts_entry'),
]

const script_intro_L4 = [
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0xFF, 0xFF, 0xFF),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    EXIT_AND_EXECUTE('level_main_scripts_entry'),
]

const script_intro_L5 = [
    // STOP_MUSIC(/*fadeOutTime*/ 0x00BE),
    TRANSITION(/*transType*/ WARP_TRANSITION_FADE_INTO_COLOR, /*time*/ 16, /*color*/ 0x00, 0x00, 0x00),
    SLEEP(/*frames*/ 16),
    CLEAR_LEVEL(),
    SLEEP(/*frames*/ 2),
    EXIT_AND_EXECUTE('level_intro_splash_screen'),
]


gLinker.level_scripts.level_intro_splash_screen = level_intro_splash_screen
gLinker.level_scripts.level_intro_mario_head_regular = level_intro_mario_head_regular
gLinker.level_scripts.level_intro_entry_4 = level_intro_entry_4
gLinker.level_scripts.script_intro_L1 = script_intro_L1
gLinker.level_scripts.script_intro_L2 = script_intro_L2
gLinker.level_scripts.script_intro_L3 = script_intro_L3
gLinker.level_scripts.script_intro_L4 = script_intro_L4
gLinker.level_scripts.script_intro_L5 = script_intro_L5
