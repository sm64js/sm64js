import {ttm_seg7_texture_07000000, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700A928 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700A940 = [
	{ pos: [ 80, 654, -199 ], flag: 0, tc: [ 308, 138 ], color: [ 57, 245, 112, 255 ] },
	{ pos: [ -22, 654, -199 ], flag: 0, tc: [ 308, 138 ], color: [ 143, 251, 56, 255 ] },
	{ pos: [ -22, -1719, -97 ], flag: 0, tc: [ 0, 990 ], color: [ 200, 4, 113, 255 ] },
	{ pos: [ 80, -1719, -97 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 2, 56, 255 ] },
	{ pos: [ 80, 654, -302 ], flag: 0, tc: [ 650, 138 ], color: [ 101, 3, 181, 255 ] },
	{ pos: [ -22, -1719, -199 ], flag: 0, tc: [ 308, 990 ], color: [ 167, 253, 167, 255 ] },
	{ pos: [ -22, 654, -302 ], flag: 0, tc: [ 650, 138 ], color: [ 186, 15, 152, 255 ] },
	{ pos: [ 80, -1719, -199 ], flag: 0, tc: [ 308, 990 ], color: [ 89, 253, 167, 255 ] },
]

const ttm_seg7_vertex_0700A9C0 = [
	{ pos: [ 80, 654, -302 ], flag: 0, tc: [ 0, 0 ], color: [ 101, 3, 181, 255 ] },
	{ pos: [ 80, 1473, 5 ], flag: 0, tc: [ 0, 0 ], color: [ 113, 243, 55, 255 ] },
	{ pos: [ 80, 654, -199 ], flag: 0, tc: [ 0, 0 ], color: [ 57, 245, 112, 255 ] },
	{ pos: [ -22, 1473, 5 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 229, 110, 255 ] },
	{ pos: [ -22, 654, -199 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 251, 56, 255 ] },
	{ pos: [ 80, 1473, -97 ], flag: 0, tc: [ 0, 0 ], color: [ 56, 27, 146, 255 ] },
	{ pos: [ -22, 1473, -97 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 13, 201, 255 ] },
	{ pos: [ -22, 654, -302 ], flag: 0, tc: [ 0, 0 ], color: [ 186, 15, 152, 255 ] },
]

export const ttm_seg7_dl_0700AA40 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A928.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A928.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A940, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  2,  1,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  6,  5, 0x0,  7,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  4, 0x0,  5,  4,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700AAB8 = [
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A9C0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  5,  0, 0x0,  7,  6,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700AB08 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700AA40),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700AAB8),
	Gbi.gsSPEndDisplayList(),
]

