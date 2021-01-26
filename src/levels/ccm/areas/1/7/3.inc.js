import * as Gbi from "../../../../../include/gbi"
import { snow_09000800 } from "../../../../../textures/snow"
const ccm_seg7_lights_0700F6E0 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700F6F8 = [
	{ pos: [ 219, -378, 76 ], flag: 0, tc: [ 0, 990 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 294, -378, 6 ], flag: 0, tc: [ 990, 990 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 294, -275, 6 ], flag: 0, tc: [ 990, 0 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 219, -275, 76 ], flag: 0, tc: [ 0, 0 ], color: [ 86, 0, 92, 255 ] },
]

export const ccm_seg7_dl_0700F738 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700F6E0.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700F6E0.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F6F8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F780 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 90),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F738),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

