export const ACT_1 = (1 << 0)
export const ACT_2 = (1 << 1)
export const ACT_3 = (1 << 2)
export const ACT_4 = (1 << 3)
export const ACT_5 = (1 << 4)
export const ACT_6 = (1 << 5)

// If an object is set as active for the first 5 acts only, it is treated as always active.
// It's possible that there were only planned to be 5 acts per level early in development.
// Hence, they added a macro so they wouldn't have to change the acts for every object.
export const ALL_ACTS_MACRO = ACT_1 | ACT_2 | ACT_3 | ACT_4 | ACT_5
export const ALL_ACTS       = ACT_1 | ACT_2 | ACT_3 | ACT_4 | ACT_5 | ACT_6

export const COIN_FORMATION_FLAG_VERTICAL  = (1 << 0)
export const COIN_FORMATION_FLAG_RING      = (1 << 1)
export const COIN_FORMATION_FLAG_ARROW     = (1 << 2)
export const COIN_FORMATION_FLAG_FLYING    = (1 << 4)

export const MODEL_NONE                        = 0x00

/* Global models that are loaded for every level */

export const MODEL_MARIO                       = 0x01        // mario_geo
export const MODEL_LUIGI                       = 0x02        // unused

/* Various static level geometry, the geo layout differs but terrain object presets treat them the same.*/

export const MODEL_LEVEL_GEOMETRY_03                = 0x03
export const MODEL_LEVEL_GEOMETRY_04                = 0x04
export const MODEL_LEVEL_GEOMETRY_05                = 0x05
export const MODEL_LEVEL_GEOMETRY_06                = 0x06
export const MODEL_LEVEL_GEOMETRY_07                = 0x07
export const MODEL_LEVEL_GEOMETRY_08                = 0x08
export const MODEL_LEVEL_GEOMETRY_09                = 0x09
export const MODEL_LEVEL_GEOMETRY_0A                = 0x0A
export const MODEL_LEVEL_GEOMETRY_0B                = 0x0B
export const MODEL_LEVEL_GEOMETRY_0C                = 0x0C
export const MODEL_LEVEL_GEOMETRY_0D                = 0x0D
export const MODEL_LEVEL_GEOMETRY_0E                = 0x0E
export const MODEL_LEVEL_GEOMETRY_0F                = 0x0F
export const MODEL_LEVEL_GEOMETRY_10                = 0x10
export const MODEL_LEVEL_GEOMETRY_11                = 0x11
export const MODEL_LEVEL_GEOMETRY_12                = 0x12
export const MODEL_LEVEL_GEOMETRY_13                = 0x13
export const MODEL_LEVEL_GEOMETRY_14                = 0x14
export const MODEL_LEVEL_GEOMETRY_15                = 0x15
export const MODEL_LEVEL_GEOMETRY_16                = 0x16

export const MODEL_BOB_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const MODEL_WDW_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const MODEL_CASTLE_GROUNDS_BUBBLY_TREE       = 0x17        // bubbly_tree_geo
export const MODEL_WF_BUBBLY_TREE                   = 0x17        // bubbly_tree_geo
export const MODEL_THI_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const MODEL_COURTYARD_SPIKY_TREE             = 0x18        // spiky_tree_geo
export const MODEL_CCM_SNOW_TREE                    = 0x19        // snow_tree_geo
export const MODEL_SL_SNOW_TREE                     = 0x19        // snow_tree_geo
export const MODEL_UNKNOWN_TREE_1A                  = 0x1A        // referenced in special presets, undefined
export const MODEL_SSL_PALM_TREE                    = 0x1B        // palm_tree_geo
export const MODEL_CASTLE_CASTLE_DOOR_UNUSED        = 0x1C        // castle_door_geo - unused, original id
export const MODEL_CASTLE_WOODEN_DOOR_UNUSED        = 0x1D        // wooden_door_geo - unused, original id
export const MODEL_BBH_HAUNTED_DOOR                 = 0x1D        // haunted_door_geo
export const MODEL_HMC_WOODEN_DOOR                  = 0x1D        // wooden_door_geo
export const MODEL_UNKNOWN_DOOR_1E                  = 0x1E        // referenced in special presets, undefined
export const MODEL_HMC_METAL_DOOR                   = 0x1F        // metal_door_geo
export const MODEL_HMC_HAZY_MAZE_DOOR               = 0x20        // hazy_maze_door_geo
export const MODEL_UNKNOWN_DOOR_21                  = 0x21        // referenced in special presets, undefined
export const MODEL_CASTLE_DOOR_0_STARS              = 0x22        // castle_door_0_star_geo
export const MODEL_CASTLE_DOOR_1_STAR               = 0x23        // castle_door_1_star_geo
export const MODEL_CASTLE_DOOR_3_STARS              = 0x24        // castle_door_3_stars_geo
export const MODEL_CASTLE_KEY_DOOR                  = 0x25        // key_door_geo
export const MODEL_CASTLE_CASTLE_DOOR               = 0x26        // castle_door_geo - used duplicate
export const MODEL_CASTLE_GROUNDS_CASTLE_DOOR       = 0x26        // castle_door_geo - used duplicate
export const MODEL_CASTLE_WOODEN_DOOR               = 0x27        // wooden_door_geo
export const MODEL_COURTYARD_WOODEN_DOOR            = 0x27        // wooden_door_geo
export const MODEL_CCM_CABIN_DOOR                   = 0x27        // cabin_door_geo
export const MODEL_UNKNOWN_DOOR_28                  = 0x28        // referenced in special presets, undefined
export const MODEL_CASTLE_METAL_DOOR                = 0x29        // metal_door_geo
export const MODEL_CASTLE_GROUNDS_METAL_DOOR        = 0x29        // metal_door_geo
export const MODEL_UNKNOWN_DOOR_2A                  = 0x2A        // referenced in special presets, undefined
export const MODEL_UNKNOWN_DOOR_2B                  = 0x2B        // referenced in special presets, undefined
export const MODEL_WF_TOWER_TRAPEZOID_PLATORM       = 0x2C        // wf_geo_000AF8 - unused
export const MODEL_WF_TOWER_SQUARE_PLATORM          = 0x2D        // wf_geo_000B10
export const MODEL_WF_TOWER_SQUARE_PLATORM_UNUSED   = 0x2E        // wf_geo_000B38 - unused & duplicated
export const MODEL_WF_TOWER_SQUARE_PLATORM_ELEVATOR = 0x2F        // wf_geo_000B60 - elevator platorm

// Level model IDs

// bbh
export const MODEL_BBH_STAIRCASE_STEP               = 0x35        // geo_bbh_0005B0
export const MODEL_BBH_TILTING_FLOOR_PLATFORM       = 0x36        // geo_bbh_0005C8
export const MODEL_BBH_TUMBLING_PLATFORM            = 0x37        // geo_bbh_0005E0
export const MODEL_BBH_TUMBLING_PLATFORM_PART       = 0x38        // geo_bbh_0005F8
export const MODEL_BBH_MOVING_BOOKSHELF             = 0x39        // geo_bbh_000610
export const MODEL_BBH_MESH_ELEVATOR                = 0x3A        // geo_bbh_000628
export const MODEL_BBH_MERRY_GO_ROUND               = 0x3B        // geo_bbh_000640
export const MODEL_BBH_WOODEN_TOMB                  = 0x3C        // geo_bbh_000658

// ccm
export const MODEL_CCM_ROPEWAY_LIFT                 = 0x36        // ccm_geo_0003D0
export const MODEL_CCM_SNOWMAN_HEAD                 = 0x37        // ccm_geo_00040C

// castle
export const MODEL_CASTLE_BOWSER_TRAP               = 0x35        // castle_geo_000F18
export const MODEL_CASTLE_WATER_LEVEL_PILLAR        = 0x36        // castle_geo_001940
export const MODEL_CASTLE_CLOCK_MINUTE_HAND         = 0x37        // castle_geo_001530
export const MODEL_CASTLE_CLOCK_HOUR_HAND           = 0x38        // castle_geo_001548
export const MODEL_CASTLE_CLOCK_PENDULUM            = 0x39        // castle_geo_001518

// hmc
export const MODEL_HMC_METAL_PLATFORM               = 0x36        // hmc_geo_0005A0
export const MODEL_HMC_METAL_ARROW_PLATFORM         = 0x37        // hmc_geo_0005B8
export const MODEL_HMC_ELEVATOR_PLATFORM            = 0x38        // hmc_geo_0005D0
export const MODEL_HMC_ROLLING_ROCK                 = 0x39        // hmc_geo_000548
export const MODEL_HMC_ROCK_PIECE                   = 0x3A        // hmc_geo_000570 - unused
export const MODEL_HMC_ROCK_SMALL_PIECE             = 0x3B        // hmc_geo_000588 - unused
export const MODEL_HMC_RED_GRILLS                   = 0x3C        // hmc_geo_000530

// ssl
export const MODEL_SSL_PYRAMID_TOP                  = 0x3A        // ssl_geo_000618
export const MODEL_SSL_GRINDEL                      = 0x36        // ssl_geo_000734
export const MODEL_SSL_SPINDEL                      = 0x37        // ssl_geo_000764
export const MODEL_SSL_MOVING_PYRAMID_WALL          = 0x38        // ssl_geo_000794
export const MODEL_SSL_PYRAMID_ELEVATOR             = 0x39        // ssl_geo_0007AC

// bob
export const MODEL_BOB_CHAIN_CHOMP_GATE             = 0x36        // bob_geo_000440
export const MODEL_BOB_SEESAW_PLATFORM              = 0x37        // bob_geo_000458
export const MODEL_BOB_BARS_GRILLS                  = 0x38        // bob_geo_000470

// sl
export const MODEL_SL_SNOW_TRIANGLE                 = 0x36        // sl_geo_000390
export const MODEL_SL_CRACKED_ICE                   = 0x37        // sl_geo_000360 - unused
export const MODEL_SL_CRACKED_ICE_CHUNK             = 0x38        // sl_geo_000378 - unused

// wdw
export const MODEL_WDW_SQUARE_FLOATING_PLATFORM        = 0x36        // wdw_geo_000580
export const MODEL_WDW_ARROW_LIFT                      = 0x37        // wdw_geo_000598
export const MODEL_WDW_WATER_LEVEL_DIAMOND             = 0x38        // wdw_geo_0005C0
export const MODEL_WDW_HIDDEN_PLATFORM                 = 0x39        // wdw_geo_0005E8
export const MODEL_WDW_EXPRESS_ELEVATOR                = 0x3A        // wdw_geo_000610
export const MODEL_WDW_RECTANGULAR_FLOATING_PLATFORM   = 0x3B        // wdw_geo_000628
export const MODEL_WDW_ROTATING_PLATFORM               = 0x3C        // wdw_geo_000640

