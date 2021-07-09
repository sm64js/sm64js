// 0x07006668 - 0x07006680

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    grass_09001000, grass_09000800
} from "../../../../../textures/grass"

const wf_seg7_lights_07006668 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07006680 - 0x070066C0
const wf_seg7_vertex_07006680 = [
    [[   256,   1075,   -255], 0, [ -9228,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  -255,   1075,   -255], 0, [ -9228,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[  -255,   1075,    256], 0, [-11272,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,   1075,    256], 0, [-11272,    990], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x070066C0 - 0x07006780
const wf_seg7_vertex_070066C0 = [
    [[   256,   1075,    256], 0, [  3034,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,      0,   -255], 0, [  5078,   4258], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,   1075,   -255], 0, [  5078,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   256,      0,    256], 0, [  3034,   4258], [0x7f, 0x00, 0x00, 0xff]],
    [[  -255,   1075,    256], 0, [ -1052,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,      0,    256], 0, [   990,   4258], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,   1075,    256], 0, [   990,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -255,      0,    256], 0, [ -1052,   4258], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,   1075,   -255], 0, [ -1052,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -255,      0,   -255], 0, [   990,   4258], [0x00, 0x00, 0x81, 0xff]],
    [[  -255,   1075,   -255], 0, [   990,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   256,      0,   -255], 0, [ -1052,   4258], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07006780 - 0x070067C8
const wf_seg7_dl_07006780 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, grass_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(wf_seg7_lights_07006668.l, 1),
    gsSPLight(wf_seg7_lights_07006668.a, 2),
    gsSPVertex(wf_seg7_vertex_07006680, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070067C8 - 0x07006820
const wf_seg7_dl_070067C8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, grass_09000800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(wf_seg7_vertex_070066C0, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07006820 - 0x07006898
export const wf_seg7_dl_07006820 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(wf_seg7_dl_07006780),
    gsSPDisplayList(wf_seg7_dl_070067C8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
