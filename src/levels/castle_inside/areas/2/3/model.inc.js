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
	inside_castle_seg7_texture_07010800,
	inside_castle_seg7_texture_07011800
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
const inside_castle_seg7_lights_070430F8 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07043110 = Gbi.gdSPDefLights1(
	    0x40, 0x3a, 0x1e,
	    0xac, 0x9d, 0x52, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_07043128 = [
	{ pos: [ 360, 1459, 156 ], flag: 0, tc: [ 990, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 360, 1766, 156 ], flag: 0, tc: [ 990, 0 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 94, 1766, 2 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 94, 1459, 2 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ -1427, 1766, 2 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ -1693, 1766, 156 ], flag: 0, tc: [ 990, 0 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ -1693, 1459, 156 ], flag: 0, tc: [ 990, 990 ], color: [ 63, 0, 109, 255 ] },
	{ pos: [ -1427, 1459, 2 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 109, 255 ] },
]

const inside_castle_seg7_vertex_070431A8 = [
	{ pos: [ -450, 1664, 1741 ], flag: 0, tc: [ 990, 1892 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1434 ], flag: 0, tc: [ 990, 448 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1690, 1408 ], flag: 0, tc: [ 0, 328 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1331, 1766 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1741 ], flag: 0, tc: [ 990, 448 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1690, 1766 ], flag: 0, tc: [ 0, 328 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1741 ], flag: 0, tc: [ 990, 1892 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1331, 1766 ], flag: 0, tc: [ 0, 328 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1434 ], flag: 0, tc: [ 990, 1892 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1741 ], flag: 0, tc: [ 990, 448 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1331, 1408 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1434 ], flag: 0, tc: [ 0, 448 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1331, 1408 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1690, 1408 ], flag: 0, tc: [ 990, 328 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1434 ], flag: 0, tc: [ 0, 1892 ], color: [ 127, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07043298 = [
	{ pos: [ 50, 1408, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 193, 2, 110, 255 ] },
	{ pos: [ 405, 1408, 181 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 2, 110, 255 ] },
	{ pos: [ 94, 1459, 2 ], flag: 0, tc: [ 990, 712 ], color: [ 193, 2, 110, 255 ] },
	{ pos: [ -450, 1664, 1741 ], flag: 0, tc: [ 990, 1892 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1690, 1408 ], flag: 0, tc: [ 0, 328 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1690, 1766 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 360, 1766, 156 ], flag: 0, tc: [ 990, 712 ], color: [ 193, 1, 110, 255 ] },
	{ pos: [ 405, 1818, 181 ], flag: 0, tc: [ 0, 524 ], color: [ 193, 1, 110, 255 ] },
	{ pos: [ 50, 1818, -22 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 1, 110, 255 ] },
	{ pos: [ 360, 1766, 156 ], flag: 0, tc: [ 990, 712 ], color: [ 193, 253, 109, 255 ] },
	{ pos: [ 50, 1818, -22 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 253, 109, 255 ] },
	{ pos: [ 94, 1766, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 193, 253, 109, 255 ] },
	{ pos: [ 94, 1766, 2 ], flag: 0, tc: [ 990, 712 ], color: [ 196, 0, 111, 255 ] },
	{ pos: [ 50, 1818, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 196, 0, 111, 255 ] },
	{ pos: [ 50, 1408, -22 ], flag: 0, tc: [ 0, 2012 ], color: [ 196, 0, 111, 255 ] },
	{ pos: [ 94, 1459, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 196, 0, 111, 255 ] },
]

const inside_castle_seg7_vertex_07043398 = [
	{ pos: [ 405, 1408, 181 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 254, 109, 255 ] },
	{ pos: [ 360, 1459, 156 ], flag: 0, tc: [ 990, 1828 ], color: [ 193, 254, 109, 255 ] },
	{ pos: [ 94, 1459, 2 ], flag: 0, tc: [ 990, 712 ], color: [ 193, 254, 109, 255 ] },
	{ pos: [ -1427, 1459, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ -1383, 1408, -22 ], flag: 0, tc: [ 0, 2012 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ -1383, 1818, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ 405, 1408, 181 ], flag: 0, tc: [ 990, 2012 ], color: [ 195, 0, 111, 255 ] },
	{ pos: [ 360, 1766, 156 ], flag: 0, tc: [ 0, 580 ], color: [ 195, 0, 111, 255 ] },
	{ pos: [ 360, 1459, 156 ], flag: 0, tc: [ 0, 1808 ], color: [ 195, 0, 111, 255 ] },
	{ pos: [ 405, 1818, 181 ], flag: 0, tc: [ 990, 376 ], color: [ 195, 0, 111, 255 ] },
	{ pos: [ -1693, 1459, 156 ], flag: 0, tc: [ 990, 1828 ], color: [ 63, 255, 110, 255 ] },
	{ pos: [ -1738, 1408, 181 ], flag: 0, tc: [ 0, 2012 ], color: [ 63, 255, 110, 255 ] },
	{ pos: [ -1383, 1408, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 63, 255, 110, 255 ] },
	{ pos: [ -1427, 1459, 2 ], flag: 0, tc: [ 990, 712 ], color: [ 63, 3, 109, 255 ] },
	{ pos: [ -1693, 1459, 156 ], flag: 0, tc: [ 990, 1828 ], color: [ 63, 3, 109, 255 ] },
	{ pos: [ -1383, 1408, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 63, 3, 109, 255 ] },
]

const inside_castle_seg7_vertex_07043498 = [
	{ pos: [ -1693, 1459, 156 ], flag: 0, tc: [ 0, 1808 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ -1693, 1766, 156 ], flag: 0, tc: [ 0, 580 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ -1738, 1818, 181 ], flag: 0, tc: [ 990, 376 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ -1738, 1408, 181 ], flag: 0, tc: [ 990, 2012 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ -1427, 1766, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 63, 2, 109, 255 ] },
	{ pos: [ -1738, 1818, 181 ], flag: 0, tc: [ 0, 524 ], color: [ 63, 2, 109, 255 ] },
	{ pos: [ -1693, 1766, 156 ], flag: 0, tc: [ 990, 712 ], color: [ 63, 2, 109, 255 ] },
	{ pos: [ -1427, 1459, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ -1383, 1818, -22 ], flag: 0, tc: [ 0, 524 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ -1427, 1766, 2 ], flag: 0, tc: [ 990, 712 ], color: [ 60, 0, 111, 255 ] },
	{ pos: [ -1427, 1766, 2 ], flag: 0, tc: [ 990, 1828 ], color: [ 63, 254, 110, 255 ] },
	{ pos: [ -1383, 1818, -22 ], flag: 0, tc: [ 0, 2012 ], color: [ 63, 254, 110, 255 ] },
	{ pos: [ -1738, 1818, 181 ], flag: 0, tc: [ 0, 524 ], color: [ 63, 254, 110, 255 ] },
]

const inside_castle_seg7_vertex_07043568 = [
	{ pos: [ -450, 1357, 1587 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1741 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1741 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1587 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1357, 1434 ], flag: 0, tc: [ 2012, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -450, 1664, 1434 ], flag: 0, tc: [ 2012, 0 ], color: [ 127, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_070435C8 = [
	{ pos: [ -2525, 1664, 2552 ], flag: 0, tc: [ 2012, 0 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2345, 1664, 2863 ], flag: 0, tc: [ 0, 0 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2525, 1510, 2552 ], flag: 0, tc: [ 2012, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2345, 1510, 2863 ], flag: 0, tc: [ 0, 990 ], color: [ 109, 0, 193, 255 ] },
]

const inside_castle_seg7_vertex_07043608 = [
	{ pos: [ -2525, 1510, 2552 ], flag: 0, tc: [ 2012, 0 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2345, 1357, 2863 ], flag: 0, tc: [ 0, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2525, 1357, 2552 ], flag: 0, tc: [ 2012, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -2345, 1510, 2863 ], flag: 0, tc: [ 0, 0 ], color: [ 109, 0, 193, 255 ] },
]

const inside_castle_seg7_vertex_07043648 = [
	{ pos: [ -1723, 1818, 3497 ], flag: 0, tc: [ 2012, 0 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1368, 1818, 3702 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1723, 1613, 3497 ], flag: 0, tc: [ 2012, 990 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1368, 1613, 3702 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 147, 255 ] },
]

const inside_castle_seg7_vertex_07043688 = [
	{ pos: [ -1368, 1613, 3702 ], flag: 0, tc: [ 0, -24 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1368, 1408, 3702 ], flag: 0, tc: [ 0, 990 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1723, 1408, 3497 ], flag: 0, tc: [ 2012, 982 ], color: [ 63, 0, 147, 255 ] },
	{ pos: [ -1723, 1613, 3497 ], flag: 0, tc: [ 2012, 0 ], color: [ 63, 0, 147, 255 ] },
]

const inside_castle_seg7_vertex_070436C8 = [
	{ pos: [ 50, 1818, 3694 ], flag: 0, tc: [ 2012, 0 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 405, 1613, 3489 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 50, 1613, 3694 ], flag: 0, tc: [ 2012, 990 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 405, 1818, 3489 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 147, 255 ] },
]

const inside_castle_seg7_vertex_07043708 = [
	{ pos: [ 50, 1613, 3694 ], flag: 0, tc: [ 2012, 0 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 405, 1613, 3489 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 405, 1408, 3489 ], flag: 0, tc: [ 0, 990 ], color: [ 193, 0, 147, 255 ] },
	{ pos: [ 50, 1408, 3694 ], flag: 0, tc: [ 2012, 990 ], color: [ 193, 0, 147, 255 ] },
]

const inside_castle_seg7_vertex_07043748 = [
	{ pos: [ 944, 1920, 2981 ], flag: 0, tc: [ 2012, 0 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 1251, 1920, 2449 ], flag: 0, tc: [ 0, 0 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 1251, 1613, 2449 ], flag: 0, tc: [ 0, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 944, 1613, 2981 ], flag: 0, tc: [ 2012, 990 ], color: [ 147, 0, 193, 255 ] },
]

const inside_castle_seg7_vertex_07043788 = [
	{ pos: [ 944, 1613, 2981 ], flag: 0, tc: [ 2012, 0 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 1251, 1613, 2449 ], flag: 0, tc: [ 0, 0 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 1251, 1306, 2449 ], flag: 0, tc: [ 0, 990 ], color: [ 147, 0, 193, 255 ] },
	{ pos: [ 944, 1306, 2981 ], flag: 0, tc: [ 2012, 990 ], color: [ 147, 0, 193, 255 ] },
]

export const inside_castle_seg7_dl_070437C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070430F8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070430F8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043128, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043820 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07043110.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07043110.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070431A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043298, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043398, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043498, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle(10, 11, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043930 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070430F8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070430F8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043568, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  0, 0x0,  4,  5,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043988 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07010800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070435C8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_070439C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07011800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043608, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_070439F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700E800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043648, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043A30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700F800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043688, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043A68 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700C800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070436C8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043AA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700D800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043708, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043AD8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043748, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043B10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07043788, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07043B48 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070437C8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043820),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043930),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043988),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070439C0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070439F8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043A30),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043A68),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043AA0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043AD8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07043B10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

