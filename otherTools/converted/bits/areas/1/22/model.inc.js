import * as Gbi from "../../../../../include/gbi"
const bits_seg7_lights_07012DB0 = Gbi.gdSPDefLights1(
	    0x58, 0x5f, 0x7d,
	    0xb1, 0xbf, 0xfa, 0x28, 0x28, 0x28
)

const bits_seg7_lights_07012DC8 = Gbi.gdSPDefLights1(
	    0x4c, 0x46, 0x6c,
	    0x98, 0x8c, 0xd8, 0x28, 0x28, 0x28
)

const bits_seg7_lights_07012DE0 = Gbi.gdSPDefLights1(
	    0x59, 0x32, 0x7f,
	    0xb2, 0x65, 0xff, 0x28, 0x28, 0x28
)

const bits_seg7_vertex_07012DF8 = [
	{ pos: [ -349, 307, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -759, 307, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -349, 307, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 367, 307, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 776, 307, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 776, 307, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 367, 307, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -759, 307, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 0, 127, 0, 255 ] },
]

const bits_seg7_vertex_07012E78 = [
	{ pos: [ -759, 102, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -349, 307, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -759, 307, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 367, 102, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -349, 102, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -349, 307, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 367, 102, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 367, 307, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 367, 307, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -349, 307, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -349, 102, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -759, 102, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -759, 307, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 167, 0, 167, 255 ] },
]

const bits_seg7_vertex_07012F58 = [
	{ pos: [ -759, 102, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -759, 307, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -759, 307, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -759, 102, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -759, 102, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -349, 102, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -349, 307, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 776, 307, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 367, 102, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 776, 102, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 367, 307, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 776, 307, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 776, 307, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 776, 307, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 127, 0, 0, 255 ] },
]

const bits_seg7_vertex_07013058 = [
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 776, 307, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 776, 102, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 776, 307, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 367, 307, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 367, 102, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 367, 307, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -349, 307, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -349, 102, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 367, 102, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 0, 0, 127, 255 ] },
]

const bits_seg7_vertex_070130F8 = [
	{ pos: [ 776, 102, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ 382, -306, 179 ], flag: 0, tc: [ 2164, 752 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ 382, -306, -178 ], flag: 0, tc: [ 2762, 1346 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ -385, -306, 179 ], flag: 0, tc: [ 888, 2028 ], color: [ 192, 169, 64, 255 ] },
	{ pos: [ -180, -306, 384 ], flag: 0, tc: [ 888, 1346 ], color: [ 192, 169, 64, 255 ] },
	{ pos: [ -349, 102, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 192, 169, 64, 255 ] },
	{ pos: [ -759, 102, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 192, 169, 64, 255 ] },
	{ pos: [ -385, -306, 179 ], flag: 0, tc: [ 888, 2028 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -180, -306, -383 ], flag: 0, tc: [ 2164, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 177, -306, -383 ], flag: 0, tc: [ 2762, 2028 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 382, -306, -178 ], flag: 0, tc: [ 2762, 1346 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 382, -306, 179 ], flag: 0, tc: [ 2164, 752 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 177, -306, 384 ], flag: 0, tc: [ 1484, 752 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -180, -306, 384 ], flag: 0, tc: [ 888, 1346 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -385, -306, -178 ], flag: 0, tc: [ 1484, 2624 ], color: [ 0, 129, 0, 255 ] },
]

