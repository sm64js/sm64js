import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, ROTATE_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER, MOV_TEX_END } from "../../../../include/moving_texture_macros"

const bbh_movtex_merry_go_round_water_entrance_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(0),
    ...MOV_TEX_ROT_SCALE(20),
    ...MOV_TEX_4_BOX_TRIS(-4812, 1485),
    ...MOV_TEX_4_BOX_TRIS(-4812, 7270),
    ...MOV_TEX_4_BOX_TRIS(640, 7270),
    ...MOV_TEX_4_BOX_TRIS(640, 1485),
    ...MOV_TEX_ROT(ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

const bbh_movtex_merry_go_round_water_side_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(0),
    ...MOV_TEX_ROT_SCALE(20),
    ...MOV_TEX_4_BOX_TRIS(1536, -1637),
    ...MOV_TEX_4_BOX_TRIS(1536, 2662),
    ...MOV_TEX_4_BOX_TRIS(3789, 2662),
    ...MOV_TEX_4_BOX_TRIS(3789, -1637),
    ...MOV_TEX_ROT(ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const bbh_movtex_merry_go_round_water_entrance = [
    { id: 0, movtex: bbh_movtex_merry_go_round_water_entrance_data },
    { id: -1, movtex: null },
]

export const bbh_movtex_merry_go_round_water_side = [
    { id: 1, movtex: bbh_movtex_merry_go_round_water_side_data },
    { id: -1, movtex: null },
]