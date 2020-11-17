import {mountain_09005000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700A1B0 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700A1C8 = [
	{ pos: [ 80, -2047, 3563 ], flag: 0, tc: [ 3648, -852 ], color: [ 20, 0, 131, 255 ] },
	{ pos: [ -1737, -2149, 3260 ], flag: 0, tc: [ 0, -2 ], color: [ 19, 213, 139, 255 ] },
	{ pos: [ -1737, -2047, 3260 ], flag: 0, tc: [ 0, -852 ], color: [ 20, 0, 131, 255 ] },
	{ pos: [ -1771, -2047, 3462 ], flag: 0, tc: [ 0, -852 ], color: [ 236, 0, 125, 255 ] },
	{ pos: [ -1771, -2149, 3462 ], flag: 0, tc: [ 0, -2 ], color: [ 241, 170, 91, 255 ] },
	{ pos: [ 46, -2149, 3765 ], flag: 0, tc: [ 3648, -2 ], color: [ 237, 213, 117, 255 ] },
	{ pos: [ 46, -2047, 3765 ], flag: 0, tc: [ 3648, -852 ], color: [ 236, 0, 125, 255 ] },
	{ pos: [ 63, -2201, 3664 ], flag: 0, tc: [ 3648, 990 ], color: [ 253, 131, 20, 255 ] },
	{ pos: [ -1754, -2201, 3361 ], flag: 0, tc: [ 0, 990 ], color: [ 3, 131, 236, 255 ] },
	{ pos: [ 80, -2149, 3563 ], flag: 0, tc: [ 3648, -2 ], color: [ 15, 170, 165, 255 ] },
]

export const ttm_seg7_dl_0700A268 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A1B0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700A1B0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700A1C8, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 7,  4,  8, 0x0,  9,  8,  1, 0x0),
	...Gbi.gsSP2Triangles( 9,  7,  8, 0x0,  0,  9,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_0700A2E0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_0700A268),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

