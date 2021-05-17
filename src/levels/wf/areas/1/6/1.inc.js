import {grass_09008000, } from "../../../../../textures/grass.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07005F58 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_07005F70 = [
	{ pos: [ 179, 458, 900 ], flag: 0, tc: [ 0, 2008 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 458, 520 ], flag: 0, tc: [ 0, 3526 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 458, 520 ], flag: 0, tc: [ 1398, 3526 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, -88, -239 ], flag: 0, tc: [ 0, 6558 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ 179, -79, -620 ], flag: 0, tc: [ 0, 8080 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ -178, -88, -239 ], flag: 0, tc: [ 1398, 6558 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ -178, -79, -620 ], flag: 0, tc: [ 1398, 8080 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ 179, 640, 1280 ], flag: 0, tc: [ 0, 494 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 640, 900 ], flag: 0, tc: [ 1398, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 640, 1280 ], flag: 0, tc: [ 1398, 494 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 640, 900 ], flag: 0, tc: [ 0, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 640, 900 ], flag: 0, tc: [ 70, 262 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 458, 900 ], flag: 0, tc: [ 1502, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 640, 900 ], flag: 0, tc: [ 1502, 262 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 458, 900 ], flag: 0, tc: [ 70, 990 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_07006060 = [
	{ pos: [ 179, 275, 140 ], flag: 0, tc: [ 70, 1708 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 93, 140 ], flag: 0, tc: [ 70, 2436 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 93, 140 ], flag: 0, tc: [ 1502, 2436 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 458, 900 ], flag: 0, tc: [ 0, 2008 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 458, 520 ], flag: 0, tc: [ 1398, 3526 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 458, 900 ], flag: 0, tc: [ 1398, 2008 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 458, 520 ], flag: 0, tc: [ 70, 986 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 275, 520 ], flag: 0, tc: [ 1502, 1712 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 458, 520 ], flag: 0, tc: [ 1502, 986 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 275, 520 ], flag: 0, tc: [ 70, 1712 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 275, 520 ], flag: 0, tc: [ 0, 3524 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 275, 140 ], flag: 0, tc: [ 1398, 5044 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 275, 520 ], flag: 0, tc: [ 1398, 3524 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 275, 140 ], flag: 0, tc: [ 0, 5044 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 275, 140 ], flag: 0, tc: [ 1502, 1708 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_07006150 = [
	{ pos: [ 179, 93, 140 ], flag: 0, tc: [ 0, 5042 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 93, -239 ], flag: 0, tc: [ 1398, 6560 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -178, 93, 140 ], flag: 0, tc: [ 1398, 5042 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 93, -239 ], flag: 0, tc: [ 0, 6560 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 93, -239 ], flag: 0, tc: [ 70, 2432 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, -88, -239 ], flag: 0, tc: [ 1502, 3160 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, 93, -239 ], flag: 0, tc: [ 1502, 2432 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, -88, -239 ], flag: 0, tc: [ 70, 3160 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 275, 520 ], flag: 0, tc: [ 1980, 1626 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 458, 520 ], flag: 0, tc: [ 1982, 900 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 458, 900 ], flag: 0, tc: [ 462, 900 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 640, 900 ], flag: 0, tc: [ 464, 172 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 640, 1280 ], flag: 0, tc: [ -1052, 172 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -178, -587, -1279 ], flag: 0, tc: [ 1398, 2234 ], color: [ 0, 104, 185, 255 ] },
	{ pos: [ -178, -267, -810 ], flag: 0, tc: [ 1398, 0 ], color: [ 0, 104, 185, 255 ] },
	{ pos: [ 179, -267, -810 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 104, 185, 255 ] },
]

const wf_seg7_vertex_07006250 = [
	{ pos: [ 179, 93, 140 ], flag: 0, tc: [ 3496, 2354 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 275, 140 ], flag: 0, tc: [ 3498, 1626 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 275, 520 ], flag: 0, tc: [ 1980, 1626 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -88, -239 ], flag: 0, tc: [ 5012, 3082 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 93, -239 ], flag: 0, tc: [ 5014, 2354 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -79, -620 ], flag: 0, tc: [ 6534, 3046 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -271, -620 ], flag: 0, tc: [ 6534, 3812 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -271, -620 ], flag: 0, tc: [ 70, 3886 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, -271, -620 ], flag: 0, tc: [ 1502, 3884 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, -79, -620 ], flag: 0, tc: [ 70, 3118 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -178, -79, -620 ], flag: 0, tc: [ 1502, 3118 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, -588, -1279 ], flag: 0, tc: [ 0, 2236 ], color: [ 0, 104, 185, 255 ] },
	{ pos: [ -178, -587, -1279 ], flag: 0, tc: [ 1398, 2234 ], color: [ 0, 104, 185, 255 ] },
	{ pos: [ 179, -267, -810 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 104, 185, 255 ] },
]

const wf_seg7_vertex_07006330 = [
	{ pos: [ 179, -271, -620 ], flag: 0, tc: [ 0, 8080 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ 179, -267, -810 ], flag: 0, tc: [ 0, 8840 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ -178, -267, -810 ], flag: 0, tc: [ 1398, 8840 ], color: [ 0, 126, 2, 255 ] },
	{ pos: [ 179, -267, -810 ], flag: 0, tc: [ 7294, 3794 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -271, -620 ], flag: 0, tc: [ 6534, 3812 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, -588, -1279 ], flag: 0, tc: [ 9166, 5076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -178, -271, -620 ], flag: 0, tc: [ 1398, 8080 ], color: [ 0, 126, 2, 255 ] },
]

export const wf_seg7_dl_070063A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07005F58.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07005F58.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_07005F70, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07006060, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07006150, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07006250, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
	...Gbi.gsSP2Triangles( 5,  3,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07006330, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_070064E8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_070063A0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

