import * as Gbi from "../../../../../include/gbi"
import {
	cave_09001000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0701A150 = [
	{ pos: [ -3583, 2253, -3276 ], flag: 0, tc: [ -4118, -7186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2764 ], flag: 0, tc: [ 990, 3032 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2253, -2764 ], flag: 0, tc: [ 990, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2355, -2764 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2252 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2355, -2252 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2764 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ 8144, -5142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2355, -2252 ], flag: 0, tc: [ 3034, -5142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2355, -2764 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3583, 2355, -3276 ], flag: 0, tc: [ 8144, 5076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2355, -3276 ], flag: 0, tc: [ -7184, 5076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2355, -2252 ], flag: 0, tc: [ -2074, -5142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ -7184, -5142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2253, -3276 ], flag: 0, tc: [ -4118, 8142 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0701A240 = [
	{ pos: [ -3071, 2253, -2764 ], flag: 0, tc: [ 990, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2253, -2252 ], flag: 0, tc: [ 6100, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3583, 2253, -2252 ], flag: 0, tc: [ 6100, -7186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3583, 2253, -3276 ], flag: 0, tc: [ -4118, -7186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2253, -3276 ], flag: 0, tc: [ -4118, 8142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2047, 2253, -2252 ], flag: 0, tc: [ 6100, 8142 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2764 ], flag: 0, tc: [ 990, 3032 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2252 ], flag: 0, tc: [ 6100, 3032 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2355, -2252 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2253, -2764 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2355, -2764 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2253, -2252 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2355, -2764 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2253, -2764 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2559, 2355, -2764 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3071, 2253, -2764 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_0701A340 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701A150, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0,  9,  3, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 11, 10, 0x0,  3, 12, 13, 0x0),
	...Gbi.gsSP2Triangles( 3, 13, 11, 0x0,  0, 14,  1, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0701A240, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0701A400 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0701A340),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

