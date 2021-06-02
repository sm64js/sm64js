// Jrb

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_JRB_WATER, TEXTURE_MIST
} from "../../../../include/moving_texture_macros"

// 0x0700D28C - 0x0700D2AC
const jrb_movtex_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   20),
    MOV_TEX_ROT_SCALE(    6),
    MOV_TEX_4_BOX_TRIS(-6304,  -669),
    MOV_TEX_4_BOX_TRIS(-6304,  7814),
    MOV_TEX_4_BOX_TRIS( 7992,  7814),
    MOV_TEX_4_BOX_TRIS( 7992,  -669),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0xB4),
    MOV_TEX_DEFINE(  TEXTURE_JRB_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700D2AC - 0x0700D2CC
const jrb_movtex_ocean_cave_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(    2),
    MOV_TEX_4_BOX_TRIS( 4433, -4253),
    MOV_TEX_4_BOX_TRIS( 4433,  -669),
    MOV_TEX_4_BOX_TRIS( 5969,  -669),
    MOV_TEX_4_BOX_TRIS( 5969, -4253),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0xB4),
    MOV_TEX_DEFINE(  TEXTURE_JRB_WATER),
    MOV_TEX_END(),
].flat();

// 0x0700D2CC
export const jrb_movtex_water = [
    {id: 0, movtex: jrb_movtex_water_data},
    {id: 1, movtex: jrb_movtex_ocean_cave_water_data},
    {id: -1, movtex: null},
];

// 0x0700D2E4, appears if you enter the course the first time, then it disappears when you grab the first star
const jrb_movtex_intial_mist_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   20),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-7818, -1125),
    MOV_TEX_4_BOX_TRIS(-7818,  7814),
    MOV_TEX_4_BOX_TRIS( 9055,  7814),
    MOV_TEX_4_BOX_TRIS( 9055, -1125),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x32),
    MOV_TEX_DEFINE(  TEXTURE_MIST),
    MOV_TEX_END(),
].flat();

// 0x0700D304
export const jrb_movtex_intial_mist = [
    {id: 51, movtex: jrb_movtex_intial_mist_data},
    {id: -1, movtex: null},
];

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
