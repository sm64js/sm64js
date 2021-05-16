// Sparkles Animation

import {
    gsSPClearGeometryMode, gsDPSetCombineMode, gsSPTexture, gsDPSetTile, gsDPLoadSync,
    gsDPLoadBlock, gsDPSetTileSize, gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetTextureImage, gsSPBranchList,
    G_LIGHTING, G_CC_MODULATEIA, G_TX_RENDERTILE, G_ON, G_IM_FMT_IA, G_IM_SIZ_16b, G_TX_LOADTILE,
    G_TX_CLAMP, G_TX_NOLOD, CALC_DXT, G_IM_SIZ_16b_BYTES, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x04032A48
const sparkles_animation_seg4_vertex_04032A48 = [
    [[   -32,      0,      0], 0, [     0,    992], [0xff, 0xff, 0x64, 0xff]],
    [[    32,      0,      0], 0, [   992,    992], [0xff, 0xff, 0x64, 0xff]],
    [[    32,     64,      0], 0, [   992,      0], [0xff, 0xff, 0x64, 0xff]],
    [[   -32,     64,      0], 0, [     0,      0], [0xff, 0xff, 0x64, 0xff]],
];

// 0x04032A88
export const sparkles_animation_seg4_texture_04032A88 = []
// actors/sparkle_animation/sparkle_animation_0.ia16.png

// 0x04033288
export const sparkles_animation_seg4_texture_04033288 = []
// actors/sparkle_animation/sparkle_animation_1.ia16.png

// 0x04033A88
export const sparkles_animation_seg4_texture_04033A88 = []
// actors/sparkle_animation/sparkle_animation_2.ia16.png

// 0x04034288
export const sparkles_animation_seg4_texture_04034288 = []
// actors/sparkle_animation/sparkle_animation_3.ia16.png

// 0x04034A88
export const sparkles_animation_seg4_texture_04034A88 = []
// actors/sparkle_animation/sparkle_animation_4.ia16.png

// 0x04035288 - 0x04035300
export const sparkles_animation_seg4_dl_04035288 = [
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPVertex(sparkles_animation_seg4_vertex_04032A48, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsSPSetGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x04035300 - 0x04035318
export const sparkles_animation_seg4_dl_04035300 = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, sparkles_animation_seg4_texture_04032A88),
    gsSPBranchList(sparkles_animation_seg4_dl_04035288),
].flat();

// 0x04035318 - 0x04035330
export const sparkles_animation_seg4_dl_04035318 = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, sparkles_animation_seg4_texture_04033288),
    gsSPBranchList(sparkles_animation_seg4_dl_04035288),
].flat();

// 0x04035330 - 0x04035348
export const sparkles_animation_seg4_dl_04035330 = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, sparkles_animation_seg4_texture_04033A88),
    gsSPBranchList(sparkles_animation_seg4_dl_04035288),
].flat();

// 0x04035348 - 0x04035360
export const sparkles_animation_seg4_dl_04035348 = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, sparkles_animation_seg4_texture_04034288),
    gsSPBranchList(sparkles_animation_seg4_dl_04035288),
].flat();

// 0x04035360 - 0x04035378
export const sparkles_animation_seg4_dl_04035360 = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, sparkles_animation_seg4_texture_04034A88),
    gsSPBranchList(sparkles_animation_seg4_dl_04035288),
].flat();

// 1619267130 - 2021-04-24 03:14:05 -1000
