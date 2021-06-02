// Thi

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x0700E33C
const thi_movtex_area2_short_side_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    3),
    MOV_TEX_ROT_SCALE(    3),
    MOV_TEX_4_BOX_TRIS(-2457, -2457),
    MOV_TEX_4_BOX_TRIS(-2457,  1874),
    MOV_TEX_4_BOX_TRIS(-1535,  1874),
    MOV_TEX_4_BOX_TRIS(-1535, -2457),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E35C
const thi_movtex_area2_large_side_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    3),
    MOV_TEX_ROT_SCALE(    3),
    MOV_TEX_4_BOX_TRIS(-1381,  1352),
    MOV_TEX_4_BOX_TRIS(-1381,  2458),
    MOV_TEX_4_BOX_TRIS( 2089,  2458),
    MOV_TEX_4_BOX_TRIS( 2089,  1352),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E37C
const thi_movtex_area2_mountain_top_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    3),
    MOV_TEX_ROT_SCALE(    3),
    MOV_TEX_4_BOX_TRIS( -306,  -766),
    MOV_TEX_4_BOX_TRIS( -306,  -152),
    MOV_TEX_4_BOX_TRIS(  307,  -152),
    MOV_TEX_4_BOX_TRIS(  307,  -766),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700E39C
export const thi_movtex_area2_water = [
    {id: 0, movtex: thi_movtex_area2_short_side_water_data},
    {id: 1, movtex: thi_movtex_area2_large_side_water_data},
    {id: 2, movtex: thi_movtex_area2_mountain_top_water_data},
    {id: -1, movtex: null},
];

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
