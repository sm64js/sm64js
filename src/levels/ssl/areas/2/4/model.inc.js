// Quicksand Pit

import {
    gdSPDefLights1, gsDPPipeSync, gsDPSetCombineMode, gsSPLight, gsSPTexture, gsDPTileSync,
    gsDPSetTile, gsDPSetTileSize, gsSPEndDisplayList, gsDPSetCycleType, gsDPSetRenderMode,
    gsDPSetDepthSource, gsDPSetFogColor, gsSPFogFactor, gsSPSetGeometryMode,
    gsSPClearGeometryMode, gsSP2Triangles, gsDPLoadTextureBlock, gsSPVertex,
    G_CC_MODULATERGB, G_TX_RENDERTILE, G_ON, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_WRAP,
    G_TX_NOMIRROR, G_TX_NOLOD, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_PASS2, G_CYC_1CYCLE,
    G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, gsSPFogPosition
} from "../../../../../include/gbi"

import { MOV_TEX_SPD, MOV_TEX_LIGHT_TRIS, MOV_TEX_END } from "../../../../../include/moving_texture_macros"

// 0x07004000 - 0x07004018
const ssl_lights_quicksand_pit = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07004018 - 0x07004818
export const ssl_quicksand = []
import { ssl_pyramid_sand } from "../../../texture.inc"

// 0x07004818 - 0x07004860
export const ssl_dl_quicksand_pit_begin = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPLight(ssl_lights_quicksand_pit.l, 1),
    gsSPLight(ssl_lights_quicksand_pit.a, 2),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x07004860 - 0x07004880
export const ssl_dl_quicksand_pit_end = [
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x07004880 - 0x070048F8
export const ssl_dl_pyramid_quicksand_pit_begin = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogFactor(0x0E49, 0xF2B7),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsSPLight(ssl_lights_quicksand_pit.l, 1),
    gsSPLight(ssl_lights_quicksand_pit.a, 2),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x070048F8 - 0x07004930
export const ssl_dl_pyramid_quicksand_pit_end = [
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x07004930 - 0x07004AB4
export const ssl_movtex_tris_quicksand_pit = [
    MOV_TEX_SPD(         10),
    MOV_TEX_LIGHT_TRIS(    0, -204,    0, 127, 0, 0),
    MOV_TEX_LIGHT_TRIS( 1024,    0,    0, 127, 2, 0),
    MOV_TEX_LIGHT_TRIS(  512,    0, -886, 127, 2, 1),
    MOV_TEX_LIGHT_TRIS( -511,    0, -886, 127, 2, 2),
    MOV_TEX_LIGHT_TRIS(-1023,    0,    0, 127, 2, 3),
    MOV_TEX_LIGHT_TRIS( -511,    0,  887, 127, 2, 2),
    MOV_TEX_LIGHT_TRIS(  512,    0,  887, 127, 2, 1),
    MOV_TEX_LIGHT_TRIS( 1024,    0,    0, 127, 2, 0),
    MOV_TEX_END(),
].flat();

// 0x070049B4 - 0x07004A38
export const ssl_movtex_tris_pyramid_quicksand_pit = [
    MOV_TEX_SPD(          5),
    MOV_TEX_LIGHT_TRIS(    0, -204,    0, 127, 0, 0),
    MOV_TEX_LIGHT_TRIS( 1024,    0,    0, 127, 2, 0),
    MOV_TEX_LIGHT_TRIS(  512,    0, -886, 127, 2, 1),
    MOV_TEX_LIGHT_TRIS( -511,    0, -886, 127, 2, 2),
    MOV_TEX_LIGHT_TRIS(-1023,    0,    0, 127, 2, 3),
    MOV_TEX_LIGHT_TRIS( -511,    0,  887, 127, 2, 2),
    MOV_TEX_LIGHT_TRIS(  512,    0,  887, 127, 2, 1),
    MOV_TEX_LIGHT_TRIS( 1024,    0,    0, 127, 2, 0),
    MOV_TEX_END(),
].flat();

// 0x07004A38 - 0x07004A70
export const ssl_dl_quicksand_pit = [
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 0,  3,  4, 0x0,  0,  4,  5, 0x0),
    gsSP2Triangles( 0,  5,  6, 0x0,  0,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07004A70 - 0x07004AE0
const ssl_seg7_vertex_07004A70 = [
    [[     0,   -204,      0], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[  1024,      0,      0], 0, [  2016,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,      0,   -886], 0, [  2016,    992], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,      0,   -886], 0, [  2016,   2016], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1023,      0,      0], 0, [  2016,   3040], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,      0,    887], 0, [  2016,   2016], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,      0,    887], 0, [  2016,    992], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07004AE0 - 0x07004BE0
export const ssl_dl_pyramid_quicksand_pit_static = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(0x0E49, 0xF2B7),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsSPLight(ssl_lights_quicksand_pit.l, 1),
    gsSPLight(ssl_lights_quicksand_pit.a, 2),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(ssl_pyramid_sand, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 32, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_WRAP | G_TX_NOMIRROR, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(ssl_seg7_vertex_07004A70, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 0,  3,  4, 0x0,  0,  4,  5, 0x0),
    gsSP2Triangles( 0,  5,  6, 0x0,  0,  6,  1, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
