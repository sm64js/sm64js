import * as Gbi from "../../include/gbi"
const yellow_sphere_seg5_vertex_05000000 = [
	{ pos: [ -49, -49, 0 ], flag: 0, tc: [ 0, 992 ], color: [ 181, 32, 64, 255 ] },
	{ pos: [ 50, -49, 0 ], flag: 0, tc: [ 992, 992 ], color: [ 181, 32, 64, 255 ] },
	{ pos: [ 50, 50, 0 ], flag: 0, tc: [ 992, 0 ], color: [ 181, 32, 64, 255 ] },
	{ pos: [ -49, 50, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 181, 32, 64, 255 ] },
]

export const yellow_sphere_seg5_texture_05000040 = []

export const yellow_sphere_seg5_dl_05000840 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const yellow_sphere_seg5_dl_05000888 = [
	Gbi.gsSPVertex(yellow_sphere_seg5_vertex_05000000, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

export const yellow_sphere_seg5_dl_050008C8 = [
	Gbi.gsSPDisplayList(yellow_sphere_seg5_dl_05000840),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, yellow_sphere_seg5_texture_05000040),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(yellow_sphere_seg5_dl_05000888),
	Gbi.gsSPEndDisplayList(),
]

