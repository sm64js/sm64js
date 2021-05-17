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
const bbh_seg7_vertex_07015408 = [
	{ pos: [ 358, 1434, -1525 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -50, 1024, -1525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 358, 1024, -1525 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -410, 563, -1519 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -700, 563, -1229 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -700, 358, -1229 ], flag: 0, tc: [ 0, 480 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -410, 358, -1519 ], flag: 0, tc: [ 990, 480 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -599, 211, -1129 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -310, 211, -1418 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 358, 614, -1525 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -50, 205, -1525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 358, 205, -1525 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -50, 614, -1525 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 205, -613 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 614, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 205, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
]

const bbh_seg7_vertex_07015508 = [
	{ pos: [ 358, 1434, -1525 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -50, 1434, -1525 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -50, 1024, -1525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 205, -1023 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 614, -613 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 205, -613 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 614, -1023 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 1024, -1023 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 1434, -1023 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 1434, -613 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ -706, 1024, -613 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 205, -613 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 614, -613 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 614, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
]

const bbh_seg7_vertex_070155E8 = [
	{ pos: [ 1014, 1024, -613 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 1434, -613 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 1434, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1014, 1024, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
]

export const bbh_seg7_dl_07015628 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015408, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  5,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 12, 10, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015508, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070155E8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070156E0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07015628),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

