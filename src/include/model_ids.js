export const MODEL_NONE                            = 0x00
export const MODEL_MARIO = 0x01

export const COIN_FORMATION_FLAG_VERTICAL = (1 << 0)
export const COIN_FORMATION_FLAG_RING = (1 << 1)
export const COIN_FORMATION_FLAG_ARROW = (1 << 2)
export const COIN_FORMATION_FLAG_FLYING = (1 << 4)

export const MODEL_LEVEL_GEOMETRY_03               = 0x03
export const MODEL_LEVEL_GEOMETRY_04               = 0x04
export const MODEL_LEVEL_GEOMETRY_05               = 0x05
export const MODEL_LEVEL_GEOMETRY_06               = 0x06
export const MODEL_LEVEL_GEOMETRY_07               = 0x07
export const MODEL_LEVEL_GEOMETRY_08               = 0x08
export const MODEL_LEVEL_GEOMETRY_09               = 0x09
export const MODEL_LEVEL_GEOMETRY_0A               = 0x0A
export const MODEL_LEVEL_GEOMETRY_0B               = 0x0B
export const MODEL_LEVEL_GEOMETRY_0C               = 0x0C
export const MODEL_LEVEL_GEOMETRY_0D               = 0x0D
export const MODEL_LEVEL_GEOMETRY_0E               = 0x0E
export const MODEL_LEVEL_GEOMETRY_0F               = 0x0F
export const MODEL_LEVEL_GEOMETRY_10               = 0x10
export const MODEL_LEVEL_GEOMETRY_11               = 0x11
export const MODEL_LEVEL_GEOMETRY_12               = 0x12
export const MODEL_LEVEL_GEOMETRY_13               = 0x13
export const MODEL_LEVEL_GEOMETRY_14               = 0x14
export const MODEL_LEVEL_GEOMETRY_15               = 0x15
export const MODEL_LEVEL_GEOMETRY_16               = 0x16

export const MODEL_BOB_BUBBLY_TREE                 = 0x17        // bubbly_tree_geo
export const MODEL_WDW_BUBBLY_TREE                 = 0x17        // bubbly_tree_geo
export const MODEL_CASTLE_GROUNDS_BUBBLY_TREE      = 0x17        // bubbly_tree_geo
export const MODEL_WF_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const MODEL_THI_BUBBLY_TREE                 = 0x17        // bubbly_tree_geo
export const MODEL_COURTYARD_SPIKY_TREE            = 0x18        // spiky_tree_geo
export const MODEL_CCM_SNOW_TREE                   = 0x19        // snow_tree_geo
export const MODEL_SL_SNOW_TREE                    = 0x19        // snow_tree_geo
export const MODEL_UNKNOWN_TREE_1A                 = 0x1A        // referenced in special presets, undefined
export const MODEL_SSL_PALM_TREE                   = 0x1B        // palm_tree_geo
export const MODEL_CASTLE_CASTLE_DOOR_UNUSED       = 0x1C        // castle_door_geo - unused, original id
export const MODEL_CASTLE_WOODEN_DOOR_UNUSED       = 0x1D        // wooden_door_geo - unused, original id
export const MODEL_BBH_HAUNTED_DOOR                = 0x1D        // haunted_door_geo
export const MODEL_HMC_WOODEN_DOOR                 = 0x1D        // wooden_door_geo
export const MODEL_UNKNOWN_DOOR_1E                 = 0x1E        // referenced in special presets, undefined
export const MODEL_HMC_METAL_DOOR                  = 0x1F        // metal_door_geo
export const MODEL_HMC_HAZY_MAZE_DOOR              = 0x20        // hazy_maze_door_geo
export const MODEL_UNKNOWN_DOOR_21                 = 0x21        // referenced in special presets, undefined
export const MODEL_CASTLE_DOOR_0_STARS             = 0x22        // castle_door_0_star_geo
export const MODEL_CASTLE_DOOR_1_STAR              = 0x23        // castle_door_1_star_geo
export const MODEL_CASTLE_DOOR_3_STARS             = 0x24        // castle_door_3_stars_geo
export const MODEL_CASTLE_KEY_DOOR                 = 0x25        // key_door_geo
export const MODEL_CASTLE_CASTLE_DOOR              = 0x26        // castle_door_geo - used duplicate
export const MODEL_CASTLE_GROUNDS_CASTLE_DOOR      = 0x26        // castle_door_geo - used duplicate
export const MODEL_CASTLE_WOODEN_DOOR              = 0x27        // wooden_door_geo
export const MODEL_COURTYARD_WOODEN_DOOR           = 0x27        // wooden_door_geo
export const MODEL_CCM_CABIN_DOOR                  = 0x27        // cabin_door_geo
export const MODEL_UNKNOWN_DOOR_28                 = 0x28        // referenced in special presets, undefined
export const MODEL_CASTLE_METAL_DOOR               = 0x29        // metal_door_geo
export const MODEL_CASTLE_GROUNDS_METAL_DOOR       = 0x29        // metal_door_geo
export const MODEL_UNKNOWN_DOOR_2A                 = 0x2A        // referenced in special presets, undefined
export const MODEL_UNKNOWN_DOOR_2B                 = 0x2B        // referenced in special presets, undefined
export const MODEL_WF_TOWER_TRAPEZOID_PLATORM      = 0x2C        // wf_geo_000AF8 - unused
export const MODEL_WF_TOWER_SQUARE_PLATORM         = 0x2D        // wf_geo_000B10
export const MODEL_WF_TOWER_SQUARE_PLATORM_UNUSED  = 0x2E        // wf_geo_000B38 - unused & duplicated
export const MODEL_WF_TOWER_SQUARE_PLATORM_ELEVATO = 0x2F        // wf_geo_000B60 - elevator platorm
export const MODEL_WF_GIANT_POLE                   = MODEL_LEVEL_GEOMETRY_0D        // wf_geo_000B60 - elevator platorm

