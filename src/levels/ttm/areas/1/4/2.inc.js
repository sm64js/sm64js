import {ttm_seg7_texture_07000000, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700AFF0 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700B008 = [
	{ pos: [ -43, 1523, 95 ], flag: 0, tc: [ 990, 0 ], color: [ 211, 0, 118, 255 ] },
	{ pos: [ -58, 1523, 9 ], flag: 0, tc: [ 510, 0 ], color: [ 235, 0, 131, 255 ] },
	{ pos: [ -58, -1634, 9 ], flag: 0, tc: [ 510, 990 ], color: [ 137, 0, 213, 255 ] },
	{ pos: [ 26, -1634, 40 ], flag: 0, tc: [ 0, 990 ], color: [ 125, 0, 236, 255 ] },
	{ pos: [ 26, 1523, 40 ], flag: 0, tc: [ 0, 0 ], color: [ 125, 0, 236, 255 ] },
	{ pos: [ -43, -1634, 95 ], flag: 0, tc: [ 990, 990 ], color: [ 211, 0, 118, 255 ] },
]

export const ttm_seg7_dl_0700B068 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700AFF0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700AFF0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700B008, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  3, 0x0,  3,  4,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  0,  5, 0x0,  5,  0,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700B0D0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700B068),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

