import * as Gbi from "../../include/gbi"

const mist_seg3_vertex_03000000 = [
	{ pos: [ -25, -25, 0 ], flag: 0, tc: [ 0, 992 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 25, -25, 0 ], flag: 0, tc: [ 992, 992 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 25, 25, 0 ], flag: 0, tc: [ 992, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 25, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const mist_seg3_vertex_03000040 = [
	{ pos: [ -25, -25, 0 ], flag: 0, tc: [ 0, 992 ], color: [ 34, 26, 28, 255 ] },
	{ pos: [ 25, -25, 0 ], flag: 0, tc: [ 992, 992 ], color: [ 34, 26, 28, 255 ] },
	{ pos: [ 25, 25, 0 ], flag: 0, tc: [ 992, 0 ], color: [ 34, 26, 28, 255 ] },
	{ pos: [ -25, 25, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 34, 26, 28, 255 ] },
]

export const mist_seg3_texture_03000080 = []

export const mist_seg3_dl_03000880 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIFADEA),
	...Gbi.gsDPLoadTextureBlock(mist_seg3_texture_03000080, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPVertex(mist_seg3_vertex_03000000, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

export const mist_seg3_dl_03000920 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIFADEA),
	...Gbi.gsDPLoadTextureBlock(mist_seg3_texture_03000080, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPVertex(mist_seg3_vertex_03000040, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

