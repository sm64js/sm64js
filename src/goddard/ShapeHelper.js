import { ObjectsInstance as Objects } from "./Objects"
import { DynlistProcInstance as Dynlist } from "./DynlistProc"
import { dynlist_mario_master } from "./dynlists/dynlist_mario_master"
import { dynlist_unused } from "./dynlists/dynlist_unused"
import * as GDTypes from "./gd_types"

class ShapeHelper {
    constructor() {

    }

    func_80197280() {
        this.sGdShapeCount = 0
        this.sGdShapeListHead = null
        this.gGdLightGroup = Objects.make_group(0)
    }

    animate_mario_head_normal() {
        throw "mario head animate"
    }

    load_mario_head(aniFn) {
        Dynlist.d_copystr_to_idbuf("l")

        Dynlist.dynid_is_int(true)
        const sp28 = Dynlist.d_makeobj(Dynlist.D_ANIMATOR, 1001)
        sp28.fn48 = aniFn
        Dynlist.dynid_is_int(false)

        this.gMarioFaceGrp = Dynlist.proc_dynlist(dynlist_mario_master)

    }

    make_shape(flag, name) {

        const newShape = Objects.make_object(GDTypes.OBJ_TYPE_SHAPES)

        if (name) {
            newShape.name = name
        } else {
            newShape.name = "NoName"
        }

        this.sGdShapeCount++

        const curShapeHead = this.sGdShapeListHead
        this.sGdShapeListHead = newShape

        if (curShapeHead) {
            newShape.nextShape = curShapeHead
            curShapeHead.prevShape = newShape
        }

        Object.assign(newShape, {
            id: this.sGdShapeCount,
            flag,
            vtxCount: 0,
            faceCount: 0,
            gdDls: [0, 0, 0],
            unk3C: 0,
            unk58: 1.0,
            unk30: 0
        })

        return newShape

    }

    load_shapes2() {
        this.func_80197280()
        this.sCubeShape = this.make_shape(0, "cube")
        this.D_801A82E4 = Dynlist.proc_dynlist(dynlist_unused)
        throw "todo loadShapes2"
    }
}

export const ShapeHelperInstance = new ShapeHelper()