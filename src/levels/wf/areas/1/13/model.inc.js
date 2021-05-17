import {grass_09006800, } from "../../../../../textures/grass.js"
import {grass_09000800, } from "../../../../../textures/grass.js"
import {grass_09001000, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07009900 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07009918 = [
	{ pos: [ 794, 38, -255 ], flag: 0, tc: [ 22452, 6606 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 128, 38, -255 ], flag: 0, tc: [ 20408, 6606 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 128, 38, 512 ], flag: 0, tc: [ 20408, 8650 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 794, 38, 512 ], flag: 0, tc: [ 22452, 8650 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_07009958 = [
	{ pos: [ 794, -89, 512 ], flag: 0, tc: [ -3096, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 128, -89, -255 ], flag: 0, tc: [ 990, -3098 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 794, -89, -255 ], flag: 0, tc: [ -3096, -3098 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 794, 38, 512 ], flag: 0, tc: [ 0, 478 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 794, -89, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 794, -89, -255 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 794, 38, -255 ], flag: 0, tc: [ 2012, 478 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 38, 512 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, -89, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 794, -89, 512 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 794, 38, 512 ], flag: 0, tc: [ 2012, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, 38, -255 ], flag: 0, tc: [ -1052, 480 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, -89, -255 ], flag: 0, tc: [ -1052, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, -89, 512 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, 38, 512 ], flag: 0, tc: [ 990, 478 ], color: [ 129, 0, 0, 255 ] },
]

const wf_seg7_vertex_07009A48 = [
	{ pos: [ 794, 38, -255 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, -89, -255 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 38, -255 ], flag: 0, tc: [ 2012, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 794, -89, 512 ], flag: 0, tc: [ -3096, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 128, -89, 512 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 128, -89, -255 ], flag: 0, tc: [ 990, -3098 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 794, -89, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_07009AB8 = [
	{ pos: [ -666, 38, -178 ], flag: 0, tc: [ 7122, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -666, 63, -178 ], flag: 0, tc: [ 7122, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, 63, -178 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -666, 38, -76 ], flag: 0, tc: [ 990, 376 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -666, 63, -76 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -666, 63, -178 ], flag: 0, tc: [ 172, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -666, 38, -178 ], flag: 0, tc: [ 172, 376 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 358, 63, -178 ], flag: 0, tc: [ 4568, -1310 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -666, 63, -178 ], flag: 0, tc: [ -13316, -1310 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -666, 63, -76 ], flag: 0, tc: [ -13316, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 358, 63, -76 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 358, 38, -76 ], flag: 0, tc: [ 2012, 1396 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 358, 63, -76 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -666, 63, -76 ], flag: 0, tc: [ -5140, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -666, 38, -76 ], flag: 0, tc: [ -5140, 1396 ], color: [ 0, 0, 127, 255 ] },
]

const wf_seg7_vertex_07009BA8 = [
	{ pos: [ 358, 38, -178 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, 63, -178 ], flag: 0, tc: [ 990, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, 63, -76 ], flag: 0, tc: [ 0, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -666, 38, -178 ], flag: 0, tc: [ 7122, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, 63, -178 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, 38, -178 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, 38, -76 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -666, 38, -76 ], flag: 0, tc: [ -13316, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -666, 38, -178 ], flag: 0, tc: [ -13316, -1310 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 358, 38, -178 ], flag: 0, tc: [ 4568, -1310 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 358, 38, -76 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
]

export const wf_seg7_dl_07009C58 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07009900.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07009900.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07009918, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07009CA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07009958, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07009A48, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07009D20 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09006800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07009AB8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07009BA8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07009DB0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_07009C58),
	Gbi.gsSPDisplayList(wf_seg7_dl_07009CA0),
	Gbi.gsSPDisplayList(wf_seg7_dl_07009D20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

