// 0x07013730 - 0x070137B0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_DECALRGBA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import {
    ccm_seg7_texture_07002900, ccm_seg7_texture_07002100
} from "../texture.inc"

const ccm_seg7_vertex_07013730 = [
    [[   120,     40,    177], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    41,     40,    200], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   120,    -41,    176], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    41,    -41,    198], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -119,    -41,    176], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   -40,    -41,    198], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   -40,     40,    200], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -119,     40,    177], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070137B0 - 0x070137F0
const ccm_seg7_vertex_070137B0 = [
    [[    51,    -68,    195], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -50,    -68,    195], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -50,   -118,    159], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    51,   -118,    159], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070137F0 - 0x07013838
const ccm_seg7_dl_070137F0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ccm_seg7_texture_07002900),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_07013730, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07013838 - 0x07013870
const ccm_seg7_dl_07013838 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ccm_seg7_texture_07002100),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ccm_seg7_vertex_070137B0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07013870 - 0x070138E8
export const ccm_seg7_dl_07013870 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ccm_seg7_dl_070137F0),
    gsSPDisplayList(ccm_seg7_dl_07013838),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
