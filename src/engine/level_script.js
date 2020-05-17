const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sCurrentCmd = null
        this.init_level = this.init_level.bind(this)
    }

    init_level(args) {
        this.sScriptStatus = SCRIPT_PAUSED
    }

    sleep(args) {
        console.log("sleep")
    }

    blackout(args) {
        console.log("blackout")
    }

    set_register(args) {
        console.log("set register")
    }

    execute(args) {
        console.log("execute")
    }

    level_script_execute(cmd) {
        this.sScriptStatus = SCRIPT_RUNNING
        this.sCurrentCmd = cmd

        console.log()
        while (this.sScriptStatus == SCRIPT_RUNNING) {
            console.log("running script command: " + cmd.command.name)
            cmd.command(cmd.args)
        }


        //render_game()
        //end_master_display_list()

        return this.sCurrentCmd
    }

}

export const LevelCommandsInstance = new LevelCommands()