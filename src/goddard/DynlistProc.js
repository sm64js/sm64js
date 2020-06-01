import { ObjectsInstance as Objects } from "./Objects"
import { DrawInstance as Draw } from "./Draw"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import * as GDTypes from "./gd_types"

const DYNOBJ_NAME_SIZE = 8
const DYNOBJ_LIST_SIZE = 3000

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
                case 15:
                    this.d_makeobj(entry.args.w2, entry.args.w1)
                    break
                case 16:
                    this.d_start_group(entry.args)
                    break
                case 17:
                    this.d_end_group(entry.args)
                    break
                case 21:
                    this.d_set_nodegroup(entry.args.w1)
                    break
                case 23:
                    this.d_set_planegroup(entry.args.w1)
                    break
                case 30:
                    this.d_use_obj(entry.args.w1)
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

    chk_shapegen(shape) {
        const shapeMtls = shape.mtlGroup
        const shapeFaces = shape.faceGroup
        const shapeVtx = shape.vtxGroup

        if (shapeVtx && shapeFaces) {
            if ((shapeVtx.linkType & 1) && (shapeFaces.linkType & 1)) {
                throw "more implementation needed in chk shapegen"

            }
        }

        if (shapeMtls) {
            throw "more implementation needed in chk shapegen mtls"
        }
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
                Objects.addto_group(dynGrp, this.sGdDynObjList[i].obj)
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
            default:
                throw "unimplemented d_makeobj"
        }

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
