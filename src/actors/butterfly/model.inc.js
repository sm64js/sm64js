// Butterfly

import {
    gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsSPTexture, gsDPLoadTextureBlock,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsSPEndDisplayList,
    G_CC_DECALRGBA, G_LIGHTING, G_CULL_BACK, G_TX_RENDERTILE, G_ON, G_IM_FMT_RGBA, G_IM_SIZ_16b,
    G_TX_CLAMP, G_TX_NOLOD, G_OFF, G_CC_SHADE
} from '../../include/gbi'

// 0x03004348
const butterfly_seg3_vertex_03004348 = [
    [[     0,      0,    -78], 0, [  2004,    -48], [0xff, 0xff, 0xff, 0xff]],
    [[    79,      0,     39], 0, [   -60,   4056], [0xff, 0xff, 0xff, 0xff]],
    [[    79,      0,    -78], 0, [   -56,    -48], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,    -78], 0, [  2004,    -48], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,     39], 0, [  2004,   4056], [0xff, 0xff, 0xff, 0xff]],
    [[    79,      0,     39], 0, [   -60,   4056], [0xff, 0xff, 0xff, 0xff]],
]

// 0x030043A8
export const butterfly_seg3_texture_030043A8 = []  // "actors/butterfly/butterfly_wing.rgba16.inc.c"

// 0x030053A8
const butterfly_seg3_vertex_030053A8 = [
    [[    79,      0,    -78], 0, [   -56,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,     39], 0, [  1972,   4024], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,    -78], 0, [  2000,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    79,      0,    -78], 0, [   -56,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    79,      0,     39], 0, [   -80,   4032], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,     39], 0, [  1972,   4024], [0xff, 0xff, 0xff, 0xff]],
]

// 0x03005408 - 0x030054A0
export const butterfly_seg3_dl_03005408 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(butterfly_seg3_texture_030043A8, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 64, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 6, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(butterfly_seg3_vertex_03004348, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPTexture(0x8000, 0x8000, 1, G_TX_RENDERTILE + 1, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].filter((obj) => obj).flat()

// 0x030054A0 - 0x03005538
export const butterfly_seg3_dl_030054A0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(butterfly_seg3_texture_030043A8, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 64, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 6, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(butterfly_seg3_vertex_030053A8, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPTexture(0x8000, 0x8000, 1, G_TX_RENDERTILE + 1, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].filter((obj) => obj).flat()

// 1618208663 - 2021-04-11 20:48:13 -1000
