import * as MathUtil from "../engine/math_util"
import { ObjectsInstance as Objects } from "./Objects"
import * as GDTypes from "./gd_types"
import { ShapeHelperInstance as Shapes } from "./ShapeHelper"
import { NetsInstance as Nets } from "./Nets"
import { DrawInstance as Draw } from "./Draw"
import * as Gbi from "../include/gbi"
import { gd_mat4f_lookat, gd_copy_mat4f } from "./gd_math"

const MAX_GD_DLS = 1000

export const gd_texture_red_star_0 = []

export const gd_texture_red_star_1 = []

export const gd_texture_red_star_2 = []

export const gd_texture_red_star_3 = []

export const gd_texture_red_star_4 = []

export const gd_texture_red_star_5 = []

export const gd_texture_red_star_6 = []

export const gd_texture_red_star_7 = []

export const gd_texture_white_star_0 = []

export const gd_texture_white_star_1 = []

export const gd_texture_white_star_2 = []

export const gd_texture_white_star_3 = []

export const gd_texture_white_star_4 = []

export const gd_texture_white_star_5 = []

export const gd_texture_white_star_6 = []

export const gd_texture_white_star_7 = []

export const gd_texture_sparkle_0 = []

export const gd_texture_sparkle_1 = []

export const gd_texture_sparkle_2 = []

export const gd_texture_sparkle_3 = []

export const gd_texture_sparkle_4 = []

export const gd_texture_mario_face_shine = []

const gd_vertex_sparkle = [
    { pos: [-32, 0, 0], flag: 0, tc: [0, 1984], color: [0x00, 0x00, 0x7F, 0x00] },
    { pos: [32, 0, 0], flag: 0, tc: [1984, 1984], color: [0x00, 0x00, 0x7F, 0x00] },
    { pos: [32, 64, 0], flag: 0, tc: [1984, 0], color: [0x00, 0x00, 0x7F, 0x00] },
    { pos: [-32, 64, 0], flag: 0, tc: [0, 0], color: [0x00, 0x00, 0x7F, 0x00] }
]

const gd_vertex_star = [
    { pos: [-64, 0, 0], flag: 0, tc: [0, 992], color: [0x00, 0x00, 0x7F] },
    { pos: [64, 0, 0], flag: 0, tc: [992, 992], color: [0x00, 0x00, 0x7F] },
    { pos: [64, 128, 0], flag: 0, tc: [992, 0], color: [0x00, 0x00, 0x7F] },
    { pos: [-64, 128, 0], flag: 0, tc: [0, 0], color: [0x00, 0x00, 0x7F] }
]

const gd_dl_star = [
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
    Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN | Gbi.G_TEXTURE_GEN_LINEAR),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPVertex(gd_vertex_star, 4, 0),
    ...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_INTER_NOOP2),
    Gbi.gsSPEndDisplayList(),
]

const gd_dl_sparkle = [
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA_PRIM),
    Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN | Gbi.G_TEXTURE_GEN_LINEAR),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPVertex(gd_vertex_sparkle, 4, 0),
    ...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_INTER_NOOP2),
    Gbi.gsSPEndDisplayList()
]

const gd_dl_red_star_0 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_0),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_1 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_1),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_2 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_2),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_3 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_3),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_4 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_4),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_5 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_5),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_6 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_6),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_red_star_7 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_red_star_7),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_0 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_0),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_1 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_1),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_2 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_2),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_3 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_3),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_4 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_4),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_5 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_5),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_6 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_6),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_silver_star_7 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_white_star_7),
    Gbi.gsSPBranchList(gd_dl_star)
]

const gd_dl_sparkle_red_color = [
    Gbi.gsDPSetPrimColor(0, 0, 255, 0, 0, 255),
    Gbi.gsSPEndDisplayList()
]

const gd_dl_sparkle_white_color = [
    Gbi.gsDPSetPrimColor(0, 0, 255, 255, 255, 255),
    Gbi.gsSPEndDisplayList(),
]


const gd_dl_red_sparkle_0 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_0),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_red_sparkle_1 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_1),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_red_sparkle_2 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_2),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_red_sparkle_3 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_3),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_red_sparkle_4 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_4),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_red_sparkle_4_dup = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_red_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_4),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_0 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_0),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_1 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_1),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_2 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_2),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_3 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_3),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_4 = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_4),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_dl_silver_sparkle_4_dup = [
    Gbi.gsSPDisplayList(gd_dl_sparkle_white_color),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, gd_texture_sparkle_4),
    Gbi.gsSPBranchList(gd_dl_sparkle)
]

