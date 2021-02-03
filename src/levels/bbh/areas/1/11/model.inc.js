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
const bbh_seg7_vertex_0700BA50 = [
	{ pos: [ 2739, 819, 2166 ], flag: 0, tc: [ 0, 172 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 1203, 2550 ], flag: 0, tc: [ 0, 786 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 1459, 2550 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 0, 2268 ], flag: 0, tc: [ 0, 212 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 282, 2550 ], flag: 0, tc: [ 0, 746 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 538, 2550 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 0, 2012 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 0, 2268 ], flag: 0, tc: [ 990, 212 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 282, 2550 ], flag: 0, tc: [ 990, 746 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 538, 2550 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 0, 2012 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2739, 819, 1910 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 819, 2166 ], flag: 0, tc: [ 990, 172 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 819, 1910 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 1459, 2550 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 236, 64, 80 ] },
	{ pos: [ 2995, 1203, 2550 ], flag: 0, tc: [ 990, 786 ], color: [ 255, 236, 64, 80 ] },
]

export const bbh_seg7_dl_0700BB50 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900B000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BA50, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  4, 0x0,  6,  5,  9, 0x0),
	...Gbi.gsSP2Triangles( 6,  9, 10, 0x0, 10,  8,  7, 0x0),
	...Gbi.gsSP2Triangles(10,  9,  8, 0x0,  0,  2, 11, 0x0),
	...Gbi.gsSP2Triangles(12,  1,  0, 0x0, 13, 14, 15, 0x0),
	...Gbi.gsSP2Triangles(12, 15,  1, 0x0, 11,  2, 14, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 13, 0x0, 13, 15, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700BBF8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700BB50),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

