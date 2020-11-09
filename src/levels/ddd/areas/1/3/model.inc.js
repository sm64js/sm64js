import * as Gbi from "../../../../../include/gbi"
import { water_0900B800 } from "../../../../../textures/water"
const ddd_seg7_lights_07005850 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ddd_seg7_vertex_07005868 = [
	{ pos: [ 0, 2048, 2048 ], flag: 0, tc: [ 10000, 0 ], color: [ 158, 0, 177, 255 ] },
	{ pos: [ -1023, 0, 3072 ], flag: 0, tc: [ 8492, 990 ], color: [ 177, 0, 158, 255 ] },
	{ pos: [ -1023, 2048, 3072 ], flag: 0, tc: [ 8492, 0 ], color: [ 188, 0, 150, 255 ] },
	{ pos: [ -3993, 2048, 3174 ], flag: 0, tc: [ 5124, 0 ], color: [ 16, 0, 131, 255 ] },
	{ pos: [ -5119, 0, 3072 ], flag: 0, tc: [ 3904, 990 ], color: [ 39, 0, 136, 255 ] },
	{ pos: [ -5119, 2048, 3072 ], flag: 0, tc: [ 3904, 0 ], color: [ 67, 0, 149, 255 ] },
	{ pos: [ -6143, 0, 2048 ], flag: 0, tc: [ 2328, 990 ], color: [ 98, 0, 177, 255 ] },
	{ pos: [ -6143, 2048, 2048 ], flag: 0, tc: [ 2328, 0 ], color: [ 106, 0, 188, 255 ] },
	{ pos: [ -3993, 0, 3174 ], flag: 0, tc: [ 5124, 990 ], color: [ 21, 0, 131, 255 ] },
	{ pos: [ -6655, 0, 1024 ], flag: 0, tc: [ 1088, 990 ], color: [ 123, 0, 228, 255 ] },
	{ pos: [ -6655, 2048, 1024 ], flag: 0, tc: [ 1088, 0 ], color: [ 126, 0, 3, 255 ] },
	{ pos: [ -2047, 2048, 3584 ], flag: 0, tc: [ 7296, 0 ], color: [ 255, 0, 130, 255 ] },
	{ pos: [ -2047, 0, 3584 ], flag: 0, tc: [ 7296, 990 ], color: [ 226, 0, 133, 255 ] },
	{ pos: [ -2047, 2048, -3583 ], flag: 0, tc: [ 17168, 0 ], color: [ 187, 0, 106, 255 ] },
	{ pos: [ -2047, 0, -3583 ], flag: 0, tc: [ 17168, 990 ], color: [ 222, 0, 122, 255 ] },
	{ pos: [ -1330, 0, -2764 ], flag: 0, tc: [ 16060, 990 ], color: [ 172, 0, 94, 255 ] },
]

const ddd_seg7_vertex_07005968 = [
	{ pos: [ 0, 2048, 2048 ], flag: 0, tc: [ 10000, 0 ], color: [ 158, 0, 177, 255 ] },
	{ pos: [ 0, 0, 2048 ], flag: 0, tc: [ 10000, 990 ], color: [ 150, 0, 188, 255 ] },
	{ pos: [ -1023, 0, 3072 ], flag: 0, tc: [ 8492, 990 ], color: [ 177, 0, 158, 255 ] },
	{ pos: [ 512, 2048, 1024 ], flag: 0, tc: [ 11176, 0 ], color: [ 136, 0, 218, 255 ] },
	{ pos: [ 512, 0, 1024 ], flag: 0, tc: [ 11176, 990 ], color: [ 131, 0, 237, 255 ] },
	{ pos: [ 512, 2048, -1023 ], flag: 0, tc: [ 13288, 0 ], color: [ 131, 0, 19, 255 ] },
	{ pos: [ 512, 0, -1023 ], flag: 0, tc: [ 13288, 990 ], color: [ 136, 0, 38, 255 ] },
	{ pos: [ 0, 2048, -2047 ], flag: 0, tc: [ 14464, 0 ], color: [ 157, 0, 78, 255 ] },
	{ pos: [ 0, 0, -2047 ], flag: 0, tc: [ 14464, 990 ], color: [ 175, 0, 97, 255 ] },
	{ pos: [ -1330, 2048, -2764 ], flag: 0, tc: [ 16060, 0 ], color: [ 183, 0, 103, 255 ] },
	{ pos: [ -1330, 0, -2764 ], flag: 0, tc: [ 16060, 990 ], color: [ 172, 0, 94, 255 ] },
	{ pos: [ -2047, 2048, -3583 ], flag: 0, tc: [ 17168, 0 ], color: [ 187, 0, 106, 255 ] },
	{ pos: [ -4095, 2048, -3583 ], flag: 0, tc: [ 19336, 0 ], color: [ 19, 0, 125, 255 ] },
	{ pos: [ -2047, 0, -3583 ], flag: 0, tc: [ 17168, 990 ], color: [ 222, 0, 122, 255 ] },
	{ pos: [ -4095, 0, -3583 ], flag: 0, tc: [ 19336, 990 ], color: [ 38, 0, 120, 255 ] },
	{ pos: [ -5119, 2048, -3071 ], flag: 0, tc: [ 20560, 0 ], color: [ 68, 0, 106, 255 ] },
]

const ddd_seg7_vertex_07005A68 = [
	{ pos: [ -5119, 2048, -3071 ], flag: 0, tc: [ 20560, 0 ], color: [ 68, 0, 106, 255 ] },
	{ pos: [ -5119, 0, -3071 ], flag: 0, tc: [ 20560, 990 ], color: [ 79, 0, 98, 255 ] },
	{ pos: [ -4095, 0, -3583 ], flag: 0, tc: [ 19336, 990 ], color: [ 38, 0, 120, 255 ] },
	{ pos: [ -6143, 2048, -2047 ], flag: 0, tc: [ 22132, 0 ], color: [ 109, 0, 64, 255 ] },
	{ pos: [ -6143, 0, -2047 ], flag: 0, tc: [ 22132, 990 ], color: [ 122, 0, 32, 255 ] },
	{ pos: [ -6143, 2048, -818 ], flag: 0, tc: [ 23440, 0 ], color: [ 126, 0, 11, 255 ] },
	{ pos: [ -6143, 0, -818 ], flag: 0, tc: [ 23440, 990 ], color: [ 124, 0, 22, 255 ] },
	{ pos: [ -6655, 2048, 1024 ], flag: 0, tc: [ 25616, 0 ], color: [ 126, 0, 3, 255 ] },
	{ pos: [ -6655, 0, 1024 ], flag: 0, tc: [ 25616, 990 ], color: [ 123, 0, 228, 255 ] },
]

export const ddd_seg7_dl_07005AF8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(ddd_seg7_lights_07005850.l[0], 1),
	Gbi.gsSPLight(ddd_seg7_lights_07005850.a, 2),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005868, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  5,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  4, 0x0,  7,  6,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11,  8,  3, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  8, 0x0,  2, 12, 11, 0x0),
	...Gbi.gsSP2Triangles( 2,  1, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005968, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  1, 0x0,  5,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  4, 0x0,  7,  6,  5, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  9,  8,  7, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0, 11, 10,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 11, 0x0, 12, 14, 13, 0x0),
	Gbi.gsSP1Triangle(15, 14, 12, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005A68, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  1, 0x0,  5,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  4, 0x0,  7,  6,  5, 0x0),
	Gbi.gsSP1Triangle( 7,  8,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ddd_seg7_dl_07005C40 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ddd_seg7_dl_07005AF8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