const gd_red_star_dl_array = [
    gd_dl_red_star_0,
    gd_dl_red_star_0,
    gd_dl_red_star_1,
    gd_dl_red_star_1,
    gd_dl_red_star_2,
    gd_dl_red_star_2,
    gd_dl_red_star_3,
    gd_dl_red_star_3,
    gd_dl_red_star_4,
    gd_dl_red_star_4,
    gd_dl_red_star_5,
    gd_dl_red_star_5,
    gd_dl_red_star_6,
    gd_dl_red_star_6,
    gd_dl_red_star_7,
    gd_dl_red_star_7
]

const gd_silver_star_dl_array = [
    gd_dl_silver_star_0,
    gd_dl_silver_star_0,
    gd_dl_silver_star_1,
    gd_dl_silver_star_1,
    gd_dl_silver_star_2,
    gd_dl_silver_star_2,
    gd_dl_silver_star_3,
    gd_dl_silver_star_3,
    gd_dl_silver_star_4,
    gd_dl_silver_star_4,
    gd_dl_silver_star_5,
    gd_dl_silver_star_5,
    gd_dl_silver_star_6,
    gd_dl_silver_star_6,
    gd_dl_silver_star_7,
    gd_dl_silver_star_7,
]

const gd_red_sparkle_dl_array = [
    gd_dl_red_sparkle_4,
    gd_dl_red_sparkle_4,
    gd_dl_red_sparkle_3,
    gd_dl_red_sparkle_3,
    gd_dl_red_sparkle_2,
    gd_dl_red_sparkle_2,
    gd_dl_red_sparkle_1,
    gd_dl_red_sparkle_1,
    gd_dl_red_sparkle_0,
    gd_dl_red_sparkle_0,
    gd_dl_red_sparkle_4_dup,
    gd_dl_red_sparkle_4_dup,
]

const gd_silver_sparkle_dl_array = [
    gd_dl_silver_sparkle_4,
    gd_dl_silver_sparkle_4,
    gd_dl_silver_sparkle_3,
    gd_dl_silver_sparkle_3,
    gd_dl_silver_sparkle_2,
    gd_dl_silver_sparkle_2,
    gd_dl_silver_sparkle_1,
    gd_dl_silver_sparkle_1,
    gd_dl_silver_sparkle_0,
    gd_dl_silver_sparkle_0,
    gd_dl_silver_sparkle_4_dup,
    gd_dl_silver_sparkle_4_dup,
]


const gd_dl_mario_face_shine = [
    Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
    Gbi.gsSPTexture(0x07C0, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_BILERP),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_HILITERGBA),
    ...Gbi.gsDPLoadTextureBlock(gd_texture_mario_face_shine, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 32, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
    Gbi.gsSPEndDisplayList()
]


class GoddardRenderer {
    constructor() {
        this.sLightScaleColours = [{ r: 0.0, g: 0.0, b: 0.0 }, { r: 0.0, g: 0.0, b: 0.0 }]
        this.sLightDirections = [{ x: 0.0, y: 0.0, z: 0.0 }, { x: 0.0, y: 0.0, z: 0.0 }]
        this.sDynDlSet1 = [null, null]
        this.sMHeadMainDls = [null, null]
        this.sHilites = new Array(600).fill(0).map(() => { return { x1: 0, y1: 0, x2: 0, y2: 0 } })
        this.D_801BD7C8 = new Array(3).fill(0).map(() => new Array(2).fill(0))
        this.sGdDLArray = new Array(1000).fill(0).map(() => [])
        this.sVtxCvrtNormBuf = new Array(3).fill(0)
        this.sVtxCvrtTCBuf = new Array(2).fill(0)
        this.D_801BAF30 = new Array(13).fill(0).map(() => new Array(8).fill(0))
        this.sGdPerspTimer = 1.0
        this.jsId = 0
    }

    create_light_template_object() {
        return {
            ambient: { col: [ 0, 0, 0 ] },
            lights4: new Array(4).fill(0).map(() => { return { col: [0, 0, 0],  dir: [0, 0, 0] } })
        }
    }

    create_vertex_template_object() {
        return {
            pos: [0.0, 0.0, 0.0],
            flag: 0,
            tc: [0, 0],
            color: [0, 0, 0],
/*            normal: {
                pos: [0.0, 0.0, 0.0],
                flag: 0,
                tc: [0, 0],
                n: [0, 0, 0],
                a: 0
            }*/
        }
    }

