import * as Gbi from "../../../../../include/gbi"
import {
    water_09004800,
    water_09007800,
} from "../../../../../textures/water"
const ddd_seg7_lights_07004DA8 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ddd_seg7_vertex_07004DC0 = [
	{ pos: [ 6042, 205, 512 ], flag: 0, tc: [ 0, 582 ], color: [ 157, 230, 183, 255 ] },
	{ pos: [ 6042, 205, -511 ], flag: 0, tc: [ 2012, 582 ], color: [ 153, 196, 42, 255 ] },
	{ pos: [ 6042, -1732, -511 ], flag: 0, tc: [ 2012, 4448 ], color: [ 195, 195, 92, 255 ] },
	{ pos: [ 5018, -2449, -511 ], flag: 0, tc: [ 2012, 1790 ], color: [ 117, 48, 0, 255 ] },
	{ pos: [ 5018, -511, 512 ], flag: 0, tc: [ 0, -2076 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 5018, -2449, 512 ], flag: 0, tc: [ 0, 1790 ], color: [ 117, 48, 0, 255 ] },
	{ pos: [ 5018, -511, -511 ], flag: 0, tc: [ 2012, -2076 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 9037, -2756, -511 ], flag: 0, tc: [ 0, -9230 ], color: [ 0, 113, 56, 255 ] },
	{ pos: [ 5325, -2756, -511 ], flag: 0, tc: [ 0, -1820 ], color: [ 48, 117, 0, 255 ] },
	{ pos: [ 5325, -2756, 512 ], flag: 0, tc: [ 2012, -1820 ], color: [ 48, 117, 0, 255 ] },
	{ pos: [ 9037, -2756, 512 ], flag: 0, tc: [ 2012, -9230 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 5018, 1229, 512 ], flag: 0, tc: [ 0, -1462 ], color: [ 204, 167, 183, 255 ] },
	{ pos: [ 6042, -1732, 512 ], flag: 0, tc: [ 0, 4448 ], color: [ 218, 218, 142, 255 ] },
	{ pos: [ 5018, 1229, -511 ], flag: 0, tc: [ 2624, -4528 ], color: [ 238, 186, 104, 255 ] },
	{ pos: [ 5018, -2756, -511 ], flag: 0, tc: [ 2624, 3426 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 6042, -1732, -511 ], flag: 0, tc: [ 4668, 1382 ], color: [ 195, 195, 92, 255 ] },
]

const ddd_seg7_vertex_07004EC0 = [
	{ pos: [ 5018, 1229, 512 ], flag: 0, tc: [ 0, -1462 ], color: [ 204, 167, 183, 255 ] },
	{ pos: [ 5018, 1229, -511 ], flag: 0, tc: [ 2012, -1462 ], color: [ 238, 186, 104, 255 ] },
	{ pos: [ 6042, 205, -511 ], flag: 0, tc: [ 2012, 582 ], color: [ 153, 196, 42, 255 ] },
	{ pos: [ 9037, -1732, 512 ], flag: 0, tc: [ 2012, -9230 ], color: [ 0, 143, 200, 255 ] },
	{ pos: [ 6042, -1732, 512 ], flag: 0, tc: [ 2012, -3252 ], color: [ 218, 218, 142, 255 ] },
	{ pos: [ 6042, -1732, -511 ], flag: 0, tc: [ 0, -3252 ], color: [ 195, 195, 92, 255 ] },
	{ pos: [ 9037, -1732, -511 ], flag: 0, tc: [ 0, -9230 ], color: [ 0, 200, 113, 255 ] },
	{ pos: [ 6042, 205, 512 ], flag: 0, tc: [ 4668, -2484 ], color: [ 157, 230, 183, 255 ] },
	{ pos: [ 5018, -2756, 512 ], flag: 0, tc: [ 2624, 3426 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 5018, 1229, 512 ], flag: 0, tc: [ 2624, -4528 ], color: [ 204, 167, 183, 255 ] },
	{ pos: [ 6042, -1732, 512 ], flag: 0, tc: [ 4668, 1382 ], color: [ 218, 218, 142, 255 ] },
	{ pos: [ 5018, 1229, -511 ], flag: 0, tc: [ 2624, -4528 ], color: [ 238, 186, 104, 255 ] },
	{ pos: [ 6042, -1732, -511 ], flag: 0, tc: [ 4668, 1382 ], color: [ 195, 195, 92, 255 ] },
	{ pos: [ 6042, 205, -511 ], flag: 0, tc: [ 4668, -2484 ], color: [ 153, 196, 42, 255 ] },
]

