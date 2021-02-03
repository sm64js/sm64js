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

const bbh_seg7_vertex_0701ED88 = [
	{ pos: [ 1331, 563, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 922, 154, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 1331, 154, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 922, 563, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 0, 154, 2161 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 410, 154, 2161 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 410, 563, 2161 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 0, 0, 154 ] },
	{ pos: [ 0, 563, 2161 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 154 ] },
]

const bbh_seg7_vertex_0701EE08 = [
	{ pos: [ -1740, 717, -1648 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ -1381, 717, -1648 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ -1381, 0, -1648 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 87, 0, 154 ] },
	{ pos: [ -1740, 0, -1648 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 87, 0, 154 ] },
]

export const bbh_seg7_dl_0701EE48 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701ED88, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701EE90 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, spooky_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701EE08, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701EEC8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701EE48),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701EE90),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

