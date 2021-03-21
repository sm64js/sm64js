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
const bbh_seg7_lights_0701E948 = Gbi.gdSPDefLights1(
	    0x24, 0x11, 0x0b,
	    0x5a, 0x2c, 0x1d, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0701E960 = Gbi.gdSPDefLights1(
	    0x3c, 0x3c, 0x3c,
	    0x96, 0x96, 0x96, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0701E978 = [
	{ pos: [ 1638, 3021, 730 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ 1229, 3021, 730 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ 1229, 2750, 1037 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ 1638, 2750, 1037 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ -306, 2750, 1037 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ 102, 3021, 730 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ -306, 3021, 730 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 95, 84, 255 ] },
	{ pos: [ 102, 2750, 1037 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 95, 84, 255 ] },
]

const bbh_seg7_vertex_0701E9F8 = [
	{ pos: [ 1843, 1536, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1434, 1126, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1843, 1126, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 614, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 205, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 205, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 614, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1843, 614, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1434, 205, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1843, 205, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1434, 614, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 1536, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 1126, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 1126, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 1536, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0701EAE8 = [
	{ pos: [ 3072, 614, 2673 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2662, 205, 2673 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3072, 205, 2673 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1843, 1536, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1434, 1536, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1434, 1126, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 614, 2673 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1740, 205, 2673 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 205, 2673 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1740, 614, 2673 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 1536, 2673 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1740, 1126, 2673 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 1126, 2673 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1740, 1536, 2673 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2662, 614, 2673 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0701EBD8 = [
	{ pos: [ 3072, 1536, 2673 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2662, 1126, 2673 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3072, 1126, 2673 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2662, 1536, 2673 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

export const bbh_seg7_dl_0701EC18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701E948.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701E948.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701E978, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0701E960.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701E960.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701E9F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701EAE8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701EBD8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701ED18 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701EC18),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

