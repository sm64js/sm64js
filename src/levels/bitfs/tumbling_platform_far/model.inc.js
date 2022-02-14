// 0x07010000 - 0x07010100

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { bitfs_seg7_texture_07001000 } from "../texture.inc"

const bitfs_seg7_vertex_07010000 = [
    [[  -575,      0,    307], 0, [   480,   -542], [0xd3, 0x53, 0x00, 0xff]],
    [[   576,    154,    307], 0, [  9678,   -542], [0xd3, 0x53, 0x00, 0xff]],
    [[  -575,    154,    307], 0, [   480,   -542], [0xd3, 0x53, 0x00, 0xff]],
    [[   576,      0,    307], 0, [  9678,   -542], [0xd3, 0x53, 0x00, 0xff]],
    [[  -575,    154,   -306], 0, [   480,    480], [0xd3, 0x53, 0x00, 0xff]],
    [[   576,      0,   -306], 0, [  9678,    480], [0xd3, 0x53, 0x00, 0xff]],
    [[  -575,      0,   -306], 0, [   480,    480], [0xd3, 0x53, 0x00, 0xff]],
    [[   576,    154,   -306], 0, [  9678,    480], [0xd3, 0x53, 0x00, 0xff]],
    [[  -575,      0,   -306], 0, [   480,    480], [0x78, 0x16, 0x01, 0xff]],
    [[   576,      0,   -306], 0, [  9678,    480], [0x78, 0x16, 0x01, 0xff]],
    [[   576,      0,    307], 0, [  9678,   -542], [0x78, 0x16, 0x01, 0xff]],
    [[  -575,      0,    307], 0, [   480,   -542], [0x78, 0x16, 0x01, 0xff]],
    [[  -575,    154,    307], 0, [   480,   -542], [0xfe, 0xa5, 0x39, 0xff]],
    [[   576,    154,   -306], 0, [  9678,    480], [0xfe, 0xa5, 0x39, 0xff]],
    [[  -575,    154,   -306], 0, [   480,    480], [0xfe, 0xa5, 0x39, 0xff]],
    [[   576,    154,    307], 0, [  9678,   -542], [0xfe, 0xa5, 0x39, 0xff]],
];

// 0x07010100 - 0x07010168
const bitfs_seg7_dl_07010100 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bitfs_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_07010000, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07010168 - 0x070101D8
export const bitfs_seg7_dl_07010168 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_07010100),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
