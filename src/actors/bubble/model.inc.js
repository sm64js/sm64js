import * as Gbi from "../../include/gbi"

const bubble_seg4_vertex_0401CD20 = [
	{ pos: [ -16, 0, 0 ], flag: 0, tc: [ 0, 992 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 16, 0, 0 ], flag: 0, tc: [ 992, 992 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 16, 32, 0 ], flag: 0, tc: [ 992, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -16, 32, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const bubble_seg4_texture_0401CD60 = []
export const bubble_seg4_texture_0401D560 = []

export const bubble_seg4_dl_0401DD60 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	...Gbi.gsDPLoadTextureBlock(bubble_seg4_texture_0401CD60, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPVertex(bubble_seg4_vertex_0401CD20, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const bubble_seg4_dl_0401DDE0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	...Gbi.gsDPLoadTextureBlock(bubble_seg4_texture_0401D560, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPVertex(bubble_seg4_vertex_0401CD20, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

