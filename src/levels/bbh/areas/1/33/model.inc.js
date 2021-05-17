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
const bbh_seg7_lights_0701A0F0 = Gbi.gdSPDefLights1(
	    0x20, 0x20, 0x20,
	    0x50, 0x50, 0x50, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0701A108 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0701A120 = [
	{ pos: [ -306, -2457, 2150 ], flag: 0, tc: [ 24496, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 307, -2457, 4608 ], flag: 0, tc: [ 0, 6098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 307, -2457, 2150 ], flag: 0, tc: [ 24496, 6098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -306, -2457, 4608 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0701A160 = [
	{ pos: [ -76, -2457, 2099 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, -2457, 2150 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2457, 2150 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, -2457, 4608 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, -2457, 4659 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2457, 4659 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2457, 4608 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2201, 4608 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -2201, 4659 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 4659 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 4608 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -2201, 2099 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -2201, 2150 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 2150 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 2099 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -2457, 2099 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0701A260 = [
	{ pos: [ -76, -2201, 2099 ], flag: 0, tc: [ 480, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2201, 2150 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 2150 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2201, 4608 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 4659 ], flag: 0, tc: [ 478, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 4608 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2201, 4659 ], flag: 0, tc: [ 478, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 4608 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 4659 ], flag: 0, tc: [ 478, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 4608 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 4659 ], flag: 0, tc: [ 478, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 2099 ], flag: 0, tc: [ 480, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 2150 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 2150 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 2099 ], flag: 0, tc: [ 480, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 2099 ], flag: 0, tc: [ 480, 2012 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0701A360 = [
	{ pos: [ 307, -2457, 2150 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -2047, 4608 ], flag: 0, tc: [ 12232, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -2047, 2150 ], flag: 0, tc: [ 0, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, -1842, 2150 ], flag: 0, tc: [ 12232, -456 ], color: [ 89, 167, 0, 255 ] },
	{ pos: [ -306, -2047, 4608 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 167, 0, 255 ] },
	{ pos: [ -306, -2047, 2150 ], flag: 0, tc: [ 12232, 990 ], color: [ 89, 167, 0, 255 ] },
	{ pos: [ -101, -1842, 4608 ], flag: 0, tc: [ 0, -456 ], color: [ 89, 167, 0, 255 ] },
	{ pos: [ 102, -1842, 2150 ], flag: 0, tc: [ 12232, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 102, -1842, 4608 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, -1842, 4608 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, -1842, 2150 ], flag: 0, tc: [ 12232, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 307, -2047, 2150 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 307, -2047, 4608 ], flag: 0, tc: [ 12232, 990 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 102, -1842, 4608 ], flag: 0, tc: [ 12232, -456 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 102, -1842, 2150 ], flag: 0, tc: [ 0, -456 ], color: [ 167, 167, 0, 255 ] },
]

const bbh_seg7_vertex_0701A450 = [
	{ pos: [ -76, -2201, 4608 ], flag: 0, tc: [ 1884, -288 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -306, -2047, 4608 ], flag: 0, tc: [ 3032, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 102, -1842, 4608 ], flag: 0, tc: [ 988, -2076 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -2457, 2150 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -2457, 4608 ], flag: 0, tc: [ 12232, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -2047, 4608 ], flag: 0, tc: [ 12232, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, -2047, 2150 ], flag: 0, tc: [ 7632, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -306, -2047, 4608 ], flag: 0, tc: [ -4628, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -306, -2457, 4608 ], flag: 0, tc: [ -4628, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -306, -2457, 2150 ], flag: 0, tc: [ 7632, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 4608 ], flag: 0, tc: [ 1884, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -306, -2457, 4608 ], flag: 0, tc: [ 3032, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -2201, 4608 ], flag: 0, tc: [ 1116, -288 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, -1842, 4608 ], flag: 0, tc: [ 2012, -2076 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -2047, 4608 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -2457, 4608 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
]

const bbh_seg7_vertex_0701A550 = [
	{ pos: [ 307, -2457, 4608 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -2457, 4608 ], flag: 0, tc: [ 1116, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -2201, 4608 ], flag: 0, tc: [ 1116, -288 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -2047, 2150 ], flag: 0, tc: [ 3032, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 77, -2201, 2150 ], flag: 0, tc: [ 1884, -288 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 307, -2457, 2150 ], flag: 0, tc: [ 3032, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 102, -1842, 2150 ], flag: 0, tc: [ 2012, -2076 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -76, -2201, 2150 ], flag: 0, tc: [ 1116, -288 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 77, -2457, 2150 ], flag: 0, tc: [ 1884, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -306, -2457, 2150 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -76, -2457, 2150 ], flag: 0, tc: [ 1116, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -306, -2047, 2150 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, -1842, 2150 ], flag: 0, tc: [ 988, -2076 ], color: [ 0, 0, 127, 255 ] },
]

export const bbh_seg7_dl_0701A620 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_0900A000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A0F0.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A0F0.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A120, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701A668 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A108.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A108.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A160, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701A6E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A260, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701A748 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A360, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A450, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 10, 11, 0x0,  0, 11,  1, 0x0),
	...Gbi.gsSP2Triangles(12,  0,  2, 0x0,  1, 13,  2, 0x0),
	...Gbi.gsSP2Triangles(12,  2, 14, 0x0, 15, 12, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A550, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  5, 0x0,  9, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(11,  9,  7, 0x0,  6, 11,  7, 0x0),
	Gbi.gsSP1Triangle( 6, 12, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701A850 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701A620),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701A668),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701A6E0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701A748),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

