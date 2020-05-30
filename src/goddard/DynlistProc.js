import { ObjectsInstance as Objects } from "./Objects"

class DynlistProc {

    constructor() {
        this.sDynIdBuf = ""
        this.sUnnamedObjCount = 0
        this.sLoadedDynObjs = 0

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
    }

    get_dynobj_info(id) {
      let buf = ""
      if (this.sLoadedDynObjs == 0) return

      if (this.sGdDynObjIdIsInt) {
        buf = `N${id}`
      } else {
        buf = id.toString()
      }

      buf += this.sDynNetIdBuf
      return this.sLoadedDynObjs.find(x => x.name == buf)
    }

    add_to_dynobj_list(newobj, id) {
      let idbuf = ""

      if (this.sGdDynObjList == null) {
        this.sGdDynObjList = {}
      }

      if (this.sGdDynObjIdIsInt) {
        idbuf = `N${id}`
        id = null
      } else {
        idbuf = `U${this.sLoadedDynObjs + 1}`
      }

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

    d_makeobj(type, id) {

        let dobj

        switch (type) {
            case this.D_ANIMATOR:
                dobj = Objects.make_animator().header
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