const bits_seg7_vertex_070131E8 = [
	{ pos: [ -759, 102, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 163, 171, 0, 255 ] },
	{ pos: [ -385, -306, -178 ], flag: 0, tc: [ 1484, 2624 ], color: [ 163, 171, 0, 255 ] },
	{ pos: [ -385, -306, 179 ], flag: 0, tc: [ 888, 2028 ], color: [ 163, 171, 0, 255 ] },
	{ pos: [ -759, 102, 358 ], flag: 0, tc: [ 0, 2350 ], color: [ 163, 171, 0, 255 ] },
	{ pos: [ -349, 102, 768 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 169, 92, 255 ] },
	{ pos: [ -180, -306, 384 ], flag: 0, tc: [ 888, 1346 ], color: [ 0, 169, 92, 255 ] },
	{ pos: [ 177, -306, 384 ], flag: 0, tc: [ 1484, 752 ], color: [ 0, 169, 92, 255 ] },
	{ pos: [ 367, 102, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 0, 169, 92, 255 ] },
	{ pos: [ 367, 102, 768 ], flag: 0, tc: [ 1160, -202 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ 177, -306, 384 ], flag: 0, tc: [ 1484, 752 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ 382, -306, 179 ], flag: 0, tc: [ 2164, 752 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ 776, 102, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -349, 102, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 192, 169, 192, 255 ] },
	{ pos: [ -385, -306, -178 ], flag: 0, tc: [ 1484, 2624 ], color: [ 192, 169, 192, 255 ] },
	{ pos: [ -759, 102, -357 ], flag: 0, tc: [ 1160, 3542 ], color: [ 192, 169, 192, 255 ] },
]

const bits_seg7_vertex_070132D8 = [
	{ pos: [ 776, 102, 358 ], flag: 0, tc: [ 2522, -202 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ 382, -306, -178 ], flag: 0, tc: [ 2762, 1346 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 91, 168, 0, 255 ] },
	{ pos: [ 382, -306, -178 ], flag: 0, tc: [ 2762, 1346 ], color: [ 63, 167, 193, 255 ] },
	{ pos: [ 177, -306, -383 ], flag: 0, tc: [ 2762, 2028 ], color: [ 63, 167, 193, 255 ] },
	{ pos: [ 367, 102, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 63, 167, 193, 255 ] },
	{ pos: [ 776, 102, -357 ], flag: 0, tc: [ 3716, 990 ], color: [ 63, 167, 193, 255 ] },
	{ pos: [ 367, 102, -767 ], flag: 0, tc: [ 3716, 2350 ], color: [ 0, 169, 164, 255 ] },
	{ pos: [ 177, -306, -383 ], flag: 0, tc: [ 2762, 2028 ], color: [ 0, 169, 164, 255 ] },
	{ pos: [ -180, -306, -383 ], flag: 0, tc: [ 2164, 2624 ], color: [ 0, 169, 164, 255 ] },
	{ pos: [ -349, 102, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 0, 169, 164, 255 ] },
	{ pos: [ -349, 102, -767 ], flag: 0, tc: [ 2524, 3542 ], color: [ 192, 169, 192, 255 ] },
	{ pos: [ -180, -306, -383 ], flag: 0, tc: [ 2164, 2624 ], color: [ 192, 169, 192, 255 ] },
	{ pos: [ -385, -306, -178 ], flag: 0, tc: [ 1484, 2624 ], color: [ 192, 169, 192, 255 ] },
]

export const bits_seg7_dl_070133B8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bits_seg7_lights_07012DB0.l[0], 1),
	Gbi.gsSPLight(bits_seg7_lights_07012DB0.a, 2),
	Gbi.gsSPVertex(bits_seg7_vertex_07012DF8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  0,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 0,  7,  1, 0x0,  0,  4,  5, 0x0),
	Gbi.gsSPLight(bits_seg7_lights_07012DC8.l[0], 1),
	Gbi.gsSPLight(bits_seg7_lights_07012DC8.a, 2),
	Gbi.gsSPVertex(bits_seg7_vertex_07012E78, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  3,  5,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 10, 12, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07012F58, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07013058, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSPLight(bits_seg7_lights_07012DE0.l[0], 1),
	Gbi.gsSPLight(bits_seg7_lights_07012DE0.a, 2),
	Gbi.gsSPVertex(bits_seg7_vertex_070130F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0,  7, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 7, 11, 12, 0x0,  7, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 7, 14,  8, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_070131E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_070132D8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_070135A0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_070133B8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

