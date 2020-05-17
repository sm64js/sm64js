import { GeoLayoutCommandsInstance } from "./geo_layout"

const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sDelayFrames = 0
        this.sCurrentScript = {}
        this.sRegister = null
/*        this.sCurrentCmd = null
        this.sScriptIndex = 0*/
    }

    init_level(args) {
        console.log("init level")
        this.sCurrentScript.index++
    }

    sleep(args) {
        console.log("sleep")
        this.sScriptStatus = SCRIPT_PAUSED

        if (this.sDelayFrames == 0) {
            this.sDelayFrames = args[0]
        } else if (--this.sDelayFrames == 0) {
            this.sCurrentScript.index++
            this.sScriptStatus = SCRIPT_RUNNING
        }
    }

    blackout(args) {
        console.log("blackout")
        this.sCurrentScript.index++
    }

    set_register(args) {
        console.log("set register")
        this.sRegister = args[0]
        this.sCurrentScript.index++
    }

    alloc_level_pool(args) {
        console.log("alloc level pool")
        this.sCurrentScript.index++
    }

    begin_area(args) {

        const areaIndex = args[0]
        const geoLayout = args[1]

        if (areaIndex < 8) {
            GeoLayoutCommandsInstance.process_geo_layout(geoLayout)
        }

        this.sCurrentScript.index++
    }

    execute(args) {
        console.log("execute")
        console.log(args[3])
        this.start_new_script(args[3])
    }

    start_new_script(level_script) {
        this.sCurrentScript.commands = level_script
        this.sCurrentScript.index = 0
    }

    level_script_execute() {
        this.sScriptStatus = SCRIPT_RUNNING
        //this.sCurrentCmd = script.script[script.index]
        //this.sScriptIndex = script.index

        console.log("new frame")
        while (this.sScriptStatus == SCRIPT_RUNNING) {
            const cmd = this.sCurrentScript.commands[this.sCurrentScript.index]
            console.log("running script command: " + cmd.command.name)
            cmd.command.call(this, cmd.args)
        }

        //render_game()
        //end_master_display_list()

        //return this.sCurrentCmd
        //script.index = this.sScriptIndex
    }

}

export const LevelCommandsInstance = new LevelCommands()