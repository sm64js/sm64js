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
const bbh_seg7_lights_07012318 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_07012330 = [
	{ pos: [ -1100, 1382, 1075 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1100, 1178, 1075 ], flag: 0, tc: [ 308, 152 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1074, 1152, 1075 ], flag: 0, tc: [ 138, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1100, 1126, 1075 ], flag: 0, tc: [ 0, 152 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1100, 922, 1075 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 922, 1075 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 1126, 1075 ], flag: 0, tc: [ 308, 152 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 1178, 1075 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 1126, 1075 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1100, 1126, 1075 ], flag: 0, tc: [ 308, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1100, 1178, 1075 ], flag: 0, tc: [ 0, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 1178, 1075 ], flag: 0, tc: [ 0, 152 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 1382, 1075 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 1178, 1075 ], flag: 0, tc: [ 308, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -869, 1126, 1075 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -869, 1178, 1075 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07012430 = [
	{ pos: [ -1049, 1178, 1075 ], flag: 0, tc: [ 308, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1074, 1152, 1075 ], flag: 0, tc: [ 138, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1049, 1126, 1075 ], flag: 0, tc: [ 0, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -869, 1126, 1075 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
]

export const bbh_seg7_dl_07012470 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012318.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012318.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012330, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  3,  6,  2, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  9, 0x0,  7,  9,  2, 0x0),
	...Gbi.gsSP2Triangles( 7,  2, 10, 0x0,  0,  2, 11, 0x0),
	...Gbi.gsSP2Triangles( 0, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012430, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07012510 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07012470),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

