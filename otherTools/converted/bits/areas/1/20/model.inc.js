import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_070129A8 = [
	{ pos: [ 307, 205, 287 ], flag: 0, tc: [ 2012, -1054 ], color: [ 177, 191, 250, 255 ] },
	{ pos: [ 307, 205, -286 ], flag: 0, tc: [ 3442, 376 ], color: [ 177, 191, 250, 255 ] },
	{ pos: [ -511, 205, -286 ], flag: 0, tc: [ 1398, 2418 ], color: [ 177, 191, 250, 255 ] },
	{ pos: [ -511, 205, 287 ], flag: 0, tc: [ 0, 990 ], color: [ 177, 191, 250, 255 ] },
	{ pos: [ -511, 205, 287 ], flag: 0, tc: [ 1910, 70 ], color: [ 140, 152, 216, 255 ] },
	{ pos: [ -511, 205, -286 ], flag: 0, tc: [ 478, 1498 ], color: [ 140, 152, 216, 255 ] },
	{ pos: [ -511, 0, -286 ], flag: 0, tc: [ 0, 990 ], color: [ 140, 152, 216, 255 ] },
	{ pos: [ -511, 0, 287 ], flag: 0, tc: [ 1398, -440 ], color: [ 140, 152, 216, 255 ] },
	{ pos: [ 307, 205, 287 ], flag: 0, tc: [ 2524, 2522 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ -511, 0, 287 ], flag: 0, tc: [ 0, 990 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ 307, 0, 287 ], flag: 0, tc: [ 2012, 3032 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ -511, 205, 287 ], flag: 0, tc: [ 480, 480 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ 307, 0, -286 ], flag: 0, tc: [ 2012, 3032 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ -511, 205, -286 ], flag: 0, tc: [ 478, 480 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ 307, 205, -286 ], flag: 0, tc: [ 2524, 2522 ], color: [ 82, 97, 172, 255 ] },
	{ pos: [ -511, 0, -286 ], flag: 0, tc: [ 0, 990 ], color: [ 82, 97, 172, 255 ] },
]

export const bits_seg7_dl_07012AA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_070129A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07012B10 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07012AA8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

