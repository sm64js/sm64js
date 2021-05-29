import * as Gbi from "../../../../../include/gbi"
import {
    jrb_seg7_texture_07000000,
    jrb_seg7_texture_07000800,
    jrb_seg7_texture_07001800,
    jrb_seg7_texture_07002000
} from "../../../texture.inc"

import {
    water_09000000,
    water_09000800,
    water_09001800,
    water_09002800,
    water_09003800,
    water_09004800,
    water_09005800,
    water_09006000,
    water_09006800,
    water_09007800,
    water_09008800,
    water_09009000,
    water_0900A000,
    water_0900A800,
    water_0900B800
} from "../../../../../textures/water"

const jrb_seg7_lights_07004A18 = Gbi.gdSPDefLights1(
	    0x1e, 0x27, 0x3a,
	    0x79, 0x9f, 0xeb, 0x28, 0x28, 0x28
)

const jrb_seg7_lights_07004A30 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const jrb_seg7_vertex_07004A48 = [
	{ pos: [ -1944, 512, 7211 ], flag: 0, tc: [ 19276, 0 ], color: [ 117, 0, 47, 255 ] },
	{ pos: [ -1675, 512, 6547 ], flag: 0, tc: [ 15876, 0 ], color: [ 124, 0, 230, 255 ] },
	{ pos: [ -1675, 1024, 6547 ], flag: 0, tc: [ 15876, 2522 ], color: [ 124, 0, 230, 255 ] },
	{ pos: [ -1944, 1024, 7211 ], flag: 0, tc: [ 19276, 2522 ], color: [ 117, 0, 47, 255 ] },
	{ pos: [ -2073, 512, 6165 ], flag: 0, tc: [ 12960, 0 ], color: [ 43, 0, 137, 255 ] },
	{ pos: [ -2073, 1024, 6165 ], flag: 0, tc: [ 12960, 2522 ], color: [ 236, 0, 131, 255 ] },
	{ pos: [ -3017, 512, 6778 ], flag: 0, tc: [ 7700, 0 ], color: [ 187, 0, 150, 255 ] },
	{ pos: [ -3017, 1024, 6778 ], flag: 0, tc: [ 7700, 2522 ], color: [ 187, 0, 150, 255 ] },
]

const jrb_seg7_vertex_07004AC8 = [
	{ pos: [ -2771, 0, 1676 ], flag: 0, tc: [ 1672, 554 ], color: [ 243, 0, 126, 255 ] },
	{ pos: [ -705, 0, 2401 ], flag: 0, tc: [ 1672, -520 ], color: [ 214, 0, 119, 255 ] },
	{ pos: [ -705, 512, 2401 ], flag: 0, tc: [ 1840, -520 ], color: [ 214, 0, 119, 255 ] },
	{ pos: [ -4161, 512, 6315 ], flag: 0, tc: [ 1840, 886 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ -5256, 1024, 4733 ], flag: 0, tc: [ 2012, 1544 ], color: [ 117, 0, 209, 255 ] },
	{ pos: [ -4161, 1024, 6315 ], flag: 0, tc: [ 2012, 886 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ -5256, 512, 4733 ], flag: 0, tc: [ 1840, 1544 ], color: [ 125, 0, 237, 255 ] },
	{ pos: [ -5170, 614, 3362 ], flag: 0, tc: [ 1876, 1608 ], color: [ 122, 0, 34, 255 ] },
	{ pos: [ -5170, 0, 3362 ], flag: 0, tc: [ 1672, 1608 ], color: [ 111, 0, 61, 255 ] },
	{ pos: [ -4133, 614, 2187 ], flag: 0, tc: [ 1876, 1186 ], color: [ 80, 0, 98, 255 ] },
	{ pos: [ -4133, 0, 2187 ], flag: 0, tc: [ 1672, 1186 ], color: [ 63, 0, 110, 255 ] },
	{ pos: [ -2771, 614, 1676 ], flag: 0, tc: [ 1876, 554 ], color: [ 16, 0, 125, 255 ] },
]

export const jrb_seg7_dl_07004B88 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_07004A18.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_07004A18.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07004A48, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07004BF0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_07004A30.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_07004A30.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07004AC8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  7, 0x0,  8,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  9, 0x0, 10, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  0, 11, 0x0,  0,  2, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07004C78 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(5, 80, 75, 255),
	Gbi.gsSPFogPosition(900, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_07004B88),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_07004BF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

