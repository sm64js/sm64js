import { GeoLayoutInstance as GeoLayout } from "./GeoLayout"
import { AreaInstance as Area } from "../game/Area"
import { GameInstance as Game } from "../game/Game"
import * as GlobalScripts from "../levels/global_scripts"
import * as Gbi from "../include/gbi"
import * as GraphNode from "./graph_node"
import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import { LevelUpdateInstance as LevelUpdate } from "../game/LevelUpdate"
import { init_graph_node_start } from "./graph_node"
import { ObjectListProcessorInstance as ObjectListProcessor } from "../game/ObjectListProcessor"
import { DEGREES } from "../game/Camera"

const SCRIPT_RUNNING = 1
const SCRIPT_PAUSED = 0
const SCRIPT_PAUSED2 = -1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sDelayFrames = 0
        this.sDelayFrames2 = 0

        this.sCurrentScript = {}
        this.sRegister = null

        this.REGULAR_FACE = 0x0002
        this.DIZZY_FACE = 0x0003

        this.OP_AND  = 0
        this.OP_NAND = 1
        this.OP_EQ   = 2
        this.OP_NEQ  = 3
        this.OP_LT   = 4
        this.OP_LEQ  = 5
        this.OP_GT   = 6
        this.OP_GEQ  = 7

        this.OP_SET   =  0
        this.OP_GET   =  1

        this.VAR_CURR_SAVE_FILE_NUM  =  0
        this.VAR_CURR_COURSE_NUM     =  1
        this.VAR_CURR_ACT_NUM        =  2
        this.VAR_CURR_LEVEL_NUM      =  3
        this.VAR_CURR_AREA_INDEX     =  4

        this.sStackTop = []
    }

    // ALLOC_LEVEL_POOL() {return this.alloc_level_pool()}
    // AREA(areaIndex, geoLayout) {return this.begin_area(areaIndex, geoLayout)}
    // CALL(arg, func, funcClass) {return this.call(arg, func, funcClass)}
    // CALL_LOOP(arg, func, funcClass) {return this.call_loop(arg, func, funcClass)}
    // END_AREA() {return this.end_area()}
    // FREE_LEVEL_POOL() {return this.free_level_pool()}
    // GET_AREA(what) {return this.get_area(what)}
    // INIT_LEVEL() {return this.init_level()}
    // JUMP_LINK(script) {return this.jump_link(script)}
    // LOAD_MODEL_FROM_GEO(model, geo) {return this.load_model_from_geo(model, geo)}
    // LOAD_MODEL_FROM_DL(model, dl, layer) {return this.load_model_from_dl(model, dl, layer)}
    // MARIO(model, bharg, bhscript) {return this.init_mario(model, bharg, bhscript)}
    // MARIO_POS(area, yaw, x, y, z) {return this.set_mario_pos(area, yaw, x, y, z)}
    // MACRO_OBJECTS(data) {return this.macro_objects(data)}
    // OBJECT(model, x, y, z, pitch, yaw, rot, bharg, bhscript) {return this.place_object(model, x, y, z, pitch, yaw, rot, bharg, bhscript)}
    // OBJECT_WITH_ACTS(model, x, y, z, pitch, yaw, rot, bharg, bhscript, acts) {return this.place_object(model, x, y, z, pitch, yaw, rot, bharg, bhscript, acts)}
    // RETURN() {return this.return()}  // heh
    // TERRAIN(data) {return this.terrain(data)}
    // TERRAIN_TYPE(data) {return this.terrain_type(data)}

    load_mio0() {
        this.sCurrentScript.index++
    }

    load_raw() {
        this.sCurrentScript.index++
    }


    init_level() {
        //console.log("init level")
        GeoLayout.gObjParentGraphNode = init_graph_node_start(null, GeoLayout.gObjParentGraphNode)
        ObjectListProcessor.clear_objects()
        Area.clear_areas()
        this.sCurrentScript.index++
    }

    init_mario(model, bharg, bhscript) {
        Object.assign(Area.gMarioSpawnInfo, {
            startPos: { x: 0, y: 0, z: 0 },
            startAngle: { x: 0, y: 0, z: 0 },
            areaIndex: 0,
            behaviorArg: bharg,
            behaviorScript: bhscript,
            unk18: Area.gLoadedGraphNodes[model]
        })

        this.sCurrentScript.index++
    }

    load_model_from_geo(model, geo) {
        if (typeof geo == "function") {
            geo = geo()
        }

        Area.gLoadedGraphNodes[model] = GeoLayout.process_geo_layout(geo).node

        this.sCurrentScript.index++
    }

    load_model_from_dl(model, dl, layer) {
        if (model < 256) {
            Area.gLoadedGraphNodes[model] = GraphNode.init_graph_node_display_list(layer, dl).node
        } else throw "invalid gLoadedGraphNodes index - load model from dl"

        this.sCurrentScript.index++
    }

    set_mario_pos(area, yaw, x, y, z, glider=false) {
        yaw = DEGREES(yaw)

        Object.assign(Area.gMarioSpawnInfo, {
            areaIndex: area,
            startPos: [ x, y, z ],
            startAngle: [0, yaw, 0 ],
            parachuteSpawn: glider
        })

        this.sCurrentScript.index++
    }

    load_mario_head(id) {
        GoddardRenderer.gdm_setup()
        GoddardRenderer.gdm_maketestdl(id)
        this.sCurrentScript.index++
    }

    exit() {
        // sStackTop = sStackBase;
        // sStackBase = (uintptr_t *) *(--sStackTop);
        // sCurrentCmd = (struct LevelCommand *) *(--sStackTop);
    }

    sleep(delay) {
        //console.log("sleep")
        this.sScriptStatus = SCRIPT_PAUSED

        if (this.sDelayFrames == 0) {
            this.sDelayFrames = delay
        } else if (--this.sDelayFrames == 0) {
            this.sCurrentScript.index++
            this.sScriptStatus = SCRIPT_RUNNING
        }
    }

    sleep2(delay) {
        this.sScriptStatus = SCRIPT_PAUSED2

        if (this.sDelayFrames2 == 0) {
            this.sDelayFrames2 = delay
        } else if (--this.sDelayFrames2 == 0) {
            this.sCurrentScript.index++
            this.sScriptStatus = SCRIPT_RUNNING
        }
    }

    blackout(bool) {
        //console.log("blackout")
        this.sCurrentScript.index++
    }

    set_register(value) {
        //console.log("set register")
        const new_value = value.call ? value() : value
        this.sRegister = new_value
        this.sCurrentScript.index++
    }

    set_background_music(settingsPreset, seq) {
        document.getElementById("grass").pause()
        document.getElementById("jungle").pause()
        document.getElementById("snow").pause()
        let m
        switch(seq) {
            case 3:
                m = document.getElementById("grass")
                m.loop = true
                m.volume = 0.5
                m.play()
                break
            case 8:
                m = document.getElementById("snow")
                m.loop = true
                m.volume = 0.5
                m.play()
                break
            case 19:
                m = document.getElementById("jungle")
                m.loop = true
                m.volume = 0.5
                m.play()
                break
        }
        this.sCurrentScript.index++
    }

    eval_script_op(op, arg) {
        switch (op) {
            case 0: return this.sRegister & arg
            case 1: return !(this.sRegister & arg)
            case 2: return this.sRegister == arg
            case 3: return this.sRegister != arg
            case 4: return this.sRegister < arg
            case 5: return this.sRegister <= arg
            case 6: return this.sRegister > arg
            case 7: return this.sRegister >= arg
        }
    }

    call(arg, func, funcClass) {
        this.sRegister = func.call(funcClass, arg, this.sRegister)
        this.sCurrentScript.index++
    }

    call_loop(arg, func, funcClass) {
        this.sRegister = func.call(funcClass, arg, this.sRegister)
        
        if (this.sRegister == 0) {
            this.sScriptStatus = SCRIPT_PAUSED
        } else {
            this.sScriptStatus = SCRIPT_RUNNING
            this.sCurrentScript.index++
        }
    }

    reset_call_loop(args) {
        this.callLoopFrameCounter = 0
        this.sCurrentScript.index++
    }

    alloc_level_pool() {
        //console.log("alloc level pool")
        this.sCurrentScript.index++
    }

    free_level_pool() {
        this.sCurrentScript.index++
    }

    get_area(what) {
        this.sRegister = Area[what]
        this.sCurrentScript.index++
    }


    set_area(what, value) {
        Area[what] = this.sRegister
        this.sCurrentScript.index++
    }

    load_area(areaIndex) {
        Area.load_area(areaIndex)
        this.sCurrentScript.index++
    }

    unload_area() {
        Area.clear_areas()
        //clear_area_graph_nodes -- call all node functions with init and clear command
        this.sCurrentScript.index++
    }

    begin_area(areaIndex, geoLayout) {
        //console.log("begin area")

        if (areaIndex < 8) {
            const screnArea = GeoLayout.process_geo_layout(geoLayout)

            this.sCurrAreaIndex = areaIndex
            screnArea.areaIndex = areaIndex
            Area.gAreas[areaIndex].geometryLayoutData = screnArea

            if (screnArea.views[0]) {
                Area.gAreas[areaIndex].camera = screnArea.views[0].config.camera
            } else {
                Area.gAreas[areaIndex].camera = null
            }
            
        }
        this.sCurrentScript.index++
    }

    place_object(model, x, y, z, pitch, yaw, rot, bharg, bhscript, act) {
        const val7 = 1 << (Area.gCurrActNum - 1)
        act = act || 0x1F

        if (this.sCurrAreaIndex != -1 && (act & val7 || act == 0x1F)) {
            const spawnInfo = {
                startPos: [ x, y, z ],
                startAngle: [DEGREES(pitch), DEGREES(yaw), DEGREES(rot)],
                areaIndex: this.sCurrAreaIndex,
                activeAreaIndex: this.sCurrAreaIndex,
                behaviorArg: bharg,
                behaviorScript: bhscript,
                unk18: Area.gLoadedGraphNodes[model],
                next: Area.gAreas[this.sCurrAreaIndex].objectSpawnInfos
            }

            Area.gAreas[this.sCurrAreaIndex].objectSpawnInfos = spawnInfo
        }

        this.sCurrentScript.index++
    }

    macro_objects(data) {
        if (this.sCurrAreaIndex != -1) {
            Area.gAreas[this.sCurrAreaIndex].macroObjects = data
        }

        this.sCurrentScript.index++
    }

    rooms(rms) {
        if (this.sCurrAreaIndex != -1) {
            Area.gAreas[this.sCurrAreaIndex].surfaceRooms = rms
        }

        this.sCurrentScript.index++
    }

    terrain(data) {
        if (this.sCurrAreaIndex != -1) {
            Area.gAreas[this.sCurrAreaIndex].terrainData = data
        }

        this.sCurrentScript.index++
    }

    terrain_type(data) {
        if (this.sCurrAreaIndex != -1) {
            Area.gAreas[this.sCurrAreaIndex].terrainType = data
        }

        this.sCurrentScript.index++
    }

    end_area() {
        this.sCurrAreaIndex = -1
        this.sCurrentScript.index++
    }

    transition(transType, time, red, green, blue) {
        if (Area.gCurrentArea) {
            Area.play_transition(transType, time, red, green, blue)
        }

        this.sCurrentScript.index++
    }

    cleardemoptr() {
        Game.gCurrDemoInput = null
        this.sCurrentScript.index++
    }

    execute(script) {
        const new_script = script.call ? script() : script
        this.start_new_script(new_script)
    }

    jump_link(script) {
        // allow getters
        if (typeof script == "string") {
            script = GlobalScripts[script]
        } else if (typeof script == "function") {
            script = script()
        }

        this.sStackTop.push({ commands: this.sCurrentScript.commands, index: ++this.sCurrentScript.index })
        this.start_new_script(script)
    }

    jump_if(op, arg, script) {
        if (this.eval_script_op(op, arg) != 0) {
            this.start_new_script(script)
        } else {
            this.sCurrentScript.index++
        }
    }

    return() {
        this.sCurrentScript = this.sStackTop.pop()
    }

    start_new_script(level_script) {
        this.sCurrentScript.commands = level_script
        this.sCurrentScript.index = 0
    }

    level_script_execute() {
        this.sScriptStatus = SCRIPT_RUNNING

        while (this.sScriptStatus == SCRIPT_RUNNING) {
            const cmd = this.sCurrentScript.commands[this.sCurrentScript.index]
            if (Array.isArray(cmd)) {
                throw "deprecated level script format: " + cmd[0]
            } else {
                //console.log("running script command: " + cmd.command.name)
                cmd.command.call(this, ...(cmd.args || []))
            }
        }

        Game.init_render_image()
        Area.render_game()
        Game.end_master_display_list()
    }
}

