import { OBJ_TYPE_JOINTS, OBJ_TYPE_WEIGHTS } from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { NetsInstance as Nets } from "./Nets"
import { gd_set_identity_mat4, gd_scale_mat4f_by_vec3f, gd_rot_mat_about_vec, gd_add_vec3f_to_mat4f_offset, gd_copy_mat4f, gd_mat4f_mult_vec3f, gd_rotate_and_translate_vec3f } from "./gd_math"
import * as GDTypes from "./gd_types"

class Joints {
    constructor() {
        this.sJointCount = 0
        this.sJointNotF1Count = 0
        this.gGdJointList = null
    }

    set_joint_vecs(j, x, y, z) {

        j.unk14 = { x, y, z }
        j.unk30 = { x, y, z }
        j.unk3C = { x, y, z }
        j.unk54 = { x, y, z }

        j.mat128[3][0] = x
        j.mat128[3][1] = y
        j.mat128[3][2] = z
    }

    Unknown801913C0(joint) { /// is also func_80181894

        const weightGroup = joint.unk1F4
        if (weightGroup) {
            for (let link = weightGroup.link1C; link != null; link = link.next) {
                const curWeight = link.obj

                if (curWeight.animInfo > 0.0) {

                    const stackVec = { ...curWeight.vec20 }

                    gd_rotate_and_translate_vec3f(stackVec, joint.matE8)

                    const connectedVtx = curWeight.unk3C
                    const scaleFactor = curWeight.animInfo

                    connectedVtx.pos.x += stackVec.x * scaleFactor
                    connectedVtx.pos.y += stackVec.y * scaleFactor
                    connectedVtx.pos.z += stackVec.z * scaleFactor

                }
            }
        }
    }

    Unknown80191220(j) {

        j.unk48 = { ...j.unk54 }

        gd_mat4f_mult_vec3f(j.unk48, Nets.gGdSkinNet.mat128)
        j.unk3C = { ...j.unk48 }
        j.unk14 = { ...Nets.gGdSkinNet.unk14 }

        j.unk14.x += j.unk3C.x
        j.unk14.y += j.unk3C.y
        j.unk14.z += j.unk3C.z

        j.unk1A8 = { x: 0.0, y: 0.0, z: 0.0 }
        Objects.gGdCounter.ctr0++
    }

    func_80191604(j) {

        j.unk14 = { ...j.unk54 }
        j.unk30 = { ...j.unk54 }
        j.unk3C = { ...j.unk54 }

        j.unk78 = { x: 0.0, y: 0.0, z: 0.0 }
        j.unk84 = { x: 0.0, y: 0.0, z: 0.0 }
        j.unk90 = { x: 0.0, y: 0.0, z: 0.0 }
        j.unk1A8 = { x: 0.0, y: 0.0, z: 0.0 }

        gd_set_identity_mat4(j.mat168)
        gd_scale_mat4f_by_vec3f(j.mat168, j.unk9C)
        gd_rot_mat_about_vec(j.mat168, j.unk6C)

        gd_add_vec3f_to_mat4f_offset(j.mat168, j.unk200)
        gd_copy_mat4f(j.mat168, j.matE8)

        gd_set_identity_mat4(j.mat128)
        gd_add_vec3f_to_mat4f_offset(j.mat128, j.unk54)
    }

    set_skin_weight(j, id, vtx, weight) {
        if (j.unk1F4 == null) {
            j.unk1F4 = Objects.make_group(0)
            j.unk1F4.header.obj = j.unk1F4  /// link the object to the header
        }

        const w = Objects.make_weight(0, id, vtx, weight)
        w.header.obj = w
        Objects.addto_group(j.unk1F4, w.header)
        return true
    }

    Proc8018E520(self) {
        throw "Joints - Proc8018E520"
    }

    make_joint_withshape(shape, flags, x, y, z) {
        const j = this.make_joint(0, x, y, z)
        Object.assign(j, {
            unk20: shape,
            unk1CC: 5,
            unk1BC: j.unk1BC | flags,
            unk1C8: 9,
            unk1D0: null,
            fn2C: this.Proc8018E520
        })

        j.header.drawFlags = j.header.drawFlags | GDTypes.OBJ_IS_GRABBALE | GDTypes.OBJ_NOT_DRAWABLE
        j.header.obj = j

        return j
    }

    make_joint(flags, x, y, z) {


        this.sJointCount++

        const j = {
            header: Objects.make_object(OBJ_TYPE_JOINTS),
            id: this.sJointCount,
            unk1CC: 0,
            unk1BC: flags,
            unk9C: { x: 1.0, y: 1.0, z: 1.0 },
            unkDC: { x: 0.0, y: 0.0, z: 0.0 },
            unk6C: { x: 0.0, y: 0.0, z: 0.0 },
            unk200: { x: 0.0, y: 0.0, z: 0.0 },
            matE8: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            mat128: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            mat168: new Array(4).fill(0).map(() => new Array(4).fill(0))
        }

        let oldhead = this.gGdJointList
        this.gGdJointList = j

        if (oldhead) {
            j.nextjoint = oldhead
            oldhead.prevjoint = j
        }

        gd_set_identity_mat4(j.matE8)
        gd_set_identity_mat4(j.mat128)
        this.set_joint_vecs(j, x, y, z)

        if (!(j.flags & 0x1)) this.sJointNotF1Count++

        if (j.flags & 0x1) j.unk1C8 = 2
        else j.unk1C8 = 9

        return j
    }
}

export const JointsInstance = new Joints()