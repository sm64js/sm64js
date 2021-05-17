import * as Gbi from "../../../../../include/gbi"
import { snow_09000800 } from "../../../../../textures/snow"

const ccm_seg7_lights_07010A60 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_07010A78 = [
	{ pos: [ -55, 540, 574 ], flag: 0, tc: [ -912, 4482 ], color: [ 1, 126, 0, 255 ] },
	{ pos: [ -1163, 553, 677 ], flag: 0, tc: [ 308, 990 ], color: [ 1, 126, 0, 255 ] },
	{ pos: [ -1120, 553, 770 ], flag: 0, tc: [ 0, 990 ], color: [ 1, 126, 0, 255 ] },
	{ pos: [ -12, 540, 667 ], flag: 0, tc: [ -1254, 4482 ], color: [ 1, 126, 0, 255 ] },
	{ pos: [ -1799, 553, 517 ], flag: 0, tc: [ 1672, -714 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1120, 553, 770 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1333, 553, 304 ], flag: 0, tc: [ 1672, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1586, 553, 983 ], flag: 0, tc: [ 0, -714 ], color: [ 0, 127, 0, 255 ] },
]

export const ccm_seg7_dl_07010AF8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_07010A60.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_07010A60.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010A78, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010B50 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 90),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010AF8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

