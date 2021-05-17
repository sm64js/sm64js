import * as Gbi from "../../../../../include/gbi"
import {
	inside_09008000,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_070379F8 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_07037A10 = [
	{ pos: [ 4301, 1229, -716 ], flag: 0, tc: [ 1204, 2804 ], color: [ 191, 155, 38, 255 ] },
	{ pos: [ 3789, 1638, -504 ], flag: 0, tc: [ 1304, 2510 ], color: [ 211, 139, 11, 255 ] },
	{ pos: [ 3065, 1638, -1228 ], flag: 0, tc: [ 1046, 2070 ], color: [ 233, 139, 40, 255 ] },
	{ pos: [ 1229, 1229, 256 ], flag: 0, tc: [ 1688, 1030 ], color: [ 65, 155, 218, 255 ] },
	{ pos: [ 1741, 1638, 44 ], flag: 0, tc: [ 1588, 1324 ], color: [ 25, 132, 250, 255 ] },
	{ pos: [ 2465, 1638, 768 ], flag: 0, tc: [ 1846, 1764 ], color: [ 29, 144, 206, 255 ] },
	{ pos: [ 1229, 1229, -716 ], flag: 0, tc: [ 1310, 1006 ], color: [ 73, 155, 19, 255 ] },
	{ pos: [ 1741, 1638, -504 ], flag: 0, tc: [ 1374, 1312 ], color: [ 50, 144, 29, 255 ] },
	{ pos: [ 3789, 1638, 44 ], flag: 0, tc: [ 1518, 2522 ], color: [ 220, 136, 242, 255 ] },
	{ pos: [ 3065, 1638, 768 ], flag: 0, tc: [ 1826, 2114 ], color: [ 237, 141, 208, 255 ] },
	{ pos: [ 2465, 1638, -1228 ], flag: 0, tc: [ 1068, 1718 ], color: [ 11, 139, 45, 255 ] },
	{ pos: [ 2253, 1229, -1740 ], flag: 0, tc: [ 874, 1582 ], color: [ 38, 155, 65, 255 ] },
	{ pos: [ 3277, 1229, -1740 ], flag: 0, tc: [ 840, 2182 ], color: [ 237, 155, 73, 255 ] },
	{ pos: [ 2253, 1229, 1280 ], flag: 0, tc: [ 2054, 1652 ], color: [ 19, 155, 183, 255 ] },
	{ pos: [ 4301, 1229, 256 ], flag: 0, tc: [ 1584, 2826 ], color: [ 187, 154, 228, 255 ] },
	{ pos: [ 3277, 1229, 1280 ], flag: 0, tc: [ 2018, 2250 ], color: [ 228, 154, 187, 255 ] },
]

export const inside_castle_seg7_dl_07037B10 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070379F8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070379F8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07037A10, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  4,  3, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  9, 0x0,  4,  1,  8, 0x0),
	...Gbi.gsSP2Triangles( 4,  2,  1, 0x0,  4, 10,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  7, 10, 0x0,  4,  9,  5, 0x0),
	...Gbi.gsSP2Triangles(11,  7,  6, 0x0, 11, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 11, 0x0, 12,  2, 10, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0,  3,  5, 13, 0x0),
	...Gbi.gsSP2Triangles(14,  1,  0, 0x0, 14,  8,  1, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 14, 0x0, 13,  5,  9, 0x0),
	...Gbi.gsSP2Triangles(15,  9, 14, 0x0, 13,  9, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07037BF8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07037B10),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

