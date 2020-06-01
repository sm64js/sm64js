import * as GDTypes from "./gd_types"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"

class Draw {
    constructor() {

    }

    nop_obj_draw() { }

    draw_group() {
        throw "unimplemented draw group"
    }

    draw_face() {
        throw "unimplemented draw face"
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
}

export const DrawInstance = new Draw()