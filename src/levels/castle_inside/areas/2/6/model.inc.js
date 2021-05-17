import * as Gbi from "../../../../../include/gbi"
import {
	texture_castle_light,
	inside_castle_seg7_texture_07000800,
	inside_castle_seg7_texture_07001000,
	inside_castle_seg7_texture_07002000,
	inside_castle_seg7_texture_07003000,
	inside_castle_seg7_texture_07003800,
	inside_castle_seg7_texture_07004800,
	inside_castle_seg7_texture_07005800,
	inside_castle_seg7_texture_07006000,
	inside_castle_seg7_texture_07006800,
	inside_castle_seg7_texture_07007000,
	inside_castle_seg7_texture_07007800,
	inside_castle_seg7_texture_07008000,
	inside_castle_seg7_texture_07008800,
	inside_castle_seg7_texture_07009000,
	inside_castle_seg7_texture_07009800,
	inside_castle_seg7_texture_0700A000,
	inside_castle_seg7_texture_0700A800,
	inside_castle_seg7_texture_0700B800,
	inside_castle_seg7_texture_0700C800,
	inside_castle_seg7_texture_0700D800,
	inside_castle_seg7_texture_0700E800,
	inside_castle_seg7_texture_0700F800,
} from "../../../texture.inc"
import {
	inside_09000000,
	inside_09001000,
	inside_09002000,
	inside_09003000,
	inside_09003800,
	inside_09004000,
	inside_09004800,
	inside_09005000,
	inside_09005800,
	inside_09006000,
	inside_09007000,
	inside_09008000,
	inside_09008800,
	inside_09009000,
	inside_0900A000,
	inside_0900B000,
	inside_0900B800,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_0704A1B8 = Gbi.gdSPDefLights1(
	    0x3d, 0x3d, 0x3f,
	    0xf5, 0xf5, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_0704A1D0 = [
	{ pos: [ 4332, 1408, 3415 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 2647 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 1408, 2647 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 3415 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 1408, 1008 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 240 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 1408, 240 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 1008 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 1408, 2493 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 1162 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 1408, 1162 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4332, 2125, 2493 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
]

export const inside_castle_seg7_dl_0704A290 = [
	Gbi.gsSPLight(inside_castle_seg7_lights_0704A1B8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0704A1B8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A1D0, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A2E0 = [
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	...Gbi.gsDPLoadTextureBlock(inside_castle_seg7_texture_0700A000, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 32, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x07C0, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A290),
	Gbi.gsSPTexture(0x07C0, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

