import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, 
    MOV_TEX_ROT, ROTATE_COUNTER_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, ROTATE_CLOCKWISE,
    MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS, TEXTURE_WATER, TEXTURE_TEAL_WATER } from "../../../../include/moving_texture_macros"

const raceway_water_data = [
    MOV_TEX_INIT_LOAD(1),
    MOV_TEX_ROT_SPEED(10),
    MOV_TEX_ROT_SCALE(7),
    MOV_TEX_4_BOX_TRIS(-12529, 3247),
    MOV_TEX_4_BOX_TRIS(-12529, 8247),
    MOV_TEX_4_BOX_TRIS(-6529, 8247),
    MOV_TEX_4_BOX_TRIS(-6529, 3247),
    MOV_TEX_ROT(ROTATE_CLOCKWISE),
    MOV_TEX_ALPHA(0x96),
    MOV_TEX_DEFINE(TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

export const raceway_movtex_water = [
    { id: 0, movtex: raceway_water_data },
    { id: -1 }
]