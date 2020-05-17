const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

export class LevelCommands {

    constructor() {
        console.log("creating a LevelCommands Class")
        this.init_level = this.init_level.bind(this)
        this.sScriptStatus = SCRIPT_PAUSED
        this.sCurrentCmd = null
    }

    init_level(args) {
        console.log("init level")
        this.sScriptStatus = SCRIPT_PAUSED
        console.log("meow: " + this.sScriptStatus)
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
        //while (this.sScriptStatus == SCRIPT_RUNNING) {
        console.log("running script command: " + cmd.command.name)
            //this.init_level()
            cmd.command(cmd.args)
        //}

        console.log("here: " + this.sScriptStatus)

        //render_game()
        //end_master_display_list()

        return this.sCurrentCmd
    }

}

/*const LevelCommandsInstance = new LevelCommands()

export function getLevelCommandsInstance() {
    return LevelCommandsInstance
}*/