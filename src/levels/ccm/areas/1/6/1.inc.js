import * as Gbi from "../../../../../include/gbi"

import {
	snow_09005000,
	snow_09008000,
	snow_09008800 
} from "../../../../../textures/snow"

const ccm_seg7_lights_0700DE68 = Gbi.gdSPDefLights1(
	0x7f, 0x7f, 0x7f,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700DE80 = Gbi.gdSPDefLights1(
	0x4c, 0x4c, 0x4c,
	0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700DE98 = Gbi.gdSPDefLights1(
	0x5d, 0x5d, 0x5d,
	0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700DEB0 = Gbi.gdSPDefLights1(
	0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700DEC8 = [
	{ pos: [-355, 123, 357], flag: 0, tc: [2592, -870], color: [0, 125, 238, 255] },
	{ pos: [433, 123, 357], flag: 0, tc: [0, -870], color: [0, 125, 238, 255] },
	{ pos: [433, 41, -195], flag: 0, tc: [0, 990], color: [0, 125, 238, 255] },
	{ pos: [-355, 41, -195], flag: 0, tc: [2592, 990], color: [0, 125, 238, 255] },
	{ pos: [433, 358, -52], flag: 0, tc: [0, -372], color: [0, 127, 0, 255] },
	{ pos: [330, 358, 50], flag: 0, tc: [308, 0], color: [0, 127, 0, 255] },
	{ pos: [433, 358, 357], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [330, 358, 255], flag: 0, tc: [308, 650], color: [0, 127, 0, 255] },
	{ pos: [126, 358, 255], flag: 0, tc: [990, 650], color: [0, 127, 0, 255] },
	{ pos: [23, 358, 357], flag: 0, tc: [1330, 990], color: [0, 127, 0, 255] },
	{ pos: [126, 358, 50], flag: 0, tc: [990, 0], color: [0, 127, 0, 255] },
	{ pos: [23, 358, -52], flag: 0, tc: [1330, -372], color: [0, 127, 0, 255] },
]

const ccm_seg7_vertex_0700DF88 = [
	{ pos: [351, 0, 275], flag: 0, tc: [-2482, 2726], color: [0, 0, 127, 255] },
	{ pos: [105, 174, 275], flag: 0, tc: [0, 990], color: [0, 0, 127, 255] },
	{ pos: [105, 0, 275], flag: 0, tc: [0, 2726], color: [0, 0, 127, 255] },
	{ pos: [351, 0, 275], flag: 0, tc: [-2482, 2726], color: [1, 1, 126, 255] },
	{ pos: [349, 174, 273], flag: 0, tc: [-2466, 990], color: [1, 1, 126, 255] },
	{ pos: [105, 174, 275], flag: 0, tc: [0, 990], color: [1, 1, 126, 255] },
	{ pos: [23, 205, -52], flag: 0, tc: [0, 2520], color: [129, 0, 0, 255] },
	{ pos: [23, 358, 357], flag: 0, tc: [4056, 990], color: [129, 0, 0, 255] },
	{ pos: [23, 358, -52], flag: 0, tc: [0, 990], color: [129, 0, 0, 255] },
	{ pos: [23, 205, 357], flag: 0, tc: [4056, 2520], color: [129, 0, 0, 255] },
	{ pos: [433, 205, -52], flag: 0, tc: [-4118, 2520], color: [0, 0, 129, 255] },
	{ pos: [23, 205, -52], flag: 0, tc: [0, 2520], color: [0, 0, 129, 255] },
	{ pos: [433, 358, -52], flag: 0, tc: [-4118, 990], color: [0, 0, 129, 255] },
	{ pos: [23, 358, -52], flag: 0, tc: [0, 990], color: [0, 0, 129, 255] },
]

const ccm_seg7_vertex_0700E068 = [
	{ pos: [126, 358, 50], flag: 0, tc: [3034, -542], color: [0, 0, 127, 255] },
	{ pos: [126, 154, 50], flag: 0, tc: [3034, 1498], color: [0, 0, 127, 255] },
	{ pos: [330, 154, 50], flag: 0, tc: [990, 1500], color: [0, 0, 127, 255] },
	{ pos: [433, 205, 357], flag: 0, tc: [-4118, -3098], color: [44, 138, 0, 255] },
	{ pos: [351, 174, 29], flag: 0, tc: [-3300, 172], color: [44, 138, 0, 255] },
	{ pos: [433, 205, -52], flag: 0, tc: [-4118, 990], color: [44, 138, 0, 255] },
	{ pos: [433, 205, 357], flag: 0, tc: [-4118, -3098], color: [43, 137, 0, 255] },
	{ pos: [349, 174, 273], flag: 0, tc: [-3284, -2264], color: [43, 137, 0, 255] },
	{ pos: [351, 174, 29], flag: 0, tc: [-3300, 172], color: [43, 137, 0, 255] },
	{ pos: [433, 205, -52], flag: 0, tc: [-4118, 990], color: [0, 138, 211, 255] },
	{ pos: [351, 174, 29], flag: 0, tc: [-3300, 172], color: [0, 138, 211, 255] },
	{ pos: [105, 174, 29], flag: 0, tc: [-848, 172], color: [0, 138, 211, 255] },
	{ pos: [23, 205, -52], flag: 0, tc: [0, 990], color: [0, 138, 211, 255] },
	{ pos: [105, 174, 275], flag: 0, tc: [-848, -2280], color: [212, 138, 0, 255] },
	{ pos: [23, 205, 357], flag: 0, tc: [0, -3098], color: [212, 138, 0, 255] },
	{ pos: [105, 174, 29], flag: 0, tc: [-848, 172], color: [212, 138, 0, 255] },
]

const ccm_seg7_vertex_0700E168 = [
	{ pos: [23, 205, 357], flag: 0, tc: [0, -3098], color: [212, 138, 0, 255] },
	{ pos: [23, 205, -52], flag: 0, tc: [0, 990], color: [212, 138, 0, 255] },
	{ pos: [105, 174, 29], flag: 0, tc: [-848, 172], color: [212, 138, 0, 255] },
	{ pos: [330, 358, 50], flag: 0, tc: [990, 990], color: [129, 0, 0, 255] },
	{ pos: [330, 154, 50], flag: 0, tc: [990, 3032], color: [129, 0, 0, 255] },
	{ pos: [330, 154, 255], flag: 0, tc: [3034, 3032], color: [129, 0, 0, 255] },
	{ pos: [330, 358, 255], flag: 0, tc: [3034, 990], color: [129, 0, 0, 255] },
	{ pos: [126, 358, 255], flag: 0, tc: [3034, -542], color: [0, 0, 129, 255] },
	{ pos: [330, 154, 255], flag: 0, tc: [990, 1500], color: [0, 0, 129, 255] },
	{ pos: [126, 154, 255], flag: 0, tc: [3034, 1498], color: [0, 0, 129, 255] },
	{ pos: [126, 358, 50], flag: 0, tc: [3034, -542], color: [0, 0, 127, 255] },
	{ pos: [330, 154, 50], flag: 0, tc: [990, 1500], color: [0, 0, 127, 255] },
	{ pos: [330, 358, 50], flag: 0, tc: [990, -542], color: [0, 0, 127, 255] },
	{ pos: [126, 154, 255], flag: 0, tc: [3034, 3032], color: [127, 0, 0, 255] },
	{ pos: [126, 358, 50], flag: 0, tc: [990, 990], color: [127, 0, 0, 255] },
	{ pos: [126, 358, 255], flag: 0, tc: [3034, 990], color: [127, 0, 0, 255] },
]

const ccm_seg7_vertex_0700E268 = [
	{ pos: [126, 154, 255], flag: 0, tc: [3034, 3032], color: [127, 0, 0, 255] },
	{ pos: [126, 154, 50], flag: 0, tc: [990, 3032], color: [127, 0, 0, 255] },
	{ pos: [126, 358, 50], flag: 0, tc: [990, 990], color: [127, 0, 0, 255] },
	{ pos: [126, 358, 255], flag: 0, tc: [3034, -542], color: [0, 0, 129, 255] },
	{ pos: [330, 358, 255], flag: 0, tc: [990, -542], color: [0, 0, 129, 255] },
	{ pos: [330, 154, 255], flag: 0, tc: [990, 1500], color: [0, 0, 129, 255] },
]

const ccm_seg7_vertex_0700E2C8 = [
	{ pos: [351, 174, 29], flag: 0, tc: [-2482, 990], color: [0, 0, 129, 255] },
	{ pos: [351, 0, 29], flag: 0, tc: [-2482, 2726], color: [0, 0, 129, 255] },
	{ pos: [105, 0, 29], flag: 0, tc: [0, 2726], color: [0, 0, 129, 255] },
	{ pos: [105, 174, 29], flag: 0, tc: [0, 990], color: [0, 0, 129, 255] },
	{ pos: [349, 174, 273], flag: 0, tc: [2404, 990], color: [126, 1, 1, 255] },
	{ pos: [351, 0, 275], flag: 0, tc: [2420, 2726], color: [126, 1, 1, 255] },
	{ pos: [351, 174, 29], flag: 0, tc: [0, 990], color: [126, 1, 1, 255] },
	{ pos: [351, 0, 275], flag: 0, tc: [2420, 2726], color: [127, 0, 0, 255] },
	{ pos: [351, 0, 29], flag: 0, tc: [0, 2726], color: [127, 0, 0, 255] },
	{ pos: [351, 174, 29], flag: 0, tc: [0, 990], color: [127, 0, 0, 255] },
	{ pos: [105, 0, 29], flag: 0, tc: [0, 2726], color: [129, 0, 0, 255] },
	{ pos: [105, 174, 275], flag: 0, tc: [2420, 990], color: [129, 0, 0, 255] },
	{ pos: [105, 174, 29], flag: 0, tc: [0, 990], color: [129, 0, 0, 255] },
	{ pos: [105, 0, 275], flag: 0, tc: [2420, 2726], color: [129, 0, 0, 255] },
]

const ccm_seg7_vertex_0700E3A8 = [
	{ pos: [-334, -204, -154], flag: 0, tc: [-2340, -6676], color: [0, 0, 129, 255] },
	{ pos: [-334, 27, -154], flag: 0, tc: [0, -6676], color: [0, 0, 129, 255] },
	{ pos: [433, 27, -154], flag: 0, tc: [0, 990], color: [0, 0, 129, 255] },
	{ pos: [433, -204, -154], flag: 0, tc: [-2338, 990], color: [0, 0, 129, 255] },
	{ pos: [-334, -204, 357], flag: 0, tc: [-2340, -4120], color: [129, 0, 0, 255] },
	{ pos: [-334, 102, 357], flag: 0, tc: [724, -4122], color: [129, 0, 0, 255] },
	{ pos: [-334, 27, -154], flag: 0, tc: [0, 990], color: [129, 0, 0, 255] },
	{ pos: [-334, -204, -154], flag: 0, tc: [-2340, 990], color: [129, 0, 0, 255] },
]

const ccm_seg7_vertex_0700E428 = [
	{ pos: [433, 21, -192], flag: 0, tc: [0, 0], color: [0, 131, 18, 255] },
	{ pos: [433, 103, 360], flag: 0, tc: [0, 0], color: [0, 131, 18, 255] },
	{ pos: [-355, 103, 360], flag: 0, tc: [0, 0], color: [0, 131, 18, 255] },
	{ pos: [-355, 21, -192], flag: 0, tc: [0, 0], color: [0, 131, 18, 255] },
]

const ccm_seg7_vertex_0700E468 = [
	{ pos: [126, 154, 50], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
	{ pos: [126, 154, 255], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
	{ pos: [330, 154, 50], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
	{ pos: [330, 154, 255], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
]

export const ccm_seg7_dl_0700E4A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE68.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE68.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700DEC8, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 8, 0x0, 10, 11, 9, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 4, 0x0, 10, 5, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E530 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700DF88, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 11, 13, 12, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE80.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE80.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E068, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E168, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E268, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE98.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE98.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E2C8, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E668 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE68.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DE68.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E3A8, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E6C0 = [
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E428, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700DEB0.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700DEB0.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700E468, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700E708 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E4A8),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E530),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E668),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700E6C0),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