// jrb
export const MODEL_JRB_SHIP_LEFT_HALF_PART             = 0x35        // jrb_geo_000978
export const MODEL_JRB_SHIP_BACK_LEFT_PART             = 0x36        // jrb_geo_0009B0
export const MODEL_JRB_SHIP_RIGHT_HALF_PART            = 0x37        // jrb_geo_0009E8
export const MODEL_JRB_SHIP_BACK_RIGHT_PART            = 0x38        // jrb_geo_000A00
export const MODEL_JRB_SUNKEN_SHIP                     = 0x39        // jrb_geo_000990
export const MODEL_JRB_SUNKEN_SHIP_BACK                = 0x3A        // jrb_geo_0009C8
export const MODEL_JRB_ROCK                            = 0x3B        // jrb_geo_000930
export const MODEL_JRB_SLIDING_BOX                     = 0x3C        // jrb_geo_000960
export const MODEL_JRB_FALLING_PILLAR                  = 0x3D        // jrb_geo_000900
export const MODEL_JRB_FALLING_PILLAR_BASE             = 0x3E        // jrb_geo_000918
export const MODEL_JRB_FLOATING_PLATFORM               = 0x3F        // jrb_geo_000948

// thi
export const MODEL_THI_HUGE_ISLAND_TOP                 = 0x36        // thi_geo_0005B0
export const MODEL_THI_TINY_ISLAND_TOP                 = 0x37        // thi_geo_0005C8

// ttc
export const MODEL_TTC_ROTATING_CUBE                   = 0x36        // ttc_geo_000240
export const MODEL_TTC_ROTATING_PRISM                  = 0x37        // ttc_geo_000258
export const MODEL_TTC_PENDULUM                        = 0x38        // ttc_geo_000270
export const MODEL_TTC_LARGE_TREADMILL                 = 0x39        // ttc_geo_000288
export const MODEL_TTC_SMALL_TREADMILL                 = 0x3A        // ttc_geo_0002A8
export const MODEL_TTC_PUSH_BLOCK                      = 0x3B        // ttc_geo_0002C8
export const MODEL_TTC_ROTATING_HEXAGON                = 0x3C        // ttc_geo_0002E0
export const MODEL_TTC_ROTATING_TRIANGLE               = 0x3D        // ttc_geo_0002F8
export const MODEL_TTC_PIT_BLOCK                       = 0x3E        // ttc_geo_000310 - has 2 vertical stripes
export const MODEL_TTC_PIT_BLOCK_UNUSED                = 0x3F        // ttc_geo_000328 - has 3 vertical stripes, unused
export const MODEL_TTC_ELEVATOR_PLATFORM               = 0x40        // ttc_geo_000340
export const MODEL_TTC_CLOCK_HAND                      = 0x41        // ttc_geo_000358
export const MODEL_TTC_SPINNER                         = 0x42        // ttc_geo_000370
export const MODEL_TTC_SMALL_GEAR                      = 0x43        // ttc_geo_000388
export const MODEL_TTC_LARGE_GEAR                      = 0x44        // ttc_geo_0003A0

// rr
export const MODEL_RR_SLIDING_PLATFORM                 = 0x36        // rr_geo_0008C0
export const MODEL_RR_FLYING_CARPET                    = 0x37        // rr_geo_000848
export const MODEL_RR_OCTAGONAL_PLATFORM               = 0x38        // rr_geo_0008A8
export const MODEL_RR_ROTATING_BRIDGE_PLATFORM         = 0x39        // rr_geo_000878
export const MODEL_RR_TRIANGLE_PLATFORM                = 0x3A        // rr_geo_0008D8 - unused
export const MODEL_RR_CRUISER_WING                     = 0x3B        // rr_geo_000890
export const MODEL_RR_SEESAW_PLATFORM                  = 0x3C        // rr_geo_000908
export const MODEL_RR_L_SHAPED_PLATFORM                = 0x3D        // rr_geo_000940 - unused
export const MODEL_RR_SWINGING_PLATFORM                = 0x3E        // rr_geo_000860
export const MODEL_RR_DONUT_PLATFORM                   = 0x3F        // rr_geo_000920
export const MODEL_RR_ELEVATOR_PLATFORM                = 0x40        // rr_geo_0008F0
export const MODEL_RR_TRICKY_TRIANGLES                 = 0x41        // rr_geo_000958
export const MODEL_RR_TRICKY_TRIANGLES_FRAME1          = 0x42        // rr_geo_000970
export const MODEL_RR_TRICKY_TRIANGLES_FRAME2          = 0x43        // rr_geo_000988
export const MODEL_RR_TRICKY_TRIANGLES_FRAME3          = 0x44        // rr_geo_0009A0
export const MODEL_RR_TRICKY_TRIANGLES_FRAME4          = 0x45        // rr_geo_0009B8

// castle grounds

// bitdw
export const MODEL_BITDW_SQUARE_PLATFORM               = 0x36        // geo_bitdw_000558
export const MODEL_BITDW_SEESAW_PLATFORM               = 0x37        // geo_bitdw_000540
export const MODEL_BITDW_SLIDING_PLATFORM              = 0x38        // geo_bitdw_000528
export const MODEL_BITDW_FERRIS_WHEEL_AXLE             = 0x39        // geo_bitdw_000570
export const MODEL_BITDW_BLUE_PLATFORM                 = 0x3A        // geo_bitdw_000588
export const MODEL_BITDW_STAIRCASE_FRAME4              = 0x3B        // geo_bitdw_0005A0
export const MODEL_BITDW_STAIRCASE_FRAME3              = 0x3C        // geo_bitdw_0005B8
export const MODEL_BITDW_STAIRCASE_FRAME2              = 0x3D        // geo_bitdw_0005D0
export const MODEL_BITDW_STAIRCASE_FRAME1              = 0x3E        // geo_bitdw_0005E8
export const MODEL_BITDW_STAIRCASE                     = 0x3F        // geo_bitdw_000600

// vcutm
export const MODEL_VCUTM_SEESAW_PLATFORM               = 0x36        // vcutm_geo_0001F0
export const MODEL_VCUTM_CHECKERBOARD_PLATFORM_SPAWNER = 0x37        //! @bug this object doesn't have a geo associated with it, yet is placed in vcutm.
                                                              //  This causes a crash when the player quickly looks towards the
                                                              //  checkerboard platforms after spawning but before it is unloaded.

// bitfs
export const MODEL_BITFS_PLATFORM_ON_TRACK             = 0x36        // bitfs_geo_000758
export const MODEL_BITFS_TILTING_SQUARE_PLATFORM       = 0x37        // bitfs_geo_0006C0
export const MODEL_BITFS_SINKING_PLATFORMS             = 0x38        // bitfs_geo_000770
export const MODEL_BITFS_BLUE_POLE                     = 0x39        // bitfs_geo_0006A8
export const MODEL_BITFS_SINKING_CAGE_PLATFORM         = 0x3A        // bitfs_geo_000690
export const MODEL_BITFS_ELEVATOR                      = 0x3B        // bitfs_geo_000678
export const MODEL_BITFS_STRETCHING_PLATFORMS          = 0x3C        // bitfs_geo_000708
export const MODEL_BITFS_SEESAW_PLATFORM               = 0x3D        // bitfs_geo_000788
export const MODEL_BITFS_MOVING_SQUARE_PLATFORM        = 0x3E        // bitfs_geo_000728
export const MODEL_BITFS_SLIDING_PLATFORM              = 0x3F        // bitfs_geo_000740
export const MODEL_BITFS_TUMBLING_PLATFORM_PART        = 0x40        // bitfs_geo_0006D8
export const MODEL_BITFS_TUMBLING_PLATFORM             = 0x41        // bitfs_geo_0006F0

// sa

// bits
export const MODEL_BITS_SLIDING_PLATFORM               = 0x36        // bits_geo_0005E0
export const MODEL_BITS_TWIN_SLIDING_PLATFORMS         = 0x37        // bits_geo_0005F8
export const MODEL_BITS_OCTAGONAL_PLATFORM             = 0x39        // bits_geo_000610
export const MODEL_BITS_BLUE_PLATFORM                  = 0x3C        // bits_geo_000628
export const MODEL_BITS_FERRIS_WHEEL_AXLE              = 0x3D        // bits_geo_000640
export const MODEL_BITS_ARROW_PLATFORM                 = 0x3E        // bits_geo_000658
export const MODEL_BITS_SEESAW_PLATFORM                = 0x3F        // bits_geo_000670
export const MODEL_BITS_TILTING_W_PLATFORM             = 0x40        // bits_geo_000688
export const MODEL_BITS_STAIRCASE                      = 0x41        // bits_geo_0006A0
export const MODEL_BITS_STAIRCASE_FRAME1               = 0x42        // bits_geo_0006B8
export const MODEL_BITS_STAIRCASE_FRAME2               = 0x43        // bits_geo_0006D0
export const MODEL_BITS_STAIRCASE_FRAME3               = 0x44        // bits_geo_0006E8
export const MODEL_BITS_STAIRCASE_FRAME4               = 0x45        // bits_geo_000700
export const MODEL_BITS_WARP_PIPE                      = 0x49        // warp_pipe_geo

