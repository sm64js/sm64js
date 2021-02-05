import * as Gbi from "../../../../../include/gbi"
import {
	cave_0900C000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0700EFD8 = [
	{ pos: [ 7168, 205, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6656, 205, 6646 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6656, 717, 6646 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4073, 973, 932 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3561, 973, 932 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3561, 461, 932 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4073, 461, 932 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 7168, 717, 3594 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6656, 205, 3594 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 7168, 205, 3594 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6656, 717, 3594 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 717, 2970 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 205, 3482 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 717, 3482 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 205, 2970 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
]

const hmc_seg7_vertex_0700F0C8 = [
	{ pos: [ 819, 717, 6646 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1331, 717, 6646 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1331, 205, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 7168, 205, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6656, 717, 6646 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 7168, 717, 6646 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 717, 6758 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 205, 7270 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 717, 7270 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 6543, 205, 6758 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 819, 205, 6646 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ -1617, 717, 1274 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1132, 205, 1435 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1617, 205, 1274 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 0, 180 ] },
]

const hmc_seg7_vertex_0700F1A8 = [
	{ pos: [ 453, 205, 3555 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 815, 717, 3193 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 453, 717, 3555 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 815, 205, 3193 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 953, 717, 2421 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 591, 717, 2059 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 591, 205, 2059 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 953, 205, 2421 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 533, 205, 2841 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 171, 717, 2479 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 533, 717, 2841 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ 171, 205, 2479 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -944, 205, 872 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -944, 717, 872 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1430, 717, 710 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
]

const hmc_seg7_vertex_0700F298 = [
	{ pos: [ -1617, 717, 1274 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1132, 717, 1435 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1132, 205, 1435 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1430, 205, 710 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -944, 205, 872 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 0, 180 ] },
	{ pos: [ -1430, 717, 710 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 0, 180 ] },
]

export const hmc_seg7_dl_0700F2F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, cave_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700EFD8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700F0C8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700F1A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700F298, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0700F3E8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0700F2F8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

