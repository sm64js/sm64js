// 0x07002000 - 0x07002018

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType,
    gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor, gsSPFogFactor, gsSPSetGeometryMode,
    gsDPSetCombineMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode, gsSPFogPosition,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2,
    G_CC_SHADE
} from "../../../../../include/gbi"
import {
    bowser_1_seg7_texture_07000000, bowser_1_seg7_texture_07001000,
    bowser_1_seg7_texture_07001800
} from "../../../texture.inc"

const bowser_1_seg7_lights_07002000 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07002018 - 0x07002108
const bowser_1_seg7_vertex_07002018 = [
    [[ -1535,    307,      0], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,      0], 0, [  1502,  -2712], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,  -1085], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  1086,    307,  -1085], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,  -1535], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,   1086], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1535,    307,      0], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  1086,    307,  -1085], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  1536,    307,      0], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,  -1535], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,  -1085], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  1086,    307,   1086], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,   1536], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,   1536], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,   1086], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07002108 - 0x07002138
const bowser_1_seg7_vertex_07002108 = [
    [[  1536,    307,      0], 0, [  3034,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,      0], 0, [  1502,  -2712], [0x00, 0x7f, 0x00, 0xff]],
    [[  1086,    307,   1086], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07002138 - 0x07002228
const bowser_1_seg7_vertex_07002138 = [
    [[  1086,    307,  -1085], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[  2172,    307,  -2171], 0, [     0,    990], [0x3e, 0x49, 0xae, 0xff]],
    [[     0,    307,  -3071], 0, [  4056,    990], [0xf5, 0x5c, 0xab, 0xff]],
    [[ -3071,    307,      0], 0, [  4056,    990], [0xb8, 0x68, 0x09, 0xff]],
    [[ -1535,    307,      0], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,  -1085], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -2171,    307,  -2171], 0, [     0,    990], [0xbb, 0x5c, 0xcc, 0xff]],
    [[ -3071,    307,      0], 0, [     0,    990], [0xb8, 0x68, 0x09, 0xff]],
    [[ -1085,    307,   1086], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1535,    307,      0], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -2171,    307,   2172], 0, [  4056,    990], [0xcc, 0x5c, 0x45, 0xff]],
    [[     0,    307,  -1535], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -2171,    307,  -2171], 0, [  4056,    990], [0xbb, 0x5c, 0xcc, 0xff]],
    [[ -1085,    307,  -1085], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,  -3071], 0, [     0,    990], [0xf5, 0x5c, 0xab, 0xff]],
];

