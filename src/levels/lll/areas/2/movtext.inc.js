// Lll

import {
    gsSP2Triangles, gsSPEndDisplayList
} from "../../../../include/gbi"

import {
    MOV_TEX_SPD, MOV_TEX_TRIS, MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE,
    MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_LAVA
} from "../../../../include/moving_texture_macros"

// 0x0702874C - 0x070287A8
export const lll_movtex_tris_lava_floor = [
    MOV_TEX_SPD(     1),
    MOV_TEX_TRIS( 8191, 0,  8192, 0, 0),
    MOV_TEX_TRIS(    0, 0,  8192, 0, 2),
    MOV_TEX_TRIS(-8191, 0,  8192, 0, 4),
    MOV_TEX_TRIS( 8191, 0,     0, 2, 0),
    MOV_TEX_TRIS(    0, 0,     0, 2, 2),
    MOV_TEX_TRIS(-8191, 0,     0, 2, 4),
    MOV_TEX_TRIS( 8191, 0, -8192, 4, 0),
    MOV_TEX_TRIS(    0, 0, -8192, 4, 2),
    MOV_TEX_TRIS(-8191, 0, -8192, 4, 4),
].flat();

// 0x070287A8 - 0x070287F0
export const lll_dl_lava_floor = [
    gsSP2Triangles( 0,  3,  1, 0x0,  1,  3,  4, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  2,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 4,  7,  5, 0x0,  5,  7,  8, 0x0),
    gsSPEndDisplayList(),
].flat();

const lll_movtex_volcano_floor_lava_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    8),
    MOV_TEX_ROT_SCALE(    5),
    MOV_TEX_4_BOX_TRIS(-3071, -3071),
    MOV_TEX_4_BOX_TRIS(-3071,  3072),
    MOV_TEX_4_BOX_TRIS( 3072,  3072),
    MOV_TEX_4_BOX_TRIS( 3072, -3071),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0xC8),
    MOV_TEX_DEFINE(  TEXTURE_LAVA),
    MOV_TEX_END(),
].flat();

export const lll_movtex_volcano_floor_lava = [
    {id: 10, movtex: lll_movtex_volcano_floor_lava_data},
    {id: -1, movtex: null},
];

// 0x07028820 - 0x070288C8
export const lll_movtex_tris_lavafall_volcano = [
    MOV_TEX_SPD(   50),
    MOV_TEX_TRIS( 655,  -86, -2934,  0, 0),
    MOV_TEX_TRIS( 527,  256, -2934,  2, 0),
    MOV_TEX_TRIS( 436, 1042, -2934,  4, 0),
    MOV_TEX_TRIS( 430, 2555, -2934,  7, 0),
    MOV_TEX_TRIS( 430, 5248, -2934, 11, 0),
    MOV_TEX_TRIS( 148,  -86, -2669,  0, 1),
    MOV_TEX_TRIS( 256,  281, -2823,  2, 1),
    MOV_TEX_TRIS( 138,  946, -2870,  4, 1),
    MOV_TEX_TRIS(   1, 2555, -2917,  7, 1),
    MOV_TEX_TRIS(   0, 5248, -2928, 11, 1),
    MOV_TEX_TRIS(  36,   63, -2766,  1, 1),
    MOV_TEX_TRIS(-574,  -86, -2934,  0, 2),
    MOV_TEX_TRIS(-471,  247, -2934,  2, 2),
    MOV_TEX_TRIS(-389,  775, -2934,  4, 2),
    MOV_TEX_TRIS(-390, 2555, -2934,  7, 2),
    MOV_TEX_TRIS(-430, 5248, -2934, 11, 2),
    MOV_TEX_END(),
    0, // alignment?
].flat();

// 0x070288C8 - 0x07028960
export const lll_dl_lavafall_volcano = [
    gsSP2Triangles(15, 14,  9, 0x0,  4,  9,  3, 0x0),
    gsSP2Triangles( 9, 14,  8, 0x0,  9,  8,  3, 0x0),
    gsSP2Triangles(14, 13,  8, 0x0,  8, 13,  7, 0x0),
    gsSP2Triangles( 8,  7,  2, 0x0,  8,  2,  3, 0x0),
    gsSP2Triangles(10,  6,  7, 0x0, 13, 10,  7, 0x0),
    gsSP2Triangles(13, 12, 10, 0x0, 12, 11, 10, 0x0),
    gsSP2Triangles(10, 11,  5, 0x0,  6, 10,  5, 0x0),
    gsSP2Triangles( 6,  5,  0, 0x0,  6,  0,  1, 0x0),
    gsSP2Triangles( 2,  6,  1, 0x0,  7,  6,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
