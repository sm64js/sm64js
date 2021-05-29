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

export const WARP_CHECKPOINT = 0x80
export const WARP_NO_CHECKPOINT = 0x00

export const OP_AND  = 0
export const OP_NAND = 1
export const OP_EQ   = 2
export const OP_NEQ  = 3
export const OP_LT   = 4
export const OP_LEQ  = 5
export const OP_GT   = 6
export const OP_GEQ  = 7

export const OP_SET  = 0
export const OP_GET  = 1

class LevelCommands {

    constructor() {
        this.sScriptStatus = SCRIPT_PAUSED
        this.sDelayFrames = 0
        this.sDelayFrames2 = 0

        this.sCurrentScript = {}
        this.sRegister = null

        this.REGULAR_FACE = 0x0002
        this.DIZZY_FACE = 0x0003

        this.VAR_CURR_SAVE_FILE_NUM  =  0
        this.VAR_CURR_COURSE_NUM     =  1
        this.VAR_CURR_ACT_NUM        =  2
        this.VAR_CURR_LEVEL_NUM      =  3
        this.VAR_CURR_AREA_INDEX     =  4

        this.sStackTop = []
        this.sStackBaseIndex = 0
    }

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

        Area.gLoadedGraphNodes[model] = GeoLayout.process_geo_layout(geo)

        this.sCurrentScript.index++
    }

    load_model_from_dl(model, dl, layer) {
        if (model < 256) {
            Area.gLoadedGraphNodes[model] = GraphNode.init_graph_node_display_list(layer, dl)
        } else throw "invalid gLoadedGraphNodes index - load model from dl"

        this.sCurrentScript.index++
    }

    set_mario_pos(area, yaw, x, y, z) {
        yaw = DEGREES(yaw)

        // JOE DEBUG
        if (window.debugMarioPosX) {
            yaw = DEGREES(window.debugMarioYaw)
            x = window.debugMarioPosX
            y = window.debugMarioPosY
            z = window.debugMarioPosZ

            window.debugMarioPosX = null  // only use first time
        }

        Object.assign(Area.gMarioSpawnInfo, {
            areaIndex: area,
            startPos: [ x, y, z ],
            startAngle: [0, yaw, 0 ]
        })

        this.sCurrentScript.index++
    }

    load_mario_head(id) {
        GoddardRenderer.gdm_setup()
        GoddardRenderer.gdm_maketestdl(id)
        this.sCurrentScript.index++
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
        console.log("ignoring blackout()")
        this.sCurrentScript.index++
    }

    set_register(value) {
        const new_value = value.call ? value() : value
        this.sRegister = new_value
        this.sCurrentScript.index++
    }

    set_background_music(settingsPreset,  seq) {
        console.log("ignoring set_background_music()")
        this.sCurrentScript.index++
    }

    show_dialog(index,  dialog) {
        console.log("ignoring show_dialog()")
        this.sCurrentScript.index++
    }

    get_func(func, funcClass) {
        // allow deferred linking:
        // CALL_LOOP(1, 'LevelUpdate.lvl_init_or_update')
        if (typeof func == "string") {
            let f
            let parts = func.split('.')
            if (parts.length == 1) {
                f = gLinker[func]
                funcClass = null
            } else {
                funcClass = gLinker[parts[0]]
                f = funcClass[parts[1]]
            }
            if (!f) {
                throw "deferred level commands func not found: " + func
            }
            func = f
        }

        return [func, funcClass]
    }

    call(arg, func, funcClass) {
        [func, funcClass] = this.get_func(func, funcClass)
        this.sRegister = func.call(funcClass, arg, this.sRegister)
        this.sCurrentScript.index++
    }

    call_loop(arg, func, funcClass) {
        [func, funcClass] = this.get_func(func, funcClass)
        this.sRegister = func.call(funcClass, arg, this.sRegister)
        
        if (this.sRegister == 0) {
            this.sScriptStatus = SCRIPT_PAUSED
        } else {
            this.sScriptStatus = SCRIPT_RUNNING
            this.sCurrentScript.index++
        }
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
        act ||= 0x1F

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
        this.sCurrentScript.index++  // return address
        this.sStackTop.push(this.sCurrentScript)
        this.sStackTop.push(this.sStackBaseIndex)
        this.sStackBaseIndex = this.sStackTop.length
        this.start_new_script(script)
    }

    exit() {
        this.sStackTop = this.sStackTop.slice(0, this.sStackBaseIndex)
        this.sStackBaseIndex = this.sStackTop.pop()
        this.sCurrentScript = this.sStackTop.pop()
    }

    exit_and_execute(script, label) {
        this.sStackTop = this.sStackTop.slice(0, this.sStackBaseIndex)
        this.start_new_script(script, label)
    }

    jump_link(script) {
        this.sCurrentScript.index++  // return address
        this.sStackTop.push(this.sCurrentScript)
        this.start_new_script(script)
    }

    jump(script, label) {
        this.start_new_script(script, label)
    }

    jump_if(op, arg, script, label) {
        if (this.eval_script_op(op, arg) != 0) {
            this.start_new_script(script, label)
        } else {
            this.sCurrentScript.index++
        }
    }

    label(name) {
        this.sCurrentScript.index++
    }

    return() {
        this.sCurrentScript = this.sStackTop.pop()
    }

    loop_begin() {
        this.sCurrentScript.index++  // top of loop
        this.sStackTop.push(this.sCurrentScript)
        this.start_new_script()  // new context, same script and index
    }


    eval_script_op(op, arg) {
        let result = false

        switch (op) {
            case OP_AND:
                result = this.sRegister & arg
                break
            case OP_NAND:
                result = !(this.sRegister & arg)
                break
            case OP_EQ:
                result = this.sRegister == arg
                break
            case OP_NEQ:
                result = this.sRegister != arg
                break
            case OP_LT:
                result = this.sRegister < arg
                break
            case OP_LEQ:
                result = this.sRegister <= arg
                break
            case OP_GT:
                result = this.sRegister > arg
                break
            case OP_GEQ:
                result = this.sRegister >= arg
                break
        }

        return result ? 1 : 0
    }

    loop_until(op, arg) {
        if (this.eval_script_op(op, arg) != 0) {
            this.sStackTop.pop()
            this.sCurrentScript.index++
        } else {
            this.sCurrentScript.index = this.sStackTop[this.sStackTop.length - 1].index
        }
    }