    set_light_id(index) {
        this.sLightId = index
    }

    stash_current_gddl() {
        this.sGdDlStash = this.sCurrentGdDl
    }

    pop_gddl_stash() {
        this.sCurrentGdDl = this.sGdDlStash
    }

    reset_cur_dl_indices() {
        this.sMHeadMainDls[this.gGdFrameBuf].gfx.length = 0
        this.sCurrentGdDl = this.sDynDlSet1[this.gGdFrameBuf]
        this.sCurrentGdDl.gfx.length = 0
        this.sCurrentGdDl.vtx.length = 0
        this.sCurrentGdDl.mtx.length = 0
        this.sCurrentGdDl.vp.length = 0
        this.sCurrentGdDl.light.length = 0
    }

    reset_dlnum_indices(num) {
        this.sCurrentGdDl = this.sGdDLArray[num]
        this.sCurrentGdDl.gfx.length = 0
        this.sCurrentGdDl.vtx.length = 0
        this.sCurrentGdDl.mtx.length = 0
        this.sCurrentGdDl.vp.length = 0
        this.sCurrentGdDl.light.length = 0

/*        this.sCurrentGdDl.curVtxIdx = 0
        this.sCurrentGdDl.curMtxIdx = 0
        this.sCurrentGdDl.curLightIdx = 0
        this.sCurrentGdDl.curGfxIdx = 0
        this.sCurrentGdDl.curVpIdx = 0*/
    }

    branch_cur_dl_to_num(dlNum) {
/*        console.log(`current num: ${this.sCurrentGdDl.number} length: ${this.sCurrentGdDl.gfx.length}   linking to new: dlnum ${this.sGdDLArray[dlNum].number} at index: ${dlNum},  and  length ${this.sGdDLArray[dlNum].gfx.length}`)*/
        Gbi.gSPDisplayList(this.sCurrentGdDl.gfx, this.sGdDLArray[dlNum].gfx)
    }

    check_tri_display(vtxcount) {
        this.D_801A86C0 = this.sCurrentGdDl.vtx.length
        this.D_801BB0B4 = 0
        if (vtxcount != 3) throw "cant display no tris"

    }

    make_Vtx_if_new(x, y, z, alpha) {
        for (let i = this.D_801BB0CC; i < this.D_801BB0CC + this.D_801BB0BC; i++) {
            if (this.sCurrentGdDl.vtx[i].pos[0] == x) {
                if (this.sCurrentGdDl.vtx[i].pos[1] == y) {
                    if (this.sCurrentGdDl.vtx[i].pos[2] == z) {
                        this.D_801BAF30[this.D_801BB0C4][this.D_801BB0B4++] = i
                        return
                    }
                }
            }
        }

        this.D_801BB0BC++
        this.D_801BAF30[this.D_801BB0C4][this.D_801BB0B4++] = this.sCurrentGdDl.vtx.length;

        const newVertex = this.create_vertex_template_object()
        newVertex.pos[0] = x
        newVertex.pos[1] = y
        newVertex.pos[2] = z
        newVertex.flag = 0
        newVertex.tc[0] = this.sVtxCvrtTCBuf[0]
        newVertex.tc[1] = this.sVtxCvrtTCBuf[1]
        newVertex.color[0] = this.sVtxCvrtNormBuf[0]
        newVertex.color[1] = this.sVtxCvrtNormBuf[1]
        newVertex.color[2] = this.sVtxCvrtNormBuf[2]
        newVertex.color[3] = parseInt(alpha * 255.0)

        this.sCurrentGdDl.vtx.push(newVertex)
        return newVertex
    }

    set_Vtx_norm_buf_2(norm) {
        this.sVtxCvrtNormBuf[0] = norm.x * 127.0
        this.sVtxCvrtNormBuf[1] = norm.y * 127.0
        this.sVtxCvrtNormBuf[2] = norm.z * 127.0
    }

    gddl_is_loading_shine_dl(dlLoad) {
        if (dlLoad) {
            Gbi.gSPDisplayList(this.sCurrentGdDl.gfx, gd_dl_mario_face_shine)
        } else {
            Gbi.gSPTexture(this.sCurrentGdDl.gfx, 0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF)
            Gbi.gsDPSetCombineMode(this.sCurrentGdDl.gfx, Gbi.G_CC_SHADE)
        }
    }

