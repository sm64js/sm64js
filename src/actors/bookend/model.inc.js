// Bookend

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_CULL_BACK, G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD,
    G_TX_RENDERTILE, G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// Unreferenced light group
const bookend_lights_unused1 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// Unreferenced light group
const bookend_lights_unused2 = gdSPDefLights1(
    0x03, 0x19, 0x09,
    0x0c, 0x66, 0x26, 0x28, 0x28, 0x28
);

// Unreferenced light group
const bookend_lights_unused3 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// Unreferenced light group
const bookend_lights_unused4 = gdSPDefLights1(
    0x3f, 0x00, 0x00,
    0xff, 0x00, 0x00, 0x28, 0x28, 0x28
);

// 0x05000060
export const bookend_seg5_texture_05000060 = []
// actors/bookend/bookend_spine.rgba16.png

// 0x05000460
export const bookend_seg5_texture_05000460 = []
// actors/bookend/bookend_tooth.rgba16.png

// 0x05000860
export const bookend_seg5_texture_05000860 = []
// actors/bookend/bookend_mouth.rgba16.png

// 0x05000C60
export const bookend_seg5_texture_05000C60 = []
// actors/bookend/bookend_pages.rgba16.png

// 0x05001060
export const bookend_seg5_texture_05001060 = []
// actors/bookend/bookend_cover.rgba16.png

// 0x05001860
const bookend_seg5_lights_05001860 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05001878
const bookend_seg5_vertex_05001878 = [
    [[   -10,      0,    108], 0, [     0,    990], [0x83, 0xed, 0x00, 0xff]],
    [[    -4,    -39,   -109], 0, [   479,      0], [0x83, 0xed, 0x00, 0xff]],
    [[    -4,    -39,    108], 0, [   479,    990], [0x83, 0xed, 0x00, 0xff]],
    [[   -10,      0,   -109], 0, [     0,      0], [0x83, 0xed, 0x00, 0xff]],
];

// 0x050018B8
const bookend_seg5_vertex_050018B8 = [
    [[    -4,    -39,   -109], 0, [   479,      0], [0x00, 0x81, 0x00, 0xff]],
    [[   185,    -39,    108], 0, [     0,    990], [0x00, 0x81, 0x00, 0xff]],
    [[    -4,    -39,    108], 0, [   479,    990], [0x00, 0x81, 0x00, 0xff]],
    [[   185,    -39,   -109], 0, [     0,      0], [0x00, 0x81, 0x00, 0xff]],
];

// 0x050018F8 - 0x05001940
export const bookend_seg5_dl_050018F8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000060),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_05001860.l, 1),
    gsSPLight(bookend_seg5_lights_05001860.a, 2),
    gsSPVertex(bookend_seg5_vertex_05001878, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001940 - 0x05001978
export const bookend_seg5_dl_05001940 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05001060),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bookend_seg5_vertex_050018B8, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001978 - 0x05001A08
export const bookend_seg5_dl_05001978 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_050018F8),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05001940),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x05001A08
const bookend_seg5_lights_05001A08 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05001A20
const bookend_seg5_vertex_05001A20 = [
    [[    -4,    -39,   -107], 0, [   479,    990], [0x83, 0xed, 0x00, 0xff]],
    [[    -4,    -39,    110], 0, [   479,      0], [0x83, 0xed, 0x00, 0xff]],
    [[   -10,      0,    110], 0, [     0,      0], [0x83, 0xed, 0x00, 0xff]],
    [[   -10,      0,   -107], 0, [     0,    990], [0x83, 0xed, 0x00, 0xff]],
];

// 0x05001A60
const bookend_seg5_vertex_05001A60 = [
    [[    -4,    -39,   -107], 0, [     0,    990], [0x00, 0x81, 0x00, 0xff]],
    [[   185,    -39,    110], 0, [   990,      0], [0x00, 0x81, 0x00, 0xff]],
    [[    -4,    -39,    110], 0, [     0,      0], [0x00, 0x81, 0x00, 0xff]],
    [[   185,    -39,   -107], 0, [   990,    990], [0x00, 0x81, 0x00, 0xff]],
];

// 0x05001AA0 - 0x05001AE8
export const bookend_seg5_dl_05001AA0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000060),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_05001A08.l, 1),
    gsSPLight(bookend_seg5_lights_05001A08.a, 2),
    gsSPVertex(bookend_seg5_vertex_05001A20, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001AE8 - 0x05001B20
export const bookend_seg5_dl_05001AE8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05001060),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bookend_seg5_vertex_05001A60, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001B20 - 0x05001BB0
export const bookend_seg5_dl_05001B20 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05001AA0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05001AE8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x05001BB0
const bookend_seg5_lights_05001BB0 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05001BC8
const bookend_seg5_vertex_05001BC8 = [
    [[   -10,      0,    103], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   159,      0,   -104], 0, [   479,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   -10,      0,   -104], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   159,      0,    103], 0, [   479,    990], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x05001C08
const bookend_seg5_vertex_05001C08 = [
    [[   159,      0,    103], 0, [     0,     -6], [0x00, 0x00, 0x7f, 0xff]],
    [[   -10,      0,    103], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[    -4,    -38,    103], 0, [   479,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   170,    -38,    103], 0, [   479,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   159,      0,   -104], 0, [     0,      0], [0x79, 0x23, 0x00, 0xff]],
    [[   159,      0,    103], 0, [     0,    990], [0x79, 0x23, 0x00, 0xff]],
    [[   170,    -38,    103], 0, [   479,    990], [0x79, 0x23, 0x00, 0xff]],
    [[   170,    -38,   -104], 0, [   479,      0], [0x79, 0x23, 0x00, 0xff]],
    [[   -10,      0,   -104], 0, [     0,     -6], [0x00, 0x00, 0x81, 0xff]],
    [[   159,      0,   -104], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   170,    -38,   -104], 0, [   479,    990], [0x00, 0x00, 0x81, 0xff]],
    [[    -4,    -38,   -104], 0, [   479,      0], [0x00, 0x00, 0x81, 0xff]],
];

