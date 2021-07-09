// Wdw

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x07018758
const wdw_movtex_area2_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-3839, -3839),
    MOV_TEX_4_BOX_TRIS(-3839,  4608),
    MOV_TEX_4_BOX_TRIS( 4608,  4608),
    MOV_TEX_4_BOX_TRIS( 4608, -3839),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x07018778
export const wdw_movtex_area2_water = [
    {id: 0, movtex: wdw_movtex_area2_water_data},
    {id: -1, movtex: null},
];

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
