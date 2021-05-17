import {grass_09001000, } from "../../../../../textures/grass.js"
import {grass_09000800, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07007298 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_070072B0 = [
	{ pos: [ -255, 65, 256 ], flag: 0, tc: [ -1308, 338 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ 205, -62, 230 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ 256, 65, 256 ], flag: 0, tc: [ 1246, 338 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ 256, 65, 256 ], flag: 0, tc: [ -158, 302 ], color: [ 117, 209, 0, 255 ] },
	{ pos: [ 205, -62, -229 ], flag: 0, tc: [ 2268, 990 ], color: [ 117, 209, 0, 255 ] },
	{ pos: [ 256, 65, -255 ], flag: 0, tc: [ 2396, 302 ], color: [ 117, 209, 0, 255 ] },
	{ pos: [ 205, -62, 230 ], flag: 0, tc: [ 0, 990 ], color: [ 117, 209, 0, 255 ] },
	{ pos: [ 256, 65, -255 ], flag: 0, tc: [ -1308, 338 ], color: [ 0, 231, 132, 255 ] },
	{ pos: [ 205, -62, -229 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 231, 132, 255 ] },
	{ pos: [ -204, -62, -229 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 231, 132, 255 ] },
	{ pos: [ -255, 65, -255 ], flag: 0, tc: [ 1246, 338 ], color: [ 0, 231, 132, 255 ] },
	{ pos: [ -255, 65, -255 ], flag: 0, tc: [ -1562, 0 ], color: [ 139, 209, 0, 255 ] },
	{ pos: [ -204, -62, 230 ], flag: 0, tc: [ 862, 656 ], color: [ 139, 209, 0, 255 ] },
	{ pos: [ -255, 65, 256 ], flag: 0, tc: [ 990, 0 ], color: [ 139, 209, 0, 255 ] },
	{ pos: [ -204, -62, -229 ], flag: 0, tc: [ -1436, 656 ], color: [ 139, 209, 0, 255 ] },
]

const wf_seg7_vertex_070073A0 = [
	{ pos: [ 205, -62, 230 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -204, -62, 230 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -204, -62, -229 ], flag: 0, tc: [ 990, -1310 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -255, 65, 256 ], flag: 0, tc: [ -1308, 338 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ -204, -62, 230 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ 205, -62, 230 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 231, 124, 255 ] },
	{ pos: [ 205, -62, -229 ], flag: 0, tc: [ -1052, -1310 ], color: [ 0, 129, 0, 255 ] },
]

const wf_seg7_vertex_07007410 = [
	{ pos: [ 256, 65, -255 ], flag: 0, tc: [ 990, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 65, 256 ], flag: 0, tc: [ -1564, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 256, 65, 256 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 65, -255 ], flag: 0, tc: [ -1564, -1566 ], color: [ 0, 127, 0, 255 ] },
]

export const wf_seg7_dl_07007450 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07007298.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07007298.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_070072B0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_070073A0, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_070074E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07007410, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07007518 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_07007450),
	Gbi.gsSPDisplayList(wf_seg7_dl_070074E0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

