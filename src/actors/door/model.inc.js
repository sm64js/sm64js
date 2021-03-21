import * as Gbi from "../../include/gbi"

const door_seg3_lights_03009CE0 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const door_seg3_lights_03009CF8 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x00,
	    0xff, 0xff, 0x00, 0x28, 0x28, 0x28
)

export const door_seg3_texture_03009D10 = []
export const door_seg3_texture_0300AD10 = []
export const door_seg3_texture_0300BD10 = []
export const door_seg3_texture_0300CD10 = []
export const door_seg3_texture_0300D510 = []
export const door_seg3_texture_0300E510 = []
export const door_seg3_texture_0300ED10 = []
export const door_seg3_texture_0300FD10 = []
export const door_seg3_texture_03010510 = []
export const door_seg3_texture_03011510 = []
export const door_seg3_texture_03011D10 = []
export const door_seg3_texture_03012510 = []
export const door_seg3_texture_03012D10 = []
export const door_seg3_texture_03013510 = []

const door_seg3_vertex_03013910 = [
	{ pos: [ -12, 0, -58 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -12, 0, 59 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -12, 1024, 59 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -12, 1024, -58 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -12, 1024, 59 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 604, 1024, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 604, 1024, -58 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 604, 0, -58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -12, 0, 59 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -12, 0, -58 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 604, 0, 59 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 604, 0, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 604, 0, -58 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 604, 1024, -58 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 604, 1024, 59 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -12, 1024, -58 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const door_seg3_vertex_03013A10 = [
	{ pos: [ 604, 0, -58 ], flag: 0, tc: [ 974, 1820 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -12, 0, -58 ], flag: 0, tc: [ 0, 1816 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -12, 1024, -58 ], flag: 0, tc: [ 0, 124 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 604, 1024, -58 ], flag: 0, tc: [ 974, 128 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -12, 0, 59 ], flag: 0, tc: [ 0, 1816 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 604, 0, 59 ], flag: 0, tc: [ 974, 1812 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 604, 1024, 59 ], flag: 0, tc: [ 974, 132 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -12, 1024, 59 ], flag: 0, tc: [ 0, 140 ], color: [ 0, 0, 127, 255 ] },
]

const door_seg3_vertex_03013A90 = [
	{ pos: [ 512, 512, 104 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 126, 1, 255 ] },
	{ pos: [ 456, 432, 160 ], flag: 0, tc: [ 0, 0 ], color: [ 166, 31, 83, 255 ] },
	{ pos: [ 512, 488, 160 ], flag: 0, tc: [ 0, 0 ], color: [ 22, 73, 101, 255 ] },
	{ pos: [ 512, 372, 160 ], flag: 0, tc: [ 0, 0 ], color: [ 231, 186, 102, 255 ] },
	{ pos: [ 572, 432, 160 ], flag: 0, tc: [ 0, 0 ], color: [ 90, 227, 83, 255 ] },
	{ pos: [ 596, 432, 104 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 1, 1, 255 ] },
	{ pos: [ 512, 348, 104 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 130, 1, 255 ] },
	{ pos: [ 432, 432, 104 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 1, 1, 255 ] },
	{ pos: [ 512, 488, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 218, 112, 212, 255 ] },
	{ pos: [ 456, 432, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 222, 212, 255 ] },
	{ pos: [ 512, 372, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 36, 144, 211, 255 ] },
	{ pos: [ 572, 432, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 111, 40, 211, 255 ] },
]

const door_seg3_vertex_03013B50 = [
	{ pos: [ 512, 488, -156 ], flag: 0, tc: [ 0, 0 ], color: [ 232, 72, 155, 255 ] },
	{ pos: [ 512, 372, -156 ], flag: 0, tc: [ 0, 0 ], color: [ 23, 185, 154, 255 ] },
	{ pos: [ 456, 432, -156 ], flag: 0, tc: [ 0, 0 ], color: [ 165, 228, 174, 255 ] },
	{ pos: [ 432, 432, -100 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 1, 255, 255 ] },
	{ pos: [ 512, 512, -100 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 126, 255, 255 ] },
	{ pos: [ 572, 432, -156 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 32, 172, 255 ] },
	{ pos: [ 512, 348, -100 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 130, 255, 255 ] },
	{ pos: [ 596, 432, -100 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 1, 255, 255 ] },
	{ pos: [ 572, 432, -40 ], flag: 0, tc: [ 0, 0 ], color: [ 112, 220, 45, 255 ] },
	{ pos: [ 512, 372, -40 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 145, 45, 255 ] },
	{ pos: [ 456, 432, -40 ], flag: 0, tc: [ 0, 0 ], color: [ 144, 38, 44, 255 ] },
	{ pos: [ 512, 488, -40 ], flag: 0, tc: [ 0, 0 ], color: [ 34, 113, 44, 255 ] },
]

export const door_seg3_dl_03013C10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300AD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03013910, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03009D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03013A10, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03013CC8 = [
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03013A90, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  3, 0x0,  5,  2,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  0,  2, 0x0,  6,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  3, 0x0,  7,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  5,  4, 0x0,  0,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 8,  9,  7, 0x0,  9,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  0, 0x0,  9, 10,  6, 0x0),
	...Gbi.gsSP2Triangles(10,  5,  6, 0x0, 10, 11,  5, 0x0),
	...Gbi.gsSP2Triangles(11,  0,  5, 0x0, 11,  8,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03013D78 = [
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03013B50, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 5,  0,  4, 0x0,  2,  1,  6, 0x0),
	...Gbi.gsSP2Triangles( 1,  7,  6, 0x0,  1,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  3, 0x0,  5,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  9, 0x0,  3,  6,  9, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  4,  3, 10, 0x0),
	...Gbi.gsSP2Triangles( 3,  9, 10, 0x0,  7,  4, 11, 0x0),
	...Gbi.gsSP2Triangles( 7, 11,  8, 0x0,  4, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03013E28 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(door_seg3_dl_03013C10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPDisplayList(door_seg3_dl_03013CC8),
	Gbi.gsSPDisplayList(door_seg3_dl_03013D78),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03013EA8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(door_seg3_dl_03013C10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPDisplayList(door_seg3_dl_03013CC8),
	Gbi.gsSPEndDisplayList(),
]

const door_seg3_vertex_03013F20 = [
	{ pos: [ 591, 0, -58 ], flag: 0, tc: [ 976, 1808 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 1010, -58 ], flag: 0, tc: [ -16, 148 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 591, 1010, -58 ], flag: 0, tc: [ 990, 140 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 0, -58 ], flag: 0, tc: [ -30, 1812 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 0, 59 ], flag: 0, tc: [ 0, 1816 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 1010, 59 ], flag: 0, tc: [ 974, 132 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -8, 1010, 59 ], flag: 0, tc: [ 0, 140 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 0, 59 ], flag: 0, tc: [ 974, 1812 ], color: [ 0, 0, 127, 255 ] },
]

const door_seg3_vertex_03013FA0 = [
	{ pos: [ 492, 468, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 546, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 492, 357, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 437, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 492, 468, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 492, 357, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 546, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 437, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

export const door_seg3_dl_03014020 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03009D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03013F20, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03013FA0, 8, 0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014100 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014020),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014128 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014020),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

const door_seg3_vertex_03014140 = [
	{ pos: [ 441, 850, 64 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 141, 850, 64 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 141, 550, 64 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 441, 550, 64 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 127, 255 ] },
]

const door_seg3_vertex_03014180 = [
	{ pos: [ 441, 850, 59 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 141, 850, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 141, 550, 59 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 441, 550, 59 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 127, 255 ] },
]

export const door_seg3_dl_030141C0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014218 = [
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014250 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03011D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014140, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

export const door_seg3_dl_03014280 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03011D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014180, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

export const door_seg3_dl_030142B0 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03012510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014140, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

export const door_seg3_dl_030142E0 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03012510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014180, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

export const door_seg3_dl_03014310 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03012D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014140, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

export const door_seg3_dl_03014340 = [
	Gbi.gsSPDisplayList(door_seg3_dl_030141C0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03012D10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(door_seg3_vertex_03014180, 4, 0),
	Gbi.gsSPBranchList(door_seg3_dl_03014218),
]

const door_seg3_vertex_03014370 = [
	{ pos: [ 595, 916, 59 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 405, 544, 59 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 595, 544, 59 ], flag: 0, tc: [ 478, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 405, 916, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 595, 544, -58 ], flag: 0, tc: [ 478, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 405, 544, -58 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 405, 916, -58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 595, 916, -58 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 0, 129, 255 ] },
]

const door_seg3_vertex_030143F0 = [
	{ pos: [ 595, 916, 64 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 405, 544, 64 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 595, 544, 64 ], flag: 0, tc: [ 480, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 405, 916, 64 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 595, 544, -63 ], flag: 0, tc: [ 480, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 405, 544, -63 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 405, 916, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 595, 916, -63 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 129, 255 ] },
]

export const door_seg3_dl_03014470 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 4, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03013510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 32 - 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_030144E0 = [
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014528 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014470),
	Gbi.gsSPVertex(door_seg3_vertex_03014370, 8, 0),
	Gbi.gsSPBranchList(door_seg3_dl_030144E0),
]

export const door_seg3_dl_03014540 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014470),
	Gbi.gsSPVertex(door_seg3_vertex_030143F0, 8, 0),
	Gbi.gsSPBranchList(door_seg3_dl_030144E0),
]

const door_seg3_vertex_03014558 = [
	{ pos: [ -8, 1000, -58 ], flag: 0, tc: [ 0, 70 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -8, 0, -58 ], flag: 0, tc: [ 0, 936 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -8, 0, 59 ], flag: 0, tc: [ 990, 936 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -8, 0, -58 ], flag: 0, tc: [ 990, 114 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 591, 0, -58 ], flag: 0, tc: [ 990, 856 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 591, 0, 59 ], flag: 0, tc: [ 0, 856 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -8, 0, 59 ], flag: 0, tc: [ 0, 114 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -8, 1000, 59 ], flag: 0, tc: [ 0, 114 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 591, 1000, -58 ], flag: 0, tc: [ 990, 856 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -8, 1000, -58 ], flag: 0, tc: [ 990, 114 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 591, 1000, 59 ], flag: 0, tc: [ 0, 856 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 591, 1000, 59 ], flag: 0, tc: [ 990, 70 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 591, 0, 59 ], flag: 0, tc: [ 990, 936 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 591, 0, -58 ], flag: 0, tc: [ 0, 936 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 591, 1000, -58 ], flag: 0, tc: [ 0, 70 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -8, 1000, 59 ], flag: 0, tc: [ 990, 70 ], color: [ 129, 0, 0, 255 ] },
]

const door_seg3_vertex_03014658 = [
	{ pos: [ -8, 0, 59 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 1000, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -8, 1000, 59 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 0, 59 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 0, -58 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 0, -58 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 1000, -58 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 591, 1000, -58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const door_seg3_vertex_030146D8 = [
	{ pos: [ 492, 468, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 232, 71, 154, 255 ] },
	{ pos: [ 414, 412, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 492, 491, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 492, 468, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 71, 102, 255 ] },
	{ pos: [ 492, 357, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 233, 184, 101, 255 ] },
	{ pos: [ 546, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 91, 226, 83, 255 ] },
	{ pos: [ 437, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 165, 29, 83, 255 ] },
	{ pos: [ 492, 491, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 569, 412, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 492, 334, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ 414, 412, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 492, 468, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 219, 111, 209, 255 ] },
	{ pos: [ 437, 412, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 145, 219, 210, 255 ] },
	{ pos: [ 492, 357, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 145, 210, 255 ] },
	{ pos: [ 546, 412, 44 ], flag: 0, tc: [ 0, 0 ], color: [ 112, 36, 210, 255 ] },
]

const door_seg3_vertex_030147C8 = [
	{ pos: [ 492, 491, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 437, 412, -43 ], flag: 0, tc: [ 0, 0 ], color: [ 144, 36, 46, 255 ] },
	{ pos: [ 492, 468, -43 ], flag: 0, tc: [ 0, 0 ], color: [ 38, 111, 47, 255 ] },
	{ pos: [ 492, 468, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 232, 71, 154, 255 ] },
	{ pos: [ 546, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 91, 29, 174, 255 ] },
	{ pos: [ 492, 357, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 185, 155, 255 ] },
	{ pos: [ 437, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 166, 226, 173, 255 ] },
	{ pos: [ 414, 412, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 569, 412, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 492, 334, -98 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ 492, 357, -43 ], flag: 0, tc: [ 0, 0 ], color: [ 219, 144, 46, 255 ] },
	{ pos: [ 546, 412, -43 ], flag: 0, tc: [ 0, 0 ], color: [ 112, 219, 46, 255 ] },
]

export const door_seg3_dl_03014888 = [
	Gbi.gsSPVertex(door_seg3_vertex_030146D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  5, 0x0,  8,  7,  3, 0x0),
	...Gbi.gsSP2Triangles( 9,  5,  4, 0x0, 10,  9,  4, 0x0),
	...Gbi.gsSP2Triangles(10,  4,  6, 0x0,  9,  8,  5, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  6, 0x0, 11, 12, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 10,  7, 0x0, 12,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 13,  9, 0x0, 13,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(14,  7,  8, 0x0, 13, 14,  8, 0x0),
	Gbi.gsSP1Triangle(14, 11,  7, 0x0),
	Gbi.gsSPVertex(door_seg3_vertex_030147C8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  7, 0x0,  4,  3,  0, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  8, 0x0,  6,  5,  9, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  9, 0x0,  3,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  7, 0x0,  4,  0,  8, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 11, 0x0,  0,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  1, 0x0,  8,  0,  2, 0x0),
	Gbi.gsSP1Triangle( 8,  2, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_030149C0 = [
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03014558, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014A20 = [
	Gbi.gsSPVertex(door_seg3_vertex_03014658, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014A50 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014A80 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014A50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300CD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_030149C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300BD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014A20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014888),
]

export const door_seg3_dl_03014B30 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014A50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300CD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_030149C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300BD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014A20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014888),
]

export const door_seg3_dl_03014BE0 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014A50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300E510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_030149C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300D510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014A20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014888),
]

export const door_seg3_dl_03014C90 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014A50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300FD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_030149C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300ED10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014A20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014888),
]

export const door_seg3_dl_03014D40 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014A50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03011510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_030149C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03010510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014A20),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014888),
]

const door_seg3_vertex_03014DF0 = [
	{ pos: [ 591, 0, -58 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 1000, -58 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 591, 1000, -58 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 0, -58 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -8, 0, 59 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 1000, 59 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -8, 1000, 59 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 591, 0, 59 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const door_seg3_vertex_03014E70 = [
	{ pos: [ 492, 468, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 492, 357, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 546, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 437, 412, 153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 492, 468, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 546, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 492, 357, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 437, 412, -152 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

export const door_seg3_dl_03014EF0 = [
	Gbi.gsSPLight(door_seg3_lights_03009CE0.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CE0.a, 2),
	Gbi.gsSPVertex(door_seg3_vertex_03014DF0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014F30 = [
	Gbi.gsSPVertex(door_seg3_vertex_03014E70, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014F68 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPEndDisplayList(),
]

export const door_seg3_dl_03014F98 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014F68),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300BD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014EF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014F30),
]

export const door_seg3_dl_03015008 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014F68),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300BD10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014EF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014F30),
]

export const door_seg3_dl_03015078 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014F68),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300D510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014EF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014F30),
]

export const door_seg3_dl_030150E8 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014F68),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_0300ED10),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014EF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014F30),
]

export const door_seg3_dl_03015158 = [
	Gbi.gsSPDisplayList(door_seg3_dl_03014F68),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, door_seg3_texture_03010510),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(door_seg3_dl_03014EF0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.l[0], 1),
	Gbi.gsSPLight(door_seg3_lights_03009CF8.a, 2),
	Gbi.gsSPBranchList(door_seg3_dl_03014F30),
]