// lll
export const MODEL_LLL_DRAWBRIDGE_PART                 = 0x38        // lll_geo_000B20
export const MODEL_LLL_ROTATING_BLOCK_FIRE_BARS        = 0x3A        // lll_geo_000B38
export const MODEL_LLL_ROTATING_HEXAGONAL_RING         = 0x3E        // lll_geo_000BB0
export const MODEL_LLL_SINKING_RECTANGULAR_PLATFORM    = 0x3F        // lll_geo_000BC8
export const MODEL_LLL_SINKING_SQUARE_PLATFORMS        = 0x40        // lll_geo_000BE0
export const MODEL_LLL_TILTING_SQUARE_PLATFORM         = 0x41        // lll_geo_000BF8
export const MODEL_LLL_BOWSER_PIECE_1                  = 0x43        // lll_geo_000C10
export const MODEL_LLL_BOWSER_PIECE_2                  = 0x44        // lll_geo_000C30
export const MODEL_LLL_BOWSER_PIECE_3                  = 0x45        // lll_geo_000C50
export const MODEL_LLL_BOWSER_PIECE_4                  = 0x46        // lll_geo_000C70
export const MODEL_LLL_BOWSER_PIECE_5                  = 0x47        // lll_geo_000C90
export const MODEL_LLL_BOWSER_PIECE_6                  = 0x48        // lll_geo_000CB0
export const MODEL_LLL_BOWSER_PIECE_7                  = 0x49        // lll_geo_000CD0
export const MODEL_LLL_BOWSER_PIECE_8                  = 0x4A        // lll_geo_000CF0
export const MODEL_LLL_BOWSER_PIECE_9                  = 0x4B        // lll_geo_000D10
export const MODEL_LLL_BOWSER_PIECE_10                 = 0x4C        // lll_geo_000D30
export const MODEL_LLL_BOWSER_PIECE_11                 = 0x4D        // lll_geo_000D50
export const MODEL_LLL_BOWSER_PIECE_12                 = 0x4E        // lll_geo_000D70
export const MODEL_LLL_BOWSER_PIECE_13                 = 0x4F        // lll_geo_000D90
export const MODEL_LLL_BOWSER_PIECE_14                 = 0x50        // lll_geo_000DB0
export const MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM  = 0x36        // lll_geo_000B08
export const MODEL_LLL_SINKING_ROCK_BLOCK              = 0x37        // lll_geo_000DD0
export const MODEL_LLL_ROLLING_LOG                     = 0x39        // lll_geo_000DE8
export const MODEL_LLL_WOOD_BRIDGE                     = 0x35        // lll_geo_000B50
export const MODEL_LLL_LARGE_WOOD_BRIDGE               = 0x3B        // lll_geo_000B68
export const MODEL_LLL_FALLING_PLATFORM                = 0x3C        // lll_geo_000B80
export const MODEL_LLL_LARGE_FALLING_PLATFORM          = 0x3D        // lll_geo_000B98
export const MODEL_LLL_VOLCANO_FALLING_TRAP            = 0x53        // lll_geo_000EA8

// ddd
export const MODEL_DDD_BOWSER_SUB_DOOR                 = 0x36        // ddd_geo_000478
export const MODEL_DDD_BOWSER_SUB                      = 0x37        // ddd_geo_0004A0
export const MODEL_DDD_POLE                            = 0x38        // ddd_geo_000450

// wf
export const MODEL_WF_BREAKABLE_WALL_RIGHT             = 0x36        // wf_geo_000B78
export const MODEL_WF_BREAKABLE_WALL_LEFT              = 0x37        // wf_geo_000B90
export const MODEL_WF_KICKABLE_BOARD                   = 0x38        // wf_geo_000BA8
export const MODEL_WF_TOWER_DOOR                       = 0x39        // wf_geo_000BE0
export const MODEL_WF_KICKABLE_BOARD_FELLED            = 0x3A        // wf_geo_000BC8

// ending

// castle grounds
export const MODEL_CASTLE_GROUNDS_VCUTM_GRILL          = 0x36        // castle_grounds_geo_00070C
export const MODEL_CASTLE_GROUNDS_FLAG                 = 0x37        // castle_grounds_geo_000660
export const MODEL_CASTLE_GROUNDS_CANNON_GRILL         = 0x38        // castle_grounds_geo_000724

// pss

// cotmc

// totwc

// bowser 1

// wmotr

// bowser 2
export const MODEL_BOWSER_2_TILTING_ARENA              = 0x36        // bowser_2_geo_000170

// bowser 3
export const MODEL_BOWSER_3_FALLING_PLATFORM_1         = 0x36        // bowser_3_geo_000290
export const MODEL_BOWSER_3_FALLING_PLATFORM_2         = 0x37        // bowser_3_geo_0002A8
export const MODEL_BOWSER_3_FALLING_PLATFORM_3         = 0x38        // bowser_3_geo_0002C0
export const MODEL_BOWSER_3_FALLING_PLATFORM_4         = 0x39        // bowser_3_geo_0002D8
export const MODEL_BOWSER_3_FALLING_PLATFORM_5         = 0x3A        // bowser_3_geo_0002F0
export const MODEL_BOWSER_3_FALLING_PLATFORM_6         = 0x3B        // bowser_3_geo_000308
export const MODEL_BOWSER_3_FALLING_PLATFORM_7         = 0x3C        // bowser_3_geo_000320
export const MODEL_BOWSER_3_FALLING_PLATFORM_8         = 0x3D        // bowser_3_geo_000338
export const MODEL_BOWSER_3_FALLING_PLATFORM_9         = 0x3E        // bowser_3_geo_000350
export const MODEL_BOWSER_3_FALLING_PLATFORM_10        = 0x3F        // bowser_3_geo_000368

// ttm
export const MODEL_TTM_ROLLING_LOG                     = 0x35        // ttm_geo_000730
export const MODEL_TTM_STAR_CAGE                       = 0x36        // ttm_geo_000710
export const MODEL_TTM_BLUE_SMILEY                     = 0x37        // ttm_geo_000D14
export const MODEL_TTM_YELLOW_SMILEY                   = 0x38        // ttm_geo_000D4C
export const MODEL_TTM_STAR_SMILEY                     = 0x39        // ttm_geo_000D84
export const MODEL_TTM_MOON_SMILEY                     = 0x3A        // ttm_geo_000DBC

// actor model IDs

// first set of actor bins (0x54-0x63)
// group 1
export const MODEL_BULLET_BILL                 = 0x54        // bullet_bill_geo
export const MODEL_YELLOW_SPHERE               = 0x55        // yellow_sphere_geo
export const MODEL_HOOT                        = 0x56        // hoot_geo
export const MODEL_YOSHI_EGG                   = 0x57        // yoshi_egg_geo
export const MODEL_THWOMP                      = 0x58        // thwomp_geo
export const MODEL_HEAVE_HO                    = 0x59        // heave_ho_geo

// group 2
export const MODEL_BLARGG                      = 0x54        // blargg_geo
export const MODEL_BULLY                       = 0x56        // bully_geo
export const MODEL_BULLY_BOSS                  = 0x57        // bully_boss_geo

// group 3
export const MODEL_WATER_BOMB                  = 0x54        // water_bomb_geo
export const MODEL_WATER_BOMB_SHADOW           = 0x55        // water_bomb_shadow_geo
export const MODEL_KING_BOBOMB                 = 0x56        // king_bobomb_geo

// group 4
export const MODEL_MANTA_RAY                   = 0x54        // manta_seg5_geo_05008D14
export const MODEL_UNAGI                       = 0x55        // unagi_geo
export const MODEL_SUSHI                       = 0x56        // sushi_geo
export const MODEL_DL_WHIRLPOOL                = 0x57        // whirlpool_seg5_dl_05013CB8
export const MODEL_CLAM_SHELL                  = 0x58        // clam_shell_geo

// group 5
export const MODEL_POKEY_HEAD                  = 0x54        // pokey_head_geo
export const MODEL_POKEY_BODY_PART             = 0x55        // pokey_body_part_geo
export const MODEL_TWEESTER                    = 0x56        // tweester_geo
export const MODEL_KLEPTO                      = 0x57        // klepto_geo
export const MODEL_EYEROK_LEFT_HAND            = 0x58        // eyerok_left_hand_geo
export const MODEL_EYEROK_RIGHT_HAND           = 0x59        // eyerok_right_hand_geo

// group 6
export const MODEL_DL_MONTY_MOLE_HOLE          = 0x54        // monty_mole_hole_seg5_dl_05000840
export const MODEL_MONTY_MOLE                  = 0x55        // monty_mole_geo
export const MODEL_UKIKI                       = 0x56        // ukiki_geo
export const MODEL_FWOOSH                      = 0x57        // fwoosh_geo

// group 7
export const MODEL_SPINDRIFT                   = 0x54        // spindrift_geo
export const MODEL_MR_BLIZZARD_HIDDEN          = 0x55        // mr_blizzard_hidden_geo
export const MODEL_MR_BLIZZARD                 = 0x56        // mr_blizzard_geo
export const MODEL_PENGUIN                     = 0x57        // penguin_geo

// group 8
export const MODEL_CAP_SWITCH_EXCLAMATION      = 0x54        // cap_switch_exclamation_seg5_dl_05002E00
export const MODEL_CAP_SWITCH                  = 0x55        // cap_switch_geo
export const MODEL_CAP_SWITCH_BASE             = 0x56        // cap_switch_base_seg5_dl_05003120

// group 9
export const MODEL_BOO                         = 0x54        // boo_geo
export const MODEL_BETA_BOO_KEY                = 0x55        // small_key_geo
export const MODEL_HAUNTED_CHAIR               = 0x56        // haunted_chair_geo
export const MODEL_MAD_PIANO                   = 0x57        // mad_piano_geo
export const MODEL_BOOKEND_PART                = 0x58        // bookend_part_geo
export const MODEL_BOOKEND                     = 0x59        // bookend_geo
export const MODEL_HAUNTED_CAGE                = 0x5A        // haunted_cage_geo

// group 10
export const MODEL_BIRDS                       = 0x54        // birds_geo
export const MODEL_YOSHI                       = 0x55        // yoshi_geo

// group 11
export const MODEL_ENEMY_LAKITU                = 0x54        // enemy_lakitu_geo
export const MODEL_SPINY_BALL                  = 0x55        // spiny_ball_geo
export const MODEL_SPINY                       = 0x56        // spiny_geo
export const MODEL_WIGGLER_HEAD                = 0x57        // wiggler_head_geo
export const MODEL_WIGGLER_BODY                = 0x58        // wiggler_body_geo
export const MODEL_BUBBA                       = 0x59        // bubba_geo

// referenced in macro presets. Unknown usage.
export const MODEL_UNKNOWN_54                  = 0x54
export const MODEL_UNKNOWN_58                  = 0x58

// second set of actor bins, (0x64-0x73)
// group 12
export const MODEL_BOWSER                      = 0x64        // bowser_geo - 2nd geo loaded is bowser_geo_000424, starts with shadow command
export const MODEL_BOWSER_BOMB_CHILD_OBJ       = 0x65        // bowser_bomb_geo - Spawns as a child object in bowser's behavior command, causing an explosion if it touches a bomb
export const MODEL_BOWSER_SMOKE                = 0x66        // bowser_impact_smoke_geo
export const MODEL_BOWSER_FLAMES               = 0x67        // bowser_flames_geo
export const MODEL_BOWSER_WAVE                 = 0x68        // invisible_bowser_accessory_geo
export const MODEL_BOWSER2                     = 0x69        // bowser2_geo - 2nd geo loaded is bowser_geo_000770, starts with node command, only difference

