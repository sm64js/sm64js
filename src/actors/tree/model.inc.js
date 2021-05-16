import * as Gbi from "../../include/gbi"

export const tree_seg3_texture_0302DE28 = []

export const tree_seg3_texture_0302EE28 = []

export const tree_seg3_texture_0302FF60 = []

export const tree_seg3_texture_03031048 = []

export const tree_seg3_texture_03032218 = []

const tree_seg3_lights_0302DE10 = Gbi.gdSPDefLights1(
	0x3f, 0x3f, 0x3f,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const tree_seg3_vertex_0302FE28 = [
	{ pos: [-356, -9, 0], flag: 0, tc: [-796, 2012], color: [255, 255, 255, 255] },
	{ pos: [0, -9, 0], flag: 0, tc: [990, 2012], color: [255, 255, 255, 255] },
	{ pos: [0, 800, 0], flag: 0, tc: [990, -712], color: [255, 255, 255, 255] },
]

const tree_seg3_vertex_0302FE58 = [
	{ pos: [0, -9, 0], flag: 0, tc: [0, 2012], color: [255, 255, 255, 255] },
	{ pos: [358, -9, 0], flag: 0, tc: [1756, 2012], color: [255, 255, 255, 255] },
	{ pos: [0, 800, 0], flag: 0, tc: [0, -712], color: [255, 255, 255, 255] },
]

export const tree_seg3_dl_0302FE88 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_0302DE28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(tree_seg3_vertex_0302FE28, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const tree_seg3_dl_0302FEB8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_0302EE28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(tree_seg3_vertex_0302FE58, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const tree_seg3_dl_0302FEE8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(tree_seg3_dl_0302FE88),
	Gbi.gsSPDisplayList(tree_seg3_dl_0302FEB8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

const tree_seg3_vertex_03030F60 = [
	{ pos: [128, 512, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 512, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [128, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
]

export const tree_seg3_dl_03030FA0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_0302FF60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.l[0], 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.a, 2),
	Gbi.gsSPVertex(tree_seg3_vertex_03030F60, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

const tree_seg3_vertex_03032048 = [
	{ pos: [128, 512, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 512, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [128, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
]

export const tree_seg3_dl_03032088 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_03031048),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.l[0], 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.a, 2),
	Gbi.gsSPVertex(tree_seg3_vertex_03032048, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

const tree_seg3_vertex_03032130 = [
	{ pos: [128, 512, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 512, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [-127, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [128, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
]

export const tree_seg3_dl_03032170 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_0302FF60),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.l[0], 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.a, 2),
	Gbi.gsSPVertex(tree_seg3_vertex_03032130, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

const tree_seg3_vertex_03033218 = [
	{ pos: [170, 512, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
	{ pos: [-169, 512, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [-169, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [170, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
]

export const tree_seg3_dl_03033258 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, tree_seg3_texture_03032218),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.l[0], 1),
	Gbi.gsSPLight(tree_seg3_lights_0302DE10.a, 2),
	Gbi.gsSPVertex(tree_seg3_vertex_03033218, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

