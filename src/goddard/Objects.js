import * as GDTypes from "./gd_types"
import { DrawInstance as Draw } from "./Draw"

class Objects {
    constructor() {
        this.sGdViewInfo = {
            count: 0,
            pad: new Array(0x14).fill(0)
        }

        this.get_obj_name_str = {
            OBJ_TYPE_JOINTS: "joints",
            OBJ_TYPE_BONES: "bones",
            1: "groups",
            OBJ_TYPE_PARTICLES: "particles",
            OBJ_TYPE_SHAPES: "shapes",
            OBJ_TYPE_NETS: "nets",
            OBJ_TYPE_PLANES: "planes",
            OBJ_TYPE_VERTICES: "vertices",
            OBJ_TYPE_CAMERAS: "cameras",
            OBJ_TYPE_FACES: "faces",
            OBJ_TYPE_MATERIALS: "materials",
            OBJ_TYPE_LIGHTS: "lights",
            OBJ_TYPE_WEIGHTS: "weights",
            OBJ_TYPE_GADGETS: "gadgets",
            16384: "views",
            OBJ_TYPE_LABELS: "labels",
            OBJ_TYPE_ANIMATORS: "animators",
            OBJ_TYPE_VALPTRS: "valptrs",
            OBJ_TYPE_ZONES: "zones",
        }
    }
            
    null_obj_lists() {
        this.D_801B9E44 = 0
        this.gGdObjCount = 0
        this.gGdGroupCount = 0
        this.gGdPlaneCount = 0
        this.gGdCameraCount = 0
        this.sGdViewInfo.count = 0

        this.gGdCameraList = []
        this.D_801B9E50 = []
        this.gGdBoneList = []
        this.gGdJointList = []
        this.gGdGroupList = []
        this.D_801B9E80 = []
        this.gGdObjectList = []
        this.gGdViewsGroup = []
    }

    make_object(objType) {

        let objDrawFn = null

        switch (objType) {
            //case GDTypes.OBJ_TYPE_JOINTS:
            //    objDrawFn = Draw.draw_joint
            //    break
            //case GDTypes.OBJ_TYPE_BONES:
            //    objDrawFn = Draw.draw_bone
            //    break
            case GDTypes.OBJ_TYPE_GROUPS:
                objDrawFn = Draw.draw_group
                break
            //case GDTypes.OBJ_TYPE_PARTICLES:
            //    objDrawFn = Draw.draw_particle
            //    break
            //case GDTypes.OBJ_TYPE_SHAPES:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_UNK200000:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_NETS:
            //    objDrawFn = Draw.draw_net
            //    break
            //case GDTypes.OBJ_TYPE_PLANES:
            //    objDrawFn = Draw.draw_plane
            //    break
            //case GDTypes.OBJ_TYPE_VERTICES:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_CAMERAS:
            //    objDrawFn = Draw.draw_camera
            //    break
            //case GDTypes.OBJ_TYPE_FACES:
            //  objDrawFn = Draw.draw_face
            //    break
            //case GDTypes.OBJ_TYPE_MATERIALS:
            //  objDrawFn = Draw.draw_material
            //    break
            //case GDTypes.OBJ_TYPE_LIGHTS:
            //    objDrawFn = Draw.draw_light
            //    break
            //case GDTypes.OBJ_TYPE_WEIGHTS:
            //  objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_GADGETS:
            //   objDrawFn = Draw.draw_gadget
            //    break
            case GDTypes.OBJ_TYPE_VIEWS:
                objDrawFn = Draw.nop_obj_draw
                break
            //case GDTypes.OBJ_TYPE_LABELS:
            //    objDrawFn = Draw.draw_label
            //    break
            //case GDTypes.OBJ_TYPE_ANIMATORS:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_VALPTRS:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_ZONES:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            default:
                throw "unknown Goddard object type"
        }

        const objNameStr = this.get_obj_name_str[objType]
        if (objNameStr == undefined) throw "add this name"

        const newObj = {}

        this.gGdObjCount++
        this.objListOld = this.gGdObjectList
        this.gGdObjectList = newObj

        newObj.prev = null
        if (this.objListOld.length > 0) {
            newObj.next = this.objListOld[this.objListOld.length - 1]
            this.objListOld[this.objListOld.length - 1].prev = newObj
        }
        newObj.number = this.gGdObjCount
        newObj.type = objType
        newObj.objDrawFn = objDrawFn
        newObj.drawFlags = 0

        return newObj

    }

    make_group(count) {
        const newGroup = this.make_object(GDTypes.OBJ_TYPE_GROUPS)
        newGroup.id = this.gGdGroupCount++
        newGroup.objCount = 0
        newGroup.link1C = null; newGroup.link20 = null
    }

    make_view(name, flags, a2, ulx, uly, lrx, lry, parts) {

        const newView = this.make_object(GDTypes.OBJ_TYPE_VIEWS)

        if (this.gGdViewsGroup.length == 0) {
            this.gGdViewsGroup.push(this.make_group(0))
        }
    }
}

export const ObjectsInstance = new Objects()