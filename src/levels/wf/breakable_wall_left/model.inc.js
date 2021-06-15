// 0x0700F220 - 0x0700F238

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP1Triangle, gsSPEndDisplayList, gsSP2Triangles, gsDPPipeSync, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import {
    grass_09001000, grass_09000800
} from "../../../textures/grass"

const wf_seg7_lights_0700F220 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700F238 - 0x0700F268
const wf_seg7_vertex_0700F238 = [
    [[     0,    384,   -378], 0, [ 10188,   8162], [0x00, 0x7f, 0x00, 0xff]],
    [[  -168,    384,   -378], 0, [  9514,   8162], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    384,    128], 0, [ 10188,  10186], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x0700F268 - 0x0700F2C8
const wf_seg7_vertex_0700F268 = [
    [[     0,   -383,    128], 0, [  1080,   3032], [0x88, 0x00, 0x28, 0xff]],
    [[     0,    384,    128], 0, [  1080,      0], [0x88, 0x00, 0x28, 0xff]],
    [[  -168,    384,   -378], 0, [ -1052,      0], [0x88, 0x00, 0x28, 0xff]],
    [[     0,    384,   -378], 0, [  1992,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[     0,    384,    128], 0, [     0,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[     0,   -383,    128], 0, [     0,   3032], [0x7f, 0x00, 0x00, 0xff]],
];

// 0x0700F2C8 - 0x0700F308
const wf_seg7_dl_0700F2C8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, grass_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(wf_seg7_lights_0700F220.l, 1),
    gsSPLight(wf_seg7_lights_0700F220.a, 2),
    gsSPVertex(wf_seg7_vertex_0700F238, 3, 0),
    gsSP1Triangle( 0,  1,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700F308 - 0x0700F340
const wf_seg7_dl_0700F308 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, grass_09000800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(wf_seg7_vertex_0700F268, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700F340 - 0x0700F3B8
export const wf_seg7_dl_0700F340 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(wf_seg7_dl_0700F2C8),
    gsSPDisplayList(wf_seg7_dl_0700F308),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