    func_801A0478(idx, cam, arg2, arg3, arg4, colour) {
        const sp38 = 32.0
        const sp34 = 32.0

        if (idx >= 0xc8) {
            throw "too many hilites"
        }

        const hilite = this.sHilites[idx]

        Gbi.gDPSetPrimColor(this.sCurrentGdDl.gfx, 0, 0, colour.r * 255.0, colour.g * 255.0, colour.b * 255.0, 255)

        const sp40 = {
            z: cam.unkE8[0][2] + arg4.x,
            y: cam.unkE8[1][2] + arg4.y,
            x: cam.unkE8[2][2] + arg4.z
        }

        let sp3C = Math.sqrt(Math.pow(sp40.x, 2) + Math.pow(sp40.y, 2) + Math.pow(sp40.z, 2))

        if (sp3C > 0.1) {
            sp3C = 1.0 / sp3C

            sp40.x *= sp3C
            sp40.y *= sp3C
            sp40.z *= sp3C

            hilite.x1 = (((sp40.z * cam.unkE8[0][0]) + (sp40.y * cam.unkE8[1][0]) + (sp40.x * cam.unkE8[2][0])) * sp38 * 2.0) + (sp38 * 4.0)
            hilite.y1 = (((sp40.z * cam.unkE8[0][1]) + (sp40.y * cam.unkE8[1][1]) + (sp40.x * cam.unkE8[2][1])) * sp38 * 2.0) + (sp38 * 4.0)

        } else {
            hilite.x1 = sp38 * 2.0
            hilite.y1 = sp34 * 2.0
        }
    }

    func_8019BD0C(dlNum, gfxIdx) {
        let dl
        if (gfxIdx != 0) {
            dl = this.sGdDLArray[dlNum].dlptr[gfxIdx - 1]
        } else {
            dl = this.sGdDLArray[dlNum].gfx
        }

        Gbi.gSPDisplayList(this.sCurrentGdDl.gfx, dl)
    }

    func_801A0070() {
        if (this.D_801BB0BC != 0) {
            const vertices = this.sCurrentGdDl.vtx.slice(this.D_801BB0CC, this.D_801BB0CC + this.D_801BB0BC)
            if (vertices.length != this.D_801BB0BC) throw "gd render - sending vertices something is wrong"
            Gbi.gSPVertex(this.sCurrentGdDl.gfx, vertices, vertices.length, 0)
            for (let i = 0; i < this.D_801BB0C4; i++) {
                Gbi.gSP1Triangle(this.sCurrentGdDl.gfx, this.D_801BAF30[i][0] - this.D_801BB0CC, this.D_801BAF30[i][1] - this.D_801BB0CC,
                    this.D_801BAF30[i][2] - this.D_801BB0CC, 0)
            }
        }
        this.func_801A0038()
    }

    func_801A0038() {
        this.D_801BB0BC = 0
        this.D_801BB0C4 = 0
        this.D_801BB0CC = this.sCurrentGdDl.vtx.length
    }

    func_8019FEF0() {
        this.D_801BB0C4++
        if (this.D_801BB0BC >= 12) {
            this.func_801A0070()
            this.func_801A0038()
        }
        this.D_801BB018 = 0
    }

    func_801A1A00() {

        if ((this.sActiveView.flags & GDTypes.VIEW_ALLOC_ZBUF) != 0) {
            if (this.D_801BB184 != 0xff) {
                Gbi.gDPSetRenderMode(this.sCurrentGdDl.gfx, Gbi.G_RM_AA_ZB_XLU_SURF_SURF2)
            } else {
                Gbi.gDPSetRenderMode(this.sCurrentGdDl.gfx, Gbi.G_RM_AA_ZB_OPA_INTER_NOOP2)
            }
        } else {
            if (this.D_801BB184 != 0xff) {
                Gbi.gDPSetRenderMode(this.sCurrentGdDl.gfx, Gbi.G_RM_AA_XLU_SURF_SURF2)
            } else {
                Gbi.gDPSetRenderMode(this.sCurrentGdDl.gfx, Gbi.G_RM_AA_ZB_OPA_INTER_NOOP2)
            }
        }
    }

    func_801A02B8(arg0) {
        this.D_801BB184 = arg0 * 255.0
        this.func_801A1A00()
    }

