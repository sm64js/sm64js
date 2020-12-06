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
    inside_castle_seg7_texture_0700F800
} from "../../../textures.inc"
const inside_castle_seg7_lights_0702AA80 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_0702AA98 = [
	{ pos: [ -1330, 1690, 1526 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -716, 1690, 1526 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -716, 1075, 1526 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 1075, 1526 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
]

export const inside_castle_seg7_dl_0702AAD8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702AA80.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702AA80.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702AA98, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702AB20 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702AAD8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

