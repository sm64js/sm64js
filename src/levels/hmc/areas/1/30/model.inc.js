import * as Gbi from "../../../../../include/gbi"
import {
	cave_09007800,
	cave_09009800
} from "../../../../../textures/cave"
const hmc_seg7_lights_070210E0 = Gbi.gdSPDefLights1(
	    0x79, 0x79, 0x79,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const hmc_seg7_vertex_070210F8 = [
	{ pos: [ 922, -4689, 2253 ], flag: 0, tc: [ 786, -1054 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ 973, -4689, 2406 ], flag: 0, tc: [ 1092, -1156 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 973, -4689, 2253 ], flag: 0, tc: [ 786, -1156 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 6605, -4689, 1997 ], flag: 0, tc: [ 5364, -2526 ], color: [ 205, 103, 51, 255 ] },
	{ pos: [ 5581, -4689, 2662 ], flag: 0, tc: [ 4260, -646 ], color: [ 214, 84, 172, 255 ] },
	{ pos: [ 6605, -4689, 2662 ], flag: 0, tc: [ 5896, -1462 ], color: [ 172, 42, 172, 255 ] },
	{ pos: [ 5581, -4689, 1997 ], flag: 0, tc: [ 3728, -1708 ], color: [ 153, 51, 51, 255 ] },
	{ pos: [ 4557, -4689, 1997 ], flag: 0, tc: [ 2094, -890 ], color: [ 56, 113, 0, 255 ] },
	{ pos: [ 4045, -4689, 1997 ], flag: 0, tc: [ 1276, -482 ], color: [ 143, 56, 0, 255 ] },
	{ pos: [ 4045, -4689, 2662 ], flag: 0, tc: [ 1808, 582 ], color: [ 200, 113, 0, 255 ] },
	{ pos: [ 4557, -4689, 2662 ], flag: 0, tc: [ 2626, 172 ], color: [ 113, 56, 0, 255 ] },
	{ pos: [ 3021, -4689, 1997 ], flag: 0, tc: [ -358, 336 ], color: [ 42, 84, 84, 255 ] },
	{ pos: [ 973, -4689, 2662 ], flag: 0, tc: [ -3096, 3032 ], color: [ 84, 84, 214, 255 ] },
	{ pos: [ 3021, -4689, 2662 ], flag: 0, tc: [ 172, 1396 ], color: [ 103, 51, 205, 255 ] },
	{ pos: [ 973, -4689, 1997 ], flag: 0, tc: [ -3628, 1970 ], color: [ 84, 42, 84, 255 ] },
	{ pos: [ 922, -4689, 2406 ], flag: 0, tc: [ 1092, -1054 ], color: [ 0, 89, 167, 255 ] },
]

const hmc_seg7_vertex_070211F8 = [
	{ pos: [ 6605, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 172, 42, 172, 255 ] },
	{ pos: [ 6605, -3665, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 6605, -3665, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 4557, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 113, 56, 0, 255 ] },
	{ pos: [ 4557, -5713, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4557, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 56, 113, 0, 255 ] },
	{ pos: [ 4557, -5713, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 5581, -4689, 2662 ], flag: 0, tc: [ 4056, 2012 ], color: [ 214, 84, 172, 255 ] },
	{ pos: [ 3021, -5713, 2662 ], flag: 0, tc: [ -1052, 0 ], color: [ 56, 0, 143, 255 ] },
	{ pos: [ 3021, -4689, 2662 ], flag: 0, tc: [ -1052, 2012 ], color: [ 103, 51, 205, 255 ] },
	{ pos: [ 5581, -5713, 2662 ], flag: 0, tc: [ 4056, 0 ], color: [ 143, 0, 200, 255 ] },
	{ pos: [ 5581, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 153, 51, 51, 255 ] },
	{ pos: [ 5581, -5713, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 143, 0, 200, 255 ] },
	{ pos: [ 5581, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 214, 84, 172, 255 ] },
	{ pos: [ 5581, -5713, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 0, 113, 255 ] },
]

const hmc_seg7_vertex_070212E8 = [
	{ pos: [ 973, -4433, 2253 ], flag: 0, tc: [ 362, 1500 ], color: [ 92, 195, 61, 255 ] },
	{ pos: [ 973, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 84, 42, 84, 255 ] },
	{ pos: [ 973, -3665, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ 6605, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 172, 42, 172, 255 ] },
	{ pos: [ 6605, -3665, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 6605, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 205, 103, 51, 255 ] },
	{ pos: [ 4045, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 143, 56, 0, 255 ] },
	{ pos: [ 4045, -5713, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4045, -5713, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4045, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 200, 113, 0, 255 ] },
	{ pos: [ 3021, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 103, 51, 205, 255 ] },
	{ pos: [ 3021, -5713, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 56, 0, 143, 255 ] },
	{ pos: [ 3021, -5713, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ 3021, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 42, 84, 84, 255 ] },
	{ pos: [ 973, -4433, 2406 ], flag: 0, tc: [ 596, 1500 ], color: [ 119, 227, 227, 255 ] },
]

const hmc_seg7_vertex_070213D8 = [
	{ pos: [ 6605, -3665, 1997 ], flag: 0, tc: [ 4056, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 973, -4689, 1997 ], flag: 0, tc: [ -7184, 2012 ], color: [ 84, 42, 84, 255 ] },
	{ pos: [ 6605, -4689, 1997 ], flag: 0, tc: [ 4056, 2012 ], color: [ 205, 103, 51, 255 ] },
	{ pos: [ 973, -4433, 2253 ], flag: 0, tc: [ 362, 1500 ], color: [ 92, 195, 61, 255 ] },
	{ pos: [ 973, -4689, 2253 ], flag: 0, tc: [ 362, 2012 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 973, -4689, 1997 ], flag: 0, tc: [ 0, 2012 ], color: [ 84, 42, 84, 255 ] },
	{ pos: [ 973, -4433, 2406 ], flag: 0, tc: [ 596, 1500 ], color: [ 119, 227, 227, 255 ] },
	{ pos: [ 973, -3665, 1997 ], flag: 0, tc: [ 0, 0 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ 973, -3665, 2662 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 973, -4689, 2662 ], flag: 0, tc: [ 990, 2012 ], color: [ 84, 84, 214, 255 ] },
	{ pos: [ 973, -4689, 2406 ], flag: 0, tc: [ 596, 2012 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 6605, -4689, 2662 ], flag: 0, tc: [ 4056, 2012 ], color: [ 172, 42, 172, 255 ] },
	{ pos: [ 973, -3665, 2662 ], flag: 0, tc: [ -7184, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 6605, -3665, 2662 ], flag: 0, tc: [ 4056, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 973, -4689, 2662 ], flag: 0, tc: [ -7184, 2012 ], color: [ 84, 84, 214, 255 ] },
]

const hmc_seg7_vertex_070214C8 = [
	{ pos: [ 3021, -4689, 1997 ], flag: 0, tc: [ -1052, 2012 ], color: [ 42, 84, 84, 255 ] },
	{ pos: [ 3021, -5713, 1997 ], flag: 0, tc: [ -1052, 0 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ 5581, -5713, 1997 ], flag: 0, tc: [ 4056, 0 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ 6605, -3665, 1997 ], flag: 0, tc: [ 4056, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 973, -3665, 1997 ], flag: 0, tc: [ -7184, 0 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ 973, -4689, 1997 ], flag: 0, tc: [ -7184, 2012 ], color: [ 84, 42, 84, 255 ] },
	{ pos: [ 922, -4689, 2253 ], flag: 0, tc: [ 362, 2012 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ 973, -4689, 2253 ], flag: 0, tc: [ 362, 2012 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 973, -4433, 2253 ], flag: 0, tc: [ 362, 1500 ], color: [ 92, 195, 61, 255 ] },
	{ pos: [ 922, -4433, 2253 ], flag: 0, tc: [ 362, 1500 ], color: [ 0, 167, 89, 255 ] },
	{ pos: [ 922, -4433, 2406 ], flag: 0, tc: [ 596, 1500 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 973, -4433, 2406 ], flag: 0, tc: [ 596, 1500 ], color: [ 119, 227, 227, 255 ] },
	{ pos: [ 973, -4689, 2406 ], flag: 0, tc: [ 596, 2012 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 922, -4689, 2406 ], flag: 0, tc: [ 596, 2012 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 5581, -4689, 1997 ], flag: 0, tc: [ 4056, 2012 ], color: [ 153, 51, 51, 255 ] },
]

export const hmc_seg7_dl_070215B8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(hmc_seg7_lights_070210E0.l[0], 1),
	Gbi.gsSPLight(hmc_seg7_lights_070210E0.a, 2),
	Gbi.gsSPVertex(hmc_seg7_vertex_070210F8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07021630 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070211F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070212E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14,  0,  2, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070213D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10,  6, 0x0),
	...Gbi.gsSP2Triangles( 9,  6,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070214C8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  9, 0x0,  8, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 13, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07021760 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_070215B8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07021630),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