    func_801A086C(id, colour, material) {

        let numLights = this.sNumLights
        const scaledColours = new Array(3).fill(0)
        const lightDir = new Array(3).fill(0)

        if (id > 0) {
            this.reset_dlnum_indices(id)
        }

        switch (material) {
            case GDTypes.GD_MTL_TEX_OFF:
                //gddl_is_loading_stub_dl(false) // does nothing
                //gddl_is_loading_stub_dl(false) // does nothing
                //gddl_is_loading_stub_dl(false) // does nothing
                //gddl_is_loading_stub_dl(false) // does nothing
                this.gddl_is_loading_shine_dl(false)
                this.gddl_is_loading_shine_dl(false)
                this.gddl_is_loading_shine_dl(false)
                this.gddl_is_loading_shine_dl(false)
                numLights = 2
                break
            case GDTypes.GD_MTL_BREAK: break
            case GDTypes.GD_MTL_SHINE_DL:
                this.gddl_is_loading_shine_dl(true)
                if (id >= 200) {
                    throw "too many hilites"
                }
                Gbi.gDPSetHilite1Tile(this.sCurrentGdDl.gfx, Gbi.G_TX_RENDERTILE, this.sHilites[id], 32, 32)
                break
            default: throw "not implemented material type: " + material
        }

        Gbi.gSPNumLights(this.sCurrentGdDl.gfx, numLights)

        scaledColours[0] = colour.r * this.sAmbScaleColour.r * 255.0
        scaledColours[1] = colour.g * this.sAmbScaleColour.g * 255.0
        scaledColours[2] = colour.b * this.sAmbScaleColour.b * 255.0

        const newLight = this.create_light_template_object()
        newLight.ambient.col[0] = scaledColours[0]
        newLight.ambient.col[1] = scaledColours[1]
        newLight.ambient.col[2] = scaledColours[2]

        for (let i = 0; i < numLights; i++) {
            scaledColours[0] = colour.r * this.sLightScaleColours[i].r * 255.0
            scaledColours[1] = colour.g * this.sLightScaleColours[i].g * 255.0
            scaledColours[2] = colour.b * this.sLightScaleColours[i].b * 255.0

            newLight.lights4[i].col[0] = scaledColours[0]
            newLight.lights4[i].col[1] = scaledColours[1]
            newLight.lights4[i].col[2] = scaledColours[2]

            lightDir[0] = this.sLightDirections[i].x
            lightDir[1] = this.sLightDirections[i].y
            lightDir[2] = this.sLightDirections[i].z

            newLight.lights4[i].dir[0] = lightDir[0]
            newLight.lights4[i].dir[1] = lightDir[1]
            newLight.lights4[i].dir[2] = lightDir[2]

            Gbi.gSPLight(this.sCurrentGdDl.gfx, newLight.lights4[i], i + 1)

        }

        //ambient light added last
        Gbi.gSPLight(this.sCurrentGdDl.gfx, newLight.ambient, numLights + 1) 

        this.sCurrentGdDl.light.push(newLight)
        Gbi.gSPEndDisplayList(this.sCurrentGdDl.gfx)

        return false
    }

    cpy_remaining_gddl(child, parent) {

/*        parent.gfx.push(...child.gfx)
        parent.mtx.push(...child.mtx)
        parent.light.push(...child.light)
        parent.vtx.push(...child.vtx)
        parent.vp.push(...child.vp)*/
        child.gfx.length = 0
        child.mtx.length = 0
        child.light.length = 0
        child.vtx.length = 0
        child.vp.length = 0

    }

    gd_enddlsplist_parent() {
        Gbi.gSPEndDisplayList(this.sCurrentGdDl.gfx)
/*        if (sCurrentGdDl -> parent != NULL) {
            sCurrentGdDl -> parent -> curVtxIdx = (sCurrentGdDl -> parent -> curVtxIdx + sCurrentGdDl -> curVtxIdx)
            sCurrentGdDl -> parent -> curMtxIdx = (sCurrentGdDl -> parent -> curMtxIdx + sCurrentGdDl -> curMtxIdx)
            sCurrentGdDl -> parent -> curLightIdx =
            (sCurrentGdDl -> parent -> curLightIdx + sCurrentGdDl -> curLightIdx)
            sCurrentGdDl -> parent -> curGfxIdx = (sCurrentGdDl -> parent -> curGfxIdx + sCurrentGdDl -> curGfxIdx)
            sCurrentGdDl -> parent -> curVpIdx = (sCurrentGdDl -> parent -> curVpIdx + sCurrentGdDl -> curVpIdx)
        }
        curDlIdx = sCurrentGdDl -> curGfxIdx;*/
    }

