import {grass_09008000, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_0700D0A8 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_0700D0C0 = [
	{ pos: [ -613, 0, -2175 ], flag: 0, tc: [ -20266, -542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -613, -383, 0 ], flag: 0, tc: [ -13316, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -613, 0, 0 ], flag: 0, tc: [ -13316, -542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 154, -383, 2432 ], flag: 0, tc: [ -3096, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 154, 640, 2432 ], flag: 0, tc: [ -3096, -2002 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 154, 0, 0 ], flag: 0, tc: [ -13316, -542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 154, -383, 0 ], flag: 0, tc: [ -13316, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 614, 640, 2432 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 122, 224, 255 ] },
	{ pos: [ 614, 0, 0 ], flag: 0, tc: [ 0, -10252 ], color: [ 0, 122, 224, 255 ] },
	{ pos: [ 154, 0, 0 ], flag: 0, tc: [ -1870, -10252 ], color: [ 0, 122, 224, 255 ] },
	{ pos: [ 154, 640, 2432 ], flag: 0, tc: [ -1870, 0 ], color: [ 0, 122, 224, 255 ] },
	{ pos: [ 154, -383, 0 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 154, 0, 0 ], flag: 0, tc: [ 3034, -542 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -613, 0, 0 ], flag: 0, tc: [ 172, -542 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -613, -383, 0 ], flag: 0, tc: [ 172, 990 ], color: [ 0, 0, 127, 255 ] },
]

const wf_seg7_vertex_0700D1B0 = [
	{ pos: [ 614, 0, -2175 ], flag: 0, tc: [ -3914, -542 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, -383, -2175 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 0, -2175 ], flag: 0, tc: [ 990, -542 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 0, -2175 ], flag: 0, tc: [ -20266, -542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -613, -383, -2175 ], flag: 0, tc: [ -20266, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -613, -383, 0 ], flag: 0, tc: [ -13316, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -613, 0, -2175 ], flag: 0, tc: [ -3914, -6164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -613, 0, 0 ], flag: 0, tc: [ -3914, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 614, 0, 0 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 614, 0, -2175 ], flag: 0, tc: [ 990, -6164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 614, -383, -2175 ], flag: 0, tc: [ -3914, 990 ], color: [ 0, 0, 129, 255 ] },
]

export const wf_seg7_dl_0700D260 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_0700D0A8.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_0700D0A8.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_0700D0C0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_0700D1B0, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0, 10,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_0700D300 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_0700D260),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

