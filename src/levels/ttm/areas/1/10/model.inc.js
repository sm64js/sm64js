import {ttm_seg7_texture_07001800, } from "../../../textures.inc.js"
import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700C488 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700C4A0 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700C4B8 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700C4D0 = [
	{ pos: [ 742, 688, -836 ], flag: 0, tc: [ -414, -3010 ], color: [ 151, 65, 26, 255 ] },
	{ pos: [ -306, -1307, -97 ], flag: 0, tc: [ 0, 990 ], color: [ 151, 65, 26, 255 ] },
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 548, -2976 ], color: [ 151, 65, 26, 255 ] },
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 548, -2976 ], color: [ 147, 64, 4, 255 ] },
	{ pos: [ -306, -1307, -97 ], flag: 0, tc: [ 0, 990 ], color: [ 147, 64, 4, 255 ] },
	{ pos: [ 682, 358, 10 ], flag: 0, tc: [ 1066, -2296 ], color: [ 147, 64, 4, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 1660, -2948 ], color: [ 143, 223, 45, 255 ] },
	{ pos: [ 682, 358, 10 ], flag: 0, tc: [ 1066, -2296 ], color: [ 143, 223, 45, 255 ] },
	{ pos: [ 922, -329, 102 ], flag: 0, tc: [ 1374, -912 ], color: [ 143, 223, 45, 255 ] },
	{ pos: [ 1124, 688, -90 ], flag: 0, tc: [ 1132, 994 ], color: [ 122, 19, 27, 255 ] },
	{ pos: [ 1043, 1309, -173 ], flag: 0, tc: [ 1122, -244 ], color: [ 122, 19, 27, 255 ] },
	{ pos: [ 894, 1309, 479 ], flag: 0, tc: [ 8, -236 ], color: [ 122, 19, 27, 255 ] },
	{ pos: [ 1416, 688, -368 ], flag: 0, tc: [ 1938, 990 ], color: [ 87, 0, 91, 255 ] },
	{ pos: [ 1124, 688, -90 ], flag: 0, tc: [ 1132, 994 ], color: [ 87, 0, 91, 255 ] },
	{ pos: [ 922, -329, 102 ], flag: 0, tc: [ 586, 3028 ], color: [ 87, 0, 91, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 0, 990 ], color: [ 87, 0, 91, 255 ] },
]

const ttm_seg7_vertex_0700C5D0 = [
	{ pos: [ -306, -1307, -97 ], flag: 0, tc: [ 6028, -1962 ], color: [ 230, 7, 124, 255 ] },
	{ pos: [ 922, -329, 102 ], flag: 0, tc: [ 8232, -3916 ], color: [ 230, 7, 124, 255 ] },
	{ pos: [ 682, 358, 10 ], flag: 0, tc: [ 7738, -5288 ], color: [ 230, 7, 124, 255 ] },
]

const ttm_seg7_vertex_0700C600 = [
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 1072, 978 ], color: [ 191, 181, 178, 255 ] },
	{ pos: [ 387, 1309, -20 ], flag: 0, tc: [ 1132, -250 ], color: [ 191, 181, 178, 255 ] },
	{ pos: [ 596, 1309, -193 ], flag: 0, tc: [ 590, -250 ], color: [ 191, 181, 178, 255 ] },
	{ pos: [ 596, 1309, -193 ], flag: 0, tc: [ 694, -4210 ], color: [ 131, 249, 16, 255 ] },
	{ pos: [ 682, 358, 10 ], flag: 0, tc: [ 1066, -2296 ], color: [ 131, 249, 16, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 1660, -2948 ], color: [ 131, 249, 16, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 1660, -2948 ], color: [ 149, 192, 239, 255 ] },
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 1190, -4192 ], color: [ 149, 192, 239, 255 ] },
	{ pos: [ 387, 1309, -20 ], flag: 0, tc: [ 846, -4204 ], color: [ 149, 192, 239, 255 ] },
]

