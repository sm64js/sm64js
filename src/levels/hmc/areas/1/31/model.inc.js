import * as Gbi from "../../../../../include/gbi"
import {
	cave_0900C000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_07021828 = [
	{ pos: [ 4659, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5171, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4659, -4382, 2652 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1280, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1792, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1280, -4382, 2652 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1792, -3870, 2652 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2406, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2918, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2406, -4382, 2652 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2918, -3870, 2652 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3533, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4045, -3870, 2652 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4045, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3533, -4382, 2652 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
]

const hmc_seg7_vertex_07021918 = [
	{ pos: [ 2406, -4382, 2007 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2918, -4382, 2007 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2918, -3870, 2007 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4659, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5171, -3870, 2652 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5171, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5786, -3870, 2652 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6298, -4382, 2652 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5786, -4382, 2652 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6298, -3870, 2652 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1280, -4382, 2007 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1792, -3870, 2007 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1280, -3870, 2007 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1792, -4382, 2007 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2406, -3870, 2007 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
]

const hmc_seg7_vertex_07021A08 = [
	{ pos: [ 3533, -4382, 2007 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4045, -4382, 2007 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4045, -3870, 2007 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3533, -3870, 2007 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4659, -4382, 2007 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5171, -3870, 2007 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4659, -3870, 2007 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5171, -4382, 2007 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5786, -4382, 2007 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6298, -3870, 2007 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5786, -3870, 2007 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6298, -4382, 2007 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
]

export const hmc_seg7_dl_07021AC8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, cave_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_07021828, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07021918, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07021A08, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07021BA0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07021AC8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

