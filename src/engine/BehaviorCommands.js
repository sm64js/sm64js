import { ObjectListProcessorInstance as ObjListProc } from "../game/ObjectListProcessor"
import { oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, oPosX, oPosY, oPosZ, oGraphYOffset, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll, oTimer, oPrevAction, oAction, oSubAction, oAnimations, oInteractType, oHomeX, oHomeY, oHomeZ, OBJ_FLAG_COMPUTE_DIST_TO_MARIO, oDistanceToMario, OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO, oAngleToMario, oMoveAngleYaw, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, oMoveFlags, OBJ_MOVE_ON_GROUND, oWallHitboxRadius, oGravity, oBounciness, oDragStrength, oFriction, oBuoyancy } from "../include/object_constants"
import { GRAPH_RENDER_CYLBOARD, geo_obj_init_animation, GRAPH_RENDER_BILLBOARD } from "./graph_node"
import { dist_between_objects, obj_angle_to_object } from "../game/ObjectHelpers"

class BehaviorCommands {

    constructor() {
        this.BHV_PROC_CONTINUE = 0
        this.BHV_PROC_BREAK    = 1
    }

    random_sign() {
        return Math.random() > 0.5 ? 1 : -1
    }

    cur_obj_update() {

        let objFlags = ObjListProc.gCurrentObject.rawData[oFlags]

        let distanceFromMario = 0.0

        if (objFlags & OBJ_FLAG_COMPUTE_DIST_TO_MARIO) {
            ObjListProc.gCurrentObject.rawData[oDistanceToMario] = dist_between_objects(ObjListProc.gCurrentObject, ObjListProc.gMarioObject)
            distanceFromMario = ObjListProc.gCurrentObject.rawData[oDistanceToMario]
        }

        if (objFlags & OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO) {
            ObjListProc.gCurrentObject.rawData[oAngleToMario] = obj_angle_to_object(ObjListProc.gCurrentObject, ObjListProc.gMarioObject)
        }

        this.bhvScript = ObjListProc.gCurrentObject.bhvScript

        let bhvProcResult = this.BHV_PROC_CONTINUE

        while (bhvProcResult == this.BHV_PROC_CONTINUE) {
            const bhvFunc = this.bhvScript.commands[this.bhvScript.index]
            bhvProcResult = bhvFunc.command.call(this, bhvFunc.args)
        }

        if (ObjListProc.gCurrentObject.rawData[oTimer] < 0x3FFFFFFF) {
            ObjListProc.gCurrentObject.rawData[oTimer]++
        }

        if (ObjListProc.gCurrentObject.rawData[oAction] != ObjListProc.gCurrentObject.rawData[oPrevAction]) {
            ObjListProc.gCurrentObject.rawData[oTimer] = 0
            ObjListProc.gCurrentObject.rawData[oSubAction] = 0
            ObjListProc.gCurrentObject.rawData[oPrevAction] = ObjListProc.gCurrentObject.rawData[oAction]
        }

        objFlags = ObjListProc.gCurrentObject.rawData[oFlags]

        if (objFlags & OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW) {
            ObjListProc.gCurrentObject.rawData[oFaceAngleYaw] = ObjListProc.gCurrentObject.rawData[oMoveAngleYaw]
        }

        if (objFlags & OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE) {
            this.obj_update_gfx_pos_and_angle(ObjListProc.gCurrentObject)
        }
    }

    obj_update_gfx_pos_and_angle(obj) {

        obj.header.gfx.pos[0] = obj.rawData[oPosX]
        obj.header.gfx.pos[1] = obj.rawData[oPosY] + obj.rawData[oGraphYOffset]
        obj.header.gfx.pos[2] = obj.rawData[oPosZ]

        obj.header.gfx.angle[0] = obj.rawData[oFaceAnglePitch] & 0xFFFF
        obj.header.gfx.angle[1] = obj.rawData[oFaceAngleYaw] & 0xFFFF
        obj.header.gfx.angle[2] = obj.rawData[oFaceAngleRoll] & 0xFFFF

    }

