// 0x07007430 - 0x070074D0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { grass_0900B000 } from "../../../../../textures/grass"

const thi_seg7_vertex_07007430 = [
    [[  1690,   -460,    922], 0, [     0,      0], [0x00, 0x00, 0x00, 0xb4]],
    [[  1690,   -460,    615], 0, [     0,    606], [0x00, 0x00, 0x00, 0xb4]],
    [[  1229,   -460,    922], 0, [   926,      0], [0x00, 0x00, 0x00, 0xb4]],
    [[  1690,   -153,    615], 0, [     0,    606], [0x00, 0x00, 0x00, 0xb4]],
    [[  1229,   -153,    922], 0, [   926,      0], [0x00, 0x00, 0x00, 0xb4]],
    [[  1505,   -153,    430], 0, [   352,    990], [0x00, 0x00, 0x00, 0xb4]],
    [[  1242,    -68,    497], 0, [   990,    990], [0x00, 0x00, 0x00, 0xb4]],
    [[  1198,   -153,    635], 0, [   990,    564], [0x00, 0x00, 0x00, 0xb4]],
    [[  1690,   -153,    430], 0, [     0,    990], [0x00, 0x00, 0x00, 0xb4]],
    [[  1198,   -153,    922], 0, [   990,      0], [0x00, 0x00, 0x00, 0xb4]],
];

// 0x070074D0 - 0x07007538
const thi_seg7_dl_070074D0 = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, grass_0900B000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(thi_seg7_vertex_07007430, 10, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  1, 0x0),
    gsSP2Triangles( 3,  4,  2, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 5,  3,  8, 0x0,  5,  4,  3, 0x0),
    gsSP2Triangles( 5,  9,  4, 0x0,  5,  7,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007538 - 0x070075A8
export const thi_seg7_dl_07007538 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(thi_seg7_dl_070074D0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
