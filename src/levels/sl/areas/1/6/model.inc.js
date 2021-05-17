import * as Gbi from "../../../../../include/gbi"
import {
    snow_09009800,
    snow_09009000} from "../../../../../textures/snow"
const sl_seg7_lights_07008930 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const sl_seg7_lights_07008948 = Gbi.gdSPDefLights1(
	    0x22, 0x17, 0x00,
	    0x44, 0x2f, 0x00, 0x28, 0x28, 0x28
)

const sl_seg7_vertex_07008960 = [
	{ pos: [ 1487, 1536, -3572 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1691, 1536, -3435 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1828, 1536, -3639 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1889, 2816, -1035 ], flag: 0, tc: [ 990, 92 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1643, 2816, -1032 ], flag: 0, tc: [ 0, 102 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1643, 2816, -819 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1793, 2816, -819 ], flag: 0, tc: [ 590, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1889, 2816, -925 ], flag: 0, tc: [ 990, 550 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2916, 1024, -549 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2712, 1024, -412 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2575, 1024, -615 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2779, 1024, -753 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1624, 1536, -3776 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5496, 1024, -3308 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5700, 1024, -3170 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5837, 1024, -3374 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
]

const sl_seg7_vertex_07008A60 = [
	{ pos: [ 1748, 1024, -4726 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2089, 1024, -4792 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1885, 1024, -4930 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1952, 1024, -4589 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3475, 1024, -5856 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3816, 1024, -5922 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3612, 1024, -6059 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3679, 1024, -5718 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5225, 1055, -5410 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 126, 251, 255 ] },
	{ pos: [ 5566, 1053, -5476 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 126, 251, 255 ] },
	{ pos: [ 5362, 1046, -5613 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 126, 251, 255 ] },
	{ pos: [ 5428, 1062, -5273 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 126, 251, 255 ] },
	{ pos: [ -170, 4864, 33 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 33, 4864, 171 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 171, 4864, -32 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
]

const sl_seg7_vertex_07008B50 = [
	{ pos: [ 5496, 1024, -3308 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5837, 1024, -3374 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5633, 1024, -3512 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3940, 1024, -1163 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3599, 1024, -1230 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3803, 1024, -1367 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3736, 1024, -1026 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -170, 4864, 33 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 171, 4864, -32 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -32, 4864, -170 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
]

const sl_seg7_vertex_07008BF0 = [
	{ pos: [ 3762, 1024, 5487 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5401, 1024, 3849 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3762, 1024, 3849 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5401, 1024, 5487 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
]

export const sl_seg7_dl_07008C30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, snow_09009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(sl_seg7_lights_07008930.l[0], 1),
	Gbi.gsSPLight(sl_seg7_lights_07008930.a, 2),
	Gbi.gsSPVertex(sl_seg7_vertex_07008960, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  3,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008A60, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008B50, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_07008D10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, snow_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(sl_seg7_lights_07008948.l[0], 1),
	Gbi.gsSPLight(sl_seg7_lights_07008948.a, 2),
	Gbi.gsSPVertex(sl_seg7_vertex_07008BF0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_07008D58 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07008C30),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07008D10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

