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
const bbh_seg7_lights_0700D350 = Gbi.gdSPDefLights1(
	    0x3f, 0x51, 0x66,
	    0x9e, 0xcc, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0700D368 = [
	{ pos: [ -1740, 1536, 2550 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 1536, 2550 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 1126, 2550 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1740, 1126, 2550 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1740, 614, 2550 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 614, 2550 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 205, 2550 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1740, 205, 2550 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 614, 2038 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -204, 614, 2038 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -204, 205, 2038 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -613, 205, 2038 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
]

export const bbh_seg7_dl_0700D428 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700D350.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700D350.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700D368, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700D490 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700D428),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

