import * as Gbi from "../../../../../include/gbi"
import {
	cave_09006800
} from "../../../../../textures/cave"
const hmc_seg7_lights_0700FF70 = Gbi.gdSPDefLights1(
	    0x79, 0x79, 0x79,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const hmc_seg7_vertex_0700FF88 = [
	{ pos: [ 3891, 0, 4608 ], flag: 0, tc: [ 1756, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4403, 0, 4813 ], flag: 0, tc: [ 2522, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4198, 0, 4608 ], flag: 0, tc: [ 2522, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4403, 0, 5120 ], flag: 0, tc: [ 1756, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4198, 0, 5325 ], flag: 0, tc: [ 734, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3891, 0, 5325 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3686, 0, 5120 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3686, 0, 4813 ], flag: 0, tc: [ 734, -798 ], color: [ 0, 127, 0, 255 ] },
]

export const hmc_seg7_dl_07010008 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09006800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(hmc_seg7_lights_0700FF70.l[0], 1),
	Gbi.gsSPLight(hmc_seg7_lights_0700FF70.a, 2),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700FF88, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  3, 0x0,  0,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  5, 0x0,  0,  7,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07010070 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_DECAL2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07010008),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_DECAL_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

