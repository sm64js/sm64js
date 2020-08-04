import { ObjectListProcessorInstance as ObjListProc } from "../game/ObjectListProcessor"
import { oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, oPosX, oPosY, oPosZ, oGraphYOffset, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll, oTimer, oPrevAction, oAction, oSubAction } from "../include/object_constants"

class BehaviorCommands {

    constructor() {
        this.BHV_PROC_CONTINUE = 0
        this.BHV_PROC_BREAK    = 1
    }

    cur_obj_update() {

        let objFlags = ObjListProc.gCurrentObject.rawData[oFlags]

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

    or_int(args) {
        const objectOffset = args.offset
        let value = args.value

        value &= 0xFFFF
        ObjListProc.gCurrentObject.rawData[objectOffset] |= value

        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    set_hitbox(args) {
        ObjListProc.gCurrentObject.hitboxRadius = args.radius
        ObjListProc.gCurrentObject.hitboxHeight = args.height
        this.bhvScript.index++
        return this.BHV_PROC_CONTINUE
    }

    begin_loop(args) {
        this.bhvScript.index++
        ObjListProc.gCurrentObject.bhvStack.push(this.bhvScript.index)
        return this.BHV_PROC_CONTINUE
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