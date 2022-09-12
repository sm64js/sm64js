import * as GDTypes from "./gd_types"
import * as Gbi from "../include/gbi"
import { ObjectsInstance as Objects } from "./Objects"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { GoddardRendererInstance as Renderer } from "./GoddardRenderer"
import { GoddardMainInstance as Main } from "./GoddardMain"
import { NetsInstance as Nets } from "./Nets"
import { G_MTX_PROJECTION, G_MTX_MUL, G_MTX_PUSH, G_MTX_MODELVIEW, G_MTX_LOAD } from "../include/gbi"
import { gd_create_rot_matrix, gd_normalize_vec3f, gd_set_identity_mat4, gd_rotate_and_translate_vec3f } from "./gd_math"


const RENDER_SCENE = 26 ///< render the primitives to screen
const FIND_PICKS = 27    ///< only check position of primitives relative to cursor click

class Draw {
    constructor() {
        this.sUpdateViewState = {
            unreadCounter: 0,
            mtlDlNum: 0,
            shapesDrawn: 0
        }

        this.sLightDlCounter = 1
        this.sLightPositionCache = new Array(8).fill(0).map(() => { return { x: 0, y: 0, z: 0 } })
        this.sPhongLightPosition = { x: 0, y: 0, z: 0 }
    }

    nop_obj_draw() { }

