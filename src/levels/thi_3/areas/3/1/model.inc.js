import * as Gbi from "../../../../../include/gbi"
import {
    grass_0900B800,
} from "../../../../../textures/grass"
const thi_seg7_vertex_070079D0 = [
	{ pos: [ -101, 2458, 102 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ 0, 744 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 2458, 102 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ 274, 662 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 614, 1229, 2048 ], flag: 0, tc: [ 70, 662 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 717, 1331, 1229 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 717, 922, 1229 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 307, 1331, 1229 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ 274, 662 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 307, 922, 1229 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 410, 1229, 2048 ], flag: 0, tc: [ 70, 662 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 614, 1229, 2048 ], flag: 0, tc: [ 70, 716 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 410, 1229, 2048 ], flag: 0, tc: [ 274, 716 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 307, 1331, 1229 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
]

const thi_seg7_vertex_07007AB0 = [
	{ pos: [ 102, 2458, 102 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 3072, -101 ], flag: 0, tc: [ 70, 762 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 2458, -101 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 2458, 102 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 376, 744 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ 0, 744 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 3072, -101 ], flag: 0, tc: [ 0, 744 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 3072, -101 ], flag: 0, tc: [ 376, 744 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 2458, -101 ], flag: 0, tc: [ 376, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 3072, -101 ], flag: 0, tc: [ 274, 762 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 70, 762 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -101, 2458, 102 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ 274, 762 ], color: [ 255, 255, 255, 128 ] },
]

export const thi_seg7_dl_07007B80 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, grass_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_070079D0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  5, 11, 12, 0x0),
	Gbi.gsSP1Triangle( 5, 12, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07007AB0, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  7, 0x0,  2,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 0, 12,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07007C20 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07007B80),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

