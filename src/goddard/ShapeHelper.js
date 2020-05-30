import { ObjectsInstance as Objects } from "./Objects"
import { DynlistProcInstance as Dynlist } from "./DynlistProc"
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
        const sp23 = Dynlist.d_makeobj(Dynlist.D_ANIMATOR, 1001)
        Dynlist.dynid_is_int(false)

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
    }
}

export const ShapeHelperInstance = new ShapeHelper()