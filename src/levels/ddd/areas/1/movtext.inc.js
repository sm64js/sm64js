import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER, ROTATE_CLOCKWISE, MOV_TEX_END } from "../../../../include/moving_texture_macros"

const ddd_movtex_area1_water_data = [
    ...MOV_TEX_INIT_LOAD(    2),
    ...MOV_TEX_ROT_SPEED(   20), // area 1 general water
    ...MOV_TEX_ROT_SCALE(   20),
    ...MOV_TEX_4_BOX_TRIS(-7167, -4095),
    ...MOV_TEX_4_BOX_TRIS(-7167,  4096),
    ...MOV_TEX_4_BOX_TRIS( 1024,  4096),
    ...MOV_TEX_4_BOX_TRIS( 1024, -4095),
    ...MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(    0xA0),
    ...MOV_TEX_DEFINE(  TEXTURE_WATER),
    ...MOV_TEX_END(),
    ...MOV_TEX_ROT_SPEED(    0), // entrance to area 2 water
    ...MOV_TEX_ROT_SCALE(    5),
    ...MOV_TEX_4_BOX_TRIS( 2048,  -768),
    ...MOV_TEX_4_BOX_TRIS( 2048,   768),
    ...MOV_TEX_4_BOX_TRIS( 6144,   768),
    ...MOV_TEX_4_BOX_TRIS( 6144,  -768),
    ...MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(    0xA0),
    ...MOV_TEX_DEFINE(  TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const ddd_movtex_area1_water = [
    { id: 0, movtex: ddd_movtex_area1_water_data },
    { id: -1 }
]