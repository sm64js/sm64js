import { ObjectListProcessorInstance as ObjListProc } from "../game/ObjectListProcessor"

class BehaviorCommands {

    constructor() {
        this.BHV_PROC_CONTINUE = 0
        this.BHV_PROC_BREAK    = 1
    }

    cur_obj_update() {
        this.bhvScript = ObjListProc.gCurrentObject.bhvScript

        let bhvProcResult = this.BHV_PROC_CONTINUE

        while (bhvProcResult == this.BHV_PROC_CONTINUE) {
            const bhvFunc = this.bhvScript.commands[this.bhvScript.index]
            bhvProcResult = bhvFunc.command.call(this, bhvFunc.args)
        }
    }

    call_native(args) {
        if (args.func != ObjListProc.bhv_mario_update) return //throw "check this - only support one function so far"
        args.func.call(ObjListProc)
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