// group 13
export const MODEL_BUB                         = 0x64        // cheep_cheep_geo
export const MODEL_TREASURE_CHEST_BASE         = 0x65        // treasure_chest_base_geo
export const MODEL_TREASURE_CHEST_LID          = 0x66        // treasure_chest_lid_geo
export const MODEL_CYAN_FISH                   = 0x67        // cyan_fish_geo
export const MODEL_WATER_RING                  = 0x68        // water_ring_geo
export const MODEL_SKEETER                     = 0x69        // skeeter_geo

// group 14
export const MODEL_PIRANHA_PLANT               = 0x64        // piranha_plant_geo
export const MODEL_WHOMP                       = 0x67        // whomp_geo
export const MODEL_KOOPA_WITH_SHELL            = 0x68        // koopa_with_shell_geo
export const MODEL_METALLIC_BALL               = 0x65        // metallic_ball_geo
export const MODEL_CHAIN_CHOMP                 = 0x66        // chain_chomp
export const MODEL_KOOPA_FLAG                  = 0x6A        // koopa_flag_geo
export const MODEL_WOODEN_POST                 = 0x6B        // wooden_post_geo

// group 15
export const MODEL_MIPS                        = 0x64        // mips_geo
export const MODEL_BOO_CASTLE                  = 0x65        // boo_castle_geo
export const MODEL_LAKITU                      = 0x66        // lakitu_geo

// group 16
export const MODEL_CHILL_BULLY                 = 0x64        // chilly_chief_geo
export const MODEL_BIG_CHILL_BULLY             = 0x65        // chilly_chief_big_geo
export const MODEL_MONEYBAG                    = 0x66        // moneybag_geo

// group 17
export const MODEL_SWOOP                       = 0x64        // swoop_geo
export const MODEL_SCUTTLEBUG                  = 0x65        // scuttlebug_geo
export const MODEL_MR_I_IRIS                   = 0x66        // mr_i_iris_geo
export const MODEL_MR_I                        = 0x67        // mr_i_geo
export const MODEL_DORRIE                      = 0x68        // dorrie_geo

// other models
export const MODEL_YELLOW_COIN                 = 0x74        // yellow_coin_geo
export const MODEL_YELLOW_COIN_NO_SHADOW       = 0x75        // yellow_coin_no_shadow_geo
export const MODEL_BLUE_COIN                   = 0x76        // blue_coin_geo
export const MODEL_BLUE_COIN_NO_SHADOW         = 0x77        // blue_coin_no_shadow_geo
export const MODEL_HEART                       = 0x78        // heart_geo
export const MODEL_TRANSPARENT_STAR            = 0x79        // transparent_star_geo
export const MODEL_STAR                        = 0x7A        // star_geo
export const MODEL_TTM_SLIDE_EXIT_PODIUM       = 0x7B        // ttm_geo_000DF4
export const MODEL_WOODEN_SIGNPOST             = 0x7C        // wooden_signpost_geo
export const MODEL_UNKNOWN_7D                  = 0x7D        // referenced in macro presets. Unknown usage
// find me
export const MODEL_CANNON_BARREL               = 0x7F        // cannon_barrel_geo
export const MODEL_CANNON_BASE                 = 0x80        // cannon_base_geo
export const MODEL_BREAKABLE_BOX               = 0x81        // breakable_box_geo
export const MODEL_BREAKABLE_BOX_SMALL         = 0x82        // breakable_box_small_geo
export const MODEL_EXCLAMATION_BOX_OUTLINE     = 0x83        // exclamation_box_outline_geo
export const MODEL_EXCLAMATION_POINT           = 0x84        // exclamation_point_seg8_dl_08025F08
export const MODEL_MARIOS_WINGED_METAL_CAP     = 0x85        // marios_winged_metal_cap_geo
export const MODEL_MARIOS_METAL_CAP            = 0x86        // marios_metal_cap_geo
export const MODEL_MARIOS_WING_CAP             = 0x87        // marios_wing_cap_geo
export const MODEL_MARIOS_CAP                  = 0x88        // marios_cap_geo
export const MODEL_EXCLAMATION_BOX             = 0x89        // exclamation_box_geo
export const MODEL_DIRT_ANIMATION              = 0x8A        // dirt_animation_geo
export const MODEL_CARTOON_STAR                = 0x8B        // cartoon_star_geo
export const MODEL_BLUE_COIN_SWITCH            = 0x8C        // blue_coin_switch_geo
// find me
export const MODEL_MIST                        = 0x8E        // mist_geo
export const MODEL_SPARKLES_ANIMATION          = 0x8F        // sparkles_animation_geo
export const MODEL_RED_FLAME                   = 0x90        // red_flame_geo
export const MODEL_BLUE_FLAME                  = 0x91        // blue_flame_geo
// find me
// find me
export const MODEL_BURN_SMOKE                  = 0x94        // burn_smoke_geo
export const MODEL_SPARKLES                    = 0x95        // sparkles_geo
export const MODEL_SMOKE                       = 0x96        // smoke_geo
// find me
// find me
// find me
// find me
// find me
export const MODEL_BURN_SMOKE_UNUSED           = 0x9C        // burn_smoke_geo - unused & duplicated
// find me
export const MODEL_WHITE_PARTICLE_DL           = 0x9E        // white_particle_dl
export const MODEL_SAND_DUST                   = 0x9F        // sand_seg3_dl_0302BCD0
export const MODEL_WHITE_PARTICLE              = 0xA0        // white_particle_dl
export const MODEL_PEBBLE                      = 0xA1        // pebble_seg3_dl_0301CB00
export const MODEL_LEAVES                      = 0xA2        // leaves_geo
export const MODEL_WAVE_TRAIL                  = 0xA3        // wave_trail_geo
export const MODEL_WHITE_PARTICLE_SMALL        = 0xA4        // white_particle_small_dl
export const MODEL_SMALL_WATER_SPLASH          = 0xA5        // small_water_splash_geo
export const MODEL_IDLE_WATER_WAVE             = 0xA6        // idle_water_wave_geo
export const MODEL_WATER_SPLASH                = 0xA7        // water_splash_geo
export const MODEL_BUBBLE                      = 0xA8        // bubble_geo
// find me
export const MODEL_PURPLE_MARBLE               = 0xAA        // purple_marble_geo
// find me
export const MODEL_UNKNOWN_AC                  = 0xAC        // according to an special preset, it was the original id of the castle floor trap
export const MODEL_WF_SLIDING_PLATFORM         = 0xAD        // wf_geo_000A98
export const MODEL_WF_SMALL_BOMP               = 0xAE        // wf_geo_000A00
export const MODEL_WF_ROTATING_WOODEN_PLATFORM = 0xAF        // wf_geo_000A58
export const MODEL_WF_TUMBLING_BRIDGE_PART     = 0xB0        // wf_geo_000AB0
export const MODEL_WF_LARGE_BOMP               = 0xB1        // wf_geo_000A40
export const MODEL_WF_TUMBLING_BRIDGE          = 0xB2        // wf_geo_000AC8
export const MODEL_BOWSER_BOMB                 = 0xB3        // bowser_bomb_geo
export const MODEL_WATER_MINE                  = 0xB3        // water_mine_geo
export const MODEL_BOWLING_BALL                = 0xB4        // bowling_ball_geo
export const MODEL_TRAMPOLINE                  = 0xB5        // springboard_top_geo (unused)
export const MODEL_TRAMPOLINE_CENTER           = 0xB6        // springboard_spring_geo (unused)
export const MODEL_TRAMPOLINE_BASE             = 0xB7        // springboard_bottom_geo (unused)
export const MODEL_UNKNOWN_B8                  = 0xB8        // referenced in special presets as a static object. Unknown usage
export const MODEL_FISH                        = 0xB9        // fish_geo - fish without shadow, used
export const MODEL_FISH_SHADOW                 = 0xBA        // fish_shadow_geo - fish with shadow, unused
export const MODEL_BUTTERFLY                   = 0xBB        // butterfly_geo
export const MODEL_BLACK_BOBOMB                = 0xBC        // black_bobomb_geo
// find me
export const MODEL_KOOPA_SHELL                 = 0xBE        // koopa_shell_geo
export const MODEL_KOOPA_WITHOUT_SHELL         = 0xBF        // koopa_without_shell_geo
export const MODEL_GOOMBA                      = 0xC0        // goomba_geo
export const MODEL_SEAWEED                     = 0xC1        // seaweed_geo
export const MODEL_AMP                         = 0xC2        // amp_geo
export const MODEL_BOBOMB_BUDDY                = 0xC3        // bobomb_buddy_geo
// find me
// find me
// find me
export const MODEL_SSL_TOX_BOX                 = 0xC7        // ssl_geo_000630
export const MODEL_BOWSER_KEY_CUTSCENE         = 0xC8        // bowser_key_cutscene_geo
export const MODEL_DL_CANNON_LID               = 0xC9        // cannon_closed_seg8_dl_080048E0
export const MODEL_CHECKERBOARD_PLATFORM       = 0xCA        // checkerboard_platform_geo
export const MODEL_RED_FLAME_SHADOW            = 0xCB        // red_flame_shadow_geo
export const MODEL_BOWSER_KEY                  = 0xCC        // bowser_key_geo
export const MODEL_EXPLOSION                   = 0xCD        // explosion_geo
export const MODEL_SNUFIT                      = 0xCE        // snufit_geo
export const MODEL_PURPLE_SWITCH               = 0xCF        // purple_switch_geo
export const MODEL_CASTLE_STAR_DOOR_30_STARS   = 0xD0        // castle_geo_000F00
export const MODEL_CASTLE_STAR_DOOR_50_STARS   = 0xD1        // castle_geo_000F00
export const MODEL_CCM_SNOWMAN_BASE            = 0xD2        // ccm_geo_0003F0
// find me
export const MODEL_1UP                         = 0xD4        // mushroom_1up_geo
export const MODEL_CASTLE_STAR_DOOR_8_STARS    = 0xD5        // castle_geo_000F00
export const MODEL_CASTLE_STAR_DOOR_70_STARS   = 0xD6        // castle_geo_000F00
export const MODEL_RED_COIN                    = 0xD7        // red_coin_geo
export const MODEL_RED_COIN_NO_SHADOW          = 0xD8        // red_coin_no_shadow_geo
export const MODEL_METAL_BOX                   = 0xD9        // metal_box_geo
export const MODEL_METAL_BOX_DL                = 0xDA        // metal_box_dl
export const MODEL_NUMBER                      = 0xDB        // number_geo
export const MODEL_FLYGUY                      = 0xDC        // shyguy_geo
export const MODEL_TOAD                        = 0xDD        // toad_geo
export const MODEL_PEACH                       = 0xDE        // peach_geo
export const MODEL_CHUCKYA                     = 0xDF        // chuckya_geo
export const MODEL_WHITE_PUFF                  = 0xE0        // white_puff_geo
export const MODEL_TRAJECTORY_MARKER_BALL      = 0xE1        // bowling_ball_track_geo - duplicate used in SSL Pyramid small sized and as a track ball

