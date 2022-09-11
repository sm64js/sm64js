import { ObjectsInstance as Objects } from "./Objects"
import { JointsInstance as Joints } from "./Joints"
import { NetsInstance as Nets } from "./Nets"
import { DynlistProcInstance as Dynlist } from "./DynlistProc"
import { dynlist_mario_master } from "./dynlists/dynlist_mario_master"
import { dynlist_unused } from "./dynlists/dynlist_unused"
import { DrawInstance as Draw } from "./Draw"
import * as Particles from "./Particles"
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

    animate_mario_head_gameover(self) {
        switch (self.unk4C) {
            case 0:
                self.unk28 = 1
                self.unk20 = 1
                self.unk4C = 1
                break
            case 1:
                self.unk28 += 1
                if (self.unk28 == 166) {
                    self.unk28 = 69
                    self.unk4C = 4
                    self.fn48 = this.animate_mario_head_normal
                    self.unk20 = 0
                }
                break
        }
    }

    animate_mario_head_normal(self) {

        const aBtnPressed = false
        let state = 0

        switch (self.unk4C) {
            case 0:
                self.unk28 = 1.0
                self.unk20 = 0
                state = 2
                self.unk50 = 5
                break
            case 2:
                if (aBtnPressed) {
                    state = 5
                }

                self.unk28 += 1.0

                if (self.unk28 == 810.0) {
                    self.unk28 = 750.0
                    self.unk50 -= 1
                    if (self.unk50 == 0) {
                        state = 3
                    }
                }
                break
            case 3:
                self.unk28 += 1.0

                if (self.unk28 == 820.0) {
                    self.unk28 = 69.0
                    state = 4
                }
                break
            case 4:
                self.unk28 += 1.0

                if (self.unk28 == 660.0) {
                    self.unk28 = 661.0
                    state = 2
                    self.unk50 = 5
                }
                break
            case 5:
                if (self.unk28 == 660.0) {
                    state = 7
                } else if (self.unk28 > 660.0) {
                    self.unk28 -= 1.0
                } else if (self.unk28 < 660.0) {
                    self.unk28 += 1.0
                }

                self.unk54 = 150
                break
            case 7:
                if (aBtnPressed) {
                    self.unk54 = 300
                } else {
                    self.unk54--
                    if (self.unk54 == 0) {
                        state = 6
                    }
                }
                self.unk28 = 660.0
                break
            case 6:
                state = 2
                self.unk50 = 5
                break
        }

        if (state != 0) {
            self.unk4C = state
        }
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

        Dynlist.d_copystr_to_idbuf(null)
        let sp24 = Particles.make_particle(0, 1, 0.0, 0.0, 0.0)
        sp24.header.obj = sp24
        Object.assign(sp24, {
            unk60: 3, unk64: 3,
            unkBC: sp2C.header,
            unk1C: this.gShape.silverSparkPtr.target
        })
        Objects.addto_group(Draw.gGdLightGroup, sp24.header)

        sp24 = Particles.make_particle(0, 1, 0.0, 0.0, 0.0)
        sp24.header.obj = sp24
        Object.assign(sp24, {
            unk60: 3, unk64: 2,
            unkBC: Dynlist.d_use_obj("N228l").header,
            unk1C: this.gShape.silverSparkPtr.target
        })
        Objects.addto_group(Draw.gGdLightGroup, sp24.header)

        sp24 = Particles.make_particle(0, 2, 0.0, 0.0, 0.0)
        sp24.header.obj = sp24
        Object.assign(sp24, {
            unk60: 3, unk64: 2,
            unkBC: Dynlist.d_use_obj("N231l").header,
            unk1C: this.gShape.redSparkPtr.target
        })
        Objects.addto_group(Draw.gGdLightGroup, sp24.header)

        let sp3C = Dynlist.d_use_obj("N1000l")
        Draw.create_gddl_for_shapes(sp3C)
        const sp38 = Objects.gGdObjectList

        let sp30, sp34

        sp30 = Joints.make_joint_withshape(null, 0, -500.0, 0.0, -150.0)
        sp34 = Dynlist.d_use_obj("N167l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30 = Joints.make_joint_withshape(null, 0, 500.0, 0.0, -150.0)
        sp34 = Dynlist.d_use_obj("N176l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30 = Joints.make_joint_withshape(null, 0, 0.0, 700.0, 300.0)
        sp34 = Dynlist.d_use_obj("N131l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp34 = Dynlist.d_use_obj("N206l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp34 = Dynlist.d_use_obj("N215l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp34 = Dynlist.d_use_obj("N31l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp34 = Dynlist.d_use_obj("N65l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp30 = Joints.make_joint_withshape(null, 0, 0.0, 0.0, 600.0)
        sp34 = Dynlist.d_use_obj("N185l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30 = Joints.make_joint_withshape(null, 0, 0.0, -300.0, 300.0)
        sp34 = Dynlist.d_use_obj("N194l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30 = Joints.make_joint_withshape(null, 0, 250.0, -150.0, 300.0)
        sp34 = Dynlist.d_use_obj("N158l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp34 = Dynlist.d_use_obj("N15l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp30 = Joints.make_joint_withshape(null, 0, -250.0, -150.0, 300.0)
        sp34 = Dynlist.d_use_obj("N149l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp34 = Dynlist.d_use_obj("N6l")
        Objects.addto_group(sp30.unk1F8, sp34.header)

        sp30 = Joints.make_joint_withshape(null, 0, 100.0, 200.0, 400.0)
        sp34 = Dynlist.d_use_obj("N112l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30.fn2C = Joints.Proc8018E520
        sp30.unk1D0 = sp28
        sp30.header.drawFlags &= ~GDTypes.OBJ_IS_GRABBALE

        sp30 = Joints.make_joint_withshape(null, 0, -100.0, 200.0, 400.0)
        sp34 = Dynlist.d_use_obj("N96l")
        sp30.unk1F8 = Objects.make_group(1, [sp34])
        sp30.unk1F8.header.obj = sp30.unk1F8

        sp30.fn2C = Joints.Proc8018E520
        sp30.unk1D0 = sp28
        sp30.header.drawFlags &= ~GDTypes.OBJ_IS_GRABBALE

        let sp48 = Objects.make_group_of_type(GDTypes.OBJ_TYPE_JOINTS, sp38, null)
        let sp54 = Nets.make_net(0, null, sp48, null, null)
        sp54.header.obj = sp54
        sp54.netType = 3
        Objects.addto_group(this.gMarioFaceGrp, sp48.header)
        Objects.addto_groupfirst(this.gMarioFaceGrp, sp54.header)

        return false
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
        if (obj.header.type == GDTypes.OBJ_TYPE_GROUPS) return

        Dynlist.set_cur_dynobj(obj)
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
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_ALL, this.scale_obj_position, shape.vtxGroup, this)
        }
    }

    load_shapes2() {
        this.func_80197280()
        //this.sCubeShape = this.make_shape(0, "cube")
        this.D_801A82E4 = Dynlist.proc_dynlist(dynlist_unused)
        this.scale_verts_in_shape(this.D_801A82E4, 200.0, 200.0, 200.0)

        //const D_801A82E8 = Dynlist.proc_dynlist(dynlist_test_cube)
        //more here todo
    }
}

export const ShapeHelperInstance = new ShapeHelper()