// castle grounds
export const MODEL_CASTLE_GROUNDS_VCUTM_GRILL       =   0x36
export const MODEL_CASTLE_GROUNDS_FLAG              =   0x37
export const MODEL_CASTLE_GROUNDS_CANNON_GRILL = 0x38

// bob
export const MODEL_BOB_CHAIN_CHOMP_GATE             = 0x36        // bob_geo_000440
export const MODEL_BOB_SEESAW_PLATFORM              = 0x37        // bob_geo_000458
export const MODEL_BOB_BARS_GRILLS = 0x38        // bob_geo_000470

export const MODEL_YELLOW_SPHERE = 0x55        // yellow_sphere_geo

// group 14
export const MODEL_PIRANHA_PLANT = 0x64        // piranha_plant_geo
export const MODEL_WHOMP = 0x67        // whomp_geo
export const MODEL_KOOPA_WITH_SHELL = 0x68        // koopa_with_shell_geo
export const MODEL_METALLIC_BALL = 0x65        // metallic_ball_geo
export const MODEL_CHAIN_CHOMP = 0x66        // chain_chomp
export const MODEL_KOOPA_FLAG = 0x6A        // koopa_flag_geo
export const MODEL_WOODEN_POST = 0x6B        // wooden_post_geo

export const MODEL_YELLOW_COIN = 0x74
export const MODEL_YELLOW_COIN_NO_SHADOW = 0x75

export const MODEL_CANNON_BARREL = 0x7F        // cannon_barrel_geo
export const MODEL_CANNON_BASE = 0x80        // cannon_base_geo
export const MODEL_BREAKABLE_BOX = 0x81        // breakable_box_geo
export const MODEL_BREAKABLE_BOX_SMALL = 0x82        // breakable_box_small_geo
export const MODEL_EXCLAMATION_BOX_OUTLINE = 0x83        // exclamation_box_outline_geo
export const MODEL_EXCLAMATION_POINT = 0x84        // exclamation_point_seg8_dl_08025F08
export const MODEL_MARIOS_WINGED_METAL_CAP = 0x85        // marios_winged_metal_cap_geo
export const MODEL_MARIOS_METAL_CAP = 0x86        // marios_metal_cap_geo
export const MODEL_MARIOS_WING_CAP = 0x87        // marios_wing_cap_geo
export const MODEL_MARIOS_CAP = 0x88        // marios_cap_geo
export const MODEL_EXCLAMATION_BOX = 0x89        // exclamation_box_geo
export const MODEL_DIRT_ANIMATION = 0x8A        // dirt_animation_geo
export const MODEL_CARTOON_STAR = 0x8B        // cartoon_star_geo
export const MODEL_BLUE_COIN_SWITCH = 0x8C        // blue_coin_switch_geo

export const MODEL_MIST = 0x8E        // mist_geo
export const MODEL_SPARKLES_ANIMATION = 0x8F        // sparkles_animation_geo
export const MODEL_RED_FLAME = 0x90        // red_flame_geo
export const MODEL_BLUE_FLAME = 0x91        // blue_flame_geo

export const MODEL_SPARKLES = 0x95
export const MODEL_SMOKE = 0x96        // smoke_geo

export const MODEL_BUBBLE = 0xA8

export const MODEL_BLACK_BOBOMB = 0xBC

export const MODEL_GOOMBA = 0xC0 
export const MODEL_CHECKERBOARD_PLATFORM = 0xCA
export const MODEL_EXPLOSION = 0xCD        // explosion_geo

export const MODEL_1UP                        = 0xD4        // mushroom_1up_geo
export const MODEL_CASTLE_STAR_DOOR_8_STARS   = 0xD5        // castle_geo_000F00
export const MODEL_CASTLE_STAR_DOOR_70_STARS  = 0xD6        // castle_geo_000F00
export const MODEL_RED_COIN                   = 0xD7        // red_coin_geo
export const MODEL_RED_COIN_NO_SHADOW         = 0xD8        // red_coin_no_shadow_geo
export const MODEL_METAL_BOX                  = 0xD9        // metal_box_geo
export const MODEL_METAL_BOX_DL               = 0xDA        // metal_box_dl
export const MODEL_NUMBER                     = 0xDB        // number_geo
export const MODEL_FLYGUY                     = 0xDC        // shyguy_geo
export const MODEL_TOAD                       = 0xDD        // toad_geo
export const MODEL_PEACH                      = 0xDE        // peach_geo
export const MODEL_CHUCKYA                    = 0xDF        // chuckya_geo
export const MODEL_WHITE_PUFF                 = 0xE0        // white_puff_geo
export const MODEL_TRAJECTORY_MARKER_BALL     = 0xE1        // bowling_ball_track_geo - duplicate used in SSL Pyramid small sized and as a track ball