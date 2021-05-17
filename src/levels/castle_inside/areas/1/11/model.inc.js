import * as Gbi from "../../../../../include/gbi"
import {
	inside_castle_seg7_texture_07002000,
} from "../../../texture.inc"
const inside_castle_seg7_vertex_07031608 = [
	{ pos: [ 2001, 1024, -2688 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1857, 1024, -2833 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2001, 691, -2688 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1857, 691, -2833 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1857, 1024, -2037 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2001, 1024, -2182 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1857, 691, -2037 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2001, 691, -2182 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1205, 691, -2688 ], flag: 0, tc: [ 0, 2012 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1350, 1024, -2833 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1205, 1024, -2688 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1350, 691, -2833 ], flag: 0, tc: [ 990, 2012 ], color: [ 255, 255, 255, 255 ] },
]

export const inside_castle_seg7_dl_070316C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_castle_seg7_texture_07002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07031608, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07031720 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070316C8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

