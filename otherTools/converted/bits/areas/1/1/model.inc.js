import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07002800 = [
	{ pos: [ 5570, 3242, -3991 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5468, 3242, -3991 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5570, 3160, -3930 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5468, 3160, -3930 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6517, 3791, -1836 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6414, 3791, -1836 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6517, 3709, -1774 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6414, 3709, -1774 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5966, 3777, -3991 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5864, 3777, -3991 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5966, 3695, -3930 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5864, 3695, -3930 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const bits_seg7_dl_070028C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture_metal_hole),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07002800, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07002918 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_070028C0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

