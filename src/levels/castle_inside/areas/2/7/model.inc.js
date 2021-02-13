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
	inside_castle_seg7_texture_07010800,
	inside_castle_seg7_texture_07011800,
	inside_castle_seg7_texture_07019800,
	inside_castle_seg7_texture_0701A800
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
const inside_castle_seg7_vertex_0704A368 = [
	{ pos: [ 2755, 1818, 394 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1971, 394 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1971, 701 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1818, 701 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1818, 701 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1971, 394 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1818, 394 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1971, 701 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A3E8 = [
	{ pos: [ 5909, 1664, 701 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1818, 701 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1818, 394 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1664, 394 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1664, 394 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1818, 394 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1818, 701 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1664, 701 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A468 = [
	{ pos: [ 3385, 1715, 3917 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3692, 1562, 3917 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3385, 1562, 3917 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3692, 1715, 3917 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5279, 1562, 3917 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 4972, 1715, 3917 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5279, 1715, 3917 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 4972, 1562, 3917 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A4E8 = [
	{ pos: [ 3385, 1869, 3917 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3692, 1869, 3917 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3692, 1715, 3917 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 3385, 1715, 3917 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5279, 1715, 3917 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 4972, 1715, 3917 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 4972, 1869, 3917 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5279, 1869, 3917 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A568 = [
	{ pos: [ 1731, 1613, 1674 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1766, 1674 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1766, 1981 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1613, 1981 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1613, 1981 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1766, 1674 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1613, 1674 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1766, 1981 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A5E8 = [
	{ pos: [ 1731, 1766, 1674 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1920, 1674 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1920, 1981 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 1731, 1766, 1981 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1766, 1981 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1920, 1981 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1920, 1674 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 6933, 1766, 1674 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A668 = [
	{ pos: [ 2755, 1715, 2903 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1920, 3312 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1715, 3312 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1920, 2903 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1715, 3312 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1920, 3312 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1920, 2903 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1715, 2903 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A6E8 = [
	{ pos: [ 2755, 1510, 2903 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1715, 2903 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1715, 3312 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 2755, 1510, 3312 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1510, 3312 ], flag: 0, tc: [ 0, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1715, 2903 ], flag: 0, tc: [ 2012, 0 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1510, 2903 ], flag: 0, tc: [ 2012, 990 ], color: [ 153, 153, 153, 255 ] },
	{ pos: [ 5909, 1715, 3312 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 153, 153, 255 ] },
]

const inside_castle_seg7_vertex_0704A768 = [
	{ pos: [ 5356, 1792, -260 ], flag: 0, tc: [ 0, 0 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 4895, 1792, -260 ], flag: 0, tc: [ 2012, 0 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 4895, 1562, -260 ], flag: 0, tc: [ 2012, 990 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 5356, 1562, -260 ], flag: 0, tc: [ 0, 990 ], color: [ 221, 221, 221, 255 ] },
]

const inside_castle_seg7_vertex_0704A7A8 = [
	{ pos: [ 5356, 2022, -260 ], flag: 0, tc: [ 0, 0 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 4895, 2022, -260 ], flag: 0, tc: [ 2012, 0 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 4895, 1792, -260 ], flag: 0, tc: [ 2012, 990 ], color: [ 221, 221, 221, 255 ] },
	{ pos: [ 5356, 1792, -260 ], flag: 0, tc: [ 0, 990 ], color: [ 221, 221, 221, 255 ] },
]

export const inside_castle_seg7_dl_0704A7E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A368, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A830 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A3E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A878 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07011800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A468, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A8C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07010800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A4E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A908 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700F800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A568, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A950 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700E800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A5E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A998 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07019800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A668, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704A9E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0701A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A6E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704AA28 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700D800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A768, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704AA60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_0700C800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0704A7A8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0704AA98 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A7E8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A830),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A878),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A8C0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A908),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A950),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A998),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704A9E0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704AA28),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0704AA60),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsSPEndDisplayList(),
]

