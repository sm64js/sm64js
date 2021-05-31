// Ttm

import {
    gsSP2Triangles, gsSPEndDisplayList
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS,
    ROTATE_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x07017104 - 0x07017124
const ttm_movtex_puddle_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(  100),
    MOV_TEX_ROT_SCALE(    3),
    MOV_TEX_4_BOX_TRIS(-2047,  2765),
    MOV_TEX_4_BOX_TRIS(-2047,  5069),
    MOV_TEX_4_BOX_TRIS( 1946,  5069),
    MOV_TEX_4_BOX_TRIS( 1946,  2765),
    MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x07017124 - 0x07017134
export const ttm_movtex_puddle = [
    {id:  0, movtex: ttm_movtex_puddle_data},
    {id: -1, movtex: null},
];

// 0x07017134 - 0x07017174
export const ttm_movtex_tris_begin_waterfall = [
    MOV_TEX_SPD(   35),
    MOV_TEX_TRIS(2191, -1638,  1188, 0, 0),
    MOV_TEX_TRIS(2165,  1638,  1145, 3, 0),
    MOV_TEX_TRIS(1625,  2286,   757, 4, 0),
    MOV_TEX_TRIS(1756, -1638,  1457, 0, 1),
    MOV_TEX_TRIS(1729,  1638,  1413, 3, 1),
    MOV_TEX_TRIS(1221,  2286,  1077, 4, 1),
    MOV_TEX_END(),
].flat();

// 0x07017174 - 0x070171A0
export const ttm_movtex_tris_begin_puddle_waterfall = [
    MOV_TEX_SPD(   30),
    MOV_TEX_TRIS(3583, -1638,  2751, 0, 0),
    MOV_TEX_TRIS(3583, -1638,   898, 5, 0),
    MOV_TEX_TRIS(1586, -1638,  2751, 0, 2),
    MOV_TEX_TRIS(1586, -1638,   898, 5, 2),
    MOV_TEX_END(),
].flat();

// 0x070171A0 - 0x070171E0
export const ttm_movtex_tris_end_waterfall = [
    MOV_TEX_SPD(   25),
    MOV_TEX_TRIS(3583, -3840,  2913, 0, 0),
    MOV_TEX_TRIS(3583, -1889,  2913, 2, 0),
    MOV_TEX_TRIS(3583, -1638,  2751, 3, 0),
    MOV_TEX_TRIS(2559, -3840,  2913, 0, 1),
    MOV_TEX_TRIS(2559, -1889,  2913, 2, 1),
    MOV_TEX_TRIS(2457, -1638,  2751, 3, 1),
    MOV_TEX_END(),
].flat();

// 0x070171E0 - 0x0701720C
export const ttm_movtex_tris_end_puddle_waterfall = [
    MOV_TEX_SPD(   20),
    MOV_TEX_TRIS(3640, -3840,  3422, 0, 0),
    MOV_TEX_TRIS(3792, -3840,  2849, 1, 0),
    MOV_TEX_TRIS(2358, -3840,  3422, 0, 1),
    MOV_TEX_TRIS(2358, -3840,  2849, 1, 1),
    MOV_TEX_END(),
].flat();

// 0x0701720C - 0x07017260
export const ttm_movtex_tris_puddle_waterfall = [
    MOV_TEX_SPD(   15),
    MOV_TEX_TRIS(1946, -4403,  4520, 0, 0),
    MOV_TEX_TRIS(1992, -4096,  4520, 1, 0),
    MOV_TEX_TRIS(3640, -4096,  3496, 3, 0),
    MOV_TEX_TRIS(3640, -3840,  3422, 4, 0),
    MOV_TEX_TRIS(1946, -4403,  4008, 0, 1),
    MOV_TEX_TRIS(1992, -4096,  4008, 1, 1),
    MOV_TEX_TRIS(2358, -4096,  3496, 3, 1),
    MOV_TEX_TRIS(2358, -3840,  3422, 4, 1),
    MOV_TEX_END(),
].flat();

// 0x07017260 - 0x07017288
export const ttm_dl_waterfall = [
    gsSP2Triangles( 0,  1,  3, 0x0,  3,  1,  4, 0x0),
    gsSP2Triangles( 1,  2,  4, 0x0,  4,  2,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07017288 - 0x070172A0
export const ttm_dl_bottom_waterfall = [
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070172A0 - 0x070172D8
export const ttm_dl_puddle_waterfall = [
    gsSP2Triangles( 0,  1,  4, 0x0,  4,  1,  5, 0x0),
    gsSP2Triangles( 1,  2,  5, 0x0,  5,  2,  6, 0x0),
    gsSP2Triangles( 2,  3,  6, 0x0,  6,  3,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
