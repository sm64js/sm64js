// 0x07002000 - 0x070020C0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGBA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { texture_metal_hole } from "../../../../../textures/sky"

const bitfs_seg7_vertex_07002000 = [
    [[  1280,    348,   -293], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1178,    348,   -293], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1280,    266,   -231], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1178,    266,   -231], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -1330,   3625,   -703], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1433,   3625,   -703], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1330,   3543,   -642], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -1433,   3543,   -642], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3173,   3625,   -707], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3276,   3625,   -707], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3173,   3543,   -646], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3276,   3543,   -646], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070020C0 - 0x07002118
const bitfs_seg7_dl_070020C0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_metal_hole),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_07002000, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07002118 - 0x07002188
export const bitfs_seg7_dl_07002118 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_070020C0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