// struct WarpNode
// {
//     u8 id;
//     u8 destLevel;
//     u8 destArea;
//     u8 destNode;
// };

// struct ObjectWarpNode
// {
//     struct WarpNode node;
//     struct Object *object;
//     struct ObjectWarpNode *next;
// };

// struct InstantWarp
// {
//     u8 id; // 0 = 0x1B / 1 = 0x1C / 2 = 0x1D / 3 = 0x1E
//     u8 area;
//     Vec3s displacement;
// };

    warp(id, destLevel, destArea, destNode, flags) {
        if (this.sCurrAreaIndex != -1) {
            const warpNode = {
                id: id,
                destLevel: destLevel,
                destArea: destArea,
                destNode: destNode,
                object: null
            }

            Area.gAreas[this.sCurrAreaIndex].warpNodes[warpNode.id] = warpNode
        }

        this.sCurrentScript.index++
    }

    instant_warp(index, destArea, displaceX, displaceY, displaceZ) {
        if (this.sCurrAreaIndex != -1) {
            const warpNode = {
                id: 1,  // !
                area: destArea,
                displacement: [displaceX, displaceY, displaceZ]
            }

            Area.gAreas[this.sCurrAreaIndex].instantWarps[index] = warpNode
        }

        this.sCurrentScript.index++
    }

    painting_warp_node(id, destLevel, destArea, destNode, flags) {
        if (this.sCurrAreaIndex != -1) {
            const warpNode = {
                id: 1,  // !
                destLevel: destLevel,
                destArea: destArea,
                destNode: destNode,
            }

            Area.gAreas[this.sCurrAreaIndex].paintingWarpNodes[id] = warpNode
        }

        this.sCurrentScript.index++
    }


    clear_level() {
        ObjectListProcessor.clear_objects()
        Area.clear_area_graph_nodes()
        Area.clear_areas()

        this.sCurrentScript.index++
    }

    fixed_load() {
        this.sCurrentScript.index++

    }

    start_new_script(level_script, label, index) {
        this.sCurrentScript = {commands: this.sCurrentScript.commands, index: this.sCurrentScript.index}

        if (level_script) {
            if (typeof level_script == 'string') {
                if (!gLinker.level_scripts[level_script]) {
                    console.log("missing level script: " + level_script + ", add it to gLinker.level_scripts")
                }
                level_script = gLinker.level_scripts[level_script]
            } else if (typeof level_script == 'function') {
                level_script = level_script.call()
            }
            this.sCurrentScript.commands = level_script
            this.sCurrentScript.index = 0
        }

        if (index) {
            this.sCurrentScript.index = index
        }

        while (label && this.sCurrentScript.commands[this.sCurrentScript.index].label != label) {
            this.sCurrentScript.index++
        }
    }

    level_script_execute() {
        this.sScriptStatus = SCRIPT_RUNNING

        while (this.sScriptStatus == SCRIPT_RUNNING) {
            const cmd = this.sCurrentScript.commands[this.sCurrentScript.index]
            if (!cmd) {
                debugger
            }
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

const Lev = LevelCommandsInstance;
export const ALLOC_LEVEL_POOL = (...args)     => {return {command: Lev.alloc_level_pool, args: args}}
export const AREA = (...args)                 => {return {command: Lev.begin_area, args: args}}
export const BLACKOUT = (...args)             => {return {command: Lev.blackout, args: args}}
export const CALL = (...args)                 => {return {command: Lev.call, args: args}}
export const CALL_LOOP = (...args)            => {return {command: Lev.call_loop, args: args}}
export const CLEAR_LEVEL = (...args)          => {return {command: Lev.clear_level, args: args}}
export const CLEARDEMOPTR = (...args)         => {return {command: Lev.cleardemoptr, args: args}}
export const END_AREA = (...args)             => {return {command: Lev.end_area, args: args}}
export const EXECUTE = (...args)              => {return {command: Lev.execute, args: args}}
export const EXIT = (...args)                 => {return {command: Lev.exit, args: args}}
export const EXIT_AND_EXECUTE = (...args)     => {return {command: Lev.exit_and_execute, args: args}}
export const FIXED_LOAD = (...args)           => {return {command: Lev.fixed_load, args: args}}
export const FREE_LEVEL_POOL = (...args)      => {return {command: Lev.free_level_pool, args: args}}
export const GET_AREA = (...args)             => {return {command: Lev.get_area, args: args}}
export const INIT_LEVEL = (...args)           => {return {command: Lev.init_level, args: args}}
export const INSTANT_WARP = (...args)         => {return {command: Lev.instant_warp, args: args}}
export const JUMP = (...args)                 => {return {command: Lev.jump, args: args}}
export const JUMP_IF = (...args)              => {return {command: Lev.jump_if, args: args}}
export const JUMP_LINK = (...args)            => {return {command: Lev.jump_link, args: args}}
export const LABEL = (...args)                => {return {command: Lev.label, args: args, label: args[0]}}
export const LOAD_AREA = (...args)            => {return {command: Lev.load_area, args: args}}
export const LOAD_MARIO_HEAD = (...args)      => {return {command: Lev.load_mario_head, args: args}}
export const LOAD_MIO0 = (...args)            => {return {command: Lev.load_mio0, args: args}}
export const LOAD_MODEL_FROM_GEO = (...args)  => {return {command: Lev.load_model_from_geo, args: args}}
export const LOAD_RAW = (...args)             => {return {command: Lev.load_raw, args: args}}
export const LOAD_MODEL_FROM_DL = (...args)   => {return {command: Lev.load_model_from_dl, args: args}}
export const LOOP_BEGIN = (...args)           => {return {command: Lev.loop_begin, args: args}}
export const LOOP_UNTIL = (...args)           => {return {command: Lev.loop_until, args: args}}
export const MARIO = (...args)                => {return {command: Lev.init_mario, args: args}}
export const MARIO_POS = (...args)            => {return {command: Lev.set_mario_pos, args: args}}
export const MACRO_OBJECTS = (...args)        => {return {command: Lev.macro_objects, args: args}}
export const OBJECT = (...args)               => {return {command: Lev.place_object, args: args}}
export const OBJECT_WITH_ACTS = (...args)     => {return {command: Lev.place_object, args: args}}
export const PAINTING_WARP_NODE = (...args)   => {return {command: Lev.painting_warp_node, args: args}}
export const RETURN = (...args)               => {return {command: Lev.return, args: args}}
export const ROOMS = (...args)                => {return {command: Lev.rooms, args: args}}
export const SET_BACKGROUND_MUSIC = (...args) => {return {command: Lev.set_background_music, args: args}}
export const SET_REG = (...args)              => {return {command: Lev.set_register, args: args}}
export const SHOW_DIALOG = (...args)          => {return {command: Lev.show_dialog, args: args}}
export const SLEEP = (...args)                => {return {command: Lev.sleep, args: args}}
export const SLEEP_BEFORE_EXIT = (...args)    => {return {command: Lev.sleep2, args: args}}
export const TERRAIN = (...args)              => {return {command: Lev.terrain, args: args}}
export const TERRAIN_TYPE = (...args)         => {return {command: Lev.terrain_type, args: args}}
export const TRANSITION = (...args)           => {return {command: Lev.transition, args: args}}
export const UNLOAD_AREA = (...args)          => {return {command: Lev.unload_area, args: args}}
export const WARP_NODE = (...args)            => {return {command: Lev.warp, args: args}}