// 0x05001CC8 - 0x05001D10
export const bookend_seg5_dl_05001CC8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000860),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_05001BB0.l, 1),
    gsSPLight(bookend_seg5_lights_05001BB0.a, 2),
    gsSPVertex(bookend_seg5_vertex_05001BC8, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001D10 - 0x05001D68
export const bookend_seg5_dl_05001D10 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000C60),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bookend_seg5_vertex_05001C08, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001D68 - 0x05001DE0
export const bookend_seg5_dl_05001D68 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05001CC8),
    gsSPDisplayList(bookend_seg5_dl_05001D10),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x05001DE0
const bookend_seg5_lights_05001DE0 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05001DF8
const bookend_seg5_vertex_05001DF8 = [
    [[   -10,      0,    105], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   159,      0,   -102], 0, [   479,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   -10,      0,   -102], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   159,      0,    105], 0, [   479,      0], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x05001E38
const bookend_seg5_vertex_05001E38 = [
    [[   170,    -38,   -102], 0, [   479,    990], [0x00, 0x00, 0x81, 0xff]],
    [[    -4,    -38,   -102], 0, [   479,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   -10,      0,   -102], 0, [     0,     -6], [0x00, 0x00, 0x81, 0xff]],
    [[   159,      0,   -102], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   170,    -38,    105], 0, [   479,    990], [0x79, 0x23, 0x00, 0xff]],
    [[   170,    -38,   -102], 0, [   479,      0], [0x79, 0x23, 0x00, 0xff]],
    [[   159,      0,   -102], 0, [     0,      0], [0x79, 0x23, 0x00, 0xff]],
    [[   159,      0,    105], 0, [     0,    990], [0x79, 0x23, 0x00, 0xff]],
    [[    -4,    -38,    105], 0, [   479,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   170,    -38,    105], 0, [   479,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   159,      0,    105], 0, [     0,     -6], [0x00, 0x00, 0x7f, 0xff]],
    [[   -10,      0,    105], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x05001EF8 - 0x05001F40
export const bookend_seg5_dl_05001EF8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000860),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_05001DE0.l, 1),
    gsSPLight(bookend_seg5_lights_05001DE0.a, 2),
    gsSPVertex(bookend_seg5_vertex_05001DF8, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001F40 - 0x05001F98
export const bookend_seg5_dl_05001F40 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000C60),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bookend_seg5_vertex_05001E38, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05001F98 - 0x05002010
export const bookend_seg5_dl_05001F98 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05001EF8),
    gsSPDisplayList(bookend_seg5_dl_05001F40),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x05002010
const bookend_seg5_lights_05002010 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05002028
const bookend_seg5_vertex_05002028 = [
    [[   157,     -1,    -48], 0, [     6,    358], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,    -72], 0, [   475,    624], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,    -99], 0, [   372,  -1002], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,      0], 0, [   106,    390], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,    -24], 0, [   465,    636], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,    -48], 0, [   461,   -950], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,     51], 0, [   -54,    352], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,     26], 0, [   478,    570], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,      0], 0, [   446,   -978], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,    103], 0, [    66,    302], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,     78], 0, [   495,    590], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,     51], 0, [   462,   -962], [0x83, 0xee, 0x00, 0xff]],
];

// 0x050020E8 - 0x05002140
export const bookend_seg5_dl_050020E8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000460),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_05002010.l, 1),
    gsSPLight(bookend_seg5_lights_05002010.a, 2),
    gsSPVertex(bookend_seg5_vertex_05002028, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x05002140 - 0x050021B0
export const bookend_seg5_dl_05002140 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_050020E8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 0x050021B0
const bookend_seg5_lights_050021B0 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x050021C8
const bookend_seg5_vertex_050021C8 = [
    [[   157,     -1,    100], 0, [    32,    394], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,     73], 0, [   426,    774], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,     49], 0, [   414,   -722], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,     49], 0, [   -39,    392], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,     25], 0, [   457,    852], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,      0], 0, [   363,   -564], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,      0], 0, [    -1,    360], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,    -25], 0, [   473,    906], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,    -50], 0, [   372,   -932], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,    -50], 0, [    12,    240], [0x83, 0xee, 0x00, 0xff]],
    [[   151,     39,    -77], 0, [   491,    632], [0x83, 0xee, 0x00, 0xff]],
    [[   157,     -1,   -102], 0, [   365,  -1004], [0x83, 0xee, 0x00, 0xff]],
];

// 0x05002288 - 0x050022E0
export const bookend_seg5_dl_05002288 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bookend_seg5_texture_05000460),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 32 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPLight(bookend_seg5_lights_050021B0.l, 1),
    gsSPLight(bookend_seg5_lights_050021B0.a, 2),
    gsSPVertex(bookend_seg5_vertex_050021C8, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x050022E0 - 0x05002350
export const bookend_seg5_dl_050022E0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bookend_seg5_dl_05002288),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 1622010961 - 2021-05-25 23:37:51 -0700
