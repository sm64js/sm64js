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
const bbh_seg7_vertex_0701EF58 = [
	{ pos: [ -1561, 538, -1673 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1535, 614, -1648 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1535, 538, -1648 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1561, 614, -1673 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1586, 538, -1648 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1561, 538, -1673 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1586, 614, -1648 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1561, 614, -1673 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1586, 614, -1648 ], flag: 0, tc: [ 990, 480 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1535, 614, -1648 ], flag: 0, tc: [ 0, 480 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1586, 538, -1648 ], flag: 0, tc: [ 990, 480 ], color: [ 255, 204, 144, 255 ] },
	{ pos: [ -1535, 538, -1648 ], flag: 0, tc: [ 0, 480 ], color: [ 255, 204, 144, 255 ] },
]

export const bbh_seg7_dl_0701F018 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09006800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701EF58, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  5, 0x0,  4,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  9, 0x0, 10,  5, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701F070 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701F018),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

