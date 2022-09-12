import * as GDTypes from "./gd_types"
import { DrawInstance as Draw } from "./Draw"
import { NetsInstance as Nets } from "./Nets"
import * as Particles from "./Particles"
import { DynlistProcInstance as Dynlist } from "./DynlistProc"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { GoddardRendererInstance as Renderer } from "./GoddardRenderer"
import { GoddardMainInstance as Main } from "./GoddardMain"
import { gd_set_identity_mat4, gd_copy_mat4f, gd_scale_mat4f_by_vec3f, gd_mult_mat4f, gd_rot_mat_about_vec, gd_add_vec3f_to_mat4f_offset } from "./gd_math"


class Objects {
    constructor() {
        this.sGdViewInfo = {
            count: 0
        }

        this.gGdCameraCount = 0
        this.gGdCameraList = null

        this.gGdCounter = {
            ctr0: 0,
            ctr1: 0
        }

        this.D_801B9DC8 = new Array(4).fill(0).map(() => new Array(4).fill(0))

        this.get_obj_name_str = {
            4: "joints",
            OBJ_TYPE_BONES: "bones",
            1: "groups",
            8: "particles",
            16: "shapes",
            32: "nets",
            OBJ_TYPE_PLANES: "planes",
            256: "vertices",
            512: "cameras",
            128: "faces",
            2048: "materials",
            0x80000: "lights",
            4096: "weights",
            OBJ_TYPE_GADGETS: "gadgets",
            16384: "views",
            OBJ_TYPE_LABELS: "labels",
            0x00010000: "animators",
            OBJ_TYPE_VALPTRS: "valptrs",
            OBJ_TYPE_ZONES: "zones",
        }
    }

    func_8017F424(a0, a1, a2) {

        const sp40 = new Array(4).fill(0).map(() => new Array(4).fill(0))
        gd_set_identity_mat4(sp40)

        const sp1C = { p0: {}, p1: {}, p2: {}}

        if (a2 != 0.0) {
            sp1C.p1.x = a0.p1.x + (a1.p1.x - a0.p1.x) * a2
            sp1C.p1.y = a0.p1.y + (a1.p1.y - a0.p1.y) * a2
            sp1C.p1.z = a0.p1.z + (a1.p1.z - a0.p1.z) * a2
            sp1C.p2.x = a0.p2.x + (a1.p2.x - a0.p2.x) * a2
            sp1C.p2.y = a0.p2.y + (a1.p2.y - a0.p2.y) * a2
            sp1C.p2.z = a0.p2.z + (a1.p2.z - a0.p2.z) * a2

            gd_scale_mat4f_by_vec3f(sp40, a0.p0)
            gd_rot_mat_about_vec(sp40, sp1C.p1)
            gd_add_vec3f_to_mat4f_offset(sp40, sp1C.p2)
        } else {
            Dynlist.d_set_scale(a0.p0)
            gd_rot_mat_about_vec(sp40, a0.p1)
            gd_add_vec3f_to_mat4f_offset(sp40, a0.p2)
        }
        Dynlist.d_set_idn_mtx(sp40)
    }