const ddd_seg7_vertex_07004FA0 = [
	{ pos: [ 2150, -4607, 512 ], flag: 0, tc: [ -3096, 7120 ], color: [ 51, 51, 153, 255 ] },
	{ pos: [ 3174, 1229, 512 ], flag: 0, tc: [ -1052, -4528 ], color: [ 18, 186, 152, 255 ] },
	{ pos: [ 3174, -4607, 512 ], flag: 0, tc: [ -1052, 7120 ], color: [ 205, 103, 205, 255 ] },
	{ pos: [ 9037, -2756, 512 ], flag: 0, tc: [ 10648, 3426 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 6042, -1732, 512 ], flag: 0, tc: [ 4668, 1382 ], color: [ 218, 218, 142, 255 ] },
	{ pos: [ 9037, -1732, 512 ], flag: 0, tc: [ 10648, 1382 ], color: [ 0, 143, 200, 255 ] },
	{ pos: [ 5018, -2756, 512 ], flag: 0, tc: [ 2624, 3426 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 9037, -1732, -511 ], flag: 0, tc: [ 10648, 1382 ], color: [ 0, 200, 113, 255 ] },
	{ pos: [ 5018, -2756, -511 ], flag: 0, tc: [ 2624, 3426 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 9037, -2756, -511 ], flag: 0, tc: [ 10648, 3426 ], color: [ 0, 113, 56, 255 ] },
	{ pos: [ 6042, -1732, -511 ], flag: 0, tc: [ 4668, 1382 ], color: [ 195, 195, 92, 255 ] },
	{ pos: [ 5018, -511, 512 ], flag: 0, tc: [ 2624, -1054 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 3174, -511, 512 ], flag: 0, tc: [ -1052, -1054 ], color: [ 153, 51, 205, 255 ] },
	{ pos: [ 5018, 1229, 512 ], flag: 0, tc: [ 2624, -4528 ], color: [ 204, 167, 183, 255 ] },
	{ pos: [ 2150, 205, 512 ], flag: 0, tc: [ -3096, -2484 ], color: [ 113, 210, 223, 255 ] },
]

const ddd_seg7_vertex_07005090 = [
	{ pos: [ 3174, -511, -511 ], flag: 0, tc: [ -1052, -1054 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ 5018, -511, -511 ], flag: 0, tc: [ 2624, -1054 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 5018, 1229, -511 ], flag: 0, tc: [ 2624, -4528 ], color: [ 238, 186, 104, 255 ] },
	{ pos: [ 3174, 1229, -511 ], flag: 0, tc: [ -1052, -4528 ], color: [ 52, 167, 73, 255 ] },
	{ pos: [ 3174, -4607, -511 ], flag: 0, tc: [ -1052, 7120 ], color: [ 172, 42, 84, 255 ] },
	{ pos: [ 2150, 205, -511 ], flag: 0, tc: [ -3096, -2484 ], color: [ 79, 224, 93, 255 ] },
	{ pos: [ 2150, -4607, -511 ], flag: 0, tc: [ -3096, 7120 ], color: [ 51, 103, 51, 255 ] },
	{ pos: [ 2150, -4607, -204 ], flag: 0, tc: [ 9576, -440 ], color: [ 42, 115, 30, 255 ] },
	{ pos: [ 2150, -4607, -511 ], flag: 0, tc: [ 9576, -1054 ], color: [ 51, 103, 51, 255 ] },
	{ pos: [ 2150, -4300, -511 ], flag: 0, tc: [ 8960, -1054 ], color: [ 42, 60, 103, 255 ] },
	{ pos: [ 2150, -3583, -511 ], flag: 0, tc: [ 7532, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2150, 205, -511 ], flag: 0, tc: [ 0, -1054 ], color: [ 79, 224, 93, 255 ] },
	{ pos: [ 2150, 205, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 210, 223, 255 ] },
	{ pos: [ 2150, -4300, 512 ], flag: 0, tc: [ 8960, 990 ], color: [ 42, 30, 141, 255 ] },
	{ pos: [ 2150, -4607, 512 ], flag: 0, tc: [ 9576, 990 ], color: [ 51, 51, 153, 255 ] },
	{ pos: [ 2150, -4607, 205 ], flag: 0, tc: [ 9576, 376 ], color: [ 42, 103, 196, 255 ] },
]

