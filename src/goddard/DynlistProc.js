import { ObjectsInstance as Objects } from "./Objects"
import { DrawInstance as Draw } from "./Draw"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { NetsInstance as Nets } from "./Nets"
import { JointsInstance as Joints } from "./Joints"
import * as GDTypes from "./gd_types"
import * as GDMath from "./gd_math"

const DYNOBJ_NAME_SIZE = 8
const DYNOBJ_LIST_SIZE = 3000

const VTX_BUF_SIZE = 3000

class DynlistProc {

    constructor() {
        this.sDynIdBuf = ""
        this.sUnnamedObjCount = 0
        this.sLoadedDynObjs = 0
        this.sDynNetCount = 0

        this.PARM_F_ALPHA = 1
        this.PARM_F_RANGE_LEFT = 2
        this.PARM_F_RANGE_RIGHT = 3
        this.PARM_F_VARVAL = 6

        this.D_CAR_DYNAMICS = 0
        this.D_NET = 1
        this.D_JOINT = 2
        this.D_ANOTHER_JOINT = 3
        this.D_CAMERA = 4
        this.D_VERTEX = 5
        this.D_FACE = 6
        this.D_PLANE = 7
        this.D_BONE = 8
        this.D_MATERIAL = 9
        this.D_SHAPE = 10
        this.D_GADGET = 11
        this.D_LABEL = 12
        this.D_VIEW = 13
        this.D_ANIMATOR = 14
        this.D_DATA_GRP = 15 ///< An `ObjGroup` that links to raw vertex or face data
        this.D_PARTICLE = 16
        this.D_LIGHT = 17
        this.D_GROUP = 18

        this.PARM_PTR_OBJ_VTX = 1
        this.PARM_PTR_CHAR = 5
    }

    proc_dynlist(dylist) {
        if (dylist[0] == null || dylist[0].cmd != 0xD1D4) {
            throw "proc_dynlist() not a valid dyn list"
        }

        dylist.forEach(entry => {
            switch (entry.cmd) {
                case 0xD1D4: break /// startList case
                case 0:
                    this.dynid_is_int(entry.args)
                    break
                case 5:
                    this.d_set_scale(entry.args.vec)
                    break
                case 6:
                    this.d_set_rotation(entry.args.vec)
                    break
                case 8:
                    this.d_set_flags(entry.args.w2)
                    break
                case 12:
                    this.proc_dynlist(entry.args.list)
                    break
                case 15:
                    this.d_makeobj(entry.args.w2, entry.args.w1)
                    break
                case 16:
                    this.d_start_group(entry.args)
                    break
                case 17:
                    this.d_end_group(entry.args)
                    break
                case 19:
                    this.d_set_type(entry.args.w2)
                    break
                case 20:
                    this.d_set_matgroup(entry.args.w1)
                    break
                case 21:
                    this.d_set_nodegroup(entry.args.w1)
                    break
                case 22:
                    this.d_set_skinshape(entry.args.w1)
                    break
                case 23:
                    this.d_set_planegroup(entry.args.w1)
                    break
                case 24:
                    this.d_set_shapeptrptr(entry.args.w1)
                    break
                case 25:
                    this.d_set_shapeptr(entry.args.w1)
                    break
                case 28:
                    this.d_link_with(entry.args.w1)
                    break
                case 29:
                    this.d_link_with_ptr(entry.args.w1)
                    break
                case 30:
                    this.d_use_obj(entry.args.w1)
                    break
                case 32:
                    this.d_set_skin_weight(entry.args.w2, entry.args.vec.x)
                    break
                case 33:
                    this.d_set_ambient(entry.args.vec)
                    break
                case 34:
                    this.d_set_diffuse(entry.args.vec)
                    break
                case 35:
                    this.d_set_id(entry.args.id)
                    break
                case 36:
                    this.d_set_material(entry.args.w1, entry.args.w2)
                    break
                case 38:
                    this.d_map_vertices(entry.args.w1)
                    break
                case 40:
                    this.d_attachto_dynid(entry.args.w2, entry.args.w1)
                    break
                case 41:
                    this.d_set_att_offset(entry.args.vec)
                    break
                case 44:
                    this.d_set_parm_f(entry.args.w2, entry.args.vec.x)
                    break
                case 45:
                    this.d_set_parm_ptr(entry.args.w2, entry.args.w1)
                    break
                case 46:
                    this.d_add_net_with_subgroup(entry.args.w2, entry.args.w1)
                    break
                case 47:
                    this.d_attach_joint_to_net(entry.args.w2, entry.args.w1)
                    break
                case 48:
                    this.d_end_net_subgroup(entry.args.w1)
                    break
                case 49:
                    this.d_make_vertex(entry.args.vec)
                    break
                case 58: break /// Stop list
                default: throw "proc_dynlist(): unkown command"
            }
        })

        return this.sDynListCurObj
    }

