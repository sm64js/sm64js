import * as Gbi from "../../../../../include/gbi"

import { snow_09003000, snow_09006000, snow_09002000, snow_09002800 } from "../../../../../textures/snow"
const ccm_seg7_lights_0700FD88 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700FDA0 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700FDB8 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700FDD0 = [
	{ pos: [ -817, -1817, -724 ], flag: 0, tc: [ 5504, 480 ], color: [ 192, 42, 156, 255 ] },
	{ pos: [ 1892, -2092, -145 ], flag: 0, tc: [ 0, 990 ], color: [ 26, 0, 132, 255 ] },
	{ pos: [ -817, -2073, -724 ], flag: 0, tc: [ 5500, 990 ], color: [ 187, 0, 150, 255 ] },
	{ pos: [ 1892, -1836, -145 ], flag: 0, tc: [ -28, 480 ], color: [ 223, 87, 170, 255 ] },
]

const ccm_seg7_vertex_0700FE10 = [
	{ pos: [ -2046, -1278, 1129 ], flag: 0, tc: [ 7946, 990 ], color: [ 68, 33, 155, 255 ] },
	{ pos: [ -2046, 1230, 1129 ], flag: 0, tc: [ 8644, -3968 ], color: [ 52, 0, 141, 255 ] },
	{ pos: [ -710, 1029, 1072 ], flag: 0, tc: [ 5944, -3946 ], color: [ 251, 0, 130, 255 ] },
	{ pos: [ -817, -1817, -724 ], flag: 0, tc: [ 1916, 492 ], color: [ 192, 42, 156, 255 ] },
	{ pos: [ -988, -2065, 76 ], flag: 0, tc: [ 286, 996 ], color: [ 179, 0, 156, 255 ] },
	{ pos: [ -988, -1809, 76 ], flag: 0, tc: [ 282, 488 ], color: [ 231, 27, 135, 255 ] },
	{ pos: [ -817, -2073, -724 ], flag: 0, tc: [ 1920, 1000 ], color: [ 187, 0, 150, 255 ] },
	{ pos: [ -67, -876, 1044 ], flag: 0, tc: [ 4142, -358 ], color: [ 249, 158, 177, 255 ] },
	{ pos: [ 962, -1117, 1000 ], flag: 0, tc: [ 2036, -168 ], color: [ 21, 218, 137, 255 ] },
	{ pos: [ -513, -1534, 1063 ], flag: 0, tc: [ 4840, 1066 ], color: [ 9, 72, 153, 255 ] },
	{ pos: [ -1471, -894, 1105 ], flag: 0, tc: [ 6914, 70 ], color: [ 242, 255, 130, 255 ] },
	{ pos: [ 962, -93, 1000 ], flag: 0, tc: [ 2322, -2192 ], color: [ 4, 52, 141, 255 ] },
	{ pos: [ 1275, 410, 986 ], flag: 0, tc: [ 1844, -3274 ], color: [ 188, 237, 152, 255 ] },
	{ pos: [ 1275, 1741, 987 ], flag: 0, tc: [ 2214, -5906 ], color: [ 165, 0, 169, 255 ] },
]

const ccm_seg7_vertex_0700FEF0 = [
	{ pos: [ 1906, -556, 959 ], flag: 0, tc: [ 324, -1540 ], color: [ 172, 224, 167, 255 ] },
	{ pos: [ 962, -93, 1000 ], flag: 0, tc: [ 2322, -2192 ], color: [ 4, 52, 141, 255 ] },
	{ pos: [ 1275, 410, 986 ], flag: 0, tc: [ 1844, -3274 ], color: [ 188, 237, 152, 255 ] },
	{ pos: [ 962, -1117, 1000 ], flag: 0, tc: [ 2036, -168 ], color: [ 21, 218, 137, 255 ] },
	{ pos: [ 1906, -1836, 959 ], flag: 0, tc: [ 0, 990 ], color: [ 187, 73, 180, 255 ] },
	{ pos: [ -513, -1534, 1063 ], flag: 0, tc: [ 4840, 1066 ], color: [ 9, 72, 153, 255 ] },
	{ pos: [ -2046, -1278, 1129 ], flag: 0, tc: [ 7946, 990 ], color: [ 68, 33, 155, 255 ] },
	{ pos: [ -1471, -894, 1105 ], flag: 0, tc: [ 6914, 70 ], color: [ 242, 255, 130, 255 ] },
]

