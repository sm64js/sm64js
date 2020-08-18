import * as Gbi from "../../../../../include/gbi"
import { outside_09006000, outside_09003000 } from "../../../../../textures/outside"

const castle_grounds_seg7_vertex_0700C2A0 = [
	{ pos: [ 268, 803, -3206 ], flag: 0, tc: [ 990, 328 ], color: [ 196, 196, 208, 255 ] },
	{ pos: [ -243, 803, -3206 ], flag: 0, tc: [ 0, 330 ], color: [ 196, 196, 208, 255 ] },
	{ pos: [ -245, 803, -2844 ], flag: 0, tc: [ 0, 970 ], color: [ 196, 196, 208, 255 ] },
	{ pos: [ 266, 803, -2844 ], flag: 0, tc: [ 990, 966 ], color: [ 196, 196, 208, 255 ] },
]

const castle_grounds_seg7_vertex_0700C2E0 = [
	{ pos: [ 205, 1110, -3104 ], flag: 0, tc: [ -4534, 0 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ 154, 803, -3104 ], flag: 0, tc: [ 1596, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ 205, 803, -3104 ], flag: 0, tc: [ 1596, 0 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ 154, 1059, -3104 ], flag: 0, tc: [ -3512, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ 205, 1110, -3104 ], flag: 0, tc: [ 6610, 0 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -153, 1059, -3104 ], flag: 0, tc: [ -542, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ 154, 1059, -3104 ], flag: 0, tc: [ 5588, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -204, 1110, -3104 ], flag: 0, tc: [ -1564, 0 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -153, 1059, -3104 ], flag: 0, tc: [ 4564, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -204, 803, -3104 ], flag: 0, tc: [ -544, 0 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -153, 803, -3104 ], flag: 0, tc: [ -544, 990 ], color: [ 156, 156, 174, 255 ] },
	{ pos: [ -204, 1110, -3104 ], flag: 0, tc: [ 5586, 0 ], color: [ 156, 156, 174, 255 ] },
]

export const castle_grounds_seg7_dl_0700C3A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C2A0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C3D8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C2E0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C430 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(castle_grounds_seg7_dl_0700C3A0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(castle_grounds_seg7_dl_0700C3D8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

