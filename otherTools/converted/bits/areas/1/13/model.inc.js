import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_0700B8B0 = [
	{ pos: [ 410, 0, 410 ], flag: 0, tc: [ 2012, 1040 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 410, 0, -409 ], flag: 0, tc: [ 2012, -3046 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 154, 154, -153 ], flag: 0, tc: [ -20, -1770 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 154, 154, 154 ], flag: 0, tc: [ -20, -236 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -409, 0, -409 ], flag: 0, tc: [ 2012, 1040 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -409, 0, 410 ], flag: 0, tc: [ 2012, -3046 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -153, 154, 154 ], flag: 0, tc: [ -40, -1770 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -153, 154, -153 ], flag: 0, tc: [ -40, -236 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -409, 0, 410 ], flag: 0, tc: [ 2012, 990 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ 154, 154, 154 ], flag: 0, tc: [ -40, -1820 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ -153, 154, 154 ], flag: 0, tc: [ -40, -288 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ 410, 0, 410 ], flag: 0, tc: [ 2012, -3098 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ -409, 0, -409 ], flag: 0, tc: [ 2012, -3098 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ -153, 154, -153 ], flag: 0, tc: [ -40, -1820 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ 154, 154, -153 ], flag: 0, tc: [ -40, -288 ], color: [ 190, 190, 0, 255 ] },
	{ pos: [ 410, 0, -409 ], flag: 0, tc: [ 2012, 990 ], color: [ 190, 190, 0, 255 ] },
]

export const bits_seg7_dl_0700B9B0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_0700B8B0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_0700BA18 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_0700B9B0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

