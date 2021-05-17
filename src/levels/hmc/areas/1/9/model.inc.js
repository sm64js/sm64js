import * as Gbi from "../../../../../include/gbi"
import {
	cave_09007000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0700FAB0 = [
	{ pos: [ 1137, 358, 6543 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 563, 6543 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1137, 563, 6543 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6973, 563, 3697 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6851, 358, 3697 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6973, 358, 3697 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6851, 563, 3697 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 358, 3799 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 563, 3594 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 563, 3799 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 358, 3594 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1075, 563, 6441 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1075, 563, 6646 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1075, 358, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1075, 358, 6441 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700FBA0 = [
	{ pos: [ 6482, 358, 3123 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 358, 3328 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 563, 3328 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1137, 358, 6543 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 358, 6543 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 563, 6543 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6973, 358, 6543 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6851, 563, 6543 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6973, 563, 6543 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6851, 358, 6543 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 563, 6441 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 358, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 358, 6441 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6912, 563, 6646 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 563, 3123 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700FC90 = [
	{ pos: [ 3878, 819, 1034 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3756, 614, 1034 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3878, 614, 1034 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6420, 358, 3226 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 563, 3226 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6420, 563, 3226 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 358, 3226 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6420, 358, 7014 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 563, 7014 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6420, 563, 7014 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 358, 7014 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 358, 6912 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 358, 7117 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 563, 7117 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6482, 563, 6912 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700FD80 = [
	{ pos: [ 3817, 614, 1137 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3817, 614, 932 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3817, 819, 932 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3878, 819, 1034 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3756, 819, 1034 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3756, 614, 1034 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3817, 819, 1137 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_0700FDF0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700FAB0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700FBA0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700FC90, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700FD80, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0700FEF0 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 128),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADEA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0700FDF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

