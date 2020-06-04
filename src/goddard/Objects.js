import * as GDTypes from "./gd_types"
import { DrawInstance as Draw } from "./Draw"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { GoddardRendererInstance as Renderer } from "./GoddardRenderer"

class Objects {
    constructor() {
        this.sGdViewInfo = {
            count: 0
        }

        this.get_obj_name_str = {
            OBJ_TYPE_JOINTS: "joints",
            OBJ_TYPE_BONES: "bones",
            1: "groups",
            OBJ_TYPE_PARTICLES: "particles",
            16: "shapes",
            OBJ_TYPE_NETS: "nets",
            OBJ_TYPE_PLANES: "planes",
            256: "vertices",
            OBJ_TYPE_CAMERAS: "cameras",
            128: "faces",
            2048: "materials",
            0x80000: "lights",
            OBJ_TYPE_WEIGHTS: "weights",
            OBJ_TYPE_GADGETS: "gadgets",
            16384: "views",
            OBJ_TYPE_LABELS: "labels",
            0x00010000: "animators",
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

        // this.gGdCameraList = null
        // this.D_801B9E50 = null
        // this.gGdBoneList = null
        // this.gGdJointList = null
        // this.gGdGroupList = null
        // this.D_801B9E80 = null
        // this.gGdObjectList = null
        // this.gGdViewsGroup = null
    }

    make_link_to_obj(head, a1) {
        const newLink = {}

        if (head) {
            head.next = newLink
        }

        newLink.prev = head
        newLink.obj = a1

        return newLink
    }

    make_material(a0, name, id) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_MATERIALS),
            name: name ? name : "NoName",
            id,
            gddlNumber: 0,
            type: 16
        }
    }

    make_animator() {

        return {
            header: this.make_object(GDTypes.OBJ_TYPE_ANIMATORS),
            unk24: 1.0,
            unk28: 1.0,
            unk4C: 0
        }
    }

    make_light(flags, name, id) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_LIGHTS),
            name: name ? name : "NoName",
            id,
            unk30: 1.0,
            unk4C: 0,
            flags: flags | GDTypes.LIGHT_NEW_UNCOUNTED,
            unk98: 0,
            unk40: 0,
            unk68: { x: 0, y: 0, z: 0}
        }
    }

    make_vertex(x, y, z) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_VERTICES),
            id: 0xD1D4,
            scaleFactor: 1.0,
            alpha: 1.0,
            normal: { x: 0.0, y: 1.0, z: 0.0 },
            pos: { x, y, z },
            initPos: { x, y, z }
        }
    }

    make_face_with_colour(r, g, b) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_FACES),
            colour: { r, g, b },
            vtxCount: 0,
            vertices: [],
            mtlId: -1
        }
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
            case GDTypes.OBJ_TYPE_SHAPES:
                objDrawFn = Draw.nop_obj_draw
                break
            //case GDTypes.OBJ_TYPE_UNK200000:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            //case GDTypes.OBJ_TYPE_NETS:
            //    objDrawFn = Draw.draw_net
            //    break
            //case GDTypes.OBJ_TYPE_PLANES:
            //    objDrawFn = Draw.draw_plane
            //    break
            case GDTypes.OBJ_TYPE_VERTICES:
                objDrawFn = Draw.nop_obj_draw
                break
            //case GDTypes.OBJ_TYPE_CAMERAS:
            //    objDrawFn = Draw.draw_camera
            //    break
            case GDTypes.OBJ_TYPE_FACES:
                objDrawFn = Draw.draw_face
                break
            case GDTypes.OBJ_TYPE_MATERIALS:
                objDrawFn = Draw.draw_material
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                objDrawFn = Draw.draw_light
                break
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
            case GDTypes.OBJ_TYPE_ANIMATORS:
               objDrawFn = Draw.nop_obj_draw
               break
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

        const newObjHeader = {}

        this.gGdObjCount++
        this.objListOldHead = this.gGdObjectList
        this.gGdObjectList = newObjHeader

        if (this.objListOldHead) {
            newObjHeader.next = this.objListOldHead
            this.objListOldHead.prev = newObjHeader
        }
        newObjHeader.number = this.gGdObjCount
        newObjHeader.type = objType
        newObjHeader.objDrawFn = objDrawFn
        newObjHeader.drawFlags = 0

        return newObjHeader

    }

    make_group_of_type(type, fromObjHeader, toObjHeader) {
        const newGroup = this.make_group(0)
        newGroup.header.obj = newGroup
        let curObjHeader = fromObjHeader

        while (curObjHeader) {

            if (curObjHeader.type & type) {
                this.addto_group(newGroup, curObjHeader)
            }

            if (curObjHeader == toObjHeader) break

            curObjHeader = curObjHeader.prev
        }

        return newGroup
    }

    make_group(count) {
        const newGroup = {
            header: this.make_object(GDTypes.OBJ_TYPE_GROUPS),
            objCount: 0,
            linkType: 0,
            id: ++this.gGdGroupCount
        }

        const oldGroupListHead = this.gGdGroupList
        this.gGdGroupList = newGroup

        if (oldGroupListHead) {
          newGroup.next = oldGroupListHead
          oldGroupListHead.prev = newGroup
        }

        if (count == 0) return newGroup

        throw "more implementation needed, objects.js make_group"
    }

    make_view(name, flags, a2, ulx, uly, lrx, lry, parts) {

        const newView_GdObj = this.make_object(GDTypes.OBJ_TYPE_VIEWS)
        const newView = {
          header: newView_GdObj,
          colourBufs: new Array(2)
        }

        newView.header.obj = newView

        if (this.gGdViewsGroup == null) {
            this.gGdViewsGroup = this.make_group(0)
            this.gGdViewsGroup.header.obj = this.gGdViewsGroup
        }

        this.addto_group(this.gGdViewsGroup, newView.header)

        newView.flags = flags | GDTypes.VIEW_UPDATE | GDTypes.VIEW_LIGHT
        newView.id = this.sGdViewInfo.count++

        newView.components = parts
        if (newView.components) {
            throw "more implementation newView components"
        }

        Object.assign(newView, {
            unk78: 0,
            unk38: a2,
            clipping: { x: 30.0, y: 5000.0, z: 45.0 },
            upperLeft: { x: ulx, y: uly },
            lowerRight: { x: lrx, y: lry },
            unk48: 1.0,
            unk4C: 1.0,
            colour: { r: newView.id * 0.1, g: 0.06, b: 1.0 },
            proc: null,
            unk9C: 0
        })

        if (name) {
            Renderer.setup_view_buffers(name, newView)
        }

        newView.namePtr = name
        newView.lights = null

        return newView
    }

    addto_group(group, objheader) {

        if (group.link1C == null) {
            group.link1C = this.make_link_to_obj(null, objheader)
            group.link20 = group.link1C
        } else {
            group.link20 = this.make_link_to_obj(group.link20, objheader)
        }

        group.groupObjTypes |= objheader.type
        group.objCount++

    }

    apply_to_obj_types_in_group(types, fn, group) {
        let fnAppliedCount = 0

        if (group == null) return


        if (group.linkType & 1) { //compressed data
            return fnAppliedCount
        }

        if (!((group.groupObjTypes & GDTypes.OBJ_TYPE_GROUPS) | (group.groupObjTypes & types))) {
            return fnAppliedCount
        }

        let curLink = group.link1C
        let linkedObj, linkedObjType

        while (curLink) {
            linkedObj = curLink.obj
            linkedObjType = linkedObj.type

            if (linkedObjType == GDTypes.OBJ_TYPE_GROUPS) {
                fnAppliedCount += this.apply_to_obj_types_in_group(types, fn, linkedObj.obj)
            }

            if (linkedObjType & types) {
                fn.call(Shapes, linkedObj)
                fnAppliedCount++
            }

            curLink = curLink.next
        }

        return fnAppliedCount
    }
}

export const ObjectsInstance = new Objects()