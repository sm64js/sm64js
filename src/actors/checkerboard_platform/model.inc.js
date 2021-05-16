import * as Gbi from "../../include/gbi"


export const checkerboard_platform_seg8_texture_0800C840 = []
export const checkerboard_platform_seg8_texture_0800CC40 = []

const checkerboard_platform_seg8_lights_0800C828 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const checkerboard_platform_seg8_vertex_0800D440 = [
	{ pos: [ -255, -25, 154 ], flag: 0, tc: [ 1504, 480 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -255, 26, 154 ], flag: 0, tc: [ 1504, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -255, 26, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -255, -25, -153 ], flag: 0, tc: [ 0, 480 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 256, -25, -153 ], flag: 0, tc: [ 1504, 480 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, 26, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, -25, 154 ], flag: 0, tc: [ 0, 480 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 256, 26, -153 ], flag: 0, tc: [ 1504, 0 ], color: [ 127, 0, 0, 255 ] },
]

const checkerboard_platform_seg8_vertex_0800D4C0 = [
	{ pos: [ 256, -25, 154 ], flag: 0, tc: [ 2528, 992 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -255, -25, -153 ], flag: 0, tc: [ 0, -512 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 256, -25, -153 ], flag: 0, tc: [ 2528, -512 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 256, 26, -153 ], flag: 0, tc: [ 2528, -512 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 26, 154 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 256, 26, 154 ], flag: 0, tc: [ 2528, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, 26, -153 ], flag: 0, tc: [ 0, -512 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -255, -25, -153 ], flag: 0, tc: [ 2528, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -255, 26, -153 ], flag: 0, tc: [ 2528, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, 26, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, -25, -153 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 256, -25, 154 ], flag: 0, tc: [ 2528, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -255, 26, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -255, -25, 154 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 256, 26, 154 ], flag: 0, tc: [ 2528, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -255, -25, 154 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 129, 0, 255 ] },
]

export const checkerboard_platform_seg8_dl_0800D5C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, checkerboard_platform_seg8_texture_0800C840),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 32 - 1),
	Gbi.gsSPLight(checkerboard_platform_seg8_lights_0800C828.l[0], 1),
	Gbi.gsSPLight(checkerboard_platform_seg8_lights_0800C828.a, 2),
	Gbi.gsSPVertex(checkerboard_platform_seg8_vertex_0800D440, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const checkerboard_platform_seg8_dl_0800D618 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, checkerboard_platform_seg8_texture_0800CC40),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(checkerboard_platform_seg8_vertex_0800D4C0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const checkerboard_platform_seg8_dl_0800D680 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(checkerboard_platform_seg8_dl_0800D5C0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(checkerboard_platform_seg8_dl_0800D618),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

