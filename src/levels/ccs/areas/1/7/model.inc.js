import * as Gbi from "../../../../../include/gbi"
import {
	ccs_seg7_texture_07003B00,
	ccs_seg7_texture_07003900,
} from "../../../texture.inc"

const ccs_seg7_lights_0701FEE0 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const ccs_seg7_lights_0701FEF8 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccs_seg7_vertex_0701FF10 = [
	{ pos: [ 5124, 0, -8124 ], flag: 0, tc: [ 224, 479 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 5124, -8191, -8124 ], flag: 0, tc: [ 479, 479 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 8308, 0, -8124 ], flag: 0, tc: [ 223, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 8308, -8191, -8124 ], flag: 0, tc: [ 479, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 8308, 8192, -8124 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 5124, 8192, -8124 ], flag: 0, tc: [ 0, 479 ], color: [ 0, 0, 127, 255 ] },
]

const ccs_seg7_vertex_0701FF70 = [
	{ pos: [ -6061, -5830, -3601 ], flag: 0, tc: [ 2012, 3948 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -5784, -5830, -3601 ], flag: 0, tc: [ 3034, 3948 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -5784, -5799, -3326 ], flag: 0, tc: [ 3034, 4970 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -5784, -5845, -6133 ], flag: 0, tc: [ -2074, -28 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -6111, -6133 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -5845, -6133 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5784, -6111, -6133 ], flag: 0, tc: [ -2074, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -5799, -3326 ], flag: 0, tc: [ -2074, 4970 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -7167, -5830, -3601 ], flag: 0, tc: [ -2074, 3948 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6890, -5830, -3601 ], flag: 0, tc: [ -1052, 3948 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6890, -5830, -3601 ], flag: 0, tc: [ -1052, 3948 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6337, -5860, -3876 ], flag: 0, tc: [ 990, 2926 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6061, -5830, -3601 ], flag: 0, tc: [ 2012, 3948 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6614, -5860, -3876 ], flag: 0, tc: [ 0, 2926 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6890, -5860, -3876 ], flag: 0, tc: [ -1052, 2926 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6061, -5860, -3876 ], flag: 0, tc: [ 2012, 2926 ], color: [ 0, 130, 13, 255 ] },
]

const ccs_seg7_vertex_07020070 = [
	{ pos: [ -6614, -5860, -3876 ], flag: 0, tc: [ 0, 2926 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6337, -6074, -5800 ], flag: 0, tc: [ 990, -4226 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6337, -5860, -3876 ], flag: 0, tc: [ 990, 2926 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6614, -6074, -5800 ], flag: 0, tc: [ 0, -4226 ], color: [ 0, 130, 14, 255 ] },
	{ pos: [ -6614, -6074, -5800 ], flag: 0, tc: [ 0, -4226 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -7166, -6074, -5800 ], flag: 0, tc: [ -2072, -4226 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -7167, -6112, -6143 ], flag: 0, tc: [ -2074, -5502 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -5784, -6112, -6143 ], flag: 0, tc: [ 3036, -5502 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -6337, -6074, -5800 ], flag: 0, tc: [ 990, -4226 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -5784, -6074, -5800 ], flag: 0, tc: [ 3036, -4226 ], color: [ 0, 130, 13, 255 ] },
	{ pos: [ -5785, -5523, -3326 ], flag: 0, tc: [ 3034, 5076 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -5785, -5553, -3601 ], flag: 0, tc: [ 3034, 4054 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6061, -5553, -3601 ], flag: 0, tc: [ 2012, 4054 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6338, -5584, -3876 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ -6337, -6074, -5800 ], flag: 0, tc: [ 8144, 990 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ -6338, -5798, -5800 ], flag: 0, tc: [ 8144, 0 ], color: [ 126, 0, 0, 255 ] },
]

