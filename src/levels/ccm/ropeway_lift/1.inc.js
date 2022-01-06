// 0x07010BD0 - 0x07010CC0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_DECALRGBA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { snow_09000000 } from "../../../textures/snow"

import { ccm_seg7_texture_07000900 } from "../texture.inc"

const ccm_seg7_vertex_07010BD0 = [
    [[     0,   -153,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -153,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -153,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -153,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -204,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -153,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -204,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -153,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -204,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -204,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -153,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -153,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -153,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -204,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -153,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07010CC0 - 0x07010D30
const ccm_seg7_vertex_07010CC0 = [
    [[   205,   -204,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -204,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -204,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -204,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -204,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -204,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -204,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07010D30 - 0x07010E30
const ccm_seg7_vertex_07010D30 = [
    [[     0,   -255,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   205,      0,   -132], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,      0,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -255,    133], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,    133], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -255,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -255,    133], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   205,      0,    133], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,    133], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -255,    133], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,      0,   -132], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -204,   -255,   -132], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,   -255,   -132], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,   -132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   -255,   -132], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07010E30 - 0x07010EC0
const ccm_seg7_dl_07010E30 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, snow_09000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_07010BD0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 10, 11, 12, 0x0),
    gsSP2Triangles(10, 12,  7, 0x0, 13,  6,  4, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(ccm_seg7_vertex_07010CC0, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP1Triangle( 4,  5,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07010EC0 - 0x07010F28
const ccm_seg7_dl_07010EC0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ccm_seg7_texture_07000900),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_07010D30, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0,  0, 15,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07010F28 - 0x07010FB8
export const ccm_seg7_dl_07010F28 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ccm_seg7_dl_07010E30),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ccm_seg7_dl_07010EC0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
