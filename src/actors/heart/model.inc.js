// Heart

import {
    gsDPPipeSync, gsSPClearGeometryMode, gsDPSetCombineMode, gsDPLoadTextureBlock, gsSPTexture,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsSPEndDisplayList,
    G_LIGHTING, G_CULL_BACK, G_CC_MODULATERGBA, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_CLAMP,
    G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x0800D7A0
const heart_seg8_vertex_0800D7A0 = [
    [[   -50,    -50,      0], 0, [     0,    992], [0xff, 0xff, 0xff, 0xb4]],
    [[    50,    -50,      0], 0, [   992,    992], [0xff, 0xff, 0xff, 0xb4]],
    [[    50,     50,      0], 0, [   992,      0], [0xff, 0xff, 0xff, 0xb4]],
    [[   -50,     50,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xb4]],
];

// 0x0800D7E0
export const heart_seg8_texture_0800D7E0 = []
// actors/heart/spinning_heart.rgba16.png

// 0x0800DFE0 - 0x0800E078
export const heart_seg8_dl_0800DFE0 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsDPLoadTextureBlock(heart_seg8_texture_0800D7E0, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPVertex(heart_seg8_vertex_0800D7A0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 1619275628 - 2021-04-24 04:47:13 -1000
