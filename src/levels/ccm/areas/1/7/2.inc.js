import * as Gbi from "../../../../../include/gbi"
import { snow_09004000, snow_09007000 } from "../../../../../textures/snow"

const ccm_seg7_vertex_0700F4C0 = [
	{ pos: [ 233, -275, 91 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 233, -378, 91 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 308, -275, 21 ], flag: 0, tc: [ 990, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 308, -378, 21 ], flag: 0, tc: [ 990, 990 ], color: [ 153, 153, 153, 255 ] },
]

const ccm_seg7_vertex_0700F500 = [
	{ pos: [ -116, 100, 541 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 573, -104, -99 ], flag: 0, tc: [ 6232, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 573, 100, -99 ], flag: 0, tc: [ 6236, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -116, -104, 541 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -611, 307, 9 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -116, -104, 541 ], flag: 0, tc: [ 4992, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -116, 100, 541 ], flag: 0, tc: [ 4996, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -611, 102, 9 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 573, 100, -99 ], flag: 0, tc: [ 4996, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 44, 102, -669 ], flag: 0, tc: [ -384, -104 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 44, 307, -669 ], flag: 0, tc: [ -384, 918 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 573, -104, -99 ], flag: 0, tc: [ 4992, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const ccm_seg7_dl_0700F5C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F4C0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F5F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F500, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F650 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F5C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F5F8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

