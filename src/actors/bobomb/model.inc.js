import * as Gbi from "../../include/gbi"

export const bobomb_seg8_texture_0801DA60 = []
export const bobomb_seg8_texture_0801EA60 = []
export const bobomb_seg8_texture_0801FA60 = []
export const bobomb_seg8_texture_08020A60 = []
export const bobomb_seg8_texture_08021A60 = []
export const bobomb_seg8_texture_08022260 = []

const bobomb_seg8_vertex_08022A60 = [
	{ pos: [ 133, -47, 0 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 133, 32, 0 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 128, 32, 50 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 128, -47, -49 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 128, -47, 50 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 128, 32, -49 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const bobomb_seg8_dl_08022AC0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022B08 = [
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022A60, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  3,  5,  1, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022B58 = [
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022AC0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_08021A60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022B08),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022B88 = [
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022AC0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_08022260),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022B08),
	Gbi.gsSPEndDisplayList(),
]

const bobomb_seg8_vertex_08022BB8 = [
	{ pos: [ 0, 49, 0 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -49, -49, 0 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, -49, 0 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -49, 49, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const bobomb_seg8_vertex_08022BF8 = [
	{ pos: [ 49, 49, 0 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, -49, 0 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 49, -49, 0 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, 49, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const bobomb_seg8_dl_08022C38 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_0801DA60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022BB8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_0801EA60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022BF8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022CA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_0801FA60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022BB8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bobomb_seg8_texture_08020A60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022BF8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022D08 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022C38),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08022D78 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bobomb_seg8_dl_08022CA0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

const bobomb_seg8_lights_08022DE8 = Gbi.gdSPDefLights1(
	    0x3f, 0x26, 0x04,
	    0xff, 0x99, 0x12, 0x28, 0x28, 0x28
)

const bobomb_seg8_lights_08022E00 = Gbi.gdSPDefLights1(
	    0x2c, 0x2c, 0x2c,
	    0xb2, 0xb2, 0xb2, 0x28, 0x28, 0x28
)

const bobomb_lights_unused = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const bobomb_seg8_vertex_08022E30 = [
	{ pos: [ 27, -26, -31 ], flag: 0, tc: [ 0, 0 ], color: [ 235, 150, 191, 0 ] },
	{ pos: [ -36, 0, -20 ], flag: 0, tc: [ 0, 0 ], color: [ 177, 208, 170, 0 ] },
	{ pos: [ 32, 0, -41 ], flag: 0, tc: [ 0, 0 ], color: [ 252, 251, 130, 0 ] },
	{ pos: [ 85, 0, -32 ], flag: 0, tc: [ 0, 0 ], color: [ 80, 241, 160, 255 ] },
	{ pos: [ 79, 28, -20 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 98, 196, 255 ] },
	{ pos: [ 79, 28, 15 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 98, 60, 255 ] },
	{ pos: [ 85, 0, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 80, 241, 96, 255 ] },
	{ pos: [ 33, 28, 29 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 105, 71, 255 ] },
	{ pos: [ -29, 28, 12 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 96, 60, 255 ] },
	{ pos: [ -36, 0, 16 ], flag: 0, tc: [ 0, 0 ], color: [ 177, 208, 86, 255 ] },
	{ pos: [ 32, 0, 37 ], flag: 0, tc: [ 0, 0 ], color: [ 252, 251, 126, 255 ] },
	{ pos: [ 33, 28, -34 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 105, 185, 255 ] },
	{ pos: [ -29, 28, -16 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 96, 196, 255 ] },
	{ pos: [ 68, -30, 16 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 149, 54, 255 ] },
	{ pos: [ 68, -30, -21 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 149, 202, 255 ] },
	{ pos: [ 27, -26, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 235, 150, 65, 255 ] },
]

const bobomb_seg8_vertex_08022F30 = [
	{ pos: [ 27, -26, -31 ], flag: 0, tc: [ 0, 0 ], color: [ 237, 144, 200, 255 ] },
	{ pos: [ 27, -26, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 245, 162, 83, 0 ] },
	{ pos: [ -36, 0, 16 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 248, 84, 0 ] },
	{ pos: [ -36, 0, -20 ], flag: 0, tc: [ 0, 0 ], color: [ 169, 221, 172, 255 ] },
]

const bobomb_seg8_vertex_08022F70 = [
	{ pos: [ 32, 0, 41 ], flag: 0, tc: [ 0, 0 ], color: [ 252, 251, 126, 0 ] },
	{ pos: [ -36, 0, 20 ], flag: 0, tc: [ 0, 0 ], color: [ 177, 208, 86, 0 ] },
	{ pos: [ 27, -26, 31 ], flag: 0, tc: [ 0, 0 ], color: [ 235, 150, 65, 0 ] },
	{ pos: [ 84, 0, -27 ], flag: 0, tc: [ 0, 0 ], color: [ 80, 241, 160, 255 ] },
	{ pos: [ 79, 28, -15 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 98, 196, 255 ] },
	{ pos: [ 79, 28, 20 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 98, 60, 255 ] },
	{ pos: [ 84, 0, 32 ], flag: 0, tc: [ 0, 0 ], color: [ 80, 241, 96, 255 ] },
	{ pos: [ 32, 0, -37 ], flag: 0, tc: [ 0, 0 ], color: [ 252, 251, 130, 255 ] },
	{ pos: [ -36, 0, -16 ], flag: 0, tc: [ 0, 0 ], color: [ 177, 208, 170, 255 ] },
	{ pos: [ -28, 28, -12 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 96, 196, 255 ] },
	{ pos: [ 33, 28, -29 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 105, 185, 255 ] },
	{ pos: [ -28, 28, 16 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 96, 60, 255 ] },
	{ pos: [ 33, 28, 33 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 105, 71, 255 ] },
	{ pos: [ 68, -29, 21 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 149, 54, 255 ] },
	{ pos: [ 68, -29, -16 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 149, 202, 255 ] },
	{ pos: [ 27, -26, -27 ], flag: 0, tc: [ 0, 0 ], color: [ 235, 150, 191, 255 ] },
]

const bobomb_seg8_vertex_08023070 = [
	{ pos: [ 27, -26, -27 ], flag: 0, tc: [ 0, 0 ], color: [ 237, 144, 200, 255 ] },
	{ pos: [ 27, -26, 31 ], flag: 0, tc: [ 0, 0 ], color: [ 245, 162, 83, 0 ] },
	{ pos: [ -36, 0, 20 ], flag: 0, tc: [ 0, 0 ], color: [ 162, 248, 84, 0 ] },
	{ pos: [ -36, 0, -16 ], flag: 0, tc: [ 0, 0 ], color: [ 169, 221, 172, 255 ] },
]

const bobomb_seg8_vertex_080230B0 = [
	{ pos: [ 0, -100, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 254, 127, 0 ] },
	{ pos: [ -53, -99, 28 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 254, 109, 0 ] },
	{ pos: [ -53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 254, 109, 0 ] },
	{ pos: [ 0, -141, 58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 254, 127, 255 ] },
	{ pos: [ 53, -99, 28 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 254, 109, 255 ] },
	{ pos: [ 53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 254, 109, 255 ] },
	{ pos: [ -53, -99, 28 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -53, -98, -32 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -53, -98, -32 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 2, 147, 255 ] },
	{ pos: [ 0, -97, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 2, 147, 255 ] },
	{ pos: [ 0, -138, -64 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 2, 147, 255 ] },
	{ pos: [ -53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 2, 147, 255 ] },
]

const bobomb_seg8_vertex_08023190 = [
	{ pos: [ 53, -98, -32 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 53, -99, 28 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 0 ] },
	{ pos: [ 53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 0 ] },
	{ pos: [ 53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 0, -97, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 2, 147, 255 ] },
	{ pos: [ 53, -98, -32 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 2, 147, 255 ] },
	{ pos: [ 53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 2, 147, 255 ] },
	{ pos: [ 0, -138, -64 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 2, 147, 255 ] },
	{ pos: [ 0, -138, -64 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
	{ pos: [ 53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
	{ pos: [ 53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
	{ pos: [ 0, -141, 58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
	{ pos: [ -53, -140, 27 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
	{ pos: [ -53, -139, -33 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 254, 255 ] },
]

export const bobomb_seg8_dl_08023270 = [
	Gbi.gsSPLight(bobomb_seg8_lights_08022DE8.l[0], 1),
	Gbi.gsSPLight(bobomb_seg8_lights_08022DE8.a, 2),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022E30, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12,  8, 0x0),
	...Gbi.gsSP2Triangles(11,  8,  7, 0x0,  6, 13, 14, 0x0),
	...Gbi.gsSP2Triangles( 6, 14,  3, 0x0,  9,  8, 12, 0x0),
	...Gbi.gsSP2Triangles( 9, 12,  1, 0x0, 10,  9, 15, 0x0),
	...Gbi.gsSP2Triangles( 2,  1, 12, 0x0,  2, 12, 11, 0x0),
	...Gbi.gsSP2Triangles(10,  6,  5, 0x0, 10,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 0, 14, 13, 0x0,  0, 13, 15, 0x0),
	...Gbi.gsSP2Triangles(11,  4,  3, 0x0, 11,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 2,  3, 14, 0x0,  2, 14,  0, 0x0),
	...Gbi.gsSP2Triangles( 7,  5,  4, 0x0,  7,  4, 11, 0x0),
	...Gbi.gsSP2Triangles(15, 13,  6, 0x0, 15,  6, 10, 0x0),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022F30, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08023378 = [
	Gbi.gsSPLight(bobomb_seg8_lights_08022DE8.l[0], 1),
	Gbi.gsSPLight(bobomb_seg8_lights_08022DE8.a, 2),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08022F70, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 10,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0,  6, 13, 14, 0x0),
	...Gbi.gsSP2Triangles( 6, 14,  3, 0x0,  1, 11,  9, 0x0),
	...Gbi.gsSP2Triangles( 1,  9,  8, 0x0, 15,  8,  7, 0x0),
	...Gbi.gsSP2Triangles(12, 11,  1, 0x0, 12,  1,  0, 0x0),
	...Gbi.gsSP2Triangles(10,  4,  3, 0x0, 10,  3,  7, 0x0),
	...Gbi.gsSP2Triangles(15, 14, 13, 0x0, 15, 13,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  5, 0x0,  0,  5, 12, 0x0),
	...Gbi.gsSP2Triangles( 2, 13,  6, 0x0,  2,  6,  0, 0x0),
	...Gbi.gsSP2Triangles(12,  5,  4, 0x0, 12,  4, 10, 0x0),
	...Gbi.gsSP2Triangles( 7,  3, 14, 0x0,  7, 14, 15, 0x0),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08023070, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bobomb_seg8_dl_08023480 = [
	Gbi.gsSPLight(bobomb_seg8_lights_08022E00.l[0], 1),
	Gbi.gsSPLight(bobomb_seg8_lights_08022E00.a, 2),
	Gbi.gsSPVertex(bobomb_seg8_vertex_080230B0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  4,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(bobomb_seg8_vertex_08023190, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 8, 11, 12, 0x0,  8, 12, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

