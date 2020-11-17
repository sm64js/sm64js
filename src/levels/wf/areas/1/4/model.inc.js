import * as Gbi from "../../../../../include/gbi"
const wf_seg7_vertex_07005568 = [
	{ pos: [ 1270, 2944, -772 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 1343, 2739, -844 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 1198, 2739, -699 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1459, 870 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1587, 1126 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1331, 1126 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1459, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1587, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3594, 1331, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1033, 2944, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1033, 2816, 256 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1033, 2688, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -824, 2944, -1017 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -727, 2816, -1254 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -824, 2688, -1017 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
]

export const wf_seg7_dl_07005658 = [
	Gbi.gsSPVertex(wf_seg7_vertex_07005568, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07005690 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPDisplayList(wf_seg7_dl_07005658),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

