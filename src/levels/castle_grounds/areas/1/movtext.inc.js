import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, ROTATE_COUNTER_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER, ROTATE_CLOCKWISE, MOV_TEX_END } from "../../../../include/moving_texture_macros";

const castle_grounds_movtex_moat_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(20),
    ...MOV_TEX_ROT_SCALE(15),
    ...MOV_TEX_4_BOX_TRIS(-7129, -7222),
    ...MOV_TEX_4_BOX_TRIS(-7129, -58),
    ...MOV_TEX_4_BOX_TRIS(8253, -58),
    ...MOV_TEX_4_BOX_TRIS(8253, -7222),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0xC6),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END()
]

const castle_grounds_movtex_lake_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(15),
    ...MOV_TEX_ROT_SCALE(10),
    ...MOV_TEX_4_BOX_TRIS(1024, -58),
    ...MOV_TEX_4_BOX_TRIS(1024, 8137),
    ...MOV_TEX_4_BOX_TRIS(8230, 8137),
    ...MOV_TEX_4_BOX_TRIS(8230, -58),
    ...MOV_TEX_ROT(ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(0xC6),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]



export const castle_grounds_movtex_water = [
    { id: 0, movtex: castle_grounds_movtex_moat_water_data },
    { id: 1, movtex: castle_grounds_movtex_lake_water_data },
    { id: -1 }
]
