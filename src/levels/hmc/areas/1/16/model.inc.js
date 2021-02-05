import * as Gbi from "../../../../../include/gbi"
import {
	cave_0900C000
} from "../../../../../textures/cave"
const hmc_seg7_lights_07014CB8 = Gbi.gdSPDefLights1(
	    0x23, 0x2b, 0x14,
	    0x8e, 0xac, 0x52, 0x28, 0x28, 0x28
)

const hmc_seg7_vertex_07014CD0 = [
	{ pos: [ 3165, -409, -6338 ], flag: 0, tc: [ 990, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3113, -869, -6338 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3165, -869, -6338 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3482, -665, -6338 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3533, -665, -6338 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3533, -409, -6338 ], flag: 0, tc: [ 990, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3482, -409, -6338 ], flag: 0, tc: [ 0, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3328, -921, -6338 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3431, -921, -6338 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3431, -409, -6338 ], flag: 0, tc: [ 990, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3328, -409, -6338 ], flag: 0, tc: [ 0, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3277, -409, -6338 ], flag: 0, tc: [ 990, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3226, -818, -6338 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3277, -818, -6338 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3226, -409, -6338 ], flag: 0, tc: [ 0, 422 ], color: [ 0, 0, 127, 128 ] },
	{ pos: [ 3113, -409, -6338 ], flag: 0, tc: [ 0, 422 ], color: [ 0, 0, 127, 128 ] },
]

export const hmc_seg7_dl_07014DD0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, cave_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(hmc_seg7_lights_07014CB8.l[0], 1),
	Gbi.gsSPLight(hmc_seg7_lights_07014CB8.a, 2),
	Gbi.gsSPVertex(hmc_seg7_vertex_07014CD0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07014E48 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07014DD0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

