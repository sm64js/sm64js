// 0x0701A270 - 0x0701A2B0

import {
    gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile, gsSPTexture,
    gsDPTileSync, gsDPSetTileSize, gsSPEndDisplayList, gsSPLight, gsSPVertex, gsSP2Triangles,
    gsSPSetGeometryMode, gsSPDisplayList, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock,
    G_CC_MODULATERGB, G_SHADING_SMOOTH, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_LOADTILE, G_TX_WRAP,
    G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TX_CLAMP,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, CALC_DXT, G_IM_SIZ_16b_BYTES, G_LIGHTING
} from "../../../include/gbi"
import {
    lll_seg7_texture_07006000, lll_seg7_texture_07006800, lll_seg7_texture_07007000,
    lll_seg7_texture_07007800, lll_seg7_texture_07008000, lll_seg7_texture_07008800,
    lll_seg7_texture_07009000, lll_seg7_texture_07009800, lll_seg7_texture_0700A000,
    lll_seg7_texture_0700A800, lll_seg7_texture_0700B000, lll_seg7_texture_0700B800,
    lll_seg7_texture_0700C000, lll_seg7_texture_0700C800
} from "../texture.inc"

import { lll_seg7_lights_0700FC00 } from "../areas/1/light.inc"

const lll_seg7_vertex_0701A270 = [
    [[  -245,      0,    246], 0, [     0,    992], [0x00, 0x7f, 0x00, 0xff]],
    [[   246,      0,    246], 0, [   992,    992], [0x00, 0x7f, 0x00, 0xff]],
    [[   246,      0,   -245], 0, [   992,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[  -245,      0,   -245], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x0701A2B0 - 0x0701A2F0
const lll_seg7_vertex_0701A2B0 = [
    [[  -245,    -45,    246], 0, [     0,      0], [0x00, 0x00, 0x00, 0xc8]],
    [[   246,    -45,    246], 0, [     0,      0], [0x00, 0x00, 0x00, 0xc8]],
    [[   246,    -45,   -245], 0, [     0,      0], [0x00, 0x00, 0x00, 0xc8]],
    [[  -245,    -45,   -245], 0, [     0,      0], [0x00, 0x00, 0x00, 0xc8]],
];

// 0x0701A2F0 - 0x0701A338
const lll_seg7_dl_0701A2F0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x0701A338 - 0x0701A388
const lll_seg7_dl_0701A338 = [
    gsSPLight(lll_seg7_lights_0700FC00.l, 1),
    gsSPLight(lll_seg7_lights_0700FC00.a, 2),
    gsSPVertex(lll_seg7_vertex_0701A270, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x0701A388 - 0x0701A3B8
export const lll_seg7_dl_0701A388 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07006000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A3B8 - 0x0701A3E8
export const lll_seg7_dl_0701A3B8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07006800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A3E8 - 0x0701A418
export const lll_seg7_dl_0701A3E8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A418 - 0x0701A448
export const lll_seg7_dl_0701A418 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A448 - 0x0701A478
export const lll_seg7_dl_0701A448 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07008000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A478 - 0x0701A4A8
export const lll_seg7_dl_0701A478 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07008800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A4A8 - 0x0701A4D8
export const lll_seg7_dl_0701A4A8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07009000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A4D8 - 0x0701A508
export const lll_seg7_dl_0701A4D8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_07009800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A508 - 0x0701A538
export const lll_seg7_dl_0701A508 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700A000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A538 - 0x0701A568
export const lll_seg7_dl_0701A538 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700A800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A568 - 0x0701A598
export const lll_seg7_dl_0701A568 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700B000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A598 - 0x0701A5C8
export const lll_seg7_dl_0701A598 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700B800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A5C8 - 0x0701A5F8
export const lll_seg7_dl_0701A5C8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700C000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A5F8 - 0x0701A628
export const lll_seg7_dl_0701A5F8 = [
    gsSPDisplayList(lll_seg7_dl_0701A2F0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700C800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(lll_seg7_dl_0701A338),
    gsSPEndDisplayList(),
].flat();

// 0x0701A628 - 0x0701A670
export const lll_seg7_dl_0701A628 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPVertex(lll_seg7_vertex_0701A2B0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsDPPipeSync(),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
