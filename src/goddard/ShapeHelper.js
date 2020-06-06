import { ObjectsInstance as Objects } from "./Objects"
import { DynlistProcInstance as Dynlist } from "./DynlistProc"
import { dynlist_mario_master } from "./dynlists/dynlist_mario_master"
import { dynlist_unused } from "./dynlists/dynlist_unused"
import { DrawInstance as Draw } from "./Draw"
import * as GDMath from "./gd_math"
import * as GDTypes from "./gd_types"
import { ShapeHelperGlobalsInstance as ShapesGlobals } from "./ShapeHelperGlobals"

class ShapeHelper {
    constructor() {
        this.gShape = ShapesGlobals.gShape
    }

    func_80197280() {
        this.sGdShapeCount = 0
        this.sGdShapeListHead = null
        Draw.gGdLightGroup = Objects.make_group(0)
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

        const sp2C = Dynlist.d_makeobj(Dynlist.D_CAMERA, null)
        Dynlist.d_set_rel_pos({ x: 0.0, y: 200.0, z: 2000.0 })
        Dynlist.d_set_world_pos({ x: 0.0, y: 200.0, z: 2000.0 })
        Dynlist.d_set_flags(4)
        sp2C.unk34 = { x: 0.0, y: 200.0, z: 0.0 }

        Objects.addto_group(this.gMarioFaceGrp, sp2C.header)
        Objects.addto_group(this.gMarioFaceGrp, sp28.header)


        throw "not finished in load mario head - shape helper"

    }

    add_3_vtx_to_face(face, vtx1, vtx2, vtx3) {
        face.vertices[0] = vtx1
        face.vertices[1] = vtx2
        face.vertices[2] = vtx3

        face.vtxCount = 3
        this.calc_face_normal(face)
    }

    calc_face_normal(face) {
        const sp18 = 1000.0

        if (face.vtxCount > 2) {
            const sp28 = face.vertices[0], sp24 = face.vertices[1], sp20 = face.vertices[2]
            const sp50 = { x: sp28.pos.x, y: sp28.pos.y, z: sp28.pos.z } 
            const sp44 = { x: sp24.pos.x, y: sp24.pos.y, z: sp24.pos.z } 
            const sp38 = { x: sp20.pos.x, y: sp20.pos.y, z: sp20.pos.z } 

            const sp2c = {
                x: (((sp44.y - sp50.y) * (sp38.z - sp44.z)) - ((sp44.z - sp50.z) * (sp38.y - sp44.y))) * sp18,
                y: (((sp44.z - sp50.z) * (sp38.x - sp44.x)) - ((sp44.x - sp50.x) * (sp38.z - sp44.z))) * sp18,
                z: (((sp44.x - sp50.x) * (sp38.y - sp44.y)) - ((sp44.y - sp50.y) * (sp38.x - sp44.x))) * sp18
            }

            GDMath.gd_normalize_vec3f(sp2c)
            face.normal = sp2c
        }
    }

    make_vertex(x, y, z) {
        return {
            header: Objects.make_object(GDTypes.OBJ_TYPE_VERTICES),
            id: 0xD1D4,
            pos: { x, y, z },
            initPos: { x, y, z },
            scaleFactor: 1.0,
            alpha: 1.0,
            normal: { x: 0.0, y: 1.0, z: 0.0 }
        }
    }

    make_shape(flag, name) {

        const newShape = { header: Objects.make_object(GDTypes.OBJ_TYPE_SHAPES) }

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

    scale_obj_position(obj) {
        if (obj.type == GDTypes.OBJ_TYPE_GROUPS) return

        Dynlist.set_cur_dynobj(obj.obj)
        let pos = {}
        Dynlist.d_get_rel_pos(pos)

        pos.x *= this.sVertexScaleFactor.x
        pos.y *= this.sVertexScaleFactor.y
        pos.z *= this.sVertexScaleFactor.z

        Dynlist.d_set_rel_pos({ x: pos.x, y: pos.y, z: pos.z })
        Dynlist.d_set_init_pos({ x: pos.x, y: pos.y, z: pos.z })

    }

    scale_verts_in_shape(shape, x, y, z) {
        this.sVertexScaleFactor = { x, y, z }

        if (shape.vtxGroup) {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_ALL, this.scale_obj_position, shape.vtxGroup)
        }
    }

    load_shapes2() {
        this.func_80197280()
        //this.sCubeShape = this.make_shape(0, "cube")
        const D_801A82E4 = Dynlist.proc_dynlist(dynlist_unused)
        this.scale_verts_in_shape(D_801A82E4, 200.0, 200.0, 200.0)

        //const D_801A82E8 = Dynlist.proc_dynlist(dynlist_test_cube)
        //more here todo
    }
}

export const ShapeHelperInstance = new ShapeHelper()