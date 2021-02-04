import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07016B18 = [
	{ pos: [ -1023, 0, 307 ], flag: 0, tc: [ 480, 478 ], color: [ 200, 200, 200, 255 ] },
	{ pos: [ -1330, 0, -306 ], flag: 0, tc: [ 990, 2010 ], color: [ 200, 200, 200, 255 ] },
	{ pos: [ -1330, 0, 307 ], flag: 0, tc: [ 0, 990 ], color: [ 200, 200, 200, 255 ] },
	{ pos: [ -1023, 0, -306 ], flag: 0, tc: [ 1502, 1498 ], color: [ 200, 200, 200, 255 ] },
]

const bits_seg7_vertex_07016B58 = [
	{ pos: [ -716, 256, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 212, 255, 0, 255 ] },
	{ pos: [ -716, 256, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 212, 255, 0, 255 ] },
	{ pos: [ -1023, 0, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 212, 255, 0, 255 ] },
	{ pos: [ -1023, 0, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 212, 255, 0, 255 ] },
	{ pos: [ -409, 512, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 170, 255, 0, 255 ] },
	{ pos: [ -716, 256, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 170, 255, 0, 255 ] },
	{ pos: [ -716, 256, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 170, 255, 0, 255 ] },
	{ pos: [ -409, 512, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 170, 255, 0, 255 ] },
	{ pos: [ -101, 768, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 127, 255, 0, 255 ] },
	{ pos: [ -101, 768, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 127, 255, 0, 255 ] },
	{ pos: [ -409, 512, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 127, 255, 0, 255 ] },
	{ pos: [ -409, 512, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 127, 255, 0, 255 ] },
	{ pos: [ 205, 1024, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 42, 255, 0, 255 ] },
	{ pos: [ 205, 1024, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 42, 255, 0, 255 ] },
	{ pos: [ -101, 768, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 42, 255, 0, 255 ] },
	{ pos: [ -101, 768, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 42, 255, 0, 255 ] },
]

const bits_seg7_vertex_07016C58 = [
	{ pos: [ 512, 1280, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 0, 255, 85, 255 ] },
	{ pos: [ 205, 1024, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 0, 255, 85, 255 ] },
	{ pos: [ 205, 1024, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 0, 255, 85, 255 ] },
	{ pos: [ 512, 1280, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 0, 255, 85, 255 ] },
	{ pos: [ 819, 1536, 307 ], flag: 0, tc: [ 1948, 0 ], color: [ 0, 255, 127, 255 ] },
	{ pos: [ 819, 1536, -306 ], flag: 0, tc: [ 32, 0 ], color: [ 0, 255, 127, 255 ] },
	{ pos: [ 512, 1280, -306 ], flag: 0, tc: [ 32, 926 ], color: [ 0, 255, 127, 255 ] },
	{ pos: [ 512, 1280, 307 ], flag: 0, tc: [ 1948, 926 ], color: [ 0, 255, 127, 255 ] },
]

export const bits_seg7_dl_07016CD8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07016B18, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07016D10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07016B58, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07016C58, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07016DA0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07016CD8),
	Gbi.gsSPDisplayList(bits_seg7_dl_07016D10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

