import * as Gbi from "../../../../../include/gbi"
import { generic_09009000 } from "../../../../../textures/generic"

const bob_seg7_lights_0700DE30 = Gbi.gdSPDefLights1(
	0x33, 0x33, 0x33,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bob_seg7_vertex_0700DE48 = [
	{ pos: [1902, 3835, -5506], flag: 0, tc: [0, 990], color: [177, 55, 174, 255] },
	{ pos: [1814, 4191, -5455], flag: 0, tc: [240, 44], color: [174, 168, 218, 255] },
	{ pos: [1902, 4088, -5506], flag: 0, tc: [0, 316], color: [135, 227, 20, 255] },
	{ pos: [1697, 4091, -5861], flag: 0, tc: [172, -30], color: [161, 193, 54, 255] },
	{ pos: [1814, 4191, -5455], flag: 0, tc: [444, 1056], color: [174, 168, 218, 255] },
	{ pos: [1609, 4194, -5810], flag: 0, tc: [444, 0], color: [228, 134, 15, 255] },
	{ pos: [1902, 4088, -5506], flag: 0, tc: [172, 1058], color: [135, 227, 20, 255] },
	{ pos: [1636, 4191, -5353], flag: 0, tc: [990, 1056], color: [242, 157, 179, 255] },
	{ pos: [1431, 4194, -5708], flag: 0, tc: [990, 0], color: [55, 147, 223, 255] },
	{ pos: [1548, 4088, -5302], flag: 0, tc: [1262, 1058], color: [40, 205, 148, 255] },
	{ pos: [1343, 4091, -5657], flag: 0, tc: [1262, -30], color: [106, 225, 195, 255] },
	{ pos: [1343, 4091, -5657], flag: 0, tc: [0, 0], color: [106, 225, 195, 255] },
	{ pos: [1548, 4088, -5302], flag: 0, tc: [1604, -22], color: [40, 205, 148, 255] },
	{ pos: [1548, 3835, -5302], flag: 0, tc: [1604, 990], color: [63, 51, 160, 255] },
	{ pos: [1343, 3835, -5657], flag: 0, tc: [0, 990], color: [49, 113, 228, 255] },
]

const bob_seg7_vertex_0700DF38 = [
	{ pos: [1697, 3835, -5861], flag: 0, tc: [0, 990], color: [158, 56, 56, 255] },
	{ pos: [1902, 3835, -5506], flag: 0, tc: [1604, 990], color: [177, 55, 174, 255] },
	{ pos: [1902, 4088, -5506], flag: 0, tc: [1604, -22], color: [135, 227, 20, 255] },
	{ pos: [1902, 3835, -5506], flag: 0, tc: [0, 990], color: [177, 55, 174, 255] },
	{ pos: [1548, 4088, -5302], flag: 0, tc: [1058, 316], color: [40, 205, 148, 255] },
	{ pos: [1636, 4191, -5353], flag: 0, tc: [786, 44], color: [242, 157, 179, 255] },
	{ pos: [1814, 4191, -5455], flag: 0, tc: [240, 44], color: [174, 168, 218, 255] },
	{ pos: [1548, 3835, -5302], flag: 0, tc: [1058, 990], color: [63, 51, 160, 255] },
	{ pos: [1343, 3835, -5657], flag: 0, tc: [1058, 1056], color: [49, 113, 228, 255] },
	{ pos: [1902, 3835, -5506], flag: 0, tc: [0, 0], color: [177, 55, 174, 255] },
	{ pos: [1697, 3835, -5861], flag: 0, tc: [0, 1056], color: [158, 56, 56, 255] },
	{ pos: [1548, 3835, -5302], flag: 0, tc: [1058, 0], color: [63, 51, 160, 255] },
	{ pos: [1697, 4091, -5861], flag: 0, tc: [0, 0], color: [161, 193, 54, 255] },
	{ pos: [240, 2683, -5544], flag: 0, tc: [3748, 2264], color: [49, 113, 228, 255] },
	{ pos: [445, 2683, -5189], flag: 0, tc: [3748, 1174], color: [63, 51, 160, 255] },
	{ pos: [801, 2683, -5393], flag: 0, tc: [2658, 1170], color: [160, 52, 192, 255] },
]

const bob_seg7_vertex_0700E038 = [
	{ pos: [596, 2939, -5748], flag: 0, tc: [2862, -1214], color: [155, 208, 58, 255] },
	{ pos: [803, 2940, -5394], flag: 0, tc: [2854, -122], color: [137, 213, 0, 255] },
	{ pos: [712, 3042, -5342], flag: 0, tc: [3136, -126], color: [175, 167, 218, 255] },
	{ pos: [507, 3042, -5697], flag: 0, tc: [3136, -1216], color: [229, 134, 16, 255] },
	{ pos: [534, 3042, -5240], flag: 0, tc: [3680, -128], color: [242, 157, 179, 255] },
	{ pos: [329, 3042, -5595], flag: 0, tc: [3680, -1218], color: [55, 147, 224, 255] },
	{ pos: [445, 2939, -5189], flag: 0, tc: [3954, -126], color: [40, 204, 148, 255] },
	{ pos: [240, 2939, -5544], flag: 0, tc: [3954, -1218], color: [106, 224, 195, 255] },
	{ pos: [240, 2939, -5544], flag: 0, tc: [-1842, 4564], color: [106, 224, 195, 255] },
	{ pos: [445, 2683, -5189], flag: 0, tc: [-206, 5586], color: [63, 51, 160, 255] },
	{ pos: [240, 2683, -5544], flag: 0, tc: [-1842, 5586], color: [49, 113, 228, 255] },
	{ pos: [445, 2939, -5189], flag: 0, tc: [-206, 4564], color: [40, 204, 148, 255] },
	{ pos: [801, 2683, -5393], flag: 0, tc: [2658, 4054], color: [160, 52, 192, 255] },
	{ pos: [712, 3042, -5342], flag: 0, tc: [2932, 3100], color: [175, 167, 218, 255] },
	{ pos: [803, 2940, -5394], flag: 0, tc: [2650, 3372], color: [137, 213, 0, 255] },
]

const bob_seg7_vertex_0700E128 = [
	{ pos: [240, 2683, -5544], flag: 0, tc: [3748, 2264], color: [49, 113, 228, 255] },
	{ pos: [801, 2683, -5393], flag: 0, tc: [2658, 1170], color: [160, 52, 192, 255] },
	{ pos: [596, 2683, -5748], flag: 0, tc: [2658, 2262], color: [179, 89, 44, 255] },
	{ pos: [596, 2683, -5748], flag: 0, tc: [-1836, 5586], color: [179, 89, 44, 255] },
	{ pos: [801, 2683, -5393], flag: 0, tc: [-200, 5586], color: [160, 52, 192, 255] },
	{ pos: [596, 2939, -5748], flag: 0, tc: [-1836, 4564], color: [155, 208, 58, 255] },
	{ pos: [803, 2940, -5394], flag: 0, tc: [-200, 4564], color: [137, 213, 0, 255] },
	{ pos: [801, 2683, -5393], flag: 0, tc: [2658, 4054], color: [160, 52, 192, 255] },
	{ pos: [445, 2683, -5189], flag: 0, tc: [3748, 4054], color: [63, 51, 160, 255] },
	{ pos: [445, 2939, -5189], flag: 0, tc: [3748, 3372], color: [40, 204, 148, 255] },
	{ pos: [534, 3042, -5240], flag: 0, tc: [3476, 3100], color: [242, 157, 179, 255] },
	{ pos: [712, 3042, -5342], flag: 0, tc: [2932, 3100], color: [175, 167, 218, 255] },
]

export const bob_seg7_dl_0700E1E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, generic_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bob_seg7_lights_0700DE30.l[0], 1),
	Gbi.gsSPLight(bob_seg7_lights_0700DE30.a, 2),
	Gbi.gsSPVertex(bob_seg7_vertex_0700DE48, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 5, 4, 7, 0x0),
	...Gbi.gsSP2Triangles(5, 7, 8, 0x0, 8, 7, 9, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700DF38, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 6, 0x0, 3, 7, 4, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 11, 9, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700E038, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 2, 4, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 6, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 11, 9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700E128, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 6, 5, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 7, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bob_seg7_dl_0700E338 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(160, 160, 160, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bob_seg7_dl_0700E1E8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

