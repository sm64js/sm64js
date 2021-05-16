// Bubble

import {
    gsDPPipeSync, gsDPSetCombineMode, gsSPTexture, gsDPLoadTextureBlock, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList,
    G_CC_DECALRGBA, G_TX_RENDERTILE, G_ON, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_CLAMP, G_TX_NOLOD,
    G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x0401CD20
const bubble_seg4_vertex_0401CD20 = [
    [[   -16,      0,      0], 0, [     0,    992], [0xff, 0xff, 0xff, 0xff]],
    [[    16,      0,      0], 0, [   992,    992], [0xff, 0xff, 0xff, 0xff]],
    [[    16,     32,      0], 0, [   992,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -16,     32,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0401CD60
export const bubble_seg4_texture_0401CD60 = []
// actors/bubble/bubble.rgba16.png

// 0x0401D560
export const bubble_seg4_texture_0401D560 = []
// actors/bubble/mr_i_bubble.rgba16.png

// 0x0401DD60 - 0x0401DDE0
export const bubble_seg4_dl_0401DD60 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(bubble_seg4_texture_0401CD60, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(bubble_seg4_vertex_0401CD20, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x0401DDE0 - 0x0401DE60
export const bubble_seg4_dl_0401DDE0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(bubble_seg4_texture_0401D560, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(bubble_seg4_vertex_0401CD20, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 1619267130 - 2021-04-24 03:12:01 -1000
