import { OBJ_TYPE_NETS, OBJ_TYPE_JOINTS, OBJ_TYPE_BONES, OBJ_TYPE_WEIGHTS, OBJ_TYPE_VERTICES } from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { gd_set_identity_mat4, gd_rot_mat_about_vec, gd_add_vec3f_to_mat4f_offset, gd_copy_mat4f, gd_rotate_and_translate_vec3f, gd_inverse_mat4f } from "./gd_math"
import { JointsInstance as Joints } from "./Joints"


class Nets {
    constructor() {
        this.sNetCount = 0
        this.D_801B9EA8 = new Array(4).fill(0).map(() => new Array(4).fill(0))
    }

    move_net(net) {
        this.gGdSkinNet = net

        switch (net.netType) {
            case 1: break
            case 7: break
            case 4:
                this.move_bonesnet(net)
                break
            case 2:
                this.move_skin(net)
                break
            case 3: break
            case 5: break
            case 6: break
            default: throw "move net unknown case"
        }
    }

    move_skin(net) {
        if (net.unk1A8) {
            this.func_80181760(net.unk1A8.unk24)
        }
    }

    func_80181760(a0) {
        for (let link = a0.link1C; link != null; link = link.next) {
            const vtx = link.obj
            vtx.pos.x = vtx.initPos.x * vtx.scaleFactor
            vtx.pos.y = vtx.initPos.y * vtx.scaleFactor
            vtx.pos.z = vtx.initPos.z * vtx.scaleFactor
        }
    }

    move_bonesnet(net) {
        gd_set_identity_mat4(Objects.D_801B9DC8)
        if (net.unk1C8) {
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_JOINTS, Joints.Unknown801913C0, net.unk1C8, Joints)
        }
    }

    move_nets(group) {
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.Unknown80192294, group, this)
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.move_net, group, this)
    }

    make_net(a0, shapedata, a2, a3, a4) {

        const net = {
            header: Objects.make_object(OBJ_TYPE_NETS),
            unk20: { x: 0.0, y: 0.0, z: 0.0 },
            animInfo: ++this.sNetCount,
            unk1AC: { x: 1.0, y: 1.0, z: 1.0 },
            unk68: { x: 0.0, y: 0.0, z: 0.0 },
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

    Unknown80192294(net) {
        if (net.unk1E8 == null) {
            Objects.func_8017F054(net.header, null)
        }
    }

    Unknown801819D0(vtx) {
        if (Joints.sTargetWeightID++ == this.sSkinNetCurWeight.id) {
            this.sSkinNetCurWeight.unk3C = vtx
            const localVec = { ...vtx.pos }

            gd_rotate_and_translate_vec3f(localVec, this.D_801B9EA8)
            this.sSkinNetCurWeight.vec20 = { ...localVec }

            vtx.scaleFactor -= this.sSkinNetCurWeight.animInfo
        }
    }

    convert_gd_verts_to_Vtx(grp) {
        for (let link = grp.link1C; link != null; link = link.next) {
            const vtxPos = link.obj.pos
            for (let vtxlink = link.obj.gbiVerts; vtxlink != null; vtxlink = vtxlink.prev) {
                vtxlink.data.pos[0] = vtxPos.x
                vtxlink.data.pos[1] = vtxPos.y
                vtxlink.data.pos[2] = vtxPos.z
            }

        }
    }

    convert_net_verts(net) {
        if (net.netType == 2) {
            if (net.unk1A8) {
                this.convert_gd_verts_to_Vtx(net.unk1A8.unk24)
            }
        }
    }

    reset_weight(weight) {
        this.sSkinNetCurWeight = weight
        Joints.sTargetWeightID = 0
        const skinGroup = this.gGdSkinNet.skinGrp
        if (skinGroup) {
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_VERTICES, this.Unknown801819D0, skinGroup, this)
        } else {
            throw "shouldn't be here skin net has no skingroup"
        }

        if (weight.unk3C == null) {
            throw "shouldn't be here skin vertex id not found"
        }
    }

    Unknown80181B88(joint) {
        gd_inverse_mat4f(joint.matE8, this.D_801B9EA8) 
        const group = joint.unk1F4
        if (group) {
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_WEIGHTS, this.reset_weight, group, this)
        }
    }

    Unknown801922FC(net) {

        this.gGdSkinNet = net

        if (net.netType == 4) {
            if (net.unk1A8) {
                throw "more implementation needed in Nets - Unknown801922FC"
            }
            const group = net.unk1C8
            if (group) {
                Objects.apply_to_obj_types_in_group(OBJ_TYPE_JOINTS, this.Unknown80181B88, group, this)
            }
        }
    }

    Unknown8019373C(net) {
        if (net.netType == 2) {
            if (net.unk1A8) {
                net.unk1A8.unk24 = Objects.make_group(0)
                net.unk1A8.unk24.header.obj = net.unk1A8.unk24
                for (let link = net.unk1A8.vtxGroup.link1C; link != null; link = link.next) {
                    const vtx = link.obj
                    if (vtx.scaleFactor != 1.0) {
                        Objects.addto_group(net.unk1A8.unk24, vtx.header)
                    }
                }
            }
        }
    }

    myEval(net) {
        console.log(`header next type: ${net.header.next.type}, mat168[3][0]: ${net.mat168[2][1]}, mat168[3][1]: ${net.mat168[2][2]}, mat168[3][2]: ${net.mat168[2][3]}, netType: ${net.netType}, `)
        //console.log(net.matE8)
        if (isNaN(net.matE8[1][1])) throw "no no in eval"
/*        if (net.unk1D4) {
            console.log("attached group with more nets!")
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS | OBJ_TYPE_JOINTS, this.myEval, net.unk1D4, this)
            console.log("attached group with more nets end!")

        }*/
    }

    func_80193848(group) {
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.reset_net, group, this)
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.Unknown80192294, group, this)
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.Unknown801922FC, group, this)
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.Unknown8019373C, group, this)
        //Objects.apply_to_obj_types_in_group(OBJ_TYPE_NETS, this.myEval, group, this)
    }

    reset_net(net) {

        net.unk14 = { ...net.unk20 }
        net.unk50 = { x: 0.0, y: 0.0, z: 0.0 }
        net.unkA4 = { x: 0.0, y: 0.0, z: 0.0 }

        this.gGdSkinNet = net
        this.D_801BAAF4 = 0

        net.mat168 = new Array(4).fill(0).map(() => new Array(4).fill(0))
        net.matE8 = new Array(4).fill(0).map(() => new Array(4).fill(0))
        gd_set_identity_mat4(net.mat168)
        gd_set_identity_mat4(net.matE8)
        gd_rot_mat_about_vec(net.matE8, net.unk68) 
        gd_add_vec3f_to_mat4f_offset(net.matE8, net.unk14)
        gd_copy_mat4f(net.matE8, net.mat128)

        const grp = net.unk1C8

        if (grp) {
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_JOINTS, Joints.func_80191604, grp, Joints)
            Objects.apply_to_obj_types_in_group(OBJ_TYPE_JOINTS, Joints.Unknown80191220, grp, Joints)
            //Objects.apply_to_obj_types_in_group(OBJ_TYPE_BONES, , grp, )
            //Objects.apply_to_obj_types_in_group(OBJ_TYPE_BONES, , grp, )
        }

    }
}

export const NetsInstance = new Nets()
