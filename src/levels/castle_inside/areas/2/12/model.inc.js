import * as Gbi from "../../../../../include/gbi"
const inside_castle_seg7_lights_07051A38 = Gbi.gdSPDefLights1(
	    0x47, 0x3f, 0x17,
	    0xbf, 0xaa, 0x3f, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_07051A50 = [
	{ pos: [ 0, 2611, 7130 ], flag: 0, tc: [ 0, 0 ], color: [ 114, 0, 201, 128 ] },
	{ pos: [ 0, 2253, 7130 ], flag: 0, tc: [ 0, 0 ], color: [ 114, 0, 201, 128 ] },
	{ pos: [ -50, 2253, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 114, 0, 201, 128 ] },
	{ pos: [ -50, 2611, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 114, 0, 201, 128 ] },
	{ pos: [ -50, 2611, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 128 ] },
	{ pos: [ -50, 2253, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 128 ] },
	{ pos: [ -357, 2253, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 128 ] },
	{ pos: [ -357, 2611, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 128 ] },
	{ pos: [ -357, 2611, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 199, 128 ] },
	{ pos: [ -357, 2253, 7027 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 199, 128 ] },
	{ pos: [ -409, 2253, 7130 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 199, 128 ] },
	{ pos: [ -409, 2611, 7130 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 199, 128 ] },
]

export const inside_castle_seg7_dl_07051B10 = [
	Gbi.gsSPLight(inside_castle_seg7_lights_07051A38.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07051A38.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07051A50, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07051B60 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07051B10),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

