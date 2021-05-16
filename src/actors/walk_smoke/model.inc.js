import * as Gbi from "../../include/gbi"
const smoke_seg4_vertex_0401DE60 = [
	{ pos: [ -32, 0, 0 ], flag: 0, tc: [ 0, 992 ], color: [ 255, 255, 255, 100 ] },
	{ pos: [ 32, 0, 0 ], flag: 0, tc: [ 992, 992 ], color: [ 255, 255, 255, 100 ] },
	{ pos: [ 32, 64, 0 ], flag: 0, tc: [ 992, 0 ], color: [ 255, 255, 255, 100 ] },
	{ pos: [ -32, 64, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 100 ] },
]

export const smoke_seg4_texture_0401DEA0 = []
export const smoke_seg4_texture_0401E6A0 = []
export const smoke_seg4_texture_0401EEA0 = []
export const smoke_seg4_texture_0401F6A0 = []
export const smoke_seg4_texture_0401FEA0 = []
export const smoke_seg4_texture_040206A0 = []
export const smoke_seg4_texture_04020EA0 = []

export const smoke_seg4_dl_040216A0 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPVertex(smoke_seg4_vertex_0401DE60, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

export const smoke_seg4_dl_04021718 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_0401DEA0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_04021730 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_0401E6A0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_04021748 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_0401EEA0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_04021760 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_0401F6A0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_04021778 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_0401FEA0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_04021790 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_040206A0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

export const smoke_seg4_dl_040217A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, smoke_seg4_texture_04020EA0),
	Gbi.gsSPBranchList(smoke_seg4_dl_040216A0),
]

