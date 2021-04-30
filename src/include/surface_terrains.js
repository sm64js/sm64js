// Surface Types
export const SURFACE_DEFAULT                      = 0x0000 // Environment default
export const SURFACE_BURNING                      = 0x0001 // Lava / Frostbite (in SL), but is used mostly for Lava
export const SURFACE_0004                         = 0x0004 // Unused, has no function and has parameters
export const SURFACE_HANGABLE                     = 0x0005 // Ceiling that Mario can climb on
export const SURFACE_SLOW                         = 0x0009 // Slow down Mario, unused
export const SURFACE_DEATH_PLANE                  = 0x000A // Death floor
export const SURFACE_CLOSE_CAMERA                 = 0x000B // Close camera
export const SURFACE_WATER                        = 0x000D // Water, has no action, used on some waterboxes below
export const SURFACE_FLOWING_WATER                = 0x000E // Water (flowing), has parameters
export const SURFACE_INTANGIBLE                   = 0x0012 // Intangible (Separates BBH mansion from merry-go-round, for room usage)
export const SURFACE_VERY_SLIPPERY                = 0x0013 // Very slippery, mostly used for slides
export const SURFACE_SLIPPERY                     = 0x0014 // Slippery
export const SURFACE_NOT_SLIPPERY                 = 0x0015 // Non-slippery, climbable
export const SURFACE_TTM_VINES                    = 0x0016 // TTM vines, has no action defined
export const SURFACE_MGR_MUSIC                    = 0x001A // Plays the Merry go round music, see handle_merry_go_round_music in bbh_merry_go_round.inc.c for more details
export const SURFACE_INSTANT_WARP_1B              = 0x001B // Instant warp to another area, used to warp between areas in WDW and the endless stairs to warp back
export const SURFACE_INSTANT_WARP_1C              = 0x001C // Instant warp to another area, used to warp between areas in WDW
export const SURFACE_INSTANT_WARP_1D              = 0x001D // Instant warp to another area, used to warp between areas in DDD, SSL and TTM
export const SURFACE_INSTANT_WARP_1E              = 0x001E // Instant warp to another area, used to warp between areas in DDD, SSL and TTM
export const SURFACE_SHALLOW_QUICKSAND            = 0x0021 // Shallow Quicksand (depth of 10 units)
export const SURFACE_DEEP_QUICKSAND               = 0x0022 // Quicksand (lethal, slow, depth of 160 units)
export const SURFACE_INSTANT_QUICKSAND            = 0x0023 // Quicksand (lethal, instant)
export const SURFACE_DEEP_MOVING_QUICKSAND        = 0x0024 // Moving quicksand (flowing, depth of 160 units)
export const SURFACE_SHALLOW_MOVING_QUICKSAND     = 0x0025 // Moving quicksand (flowing, depth of 25 units)
export const SURFACE_QUICKSAND                    = 0x0026 // Moving quicksand (60 units)
export const SURFACE_MOVING_QUICKSAND             = 0x0027 // Moving quicksand (flowing, depth of 60 units)
export const SURFACE_WALL_MISC                    = 0x0028 // Used for some walls, Cannon to adjust the camera, and some objects like Warp Pipe
export const SURFACE_NOISE_DEFAULT                = 0x0029 // Default floor with noise
export const SURFACE_NOISE_SLIPPERY               = 0x002A // Slippery floor with noise
export const SURFACE_HORIZONTAL_WIND              = 0x002C // Horizontal wind, has parameters
export const SURFACE_INSTANT_MOVING_QUICKSAND     = 0x002D // Quicksand (lethal, flowing)
export const SURFACE_ICE                          = 0x002E // Slippery Ice, in snow levels and THI's water floor
export const SURFACE_LOOK_UP_WARP                 = 0x002F // Look up and warp (Wing cap entrance)
export const SURFACE_HARD                         = 0x0030 // Hard floor (Always has fall damage)
export const SURFACE_WARP                         = 0x0032 // Surface warp
export const SURFACE_TIMER_START                  = 0x0033 // Timer start (Peach's secret slide)
export const SURFACE_TIMER_END                    = 0x0034 // Timer stop (Peach's secret slide)
export const SURFACE_HARD_SLIPPERY                = 0x0035 // Hard and slippery (Always has fall damage)
export const SURFACE_HARD_VERY_SLIPPERY           = 0x0036 // Hard and very slippery (Always has fall damage)
export const SURFACE_HARD_NOT_SLIPPERY            = 0x0037 // Hard and Non-slippery (Always has fall damage)
export const SURFACE_VERTICAL_WIND                = 0x0038 // Death at bottom with vertical wind
export const SURFACE_BOSS_FIGHT_CAMERA            = 0x0065 // Wide camera for BOB and WF bosses
export const SURFACE_CAMERA_FREE_ROAM             = 0x0066 // Free roam camera for THI and TTC
export const SURFACE_THI3_WALLKICK                = 0x0068 // Surface where there's a wall kick section in THI 3rd area, has no action defined
export const SURFACE_CAMERA_8_DIR                 = 0x0069 // Surface that enables far camera for platforms, used in THI
export const SURFACE_CAMERA_MIDDLE                = 0x006E // Surface camera that returns to the middle, used on the 4 pillars of SSL
export const SURFACE_CAMERA_ROTATE_RIGHT          = 0x006F // Surface camera that rotates to the right (Bowser 1 & THI)
export const SURFACE_CAMERA_ROTATE_LEFT           = 0x0070 // Surface camera that rotates to the left (BOB & TTM)
export const SURFACE_CAMERA_BOUNDARY              = 0x0072 // Intangible Area, only used to restrict camera movement
export const SURFACE_NOISE_VERY_SLIPPERY_73       = 0x0073 // Very slippery floor with noise, unused
export const SURFACE_NOISE_VERY_SLIPPERY_74       = 0x0074 // Very slippery floor with noise, unused
export const SURFACE_NOISE_VERY_SLIPPERY          = 0x0075 // Very slippery floor with noise, used in CCM
export const SURFACE_NO_CAM_COLLISION             = 0x0076 // Surface with no cam collision flag
export const SURFACE_NO_CAM_COLLISION_77          = 0x0077 // Surface with no cam collision flag, unused
export const SURFACE_NO_CAM_COL_VERY_SLIPPERY     = 0x0078 // Surface with no cam collision flag, very slippery with noise (THI)
export const SURFACE_NO_CAM_COL_SLIPPERY          = 0x0079 // Surface with no cam collision flag, slippery with noise (CCM, PSS and TTM slides)
export const SURFACE_SWITCH                       = 0x007A // Surface with no cam collision flag, non-slippery with noise, used by switches and Dorrie
export const SURFACE_VANISH_CAP_WALLS             = 0x007B // Vanish cap walls, pass through them with Vanish Cap
export const SURFACE_PAINTING_WOBBLE_A6           = 0x00A6 // Painting wobble (BOB Left)
export const SURFACE_PAINTING_WOBBLE_A7           = 0x00A7 // Painting wobble (BOB Middle)
export const SURFACE_PAINTING_WOBBLE_A8           = 0x00A8 // Painting wobble (BOB Right)
export const SURFACE_PAINTING_WOBBLE_A9           = 0x00A9 // Painting wobble (CCM Left)
export const SURFACE_PAINTING_WOBBLE_AA           = 0x00AA // Painting wobble (CCM Middle)
export const SURFACE_PAINTING_WOBBLE_AB           = 0x00AB // Painting wobble (CCM Right)
export const SURFACE_PAINTING_WOBBLE_AC           = 0x00AC // Painting wobble (WF Left)
export const SURFACE_PAINTING_WOBBLE_AD           = 0x00AD // Painting wobble (WF Middle)
export const SURFACE_PAINTING_WOBBLE_AE           = 0x00AE // Painting wobble (WF Right)
export const SURFACE_PAINTING_WOBBLE_AF           = 0x00AF // Painting wobble (JRB Left)
export const SURFACE_PAINTING_WOBBLE_B0           = 0x00B0 // Painting wobble (JRB Middle)
export const SURFACE_PAINTING_WOBBLE_B1           = 0x00B1 // Painting wobble (JRB Right)
export const SURFACE_PAINTING_WOBBLE_B2           = 0x00B2 // Painting wobble (LLL Left)
export const SURFACE_PAINTING_WOBBLE_B3           = 0x00B3 // Painting wobble (LLL Middle)
export const SURFACE_PAINTING_WOBBLE_B4           = 0x00B4 // Painting wobble (LLL Right)
export const SURFACE_PAINTING_WOBBLE_B5           = 0x00B5 // Painting wobble (SSL Left)
export const SURFACE_PAINTING_WOBBLE_B6           = 0x00B6 // Painting wobble (SSL Middle)
export const SURFACE_PAINTING_WOBBLE_B7           = 0x00B7 // Painting wobble (SSL Right)
export const SURFACE_PAINTING_WOBBLE_B8           = 0x00B8 // Painting wobble (Unused - Left)
export const SURFACE_PAINTING_WOBBLE_B9           = 0x00B9 // Painting wobble (Unused - Middle)
export const SURFACE_PAINTING_WOBBLE_BA           = 0x00BA // Painting wobble (Unused - Right)
export const SURFACE_PAINTING_WOBBLE_BB           = 0x00BB // Painting wobble (DDD - Left), makes the painting wobble if touched
export const SURFACE_PAINTING_WOBBLE_BC           = 0x00BC // Painting wobble (Unused, DDD - Middle)
export const SURFACE_PAINTING_WOBBLE_BD           = 0x00BD // Painting wobble (Unused, DDD - Right)
export const SURFACE_PAINTING_WOBBLE_BE           = 0x00BE // Painting wobble (WDW Left)
export const SURFACE_PAINTING_WOBBLE_BF           = 0x00BF // Painting wobble (WDW Middle)
export const SURFACE_PAINTING_WOBBLE_C0           = 0x00C0 // Painting wobble (WDW Right)
export const SURFACE_PAINTING_WOBBLE_C1           = 0x00C1 // Painting wobble (THI Tiny - Left)
export const SURFACE_PAINTING_WOBBLE_C2           = 0x00C2 // Painting wobble (THI Tiny - Middle)
export const SURFACE_PAINTING_WOBBLE_C3           = 0x00C3 // Painting wobble (THI Tiny - Right)
export const SURFACE_PAINTING_WOBBLE_C4           = 0x00C4 // Painting wobble (TTM Left)
export const SURFACE_PAINTING_WOBBLE_C5           = 0x00C5 // Painting wobble (TTM Middle)
export const SURFACE_PAINTING_WOBBLE_C6           = 0x00C6 // Painting wobble (TTM Right)
export const SURFACE_PAINTING_WOBBLE_C7           = 0x00C7 // Painting wobble (Unused, TTC - Left)
export const SURFACE_PAINTING_WOBBLE_C8           = 0x00C8 // Painting wobble (Unused, TTC - Middle)
export const SURFACE_PAINTING_WOBBLE_C9           = 0x00C9 // Painting wobble (Unused, TTC - Right)
export const SURFACE_PAINTING_WOBBLE_CA           = 0x00CA // Painting wobble (Unused, SL - Left)
export const SURFACE_PAINTING_WOBBLE_CB           = 0x00CB // Painting wobble (Unused, SL - Middle)
export const SURFACE_PAINTING_WOBBLE_CC           = 0x00CC // Painting wobble (Unused, SL - Right)
export const SURFACE_PAINTING_WOBBLE_CD           = 0x00CD // Painting wobble (THI Huge - Left)
export const SURFACE_PAINTING_WOBBLE_CE           = 0x00CE // Painting wobble (THI Huge - Middle)
export const SURFACE_PAINTING_WOBBLE_CF           = 0x00CF // Painting wobble (THI Huge - Right)
export const SURFACE_PAINTING_WOBBLE_D0           = 0x00D0 // Painting wobble (HMC & COTMC - Left), makes the painting wobble if touched
export const SURFACE_PAINTING_WOBBLE_D1           = 0x00D1 // Painting wobble (Unused, HMC & COTMC - Middle)
export const SURFACE_PAINTING_WOBBLE_D2           = 0x00D2 // Painting wobble (Unused, HMC & COTMC - Right)
export const SURFACE_PAINTING_WARP_D3             = 0x00D3 // Painting warp (BOB Left)
export const SURFACE_PAINTING_WARP_D4             = 0x00D4 // Painting warp (BOB Middle)
export const SURFACE_PAINTING_WARP_D5             = 0x00D5 // Painting warp (BOB Right)
export const SURFACE_PAINTING_WARP_D6             = 0x00D6 // Painting warp (CCM Left)
export const SURFACE_PAINTING_WARP_D7             = 0x00D7 // Painting warp (CCM Middle)
export const SURFACE_PAINTING_WARP_D8             = 0x00D8 // Painting warp (CCM Right)
export const SURFACE_PAINTING_WARP_D9             = 0x00D9 // Painting warp (WF Left)
export const SURFACE_PAINTING_WARP_DA             = 0x00DA // Painting warp (WF Middle)
export const SURFACE_PAINTING_WARP_DB             = 0x00DB // Painting warp (WF Right)
export const SURFACE_PAINTING_WARP_DC             = 0x00DC // Painting warp (JRB Left)
export const SURFACE_PAINTING_WARP_DD             = 0x00DD // Painting warp (JRB Middle)
export const SURFACE_PAINTING_WARP_DE             = 0x00DE // Painting warp (JRB Right)
export const SURFACE_PAINTING_WARP_DF             = 0x00DF // Painting warp (LLL Left)
export const SURFACE_PAINTING_WARP_E0             = 0x00E0 // Painting warp (LLL Middle)
export const SURFACE_PAINTING_WARP_E1             = 0x00E1 // Painting warp (LLL Right)
export const SURFACE_PAINTING_WARP_E2             = 0x00E2 // Painting warp (SSL Left)
export const SURFACE_PAINTING_WARP_E3             = 0x00E3 // Painting warp (SSL Medium)
export const SURFACE_PAINTING_WARP_E4             = 0x00E4 // Painting warp (SSL Right)
export const SURFACE_PAINTING_WARP_E5             = 0x00E5 // Painting warp (Unused - Left)
export const SURFACE_PAINTING_WARP_E6             = 0x00E6 // Painting warp (Unused - Medium)
export const SURFACE_PAINTING_WARP_E7             = 0x00E7 // Painting warp (Unused - Right)
export const SURFACE_PAINTING_WARP_E8             = 0x00E8 // Painting warp (DDD - Left)
export const SURFACE_PAINTING_WARP_E9             = 0x00E9 // Painting warp (DDD - Middle)
export const SURFACE_PAINTING_WARP_EA             = 0x00EA // Painting warp (DDD - Right)
export const SURFACE_PAINTING_WARP_EB             = 0x00EB // Painting warp (WDW Left)
export const SURFACE_PAINTING_WARP_EC             = 0x00EC // Painting warp (WDW Middle)
export const SURFACE_PAINTING_WARP_ED             = 0x00ED // Painting warp (WDW Right)
export const SURFACE_PAINTING_WARP_EE             = 0x00EE // Painting warp (THI Tiny - Left)
export const SURFACE_PAINTING_WARP_EF             = 0x00EF // Painting warp (THI Tiny - Middle)
export const SURFACE_PAINTING_WARP_F0             = 0x00F0 // Painting warp (THI Tiny - Right)
export const SURFACE_PAINTING_WARP_F1             = 0x00F1 // Painting warp (TTM Left)
export const SURFACE_PAINTING_WARP_F2             = 0x00F2 // Painting warp (TTM Middle)
export const SURFACE_PAINTING_WARP_F3             = 0x00F3 // Painting warp (TTM Right)
export const SURFACE_TTC_PAINTING_1               = 0x00F4 // Painting warp (TTC Left)
export const SURFACE_TTC_PAINTING_2               = 0x00F5 // Painting warp (TTC Medium)
export const SURFACE_TTC_PAINTING_3               = 0x00F6 // Painting warp (TTC Right)
export const SURFACE_PAINTING_WARP_F7             = 0x00F7 // Painting warp (SL Left)
export const SURFACE_PAINTING_WARP_F8             = 0x00F8 // Painting warp (SL Middle)
export const SURFACE_PAINTING_WARP_F9             = 0x00F9 // Painting warp (SL Right)
export const SURFACE_PAINTING_WARP_FA             = 0x00FA // Painting warp (THI Tiny - Left)
export const SURFACE_PAINTING_WARP_FB             = 0x00FB // Painting warp (THI Tiny - Middle)
export const SURFACE_PAINTING_WARP_FC             = 0x00FC // Painting warp (THI Tiny - Right)
export const SURFACE_WOBBLING_WARP                = 0x00FD // Pool warp (HMC & DDD)
export const SURFACE_TRAPDOOR                     = 0x00FF // Bowser Left trapdoor, has no action defined