// Menu Models (overwrites Level Geometry IDs)
export const MODEL_MAIN_MENU_MARIO_SAVE_BUTTON         = MODEL_LEVEL_GEOMETRY_03   // main_menu_geo_0001D0
export const MODEL_MAIN_MENU_RED_ERASE_BUTTON          = MODEL_LEVEL_GEOMETRY_04   // main_menu_geo_000290
export const MODEL_MAIN_MENU_BLUE_COPY_BUTTON          = MODEL_LEVEL_GEOMETRY_05   // main_menu_geo_0002B8
export const MODEL_MAIN_MENU_YELLOW_FILE_BUTTON        = MODEL_LEVEL_GEOMETRY_06   // main_menu_geo_0002E0
export const MODEL_MAIN_MENU_GREEN_SCORE_BUTTON        = MODEL_LEVEL_GEOMETRY_07   // main_menu_geo_000308
export const MODEL_MAIN_MENU_MARIO_SAVE_BUTTON_FADE    = MODEL_LEVEL_GEOMETRY_08   // main_menu_geo_000200
export const MODEL_MAIN_MENU_MARIO_NEW_BUTTON          = MODEL_LEVEL_GEOMETRY_09   // main_menu_geo_000230
export const MODEL_MAIN_MENU_MARIO_NEW_BUTTON_FADE     = MODEL_LEVEL_GEOMETRY_0A   // main_menu_geo_000260
export const MODEL_MAIN_MENU_PURPLE_SOUND_BUTTON       = MODEL_LEVEL_GEOMETRY_0B   // main_menu_geo_000330
export const MODEL_MAIN_MENU_GENERIC_BUTTON            = MODEL_LEVEL_GEOMETRY_0C   // main_menu_geo_000358

// level model aliases to level geometry IDs. Possibly a relic from an older level
// format that used to rely on level geometry objects. (seen in WF, LLL, etc)
export const MODEL_LLL_ROTATING_HEXAGONAL_PLATFORM     = MODEL_LEVEL_GEOMETRY_09   // lll_geo_000A78
export const MODEL_WF_GIANT_POLE                       = MODEL_LEVEL_GEOMETRY_0D   // wf_geo_000AE0
export const MODEL_WF_ROTATING_PLATFORM                = MODEL_LEVEL_GEOMETRY_10   // wf_geo_0009B8
export const MODEL_BITDW_WARP_PIPE                     = MODEL_LEVEL_GEOMETRY_12   // warp_pipe_geo
export const MODEL_THI_WARP_PIPE                       = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo
export const MODEL_VCUTM_WARP_PIPE                     = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo
export const MODEL_CASTLE_GROUNDS_WARP_PIPE            = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo


// EXPERIMENTAL, sans prefix:
export const NONE                        = 0x00

/* Global models that are loaded for every level */

export const MARIO                       = 0x01        // mario_geo
export const LUIGI                       = 0x02        // unused

/* Various static level geometry, the geo layout differs but terrain object presets treat them the same.*/

export const LEVEL_GEOMETRY_03                = 0x03
export const LEVEL_GEOMETRY_04                = 0x04
export const LEVEL_GEOMETRY_05                = 0x05
export const LEVEL_GEOMETRY_06                = 0x06
export const LEVEL_GEOMETRY_07                = 0x07
export const LEVEL_GEOMETRY_08                = 0x08
export const LEVEL_GEOMETRY_09                = 0x09
export const LEVEL_GEOMETRY_0A                = 0x0A
export const LEVEL_GEOMETRY_0B                = 0x0B
export const LEVEL_GEOMETRY_0C                = 0x0C
export const LEVEL_GEOMETRY_0D                = 0x0D
export const LEVEL_GEOMETRY_0E                = 0x0E
export const LEVEL_GEOMETRY_0F                = 0x0F
export const LEVEL_GEOMETRY_10                = 0x10
export const LEVEL_GEOMETRY_11                = 0x11
export const LEVEL_GEOMETRY_12                = 0x12
export const LEVEL_GEOMETRY_13                = 0x13
export const LEVEL_GEOMETRY_14                = 0x14
export const LEVEL_GEOMETRY_15                = 0x15
export const LEVEL_GEOMETRY_16                = 0x16

export const BOB_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const WDW_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const CASTLE_GROUNDS_BUBBLY_TREE       = 0x17        // bubbly_tree_geo
export const WF_BUBBLY_TREE                   = 0x17        // bubbly_tree_geo
export const THI_BUBBLY_TREE                  = 0x17        // bubbly_tree_geo
export const COURTYARD_SPIKY_TREE             = 0x18        // spiky_tree_geo
export const CCM_SNOW_TREE                    = 0x19        // snow_tree_geo
export const SL_SNOW_TREE                     = 0x19        // snow_tree_geo
export const UNKNOWN_TREE_1A                  = 0x1A        // referenced in special presets, undefined
export const SSL_PALM_TREE                    = 0x1B        // palm_tree_geo
export const CASTLE_CASTLE_DOOR_UNUSED        = 0x1C        // castle_door_geo - unused, original id
export const CASTLE_WOODEN_DOOR_UNUSED        = 0x1D        // wooden_door_geo - unused, original id
export const BBH_HAUNTED_DOOR                 = 0x1D        // haunted_door_geo
export const HMC_WOODEN_DOOR                  = 0x1D        // wooden_door_geo
export const UNKNOWN_DOOR_1E                  = 0x1E        // referenced in special presets, undefined
export const HMC_METAL_DOOR                   = 0x1F        // metal_door_geo
export const HMC_HAZY_MAZE_DOOR               = 0x20        // hazy_maze_door_geo
export const UNKNOWN_DOOR_21                  = 0x21        // referenced in special presets, undefined
export const CASTLE_DOOR_0_STARS              = 0x22        // castle_door_0_star_geo
export const CASTLE_DOOR_1_STAR               = 0x23        // castle_door_1_star_geo
export const CASTLE_DOOR_3_STARS              = 0x24        // castle_door_3_stars_geo
export const CASTLE_KEY_DOOR                  = 0x25        // key_door_geo
export const CASTLE_CASTLE_DOOR               = 0x26        // castle_door_geo - used duplicate
export const CASTLE_GROUNDS_CASTLE_DOOR       = 0x26        // castle_door_geo - used duplicate
export const CASTLE_WOODEN_DOOR               = 0x27        // wooden_door_geo
export const COURTYARD_WOODEN_DOOR            = 0x27        // wooden_door_geo
export const CCM_CABIN_DOOR                   = 0x27        // cabin_door_geo
export const UNKNOWN_DOOR_28                  = 0x28        // referenced in special presets, undefined
export const CASTLE_METAL_DOOR                = 0x29        // metal_door_geo
export const CASTLE_GROUNDS_METAL_DOOR        = 0x29        // metal_door_geo
export const UNKNOWN_DOOR_2A                  = 0x2A        // referenced in special presets, undefined
export const UNKNOWN_DOOR_2B                  = 0x2B        // referenced in special presets, undefined
export const WF_TOWER_TRAPEZOID_PLATORM       = 0x2C        // wf_geo_000AF8 - unused
export const WF_TOWER_SQUARE_PLATORM          = 0x2D        // wf_geo_000B10
export const WF_TOWER_SQUARE_PLATORM_UNUSED   = 0x2E        // wf_geo_000B38 - unused & duplicated
export const WF_TOWER_SQUARE_PLATORM_ELEVATOR = 0x2F        // wf_geo_000B60 - elevator platorm

// Level model IDs

// bbh
export const BBH_STAIRCASE_STEP               = 0x35        // geo_bbh_0005B0
export const BBH_TILTING_FLOOR_PLATFORM       = 0x36        // geo_bbh_0005C8
export const BBH_TUMBLING_PLATFORM            = 0x37        // geo_bbh_0005E0
export const BBH_TUMBLING_PLATFORM_PART       = 0x38        // geo_bbh_0005F8
export const BBH_MOVING_BOOKSHELF             = 0x39        // geo_bbh_000610
export const BBH_MESH_ELEVATOR                = 0x3A        // geo_bbh_000628
export const BBH_MERRY_GO_ROUND               = 0x3B        // geo_bbh_000640
export const BBH_WOODEN_TOMB                  = 0x3C        // geo_bbh_000658

// ccm
export const CCM_ROPEWAY_LIFT                 = 0x36        // ccm_geo_0003D0
export const CCM_SNOWMAN_HEAD                 = 0x37        // ccm_geo_00040C

// castle
export const CASTLE_BOWSER_TRAP               = 0x35        // castle_geo_000F18
export const CASTLE_WATER_LEVEL_PILLAR        = 0x36        // castle_geo_001940
export const CASTLE_CLOCK_MINUTE_HAND         = 0x37        // castle_geo_001530
export const CASTLE_CLOCK_HOUR_HAND           = 0x38        // castle_geo_001548
export const CASTLE_CLOCK_PENDULUM            = 0x39        // castle_geo_001518

// hmc
export const HMC_METAL_PLATFORM               = 0x36        // hmc_geo_0005A0
export const HMC_METAL_ARROW_PLATFORM         = 0x37        // hmc_geo_0005B8
export const HMC_ELEVATOR_PLATFORM            = 0x38        // hmc_geo_0005D0
export const HMC_ROLLING_ROCK                 = 0x39        // hmc_geo_000548
export const HMC_ROCK_PIECE                   = 0x3A        // hmc_geo_000570 - unused
export const HMC_ROCK_SMALL_PIECE             = 0x3B        // hmc_geo_000588 - unused
export const HMC_RED_GRILLS                   = 0x3C        // hmc_geo_000530

// ssl
export const SSL_PYRAMID_TOP                  = 0x3A        // ssl_geo_000618
export const SSL_GRINDEL                      = 0x36        // ssl_geo_000734
export const SSL_SPINDEL                      = 0x37        // ssl_geo_000764
export const SSL_MOVING_PYRAMID_WALL          = 0x38        // ssl_geo_000794
export const SSL_PYRAMID_ELEVATOR             = 0x39        // ssl_geo_0007AC

// bob
export const BOB_CHAIN_CHOMP_GATE             = 0x36        // bob_geo_000440
export const BOB_SEESAW_PLATFORM              = 0x37        // bob_geo_000458
export const BOB_BARS_GRILLS                  = 0x38        // bob_geo_000470

