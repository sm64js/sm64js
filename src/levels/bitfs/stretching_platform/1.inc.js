// 0x070101D8 - 0x070102D8

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGBA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { sky_09003800 } from "../../../textures/sky"

const bitfs_seg7_vertex_070101D8 = [
    [[     0,      0,   -298], 0, [     0,   1000], [0xff, 0xd4, 0x00, 0xff]],
    [[ -1125,    717,    315], 0, [  2012,  -3438], [0xff, 0xd4, 0x00, 0xff]],
    [[     0,      0,    314], 0, [  2004,   1002], [0xff, 0xd4, 0x00, 0xff]],
    [[  1331,   1946,   -911], 0, [  2008,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[   154,   2662,   -298], 0, [     0,  -3596], [0xff, 0xd4, 0x00, 0xff]],
    [[  1331,   1946,   -298], 0, [     0,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[   154,   2662,   -913], 0, [  2012,  -3596], [0xff, 0xd4, 0x00, 0xff]],
    [[   614,   1331,    315], 0, [  2012,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[  1331,   1946,   -298], 0, [     0,  -2150], [0xff, 0xd4, 0x00, 0xff]],
    [[   614,   1331,   -298], 0, [     0,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[  1331,   1946,    321], 0, [  2032,  -2150], [0xff, 0xd4, 0x00, 0xff]],
    [[  -306,   1331,   -918], 0, [  2028,  -2416], [0xff, 0xd4, 0x00, 0xff]],
    [[ -1125,    717,   -913], 0, [  2012,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[ -1125,    717,   -298], 0, [     0,    990], [0xff, 0xd4, 0x00, 0xff]],
    [[  -306,   1331,   -298], 0, [     0,  -2416], [0xff, 0xd4, 0x00, 0xff]],
    [[ -1125,    717,   -298], 0, [     0,  -3440], [0xff, 0xd4, 0x00, 0xff]],
];

// 0x070102D8 - 0x07010340
const bitfs_seg7_dl_070102D8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09003800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_070101D8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0,  0, 15,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07010340 - 0x070103B0
export const bitfs_seg7_dl_07010340 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_070102D8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