export const SURFACE_IS_QUICKSAND     = (cmd) => { return (cmd >= 0x21 && cmd < 0x28) }  // Doesn't include SURFACE_INSTANT_MOVING_QUICKSAND
export const SURFACE_IS_NOT_HARD      = (cmd) => { return (cmd != SURFACE_HARD && !(cmd >= 0x35 && cmd <= 0x37)) }
export const SURFACE_IS_PAINTING_WARP = (cmd) => { return (cmd >= 0xD3 && cmd < 0xFD) }

export const SURFACE_CLASS_DEFAULT       = 0x0000
export const SURFACE_CLASS_VERY_SLIPPERY = 0x0013
export const SURFACE_CLASS_SLIPPERY      = 0x0014
export const SURFACE_CLASS_NOT_SLIPPERY  = 0x0015

export const SURFACE_FLAG_DYNAMIC          = (1 << 0)
export const SURFACE_FLAG_NO_CAM_COLLISION = (1 << 1)
export const SURFACE_FLAG_X_PROJECTION     = (1 << 3)

// These are effectively unique "surface" types like those defined higher
// And they are used as collision commands to load certain functions
export const TERRAIN_LOAD_VERTICES    = 0x0040 // Begins vertices list for collision triangles
export const TERRAIN_LOAD_CONTINUE    = 0x0041 // Stop loading vertices but continues to load other collision commands
export const TERRAIN_LOAD_END         = 0x0042 // End the collision list
export const TERRAIN_LOAD_OBJECTS     = 0x0043 // Loads in certain objects for level start
export const TERRAIN_LOAD_ENVIRONMENT = 0x0044 // Loads water/HMC gas

