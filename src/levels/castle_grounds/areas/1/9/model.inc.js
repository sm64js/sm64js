import * as Gbi from "./../../../../../include/gbi"
import { outside_09004800, outside_09001000 } from "../../../../../textures/outside"

const castle_grounds_seg7_lights_0700BCD8 = Gbi.gdSPDefLights1(
	0x3d, 0x3d, 0x44,
	0x99, 0x99, 0xac, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_lights_0700BCF0 = Gbi.gdSPDefLights1(
	0x58, 0x58, 0x5a,
	0xdc, 0xdc, 0xe3, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_lights_0700BD08 = Gbi.gdSPDefLights1(
	0x66, 0x66, 0x66,
	0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_lights_0700BD20 = Gbi.gdSPDefLights1(
	0x4e, 0x4e, 0x53,
	0xc4, 0xc4, 0xd0, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_lights_0700BD38 = Gbi.gdSPDefLights1(
	0x45, 0x45, 0x4b,
	0xad, 0xad, 0xbc, 0x28, 0x28, 0x28
)

const castle_grounds_seg7_vertex_0700BD50 = [
	{ pos: [2283, -422, 2072], flag: 0, tc: [6, 1824], color: [0, 127, 0, 255] },
	{ pos: [2485, -422, 2072], flag: 0, tc: [206, 2104], color: [0, 127, 0, 255] },
	{ pos: [2485, -422, 1849], flag: 0, tc: [300, 1608], color: [0, 127, 0, 255] },
	{ pos: [2283, -422, 1849], flag: 0, tc: [100, 1324], color: [0, 127, 0, 255] },
	{ pos: [2485, 89, 2072], flag: 0, tc: [0, 1996], color: [0, 0, 129, 255] },
	{ pos: [2283, -422, 2072], flag: 0, tc: [432, 648], color: [0, 0, 129, 255] },
	{ pos: [2283, 89, 2072], flag: 0, tc: [0, 648], color: [0, 0, 129, 255] },
	{ pos: [2485, -422, 2072], flag: 0, tc: [432, 1996], color: [0, 0, 129, 255] },
	{ pos: [2485, 89, 1849], flag: 0, tc: [0, 2012], color: [129, 0, 0, 255] },
	{ pos: [2485, -422, 2072], flag: 0, tc: [820, 536], color: [129, 0, 0, 255] },
	{ pos: [2485, 89, 2072], flag: 0, tc: [0, 536], color: [129, 0, 0, 255] },
	{ pos: [2485, -422, 1849], flag: 0, tc: [820, 2012], color: [129, 0, 0, 255] },
]

const castle_grounds_seg7_vertex_0700BE10 = [
	{ pos: [2283, 89, 1849], flag: 0, tc: [0, 1996], color: [0, 0, 127, 255] },
	{ pos: [2485, -422, 1849], flag: 0, tc: [536, 648], color: [0, 0, 127, 255] },
	{ pos: [2485, 89, 1849], flag: 0, tc: [0, 648], color: [0, 0, 127, 255] },
	{ pos: [2283, -422, 1849], flag: 0, tc: [536, 1996], color: [0, 0, 127, 255] },
	{ pos: [2283, 89, 2072], flag: 0, tc: [0, 2012], color: [127, 0, 0, 255] },
	{ pos: [2283, -422, 1849], flag: 0, tc: [332, -232], color: [127, 0, 0, 255] },
	{ pos: [2283, 89, 1849], flag: 0, tc: [0, -204], color: [127, 0, 0, 255] },
	{ pos: [2283, -422, 2072], flag: 0, tc: [332, 1984], color: [127, 0, 0, 255] },
]

const castle_grounds_seg7_vertex_0700BE90 = [
	{ pos: [2640, 89, 2223], flag: 0, tc: [2012, -1054], color: [0, 127, 0, 255] },
	{ pos: [2485, 89, 2072], flag: 0, tc: [1404, -440], color: [0, 127, 0, 255] },
	{ pos: [2283, 89, 2072], flag: 0, tc: [1400, 368], color: [0, 127, 0, 255] },
	{ pos: [2485, 89, 1849], flag: 0, tc: [516, -446], color: [0, 127, 0, 255] },
	{ pos: [2637, 89, 1711], flag: 0, tc: [0, -1054], color: [0, 127, 0, 255] },
	{ pos: [2128, 89, 2226], flag: 0, tc: [2012, 990], color: [0, 127, 0, 255] },
	{ pos: [2283, 89, 1849], flag: 0, tc: [512, 360], color: [0, 127, 0, 255] },
	{ pos: [2125, 89, 1714], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [2708, -10, 1639], flag: 0, tc: [4588, 582], color: [102, 74, 0, 255] },
	{ pos: [2637, 89, 1711], flag: 0, tc: [4136, 0], color: [102, 74, 0, 255] },
	{ pos: [2757, -72, 2338], flag: 0, tc: [108, 964], color: [102, 74, 0, 255] },
	{ pos: [2640, 89, 2223], flag: 0, tc: [856, 0], color: [102, 74, 0, 255] },
]

const castle_grounds_seg7_vertex_0700BF50 = [
	{ pos: [2102, 58, 1692], flag: 0, tc: [3524, 158], color: [0, 73, 153, 255] },
	{ pos: [2125, 89, 1714], flag: 0, tc: [3376, 0], color: [0, 73, 153, 255] },
	{ pos: [2637, 89, 1711], flag: 0, tc: [0, 0], color: [0, 73, 153, 255] },
	{ pos: [2102, 58, 1692], flag: 0, tc: [3524, 158], color: [0, 74, 154, 255] },
	{ pos: [2637, 89, 1711], flag: 0, tc: [0, 0], color: [0, 74, 154, 255] },
	{ pos: [2708, -10, 1639], flag: 0, tc: [-504, 582], color: [0, 74, 154, 255] },
]

const castle_grounds_seg7_vertex_0700BFB0 = [
	{ pos: [2076, 15, 2280], flag: 0, tc: [3540, 424], color: [154, 75, 0, 255] },
	{ pos: [2125, 89, 1714], flag: 0, tc: [-88, 0], color: [154, 75, 0, 255] },
	{ pos: [2102, 58, 1692], flag: 0, tc: [-232, 158], color: [154, 75, 0, 255] },
	{ pos: [2076, 15, 2280], flag: 0, tc: [3540, 424], color: [153, 73, 0, 255] },
	{ pos: [2128, 89, 2226], flag: 0, tc: [3200, 0], color: [153, 73, 0, 255] },
	{ pos: [2125, 89, 1714], flag: 0, tc: [-88, 0], color: [153, 73, 0, 255] },
]

const castle_grounds_seg7_vertex_0700C010 = [
	{ pos: [2757, -72, 2338], flag: 0, tc: [2752, 964], color: [0, 74, 103, 255] },
	{ pos: [2640, 89, 2223], flag: 0, tc: [2012, 0], color: [0, 74, 103, 255] },
	{ pos: [2128, 89, 2226], flag: 0, tc: [-1240, -30], color: [0, 74, 103, 255] },
	{ pos: [2757, -72, 2338], flag: 0, tc: [2752, 964], color: [0, 74, 102, 255] },
	{ pos: [2128, 89, 2226], flag: 0, tc: [-1240, -30], color: [0, 74, 102, 255] },
	{ pos: [2076, 15, 2280], flag: 0, tc: [-1576, 424], color: [0, 74, 102, 255] },
]

export const castle_grounds_seg7_dl_0700C070 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCD8.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCD8.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BD50, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 11, 9, 0x0),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCF0.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCF0.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BE10, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 7, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C110 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD08.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD08.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BE90, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 3, 0x0, 0, 2, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 4, 7, 0x0, 6, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(2, 6, 7, 0x0, 5, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 9, 11, 10, 0x0),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD20.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD20.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BF50, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD38.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BD38.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BFB0, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCF0.l[0], 1),
	Gbi.gsSPLight(castle_grounds_seg7_lights_0700BCF0.a, 2),
	Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700C010, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700C210 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(castle_grounds_seg7_dl_0700C070),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(castle_grounds_seg7_dl_0700C110),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

