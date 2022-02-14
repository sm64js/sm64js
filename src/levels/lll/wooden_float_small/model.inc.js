// 0x07018AA0 - 0x07018B20

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import {
    lll_seg7_texture_07000000, lll_seg7_texture_07001000
} from "../texture.inc"

import { lll_seg7_lights_0700FC00 } from "../areas/1/light.inc"

const lll_seg7_vertex_07018AA0 = [
    [[   154,      0,    384], 0, [   990,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   154,    154,    384], 0, [   990,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -153,    154,    384], 0, [ -1052,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -153,      0,    384], 0, [ -1052,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -153,      0,   -383], 0, [  2012,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   154,    154,   -383], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   154,      0,   -383], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -153,    154,   -383], 0, [  2012,      0], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07018B20 - 0x07018BE0
const lll_seg7_vertex_07018B20 = [
    [[   154,    154,   -383], 0, [   990,  -1564], [0x00, 0x7f, 0x00, 0xff]],
    [[  -153,    154,   -383], 0, [     0,  -1564], [0x00, 0x7f, 0x00, 0xff]],
    [[  -153,    154,    384], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   154,    154,    384], 0, [   990,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   154,      0,   -383], 0, [   990,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   154,    154,   -383], 0, [   990,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   154,    154,    384], 0, [ -4118,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   154,      0,    384], 0, [ -4118,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[  -153,      0,    384], 0, [   990,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -153,    154,   -383], 0, [ -4118,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -153,      0,   -383], 0, [ -4118,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -153,    154,    384], 0, [   990,      0], [0x81, 0x00, 0x00, 0xff]],
];

// 0x07018BE0 - 0x07018C38
const lll_seg7_dl_07018BE0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(lll_seg7_lights_0700FC00.l, 1),
    gsSPLight(lll_seg7_lights_0700FC00.a, 2),
    gsSPVertex(lll_seg7_vertex_07018AA0, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07018C38 - 0x07018C90
const lll_seg7_dl_07018C38 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(lll_seg7_vertex_07018B20, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07018C90 - 0x07018D08
export const lll_seg7_dl_07018C90 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_07018BE0),
    gsSPDisplayList(lll_seg7_dl_07018C38),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