// sl
export const SL_SNOW_TRIANGLE                 = 0x36        // sl_geo_000390
export const SL_CRACKED_ICE                   = 0x37        // sl_geo_000360 - unused
export const SL_CRACKED_ICE_CHUNK             = 0x38        // sl_geo_000378 - unused

// wdw
export const WDW_SQUARE_FLOATING_PLATFORM        = 0x36        // wdw_geo_000580
export const WDW_ARROW_LIFT                      = 0x37        // wdw_geo_000598
export const WDW_WATER_LEVEL_DIAMOND             = 0x38        // wdw_geo_0005C0
export const WDW_HIDDEN_PLATFORM                 = 0x39        // wdw_geo_0005E8
export const WDW_EXPRESS_ELEVATOR                = 0x3A        // wdw_geo_000610
export const WDW_RECTANGULAR_FLOATING_PLATFORM   = 0x3B        // wdw_geo_000628
export const WDW_ROTATING_PLATFORM               = 0x3C        // wdw_geo_000640

// jrb
export const JRB_SHIP_LEFT_HALF_PART             = 0x35        // jrb_geo_000978
export const JRB_SHIP_BACK_LEFT_PART             = 0x36        // jrb_geo_0009B0
export const JRB_SHIP_RIGHT_HALF_PART            = 0x37        // jrb_geo_0009E8
export const JRB_SHIP_BACK_RIGHT_PART            = 0x38        // jrb_geo_000A00
export const JRB_SUNKEN_SHIP                     = 0x39        // jrb_geo_000990
export const JRB_SUNKEN_SHIP_BACK                = 0x3A        // jrb_geo_0009C8
export const JRB_ROCK                            = 0x3B        // jrb_geo_000930
export const JRB_SLIDING_BOX                     = 0x3C        // jrb_geo_000960
export const JRB_FALLING_PILLAR                  = 0x3D        // jrb_geo_000900
export const JRB_FALLING_PILLAR_BASE             = 0x3E        // jrb_geo_000918
export const JRB_FLOATING_PLATFORM               = 0x3F        // jrb_geo_000948

// thi
export const THI_HUGE_ISLAND_TOP                 = 0x36        // thi_geo_0005B0
export const THI_TINY_ISLAND_TOP                 = 0x37        // thi_geo_0005C8

// ttc
export const TTC_ROTATING_CUBE                   = 0x36        // ttc_geo_000240
export const TTC_ROTATING_PRISM                  = 0x37        // ttc_geo_000258
export const TTC_PENDULUM                        = 0x38        // ttc_geo_000270
export const TTC_LARGE_TREADMILL                 = 0x39        // ttc_geo_000288
export const TTC_SMALL_TREADMILL                 = 0x3A        // ttc_geo_0002A8
export const TTC_PUSH_BLOCK                      = 0x3B        // ttc_geo_0002C8
export const TTC_ROTATING_HEXAGON                = 0x3C        // ttc_geo_0002E0
export const TTC_ROTATING_TRIANGLE               = 0x3D        // ttc_geo_0002F8
export const TTC_PIT_BLOCK                       = 0x3E        // ttc_geo_000310 - has 2 vertical stripes
export const TTC_PIT_BLOCK_UNUSED                = 0x3F        // ttc_geo_000328 - has 3 vertical stripes, unused
export const TTC_ELEVATOR_PLATFORM               = 0x40        // ttc_geo_000340
export const TTC_CLOCK_HAND                      = 0x41        // ttc_geo_000358
export const TTC_SPINNER                         = 0x42        // ttc_geo_000370
export const TTC_SMALL_GEAR                      = 0x43        // ttc_geo_000388
export const TTC_LARGE_GEAR                      = 0x44        // ttc_geo_0003A0

// rr
export const RR_SLIDING_PLATFORM                 = 0x36        // rr_geo_0008C0
export const RR_FLYING_CARPET                    = 0x37        // rr_geo_000848
export const RR_OCTAGONAL_PLATFORM               = 0x38        // rr_geo_0008A8
export const RR_ROTATING_BRIDGE_PLATFORM         = 0x39        // rr_geo_000878
export const RR_TRIANGLE_PLATFORM                = 0x3A        // rr_geo_0008D8 - unused
export const RR_CRUISER_WING                     = 0x3B        // rr_geo_000890
export const RR_SEESAW_PLATFORM                  = 0x3C        // rr_geo_000908
export const RR_L_SHAPED_PLATFORM                = 0x3D        // rr_geo_000940 - unused
export const RR_SWINGING_PLATFORM                = 0x3E        // rr_geo_000860
export const RR_DONUT_PLATFORM                   = 0x3F        // rr_geo_000920
export const RR_ELEVATOR_PLATFORM                = 0x40        // rr_geo_0008F0
export const RR_TRICKY_TRIANGLES                 = 0x41        // rr_geo_000958
export const RR_TRICKY_TRIANGLES_FRAME1          = 0x42        // rr_geo_000970
export const RR_TRICKY_TRIANGLES_FRAME2          = 0x43        // rr_geo_000988
export const RR_TRICKY_TRIANGLES_FRAME3          = 0x44        // rr_geo_0009A0
export const RR_TRICKY_TRIANGLES_FRAME4          = 0x45        // rr_geo_0009B8

// castle grounds

// bitdw
export const BITDW_SQUARE_PLATFORM               = 0x36        // geo_bitdw_000558
export const BITDW_SEESAW_PLATFORM               = 0x37        // geo_bitdw_000540
export const BITDW_SLIDING_PLATFORM              = 0x38        // geo_bitdw_000528
export const BITDW_FERRIS_WHEEL_AXLE             = 0x39        // geo_bitdw_000570
export const BITDW_BLUE_PLATFORM                 = 0x3A        // geo_bitdw_000588
export const BITDW_STAIRCASE_FRAME4              = 0x3B        // geo_bitdw_0005A0
export const BITDW_STAIRCASE_FRAME3              = 0x3C        // geo_bitdw_0005B8
export const BITDW_STAIRCASE_FRAME2              = 0x3D        // geo_bitdw_0005D0
export const BITDW_STAIRCASE_FRAME1              = 0x3E        // geo_bitdw_0005E8
export const BITDW_STAIRCASE                     = 0x3F        // geo_bitdw_000600

// vcutm
export const VCUTM_SEESAW_PLATFORM               = 0x36        // vcutm_geo_0001F0
export const VCUTM_CHECKERBOARD_PLATFORM_SPAWNER = 0x37        //! @bug this object doesn't have a geo associated with it, yet is placed in vcutm.
                                                              //  This causes a crash when the player quickly looks towards the
                                                              //  checkerboard platforms after spawning but before it is unloaded.

// bitfs
export const BITFS_PLATFORM_ON_TRACK             = 0x36        // bitfs_geo_000758
export const BITFS_TILTING_SQUARE_PLATFORM       = 0x37        // bitfs_geo_0006C0
export const BITFS_SINKING_PLATFORMS             = 0x38        // bitfs_geo_000770
export const BITFS_BLUE_POLE                     = 0x39        // bitfs_geo_0006A8
export const BITFS_SINKING_CAGE_PLATFORM         = 0x3A        // bitfs_geo_000690
export const BITFS_ELEVATOR                      = 0x3B        // bitfs_geo_000678
export const BITFS_STRETCHING_PLATFORMS          = 0x3C        // bitfs_geo_000708
export const BITFS_SEESAW_PLATFORM               = 0x3D        // bitfs_geo_000788
export const BITFS_MOVING_SQUARE_PLATFORM        = 0x3E        // bitfs_geo_000728
export const BITFS_SLIDING_PLATFORM              = 0x3F        // bitfs_geo_000740
export const BITFS_TUMBLING_PLATFORM_PART        = 0x40        // bitfs_geo_0006D8
export const BITFS_TUMBLING_PLATFORM             = 0x41        // bitfs_geo_0006F0

// sa

// bits
export const BITS_SLIDING_PLATFORM               = 0x36        // bits_geo_0005E0
export const BITS_TWIN_SLIDING_PLATFORMS         = 0x37        // bits_geo_0005F8
export const BITS_OCTAGONAL_PLATFORM             = 0x39        // bits_geo_000610
export const BITS_BLUE_PLATFORM                  = 0x3C        // bits_geo_000628
export const BITS_FERRIS_WHEEL_AXLE              = 0x3D        // bits_geo_000640
export const BITS_ARROW_PLATFORM                 = 0x3E        // bits_geo_000658
export const BITS_SEESAW_PLATFORM                = 0x3F        // bits_geo_000670
export const BITS_TILTING_W_PLATFORM             = 0x40        // bits_geo_000688
export const BITS_STAIRCASE                      = 0x41        // bits_geo_0006A0
export const BITS_STAIRCASE_FRAME1               = 0x42        // bits_geo_0006B8
export const BITS_STAIRCASE_FRAME2               = 0x43        // bits_geo_0006D0
export const BITS_STAIRCASE_FRAME3               = 0x44        // bits_geo_0006E8
export const BITS_STAIRCASE_FRAME4               = 0x45        // bits_geo_000700
export const BITS_WARP_PIPE                      = 0x49        // warp_pipe_geo

