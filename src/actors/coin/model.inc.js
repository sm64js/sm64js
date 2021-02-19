import * as Gbi from "../../include/gbi"

const coin_seg3_vertex_030056C0 = [
	{ pos: [ -32, 0, 0 ], flag: 0, tc: [ 0, 1984 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 32, 0, 0 ], flag: 0, tc: [ 1984, 1984 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 32, 64, 0 ], flag: 0, tc: [ 1984, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ -32, 64, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

const coin_seg3_vertex_03005700 = [
	{ pos: [ -50, 0, 0 ], flag: 0, tc: [ 0, 1984 ], color: [ 120, 120, 255, 255 ] },
	{ pos: [ 50, 0, 0 ], flag: 0, tc: [ 1984, 1984 ], color: [ 120, 120, 255, 255 ] },
	{ pos: [ 50, 100, 0 ], flag: 0, tc: [ 1984, 0 ], color: [ 120, 120, 255, 255 ] },
	{ pos: [ -50, 100, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 120, 120, 255, 255 ] },
]

const coin_seg3_vertex_03005740 = [
	{ pos: [ -35, 0, 0 ], flag: 0, tc: [ 0, 1984 ], color: [ 255, 0, 0, 255 ] },
	{ pos: [ 35, 0, 0 ], flag: 0, tc: [ 1984, 1984 ], color: [ 255, 0, 0, 255 ] },
	{ pos: [ 35, 70, 0 ], flag: 0, tc: [ 1984, 0 ], color: [ 255, 0, 0, 255 ] },
	{ pos: [ -35, 70, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 0, 0, 255 ] },
]

export const coin_seg3_texture_03005780 = []
export const coin_seg3_texture_03005F80 = []
export const coin_seg3_texture_03006780 = []
export const coin_seg3_texture_03006F80 = []

export const coin_seg3_dl_03007780 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const coin_seg3_dl_030077D0 = [
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

export const coin_seg3_dl_03007800 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_030056C0, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007828 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_030056C0, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007850 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_030056C0, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007878 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_030056C0, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_030078A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005700, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_030078C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005700, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_030078F0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005700, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007918 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005700, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007940 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005740, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007968 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03005F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005740, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_03007990 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006780),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005740, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

export const coin_seg3_dl_030079B8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, coin_seg3_texture_03006F80),
	Gbi.gsSPDisplayList(coin_seg3_dl_03007780),
	Gbi.gsSPVertex(coin_seg3_vertex_03005740, 4, 0),
	Gbi.gsSPBranchList(coin_seg3_dl_030077D0),
]

