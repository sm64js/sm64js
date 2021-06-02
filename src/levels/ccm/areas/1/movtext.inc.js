// Ccm

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x070166E8
const ccm_movtex_penguin_puddle_water_data = [
    MOV_TEX_INIT_LOAD(   1),
    MOV_TEX_ROT_SPEED(   5),
    MOV_TEX_ROT_SCALE(   2),
    MOV_TEX_4_BOX_TRIS(3137, 4228),
    MOV_TEX_4_BOX_TRIS(3137, 4945),
    MOV_TEX_4_BOX_TRIS(3925, 4945),
    MOV_TEX_4_BOX_TRIS(3925, 4228),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(   0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x07016708 - 0x07016718
export const ccm_movtex_penguin_puddle_water = [
    {id: 0, movtex: ccm_movtex_penguin_puddle_water_data},
    {id: -1, movtex: null},
];

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
