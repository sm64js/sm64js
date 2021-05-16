// TODO: what is this? 0700C960-0700C968 [8,8]

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsDPSetRenderMode, gsDPSetTextureFilter,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_DECALFADEA,
    G_RM_XLU_SURF, G_RM_XLU_SURF2, G_TF_BILERP, G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK,
    G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE,
    G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2
} from "../../../../../include/gbi"

// 0x0700C968 - 0x0700C9A8
const castle_grounds_seg7_vertex_0700C968 = [
    [[     0,     82,      0], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -71,    -81,      0], 0, [     0,   2012], [0xff, 0xff, 0xff, 0xff]],
    [[     0,    -81,      0], 0, [   990,   2012], [0xff, 0xff, 0xff, 0xff]],
    [[   -71,     82,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700C9A8 - 0x0700C9E8
const castle_grounds_seg7_vertex_0700C9A8 = [
    [[    72,     82,      0], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,    -81,      0], 0, [     0,   2012], [0xff, 0xff, 0xff, 0xff]],
    [[    72,    -81,      0], 0, [   990,   2012], [0xff, 0xff, 0xff, 0xff]],
    [[     0,     82,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700C9E8 - 0x0700D9E8
export const castle_grounds_seg7_texture_0700C9E8 = []
// levels/castle_grounds/3.rgba16.png

// 0x0700D9E8 - 0x0700E9E8
export const castle_grounds_seg7_texture_0700D9E8 = []
// levels/castle_grounds/4.rgba16.png

// 0x0700E9E8 - 0x0700EA20
const castle_grounds_seg7_dl_0700E9E8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, castle_grounds_seg7_texture_0700C9E8),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(castle_grounds_seg7_vertex_0700C968, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700EA20 - 0x0700EA58
const castle_grounds_seg7_dl_0700EA20 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, castle_grounds_seg7_texture_0700D9E8),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(castle_grounds_seg7_vertex_0700C9A8, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700EA58 - 0x0700EAE8
export const castle_grounds_seg7_dl_0700EA58 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALFADEA, G_CC_DECALFADEA),
    gsDPSetRenderMode(G_RM_XLU_SURF, G_RM_XLU_SURF2),
    gsDPSetTextureFilter(G_TF_BILERP),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(castle_grounds_seg7_dl_0700E9E8),
    gsSPDisplayList(castle_grounds_seg7_dl_0700EA20),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 1618763470 - 2021-04-18 06:31:12 -1000
