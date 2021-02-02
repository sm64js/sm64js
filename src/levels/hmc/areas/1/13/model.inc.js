import * as Gbi from "../../../../../include/gbi"
import {
	cave_0900C000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_07013F38 = [
	{ pos: [ 4875, -613, -4402 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4875, -101, -3890 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4875, -613, -3890 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5274, -716, -5621 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4762, -204, -5621 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4762, -716, -5621 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5274, -204, -5621 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4752, -613, -511 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4752, -101, -1023 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4752, -613, -1023 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4752, -101, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5571, -511, -3173 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5571, 0, -3173 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5571, 0, -3685 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 5571, -511, -3685 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
]

const hmc_seg7_vertex_07014028 = [
	{ pos: [ 3523, -511, -869 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3523, 0, -869 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3523, 0, -1381 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4875, -613, -4402 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4875, -101, -4402 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4875, -101, -3890 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -716, -2866 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -204, -2354 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -716, -2354 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -204, -2866 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4240, -511, -3481 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4240, 0, -3993 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4240, -511, -3993 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 4240, 0, -3481 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 3523, -511, -1381 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
]

const hmc_seg7_vertex_07014118 = [
	{ pos: [ 1700, -716, 0 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -204, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -716, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2253, 410, -296 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1741, 922, -296 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1741, 410, -296 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2253, 922, -296 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, 410, -180 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, 922, -180 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, 922, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, 410, 256 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2294, -716, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2294, -204, 0 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2294, -716, 0 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 2294, -204, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 180 ] },
	{ pos: [ 1700, -204, 0 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 180 ] },
]

export const hmc_seg7_dl_07014218 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, cave_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_07013F38, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07014028, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07014118, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07014300 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07014218),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

