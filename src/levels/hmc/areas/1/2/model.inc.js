import * as Gbi from "../../../../../include/gbi"
import {
	cave_09003000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_070079E8 = [
	{ pos: [ -6860, 1760, 3753 ], flag: 0, tc: [ 5998, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1658, 3753 ], flag: 0, tc: [ 70, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1658, 3753 ], flag: 0, tc: [ 5998, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1536, 2545 ], flag: 0, tc: [ 5998, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1536, 2545 ], flag: 0, tc: [ 70, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1434, 2545 ], flag: 0, tc: [ 70, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1434, 2545 ], flag: 0, tc: [ 5998, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1331, 3548 ], flag: 0, tc: [ 5998, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1331, 3548 ], flag: 0, tc: [ 70, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1229, 3548 ], flag: 0, tc: [ 70, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1229, 3548 ], flag: 0, tc: [ 5998, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 1024, 3343 ], flag: 0, tc: [ 5998, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 922, 3343 ], flag: 0, tc: [ 70, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6860, 922, 3343 ], flag: 0, tc: [ 5998, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1024, 3343 ], flag: 0, tc: [ 70, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6245, 1760, 3753 ], flag: 0, tc: [ 70, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_07007AE8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070079E8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07007B50 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07007AE8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

