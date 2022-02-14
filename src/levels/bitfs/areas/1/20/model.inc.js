// 0x0700EE10 - 0x0700EF10

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { sky_09001000 } from "../../../../../textures/sky"

const bitfs_seg7_vertex_0700EE10 = [
    [[  2611,      0,  -1163], 0, [    60,   -548], [0x44, 0x44, 0x44, 0xff]],
    [[     5,      0,     -5], 0, [  4790,    222], [0x44, 0x44, 0x44, 0xff]],
    [[ -2559,      0,  -1163], 0, [  9444,   -514], [0x44, 0x44, 0x44, 0xff]],
    [[ -2559,      0,   1147], 0, [  9444,    990], [0x44, 0x44, 0x44, 0xff]],
    [[  2611,      0,   1147], 0, [    60,    990], [0x44, 0x44, 0x44, 0xff]],
    [[ -2559,    256,  -1112], 0, [ 10290,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2586,    256,  -1137], 0, [ 20562,    478], [0xff, 0xff, 0xff, 0xff]],
    [[ -2559,    256,  -1163], 0, [ 10290,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2586,    256,   1121], 0, [ 20562,    478], [0xff, 0xff, 0xff, 0xff]],
    [[ -2559,    256,   1096], 0, [ 10290,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2611,    256,   1147], 0, [ 20612,    478], [0xff, 0xff, 0xff, 0xff]],
    [[ -2559,    256,   1147], 0, [ 10290,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2611,    256,  -1163], 0, [  4938,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2586,    256,  -1137], 0, [  4886,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2611,    256,   1147], 0, [   326,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2586,    256,   1121], 0, [   376,    478], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700EF10 - 0x0700EFF0
const bitfs_seg7_vertex_0700EF10 = [
    [[  2586,    256,  -1137], 0, [ 20562,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2611,    256,  -1163], 0, [ 20612,    478], [0xff, 0xff, 0xff, 0xff]],
    [[ -2559,    256,  -1163], 0, [ 10290,    478], [0xff, 0xff, 0xff, 0xff]],
    [[  2611,      0,  -1163], 0, [  4938,    990], [0x64, 0x64, 0x64, 0xff]],
    [[  2611,    256,  -1163], 0, [  4938,    478], [0x64, 0x64, 0x64, 0xff]],
    [[  2611,      0,   1147], 0, [   326,    990], [0x64, 0x64, 0x64, 0xff]],
    [[  2611,    256,   1147], 0, [   326,    478], [0x64, 0x64, 0x64, 0xff]],
    [[  2586,    256,  -1137], 0, [  4886,    478], [0x64, 0x64, 0x64, 0xff]],
    [[  2534,    205,  -1086], 0, [  4784,    582], [0x64, 0x64, 0x64, 0xff]],
    [[  2586,    256,   1121], 0, [   376,    478], [0x64, 0x64, 0x64, 0xff]],
    [[  2534,    205,   1070], 0, [   480,    582], [0x64, 0x64, 0x64, 0xff]],
    [[  2611,      0,  -1163], 0, [ 20612,    990], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    256,  -1163], 0, [ 10290,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2611,    256,  -1163], 0, [ 20612,    478], [0x8c, 0x8c, 0x8c, 0xff]],
];

// 0x0700EFF0 - 0x0700F0E0
const bitfs_seg7_vertex_0700EFF0 = [
    [[  2534,    205,   1070], 0, [ 20460,    582], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    205,   1044], 0, [ 10290,    582], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2586,    256,   1121], 0, [ 20562,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    256,   1096], 0, [ 10290,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2611,    256,   1147], 0, [ 20612,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    256,   1147], 0, [ 10290,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2611,      0,   1147], 0, [ 20612,    990], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,      0,   1147], 0, [ 10290,    990], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2586,    256,  -1137], 0, [ 20562,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    256,  -1112], 0, [ 10290,    478], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2534,    205,  -1086], 0, [ 20460,    582], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    205,  -1060], 0, [ 10290,    582], [0x8c, 0x8c, 0x8c, 0xff]],
    [[  2611,      0,  -1163], 0, [ 20612,    990], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,      0,  -1163], 0, [ 10290,    990], [0x8c, 0x8c, 0x8c, 0xff]],
    [[ -2559,    256,  -1163], 0, [ 10290,    478], [0x8c, 0x8c, 0x8c, 0xff]],
];

// 0x0700F0E0 - 0x0700F1C8
const bitfs_seg7_dl_0700F0E0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_0700EE10, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 4,  1,  0, 0x0,  4,  3,  1, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 9, 11, 10, 0x0, 12, 13, 14, 0x0),
    gsSP1Triangle(13, 15, 14, 0x0),
    gsSPVertex(bitfs_seg7_vertex_0700EF10, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(bitfs_seg7_vertex_0700EFF0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700F1C8 - 0x0700F238
export const bitfs_seg7_dl_0700F1C8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_0700F0E0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
