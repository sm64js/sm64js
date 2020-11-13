import {grass_09007800, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07009E30 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07009E48 = [
	{ pos: [ 15, 0, 0 ], flag: 0, tc: [ 1502, 990 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ 8, 2100, 13 ], flag: 0, tc: [ 990, -19972 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ 8, 0, 13 ], flag: 0, tc: [ 990, 990 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ -7, 2100, -12 ], flag: 0, tc: [ 156, 1020 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -14, 2100, 0 ], flag: 0, tc: [ 768, 1020 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7, 2100, 13 ], flag: 0, tc: [ 1076, 490 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 8, 2100, 13 ], flag: 0, tc: [ 768, -40 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 15, 2100, 0 ], flag: 0, tc: [ 156, -40 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 8, 2100, -12 ], flag: 0, tc: [ -150, 490 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 8, 0, 13 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7, 2100, 13 ], flag: 0, tc: [ 480, -19972 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7, 0, 13 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7, 0, 13 ], flag: 0, tc: [ 480, 990 ], color: [ 145, 0, 60, 255 ] },
	{ pos: [ -14, 2100, 0 ], flag: 0, tc: [ 0, -19972 ], color: [ 145, 0, 60, 255 ] },
	{ pos: [ -14, 0, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 145, 0, 60, 255 ] },
	{ pos: [ -7, 2100, 13 ], flag: 0, tc: [ 480, -19972 ], color: [ 145, 0, 60, 255 ] },
]

const wf_seg7_vertex_07009F48 = [
	{ pos: [ 8, 0, 13 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 8, 2100, 13 ], flag: 0, tc: [ 990, -19972 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7, 2100, 13 ], flag: 0, tc: [ 480, -19972 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -14, 0, 0 ], flag: 0, tc: [ 3034, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -14, 2100, 0 ], flag: 0, tc: [ 3034, -19972 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -7, 2100, -12 ], flag: 0, tc: [ 2524, -19972 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 15, 0, 0 ], flag: 0, tc: [ 1502, 990 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ 15, 2100, 0 ], flag: 0, tc: [ 1502, -19972 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ 8, 2100, 13 ], flag: 0, tc: [ 990, -19972 ], color: [ 111, 0, 60, 255 ] },
	{ pos: [ 8, 0, -12 ], flag: 0, tc: [ 2012, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ 15, 2100, 0 ], flag: 0, tc: [ 1502, -19972 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ 15, 0, 0 ], flag: 0, tc: [ 1502, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ 8, 2100, -12 ], flag: 0, tc: [ 2012, -19972 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -7, 0, -12 ], flag: 0, tc: [ 2524, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 8, 2100, -12 ], flag: 0, tc: [ 2012, -19972 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 8, 0, -12 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_0700A048 = [
	{ pos: [ -7, 0, -12 ], flag: 0, tc: [ 2524, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7, 2100, -12 ], flag: 0, tc: [ 2524, -19972 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 8, 2100, -12 ], flag: 0, tc: [ 2012, -19972 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -14, 0, 0 ], flag: 0, tc: [ 3034, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -7, 2100, -12 ], flag: 0, tc: [ 2524, -19972 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ -7, 0, -12 ], flag: 0, tc: [ 2524, 990 ], color: [ 147, 0, 193, 255 ] },
]

export const wf_seg7_dl_0700A0A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07009E30.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07009E30.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07009E48, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  3,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07009F48, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 12, 10, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_0700A048, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_0700A170 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_0700A0A8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

