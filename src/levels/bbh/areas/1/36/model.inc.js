import * as Gbi from "../../../../../include/gbi"
import {
    spooky_09000000,
    spooky_09000800,
    spooky_09001800,
    spooky_09002800,
    spooky_09003800,
    spooky_09004800,
    spooky_09005000,
    spooky_09006000,
    spooky_09006800,
    spooky_09007000,
    spooky_09008000,
    spooky_09008800,
    spooky_09009000,
    spooky_0900A000,
    spooky_0900A800,
    spooky_0900B000,
    spooky_0900B800
} from "../../../../../textures/spooky"

import {
    bbh_seg7_texture_07000000,
    bbh_seg7_texture_07001000,
    bbh_seg7_texture_07001800,
    bbh_seg7_texture_07002000,
    bbh_seg7_texture_07003000,
    bbh_seg7_texture_07003400,
    bbh_seg7_texture_07004400
} from "../../../texture.inc"
const bbh_seg7_lights_0701E5D8 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0701E5F0 = [
	{ pos: [ 5530, 1843, -1945 ], flag: 0, tc: [ -10250, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 5530, -204, -1945 ], flag: 0, tc: [ -10250, 5758 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 5530, -204, 4710 ], flag: 0, tc: [ 11210, 5758 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -4197, 1843, -1945 ], flag: 0, tc: [ -4118, -1054 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2149, -204, -3993 ], flag: 0, tc: [ 5078, 5758 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2149, 1843, -3993 ], flag: 0, tc: [ 5078, -1054 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -4197, -204, -1945 ], flag: 0, tc: [ -4118, 5758 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2149, 1843, -3993 ], flag: 0, tc: [ -8206, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2149, -204, -3993 ], flag: 0, tc: [ -8206, 6780 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3482, -204, -3993 ], flag: 0, tc: [ 10188, 6780 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3482, 1843, -3993 ], flag: 0, tc: [ 10188, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3482, 1843, -3993 ], flag: 0, tc: [ -4118, -1054 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 3482, -204, -3993 ], flag: 0, tc: [ -4118, 5758 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 5530, -204, -1945 ], flag: 0, tc: [ 5078, 5758 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 5530, 1843, -1945 ], flag: 0, tc: [ 5078, -1054 ], color: [ 167, 0, 89, 255 ] },
]

const bbh_seg7_vertex_0701E6E0 = [
	{ pos: [ 5530, 1843, 4710 ], flag: 0, tc: [ -4118, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 5530, -204, 4710 ], flag: 0, tc: [ -4118, 6780 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 3482, -204, 6758 ], flag: 0, tc: [ 5070, 6780 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 5530, 1843, -1945 ], flag: 0, tc: [ -10250, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 5530, -204, 4710 ], flag: 0, tc: [ 11210, 5758 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 5530, 1843, 4710 ], flag: 0, tc: [ 11210, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -4197, 1843, 4710 ], flag: 0, tc: [ -10250, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -4197, -204, 4710 ], flag: 0, tc: [ -10250, 5758 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -4197, -204, -1945 ], flag: 0, tc: [ 11210, 5758 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -4197, 1843, -1945 ], flag: 0, tc: [ 11210, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2149, 1843, 6758 ], flag: 0, tc: [ -4118, -2076 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -4197, -204, 4710 ], flag: 0, tc: [ 5078, 4736 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -4197, 1843, 4710 ], flag: 0, tc: [ 5078, -2076 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2149, -204, 6758 ], flag: 0, tc: [ -4118, 4736 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 3482, 1843, 6758 ], flag: 0, tc: [ 5070, 0 ], color: [ 167, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701E7D0 = [
	{ pos: [ -2149, 1843, 6758 ], flag: 0, tc: [ 9166, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3482, 1843, 6758 ], flag: 0, tc: [ -9228, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3482, -204, 6758 ], flag: 0, tc: [ -9228, 6780 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2149, -204, 6758 ], flag: 0, tc: [ 9166, 6780 ], color: [ 0, 0, 129, 255 ] },
]

export const bbh_seg7_dl_0701E810 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701E5D8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701E5D8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701E5F0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701E6E0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701E7D0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701E8D8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701E810),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