    drawscene(process, interactables, lightgrp) {
        this.sUnreadShapeFlag = 0
        this.sUpdateViewState.unreadCounter = 0

        Renderer.set_gd_mtx_parameters(G_MTX_PROJECTION | G_MTX_MUL | G_MTX_PUSH)
        if (this.sUpdateViewState.view.animInfo == 1) {
            Renderer.gd_create_perspective_matrix(
                this.sUpdateViewState.view.clipping.z,
                this.sUpdateViewState.view.lowerRight.x / this.sUpdateViewState.view.lowerRight.y,
                this.sUpdateViewState.view.clipping.x,
                this.sUpdateViewState.view.clipping.y
            )
        } else {
            throw "not implemented this"
        }

        if (lightgrp) {
            Renderer.set_gd_mtx_parameters(Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_PUSH)
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_LIGHTS | GDTypes.OBJ_TYPE_PARTICLES, this.apply_obj_draw_fn, lightgrp, this)
            Renderer.set_gd_mtx_parameters(Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        }

        if (this.gViewUpdateCamera) {
            this.draw_camera(this.gViewUpdateCamera)
        } else {
            throw "not implemented this"
        }

        Renderer.set_gd_mtx_parameters(G_MTX_MODELVIEW | G_MTX_LOAD | G_MTX_PUSH)

        this.sSceneProcessType = process

        this.sNumActiveLights = 1

        if (this.sSceneProcessType == FIND_PICKS) {
            throw "not implemented find picks yet"
        } else {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_NETS | GDTypes.OBJ_TYPE_PARTICLES, this.apply_obj_draw_fn, interactables, this)
        }
    }

    draw_light(light) {

        let shape

        if (this.sSceneProcessType == FIND_PICKS) return

        this.sLightColours = { ...light.colour }

        if (light.flags & GDTypes.LIGHT_UNK02) {
            const sp54 = new Array(4).fill(0).map(() => new Array(4).fill(0))
            gd_set_identity_mat4(sp54)
            const sp94 = { x: -light.unk80.x, y: -light.unk80.y, z: -light.unk80.z }
            gd_create_origin_lookat(sp54, sp94, 0.0)
            shape = Shapes.D_801A82E4
        } else {
            shape = light.unk9C.target
            if (++this.sLightDlCounter >= 17) {
                this.sLightDlCounter = 1
            }
            shape.gdDls[2] = this.sLightDlCounter
        }

        this.draw_shape_2d(shape, 2, 1.0, 1.0, 1.0, light.position.x, light.position.y, light.position.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1, 0)

    }

    draw_particle(ptc) {

        if (ptc.unk5C > 0) {
            const white = { r: 255.0, g: 255.0, b: 255.0 }
            const black = { r: 0.0, g: 0.0, b: 0.0 }
            const sp58 = ptc.unk5C / 10.0
            this.sLightColours.r = (white.r - black.r) * sp58 + black.r
            this.sLightColours.g = (white.g - black.g) * sp58 + black.g
            this.sLightColours.b = (white.b - black.b) * sp58 + black.b
        } else {
            this.sLightColours.r = 0.0
            this.sLightColours.g = 0.0
            this.sLightColours.b = 0.0
        }

        if (ptc.unk5C > 0) {
            ptc.unk1C.gdDls[2] = ptc.unk5C
            this.draw_shape_2d(ptc.unk1C, 2, 1.0, 1.0, 1.0, ptc.unk20.x, ptc.unk20.y, ptc.unk20.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1, 0)
        }
        if (ptc.unk60 == 3) {
            if (ptc.unk6C) this.draw_group(ptc.unk6C)
        }
    }

    draw_camera(cam) {
        let sp44 = { x: 0.0, y: 0.0, z: 0.0 }

        if (cam.unk30) {
            throw "not implemented - draw camera"
        } else {
            sp44 = { ...cam.unk34 }
        }

        Renderer.func_8019F318(cam, cam.unk14.x, cam.unk14.y, cam.unk14.z, sp44.x, sp44.y, sp44.z, cam.unkA4)
    }

    set_view_update_camera(cam) {
        if (this.gViewUpdateCamera) return
        this.gViewUpdateCamera = cam
    }

    update_view(view) {
        this.sUpdateViewState.shapesDrawn = 0
        this.sUpdateViewState.unused18 = 0

        this.gViewUpdateCamera = null
        if (view.components) {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_CAMERAS, this.set_view_update_camera, view.components, this)
            view.activeCam = this.gViewUpdateCamera

            if (view.activeCam) {
                this.gViewUpdateCamera.unk18C = view
            }
        }


        if (view.flags & GDTypes.VIEW_MOVEMENT) {
            Objects.proc_view_movement(view)
            this.gViewUpdateCamera = view.activeCam
        }

        this.sUpdateViewState.view = view
        Renderer.set_active_view(view)
        view.gdDlNum = Renderer.gd_startdisplist(8)
        //Renderer.start_view_dl(this.sUpdateViewState.view) TODO
        //gd_shading(9) TODO

        if (view.components) {
            this.drawscene(RENDER_SCENE, this.sUpdateViewState.view.components, this.sUpdateViewState.view.lights)
        }

        Renderer.gd_enddlsplist_parent()

    }

    draw_material(mtl) {

        let mtlType = mtl.type

        if (mtlType == GDTypes.GD_MTL_SHINE_DL) {
            if (this.sPhongLight && this.sPhongLight.unk30 > 0.0) {
                if (this.gViewUpdateCamera) {
                    Renderer.func_801A0478(mtl.gddlNumber, this.gViewUpdateCamera, this.sPhongLight.position, this.sLightPositionOffset, this.sPhongLightPosition, this.sPhongLight.colour)
                } else throw "should not be here - draw material"
            } else {
                mtlType = GDTypes.GD_MTL_BREAK
            }
        }

        if (!this.sUseSelectedColor) {
            Renderer.func_801A086C(mtl.gddlNumber, mtl.Kd, mtlType)
        } else {
            Renderer.func_801A086C(mtl.gddlNumber, this.sSelectedColour, GDTypes.GD_MTL_LIGHTS)
        }

    }

    Proc8017A980(light) {

        light.colour = {
            r: light.diffuse.r * light.unk30,
            g: light.diffuse.g * light.unk30,
            b: light.diffuse.b * light.unk30
        }

        this.sLightPositionCache[light.id].x = light.position.x - this.sLightPositionOffset.x
        this.sLightPositionCache[light.id].y = light.position.y - this.sLightPositionOffset.y
        this.sLightPositionCache[light.id].z = light.position.z - this.sLightPositionOffset.z
        gd_normalize_vec3f(this.sLightPositionCache[light.id])
        if (light.flags & GDTypes.LIGHT_UNK20) {
            this.sPhongLightPosition.x = this.sLightPositionCache[light.id].x
            this.sPhongLightPosition.y = this.sLightPositionCache[light.id].y
            this.sPhongLightPosition.z = this.sLightPositionCache[light.id].z
            this.sPhongLight = light
        }

        let sp24 = light.unk30
        if (light.flags & GDTypes.LIGHT_UNK02) {
            throw "more implementation needed in Draw - Proc8017A980"
/*            console.log(light.unk80)
            let sp20 = - gd_dot_vec3f(this.sLightPositionCache[light.id], light.unk80)*/
        }
        Renderer.set_light_id(light.id)
        Renderer.gd_setproperty(GDTypes.GD_PROP_DIFUSE_COLOUR, light.diffuse.r * sp24, light.diffuse.g * sp24, light.diffuse.b * sp24)
        Renderer.gd_setproperty(GDTypes.GD_PROP_LIGHT_DIR,
            this.sLightPositionCache[light.id].x,
            this.sLightPositionCache[light.id].y,
            this.sLightPositionCache[light.id].z,
        )
        Renderer.gd_setproperty(GDTypes.GD_PROP_LIGHTING, 2.0, 0.0, 0.0)
    }

    update_shaders(shape, offset) {
        Renderer.stash_current_gddl()
        this.sLightPositionOffset = { ...offset }
        this.sPhongLight = null
        if (this.gGdLightGroup) {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_LIGHTS, this.Proc8017A980, this.gGdLightGroup, this)
        }
        if (shape.mtlGroup) {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_MATERIALS, this.apply_obj_draw_fn, shape.mtlGroup, this)
        }
        Renderer.pop_gddl_stash()
    }

    draw_shape(shape, flag, c, d, e, f, g, h, i, j, k, l, m, n, colorIdx, rotMtx) {

        this.sUpdateViewState.shapesDrawn++

        if (shape == null) return

        let sp1C = { x: 0.0, y: 0.0, z: 0.0 }

        if (flag & 2) {
            Renderer.translate_load_mtx_gddl(f, g, h)
            sp1C.x += f
            sp1C.y += g
            sp1C.z += h
        }

        if ((flag & 0x10) && rotMtx) {
            Renderer.add_mat4_load_to_dl(rotMtx)
            sp1C.x += rotMtx[3][0]
            sp1C.y += rotMtx[3][1]
            sp1C.z += rotMtx[3][2]
        }

        if (flag & 8) {
            if (m != 0.0) Renderer.func_8019F2C4(m, 121)
            if (l != 0.0) Renderer.func_8019F2C4(l, 120)
            if (n != 0.0) Renderer.func_8019F2C4(n, 122)
        }

        if (colorIdx != 0) {
            throw "more implementation needed in draw shape"
        } else {
            this.sUseSelectedColor = false
            this.sSelectedColour = null
        }

        if (this.sNumActiveLights != 0 && shape.mtlGroup) {
            if (rotMtx) {
                sp1C = { x: rotMtx[3][0], y: rotMtx[3][1], z: rotMtx[3][2] }
            } else {
                sp1C = { x: 0.0, y: 0.0, z: 0.0 }
            }
            this.update_shaders(shape, sp1C)
        }

        if (flag & 4) {
            Renderer.translate_load_mtx_gddl(i, j, k)
        }

        if (flag & 1) {
            Renderer.func_8019F258(c, d, e)
        }

        this.draw_shape_faces(shape)
        this.sUseSelectedColor = false

    }

    draw_shape_2d(shape, flag, c, d, e, f, g, h, i, j, k, l, m, n, color, p) {
        this.sUpdateViewState.shapesDrawn++

        if (shape == null) return

        if (flag & 2) {
            const sp1C = { x: f, y: g, z: h }
            if (this.gViewUpdateCamera) {
                gd_rotate_and_translate_vec3f(sp1C, this.gViewUpdateCamera.unkE8)
            }
            Renderer.translate_load_mtx_gddl(sp1C.x, sp1C.y, sp1C.z)
        }
        this.draw_shape_faces(shape)
    }

    draw_joint(joint) {
        const boneShape = joint.unk20
        if (boneShape == null) return

        throw "more implementation needed in draw joint"
    }

    draw_net(net) {
        let netColor
        if (this.sSceneProcessType == FIND_PICKS) return

        if (net.header.drawFlags & GDTypes.OBJ_USE_ENV_COLOUR) {
            netColor = 8
        } else {
            netColor = net.unk40
        }


        if (net.unk1A8) {
            this.draw_shape(net.unk1A8, 0x10, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, netColor, net.mat168)
        }

        if (net.unk1C8) {
            this.draw_group(net.unk1C8)
        }
    }

    apply_obj_draw_fn(obj) {
        if (obj.header == null) {
            throw "apply_obj_draw_fn - obj is null"
        }

        /// TODO fix Joints being sent here with 0 drawflags, causing draw
        if (obj.header.type == 4) return

        if (obj.header.drawFlags & GDTypes.OBJ_NOT_DRAWABLE) return

        //TODO remove this skipper
        if (obj.header.objDrawFn == null) { console.log("skipping undefined draw function  type: " + obj.header.type); return }
        obj.header.objDrawFn.call(this, obj)
    }

    draw_group(grp) {
        if (grp == null) {
            throw "draw group - group is null"
        }

        Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_ALL, this.apply_obj_draw_fn, grp, this)

    }

    draw_face(face) {

        if (!this.sUseSelectedColor && face.mtlId >= 0) {
            if (face.mtl) {
                let i = face.mtl.gddlNumber
                if (i != 0) {
                    if (i != this.sUpdateViewState.mtlDlNum) {
                        Renderer.func_801A0070()
                        Renderer.branch_cur_dl_to_num(i)
                        this.sUpdateViewState.mtlDlNum = i
                    }
                }
            }
        }

        Renderer.check_tri_display(face.vtxCount)

        if (!Main.gGdUseVtxNormal) {
            throw "draw face - Not using Vtx Normal"
        }

        face.vertices.forEach(vtx => {
            if (Main.gGdUseVtxNormal) {
                Renderer.set_Vtx_norm_buf_2(vtx.normal)
            }

            const gbiVtx = Renderer.make_Vtx_if_new(vtx.pos.x, vtx.pos.y, vtx.pos.z, vtx.alpha)

            if (gbiVtx) {
                vtx.gbiVerts = Objects.make_vtx_link(vtx.gbiVerts, gbiVtx)
            }
        })

        Renderer.func_8019FEF0()

    }

    draw_shape_faces(shape) {
        this.sUpdateViewState.mtlDlNum = 0
        this.sUpdateViewState.unreadCounter = 0

        this.sUnreadShapeFlag = shape.flag & 1

        Renderer.func_801A02B8(shape.unk58)

        if (shape.gdDls[Renderer.gGdFrameBuf] != 0) {
            Renderer.func_8019BD0C(shape.gdDls[Renderer.gGdFrameBuf], shape.gdDls[2])
        } else if (shape.faceGroup) {
            Renderer.func_801A0038()
            this.draw_group(shape.faceGroup)
            Renderer.func_801A0070()
        } 

    }

    setup_lights() {
        Renderer.sNumLights = 2
        Renderer.gd_setproperty(GDTypes.GD_PROP_AMB_COLOUR, 0.5, 0.5, 0.5)
        Renderer.gd_setproperty(GDTypes.GD_PROP_CULLING, 1.0, 0.0, 0.0)
    }

    create_mtl_gddl_if_empty(mtl) {
        if (mtl.gddlNumber == 0) {
            mtl.gddlNumber = Renderer.create_mtl_gddl(mtl.type)
        }
    }

    create_shape_mtl_gddls(shape) {
        if (shape.mtlGroup) {
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_MATERIALS, this.create_mtl_gddl_if_empty, shape.mtlGroup, this)
        }
    }

    create_shape_gddl(shape) {
        this.create_shape_mtl_gddls(shape)
        const shapedl = Renderer.gd_startdisplist(7)
        if (shapedl == 0) return -1

        this.setup_lights()
        this.sUseSelectedColor = false

        if (shape.unk3C == 0) this.draw_shape_faces(shape)

        Renderer.gd_enddlsplist_parent()

        shape.gdDls[0] = shapedl
        shape.gdDls[1] = shapedl

        ///debug printing here
    }

    create_gddl_for_shapes(grp) {
        Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_SHAPES, this.create_shape_gddl, grp, this)
    }

    find_thisface_verts(face, verts) {
        for (let i = 0; i < face.vertices.length; i++) {
            let link = verts.link1C
            let linkVtxIdx = 0
            while (link) {
                if (link.obj.header.type == GDTypes.OBJ_TYPE_VERTICES || link.obj.header.type == GDTypes.OBJ_TYPE_PARTICLES) {
                    if (linkVtxIdx++ == face.vertices[i]) break
                }
                link = link.next
            }

            if (link == null) {
                throw "fatal Vertex not found"
            }
            face.vertices[i] = link.obj
        }
        Shapes.calc_face_normal(face)
    }

    calc_vtx_normal(vtx, facegrp) {
        vtx.normal = { x: 0.0, y: 0.0, z: 0.0 }
        let facesAdded = 0
        let faceLink = facegrp.link1C
        while (faceLink && faceLink.obj) {
            const curFace = faceLink.obj
            curFace.vertices.forEach(vertex => {
                if (vertex == vtx) {
                    vtx.normal.x += curFace.normal.x
                    vtx.normal.y += curFace.normal.y
                    vtx.normal.z += curFace.normal.z
                    facesAdded++
                }
            })
            faceLink = faceLink.next
        }

        if (facesAdded != 0) {
            vtx.normal.x /= facesAdded
            vtx.normal.y /= facesAdded
            vtx.normal.z /= facesAdded
        }
    }

    map_vertices(facegrp, vtxgrp) {
        let curFace, vtx
        let faceLink = facegrp.link1C
        while (faceLink) {
            curFace = faceLink.obj
            this.find_thisface_verts(curFace, vtxgrp)
            faceLink = faceLink.next
        }

        let vtxLink = vtxgrp.link1C
        while (vtxLink) {
            vtx = vtxLink.obj
            this.calc_vtx_normal(vtx, facegrp)
            vtxLink = vtxLink.next
        }

    }

    map_face_materials(faces, mtls) {
        let linkFaces = faces.link1C
        while (linkFaces) {
            const face = linkFaces.obj
            let linkMtls = mtls.link1C
            let mtl
            while (linkMtls) {
                mtl = linkMtls.obj
                if (mtl.id == face.mtlId) break
                linkMtls = linkMtls.next
            }

            if (linkMtls) face.mtl = mtl 

            linkFaces = linkFaces.next
        }

    }
}

export const DrawInstance = new Draw()