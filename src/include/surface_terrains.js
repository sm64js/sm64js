export const TERRAIN_LOAD_VERTICES = 0x0040
export const TERRAIN_LOAD_CONTINUE = 0x0041
export const TERRAIN_LOAD_END = 0x0042
export const TERRAIN_LOAD_OBJECTS = 0x0043
export const TERRAIN_LOAD_ENVIRONMENT = 0x0044 // Loads water/HMC gas


export const LEVEL_BOUNDARY_MAX = 0x4000
export const CELL_SIZE          = 0x400

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
export const SURFACE_INSTANT_MOVING_QUICKSAND = 0x002D // Quicksand (lethal, flowing)
export const SURFACE_CAMERA_ROTATE_LEFT           = 0x0070
export const SURFACE_CAMERA_BOUNDARY              = 0x0072 // Intangible Area, only used to restrict camera movement

export const SURFACE_HARD                          = 0x0030

export const SURFACE_HARD_SLIPPERY                 = 0x0035 // Hard and slippery (Always has fall damage)
export const SURFACE_HARD_VERY_SLIPPERY            = 0x0036 // Hard and very slippery (Always has fall damage)
export const SURFACE_HARD_NOT_SLIPPERY = 0x0037 // Hard and Non-slippery (Always has fall damage)
export const SURFACE_VERTICAL_WIND                 = 0x0038

export const SURFACE_NOISE_VERY_SLIPPERY_73        = 0x0073 // Very slippery floor with noise, unused
export const SURFACE_NOISE_VERY_SLIPPERY_74        = 0x0074 // Very slippery floor with noise, unused
export const SURFACE_NOISE_VERY_SLIPPERY = 0x0075 // Very slippery floor with noise, used in CCM
export const SURFACE_BOSS_FIGHT_CAMERA = 0x0065

export const SURFACE_CLASS_DEFAULT                 = 0x0000
export const SURFACE_CLASS_VERY_SLIPPERY           = 0x0013
export const SURFACE_CLASS_SLIPPERY                = 0x0014
export const SURFACE_CLASS_NOT_SLIPPERY            = 0x0015

export const SURFACE_ICE                           = 0x002E // Slippery Ice, in snow levels and THI's water floor

export const SURFACE_NO_CAM_COL_VERY_SLIPPERY     = 0x0078 // Surface with no cam collision flag, very slippery with noise (THI)
export const SURFACE_NO_CAM_COL_SLIPPERY          = 0x0079 // Surface with no cam collision flag, slippery with noise (CCM, PSS and TTM slides)
export const SURFACE_SWITCH                       = 0x007A // Surface with no cam collision flag, non-slippery with noise, used by switches and Dorrie

export const SURFACE_FLAG_DYNAMIC          = (1 << 0)
export const SURFACE_FLAG_NO_CAM_COLLISION = (1 << 1)
export const SURFACE_FLAG_X_PROJECTION     = (1 << 3)

// Terrain types defined by the level script command terrain_type (cmd_31)
export const TERRAIN_GRASS  = 0x0000
export const TERRAIN_STONE  = 0x0001
export const TERRAIN_SNOW   = 0x0002
export const TERRAIN_SAND   = 0x0003
export const TERRAIN_SPOOKY = 0x0004
export const TERRAIN_WATER  = 0x0005
export const TERRAIN_SLIDE  = 0x0006
export const TERRAIN_MASK = 0x0007

export const special_level_geo_03 = 101
export const special_level_geo_04 = 102
export const special_level_geo_05 = 103
export const special_level_geo_06 = 104
export const special_level_geo_07 = 105
export const special_level_geo_08 = 106
export const special_level_geo_09 = 107
export const special_level_geo_0A = 108
export const special_level_geo_0B = 109
export const special_level_geo_0C = 110
export const special_level_geo_0D = 111
export const special_level_geo_0E = 112
export const special_level_geo_0F = 113
export const special_level_geo_10 = 114
export const special_level_geo_11 = 115
export const special_level_geo_12 = 116
export const special_level_geo_13 = 117
export const special_level_geo_14 = 118
export const special_level_geo_15 = 119
export const special_level_geo_16 = 120

export const special_bubble_tree = 121
export const special_snow_tree = 123

export const COL_INIT = () => { return [TERRAIN_LOAD_VERTICES] }
export const COL_END = () => { return [TERRAIN_LOAD_END] }
export const COL_TRI_STOP = () => { return [TERRAIN_LOAD_CONTINUE] }
export const COL_VERTEX_INIT = (vtxNum) => { return [vtxNum] }
export const COL_VERTEX = (x, y, z) => { return [x, y, z] }
export const COL_TRI_INIT = (surfType, triNum) => { return [surfType, triNum] }
export const COL_TRI = (v1, v2, v3) => { return [v1, v2, v3] }
export const COL_TRI_SPECIAL = (v1, v2, v3, param) => { return [v1, v2, v3, param] }
export const COL_SPECIAL_INIT = (num) => { return [TERRAIN_LOAD_OBJECTS, num] }
export const SPECIAL_OBJECT = (preset, posX, posY, posZ) => { return [preset, posX, posY, posZ] }
export const SPECIAL_OBJECT_WITH_YAW = (preset, posX, posY, posZ, yaw) => {
    return [preset, posX, posY, posZ, yaw]
}
export const COL_WATER_BOX_INIT = (num) => { return [TERRAIN_LOAD_ENVIRONMENT, num] }
export const COL_WATER_BOX = (id, x1, z1, x2, z2, y) => {
    return [id, x1, z1, x2, z2, y]
}


