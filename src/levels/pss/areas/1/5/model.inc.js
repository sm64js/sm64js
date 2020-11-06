import * as Gbi from "../../../../../include/gbi"
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
const pss_seg7_vertex_0700D3A8 = [
	{ pos: [ -6864, -3726, 2608 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4340, 1994 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3726, 1994 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3593, 587 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4207, 1202 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3593, 1202 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4207, 587 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3593, 1202 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4207, 587 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3593, 587 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4207, 1202 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3726, 1994 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4340, 1994 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4340, 2608 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3726, 2608 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
]

const pss_seg7_vertex_0700D498 = [
	{ pos: [ -4584, -3581, -3258 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4891, -3581, -3258 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4891, -3057, -3258 ], flag: 0, tc: [ 990, 118 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3726, 2608 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4340, 2608 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4340, 1994 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3858, 3394 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4473, 4009 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -3858, 4009 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5850, -4473, 3394 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3858, 4009 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4473, 3394 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -3858, 3394 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6864, -4473, 4009 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4584, -3057, -3258 ], flag: 0, tc: [ 478, 118 ], color: [ 255, 85, 0, 255 ] },
]

const pss_seg7_vertex_0700D588 = [
	{ pos: [ -5091, 3236, 2431 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5355, 3850, 2273 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5091, 3850, 2431 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4431, -3057, -2992 ], flag: 0, tc: [ 0, 118 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4584, -3581, -3258 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4584, -3057, -3258 ], flag: 0, tc: [ 478, 118 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4431, -3581, -2992 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 531, -2174, -5293 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 224, -2174, -5293 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 224, -1559, -5293 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 531, -1559, -5293 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 684, -1559, -5026 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 684, -2174, -5026 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6651, 4280, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6651, 3666, 307 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6703, 3666, 5 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
]

const pss_seg7_vertex_0700D688 = [
	{ pos: [ -5091, 3236, 2431 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5355, 3236, 2273 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5355, 3850, 2273 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4793, 3850, 2506 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -4793, 3236, 2506 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5091, 3850, 2431 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6703, 3666, 5 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6700, 4280, -302 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6703, 4280, 5 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6700, 3666, -302 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6651, 4280, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5951, 5059, -5249 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5749, 4444, -5481 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5749, 5059, -5481 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
]

const pss_seg7_vertex_0700D768 = [
	{ pos: [ -6703, 4076, -3107 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6679, 4076, -3413 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6679, 4690, -3413 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6703, 4690, -3107 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6650, 4690, -2804 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -6650, 4076, -2804 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5749, 4444, -5481 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5483, 5059, -5635 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5749, 5059, -5481 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5483, 4444, -5635 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 3229, 6770, -5124 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 3229, 6155, -5124 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 2615, 6155, -5124 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5951, 5059, -5249 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -5951, 4444, -5249 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
]

const pss_seg7_vertex_0700D858 = [
	{ pos: [ -3603, 4659, -6137 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -3296, 5274, -6137 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -3603, 5274, -6137 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -3296, 4659, -6137 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -3909, 5274, -6110 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ -3909, 4659, -6110 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 3229, 6770, -5124 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 2615, 6155, -5124 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 2615, 6770, -5124 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 2615, 6770, -6138 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 3229, 6155, -6138 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 3229, 6770, -6138 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 85, 0, 255 ] },
	{ pos: [ 2615, 6155, -6138 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 85, 0, 255 ] },
]

export const pss_seg7_dl_0700D928 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, pss_seg7_texture_07000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D3A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D498, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D588, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11,  7, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  7, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D688, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  0,  5, 0x0,  6,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  7, 0x0, 10,  6,  8, 0x0),
	Gbi.gsSP1Triangle(11, 12, 13, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D768, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  4,  5,  0, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14,  6, 0x0),
	Gbi.gsSPVertex(pss_seg7_vertex_0700D858, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  0, 0x0,  4,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 9, 12, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700DAD8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700D928),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

