// 0x0700CEE0 - 0x0700CEF8

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { ddd_seg7_texture_07003000 } from "../texture.inc"

const ddd_seg7_lights_0700CEE0 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700CEF8 - 0x0700CFE8
const ddd_seg7_vertex_0700CEF8 = [
    [[    13,    512,    -12], 0, [   352,     16], [0x00, 0x00, 0x81, 0xff]],
    [[    13,      0,    -12], 0, [   352,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   -12,      0,    -12], 0, [   606,    990], [0x00, 0x00, 0x81, 0xff]],
    [[    77,    512,     77], 0, [  1118,     16], [0x00, 0x81, 0x00, 0xff]],
    [[   -76,    512,    -76], 0, [   606,     16], [0x00, 0x81, 0x00, 0xff]],
    [[    77,    512,    -76], 0, [   352,     16], [0x00, 0x81, 0x00, 0xff]],
    [[   -76,    512,     77], 0, [   862,     16], [0x00, 0x81, 0x00, 0xff]],
    [[   -76,    538,     77], 0, [   862,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[    77,    512,     77], 0, [  1118,     16], [0x00, 0x00, 0x7f, 0xff]],
    [[    77,    538,     77], 0, [  1118,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   -76,    512,     77], 0, [   862,     16], [0x00, 0x00, 0x7f, 0xff]],
    [[   -76,    538,    -76], 0, [   606,      0], [0x81, 0x00, 0x00, 0xff]],
    [[   -76,    512,    -76], 0, [   606,     16], [0x81, 0x00, 0x00, 0xff]],
    [[   -76,    512,     77], 0, [   862,     16], [0x81, 0x00, 0x00, 0xff]],
    [[   -76,    538,     77], 0, [   862,      0], [0x81, 0x00, 0x00, 0xff]],
];

// 0x0700CFE8 - 0x0700D0C8
const ddd_seg7_vertex_0700CFE8 = [
    [[    77,    538,    -76], 0, [   352,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   -76,    512,    -76], 0, [   606,     16], [0x00, 0x00, 0x81, 0xff]],
    [[   -76,    538,    -76], 0, [   606,      0], [0x00, 0x00, 0x81, 0xff]],
    [[    77,    512,    -76], 0, [   352,     16], [0x00, 0x00, 0x81, 0xff]],
    [[    77,    538,     77], 0, [    96,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[    77,    512,    -76], 0, [   352,     16], [0x7f, 0x00, 0x00, 0xff]],
    [[    77,    538,    -76], 0, [   352,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[    77,    512,     77], 0, [    96,     16], [0x7f, 0x00, 0x00, 0xff]],
    [[    13,    512,    -12], 0, [   352,     16], [0x00, 0x00, 0x81, 0xff]],
    [[   -12,      0,    -12], 0, [   606,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   -12,    512,    -12], 0, [   606,     16], [0x00, 0x00, 0x81, 0xff]],
    [[    13,    512,     13], 0, [    96,     16], [0x7f, 0x00, 0x00, 0xff]],
    [[    13,      0,    -12], 0, [   352,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[    13,    512,    -12], 0, [   352,     16], [0x7f, 0x00, 0x00, 0xff]],
];

// 0x0700D0C8 - 0x0700D1B8
const ddd_seg7_vertex_0700D0C8 = [
    [[   -12,    512,     13], 0, [   862,     16], [0x00, 0x00, 0x7f, 0xff]],
    [[    13,      0,     13], 0, [  1118,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[    13,    512,     13], 0, [  1118,     16], [0x00, 0x00, 0x7f, 0xff]],
    [[    13,      0,     13], 0, [  1118,    990], [0x00, 0x81, 0x00, 0xff]],
    [[   -12,      0,    -12], 0, [   606,    990], [0x00, 0x81, 0x00, 0xff]],
    [[    13,      0,    -12], 0, [   352,    990], [0x00, 0x81, 0x00, 0xff]],
    [[    13,    512,     13], 0, [    96,     16], [0x7f, 0x00, 0x00, 0xff]],
    [[    13,      0,     13], 0, [    96,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[    13,      0,    -12], 0, [   352,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   -12,    512,    -12], 0, [   606,     16], [0x81, 0x00, 0x00, 0xff]],
    [[   -12,      0,    -12], 0, [   606,    990], [0x81, 0x00, 0x00, 0xff]],
    [[   -12,      0,     13], 0, [   862,    990], [0x81, 0x00, 0x00, 0xff]],
    [[   -12,      0,     13], 0, [   862,    990], [0x00, 0x81, 0x00, 0xff]],
    [[   -12,    512,     13], 0, [   862,     16], [0x81, 0x00, 0x00, 0xff]],
    [[   -12,      0,     13], 0, [   862,    990], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x0700D1B8 - 0x0700D2A0
const ddd_seg7_dl_0700D1B8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07003000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_0700CEE0.l, 1),
    gsSPLight(ddd_seg7_lights_0700CEE0.a, 2),
    gsSPVertex(ddd_seg7_vertex_0700CEF8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700CFE8, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700D0C8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles( 3, 12,  4, 0x0,  9, 11, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700D2A0 - 0x0700D310
export const ddd_seg7_dl_0700D2A0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_0700D1B8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