    call_native(args) {
        args.func.call(args.funcClass)
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    delay(args) {
        const num = args.num

        if (ObjListProc.gCurrentObject.bhvDelayTimer < num - 1) {
            ObjListProc.gCurrentObject.bhvDelayTimer++
        } else {
            ObjListProc.gCurrentObject.bhvDelayTimer = 0
            this.bhvScript.index++
        }

        return this.BHV_PROC_BREAK
    }

    deactivate(args) {
        ObjListProc.gCurrentObject.activeFlags = 0
        return this.BHV_PROC_BREAK
    }

    add_int(args) {
        ObjListProc.gCurrentObject.rawData[args.field] += args.value
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_int(args) {
        ObjListProc.gCurrentObject.rawData[args.field] = args.value
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_interact_type(args) {
        ObjListProc.gCurrentObject.rawData[oInteractType] = args.type
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_home(args) {
        ObjListProc.gCurrentObject.rawData[oHomeX] = ObjListProc.gCurrentObject.rawData[oPosX]
        ObjListProc.gCurrentObject.rawData[oHomeY] = ObjListProc.gCurrentObject.rawData[oPosY]
        ObjListProc.gCurrentObject.rawData[oHomeZ] = ObjListProc.gCurrentObject.rawData[oPosZ]

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_obj_physics(args) {
        ObjListProc.gCurrentObject.rawData[oWallHitboxRadius] = args.hitboxRadius
        ObjListProc.gCurrentObject.rawData[oGravity] = args.gravity / 100.0
        ObjListProc.gCurrentObject.rawData[oBounciness] = args.bounciness / 100.0
        ObjListProc.gCurrentObject.rawData[oDragStrength] = args.dragStrenth / 100.0
        ObjListProc.gCurrentObject.rawData[oFriction] = args.friction / 100.0
        ObjListProc.gCurrentObject.rawData[oBuoyancy] = args.buoyancy / 100.0

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    or_int(args) {
        const objectOffset = args.field
        let value = args.value

        value &= 0xFFFF
        ObjListProc.gCurrentObject.rawData[objectOffset] |= value

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    load_collision_data(args) {

        ObjListProc.gCurrentObject.collisionData = args.data

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    load_animations(args) {
        ObjListProc.gCurrentObject.rawData[args.field] = args.anims
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    animate(args) {
        const animIndex = args.animIndex
        const animations = ObjListProc.gCurrentObject.rawData[oAnimations]

        geo_obj_init_animation(ObjListProc.gCurrentObject.header.gfx, animations[animIndex])

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    cyclboard(args) {
        ObjListProc.gCurrentObject.header.gfx.node.flags |= GRAPH_RENDER_CYLBOARD
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    billboard(args) {
        ObjListProc.gCurrentObject.header.gfx.node.flags |= GRAPH_RENDER_BILLBOARD
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    drop_to_floor(args) {
        const x = ObjListProc.gCurrentObject.rawData[oPosX]
        const y = ObjListProc.gCurrentObject.rawData[oPosY]
        const z = ObjListProc.gCurrentObject.rawData[oPosZ]

        const floorHeight = this.SurfaceCollision.find_floor_height(x, y + 200.0, z)

        ObjListProc.gCurrentObject.rawData[oPosY] = floorHeight
        ObjListProc.gCurrentObject.rawData[oMoveFlags] |= OBJ_MOVE_ON_GROUND

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_hitbox(args) {
        ObjListProc.gCurrentObject.hitboxRadius = args.radius
        ObjListProc.gCurrentObject.hitboxHeight = args.height
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_hitbox_with_offset(args) {
        ObjListProc.gCurrentObject.hitboxRadius = args.radius
        ObjListProc.gCurrentObject.hitboxHeight = args.height
        ObjListProc.gCurrentObject.hitboxDownOffset = args.downOffset
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    begin_loop(args) {
        this.bhvScript.index++
        ObjListProc.gCurrentObject.bhvStack.push(this.bhvScript.index)
        return this.BHV_PROC_CONTINUE
    }

    break(args) {
        return this.BHV_PROC_BREAK
    }

    end_loop(args) {
        this.bhvScript.index = ObjListProc.gCurrentObject.bhvStack[ObjListProc.gCurrentObject.bhvStack.length - 1]
        return this.BHV_PROC_BREAK
    }

    begin(args) {
        ObjListProc.gCurrentObject.bhvStack = []
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }


}

export const BehaviorCommandsInstance = new BehaviorCommands()