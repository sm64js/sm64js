import * as Gbi from "../../../../../include/gbi"
import {
    spooky_09000000,
    spooky_09000800,
    spooky_09001800,
    spooky_09002800,
    spooky_09003800,
    spooky_09004800,
    spooky_09005000,
    spooky_09006000,
    spooky_09006800,
    spooky_09007000,
    spooky_09008000,
    spooky_09008800,
    spooky_09009000,
    spooky_0900A000,
    spooky_0900A800,
    spooky_0900B000,
    spooky_0900B800
} from "../../../../../textures/spooky"

import {
    bbh_seg7_texture_07000000,
    bbh_seg7_texture_07001000,
    bbh_seg7_texture_07001800,
    bbh_seg7_texture_07002000,
    bbh_seg7_texture_07003000,
    bbh_seg7_texture_07003400,
    bbh_seg7_texture_07004400
} from "../../../texture.inc"
const bbh_seg7_vertex_07015098 = [
	{ pos: [ -306, 819, -1125 ], flag: 0, tc: [ -2074, -1564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -204, 819, -1330 ], flag: 0, tc: [ -1564, -2588 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -306, 819, -1535 ], flag: 0, tc: [ -2074, -3610 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 819, 819, -1330 ], flag: 0, tc: [ 3546, -2588 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1024, 819, -1535 ], flag: 0, tc: [ 4568, -3610 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 819, 819, -306 ], flag: 0, tc: [ 3546, 2520 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1024, 819, -101 ], flag: 0, tc: [ 4568, 3542 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -204, 819, -1023 ], flag: 0, tc: [ -1564, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -716, 819, -1125 ], flag: 0, tc: [ -4118, -1564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -306, 819, -921 ], flag: 0, tc: [ -2074, -542 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 819, -921 ], flag: 0, tc: [ 0, -544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 819, -1023 ], flag: 0, tc: [ 2524, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -511, 819, -511 ], flag: 0, tc: [ -3096, 1500 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -716, 819, -101 ], flag: 0, tc: [ -4118, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -306, 819, -613 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -204, 819, -511 ], flag: 0, tc: [ -1564, 1500 ], color: [ 255, 255, 255, 255 ] },
]

const bbh_seg7_vertex_07015198 = [
	{ pos: [ -716, 819, -101 ], flag: 0, tc: [ -4118, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -511, 819, -204 ], flag: 0, tc: [ -3096, 3032 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -511, 819, -511 ], flag: 0, tc: [ -3096, 1500 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -204, 819, -511 ], flag: 0, tc: [ -1564, 1500 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 512, 819, -613 ], flag: 0, tc: [ 2012, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -306, 819, -613 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1024, 819, -101 ], flag: 0, tc: [ 4568, 3542 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -204, 819, -204 ], flag: 0, tc: [ -1564, 3032 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 512, 819, -306 ], flag: 0, tc: [ 2012, 2520 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 819, 819, -306 ], flag: 0, tc: [ 3546, 2520 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 819, -613 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 819, -818 ], flag: 0, tc: [ 2524, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 819, -921 ], flag: 0, tc: [ 0, -544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 819, 819, -613 ], flag: 0, tc: [ 3546, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 614, 819, -1023 ], flag: 0, tc: [ 2524, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 819, 819, -818 ], flag: 0, tc: [ 3546, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const bbh_seg7_dl_07015298 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015098, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  4,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  0,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  0, 0x0,  7,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11,  7, 10, 0x0,  8,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  9, 0x0,  8, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 14,  9, 0x0, 12, 15, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015198, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  7, 0x0,  0,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 3,  7,  8, 0x0,  6,  8,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  8, 0x0,  3,  8,  4, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0, 13, 15, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07015398 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07015298),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

