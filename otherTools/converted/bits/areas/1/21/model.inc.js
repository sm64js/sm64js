import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07012B80 = [
	{ pos: [ 563, 205, -204 ], flag: 0, tc: [ 990, 2112 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ -460, 0, -204 ], flag: 0, tc: [ 0, 72 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ -460, 205, -204 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ 563, 0, -204 ], flag: 0, tc: [ 0, 2112 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ -460, 205, 205 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ -460, 0, 205 ], flag: 0, tc: [ 0, 72 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ 563, 0, 205 ], flag: 0, tc: [ 0, 2112 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ 563, 205, 205 ], flag: 0, tc: [ 990, 2112 ], color: [ 255, 124, 0, 255 ] },
	{ pos: [ -460, 205, -204 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 139, 24, 255 ] },
	{ pos: [ -460, 0, -204 ], flag: 0, tc: [ 0, 72 ], color: [ 255, 139, 24, 255 ] },
	{ pos: [ -460, 0, 205 ], flag: 0, tc: [ 0, 72 ], color: [ 255, 139, 24, 255 ] },
	{ pos: [ -460, 205, 205 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 139, 24, 255 ] },
	{ pos: [ -460, 205, 205 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 180, 76, 255 ] },
	{ pos: [ 563, 205, 205 ], flag: 0, tc: [ 990, 2112 ], color: [ 255, 180, 76, 255 ] },
	{ pos: [ 563, 205, -204 ], flag: 0, tc: [ 990, 2112 ], color: [ 255, 180, 76, 255 ] },
	{ pos: [ -460, 205, -204 ], flag: 0, tc: [ 990, 72 ], color: [ 255, 180, 76, 255 ] },
]

const bits_seg7_vertex_07012C80 = [
	{ pos: [ 563, 0, 205 ], flag: 0, tc: [ 0, 2112 ], color: [ 120, 60, 0, 255 ] },
	{ pos: [ -460, 0, 205 ], flag: 0, tc: [ 0, 72 ], color: [ 120, 60, 0, 255 ] },
	{ pos: [ -460, 0, -204 ], flag: 0, tc: [ 0, 72 ], color: [ 120, 60, 0, 255 ] },
	{ pos: [ 563, 0, -204 ], flag: 0, tc: [ 0, 2112 ], color: [ 120, 60, 0, 255 ] },
]

export const bits_seg7_dl_07012CC0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07012B80, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07012C80, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07012D40 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07012CC0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