    set_cur_dynobj(obj) {
        this.sDynListCurObj = obj
        this.sDynListCurInfo = null
    }

    d_get_matrix_ptr() {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get matrix ptr"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                return this.sDynListCurObj.mat128
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                return this.sDynListCurObj.matE8
                break
            default:
                throw "Object does not support function - get matrix ptr"
        }
    }

    d_get_idn_mtx_ptr() {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get idn matrix ptr"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                return this.sDynListCurObj.matE8
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                return this.sDynListCurObj.mat168
                break
            default:
                throw "Object does not support function - get idn matrix ptr"
        }
    }

    d_get_rot_mtx_ptr() {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get rot matrix ptr"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                return this.sDynListCurObj.mat168
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                return this.sDynListCurObj.mat128
                break
            default:
                throw "Object does not support function - get rot matrix ptr"
        }
    }

    d_get_scale(dst) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get scale"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                Object.assign(dst, this.sDynListCurObj.unk1AC)
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                Object.assign(dst, this.sDynListCurObj.unk9C)
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                Object.assign(dst, { x: 0.0, y: 0.0, z: 0.0 })
                break
            default:
                console.log(this.sDynListCurObj)
                throw "Object does not support function - get scale"
        }
    }

    d_get_att_objgroup() {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get att objgroup"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                return this.sDynListCurObj.unk1D4
            case GDTypes.OBJ_TYPE_JOINTS:
                return this.sDynListCurObj.unk1F8
            default:
                throw "Object does not support function - get att objgroup"
        }

    }

    d_get_init_pos(dst) {

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get init pos"
        }

        switch (this.sDynListCurObj.header.type) {

            case GDTypes.OBJ_TYPE_JOINTS:
                Object.assign(dst, this.sDynListCurObj.unk54)
                break
            case GDTypes.OBJ_TYPE_NETS:
                throw "nets"
                break
            case GDTypes.OBJ_TYPE_VERTICES:
                throw "vertices"
                break
            default:
                throw "Object does not support function - get init pos"

        }
    }

    d_get_rel_pos(dst) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get rel pos"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_VERTICES:
                dst.x = this.sDynListCurObj.pos.x
                dst.y = this.sDynListCurObj.pos.y
                dst.z = this.sDynListCurObj.pos.z
                break
            default:
                throw "Object does not support function - get rel pos"
        }
    }

    d_get_world_pos(dst) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- get world pos"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_VERTICES:
                dst.x = this.sDynListCurObj.pos.x
                dst.y = this.sDynListCurObj.pos.y
                dst.z = this.sDynListCurObj.pos.z
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                dst.x = this.sDynListCurObj.position.x
                dst.y = this.sDynListCurObj.position.y
                dst.z = this.sDynListCurObj.position.z
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                dst.x = this.sDynListCurObj.unk14.x
                dst.y = this.sDynListCurObj.unk14.y
                dst.z = this.sDynListCurObj.unk14.z
                break
            case GDTypes.OBJ_TYPE_NETS:
                dst.x = this.sDynListCurObj.unk14.x
                dst.y = this.sDynListCurObj.unk14.y
                dst.z = this.sDynListCurObj.unk14.z
                break
            case GDTypes.OBJ_TYPE_PARTICLES:
                dst.x = this.sDynListCurObj.unk20.x
                dst.y = this.sDynListCurObj.unk20.y
                dst.z = this.sDynListCurObj.unk20.z
                break
            case GDTypes.OBJ_TYPE_CAMERAS:
                dst.x = this.sDynListCurObj.unk14.x
                dst.y = this.sDynListCurObj.unk14.y
                dst.z = this.sDynListCurObj.unk14.z
                break
            default:
                throw "Object does not support function - get world pos - " + this.sDynListCurObj.header.type
        }
    }

    get_dynobj_info(id) {
        let buf = ""
        if (this.sLoadedDynObjs == 0) return

        if (this.sGdDynObjIdIsInt) {
            buf = `N${id}`
        } else {
            buf = id.toString()
        }

        buf += this.sDynIdBuf

        //console.log("finding obj with buf:  " + buf)

        return this.sGdDynObjList.find(x => x.name == buf)
    }

    add_to_dynobj_list(newObj, id) {

        let idbuf = ""

        if (this.sGdDynObjList == null) {
            this.sGdDynObjList = []
        }

        if (this.sGdDynObjIdIsInt) {
            idbuf = `N${id}`
            id = null
        } else {
            idbuf = `U${this.sLoadedDynObjs + 1}`
        }

        if (this.sLoadedDynObjs != this.sGdDynObjList.length) throw "expected different size"
        this.sGdDynObjList.push({})

        if (id) {
            if (this.get_dynobj_info(id)) this.sGdDynObjList.shift()//throw "fail object with same id exists"
            this.sGdDynObjList[this.sLoadedDynObjs].name = id.toString()
        } else {
            this.sGdDynObjList[this.sLoadedDynObjs].name = idbuf
        }

        this.sGdDynObjList[this.sLoadedDynObjs].name += this.sDynIdBuf

        if (this.sGdDynObjList[this.sLoadedDynObjs].name.length > DYNOBJ_NAME_SIZE - 1)
        throw "error dyn list obj name too long"

        this.sGdDynObjList[this.sLoadedDynObjs].num = this.sLoadedDynObjs
        this.sDynListCurInfo = this.sGdDynObjList[this.sLoadedDynObjs]
        this.sGdDynObjList[this.sLoadedDynObjs++].obj = newObj

        if (this.sLoadedDynObjs >= DYNOBJ_LIST_SIZE) throw "too many dynlist objects"
        this.sDynListCurObj = newObj
    }

    d_link_with(id) {

        const origInfo = this.sDynListCurInfo

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- link with"
        }

        if (id == null) return

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        this.d_link_with_ptr(info.obj)
        this.set_cur_dynobj(origInfo.obj)
        this.sDynListCurInfo = origInfo
    }


    d_link_with_ptr(ptr) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- d_link_with_ptr"
        }

        const dynobj = this.sDynListCurObj

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_GROUPS:
                const link = Objects.make_link_to_obj(null, { obj: ptr })
                dynobj.link1C = link
                break
            case GDTypes.OBJ_TYPE_ANIMATORS:
                if (this.sDynListCurObj.unk14 == null) {
                    this.sDynListCurObj.unk14 = Objects.make_group(0)
                    this.sDynListCurObj.unk14.header.obj = this.sDynListCurObj.unk14
                }
                Objects.addto_group(this.sDynListCurObj.unk14, { obj: ptr })
                break
            default:
                throw "object does not support this function d_link_with_ptr"
        }
    }

    d_attach_joint_to_net(arg0, id) {

        this.d_makeobj(this.D_JOINT, id)
        this.d_set_type(3)
        this.d_set_shapeptrptr({ target: null })
        this.d_attach_to(0xD, this.sParentNetInfo.obj.header)
        this.sParentNetInfo = this.sDynListCurInfo
    }

    chk_shapegen(shape) {
        const shapeMtls = shape.mtlGroup
        const shapeFaces = shape.faceGroup
        const shapeVtx = shape.vtxGroup

        if (shapeVtx && shapeFaces) {

            if ((shapeVtx.linkType & 1) && (shapeFaces.linkType & 1)) {
                const vtxdata = shapeVtx.link1C.obj
                const facedata = shapeFaces.link1C.obj

                if (facedata.type != 1) throw "unsupported poly type"

                if (vtxdata.type != 1) throw "unsupported vertex type"

                if (vtxdata.count >= VTX_BUF_SIZE) throw "shapegen() too many vertices"

                const vtxbuf = []
                let oldObjHead = Objects.gGdObjectList

                vtxdata.data.forEach(vertex => {
                    const vtx = Shapes.make_vertex(vertex[0], vertex[1], vertex[2])
                    vtx.header.obj = vtx
                    vtx.normal = { x: 0.0, y: 0.0, z: 0.0 }
                    vtxbuf.push(vtx)
                })

                const madeVtx = Objects.make_group_of_type(GDTypes.OBJ_TYPE_VERTICES, oldObjHead, null)

                oldObjHead = Objects.gGdObjectList

                for (let i = 0; i < facedata.data.length; i++) {
                    const face = Objects.make_face_with_colour(1.0, 1.0, 1.0)
                    face.header.obj = face
                    face.mtlId = facedata.data[i][0]
                    Shapes.add_3_vtx_to_face(face, vtxbuf[facedata.data[i][1]], vtxbuf[facedata.data[i][2]], vtxbuf[facedata.data[i][3]])

                    vtxbuf[facedata.data[i][1]].normal.x += face.normal.x
                    vtxbuf[facedata.data[i][1]].normal.y += face.normal.y
                    vtxbuf[facedata.data[i][1]].normal.z += face.normal.z

                    vtxbuf[facedata.data[i][2]].normal.x += face.normal.x
                    vtxbuf[facedata.data[i][2]].normal.y += face.normal.y
                    vtxbuf[facedata.data[i][2]].normal.z += face.normal.z

                    vtxbuf[facedata.data[i][3]].normal.x += face.normal.x
                    vtxbuf[facedata.data[i][3]].normal.y += face.normal.y
                    vtxbuf[facedata.data[i][3]].normal.z += face.normal.z

                }

                if (shape.flag & 0x10) {
                    vtxbuf.forEach(vertex => {
                        vertex.normal.x += vertex.pos.x
                        vertex.normal.y += vertex.pos.y
                        vertex.normal.z += vertex.pos.z
                        GDMath.gd_normalize_vec3f(vertex.normal)
                    })
                } else {
                    vtxbuf.forEach(vertex => {
                        GDMath.gd_normalize_vec3f(vertex.normal)
                    })
                }

                const madeFaces = Objects.make_group_of_type(GDTypes.OBJ_TYPE_FACES, oldObjHead, null)

                shape.faceGroup = madeFaces
                shape.vtxGroup = madeVtx
            }
        }

        if (shapeMtls) {
            if (shape.faceGroup) {
                Draw.map_face_materials(shape.faceGroup, shapeMtls)
            } else {
                throw "chk_shapegen() please set face group before mats"
            }
        }
    }

    d_set_flags(flags) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set flags"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_LIGHTS:
                this.sDynListCurObj.flags |= flags
                break
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk34 |= flags
                break
            case GDTypes.OBJ_TYPE_CAMERAS:
                this.sDynListCurObj.unk2C |= flags
                break
            default:
                throw "object does not support this function - set flags"

        }
    }

    d_set_type(type) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set type"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.netType = type
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                this.sDynListCurObj.unk1CC = type
                break
            default:
                throw "object does not support this function - set type"

        }
    }

    d_set_skinshape(id) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set skinshape"
        }

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_NETS) 
            this.sDynListCurObj.skinGrp = info.obj.vtxGroup
        else throw "object does not support this function - set skinshape"
    }

    d_set_shapeptrptr(shpPtrPtr) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set shape ptr ptr"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_JOINTS:
                this.sDynListCurObj.unk20 = shpPtrPtr
                this.sDynListCurObj.unk1C8 = 0
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                this.sDynListCurObj.unk9C = shpPtrPtr
                break
            default:
                throw "object does not support this function - set shape ptr ptr"
        }
    }

    d_set_shapeptr(id) {

        if (id == null) return

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk1A8 = info.obj
                break
            default:
                throw "object does not support this function - set shape ptr"
        }
    }

    d_set_matgroup(id) {
        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set material group"
        }

        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_SHAPES) {
            this.sDynListCurObj.mtlGroup = info.obj
            this.chk_shapegen(this.sDynListCurObj)
        } else throw "object does not support this function - set material group"
    }

    d_set_planegroup(id) {
        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set plane group"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_SHAPES:
                this.sDynListCurObj.faceGroup = info.obj
                this.chk_shapegen(this.sDynListCurObj)
                break
            default:
                throw "object does not support this function - set node group"
        }
    }

    d_set_nodegroup(id) {
        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set node group"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_SHAPES:
                this.sDynListCurObj.vtxGroup = info.obj
                this.chk_shapegen(this.sDynListCurObj)
                break
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk1C8 = info.obj
                this.sDynListCurObj.unk1D0 = info.obj
                break
            case GDTypes.OBJ_TYPE_ANIMATORS:
                this.sDynListCurObj.animdata = info.obj
                //alloc_animdata(this.sDynListCurObj) /// probably not needed for JS
                break
            default:
                throw "object does not support this function - set node group"
        }
    }

    d_set_ambient(colour) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set ambient"
        }
        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_MATERIALS) {
            this.sDynListCurObj.Ka = colour
        } else throw "object does not support this function - set ambient"
    }

    d_set_diffuse(colour) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set diffuse"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_MATERIALS:
                this.sDynListCurObj.Kd = colour
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                this.sDynListCurObj.diffuse = colour
                break
            default:
                throw "Object does not support this function - set diffuse"
        }
    }

    d_set_att_offset(off) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set attach offset"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_JOINTS:
                this.sDynListCurObj.unk200 = { ...off }
                this.sDynListCurObj.unk54 = { ...off }
                break
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk1D8 = { ...off }
                this.sDynListCurObj.unk20 = { ...off }
                break
            default:
                throw "Object does not support this function - set attach offset"
        }
    }

    d_set_scale(vec) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set scale"
        }

        this.push_dynobj_stash() 
        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk1AC = vec
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                this.sDynListCurObj.unk9C = vec
                break
            case GDTypes.OBJ_TYPE_LIGHTS: break
            default:
                throw "Object does not support this function - set scale"
        }
        this.pop_dynobj_stash() 

    }

    d_set_idn_mtx(src) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set idn mtx"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_JOINTS:
                GDMath.gd_copy_mat4f(src, this.sDynListCurObj.mat168)
                break
            case GDTypes.OBJ_TYPE_NETS:
                GDMath.gd_copy_mat4f(src, this.sDynListCurObj.matE8)
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                this.sDynListCurObj.position = { x: src[3][0], y: src[3][1], z: src[3][2] }
                break
            default:
                throw "Object does not support this function - set idn mtx"
        }
    }

    d_set_rotation(vec) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set id"
        }

        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_NETS) {
            this.sDynListCurObj.unk68 = { ...vec }
        } else if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_JOINTS) {
            this.sDynListCurObj.unk6C = { ...vec }
        } else throw "Object does not support this function - set rotation"
    }

    d_set_id(id) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set id"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_MATERIALS:
                this.sDynListCurObj.id = id
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                this.sDynListCurObj.id = id
                break
            default:
                throw "Object does not support this function - set id"
        }

    }

    d_use_obj(id) {
        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        this.sDynListCurObj = info.obj
        this.sDynListCurInfo = info

        return info.obj
    }

    d_map_vertices(id) {
        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- map vertices"
        }

        Draw.map_vertices(this.sDynListCurObj, info.obj)
    }

    d_set_parm_ptr(param, ptr) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set param ptr"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_FACES:
                if (param == this.PARM_PTR_OBJ_VTX) {
                    if (this.sDynListCurObj.vtxCount > 3) throw "too many points"
                    this.sDynListCurObj.vertices[this.sDynListCurObj.vtxCount++] = ptr
                } else throw "set param ptr for object faces, bad param"
                break
            default:
                throw "Object does not support function set param ptr"
        }
    }

    d_set_material(a0, mtlId) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set material"
        }

        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_FACES) {
            this.sDynListCurObj.mtlId = mtlId
        } else throw "Obj does not support set material"
    }

    d_set_skin_weight(id, percentWeight) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set skin weight"
        }

        if (this.sDynListCurObj.header.type == GDTypes.OBJ_TYPE_JOINTS) {
            Joints.set_skin_weight(this.sDynListCurObj, id, null, percentWeight / 100.0)
        } else throw "Obj does not support set skin weight"
    }

    d_set_parm_f(param, val) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set param f"
        }

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_SHAPES:
                if (param == this.PARM_F_ALPHA) {
                    this.sDynListCurObj.unk58 = val
                } else throw "this object only supports alpha"
                break
            case GDTypes.OBJ_TYPE_VERTICES:
                if (param == this.PARM_F_ALPHA) {
                    this.sDynListCurObj.alpha = val
                } else throw "this object only supports alpha"
                break
            default:
                throw "unknown type in set param f"
        }
    }

    d_set_rel_pos(pos) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set rel pos"
        }

        const dynobj = this.sDynListCurObj

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_VERTICES:
                dynobj.pos = pos
                break
            case GDTypes.OBJ_TYPE_CAMERAS:
                this.sDynListCurObj.unk40 = pos
                this.sDynListCurObj.positions[0] = pos
                this.sDynListCurObj.positions[1] = { x: pos.x * 1.5, y: pos.y * 1.5, z: pos.z * 1.5 }
                this.sDynListCurObj.positions[2] = { x: pos.x * 2.0, y: pos.y * 2.0, z: pos.z * 2.0 }
                this.sDynListCurObj.zoomLevels = 2
                break
            default:
                throw "Object type doesn't support set rel pos"
        }

    }

    d_set_world_pos(pos) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set world pos"
        }

        switch (this.sDynListCurObj.header.type) {

            case GDTypes.OBJ_TYPE_CAMERAS:
                this.sDynListCurObj.unk14 = pos
                break
            default:
                throw "Object type doesn't support set world pos"
        }

    }

    d_set_init_pos(pos) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- set init pos"
        }

        const dynobj = this.sDynListCurObj

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_VERTICES:
                this.d_set_rel_pos(pos)
                dynobj.initPos = pos
                break
            default:
                throw "Object type doesn't support set init pos"
        }
    }

    d_make_vertex(pos) {
        this.d_makeobj(this.D_VERTEX, null)
        this.d_set_init_pos(pos)
    }

    push_dynobj_stash() {
        this.sStashedDynObjInfo = this.sDynListCurInfo
        this.sStashedDynObj = this.sDynListCurObj
    }

    pop_dynobj_stash() {
        this.sDynListCurObj = this.sStashedDynObj
        this.sDynListCurInfo = this.sStashedDynObjInfo
    }

    d_attach_to(flag, objheader) {

        this.push_dynobj_stash()

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- d_attach to"
        }

        let attgrp
        switch (objheader.type) {
            case GDTypes.OBJ_TYPE_JOINTS:
                attgrp = objheader.obj.unk1F8
                if (attgrp == null) {
                    attgrp = Objects.make_group(0)
                    attgrp.header.obj = attgrp
                    objheader.obj.unk1F8 = attgrp
                }
                break
            case GDTypes.OBJ_TYPE_NETS:
                attgrp = objheader.obj.unk1D4
                if (attgrp == null) {
                    attgrp = Objects.make_group(0)
                    attgrp.header.obj = attgrp
                    objheader.obj.unk1D4 = attgrp
                }
                break
            case GDTypes.OBJ_TYPE_ANIMATORS:
                attgrp = objheader.obj.unk30
                if (attgrp == null) {
                    attgrp = Objects.make_group(0)
                    attgrp.header.obj = attgrp
                    objheader.obj.unk30 = attgrp
                }
                break
            default:
                throw "Object type doesn't support attach to - part 1"

        }

        if (Objects.group_contains_obj(attgrp, this.sDynListCurObj.header)) return

        Objects.addto_group(attgrp, this.sDynListCurObj.header)

        let dynobjPos = {}, objPos = {}
        if (flag & 9) {
            this.d_get_world_pos(dynobjPos)
            this.set_cur_dynobj(objheader.obj)
            this.d_get_world_pos(objPos)

            dynobjPos.x -= objPos.x
            dynobjPos.y -= objPos.y
            dynobjPos.z -= objPos.z
        }

        this.pop_dynobj_stash()
        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_NETS:
                this.sDynListCurObj.unk1E4 = flag
                this.sDynListCurObj.unk1E8 = objheader
                break
            case GDTypes.OBJ_TYPE_JOINTS:
                this.sDynListCurObj.unk1FC = flag
                this.sDynListCurObj.unk20C = objheader
                break
            case GDTypes.OBJ_TYPE_ANIMATORS:
                this.sDynListCurObj.unk34 = flag
                this.sDynListCurObj.unk44 = objheader
                break
            default:
                throw "Object type doesn't support attach to - part 2"
        }

        if (flag & 9) {
            this.d_set_att_offset(dynobjPos)
        }

    }

    d_attachto_dynid(flag, id) {
        if (id == null) return

        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- d_attachto_dynid"
        }

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        this.d_attach_to(flag, info.obj.header)
    }

    d_start_group(id) {
        this.d_makeobj(this.D_GROUP, id)
    }

    d_end_group(id) {

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        const dynGrp = info.obj
        for (let i = info.num + 1; i < this.sLoadedDynObjs; i++) {
            if (this.sGdDynObjList[i].obj.header.type != GDTypes.OBJ_TYPE_GROUPS) {
                Objects.addto_group(dynGrp, this.sGdDynObjList[i].obj.header)
            }
        }
    }

    d_end_net_subgroup(id) {
        this.d_use_obj(id)
        this.sBackBuf = this.sDynIdBuf
        this.d_copystr_to_idbuf(this.sDynNetIdBuf)
        this.d_end_group(id)
        this.d_set_nodegroup(id)
        this.sDynIdBuf = this.sBackBuf
        this.sParentNetInfo = null
    }

    d_set_obj_draw_flag(flag) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- d_set_obj_draw_flag"
        }

        this.sDynListCurObj.drawFlags |= flag
    }

    d_add_net_with_subgroup(a0, id) {
        this.d_makeobj(this.D_NET, id)
        this.d_set_obj_draw_flag(GDTypes.OBJ_NOT_DRAWABLE)
        this.sDynNetIdBuf = `c${++this.sDynNetCount}`
        this.d_set_type(4)
        this.sBackBuf = this.sDynIdBuf
        this.d_copystr_to_idbuf(this.sDynNetIdBuf)
        this.d_start_group(id)
        this.sDynIdBuf = this.sBackBuf
        this.d_use_obj(id)
        this.sParentNetInfo = this.sDynListCurInfo
    }

    d_makeobj(type, id) {

        let dobj

        switch (type) {
            case this.D_ANIMATOR:
                dobj = Objects.make_animator()
                break
            case this.D_JOINT:
                dobj = Joints.make_joint(0, 0.0, 0.0, 0.0)
                break
            case this.D_GROUP:
                dobj = Objects.make_group(0)
                break
            case this.D_VERTEX:
                dobj = Shapes.make_vertex(0.0, 0.0, 0.0)
                break
            case this.D_FACE:
                dobj = Objects.make_face_with_colour(1.0, 1.0, 1.0)
                break
            case this.D_SHAPE:
                dobj = Shapes.make_shape(0, id)
                break
            case this.D_DATA_GRP:
                this.d_makeobj(this.D_GROUP, id)
                this.sDynListCurObj.linkType = 1
                return
            case this.D_MATERIAL:
                dobj = Objects.make_material(0, null, 0)
                break
            case this.D_LIGHT:
                dobj = Objects.make_light(0, null, 0)
                dobj.header.obj = dobj
                Objects.addto_group(Draw.gGdLightGroup, dobj.header)
                break
            case this.D_NET:
                dobj = Nets.make_net(0, null, null, null, null)
                break
            case this.D_CAMERA:
                dobj = Objects.make_camera(0, null)
                break
            default:
                throw "unimplemented d_makeobj"
        }


        dobj.header.obj = dobj
        this.add_to_dynobj_list(dobj, id)

        return dobj
    }

    d_copystr_to_idbuf(str) { ///"1"
        if (str) {
            if (str[0] == '\0') {
                this.sDynIdBuf = `__${++this.sUnnamedObjCount}`
            } else {
                this.sDynIdBuf = str
            }
        } else {
            this.sDynIdBuf = ""
        }
    }

    dynid_is_int(isIntBool) {
        this.sGdDynObjIdIsInt = isIntBool
    }

}

export const DynlistProcInstance = new DynlistProc()
