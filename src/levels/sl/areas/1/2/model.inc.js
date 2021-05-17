import * as Gbi from "../../../../../include/gbi"
import {
    snow_09000800} from "../../../../../textures/snow"
const sl_seg7_lights_07005520 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const sl_seg7_vertex_07005538 = [
	{ pos: [ 768, 1352, -5375 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -200, 1352, -3761 ], flag: 0, tc: [ 1866, -908 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1091, 1352, -4084 ], flag: 0, tc: [ 1866, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1024, 922, -3071 ], flag: 0, tc: [ -3096, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1023, 922, -3071 ], flag: 0, tc: [ -3096, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 922, -1023 ], flag: 0, tc: [ -1052, 1806 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1024, 922, -1023 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 365, 3328, 2052 ], flag: 0, tc: [ 2016, 626 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2027, 3328, 608 ], flag: 0, tc: [ 576, -1034 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1725, 3328, 260 ], flag: 0, tc: [ 228, -732 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 63, 3328, 1704 ], flag: 0, tc: [ 1668, 928 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3328, 973, -4351 ], flag: 0, tc: [ -4374, -2332 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2304, 973, -5375 ], flag: 0, tc: [ -5396, -1310 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2304, 973, -4351 ], flag: 0, tc: [ -4374, -1310 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3328, 973, -5375 ], flag: 0, tc: [ -5396, -2332 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -522, 1352, -5052 ], flag: 0, tc: [ 0, -908 ], color: [ 0, 127, 0, 255 ] },
]

export const sl_seg7_dl_07005638 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(sl_seg7_lights_07005520.l[0], 1),
	Gbi.gsSPLight(sl_seg7_lights_07005520.a, 2),
	Gbi.gsSPVertex(sl_seg7_vertex_07005538, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_070056B0 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 180),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07005638),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

