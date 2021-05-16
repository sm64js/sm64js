// Mist

import {
    gsDPPipeSync, gsSPClearGeometryMode, gsDPSetCombineMode, gsDPLoadTextureBlock, gsSPTexture,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsDPSetEnvColor, gsSPEndDisplayList,
    G_LIGHTING, G_CC_MODULATEIFADEA, G_IM_FMT_IA, G_IM_SIZ_16b, G_TX_CLAMP, G_TX_NOLOD,
    G_TX_RENDERTILE, G_ON, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x03000000
const mist_seg3_vertex_03000000 = [
    [[   -25,    -25,      0], 0, [     0,    992], [0xff, 0xff, 0xff, 0xff]],
    [[    25,    -25,      0], 0, [   992,    992], [0xff, 0xff, 0xff, 0xff]],
    [[    25,     25,      0], 0, [   992,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -25,     25,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x03000040
const mist_seg3_vertex_03000040 = [
    [[   -25,    -25,      0], 0, [     0,    992], [0x22, 0x1a, 0x1c, 0xff]],
    [[    25,    -25,      0], 0, [   992,    992], [0x22, 0x1a, 0x1c, 0xff]],
    [[    25,     25,      0], 0, [   992,      0], [0x22, 0x1a, 0x1c, 0xff]],
    [[   -25,     25,      0], 0, [     0,      0], [0x22, 0x1a, 0x1c, 0xff]],
];

// 0x03000080
export const mist_seg3_texture_03000080 = []
// actors/mist/mist.ia16.png

// 0x03000880 - 0x03000920
export const mist_seg3_dl_03000880 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_MODULATEIFADEA, G_CC_MODULATEIFADEA),
    gsDPLoadTextureBlock(mist_seg3_texture_03000080, G_IM_FMT_IA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPVertex(mist_seg3_vertex_03000000, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPEndDisplayList(),
].flat();

// 0x03000920 - 0x030009C0
export const mist_seg3_dl_03000920 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_MODULATEIFADEA, G_CC_MODULATEIFADEA),
    gsDPLoadTextureBlock(mist_seg3_texture_03000080, G_IM_FMT_IA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPVertex(mist_seg3_vertex_03000040, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPEndDisplayList(),
].flat();

// 1619267130 - 2021-04-24 03:28:33 -1000
