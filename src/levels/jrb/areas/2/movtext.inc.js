// Jrb

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_JRB_WATER
} from "../../../../include/moving_texture_macros"

// 0x0701137C
const jrb_movtex_sinked_boat_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   20),
    MOV_TEX_ROT_SCALE(    6),
    MOV_TEX_4_BOX_TRIS(-4095, -4095),
    MOV_TEX_4_BOX_TRIS(-4095,  4096),
    MOV_TEX_4_BOX_TRIS( 4096,  4096),
    MOV_TEX_4_BOX_TRIS( 4096, -4095),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0xB4),
    MOV_TEX_DEFINE(  TEXTURE_JRB_WATER),
    MOV_TEX_END(),
].flat();

// 0x0701139C
export const jrb_movtex_sinked_boat_water = [
    {id: 0, movtex: jrb_movtex_sinked_boat_water_data},
    {id: -1, movtex: null},
];

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
