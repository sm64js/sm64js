import * as Gbi from "../../../../../include/gbi"

import { ccs_seg7_texture_07004B00 } from "../../../texture.inc"

const ccs_seg7_lights_0701E610 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccs_seg7_vertex_0701E628 = [
	{ pos: [ -6296, -5836, -6501 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -5836, -6297 ], flag: 0, tc: [ -1052, -1054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6296, -5836, -6297 ], flag: 0, tc: [ 3034, -1054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -5836, -6501 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 127, 0, 255 ] },
]

export const ccs_seg7_dl_0701E668 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ccs_seg7_texture_07004B00),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701E610.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701E610.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701E628, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701E6B0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701E668),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

