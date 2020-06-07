import { OBJ_TYPE_NETS, OBJ_TYPE_JOINTS } from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { gd_set_identity_mat4 } from "./gd_math"
import { JointsInstance as Joints } from "./Joints"


class Nets {
    constructor() {
        this.sNetCount = 0
    }

    make_net(a0, shapedata, a2, a3, a4) {

        const net = {
            header: Objects.make_object(OBJ_TYPE_NETS),
            unk20: { x: 0.0, y: 0.0, z: 0.0 },
            unk38: ++this.sNetCount,
            unk1AC: { x: 1.0, y: 1.0, z: 1.0 },
            unk1A8: shapedata,
            unk1C8: a2,
            unk1CC: a3,
            unk1D0: a4,
            netType: 0,
            unk210: 0,
            unk3C: 1,
            unk40: 0,
            mat128: new Array(4).fill(0).map(() => new Array(4).fill(0))
        }

        gd_set_identity_mat4(net.mat128)

        this.reset_net(net)

        return net
    }

    reset_net(net) {
        net.unk14 = { ...net.unk20 }
        net.unk50 = { x: 0.0, y: 0.0, z: 0.0 }
        net.unkA4 = { x: 0.0, y: 0.0, z: 0.0 }
        net.unk68 = { x: 0.0, y: 0.0, z: 0.0 }

        //this.func_80191F10(net) TODO
        this.gGdSkinNet = net
        this.D_801BAAF4 = 0

        net.mat168 = new Array(4).fill(0).map(() => new Array(4).fill(0))
        net.matE8 = new Array(4).fill(0).map(() => new Array(4).fill(0))
        gd_set_identity_mat4(net.mat168)
        gd_set_identity_mat4(net.matE8)
        //gd_rot_mat_about_vec(net.matE8, net.unk68) TODO FIX EYES
        //gd_add_vec3f_to_mat4f_offset(net.matE8, net.unk14)
        //gd_copy_mat4f(net.matE8, net.mat128)

        const grp = net.unk1C8

        if (grp) {
            //Objects.apply_to_obj_types_in_group(OBJ_TYPE_JOINTS, Joints.func_80191604, grp, Joints)
            throw "more implementation needed in reset net"
        }


    }
}

export const NetsInstance = new Nets()
