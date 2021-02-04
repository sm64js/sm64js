import * as Gbi from "../../../../../include/gbi"
const bits_seg7_lights_07013890 = Gbi.gdSPDefLights1(
	    0x14, 0x2f, 0x29,
	    0x50, 0xbf, 0xa7, 0x28, 0x28, 0x28
)

const bits_seg7_vertex_070138A8 = [
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 42, 15, 118, 255 ] },
	{ pos: [ 102, 102, -50 ], flag: 0, tc: [ -882, 422 ], color: [ 42, 15, 118, 255 ] },
	{ pos: [ 0, 389, -50 ], flag: 0, tc: [ -3300, 104 ], color: [ 42, 15, 118, 255 ] },
	{ pos: [ 0, 389, -50 ], flag: 0, tc: [ -3300, 104 ], color: [ 213, 15, 118, 255 ] },
	{ pos: [ -101, 102, -50 ], flag: 0, tc: [ -1904, 422 ], color: [ 213, 15, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 213, 15, 118, 255 ] },
	{ pos: [ 389, 0, -50 ], flag: 0, tc: [ 1228, 536 ], color: [ 15, 42, 118, 255 ] },
	{ pos: [ 102, 102, -50 ], flag: 0, tc: [ -882, 422 ], color: [ 15, 42, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 15, 42, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 15, 213, 118, 255 ] },
	{ pos: [ 102, -101, -50 ], flag: 0, tc: [ 478, 650 ], color: [ 15, 213, 118, 255 ] },
	{ pos: [ 389, 0, -50 ], flag: 0, tc: [ 1228, 536 ], color: [ 15, 213, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 241, 42, 118, 255 ] },
	{ pos: [ -101, 102, -50 ], flag: 0, tc: [ -1904, 422 ], color: [ 241, 42, 118, 255 ] },
	{ pos: [ -388, 0, -50 ], flag: 0, tc: [ -2654, 536 ], color: [ 241, 42, 118, 255 ] },
]

const bits_seg7_vertex_07013998 = [
	{ pos: [ -388, 0, -50 ], flag: 0, tc: [ -2654, 536 ], color: [ 241, 213, 118, 255 ] },
	{ pos: [ -101, -101, -50 ], flag: 0, tc: [ -540, 650 ], color: [ 241, 213, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 241, 213, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 213, 241, 118, 255 ] },
	{ pos: [ -101, -101, -50 ], flag: 0, tc: [ -540, 650 ], color: [ 213, 241, 118, 255 ] },
	{ pos: [ 0, -388, -50 ], flag: 0, tc: [ 1876, 968 ], color: [ 213, 241, 118, 255 ] },
	{ pos: [ 0, -388, -50 ], flag: 0, tc: [ 1876, 968 ], color: [ 42, 241, 118, 255 ] },
	{ pos: [ 102, -101, -50 ], flag: 0, tc: [ 478, 650 ], color: [ 42, 241, 118, 255 ] },
	{ pos: [ 0, 0, 0 ], flag: 0, tc: [ -712, 536 ], color: [ 42, 241, 118, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 212, 15, 138, 255 ] },
	{ pos: [ -101, 102, -50 ], flag: 0, tc: [ -1904, 422 ], color: [ 212, 15, 138, 255 ] },
	{ pos: [ 0, 389, -50 ], flag: 0, tc: [ -3300, 104 ], color: [ 212, 15, 138, 255 ] },
	{ pos: [ 0, 389, -50 ], flag: 0, tc: [ -3300, 104 ], color: [ 43, 15, 138, 255 ] },
	{ pos: [ 102, 102, -50 ], flag: 0, tc: [ -882, 422 ], color: [ 43, 15, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 43, 15, 138, 255 ] },
]

const bits_seg7_vertex_07013A88 = [
	{ pos: [ 389, 0, -50 ], flag: 0, tc: [ 1228, 536 ], color: [ 15, 212, 138, 255 ] },
	{ pos: [ 102, -101, -50 ], flag: 0, tc: [ 478, 650 ], color: [ 15, 212, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 15, 212, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 15, 43, 138, 255 ] },
	{ pos: [ 102, 102, -50 ], flag: 0, tc: [ -882, 422 ], color: [ 15, 43, 138, 255 ] },
	{ pos: [ 389, 0, -50 ], flag: 0, tc: [ 1228, 536 ], color: [ 15, 43, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 43, 241, 138, 255 ] },
	{ pos: [ 102, -101, -50 ], flag: 0, tc: [ 478, 650 ], color: [ 43, 241, 138, 255 ] },
	{ pos: [ 0, -388, -50 ], flag: 0, tc: [ 1876, 968 ], color: [ 43, 241, 138, 255 ] },
	{ pos: [ -388, 0, -50 ], flag: 0, tc: [ -2654, 536 ], color: [ 241, 43, 138, 255 ] },
	{ pos: [ -101, 102, -50 ], flag: 0, tc: [ -1904, 422 ], color: [ 241, 43, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 241, 43, 138, 255 ] },
	{ pos: [ 0, -388, -50 ], flag: 0, tc: [ 1876, 968 ], color: [ 212, 241, 138, 255 ] },
	{ pos: [ -101, -101, -50 ], flag: 0, tc: [ -540, 650 ], color: [ 212, 241, 138, 255 ] },
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 212, 241, 138, 255 ] },
]

const bits_seg7_vertex_07013B78 = [
	{ pos: [ 0, 0, -101 ], flag: 0, tc: [ -712, 536 ], color: [ 241, 212, 138, 255 ] },
	{ pos: [ -101, -101, -50 ], flag: 0, tc: [ -540, 650 ], color: [ 241, 212, 138, 255 ] },
	{ pos: [ -388, 0, -50 ], flag: 0, tc: [ -2654, 536 ], color: [ 241, 212, 138, 255 ] },
]

export const bits_seg7_dl_07013BA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sky_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bits_seg7_lights_07013890.l[0], 1),
	Gbi.gsSPLight(bits_seg7_lights_07013890.a, 2),
	Gbi.gsSPVertex(bits_seg7_vertex_070138A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07013998, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07013A88, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bits_seg7_vertex_07013B78, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bits_seg7_dl_07013C78 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bits_seg7_dl_07013BA8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

