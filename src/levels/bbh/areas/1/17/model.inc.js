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
const bbh_seg7_vertex_0700F5C8 = [
	{ pos: [ 2130, 0, -1248 ], flag: 0, tc: [ 2216, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 102, -306 ], flag: 0, tc: [ -7184, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 0, -306 ], flag: 0, tc: [ -7184, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 0, 1024 ], flag: 0, tc: [ 13050, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 102, 1024 ], flag: 0, tc: [ 13050, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 102, -286 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 0, -286 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 102, -286 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 102, -286 ], flag: 0, tc: [ 172, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 0, -286 ], flag: 0, tc: [ 172, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2683, 0, -286 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3174, 102, -286 ], flag: 0, tc: [ -3914, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3584, 102, -286 ], flag: 0, tc: [ -8002, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3584, 0, -286 ], flag: 0, tc: [ -8002, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3174, 0, -286 ], flag: 0, tc: [ -3914, 990 ], color: [ 255, 255, 255, 255 ] },
]

const bbh_seg7_vertex_0700F6B8 = [
	{ pos: [ 2130, 0, -1248 ], flag: 0, tc: [ -5344, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 102, -1248 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 102, -1248 ], flag: 0, tc: [ -5344, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 0, -1248 ], flag: 0, tc: [ 2216, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 102, -1248 ], flag: 0, tc: [ 2216, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2130, 102, -306 ], flag: 0, tc: [ -7184, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 0, -1535 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 102, -1535 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 102, -1248 ], flag: 0, tc: [ 2216, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 0, -1248 ], flag: 0, tc: [ 2216, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3174, 0, -1248 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 0, -1248 ], flag: 0, tc: [ 5896, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3256, 102, -1248 ], flag: 0, tc: [ 5896, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3174, 102, -1248 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 0, -1248 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const bbh_seg7_dl_0700F7A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700F5C8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700F6B8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700F848 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700F7A8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

