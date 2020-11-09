import * as Gbi from "../../../../../include/gbi"
const ddd_seg7_vertex_07005CB0 = [
	{ pos: [ 7322, -2746, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7322, -2746, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7680, -2746, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7014, -2746, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7322, -2746, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7322, -2746, -50 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 7014, -2746, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2149, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2149, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -1791, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2457, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2149, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2149, -50 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -2457, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

const ddd_seg7_vertex_07005D90 = [
	{ pos: [ 5478, -2746, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5478, -2746, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5786, -2746, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5786, -2746, -50 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5786, -2746, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5786, -2746, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 6144, -2746, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5988, 244, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5734, 497, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5734, 497, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5734, 497, -50 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5517, 715, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5517, 715, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 5734, 497, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

const ddd_seg7_vertex_07005E70 = [
	{ pos: [ 3123, -4505, -153 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -4505, 154 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -4197, 51 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -4197, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -4197, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -3839, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
	{ pos: [ 3123, -4197, -50 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 255 ] },
]

export const ddd_seg7_dl_07005EE0 = [
	Gbi.gsSPVertex(ddd_seg7_vertex_07005CB0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005D90, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPVertex(ddd_seg7_vertex_07005E70, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ddd_seg7_dl_07005F78 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 98),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(ddd_seg7_dl_07005EE0),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