export const TERRAIN_LOAD_IS_SURFACE_TYPE_LOW  = (cmd) => { return (cmd < 0x40) }
export const TERRAIN_LOAD_IS_SURFACE_TYPE_HIGH = (cmd) => { return (cmd >= 0x65) }

// Terrain types defined by the level script command terrain_type (cmd_31)
export const TERRAIN_GRASS  = 0x0000
export const TERRAIN_STONE  = 0x0001
export const TERRAIN_SNOW   = 0x0002
export const TERRAIN_SAND   = 0x0003
export const TERRAIN_SPOOKY = 0x0004
export const TERRAIN_WATER  = 0x0005
export const TERRAIN_SLIDE  = 0x0006
export const TERRAIN_MASK = 0x0007


export const LEVEL_BOUNDARY_MAX = 0x4000
export const CELL_SIZE          = 0x400

export const CELL_HEIGHT_LIMIT        = 20000
export const FLOOR_LOWER_LIMIT        = -11000
export const FLOOR_LOWER_LIMIT_MISC   = FLOOR_LOWER_LIMIT + 1000.0
export const FLOOR_LOWER_LIMIT_SHADOW = FLOOR_LOWER_LIMIT + 1000.0

// enum SpecialPresets
export const special_null_start = 0x0
export const special_yellow_coin = 0x1
export const special_yellow_coin_2 = 0x2
export const special_unknown_3 = 0x3
export const special_boo = 0x4
export const special_unknown_5 = 0x5
export const special_lll_moving_octagonal_mesh_platform = 0x6
export const special_snow_ball = 0x7
export const special_lll_drawbridge_spawner = 0x8
export const special_empty_9 = 0x9
export const special_lll_rotating_block_with_fire_bars = 0xA
export const special_lll_floating_wood_bridge = 0xB
export const special_tumbling_platform = 0xC
export const special_lll_rotating_hexagonal_ring = 0xD
export const special_lll_sinking_rectangular_platform = 0xE
export const special_lll_sinking_square_platforms = 0xF
export const special_lll_tilting_square_platform = 0x10
export const special_lll_bowser_puzzle = 0x11
export const special_mr_i = 0x12
export const special_small_bully = 0x13
export const special_big_bully = 0x14
export const special_empty_21 = 0x15
export const special_empty_22 = 0x16
export const special_empty_23 = 0x17
export const special_empty_24 = 0x18
export const special_empty_25 = 0x19
export const special_moving_blue_coin = 0x1A
export const special_jrb_chest = 0x1B
export const special_water_ring = 0x1C
export const special_mine = 0x1D
export const special_empty_30 = 0x1E
export const special_empty_31 = 0x1F
export const special_butterfly = 0x20
export const special_bowser = 0x21
export const special_wf_rotating_wooden_platform = 0x22
export const special_small_bomp = 0x23
export const special_wf_sliding_platform = 0x24
export const special_tower_platform_group = 0x25
export const special_rotating_counter_clockwise = 0x26
export const special_wf_tumbling_bridge = 0x27
export const special_large_bomp = 0x28