const ccm_seg7_vertex_0700FF70 = [
	{ pos: [ 156, 540, 1036 ], flag: 0, tc: [ 724, -58 ], color: [ 177, 91, 39, 255 ] },
	{ pos: [ 633, 498, 922 ], flag: 0, tc: [ -226, 168 ], color: [ 125, 17, 244, 255 ] },
	{ pos: [ 546, 528, 84 ], flag: 0, tc: [ -50, 1838 ], color: [ 46, 11, 139, 255 ] },
	{ pos: [ -183, 540, 294 ], flag: 0, tc: [ 1404, 1420 ], color: [ 165, 77, 213, 255 ] },
]

const ccm_seg7_vertex_0700FFB0 = [
	{ pos: [ 962, -93, 1000 ], flag: 0, tc: [ -5384, -2838 ], color: [ 4, 52, 141, 255 ] },
	{ pos: [ -1457, -890, 550 ], flag: 0, tc: [ -552, -1940 ], color: [ 169, 28, 169, 255 ] },
	{ pos: [ -1471, -894, 1105 ], flag: 0, tc: [ -524, -3048 ], color: [ 242, 255, 130, 255 ] },
	{ pos: [ -988, -1809, 76 ], flag: 0, tc: [ 3012, 1856 ], color: [ 231, 27, 135, 255 ] },
	{ pos: [ 1892, -1836, -145 ], flag: 0, tc: [ -2738, 2298 ], color: [ 223, 87, 170, 255 ] },
	{ pos: [ -817, -1817, -724 ], flag: 0, tc: [ 2670, 3454 ], color: [ 192, 42, 156, 255 ] },
	{ pos: [ 1906, -1836, 959 ], flag: 0, tc: [ -2766, 94 ], color: [ 187, 73, 180, 255 ] },
	{ pos: [ -988, -1554, 76 ], flag: 0, tc: [ 3012, 1856 ], color: [ 16, 100, 181, 255 ] },
	{ pos: [ -513, -1534, 1063 ], flag: 0, tc: [ 2062, -114 ], color: [ 9, 72, 153, 255 ] },
	{ pos: [ -2047, -1279, 0 ], flag: 0, tc: [ 5124, 2006 ], color: [ 60, 74, 173, 255 ] },
	{ pos: [ -2046, -1278, 1129 ], flag: 0, tc: [ 5124, -246 ], color: [ 68, 33, 155, 255 ] },
	{ pos: [ 703, -108, -178 ], flag: 0, tc: [ -4864, -484 ], color: [ 39, 45, 144, 255 ] },
]

