import * as _Linker from "../game/Linker"
import * as _ObjectListProcessor from "../game/ObjectListProcessor"

import { oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, oPosX, oPosY, oPosZ, oGraphYOffset,
         oGravity, oBounciness, oDragStrength, oFriction, oBuoyancy, oBehParams2ndByte, oRoom,
         oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll, oTimer, oPrevAction, oAction, oSubAction,
         oDrawingDistance, oMoveFlags, oWallHitboxRadius, oAnimations, oInteractType,
         oHomeX, oHomeY, oHomeZ, oDistanceToMario, oAngleToMario, oMoveAngleYaw,

         OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, OBJ_MOVE_ON_GROUND, OBJ_FLAG_COMPUTE_DIST_TO_MARIO,
         OBJ_FLAG_ACTIVE_FROM_AFAR, ACTIVE_FLAG_FAR_AWAY, oHeldState, HELD_FREE,
         OBJ_FLAG_MOVE_XZ_USING_FVEL, OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO
} from "../include/object_constants"

import { geo_obj_init_animation,
         GRAPH_RENDER_CYLBOARD, GRAPH_RENDER_BILLBOARD, GRAPH_RENDER_ACTIVE } from "./graph_node"

import { dist_between_objects, obj_angle_to_object, spawn_object_at_origin, obj_copy_pos_and_angle,
         cur_obj_scale, cur_obj_hide, cur_obj_move_xz_using_fvel_and_yaw, cur_obj_has_behavior,
         cur_obj_set_model, spawn_water_droplet
} from "../game/ObjectHelpers"

import { s16, s32, random_float } from "../utils"

const obj_and_int = (object, field, value) => { object.rawData[field] &= s32(value) }

class BehaviorCommands {

    constructor() {
        this.BHV_PROC_CONTINUE = 0
        this.BHV_PROC_BREAK    = 1
    }

    random_sign() {
        return Math.random() > 0.5 ? 1 : -1
    }

    cur_obj_update() {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

        let objFlags = gCurrentObject.rawData[oFlags]
        let distanceFromMario = 0.0

        // Calculate the distance from the object to Mario.
        if (objFlags & OBJ_FLAG_COMPUTE_DIST_TO_MARIO) {
            gCurrentObject.rawData[oDistanceToMario] = dist_between_objects(gCurrentObject, gMarioObject)
            distanceFromMario = gCurrentObject.rawData[oDistanceToMario]
        }

        // Calculate the angle from the object to Mario.
        if (objFlags & OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO) {
            gCurrentObject.rawData[oAngleToMario] = obj_angle_to_object(gCurrentObject, gMarioObject)
        }

        // If the object's action has changed, reset the action timer.
        if (gCurrentObject.rawData[oAction] != gCurrentObject.rawData[oPrevAction]) {
            gCurrentObject.rawData[oTimer] = 0
            gCurrentObject.rawData[oSubAction] = 0
            gCurrentObject.rawData[oPrevAction] = gCurrentObject.rawData[oAction]
        }

        // Execute the behavior script.
        this.bhvScript = gCurrentObject.bhvScript
        let bhvProcResult = this.BHV_PROC_CONTINUE

        while (bhvProcResult == this.BHV_PROC_CONTINUE) {
            const bhvFunc = this.bhvScript.commands[this.bhvScript.index]
            if (Array.isArray(bhvFunc)) {
                throw "deprecated behavior format: " + bhvFunc[0]
            } else {
                bhvProcResult = bhvFunc.command.call(this, bhvFunc.args)
            }
        }

        // Increment the object's timer.
        if (gCurrentObject.rawData[oTimer] < 0x3FFFFFFF) {
            gCurrentObject.rawData[oTimer]++
        }

        if (gCurrentObject.rawData[oAction] != gCurrentObject.rawData[oPrevAction]) {
            gCurrentObject.rawData[oTimer] = 0
            gCurrentObject.rawData[oSubAction] = 0
            gCurrentObject.rawData[oPrevAction] = gCurrentObject.rawData[oAction]
        }

        objFlags = gCurrentObject.rawData[oFlags]

        if (objFlags & OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW) {
            gCurrentObject.rawData[oFaceAngleYaw] = gCurrentObject.rawData[oMoveAngleYaw]
        }

        if (objFlags & OBJ_FLAG_MOVE_XZ_USING_FVEL) {
            cur_obj_move_xz_using_fvel_and_yaw()
        }

        if (objFlags & OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE) {
            this.obj_update_gfx_pos_and_angle(gCurrentObject)
        }

        // Handle visibility of object
        if (gCurrentObject.rawData[oRoom] != -1) {
            // If the object is in a room, only show it when Mario is in the room.
            //throw "object is in a room - cur_obj_enable_rendering_if_mario_in_room"
        } else if ((objFlags & OBJ_FLAG_COMPUTE_DIST_TO_MARIO) && gCurrentObject.collisionData == null) {
            if (!(objFlags & OBJ_FLAG_ACTIVE_FROM_AFAR)) {
                // If the object has a render distance, check if it should be shown.
                if (distanceFromMario > gCurrentObject.rawData[oDrawingDistance]) {
                    // Out of render distance, hide the object.
                    gCurrentObject.gfx.flags &= ~GRAPH_RENDER_ACTIVE
                    gCurrentObject.activeFlags |= ACTIVE_FLAG_FAR_AWAY
                } else if (gCurrentObject.rawData[oHeldState] == HELD_FREE) {
                    // In render distance (and not being held), show the object.
                    gCurrentObject.gfx.flags |= GRAPH_RENDER_ACTIVE
                    gCurrentObject.activeFlags &= ~ACTIVE_FLAG_FAR_AWAY
                }
            }
        }
    }

