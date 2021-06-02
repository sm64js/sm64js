// 0x0700E790 - 0x0700E850

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_DECALRGBA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    snow_09000000, snow_09007000
} from "../../../../../textures/snow"

const ccm_seg7_vertex_0700E790 = [
    [[   433,   -204,   -410], 0, [  4566,    224], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,    -50,   -410], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   433,    -50,   -410], 0, [  4566,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,   -204,   -410], 0, [     0,    224], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,   -204,   -103], 0, [  1528,    224], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,    -50,   -410], 0, [    -6,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,   -204,   -410], 0, [    -6,    224], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,    -50,   -103], 0, [  1528,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,    -50,    203], 0, [   680,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,   -204,    357], 0, [  1446,    224], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,    -50,    357], 0, [  1446,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -488,   -204,    203], 0, [   680,    224], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E850 - 0x0700E8D0
const ccm_seg7_vertex_0700E850 = [
    [[   433,     41,   -195], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,     -9,   -195], 0, [ 15708,    -34], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,     41,   -195], 0, [ 15708,    988], [0xff, 0xff, 0xff, 0xff]],
    [[   433,     -9,   -195], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,     41,   -195], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,     -9,   -195], 0, [   -40,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,     72,    357], 0, [ 11112,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -355,    123,    357], 0, [ 11128,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E8D0 - 0x0700E928
const ccm_seg7_dl_0700E8D0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, snow_09000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_0700E790, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700E928 - 0x0700E970
const ccm_seg7_dl_0700E928 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, snow_09007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_0700E850, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700E970 - 0x0700EA00
export const ccm_seg7_dl_0700E970 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ccm_seg7_dl_0700E8D0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ccm_seg7_dl_0700E928),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