export const LevelCommandsInstance = new LevelCommands()

// EXPERIMENTAL
const Lev = LevelCommandsInstance;
export const ALLOC_LEVEL_POOL = (...args)     => {return {command: Lev.alloc_level_pool, args: args}}
export const AREA = (...args)                 => {return {command: Lev.begin_area, args: args}}
export const BLACKOUT = (...args)             => {return {command: Lev.blackout, args: args}}
export const CALL = (...args)                 => {return {command: Lev.call, args: args}}
export const CALL_LOOP = (...args)            => {return {command: Lev.call_loop, args: args}}
export const CLEARDEMOPTR = (...args)         => {return {command: Lev.cleardemoptr, args: args}}
export const END_AREA = (...args)             => {return {command: Lev.end_area, args: args}}
export const EXECUTE = (...args)              => {return {command: Lev.execute, args: args}}
export const EXIT = (...args)                 => {return {command: Lev.exit, args: args}}
export const FREE_LEVEL_POOL = (...args)      => {return {command: Lev.free_level_pool, args: args}}
export const GET_AREA = (...args)             => {return {command: Lev.get_area, args: args}}
export const INIT_LEVEL = (...args)           => {return {command: Lev.init_level, args: args}}
export const JUMP_LINK = (...args)            => {return {command: Lev.jump_link, args: args}}
export const LOAD_AREA = (...args)            => {return {command: Lev.load_area, args: args}}
export const LOAD_MARIO_HEAD = (...args)      => {return {command: Lev.load_mario_head, args: args}}
export const LOAD_MIO0 = (...args)            => {return {command: Lev.load_mio0, args: args}}
export const LOAD_MODEL_FROM_GEO = (...args)  => {return {command: Lev.load_model_from_geo, args: args}}
export const LOAD_RAW = (...args)             => {return {command: Lev.load_raw, args: args}}
export const LOAD_MODEL_FROM_DL = (...args)   => {return {command: Lev.load_model_from_dl, args: args}}
export const MARIO = (...args)                => {return {command: Lev.init_mario, args: args}}
export const MARIO_POS = (...args)            => {return {command: Lev.set_mario_pos, args: args}}
export const MACRO_OBJECTS = (...args)        => {return {command: Lev.macro_objects, args: args}}
export const OBJECT = (...args)               => {return {command: Lev.place_object, args: args}}
export const OBJECT_WITH_ACTS = (...args)     => {return {command: Lev.place_object, args: args}}
export const RETURN = (...args)               => {return {command: Lev.return, args: args}}  // heh
export const SET_BACKGROUND_MUSIC = (...args) => {return {command: Lev.set_background_music, args: args}}
export const SET_REGISTER = (...args)         => {return {command: Lev.set_register, args: args}}
export const SLEEP = (...args)                => {return {command: Lev.sleep, args: args}}
export const SLEEP_BEFORE_EXIT = (...args)    => {return {command: Lev.sleep2, args: args}}
export const TERRAIN = (...args)              => {return {command: Lev.terrain, args: args}}
export const TERRAIN_TYPE = (...args)         => {return {command: Lev.terrain_type, args: args}}
export const TRANSITION = (...args)           => {return {command: Lev.transition, args: args}}
export const UNLOAD_AREA = (...args)          => {return {command: Lev.unload_area, args: args}}