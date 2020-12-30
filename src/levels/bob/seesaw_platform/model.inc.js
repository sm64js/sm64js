import * as Gbi from "../../../include/gbi"
import { generic_09006000 } from "../../../textures/generic"

const bob_seg7_lights_0700E510 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bob_seg7_vertex_0700E528 = [
	{ pos: [ -180, 51, -904 ], flag: 0, tc: [ 990, 0 ], color: [ 205, 51, 153, 255 ] },
	{ pos: [ -180, 0, -904 ], flag: 0, tc: [ 950, 284 ], color: [ 172, 172, 214, 255 ] },
	{ pos: [ -180, 51, 905 ], flag: 0, tc: [ -3222, 0 ], color: [ 172, 84, 42, 255 ] },
	{ pos: [ -180, 0, -904 ], flag: 0, tc: [ -3204, 0 ], color: [ 172, 172, 214, 255 ] },
	{ pos: [ 181, 0, -904 ], flag: 0, tc: [ -3204, 2012 ], color: [ 51, 205, 153, 255 ] },
	{ pos: [ 181, 0, 905 ], flag: 0, tc: [ 990, 2012 ], color: [ 84, 172, 42, 255 ] },
	{ pos: [ -180, 0, 905 ], flag: 0, tc: [ 990, 0 ], color: [ 205, 205, 103, 255 ] },
	{ pos: [ 181, 51, -904 ], flag: 0, tc: [ 990, 2012 ], color: [ 84, 84, 214, 255 ] },
	{ pos: [ 181, 51, 905 ], flag: 0, tc: [ -3222, 2012 ], color: [ 51, 51, 103, 255 ] },
	{ pos: [ 181, 0, 905 ], flag: 0, tc: [ -3244, 304 ], color: [ 84, 172, 42, 255 ] },
	{ pos: [ 181, 0, -904 ], flag: 0, tc: [ 950, 284 ], color: [ 51, 205, 153, 255 ] },
	{ pos: [ 181, 51, -904 ], flag: 0, tc: [ 990, 0 ], color: [ 84, 84, 214, 255 ] },
	{ pos: [ 181, 51, 905 ], flag: 0, tc: [ -3222, 0 ], color: [ 51, 51, 103, 255 ] },
	{ pos: [ -180, 0, 905 ], flag: 0, tc: [ 0, 172 ], color: [ 205, 205, 103, 255 ] },
	{ pos: [ 181, 51, 905 ], flag: 0, tc: [ 690, 0 ], color: [ 51, 51, 103, 255 ] },
	{ pos: [ -180, 51, 905 ], flag: 0, tc: [ 0, 0 ], color: [ 172, 84, 42, 255 ] },
]

const bob_seg7_vertex_0700E628 = [
	{ pos: [ -180, 0, -904 ], flag: 0, tc: [ 950, 284 ], color: [ 172, 172, 214, 255 ] },
	{ pos: [ -180, 0, 905 ], flag: 0, tc: [ -3244, 304 ], color: [ 205, 205, 103, 255 ] },
	{ pos: [ -180, 51, 905 ], flag: 0, tc: [ -3222, 0 ], color: [ 172, 84, 42, 255 ] },
	{ pos: [ 181, 0, -904 ], flag: 0, tc: [ 268, 2012 ], color: [ 51, 205, 153, 255 ] },
	{ pos: [ -180, 0, -904 ], flag: 0, tc: [ 990, 2012 ], color: [ 172, 172, 214, 255 ] },
	{ pos: [ -180, 51, -904 ], flag: 0, tc: [ 990, 1808 ], color: [ 205, 51, 153, 255 ] },
	{ pos: [ 181, 51, -904 ], flag: 0, tc: [ 268, 1808 ], color: [ 84, 84, 214, 255 ] },
	{ pos: [ -180, 0, 905 ], flag: 0, tc: [ 0, 172 ], color: [ 205, 205, 103, 255 ] },
	{ pos: [ 181, 0, 905 ], flag: 0, tc: [ 690, 172 ], color: [ 84, 172, 42, 255 ] },
	{ pos: [ 181, 51, 905 ], flag: 0, tc: [ 690, 0 ], color: [ 51, 51, 103, 255 ] },
]

export const bob_seg7_dl_0700E6C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, generic_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(bob_seg7_lights_0700E510.l[0], 1),
	Gbi.gsSPLight(bob_seg7_lights_0700E510.a, 2),
	Gbi.gsSPVertex(bob_seg7_vertex_0700E528, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  2, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12,  9, 11, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700E628, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bob_seg7_dl_0700E768 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(160, 160, 160, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bob_seg7_dl_0700E6C8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2), /// TODO not exect render mode
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

