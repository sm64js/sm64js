import * as Gbi from "../../../../../include/gbi"
import { snow_09008000 } from "../../../../../textures/snow"

const ccm_seg7_lights_0700B118 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700B130 = [
	{ pos: [ 768, -1535, 5118 ], flag: 0, tc: [ 820, 450 ], color: [ 44, 118, 248, 255 ] },
	{ pos: [ 805, -1535, 5320 ], flag: 0, tc: [ 0, 990 ], color: [ 44, 118, 248, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 0, -11806 ], color: [ 44, 118, 248, 255 ] },
	{ pos: [ 768, -1535, 5118 ], flag: 0, tc: [ 820, 450 ], color: [ 29, 120, 229, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 0, -11806 ], color: [ 29, 120, 229, 255 ] },
	{ pos: [ 2391, -2303, 3433 ], flag: 0, tc: [ 1246, -11830 ], color: [ 29, 120, 229, 255 ] },
]

export const ccm_seg7_dl_0700B190 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B118.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B118.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B130, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700B1D8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700B190),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

