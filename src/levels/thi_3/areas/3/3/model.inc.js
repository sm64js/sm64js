import * as Gbi from "../../../../../include/gbi"
import {
	thi_seg7_texture_07000000
} from "../../../texture.inc"
import {
    grass_09005800,
    grass_0900B800,
} from "../../../../../textures/grass"
const thi_seg7_vertex_07009740 = [
	{ pos: [ -101, 3482, 102 ], flag: 0, tc: [ 1398, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3482, -101 ], flag: 0, tc: [ 1398, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3482, -101 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1024, 2253 ], flag: 0, tc: [ 922, 650 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1024, 2458 ], flag: 0, tc: [ 922, 650 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1229, 2458 ], flag: 0, tc: [ 922, 582 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1229, 2253 ], flag: 0, tc: [ 922, 582 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1229, 2458 ], flag: 0, tc: [ 1058, 582 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1024, 2458 ], flag: 0, tc: [ 1058, 650 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1229, 2253 ], flag: 0, tc: [ 1058, 582 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1024, 2253 ], flag: 0, tc: [ 1058, 650 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3277, -101 ], flag: 0, tc: [ 1398, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3277, 102 ], flag: 0, tc: [ 1398, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3482, 102 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
]

const thi_seg7_vertex_07009820 = [
	{ pos: [ -101, 3277, 102 ], flag: 0, tc: [ 1398, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3277, -101 ], flag: 0, tc: [ 1398, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3277, -101 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3277, -101 ], flag: 0, tc: [ 1262, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3482, -101 ], flag: 0, tc: [ 1398, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3277, -101 ], flag: 0, tc: [ 1398, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3482, -101 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3277, 102 ], flag: 0, tc: [ 1262, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3482, 102 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ -101, 3277, 102 ], flag: 0, tc: [ 1398, -100 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 102, 3277, 102 ], flag: 0, tc: [ 1262, -168 ], color: [ 0, 0, 0, 255 ] },
]

const thi_seg7_vertex_070098D0 = [
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 172, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3277, 102 ], flag: 0, tc: [ -234, -2280 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ -234, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ -1392, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1229, 2253 ], flag: 0, tc: [ -1528, -1462 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1229, 2048 ], flag: 0, tc: [ -1392, -1462 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1024, 2253 ], flag: 0, tc: [ -1528, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1229, 2048 ], flag: 0, tc: [ -1392, 2214 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1229, 2253 ], flag: 0, tc: [ -1528, 1806 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1229, 2048 ], flag: 0, tc: [ -1392, 1806 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1229, 2253 ], flag: 0, tc: [ -1528, 2214 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ -1392, 1806 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 2253 ], flag: 0, tc: [ -1528, 1806 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1024, 2253 ], flag: 0, tc: [ -1528, 2214 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ -1392, 2214 ], color: [ 255, 255, 255, 255 ] },
]

const thi_seg7_vertex_070099C0 = [
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ 172, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3277, 102 ], flag: 0, tc: [ 172, 4258 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3277, -101 ], flag: 0, tc: [ -234, 4258 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 172, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3277, 102 ], flag: 0, tc: [ 172, -2280 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3277, 102 ], flag: 0, tc: [ -234, -2280 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3072, -101 ], flag: 0, tc: [ -234, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3277, -101 ], flag: 0, tc: [ -234, 4258 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3277, 102 ], flag: 0, tc: [ 172, 4258 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 172, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3072, -101 ], flag: 0, tc: [ -234, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3277, -101 ], flag: 0, tc: [ -234, -2280 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3277, -101 ], flag: 0, tc: [ 172, -2280 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 3072, -101 ], flag: 0, tc: [ 172, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 3072, -101 ], flag: 0, tc: [ -234, 4054 ], color: [ 255, 255, 255, 255 ] },
]

const thi_seg7_vertex_07009AB0 = [
	{ pos: [ 410, 1229, 2048 ], flag: 0, tc: [ -1392, -1462 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 2253 ], flag: 0, tc: [ -1528, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ -1392, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1229, 2253 ], flag: 0, tc: [ -1528, -1462 ], color: [ 255, 255, 255, 255 ] },
]

const thi_seg7_vertex_07009AF0 = [
	{ pos: [ 410, 1024, 2253 ], flag: 0, tc: [ 2012, 12230 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1024, 2458 ], flag: 0, tc: [ 2012, 13252 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1024, 2458 ], flag: 0, tc: [ 3034, 13252 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1024, 2253 ], flag: 0, tc: [ 3034, 12230 ], color: [ 0, 0, 0, 255 ] },
]

const thi_seg7_vertex_07009B30 = [
	{ pos: [ 614, 1024, 2253 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1024, 2253 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 410, 1229, 2253 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 614, 1229, 2253 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
]

export const thi_seg7_dl_07009B70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_07009740, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  7, 0x0,  6,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  9, 0x0,  9,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 10, 0x0, 11,  0, 12, 0x0),
	...Gbi.gsSP2Triangles(12,  0, 13, 0x0, 11,  1,  0, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07009820, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  3, 0x0,  9,  8,  7, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009C40 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, thi_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_070098D0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_070099C0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07009AB0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009CF8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_07009AF0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009D30 = [
	Gbi.gsSPVertex(thi_seg7_vertex_07009B30, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009D50 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009B70),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009C40),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009CF8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009D30),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