    create_mtl_gddl(mtlType) {
        const blue = { r: 0.0, g: 0.0, b: 1.0 }
        const dlnum = this.gd_startdisplist(7)
        this.func_801A086C(dlnum, blue, GDTypes.GD_MTL_TEX_OFF)

        return dlnum
    }

    gd_startdisplist(memarea) {
        this.D_801BB018 = 0
        this.D_801BB01C = 1

        switch (memarea) {
            case 7:
                this.sCurrentGdDl = this.create_child_gdl(0, this.sStaticDl)
                break
            case 8:
                if (this.sActiveView.id > 2) {
                    throw "gd_startdisplist(): Too many views to display"
                }

                this.sCurrentGdDl = this.D_801BD7C8[this.sActiveView.id][this.gGdFrameBuf]
                this.cpy_remaining_gddl(this.sCurrentGdDl, this.sCurrentGdDl.parent)
                break
            default: throw "unknown case in gd renderer gd_startdisplist"
        }
        //gDPPipeSync(next_gfx())
        return this.sCurrentGdDl.number
    }

    setup_view_buffers(name, view) {

        if (view.flags & (GDTypes.VIEW_Z_BUF | GDTypes.VIEW_COLOUR_BUF) && !(view.flags & GDTypes.VIEW_UNK_1000)) {
            if (view.flags & GDTypes.VIEW_COLOUR_BUF) {
                view.parent = view
            } else {
                view.parent = this.sScreenView2
            }

            throw "more implementation needed in setup view buffers"
        } else {
            view.parent = this.sScreenView2
        }

        view.gdDlNum = 0
        view.unk74 = 0

        if (view.flags & GDTypes.VIEW_DEFAULT_PARENT) {
            throw "more implementation D_801A86E0"
            view.parent = D_801A86E0
        }
    }

    set_active_view(v) {
        this.sActiveView = v
    }

    start_view_dl(view) {
        throw "start_view_dl not implemented"
    }

    setup_stars() {
        Shapes.gShape.redStarPtr.target = Shapes.make_shape(0, "redstar")
        Shapes.gShape.redStarPtr.target.gdDls[0] = this.new_gddl_from(null)
        Shapes.gShape.redStarPtr.target.gdDls[1] = Shapes.gShape.redStarPtr.target.gdDls[0]
        this.sGdDLArray[Shapes.gShape.redStarPtr.target.gdDls[0]].dlptr = gd_red_star_dl_array
        this.sGdDLArray[Shapes.gShape.redStarPtr.target.gdDls[1]].dlptr = gd_red_star_dl_array

        Shapes.gShape.silverStarPtr.target = Shapes.make_shape(0, "silverstar")
        Shapes.gShape.silverStarPtr.target.gdDls[0] = this.new_gddl_from(null)
        Shapes.gShape.silverStarPtr.target.gdDls[1] = Shapes.gShape.silverStarPtr.target.gdDls[0]
        this.sGdDLArray[Shapes.gShape.silverStarPtr.target.gdDls[0]].dlptr = gd_silver_star_dl_array
        this.sGdDLArray[Shapes.gShape.silverStarPtr.target.gdDls[1]].dlptr = gd_silver_star_dl_array

        Shapes.gShape.redSparkPtr.target = Shapes.make_shape(0, "sspark")
        Shapes.gShape.redSparkPtr.target.gdDls[0] = this.new_gddl_from(null)
        Shapes.gShape.redSparkPtr.target.gdDls[1] = Shapes.gShape.redSparkPtr.target.gdDls[0]
        this.sGdDLArray[Shapes.gShape.redSparkPtr.target.gdDls[0]].dlptr = gd_red_sparkle_dl_array
        this.sGdDLArray[Shapes.gShape.redSparkPtr.target.gdDls[1]].dlptr = gd_red_sparkle_dl_array

        Shapes.gShape.silverSparkPtr.target = Shapes.make_shape(0, "rspark")
        Shapes.gShape.silverSparkPtr.target.gdDls[0] = this.new_gddl_from(null)
        Shapes.gShape.silverSparkPtr.target.gdDls[1] = Shapes.gShape.silverSparkPtr.target.gdDls[0]
        this.sGdDLArray[Shapes.gShape.silverSparkPtr.target.gdDls[0]].dlptr = gd_silver_sparkle_dl_array
        this.sGdDLArray[Shapes.gShape.silverSparkPtr.target.gdDls[1]].dlptr = gd_silver_sparkle_dl_array
    }

    new_gddl_from(dl) {
        const gddl = this.new_gd_dl(0, 0, 0, 0, 0, 0)
        gddl.gfx = dl
        return gddl.number
    }