const ddd_seg7_vertex_07005190 = [
	{ pos: [ 2150, -3890, -511 ], flag: 0, tc: [ 8144, -1054 ], color: [ 42, 226, 115, 255 ] },
	{ pos: [ 2150, -3583, -511 ], flag: 0, tc: [ 7532, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2150, -3583, -204 ], flag: 0, tc: [ 7532, -440 ], color: [ 42, 153, 60, 255 ] },
	{ pos: [ 2150, -3583, 205 ], flag: 0, tc: [ 7532, 376 ], color: [ 42, 141, 226, 255 ] },
	{ pos: [ 2150, -3583, 512 ], flag: 0, tc: [ 7532, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2150, -3890, 512 ], flag: 0, tc: [ 8144, 990 ], color: [ 42, 196, 153, 255 ] },
	{ pos: [ 2150, 205, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 210, 223, 255 ] },
	{ pos: [ 5018, -511, 512 ], flag: 0, tc: [ 2012, -1208 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 5018, -511, -511 ], flag: 0, tc: [ 0, -1208 ], color: [ 73, 73, 73, 255 ] },
	{ pos: [ 3174, -511, -511 ], flag: 0, tc: [ 0, 2470 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ 3174, -4607, 512 ], flag: 0, tc: [ 2012, 2470 ], color: [ 205, 103, 205, 255 ] },
	{ pos: [ 3174, -4607, -511 ], flag: 0, tc: [ 0, 2470 ], color: [ 172, 42, 84, 255 ] },
	{ pos: [ 2150, -4607, -511 ], flag: 0, tc: [ 0, 4514 ], color: [ 51, 103, 51, 255 ] },
	{ pos: [ 2150, -4607, 512 ], flag: 0, tc: [ 2012, 4514 ], color: [ 51, 51, 153, 255 ] },
]

const ddd_seg7_vertex_07005270 = [
	{ pos: [ 2150, 205, 512 ], flag: 0, tc: [ 0, 582 ], color: [ 113, 210, 223, 255 ] },
	{ pos: [ 3174, 1229, -511 ], flag: 0, tc: [ 2012, -1462 ], color: [ 52, 167, 73, 255 ] },
	{ pos: [ 3174, 1229, 512 ], flag: 0, tc: [ 0, -1462 ], color: [ 18, 186, 152, 255 ] },
	{ pos: [ 2150, 205, -511 ], flag: 0, tc: [ 2012, 582 ], color: [ 79, 224, 93, 255 ] },
	{ pos: [ 3174, 1229, 512 ], flag: 0, tc: [ 2012, 2470 ], color: [ 18, 186, 152, 255 ] },
	{ pos: [ 5018, 1229, -511 ], flag: 0, tc: [ 0, -1208 ], color: [ 238, 186, 104, 255 ] },
	{ pos: [ 5018, 1229, 512 ], flag: 0, tc: [ 2012, -1208 ], color: [ 204, 167, 183, 255 ] },
	{ pos: [ 3174, 1229, -511 ], flag: 0, tc: [ 0, 2470 ], color: [ 52, 167, 73, 255 ] },
	{ pos: [ 5018, -2449, -511 ], flag: 0, tc: [ 2012, -252 ], color: [ 117, 48, 0, 255 ] },
	{ pos: [ 5018, -2449, 512 ], flag: 0, tc: [ 0, -252 ], color: [ 117, 48, 0, 255 ] },
	{ pos: [ 5325, -2756, 512 ], flag: 0, tc: [ 0, 362 ], color: [ 48, 117, 0, 255 ] },
	{ pos: [ 5018, -511, 512 ], flag: 0, tc: [ 2012, -1208 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 3174, -511, -511 ], flag: 0, tc: [ 0, 2470 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ 3174, -511, 512 ], flag: 0, tc: [ 2012, 2470 ], color: [ 153, 51, 205, 255 ] },
]

const ddd_seg7_vertex_07005350 = [
	{ pos: [ 3174, -511, 512 ], flag: 0, tc: [ 0, -4120 ], color: [ 153, 51, 205, 255 ] },
	{ pos: [ 3174, -4607, -511 ], flag: 0, tc: [ 2012, 4054 ], color: [ 172, 42, 84, 255 ] },
	{ pos: [ 3174, -4607, 512 ], flag: 0, tc: [ 0, 4054 ], color: [ 205, 103, 205, 255 ] },
	{ pos: [ 3174, -511, -511 ], flag: 0, tc: [ 2012, -4120 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ 5018, -2449, -511 ], flag: 0, tc: [ 2012, -252 ], color: [ 117, 48, 0, 255 ] },
	{ pos: [ 5325, -2756, 512 ], flag: 0, tc: [ 0, 362 ], color: [ 48, 117, 0, 255 ] },
	{ pos: [ 5325, -2756, -511 ], flag: 0, tc: [ 2012, 362 ], color: [ 48, 117, 0, 255 ] },
]

