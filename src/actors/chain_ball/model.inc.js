import * as Gbi from "../../include/gbi"

const chain_ball_seg6_vertex_06020AA0 = [
	{ pos: [-26, -26, 0], flag: 0, tc: [0, 992], color: [255, 255, 255, 255] },
	{ pos: [26, -26, 0], flag: 0, tc: [992, 992], color: [255, 255, 255, 255] },
	{ pos: [26, 26, 0], flag: 0, tc: [992, 0], color: [255, 255, 255, 255] },
	{ pos: [-26, 26, 0], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
]

export const chain_ball_seg6_texture_06020AE8 = []

export const chain_ball_seg6_dl_060212E8 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	...Gbi.gsDPLoadTextureBlock(chain_ball_seg6_texture_06020AE8, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPVertex(chain_ball_seg6_vertex_06020AA0, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

