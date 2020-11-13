import {grass_09002000, } from "../../../../../textures/grass.js"
import {grass_09005800, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_0700AC70 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_0700AC88 = [
	{ pos: [ 1536, 102, -767 ], flag: 0, tc: [ 990, 5076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1023, 102, 768 ], flag: 0, tc: [ -2074, 1244 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1024, 102, 768 ], flag: 0, tc: [ -2074, 5332 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1535, 102, 256 ], flag: 0, tc: [ -1052, 224 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1536, 102, 256 ], flag: 0, tc: [ -1052, 6354 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1535, 102, -767 ], flag: 0, tc: [ 990, 224 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_0700ACE8 = [
	{ pos: [ -695, 133, 292 ], flag: 0, tc: [ -2074, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -419, 133, 568 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -327, 133, 476 ], flag: 0, tc: [ 2012, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -327, 133, 292 ], flag: 0, tc: [ 2012, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -419, 133, 200 ], flag: 0, tc: [ 990, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -603, 133, 200 ], flag: 0, tc: [ -1052, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -603, 133, 568 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -695, 133, 476 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 768, 154, 0 ], flag: 0, tc: [ 3034, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 896, 154, 384 ], flag: 0, tc: [ 0, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1152, 154, 384 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 768, 154, 256 ], flag: 0, tc: [ 990, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1152, 154, -127 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 896, 154, -127 ], flag: 0, tc: [ 4056, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1280, 154, 0 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1280, 154, 256 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
]

export const wf_seg7_dl_0700ADE8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_0700AC70.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_0700AC70.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_0700AC88, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  0,  5,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_0700AE40 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_0700ACE8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  5, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  1, 0x0,  0,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 12, 13, 0x0,  8, 14, 12, 0x0),
	...Gbi.gsSP2Triangles( 8, 10, 15, 0x0,  8, 15, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_0700AEC8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_0700ADE8),
	Gbi.gsSPDisplayList(wf_seg7_dl_0700AE40),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