const ddd_seg7_vertex_070053C0 = [
	{ pos: [ -921, -3583, 205 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 147, 192, 255 ] },
	{ pos: [ 2150, -3890, 512 ], flag: 0, tc: [ 2012, 462 ], color: [ 42, 196, 153, 255 ] },
	{ pos: [ -921, -3890, 512 ], flag: 0, tc: [ 0, 462 ], color: [ 0, 224, 134, 255 ] },
	{ pos: [ -921, -4607, -204 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 109, 64, 255 ] },
	{ pos: [ 2150, -4607, -204 ], flag: 0, tc: [ 2012, 990 ], color: [ 42, 115, 30, 255 ] },
	{ pos: [ 2150, -4300, -511 ], flag: 0, tc: [ 2012, 462 ], color: [ 42, 60, 103, 255 ] },
	{ pos: [ -921, -4300, -511 ], flag: 0, tc: [ 0, 462 ], color: [ 0, 32, 122, 255 ] },
	{ pos: [ 2150, -3890, -511 ], flag: 0, tc: [ 2012, 0 ], color: [ 42, 226, 115, 255 ] },
	{ pos: [ -921, -3890, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 192, 109, 255 ] },
	{ pos: [ -921, -4607, 205 ], flag: 0, tc: [ 0, 462 ], color: [ 0, 122, 224, 255 ] },
	{ pos: [ 2150, -4607, -204 ], flag: 0, tc: [ 2012, 0 ], color: [ 42, 115, 30, 255 ] },
	{ pos: [ -921, -4607, -204 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 109, 64, 255 ] },
	{ pos: [ 2150, -4607, 205 ], flag: 0, tc: [ 2012, 462 ], color: [ 42, 103, 196, 255 ] },
	{ pos: [ -921, -4300, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 64, 147, 255 ] },
	{ pos: [ 2150, -4300, 512 ], flag: 0, tc: [ 2012, 990 ], color: [ 42, 30, 141, 255 ] },
]

const ddd_seg7_vertex_070054B0 = [
	{ pos: [ -921, -3890, -511 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 192, 109, 255 ] },
	{ pos: [ 2150, -3890, -511 ], flag: 0, tc: [ 2012, 990 ], color: [ 42, 226, 115, 255 ] },
	{ pos: [ 2150, -3583, -204 ], flag: 0, tc: [ 2012, 462 ], color: [ 42, 153, 60, 255 ] },
	{ pos: [ -921, -3890, 512 ], flag: 0, tc: [ 0, 462 ], color: [ 0, 224, 134, 255 ] },
	{ pos: [ 2150, -3890, 512 ], flag: 0, tc: [ 2012, 462 ], color: [ 42, 196, 153, 255 ] },
	{ pos: [ 2150, -4300, 512 ], flag: 0, tc: [ 2012, 0 ], color: [ 42, 30, 141, 255 ] },
	{ pos: [ -921, -3583, 205 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 147, 192, 255 ] },
	{ pos: [ 2150, -3583, 205 ], flag: 0, tc: [ 2012, 990 ], color: [ 42, 141, 226, 255 ] },
	{ pos: [ -921, -4300, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 64, 147, 255 ] },
	{ pos: [ -921, -3583, -204 ], flag: 0, tc: [ 0, 462 ], color: [ 0, 134, 32, 255 ] },
	{ pos: [ 2150, -3583, 205 ], flag: 0, tc: [ 2012, 0 ], color: [ 42, 141, 226, 255 ] },
	{ pos: [ -921, -3583, 205 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 147, 192, 255 ] },
]

export const ddd_seg7_dl_07005570 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(ddd_seg7_lights_07004DA8.l[0], 1),
	Gbi.gsSPLight(ddd_seg7_lights_07004DA8.a, 2),
	Gbi.gsSPVertex(ddd_seg7_vertex_07004DC0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07004EC0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07004FA0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  1, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 1, 13, 11, 0x0,  0, 14,  1, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005090, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  9, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005190, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005270, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005350, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSP1Triangle( 4,  5,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ddd_seg7_dl_07005738 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(ddd_seg7_vertex_070053C0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  6,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 12, 10, 0x0, 13, 12,  9, 0x0),
	Gbi.gsSP1Triangle(13, 14, 12, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_070054B0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  4, 0x0,  3,  5,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10, 11, 0x0,  9,  2, 10, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ddd_seg7_dl_070057E8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ddd_seg7_dl_07005570),
	Gbi.gsSPDisplayList(ddd_seg7_dl_07005738),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

