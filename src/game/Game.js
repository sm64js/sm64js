import { level_script_entry } from "../levels/main_entry/entry"
import { LevelCommandsInstance } from "../engine/level_script"

export class Game {
    constructor() {
        this.levelCommandAddr = null
        this.main_loop_init() /// thread5_game_loop_init
    }

    main_loop_init() {

        //setup_game_memory();

        //init_controllers();

        //save_file_load_all();

        //set_vblank_handler(2, &gGameVblankHandler, &gGameVblankQueue, (OSMesg) 1);

        // point levelCommandAddr to the entry point into the level script data.
        this.levelCommandAddr = level_script_entry[0]

        //play_music(SEQ_PLAYER_SFX, SEQUENCE_ARGS(0, SEQ_SOUND_PLAYER), 0);
        //set_sound_mode(save_file_get_sound_mode());

        //gGlobalTimer++;

    }

    main_loop_one_iteration() {

        ///Read Data from Controllers

        // Audio game loop Tick

        this.config_gfx_pool()

        // process controller inputs

        this.levelCommandAddr = LevelCommandsInstance.level_script_execute(this.levelCommandAddr)

        this.display_and_vsync()

    }

    config_gfx_pool() {
        /// some stuff with gfx pools tasks, display lists
    }

    display_and_vsync() {
        /// TODO
    }
}