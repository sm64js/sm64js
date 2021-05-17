import * as Gbi from "../../../../../include/gbi"
import {
	texture_castle_light,
} from "../../../texture.inc"
const dl_castle_lobby_wing_cap_light_vertex_group = [
	{ pos: [ -1075, 1741, -380 ], flag: 0, tc: [ -360, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1125, -50, 461 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1279, -50, 594 ], flag: 0, tc: [ 612, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1075, 1741, -130 ], flag: 0, tc: [ -110, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -921, -50, 973 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -968, 1741, -130 ], flag: 0, tc: [ -110, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -767, -50, 819 ], flag: 0, tc: [ 836, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -896, 1741, -201 ], flag: 0, tc: [ -180, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1125, -50, 973 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -767, -50, 614 ], flag: 0, tc: [ 632, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -896, 1741, -309 ], flag: 0, tc: [ -288, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -921, -50, 461 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -968, 1741, -380 ], flag: 0, tc: [ -360, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1147, 1741, -201 ], flag: 0, tc: [ -180, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1147, 1741, -309 ], flag: 0, tc: [ -288, -62 ], color: [ 255, 255, 255, 128 ] },
	{ pos: [ -1279, -50, 819 ], flag: 0, tc: [ 836, 990 ], color: [ 255, 255, 255, 128 ] },
]

export const dl_castle_lobby_wing_cap_light_model = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, texture_castle_light),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(dl_castle_lobby_wing_cap_light_vertex_group, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  4, 0x0,  7,  6,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 10,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 11,  1, 0x0),
	...Gbi.gsSP2Triangles(12,  1,  0, 0x0, 13,  8,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 14, 0x0, 14,  2, 15, 0x0),
	...Gbi.gsSP2Triangles(14, 15, 13, 0x0, 13, 15,  8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const dl_castle_lobby_wing_cap_light = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(dl_castle_lobby_wing_cap_light_model),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

