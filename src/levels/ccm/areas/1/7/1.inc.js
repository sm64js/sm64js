import * as Gbi from "../../../../../include/gbi"
import { snow_09008800, snow_09005000, snow_09008000 } from "../../../../../textures/snow"
const ccm_seg7_lights_0700EA00 = Gbi.gdSPDefLights1(
	0x7f, 0x7f, 0x7f,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700EA18 = Gbi.gdSPDefLights1(
	0x33, 0x33, 0x33,
	0x66, 0x66, 0x66, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700EA30 = Gbi.gdSPDefLights1(
	0x5d, 0x5d, 0x5d,
	0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700EA48 = [
	{ pos: [-116, 100, 541], flag: 0, tc: [-3130, 1874], color: [22, 122, 23, 255] },
	{ pos: [573, 100, -99], flag: 0, tc: [2, 1874], color: [22, 122, 23, 255] },
	{ pos: [44, 307, -669], flag: 0, tc: [2, -710], color: [22, 122, 23, 255] },
	{ pos: [-611, 307, 9], flag: 0, tc: [-3130, -540], color: [25, 122, 24, 255] },
	{ pos: [-116, 100, 541], flag: 0, tc: [-3130, 1874], color: [25, 122, 24, 255] },
	{ pos: [44, 307, -669], flag: 0, tc: [2, -710], color: [25, 122, 24, 255] },
	{ pos: [-176, 565, -440], flag: 0, tc: [-1424, 1602], color: [0, 127, 0, 255] },
	{ pos: [524, 565, -137], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [36, 565, -662], flag: 0, tc: [-1460, 990], color: [0, 127, 0, 255] },
	{ pos: [299, 565, 71], flag: 0, tc: [0, 1602], color: [0, 127, 0, 255] },
]

const ccm_seg7_vertex_0700EAE8 = [
	{ pos: [221, -511, 214], flag: 0, tc: [4566, 990], color: [86, 0, 93, 255] },
	{ pos: [289, -378, 151], flag: 0, tc: [5486, -338], color: [86, 0, 93, 255] },
	{ pos: [221, -255, 214], flag: 0, tc: [4566, -1566], color: [86, 0, 93, 255] },
	{ pos: [364, -378, 81], flag: 0, tc: [3442, 0], color: [0, 127, 0, 255] },
	{ pos: [219, -378, 76], flag: 0, tc: [2420, 990], color: [0, 127, 0, 255] },
	{ pos: [289, -378, 151], flag: 0, tc: [2420, 0], color: [0, 127, 0, 255] },
	{ pos: [294, -378, 6], flag: 0, tc: [3442, 990], color: [0, 127, 0, 255] },
	{ pos: [-115, -511, 527], flag: 0, tc: [0, 990], color: [86, 0, 92, 255] },
	{ pos: [109, -511, 318], flag: 0, tc: [3034, 990], color: [86, 0, 92, 255] },
	{ pos: [-115, 92, 527], flag: 0, tc: [0, -5040], color: [86, 0, 92, 255] },
	{ pos: [109, -255, 318], flag: 0, tc: [3034, -1566], color: [86, 0, 92, 255] },
	{ pos: [-115, 92, 527], flag: 0, tc: [0, -5040], color: [86, 0, 93, 255] },
	{ pos: [109, -255, 318], flag: 0, tc: [3034, -1566], color: [86, 0, 93, 255] },
	{ pos: [559, 92, -99], flag: 0, tc: [9166, -5040], color: [86, 0, 93, 255] },
	{ pos: [289, -275, 151], flag: 0, tc: [5486, -1360], color: [86, 0, 93, 255] },
]

const ccm_seg7_vertex_0700EBD8 = [
	{ pos: [36, -511, -662], flag: 0, tc: [-7694, 990], color: [93, 0, 170, 255] },
	{ pos: [36, 307, -662], flag: 0, tc: [-7694, -7186], color: [93, 0, 170, 255] },
	{ pos: [559, 92, -99], flag: 0, tc: [0, -5040], color: [93, 0, 170, 255] },
	{ pos: [289, -275, 151], flag: 0, tc: [5486, -1360], color: [86, 0, 92, 255] },
	{ pos: [364, -275, 81], flag: 0, tc: [6508, -1360], color: [86, 0, 92, 255] },
	{ pos: [559, 92, -99], flag: 0, tc: [9166, -5040], color: [86, 0, 92, 255] },
	{ pos: [559, 92, -99], flag: 0, tc: [9166, -5040], color: [86, 0, 93, 255] },
	{ pos: [364, -275, 81], flag: 0, tc: [6508, -1360], color: [86, 0, 93, 255] },
	{ pos: [559, -511, -99], flag: 0, tc: [9166, 990], color: [86, 0, 93, 255] },
	{ pos: [364, -378, 81], flag: 0, tc: [6508, -338], color: [86, 0, 93, 255] },
	{ pos: [364, -378, 81], flag: 0, tc: [6508, -338], color: [86, 0, 92, 255] },
	{ pos: [289, -378, 151], flag: 0, tc: [5486, -338], color: [86, 0, 92, 255] },
	{ pos: [221, -511, 214], flag: 0, tc: [4566, 990], color: [86, 0, 92, 255] },
	{ pos: [221, -511, 214], flag: 0, tc: [4566, 990], color: [86, 0, 93, 255] },
]

const ccm_seg7_vertex_0700ECB8 = [
	{ pos: [-115, -511, 527], flag: 0, tc: [0, 990], color: [163, 0, 86, 255] },
	{ pos: [-115, 92, 527], flag: 0, tc: [0, -5040], color: [163, 0, 86, 255] },
	{ pos: [-603, -511, 2], flag: 0, tc: [-7184, 990], color: [163, 0, 86, 255] },
	{ pos: [-603, 297, 2], flag: 0, tc: [-7184, -7084], color: [163, 0, 86, 255] },
	{ pos: [36, -511, -662], flag: 0, tc: [-7694, 990], color: [93, 0, 170, 255] },
	{ pos: [559, 92, -99], flag: 0, tc: [0, -5040], color: [93, 0, 170, 255] },
	{ pos: [559, -511, -99], flag: 0, tc: [0, 990], color: [93, 0, 170, 255] },
	{ pos: [-176, 565, -440], flag: 0, tc: [-7006, -3494], color: [163, 0, 85, 255] },
	{ pos: [-176, 307, -440], flag: 0, tc: [-7004, -916], color: [163, 0, 85, 255] },
	{ pos: [-10, 237, -258], flag: 0, tc: [-4546, -214], color: [163, 0, 85, 255] },
	{ pos: [524, 116, -137], flag: 0, tc: [3030, 990], color: [86, 0, 93, 255] },
	{ pos: [524, 565, -137], flag: 0, tc: [3030, -3494], color: [86, 0, 93, 255] },
	{ pos: [299, 116, 71], flag: 0, tc: [0, 990], color: [86, 0, 93, 255] },
	{ pos: [299, 565, 71], flag: 0, tc: [0, -3494], color: [86, 0, 93, 255] },
]

const ccm_seg7_vertex_0700ED98 = [
	{ pos: [36, 307, -662], flag: 0, tc: [-7176, -916], color: [93, 0, 170, 255] },
	{ pos: [524, 565, -137], flag: 0, tc: [0, -3494], color: [93, 0, 170, 255] },
	{ pos: [524, 116, -137], flag: 0, tc: [0, 990], color: [93, 0, 170, 255] },
	{ pos: [36, 565, -662], flag: 0, tc: [-7176, -3494], color: [93, 0, 170, 255] },
	{ pos: [299, 116, 71], flag: 0, tc: [0, 990], color: [164, 0, 86, 255] },
	{ pos: [299, 565, 71], flag: 0, tc: [0, -3494], color: [164, 0, 86, 255] },
	{ pos: [-10, 237, -258], flag: 0, tc: [-4546, -214], color: [164, 0, 86, 255] },
	{ pos: [299, 565, 71], flag: 0, tc: [0, -3494], color: [163, 0, 86, 255] },
	{ pos: [-176, 565, -440], flag: 0, tc: [-7006, -3494], color: [163, 0, 86, 255] },
	{ pos: [-10, 237, -258], flag: 0, tc: [-4546, -214], color: [163, 0, 86, 255] },
]

const ccm_seg7_vertex_0700EE38 = [
	{ pos: [109, -255, 318], flag: 0, tc: [0, 0], color: [0, 129, 0, 255] },
	{ pos: [39, -255, 243], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [221, -255, 214], flag: 0, tc: [1500, 0], color: [0, 129, 0, 255] },
	{ pos: [219, -378, 76], flag: 0, tc: [-1052, -338], color: [92, 0, 170, 255] },
	{ pos: [219, -275, 76], flag: 0, tc: [-1052, -1360], color: [92, 0, 170, 255] },
	{ pos: [289, -275, 151], flag: 0, tc: [0, -1360], color: [92, 0, 170, 255] },
	{ pos: [289, -275, 151], flag: 0, tc: [2420, 0], color: [0, 129, 0, 255] },
	{ pos: [219, -275, 76], flag: 0, tc: [2420, 990], color: [0, 129, 0, 255] },
	{ pos: [364, -275, 81], flag: 0, tc: [3442, 0], color: [0, 129, 0, 255] },
	{ pos: [294, -275, 6], flag: 0, tc: [3442, 990], color: [0, 129, 0, 255] },
	{ pos: [294, -378, 6], flag: 0, tc: [-1052, -338], color: [164, 0, 86, 255] },
	{ pos: [364, -275, 81], flag: 0, tc: [0, -1360], color: [164, 0, 86, 255] },
	{ pos: [294, -275, 6], flag: 0, tc: [-1052, -1360], color: [164, 0, 86, 255] },
	{ pos: [39, -255, 243], flag: 0, tc: [-1052, -1564], color: [92, 0, 170, 255] },
	{ pos: [109, -255, 318], flag: 0, tc: [0, -1564], color: [92, 0, 170, 255] },
	{ pos: [39, -511, 243], flag: 0, tc: [-1052, 990], color: [92, 0, 170, 255] },
]

const ccm_seg7_vertex_0700EF38 = [
	{ pos: [39, -255, 243], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [152, -255, 139], flag: 0, tc: [1500, 990], color: [0, 129, 0, 255] },
	{ pos: [221, -255, 214], flag: 0, tc: [1500, 0], color: [0, 129, 0, 255] },
	{ pos: [152, -255, 139], flag: 0, tc: [-1052, -1564], color: [163, 0, 85, 255] },
	{ pos: [152, -511, 139], flag: 0, tc: [-1052, 990], color: [163, 0, 85, 255] },
	{ pos: [221, -255, 214], flag: 0, tc: [0, -1564], color: [163, 0, 85, 255] },
]

const ccm_seg7_vertex_0700EF98 = [
	{ pos: [289, -378, 151], flag: 0, tc: [0, -338], color: [92, 0, 170, 255] },
	{ pos: [219, -378, 76], flag: 0, tc: [-1052, -338], color: [92, 0, 170, 255] },
	{ pos: [289, -275, 151], flag: 0, tc: [0, -1360], color: [92, 0, 170, 255] },
	{ pos: [294, -378, 6], flag: 0, tc: [-1052, -338], color: [164, 0, 86, 255] },
	{ pos: [364, -378, 81], flag: 0, tc: [0, -338], color: [164, 0, 86, 255] },
	{ pos: [364, -275, 81], flag: 0, tc: [0, -1360], color: [164, 0, 86, 255] },
	{ pos: [221, -511, 214], flag: 0, tc: [0, 990], color: [163, 0, 85, 255] },
	{ pos: [221, -255, 214], flag: 0, tc: [0, -1564], color: [163, 0, 85, 255] },
	{ pos: [152, -511, 139], flag: 0, tc: [-1052, 990], color: [163, 0, 85, 255] },
	{ pos: [39, -511, 243], flag: 0, tc: [-1052, 990], color: [92, 0, 170, 255] },
	{ pos: [109, -255, 318], flag: 0, tc: [0, -1564], color: [92, 0, 170, 255] },
	{ pos: [109, -511, 318], flag: 0, tc: [0, 990], color: [92, 0, 170, 255] },
]

const ccm_seg7_vertex_0700F058 = [
	{ pos: [173, -511, -439], flag: 0, tc: [0, -5654], color: [86, 0, 93, 255] },
	{ pos: [-314, -100, 13], flag: 0, tc: [3964, 1050], color: [86, 0, 93, 255] },
	{ pos: [-314, -511, 13], flag: 0, tc: [-132, 988], color: [86, 0, 93, 255] },
	{ pos: [452, -100, -139], flag: 0, tc: [6612, -3098], color: [0, 129, 0, 255] },
	{ pos: [-314, -100, 13], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [173, -100, -439], flag: 0, tc: [6612, 990], color: [0, 129, 0, 255] },
	{ pos: [-35, -100, 313], flag: 0, tc: [0, -3098], color: [0, 129, 0, 255] },
	{ pos: [452, -511, -139], flag: 0, tc: [0, 990], color: [164, 0, 86, 255] },
	{ pos: [452, -100, -139], flag: 0, tc: [4068, 990], color: [164, 0, 86, 255] },
	{ pos: [173, -100, -439], flag: 0, tc: [4068, -3098], color: [164, 0, 86, 255] },
	{ pos: [173, -511, -439], flag: 0, tc: [0, -3098], color: [164, 0, 86, 255] },
	{ pos: [-314, -511, 13], flag: 0, tc: [0, -3098], color: [92, 0, 170, 255] },
	{ pos: [-35, -100, 313], flag: 0, tc: [4068, 990], color: [92, 0, 170, 255] },
	{ pos: [-35, -511, 313], flag: 0, tc: [0, 990], color: [92, 0, 170, 255] },
	{ pos: [-314, -100, 13], flag: 0, tc: [4068, -3098], color: [92, 0, 170, 255] },
]

const ccm_seg7_vertex_0700F148 = [
	{ pos: [-314, -501, 13], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [452, -501, -139], flag: 0, tc: [6612, -3098], color: [0, 127, 0, 255] },
	{ pos: [173, -501, -439], flag: 0, tc: [6612, 990], color: [0, 127, 0, 255] },
	{ pos: [173, -511, -439], flag: 0, tc: [0, -5654], color: [86, 0, 93, 255] },
	{ pos: [173, -100, -439], flag: 0, tc: [4068, -5590], color: [86, 0, 93, 255] },
	{ pos: [-314, -100, 13], flag: 0, tc: [3964, 1050], color: [86, 0, 93, 255] },
	{ pos: [-35, -501, 313], flag: 0, tc: [0, -3098], color: [0, 127, 0, 255] },
]

export const ccm_seg7_dl_0700F1B8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA00.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA00.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EA48, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F210 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EAE8, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(8, 10, 9, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(12, 2, 13, 0x0, 2, 14, 13, 0x0),
	Gbi.gsSP1Triangle(14, 2, 1, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EBD8, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 7, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 8, 9, 13, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700ECB8, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 11, 13, 12, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700ED98, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA18.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA18.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EE38, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 7, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EF38, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA30.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA30.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700EF98, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F3B0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA18.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700EA18.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F058, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700F148, 7, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSP1Triangle(0, 6, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700F440 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F1B8),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F210),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700F3B0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

