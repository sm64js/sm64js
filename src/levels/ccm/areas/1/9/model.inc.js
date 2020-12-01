import * as Gbi from "../../../../../include/gbi"
import { snow_09000800 } from "../../../../../textures/snow"
const ccm_seg7_lights_0700FB78 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700FB90 = [
	{ pos: [ -123, -613, 238 ], flag: 0, tc: [ 0, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -283, 666, -85 ], flag: 0, tc: [ 690, 138 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -283, -613, -85 ], flag: 0, tc: [ 690, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ 201, -613, 78 ], flag: 0, tc: [ 690, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ 201, 666, 78 ], flag: 0, tc: [ 690, -288 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -123, 666, 238 ], flag: 0, tc: [ 0, -288 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -123, -613, 238 ], flag: 0, tc: [ 0, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ 41, -613, -246 ], flag: 0, tc: [ 690, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 41, 666, -246 ], flag: 0, tc: [ 690, 138 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 201, 666, 78 ], flag: 0, tc: [ 0, 138 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 201, -613, 78 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ -283, -613, -85 ], flag: 0, tc: [ 690, 1244 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ 41, 666, -246 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ 41, -613, -246 ], flag: 0, tc: [ 0, 1244 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -283, 666, -85 ], flag: 0, tc: [ 690, 0 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -123, 666, 238 ], flag: 0, tc: [ 0, 138 ], color: [ 143, 0, 56, 255 ] },
]

export const ccm_seg7_dl_0700FC90 = [ 
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FB78.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FB78.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FB90, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700FD08 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 90),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700FC90),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

