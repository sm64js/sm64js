import * as Gbi from "../../../../../include/gbi"
import { generic_09008800 } from "../../../../../textures/generic"
import { bob_seg7_texture_07000000 } from "../../../textures.inc"

const bob_seg7_vertex_0700A4E0 = [
	{ pos: [-993, 1690, -2310], flag: 0, tc: [22656, 0], color: [255, 255, 255, 255] },
	{ pos: [-2262, 1690, -4824], flag: 0, tc: [172, 0], color: [255, 255, 255, 255] },
	{ pos: [-2262, 1075, -4824], flag: 0, tc: [172, 950], color: [255, 255, 255, 255] },
	{ pos: [-993, 1075, -2310], flag: 0, tc: [22656, 950], color: [255, 255, 255, 255] },
	{ pos: [-3128, 1690, -6537], flag: 0, tc: [-11272, 0], color: [255, 255, 255, 255] },
	{ pos: [-3128, 1075, -6537], flag: 0, tc: [-11272, 950], color: [255, 255, 255, 255] },
	{ pos: [-2436, 1075, -5167], flag: 0, tc: [990, 950], color: [255, 255, 255, 255] },
	{ pos: [-2436, 1690, -5167], flag: 0, tc: [990, 0], color: [255, 255, 255, 255] },
]

const bob_seg7_vertex_0700A560 = [
	{ pos: [-3071, 768, 1536], flag: 0, tc: [6100, 990], color: [255, 255, 255, 255] },
	{ pos: [-3071, 1024, 3072], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
	{ pos: [-3071, 768, 3072], flag: 0, tc: [0, 990], color: [255, 255, 255, 255] },
	{ pos: [768, 870, 5847], flag: 0, tc: [990, 0], color: [255, 255, 255, 255] },
	{ pos: [1751, 768, 5335], flag: 0, tc: [-10434, 990], color: [255, 255, 255, 255] },
	{ pos: [768, 768, 5847], flag: 0, tc: [990, 990], color: [255, 255, 255, 255] },
	{ pos: [1751, 870, 5335], flag: 0, tc: [-10434, 0], color: [255, 255, 255, 255] },
	{ pos: [1751, 870, 5335], flag: 0, tc: [808, 0], color: [255, 255, 255, 255] },
	{ pos: [2263, 768, 4864], flag: 0, tc: [-6418, 990], color: [255, 255, 255, 255] },
	{ pos: [1751, 768, 5335], flag: 0, tc: [808, 990], color: [255, 255, 255, 255] },
	{ pos: [2263, 870, 4864], flag: 0, tc: [-6418, 0], color: [255, 255, 255, 255] },
	{ pos: [2263, 870, 4864], flag: 0, tc: [3800, 0], color: [255, 255, 255, 255] },
	{ pos: [2263, 870, 4480], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
	{ pos: [2262, 768, 4480], flag: 0, tc: [0, 990], color: [255, 255, 255, 255] },
	{ pos: [2263, 768, 4864], flag: 0, tc: [3800, 990], color: [255, 255, 255, 255] },
]

const bob_seg7_vertex_0700A650 = [
	{ pos: [3078, 1741, -756], flag: 0, tc: [990, 990], color: [255, 255, 255, 255] },
	{ pos: [3078, 1869, -756], flag: 0, tc: [990, 0], color: [255, 255, 255, 255] },
	{ pos: [6271, 2064, -2677], flag: 0, tc: [-23536, 0], color: [255, 255, 255, 255] },
	{ pos: [-3071, 768, 1536], flag: 0, tc: [6100, 990], color: [255, 255, 255, 255] },
	{ pos: [-3071, 1024, 1536], flag: 0, tc: [6100, 0], color: [255, 255, 255, 255] },
	{ pos: [-3071, 1024, 3072], flag: 0, tc: [0, 0], color: [255, 255, 255, 255] },
	{ pos: [-4095, 1024, 4096], flag: 0, tc: [990, 0], color: [255, 255, 255, 255] },
	{ pos: [-7167, 1024, 4096], flag: 0, tc: [-11272, 0], color: [255, 255, 255, 255] },
	{ pos: [-7167, 768, 4096], flag: 0, tc: [-11274, 990], color: [255, 255, 255, 255] },
	{ pos: [-4095, 768, 4096], flag: 0, tc: [988, 990], color: [255, 255, 255, 255] },
	{ pos: [-4095, 768, 4096], flag: 0, tc: [318, 996], color: [255, 255, 255, 255] },
	{ pos: [-3071, 768, 3072], flag: 0, tc: [6100, 990], color: [255, 255, 255, 255] },
	{ pos: [-3071, 1024, 3072], flag: 0, tc: [6100, 0], color: [255, 255, 255, 255] },
	{ pos: [-4095, 1024, 4096], flag: 0, tc: [318, -24], color: [255, 255, 255, 255] },
	{ pos: [6270, 1936, -2677], flag: 0, tc: [-23536, 990], color: [255, 255, 255, 255] },
]

const bob_seg7_vertex_0700A740 = [
	{ pos: [6271, 2064, -2677], flag: 0, tc: [11912, 0], color: [255, 255, 255, 255] },
	{ pos: [8093, 2064, -5982], flag: 0, tc: [-18564, 0], color: [255, 255, 255, 255] },
	{ pos: [6270, 1936, -2677], flag: 0, tc: [11890, 990], color: [255, 255, 255, 255] },
	{ pos: [8093, 1936, -5982], flag: 0, tc: [-18588, 990], color: [255, 255, 255, 255] },
	{ pos: [-1521, 891, 2034], flag: 0, tc: [-8206, 0], color: [255, 255, 255, 255] },
	{ pos: [1288, 768, 3820], flag: 0, tc: [19480, 990], color: [255, 255, 255, 255] },
	{ pos: [1288, 891, 3820], flag: 0, tc: [19480, 0], color: [255, 255, 255, 255] },
	{ pos: [-1521, 768, 2034], flag: 0, tc: [-8206, 990], color: [255, 255, 255, 255] },
	{ pos: [768, 768, 7168], flag: 0, tc: [990, 990], color: [255, 255, 255, 255] },
	{ pos: [768, 870, 7168], flag: 0, tc: [990, 0], color: [255, 255, 255, 255] },
	{ pos: [768, 870, 5847], flag: 0, tc: [-12192, 0], color: [255, 255, 255, 255] },
	{ pos: [768, 768, 5847], flag: 0, tc: [-12192, 990], color: [255, 255, 255, 255] },
]

export const bob_seg7_dl_0700A800 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, generic_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bob_seg7_vertex_0700A4E0, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 4, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bob_seg7_dl_0700A848 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bob_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bob_seg7_vertex_0700A560, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700A650, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 0, 2, 0x0),
	Gbi.gsSPVertex(bob_seg7_vertex_0700A740, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bob_seg7_dl_0700A920 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(160, 160, 160, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bob_seg7_dl_0700A800),
	Gbi.gsSPDisplayList(bob_seg7_dl_0700A848),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

