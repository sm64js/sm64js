// 0x07021E50 - 0x07021E68

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode,
    gsDPSetDepthSource, gsDPSetFogColor, gsSPFogFactor, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE,
    G_RM_AA_ZB_TEX_EDGE2, G_CC_DECALRGBA, G_LIGHTING, G_TX_CLAMP, G_RM_AA_ZB_TEX_EDGE, gsSPFogPosition
} from "../../../include/gbi"
import { ssl_seg7_texture_07002800, ssl_seg7_texture_07003800 } from "../texture.inc"
import { generic_09002000 } from "../../../textures/generic"

const ssl_seg7_lights_07021E50 = gdSPDefLights1(
    0x7f, 0x7f, 0x7f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07021E68 - 0x07021EE8
const ssl_seg7_vertex_07021E68 = [
    [[  -224,      0,   -224], 0, [   990,    990], [0xd6, 0xac, 0xac, 0xff]],
    [[   224,      0,    224], 0, [     0,      0], [0x2a, 0xac, 0x54, 0xff]],
    [[  -224,      0,    224], 0, [     0,    990], [0x99, 0xcd, 0x33, 0xff]],
    [[   224,      0,   -224], 0, [   990,      0], [0x67, 0xcd, 0xcd, 0xff]],
    [[  -224,    450,    224], 0, [     0,    990], [0xd6, 0x54, 0x54, 0xff]],
    [[   224,    450,   -224], 0, [   990,      0], [0x2a, 0x54, 0xac, 0xff]],
    [[  -224,    450,   -224], 0, [   990,    990], [0x99, 0x33, 0xcd, 0xff]],
    [[   224,    450,    224], 0, [     0,      0], [0x67, 0x33, 0x33, 0xff]],
];

// 0x07021EE8 - 0x07021FE8
const ssl_seg7_vertex_07021EE8 = [
    [[   224,    450,   -224], 0, [     0,      0], [0x2a, 0x54, 0xac, 0xff]],
    [[  -224,      0,   -224], 0, [   990,   2012], [0xd6, 0xac, 0xac, 0xff]],
    [[  -224,    450,   -224], 0, [   990,      0], [0x99, 0x33, 0xcd, 0xff]],
    [[  -224,    450,    224], 0, [     0,      0], [0xd6, 0x54, 0x54, 0xff]],
    [[   224,      0,    224], 0, [   990,   2012], [0x2a, 0xac, 0x54, 0xff]],
    [[   224,    450,    224], 0, [   990,      0], [0x67, 0x33, 0x33, 0xff]],
    [[  -224,      0,    224], 0, [     0,   2012], [0x99, 0xcd, 0x33, 0xff]],
    [[  -224,    450,   -224], 0, [     0,      0], [0x99, 0x33, 0xcd, 0xff]],
    [[  -224,      0,   -224], 0, [     0,   2012], [0xd6, 0xac, 0xac, 0xff]],
    [[  -224,      0,    224], 0, [   990,   2012], [0x99, 0xcd, 0x33, 0xff]],
    [[  -224,    450,    224], 0, [   990,      0], [0xd6, 0x54, 0x54, 0xff]],
    [[   224,    450,    224], 0, [     0,      0], [0x67, 0x33, 0x33, 0xff]],
    [[   224,      0,    224], 0, [     0,   2012], [0x2a, 0xac, 0x54, 0xff]],
    [[   224,      0,   -224], 0, [   990,   2012], [0x67, 0xcd, 0xcd, 0xff]],
    [[   224,    450,   -224], 0, [   990,      0], [0x2a, 0x54, 0xac, 0xff]],
    [[   224,      0,   -224], 0, [     0,   2012], [0x67, 0xcd, 0xcd, 0xff]],
];

// 0x07021FE8 - 0x07022040
const ssl_seg7_dl_07021FE8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, generic_09002000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ssl_seg7_lights_07021E50.l, 1),
    gsSPLight(ssl_seg7_lights_07021E50.a, 2),
    gsSPVertex(ssl_seg7_vertex_07021E68, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07022040 - 0x070220A8
const ssl_seg7_dl_07022040 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ssl_seg7_texture_07002800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ssl_seg7_vertex_07021EE8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0,  0, 15,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070220A8 - 0x07022170
export const ssl_seg7_dl_070220A8 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(0x0E49, 0xF2B7),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ssl_seg7_dl_07021FE8),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ssl_seg7_dl_07022040),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x07022170 - 0x070221B0
const ssl_seg7_vertex_07022170 = [
    [[  -229,    382,   -157], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -229,     68,   -157], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -229,     68,    157], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -229,    382,    157], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070221B0 - 0x070221E8
const ssl_seg7_dl_070221B0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ssl_seg7_texture_07003800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ssl_seg7_vertex_07022170, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070221E8 - 0x070222A0
export const ssl_seg7_dl_070221E8 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(0x0E49, 0xF2B7),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ssl_seg7_dl_070221B0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
