import * as Gbi from "../../../../../include/gbi"
import {
    mountain_09000000,
<<<<<<< HEAD
    mountain_09000800,
    mountain_09001800,
    mountain_09002800,
    mountain_09003000,
    mountain_09003800,
    mountain_09004000,
    mountain_09004800,
    mountain_09005000,
    mountain_09005800,
    mountain_09006800,
    mountain_09007000,
    mountain_09007800,
    mountain_09008000,
    mountain_09008800,
    mountain_09009800,
    mountain_0900A000,
    mountain_0900A800,
    mountain_0900B000,
    mountain_0900B800,
    mountain_0900C000,
} from "../../../../../textures/mountain.js"
import {
    pss_seg7_texture_07000000,
    pss_seg7_texture_07000800,
    pss_seg7_texture_07001000
} from "../../../textures.inc.js"
=======
    mountain_09007000,
    mountain_0900C000,
} from "../../../../../textures/mountain.js"

>>>>>>> 37f0d32e1c4f86a80aa40cc040879fbfb98c82c7
const pss_seg7_vertex_0700A8B8 = [
	{ pos: [ -5128, -2129, 4118 ], flag: 0, tc: [ -6282, -1012 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -7586, -2129, 6525 ], flag: 0, tc: [ -9432, -2376 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -7586, -2129, 4118 ], flag: 0, tc: [ -8572, -134 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5128, -2129, 6525 ], flag: 0, tc: [ -7142, -3254 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 6144, 7680, -4095 ], flag: 0, tc: [ 0, 990 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 7680, -7167 ], flag: 0, tc: [ 2238, 3258 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 6144, 7680, -7167 ], flag: 0, tc: [ 2238, 990 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 7680, -4095 ], flag: 0, tc: [ 0, 3258 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 6144, 6144, -7167 ], flag: 0, tc: [ -2880, 9970 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 6144, -4095 ], flag: 0, tc: [ -1254, 5950 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -4095 ], flag: 0, tc: [ -4078, 7146 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 6144, -7167 ], flag: 0, tc: [ -56, 8772 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700A978 = [
	{ pos: [ 3226, 6144, -6245 ], flag: 0, tc: [ 8552, 1002 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 6144, -6245 ], flag: 0, tc: [ 8552, 1002 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 7035, -6245 ], flag: 0, tc: [ 8552, -2554 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3226, 7035, -6245 ], flag: 0, tc: [ 8552, -2554 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 7035, -5017 ], flag: 0, tc: [ 3648, -2554 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3226, 7035, -5017 ], flag: 0, tc: [ 3648, -2554 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3072, 6144, -5017 ], flag: 0, tc: [ 3648, 1002 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ 3226, 6144, -5017 ], flag: 0, tc: [ 3648, 1002 ], color: [ 140, 140, 140, 255 ] },
	{ pos: [ -5128, -2129, 4118 ], flag: 0, tc: [ 9780, -8822 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -6920, -3460, 4118 ], flag: 0, tc: [ 2626, -3506 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -5794, -3460, 4118 ], flag: 0, tc: [ 7122, -3506 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -5794, -4587, 4118 ], flag: 0, tc: [ 7122, 990 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -5128, -4587, 4118 ], flag: 0, tc: [ 9780, 990 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -7586, -2129, 4118 ], flag: 0, tc: [ 0, -8822 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -7586, -4587, 4118 ], flag: 0, tc: [ 0, 990 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ -6920, -4587, 4118 ], flag: 0, tc: [ 2626, 990 ], color: [ 170, 170, 170, 255 ] },
]

const pss_seg7_vertex_0700AA78 = [
	{ pos: [ 3072, 6144, -6245 ], flag: 0, tc: [ 8552, 1002 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 6144, -7167 ], flag: 0, tc: [ 12232, 1002 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 7680, -7167 ], flag: 0, tc: [ 12232, -5128 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 7035, -6245 ], flag: 0, tc: [ 8552, -2554 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 7680, -4095 ], flag: 0, tc: [ 0, -5128 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 6144, -4095 ], flag: 0, tc: [ 0, 1002 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 7035, -5017 ], flag: 0, tc: [ 3648, -2554 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3072, 6144, -5017 ], flag: 0, tc: [ 3648, 1002 ], color: [ 170, 170, 170, 255 ] },
	{ pos: [ 3226, 6656, -5119 ], flag: 0, tc: [ 4056, -1040 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6656, -6143 ], flag: 0, tc: [ 8144, -1040 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 7035, -6245 ], flag: 0, tc: [ 8552, -2554 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -4587, 4118 ], flag: 0, tc: [ 172, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -4587, 6525 ], flag: 0, tc: [ 9780, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -2129, 6525 ], flag: 0, tc: [ 9780, -8822 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -2129, 4118 ], flag: 0, tc: [ 172, -8822 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700AB68 = [
	{ pos: [ -7586, -2129, 6525 ], flag: 0, tc: [ 0, -8822 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -4587, 4118 ], flag: 0, tc: [ 9574, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -2129, 4118 ], flag: 0, tc: [ 9574, -8822 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -4587, 6525 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6144, -6143 ], flag: 0, tc: [ 8144, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 7035, -6245 ], flag: 0, tc: [ 8552, -2554 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6656, -6143 ], flag: 0, tc: [ 8144, -1040 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6144, -6245 ], flag: 0, tc: [ 8552, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -4095 ], flag: 0, tc: [ 0, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 7680, -4095 ], flag: 0, tc: [ 12232, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 7680, -4095 ], flag: 0, tc: [ 0, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6144, -5017 ], flag: 0, tc: [ 3648, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6144, -5119 ], flag: 0, tc: [ 4056, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 7035, -5017 ], flag: 0, tc: [ 3648, -2554 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3226, 6656, -5119 ], flag: 0, tc: [ 4056, -1040 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700AC58 = [
	{ pos: [ 6144, 7680, -7167 ], flag: 0, tc: [ 0, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -4095 ], flag: 0, tc: [ 12232, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 7680, -4095 ], flag: 0, tc: [ 12232, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -7167 ], flag: 0, tc: [ 0, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -4095 ], flag: 0, tc: [ 0, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 6144, -4095 ], flag: 0, tc: [ 12232, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 7680, -4095 ], flag: 0, tc: [ 12232, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 7680, -7167 ], flag: 0, tc: [ 12232, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 7680, -7167 ], flag: 0, tc: [ 0, -5128 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 3072, 6144, -7167 ], flag: 0, tc: [ 0, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6144, 6144, -7167 ], flag: 0, tc: [ 12232, 1002 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -2129, 6525 ], flag: 0, tc: [ 9348, -8822 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -2129, 6525 ], flag: 0, tc: [ -460, -8822 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -4587, 6525 ], flag: 0, tc: [ -460, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -4587, 6525 ], flag: 0, tc: [ 9348, 990 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700AD48 = [
	{ pos: [ -7586, -4587, 6525 ], flag: 0, tc: [ 5078, -3950 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -4587, 6525 ], flag: 0, tc: [ -3096, -3950 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5794, -4587, 4118 ], flag: 0, tc: [ -882, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5128, -4587, 4118 ], flag: 0, tc: [ -3096, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6920, -4587, 4118 ], flag: 0, tc: [ 2864, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -7586, -4587, 4118 ], flag: 0, tc: [ 5078, 4054 ], color: [ 255, 255, 255, 255 ] },
]

export const pss_seg7_dl_0700ADA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_0900C000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700A8B8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700AE00 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700A978, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  2, 0x0,  4,  5,  3, 0x0),
	...Gbi.gsSP2Triangles( 6,  5,  4, 0x0,  6,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 8, 13,  9, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 13, 14, 0x0,  9, 14, 15, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700AA78, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  2,  4, 0x0,  5,  6,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  7,  6, 0x0,  3,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700AB68, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(12, 14, 13, 0x0, 14,  5, 13, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700AC58, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700AF60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700AD48, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  5,  0,  4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700AFA8 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
<<<<<<< HEAD
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A, Gbi.G_RM_AA_ZB_OPA_SURF2),
=======
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
>>>>>>> 37f0d32e1c4f86a80aa40cc040879fbfb98c82c7
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700ADA8),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700AE00),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700AF60),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
<<<<<<< HEAD
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_NOOP2),
=======
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
>>>>>>> 37f0d32e1c4f86a80aa40cc040879fbfb98c82c7
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

