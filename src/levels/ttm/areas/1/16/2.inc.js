import {mountain_09008000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_vertex_0700EB40 = [
	{ pos: [ 205, 57, 1382 ], flag: 0, tc: [ -720, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 578, -34, 1027 ], flag: 0, tc: [ 4404, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 578, 67, 1027 ], flag: 0, tc: [ 4424, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 205, -44, 1382 ], flag: 0, tc: [ -740, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 578, -34, 1027 ], flag: 0, tc: [ -246, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1229, 57, 614 ], flag: 0, tc: [ 7428, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 578, 67, 1027 ], flag: 0, tc: [ -258, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1229, -44, 614 ], flag: 0, tc: [ 7442, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -562, -44, 358 ], flag: 0, tc: [ -262, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 205, 57, 1382 ], flag: 0, tc: [ 12512, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -580, 57, 335 ], flag: 0, tc: [ -560, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 205, -44, 1382 ], flag: 0, tc: [ 12512, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const ttm_seg7_dl_0700EC00 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700EB40, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700EC58 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700EC00),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

