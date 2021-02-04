import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07013F68 = [
	{ pos: [ 307, 102, -818 ], flag: 0, tc: [ 0, -2076 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ -306, 0, -767 ], flag: 0, tc: [ 480, 990 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ -306, 102, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ 307, 0, -767 ], flag: 0, tc: [ 478, -2076 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ -306, 102, 819 ], flag: 0, tc: [ 0, 990 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ -306, 0, 768 ], flag: 0, tc: [ 480, 990 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ 307, 0, 768 ], flag: 0, tc: [ 478, -2076 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ 307, 102, 819 ], flag: 0, tc: [ 0, -2076 ], color: [ 187, 115, 132, 255 ] },
	{ pos: [ -306, 102, -818 ], flag: 0, tc: [ 990, 990 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ -306, 0, 768 ], flag: 0, tc: [ 480, 9164 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ -306, 102, 819 ], flag: 0, tc: [ 990, 9164 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ -306, 0, -767 ], flag: 0, tc: [ 478, 990 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ 307, 102, 819 ], flag: 0, tc: [ 990, 9164 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ 307, 0, 768 ], flag: 0, tc: [ 480, 9164 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ 307, 0, -767 ], flag: 0, tc: [ 478, 990 ], color: [ 124, 86, 106, 255 ] },
	{ pos: [ 307, 102, -818 ], flag: 0, tc: [ 990, 990 ], color: [ 124, 86, 106, 255 ] },
]

const bits_seg7_vertex_07014068 = [
	{ pos: [ -306, 0, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 94, 60, 69, 255 ] },
	{ pos: [ 307, 0, -767 ], flag: 0, tc: [ 1500, 5076 ], color: [ 94, 60, 69, 255 ] },
	{ pos: [ 307, 0, 768 ], flag: 0, tc: [ 1502, 990 ], color: [ 94, 60, 69, 255 ] },
	{ pos: [ -306, 0, -767 ], flag: 0, tc: [ 0, 5076 ], color: [ 94, 60, 69, 255 ] },
	{ pos: [ 307, 102, 819 ], flag: 0, tc: [ 1502, 990 ], color: [ 255, 204, 101, 255 ] },
	{ pos: [ 307, 102, -818 ], flag: 0, tc: [ 1502, 5076 ], color: [ 255, 204, 101, 255 ] },
	{ pos: [ -306, 102, -818 ], flag: 0, tc: [ 0, 5076 ], color: [ 255, 204, 101, 255 ] },
	{ pos: [ -306, 102, 819 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 204, 101, 255 ] },
]

export const bits_seg7_dl_070140E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07013F68, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07014068, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07014178 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_070140E8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

