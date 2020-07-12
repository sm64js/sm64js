export const TERRAIN_LOAD_VERTICES = 0x0040
export const TERRAIN_LOAD_CONTINUE = 0x0041
export const TERRAIN_LOAD_END = 0x0042
export const TERRAIN_LOAD_OBJECTS = 0x0043

// Surface Types
export const SURFACE_DEFAULT        = 0x0000 // Environment default
export const SURFACE_BURNING        = 0x0001 // Lava / Frostbite (in SL), but is used mostly for Lava
export const SURFACE_0004           = 0x0004 // Unused, has no function and has parameters
export const SURFACE_HANGABLE       = 0x0005 // Ceiling that Mario can climb on
export const SURFACE_SLOW           = 0x0009 // Slow down Mario, unused
export const SURFACE_DEATH_PLANE    = 0x000A // Death floor
export const SURFACE_CLOSE_CAMERA   = 0x000B // Close camera
export const SURFACE_WATER          = 0x000D // Water, has no action, used on some waterboxes below
export const SURFACE_FLOWING_WATER  = 0x000E // Water (flowing), has parameters
export const SURFACE_INTANGIBLE     = 0x0012 // Intangible (Separates BBH mansion from merry-go-round, for room usage)
export const SURFACE_VERY_SLIPPERY  = 0x0013 // Very slippery, mostly used for slides
export const SURFACE_SLIPPERY       = 0x0014 // Slippery
export const SURFACE_NOT_SLIPPERY   = 0x0015 // Non-slippery, climbable
export const SURFACE_WALL_MISC = 0x0028 // Used for some walls, Cannon to adjust the camera, and some objects like Warp Pipe
export const SURFACE_NOISE_DEFAULT  = 0x0029 // Default floor with noise
export const SURFACE_NOISE_SLIPPERY = 0x002A // Slippery floor with noise
export const SURFACE_NO_CAM_COLLISION             = 0x0076 // Surface with no cam collision flag
export const SURFACE_SHALLOW_QUICKSAND            = 0x0021 // Shallow Quicksand (depth of 10 units)
export const SURFACE_DEEP_QUICKSAND               = 0x0022 // Quicksand (lethal, slow, depth of 160 units)
export const SURFACE_INSTANT_QUICKSAND            = 0x0023 // Quicksand (lethal, instant)
export const SURFACE_DEEP_MOVING_QUICKSAND        = 0x0024 // Moving quicksand (flowing, depth of 160 units)
export const SURFACE_SHALLOW_MOVING_QUICKSAND     = 0x0025 // Moving quicksand (flowing, depth of 25 units)
export const SURFACE_QUICKSAND                    = 0x0026 // Moving quicksand (60 units)
export const SURFACE_MOVING_QUICKSAND             = 0x0027 // Moving quicksand (flowing, depth of 60 units)
export const SURFACE_HORIZONTAL_WIND              = 0x002C // Horizontal wind, has parameters
export const SURFACE_INSTANT_MOVING_QUICKSAND     = 0x002D // Quicksand (lethal, flowing)

export const SURFACE_NO_CAM_COL_VERY_SLIPPERY     = 0x0078 // Surface with no cam collision flag, very slippery with noise (THI)
export const SURFACE_NO_CAM_COL_SLIPPERY          = 0x0079 // Surface with no cam collision flag, slippery with noise (CCM, PSS and TTM slides)
export const SURFACE_SWITCH                       = 0x007A // Surface with no cam collision flag, non-slippery with noise, used by switches and Dorrie

export const SURFACE_FLAG_NO_CAM_COLLISION = (1 << 1)
export const SURFACE_FLAG_X_PROJECTION     = (1 << 3)

export const COL_INIT = () => { return TERRAIN_LOAD_VERTICES }
export const COL_END = () => { return TERRAIN_LOAD_END }
export const COL_TRI_STOP = () => { return TERRAIN_LOAD_CONTINUE }
export const COL_VERTEX_INIT = (vtxNum) => { return vtxNum }
export const COL_VERTEX = (x, y, z) => { return [x, y, z] }
export const COL_TRI_INIT = (surfType, triNum) => { return [surfType, triNum] }
export const COL_TRI = (v1, v2, v3) => { return [v1, v2, v3] }
export const COL_TRI_SPECIAL = (v1, v2, v3, param) => { return [v1, v2, v3, param] }
export const COL_SPECIAL_INIT = (num) => { return [TERRAIN_LOAD_OBJECTS, num] }


