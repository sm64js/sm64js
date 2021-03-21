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
const bbh_seg7_vertex_0700B238 = [
	{ pos: [ 2161, 819, 1638 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1485, 1638 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1485, 1997 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1741, 307 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 2406, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 2406, 666 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1741, 666 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 819, 307 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1485, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1485, 666 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 819, 666 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 3533, 614, 1137 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 3174, 0, 1137 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 3533, 0, 1137 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 3174, 614, 1137 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
]

const bbh_seg7_vertex_0700B328 = [
	{ pos: [ 2161, 0, 1280 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 666, 1638 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 0, 1638 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 819, 1638 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 1485, 1997 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 819, 1997 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ 2161, 666, 1280 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
]

export const bbh_seg7_dl_0700B398 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700B238, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700B328, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700B418 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700B398),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

