import * as Gbi from "../../../../../include/gbi"

import {
	snow_09000000,
	snow_09007000
} from "../../../../../textures/snow"

const ccm_seg7_vertex_0700E790 = [
	{ pos: [433, -204, -410], flag: 0, tc: [4566, 224], color: [255, 255, 255, 255] },
	{ pos: [-488, -50, -410], flag: 0, tc: [0, 990], color: [255, 255, 255, 255] },
	{ pos: [433, -50, -410], flag: 0, tc: [4566, 990], color: [255, 255, 255, 255] },
	{ pos: [-488, -204, -410], flag: 0, tc: [0, 224], color: [255, 255, 255, 255] },
	{ pos: [-488, -204, -103], flag: 0, tc: [1528, 224], color: [255, 255, 255, 255] },
	{ pos: [-488, -50, -410], flag: 0, tc: [-6, 990], color: [255, 255, 255, 255] },
	{ pos: [-488, -204, -410], flag: 0, tc: [-6, 224], color: [255, 255, 255, 255] },
	{ pos: [-488, -50, -103], flag: 0, tc: [1528, 990], color: [255, 255, 255, 255] },
	{ pos: [-488, -50, 203], flag: 0, tc: [680, 990], color: [255, 255, 255, 255] },
	{ pos: [-488, -204, 357], flag: 0, tc: [1446, 224], color: [255, 255, 255, 255] },
	{ pos: [-488, -50, 357], flag: 0, tc: [1446, 990], color: [255, 255, 255, 255] },
	{ pos: [-488, -204, 203], flag: 0, tc: [680, 224], color: [255, 255, 255, 255] },
]

const ccm_seg7_vertex_0700E850 = [
	{ pos: [433, 41, -195], flag: 0, tc: [0, 990], color: [255, 255, 255, 255] },
	{ pos: [-355, -9, -195], flag: 0, tc: [15708, -34], color: [255, 255, 255, 255] },
	{ pos: [-355, 41, -195], flag: 0, tc: [15708, 988], color: [255, 255, 255, 255] },
	{ pos: [433, -9, -195], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
	{ pos: [-355, 41, -195], flag: 0, tc: [0, 990], color: [255, 255, 255, 255] },
	{ pos: [-355, -9, -195], flag: 0, tc: [-40, 0], color: [255, 255, 255, 255] },
	{ pos: [-355, 72, 357], flag: 0, tc: [11112, 0], color: [255, 255, 255, 255] },
	{ pos: [-355, 123, 357], flag: 0, tc: [11128, 990], color: [255, 255, 255, 255] },
]

export const ccm_seg7_dl_0700E8D0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E790, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 11, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E928 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E850, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E970 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E8D0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E928),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

