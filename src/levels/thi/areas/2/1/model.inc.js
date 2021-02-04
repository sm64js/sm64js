import * as Gbi from "../../../../../include/gbi"
import {
	grass_0900B000
} from "../../../../../textures/grass"
const thi_seg7_vertex_07007430 = [
	{ pos: [ 1690, -460, 922 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1690, -460, 615 ], flag: 0, tc: [ 0, 606 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1229, -460, 922 ], flag: 0, tc: [ 926, 0 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1690, -153, 615 ], flag: 0, tc: [ 0, 606 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1229, -153, 922 ], flag: 0, tc: [ 926, 0 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1505, -153, 430 ], flag: 0, tc: [ 352, 990 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1242, -68, 497 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1198, -153, 635 ], flag: 0, tc: [ 990, 564 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1690, -153, 430 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 0, 180 ] },
	{ pos: [ 1198, -153, 922 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 0, 180 ] },
]

export const thi_seg7_dl_070074D0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, grass_0900B000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_07007430, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  1, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  2, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  3,  8, 0x0,  5,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 5,  9,  4, 0x0,  5,  7,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07007538 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_070074D0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