    new_gd_dl(id, gfxs, verts, mtxs, lights, vps) {

        const dl = {
            id,
            number: this.sGdDlCount++,
            parent: null,
            dlptr: null,
            vtx: [],
            mtx: [],
            light: [],
            gfx: [],
            vp: []
        }
        this.sGdDLArray[dl.number] = dl

        return dl

    }

    create_child_gdl(id, srcDL) {
        const newDl = {
            parent: srcDL,
            id,
            number: this.sGdDlCount++,
            vtx: [],
            mtx: [],
            light: [],
            gfx: [],
            vp: []
        }
        this.sGdDLArray[newDl.number] = newDl

        //this.cpy_remaining_gddl(newDl, srcDL)

        return newDl
    }

/*    cpy_remaining_gddl(dst, src) {
        dst.vtx = src.vtx.splice(src.curVtxIdx)
        dst.mtx = src.vtx.splice(src.curMtxIdx)
        dst.light = src.vtx.splice(src.curLightIdx)
        dst.gfx = src.vtx.splice(src.curGfxIdx)
        dst.vp = src.vtx.splice(src.curVpIdx)
    }*/

    gd_setproperty(prop, f1, f2, f3) {

        switch (prop) {
            case GDTypes.GD_PROP_AMB_COLOUR:
                this.sAmbScaleColour = { r: f1, g: f2, b: f3 }
                break
            case GDTypes.GD_PROP_CULLING:
                if (f1 == 1.0) {
                    Gbi.gSPSetGeometryMode(this.sCurrentGdDl.gfx, Gbi.G_CULL_BACK)
                } else {
                    Gbi.gSPClearGeometryMode(this.sCurrentGdDl.gfx, Gbi.G_CULL_BACK)
                }
                break
            case GDTypes.GD_PROP_LIGHTING:
                if (f1 == 1.0) Gbi.gSPSetGeometryMode(this.sCurrentGdDl.gfx, Gbi.G_LIGHTING)
                if (f1 == 0.0) Gbi.gSPClearGeometryMode(this.sCurrentGdDl.gfx, Gbi.G_LIGHTING)
                break
            case GDTypes.GD_PROP_LIGHT_DIR:
                this.sLightDirections[this.sLightId].x = f1 * 120.0
                this.sLightDirections[this.sLightId].y = f2 * 120.0
                this.sLightDirections[this.sLightId].z = f3 * 120.0
                break
            case GDTypes.GD_PROP_DIFUSE_COLOUR:
                this.sLightScaleColours[this.sLightId].r = f1
                this.sLightScaleColours[this.sLightId].g = f2
                this.sLightScaleColours[this.sLightId].b = f3
                break
            default:
                throw "unkown property type in gd renderer set property"
        }

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

        this.sScreenView2.colour = { r: 0.0, g: 0.0, b: 0.0 }
        this.sScreenView2.parent = this.sScreenView2
        this.sScreenView2.flags &= ~GDTypes.VIEW_UPDATE
        this.sActiveView = this.sScreenView2

        this.gGdCtrl = {
            unk88: 1.0,
            unkA0: -45.0,
            unkAC: 45.0,
            unk00: 2,
            newStartPress: false,
            prevFrame: null,
            csrX: 160,
            csrY: 120,
            frameAbtnPressed: -1000
        }
    }

    make_view_withgrp(name, grp) {

        const view = Objects.make_view(name, (GDTypes.VIEW_DRAW | GDTypes.VIEW_ALLOC_ZBUF | GDTypes.VIEW_MOVEMENT), 1, 0, 0, 320, 240, grp)
        view.header.obj = view

        const viewgrp = Objects.make_group(2, [grp, view])
        viewgrp.header.obj = viewgrp

        view.lights = Draw.gGdLightGroup

        return view
    }

