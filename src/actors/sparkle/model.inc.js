import * as Gbi from "../../include/gbi"
const sparkles_seg4_vertex_04027450 = [
	{ pos: [ -32, 0, 0 ], flag: 0, tc: [ 0, 1984 ], color: [ 0, 0, 127, 0 ] },
	{ pos: [ 32, 0, 0 ], flag: 0, tc: [ 1984, 1984 ], color: [ 0, 0, 127, 0 ] },
	{ pos: [ 32, 64, 0 ], flag: 0, tc: [ 1984, 0 ], color: [ 0, 0, 127, 0 ] },
	{ pos: [ -32, 64, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 0 ] },
]

export const sparkles_seg4_texture_04027490 = []
export const sparkles_seg4_texture_04027C90 = []
export const sparkles_seg4_texture_04028490 = []
export const sparkles_seg4_texture_04028C90 = []
export const sparkles_seg4_texture_04029490 = []
export const sparkles_seg4_texture_04029C90 = []

export const sparkles_seg4_dl_0402A490 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPVertex(sparkles_seg4_vertex_04027450, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const sparkles_seg4_dl_0402A4F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04027490),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

export const sparkles_seg4_dl_0402A510 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04027C90),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

export const sparkles_seg4_dl_0402A528 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04028490),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

export const sparkles_seg4_dl_0402A540 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04028C90),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

export const sparkles_seg4_dl_0402A558 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04029490),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

export const sparkles_seg4_dl_0402A570 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sparkles_seg4_texture_04029C90),
	Gbi.gsSPBranchList(sparkles_seg4_dl_0402A490),
]

