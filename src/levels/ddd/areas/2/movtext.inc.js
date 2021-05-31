// Ddd

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, MOV_TEX_ALPHA,
    MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x0700FCC4
const ddd_movtex_area2_water_data = [
    MOV_TEX_INIT_LOAD(    2),
    MOV_TEX_ROT_SPEED(   20),
    MOV_TEX_ROT_SPEED(   20),
    MOV_TEX_4_BOX_TRIS(    0, -5119),
    MOV_TEX_4_BOX_TRIS(    0,  7168),
    MOV_TEX_4_BOX_TRIS( 8192,  7168),
    MOV_TEX_4_BOX_TRIS( 8192, -5119),
    MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    MOV_TEX_ALPHA(    0xA0),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
    MOV_TEX_ROT_SPEED(    0),
    MOV_TEX_ROT_SPEED(    5),
    MOV_TEX_4_BOX_TRIS(-6144,  -768),
    MOV_TEX_4_BOX_TRIS(-6144,   768),
    MOV_TEX_4_BOX_TRIS(-2048,   768),
    MOV_TEX_4_BOX_TRIS(-2048,  -768),
    MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    MOV_TEX_ALPHA(    0xA0),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700FD00
export const ddd_movtex_area2_water = [
    {id: 0, movtex: ddd_movtex_area2_water_data},
    {id: -1, movtex: null},
];

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
