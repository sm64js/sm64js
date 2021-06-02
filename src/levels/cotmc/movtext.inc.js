// Cotmc

import {
    gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor,
    gsSPFogPosition, gsSPSetGeometryMode, gsDPSetEnvColor, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsSPTexture, gsDPTileSync, gsDPSetTile, gsDPSetTileSize,
    gsSPEndDisplayList, gsSPGeometryModeSetFirst, gsSP2Triangles,
    G_CYC_2CYCLE, G_RM_FOG_SHADE_A, G_RM_AA_ZB_XLU_INTER2, G_ZS_PIXEL, G_FOG, G_CC_DECALFADE,
    G_CC_PASS2, G_LIGHTING, G_CULL_BACK, G_TX_RENDERTILE, G_ON, G_IM_FMT_RGBA, G_IM_SIZ_16b,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOLOD, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_CC_SHADE,
    G_RM_AA_ZB_XLU_INTER, G_RM_NOOP2
} from "../../include/gbi"

import {
    MOV_TEX_SPD, MOV_TEX_TRIS, MOV_TEX_END, MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SCALE, MOV_TEX_ROT_SPEED, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, ROTATE_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER
} from "../../include/moving_texture_macros"

// 0x0700BE10 - 0x0700BE88
export const cotmc_dl_water_begin = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_XLU_INTER2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(980, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetEnvColor(255, 255, 255, 140),
    gsDPSetCombineMode(G_CC_DECALFADE, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x0700BE88 - 0x0700BED0
export const cotmc_dl_water_end = [
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsSPGeometryModeSetFirst(G_FOG, G_LIGHTING | G_CULL_BACK),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsDPSetRenderMode(G_RM_AA_ZB_XLU_INTER, G_RM_NOOP2),
    gsSPEndDisplayList(),
].flat();

// 0x0700BED0 - 0x0700BF60
export const cotmc_movtex_tris_water = [
    MOV_TEX_SPD(    30),
    MOV_TEX_TRIS(  256,    0, -7373, 0, 0),
    MOV_TEX_TRIS(  256, 5120, -7373, 4, 0),
    MOV_TEX_TRIS( -256,    0, -7373, 0, 1),
    MOV_TEX_TRIS( -256, 5120, -7373, 4, 1),
    MOV_TEX_TRIS( 1536, -204,  3584, 0, 0),
    MOV_TEX_TRIS( 1536,    0,  3430, 1, 0),
    MOV_TEX_TRIS( 1536,    0, -7680, 5, 0),
    MOV_TEX_TRIS(-1536, -204,  3584, 0, 2),
    MOV_TEX_TRIS(-1536,    0,  3430, 1, 2),
    MOV_TEX_TRIS(-1536,    0, -7680, 5, 2),
    MOV_TEX_TRIS(-1024, -614,  3584, 0, 0),
    MOV_TEX_TRIS(-1024, 1434,  3584, 1, 0),
    MOV_TEX_TRIS( 1024, -614,  3584, 0, 1),
    MOV_TEX_TRIS( 1024, 1434,  3584, 1, 1),
    MOV_TEX_END(),
].flat();

// 0x0700BF60 - 0x0700BFA8
export const cotmc_dl_water = [
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 4,  5,  7, 0x0, 10, 11, 12, 0x0),
    gsSP2Triangles(12, 11, 13, 0x0,  7,  5,  8, 0x0),
    gsSP2Triangles( 5,  6,  8, 0x0,  8,  6,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 2021-05-30 20:59:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)

//self inserted to get normal water
const cotmc_movtex_water_data = [
    MOV_TEX_INIT_LOAD(1),
    MOV_TEX_ROT_SPEED(10),
    MOV_TEX_ROT_SCALE(10),
    MOV_TEX_4_BOX_TRIS(-1535, -7679),
    MOV_TEX_4_BOX_TRIS(-1535, 3389),
    MOV_TEX_4_BOX_TRIS(1536, 3389),
    MOV_TEX_4_BOX_TRIS(1536, -7679),
    MOV_TEX_ROT(ROTATE_CLOCKWISE),
    MOV_TEX_ALPHA(0x96),
    MOV_TEX_DEFINE(TEXTURE_WATER),
    MOV_TEX_END(),
]

export const cotmc_movtex_water = [
    {id: 0, movtex: cotmc_movtex_water_data},
    {id: -1, movtex: null}
]