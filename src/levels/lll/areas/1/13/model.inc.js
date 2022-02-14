// 0x07017578 - 0x07017590

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    fire_0900B800, fire_09007800
} from "../../../../../textures/fire"

const lll_seg7_lights_07017578 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xfe, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07017590 - 0x07017650
const lll_seg7_vertex_07017590 = [
    [[  -511,    154,    128], 0, [     0,    224], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,    154,    512], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    154,    512], 0, [   990,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    154,    128], 0, [   990,    224], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,    307,   -127], 0, [   -30,    732], [0x00, 0x6c, 0x41, 0xff]],
    [[  -511,    154,    128], 0, [     0,   1232], [0x00, 0x6c, 0x41, 0xff]],
    [[   512,    154,    128], 0, [   988,   1246], [0x00, 0x6c, 0x41, 0xff]],
    [[   512,    307,   -127], 0, [   992,    746], [0x00, 0x6c, 0x41, 0xff]],
    [[  -511,    307,   -511], 0, [     0,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,    307,   -127], 0, [     0,   -288], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    307,   -127], 0, [   990,   -288], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    307,   -511], 0, [   990,  -1054], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07017650 - 0x07017740
const lll_seg7_vertex_07017650 = [
    [[  -511,      0,   -511], 0, [  4056,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   512,    307,   -511], 0, [   650,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   512,      0,   -511], 0, [   650,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   512,      0,   -511], 0, [  2352,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   512,    307,   -511], 0, [  2352,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   512,    307,   -127], 0, [  1076,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   512,    154,    128], 0, [   224,    480], [0x7f, 0x00, 0x00, 0xff]],
    [[   512,      0,    512], 0, [ -1052,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   512,    154,    512], 0, [ -1052,    480], [0x7f, 0x00, 0x00, 0xff]],
    [[  -511,    154,    128], 0, [  2098,    480], [0x81, 0x00, 0x00, 0xff]],
    [[  -511,    307,   -127], 0, [  1246,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -511,      0,   -511], 0, [     0,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -511,      0,    512], 0, [  3374,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -511,    154,    512], 0, [  3374,    480], [0x81, 0x00, 0x00, 0xff]],
    [[  -511,    307,   -511], 0, [     0,      0], [0x81, 0x00, 0x00, 0xff]],
];

// 0x07017740 - 0x070177B0
const lll_seg7_vertex_07017740 = [
    [[   512,      0,    512], 0, [  3374,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -511,    154,    512], 0, [     0,    478], [0x00, 0x00, 0x7f, 0xff]],
    [[  -511,      0,    512], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -511,      0,   -511], 0, [  4056,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -511,    307,   -511], 0, [  4056,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   512,    307,   -511], 0, [   650,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   512,    154,    512], 0, [  3374,    478], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x070177B0 - 0x07017818
const lll_seg7_dl_070177B0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_0900B800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(lll_seg7_lights_07017578.l, 1),
    gsSPLight(lll_seg7_lights_07017578.a, 2),
    gsSPVertex(lll_seg7_vertex_07017590, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07017818 - 0x070178A8
const lll_seg7_dl_07017818 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(lll_seg7_vertex_07017650, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  3,  6,  7, 0x0),
    gsSP2Triangles( 6,  8,  7, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(12, 13,  9, 0x0, 12,  9, 11, 0x0),
    gsSP1Triangle(10, 14, 11, 0x0),
    gsSPVertex(lll_seg7_vertex_07017740, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP1Triangle( 0,  6,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070178A8 - 0x07017938
export const lll_seg7_dl_070178A8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_070177B0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_07017818),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
