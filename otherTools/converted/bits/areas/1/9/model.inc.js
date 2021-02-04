import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07008DB8 = [
	{ pos: [ -1121, -50, 147 ], flag: 0, tc: [ -788, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -388, 51, -613 ], flag: 0, tc: [ 8758, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -1121, 51, 147 ], flag: 0, tc: [ -788, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 1178, -50, -255 ], flag: 0, tc: [ 8598, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 1178, 51, -255 ], flag: 0, tc: [ 8598, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 465, 51, 761 ], flag: 0, tc: [ 582, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 465, -50, 761 ], flag: 0, tc: [ 582, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -1121, -50, 761 ], flag: 0, tc: [ -644, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 465, -50, 761 ], flag: 0, tc: [ 10596, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 465, 51, 761 ], flag: 0, tc: [ 10596, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -1121, 51, 761 ], flag: 0, tc: [ -644, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -388, -50, -613 ], flag: 0, tc: [ -644, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 1178, -50, -613 ], flag: 0, tc: [ 10596, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 1178, 51, -613 ], flag: 0, tc: [ 10596, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -388, 51, -613 ], flag: 0, tc: [ -644, 0 ], color: [ 255, 212, 0, 255 ] },
]

const bits_seg7_vertex_07008EA8 = [
	{ pos: [ 4, -1177, 607 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 315, -1177, 607 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 315, -1074, 607 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -1121, -50, 147 ], flag: 0, tc: [ -788, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -388, -50, -613 ], flag: 0, tc: [ 8758, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -388, 51, -613 ], flag: 0, tc: [ 8758, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 4, -1177, 299 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 315, -1074, 299 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 4, -1074, 299 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 315, -1177, 299 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 4, -1074, 607 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 212, 0, 255 ] },
]

export const bits_seg7_dl_07008F58 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07008DB8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07008EA8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07008FE8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07008F58),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

