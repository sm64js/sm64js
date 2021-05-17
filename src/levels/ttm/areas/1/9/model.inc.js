import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09000000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700C0E0 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700C0F8 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700C110 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700C128 = [
	{ pos: [ 162, 256, 35 ], flag: 0, tc: [ 0, -2076 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 18, -255, 180 ], flag: 0, tc: [ 990, 480 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 18, 256, 180 ], flag: 0, tc: [ 990, -2076 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 18, 256, 180 ], flag: 0, tc: [ 0, -1566 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ 18, -255, 180 ], flag: 0, tc: [ 0, 990 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -126, -255, 35 ], flag: 0, tc: [ 990, 990 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -126, 256, 35 ], flag: 0, tc: [ 990, -1566 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -126, 256, 35 ], flag: 0, tc: [ 990, -2076 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -126, -255, 35 ], flag: 0, tc: [ 990, 480 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 18, -255, -109 ], flag: 0, tc: [ 0, 478 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 18, 256, -109 ], flag: 0, tc: [ 0, -2076 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 18, 256, -109 ], flag: 0, tc: [ 990, -1566 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 162, -255, 35 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 162, 256, 35 ], flag: 0, tc: [ 0, -1566 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 18, -255, -109 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 162, -255, 35 ], flag: 0, tc: [ 0, 478 ], color: [ 166, 0, 167, 255 ] },
]

const ttm_seg7_vertex_0700C228 = [
	{ pos: [ 307, 256, 35 ], flag: 0, tc: [ 14686, -17952 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, 256, -253 ], flag: 0, tc: [ 14108, -18530 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 162, 256, 35 ], flag: 0, tc: [ 14396, -17952 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, 256, -109 ], flag: 0, tc: [ 14108, -18240 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -126, 256, 35 ], flag: 0, tc: [ 13818, -17952 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -271, 256, 35 ], flag: 0, tc: [ 13528, -17952 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, 256, 325 ], flag: 0, tc: [ 14108, -17374 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, 256, 180 ], flag: 0, tc: [ 14108, -17662 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_0700C2A8 = [
	{ pos: [ 18, -255, 180 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 162, -255, 35 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, -255, -109 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -126, -255, 35 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_0700C2E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C0E0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C0E0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C128, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700C360 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C0F8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C0F8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C228, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  1, 0x0,  4,  1,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  6, 0x0,  2,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  4,  5, 0x0,  7,  5,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700C3D8 = [
	Gbi.gsSPLight(ttm_seg7_lights_0700C110.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C110.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C2A8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700C408 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700C2E8),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700C360),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700C3D8),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

