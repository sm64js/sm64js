import {wf_seg7_texture_07001000, } from "../../../textures.inc.js"
import {wf_seg7_texture_07000000, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07009070 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07009088 = [
	{ pos: [ -127, 0, -127 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 256, -127 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 0, -127 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -127, 256, -127 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_070090C8 = [
	{ pos: [ -127, 0, 179 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 256, 179 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 256, -127 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, 0, -127 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 256, -127 ], flag: 0, tc: [ 990, -30 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 256, 179 ], flag: 0, tc: [ 0, -30 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 0, 179 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -127, 256, -127 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -127, 256, 179 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 128, 256, 179 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 128, 256, -127 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 128, 0, 179 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 256, 179 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 0, 179 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, 256, 179 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 0, -127 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
]

export const wf_seg7_dl_070091C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, wf_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07009070.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07009070.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07009088, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07009210 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, wf_seg7_texture_07001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_070090C8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07009278 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_070091C8),
	Gbi.gsSPDisplayList(wf_seg7_dl_07009210),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

