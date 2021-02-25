import { level_script_entry } from "../levels/main_entry/entry"
import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"

class Game {
    constructor() {
        this.main_loop_init() /// thread5_game_loop_init
        window.gGlobalTimer = 0
    }

    main_loop_init() {

        LevelCommands.start_new_script(level_script_entry)

    }

    main_loop_one_iteration() {

        LevelCommands.level_script_execute()

        this.display_and_vsync()

    }

    display_and_vsync() {
        window.gGlobalTimer++
    }
}

export const GameInstance = new Game()