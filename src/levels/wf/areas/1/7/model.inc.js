import {grass_09000800, } from "../../../../../textures/grass.js"
import {grass_09001000, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07006668 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07006680 = [
	{ pos: [ 256, 1075, -255 ], flag: 0, tc: [ -9228, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 1075, -255 ], flag: 0, tc: [ -9228, -1054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 1075, 256 ], flag: 0, tc: [ -11272, -1054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 256, 1075, 256 ], flag: 0, tc: [ -11272, 990 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_070066C0 = [
	{ pos: [ 256, 1075, 256 ], flag: 0, tc: [ 3034, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, 0, -255 ], flag: 0, tc: [ 5078, 4258 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, 1075, -255 ], flag: 0, tc: [ 5078, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, 0, 256 ], flag: 0, tc: [ 3034, 4258 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -255, 1075, 256 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 256, 0, 256 ], flag: 0, tc: [ 990, 4258 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 256, 1075, 256 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -255, 0, 256 ], flag: 0, tc: [ -1052, 4258 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 256, 1075, -255 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -255, 0, -255 ], flag: 0, tc: [ 990, 4258 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -255, 1075, -255 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 0, -255 ], flag: 0, tc: [ -1052, 4258 ], color: [ 0, 0, 129, 255 ] },
]

export const wf_seg7_dl_07006780 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07006668.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07006668.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07006680, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_070067C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_070066C0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07006820 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_07006780),
	Gbi.gsSPDisplayList(wf_seg7_dl_070067C8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

