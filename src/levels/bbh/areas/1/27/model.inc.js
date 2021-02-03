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
const bbh_seg7_vertex_07015750 = [
	{ pos: [ 1014, 307, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 410, -716 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 963, 410, -818 ], flag: 0, tc: [ 478, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 512, -818 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 410, -921 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 1126, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 1229, -716 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 963, 1229, -818 ], flag: 0, tc: [ 478, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 1229, -921 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1014, 1331, -818 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 1229, -716 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 1126, -818 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -654, 1229, -818 ], flag: 0, tc: [ 480, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 1229, -921 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 1331, -818 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const bbh_seg7_vertex_07015840 = [
	{ pos: [ -706, 512, -818 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 410, -716 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -654, 410, -818 ], flag: 0, tc: [ 480, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 307, -818 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -706, 410, -921 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 256, 410, -1525 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 512, -1525 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 410, -1474 ], flag: 0, tc: [ 480, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 307, -1525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 51, 410, -1525 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 51, 1229, -1525 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 1126, -1525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 1229, -1474 ], flag: 0, tc: [ 480, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 256, 1229, -1525 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 154, 1331, -1525 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const bbh_seg7_dl_07015930 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09006800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015750, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  2, 0x0,  4,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  8,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  7, 0x0,  9,  8,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 11, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 12, 0x0, 14, 10, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07015840, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  2, 0x0,  4,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  8,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  7, 0x0,  9,  8,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 11, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 12, 0x0, 14, 10, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07015A20 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07015930),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

