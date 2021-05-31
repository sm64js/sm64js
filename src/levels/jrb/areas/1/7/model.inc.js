// 0x07007628 - 0x07007668

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode, gsDPSetDepthSource,
    gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2, G_ZS_PIXEL, G_FOG, G_CC_DECALRGBA, G_CC_PASS2,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    jrb_seg7_texture_07000000, jrb_seg7_texture_07000800
} from "../../../texture.inc"

const jrb_seg7_vertex_07007628 = [
    [[  4569,  -5221,   2892], 0, [  4056,   6098], [0xff, 0xff, 0xff, 0xff]],
    [[  5388,  -5221,   2892], 0, [  4056,  -2076], [0xff, 0xff, 0xff, 0xff]],
    [[  5388,  -5221,   2073], 0, [ -4118,  -2076], [0xff, 0xff, 0xff, 0xff]],
    [[  4569,  -5221,   2073], 0, [ -4118,   6098], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07007668 - 0x070076A8
const jrb_seg7_vertex_07007668 = [
    [[  7521,  -2815,   2397], 0, [  4736,   3544], [0xff, 0xff, 0xff, 0xff]],
    [[  7337,  -3532,   1704], 0, [ -2072,  -1566], [0xff, 0xff, 0xff, 0xff]],
    [[  7521,  -3532,   2397], 0, [ -2072,   3544], [0xff, 0xff, 0xff, 0xff]],
    [[  7337,  -2815,   1704], 0, [  4736,  -1566], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070076A8 - 0x070076E0
const jrb_seg7_dl_070076A8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, jrb_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_07007628, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070076E0 - 0x07007718
const jrb_seg7_dl_070076E0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, jrb_seg7_texture_07000800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_07007668, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007718 - 0x070077F0
export const jrb_seg7_dl_07007718 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(5, 80, 75, 255),
    gsSPFogPosition(900, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_070076A8),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_070076E0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
