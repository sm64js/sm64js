//import {snow_09004000, } from "../../../../../textures/snow.js"

import * as Gbi from "../../../../../include/gbi"
import { snow_09004000 } from "../../../../../textures/snow"
const ccs_seg7_lights_0701FCD8 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccs_seg7_vertex_0701FCF0 = [
	{ pos: [ -7587, -5600, -6716 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7587, -5703, -6716 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7587, -5703, -6819 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7587, -5600, -6819 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
]

export const ccs_seg7_dl_0701FD30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FCD8.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FCD8.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701FCF0, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701FD78 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701FD30),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

