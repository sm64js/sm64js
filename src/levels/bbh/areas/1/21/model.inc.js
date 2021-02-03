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
const bbh_seg7_vertex_07012580 = [
	{ pos: [ -1049, 1178, 1075 ], flag: 0, tc: [ 542, 536 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -869, 1382, 1075 ], flag: 0, tc: [ 990, 990 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1049, 1382, 1075 ], flag: 0, tc: [ 542, 990 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1279, 922, 1075 ], flag: 0, tc: [ 0, 0 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1100, 922, 1075 ], flag: 0, tc: [ 416, 0 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1100, 1126, 1075 ], flag: 0, tc: [ 416, 422 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1279, 1126, 1075 ], flag: 0, tc: [ 0, 422 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1049, 922, 1075 ], flag: 0, tc: [ 542, 0 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -869, 922, 1075 ], flag: 0, tc: [ 990, 0 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -869, 1126, 1075 ], flag: 0, tc: [ 990, 422 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1049, 1126, 1075 ], flag: 0, tc: [ 542, 422 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1279, 1178, 1075 ], flag: 0, tc: [ 0, 536 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1100, 1382, 1075 ], flag: 0, tc: [ 416, 990 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1279, 1382, 1075 ], flag: 0, tc: [ 0, 990 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -1100, 1178, 1075 ], flag: 0, tc: [ 416, 536 ], color: [ 9, 179, 255, 128 ] },
	{ pos: [ -869, 1178, 1075 ], flag: 0, tc: [ 990, 536 ], color: [ 9, 179, 255, 128 ] },
]

export const bbh_seg7_dl_07012680 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900B000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012580, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070126E8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07012680),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