export const special_level_geo_03 = 0x65
export const special_level_geo_04 = 0x66
export const special_level_geo_05 = 0x67
export const special_level_geo_06 = 0x68
export const special_level_geo_07 = 0x69
export const special_level_geo_08 = 0x6A
export const special_level_geo_09 = 0x6B
export const special_level_geo_0A = 0x6C
export const special_level_geo_0B = 0x6D
export const special_level_geo_0C = 0x6E
export const special_level_geo_0D = 0x6F
export const special_level_geo_0E = 0x70
export const special_level_geo_0F = 0x71
export const special_level_geo_10 = 0x72
export const special_level_geo_11 = 0x73
export const special_level_geo_12 = 0x74
export const special_level_geo_13 = 0x75
export const special_level_geo_14 = 0x76
export const special_level_geo_15 = 0x77
export const special_level_geo_16 = 0x78
export const special_bubble_tree = 0x79
export const special_spiky_tree = 0x7A
export const special_snow_tree = 0x7B
export const special_unknown_tree = 0x7C
export const special_palm_tree = 0x7D
export const special_wooden_door = 0x7E
export const special_haunted_door = special_wooden_door
export const special_unknown_door = 0x7F
export const special_metal_door = 0x80
export const special_hmc_door = 0x81
export const special_unknown2_door = 0x82
export const special_wooden_door_warp = 0x83
export const special_unknown1_door_warp = 0x84
export const special_metal_door_warp = 0x85
export const special_unknown2_door_warp = 0x86
export const special_unknown3_door_warp = 0x87
export const special_castle_door_warp = 0x88
export const special_castle_door = 0x89
export const special_0stars_door = 0x8A
export const special_1star_door = 0x8B
export const special_3star_door = 0x8C
export const special_key_door = 0x8D

