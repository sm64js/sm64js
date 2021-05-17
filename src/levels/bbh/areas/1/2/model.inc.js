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
const bbh_seg7_vertex_070076C0 = [
	{ pos: [ 1044, 819, 1659 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1044, 922, 2048 ], flag: 0, tc: [ 3852, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1044, 819, 2048 ], flag: 0, tc: [ 3852, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1044, 922, 1659 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1044, 819, 1659 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 819, 1659 ], flag: 0, tc: [ -9024, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 922, 1659 ], flag: 0, tc: [ -9024, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1044, 922, 1659 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1229, 819, 389 ], flag: 0, tc: [ -3300, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 922, 389 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1229, 922, 389 ], flag: 0, tc: [ -3300, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 819, 389 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 922, 389 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 922, 2048 ], flag: 0, tc: [ -15564, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 819, 2048 ], flag: 0, tc: [ -15564, 990 ], color: [ 0, 0, 0, 255 ] },
]

const bbh_seg7_vertex_070077B0 = [
	{ pos: [ 1659, 922, 389 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 819, 389 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 819, 799 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 922, 799 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 717, 922, 389 ], flag: 0, tc: [ 3238, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 922, 389 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 389, 819, 389 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 717, 819, 389 ], flag: 0, tc: [ 3238, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 2048, 922, 799 ], flag: 0, tc: [ 3852, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 819, 799 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 2048, 819, 799 ], flag: 0, tc: [ 3852, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1229, 819, 389 ], flag: 0, tc: [ -3300, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 819, 389 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 922, 389 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 0, 255 ] },
	{ pos: [ 1659, 922, 799 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 0, 255 ] },
]

export const bbh_seg7_dl_070078A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_070076C0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070077B0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 8, 14,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07007940 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070078A0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

