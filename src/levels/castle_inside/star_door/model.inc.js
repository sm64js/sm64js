import * as Gbi from "../../../include/gbi"
const inside_castle_seg7_lights_0703BD28 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

export const inside_castle_seg7_texture_07005800 = []

export const inside_castle_seg7_texture_07003800 = []

export const inside_castle_seg7_texture_07004800 = []

const inside_castle_seg7_vertex_0703BD40 = [
	{ pos: [ -76, 0, -15 ], flag: 0, tc: [ 478, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 0, 15 ], flag: 0, tc: [ 992, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 256, 15 ], flag: 0, tc: [ 992, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 256, -15 ], flag: 0, tc: [ 1100, 460 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 79, 256, 15 ], flag: 0, tc: [ -650, 240 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 79, 256, -15 ], flag: 0, tc: [ -542, 734 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 256, 15 ], flag: 0, tc: [ 990, -34 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 79, 0, -15 ], flag: 0, tc: [ 1234, -116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, 0, 15 ], flag: 0, tc: [ -174, 868 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, 0, -15 ], flag: 0, tc: [ -604, 498 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 79, 0, 15 ], flag: 0, tc: [ 1664, 254 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 79, 0, 15 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 79, 0, -15 ], flag: 0, tc: [ 584, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 79, 256, -15 ], flag: 0, tc: [ 584, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 79, 256, 15 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, 256, -15 ], flag: 0, tc: [ 480, 0 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_0703BE40 = [
	{ pos: [ -76, 0, 15 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 79, 0, 15 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 79, 256, 15 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -76, 256, 15 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

const inside_castle_seg7_vertex_0703BE80 = [
	{ pos: [ 79, 0, -15 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -76, 256, -15 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 79, 256, -15 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -76, 0, -15 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
]

export const inside_castle_seg7_dl_0703BEC0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0703BD28.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0703BD28.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0703BD40, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0703BF38 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0703BE40, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0703BF70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0703BE80, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0703BFA8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0703BEC0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0703BF38),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0703BF70),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