export const special_null_end = 0xFF


export const COL_INIT                          = () =>                                      { return [TERRAIN_LOAD_VERTICES] }
export const COL_END                           = () =>                                      { return [TERRAIN_LOAD_END] }
export const COL_TRI_STOP                      = () =>                                      { return [TERRAIN_LOAD_CONTINUE] }
export const COL_VERTEX_INIT                   = (vtxNum) =>                                { return [vtxNum] }
export const COL_VERTEX                        = (x, y, z) =>                               { return [x, y, z] }
export const COL_TRI_INIT                      = (surfType, triNum) =>                      { return [surfType, triNum] }
export const COL_TRI                           = (v1, v2, v3) =>                            { return [v1, v2, v3] }
export const COL_TRI_SPECIAL                   = (v1, v2, v3, param) =>                     { return [v1, v2, v3, param] }
export const COL_SPECIAL_INIT                  = (num) =>                                   { return [TERRAIN_LOAD_OBJECTS, num] }
export const SPECIAL_OBJECT                    = (preset, posX, posY, posZ) =>              { return [preset, posX, posY, posZ] }
export const SPECIAL_OBJECT_WITH_YAW           = (preset, posX, posY, posZ, yaw) =>         { return [preset, posX, posY, posZ, yaw] }
export const SPECIAL_OBJECT_WITH_YAW_AND_PARAM = (preset, posX, posY, posZ, yaw, param) =>  { return [preset, posX, posY, posZ, yaw, param] }
export const COL_WATER_BOX_INIT                = (num) =>                                   { return [TERRAIN_LOAD_ENVIRONMENT, num] }
export const COL_WATER_BOX                     = (id, x1, z1, x2, z2, y) =>                 { return [id, x1, z1, x2, z2, y] }

export const TRAJECTORY_POS                    = (trajId, x, y, z) =>                       { return {flags: trajId, pos: [x, y, z]} }
export const TRAJECTORY_END                    = () =>                                      { return {flags: -1} }
