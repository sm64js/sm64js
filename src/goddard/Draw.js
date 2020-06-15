import * as GDTypes from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { GoddardRendererInstance as Renderer } from "./GoddardRenderer"
import { GoddardMainInstance as Main } from "./GoddardMain"
import { G_MTX_PROJECTION, G_MTX_MUL, G_MTX_PUSH, G_MTX_MODELVIEW, G_MTX_LOAD } from "../include/gbi"
import { gd_create_rot_matrix } from "./gd_math"


const RENDER_SCENE = 26 ///< render the primitives to screen
const FIND_PICKS = 27    ///< only check position of primitives relative to cursor click

class Draw {
    constructor() {
        this.sUpdateViewState = {
            unreadCounter: 0,
            mtlDlNum: 0,
            shapesDrawn: 0
        }
    }

    nop_obj_draw() { }

    drawscene(process, interactables, lightgrp) {
        this.sUnreadShapeFlag = 0
        this.sUpdateViewState.unreadCounter = 0

        Renderer.set_gd_mtx_parameters(G_MTX_PROJECTION | G_MTX_MUL | G_MTX_PUSH)
        if (this.sUpdateViewState.view.unk38 == 1) {
            Renderer.gd_create_perspective_matrix(
                this.sUpdateViewState.view.clipping.z,
                this.sUpdateViewState.view.lowerRight.x / this.sUpdateViewState.view.lowerRight.y,
                this.sUpdateViewState.view.clipping.x,
                this.sUpdateViewState.view.clipping.y
            )
        } else {
            throw "not implemented this"
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
            Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_NETS, this.apply_obj_draw_fn, interactables, this)
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

    draw_shape(shape, flag, c, d, e, f, g, h, i, j, k, l, m, n, colorIdx, rotMtx) {

        console.log(shape)
        console.log(flag)

        console.log(g)
        console.log(k)
        console.log(m)

        console.log(colorIdx)

        console.log(rotMtx)

        throw "draw first shape"
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
        if (obj.header.drawFlags & GDTypes.OBJ_NOT_DRAWABLE) return

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
            throw "more implementation in draw_shape_faces"
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
            while (link && link.obj) {
                if (link.obj.type == GDTypes.OBJ_TYPE_VERTICES || link.obj.type == GDTypes.OBJ_TYPE_PARTICLES) {
                    if (linkVtxIdx++ == face.vertices[i]) break
                }
                link = link.next
            }

            if (link == null || link.obj == null) {
                throw "fatal Vertex not found"
            }
            face.vertices[i] = link.obj.obj
        }
        Shapes.calc_face_normal(face)
    }

    calc_vtx_normal(vtx, facegrp) {
        vtx.normal = { x: 0.0, y: 0.0, z: 0.0 }
        let facesAdded = 0
        let faceLink = facegrp.link1C
        while (faceLink && faceLink.obj) {
            const curFace = faceLink.obj
            curFace.obj.vertices.forEach(vertex => {
                if (vertex == vtx) {
                    vtx.normal.x += curFace.obj.normal.x
                    vtx.normal.y += curFace.obj.normal.y
                    vtx.normal.z += curFace.obj.normal.z
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
            this.find_thisface_verts(curFace.obj, vtxgrp)
            faceLink = faceLink.next
        }

        let vtxLink = vtxgrp.link1C
        while (vtxLink) {
            vtx = vtxLink.obj
            this.calc_vtx_normal(vtx.obj, facegrp)
            vtxLink = vtxLink.next
        }

    }

    map_face_materials(faces, mtls) {

        let linkFaces = faces.link1C
        while (linkFaces) {
            const face = linkFaces.obj.obj
            let linkMtls = mtls.link1C
            let mtl
            while (linkMtls) {
                mtl = linkMtls.obj.obj
                if (mtl.id == face.mtlId) break
                linkMtls = linkMtls.next
            }

            if (linkMtls) face.mtl = mtl 

            linkFaces = linkFaces.next
        }

    }
}

export const DrawInstance = new Draw()