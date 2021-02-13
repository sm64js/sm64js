import * as Gbi from "../../../../../include/gbi"
import {
	inside_0900B000,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_07037C58 = Gbi.gdSPDefLights1(
	    0x37, 0x37, 0x37,
	    0xdd, 0xdd, 0xdd, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_07037C70 = [
	{ pos: [ 3422, 768, 1208 ], flag: 0, tc: [ 860, 578 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 4146, 358, 484 ], flag: 0, tc: [ 1346, 778 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3422, 358, 1208 ], flag: 0, tc: [ 778, 706 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3422, 768, -1667 ], flag: 0, tc: [ 860, 578 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3422, 358, -1667 ], flag: 0, tc: [ 778, 706 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 4146, 358, -943 ], flag: 0, tc: [ 1346, 778 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 4146, 768, -943 ], flag: 0, tc: [ 1428, 648 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3174, 768, -1791 ], flag: 0, tc: [ 666, 554 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 2355, 768, -1791 ], flag: 0, tc: [ 22, 474 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 2355, 358, -1791 ], flag: 0, tc: [ -58, 604 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3174, 358, -1791 ], flag: 0, tc: [ 584, 682 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 2355, 768, 1331 ], flag: 0, tc: [ 22, 474 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3174, 358, 1331 ], flag: 0, tc: [ 584, 682 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 2355, 358, 1331 ], flag: 0, tc: [ -58, 604 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 3174, 768, 1331 ], flag: 0, tc: [ 666, 554 ], color: [ 55, 55, 55, 255 ] },
	{ pos: [ 4146, 768, 484 ], flag: 0, tc: [ 1428, 648 ], color: [ 55, 55, 55, 255 ] },
]

export const inside_castle_seg7_dl_07037D70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_0900B000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07037C58.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07037C58.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07037C70, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07037DE8 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 100),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07037D70),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