// lll
export const LLL_DRAWBRIDGE_PART                 = 0x38        // lll_geo_000B20
export const LLL_ROTATING_BLOCK_FIRE_BARS        = 0x3A        // lll_geo_000B38
export const LLL_ROTATING_HEXAGONAL_RING         = 0x3E        // lll_geo_000BB0
export const LLL_SINKING_RECTANGULAR_PLATFORM    = 0x3F        // lll_geo_000BC8
export const LLL_SINKING_SQUARE_PLATFORMS        = 0x40        // lll_geo_000BE0
export const LLL_TILTING_SQUARE_PLATFORM         = 0x41        // lll_geo_000BF8
export const LLL_BOWSER_PIECE_1                  = 0x43        // lll_geo_000C10
export const LLL_BOWSER_PIECE_2                  = 0x44        // lll_geo_000C30
export const LLL_BOWSER_PIECE_3                  = 0x45        // lll_geo_000C50
export const LLL_BOWSER_PIECE_4                  = 0x46        // lll_geo_000C70
export const LLL_BOWSER_PIECE_5                  = 0x47        // lll_geo_000C90
export const LLL_BOWSER_PIECE_6                  = 0x48        // lll_geo_000CB0
export const LLL_BOWSER_PIECE_7                  = 0x49        // lll_geo_000CD0
export const LLL_BOWSER_PIECE_8                  = 0x4A        // lll_geo_000CF0
export const LLL_BOWSER_PIECE_9                  = 0x4B        // lll_geo_000D10
export const LLL_BOWSER_PIECE_10                 = 0x4C        // lll_geo_000D30
export const LLL_BOWSER_PIECE_11                 = 0x4D        // lll_geo_000D50
export const LLL_BOWSER_PIECE_12                 = 0x4E        // lll_geo_000D70
export const LLL_BOWSER_PIECE_13                 = 0x4F        // lll_geo_000D90
export const LLL_BOWSER_PIECE_14                 = 0x50        // lll_geo_000DB0
export const LLL_MOVING_OCTAGONAL_MESH_PLATFORM  = 0x36        // lll_geo_000B08
export const LLL_SINKING_ROCK_BLOCK              = 0x37        // lll_geo_000DD0
export const LLL_ROLLING_LOG                     = 0x39        // lll_geo_000DE8
export const LLL_WOOD_BRIDGE                     = 0x35        // lll_geo_000B50
export const LLL_LARGE_WOOD_BRIDGE               = 0x3B        // lll_geo_000B68
export const LLL_FALLING_PLATFORM                = 0x3C        // lll_geo_000B80
export const LLL_LARGE_FALLING_PLATFORM          = 0x3D        // lll_geo_000B98
export const LLL_VOLCANO_FALLING_TRAP            = 0x53        // lll_geo_000EA8

// ddd
export const DDD_BOWSER_SUB_DOOR                 = 0x36        // ddd_geo_000478
export const DDD_BOWSER_SUB                      = 0x37        // ddd_geo_0004A0
export const DDD_POLE                            = 0x38        // ddd_geo_000450

// wf
export const WF_BREAKABLE_WALL_RIGHT             = 0x36        // wf_geo_000B78
export const WF_BREAKABLE_WALL_LEFT              = 0x37        // wf_geo_000B90
export const WF_KICKABLE_BOARD                   = 0x38        // wf_geo_000BA8
export const WF_TOWER_DOOR                       = 0x39        // wf_geo_000BE0
export const WF_KICKABLE_BOARD_FELLED            = 0x3A        // wf_geo_000BC8

// ending

// castle grounds
export const CASTLE_GROUNDS_VCUTM_GRILL          = 0x36        // castle_grounds_geo_00070C
export const CASTLE_GROUNDS_FLAG                 = 0x37        // castle_grounds_geo_000660
export const CASTLE_GROUNDS_CANNON_GRILL         = 0x38        // castle_grounds_geo_000724

// pss

// cotmc

// totwc

// bowser 1

// wmotr

// bowser 2
export const BOWSER_2_TILTING_ARENA              = 0x36        // bowser_2_geo_000170

// bowser 3
export const BOWSER_3_FALLING_PLATFORM_1         = 0x36        // bowser_3_geo_000290
export const BOWSER_3_FALLING_PLATFORM_2         = 0x37        // bowser_3_geo_0002A8
export const BOWSER_3_FALLING_PLATFORM_3         = 0x38        // bowser_3_geo_0002C0
export const BOWSER_3_FALLING_PLATFORM_4         = 0x39        // bowser_3_geo_0002D8
export const BOWSER_3_FALLING_PLATFORM_5         = 0x3A        // bowser_3_geo_0002F0
export const BOWSER_3_FALLING_PLATFORM_6         = 0x3B        // bowser_3_geo_000308
export const BOWSER_3_FALLING_PLATFORM_7         = 0x3C        // bowser_3_geo_000320
export const BOWSER_3_FALLING_PLATFORM_8         = 0x3D        // bowser_3_geo_000338
export const BOWSER_3_FALLING_PLATFORM_9         = 0x3E        // bowser_3_geo_000350
export const BOWSER_3_FALLING_PLATFORM_10        = 0x3F        // bowser_3_geo_000368

// ttm
export const TTM_ROLLING_LOG                     = 0x35        // ttm_geo_000730
export const TTM_STAR_CAGE                       = 0x36        // ttm_geo_000710
export const TTM_BLUE_SMILEY                     = 0x37        // ttm_geo_000D14
export const TTM_YELLOW_SMILEY                   = 0x38        // ttm_geo_000D4C
export const TTM_STAR_SMILEY                     = 0x39        // ttm_geo_000D84
export const TTM_MOON_SMILEY                     = 0x3A        // ttm_geo_000DBC

// actor model IDs

// first set of actor bins (0x54-0x63)
// group 1
export const BULLET_BILL                 = 0x54        // bullet_bill_geo
export const YELLOW_SPHERE               = 0x55        // yellow_sphere_geo
export const HOOT                        = 0x56        // hoot_geo
export const YOSHI_EGG                   = 0x57        // yoshi_egg_geo
export const THWOMP                      = 0x58        // thwomp_geo
export const HEAVE_HO                    = 0x59        // heave_ho_geo

// group 2
export const BLARGG                      = 0x54        // blargg_geo
export const BULLY                       = 0x56        // bully_geo
export const BULLY_BOSS                  = 0x57        // bully_boss_geo

// group 3
export const WATER_BOMB                  = 0x54        // water_bomb_geo
export const WATER_BOMB_SHADOW           = 0x55        // water_bomb_shadow_geo
export const KING_BOBOMB                 = 0x56        // king_bobomb_geo

// group 4
export const MANTA_RAY                   = 0x54        // manta_seg5_geo_05008D14
export const UNAGI                       = 0x55        // unagi_geo
export const SUSHI                       = 0x56        // sushi_geo
export const DL_WHIRLPOOL                = 0x57        // whirlpool_seg5_dl_05013CB8
export const CLAM_SHELL                  = 0x58        // clam_shell_geo

// group 5
export const POKEY_HEAD                  = 0x54        // pokey_head_geo
export const POKEY_BODY_PART             = 0x55        // pokey_body_part_geo
export const TWEESTER                    = 0x56        // tweester_geo
export const KLEPTO                      = 0x57        // klepto_geo
export const EYEROK_LEFT_HAND            = 0x58        // eyerok_left_hand_geo
export const EYEROK_RIGHT_HAND           = 0x59        // eyerok_right_hand_geo

// group 6
export const DL_MONTY_MOLE_HOLE          = 0x54        // monty_mole_hole_seg5_dl_05000840
export const MONTY_MOLE                  = 0x55        // monty_mole_geo
export const UKIKI                       = 0x56        // ukiki_geo
export const FWOOSH                      = 0x57        // fwoosh_geo

// group 7
export const SPINDRIFT                   = 0x54        // spindrift_geo
export const MR_BLIZZARD_HIDDEN          = 0x55        // mr_blizzard_hidden_geo
export const MR_BLIZZARD                 = 0x56        // mr_blizzard_geo
export const PENGUIN                     = 0x57        // penguin_geo

// group 8
export const CAP_SWITCH_EXCLAMATION      = 0x54        // cap_switch_exclamation_seg5_dl_05002E00
export const CAP_SWITCH                  = 0x55        // cap_switch_geo
export const CAP_SWITCH_BASE             = 0x56        // cap_switch_base_seg5_dl_05003120

// group 9
export const BOO                         = 0x54        // boo_geo
export const BETA_BOO_KEY                = 0x55        // small_key_geo
export const HAUNTED_CHAIR               = 0x56        // haunted_chair_geo
export const MAD_PIANO                   = 0x57        // mad_piano_geo
export const BOOKEND_PART                = 0x58        // bookend_part_geo
export const BOOKEND                     = 0x59        // bookend_geo
export const HAUNTED_CAGE                = 0x5A        // haunted_cage_geo

// group 10
export const BIRDS                       = 0x54        // birds_geo
export const YOSHI                       = 0x55        // yoshi_geo

// group 11
export const ENEMY_LAKITU                = 0x54        // enemy_lakitu_geo
export const SPINY_BALL                  = 0x55        // spiny_ball_geo
export const SPINY                       = 0x56        // spiny_geo
export const WIGGLER_HEAD                = 0x57        // wiggler_head_geo
export const WIGGLER_BODY                = 0x58        // wiggler_body_geo
export const BUBBA                       = 0x59        // bubba_geo

// referenced in macro presets. Unknown usage.
export const UNKNOWN_54                  = 0x54
export const UNKNOWN_58                  = 0x58

// second set of actor bins, (0x64-0x73)
// group 12
export const BOWSER                      = 0x64        // bowser_geo - 2nd geo loaded is bowser_geo_000424, starts with shadow command
export const BOWSER_BOMB_CHILD_OBJ       = 0x65        // bowser_bomb_geo - Spawns as a chill object in bowser's behavior command, causing an explosion if it touches a bomb
export const BOWSER_SMOKE                = 0x66        // bowser_impact_smoke_geo
export const BOWSER_FLAMES               = 0x67        // bowser_flames_geo
export const BOWSER_WAVE                 = 0x68        // invisible_bowser_accessory_geo
export const BOWSER2                     = 0x69        // bowser2_geo - 2nd geo loaded is bowser_geo_000770, starts with node command, only difference

// group 13
export const BUB                         = 0x64        // cheep_cheep_geo
export const TREASURE_CHEST_BASE         = 0x65        // treasure_chest_base_geo
export const TREASURE_CHEST_LID          = 0x66        // treasure_chest_lid_geo
export const CYAN_FISH                   = 0x67        // cyan_fish_geo
export const WATER_RING                  = 0x68        // water_ring_geo
export const SKEETER                     = 0x69        // skeeter_geo

// group 14
export const PIRANHA_PLANT               = 0x64        // piranha_plant_geo
export const WHOMP                       = 0x67        // whomp_geo
export const KOOPA_WITH_SHELL            = 0x68        // koopa_with_shell_geo
export const METALLIC_BALL               = 0x65        // metallic_ball_geo
export const CHAIN_CHOMP                 = 0x66        // chain_chomp
export const KOOPA_FLAG                  = 0x6A        // koopa_flag_geo
export const WOODEN_POST                 = 0x6B        // wooden_post_geo

// group 15
export const MIPS                        = 0x64        // mips_geo
export const BOO_CASTLE                  = 0x65        // boo_castle_geo
export const LAKITU                      = 0x66        // lakitu_geo

// group 16
export const CHILL_BULLY                 = 0x64        // chilly_chief_geo
export const BIG_CHILL_BULLY             = 0x65        // chilly_chief_big_geo
export const MONEYBAG                    = 0x66        // moneybag_geo

