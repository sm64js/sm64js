import * as Gbi from "../../../../../include/gbi"
import {
    grass_09000000,
} from "../../../../../textures/grass"
const thi_seg7_vertex_07009DF0 = [
	{ pos: [ -2047, 2150, 2048 ], flag: 0, tc: [ 4056, 5076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -716, 1843, 717 ], flag: 0, tc: [ 1398, 2418 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 717, 1843, 717 ], flag: 0, tc: [ -1460, 2418 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 2150, 2048 ], flag: 0, tc: [ -4118, 5076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -716, 1843, -716 ], flag: 0, tc: [ 1398, -440 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2150, -2047 ], flag: 0, tc: [ 4056, -3098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -101, 1843, 0 ], flag: 0, tc: [ 172, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, 1843, 102 ], flag: 0, tc: [ 0, 1192 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 717, 1843, -716 ], flag: 0, tc: [ -1460, -440 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 102, 1843, 0 ], flag: 0, tc: [ -234, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 2150, -2047 ], flag: 0, tc: [ -4118, -3098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, 1843, -101 ], flag: 0, tc: [ 0, 786 ], color: [ 255, 255, 255, 255 ] },
]

export const thi_seg7_dl_07009EB0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_07009DF0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  5, 0x0,  4,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  1, 0x0,  6,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 1,  7,  2, 0x0,  8,  2,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9,  2, 0x0, 10,  3,  2, 0x0),
	...Gbi.gsSP2Triangles(10,  2,  8, 0x0, 10,  4,  5, 0x0),
	...Gbi.gsSP2Triangles(10,  8,  4, 0x0,  4,  8, 11, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 11, 0x0,  4, 11,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009F58 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009EB0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

