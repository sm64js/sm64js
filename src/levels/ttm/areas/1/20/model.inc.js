import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_070111A0 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_070111B8 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_070111D0 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_070111E8 = [
	{ pos: [ 375, -306, -295 ], flag: 0, tc: [ 0, 650 ], color: [ 243, 0, 130, 255 ] },
	{ pos: [ -133, -409, -241 ], flag: 0, tc: [ 1672, 990 ], color: [ 243, 0, 130, 255 ] },
	{ pos: [ -133, -306, -241 ], flag: 0, tc: [ 1672, 650 ], color: [ 243, 0, 130, 255 ] },
	{ pos: [ 375, -409, -295 ], flag: 0, tc: [ 0, 990 ], color: [ 243, 0, 130, 255 ] },
]

const ttm_seg7_vertex_07011228 = [
	{ pos: [ -206, -409, 682 ], flag: 0, tc: [ 3042, -7070 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -498, -409, 585 ], flag: 0, tc: [ 4012, -6746 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -133, -409, -241 ], flag: 0, tc: [ 2798, -3998 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 168, 205, 53 ], flag: 0, tc: [ 1796, -4978 ], color: [ 236, 136, 34, 255 ] },
	{ pos: [ -271, 205, -208 ], flag: 0, tc: [ 3258, -4106 ], color: [ 236, 136, 34, 255 ] },
	{ pos: [ 325, 102, -210 ], flag: 0, tc: [ 1272, -4100 ], color: [ 236, 136, 34, 255 ] },
	{ pos: [ 325, 102, -210 ], flag: 0, tc: [ 1272, -4100 ], color: [ 29, 143, 208, 255 ] },
	{ pos: [ -185, 205, -753 ], flag: 0, tc: [ 2972, -2294 ], color: [ 29, 143, 208, 255 ] },
	{ pos: [ 430, 205, -386 ], flag: 0, tc: [ 924, -3514 ], color: [ 29, 143, 208, 255 ] },
	{ pos: [ 325, 102, -210 ], flag: 0, tc: [ 1272, -4100 ], color: [ 235, 131, 253, 255 ] },
	{ pos: [ -271, 205, -208 ], flag: 0, tc: [ 3258, -4106 ], color: [ 235, 131, 253, 255 ] },
	{ pos: [ -185, 205, -753 ], flag: 0, tc: [ 2972, -2294 ], color: [ 235, 131, 253, 255 ] },
	{ pos: [ 375, -409, -295 ], flag: 0, tc: [ 1104, -3818 ], color: [ 0, 129, 0, 255 ] },
]

const ttm_seg7_vertex_070112F8 = [
	{ pos: [ -7, 205, -51 ], flag: 0, tc: [ 308, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 44, 410, -139 ], flag: 0, tc: [ 0, 308 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 44, 205, -139 ], flag: 0, tc: [ 0, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -7, 410, -51 ], flag: 0, tc: [ 308, 308 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -133, -306, -241 ], flag: 0, tc: [ 5254, -5824 ], color: [ 140, 0, 205, 255 ] },
	{ pos: [ -133, -409, -241 ], flag: 0, tc: [ 5254, -5482 ], color: [ 140, 0, 205, 255 ] },
	{ pos: [ -498, -409, 585 ], flag: 0, tc: [ 8046, -5482 ], color: [ 140, 0, 205, 255 ] },
	{ pos: [ -498, -306, 585 ], flag: 0, tc: [ 8046, -5824 ], color: [ 140, 0, 205, 255 ] },
]

const ttm_seg7_vertex_07011378 = [
	{ pos: [ 168, 205, 53 ], flag: 0, tc: [ 650, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ -7, 410, -51 ], flag: 0, tc: [ 0, 308 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ -7, 205, -51 ], flag: 0, tc: [ 0, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 168, 410, 53 ], flag: 0, tc: [ 650, 308 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 44, 205, -139 ], flag: 0, tc: [ 730, 990 ], color: [ 9, 0, 130, 255 ] },
	{ pos: [ 44, 410, -139 ], flag: 0, tc: [ 730, 308 ], color: [ 9, 0, 130, 255 ] },
	{ pos: [ 272, 410, -122 ], flag: 0, tc: [ 0, 308 ], color: [ 9, 0, 130, 255 ] },
	{ pos: [ 272, 205, -122 ], flag: 0, tc: [ 0, 990 ], color: [ 9, 0, 130, 255 ] },
]

const ttm_seg7_vertex_070113F8 = [
	{ pos: [ 272, 410, -122 ], flag: 0, tc: [ 1126, -16018 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 44, 410, -139 ], flag: 0, tc: [ 670, -16052 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7, 410, -51 ], flag: 0, tc: [ 564, -15878 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 168, 410, 53 ], flag: 0, tc: [ 916, -15668 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 375, -306, -295 ], flag: 0, tc: [ 1332, -16364 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -133, -306, -241 ], flag: 0, tc: [ 314, -16256 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -498, -306, 585 ], flag: 0, tc: [ -412, -14606 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -206, -306, 682 ], flag: 0, tc: [ 168, -14412 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 430, 205, -386 ], flag: 0, tc: [ 1440, -16546 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -185, 205, -753 ], flag: 0, tc: [ 210, -17278 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -271, 205, -208 ], flag: 0, tc: [ 38, -16192 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 168, 205, 53 ], flag: 0, tc: [ 916, -15668 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_070114B8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_070111A0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_070111A0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_070111E8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_070111B8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_070111B8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07011228, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 12, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_070111D0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_070111D0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_070112F8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_070111A0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_070111A0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07011378, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_070115B0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_070113F8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07011608 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_070114B8),
	Gbi.gsSPDisplayList(ttm_seg7_dl_070115B0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

