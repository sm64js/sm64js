import * as Gbi from "../../../../../include/gbi"
<<<<<<< HEAD
import {
    mountain_09000000,
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
import { mountain_09007800 } from "../../../../../textures/mountain.js"

>>>>>>> 37f0d32e1c4f86a80aa40cc040879fbfb98c82c7
const pss_seg7_vertex_0700B070 = [
	{ pos: [ -5906, -4217, 3701 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -4217, 3701 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -4252, 3701 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5906, -3951, 895 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -3951, 895 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -3986, 895 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -3986, 895 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -3951, 895 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6808, -3951, 895 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5906, -4084, 2301 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -4084, 2301 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5845, -4119, 2301 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -4119, 2301 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -4084, 2301 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6808, -4084, 2301 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700B160 = [
	{ pos: [ 558, -1918, -5339 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 527, -1918, -5286 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 527, -1953, -5286 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -4252, 3701 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6869, -4217, 3701 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6808, -4217, 3701 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3603, 4880, -6143 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3603, 4915, -6143 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3603, 4915, -6082 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6376, -6143 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6411, -6143 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6411, -6082 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6411, -5180 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6411, -5119 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2922, 6376, -5119 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
]

const pss_seg7_vertex_0700B250 = [
	{ pos: [ -5095, 3457, 2438 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5095, 3492, 2438 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5072, 3492, 2382 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4557, -3325, -3304 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4588, -3325, -3251 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4588, -3360, -3251 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5753, 4665, -5488 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5753, 4700, -5488 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -5715, 4700, -5440 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6710, 4297, -3107 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6710, 4332, -3107 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6649, 4332, -3106 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6710, 3887, 5 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6710, 3922, 5 ], flag: 0, tc: [ 478, 480 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -6649, 3922, 0 ], flag: 0, tc: [ 0, 478 ], color: [ 255, 255, 255, 255 ] },
]

export const pss_seg7_dl_0700B340 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700B070, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700B160, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700B250, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700B3F0 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A, Gbi.G_RM_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700B340),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

