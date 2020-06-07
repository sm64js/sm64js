import { OBJ_TYPE_JOINTS } from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { gd_set_identity_mat4 } from "./gd_math"
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

    set_skin_weight(j, id, vtx, weight) {
        if (j.unk1F4 == null) {
            j.unk1F4 = Objects.make_group(0)
            j.unk1F4.header.obj = j.unk1F4  /// link the object to the header
        }

        const w = Objects.make_weight(0, id, vtx, weight)
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
            matE8: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            mat128: new Array(4).fill(0).map(() => new Array(4).fill(0))
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