const ccm_seg7_vertex_07010070 = [
	{ pos: [ 1275, 410, -1125 ], flag: 0, tc: [ -3320, -6720 ], color: [ 135, 221, 0, 255 ] },
	{ pos: [ 1892, -556, -145 ], flag: 0, tc: [ 0, -3204 ], color: [ 132, 233, 1, 255 ] },
	{ pos: [ 1906, -556, 959 ], flag: 0, tc: [ 3644, -3204 ], color: [ 172, 224, 167, 255 ] },
	{ pos: [ 1275, 410, 986 ], flag: 0, tc: [ 3708, -6736 ], color: [ 188, 237, 152, 255 ] },
	{ pos: [ -2046, -1278, 1129 ], flag: 0, tc: [ 0, 990 ], color: [ 68, 33, 155, 255 ] },
	{ pos: [ -2047, -1279, 0 ], flag: 0, tc: [ 3724, 990 ], color: [ 60, 74, 173, 255 ] },
	{ pos: [ -2047, -767, 0 ], flag: 0, tc: [ 3724, -714 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ -2046, 1230, 1129 ], flag: 0, tc: [ -36, -7356 ], color: [ 52, 0, 141, 255 ] },
	{ pos: [ -180, 307, 292 ], flag: 0, tc: [ -2814, 7196 ], color: [ 145, 198, 241, 255 ] },
	{ pos: [ 546, 528, 84 ], flag: 0, tc: [ -3508, 9614 ], color: [ 46, 11, 139, 255 ] },
	{ pos: [ 156, 307, 1035 ], flag: 0, tc: [ -342, 8320 ], color: [ 237, 132, 14, 255 ] },
	{ pos: [ 633, 498, 922 ], flag: 0, tc: [ -720, 9906 ], color: [ 125, 17, 244, 255 ] },
	{ pos: [ -1457, -890, 550 ], flag: 0, tc: [ -1956, 2948 ], color: [ 169, 28, 169, 255 ] },
	{ pos: [ -122, -664, -23 ], flag: 0, tc: [ -3866, 7390 ], color: [ 246, 159, 175, 255 ] },
	{ pos: [ -67, -876, 1044 ], flag: 0, tc: [ -312, 7572 ], color: [ 249, 158, 177, 255 ] },
]

const ccm_seg7_vertex_07010160 = [
	{ pos: [ 703, -108, -178 ], flag: 0, tc: [ -4384, 10136 ], color: [ 39, 45, 144, 255 ] },
	{ pos: [ 962, -1117, 1000 ], flag: 0, tc: [ -460, 11000 ], color: [ 21, 218, 137, 255 ] },
	{ pos: [ -122, -664, -23 ], flag: 0, tc: [ -3866, 7390 ], color: [ 246, 159, 175, 255 ] },
	{ pos: [ -67, -876, 1044 ], flag: 0, tc: [ -312, 7572 ], color: [ 249, 158, 177, 255 ] },
]

const ccm_seg7_vertex_070101A0 = [
	{ pos: [ 1892, -556, -145 ], flag: 0, tc: [ 0, -3204 ], color: [ 132, 233, 1, 255 ] },
	{ pos: [ 1892, -1836, -145 ], flag: 0, tc: [ 0, 990 ], color: [ 223, 87, 170, 255 ] },
	{ pos: [ 1906, -1836, 959 ], flag: 0, tc: [ 3644, 990 ], color: [ 187, 73, 180, 255 ] },
	{ pos: [ 1906, -556, 959 ], flag: 0, tc: [ 3644, -3204 ], color: [ 172, 224, 167, 255 ] },
	{ pos: [ 1280, 1997, -869 ], flag: 0, tc: [ -2468, -11920 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 1275, 410, -1125 ], flag: 0, tc: [ -3320, -6720 ], color: [ 135, 221, 0, 255 ] },
	{ pos: [ 1275, 1741, 987 ], flag: 0, tc: [ 3708, -11098 ], color: [ 165, 0, 169, 255 ] },
	{ pos: [ 1275, 410, 986 ], flag: 0, tc: [ 3708, -6736 ], color: [ 188, 237, 152, 255 ] },
	{ pos: [ 703, -108, -178 ], flag: 0, tc: [ 5204, 990 ], color: [ 39, 45, 144, 255 ] },
	{ pos: [ 962, -93, 1000 ], flag: 0, tc: [ 2152, -1624 ], color: [ 4, 52, 141, 255 ] },
	{ pos: [ 962, -1117, 1000 ], flag: 0, tc: [ 0, 990 ], color: [ 21, 218, 137, 255 ] },
	{ pos: [ 546, 528, 84 ], flag: 0, tc: [ -2558, 990 ], color: [ 46, 11, 139, 255 ] },
	{ pos: [ -180, 307, 292 ], flag: 0, tc: [ -54, 1762 ], color: [ 145, 198, 241, 255 ] },
	{ pos: [ -183, 540, 294 ], flag: 0, tc: [ 0, 990 ], color: [ 165, 77, 213, 255 ] },
]

