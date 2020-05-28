import * as MathUtil from "../engine/math_util"
import { ObjectsInstance as Objects } from "./Objects"
import * as GDTypes from "./gd_types"


class GoddardRenderer {
    constructor() {
        this.sLightScaleColours = [{ r: 0.0, g: 0.0, b: 0.0 }, { r: 0.0, g: 0.0, b: 0.0 }]
        this.sLightDirections = [{ x: 0.0, y: 0.0, z: 0.0 }, { x: 0.0, y: 0.0, z: 0.0 }]
        this.sDynDlSet1 = [null, null]
        this.sMHeadMainDls = [null, null]
        this.D_801BD7C8 = new Array(3).fill(0).map(() => new Array(2).fill(0))
    }


    new_gd_dl(id, gfxs, verts, mtxs, lights, vps) {

        const dl = {
            id,
            parent: null,
            vtx: [],

            mtx: [],

            light: [],

            gfx: [],

            dlptr: null,

            vp: [],

            id: 0,
            number: 0,

        }

        if (verts == 0) verts = 1
        dl.vtx = new Array(verts)

        if (mtxs == 0) mtxs = 1
        dl.mtx = new Array(mtxs)

        if (lights == 0) lights = 1
        dl.light = new Array(lights)

        if (gfxs == 0) gfxs = 1
        dl.gfx = new Array(gfxs)

        if (vps == 0) vps = 1
        dl.vp = new Array(vps)

        return dl

    }

    create_child_gdl(id, srcDL) {
        const newDl = {
            parent: srcDL,
            id,
            vtx: [],
            mtx: [],
            light: [],
            gfx: [],
            vp: [],
        }


        return newDl
    }

    gd_init() {
        this.D_801BB184 = 0xff
        this.D_801A867C = 0
        this.D_801A8680 = 0
        this.D_801A86A0 = 0
        this.gGdFrameBuf = 0
        this.D_801A86BC = 1
        this.sItemsInMenu = 0
        this.D_801A86F0 = 0
        this.sNewZPresses = 0
        this.sGdDlCount = 0
        this.D_801A8674 = 0
        this.sLightId = 0
        this.sAmbScaleColour = { r: 0.0, g: 0.0, b: 0.0 }

        for (let i = 0; i < 2; i++) {
            this.sLightScaleColours[i] = { r: 1.0, g: 0.0, b: 0.0 }
            this.sLightDirections[i] = { x: 0.0, y: 120.0, z: 0.0 }
        }

        this.sNumLights = 2
        this.sIdnMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.mtxf_identity(this.sIdnMtx)
        Objects.null_obj_lists()

        this.sStaticDl = this.new_gd_dl(0, 1900, 4000, 1, 300, 8)
        this.sDynDlSet1[0] = this.new_gd_dl(1, 600, 10, 200, 10, 3)
        this.sDynDlSet1[1] = this.new_gd_dl(1, 600, 10, 200, 10, 3)

        this.sMHeadMainDls[0] = this.new_gd_dl(1, 100, 0, 0, 0, 0)
        this.sMHeadMainDls[1] = this.new_gd_dl(1, 100, 0, 0, 0, 0)

        this.D_801BD7C8.forEach(x => {
            x[0] = this.create_child_gdl(1, this.sDynDlSet1[0])
            x[1] = this.create_child_gdl(1, this.sDynDlSet1[1])
        })

        this.sScreenView2 = Objects.make_view("screenview2", (GDTypes.VIEW_2_COL_BUF | GDTypes.VIEW_UNK_1000 | GDTypes.VIEW_COLOUR_BUF | GDTypes.VIEW_Z_BUF), 0, 0, 0, 320, 240, null)
    }

    gdm_setup() {
        this.gd_init()
    }
}

export const GoddardRendererInstance = new GoddardRenderer()
