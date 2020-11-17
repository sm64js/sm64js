import {ttm_seg7_texture_07000000, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700BB30 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700BB48 = [
	{ pos: [ -13, -1627, 28 ], flag: 0, tc: [ 990, 990 ], color: [ 211, 0, 118, 255 ] },
	{ pos: [ -28, 1580, -57 ], flag: 0, tc: [ 510, 0 ], color: [ 175, 0, 159, 255 ] },
	{ pos: [ -28, -1627, -57 ], flag: 0, tc: [ 510, 990 ], color: [ 175, 0, 159, 255 ] },
	{ pos: [ -13, 1580, 28 ], flag: 0, tc: [ 990, 0 ], color: [ 211, 0, 118, 255 ] },
	{ pos: [ 56, -1627, -26 ], flag: 0, tc: [ 0, 990 ], color: [ 97, 0, 175, 255 ] },
	{ pos: [ 56, 1580, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 117, 0, 47, 255 ] },
]

export const ttm_seg7_dl_0700BBA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BB30.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700BB30.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700BB48, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  1,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  0, 0x0,  5,  3,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700BC10 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700BBA8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

