import * as Gbi from "../../../../../include/gbi"
import {
    generic_09000000} from "../../../../../textures/generic"

const ssl_seg7_lights_0700BAD8 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ssl_seg7_vertex_0700BAF0 = [
	{ pos: [ -1023, 0, 2048 ], flag: 0, tc: [ 0, -5142 ], color: [ 109, 0, 63, 255 ] },
	{ pos: [ -1535, 768, 2935 ], flag: 0, tc: [ 8144, 990 ], color: [ 109, 0, 63, 255 ] },
	{ pos: [ -1535, 0, 2935 ], flag: 0, tc: [ 8144, -5142 ], color: [ 109, 0, 63, 255 ] },
	{ pos: [ -1023, 768, 2048 ], flag: 0, tc: [ 0, 990 ], color: [ 109, 0, 63, 255 ] },
	{ pos: [ -1535, 0, 2935 ], flag: 0, tc: [ 0, -5142 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -1023, 768, 3822 ], flag: 0, tc: [ 8144, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -1023, 0, 3822 ], flag: 0, tc: [ 8144, -5142 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -1535, 768, 2935 ], flag: 0, tc: [ 0, 990 ], color: [ 109, 0, 193, 255 ] },
	{ pos: [ -1023, 0, 2048 ], flag: 0, tc: [ 8144, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1023, 256, 1024 ], flag: 0, tc: [ 0, 4054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1023, 768, 2048 ], flag: 0, tc: [ 8144, 8142 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1023, -255, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
]

export const ssl_seg7_dl_0700BBB0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, generic_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ssl_seg7_lights_0700BAD8.l[0], 1),
	Gbi.gsSPLight(ssl_seg7_lights_0700BAD8.a, 2),
	Gbi.gsSPVertex(ssl_seg7_vertex_0700BAF0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ssl_seg7_dl_0700BC18 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ssl_seg7_dl_0700BBB0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

