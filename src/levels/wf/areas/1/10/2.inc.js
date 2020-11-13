import {grass_09007000, } from "../../../../../textures/grass.js"
import {grass_09009000, } from "../../../../../textures/grass.js"
import {grass_09007800, } from "../../../../../textures/grass.js"
import {wf_seg7_texture_07001800, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07008838 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07008850 = [
	{ pos: [ 128, 1792, 128 ], flag: 0, tc: [ 1244, 1000 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, 2048, 128 ], flag: 0, tc: [ 1244, -20 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 2048, 128 ], flag: 0, tc: [ 222, -20 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 1792, -127 ], flag: 0, tc: [ 1236, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 2048, -127 ], flag: 0, tc: [ 214, -30 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 1792, -127 ], flag: 0, tc: [ 214, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -127, 2048, -127 ], flag: 0, tc: [ 1236, -30 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -127, 1792, 128 ], flag: 0, tc: [ 1226, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 2048, 128 ], flag: 0, tc: [ 1226, -34 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 2048, -127 ], flag: 0, tc: [ 204, -34 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 1792, -127 ], flag: 0, tc: [ 204, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, 1792, -127 ], flag: 0, tc: [ 1244, 996 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 2048, -127 ], flag: 0, tc: [ 1244, -24 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 2048, 128 ], flag: 0, tc: [ 222, -24 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 1792, 128 ], flag: 0, tc: [ 222, 996 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -127, 1792, 128 ], flag: 0, tc: [ 222, 1000 ], color: [ 0, 0, 127, 255 ] },
]

const wf_seg7_vertex_07008950 = [
	{ pos: [ 256, 2048, 256 ], flag: 0, tc: [ 4056, 4054 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -255, 2048, 256 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -255, 2048, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 256, 2048, -255 ], flag: 0, tc: [ 0, 4054 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 0, 1792, -537 ], flag: 0, tc: [ -802, -1362 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 466, 1792, 269 ], flag: 0, tc: [ 1056, 1858 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 466, 1792, -268 ], flag: 0, tc: [ 1056, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -465, 1792, -268 ], flag: 0, tc: [ -2662, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -465, 1792, 269 ], flag: 0, tc: [ -2662, 1858 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 0, 1792, 538 ], flag: 0, tc: [ -802, 2932 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_070089F0 = [
	{ pos: [ 466, 1536, -268 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 1792, -268 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 1792, 269 ], flag: 0, tc: [ -82, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -465, 1536, 269 ], flag: 0, tc: [ 1042, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 1792, -268 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 1536, -268 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 1792, 269 ], flag: 0, tc: [ 1042, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, 1536, 538 ], flag: 0, tc: [ 1042, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -465, 1792, 269 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -465, 1536, 269 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 0, 1792, 538 ], flag: 0, tc: [ 1042, 0 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 466, 1536, 269 ], flag: 0, tc: [ 990, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 1792, 538 ], flag: 0, tc: [ -82, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 1536, 538 ], flag: 0, tc: [ -82, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 466, 1792, 269 ], flag: 0, tc: [ 990, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 466, 1536, 269 ], flag: 0, tc: [ -82, 990 ], color: [ 127, 0, 0, 255 ] },
]

const wf_seg7_vertex_07008AF0 = [
	{ pos: [ 0, 1536, -537 ], flag: 0, tc: [ 990, 990 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 466, 1792, -268 ], flag: 0, tc: [ -82, 0 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 466, 1536, -268 ], flag: 0, tc: [ -82, 990 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 0, 1792, -537 ], flag: 0, tc: [ 990, 0 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -465, 1536, -268 ], flag: 0, tc: [ 1042, 990 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 0, 1792, -537 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 0, 1536, -537 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ -465, 1792, -268 ], flag: 0, tc: [ 1042, 0 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 256, 2048, -255 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ -255, 2048, -255 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 0, 2560, 0 ], flag: 0, tc: [ 990, -3580 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ -255, 2048, 256 ], flag: 0, tc: [ -2414, 982 ], color: [ 0, 56, 113, 255 ] },
	{ pos: [ 256, 2048, 256 ], flag: 0, tc: [ 1672, 982 ], color: [ 0, 56, 113, 255 ] },
	{ pos: [ 0, 2560, 0 ], flag: 0, tc: [ -370, -3588 ], color: [ 0, 56, 113, 255 ] },
]

const wf_seg7_vertex_07008BD0 = [
	{ pos: [ -255, 2048, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 143, 56, 0, 255 ] },
	{ pos: [ -255, 2048, 256 ], flag: 0, tc: [ 4056, 990 ], color: [ 143, 56, 0, 255 ] },
	{ pos: [ 0, 2560, 0 ], flag: 0, tc: [ 2012, -3580 ], color: [ 143, 56, 0, 255 ] },
	{ pos: [ 256, 2048, 256 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 56, 0, 255 ] },
	{ pos: [ 256, 2048, -255 ], flag: 0, tc: [ 4056, 990 ], color: [ 113, 56, 0, 255 ] },
	{ pos: [ 0, 2560, 0 ], flag: 0, tc: [ 2012, -3580 ], color: [ 113, 56, 0, 255 ] },
]

const wf_seg7_vertex_07008C30 = [
	{ pos: [ 466, 0, -268 ], flag: 0, tc: [ 1246, 7120 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 1536, 269 ], flag: 0, tc: [ -94, -544 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 0, 269 ], flag: 0, tc: [ -94, 7120 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -465, 0, 269 ], flag: 0, tc: [ 1246, 7120 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 1536, 269 ], flag: 0, tc: [ 1246, -542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 1536, -268 ], flag: 0, tc: [ -94, -544 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -465, 0, -268 ], flag: 0, tc: [ -94, 7120 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, 0, 538 ], flag: 0, tc: [ 1246, 7120 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 0, 1536, 538 ], flag: 0, tc: [ 1246, -542 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -465, 1536, 269 ], flag: 0, tc: [ -94, -542 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -465, 0, 269 ], flag: 0, tc: [ -94, 7120 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 466, 0, 269 ], flag: 0, tc: [ 1246, 7120 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 466, 1536, 269 ], flag: 0, tc: [ 1246, -544 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 1536, 538 ], flag: 0, tc: [ -94, -544 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 0, 538 ], flag: 0, tc: [ -94, 7120 ], color: [ 63, 0, 109, 255 ] },
]

const wf_seg7_vertex_07008D20 = [
	{ pos: [ -465, 0, -268 ], flag: 0, tc: [ 1246, 7120 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ -465, 1536, -268 ], flag: 0, tc: [ 1246, -544 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 0, 1536, -537 ], flag: 0, tc: [ -94, -544 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 466, 0, -268 ], flag: 0, tc: [ 1246, 7120 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 1536, -268 ], flag: 0, tc: [ 1246, -544 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 466, 1536, 269 ], flag: 0, tc: [ -94, -544 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 0, 0, -537 ], flag: 0, tc: [ 1246, 7120 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 0, 1536, -537 ], flag: 0, tc: [ 1246, -542 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 466, 1536, -268 ], flag: 0, tc: [ -94, -544 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 466, 0, -268 ], flag: 0, tc: [ -94, 7120 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ 0, 0, -537 ], flag: 0, tc: [ -94, 7120 ], color: [ 193, 0, 147, 255 ] },
]

export const wf_seg7_dl_07008DD0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, wf_seg7_texture_07001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07008838.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07008838.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07008850, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008E48 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07008950, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  9, 0x0,  4,  9,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008EA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_070089F0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07008AF0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07008BD0, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008F58 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07008C30, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07008D20, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008FE8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008DD0),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008E48),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008EA0),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008F58),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

