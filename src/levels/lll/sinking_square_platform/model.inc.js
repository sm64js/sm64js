// 0x07019C80 - 0x07019D20

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { fire_09004000 } from "../../../textures/fire"

import { lll_seg7_lights_0700FC00, lll_seg7_lights_0700FC60, lll_seg7_lights_0700FC48 } from "../areas/1/light.inc"

const lll_seg7_vertex_07019C80 = [
    [[  -509,     41,   -511], 0, [   -30,      0], [0x00, 0x7e, 0x0a, 0xff]],
    [[ -1023,      0,      0], 0, [  -542,    478], [0x00, 0x7e, 0x0a, 0xff]],
    [[    -1,      0,      0], 0, [   476,    480], [0x00, 0x7e, 0x0a, 0xff]],
    [[ -1023,      0,   1024], 0, [  -542,   1500], [0x00, 0x7e, 0x0a, 0xff]],
    [[     0,      0,   1024], 0, [   480,   1500], [0x00, 0x7e, 0x0a, 0xff]],
    [[  -509,     41,    512], 0, [   -30,    990], [0x00, 0x7e, 0x0a, 0xff]],
    [[  1024,      0,   1024], 0, [  1502,   1500], [0x00, 0x7e, 0x0a, 0xff]],
    [[   514,     41,    512], 0, [   992,    990], [0x00, 0x7e, 0x0a, 0xff]],
    [[  1024,      0,      0], 0, [  1502,    478], [0x00, 0x7e, 0x0a, 0xff]],
    [[   514,     41,   -511], 0, [   992,      0], [0x00, 0x7e, 0x0a, 0xff]],
];

// 0x07019D20 - 0x07019E20
const lll_seg7_vertex_07019D20 = [
    [[     0,      0,  -1023], 0, [   480,   -544], [0xf6, 0x7e, 0x00, 0xff]],
    [[    -1,      0,      0], 0, [   476,    480], [0xf6, 0x7e, 0x00, 0xff]],
    [[   514,     41,   -511], 0, [   992,      0], [0xf6, 0x7e, 0x00, 0xff]],
    [[  1024,      0,  -1023], 0, [  1502,   -544], [0x0a, 0x7e, 0x00, 0xff]],
    [[   514,     41,   -511], 0, [   992,      0], [0x0a, 0x7e, 0x00, 0xff]],
    [[  1024,      0,      0], 0, [  1502,    478], [0x0a, 0x7e, 0x00, 0xff]],
    [[  1024,      0,   1024], 0, [  1502,   1500], [0x0a, 0x7e, 0x00, 0xff]],
    [[   514,     41,    512], 0, [   992,    990], [0x0a, 0x7e, 0x00, 0xff]],
    [[ -1023,      0,  -1023], 0, [  -542,   -544], [0xf6, 0x7e, 0x00, 0xff]],
    [[ -1023,      0,      0], 0, [  -542,    478], [0xf6, 0x7e, 0x00, 0xff]],
    [[  -509,     41,   -511], 0, [   -30,      0], [0xf6, 0x7e, 0x00, 0xff]],
    [[ -1023,      0,   1024], 0, [  -542,   1500], [0xf6, 0x7e, 0x00, 0xff]],
    [[  -509,     41,    512], 0, [   -30,    990], [0xf6, 0x7e, 0x00, 0xff]],
    [[     0,      0,  -1023], 0, [   480,   -544], [0x0a, 0x7e, 0x00, 0xff]],
    [[  -509,     41,   -511], 0, [   -30,      0], [0x0a, 0x7e, 0x00, 0xff]],
    [[    -1,      0,      0], 0, [   476,    480], [0x0a, 0x7e, 0x00, 0xff]],
];

// 0x07019E20 - 0x07019E80
const lll_seg7_vertex_07019E20 = [
    [[  -509,     41,    512], 0, [   -30,    990], [0x0a, 0x7e, 0x00, 0xff]],
    [[     0,      0,   1024], 0, [   480,   1500], [0x0a, 0x7e, 0x00, 0xff]],
    [[     0,      0,      0], 0, [   478,    480], [0x0a, 0x7e, 0x00, 0xff]],
    [[     0,      0,   1024], 0, [   480,   1500], [0xf6, 0x7e, 0x00, 0xff]],
    [[   514,     41,    512], 0, [   992,    990], [0xf6, 0x7e, 0x00, 0xff]],
    [[     0,      0,      0], 0, [   478,    480], [0xf6, 0x7e, 0x00, 0xff]],
];

// 0x07019E80 - 0x07019F20
const lll_seg7_vertex_07019E80 = [
    [[  1024,      0,  -1023], 0, [  1502,   -544], [0x00, 0x7e, 0xf6, 0xff]],
    [[     0,      0,  -1023], 0, [   480,   -544], [0x00, 0x7e, 0xf6, 0xff]],
    [[   514,     41,   -511], 0, [   992,      0], [0x00, 0x7e, 0xf6, 0xff]],
    [[ -1023,      0,  -1023], 0, [  -542,   -544], [0x00, 0x7e, 0xf6, 0xff]],
    [[  -509,     41,   -511], 0, [   -30,      0], [0x00, 0x7e, 0xf6, 0xff]],
    [[ -1023,      0,      0], 0, [  -542,    478], [0x00, 0x7e, 0xf6, 0xff]],
    [[  -509,     41,    512], 0, [   -30,    990], [0x00, 0x7e, 0xf6, 0xff]],
    [[     0,      0,      0], 0, [   478,    480], [0x00, 0x7e, 0xf6, 0xff]],
    [[   514,     41,    512], 0, [   992,    990], [0x00, 0x7e, 0xf6, 0xff]],
    [[  1024,      0,      0], 0, [  1502,    478], [0x00, 0x7e, 0xf6, 0xff]],
];

// 0x07019F20 - 0x0701A010
const lll_seg7_dl_07019F20 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09004000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(lll_seg7_lights_0700FC48.l, 1),
    gsSPLight(lll_seg7_lights_0700FC48.a, 2),
    gsSPVertex(lll_seg7_vertex_07019C80, 10, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  7, 0x0,  2,  8,  9, 0x0),
    gsSPLight(lll_seg7_lights_0700FC60.l, 1),
    gsSPLight(lll_seg7_lights_0700FC60.a, 2),
    gsSPVertex(lll_seg7_vertex_07019D20, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  5,  7, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 9, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(lll_seg7_vertex_07019E20, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPLight(lll_seg7_lights_0700FC00.l, 1),
    gsSPLight(lll_seg7_lights_0700FC00.a, 2),
    gsSPVertex(lll_seg7_vertex_07019E80, 10, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  8,  9,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0701A010 - 0x0701A080
export const lll_seg7_dl_0701A010 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_07019F20),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
