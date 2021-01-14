import * as Gbi from "../../include/gbi"

const explosion_seg3_vertex_030009C8 = [
	{ pos: [-128, -128, 0], flag: 0, tc: [0, 992], color: [255, 255, 255, 255] },
	{ pos: [128, -128, 0], flag: 0, tc: [992, 992], color: [255, 255, 255, 255] },
	{ pos: [128, 128, 0], flag: 0, tc: [992, 0], color: [255, 255, 255, 255] },
	{ pos: [-128, 128, 0], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
]

export const explosion_seg3_texture_03000A08 = []
export const explosion_seg3_texture_03001208 = []
export const explosion_seg3_texture_03001A08 = []
export const explosion_seg3_texture_03002208 = []
export const explosion_seg3_texture_03002A08 = []
export const explosion_seg3_texture_03003208 = []
export const explosion_seg3_texture_03003A08 = []

export const explosion_seg3_dl_03004208 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADEA),
	Gbi.gsDPSetEnvColor(255, 255, 255, 150),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPVertex(explosion_seg3_vertex_030009C8, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const explosion_seg3_dl_03004298 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03000A08),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_030042B0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03001208),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_030042C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03001A08),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_030042E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03002208),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_030042F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03002A08),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_03004310 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03003208),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

export const explosion_seg3_dl_03004328 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, explosion_seg3_texture_03003A08),
	Gbi.gsSPBranchList(explosion_seg3_dl_03004208),
]