const ttm_seg7_vertex_0700C690 = [
	{ pos: [ 1043, 1309, -173 ], flag: 0, tc: [ -394, -250 ], color: [ 5, 35, 135, 255 ] },
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 0, 990 ], color: [ 5, 35, 135, 255 ] },
	{ pos: [ 596, 1309, -193 ], flag: 0, tc: [ 498, -250 ], color: [ 5, 35, 135, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 1660, -2948 ], color: [ 145, 196, 12, 255 ] },
	{ pos: [ 428, 1309, 816 ], flag: 0, tc: [ 2414, -4148 ], color: [ 145, 196, 12, 255 ] },
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 1190, -4192 ], color: [ 145, 196, 12, 255 ] },
	{ pos: [ 894, 1309, 479 ], flag: 0, tc: [ 8, -236 ], color: [ 80, 208, 85, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 0, 990 ], color: [ 80, 208, 85, 255 ] },
	{ pos: [ 1124, 688, -90 ], flag: 0, tc: [ 1132, 994 ], color: [ 80, 208, 85, 255 ] },
	{ pos: [ 702, 694, 312 ], flag: 0, tc: [ 0, 990 ], color: [ 69, 209, 95, 255 ] },
	{ pos: [ 894, 1309, 479 ], flag: 0, tc: [ 8, -236 ], color: [ 69, 209, 95, 255 ] },
	{ pos: [ 428, 1309, 816 ], flag: 0, tc: [ -1128, -230 ], color: [ 69, 209, 95, 255 ] },
	{ pos: [ 596, 1309, -193 ], flag: 0, tc: [ 590, -250 ], color: [ 154, 232, 186, 255 ] },
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 0, 990 ], color: [ 154, 232, 186, 255 ] },
	{ pos: [ 682, 358, 10 ], flag: 0, tc: [ 718, 1648 ], color: [ 154, 232, 186, 255 ] },
]

const ttm_seg7_vertex_0700C780 = [
	{ pos: [ 1043, 1309, -173 ], flag: 0, tc: [ 200, -250 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ 1124, 688, -90 ], flag: 0, tc: [ 0, 990 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 724, 990 ], color: [ 91, 0, 168, 255 ] },
]

const ttm_seg7_vertex_0700C7B0 = [
	{ pos: [ 387, 1309, -20 ], flag: 0, tc: [ 4216, -3960 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 4150, -3556 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 428, 1309, 816 ], flag: 0, tc: [ 4298, -2288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1043, 1309, -173 ], flag: 0, tc: [ 5526, -4266 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 596, 1309, -193 ], flag: 0, tc: [ 4634, -4304 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 894, 1309, 479 ], flag: 0, tc: [ 5228, -2962 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_0700C810 = [
	{ pos: [ 861, 688, -362 ], flag: 0, tc: [ 5162, -4642 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1124, 688, -90 ], flag: 0, tc: [ 5688, -4100 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1416, 688, -368 ], flag: 0, tc: [ 6270, -4656 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, 688, -836 ], flag: 0, tc: [ 4924, -5590 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_0700C850 = [
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 3648, 990 ], color: [ 125, 0, 19, 255 ] },
	{ pos: [ 354, 1206, 181 ], flag: 0, tc: [ 3648, 990 ], color: [ 125, 0, 19, 255 ] },
	{ pos: [ 370, 1155, 80 ], flag: 0, tc: [ 3648, 0 ], color: [ 125, 0, 19, 255 ] },
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 3648, 990 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ 387, 1206, -20 ], flag: 0, tc: [ 3648, -1054 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ 387, 1309, -20 ], flag: 0, tc: [ 3648, -1054 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ 370, 1155, 80 ], flag: 0, tc: [ 3648, 0 ], color: [ 125, 0, 20, 255 ] },
]

const ttm_seg7_vertex_0700C8C0 = [
	{ pos: [ 387, 1309, -20 ], flag: 0, tc: [ 3648, -1054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1463, 1309, -121 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 354, 1309, 181 ], flag: 0, tc: [ 3648, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1430, 1309, -323 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_0700C900 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C4D0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 14, 13, 15, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C5D0, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4A0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4A0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C600, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 6,  7,  8, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4B8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4B8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C690, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C780, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700C9F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C7B0, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  5,  3, 0x0,  0,  2,  5, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4B8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C4B8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C810, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700CA78 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ttm_seg7_texture_07001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C850, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 3,  6,  4, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700C488.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700C8C0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700CAE0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700C900),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700C9F8),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700CA78),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

