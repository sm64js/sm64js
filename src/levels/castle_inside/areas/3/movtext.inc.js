// Castle Inside

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_JRB_WATER, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x07079090 - 0x070790F0
const inside_castle_movtex_green_room_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(   10),
    MOV_TEX_ROT_SCALE(   10),
    MOV_TEX_4_BOX_TRIS(-3225, -4146),
    MOV_TEX_4_BOX_TRIS(-3225,  -255),
    MOV_TEX_4_BOX_TRIS(  870,  -255),
    MOV_TEX_4_BOX_TRIS(  870, -4146),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_JRB_WATER),
    MOV_TEX_END(),
].flat();

// 0x070790B0 - 0x070790D0
const inside_castle_movtex_moat_leftover_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    5),
    MOV_TEX_ROT_SCALE(    7),
    MOV_TEX_4_BOX_TRIS(  973, -1279),
    MOV_TEX_4_BOX_TRIS(  973,   256),
    MOV_TEX_4_BOX_TRIS( 5786,   256),
    MOV_TEX_4_BOX_TRIS( 5786, -1279),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x070790D0 - 0x07079100
const inside_castle_movtex_moat_water_data = [
    MOV_TEX_INIT_LOAD(    1),
    MOV_TEX_ROT_SPEED(    3),
    MOV_TEX_ROT_SCALE(    5),
    MOV_TEX_4_BOX_TRIS( 5786, -1330),
    MOV_TEX_4_BOX_TRIS( 5786,   410),
    MOV_TEX_4_BOX_TRIS( 8038,   410),
    MOV_TEX_4_BOX_TRIS( 8038, -1330),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

// 0x070790F0 - 0x07079100
export const inside_castle_movtex_green_room_water = [
    {id: 0, movtex: inside_castle_movtex_green_room_water_data},
    {id: -1, movtex: null},
];

// 0x07079100 - 0x07079118
export const inside_castle_movtex_moat_water = [
    {id: 1, movtex: inside_castle_movtex_moat_leftover_water_data},
    {id: 2, movtex: inside_castle_movtex_moat_water_data},
    {id: -1, movtex: null},
];

// 1621726940 - 2021-05-22 16:42:23 -0700
