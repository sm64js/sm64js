// From gMovingTextureIdList
export const TEXTURE_WATER            =  0
export const TEXTURE_MIST             =  1
export const TEXTURE_JRB_WATER        =  2
export const TEXTURE_UNK_WATER        =  3
export const TEXTURE_LAVA             =  4
export const TEX_QUICKSAND_SSL        =  5
export const TEX_PYRAMID_SAND_SSL     =  6
export const TEX_YELLOW_TRI_TTC       =  7

// Moving Texture rotations
export const ROTATE_CLOCKWISE         =  0
export const ROTATE_COUNTER_CLOCKWISE =  1

export const MOV_TEX_INIT_LOAD = (amount) => { return [amount, 0] }
export const MOV_TEX_ROT_SPEED = (rotspeed) => { return [rotspeed] }
export const MOV_TEX_ROT_SCALE = (rotscale) => { return [rotscale] }
export const MOV_TEX_4_BOX_TRIS = (x, z) => { return [x, z] }
export const MOV_TEX_ROT = (rot) => { return [rot] }
export const MOV_TEX_ALPHA = (alpha) => { return [alpha] }
export const MOV_TEX_DEFINE = (text) => { return [text] }
export const MOV_TEX_END = () => { return [0] }
export const MOV_TEX_SPD = (speed) => { return [speed] }
export const MOV_TEX_TRIS = (x, y, z, param1, param2) => { return [x, y, z, param1, param2] }
export const MOV_TEX_ROT_TRIS = (x, y, z, rotx, roty, rotz, param1, param2) => { return [x, y, z, rotx, roty, rotz, param1, param2] }
export const MOV_TEX_ROT_END = () => { return [0] }
export const MOV_TEX_LIGHT_TRIS = (x, y, z, light, param1, param2) => { return[x, y, z, 0, light, 0, param1, param2] }