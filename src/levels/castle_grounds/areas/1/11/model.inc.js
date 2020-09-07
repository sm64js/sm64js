import * as Gbi from "../../../../../include/gbi"

const castle_grounds_seg7_lights_0700C4C8 = Gbi.gdSPDefLights1(
	0x66, 0x00, 0x00,
	0xff, 0x00, 0x00, 0x28, 0x28, 0x28
)


const castle_grounds_seg7_lights_0700C4E0 = Gbi.gdSPDefLights1(
	0x66, 0x66, 0x66,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_vertex_0700C500 = [
	{ pos: [0, 0, 75], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [287, 0, 0], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, -74], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
]

const castle_grounds_seg7_vertex_0700C530 = [
	{ pos: [0, 0, 150], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [287, 0, 75], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [287, 0, -74], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, -149], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
]

const castle_grounds_seg7_vertex_0700C570 = [
	{ pos: [0, 0, 240], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [345, 0, 150], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [345, 0, -149], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, -239], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
]

const castle_grounds_seg7_vertex_0700C5B0 = [
	{ pos: [0, 0, 360], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [460, 0, 240], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [460, 0, -239], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, -359], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
]

const castle_grounds_seg7_vertex_0700C5F0 = [
	{ pos: [460, 0, -359], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, -479], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, 0], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, 480], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
	{ pos: [460, 0, 360], flag: 0, tc: [0, 0], color: [0, 127, 0, 255] },
]

const castle_grounds_seg7_vertex_0700C640 = [
	{ pos: [460, 0, 360], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [460, 0, -359], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
	{ pos: [0, 0, 0], flag: 0, tc: [0, 0], color: [0, 127, 0, 0] },
]

export const castle_grounds_seg7_dl_0700C670 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C500, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C6A8 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C530, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C6E8 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C570, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C728 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C5B0, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C768 = [
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4E0.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4E0.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C5F0, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 4, 0x0),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700C4C8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C640, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

