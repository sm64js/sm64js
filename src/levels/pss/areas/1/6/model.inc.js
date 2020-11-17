import * as Gbi from "../../../../../include/gbi"
import { mountain_09005800, mountain_09007000 } from "../../../../../textures/mountain.js"
import { pss_seg7_texture_07000000 } from "../../../textures.inc.js"

const pss_seg7_vertex_0700DB48 = [
	{ pos: [ -6720, -4484, 6068 ], flag: 0, tc: [ 2382, -1424 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5994, -4484, 6068 ], flag: 0, tc: [ 0, -1424 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5994, -4484, 5342 ], flag: 0, tc: [ 0, 990 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6720, -4484, 5342 ], flag: 0, tc: [ 2382, 990 ], color: [ 140, 140, 140, 255 ] },
]

const pss_seg7_vertex_0700DB88 = [
	{ pos: [ -6178, -4561, 5188 ], flag: 0, tc: [ 0, 1120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6178, -4561, 5117 ], flag: 0, tc: [ 0, 1264 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4561, 5117 ], flag: 0, tc: [ 786, 1264 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4561, 5188 ], flag: 0, tc: [ 786, 1120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4535, 5255 ], flag: 0, tc: [ 786, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6178, -4535, 5255 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6178, -4535, 5188 ], flag: 0, tc: [ 0, 1120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4535, 5188 ], flag: 0, tc: [ 786, 1120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4510, 5321 ], flag: 0, tc: [ 786, 858 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6178, -4510, 5321 ], flag: 0, tc: [ 0, 858 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6178, -4510, 5255 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6588, -4510, 5255 ], flag: 0, tc: [ 786, 990 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700DC48 = [
	{ pos: [ -6588, -4587, 5321 ], flag: 0, tc: [ 1088, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4561, 5117 ], flag: 0, tc: [ 542, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4587, 5117 ], flag: 0, tc: [ 542, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4587, 5117 ], flag: 0, tc: [ 550, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4561, 5188 ], flag: 0, tc: [ 360, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4587, 5321 ], flag: 0, tc: [ 6, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4561, 5117 ], flag: 0, tc: [ 550, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4535, 5255 ], flag: 0, tc: [ 182, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4535, 5188 ], flag: 0, tc: [ 360, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4510, 5255 ], flag: 0, tc: [ 182, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4510, 5321 ], flag: 0, tc: [ 6, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4510, 5255 ], flag: 0, tc: [ 910, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4510, 5321 ], flag: 0, tc: [ 1088, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4535, 5255 ], flag: 0, tc: [ 910, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4561, 5188 ], flag: 0, tc: [ 734, 352 ], color: [ 140, 140, 140, 255 ] },
]

const pss_seg7_vertex_0700DD38 = [
	{ pos: [ -6588, -4535, 5255 ], flag: 0, tc: [ 1484, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4510, 5255 ], flag: 0, tc: [ 1484, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4510, 5255 ], flag: 0, tc: [ 684, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4561, 5188 ], flag: 0, tc: [ 734, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4535, 5255 ], flag: 0, tc: [ 910, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4535, 5188 ], flag: 0, tc: [ 734, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4587, 5117 ], flag: 0, tc: [ 1560, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4561, 5117 ], flag: 0, tc: [ 1560, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4561, 5117 ], flag: 0, tc: [ 540, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4587, 5117 ], flag: 0, tc: [ 540, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4561, 5188 ], flag: 0, tc: [ 1748, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4535, 5188 ], flag: 0, tc: [ 1748, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4535, 5188 ], flag: 0, tc: [ 864, 224 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4561, 5188 ], flag: 0, tc: [ 864, 352 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4535, 5255 ], flag: 0, tc: [ 684, 224 ], color: [ 140, 140, 140, 255 ] },
]

const pss_seg7_vertex_0700DE28 = [
	{ pos: [ -6741, -4484, 6089 ], flag: 0, tc: [ 0, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4587, 6089 ], flag: 0, tc: [ 0, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4587, 6089 ], flag: 0, tc: [ 2012, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4510, 5321 ], flag: 0, tc: [ 1604, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6588, -4587, 5321 ], flag: 0, tc: [ 1604, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4587, 5321 ], flag: 0, tc: [ 2012, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4510, 5321 ], flag: 0, tc: [ 514, 96 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4484, 5321 ], flag: 0, tc: [ 2012, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4484, 5321 ], flag: 0, tc: [ 0, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4587, 5321 ], flag: 0, tc: [ 0, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6178, -4587, 5321 ], flag: 0, tc: [ 514, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4484, 5321 ], flag: 0, tc: [ 0, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4587, 5321 ], flag: 0, tc: [ 0, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4587, 6089 ], flag: 0, tc: [ 2012, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4484, 6089 ], flag: 0, tc: [ 2012, 0 ], color: [ 140, 140, 140, 255 ] },
]

const pss_seg7_vertex_0700DF18 = [
	{ pos: [ -5973, -4587, 5321 ], flag: 0, tc: [ 2012, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4484, 6089 ], flag: 0, tc: [ 0, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4587, 6089 ], flag: 0, tc: [ 0, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4484, 6089 ], flag: 0, tc: [ 0, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4587, 6089 ], flag: 0, tc: [ 2012, 480 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4484, 6089 ], flag: 0, tc: [ 2012, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5973, -4484, 5321 ], flag: 0, tc: [ 2012, 0 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -6741, -4484, 5321 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5994, -4484, 5342 ], flag: 0, tc: [ 24, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5973, -4484, 5321 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5973, -4484, 5321 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5994, -4484, 6068 ], flag: 0, tc: [ 24, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5973, -4484, 6089 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5994, -4484, 5342 ], flag: 0, tc: [ 1956, 0 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700DFF8 = [
	{ pos: [ -5973, -4484, 6089 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6720, -4484, 6068 ], flag: 0, tc: [ 24, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6741, -4484, 6089 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5994, -4484, 6068 ], flag: 0, tc: [ 1956, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6720, -4484, 5342 ], flag: 0, tc: [ 24, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6741, -4484, 6089 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6720, -4484, 6068 ], flag: 0, tc: [ 1956, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6741, -4484, 5321 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6741, -4484, 5321 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6720, -4484, 5342 ], flag: 0, tc: [ 1956, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5994, -4484, 5342 ], flag: 0, tc: [ 24, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const pss_seg7_dl_0700E0A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DB48, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700E0E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, pss_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DB88, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700E138 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DC48, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  7, 0x0,  5,  7,  9, 0x0),
	...Gbi.gsSP2Triangles( 5,  9, 10, 0x0, 11,  0, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 13,  0, 0x0, 14,  0, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DD38, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DE28, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  7, 0x0,  3,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9,  6,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  6, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DF18, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  1, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700DFF8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSP1Triangle( 8,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700E2B0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700E0A8),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700E0E0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700E138),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

