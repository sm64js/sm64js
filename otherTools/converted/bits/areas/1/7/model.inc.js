import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07007C98 = [
	{ pos: [ 717, 0, 307 ], flag: 0, tc: [ 6270, 6268 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ -716, 0, 307 ], flag: 0, tc: [ 3886, 3884 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ -716, 0, -306 ], flag: 0, tc: [ 2864, 4906 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ 717, 0, -306 ], flag: 0, tc: [ 5248, 7290 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ 717, 205, -306 ], flag: 0, tc: [ 1842, 3884 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ -716, 205, 307 ], flag: 0, tc: [ 480, 480 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ 717, 205, 307 ], flag: 0, tc: [ 2864, 2862 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ -716, 205, -306 ], flag: 0, tc: [ -540, 1500 ], color: [ 188, 202, 191, 255 ] },
]

const bits_seg7_vertex_07007D18 = [
	{ pos: [ 717, 205, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 717, 0, -306 ], flag: 0, tc: [ 0, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -716, 0, -306 ], flag: 0, tc: [ 6120, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -716, 205, -306 ], flag: 0, tc: [ 6120, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -716, 205, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 717, 0, 307 ], flag: 0, tc: [ 6120, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 717, 205, 307 ], flag: 0, tc: [ 6120, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -716, 0, 307 ], flag: 0, tc: [ 0, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -716, 205, -306 ], flag: 0, tc: [ -1048, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -716, 0, -306 ], flag: 0, tc: [ -1052, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -716, 0, 307 ], flag: 0, tc: [ 2012, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -716, 205, 307 ], flag: 0, tc: [ 2012, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 717, 205, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 717, 0, -306 ], flag: 0, tc: [ 3036, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 717, 205, -306 ], flag: 0, tc: [ 3036, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 717, 0, 307 ], flag: 0, tc: [ 0, 990 ], color: [ 136, 152, 132, 255 ] },
]

export const bits_seg7_dl_07007E18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07007C98, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07007E60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bits_seg7_texture_07001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07007D18, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07007EC8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07007E18),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07007E60),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