const ccm_seg7_vertex_07010280 = [
	{ pos: [ -183, 540, 294 ], flag: 0, tc: [ 0, 216 ], color: [ 165, 77, 213, 255 ] },
	{ pos: [ -180, 307, 292 ], flag: 0, tc: [ 0, 990 ], color: [ 145, 198, 241, 255 ] },
	{ pos: [ 156, 540, 1036 ], flag: 0, tc: [ 2684, 216 ], color: [ 177, 91, 39, 255 ] },
	{ pos: [ 156, 307, 1035 ], flag: 0, tc: [ 2684, 990 ], color: [ 237, 132, 14, 255 ] },
	{ pos: [ -67, -876, 1044 ], flag: 0, tc: [ -312, 7572 ], color: [ 249, 158, 177, 255 ] },
	{ pos: [ -1471, -894, 1105 ], flag: 0, tc: [ -112, 2904 ], color: [ 242, 255, 130, 255 ] },
	{ pos: [ -1457, -890, 550 ], flag: 0, tc: [ -1956, 2948 ], color: [ 169, 28, 169, 255 ] },
	{ pos: [ -122, -664, -23 ], flag: 0, tc: [ -4832, 1926 ], color: [ 246, 159, 175, 255 ] },
	{ pos: [ -1457, -890, 550 ], flag: 0, tc: [ 0, 990 ], color: [ 169, 28, 169, 255 ] },
	{ pos: [ 703, -108, -178 ], flag: 0, tc: [ -8050, 990 ], color: [ 39, 45, 144, 255 ] },
]

const ccm_seg7_vertex_07010320 = [
	{ pos: [ -988, -1809, 76 ], flag: 0, tc: [ -6786, -432 ], color: [ 231, 27, 135, 255 ] },
	{ pos: [ -988, -1554, 76 ], flag: 0, tc: [ -6786, -670 ], color: [ 16, 100, 181, 255 ] },
	{ pos: [ 1892, -1836, -145 ], flag: 0, tc: [ -6370, -1418 ], color: [ 223, 87, 170, 255 ] },
	{ pos: [ -988, -2065, 76 ], flag: 0, tc: [ -6786, -194 ], color: [ 179, 0, 156, 255 ] },
	{ pos: [ -1930, -1804, 30 ], flag: 0, tc: [ -7036, -116 ], color: [ 6, 255, 130, 255 ] },
	{ pos: [ -1930, -2060, 28 ], flag: 0, tc: [ -7038, 122 ], color: [ 6, 0, 130, 255 ] },
	{ pos: [ -2047, -1279, 0 ], flag: 0, tc: [ -7090, -568 ], color: [ 60, 74, 173, 255 ] },
]

export const ccm_seg7_dl_07010390 = [ 
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FD88.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FD88.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FDD0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FE10, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 10,  2, 0x0),
	...Gbi.gsSP2Triangles( 2, 10,  0, 0x0, 12,  2, 13, 0x0),
	...Gbi.gsSP2Triangles(13,  2,  1, 0x0, 12, 11,  2, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FEF0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  3, 0x0,  3,  1,  0, 0x0),
	Gbi.gsSP1Triangle( 5,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010480 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FF70, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700FFB0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  9, 0x0, 10,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0, 11,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010518 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDA0.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010070, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010160, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  1, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700FDB8.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_070101A0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010280, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010610 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09002800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_07010320, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  4, 0x0,  0,  4,  6, 0x0),
	Gbi.gsSP1Triangle( 1,  0,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_07010660 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010390),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010480),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010518),
	Gbi.gsSPDisplayList(ccm_seg7_dl_07010610),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

