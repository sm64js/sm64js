import * as Gbi from "../../include/gbi"

const dirt_seg3_lights_0302BD68 = Gbi.gdSPDefLights1(
	    0x3f, 0x19, 0x19,
	    0xff, 0x64, 0x64, 0x28, 0x28, 0x28
)

const dirt_seg3_lights_0302BD80 = Gbi.gdSPDefLights1(
	    0x19, 0x3f, 0x19,
	    0x64, 0xff, 0x64, 0x28, 0x28, 0x28
)

const dirt_seg3_lights_0302BD98 = Gbi.gdSPDefLights1(
	    0x19, 0x19, 0x3f,
	    0x64, 0x64, 0xff, 0x28, 0x28, 0x28
)

const dirt_seg3_lights_0302BDB0 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x19,
	    0xff, 0xff, 0x64, 0x28, 0x28, 0x28
)

const dirt_seg3_vertex_0302BDC8 = [
	{ pos: [ -101, -60, 0 ], flag: 0, tc: [ -130, 467 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 102, -60, 0 ], flag: 0, tc: [ 599, 467 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 0, 92, 0 ], flag: 0, tc: [ 234, -81 ], color: [ 0, 0, 127, 255 ] },
]

export const dirt_seg3_texture_0302BDF8 = []

export const dirt_seg3_dl_0302BFF8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, dirt_seg3_texture_0302BDF8),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 16 - 1),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302BDC8, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C028 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 4, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(dirt_seg3_dl_0302BFF8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

const dirt_seg3_vertex_0302C098 = [
	{ pos: [ -10, 0, 10 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 0 ] },
	{ pos: [ 10, 0, 10 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 0 ] },
	{ pos: [ 0, 0, -10 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 0 ] },
]

const dirt_seg3_vertex_0302C0C8 = [
	{ pos: [ -10, 10, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 10, 10, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 0, -10, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

const dirt_seg3_vertex_0302C0F8 = [
	{ pos: [ 0, -8, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 0 ] },
	{ pos: [ -32, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 0 ] },
	{ pos: [ 32, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 0 ] },
	{ pos: [ -52, 28, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -116, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -84, -52, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 52, 28, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 84, -52, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 116, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 0, 160, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const dirt_seg3_vertex_0302C198 = [
	{ pos: [ 0, -8, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ -32, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 32, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ -52, 28, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ -116, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ -84, -52, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 52, 28, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 84, -52, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 116, 80, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 0, 160, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

export const dirt_seg3_dl_0302C238 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C0F8, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  5,  3, 0x0,  6,  7,  0, 0x0),
	...Gbi.gsSP2Triangles( 2,  8,  6, 0x0,  1,  9,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  1, 0x0,  2,  6,  0, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C298 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD68.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD68.a, 2),
	Gbi.gsSPDisplayList(dirt_seg3_dl_0302C238),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C2B8 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD80.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD80.a, 2),
	Gbi.gsSPDisplayList(dirt_seg3_dl_0302C238),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C2D8 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD98.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD98.a, 2),
	Gbi.gsSPDisplayList(dirt_seg3_dl_0302C238),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C2F8 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BDB0.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BDB0.a, 2),
	Gbi.gsSPDisplayList(dirt_seg3_dl_0302C238),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C318 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C198, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  5,  3, 0x0,  6,  7,  0, 0x0),
	...Gbi.gsSP2Triangles( 2,  8,  6, 0x0,  1,  9,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  1, 0x0,  2,  6,  0, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C378 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD68.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD68.a, 2),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C098, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C3B0 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD80.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD80.a, 2),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C098, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C3E8 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BD98.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BD98.a, 2),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C098, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C420 = [
	Gbi.gsSPLight(dirt_seg3_lights_0302BDB0.l[0], 1),
	Gbi.gsSPLight(dirt_seg3_lights_0302BDB0.a, 2),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C098, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const dirt_seg3_dl_0302C458 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPVertex(dirt_seg3_vertex_0302C0C8, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

