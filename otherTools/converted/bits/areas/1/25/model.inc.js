import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07013CE8 = [
	{ pos: [ -460, 102, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ 461, 0, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ -460, 0, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ 461, 102, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ -460, 0, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ 461, 0, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ 461, 102, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ -460, 102, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 125, 125, 125, 255 ] },
	{ pos: [ -460, 0, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 85, 85, 85, 255 ] },
	{ pos: [ 461, 0, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 85, 85, 85, 255 ] },
	{ pos: [ -460, 0, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 85, 85, 85, 255 ] },
	{ pos: [ 461, 0, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 85, 85, 85, 255 ] },
	{ pos: [ 461, 102, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -460, 102, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -460, 102, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 461, 102, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 255, 255, 255, 255 ] },
]

const bits_seg7_vertex_07013DE8 = [
	{ pos: [ -460, 0, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ -460, 102, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ -460, 0, -306 ], flag: 0, tc: [ 990, -10 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ -460, 102, 307 ], flag: 0, tc: [ 0, -10 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ 461, 102, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ 461, 0, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ 461, 0, -306 ], flag: 0, tc: [ 990, 968 ], color: [ 150, 150, 150, 255 ] },
	{ pos: [ 461, 102, 307 ], flag: 0, tc: [ 0, 968 ], color: [ 150, 150, 150, 255 ] },
]

export const bits_seg7_dl_07013E68 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bits_seg7_texture_07002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07013CE8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07013DE8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07013EF8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07013E68),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

