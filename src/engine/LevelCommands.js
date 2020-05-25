import { GeoLayoutInstance as GeoLayout } from "./GeoLayout"
import { AreaInstance as Area } from "../game/Area"
import { GameInstance as Game } from "../game/Game"


const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sDelayFrames = 0
        this.sCurrentScript = {}
        this.sRegister = null
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

    free_level_pool(args) {
        this.sCurrentScript.index++
    }

    load_area(args) {
        const areaIndex = args[0]
        Area.load_area(areaIndex)
        this.sCurrentScript.index++
    }

    begin_area(args) {
        //console.log("begin area")

        const areaIndex = args[0]
        const geoLayout = args[1]

        if (areaIndex < 8) {
            const screnArea = GeoLayout.process_geo_layout(geoLayout)

            this.sCurrAreaIndex = areaIndex
            screnArea.areaIndex = areaIndex
            Area.gAreas[areaIndex].geometryLayoutData = screnArea
            
        }

        this.sCurrentScript.index++
    }

    transition(args) {

        if (Area.gCurrentArea) {
            Area.play_transition(args[0], args[1], args[2], args[3], args[4])
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
            //console.log("running script command: " + cmd.command.name)
            cmd.command.call(this, cmd.args)
        }

        Area.render_game()
        Game.end_master_display_list()

    }

}

export const LevelCommandsInstance = new LevelCommands()