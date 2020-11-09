import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700CB60 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700CB78 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700CB90 = [
	{ pos: [ -323, -387, -61 ], flag: 0, tc: [ 8458, -5948 ], color: [ 156, 241, 75, 255 ] },
	{ pos: [ -30, 389, 495 ], flag: 0, tc: [ 9592, -7498 ], color: [ 156, 241, 75, 255 ] },
	{ pos: [ -224, 389, 235 ], flag: 0, tc: [ 8972, -7498 ], color: [ 156, 241, 75, 255 ] },
	{ pos: [ -323, -387, -61 ], flag: 0, tc: [ 8458, -5948 ], color: [ 194, 209, 99, 255 ] },
	{ pos: [ 377, 389, 751 ], flag: 0, tc: [ 10552, -7498 ], color: [ 194, 209, 99, 255 ] },
	{ pos: [ -30, 389, 495 ], flag: 0, tc: [ 9592, -7498 ], color: [ 194, 209, 99, 255 ] },
]

const ttm_seg7_vertex_0700CBF0 = [
	{ pos: [ -323, -387, -61 ], flag: 0, tc: [ 974, -2960 ], color: [ 130, 13, 7, 255 ] },
	{ pos: [ -224, 389, 235 ], flag: 0, tc: [ 1654, -4488 ], color: [ 130, 13, 7, 255 ] },
	{ pos: [ -282, 389, -714 ], flag: 0, tc: [ -132, -4554 ], color: [ 130, 13, 7, 255 ] },
]

const ttm_seg7_vertex_0700CC20 = [
	{ pos: [ 377, 389, 751 ], flag: 0, tc: [ 7672, -3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -224, 389, 235 ], flag: 0, tc: [ 6470, -4062 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -30, 389, 495 ], flag: 0, tc: [ 6856, -3544 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -282, 389, -714 ], flag: 0, tc: [ 6352, -5960 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_0700CC60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB60.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB60.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CB90, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB78.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB78.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CBF0, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700CCC8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB60.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CB60.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CC20, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700CD10 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700CC60),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700CCC8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

