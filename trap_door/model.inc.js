import * as Gbi from "../../../include/gbi"
const inside_castle_seg7_lights_0703BAB0 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

export const inside_09005000 = []

const inside_castle_seg7_vertex_0703BAC8 = [
	{ pos: [ 358, 0, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, -101, 307 ], flag: 0, tc: [ 0, 480 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, -101, -306 ], flag: 0, tc: [ 3034, 480 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, 0, -306 ], flag: 0, tc: [ 1756, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, -101, -306 ], flag: 0, tc: [ 1756, 478 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 0, -101, -306 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 0, 0, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 0, 0, -306 ], flag: 0, tc: [ 3034, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, -101, -306 ], flag: 0, tc: [ 3034, 480 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, -101, 307 ], flag: 0, tc: [ 0, 480 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, 0, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 0, 0, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 358, -101, 307 ], flag: 0, tc: [ 1756, 478 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 358, 0, 307 ], flag: 0, tc: [ 1756, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 0, -101, 307 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 0, 127, 255 ] },
]

const inside_castle_seg7_vertex_0703BBB8 = [
	{ pos: [ 358, 0, -306 ], flag: 0, tc: [ 1756, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 0, 0, 307 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 358, 0, 307 ], flag: 0, tc: [ 1756, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 358, 0, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, -101, -306 ], flag: 0, tc: [ 3034, 480 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 358, 0, -306 ], flag: 0, tc: [ 3034, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 0, 0, -306 ], flag: 0, tc: [ 0, -2076 ], color: [ 0, 127, 0, 255 ] },
]

export const inside_castle_seg7_dl_0703BC28 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0703BAB0.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0703BAB0.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0703BAC8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0703BBB8, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0703BCB8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0703BC28),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

