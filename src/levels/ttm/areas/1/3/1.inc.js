import {ttm_seg7_texture_07000800, } from "../../../textures.inc.js"
import {mountain_09004800, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700A340 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700A358 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x64,
	    0xff, 0xff, 0xc9, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700A370 = [
	{ pos: [ 442, 1720, -78 ], flag: 0, tc: [ 910, 492 ], color: [ 39, 120, 251, 255 ] },
	{ pos: [ 641, 1596, -121 ], flag: 0, tc: [ 1122, 476 ], color: [ 118, 42, 239, 255 ] },
	{ pos: [ 400, 1597, -525 ], flag: 0, tc: [ 936, 24 ], color: [ 58, 80, 178, 255 ] },
	{ pos: [ 442, 1720, -78 ], flag: 0, tc: [ 346, -154 ], color: [ 39, 120, 251, 255 ] },
	{ pos: [ 526, 1601, 334 ], flag: 0, tc: [ -102, 68 ], color: [ 80, 66, 72, 255 ] },
	{ pos: [ 641, 1596, -121 ], flag: 0, tc: [ 454, 74 ], color: [ 118, 42, 239, 255 ] },
	{ pos: [ 526, 1352, 334 ], flag: 0, tc: [ -104, 332 ], color: [ 87, 177, 45, 255 ] },
	{ pos: [ 641, 1352, -121 ], flag: 0, tc: [ 454, 332 ], color: [ 75, 155, 246, 255 ] },
	{ pos: [ -50, 1720, -445 ], flag: 0, tc: [ 458, 40 ], color: [ 251, 122, 222, 255 ] },
	{ pos: [ 75, 1720, 414 ], flag: 0, tc: [ 458, 942 ], color: [ 4, 121, 36, 255 ] },
	{ pos: [ -417, 1720, 47 ], flag: 0, tc: [ 8, 492 ], color: [ 211, 118, 6, 255 ] },
	{ pos: [ -332, 1603, 460 ], flag: 0, tc: [ 32, 928 ], color: [ 199, 62, 94, 255 ] },
	{ pos: [ 123, 1601, 575 ], flag: 0, tc: [ 484, 1112 ], color: [ 15, 59, 111, 255 ] },
	{ pos: [ 526, 1601, 334 ], flag: 0, tc: [ 936, 928 ], color: [ 80, 66, 72, 255 ] },
	{ pos: [ -55, 1597, -640 ], flag: 0, tc: [ 484, -162 ], color: [ 239, 41, 138, 255 ] },
]

const ttm_seg7_vertex_0700A460 = [
	{ pos: [ -417, 1720, 47 ], flag: 0, tc: [ -110, 234 ], color: [ 211, 118, 6, 255 ] },
	{ pos: [ -574, 1602, 56 ], flag: 0, tc: [ 18, 292 ], color: [ 137, 38, 17, 255 ] },
	{ pos: [ -332, 1603, 460 ], flag: 0, tc: [ 174, -216 ], color: [ 199, 62, 94, 255 ] },
	{ pos: [ -458, 1597, -399 ], flag: 0, tc: [ -130, 802 ], color: [ 175, 76, 196, 255 ] },
	{ pos: [ -459, 1352, -399 ], flag: 0, tc: [ 156, 890 ], color: [ 169, 192, 191, 255 ] },
	{ pos: [ -574, 1352, 56 ], flag: 0, tc: [ 312, 382 ], color: [ 181, 155, 11, 255 ] },
	{ pos: [ -333, 1352, 460 ], flag: 0, tc: [ 468, -126 ], color: [ 186, 177, 69, 255 ] },
	{ pos: [ -417, 1720, 47 ], flag: 0, tc: [ 8, 492 ], color: [ 211, 118, 6, 255 ] },
	{ pos: [ -458, 1597, -399 ], flag: 0, tc: [ 32, 24 ], color: [ 175, 76, 196, 255 ] },
	{ pos: [ -574, 1602, 56 ], flag: 0, tc: [ -154, 476 ], color: [ 137, 38, 17, 255 ] },
	{ pos: [ -50, 1720, -445 ], flag: 0, tc: [ 458, 40 ], color: [ 251, 122, 222, 255 ] },
	{ pos: [ -55, 1597, -640 ], flag: 0, tc: [ 484, -162 ], color: [ 239, 41, 138, 255 ] },
	{ pos: [ 526, 1352, 334 ], flag: 0, tc: [ 1068, 752 ], color: [ 87, 177, 45, 255 ] },
	{ pos: [ 526, 1601, 334 ], flag: 0, tc: [ 1068, 480 ], color: [ 80, 66, 72, 255 ] },
	{ pos: [ 122, 1352, 575 ], flag: 0, tc: [ 586, 752 ], color: [ 15, 192, 108, 255 ] },
	{ pos: [ 123, 1601, 575 ], flag: 0, tc: [ 586, 480 ], color: [ 15, 59, 111, 255 ] },
]

const ttm_seg7_vertex_0700A560 = [
	{ pos: [ 122, 1352, 575 ], flag: 0, tc: [ 586, 752 ], color: [ 15, 192, 108, 255 ] },
	{ pos: [ -332, 1603, 460 ], flag: 0, tc: [ 104, 480 ], color: [ 199, 62, 94, 255 ] },
	{ pos: [ -333, 1352, 460 ], flag: 0, tc: [ 104, 752 ], color: [ 186, 177, 69, 255 ] },
	{ pos: [ 123, 1601, 575 ], flag: 0, tc: [ 586, 480 ], color: [ 15, 59, 111, 255 ] },
	{ pos: [ -459, 1352, -399 ], flag: 0, tc: [ 810, 684 ], color: [ 169, 192, 191, 255 ] },
	{ pos: [ -458, 1597, -399 ], flag: 0, tc: [ 810, 480 ], color: [ 175, 76, 196, 255 ] },
	{ pos: [ -55, 1597, -640 ], flag: 0, tc: [ 534, 478 ], color: [ 239, 41, 138, 255 ] },
	{ pos: [ -55, 1352, -640 ], flag: 0, tc: [ 534, 682 ], color: [ 246, 155, 181, 255 ] },
	{ pos: [ 400, 1597, -525 ], flag: 0, tc: [ 142, 480 ], color: [ 58, 80, 178, 255 ] },
	{ pos: [ 400, 1352, -525 ], flag: 0, tc: [ 142, 684 ], color: [ 65, 192, 169, 255 ] },
	{ pos: [ 400, 1352, -525 ], flag: 0, tc: [ 114, 1692 ], color: [ 65, 192, 169, 255 ] },
	{ pos: [ 641, 1596, -121 ], flag: 0, tc: [ 404, 1134 ], color: [ 118, 42, 239, 255 ] },
	{ pos: [ 641, 1352, -121 ], flag: 0, tc: [ 114, 1134 ], color: [ 75, 155, 246, 255 ] },
	{ pos: [ 400, 1597, -525 ], flag: 0, tc: [ 406, 1692 ], color: [ 58, 80, 178, 255 ] },
]

const ttm_seg7_vertex_0700A640 = [
	{ pos: [ 28, 1473, -46 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ -574, 1352, 56 ], flag: 0, tc: [ -52, 986 ], color: [ 181, 155, 11, 255 ] },
	{ pos: [ -459, 1352, -399 ], flag: 0, tc: [ 668, 688 ], color: [ 169, 192, 191, 255 ] },
	{ pos: [ -333, 1352, 460 ], flag: 0, tc: [ 714, 688 ], color: [ 186, 177, 69, 255 ] },
	{ pos: [ -574, 1352, 56 ], flag: 0, tc: [ -10, 986 ], color: [ 181, 155, 11, 255 ] },
	{ pos: [ 122, 1352, 575 ], flag: 0, tc: [ 1012, -36 ], color: [ 15, 192, 108, 255 ] },
	{ pos: [ 526, 1352, 334 ], flag: 0, tc: [ 714, 694 ], color: [ 87, 177, 45, 255 ] },
	{ pos: [ 122, 1352, 575 ], flag: 0, tc: [ 1012, -28 ], color: [ 15, 192, 108, 255 ] },
	{ pos: [ 641, 1352, -121 ], flag: 0, tc: [ -10, 992 ], color: [ 75, 155, 246, 255 ] },
	{ pos: [ 400, 1352, -525 ], flag: 0, tc: [ 694, 668 ], color: [ 65, 192, 169, 255 ] },
	{ pos: [ 641, 1352, -121 ], flag: 0, tc: [ 994, -54 ], color: [ 75, 155, 246, 255 ] },
	{ pos: [ -55, 1352, -640 ], flag: 0, tc: [ -28, 968 ], color: [ 246, 155, 181, 255 ] },
	{ pos: [ -55, 1352, -640 ], flag: 0, tc: [ 968, -36 ], color: [ 246, 155, 181, 255 ] },
]

export const ttm_seg7_dl_0700A710 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A340.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A340.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A370, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9,  0, 0x0,  8, 10,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11,  9, 0x0,  9, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 9, 13,  0, 0x0,  9, 12, 13, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  8, 0x0,  8,  2, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A460, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  5, 0x0,  6,  1,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  2,  1, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  8,  7, 0x0, 10, 11,  8, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A560, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  9, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700A848 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A358.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A358.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A640, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  5,  3, 0x0,  0,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 0,  8,  6, 0x0,  0,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11,  9,  0, 0x0,  0,  2, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700A8C0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700A710),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700A848),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

