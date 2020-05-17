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
        // this.levelScript = { script: level_script_entry, index: 0 } //levelCommandAddr
        LevelCommandsInstance.start_new_script(level_script_entry)

        //play_music(SEQ_PLAYER_SFX, SEQUENCE_ARGS(0, SEQ_SOUND_PLAYER), 0);
        //set_sound_mode(save_file_get_sound_mode());

        //gGlobalTimer++;

    }

    main_loop_one_iteration() {

        ///Read Data from Controllers

        // Audio game loop Tick

        this.config_gfx_pool()

        // process controller inputs

        LevelCommandsInstance.level_script_execute()

        this.display_and_vsync()

    }

    config_gfx_pool() {
        /// some stuff with gfx pools tasks, display lists
    }

    display_and_vsync() {
        /// TODO
    }
}