import * as Gbi from "../../../../../include/gbi"
import {
	texture_castle_light,
	inside_castle_seg7_texture_07000800,
	inside_castle_seg7_texture_07001000,
	inside_castle_seg7_texture_07002000,
	inside_castle_seg7_texture_07003000,
	inside_castle_seg7_texture_07003800,
	inside_castle_seg7_texture_07004800,
	inside_castle_seg7_texture_07005800,
	inside_castle_seg7_texture_07006000,
	inside_castle_seg7_texture_07006800,
	inside_castle_seg7_texture_07007000,
	inside_castle_seg7_texture_07007800,
	inside_castle_seg7_texture_07008000,
	inside_castle_seg7_texture_07008800,
	inside_castle_seg7_texture_07009000,
	inside_castle_seg7_texture_07009800,
	inside_castle_seg7_texture_0700A000,
	inside_castle_seg7_texture_0700A800,
	inside_castle_seg7_texture_0700B800,
	inside_castle_seg7_texture_0700C800,
	inside_castle_seg7_texture_0700D800,
	inside_castle_seg7_texture_0700E800,
	inside_castle_seg7_texture_0700F800,
} from "../../../texture.inc"
import {
	inside_09000000,
	inside_09001000,
	inside_09002000,
	inside_09003000,
	inside_09003800,
	inside_09004000,
	inside_09004800,
	inside_09005000,
	inside_09005800,
	inside_09006000,
	inside_09007000,
	inside_09008000,
	inside_09008800,
	inside_09009000,
	inside_0900A000,
	inside_0900B000,
	inside_0900B800,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_07057380 = Gbi.gdSPDefLights1(
	    0x51, 0x34, 0x42,
	    0xd8, 0x8c, 0xb2, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07057398 = Gbi.gdSPDefLights1(
	    0x40, 0x24, 0x1e,
	    0xac, 0x61, 0x52, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_070573B0 = [
	{ pos: [ 512, 4198, 3721 ], flag: 0, tc: [ -5140, -1692 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -921, 4198, 3721 ], flag: 0, tc: [ -5140, 1882 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -921, 4198, 2544 ], flag: 0, tc: [ -2202, 1882 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 512, 4198, 2544 ], flag: 0, tc: [ -2202, -1692 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_070573F0 = [
	{ pos: [ 154, 3174, 2544 ], flag: 0, tc: [ -2074, -1820 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 512, 3174, 3465 ], flag: 0, tc: [ 2524, -3610 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 512, 3174, 2800 ], flag: 0, tc: [ -796, -3610 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -921, 3174, 3465 ], flag: 0, tc: [ 2524, 3542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 358, 3174, 3721 ], flag: 0, tc: [ 3800, -2842 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -767, 3174, 3721 ], flag: 0, tc: [ 3800, 2776 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -357, 3174, 3772 ], flag: 0, tc: [ 4056, 734 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 3174, 3772 ], flag: 0, tc: [ 4056, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 3174, 3721 ], flag: 0, tc: [ 3800, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -357, 3174, 3721 ], flag: 0, tc: [ 3800, 734 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -562, 3174, 2544 ], flag: 0, tc: [ -2074, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -921, 3174, 2851 ], flag: 0, tc: [ -542, 3542 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_070574B0 = [
	{ pos: [ 512, 4198, 2800 ], flag: 0, tc: [ 4056, -5142 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 512, 3174, 3465 ], flag: 0, tc: [ -2584, 5076 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 512, 4198, 3465 ], flag: 0, tc: [ -2584, -5142 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 512, 4198, 3465 ], flag: 0, tc: [ -6162, -3098 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 512, 3174, 3465 ], flag: 0, tc: [ -6162, 7120 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 358, 3174, 3721 ], flag: 0, tc: [ -4630, 7120 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 358, 4198, 3721 ], flag: 0, tc: [ -4630, -3098 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 358, 3174, 3721 ], flag: 0, tc: [ -4630, 7120 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 3430, 3721 ], flag: 0, tc: [ -542, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 358, 4198, 3721 ], flag: 0, tc: [ -4630, -3098 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 3174, 3721 ], flag: 0, tc: [ -542, 7120 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 4198, 3721 ], flag: 0, tc: [ 6612, -3098 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -357, 3430, 3721 ], flag: 0, tc: [ 2524, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 3174, 3721 ], flag: 0, tc: [ 6612, 7120 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 512, 3174, 2800 ], flag: 0, tc: [ 4056, 5076 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_070575A0 = [
	{ pos: [ -767, 4198, 3721 ], flag: 0, tc: [ 6612, -3098 ], color: [ 108, 0, 191, 255 ] },
	{ pos: [ -767, 3174, 3721 ], flag: 0, tc: [ 6612, 7120 ], color: [ 108, 0, 191, 255 ] },
	{ pos: [ -921, 3174, 3465 ], flag: 0, tc: [ 8144, 7120 ], color: [ 108, 0, 191, 255 ] },
	{ pos: [ 154, 4198, 2544 ], flag: 0, tc: [ 4566, -9230 ], color: [ 183, 0, 103, 255 ] },
	{ pos: [ 154, 3174, 2544 ], flag: 0, tc: [ 4566, 990 ], color: [ 183, 0, 103, 255 ] },
	{ pos: [ 512, 3174, 2800 ], flag: 0, tc: [ 8144, 990 ], color: [ 183, 0, 103, 255 ] },
	{ pos: [ 512, 4198, 2800 ], flag: 0, tc: [ 8144, -9230 ], color: [ 183, 0, 103, 255 ] },
	{ pos: [ 0, 4198, 2544 ], flag: 0, tc: [ 4056, -2076 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -409, 4198, 2544 ], flag: 0, tc: [ 0, -2076 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -409, 3891, 2544 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 0, 3891, 2544 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -921, 4198, 2851 ], flag: 0, tc: [ -6162, -9230 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ -921, 3174, 2851 ], flag: 0, tc: [ -6162, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ -562, 3174, 2544 ], flag: 0, tc: [ -2584, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ -562, 4198, 2544 ], flag: 0, tc: [ -2584, -9230 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ -921, 4198, 3465 ], flag: 0, tc: [ 8144, -3098 ], color: [ 108, 0, 191, 255 ] },
]

const inside_castle_seg7_vertex_070576A0 = [
	{ pos: [ -357, 3430, 3721 ], flag: 0, tc: [ 2524, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -357, 3174, 3721 ], flag: 0, tc: [ 2524, 7120 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 3174, 3721 ], flag: 0, tc: [ 6612, 7120 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 3174, 3772 ], flag: 0, tc: [ 480, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -50, 3430, 3721 ], flag: 0, tc: [ 0, -1566 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -50, 3174, 3721 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -50, 3430, 3772 ], flag: 0, tc: [ 480, -1566 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -357, 3430, 3772 ], flag: 0, tc: [ 480, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -357, 3174, 3772 ], flag: 0, tc: [ 480, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -357, 3174, 3721 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -357, 3430, 3721 ], flag: 0, tc: [ 0, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -50, 3430, 3772 ], flag: 0, tc: [ 480, -1566 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -357, 3430, 3772 ], flag: 0, tc: [ 480, -1566 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -357, 3430, 3721 ], flag: 0, tc: [ 0, -1566 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 3430, 3721 ], flag: 0, tc: [ 0, -1566 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_07057790 = [
	{ pos: [ -921, 4198, 3465 ], flag: 0, tc: [ -2584, -5142 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -921, 3174, 3465 ], flag: 0, tc: [ -2584, 5076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -921, 3174, 2851 ], flag: 0, tc: [ 3544, 5076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -921, 4198, 2851 ], flag: 0, tc: [ 3546, -5142 ], color: [ 127, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_070577D0 = [
	{ pos: [ 154, 3482, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 3379, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3379, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 3482, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3482, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -460, 3379, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3379, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -460, 3482, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07057850 = [
	{ pos: [ 51, 3482, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3379, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 51, 3379, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3482, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -665, 3482, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3379, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -665, 3379, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3482, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070578D0 = [
	{ pos: [ 154, 3379, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 3277, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3277, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 3379, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3379, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -460, 3379, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -460, 3277, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3277, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07057950 = [
	{ pos: [ 51, 3379, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3277, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 51, 3277, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 154, 3379, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -665, 3379, 3711 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3277, 3711 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -665, 3277, 3711 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -562, 3379, 3711 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070579D0 = [
	{ pos: [ -460, 3174, 2595 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -460, 4198, 2595 ], flag: 0, tc: [ 650, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 4198, 2595 ], flag: 0, tc: [ 308, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 102, 3174, 2595 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 51, 4198, 2595 ], flag: 0, tc: [ 308, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 51, 3174, 2595 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 51, 3174, 2595 ], flag: 0, tc: [ 308, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 0, 4198, 2544 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 0, 3174, 2544 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 51, 4198, 2595 ], flag: 0, tc: [ 308, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 102, 4198, 2595 ], flag: 0, tc: [ 650, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 154, 3174, 2544 ], flag: 0, tc: [ 990, 2012 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 102, 4198, 2595 ], flag: 0, tc: [ 650, 0 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 102, 3174, 2595 ], flag: 0, tc: [ 650, 2012 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 154, 4198, 2544 ], flag: 0, tc: [ 990, 0 ], color: [ 88, 0, 90, 255 ] },
]

const inside_castle_seg7_vertex_07057AC0 = [
	{ pos: [ -409, 3174, 2544 ], flag: 0, tc: [ 990, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -460, 4198, 2595 ], flag: 0, tc: [ 650, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -460, 3174, 2595 ], flag: 0, tc: [ 650, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -460, 3174, 2595 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 4198, 2595 ], flag: 0, tc: [ 308, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 3174, 2595 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -409, 4198, 2544 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -511, 3174, 2595 ], flag: 0, tc: [ 308, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -511, 4198, 2595 ], flag: 0, tc: [ 308, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -562, 4198, 2544 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -562, 3174, 2544 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 89, 255 ] },
]

export const inside_castle_seg7_dl_07057B70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_0900B000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057380.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057380.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070573B0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057BB8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070573F0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  4, 0x0,  6,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  9, 0x0,  0, 10,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  1, 0x0, 10, 11,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057C20 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070574B0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 12, 11, 0x0, 12, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070575A0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070576A0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07057790, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057D30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057398.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057398.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070577D0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057D88 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07057850, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057DD0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070578D0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057E18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07057950, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057E60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057380.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07057380.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070579D0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 3, 10,  4, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07057AC0, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  1, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07057F00 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057B70),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057BB8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057C20),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057D30),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057D88),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057DD0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057E18),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07057E60),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