// group 17
export const SWOOP                       = 0x64        // swoop_geo
export const SCUTTLEBUG                  = 0x65        // scuttlebug_geo
export const MR_I_IRIS                   = 0x66        // mr_i_iris_geo
export const MR_I                        = 0x67        // mr_i_geo
export const DORRIE                      = 0x68        // dorrie_geo

// other models
export const YELLOW_COIN                 = 0x74        // yellow_coin_geo
export const YELLOW_COIN_NO_SHADOW       = 0x75        // yellow_coin_no_shadow_geo
export const BLUE_COIN                   = 0x76        // blue_coin_geo
export const BLUE_COIN_NO_SHADOW         = 0x77        // blue_coin_no_shadow_geo
export const HEART                       = 0x78        // heart_geo
export const TRANSPARENT_STAR            = 0x79        // transparent_star_geo
export const STAR                        = 0x7A        // star_geo
export const TTM_SLIDE_EXIT_PODIUM       = 0x7B        // ttm_geo_000DF4
export const WOODEN_SIGNPOST             = 0x7C        // wooden_signpost_geo
export const UNKNOWN_7D                  = 0x7D        // referenced in macro presets. Unknown usage
// find me
export const CANNON_BARREL               = 0x7F        // cannon_barrel_geo
export const CANNON_BASE                 = 0x80        // cannon_base_geo
export const BREAKABLE_BOX               = 0x81        // breakable_box_geo
export const BREAKABLE_BOX_SMALL         = 0x82        // breakable_box_small_geo
export const EXCLAMATION_BOX_OUTLINE     = 0x83        // exclamation_box_outline_geo
export const EXCLAMATION_POINT           = 0x84        // exclamation_point_seg8_dl_08025F08
export const MARIOS_WINGED_METAL_CAP     = 0x85        // marios_winged_metal_cap_geo
export const MARIOS_METAL_CAP            = 0x86        // marios_metal_cap_geo
export const MARIOS_WING_CAP             = 0x87        // marios_wing_cap_geo
export const MARIOS_CAP                  = 0x88        // marios_cap_geo
export const EXCLAMATION_BOX             = 0x89        // exclamation_box_geo
export const DIRT_ANIMATION              = 0x8A        // dirt_animation_geo
export const CARTOON_STAR                = 0x8B        // cartoon_star_geo
export const BLUE_COIN_SWITCH            = 0x8C        // blue_coin_switch_geo
// find me
export const MIST                        = 0x8E        // mist_geo
export const SPARKLES_ANIMATION          = 0x8F        // sparkles_animation_geo
export const RED_FLAME                   = 0x90        // red_flame_geo
export const BLUE_FLAME                  = 0x91        // blue_flame_geo
// find me
// find me
export const BURN_SMOKE                  = 0x94        // burn_smoke_geo
export const SPARKLES                    = 0x95        // sparkles_geo
export const SMOKE                       = 0x96        // smoke_geo
// find me
// find me
// find me
// find me
// find me
export const BURN_SMOKE_UNUSED           = 0x9C        // burn_smoke_geo - unused & duplicated
// find me
export const WHITE_PARTICLE_DL           = 0x9E        // white_particle_dl
export const SAND_DUST                   = 0x9F        // sand_seg3_dl_0302BCD0
export const WHITE_PARTICLE              = 0xA0        // white_particle_dl
export const PEBBLE                      = 0xA1        // pebble_seg3_dl_0301CB00
export const LEAVES                      = 0xA2        // leaves_geo
export const WAVE_TRAIL                  = 0xA3        // wave_trail_geo
export const WHITE_PARTICLE_SMALL        = 0xA4        // white_particle_small_dl
export const SMALL_WATER_SPLASH          = 0xA5        // small_water_splash_geo
export const IDLE_WATER_WAVE             = 0xA6        // idle_water_wave_geo
export const WATER_SPLASH                = 0xA7        // water_splash_geo
export const BUBBLE                      = 0xA8        // bubble_geo
// find me
export const PURPLE_MARBLE               = 0xAA        // purple_marble_geo
// find me
export const UNKNOWN_AC                  = 0xAC        // according to an special preset, it was the original id of the castle floor trap
export const WF_SLIDING_PLATFORM         = 0xAD        // wf_geo_000A98
export const WF_SMALL_BOMP               = 0xAE        // wf_geo_000A00
export const WF_ROTATING_WOODEN_PLATFORM = 0xAF        // wf_geo_000A58
export const WF_TUMBLING_BRIDGE_PART     = 0xB0        // wf_geo_000AB0
export const WF_LARGE_BOMP               = 0xB1        // wf_geo_000A40
export const WF_TUMBLING_BRIDGE          = 0xB2        // wf_geo_000AC8
export const BOWSER_BOMB                 = 0xB3        // bowser_bomb_geo
export const WATER_MINE                  = 0xB3        // water_mine_geo
export const BOWLING_BALL                = 0xB4        // bowling_ball_geo
export const TRAMPOLINE                  = 0xB5        // springboard_top_geo (unused)
export const TRAMPOLINE_CENTER           = 0xB6        // springboard_spring_geo (unused)
export const TRAMPOLINE_BASE             = 0xB7        // springboard_bottom_geo (unused)
export const UNKNOWN_B8                  = 0xB8        // referenced in special presets as a static object. Unknown usage
export const FISH                        = 0xB9        // fish_geo - fish without shadow, used
export const FISH_SHADOW                 = 0xBA        // fish_shadow_geo - fish with shadow, unused
export const BUTTERFLY                   = 0xBB        // butterfly_geo
export const BLACK_BOBOMB                = 0xBC        // black_bobomb_geo
// find me
export const KOOPA_SHELL                 = 0xBE        // koopa_shell_geo
export const KOOPA_WITHOUT_SHELL         = 0xBF        // koopa_without_shell_geo
export const GOOMBA                      = 0xC0        // goomba_geo
export const SEAWEED                     = 0xC1        // seaweed_geo
export const AMP                         = 0xC2        // amp_geo
export const BOBOMB_BUDDY                = 0xC3        // bobomb_buddy_geo
// find me
// find me
// find me
export const SSL_TOX_BOX                 = 0xC7        // ssl_geo_000630
export const BOWSER_KEY_CUTSCENE         = 0xC8        // bowser_key_cutscene_geo
export const DL_CANNON_LID               = 0xC9        // cannon_closed_seg8_dl_080048E0
export const CHECKERBOARD_PLATFORM       = 0xCA        // checkerboard_platform_geo
export const RED_FLAME_SHADOW            = 0xCB        // red_flame_shadow_geo
export const BOWSER_KEY                  = 0xCC        // bowser_key_geo
export const EXPLOSION                   = 0xCD        // explosion_geo
export const SNUFIT                      = 0xCE        // snufit_geo
export const PURPLE_SWITCH               = 0xCF        // purple_switch_geo
export const CASTLE_STAR_DOOR_30_STARS   = 0xD0        // castle_geo_000F00
export const CASTLE_STAR_DOOR_50_STARS   = 0xD1        // castle_geo_000F00
export const CCM_SNOWMAN_BASE            = 0xD2        // ccm_geo_0003F0
// find me
export const ONE_UP                      = 0xD4        // mushroom_1up_geo
export const CASTLE_STAR_DOOR_8_STARS    = 0xD5        // castle_geo_000F00
export const CASTLE_STAR_DOOR_70_STARS   = 0xD6        // castle_geo_000F00
export const RED_COIN                    = 0xD7        // red_coin_geo
export const RED_COIN_NO_SHADOW          = 0xD8        // red_coin_no_shadow_geo
export const METAL_BOX                   = 0xD9        // metal_box_geo
export const METAL_BOX_DL                = 0xDA        // metal_box_dl
export const NUMBER                      = 0xDB        // number_geo
export const FLYGUY                      = 0xDC        // shyguy_geo
export const TOAD                        = 0xDD        // toad_geo
export const PEACH                       = 0xDE        // peach_geo
export const CHUCKYA                     = 0xDF        // chuckya_geo
export const WHITE_PUFF                  = 0xE0        // white_puff_geo
export const TRAJECTORY_MARKER_BALL      = 0xE1        // bowling_ball_track_geo - duplicate used in SSL Pyramid small sized and as a track ball

// Menu Models (overwrites Level Geometry IDs)
export const MAIN_MENU_MARIO_SAVE_BUTTON         = MODEL_LEVEL_GEOMETRY_03   // main_menu_geo_0001D0
export const MAIN_MENU_RED_ERASE_BUTTON          = MODEL_LEVEL_GEOMETRY_04   // main_menu_geo_000290
export const MAIN_MENU_BLUE_COPY_BUTTON          = MODEL_LEVEL_GEOMETRY_05   // main_menu_geo_0002B8
export const MAIN_MENU_YELLOW_FILE_BUTTON        = MODEL_LEVEL_GEOMETRY_06   // main_menu_geo_0002E0
export const MAIN_MENU_GREEN_SCORE_BUTTON        = MODEL_LEVEL_GEOMETRY_07   // main_menu_geo_000308
export const MAIN_MENU_MARIO_SAVE_BUTTON_FADE    = MODEL_LEVEL_GEOMETRY_08   // main_menu_geo_000200
export const MAIN_MENU_MARIO_NEW_BUTTON          = MODEL_LEVEL_GEOMETRY_09   // main_menu_geo_000230
export const MAIN_MENU_MARIO_NEW_BUTTON_FADE     = MODEL_LEVEL_GEOMETRY_0A   // main_menu_geo_000260
export const MAIN_MENU_PURPLE_SOUND_BUTTON       = MODEL_LEVEL_GEOMETRY_0B   // main_menu_geo_000330
export const MAIN_MENU_GENERIC_BUTTON            = MODEL_LEVEL_GEOMETRY_0C   // main_menu_geo_000358

// level model aliases to level geometry IDs. Possibly a relic from an older level
// format that used to rely on level geometry objects. (seen in WF, LLL, etc)
export const LLL_ROTATING_HEXAGONAL_PLATFORM     = MODEL_LEVEL_GEOMETRY_09   // lll_geo_000A78
export const WF_GIANT_POLE                       = MODEL_LEVEL_GEOMETRY_0D   // wf_geo_000AE0
export const WF_ROTATING_PLATFORM                = MODEL_LEVEL_GEOMETRY_10   // wf_geo_0009B8
export const BITDW_WARP_PIPE                     = MODEL_LEVEL_GEOMETRY_12   // warp_pipe_geo
export const THI_WARP_PIPE                       = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo
export const VCUTM_WARP_PIPE                     = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo
export const CASTLE_GROUNDS_WARP_PIPE            = MODEL_LEVEL_GEOMETRY_16   // warp_pipe_geo
