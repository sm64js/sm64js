import * as Gbi from "../../../../../include/gbi"
const bits_seg7_vertex_07007B60 = [
	{ pos: [ -716, 0, -306 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 717, 0, -306 ], flag: 0, tc: [ 14788, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 717, 102, -306 ], flag: 0, tc: [ 14788, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -716, 102, -306 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -716, 0, 307 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 717, 0, 307 ], flag: 0, tc: [ 14788, 990 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ 717, 102, 307 ], flag: 0, tc: [ 14788, 0 ], color: [ 255, 212, 0, 255 ] },
	{ pos: [ -716, 102, 307 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 212, 0, 255 ] },
]

export const bits_seg7_dl_07007BE0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bits_seg7_vertex_07007B60, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07007C28 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07007BE0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