// 0x07002228 - 0x07002318
const bowser_1_seg7_vertex_07002228 = [
    [[  2172,    307,   2172], 0, [     0,    990], [0x45, 0x5c, 0x34, 0xff]],
    [[  3072,    307,      0], 0, [  4056,    990], [0x55, 0x5c, 0xf5, 0xff]],
    [[  1536,    307,      0], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[  1086,    307,  -1085], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,  -3071], 0, [  4056,    990], [0xf5, 0x5c, 0xab, 0xff]],
    [[     0,    307,  -1535], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -2171,    307,   2172], 0, [     0,    990], [0xcc, 0x5c, 0x45, 0xff]],
    [[     0,    307,   3072], 0, [  4056,    990], [0x0b, 0x5c, 0x55, 0xff]],
    [[     0,    307,   1536], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1085,    307,   1086], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,   3072], 0, [     0,    990], [0x0b, 0x5c, 0x55, 0xff]],
    [[  1086,    307,   1086], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    307,   1536], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[  2172,    307,   2172], 0, [  4056,    990], [0x45, 0x5c, 0x34, 0xff]],
    [[  1086,    307,   1086], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07002318 - 0x07002358
const bowser_1_seg7_vertex_07002318 = [
    [[  3072,    307,      0], 0, [     0,    990], [0x55, 0x5c, 0xf5, 0xff]],
    [[  1086,    307,  -1085], 0, [  3034,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[  1536,    307,      0], 0, [   990,  -1478], [0x00, 0x7f, 0x00, 0xff]],
    [[  2172,    307,  -2171], 0, [  4056,    990], [0x3e, 0x49, 0xae, 0xff]],
];

// 0x07002358 - 0x07002448
const bowser_1_seg7_vertex_07002358 = [
    [[     0,  -2047,   3072], 0, [   990,   1996], [0xef, 0x00, 0x7d, 0xff]],
    [[     0,    307,   3072], 0, [   990,     -4], [0x0b, 0x5c, 0x55, 0xff]],
    [[ -2171,    307,   2172], 0, [     0,     -8], [0xcc, 0x5c, 0x45, 0xff]],
    [[  2172,  -2047,  -2171], 0, [   990,   1984], [0x65, 0x00, 0xb4, 0xff]],
    [[  3072,    307,      0], 0, [     0,    -12], [0x55, 0x5c, 0xf5, 0xff]],
    [[  3072,  -2047,      0], 0, [     0,   1988], [0x7d, 0x00, 0x11, 0xff]],
    [[  2172,    307,  -2171], 0, [   990,    -16], [0x3e, 0x49, 0xae, 0xff]],
    [[  3072,  -2047,      0], 0, [   990,   1984], [0x7d, 0x00, 0x11, 0xff]],
    [[  2172,    307,   2172], 0, [     0,    -20], [0x45, 0x5c, 0x34, 0xff]],
    [[  2172,  -2047,   2172], 0, [     0,   1980], [0x4c, 0x00, 0x65, 0xff]],
    [[  3072,    307,      0], 0, [   990,    -16], [0x55, 0x5c, 0xf5, 0xff]],
    [[  2172,  -2047,   2172], 0, [   990,   1988], [0x4c, 0x00, 0x65, 0xff]],
    [[     0,    307,   3072], 0, [     0,    -16], [0x0b, 0x5c, 0x55, 0xff]],
    [[     0,  -2047,   3072], 0, [     0,   1984], [0xef, 0x00, 0x7d, 0xff]],
    [[  2172,    307,   2172], 0, [   990,    -16], [0x45, 0x5c, 0x34, 0xff]],
];

// 0x07002448 - 0x07002538
const bowser_1_seg7_vertex_07002448 = [
    [[ -2171,  -2047,   2172], 0, [   990,   1992], [0x9b, 0x00, 0x4c, 0xff]],
    [[ -2171,    307,   2172], 0, [   990,    -12], [0xcc, 0x5c, 0x45, 0xff]],
    [[ -3071,    307,      0], 0, [     0,    -16], [0xb8, 0x68, 0x09, 0xff]],
    [[     0,  -2047,   3072], 0, [   990,   1996], [0xef, 0x00, 0x7d, 0xff]],
    [[ -2171,    307,   2172], 0, [     0,     -8], [0xcc, 0x5c, 0x45, 0xff]],
    [[ -2171,  -2047,   2172], 0, [     0,   1992], [0x9b, 0x00, 0x4c, 0xff]],
    [[     0,  -2047,  -3071], 0, [   990,   1992], [0x11, 0x00, 0x83, 0xff]],
    [[     0,    307,  -3071], 0, [   990,    -16], [0xf5, 0x5c, 0xab, 0xff]],
    [[  2172,    307,  -2171], 0, [     0,    -20], [0x3e, 0x49, 0xae, 0xff]],
    [[  2172,  -2047,  -2171], 0, [     0,   1988], [0x65, 0x00, 0xb4, 0xff]],
    [[ -2171,  -2047,  -2171], 0, [   990,   1996], [0xb4, 0x00, 0x9b, 0xff]],
    [[ -2171,    307,  -2171], 0, [   990,    -12], [0xbb, 0x5c, 0xcc, 0xff]],
    [[     0,    307,  -3071], 0, [     0,    -16], [0xf5, 0x5c, 0xab, 0xff]],
    [[     0,  -2047,  -3071], 0, [     0,   1996], [0x11, 0x00, 0x83, 0xff]],
    [[ -3071,  -2047,      0], 0, [     0,   1988], [0x83, 0x00, 0xef, 0xff]],
];

// 0x07002538 - 0x07002578
const bowser_1_seg7_vertex_07002538 = [
    [[ -3071,  -2047,      0], 0, [   990,   1996], [0x83, 0x00, 0xef, 0xff]],
    [[ -2171,    307,  -2171], 0, [     0,    -16], [0xbb, 0x5c, 0xcc, 0xff]],
    [[ -2171,  -2047,  -2171], 0, [     0,   1988], [0xb4, 0x00, 0x9b, 0xff]],
    [[ -3071,    307,      0], 0, [   990,     -8], [0xb8, 0x68, 0x09, 0xff]],
];

// 0x07002578 - 0x070025F8
const bowser_1_seg7_dl_07002578 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bowser_1_seg7_texture_07001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bowser_1_seg7_lights_07002000.l, 1),
    gsSPLight(bowser_1_seg7_lights_07002000.a, 2),
    gsSPVertex(bowser_1_seg7_vertex_07002018, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
    gsSP2Triangles( 5,  1,  6, 0x0,  7,  1,  8, 0x0),
    gsSP2Triangles( 1,  9, 10, 0x0, 11,  1, 12, 0x0),
    gsSP1Triangle(13,  1, 14, 0x0),
    gsSPVertex(bowser_1_seg7_vertex_07002108, 3, 0),
    gsSP1Triangle( 0,  1,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070025F8 - 0x070026B0
const bowser_1_seg7_dl_070025F8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bowser_1_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bowser_1_seg7_vertex_07002138, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bowser_1_seg7_vertex_07002228, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(bowser_1_seg7_vertex_07002318, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070026B0 - 0x07002768
const bowser_1_seg7_dl_070026B0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bowser_1_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bowser_1_seg7_vertex_07002358, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bowser_1_seg7_vertex_07002448, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(bowser_1_seg7_vertex_07002538, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07002768 - 0x07002838
export const bowser_1_seg7_dl_07002768 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(10, 30, 20, 255),
    gsSPFogPosition(0x10AA, 0xF056),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bowser_1_seg7_dl_07002578),
    gsSPDisplayList(bowser_1_seg7_dl_070025F8),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 6, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bowser_1_seg7_dl_070026B0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-28 04:16:48 -0700 (Convert.rb 2021-05-28 04:03:04 -0700)
