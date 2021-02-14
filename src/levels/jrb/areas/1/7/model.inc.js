import * as Gbi from "../../../../../include/gbi"
import {
    jrb_seg7_texture_07000000,
    jrb_seg7_texture_07000800,
    jrb_seg7_texture_07001800,
    jrb_seg7_texture_07002000
} from "../../../../../textures/water"

import {
    water_09000000,
    water_09000800,
    water_09001800,
    water_09002800,
    water_09003800,
    water_09004800,
    water_09005800,
    water_09006000,
    water_09006800,
    water_09007800,
    water_09008800,
    water_09009000,
    water_0900A000,
    water_0900A800,
    water_0900B800
} from "../../../texture.inc"

const jrb_seg7_vertex_07007628 = [
	{ pos: [ 4569, -5221, 2892 ], flag: 0, tc: [ 4056, 6098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5388, -5221, 2892 ], flag: 0, tc: [ 4056, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5388, -5221, 2073 ], flag: 0, tc: [ -4118, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 4569, -5221, 2073 ], flag: 0, tc: [ -4118, 6098 ], color: [ 255, 255, 255, 255 ] },
]

const jrb_seg7_vertex_07007668 = [
	{ pos: [ 7521, -2815, 2397 ], flag: 0, tc: [ 4736, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7337, -3532, 1704 ], flag: 0, tc: [ -2072, -1566 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7521, -3532, 2397 ], flag: 0, tc: [ -2072, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7337, -2815, 1704 ], flag: 0, tc: [ 4736, -1566 ], color: [ 255, 255, 255, 255 ] },
]

export const jrb_seg7_dl_070076A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, jrb_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(jrb_seg7_vertex_07007628, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070076E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, jrb_seg7_texture_07000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(jrb_seg7_vertex_07007668, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07007718 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(5, 80, 75, 255),
	Gbi.gsSPFogPosition(900, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070076A8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070076E0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

