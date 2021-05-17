import * as Gbi from "../../../../../include/gbi"
import { snow_09008000 } from "../../../../../textures/snow"
import { ccm_seg7_texture_07001900 } from "../../../texture.inc"
const ccm_seg7_lights_0700F800 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700F818 = [
	{ pos: [ -177, 102, -153 ], flag: 0, tc: [ 2906, -3104 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 0, 102, 154 ], flag: 0, tc: [ 1832, -4510 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 177, 102, 51 ], flag: 0, tc: [ 1020, -3890 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -177, 102, 51 ], flag: 0, tc: [ 2776, -4116 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 177, 102, -153 ], flag: 0, tc: [ 1152, -2876 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 0, 102, -255 ], flag: 0, tc: [ 2094, -2482 ], color: [ 0, 127, 0, 255 ] },
]

const ccm_seg7_vertex_0700F878 = [
	{ pos: [ 177, 0, 51 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 102, 154 ], flag: 0, tc: [ 2012, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 0, 154 ], flag: 0, tc: [ 2012, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ -177, 0, -153 ], flag: 0, tc: [ 2012, 990 ], color: [ 193, 0, 146, 255 ] },
	{ pos: [ -177, 102, -153 ], flag: 0, tc: [ 2012, 0 ], color: [ 193, 0, 146, 255 ] },
	{ pos: [ 0, 102, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 146, 255 ] },
	{ pos: [ 0, 0, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 146, 255 ] },
	{ pos: [ -177, 0, 51 ], flag: 0, tc: [ 2012, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -177, 102, 51 ], flag: 0, tc: [ 2012, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -177, 102, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -177, 0, -153 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, 0, 154 ], flag: 0, tc: [ 2012, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -177, 102, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -177, 0, 51 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 0, 102, 154 ], flag: 0, tc: [ 2012, 0 ], color: [ 193, 0, 109, 255 ] },
]

const ccm_seg7_vertex_0700F968 = [
	{ pos: [ 0, 0, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 146, 255 ] },
	{ pos: [ 0, 102, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 0, 146, 255 ] },
	{ pos: [ 177, 102, -153 ], flag: 0, tc: [ 2012, 0 ], color: [ 63, 0, 146, 255 ] },
	{ pos: [ 177, 0, 51 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 177, 102, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 0, 102, 154 ], flag: 0, tc: [ 2012, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ 177, 0, -153 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 177, 102, 51 ], flag: 0, tc: [ 2012, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 177, 0, 51 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 177, 102, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 177, 0, -153 ], flag: 0, tc: [ 2012, 990 ], color: [ 63, 0, 146, 255 ] },
]

export const ccm_seg7_dl_0700FA18 = [ 
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700F800.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700F800.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F818, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  0,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700FA70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ccm_seg7_texture_07001900),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F878, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F968, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700FB00 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700FA18),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700FA70),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

