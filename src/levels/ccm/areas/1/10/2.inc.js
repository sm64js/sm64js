import * as Gbi from "../../../../../include/gbi"
import { snow_09005800, snow_09007000 } from "../../../../../textures/snow"

const ccm_seg7_vertex_070106D8 = [
	{ pos: [ -1457, -890, 550 ], flag: 0, tc: [ 23466, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -377, -397, 185 ], flag: 0, tc: [ 11430, 24 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -377, -499, 185 ], flag: 0, tc: [ 11436, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1457, -787, 550 ], flag: 0, tc: [ 23460, 24 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 703, -6, -178 ], flag: 0, tc: [ -2624, 24 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 703, -108, -178 ], flag: 0, tc: [ -2618, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -377, -499, 185 ], flag: 0, tc: [ 9410, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -377, -397, 185 ], flag: 0, tc: [ 9404, 24 ], color: [ 255, 255, 255, 255 ] },
]

const ccm_seg7_vertex_07010758 = [
	{ pos: [ -1120, 297, 770 ], flag: 0, tc: [ 3368, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 553, 770 ], flag: 0, tc: [ 3376, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1586, 553, 983 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 348, 770 ], flag: 0, tc: [ -5376, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -12, 336, 667 ], flag: 0, tc: [ 2028, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 553, 770 ], flag: 0, tc: [ -5392, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -12, 540, 667 ], flag: 0, tc: [ 2012, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -55, 336, 574 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1163, 348, 677 ], flag: 0, tc: [ 7372, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1163, 553, 677 ], flag: 0, tc: [ 7388, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -55, 540, 574 ], flag: 0, tc: [ -16, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1333, 297, 304 ], flag: 0, tc: [ 0, -34 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1333, 553, 304 ], flag: 0, tc: [ 0, 988 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 553, 770 ], flag: 0, tc: [ 3376, 988 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 297, 770 ], flag: 0, tc: [ 3372, -34 ], color: [ 255, 255, 255, 255 ] },
]

const ccm_seg7_vertex_07010848 = [
	{ pos: [ -1799, 297, 517 ], flag: 0, tc: [ -36, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1799, 553, 517 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1333, 553, 304 ], flag: 0, tc: [ 3376, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1120, 297, 770 ], flag: 0, tc: [ 3368, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1586, 553, 983 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1586, 297, 983 ], flag: 0, tc: [ -36, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1586, 297, 982 ], flag: 0, tc: [ 3368, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1586, 553, 982 ], flag: 0, tc: [ 3372, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1799, 553, 516 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1799, 297, 516 ], flag: 0, tc: [ -36, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1333, 297, 304 ], flag: 0, tc: [ 3368, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const ccm_seg7_dl_070108F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_070106D8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010940 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010758, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(13, 14, 11, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010848, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  9,  6, 0x0),
	Gbi.gsSP1Triangle( 2, 10,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_070109D0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_070108F8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010940),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

