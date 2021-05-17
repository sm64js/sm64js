import * as Gbi from "../../../../../include/gbi"
import {
	cave_09009800
} from "../../../../../textures/cave"
const hmc_seg7_vertex_070192B8 = [
	{ pos: [ -6041, 2247, -7797 ], flag: 0, tc: [ 990, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6348, 2094, -7797 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6041, 2145, -7797 ], flag: 0, tc: [ 990, 820 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5733, 2196, -7797 ], flag: 0, tc: [ 2012, 650 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6041, 2401, -7797 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6041, 1991, -7797 ], flag: 0, tc: [ 990, 1328 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6348, 2298, -7797 ], flag: 0, tc: [ 0, 308 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_07019328 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070192B8, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07019368 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_XLU_SURF2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetEnvColor(255, 255, 255, 100),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07019328),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_XLU_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

