import * as Gbi from "../../../../../include/gbi"
import {
	outside_0900A800
} from "../../../../../textures/outside"
const castle_courtyard_seg7_vertex_07005708 = [
	{ pos: [ 205, 1741, 502 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 614, 1741, 502 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 614, 1331, 502 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -2047, 1126, 195 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -1637, 717, 195 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -2047, 717, 195 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -1637, 1126, 195 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -2047, 1741, 195 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -1637, 1331, 195 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -2047, 1331, 195 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -1637, 1741, 195 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -613, 1741, 502 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -204, 1331, 502 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -613, 1331, 502 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ -204, 1741, 502 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
]

const castle_courtyard_seg7_vertex_070057F8 = [
	{ pos: [ 1638, 1741, 195 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 2048, 1741, 195 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 2048, 1331, 195 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 205, 1741, 502 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 614, 1331, 502 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 205, 1331, 502 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 1638, 1126, 195 ], flag: 0, tc: [ 990, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 2048, 1126, 195 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 2048, 717, 195 ], flag: 0, tc: [ 0, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 1638, 717, 195 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
	{ pos: [ 1638, 1331, 195 ], flag: 0, tc: [ 990, 990 ], color: [ 162, 162, 193, 255 ] },
]

export const castle_courtyard_seg7_dl_070058A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_0900A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(castle_courtyard_seg7_vertex_07005708, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(castle_courtyard_seg7_vertex_070057F8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const castle_courtyard_seg7_dl_07005938 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(castle_courtyard_seg7_dl_070058A8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

