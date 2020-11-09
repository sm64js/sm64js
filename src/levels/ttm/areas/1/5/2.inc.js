import {ttm_seg7_texture_07000000, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700B590 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700B5A8 = [
	{ pos: [ 29, -1653, 57 ], flag: 0, tc: [ 990, 990 ], color: [ 159, 0, 81, 255 ] },
	{ pos: [ 14, 1556, -28 ], flag: 0, tc: [ 510, 0 ], color: [ 137, 0, 213, 255 ] },
	{ pos: [ 14, -1653, -28 ], flag: 0, tc: [ 510, 990 ], color: [ 234, 0, 132, 255 ] },
	{ pos: [ 98, 1556, 2 ], flag: 0, tc: [ 0, 0 ], color: [ 96, 0, 174, 255 ] },
	{ pos: [ 98, -1653, 2 ], flag: 0, tc: [ 0, 990 ], color: [ 118, 0, 46, 255 ] },
	{ pos: [ 29, 1556, 57 ], flag: 0, tc: [ 990, 0 ], color: [ 18, 0, 125, 255 ] },
]

export const ttm_seg7_dl_0700B608 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700B590.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700B590.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700B5A8, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  3, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  5, 0x0,  4,  5,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700B670 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700B608),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

