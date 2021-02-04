import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_0700B528 = [
	{ pos: [ 836, -306, 401 ], flag: 0, tc: [ 2694, 6438 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ -801, -306, -417 ], flag: 0, tc: [ 0, 990 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ 836, -306, -417 ], flag: 0, tc: [ 0, 6438 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ -801, -306, 401 ], flag: 0, tc: [ 2694, 990 ], color: [ 68, 83, 65, 255 ] },
	{ pos: [ -801, 0, 401 ], flag: 0, tc: [ 2694, 990 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ 836, 0, -417 ], flag: 0, tc: [ 0, 6438 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ -801, 0, -417 ], flag: 0, tc: [ 0, 990 ], color: [ 188, 202, 191, 255 ] },
	{ pos: [ 836, 0, 401 ], flag: 0, tc: [ 2694, 6438 ], color: [ 188, 202, 191, 255 ] },
]

const bits_seg7_vertex_0700B5A8 = [
	{ pos: [ 836, 0, -417 ], flag: 0, tc: [ 5076, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -801, -306, -417 ], flag: 0, tc: [ 0, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -801, 0, -417 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 836, -306, -417 ], flag: 0, tc: [ 5076, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -801, 0, 401 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 836, -306, 401 ], flag: 0, tc: [ 5076, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ 836, 0, 401 ], flag: 0, tc: [ 5076, 0 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -801, -306, 401 ], flag: 0, tc: [ 0, 990 ], color: [ 110, 124, 108, 255 ] },
	{ pos: [ -801, 0, -8 ], flag: 0, tc: [ 2808, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, -306, 401 ], flag: 0, tc: [ 992, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, 0, 401 ], flag: 0, tc: [ 992, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, -306, -8 ], flag: 0, tc: [ 2240, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, -306, -417 ], flag: 0, tc: [ 4056, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, 0, -417 ], flag: 0, tc: [ 4056, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, 0, -8 ], flag: 0, tc: [ 2240, 0 ], color: [ 136, 152, 132, 255 ] },
]

const bits_seg7_vertex_0700B698 = [
	{ pos: [ 836, 0, 401 ], flag: 0, tc: [ 992, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, -306, -8 ], flag: 0, tc: [ 2808, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, 0, -8 ], flag: 0, tc: [ 2808, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ 836, -306, 401 ], flag: 0, tc: [ 992, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, 0, -8 ], flag: 0, tc: [ 2240, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, 0, -417 ], flag: 0, tc: [ 4056, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, -306, -417 ], flag: 0, tc: [ 4056, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, -306, -8 ], flag: 0, tc: [ 2240, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, 0, -8 ], flag: 0, tc: [ 2808, 0 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, -306, -8 ], flag: 0, tc: [ 2808, 990 ], color: [ 136, 152, 132, 255 ] },
	{ pos: [ -801, -306, 401 ], flag: 0, tc: [ 992, 990 ], color: [ 136, 152, 132, 255 ] },
]

export const bits_seg7_dl_0700B748 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_0700B528, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_0700B790 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bits_seg7_texture_07001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_0700B5A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_0700B698, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSP1Triangle( 8,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_0700B820 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_0700B748),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_0700B790),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

