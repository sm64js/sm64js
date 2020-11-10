import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_0900A800, } from "../../../../../textures/mountain.js"
import {mountain_09000000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_07011680 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_07011698 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_070116B0 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_070116C8 = [
	{ pos: [ -519, -306, -91 ], flag: 0, tc: [ 2524, 990 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ -206, -306, -497 ], flag: 0, tc: [ 0, 990 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ -206, 307, -497 ], flag: 0, tc: [ 0, -2076 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ -519, 307, -91 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -206, 307, -497 ], flag: 0, tc: [ 480, 3542 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 604, 307, 126 ], flag: 0, tc: [ 5588, 3542 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 292, 307, 532 ], flag: 0, tc: [ 5588, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 292, 307, 532 ], flag: 0, tc: [ 2524, -2076 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 604, -306, 126 ], flag: 0, tc: [ 0, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 292, -306, 532 ], flag: 0, tc: [ 2522, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 604, 307, 126 ], flag: 0, tc: [ 0, -2076 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ -206, 307, -497 ], flag: 0, tc: [ 0, -2076 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ -206, -306, -497 ], flag: 0, tc: [ 0, 990 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 604, -306, 126 ], flag: 0, tc: [ 5078, 990 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 604, 307, 126 ], flag: 0, tc: [ 5078, -2076 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ -519, 307, -91 ], flag: 0, tc: [ 2524, -2076 ], color: [ 100, 0, 77, 255 ] },
]

const ttm_seg7_vertex_070117C8 = [
	{ pos: [ 30, 307, 201 ], flag: 0, tc: [ 0, 0 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 355, 102, 451 ], flag: 0, tc: [ 990, 990 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 355, 307, 451 ], flag: 0, tc: [ 990, 0 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 30, 102, 201 ], flag: 0, tc: [ 0, 990 ], color: [ 179, 0, 100, 255 ] },
]

const ttm_seg7_vertex_07011808 = [
	{ pos: [ 336, 307, 307 ], flag: 0, tc: [ 734, 0 ], color: [ 77, 0, 156, 255 ] },
	{ pos: [ 336, 102, 307 ], flag: 0, tc: [ 734, 990 ], color: [ 77, 0, 156, 255 ] },
	{ pos: [ 173, 102, 182 ], flag: 0, tc: [ 224, 990 ], color: [ 77, 0, 156, 255 ] },
	{ pos: [ 280, 307, -123 ], flag: 0, tc: [ 0, 0 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 280, 102, -123 ], flag: 0, tc: [ 0, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 30, 102, 201 ], flag: 0, tc: [ 990, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 30, 307, 201 ], flag: 0, tc: [ 990, 0 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 280, 102, -123 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 173, 102, 182 ], flag: 0, tc: [ 734, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 30, 102, 201 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 298, 102, 20 ], flag: 0, tc: [ 224, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 604, 102, 126 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 461, 102, 145 ], flag: 0, tc: [ 224, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 355, 102, 451 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 173, 307, 182 ], flag: 0, tc: [ 224, 0 ], color: [ 77, 0, 156, 255 ] },
]

const ttm_seg7_vertex_070118F8 = [
	{ pos: [ 173, 307, 182 ], flag: 0, tc: [ 734, 0 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ 173, 102, 182 ], flag: 0, tc: [ 734, 990 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ 298, 102, 20 ], flag: 0, tc: [ 224, 990 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ 461, 307, 145 ], flag: 0, tc: [ 224, 0 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 461, 102, 145 ], flag: 0, tc: [ 224, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 336, 102, 307 ], flag: 0, tc: [ 734, 990 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 336, 307, 307 ], flag: 0, tc: [ 734, 0 ], color: [ 156, 0, 179, 255 ] },
	{ pos: [ 355, 102, 451 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 461, 102, 145 ], flag: 0, tc: [ 224, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 604, 102, 126 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 336, 102, 307 ], flag: 0, tc: [ 734, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 173, 102, 182 ], flag: 0, tc: [ 734, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 298, 307, 20 ], flag: 0, tc: [ 224, 0 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 461, 102, 145 ], flag: 0, tc: [ 734, 990 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 461, 307, 145 ], flag: 0, tc: [ 734, 0 ], color: [ 179, 0, 100, 255 ] },
	{ pos: [ 298, 102, 20 ], flag: 0, tc: [ 224, 990 ], color: [ 179, 0, 100, 255 ] },
]

const ttm_seg7_vertex_070119F8 = [
	{ pos: [ 173, 307, 182 ], flag: 0, tc: [ 734, 0 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ 298, 102, 20 ], flag: 0, tc: [ 224, 990 ], color: [ 100, 0, 77, 255 ] },
	{ pos: [ 298, 307, 20 ], flag: 0, tc: [ 224, 0 ], color: [ 100, 0, 77, 255 ] },
]

const ttm_seg7_vertex_07011A28 = [
	{ pos: [ 292, -306, 532 ], flag: 0, tc: [ -878, -2448 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 604, -306, 126 ], flag: 0, tc: [ -254, -3258 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -206, -306, -497 ], flag: 0, tc: [ -1874, -4504 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -519, -306, -91 ], flag: 0, tc: [ -2498, -3694 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_07011A68 = [
	{ pos: [ 298, 297, 20 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 461, 297, 145 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 336, 297, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 173, 297, 182 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
]

export const ttm_seg7_dl_07011AA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_07011680.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_07011680.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_070116C8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07011B20 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_0900A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_070117C8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_07011698.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_07011698.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07011808, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  7, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 7, 12, 10, 0x0,  8, 13,  9, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_070118F8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_070119F8, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07011C10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_07011A28, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07011C48 = [
	Gbi.gsSPLight(ttm_seg7_lights_070116B0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_070116B0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07011A68, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07011C78 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07011AA8),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07011B20),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07011C10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07011C48),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

