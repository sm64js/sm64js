import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER, ROTATE_CLOCKWISE
} from "../../../../include/moving_texture_macros"

const sl_movtex_snowman_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(8),
    ...MOV_TEX_ROT_SCALE(10),
    ...MOV_TEX_4_BOX_TRIS(-6194,  -409),
    ...MOV_TEX_4_BOX_TRIS(-6194,  4198),
    ...MOV_TEX_4_BOX_TRIS(154,  4198),
    ...MOV_TEX_4_BOX_TRIS(154,  -409),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

const sl_movtex_ice_bully_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(8),
    ...MOV_TEX_ROT_SCALE(10),
    ...MOV_TEX_4_BOX_TRIS(-1279, -6143),
    ...MOV_TEX_4_BOX_TRIS(-1279, -3071),
    ...MOV_TEX_4_BOX_TRIS( 1792, -3071),
    ...MOV_TEX_4_BOX_TRIS( 1792, -6143),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const sl_movtex_water = [
    { id: 0, movtex: sl_movtex_snowman_water_data },
    { id: 1, movtex: sl_movtex_ice_bully_water_data },
    { id: -1, movtex: null },
]