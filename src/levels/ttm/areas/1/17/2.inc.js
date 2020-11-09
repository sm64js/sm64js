import {mountain_09005000, } from "../../../../../textures/mountain.js"
import {ttm_seg7_texture_07001800, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700F300 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700F318 = [
	{ pos: [ 515, 202, -402 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 474, 202, -408 ], flag: 0, tc: [ 258, 700 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 491, 202, -385 ], flag: 0, tc: [ 0, 700 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -31, 202, -485 ], flag: 0, tc: [ 258, 1278 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 8, 202, -479 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -8, 202, -502 ], flag: 0, tc: [ 0, 1278 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -14, 202, -462 ], flag: 0, tc: [ 258, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 18, 202, 388 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -22, 202, 382 ], flag: 0, tc: [ 376, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -28, 202, 422 ], flag: 0, tc: [ 376, 582 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 12, 202, 429 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -488, 202, 312 ], flag: 0, tc: [ 376, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -453, 202, 359 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -447, 202, 318 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -494, 202, 352 ], flag: 0, tc: [ 376, 582 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 497, 202, -426 ], flag: 0, tc: [ 258, 990 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_0700F418 = [
	{ pos: [ -14, -250, -462 ], flag: 0, tc: [ 3982, 700 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ -31, 202, -485 ], flag: 0, tc: [ 0, 990 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ -31, -252, -485 ], flag: 0, tc: [ 4002, 990 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ -31, -252, -485 ], flag: 0, tc: [ 4002, 700 ], color: [ 181, 0, 154, 255 ] },
	{ pos: [ -31, 202, -485 ], flag: 0, tc: [ 0, 700 ], color: [ 181, 0, 154, 255 ] },
	{ pos: [ -8, 202, -502 ], flag: 0, tc: [ 0, 990 ], color: [ 181, 0, 154, 255 ] },
	{ pos: [ -8, -248, -502 ], flag: 0, tc: [ 3970, 990 ], color: [ 181, 0, 154, 255 ] },
	{ pos: [ -8, -248, -502 ], flag: 0, tc: [ 3970, 700 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ -8, 202, -502 ], flag: 0, tc: [ 0, 700 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ 8, 202, -479 ], flag: 0, tc: [ 0, 990 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ 8, -246, -479 ], flag: 0, tc: [ 3950, 990 ], color: [ 104, 0, 184, 255 ] },
	{ pos: [ 8, -246, -479 ], flag: 0, tc: [ 3950, 700 ], color: [ 77, 0, 100, 255 ] },
	{ pos: [ -14, 202, -462 ], flag: 0, tc: [ 0, 990 ], color: [ 77, 0, 100, 255 ] },
	{ pos: [ -14, -250, -462 ], flag: 0, tc: [ 3982, 990 ], color: [ 77, 0, 100, 255 ] },
	{ pos: [ 8, 202, -479 ], flag: 0, tc: [ 0, 700 ], color: [ 77, 0, 100, 255 ] },
]

const ttm_seg7_vertex_0700F508 = [
	{ pos: [ 515, -171, -402 ], flag: 0, tc: [ -2996, 702 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ 497, -174, -426 ], flag: 0, tc: [ -3018, 990 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ 497, 202, -426 ], flag: 0, tc: [ 238, 990 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -14, -250, -462 ], flag: 0, tc: [ 3982, 700 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ -14, 202, -462 ], flag: 0, tc: [ 0, 700 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ -31, 202, -485 ], flag: 0, tc: [ 0, 990 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ 491, -175, -385 ], flag: 0, tc: [ -2358, 1278 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ 491, 202, -385 ], flag: 0, tc: [ 990, 1278 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ 474, 202, -408 ], flag: 0, tc: [ 990, 990 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ 474, -177, -408 ], flag: 0, tc: [ -2380, 990 ], color: [ 154, 0, 75, 255 ] },
	{ pos: [ 497, 202, -426 ], flag: 0, tc: [ 990, 700 ], color: [ 178, 0, 156, 255 ] },
	{ pos: [ 497, -174, -426 ], flag: 0, tc: [ -2266, 702 ], color: [ 178, 0, 156, 255 ] },
	{ pos: [ 474, -177, -408 ], flag: 0, tc: [ -2302, 990 ], color: [ 178, 0, 156, 255 ] },
	{ pos: [ 474, 202, -408 ], flag: 0, tc: [ 990, 990 ], color: [ 178, 0, 156, 255 ] },
	{ pos: [ 515, 202, -402 ], flag: 0, tc: [ 238, 700 ], color: [ 101, 0, 180, 255 ] },
]

const ttm_seg7_vertex_0700F5F8 = [
	{ pos: [ -28, -104, 422 ], flag: 0, tc: [ -540, 1396 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -22, 202, 382 ], flag: 0, tc: [ 2012, 990 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -22, -104, 382 ], flag: 0, tc: [ -540, 990 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ 515, -171, -402 ], flag: 0, tc: [ -2326, 1278 ], color: [ 73, 0, 103, 255 ] },
	{ pos: [ 515, 202, -402 ], flag: 0, tc: [ 990, 1278 ], color: [ 73, 0, 103, 255 ] },
	{ pos: [ 491, 202, -385 ], flag: 0, tc: [ 990, 990 ], color: [ 73, 0, 103, 255 ] },
	{ pos: [ 491, -175, -385 ], flag: 0, tc: [ -2358, 990 ], color: [ 73, 0, 103, 255 ] },
	{ pos: [ 18, -104, 388 ], flag: 0, tc: [ -1052, 990 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ 18, 202, 388 ], flag: 0, tc: [ 1502, 990 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ 12, 202, 429 ], flag: 0, tc: [ 1502, 582 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ 12, -104, 429 ], flag: 0, tc: [ -1052, 582 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ 12, -104, 429 ], flag: 0, tc: [ -542, 1396 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -28, 202, 422 ], flag: 0, tc: [ 2012, 990 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -28, -104, 422 ], flag: 0, tc: [ -540, 990 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ 12, 202, 429 ], flag: 0, tc: [ 2012, 1396 ], color: [ 235, 0, 125, 255 ] },
]

const ttm_seg7_vertex_0700F6E8 = [
	{ pos: [ -447, -104, 318 ], flag: 0, tc: [ 0, 990 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ -447, 202, 318 ], flag: 0, tc: [ 2524, 990 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ -453, 202, 359 ], flag: 0, tc: [ 2524, 582 ], color: [ 125, 0, 18, 255 ] },
	{ pos: [ -28, -104, 422 ], flag: 0, tc: [ -540, 1396 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -28, 202, 422 ], flag: 0, tc: [ 2012, 1396 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -22, 202, 382 ], flag: 0, tc: [ 2012, 990 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -22, -104, 382 ], flag: 0, tc: [ -1052, 990 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 18, 202, 388 ], flag: 0, tc: [ 1500, 582 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 18, -104, 388 ], flag: 0, tc: [ -1052, 582 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -22, 202, 382 ], flag: 0, tc: [ 1500, 990 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -488, -104, 312 ], flag: 0, tc: [ -1052, 990 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -447, 202, 318 ], flag: 0, tc: [ 1500, 582 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -447, -104, 318 ], flag: 0, tc: [ -1052, 582 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -488, 202, 312 ], flag: 0, tc: [ 1500, 990 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ -453, -104, 359 ], flag: 0, tc: [ 0, 582 ], color: [ 125, 0, 18, 255 ] },
]

const ttm_seg7_vertex_0700F7D8 = [
	{ pos: [ -453, -104, 359 ], flag: 0, tc: [ -540, 1396 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -494, 202, 352 ], flag: 0, tc: [ 2012, 990 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -494, -104, 352 ], flag: 0, tc: [ -540, 990 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -453, 202, 359 ], flag: 0, tc: [ 2012, 1396 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -494, -104, 352 ], flag: 0, tc: [ 2524, 582 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -488, 202, 312 ], flag: 0, tc: [ 0, 990 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -488, -104, 312 ], flag: 0, tc: [ 2524, 990 ], color: [ 131, 0, 238, 255 ] },
	{ pos: [ -494, 202, 352 ], flag: 0, tc: [ 0, 582 ], color: [ 131, 0, 238, 255 ] },
]

export const ttm_seg7_dl_0700F858 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700F300.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700F300.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F318, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700F8D0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F418, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F508, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14,  0,  2, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F5F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F6E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700F7D8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700FA18 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700F858),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700F8D0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

