import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700BC70 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700BC88 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700BCA0 = [
	{ pos: [ 307, 32, 307 ], flag: 0, tc: [ 0, 2418 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 307, 32, -409 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -306, 32, -409 ], flag: 0, tc: [ -1256, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -306, 32, 307 ], flag: 0, tc: [ -1256, 2418 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_0700BCE0 = [
	{ pos: [ 307, 32, -409 ], flag: 0, tc: [ 0, 990 ], color: [ 88, 90, 0, 255 ] },
	{ pos: [ 307, 32, 307 ], flag: 0, tc: [ 0, 2418 ], color: [ 88, 90, 0, 255 ] },
	{ pos: [ 355, -15, 355 ], flag: 0, tc: [ 64, 2514 ], color: [ 88, 90, 0, 255 ] },
	{ pos: [ 355, -15, 355 ], flag: 0, tc: [ 64, 2514 ], color: [ 0, 90, 88, 255 ] },
	{ pos: [ 307, 32, 307 ], flag: 0, tc: [ 0, 2418 ], color: [ 0, 90, 88, 255 ] },
	{ pos: [ -369, -30, 370 ], flag: 0, tc: [ -1380, 2544 ], color: [ 0, 90, 88, 255 ] },
	{ pos: [ 307, 32, 307 ], flag: 0, tc: [ 0, 2418 ], color: [ 0, 90, 89, 255 ] },
	{ pos: [ -306, 32, 307 ], flag: 0, tc: [ -1256, 2418 ], color: [ 0, 90, 89, 255 ] },
	{ pos: [ -369, -30, 370 ], flag: 0, tc: [ -1380, 2544 ], color: [ 0, 90, 89, 255 ] },
	{ pos: [ -369, -30, 370 ], flag: 0, tc: [ -1380, 2544 ], color: [ 167, 90, 0, 255 ] },
	{ pos: [ -306, 32, 307 ], flag: 0, tc: [ -1256, 2418 ], color: [ 167, 90, 0, 255 ] },
	{ pos: [ -306, 32, -409 ], flag: 0, tc: [ -1256, 990 ], color: [ 167, 90, 0, 255 ] },
]

export const ttm_seg7_dl_0700BDA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BC70.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BC70.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700BCA0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700BC88.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BC88.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700BCE0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700BE20 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700BDA0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

