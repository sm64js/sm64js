import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700CD88 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700CDA0 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700CDB8 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700CDD0 = [
	{ pos: [ -921, -307, -204 ], flag: 0, tc: [ 11012, -6956 ], color: [ 188, 0, 107, 255 ] },
	{ pos: [ 675, -307, 811 ], flag: 0, tc: [ 14778, -6956 ], color: [ 188, 0, 107, 255 ] },
	{ pos: [ 675, 307, 811 ], flag: 0, tc: [ 14778, -8184 ], color: [ 188, 0, 107, 255 ] },
	{ pos: [ -302, -102, -325 ], flag: 0, tc: [ 0, 1806 ], color: [ 59, 89, 189, 255 ] },
	{ pos: [ 733, -102, 592 ], flag: 0, tc: [ -2792, 1806 ], color: [ 59, 89, 189, 255 ] },
	{ pos: [ 945, -307, 506 ], flag: 0, tc: [ -2996, 2214 ], color: [ 59, 89, 189, 255 ] },
	{ pos: [ -167, -307, -477 ], flag: 0, tc: [ 0, 2214 ], color: [ 59, 89, 189, 255 ] },
	{ pos: [ 810, 307, 659 ], flag: 0, tc: [ 372, -236 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ 675, 307, 811 ], flag: 0, tc: [ 0, -236 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ 675, -307, 811 ], flag: 0, tc: [ 0, 990 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ 810, 0, 659 ], flag: 0, tc: [ 372, 376 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ 810, 0, 659 ], flag: 0, tc: [ 372, 376 ], color: [ 95, 0, 84, 255 ] },
	{ pos: [ 675, -307, 811 ], flag: 0, tc: [ 0, 990 ], color: [ 95, 0, 84, 255 ] },
	{ pos: [ 945, -307, 506 ], flag: 0, tc: [ 782, 990 ], color: [ 95, 0, 84, 255 ] },
	{ pos: [ -921, 307, -204 ], flag: 0, tc: [ 11012, -8184 ], color: [ 188, 0, 107, 255 ] },
]

const ttm_seg7_vertex_0700CEC0 = [
	{ pos: [ 945, -307, 506 ], flag: 0, tc: [ 6966, -44 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 675, -307, 811 ], flag: 0, tc: [ 6426, 564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -921, -307, -204 ], flag: 0, tc: [ 3238, -1462 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -535, -307, -802 ], flag: 0, tc: [ 4008, -2658 ], color: [ 0, 129, 0, 255 ] },
]

const ttm_seg7_vertex_0700CF00 = [
	{ pos: [ -302, 307, -325 ], flag: 0, tc: [ 372, -236 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ -302, -102, -325 ], flag: 0, tc: [ 372, 582 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ -167, -307, -477 ], flag: 0, tc: [ 782, 582 ], color: [ 94, 0, 84, 255 ] },
	{ pos: [ 810, -102, 659 ], flag: 0, tc: [ -2996, 1806 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -302, -102, -325 ], flag: 0, tc: [ 0, 1806 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -302, 307, -325 ], flag: 0, tc: [ 0, 990 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ 810, 307, 659 ], flag: 0, tc: [ -2996, 990 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -166, 307, -479 ], flag: 0, tc: [ 0, 990 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -167, -307, -477 ], flag: 0, tc: [ 0, 2214 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -535, -307, -802 ], flag: 0, tc: [ 948, 2214 ], color: [ 84, 0, 161, 255 ] },
	{ pos: [ -166, 307, -479 ], flag: 0, tc: [ 0, 990 ], color: [ 83, 0, 161, 255 ] },
	{ pos: [ -535, -307, -802 ], flag: 0, tc: [ 948, 2214 ], color: [ 83, 0, 161, 255 ] },
	{ pos: [ -535, 307, -802 ], flag: 0, tc: [ 948, 990 ], color: [ 83, 0, 161, 255 ] },
	{ pos: [ 810, 0, 659 ], flag: 0, tc: [ -2996, 1602 ], color: [ 14, 61, 146, 255 ] },
	{ pos: [ 945, -307, 506 ], flag: 0, tc: [ -2996, 2214 ], color: [ 14, 61, 146, 255 ] },
	{ pos: [ 733, -102, 592 ], flag: 0, tc: [ -2792, 1806 ], color: [ 14, 61, 146, 255 ] },
]

const ttm_seg7_vertex_0700D000 = [
	{ pos: [ -302, 307, -325 ], flag: 0, tc: [ 372, -236 ], color: [ 95, 0, 84, 255 ] },
	{ pos: [ -167, -307, -477 ], flag: 0, tc: [ 782, 582 ], color: [ 95, 0, 84, 255 ] },
	{ pos: [ -166, 307, -479 ], flag: 0, tc: [ 782, -236 ], color: [ 95, 0, 84, 255 ] },
]

const ttm_seg7_vertex_0700D030 = [
	{ pos: [ 810, 307, 659 ], flag: 0, tc: [ 11600, -1172 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -302, 307, -325 ], flag: 0, tc: [ 9380, -3138 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -921, 307, -204 ], flag: 0, tc: [ 8144, -2896 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -166, 307, -479 ], flag: 0, tc: [ 9650, -3444 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -535, 307, -802 ], flag: 0, tc: [ 8914, -4092 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 675, 307, 811 ], flag: 0, tc: [ 11332, -868 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_0700D090 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CD88.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CD88.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CDD0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  7, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700CDA0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CDA0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CEC0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700CDB8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CDB8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700CF00, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700D000, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700D180 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CD88.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700CD88.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700D030, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  5,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700D1D8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700D090),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700D180),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