    func_8019F318(cam, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        arg7 *= Math.PI / 180.0
        gd_mat4f_lookat(cam.unkE8, arg1, arg2, arg3, arg4, arg5, arg6, Math.sin(arg7), Math.cos(arg7), 0.0)

        const newMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.mtxf_to_mtx(newMtx, cam.unkE8)
        Gbi.gSPMatrix(this.sCurrentGdDl.gfx, newMtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        this.sCurrentGdDl.mtx.push(newMtx)
    }

    func_801A3324(x, y, z) {
        this.D_801BD768 = { x, y, z }
        this.D_801BD758 = { x, y, z }
    }

    gd_create_perspective_matrix(fovy, aspect, near, far) {
        this.sGdPerspTimer += 0.1
        let newMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const perspNorm = { value: 0 }
        MathUtil.guPerspective(newMtx, perspNorm, fovy, aspect, near, far, 1.0)
        //gSPPerspNormalize() /// not needed

        const perspecMtx = newMtx
        Gbi.gSPMatrix(this.sCurrentGdDl.gfx, perspecMtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
        this.sCurrentGdDl.mtx.push(newMtx)

        newMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.guRotate(newMtx, 0.0, 0.0, 0.0, 1.0)
        const rotMtx = newMtx
        Gbi.gSPMatrix(this.sCurrentGdDl.gfx, rotMtx, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
        this.sCurrentGdDl.mtx.push(newMtx)
        this.func_801A3324(0.0, 0.0, 0.0)
    }

    set_gd_mtx_parameters(params) {
        if (params == (Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)) {
            this.sMtxParamType = Gbi.G_MTX_PROJECTION
        } else if (params == (Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_PUSH)) {
            this.sMtxParamType = Gbi.G_MTX_MODELVIEW
        } else {
            throw "set_gd_mtx_parameters"
        }
    }

    gd_vblank() {
        /// only thing that seems to be necessary is reset_cur_dl_indices
        Objects.apply_to_obj_types_in_group(GDTypes.OBJ_TYPE_NETS, Nets.convert_net_verts, this.sMarioSceneGrp, Nets)
        this.reset_cur_dl_indices()
    }

    func_801A4848(linkDl) {

        const saveCurDl = { target: this.sCurrentGdDl }
        this.sCurrentGdDl = this.sMHeadMainDls[this.gGdFrameBuf]
        this.branch_cur_dl_to_num(linkDl)
        this.sCurrentGdDl = saveCurDl.target
    }

    add_mat4_load_to_dl(mtx) {
        const newMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        gd_copy_mat4f(mtx, newMtx)
        Gbi.gSPMatrix(this.sCurrentGdDl.gfx, newMtx, this.sMtxParamType | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
        this.sCurrentGdDl.mtx.push(newMtx)
    }

    translate_load_mtx_gddl(x, y, z) {
        const newMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.guTranslate(newMtx, x, y, z)
        Gbi.gSPMatrix(this.sCurrentGdDl.gfx, newMtx, this.sMtxParamType | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
        this.sCurrentGdDl.mtx.push(newMtx)
    }

    update_view_and_dl(view) {

        const prevFlags = view.flags
        Draw.update_view(view)

        if (prevFlags & GDTypes.VIEW_UPDATE) {
            this.sCurrentGdDl = this.sMHeadMainDls[this.gGdFrameBuf]
            if (view.gdDlNum != 0) {
                this.func_801A4848(view.gdDlNum)
            }
        }
    }

    gdm_gettestdl(id) {

        let gddl
        const vec = { x: 0.0, y: 0.0, z: 0.0 }

        switch (id) {
            case 2:
            case 3:
                this.update_view_and_dl(this.sMSceneView)
                this.sCurrentGdDl = this.sMHeadMainDls[this.gGdFrameBuf]
                Gbi.gSPEndDisplayList(this.sCurrentGdDl.gfx)
                gddl = this.sCurrentGdDl
                break
            default:
                throw "gdm_gettestdl no case for id"

        }

        if (gddl == null) {
            throw "no display list in gd renderer"
        }

        return gddl.gfx
    }

    gdm_maketestdl(id) {
        switch (id) {
            case 2: // Regular face
                if (this.sMarioSceneGrp == null) {
                    Shapes.load_mario_head(Shapes.animate_mario_head_normal)
                    this.sMarioSceneGrp = Shapes.gMarioFaceGrp
                    //this.gd_setup_cursor() TODO
                }
                this.sMSceneView = this.make_view_withgrp("mscene", this.sMarioSceneGrp)
                break
            case 3:
                if (this.sMarioSceneGrp == null) {
                    Shapes.load_mario_head(Shapes.animate_mario_head_gameover)
                    this.sMarioSceneGrp = Shapes.gMarioFaceGrp
                    //this.gd_setup_cursor() TODO
                }
                this.sMSceneView = this.make_view_withgrp("mscene", this.sMarioSceneGrp)
                break
            default:
                throw "unimplemented mario head"
        }
    }

    gdm_setup() {
        this.gd_init()
        Shapes.load_shapes2()
        this.setup_stars()
    }
}

export const GoddardRendererInstance = new GoddardRenderer()
