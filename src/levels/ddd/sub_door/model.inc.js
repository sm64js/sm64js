import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, gsDPSetEnvColor, G_CC_SHADEFADEA, G_LIGHTING,
    G_CULL_BACK, G_CC_MODULATERGBFADEA, G_TX_CLAMP
} from "../../../include/gbi"

import { ddd_seg7_texture_07000000, ddd_seg7_texture_07001800 } from "../texture.inc"

// 0x07008FD0 - 0x07009010
export const ddd_seg7_vertex_07008FD0 = [
    [[  4941,  -1015,  -4095], 0, [     0,      0], [0x00, 0x00, 0x00, 0xff]],
    [[  2893,  -1015,  -4095], 0, [     0,      0], [0x00, 0x00, 0x00, 0xff]],
    [[  2893,  -3063,  -5631], 0, [     0,      0], [0x00, 0x00, 0x00, 0xff]],
    [[  4941,  -3063,  -5631], 0, [     0,      0], [0x00, 0x00, 0x00, 0xff]],
]

// 0x07009010 - 0x07009030
export const ddd_seg7_dl_07009010 = [
    gsSPVertex(ddd_seg7_vertex_07008FD0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
]

// 0x07009030 - 0x07009080
export const ddd_seg7_dl_07009030 = [
    gsDPPipeSync(),
    gsDPSetEnvColor(255, 255, 255, 80),
    gsDPSetCombineMode(G_CC_SHADEFADEA, G_CC_SHADEFADEA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPDisplayList(ddd_seg7_dl_07009010),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPEndDisplayList(),
]

// 0x07009080 - 0x07009098
export const ddd_seg7_lights_07009080 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07009098 - 0x070090D8
export const ddd_seg7_vertex_07009098 = [
    [[  4941,  -1015,  -4197], 0, [  4056,  -3098], [0x00, 0x00, 0x7f, 0xff]],
    [[  2893,  -1015,  -4197], 0, [     0,  -3098], [0x00, 0x00, 0x7f, 0xff]],
    [[  2893,  -3063,  -4197], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  4941,  -3063,  -4197], 0, [  4056,    990], [0x00, 0x00, 0x7f, 0xff]],
]

// 0x070090D8 - 0x07009120
export const ddd_seg7_dl_070090D8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_07009080.l, 1),
    gsSPLight(ddd_seg7_lights_07009080.a, 2),
    gsSPVertex(ddd_seg7_vertex_07009098, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
]

// 0x07009120 - 0x07009190
export const ddd_seg7_dl_07009120 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_070090D8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
]

// 0x07009190 - 0x070091D0
export const ddd_seg7_vertex_07009190 = [
    [[  4941,  -1015,  -4187], 0, [  1118,   -288], [0xff, 0xff, 0xff, 0xff]],
    [[  2893,  -1015,  -4187], 0, [  -158,   -288], [0xff, 0xff, 0xff, 0xff]],
    [[  2893,  -3063,  -4187], 0, [  -158,   2264], [0xff, 0xff, 0xff, 0xff]],
    [[  4941,  -3063,  -4187], 0, [  1118,   2264], [0xff, 0xff, 0xff, 0xff]],
]

// 0x070091D0 - 0x07009208
export const ddd_seg7_dl_070091D0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ddd_seg7_vertex_07009190, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
]

// 0x07009208 - 0x07009288
export const ddd_seg7_dl_07009208 = [
    gsDPPipeSync(),
    gsDPSetEnvColor(255, 255, 255, 128),
    gsDPSetCombineMode(G_CC_MODULATERGBFADEA, G_CC_MODULATERGBFADEA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 6, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_070091D0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPEndDisplayList(),
]
