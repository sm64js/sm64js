import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700BE90 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700BEA8 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700BEC0 = [
	{ pos: [ 614, -1486, -697 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, -1486, -697 ], flag: 0, tc: [ 2420, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 1487, -697 ], flag: 0, tc: [ 2420, -4946 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 205, 1487, -697 ], flag: 0, tc: [ 786, -4946 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 1282, 717 ], flag: 0, tc: [ 0, -1470 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -613, 49, 717 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 614, 49, 717 ], flag: 0, tc: [ 2420, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 205, 1282, 717 ], flag: 0, tc: [ 1604, -1470 ], color: [ 0, 0, 127, 255 ] },
]

const ttm_seg7_vertex_0700BF40 = [
	{ pos: [ 205, 1282, 717 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 125, 18, 255 ] },
	{ pos: [ 205, 1487, -697 ], flag: 0, tc: [ 1604, -1864 ], color: [ 0, 125, 18, 255 ] },
	{ pos: [ -613, 1282, 717 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 125, 18, 255 ] },
	{ pos: [ -613, 1487, -697 ], flag: 0, tc: [ 0, -1864 ], color: [ 0, 125, 18, 255 ] },
	{ pos: [ 205, 1282, 717 ], flag: 0, tc: [ 4874, -4536 ], color: [ 120, 39, 5, 255 ] },
	{ pos: [ 614, 49, 717 ], flag: 0, tc: [ 4874, -2076 ], color: [ 120, 39, 5, 255 ] },
	{ pos: [ 205, 1487, -697 ], flag: 0, tc: [ 7698, -4946 ], color: [ 120, 39, 5, 255 ] },
	{ pos: [ 614, -1486, -697 ], flag: 0, tc: [ 7698, 990 ], color: [ 124, 17, 238, 255 ] },
	{ pos: [ 205, 1487, -697 ], flag: 0, tc: [ 7698, -4946 ], color: [ 124, 17, 238, 255 ] },
	{ pos: [ 614, 49, 717 ], flag: 0, tc: [ 4874, -2076 ], color: [ 124, 17, 238, 255 ] },
]

export const ttm_seg7_dl_0700BFE0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BE90.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BE90.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700BEC0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  6,  7,  4, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700BEA8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BEA8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700BF40, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700C070 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700BFE0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

