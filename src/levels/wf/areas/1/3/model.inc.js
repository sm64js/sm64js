import * as Gbi from "../../../../../include/gbi"
const wf_seg7_vertex_07005328 = [
	{ pos: [ 3840, 1075, -1458 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3661, 1075, -1100 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 4019, 1075, -1100 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2278, 730, 1953 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2163, 641, 1617 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2394, 641, 1617 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3392, 1959, 979 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3277, 1832, 1341 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3533, 1832, 1341 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3277, 1364, 2669 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3533, 1364, 2669 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3392, 1492, 2307 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3840, 1075, -2482 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3661, 1075, -2124 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 4019, 1075, -2124 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
]

const wf_seg7_vertex_07005418 = [
	{ pos: [ 3533, 2304, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3533, 2304, -409 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3277, 2304, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2277, 1024, 3379 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2149, 1024, 3123 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -2405, 1024, 3123 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1279, 1024, 3482 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1279, 1024, 3686 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ -1074, 1024, 3584 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3277, 1165, -2940 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3405, 1309, -2729 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
	{ pos: [ 3533, 1165, -2940 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 0, 128 ] },
]

export const wf_seg7_dl_070054D8 = [
	Gbi.gsSPVertex(wf_seg7_vertex_07005328, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07005418, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07005538 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPDisplayList(wf_seg7_dl_070054D8),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

