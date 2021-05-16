// Smoke

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x05007280
const smoke_seg5_vertex_05007280 = [
    [[    26,     26,      0], 0, [   990,      0], [0xff, 0xff, 0xff, 0xb4]],
    [[   -25,     26,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xb4]],
    [[   -25,    -25,      0], 0, [     0,    990], [0xff, 0xff, 0xff, 0xb4]],
    [[    26,    -25,      0], 0, [   990,    990], [0xff, 0xff, 0xff, 0xb4]],
];

// 0x050072C0
export const smoke_seg5_texture_050072C0 = []
// actors/smoke/smoke.ia16.png

// 0x05007AC0 - 0x05007AF8
export const smoke_seg5_dl_05007AC0 = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, smoke_seg5_texture_050072C0),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(smoke_seg5_vertex_05007280, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05007AF8 - 0x05007B68
export const smoke_seg5_dl_05007AF8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(smoke_seg5_dl_05007AC0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 1618762576 - 2021-04-18 06:24:34 -1000
