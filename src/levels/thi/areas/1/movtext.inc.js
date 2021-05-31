// Thi

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x0700E2BC
const thi_movtex_area1_short_side_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-8191, -8191),
    MOV_TEX_4_BOX_TRIS(-8191,  6246),
    MOV_TEX_4_BOX_TRIS(-5119,  6246),
    MOV_TEX_4_BOX_TRIS(-5119, -8191),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E2DC
const thi_movtex_area1_large_side_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-4607,  4506),
    MOV_TEX_4_BOX_TRIS(-4607,  8192),
    MOV_TEX_4_BOX_TRIS( 6963,  8192),
    MOV_TEX_4_BOX_TRIS( 6963,  4506),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E2FC
const thi_movtex_area1_mountain_top_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-1023, -2555),
    MOV_TEX_4_BOX_TRIS(-1023,  -507),
    MOV_TEX_4_BOX_TRIS( 1024,  -507),
    MOV_TEX_4_BOX_TRIS( 1024, -2555),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E31C
export const thi_movtex_area1_water = [
    {id: 0, movtex: thi_movtex_area1_short_side_water_data},
    {id: 1, movtex: thi_movtex_area1_large_side_water_data},
    {id: 2, movtex: thi_movtex_area1_mountain_top_water_data},
    {id: -1, movtex: null},
];

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
