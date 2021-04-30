import * as MODEL from "./model_ids"

// some flags
import { COIN_FORMATION_FLAG_VERTICAL,
         COIN_FORMATION_FLAG_RING,
         COIN_FORMATION_FLAG_ARROW,
         COIN_FORMATION_FLAG_FLYING } from "./model_ids"

export const MacroObjectPresets = {
    macro_yellow_coin: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_yellow_coin_2: ['bhvOneCoin', 'MODEL_YELLOW_COIN', 0],
    macro_moving_blue_coin: ['bhvMovingBlueCoin', 'MODEL_BLUE_COIN', 0],
    macro_sliding_blue_coin: ['bhvBlueCoinSliding', 'MODEL_BLUE_COIN', 0], // unused
    macro_red_coin: ['bhvRedCoin', 'MODEL_RED_COIN', 0],
    macro_empty_5: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_coin_line_horizontal: ['bhvCoinFormation', 'MODEL_NONE', 0],
    macro_coin_ring_horizontal: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_RING],
    macro_coin_arrow: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_ARROW],
    macro_coin_line_horizontal_flying: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_FLYING],
    macro_coin_line_vertical: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_FLYING | COIN_FORMATION_FLAG_VERTICAL],
    macro_coin_ring_horizontal_flying: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_FLYING | COIN_FORMATION_FLAG_RING],
    macro_coin_ring_vertical: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_FLYING | COIN_FORMATION_FLAG_RING | COIN_FORMATION_FLAG_VERTICAL],
    macro_coin_arrow_flying: ['bhvCoinFormation', 'MODEL_NONE', COIN_FORMATION_FLAG_FLYING | COIN_FORMATION_FLAG_ARROW], // unused
    macro_hidden_star_trigger: ['bhvHiddenStarTrigger', 'MODEL_NONE', 0],
    macro_empty_15: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_16: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_17: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_18: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_19: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_fake_star: ['bhvUnusedFakeStar', 'MODEL_STAR', 0], // unused
    macro_wooden_signpost: ['bhvMessagePanel', 'MODEL_WOODEN_SIGNPOST', 0],
    macro_cannon_closed: ['bhvCannonClosed', 'MODEL_DL_CANNON_LID', 0],
    macro_bobomb_buddy_opens_cannon: ['bhvBobombBuddyOpensCannon', 'MODEL_BOBOMB_BUDDY', 0],
    macro_butterfly: ['bhvButterfly', 'MODEL_BUTTERFLY', 0], // unused
    macro_bouncing_fireball_copy: ['bhvBouncingFireball', 'MODEL_NONE', 0], // unused
    macro_fish_group_3: ['bhvFishSpawner', 'MODEL_NONE', 0], // unused
    macro_fish_group: ['bhvFishSpawner', 'MODEL_NONE', 1],
    macro_unknown_28: ['bhvBetaFishSplashSpawner', 'MODEL_NONE', 0],
    macro_hidden_1up_in_pole: ['bhvHidden1upInPoleSpawner', 'MODEL_NONE', 0],
    macro_huge_goomba: ['bhvGoomba', 'MODEL_GOOMBA', 1],
    macro_tiny_goomba: ['bhvGoomba', 'MODEL_GOOMBA', 2],
    macro_goomba_triplet_spawner: ['bhvGoombaTripletSpawner', 'MODEL_NONE', 0],
    macro_goomba_quintuplet_spawner: ['bhvGoombaTripletSpawner', 'MODEL_NONE', 8], // unused
    macro_sign_on_wall: ['bhvSignOnWall', 'MODEL_NONE', 0],
    macro_chuckya: ['bhvChuckya', 'MODEL_CHUCKYA', 0],
    macro_cannon_open: ['bhvCannon', 'MODEL_CANNON_BASE', 0],
    macro_goomba: ['bhvGoomba', 'MODEL_GOOMBA', 0],
    macro_homing_amp: ['bhvHomingAmp', 'MODEL_AMP', 0],
    macro_circling_amp: ['bhvCirclingAmp', 'MODEL_AMP', 0],
    macro_unknown_40: ['bhvCarrySomething1', 'MODEL_UNKNOWN_7D', 0], // unused
    macro_unknown_41: ['bhvBetaTrampolineTop', 'MODEL_TRAMPOLINE', 0], // unused
    macro_free_bowling_ball: ['bhvFreeBowlingBall', 'MODEL_BOWLING_BALL', 0], // unused
    macro_snufit: ['bhvSnufit', 'MODEL_SNUFIT', 0],
    macro_recovery_heart: ['bhvRecoveryHeart', 'MODEL_HEART', 0],
    macro_1up_sliding: ['bhv1upSliding', 'MODEL_1UP', 0],
    macro_1up: ['bhv1Up', 'MODEL_1UP', 0],
    macro_1up_jump_on_approach: ['bhv1upJumpOnApproach', 'MODEL_1UP', 0], // unused
    macro_hidden_1up: ['bhvHidden1up', 'MODEL_1UP', 0],
    macro_hidden_1up_trigger: ['bhvHidden1upTrigger', 'MODEL_NONE', 0],
    macro_1up_2: ['bhv1Up', 'MODEL_1UP', 1],
    macro_1up_3: ['bhv1Up', 'MODEL_1UP', 2],
    macro_empty_52: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_blue_coin_switch: ['bhvBlueCoinSwitch', 'MODEL_BLUE_COIN_SWITCH', 0],
    macro_hidden_blue_coin: ['bhvHiddenBlueCoin', 'MODEL_BLUE_COIN', 0],
    macro_wing_cap_switch: ['bhvCapSwitch', 'MODEL_CAP_SWITCH', 0], // unused
    macro_metal_cap_switch: ['bhvCapSwitch', 'MODEL_CAP_SWITCH', 1], // unused
    macro_vanish_cap_switch: ['bhvCapSwitch', 'MODEL_CAP_SWITCH', 2], // unused
    macro_yellow_cap_switch: ['bhvCapSwitch', 'MODEL_CAP_SWITCH', 3], // unused
    macro_unknown_59: ['bhvWaterLevelDiamond', 'MODEL_BREAKABLE_BOX', 0], // unused
    macro_box_wing_cap: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 0],
    macro_box_metal_cap: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 1],
    macro_box_vanish_cap: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 2],
    macro_box_koopa_shell: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 3],
    macro_box_one_coin: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 4], // unused
    macro_box_three_coins: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 5],
    macro_box_ten_coins: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 6],
    macro_box_1up: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 7],
    macro_box_star_1: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 8],
    macro_breakable_box_no_coins: ['bhvBreakableBox', 'MODEL_BREAKABLE_BOX', 0],
    macro_breakable_box_three_coins: ['bhvBreakableBox', 'MODEL_BREAKABLE_BOX', 1],
    macro_pushable_metal_box: ['bhvPushableMetalBox', 'MODEL_METAL_BOX', 0],
    macro_breakable_box_small: ['bhvBreakableBoxSmall', 'MODEL_BREAKABLE_BOX_SMALL', 0],
    macro_floor_switch_hidden_objects: ['bhvFloorSwitchHiddenObjects', 'MODEL_PURPLE_SWITCH', 0],
    macro_hidden_box: ['bhvHiddenObject', 'MODEL_BREAKABLE_BOX', 0],
    macro_hidden_object_2: ['bhvHiddenObject', 'MODEL_BREAKABLE_BOX', 1], // unused
    macro_hidden_object_3: ['bhvHiddenObject', 'MODEL_BREAKABLE_BOX', 2], // unused
    macro_breakable_box_giant: ['bhvBreakableBox', 'MODEL_BREAKABLE_BOX', 3],
    macro_koopa_shell_underwater: ['bhvKoopaShellUnderwater', 'MODEL_KOOPA_SHELL', 0],
    macro_box_1up_running_away: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 9],
    macro_empty_80: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_bullet_bill_cannon: ['bhvBulletBill', 'MODEL_BULLET_BILL', 0], // unused
    macro_heave_ho: ['bhvHeaveHo', 'MODEL_HEAVE_HO', 0],
    macro_empty_83: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_thwomp: ['bhvThwomp2', 'MODEL_THWOMP', 0], // unused
    macro_fire_spitter: ['bhvFireSpitter', 'MODEL_BOWLING_BALL', 0],
    macro_fire_fly_guy: ['bhvFlyGuy', 'MODEL_FLYGUY', 1],
    macro_jumping_box: ['bhvJumpingBox', 'MODEL_BREAKABLE_BOX', 0],
    macro_butterfly_triplet: ['bhvTripletButterfly', 'MODEL_BUTTERFLY', 0],
    macro_butterfly_triplet_2: ['bhvTripletButterfly', 'MODEL_BUTTERFLY', 4],
    macro_empty_90: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_91: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_92: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_bully: ['bhvSmallBully', 'MODEL_BULLY', 0],
    macro_bully_2: ['bhvSmallBully', 'MODEL_BULLY_BOSS', 0], // unused
    macro_empty_95: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_unknown_96: ['bhvStub1D0C', 'MODEL_UNKNOWN_58', 0], // unused
    macro_bouncing_fireball: ['bhvBouncingFireball', 'MODEL_NONE', 0],
    macro_flamethrower: ['bhvFlamethrower', 'MODEL_NONE', 4],
    macro_empty_99: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_100: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_101: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_102: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_103: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_104: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_105: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_wooden_post: ['bhvWoodenPost', 'MODEL_WOODEN_POST', 0],
    macro_water_bomb_spawner: ['bhvWaterBombSpawner', 'MODEL_NONE', 0],
    macro_enemy_lakitu: ['bhvEnemyLakitu', 'MODEL_ENEMY_LAKITU', 0],
    macro_bob_koopa_the_quick: ['bhvKoopa', 'MODEL_KOOPA_WITH_SHELL', 2], // unused
    macro_koopa_race_endpoint: ['bhvKoopaRaceEndpoint', 'MODEL_NONE', 0], // unused
    macro_bobomb: ['bhvBobomb', 'MODEL_BLACK_BOBOMB', 0],
    macro_water_bomb_cannon_copy: ['bhvWaterBombCannon', 'MODEL_CANNON_BASE', 0], // unused
    macro_bobomb_buddy_opens_cannon_copy: ['bhvBobombBuddyOpensCannon', 'MODEL_BOBOMB_BUDDY', 0], // unused
    macro_water_bomb_cannon: ['bhvWaterBombCannon', 'MODEL_CANNON_BASE', 0],
    macro_bobomb_still: ['bhvBobomb', 'MODEL_BLACK_BOBOMB', 1],
    macro_empty_116: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_117: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_118: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_119: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_120: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_121: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_122: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_unknown_123: ['bhvUnusedFakeStar', 'MODEL_UNKNOWN_54', 0], // unused
    macro_empty_124: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_unagi: ['bhvUnagi', 'MODEL_UNAGI', 0], // unused
    macro_sushi: ['bhvSushiShark', 'MODEL_SUSHI', 0], // unused
    macro_empty_127: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_128: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_129: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_130: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_131: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_132: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_133: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_134: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_135: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_136: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_unknown_137: ['bhvStaticObject', 'MODEL_KLEPTO', 0], // unused
    macro_tornado: ['bhvTweester', 'MODEL_TWEESTER', 0], // unused
    macro_pokey: ['bhvPokey', 'MODEL_NONE', 0],
    macro_pokey_copy: ['bhvPokey', 'MODEL_NONE', 0], // unused
    macro_tox_box: ['bhvToxBox', 'MODEL_SSL_TOX_BOX', 0], // unused
    macro_empty_142: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_143: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_144: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_145: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_146: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_147: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_148: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_149: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_150: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_monty_mole_2: ['bhvMontyMole', 'MODEL_MONTY_MOLE', 0], // unused
    macro_monty_mole: ['bhvMontyMole', 'MODEL_MONTY_MOLE', 1],
    macro_monty_mole_hole: ['bhvMontyMoleHole', 'MODEL_DL_MONTY_MOLE_HOLE', 0],
    macro_fly_guy: ['bhvFlyGuy', 'MODEL_FLYGUY', 0],
    macro_empty_155: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_wiggler: ['bhvWigglerHead', 'MODEL_WIGGLER_HEAD', 0], // unused
    macro_empty_157: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_158: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_159: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_160: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_161: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_162: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_163: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_164: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_spindrift: ['bhvSpindrift', 'MODEL_SPINDRIFT', 0],
    macro_mr_blizzard: ['bhvMrBlizzard', 'MODEL_MR_BLIZZARD_HIDDEN', 0],
    macro_mr_blizzard_copy: ['bhvMrBlizzard', 'MODEL_MR_BLIZZARD_HIDDEN', 0], // unused
    macro_empty_168: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_small_penguin: ['bhvSmallPenguin', 'MODEL_PENGUIN', 0], // unused
    macro_tuxies_mother: ['bhvTuxiesMother', 'MODEL_PENGUIN', 0], // unused
    macro_tuxies_mother_copy: ['bhvTuxiesMother', 'MODEL_PENGUIN', 0], // unused
    macro_mr_blizzard_2: ['bhvMrBlizzard', 'MODEL_MR_BLIZZARD_HIDDEN', 1], // unused
    macro_empty_173: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_174: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_175: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_176: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_177: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_178: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_179: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_180: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_181: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_182: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_183: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_184: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_185: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_186: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_187: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_188: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_haunted_chair_copy: ['bhvHauntedChair', 'MODEL_HAUNTED_CHAIR', 0], // unused
    macro_haunted_chair: ['bhvHauntedChair', 'MODEL_HAUNTED_CHAIR', 0],
    macro_haunted_chair_copy2: ['bhvHauntedChair', 'MODEL_HAUNTED_CHAIR', 0], // unused
    macro_boo: ['bhvGhostHuntBoo', 'MODEL_BOO', 0], // unused
    macro_boo_copy: ['bhvGhostHuntBoo', 'MODEL_BOO', 0], // unused
    macro_boo_group: ['bhvCourtyardBooTriplet', 'MODEL_BOO', 0], // unused
    macro_boo_with_cage: ['bhvBooWithCage', 'MODEL_BOO', 0], // unused
    macro_beta_key: ['bhvAlphaBooKey', 'MODEL_BETA_BOO_KEY', 0], // unused
    macro_empty_197: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_198: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_199: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_200: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_201: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_202: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_203: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_204: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_205: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_206: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_207: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_208: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_209: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_210: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_211: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_212: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_213: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_214: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_215: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_216: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_217: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_218: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_219: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_220: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_221: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_222: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_223: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_224: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_225: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_226: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_227: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_228: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_229: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_230: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_231: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_232: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_233: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_chirp_chirp: ['bhvChirpChirp', 'MODEL_NONE', 0],
    macro_seaweed_bundle: ['bhvSeaweedBundle', 'MODEL_NONE', 0],
    macro_beta_chest: ['bhvBetaChestBottom', 'MODEL_TREASURE_CHEST_BASE', 0], // unused
    macro_water_mine: ['bhvBowserBomb', 'MODEL_WATER_MINE', 0], // unused
    macro_fish_group_4: ['bhvFishSpawner', 'MODEL_NONE', 2], // unused
    macro_fish_group_2: ['bhvFishSpawner', 'MODEL_NONE', 3],
    macro_jet_stream_ring_spawner: ['bhvJetStreamRingSpawner', 'MODEL_WATER_RING', 0], // unused
    macro_jet_stream_ring_spawner_copy: ['bhvJetStreamRingSpawner', 'MODEL_WATER_RING', 0], // unused
    macro_skeeter: ['bhvSkeeter', 'MODEL_SKEETER', 0],
    macro_clam_shell: ['bhvClamShell', 'MODEL_CLAM_SHELL', 0],
    macro_empty_244: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_245: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_246: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_247: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_248: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_249: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_250: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_ukiki: ['bhvMacroUkiki', 'MODEL_UKIKI', 0], // unused
    macro_ukiki_2: ['bhvMacroUkiki', 'MODEL_UKIKI', 1], // unused
    macro_piranha_plant: ['bhvPiranhaPlant', 'MODEL_PIRANHA_PLANT', 0], // unused
    macro_empty_254: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_whomp: ['bhvSmallWhomp', 'MODEL_WHOMP', 0],
    macro_chain_chomp: ['bhvChainChomp', 'MODEL_CHAIN_CHOMP', 0],
    macro_empty_257: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_koopa: ['bhvKoopa', 'MODEL_KOOPA_WITH_SHELL', 1],
    macro_koopa_shellless: ['bhvKoopa', 'MODEL_KOOPA_WITHOUT_SHELL', 0], // unused
    macro_wooden_post_copy: ['bhvWoodenPost', 'MODEL_WOODEN_POST', 0], // unused
    macro_fire_piranha_plant: ['bhvFirePiranhaPlant', 'MODEL_PIRANHA_PLANT', 0],
    macro_fire_piranha_plant_2: ['bhvFirePiranhaPlant', 'MODEL_PIRANHA_PLANT', 1], // unused
    macro_thi_koopa_the_quick: ['bhvKoopa', 'MODEL_KOOPA_WITH_SHELL', 4],
    macro_empty_264: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_265: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_266: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_267: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_268: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_269: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_270: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_271: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_272: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_273: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_274: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_275: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_276: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_277: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_278: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_279: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_280: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_moneybag: ['bhvMoneybagHidden', 'MODEL_YELLOW_COIN', 0],
    macro_empty_282: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_283: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_284: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_285: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_286: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_287: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_288: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_swoop: ['bhvSwoop', 'MODEL_SWOOP', 0],
    macro_swoop_2: ['bhvSwoop', 'MODEL_SWOOP', 1],
    macro_mr_i: ['bhvMrI', 'MODEL_NONE', 0],
    macro_scuttlebug_spawner: ['bhvScuttlebugSpawn', 'MODEL_NONE', 0],
    macro_scuttlebug: ['bhvScuttlebug', 'MODEL_SCUTTLEBUG', 0],
    macro_empty_294: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_295: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_296: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_297: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_298: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_299: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_300: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_301: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_302: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_unknown_303: ['bhvYellowCoin', 'MODEL_UNKNOWN_54', 0], // unused
    macro_empty_304: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_305: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_306: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_307: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_308: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_309: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_310: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_311: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_312: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_ttc_rotating_cube: ['bhvTTCRotatingSolid', 'MODEL_TTC_ROTATING_CUBE', 0],
    macro_ttc_rotating_prism: ['bhvTTCRotatingSolid', 'MODEL_TTC_ROTATING_PRISM', 1],
    macro_ttc_pendulum: ['bhvTTCPendulum', 'MODEL_TTC_PENDULUM', 0],
    macro_ttc_large_treadmill: ['bhvTTCTreadmill', 'MODEL_TTC_LARGE_TREADMILL', 0],
    macro_ttc_small_treadmill: ['bhvTTCTreadmill', 'MODEL_TTC_SMALL_TREADMILL', 1],
    macro_ttc_push_block: ['bhvTTCMovingBar', 'MODEL_TTC_PUSH_BLOCK', 0],
    macro_ttc_rotating_hexagon: ['bhvTTCCog', 'MODEL_TTC_ROTATING_HEXAGON', 0],
    macro_ttc_rotating_triangle: ['bhvTTCCog', 'MODEL_TTC_ROTATING_TRIANGLE', 2],
    macro_ttc_pit_block: ['bhvTTCPitBlock', 'MODEL_TTC_PIT_BLOCK', 0],
    macro_ttc_pit_block_2: ['bhvTTCPitBlock', 'MODEL_TTC_PIT_BLOCK_UNUSED', 1], // unused
    macro_ttc_elevator_platform: ['bhvTTCElevator', 'MODEL_TTC_ELEVATOR_PLATFORM', 0],
    macro_ttc_clock_hand: ['bhvTTC2DRotator', 'MODEL_TTC_CLOCK_HAND', 0],
    macro_ttc_spinner: ['bhvTTCSpinner', 'MODEL_TTC_SPINNER', 0],
    macro_ttc_small_gear: ['bhvTTC2DRotator', 'MODEL_TTC_SMALL_GEAR', 1],
    macro_ttc_large_gear: ['bhvTTC2DRotator', 'MODEL_TTC_LARGE_GEAR', 1],
    macro_ttc_large_treadmill_2: ['bhvTTCTreadmill', 'MODEL_TTC_LARGE_TREADMILL', 2],
    macro_ttc_small_treadmill_2: ['bhvTTCTreadmill', 'MODEL_TTC_SMALL_TREADMILL', 3],
    macro_empty_330: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_331: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_332: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_333: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_334: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_335: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_336: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_337: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_338: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_box_star_2: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 10],
    macro_box_star_3: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 11],
    macro_box_star_4: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 12],
    macro_box_star_5: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 13], // unused
    macro_box_star_6: ['bhvExclamationBox', 'MODEL_EXCLAMATION_BOX', 14],
    macro_empty_344: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_345: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_346: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_347: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_348: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_349: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_bits_sliding_platform: ['bhvSlidingPlatform2', 'MODEL_BITS_SLIDING_PLATFORM', 0], // unused
    macro_bits_twin_sliding_platforms: ['bhvSlidingPlatform2', 'MODEL_BITS_TWIN_SLIDING_PLATFORMS', 0], // unused
    macro_bits_unknown_352: ['bhvAnotherTiltingPlatform', 'MODEL_BITDW_SLIDING_PLATFORM', 0], // unused
    macro_bits_octagonal_platform: ['bhvOctagonalPlatformRotating', 'MODEL_BITS_OCTAGONAL_PLATFORM', 0], // unused
    macro_bits_staircase: ['bhvAnimatesOnFloorSwitchPress', 'MODEL_BITS_STAIRCASE', 0], // unused
    macro_empty_355: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_356: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_bits_ferris_wheel_axle: ['bhvFerrisWheelAxle', 'MODEL_BITS_FERRIS_WHEEL_AXLE', 0], // unused
    macro_bits_arrow_platform: ['bhvActivatedBackAndForthPlatform', 'MODEL_BITS_ARROW_PLATFORM', 0], // unused
    macro_bits_seesaw_platform: ['bhvSeesawPlatform', 'MODEL_BITS_SEESAW_PLATFORM', 0], // unused
    macro_bits_tilting_w_platform: ['bhvSeesawPlatform', 'MODEL_BITS_TILTING_W_PLATFORM', 0], // unused
    macro_empty_361: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_362: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_363: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_364: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0],
    macro_empty_365: ['bhvYellowCoin', 'MODEL_YELLOW_COIN', 0]
}

//         ]

//     gLinker.MacroObjectPresets = {}
//     pre.forEach(p => {
//         if (!gLinker.behaviors[p[1]]) {
//             throw "undefined gLinker behavior: " + p[1]
//         }
//         gLinker.MacroObjectPresets[p[0]] = {behavior: gLinker.behaviors[p[1]], model: MODEL[p[2]], param: p[3]}
//         })
//     }

//     return _MacroObjectPresets
// }
