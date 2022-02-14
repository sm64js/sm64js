// Bitfs

import {
    gsSP2Triangles, gsSPEndDisplayList
} from "../../../../include/gbi"

import {
    MOV_TEX_SPD, MOV_TEX_TRIS, MOV_TEX_END
} from "../../../../include/moving_texture_macros"

// 0x07015AF0 - 0x07015B1C
export const bitfs_movtex_tris_lava_first_section = [
    MOV_TEX_SPD(  2),
    MOV_TEX_TRIS(-7450,   205,  1050, 0, 0),
    MOV_TEX_TRIS( 4838,   205,  1050, 6, 0),
    MOV_TEX_TRIS( 4838,   205, -1108, 6, 2),
    MOV_TEX_TRIS(-7450,   205, -1108, 0, 2),
    MOV_TEX_END(),
].flat();

// 0x07015B1C - 0x07015B48
export const bitfs_movtex_tris_lava_second_section = [
    MOV_TEX_SPD( -3),
    MOV_TEX_TRIS(-4531,  3487,  1050, 0, 0),
    MOV_TEX_TRIS( 5658,  3487,  1050, 6, 0),
    MOV_TEX_TRIS( 5658,  3487, -1108, 6, 2),
    MOV_TEX_TRIS(-4531,  3487, -1108, 0, 2),
    MOV_TEX_END(),
].flat();

// 0x07015B48 - 0x07015BA8
export const bitfs_movtex_tris_lava_floor = [
    MOV_TEX_SPD( -2),
    MOV_TEX_TRIS( 8191, -3067,  8192, 0, 0),
    MOV_TEX_TRIS(    0, -3067,  8192, 0, 2),
    MOV_TEX_TRIS(-8191, -3067,  8192, 0, 4),
    MOV_TEX_TRIS( 8191, -3067,     0, 2, 0),
    MOV_TEX_TRIS(    0, -3067,     0, 2, 2),
    MOV_TEX_TRIS(-8191, -3067,     0, 2, 4),
    MOV_TEX_TRIS( 8191, -3067, -8192, 4, 0),
    MOV_TEX_TRIS(    0, -3067, -8192, 4, 2),
    MOV_TEX_TRIS(-8191, -3067, -8192, 4, 4),
    MOV_TEX_END(),
].flat();

// 0x07015BA8 - 0x07015BC0
export const bitfs_dl_lava_sections = [
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07015BC0 - 0x07015C08
export const bitfs_dl_lava_floor = [
    gsSP2Triangles( 0,  3,  1, 0x0,  1,  3,  4, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  2,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 4,  7,  5, 0x0,  5,  7,  8, 0x0),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