const ccs_seg7_vertex_07020170 = [
	{ pos: [ -5785, -5523, -3326 ], flag: 0, tc: [ 3034, 5076 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6061, -5553, -3601 ], flag: 0, tc: [ 2012, 4054 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6891, -5553, -3601 ], flag: 0, tc: [ -1052, 4054 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6061, -5553, -3601 ], flag: 0, tc: [ 2012, 4054 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6338, -5584, -3876 ], flag: 0, tc: [ 990, 3032 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6891, -5553, -3601 ], flag: 0, tc: [ -1052, 4054 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6338, -5798, -5800 ], flag: 0, tc: [ 990, -4120 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6614, -5798, -5800 ], flag: 0, tc: [ 0, -4120 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6614, -5584, -3876 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6061, -5584, -3876 ], flag: 0, tc: [ 2012, 3032 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -6891, -5584, -3876 ], flag: 0, tc: [ -1052, 3032 ], color: [ 0, 126, 242, 255 ] },
	{ pos: [ -7167, -5553, -3601 ], flag: 0, tc: [ -2074, 4054 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -7167, -5523, -3326 ], flag: 0, tc: [ -2074, 5076 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6338, -5584, -3876 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ -6337, -5860, -3876 ], flag: 0, tc: [ 990, 990 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ -6337, -6074, -5800 ], flag: 0, tc: [ 8144, 990 ], color: [ 126, 0, 0, 255 ] },
]

const ccs_seg7_vertex_07020270 = [
	{ pos: [ -6338, -5798, -5800 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -6074, -5800 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -5798, -5800 ], flag: 0, tc: [ 3034, -30 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6061, -5553, -3601 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6061, -5860, -3876 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6061, -5584, -3876 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6061, -5830, -3601 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6891, -5584, -3876 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ -6890, -5860, -3876 ], flag: 0, tc: [ 0, 990 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ -6890, -5830, -3601 ], flag: 0, tc: [ 990, 990 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ -6891, -5553, -3601 ], flag: 0, tc: [ 990, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ -6614, -5798, -5800 ], flag: 0, tc: [ -7184, -30 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6614, -6074, -5800 ], flag: 0, tc: [ -7184, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6614, -5860, -3876 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6614, -5584, -3876 ], flag: 0, tc: [ 0, -30 ], color: [ 129, 0, 0, 255 ] },
]

const ccs_seg7_vertex_07020360 = [
	{ pos: [ -6614, -5584, -3876 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6614, -5860, -3876 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6890, -5860, -3876 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6338, -5798, -5800 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6337, -6074, -5800 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -6074, -5800 ], flag: 0, tc: [ 3034, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7167, -5798, -5800 ], flag: 0, tc: [ -2074, -34 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7166, -6074, -5800 ], flag: 0, tc: [ -2074, 988 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6614, -6074, -5800 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6614, -5798, -5800 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6891, -5553, -3601 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -5830, -3601 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -5553, -3601 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6890, -5830, -3601 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6891, -5584, -3876 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_07020450 = [
	{ pos: [ -7167, -5836, -6143 ], flag: 0, tc: [ -2074, -5398 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -7167, -5798, -5800 ], flag: 0, tc: [ -2074, -4120 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6614, -5798, -5800 ], flag: 0, tc: [ 0, -4120 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6061, -5584, -3876 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6337, -5860, -3876 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6338, -5584, -3876 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6061, -5860, -3876 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5785, -5553, -3601 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6061, -5830, -3601 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6061, -5553, -3601 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5784, -5830, -3601 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7167, -5534, -3337 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7167, -5800, -3337 ], flag: 0, tc: [ -2074, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -5800, -3337 ], flag: 0, tc: [ 3034, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5785, -5534, -3337 ], flag: 0, tc: [ 3034, -28 ], color: [ 0, 0, 127, 255 ] },
]

const ccs_seg7_vertex_07020540 = [
	{ pos: [ -6338, -5798, -5800 ], flag: 0, tc: [ 990, -4120 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -5784, -5798, -5800 ], flag: 0, tc: [ 3034, -4120 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -5784, -5836, -6143 ], flag: 0, tc: [ 3034, -5398 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -7167, -5836, -6143 ], flag: 0, tc: [ -2074, -5398 ], color: [ 0, 126, 243, 255 ] },
	{ pos: [ -6614, -5798, -5800 ], flag: 0, tc: [ 0, -4120 ], color: [ 0, 126, 243, 255 ] },
]

export const ccs_seg7_dl_07020590 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ccs_seg7_texture_07003900),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 16 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FEE0.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FEE0.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701FF10, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  5,  0,  4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_070205E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, ccs_seg7_texture_07003B00),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FEF8.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701FEF8.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701FF70, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9,  2, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 11, 0x0, 10, 14, 13, 0x0),
	...Gbi.gsSP2Triangles( 9,  0,  2, 0x0, 11, 15, 12, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020070, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  4, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020170, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  4,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  5, 0x0,  3,  9,  4, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  5, 0x0,  2, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020270, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020360, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020450, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_07020540, 5, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSP1Triangle( 3,  4,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_070207F0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_07020590),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_070205E8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

