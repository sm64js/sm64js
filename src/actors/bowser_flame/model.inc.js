// Bowser Flame

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsDPSetEnvColor,
    gsDPSetAlphaCompare, gsSPSetGeometryMode, gsDPSetRenderMode, gsSPGeometryMode, gsDPLoadTextureBlock,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES,
    G_CC_MODULATERGBFADE, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, G_AC_NONE, G_LIGHTING, G_RM_AA_ZB_XLU_SURF,
    G_RM_NOOP2, G_CC_SHADEFADEA, G_RM_CUSTOM_AA_ZB_XLU_SURF, G_TX_CLAMP, G_CC_MODULATERGBA,
    G_SHADING_SMOOTH
} from "../../include/gbi"

// TODO: These 64x64 textures are referenced as two different texture addresses in the DLs

export const flame_seg6_texture_06000000 = []
export const flame_seg6_texture_06002000 = []
export const flame_seg6_texture_06004000 = []
export const flame_seg6_texture_06006000 = []
export const flame_seg6_texture_06008000 = []
export const flame_seg6_texture_0600A000 = []
export const flame_seg6_texture_0600C000 = []
export const flame_seg6_texture_0600E000 = []
export const flame_seg6_texture_06010000 = []
export const flame_seg6_texture_06012000 = []
export const flame_seg6_texture_06014000 = []
export const flame_seg6_texture_06016000 = []
export const flame_seg6_texture_06018000 = []
export const flame_seg6_texture_0601A000 = []

const flame_seg6_vertex_0601C000 = [
    [[  -150,    150,      0], 0, [     0,    992], [0xff, 0xff, 0xff, 0xff]],
    [[   150,    150,      0], 0, [  2016,    992], [0xff, 0xff, 0xff, 0xff]],
    [[   150,    300,      0], 0, [  2016,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -150,    300,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -150,      0,      0], 0, [     0,    992], [0xff, 0xff, 0xff, 0xff]],
    [[   150,      0,      0], 0, [  2016,    992], [0xff, 0xff, 0xff, 0xff]],
    [[   150,    150,      0], 0, [  2016,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -150,    150,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
]

const flame_seg6_dl_0601C080 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    // gsSPGeometryMode(G_LIGHTING, G_SHADING_SMOOTH),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPEndDisplayList(),
].flat()

const flame_seg6_dl_0601C0B0 = [
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat()

const flame_seg6_dl_0601C0C8 = [
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat()

const flame_seg6_dl_0601C0E0 = [
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat()

export const flame_seg6_dl_0601C108 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06000000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06000000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

export const flame_seg6_dl_0601C1A8 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06002000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06002000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

export const flame_seg6_dl_0601C248 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06004000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06004000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C2E8 - 0x0601C388
export const flame_seg6_dl_0601C2E8 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06006000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06006000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C388 - 0x0601C428
export const flame_seg6_dl_0601C388 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06008000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06008000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C428 - 0x0601C4C8
export const flame_seg6_dl_0601C428 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_0600A000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_0600A000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C4C8 - 0x0601C568
export const flame_seg6_dl_0601C4C8 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_0600C000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_0600C000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C568 - 0x0601C608
export const flame_seg6_dl_0601C568 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_0600E000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_0600E000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C608 - 0x0601C6A8
export const flame_seg6_dl_0601C608 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06010000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06010000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C6A8 - 0x0601C748
export const flame_seg6_dl_0601C6A8 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06012000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06012000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C748 - 0x0601C7E8
export const flame_seg6_dl_0601C748 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06014000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06014000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C7E8 - 0x0601C888
export const flame_seg6_dl_0601C7E8 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06016000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06016000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C888 - 0x0601C928
export const flame_seg6_dl_0601C888 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_06018000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_06018000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()

// 0x0601C928 - 0x0601C9C8
export const flame_seg6_dl_0601C928 = [
    gsSPDisplayList(flame_seg6_dl_0601C080),
    gsDPLoadTextureBlock(flame_seg6_texture_0601A000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(flame_seg6_vertex_0601C000, 8, 0),
    gsSPDisplayList(flame_seg6_dl_0601C0B0),
    gsDPLoadTextureBlock(flame_seg6_texture_0601A000 + 0x1000, G_IM_FMT_RGBA, G_IM_SIZ_16b, 64, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 6, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(flame_seg6_dl_0601C0C8),
    gsSPDisplayList(flame_seg6_dl_0601C0E0),
    gsSPEndDisplayList(),
].flat()
