// 0x0700BB68 - 0x0700BB80

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { snow_09008000 } from "../../../../../textures/snow"

const sl_seg7_lights_0700BB68 = gdSPDefLights1(
    0x7f, 0x7f, 0x7f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700BB80 - 0x0700BC80
const sl_seg7_vertex_0700BB80 = [
    [[  -204,    317,   1229], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   205,    317,    819], 0, [  2012,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[  -204,    317,    819], 0, [  2012,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   205,    317,   1229], 0, [     0,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[   205,    317,    819], 0, [  2012,  -1054], [0x00, 0x00, 0x81, 0xff]],
    [[   205,    307,    819], 0, [  2012,  -1054], [0x00, 0x00, 0x81, 0xff]],
    [[  -204,    307,    819], 0, [  2012,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -204,    317,    819], 0, [  2012,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -204,    307,    819], 0, [  2012,    990], [0x00, 0x81, 0x00, 0xff]],
    [[   205,    307,    819], 0, [  2012,  -1054], [0x00, 0x81, 0x00, 0xff]],
    [[   205,    307,   1229], 0, [     0,  -1054], [0x00, 0x81, 0x00, 0xff]],
    [[  -204,    307,   1229], 0, [     0,    990], [0x00, 0x81, 0x00, 0xff]],
    [[  -204,    317,   1229], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -204,    307,   1229], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   205,    307,   1229], 0, [     0,  -1054], [0x00, 0x00, 0x7f, 0xff]],
    [[   205,    317,   1229], 0, [     0,  -1054], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x0700BC80 - 0x0700BCF8
const sl_seg7_dl_0700BC80 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, snow_09008000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(sl_seg7_lights_0700BB68.l, 1),
    gsSPLight(sl_seg7_lights_0700BB68.a, 2),
    gsSPVertex(sl_seg7_vertex_0700BB80, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700BCF8 - 0x0700BD68
export const sl_seg7_dl_0700BCF8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(sl_seg7_dl_0700BC80),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
