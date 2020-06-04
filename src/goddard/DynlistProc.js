import { ObjectsInstance as Objects } from "./Objects"
import { DrawInstance as Draw } from "./Draw"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
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
        this.PARM_PTR_CHAR  = 5
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
                case 20:
                    this.d_set_matgroup(entry.args.w1)
                    break
                case 21:
                    this.d_set_nodegroup(entry.args.w1)
                    break
                case 23:
                    this.d_set_planegroup(entry.args.w1)
                    break
                case 24:
                    this.d_set_shapeptrptr(entry.args.w1)
                    break
                case 29:
                    this.d_link_with_ptr(entry.args.w1)
                    break
                case 30:
                    this.d_use_obj(entry.args.w1)
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
                case 44:
                    this.d_set_parm_f(entry.args.w2, entry.args.vec.x)
                    break
                case 45:
                    this.d_set_parm_ptr(entry.args.w2, entry.args.w1)
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

    get_dynobj_info(id) {
        let buf = ""
        if (this.sLoadedDynObjs == 0) return

        if (this.sGdDynObjIdIsInt) {
        buf = `N${id}`
        } else {
        buf = id.toString()
        }

        buf += this.sDynIdBuf
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
            if (this.get_dynobj_info(id)) throw "fail object with same id exists"
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



    d_link_with_ptr(ptr) {
        if (this.sDynListCurObj == null) {
            throw "proc_dynlist(): No current object -- d_link_with_ptr"
        }

        const dynobj = this.sDynListCurObj

        switch (this.sDynListCurObj.header.type) {
            case GDTypes.OBJ_TYPE_GROUPS:
                const link = Objects.make_link_to_obj(null, ptr)
                dynobj.link1C = link
                break
            default:
                throw "object does not support this function d_link_with_ptr"
        }
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
            default:
                throw "object does not support this function - set flags"

        }
    }

    d_set_shapeptrptr(shpPtrPtr) {
        console.log(shpPtrPtr.target)
        throw "d_set_shapeptrptr"
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
            default:
                throw "Object type doesn't support set rel pos"
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

    d_start_group(id) {
        this.d_makeobj(this.D_GROUP, id)
    }

    d_end_group(id) {

        const info = this.get_dynobj_info(id)
        if (info == null) throw "dEndGroup(\"%s\"): Undefined group"

        const dynGrp = info.obj
        for (let i = info.num + 1; i < this.sLoadedDynObjs; i++) {
            if (this.sGdDynObjList[i].obj.type != GDTypes.OBJ_TYPE_GROUPS) {
                Objects.addto_group(dynGrp, this.sGdDynObjList[i].obj.header)
            }
        }
    }

    d_makeobj(type, id) {

        let dobj

        switch (type) {
            case this.D_ANIMATOR:
                dobj = Objects.make_animator()
                break
            case this.D_GROUP:
                dobj = Objects.make_group(0)
                break
            case this.D_VERTEX:
                dobj = Objects.make_vertex(0.0, 0.0, 0.0)
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
                Objects.addto_group(Draw.gGdLightGroup, dobj)
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
            this.sDynIdBuf[0] = '\0'
        }
    }

    dynid_is_int(isIntBool) {
        this.sGdDynObjIdIsInt = isIntBool
    }

}

export const DynlistProcInstance = new DynlistProc()
