import * as Gbi from "../../../../../include/gbi"
import {
	cave_0900C000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0701F700 = [
	{ pos: [ -1689, -4177, -526 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2201, -4689, -526 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -1689, -4689, -526 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2201, -4177, -526 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -4863, -4177, -526 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -5375, -4689, -526 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -4863, -4689, -526 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -5375, -4177, -526 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2774, -101, -6271 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2774, 410, -6783 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2774, -101, -6783 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -2774, 410, -6271 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
]

export const hmc_seg7_dl_0701F7C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, cave_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701F700, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0701F818 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0701F7C0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

