import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, ROTATE_COUNTER_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER, ROTATE_CLOCKWISE, MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS } from "../../../../include/moving_texture_macros"

const gj_lake_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(13),
    ...MOV_TEX_ROT_SCALE(13),
    ...MOV_TEX_4_BOX_TRIS(-5322, -1707),
    ...MOV_TEX_4_BOX_TRIS(-5322, 3464),
    ...MOV_TEX_4_BOX_TRIS(4583, 3464),
    ...MOV_TEX_4_BOX_TRIS(4583, -1707),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const gj_movtex_water = [
    { id: 0, movtex: gj_lake_data },
    { id: -1 }
]