// 0x070191F0 - 0x07019230

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import {
    fire_0900B800, fire_09007800
} from "../../../textures/fire"

import { lll_seg7_lights_0700FC00 } from "../areas/1/light.inc"

const lll_seg7_vertex_070191F0 = [
    [[  -255,    154,   -575], 0, [   998,   1012], [0x00, 0x7f, 0x00, 0xff]],
    [[  -255,    154,    576], 0, [   998,  -8258], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,    576], 0, [     0,  -8258], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,   -575], 0, [     0,   1012], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07019230 - 0x07019330
const lll_seg7_vertex_07019230 = [
    [[  -255,      0,   -575], 0, [  3374,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -255,    154,   -575], 0, [  3374,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   256,    154,   -575], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -255,      0,    576], 0, [  7634,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -255,    154,   -575], 0, [     0,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -255,      0,   -575], 0, [     0,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -255,    154,    576], 0, [  7634,      0], [0x81, 0x00, 0x00, 0xff]],
    [[   256,      0,    576], 0, [  3374,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -255,    154,    576], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -255,      0,    576], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,    154,    576], 0, [  3374,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,      0,   -575], 0, [  7122,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,    154,    576], 0, [  -540,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,      0,    576], 0, [  -540,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,    154,   -575], 0, [  7122,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,      0,   -575], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07019330 - 0x07019378
const lll_seg7_dl_07019330 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_0900B800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(lll_seg7_lights_0700FC00.l, 1),
    gsSPLight(lll_seg7_lights_0700FC00.a, 2),
    gsSPVertex(lll_seg7_vertex_070191F0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07019378 - 0x070193E0
const lll_seg7_dl_07019378 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(lll_seg7_vertex_07019230, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070193E0 - 0x07019470
export const lll_seg7_dl_070193E0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_07019330),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_07019378),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
