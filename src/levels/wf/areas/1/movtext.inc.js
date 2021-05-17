import { 
	MOV_TEX_INIT_LOAD, 
	MOV_TEX_ROT_SPEED, 
	MOV_TEX_ROT_SCALE, 
	MOV_TEX_4_BOX_TRIS, 
	MOV_TEX_ROT, 
	ROTATE_CLOCKWISE, 
	MOV_TEX_ALPHA, 
	MOV_TEX_DEFINE, 
	TEXTURE_WATER, 
	MOV_TEX_END,
} from "../../../../include/moving_texture_macros"

const wf_movtex_water_data = [
    ...MOV_TEX_INIT_LOAD(    1),
    ...MOV_TEX_ROT_SPEED(   10),
    ...MOV_TEX_ROT_SCALE(   10),
    ...MOV_TEX_4_BOX_TRIS(-1023, 1024),
    ...MOV_TEX_4_BOX_TRIS(-1023, 4096),
    ...MOV_TEX_4_BOX_TRIS( 3226, 4096),
    ...MOV_TEX_4_BOX_TRIS( 3226, 1024),
    ...MOV_TEX_ROT(     ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(    0x78),
    ...MOV_TEX_DEFINE(  TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const wf_movtex_water = [
    { id: 0, movtex: wf_movtex_water_data },
]