    obj_update_gfx_pos_and_angle(obj) {
        obj.gfx.pos[0] = obj.rawData[oPosX]
        obj.gfx.pos[1] = obj.rawData[oPosY] + obj.rawData[oGraphYOffset]
        obj.gfx.pos[2] = obj.rawData[oPosZ]

        obj.gfx.angle[0] = obj.rawData[oFaceAnglePitch] & 0xFFFF
        obj.gfx.angle[1] = obj.rawData[oFaceAngleYaw] & 0xFFFF
        obj.gfx.angle[2] = obj.rawData[oFaceAngleRoll] & 0xFFFF
    }


// cmds
    cmd_spawn_water_droplet(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        let params = args.params
        if (typeof params == 'string') {
            params = gLinker[params]
        }
        spawn_water_droplet(gCurrentObject, params)

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    call_native(args) {
        if (!args.func) {
            console.log("in " + this.bhvScript.name + " index " + this.bhvScript.index)
            console.log(this.bhvScript)
            throw("unimplemented native function")
        }

        // allow deferred linking:
        // CALL_NATIVE('bhv_seesaw_platform_update'),
        // CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
        if (typeof args.func == "string") {
            let func, funcClass
            let parts = args.func.split('.')
            if (parts.length == 1) {
                func = gLinker[args.func]
                funcClass = null
            } else {
                funcClass = gLinker[parts[0]]
                func = funcClass[parts[1]]
            }
            if (!func) {
                throw "deferred native function not found: " + args.func
            }
            args.func = func
            args.funcClass = funcClass
        }

        args.func.call(args.funcClass)
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    delay(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const num = args.num

        if (gCurrentObject.bhvDelayTimer < num - 1) {
            gCurrentObject.bhvDelayTimer++
        } else {
            gCurrentObject.bhvDelayTimer = 0
            this.bhvScript.index++
        }

        return this.BHV_PROC_BREAK
    }

    delay_var(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const num = s32(gCurrentObject.rawData[args.var])

        if (gCurrentObject.bhvDelayTimer < num - 1) {
            gCurrentObject.bhvDelayTimer++
        } else {
            gCurrentObject.bhvDelayTimer = 0
            this.bhvScript.index++
        }

        return this.BHV_PROC_BREAK
    }

    deactivate(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.activeFlags = 0
        return this.BHV_PROC_BREAK
    }

    add_int(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = s16(gCurrentObject.rawData[args.field] + s16(args.value))
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    add_number(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] += args.value
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_int(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = s16(args.value)
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE

    }

    set_objectData_value(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = args.value
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_random_int(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = s32(args.range * random_float()) + args.minimum
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_random_float(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = (args.range * random_float()) + args.minimum
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_interact_type(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[oInteractType] = args.type
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    sum_float(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.dest] = gCurrentObject.rawData[args.value1] + gCurrentObject.rawData[args.value2]
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_home(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[oHomeX] = gCurrentObject.rawData[oPosX]
        gCurrentObject.rawData[oHomeY] = gCurrentObject.rawData[oPosY]
        gCurrentObject.rawData[oHomeZ] = gCurrentObject.rawData[oPosZ]

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_obj_physics(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[oWallHitboxRadius] = args.hitboxRadius
        gCurrentObject.rawData[oGravity] = args.gravity / 100.0
        gCurrentObject.rawData[oBounciness] = args.bounciness / 100.0
        gCurrentObject.rawData[oDragStrength] = args.dragStrenth / 100.0
        gCurrentObject.rawData[oFriction] = args.friction / 100.0
        gCurrentObject.rawData[oBuoyancy] = args.buoyancy / 100.0

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    scale(args) {
        cur_obj_scale(args.percent / 100.0)

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    hide(args) {
        cur_obj_hide()
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    disable_rendering(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.gfx.flags &= ~GRAPH_RENDER_ACTIVE
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    parent_bit_clear(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const value = args.value ^ 0xFFFFFFFF
        obj_and_int(gCurrentObject.parentObj, args.field, value)

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    or_int(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const objectOffset = args.field
        let value = args.value

        value &= 0xFFFF
        gCurrentObject.rawData[objectOffset] |= value

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    load_collision_data(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.collisionData = args.data

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    load_animations(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.rawData[args.field] = args.anims
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    animate(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const animIndex = args.animIndex
        const animations = gCurrentObject.rawData[oAnimations]

        geo_obj_init_animation(gCurrentObject.gfx, animations[animIndex])

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    cylboard(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.gfx.flags |= GRAPH_RENDER_CYLBOARD
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    billboard(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.gfx.flags |= GRAPH_RENDER_BILLBOARD
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    drop_to_floor(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        const x = gCurrentObject.rawData[oPosX]
        const y = gCurrentObject.rawData[oPosY]
        const z = gCurrentObject.rawData[oPosZ]

        const floorHeight = gLinker.SurfaceCollision.find_floor_height(x, y + 200.0, z)

        gCurrentObject.rawData[oPosY] = floorHeight
        gCurrentObject.rawData[oMoveFlags] |= OBJ_MOVE_ON_GROUND

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE

    }

    set_hitbox(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.hitboxRadius = args.radius
        gCurrentObject.hitboxHeight = args.height
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_hitbox_with_offset(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.hitboxRadius = args.radius
        gCurrentObject.hitboxHeight = args.height
        gCurrentObject.hitboxDownOffset = args.downOffset
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

// Command 0x1B: Sets the current model ID of the object.
// Usage: SET_MODEL(modelID)
    set_model(args) {
        cur_obj_set_model(args.model)
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    // Command 0x2C: Spawns a new object with the specified model and behavior.
    // Usage: SPAWN_OBJ(modelID, behavior)
    spawn_obj(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        let behavior = args.behavior
        if (typeof behavior == "function") {
            behavior = behavior()
        } else if (typeof behavior == "string") {
            behavior = gLinker.behaviors[behavior]
            if (!behavior) {
                throw "unlinked spawn_obj behavior: " + args.behavior
            }
        }
        const object = spawn_object_at_origin(gCurrentObject, args.model, behavior)
        obj_copy_pos_and_angle(object, gCurrentObject)
        gCurrentObject.prevObj = object

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    // Command 0x29: Spawns a child object with the specified model and behavior, plus a behavior param.
    // Usage: SPAWN_CHILD_WITH_PARAM(bhvParam, modelID, behavior)
    spawn_child_with_param(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        let behavior = args.behavior
        if (typeof behavior == "function") {
            behavior = behavior()
        } else if (typeof behavior == "string") {
            behavior = gLinker.behaviors[behavior]
            if (!behavior) {
                throw "unlinked spawn_child behavior: " + args.behavior
            }
        }
        const child = spawn_object_at_origin(gCurrentObject, args.model, behavior)
        obj_copy_pos_and_angle(child, gCurrentObject)
        child.rawData[oBehParams2ndByte] = args.bhvParam

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    call(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.index++
        gCurrentObject.bhvStack.push(this.bhvScript.index)
        gCurrentObject.bhvStack.push(this.bhvScript.commands) // push the whole script
        const calledScript = args.script
        this.bhvScript = { index: 0, commands: calledScript }

        return this.BHV_PROC_CONTINUE
    }

    return(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.commands = gCurrentObject.bhvStack.pop()
        this.bhvScript.index = gCurrentObject.bhvStack.pop()
        return this.BHV_PROC_CONTINUE
    }

    begin_repeat(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.index++
        gCurrentObject.bhvStack.push(this.bhvScript.index)
        gCurrentObject.bhvStack.push(args.count)
        return this.BHV_PROC_CONTINUE
    }

    end_repeat(args) {
        return this.end_repeat_break_or_continue(this.BHV_PROC_BREAK)
    }

    end_repeat_continue(args) {
        return this.end_repeat_break_or_continue(this.BHV_PROC_CONTINUE)
    }

    // helper
    end_repeat_break_or_continue(which) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.index++
        let count = gCurrentObject.bhvStack.pop()
        count--

        if (count != 0) {
            this.bhvScript.index = gCurrentObject.bhvStack.pop()
            gCurrentObject.bhvStack.push(this.bhvScript.index)
            gCurrentObject.bhvStack.push(count)
        } else {
            gCurrentObject.bhvStack.pop()
        }

        return which
    }

    begin_loop(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.index++
        gCurrentObject.bhvStack.push(this.bhvScript.index)
        return this.BHV_PROC_CONTINUE
    }

    break(args) {
        return this.BHV_PROC_BREAK
    }

    end_loop(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        this.bhvScript.index = gCurrentObject.bhvStack[gCurrentObject.bhvStack.length - 1]
        return this.BHV_PROC_BREAK
    }

    begin(args) {
        const gCurrentObject = gLinker.ObjectListProcessor.gCurrentObject
        gCurrentObject.bhvStack = []

    // These objects were likely very early objects, which is why this code is here
    // instead of in the respective behavior scripts.

    // Initiate the room if the object is a haunted chair or the mad piano.
    // if (cur_obj_has_behavior(bhvHauntedChair)) {
    //     bhv_init_room();
    // }
    // if (cur_obj_has_behavior(bhvMadPiano)) {
    //     bhv_init_room();
    // }

        // Set collision distance if the object is a message panel.
        // if (cur_obj_has_behavior(bhvMessagePanel)) {
        //     gCurrentObject.oCollisionDistance = 150.0
        // }

        this.bhvScript.name = args.name  // optional
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    goto(args) {
        let script
        if (typeof args.script == "function") {
            script = args.script()
        } else {
            script = gLinker.behaviors[args.script]
            if (!script) {
                throw "unlinked goto script: " + args.script
            }
        }

        this.bhvScript.commands = script
        this.bhvScript.index = args.index
        return this.BHV_PROC_CONTINUE
    }

    debugger(args) {
        debugger        
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

}

export const BehaviorCommandsInstance = new BehaviorCommands()
gLinker.BehaviorCommands = BehaviorCommandsInstance

// EXPERIMENTAL
const Beh = BehaviorCommandsInstance;
export const ADD_INT = (...args)                   => {return {command: Beh.add_int, args: {field: args[0], value: args[1]}}}
export const ADD_FLOAT = (...args)                 => {return {command: Beh.add_number, args: {field: args[0], value: args[1]}}}
export const ANIMATE = (...args)                   => {return {command: Beh.animate, args: {animIndex: args[0]}}}
export const BEGIN = (...args)                     => {return {command: Beh.begin, args: {objListIndex: args[0], name: args[1]}}}
export const BEGIN_LOOP = (...args)                => {return {command: Beh.begin_loop}}
export const BEGIN_REPEAT = (...args)              => {return {command: Beh.begin_repeat, args: {count: args[0]}}}
export const BILLBOARD = (...args)                 => {return {command: Beh.billboard}}
export const BREAK = (...args)                     => {return {command: Beh.break}}
export const CALL = (...args)                      => {return {command: Beh.call, args: {script: args[0]}}}
export const CALL_NATIVE = (...args)               => {return {command: Beh.call_native, args: {func: args[0], funcClass: args[1]}}}
export const DEACTIVATE = (...args)                => {return {command: Beh.deactivate}}
export const DEBUGGER = (...args)                  => {return {command: Beh.debugger}}
export const DELAY = (...args)                     => {return {command: Beh.delay, args: {num: args[0]}}}
export const DELAY_VAR = (...args)                 => {return {command: Beh.delay_var, args: {var: args[0]}}}
export const DISABLE_RENDERING = (...args)         => {return {command: Beh.disable_rendering}}
export const DROP_TO_FLOOR = (...args)             => {return {command: Beh.drop_to_floor}}
export const END_LOOP = (...args)                  => {return {command: Beh.end_loop}}
export const END_REPEAT = (...args)                => {return {command: Beh.end_repeat}}
export const END_REPEAT_CONTINUE = (...args)       => {return {command: Beh.end_repeat_continue}}
export const GOTO = (...args)                      => {return {command: Beh.goto, args: {script: args[0], index: args[1]}}}
export const HIDE = (...args)                      => {return {command: Beh.hide}}
export const LOAD_ANIMATIONS = (...args)           => {return {command: Beh.load_animations, args: {field: args[0], anims: args[1]}}}
export const LOAD_COLLISION_DATA = (...args)       => {return {command: Beh.load_collision_data, args: {data: args[0]}}}
export const OR_INT = (...args)                    => {return {command: Beh.or_int, args: {field: args[0], value: args[1]}}}
export const PARENT_BIT_CLEAR = (...args)          => {return {command: Beh.parent_bit_clear, args: {field: args[0], value: args[1]}}}
export const RETURN = (...args)                    => {return {command: Beh.return}}
export const SCALE = (...args)                     => {return {command: Beh.scale, args: {percent: args[1]}}}
export const SET_FLOAT = (...args)                 => {return {command: Beh.set_objectData_value, args: {field: args[0], value: args[1]}}}
export const SET_HITBOX = (...args)                => {return {command: Beh.set_hitbox, args: {radius: args[0], height: args[1]}}}
export const SET_HITBOX_WITH_OFFSET = (...args)    => {return {command: Beh.set_hitbox_with_offset, args: {radius: args[0], height: args[1], downOffset: args[2]}}}
export const SET_HOME = (...args)                  => {return {command: Beh.set_home}}
export const SET_INT = (...args)                   => {return {command: Beh.set_int, args: {field: args[0], value: args[1]}}}
export const SET_INTERACT_TYPE = (...args)         => {return {command: Beh.set_interact_type, args: {type: args[0]}}}
export const SET_MODEL = (...args)                 => {return {command: Beh.set_model, args: {model: args[0]}}}
export const SET_OBJ_PHYSICS = (...args)           => {return {command: Beh.set_obj_physics, args: {hitboxRadius: args[0], gravity: args[1], bounciness: args[2], dragStrenth: args[3], friction: args[4], buoyancy: args[5]}}}
export const SET_RANDOM_INT = (...args)            => {return {command: Beh.set_random_int, args: {field: args[0], minimum: args[1], range: args[2]}}}
export const SET_RANDOM_FLOAT = (...args)          => {return {command: Beh.set_random_float, args: {field: args[0], minimum: args[1], range: args[2]}}}
export const SUM_FLOAT = (...args)                 => {return {command: Beh.sum_float, args: {dest: args[0], value1: args[1], value2: args[2]}}}
export const SPAWN_CHILD = (...args)               => {return {command: Beh.spawn_child_with_param, args: {model: args[0], behavior: args[1], bhvParam: args[2]}}}
export const SPAWN_OBJ = (...args)                 => {return {command: Beh.spawn_obj, args: {model: args[0], behavior: args[1]}}}
export const SPAWN_WATER_DROPLET = (...args)       => {return {command: Beh.cmd_spawn_water_droplet, args: {params: args[0]}}}
