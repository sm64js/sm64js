// Breakable Box

import {
    gdSPDefLights1, gsSPLight, gsSPVertex, gsSP2Triangles, gsSP1Triangle, gsSPTexture,
    gsDPPipeSync, gsDPSetCombineMode, gsSPSetGeometryMode, gsSPEndDisplayList,
    gsSPClearGeometryMode, gsDPSetTile, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPBranchList,
    G_TX_RENDERTILE, G_OFF, G_CC_SHADE, G_SHADING_SMOOTH, G_CC_MODULATERGB, G_IM_FMT_RGBA,
    G_IM_SIZ_16b, G_TX_LOADTILE, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, CALC_DXT, G_IM_SIZ_16b_BYTES
} from "../../include/gbi"

// 0x08011A78
const breakable_box_seg8_lights_08011A80 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x08011A90
export const breakable_box_seg8_texture_08011A90 = []
// actors/breakable_box/crazy_box_surface.rgba16.png

// 0x08012290
export const breakable_box_seg8_texture_08012290 = []
// actors/breakable_box/cork_box_surface.rgba16.png

// 0x08012A90
const breakable_box_seg8_vertex_08012A90 = [
    [[  -100,      0,   -100], 0, [   992,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -100,      0,    100], 0, [   992,    992], [0x81, 0x00, 0x00, 0xff]],
    [[  -100,    200,    100], 0, [     0,    992], [0x81, 0x00, 0x00, 0xff]],
    [[  -100,      0,    100], 0, [     0,    992], [0x00, 0x00, 0x7f, 0xff]],
    [[   100,      0,    100], 0, [   992,    992], [0x00, 0x00, 0x7f, 0xff]],
    [[   100,    200,    100], 0, [   992,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -100,    200,    100], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   100,      0,   -100], 0, [   992,      0], [0x00, 0x81, 0x00, 0xff]],
    [[   100,      0,    100], 0, [     0,      0], [0x00, 0x81, 0x00, 0xff]],
    [[  -100,      0,    100], 0, [     0,    992], [0x00, 0x81, 0x00, 0xff]],
    [[  -100,      0,   -100], 0, [   992,    992], [0x00, 0x81, 0x00, 0xff]],
    [[   100,    200,   -100], 0, [     0,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   100,    200,    100], 0, [     0,    992], [0x7f, 0x00, 0x00, 0xff]],
    [[   100,      0,    100], 0, [   992,    992], [0x7f, 0x00, 0x00, 0xff]],
    [[   100,      0,   -100], 0, [   992,      0], [0x7f, 0x00, 0x00, 0xff]],
];

// 0x08012B80
const breakable_box_seg8_vertex_08012B80 = [
    [[  -100,    200,    100], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   100,    200,   -100], 0, [   992,    992], [0x00, 0x7f, 0x00, 0xff]],
    [[  -100,    200,   -100], 0, [   992,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   100,    200,    100], 0, [     0,    992], [0x00, 0x7f, 0x00, 0xff]],
    [[   100,    200,   -100], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   100,      0,   -100], 0, [     0,    992], [0x00, 0x00, 0x81, 0xff]],
    [[  -100,      0,   -100], 0, [   992,    992], [0x00, 0x00, 0x81, 0xff]],
    [[  -100,    200,   -100], 0, [   992,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -100,      0,   -100], 0, [   992,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -100,    200,    100], 0, [     0,    992], [0x81, 0x00, 0x00, 0xff]],
    [[  -100,    200,   -100], 0, [     0,      0], [0x81, 0x00, 0x00, 0xff]],
];

// 0x08012C30 - 0x08012CD8
export const breakable_box_seg8_dl_08012C30 = [
    gsSPLight(breakable_box_seg8_lights_08011A80.l, 1),
    gsSPLight(breakable_box_seg8_lights_08011A80.a, 2),
    gsSPVertex(breakable_box_seg8_vertex_08012A90, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(breakable_box_seg8_vertex_08012B80, 11, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP1Triangle( 8,  9, 10, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x08012CD8 - 0x08012D20
export const breakable_box_seg8_dl_08012CD8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x08012D20 - 0x08012D48
export const breakable_box_seg8_dl_08012D20 = [
    gsSPDisplayList(breakable_box_seg8_dl_08012CD8),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, breakable_box_seg8_texture_08011A90),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPBranchList(breakable_box_seg8_dl_08012C30),
].flat();

// 0x08012D20 - 0x08012D70
export const breakable_box_seg8_dl_08012D48 = [
    gsSPDisplayList(breakable_box_seg8_dl_08012CD8),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, breakable_box_seg8_texture_08012290),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPBranchList(breakable_box_seg8_dl_08012C30),
].flat();

// 1619272096 - 2021-04-24 04:08:36 -1000
