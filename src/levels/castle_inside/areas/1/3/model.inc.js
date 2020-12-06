import * as Gbi from "../../../../../include/gbi"
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
    inside_0900B800
} from "../../../../../textures/inside"
const inside_castle_seg7_vertex_07029078 = [
	{ pos: [ -13, 614, -1037 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, 717, -1043 ], flag: 0, tc: [ 114, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -13, 717, -1037 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 0, 614, -1043 ], flag: 0, tc: [ 114, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 606, 717, -1043 ], flag: 0, tc: [ 6160, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 606, 614, -1043 ], flag: 0, tc: [ 6160, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 532, 307, -1023 ], flag: 0, tc: [ 9166, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 532, 205, -1023 ], flag: 0, tc: [ 9166, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 532, 307, -93 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 532, 205, -93 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 424, 205, 14 ], flag: 0, tc: [ -1052, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 424, 307, 14 ], flag: 0, tc: [ -1052, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 307, -93 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 205, -1023 ], flag: 0, tc: [ 9166, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 307, -1023 ], flag: 0, tc: [ 9166, 0 ], color: [ 255, 255, 255, 255 ] },
]

const inside_castle_seg7_vertex_07029168 = [
	{ pos: [ 171, 26, 268 ], flag: 0, tc: [ -2584, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 171, 128, 268 ], flag: 0, tc: [ -2584, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 424, 307, 14 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 424, 205, 14 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2471, 307, 14 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2218, 128, 268 ], flag: 0, tc: [ -2584, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2218, 26, 268 ], flag: 0, tc: [ -2586, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2471, 205, 14 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 307, -93 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2471, 307, 14 ], flag: 0, tc: [ -1052, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2471, 205, 14 ], flag: 0, tc: [ -1052, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 205, -93 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -269, 614, -781 ], flag: 0, tc: [ 8656, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -622, 614, -429 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -622, 512, -429 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2579, 205, -1023 ], flag: 0, tc: [ 9166, 990 ], color: [ 255, 255, 255, 255 ] },
]

const inside_castle_seg7_vertex_07029268 = [
	{ pos: [ 606, 614, -1043 ], flag: 0, tc: [ 6100, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 805, 717, -1242 ], flag: 0, tc: [ 8144, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 606, 717, -1043 ], flag: 0, tc: [ 6100, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 805, 614, -1242 ], flag: 0, tc: [ 8144, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -13, 717, -1037 ], flag: 0, tc: [ 3570, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -269, 512, -781 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -13, 614, -1037 ], flag: 0, tc: [ 3572, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -269, 614, -781 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -269, 614, -781 ], flag: 0, tc: [ 8656, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -622, 512, -429 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -269, 512, -781 ], flag: 0, tc: [ 8656, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1424, 512, -429 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1228, 512, -429 ], flag: 0, tc: [ 1928, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1424, 614, -429 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const inside_castle_seg7_vertex_07029348 = [
	{ pos: [ -622, 614, -429 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -818, 512, -429 ], flag: 0, tc: [ -966, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -622, 512, -429 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -818, 614, -429 ], flag: 0, tc: [ -966, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1424, 614, -429 ], flag: 0, tc: [ -3096, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2039, 614, -1044 ], flag: 0, tc: [ -9228, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2039, 512, -1044 ], flag: 0, tc: [ -9228, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1424, 512, -429 ], flag: 0, tc: [ -3096, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2653, 512, -1043 ], flag: 0, tc: [ -15360, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2653, 614, -1043 ], flag: 0, tc: [ -15360, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2852, 512, -1242 ], flag: 0, tc: [ -17404, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2852, 614, -1242 ], flag: 0, tc: [ -17404, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1228, 512, -429 ], flag: 0, tc: [ 1928, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1228, 614, -429 ], flag: 0, tc: [ 1928, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1424, 614, -429 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const inside_castle_seg7_dl_07029438 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029078, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  5, 0x0,  4,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0, 10, 11,  8, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029168, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0,  8, 11, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029268, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029348, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  5,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07029578 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07029438),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

