import * as Gbi from "../../../../../include/gbi"
import {
    snow_09005800,
    snow_09007000,
    snow_09008800} from "../../../../../textures/snow"
const sl_seg7_vertex_07007480 = [
	{ pos: [ -33, 2150, 1233 ], flag: 0, tc: [ -3506, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 34, 2253, 1766 ], flag: 0, tc: [ 1854, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -33, 2253, 1233 ], flag: 0, tc: [ -3506, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1504, 1741, 1650 ], flag: 0, tc: [ 5130, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1404, 1843, 2246 ], flag: 0, tc: [ -898, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1404, 1741, 2246 ], flag: 0, tc: [ -898, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1504, 1843, 1650 ], flag: 0, tc: [ 5130, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2116, 1998, 862 ], flag: 0, tc: [ 9124, -20 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1504, 1741, 1650 ], flag: 0, tc: [ -956, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2116, 1896, 862 ], flag: 0, tc: [ 9124, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1504, 1843, 1650 ], flag: 0, tc: [ -956, -20 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2116, 1896, 862 ], flag: 0, tc: [ -630, 994 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1897, 1896, 716 ], flag: 0, tc: [ 1994, 994 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1897, 1999, 716 ], flag: 0, tc: [ 1994, -26 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2116, 1999, 862 ], flag: 0, tc: [ -630, -26 ], color: [ 255, 255, 255, 255 ] },
]

const sl_seg7_vertex_07007570 = [
	{ pos: [ 34, 2150, 1766 ], flag: 0, tc: [ -800, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 899, 2150, 1531 ], flag: 0, tc: [ 8144, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 899, 2253, 1531 ], flag: 0, tc: [ 8144, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -33, 2150, 1233 ], flag: 0, tc: [ -3506, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 34, 2150, 1766 ], flag: 0, tc: [ 1854, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 34, 2253, 1766 ], flag: 0, tc: [ 1854, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 34, 2253, 1766 ], flag: 0, tc: [ -800, 0 ], color: [ 255, 255, 255, 255 ] },
]

const sl_seg7_vertex_070075E0 = [
	{ pos: [ -522, 1352, -5052 ], flag: 0, tc: [ 8824, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -522, 1249, -5052 ], flag: 0, tc: [ 8824, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -200, 1249, -3761 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1725, 3328, 260 ], flag: 0, tc: [ 14616, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 63, 3226, 1704 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 63, 3328, 1704 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1725, 3226, 260 ], flag: 0, tc: [ 14616, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 365, 3328, 2052 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2027, 3226, 608 ], flag: 0, tc: [ 14616, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2027, 3328, 608 ], flag: 0, tc: [ 14616, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 365, 3226, 2052 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -200, 1352, -3761 ], flag: 0, tc: [ 8824, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1091, 1249, -4084 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1091, 1352, -4084 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -200, 1249, -3761 ], flag: 0, tc: [ 8824, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 768, 1249, -5375 ], flag: 0, tc: [ 8824, 0 ], color: [ 255, 255, 255, 255 ] },
]

const sl_seg7_vertex_070076E0 = [
	{ pos: [ -522, 1352, -5052 ], flag: 0, tc: [ 8824, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -200, 1249, -3761 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -200, 1352, -3761 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 768, 1249, -5375 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 768, 1352, -5375 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -522, 1249, -5052 ], flag: 0, tc: [ 8824, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1091, 1352, -4084 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 768, 1249, -5375 ], flag: 0, tc: [ 8824, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 768, 1352, -5375 ], flag: 0, tc: [ 8824, 990 ], color: [ 255, 255, 255, 255 ] },
]

export const sl_seg7_dl_07007770 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_07007480, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007570, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  2,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_070077F0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_070075E0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0, 13, 12, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070076E0, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  0, 0x0,  6,  7,  8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_07007880 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07007770),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_070077F0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

