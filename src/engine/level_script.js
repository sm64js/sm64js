import { GeoLayoutInstance } from "./geo_layout"

const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sDelayFrames = 0
        this.sCurrentScript = {}
        this.sRegister = null
        this.gAreas = Array(8).fill({})
    }

    init_level(args) {
        //console.log("init level")
        this.sCurrentScript.index++
    }

    sleep(args) {
        //console.log("sleep")
        this.sScriptStatus = SCRIPT_PAUSED

        if (this.sDelayFrames == 0) {
            this.sDelayFrames = args[0]
        } else if (--this.sDelayFrames == 0) {
            this.sCurrentScript.index++
            this.sScriptStatus = SCRIPT_RUNNING
        }
    }

    blackout(args) {
        //console.log("blackout")
        this.sCurrentScript.index++
    }

    set_register(args) {
        //console.log("set register")
        this.sRegister = args[0]
        this.sCurrentScript.index++
    }

    alloc_level_pool(args) {
        //console.log("alloc level pool")
        this.sCurrentScript.index++
    }

    begin_area(args) {
        //console.log("begin area")

        const areaIndex = args[0]
        const geoLayout = args[1]

        if (areaIndex < 8) {
            const screnArea = GeoLayoutInstance.process_geo_layout(geoLayout)

            this.sCurrAreaIndex = areaIndex
            screnArea.areaIndex = areaIndex
            this.gAreas[areaIndex].geometryLayoutData = screnArea
            
        }

        this.sCurrentScript.index++
    }

    execute(args) {
        //console.log("execute")
        this.start_new_script(args[3])
    }

    start_new_script(level_script) {
        this.sCurrentScript.commands = level_script
        this.sCurrentScript.index = 0
    }

    level_script_execute() {
        this.sScriptStatus = SCRIPT_RUNNING

        console.log("new frame")
        while (this.sScriptStatus == SCRIPT_RUNNING) {
            const cmd = this.sCurrentScript.commands[this.sCurrentScript.index]
            console.log("running script command: " + cmd.command.name)
            cmd.command.call(this, cmd.args)
        }

        //render_game()
        //end_master_display_list()

    }

}

export const LevelCommandsInstance = new LevelCommands()