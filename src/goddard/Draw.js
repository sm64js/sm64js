import * as GDTypes from "./gd_types"
import { ObjectsInstance as Objects } from "./Objects"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { GoddardRendererInstance as Renderer } from "./GoddardRenderer"
import { GoddardMainInstance as Main } from "./GoddardMain"

class Draw {
    constructor() {
        this.sUpdateViewState = {
            unreadCounter: 0,
            mtlDlNum: 0,
            shapesDrawn: 0
        }
    }

    nop_obj_draw() { }

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