    move_particles_in_grp(group) {
        Nets.gGdSkinNet = null
        this.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_PARTICLES, Particles.move_particle, group, null)
    }

    move_animator(animObj) {

        const scale = 0.1

        if (animObj.fn48) {
            animObj.fn48(animObj)
        }

        if (animObj.unk14 == null) return

        const animData = animObj.animdata.link1C.obj

        if (animObj.unk44) {
            animObj.unk28 = animObj.unk44.obj.unk28 / animObj.unk44.obj.unk24
        }

        if (animData[0].type == 0) return

        if (animObj.unk28 > animData[0].data.length) {
            animObj.unk28 = 1.0
        } else if (animObj.unk28 < 0.0) {
            animObj.unk28 = animData[0].data.length
        }

        let sp38 = animObj.unk28
        const sp30 = animObj.unk28 - sp38
        let sp34 = sp38 + 1

        if (sp34 > animData[0].data.length) {
            sp34 = 1
        }

        sp38--
        sp34--

        let tri1 = { p0: {}, p1: {}, p2: {} }
        let tri2 = { p0: {}, p1: {}, p2: {} }

        let link = animObj.unk14.link1C
        while (link) {
            const linkedObj = link.obj
            Dynlist.set_cur_dynobj(linkedObj)
            switch (animData[0].type) {
                case GDTypes.GD_ANIM_3H_SCALED:
                    const vec3hArr = animData[0].data

                    Dynlist.d_get_scale(tri1.p0)
                    tri2.p0 = { ...tri1.p0 }

                    Dynlist.d_get_init_pos(tri1.p2)
                    tri2.p2 = { ...tri1.p2 }

                    tri1.p1.x = vec3hArr[sp38][0] * scale
                    tri1.p1.y = vec3hArr[sp38][1] * scale
                    tri1.p1.z = vec3hArr[sp38][2] * scale

                    tri2.p1.x = vec3hArr[sp34][0] * scale
                    tri2.p1.y = vec3hArr[sp34][1] * scale
                    tri2.p1.z = vec3hArr[sp34][2] * scale

                    this.func_8017F424(tri1, tri2, sp30)
                    break
                case GDTypes.GD_ANIM_6H_SCALED:
                    const planeHArr = animData[0].data

                    Dynlist.d_get_scale(tri1.p0)
                    tri2.p0 = { ...tri1.p0 }

                    tri1.p1.x = planeHArr[sp38][0] * scale
                    tri1.p1.y = planeHArr[sp38][1] * scale
                    tri1.p1.z = planeHArr[sp38][2] * scale

                    tri2.p1.x = planeHArr[sp34][0] * scale
                    tri2.p1.y = planeHArr[sp34][1] * scale
                    tri2.p1.z = planeHArr[sp34][2] * scale

                    tri1.p2.x = planeHArr[sp38][3]
                    tri1.p2.y = planeHArr[sp38][4]
                    tri1.p2.z = planeHArr[sp38][5]

                    tri2.p2.x = planeHArr[sp34][3]
                    tri2.p2.y = planeHArr[sp34][4]
                    tri2.p2.z = planeHArr[sp34][5]

                    this.func_8017F424(tri1, tri2, sp30)
                    break
                default:
                    console.log(animData[0])
                    throw "unimplemented animation data type"
            }
            link = link.next
        }

    }

    move_animators(group) {
        this.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_ANIMATORS, this.move_animator, group, this)
    }

    move_group_members() {
        if (Main.gGdMoveScene) {
            ///reset gadgets seems to do nothing
            //// move lights seems to do nothing
            this.move_particles_in_grp(this.sCurrentMoveGrp)
            this.move_animators(this.sCurrentMoveGrp)
            Nets.move_nets(this.sCurrentMoveGrp)

            //this.move_cameras_in_grp() TODO
        }
    }

    proc_view_movement(view) {
        this.sCurrentMoveCamera = view.activeCam
        this.sCurrentMoveView = view

        this.sCurrentMoveGrp = view.components
        if (this.sCurrentMoveGrp) {
            this.move_group_members()
        }

        this.sCurrentMoveGrp = view.lights
        if (this.sCurrentMoveGrp) {
            this.move_group_members()
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

    group_contains_obj(group, objheader) {
        let objLink = group.link1C

        while (objLink) {
            if (objLink.obj.number == objheader.number) return true
            objLink = objLink.next
        }

        return false
    }

    make_link_to_obj(head, a1_header) {
        const newLink = {}

        if (head) {
            head.next = newLink
        }

        newLink.prev = head
        if (a1_header.obj == undefined) throw "error trying to add link to undefined object"
        newLink.obj = a1_header.obj

        return newLink
    }

    make_vtx_link(prevlink, data) {
        const newLink = {}

        if (prevlink) {
            prevlink.next = newLink
        }

        newLink.prev = prevlink
        newLink.next = null
        newLink.data = data

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

    make_weight(a0, id, vtx, weight) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_WEIGHTS),
            id,
            animInfo: weight,
            unk3C: vtx
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

/*    make_vertex(x, y, z) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_VERTICES),
            id: 0xD1D4,
            scaleFactor: 1.0,
            alpha: 1.0,
            normal: { x: 0.0, y: 1.0, z: 0.0 },
            pos: { x, y, z },
            initPos: { x, y, z }
        }
    }*/

    make_face_with_colour(r, g, b) {
        return {
            header: this.make_object(GDTypes.OBJ_TYPE_FACES),
            colour: { r, g, b },
            vtxCount: 0,
            vertices: [],
            mtlId: -1
        }
    }

    make_camera(a0, a1) {

        this.gGdCameraCount++

        const newCam = {
            header: this.make_object(GDTypes.OBJ_TYPE_CAMERAS),
            id: this.gGdCameraCount,
            unk2C: a1 | 0x10,
            unk30: a1,
            unk180: { x: 1.0, y: 0.1, z: 1.0 },
            unk124: { x: 4.0, y: 4.0, z: 4.0 },
            unk178: 0.0,
            unk17C: 0.25,
            zoom: 0,
            zoomLevels: -1,
            unkA4: 0.0,
            unk34: { x: 0.0, y: 0.0, z: 0.0 },
            unk14: { x: 0.0, y: 0.0, z: 0.0 },
            unk64: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            unkA8: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            unkE8: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            positions: new Array(4)
        }

        const oldCameraHead = this.gGdCameraList
        this.gGdCameraList = newCam

        if (oldCameraHead) {
            newCam.next = oldCameraHead
            oldCameraHead.prev = newCam
        }

        gd_set_identity_mat4(newCam.unk64)
        gd_set_identity_mat4(newCam.unkA8)

        return newCam

    }

    make_object(objType) {

        let objDrawFn = null

        switch (objType) {
            case GDTypes.OBJ_TYPE_JOINTS:
                objDrawFn = Draw.draw_joint
                break
            //case GDTypes.OBJ_TYPE_BONES:
            //    objDrawFn = Draw.draw_bone
            //    break
            case GDTypes.OBJ_TYPE_GROUPS:
                objDrawFn = Draw.draw_group
                break
            case GDTypes.OBJ_TYPE_PARTICLES:
                objDrawFn = Draw.draw_particle
                break
            case GDTypes.OBJ_TYPE_SHAPES:
                objDrawFn = Draw.nop_obj_draw
                break
            //case GDTypes.OBJ_TYPE_UNK200000:
            //    objDrawFn = Draw.nop_obj_draw
            //    break
            case GDTypes.OBJ_TYPE_NETS:
                objDrawFn = Draw.draw_net
                break
            //case GDTypes.OBJ_TYPE_PLANES:
            //    objDrawFn = Draw.draw_plane
            //    break
            case GDTypes.OBJ_TYPE_VERTICES:
                objDrawFn = Draw.nop_obj_draw
                break
            case GDTypes.OBJ_TYPE_CAMERAS:
                objDrawFn = Draw.draw_camera
                break
            case GDTypes.OBJ_TYPE_FACES:
                objDrawFn = Draw.draw_face
                break
            case GDTypes.OBJ_TYPE_MATERIALS:
                objDrawFn = Draw.draw_material
                break
            case GDTypes.OBJ_TYPE_LIGHTS:
                objDrawFn = Draw.draw_light
                break
            case GDTypes.OBJ_TYPE_WEIGHTS:
                objDrawFn = Draw.nop_obj_draw
                break
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

    sprint_obj_id(objheader) {
        switch (objheader.type) {
            case GDTypes.OBJ_TYPE_JOINTS:
                return `j${objheader.obj.id} `
            case GDTypes.OBJ_TYPE_NETS:
                return `net(no id) `
            default:
                console.log(objheader.type)
                throw "need to add default type -  Objects - sprint_obj_id"  
        }
    }

    make_group(count, args) {
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

        let curObj

        args.forEach(vargObj => {
            if (vargObj == null || vargObj.header == null) {
                throw "something not right in Objects:: make_group"
            }
            curObj = vargObj.header
            newGroup.groupObjTypes |= curObj.type
            this.addto_group(newGroup, vargObj.header)
        })

        //let idStrBuf = ""

        let curLink = newGroup.link1C
        while (curLink) {
            curObj = curLink.obj
            //idStrBuf = this.sprint_obj_id(curObj)  not needed - just for debug
            curLink = curLink.next
        }

        return newGroup
    }

    reset_nets_and_gadgets(group) {
        Nets.func_80193848(group)
        //Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_GADGETS, OldMenu.reset_gadget, group, OldMenu)
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
            this.reset_nets_and_gadgets(parts)
        }

        Object.assign(newView, {
            unk78: 0,
            animInfo: a2,
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

        if (objheader.obj == undefined) throw "error trying to add undefined object to group"

        if (group.link1C == null) {
            group.link1C = this.make_link_to_obj(null, objheader)
            group.link20 = group.link1C
        } else {
            group.link20 = this.make_link_to_obj(group.link20, objheader)
        }

        group.groupObjTypes |= objheader.type
        group.objCount++

    }

    addto_groupfirst(group, objheader) {

        if (group.link1C == null) {
            group.link1C = this.make_link_to_obj(null, objheader)
            group.link20 = group.link1C
        } else {
            let newLink = this.make_link_to_obj(null, objheader)
            group.link1C.prev = newLink
            newLink.next = group.link1C
            group.link1C = newLink
        }

        group.groupObjTypes |= objheader.type
        group.objCount++

    }

    apply_to_obj_types_in_group(types, fn, group, callingClassObject) {
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
            linkedObjType = linkedObj.header.type

            if (linkedObjType == GDTypes.OBJ_TYPE_GROUPS) {
                fnAppliedCount += this.apply_to_obj_types_in_group(types, fn, linkedObj)
            }

            if (linkedObjType & types) {
                fn.call(callingClassObject, linkedObj)
                fnAppliedCount++
            }
            curLink = curLink.next
        }

        return fnAppliedCount
    }

    func_8017F054(a0_objheader, a1_objheader) {

        const sp1C = { x: 0.0, y: 0.0, z: 0.0 }

        if (a1_objheader) {

            Dynlist.set_cur_dynobj(a1_objheader.obj)
            const sp50 = Dynlist.d_get_matrix_ptr()
            const sp44 = Dynlist.d_get_rot_mtx_ptr()

            Dynlist.set_cur_dynobj(a0_objheader.obj)
            const sp4C = Dynlist.d_get_idn_mtx_ptr()
            const sp40 = Dynlist.d_get_rot_mtx_ptr()


            Dynlist.d_get_scale(sp1C)
            const sp48 = Dynlist.d_get_matrix_ptr()

            gd_mult_mat4f(sp4C, sp50, sp48)
            gd_mult_mat4f(sp4C, sp44, sp40)
            gd_scale_mat4f_by_vec3f(sp40, sp1C)


        } else {
            Dynlist.set_cur_dynobj(a0_objheader.obj)
            const sp48 = Dynlist.d_get_matrix_ptr()
            const sp4C = Dynlist.d_get_idn_mtx_ptr()
            const sp44 = Dynlist.d_get_rot_mtx_ptr()

            Dynlist.d_get_scale(sp1C)
            gd_set_identity_mat4(sp48)
            gd_copy_mat4f(sp4C, sp44)
            gd_scale_mat4f_by_vec3f(sp44, sp1C)

        }

        Dynlist.set_cur_dynobj(a0_objheader.obj)
        const curGroup = Dynlist.d_get_att_objgroup()

        if (curGroup) {
            let curLink = curGroup.link1C
            while (curLink) {
                this.func_8017F054(curLink.obj.header, a0_objheader)
                curLink = curLink.next
            }
        }

    }
}

export const ObjectsInstance = new Objects()