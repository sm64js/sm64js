import * as _Linker from "./Linker"

import { ADD_INT, ADD_FLOAT, ANIMATE, ANIMATE_TEXTURE, BEGIN, BEGIN_LOOP, BEGIN_REPEAT, BILLBOARD, BREAK,
         CALL, CALL_NATIVE, DEACTIVATE, DEBUGGER, DELAY, DELAY_VAR, DISABLE_RENDERING,
         DROP_TO_FLOOR, END_LOOP, END_REPEAT, END_REPEAT_CONTINUE, GOTO, HIDE,
         LOAD_ANIMATIONS, LOAD_COLLISION_DATA, OR_INT, PARENT_BIT_CLEAR, RETURN, SCALE,
         SET_FLOAT, SET_HITBOX, SET_HITBOX_WITH_OFFSET, SET_HURTBOX, SET_HOME, SET_INT, SET_INTERACT_TYPE,
         SET_MODEL, SET_OBJ_PHYSICS, SET_RANDOM_INT, SET_RANDOM_FLOAT, SUM_FLOAT, SPAWN_CHILD,
         SPAWN_OBJ, SPAWN_WATER_DROPLET, CYLBOARD, SPAWN_CHILD_WITH_PARAM, CLEAR_BIT_PARENT,
         SET_INT_RAND_RSHIFT
} from "../engine/BehaviorCommands"

import { INTERACT_WATER_RING, INTERACT_POLE, INTERACT_DAMAGE, INTERACT_COIN, INTERACT_TEXT,
         INT_SUBTYPE_SIGN, INTERACT_CANNON_BASE, INTERACT_GRABBABLE, INT_SUBTYPE_BIG_KNOCKBACK,
         INTERACT_WARP_DOOR, INTERACT_DOOR, INTERACT_WARP, INT_SUBTYPE_STAR_DOOR, INTERACT_FLAME, INT_SUBTYPE_FADING_WARP
} from "./Interaction"

import { oDamageOrCoinValue, oAnimState, oInteractType, oInteractionSubtype, oAnimations,
         oIntangibleTimer, oGraphYOffset, oNumLootCoins, oCollisionDistance,
         oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll,
         oWoodenPostTotalMarioAngle, oInteractStatus, oMoveAngleYaw, oWaterObjUnkF4,
         oWaterObjUnkF8, oWaterObjUnkFC, oBehParams2ndByte, oActiveParticleFlags, oFlags,
         oUnk94, oBBallSpawnerPeriodMinus1, oBobombBuddyRole, oTripletButterflyScale,
         oBigBooNumMinionBoosKilled, oDrawingDistance, oMarioParticleFlags,
         oOpacity, oForwardVel, oVelY, oHealth, oParentRelativePosX,
         oParentRelativePosZ, oArrowLiftUnk100, oRoom, oMoveFlags, oCoinBaseVelY,

         OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, OBJ_FLAG_COMPUTE_DIST_TO_MARIO,
         OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW,
         OBJ_FLAG_PERSISTENT_RESPAWN, OBJ_FLAG_HOLDABLE, OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL,
         OBJ_FLAG_MOVE_XZ_USING_FVEL, OBJ_FLAG_ACTIVE_FROM_AFAR, OBJ_FLAG_0100,
         OBJ_FLAG_SET_THROW_MATRIX_FROM_TRANSFORM, OBJ_FLAG_0020,

         ACTIVE_PARTICLE_H_STAR, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_TRIANGLE,
         ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_BUBBLE, ACTIVE_PARTICLE_WATER_SPLASH,
         ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE,
         ACTIVE_PARTICLE_WAVE_TRAIL, ACTIVE_PARTICLE_PLUNGE_BUBBLE,
         ACTIVE_PARTICLE_SPARKLES,
         OBJ_FLAG_SET_FACE_ANGLE_TO_MOVE_ANGLE,
         oParentRelativePosY
} from "../include/object_constants"

import { MODEL_WOODEN_POST, MODEL_MIST, MODEL_SMOKE, MODEL_BUBBLE, MODEL_CANNON_BARREL,
         MODEL_BOWSER_BOMB_CHILD_OBJ, MODEL_NONE, MODEL_YELLOW_COIN, MODEL_BITFS_BLUE_POLE, MODEL_MR_I_IRIS, MODEL_MR_I
} from "../include/model_ids"

import * as _activated_bf_plat        from "./behaviors/activated_bf_plat.inc"
import * as _amp                      from "./behaviors/amp.inc"
import * as _animated_floor_switch    from "./behaviors/animated_floor_switch.inc"
import * as _arrow_lift               from "./behaviors/arrow_lift.inc"
import * as _bbh_haunted_bookshelf    from "./behaviors/bbh_haunted_bookshelf.inc"
import * as _bbh_merry_go_round       from "./behaviors/bbh_merry_go_round.inc"
import * as _bird                     from "./behaviors/bird.inc"
import * as _bobomb                   from "./behaviors/bobomb.inc"
import * as _boo                      from "./behaviors/boo.inc"
import * as _boo_cage                 from "./behaviors/boo_cage.inc"
import * as _bowling_ball             from "./behaviors/bowling_ball.inc"
import * as _breakable_box            from "./behaviors/breakable_box.inc"
import * as _breakable_box_small      from "./behaviors/breakable_box_small.inc"
import * as _breakable_wall           from "./behaviors/breakable_wall.inc"
import * as _bully                    from "./behaviors/bully.inc"
import * as _butterfly                from "./behaviors/butterfly.inc"
import * as _camera_lakitu            from "./behaviors/camera_lakitu.inc"
import * as _cannon                   from "./behaviors/cannon.inc"
import * as _cannon_door              from "./behaviors/cannon_door.inc"
import * as _cap                      from "./behaviors/cap.inc"
import * as _capswitch                from "./behaviors/capswitch.inc"
import * as _castle_cannon_grate      from "./behaviors/castle_cannon_grate.inc"
import * as _castle_flag              from "./behaviors/bhv_castle_flag_init.inc"
import * as _castle_floor_trap        from "./behaviors/castle_floor_trap.inc"
import * as _celebration_star         from "./behaviors/celebration_star.inc"
import * as _chain_chomp              from "./behaviors/chain_chomp.inc"
import * as _checkerboard_platform    from "./behaviors/checkerboard_platform.inc"
import * as _chuckya                  from "./behaviors/chuckya.inc"
import * as _cloud                    from "./behaviors/cloud.inc"
import * as _coin                     from "./behaviors/coin.inc"
import * as _collide_particles        from "./behaviors/collide_particles.inc"
import * as _corkbox                  from "./behaviors/corkbox.inc"
import * as _ddd_warp                 from "./behaviors/ddd_warp.inc"
import * as _door                     from "./behaviors/door.inc"
import * as _elevator                 from "./behaviors/elevator.inc"
import * as _exclamation_box          from "./behaviors/exclamation_box.inc"
import * as _explosion                from "./behaviors/explosion.inc"
import * as _falling_rising_platform  from "./behaviors/falling_rising_platform.inc"
import * as _ferris_wheel             from "./behaviors/ferris_wheel.inc"
import * as _fish                     from "./behaviors/fish.inc"
import * as _file_select              from "./behaviors/file_select.inc"
import * as _flame_mario              from "./behaviors/flame_mario.inc"
import * as _flamethrower             from "./behaviors/flamethrower.inc"
import * as _flying_bookend_switch    from "./behaviors/flying_bookend_switch.inc"
import * as _goomba                   from "./behaviors/goomba.inc"
import * as _haunted_chair            from "./behaviors/haunted_chair.inc"
import * as _intro_lakitu             from "./behaviors/intro_lakitu.inc"
import * as _intro_peach              from "./behaviors/intro_peach.inc"
import * as _intro_scene              from "./behaviors/intro_scene.inc"
import * as _kickable_board           from "./behaviors/kickable_board.inc"
import * as _king_bobomb              from "./behaviors/king_bobomb.inc"
import * as _koopa_shell_underwater   from "./behaviors/koopa_shell_underwater.inc"
import * as _mad_piano                from "./behaviors/mad_piano.inc"
import * as _moat_drainer             from "./behaviors/moat_drainer.inc"
import * as _moat_grill               from "./behaviors/moat_grill.inc"
import * as _moving_coin              from "./behaviors/moving_coin.inc"
import * as _mr_i                     from "./behaviors/mr_i.inc"
import * as _mushroom_1up             from "./behaviors/mushroom_1up.inc"
import * as _platform_on_track        from "./behaviors/platform_on_track.inc"
import * as _pole                     from "./behaviors/pole.inc"
import * as _pole_base                from "./behaviors/pole_base.inc"
import * as _purple_switch            from "./behaviors/purple_switch.inc"
import * as _recovery_heart           from "./behaviors/recovery_heart.inc"
import * as _red_coin                 from "./behaviors/red_coin.inc"
import * as _rotating_platform        from "./behaviors/rotating_platform.inc"
import * as _seesaw_platform          from "./behaviors/seesaw_platform.inc"
import * as _sound_spawner            from "./behaviors/sound_spawner.inc"
import * as _sparkle_spawn            from "./behaviors/sparkle_spawn.inc"
import * as _sparkle_spawn_star       from "./behaviors/sparkle_spawn_star.inc"
import * as _spawn_star               from "./behaviors/spawn_star.inc"
import * as _star_door                from "./behaviors/star_door.inc"
import * as _sliding_platform_2       from "./behaviors/sliding_platform_2.inc"
import * as _square_platform_cycle    from "./behaviors/square_platform_cycle.inc"
import * as _switch_hidden_objects    from "./behaviors/switch_hidden_objects.inc"
import * as _thi_top                  from "./behaviors/thi_top.inc"
import * as _thwomp                   from "./behaviors/thwomp.inc"
import * as _tilting_inverted_pyramid from "./behaviors/tilting_inverted_pyramid.inc"
import * as _tower_door               from "./behaviors/tower_door.inc"
import * as _triplet_butterfly        from "./behaviors/triplet_butterfly.inc"
import * as _tumbling_bridge          from "./behaviors/tumbling_bridge.inc"
import * as _warp                     from "./behaviors/warp.inc"
import * as _water_bomb               from "./behaviors/water_bomb.inc"
import * as _water_bomb_cannon        from "./behaviors/water_bomb_cannon.inc"
import * as _water_mist               from "./behaviors/water_mist.inc"
import * as _water_mist_particle      from "./behaviors/water_mist_particle.inc"
import * as _water_objs               from "./behaviors/water_objs.inc"
import * as _water_splashes_and_waves from "./behaviors/water_splashes_and_waves.inc"
import * as _white_puff               from "./behaviors/white_puff.inc"
import * as _white_puff_explode       from "./behaviors/white_puff_explode.inc"
import * as _yoshi                    from "./behaviors/yoshi.inc"

import { amp_seg8_anims_08004034         } from "../actors/amp/anims.inc"
import { birds_seg5_anims_050009E8       } from "../actors/bird/anims.inc"
import { bobomb_seg8_anims_0802396C      } from "../actors/bobomb/anims.inc"
import { bully_seg5_anims_0500470C       } from "../actors/bully/anims.inc"
import { butterfly_seg3_anims_030056B0   } from "../actors/butterfly/anims.inc"
import { bowser_seg6_anims_06057690      } from "../actors/bowser/anims.inc"
import { castle_grounds_seg7_anims_flags } from "../levels/castle_grounds/areas/1/11/anim.inc"
import { chain_chomp_seg6_anims_06025178 } from "../actors/chain_chomp/anims.inc"
import { door_seg3_anims_030156C0        } from "../actors/door/anims.inc"
import { goomba_seg8_anims_0801DA4C      } from "../actors/goomba/anims.inc"
import { lakitu_seg6_anims_060058F8      } from "../actors/lakitu_cameraman/anims.inc"
import { yoshi_seg5_anims_05024100       } from "../actors/yoshi/anims.inc"

import { bowser_2_seg7_collision_tilting_platform        } from "../levels/bowser_2/tilting_platform/collision.inc"
import { breakable_box_seg8_collision_08012D70           } from "../actors/breakable_box/collision.inc"
import { cannon_lid_seg8_collision_08004950              } from "../actors/cannon_lid/collision.inc"
import { castle_grounds_seg7_collision_cannon_grill      } from "../levels/castle_grounds/areas/1/8/collision.inc"
import { castle_grounds_seg7_collision_moat_grills       } from "../levels/castle_grounds/areas/1/7/collision.inc"
import { checkerboard_platform_seg8_collision_0800D710   } from "../actors/checkerboard_platform/collision.inc"
import { door_seg3_collision_0301CE78                    } from "../actors/warp_collision/collision.inc"
import { exclamation_box_outline_seg8_collision_08025F78 } from "../actors/exclamation_box_outline/collision.inc"
import { inside_castle_seg7_collision_star_door          } from "../levels/castle_inside/star_door/collision.inc"
import { inside_castle_seg7_collision_floor_trap         } from "../levels/castle_inside/trap_door/collision.inc" 
import { poundable_pole_collision_06002490               } from "../actors/poundable_pole/collision.inc"
import { wooden_signpost_seg3_collision_0302DD80         } from "../actors/wooden_signpost/collision.inc"
import { jrb_seg7_collision_rock_solid                   } from "../levels/jrb/rock/collision.inc"
import { jrb_seg7_collision_pillar_base                  } from "../levels/jrb/falling_pillar_base/collision.inc"
import { jrb_seg7_collision_floating_platform            } from "../levels/jrb/floating_platform/collision.inc"
import { inside_castle_seg7_collision_water_level_pillar } from "../levels/castle_inside/water_level_pillar/collision.inc"
import { bbh_seg7_collision_staircase_step               } from "../levels/bbh/staircase_step/collision.inc"
import { bbh_seg7_collision_merry_go_round               } from "../levels/bbh/merry_go_round/collision.inc"
import { bitdw_seg7_collision_moving_pyramid             } from "../levels/bitdw/square_platform/collision.inc"
import { bitfs_seg7_collision_inverted_pyramid           } from "../levels/bitfs/tilting_square_platform/collision.inc"
import { bitfs_seg7_collision_sinking_platform           } from "../levels/bitfs/sinking_platforms/collision.inc"
import { bitfs_seg7_collision_squishable_platform        } from "../levels/bitfs/stretching_platform/collision.inc"
import { bitfs_seg7_collision_sinking_cage_platform      } from "../levels/bitfs/sinking_cage_platform/collision.inc"
import { purple_switch_seg8_collision_0800C7A8           } from "../actors/purple_switch/collision.inc"
import { warp_pipe_seg3_collision_03009AC8               } from "../actors/warp_pipe/collision.inc"
import { king_bobomb_seg5_anims_0500FE30                 } from "../actors/king_bobomb/anims.inc"
import { bob_seg7_collision_chain_chomp_gate             } from "../levels/bob/chain_chomp_gate/collision.inc"
import { wdw_seg7_collision_arrow_lift                   } from "../levels/wdw/arrow_lift/collision.inc"
import { bbh_seg7_collision_haunted_bookshelf            } from "../levels/bbh/moving_bookshelf/collision.inc"
import { bookend_seg5_anims_05002540                     } from "../actors/bookend/anims.inc"
import { mad_piano_seg5_anims_05009B14                   } from "../actors/mad_piano/anims.inc"
import { chair_seg5_anims_05005784                       } from "../actors/chair/anims.inc"
import { peach_seg5_anims_0501C41C                       } from "../actors/peach/anims.inc"
import { thi_seg7_collision_top_trap                     } from "../levels/thi/areas/1/6/collision.inc"
import { capswitch_collision_050033D0, capswitch_collision_05003448                    } from "../actors/capswitch/collision.inc"
import { chuckya_seg8_anims_0800C070 } from "../actors/chuckya/anims.inc"
import { wf_seg7_collision_tower } from "../levels/wf/areas/1/10/collision.inc"
import { wf_seg7_collision_bullet_bill_cannon } from "../levels/wf/areas/1/11/collision.inc"
import { wf_seg7_collision_breakable_wall } from "../levels/wf/breakable_wall_right/collision.inc"
import { wf_seg7_collision_breakable_wall_2 } from "../levels/wf/breakable_wall_left/collision.inc"
import { wf_seg7_collision_kickable_board } from "../levels/wf/kickable_board/collision.inc"
import { wf_seg7_collision_tower_door } from "../levels/wf/tower_door/collision.inc"
import { wf_seg7_collision_clocklike_rotation } from "../levels/wf/rotating_wooden_platform/collision.inc"
import { ttm_seg7_collision_podium_warp } from "../levels/ttm/slide_exit_podium/collision.inc"
import { ssl_seg7_collision_grindel } from "../levels/ssl/grindel/collision.inc"
import { thwomp_seg5_collision_0500B7D0, thwomp_seg5_collision_0500B92C } from "../actors/thwomp/collision.inc"
import { hmc_seg7_collision_elevator } from "../levels/hmc/elevator_platform/collision.inc"
import { rr_seg7_collision_elevator_platform } from "../levels/rr/elevator_platform/collision.inc"

export const OBJ_LIST_PLAYER = 0     //  (0) mario
export const OBJ_LIST_UNUSED_1 = 1    //  (1) (unused)
export const OBJ_LIST_DESTRUCTIVE = 2 //  (2) things that can be used to destroy other objects, like
//      bob-ombs and corkboxes
export const OBJ_LIST_UNUSED_3 = 3   //  (3) (unused)
export const OBJ_LIST_GENACTOR = 4   //  (4) general actors. most normal 'enemies' or actors are
//      on this list. (MIPS, bullet bill, bully, etc)
export const OBJ_LIST_PUSHABLE = 5   //  (5) pushable actors. This is a group of objects which
//      can push each other around as well as their parent
//      objects. (goombas, koopas, spinies)
export const OBJ_LIST_LEVEL = 6     //  (6) level objects. general level objects such as heart, star
export const OBJ_LIST_UNUSED_7 = 7  //  (7) (unused)
export const OBJ_LIST_DEFAULT = 8     //  (8) default objects. objects that didnt start with a 00
//      command are put here, so this is treated as a default.
export const OBJ_LIST_SURFACE = 9     //  (9) surface objects. objects that specifically have surface
//      collision and not object collision. (thwomp, whomp, etc)
export const OBJ_LIST_POLELIKE = 10    // (10) polelike objects. objects that attract or otherwise
//      "cling" mario similar to a pole action. (hoot,
//      whirlpool, trees/poles, etc)
export const OBJ_LIST_SPAWNER = 11     // (11) spawners
export const OBJ_LIST_UNIMPORTANT = 12 // (12) unimportant objects. objects that will not load
//      if there are not enough object slots: they will also
//      be manually unloaded to make room for slots if the list
//      gets exhausted.
export const NUM_OBJ_LISTS = 13

const bhvStarDoor = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvStarDoor'),
    SET_INT(oInteractType, INTERACT_DOOR),
    LOAD_COLLISION_DATA(inside_castle_seg7_collision_star_door),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_STAR_DOOR),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HITBOX(/*Radius*/ 80, /*Height*/ 100),
    SET_HOME(),
    SET_FLOAT(oDrawingDistance, 20000),
    CALL_NATIVE('bhv_door_init'),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_star_door_loop'),
        CALL_NATIVE('bhv_star_door_loop_2'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvMrIBody = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvMrIBody'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_mr_i_body_loop'),
    END_LOOP(),
];

const bhvMrI = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvMrI'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SPAWN_CHILD(/*Model*/ MODEL_MR_I_IRIS, /*Behavior*/ bhvMrIBody),
    SET_MODEL(MODEL_MR_I),
    BILLBOARD(),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_mr_i_loop'),
    END_LOOP(),
];

const bhvMrIParticle = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMrIParticle'),
    BILLBOARD(),
    OR_INT(oFlags, (OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oIntangibleTimer, 0),
    SET_HITBOX(50, 50),
    SET_INT(oDamageOrCoinValue, 1),
    SET_INT(oInteractType, INTERACT_DAMAGE),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ 0, /*Bounciness*/ 0, /*Drag strength*/ 0, /*Friction*/ 0, /*Buoyancy*/ 0, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_mr_i_particle_loop'),
    END_LOOP(),
];

const bhvPurpleParticle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvPurpleParticle'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(10),
        CALL_NATIVE('bhv_piranha_particle_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvGiantPole = [
    BEGIN(OBJ_LIST_POLELIKE, 'bhvGiantPole'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oInteractType, INTERACT_POLE),
    SET_HITBOX(80, 2100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_giant_pole_loop'),
    END_LOOP(),
];

const bhvPoleGrabbing = [
    BEGIN(OBJ_LIST_POLELIKE, 'bhvPoleGrabbing'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oInteractType, INTERACT_POLE),
    SET_HITBOX(/*Radius*/ 80, /*Height*/ 1500),
    CALL_NATIVE('bhv_pole_init'),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_pole_base_loop'),
    END_LOOP(),
];

const bhvTHIHugeIslandTop = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTHIHugeIslandTop'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(thi_seg7_collision_top_trap),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_thi_huge_island_top_loop'),
    END_LOOP(),
];

const bhvTHITinyIslandTop = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_thi_tiny_island_top_loop'),
    END_LOOP(),
];

const bhvCapSwitchBase = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(capswitch_collision_05003448),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvCapSwitch = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvCapSwitch'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(capswitch_collision_050033D0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cap_switch_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvBobombAnchorMario = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBobombAnchorMario'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_FLOAT(oParentRelativePosX, 100),
    SET_FLOAT(oParentRelativePosZ, 150),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bobomb_anchor_mario_loop'),
    END_LOOP(),
];

const bhvKingBobomb = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvKingBobomb'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, king_bobomb_seg5_anims_0500FE30),
    SET_INT(oInteractType, INTERACT_GRABBABLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_INT(oIntangibleTimer, 0),
    DROP_TO_FLOOR(),
    SET_HOME(),
    SPAWN_OBJ(/*Model*/ MODEL_NONE, /*Behavior*/ bhvBobombAnchorMario),
    SET_INT(oHealth, 3),
    SET_INT(oDamageOrCoinValue, 1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_king_bobomb_loop'),
    END_LOOP(),
];

const bhvSmallWaterWave398 = [
    ADD_INT(oAnimState, 1),
    ADD_FLOAT(oPosY, 7),
    SET_RANDOM_FLOAT(oWaterObjUnkF4, /*Minimum*/ -2, /*Range*/ 5),
    SET_RANDOM_FLOAT(oWaterObjUnkF8, /*Minimum*/ -2, /*Range*/ 5),
    SUM_FLOAT(/*Dest*/ oPosX, /*Value 1*/ oPosX, /*Value 2*/ oWaterObjUnkF4),
    SUM_FLOAT(/*Dest*/ oPosZ, /*Value 1*/ oPosZ, /*Value 2*/ oWaterObjUnkF8),
    RETURN(),
];

const bhvSmallWaterWave = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallWaterWave'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    CALL_NATIVE('bhv_bubble_wave_init'),
    SET_RANDOM_FLOAT(oWaterObjUnkF4, /*Minimum*/ -50, /*Range*/ 100),
    SET_RANDOM_FLOAT(oWaterObjUnkF8, /*Minimum*/ -50, /*Range*/ 100),
    SUM_FLOAT(/*Dest*/ oPosX, /*Value 1*/ oPosX, /*Value 2*/ oWaterObjUnkF4),
    SUM_FLOAT(/*Dest*/ oPosZ, /*Value 1*/ oPosZ, /*Value 2*/ oWaterObjUnkF8),
    SET_RANDOM_FLOAT(oWaterObjUnkFC, /*Minimum*/ 0, /*Range*/ 50),
    SUM_FLOAT(/*Dest*/ oPosY, /*Value 1*/ oPosY, /*Value 2*/ oWaterObjUnkFC),
    SET_INT(oAnimState, -1),
    CALL(bhvSmallWaterWave398),
    BEGIN_REPEAT(60),
        CALL(bhvSmallWaterWave398),
        CALL_NATIVE('bhv_small_water_wave_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvBubbleParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBubbleParticleSpawner'),
    DISABLE_RENDERING(),
    SET_RANDOM_INT(oWaterObjUnkF4, /*Minimum*/ 2, /*Range*/ 9),
    DELAY_VAR(oWaterObjUnkF4),
    SPAWN_CHILD(/*Model*/ MODEL_BUBBLE, /*Behavior*/ bhvSmallWaterWave),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_BUBBLE),
    DEACTIVATE(),
];

const bhvBubbleMaybe = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    CALL_NATIVE('bhv_bubble_wave_init'),
    SET_RANDOM_FLOAT(oWaterObjUnkF4, /*Minimum*/ -75, /*Range*/ 150),
    SET_RANDOM_FLOAT(oWaterObjUnkF8, /*Minimum*/ -75, /*Range*/ 150),
    SET_RANDOM_FLOAT(oWaterObjUnkFC, /*Minimum*/ -75, /*Range*/ 150),
    SUM_FLOAT(/*Dest*/ oPosX, /*Value 1*/ oPosX, /*Value 2*/ oWaterObjUnkF4),
    SUM_FLOAT(/*Dest*/ oPosZ, /*Value 1*/ oPosZ, /*Value 2*/ oWaterObjUnkF8),
    SUM_FLOAT(/*Dest*/ oPosY, /*Value 1*/ oPosY, /*Value 2*/ oWaterObjUnkFC),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(60),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE('bhv_bubble_maybe_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvWaterAirBubble = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWaterAirBubble'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 400, /*Height*/ 150, /*Downwards offset*/ -150),
    SET_INT(oIntangibleTimer, 0),
    SET_INTERACT_TYPE(INTERACT_WATER_RING),
    SET_INT(oDamageOrCoinValue, 5),
    CALL_NATIVE('bhv_water_air_bubble_init'),
    SET_INT(oAnimState, -1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_air_bubble_loop'),
    END_LOOP(),
];

const bhvSmallParticle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticle'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_particle_init'),
    BEGIN_REPEAT(70),
        CALL_NATIVE('bhv_particle_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvPlungeBubble = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvPlungeBubble'),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_PLUNGE_BUBBLE),
    DISABLE_RENDERING(),
    CALL_NATIVE('bhv_water_waves_init'),
    DEACTIVATE(),
];

const bhvSmallParticleSnow = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticleSnow'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_particle_init'),
    BEGIN_REPEAT(30),
        CALL_NATIVE('bhv_particle_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvSmallParticleBubbles = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticleBubbles'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_particle_init'),
    BEGIN_REPEAT(70),
        CALL_NATIVE('bhv_small_bubbles_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvFishGroup = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFishGroup'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_group_loop'),
    END_LOOP(),
];

const bhvCannonBarrel = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCannonBarrel'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cannon_barrel_loop'),
    END_LOOP(),
];

const bhvCannon = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvCannon'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SPAWN_CHILD(/*Model*/ MODEL_CANNON_BARREL, /*Behavior*/ bhvCannonBarrel),
    SET_INT(oInteractType, INTERACT_CANNON_BASE),
    ADD_FLOAT(oPosY, -340),
    SET_HOME(),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 150),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cannon_base_loop'),
    END_LOOP(),
];

const bhvChuckyaAnchorMario = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvChuckyaAnchorMario'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_FLOAT(oParentRelativePosY, -60),
    SET_FLOAT(oParentRelativePosZ, 150),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_chuckya_anchor_mario_loop'),
    END_LOOP(),
];

const bhvChuckya = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvChuckya'),
    OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, chuckya_seg8_anims_0800C070),
    ANIMATE(5),
    SET_INT(oInteractType, INTERACT_GRABBABLE),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 100),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SPAWN_OBJ(/*Model*/ MODEL_NONE, /*Behavior*/ bhvChuckyaAnchorMario),
    SET_INT(oNumLootCoins, 5),
    SET_INT(oIntangibleTimer, 0),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_chuckya_loop'),
    END_LOOP(),
];

const bhvRotatingPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvRotatingPlatform'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_rotating_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvTower = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTower'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wf_seg7_collision_tower),
    SET_FLOAT(oCollisionDistance, 3000),
    SET_FLOAT(oDrawingDistance, 20000),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvBulletBillCannon = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvBulletBillCannon'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wf_seg7_collision_bullet_bill_cannon),
    SET_FLOAT(oCollisionDistance, 300),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvWFBreakableWallLeft = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvWFBreakableWallLeft'),
    LOAD_COLLISION_DATA(wf_seg7_collision_breakable_wall_2),
    // WF breakable walls - common:
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HITBOX(/*Radius*/ 300, /*Height*/ 400),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wf_breakable_wall_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvWFBreakableWallRight = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvWFBreakableWallRight'),
    LOAD_COLLISION_DATA(wf_seg7_collision_breakable_wall),
    GOTO('bhvWFBreakableWallLeft', 3),
];

const bhvKickableBoard = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvKickableBoard'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(wf_seg7_collision_kickable_board),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 1200),
    SET_HURTBOX(/*Radius*/ 1, /*Height*/ 1),
    SET_FLOAT(oCollisionDistance, 1500),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_kickable_board_loop'),
    END_LOOP(),
];

const bhvTowerDoor = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTowerDoor'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(wf_seg7_collision_tower_door),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tower_door_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvRotatingCounterClockwise = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvRotatingCounterClockwise'),
    BREAK(),
];

const bhvWFRotatingWoodenPlatform = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wf_seg7_collision_clocklike_rotation),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wf_rotating_wooden_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvKoopaShellUnderwater = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvKoopaShellUnderwater'),
    OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO  | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_koopa_shell_underwater_loop'),
    END_LOOP(),
];

const bhvExitPodiumWarp = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_WARP),
    DROP_TO_FLOOR(),
    SET_FLOAT(oCollisionDistance, 8000),
    LOAD_COLLISION_DATA(ttm_seg7_collision_podium_warp),
    SET_INT(oIntangibleTimer, 0),
    SET_HITBOX(/*Radius*/ 50, /*Height*/ 50),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
        SET_INT(oInteractStatus, 0),
    END_LOOP(),
];

const bhvFadingWarp = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvFadingWarp'),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_FADING_WARP),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_WARP),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fading_warp_loop'),
    END_LOOP(),
];

const bhvWarp = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWarp'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_WARP),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_warp_loop'),
    END_LOOP(),
];

const bhvWarpPipe = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvWarpPipe'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_WARP),
    LOAD_COLLISION_DATA(warp_pipe_seg3_collision_03009AC8),
    SET_FLOAT(oDrawingDistance, 16000),
    SET_INT(oIntangibleTimer, 0),
    SET_HITBOX(/*Radius*/ 70, /*Height*/ 50),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_warp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvWhitePuffExplosion = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvWhitePuffExplosion'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_white_puff_exploding_loop'),
    END_LOOP(),
];

const bhvSpawnedStar = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBehParams2ndByte, 1),
    GOTO('bhvSpawnedStarNoLevelExit', 2),
];

const bhvSpawnedStarNoLevelExit = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStarNoLevelExit'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    // Spawned star - common:
    SET_HOME(),
    CALL_NATIVE('bhv_spawned_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_spawned_star_loop'),
    END_LOOP(),
];

const bhvSpawnedBlueCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedBlueCoin'),
    SET_INT(oInteractType, INTERACT_COIN),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oIntangibleTimer, 0),
    SET_FLOAT(oCoinBaseVelY, 20),
    SET_INT(oAnimState, -1),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_spawned_coin_init'),
    SET_INT(oDamageOrCoinValue, 5),
    SET_HITBOX(/*Radius*/ 120, /*Height*/ 64),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_spawned_coin_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
];

const bhvCoinInsideBoo = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvCoinInsideBoo'),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 64),
    SET_INT(oInteractType, INTERACT_COIN),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    BILLBOARD(),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_coin_inside_boo_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
];

const bhvCoinFormationSpawn = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvCoinFormationSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_coin_formation_spawn_loop'),
    END_LOOP(),
];

const bhvCoinFormation = [
    BEGIN(OBJ_LIST_SPAWNER, 'bhvCoinFormation'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO),
    CALL_NATIVE('bhv_coin_formation_loop'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_coin_formation_loop'),
    END_LOOP(),
];

const bhvOneCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvOneCoin'),
    SET_INT(oBehParams2ndByte, 1),
    GOTO('bhvYellowCoin', 1),
];

const bhvYellowCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvYellowCoin'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO),
    CALL_NATIVE('bhv_yellow_coin_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_yellow_coin_loop'),
    END_LOOP(),
];

const bhvTemporaryYellowCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvTemporaryYellowCoin'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_yellow_coin_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_temp_coin_loop'),
    END_LOOP(),
];

const bhvSingleCoinGetsSpawned = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSingleCoinGetsSpawned'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    CALL_NATIVE('bhv_coin_init'),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_coin_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvThreeCoinsSpawn = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvThreeCoinsSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(3),
        SPAWN_CHILD(/*Model*/ MODEL_YELLOW_COIN, /*Behavior*/ bhvSingleCoinGetsSpawned),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvTenCoinsSpawn = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvTenCoinsSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(10),
        SPAWN_CHILD(/*Model*/ MODEL_YELLOW_COIN, /*Behavior*/ bhvSingleCoinGetsSpawned),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvCoinSparkles = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCoinSparkles'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 25),
    ADD_INT(oAnimState, 1),
    BEGIN_REPEAT(8),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    BEGIN_REPEAT(2),
        CALL_NATIVE('bhv_coin_sparkles_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvGoldenCoinSparkles = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvGoldenCoinSparkles'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DISABLE_RENDERING(),
    BEGIN_REPEAT(3),
        CALL_NATIVE('bhv_golden_coin_sparkles_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvWallTinyStarParticle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvWallTinyStarParticle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_REPEAT(10),
    CALL_NATIVE('bhv_wall_tiny_star_particle_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvVertStarParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvVertStarParticleSpawner'),
    DISABLE_RENDERING(),
    CLEAR_BIT_PARENT(oActiveParticleFlags, ACTIVE_PARTICLE_V_STAR),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_tiny_star_particles_init'),
    DELAY(1),
    DEACTIVATE(),
];

const bhvPoundTinyStarParticle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvPoundTinyStarParticle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_REPEAT(10),
        CALL_NATIVE('bhv_pound_tiny_star_particle_loop'),
    END_REPEAT(),
    DEACTIVATE(),
];

const bhvHorStarParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvHorStarParticleSpawner'),
    DISABLE_RENDERING(),
    CLEAR_BIT_PARENT(oActiveParticleFlags, ACTIVE_PARTICLE_H_STAR),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_pound_tiny_star_particle_init'),
    DELAY(1),
    DEACTIVATE(),
];

const bhvPunchTinyTriangle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvPunchTinyTriangle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_punch_tiny_triangle_loop'),
    END_LOOP(),
];

const bhvTriangleParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvTriangleParticleSpawner'),
    DISABLE_RENDERING(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CLEAR_BIT_PARENT(oActiveParticleFlags, ACTIVE_PARTICLE_TRIANGLE),
        CALL_NATIVE('bhv_punch_tiny_triangle_init'),
    DELAY(1),
    DEACTIVATE(),
];

const bhvDoorWarp = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvDoorWarp'),
    SET_INT(oInteractType, INTERACT_WARP_DOOR),
    GOTO('bhvDoor', 2),
];

const bhvDoor = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvDoor'),
    SET_INT(oInteractType, INTERACT_DOOR),
    // Door - common:
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, door_seg3_anims_030156C0),
    ANIMATE(0),
    LOAD_COLLISION_DATA(door_seg3_collision_0301CE78),
    SET_HITBOX(/*Radius*/ 80, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    SET_FLOAT(oCollisionDistance, 1000),
    SET_HOME(),
    CALL_NATIVE('bhv_door_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_door_loop'),
    END_LOOP(),
];

const bhvGrindel = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvGrindel'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(ssl_seg7_collision_grindel),
    DROP_TO_FLOOR(),
    ADD_FLOAT(oPosY, 1),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_grindel_thwomp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvThwomp = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvThwomp'),
    LOAD_COLLISION_DATA(thwomp_seg5_collision_0500B92C),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    ADD_FLOAT(oPosY, 1),
    SET_HOME(),
    SCALE(/*Unused*/ 0, /*Field*/ 140),
    SET_FLOAT(oDrawingDistance, 4000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_grindel_thwomp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvThwomp2 = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvThwomp2'),
    LOAD_COLLISION_DATA(thwomp_seg5_collision_0500B7D0),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    ADD_FLOAT(oPosY, 1),
    SCALE(/*Unused*/ 0, /*Field*/ 140),
    SET_HOME(),
    SET_FLOAT(oDrawingDistance, 4000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_grindel_thwomp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvTumblingBridgePlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTumblingBridgePlatform'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_FLOAT(oCollisionDistance, 300),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tumbling_bridge_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
];

const bhvTumblingBridge = [
    BEGIN(OBJ_LIST_SPAWNER, 'bhvTumblingBridge'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tumbling_bridge_loop'),
    END_LOOP(),
];

const bhvBbhTumblingBridge = [
    BEGIN(OBJ_LIST_SPAWNER, 'bhvBbhTumblingBridge'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oBehParams2ndByte, 1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tumbling_bridge_loop'),
    END_LOOP(),
];

const bhvLLLTumblingBridge = [
    BEGIN(OBJ_LIST_SPAWNER, 'bhvLLLTumblingBridge'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oBehParams2ndByte, 2),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tumbling_bridge_loop'),
    END_LOOP(),
];

const bhvFlame = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvFlame'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HOME(),
    SCALE(/*Unused*/ 0, /*Field*/ 700),
    SET_INTERACT_TYPE(INTERACT_FLAME),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 50, /*Height*/ 25, /*Downwards offset*/ 25),
    SET_INT(oIntangibleTimer, 0),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        SET_INT(oInteractStatus, 0),
        ANIMATE_TEXTURE(oAnimState, 2),
    END_LOOP(),
];

const bhvAnotherElavator = [ 
    BEGIN(OBJ_LIST_SURFACE, 'bhvAnotherElavator'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(hmc_seg7_collision_elevator),
    SET_HOME(),
    CALL_NATIVE('bhv_elevator_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_elevator_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvRRElevatorPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvRRElevatorPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(rr_seg7_collision_elevator_platform),
    SET_HOME(),
    CALL_NATIVE('bhv_elevator_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_elevator_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvHMCElevatorPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvHMCElevatorPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(hmc_seg7_collision_elevator),
    SET_HOME(),
    CALL_NATIVE('bhv_elevator_init'),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_elevator_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvMario = [
    BEGIN(OBJ_LIST_PLAYER, 'bhvMario'),
    SET_INT(oIntangibleTimer, 0),
    OR_INT(oFlags, OBJ_FLAG_0100),
    OR_INT(oUnk94, 0x0001),
    SET_HITBOX(/*Radius*/ 37, /*Height*/ 160),
    BEGIN_LOOP(),
        // CALL_NATIVE(try_print_debug_mario_level_info),
        CALL_NATIVE('ObjectListProcessor.bhv_mario_update'),
        // CALL_NATIVE(try_do_mario_debug_object_spawn),
    END_LOOP(),
]

const bhvTree = [
    BEGIN(OBJ_LIST_POLELIKE, 'bhvTree'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oInteractType, INTERACT_POLE),
    SET_HITBOX(/*Radius*/ 80, /*Height*/ 500),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_pole_base_loop'),
    END_LOOP(),
]

const bhvSparkleParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvSparkleParticleSpawner'),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_SPARKLES),
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSparkleParticleSpawner'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oGraphYOffset, 25),
    SET_RANDOM_FLOAT(oMarioParticleFlags, /*Minimum*/ -50, /*Range*/ 100),
    SUM_FLOAT(/*Dest*/ oPosX, /*Value 1*/ oPosX, /*Value 2*/ oMarioParticleFlags),
    SET_RANDOM_FLOAT(oMarioParticleFlags, /*Minimum*/ -50, /*Range*/ 100),
    SUM_FLOAT(/*Dest*/ oPosZ, /*Value 1*/ oPosZ, /*Value 2*/ oMarioParticleFlags),
    SET_RANDOM_FLOAT(oMarioParticleFlags, /*Minimum*/ -50, /*Range*/ 100),
    SUM_FLOAT(/*Dest*/ oPosY, /*Value 1*/ oPosY, /*Value 2*/ oMarioParticleFlags),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(12),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

const bhvYellowBall = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvYellowBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CYLBOARD(),
    BREAK(),
]

const bhvStaticObject = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvStaticObject'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BREAK(),
]

const bhvCastleFloorTrap = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCastleFloorTrap'),
    DISABLE_RENDERING(),
    CALL_NATIVE('bhv_castle_floor_trap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_castle_floor_trap_loop'),
    END_LOOP(),
]

const bhvFloorTrapInCastle = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvFloorTrapInCastle'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(inside_castle_seg7_collision_floor_trap),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_floor_trap_in_castle_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvCastleFlagWaving = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCastleFlagWaving'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_ANIMATIONS(oAnimations, castle_grounds_seg7_anims_flags),
    ANIMATE(0),
    CALL_NATIVE('bhv_castle_flag_init'),
    BEGIN_LOOP(),
    END_LOOP(),
]

export const bhvCheckerboardPlatformSub = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvCheckerboardPlatformSub'),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO)),
    LOAD_COLLISION_DATA(checkerboard_platform_seg8_collision_0800D710),
    CALL_NATIVE('bhv_checkerboard_platform_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_checkerboard_platform_loop'),
    END_LOOP(),
]

const bhvCheckerboardElevatorGroup = [
    BEGIN(OBJ_LIST_SPAWNER, 'bhvCheckerboardElevatorGroup'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_checkerboard_elevator_group_init'),
    SET_HOME(),
    DELAY(1),
    DEACTIVATE(),
]

const bhvMoatGrills = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvMoatGrills'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_moat_grills),
    SET_FLOAT(oCollisionDistance, 30000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_moat_grills_loop'),
    END_LOOP(),
]

const bhvPlatformOnTrack = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvPlatformOnTrack'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 50, /*Gravity*/ -100, /*Bounciness*/ -50, /*Drag strength*/ 100, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_platform_on_track_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_platform_on_track_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvDirtParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvDirtParticleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_ground_sand_init'),
    DELAY(1),
    DEACTIVATE(),
]

export const bhvCloud = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCloud'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HOME(),
    SET_INT(oOpacity, 240),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cloud_update'),
    END_LOOP(),
]

const bhvCameraLakitu = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCameraLakitu'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, lakitu_seg6_anims_060058F8),
    ANIMATE(0),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_camera_lakitu_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_camera_lakitu_update'),
    END_LOOP(),
]

export const bhvTrackBall = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTrackBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    CALL_NATIVE('bhv_init_room'),
    SCALE(/*Unused*/ 0, /*Field*/ 15),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_track_ball_update'),
    END_LOOP(),
]

const bhvSeesawPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSeesawPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_seesaw_platform_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_seesaw_platform_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvFerrisWheelAxle = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvFerrisWheelAxle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    ADD_INT(oMoveAngleYaw, 0x4000),
    CALL_NATIVE('bhv_ferris_wheel_axle_init'),
    BEGIN_LOOP(),
        ADD_INT(oFaceAngleRoll, 400),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvFerrisWheelPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvFerrisWheelPlatform'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_ferris_wheel_platform_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvWaterBombSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBombSpawner'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_spawner_update'),
    END_LOOP(),
]

const bhvWaterBomb = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBomb'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 120, /*Gravity*/ -400, /*Bounciness*/ 0, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_update'),
    END_LOOP(),
]

const bhvWaterBombShadow = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBombShadow'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SCALE(/*Unused*/ 0, /*Field*/ 150),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_shadow_update'),
    END_LOOP(),
]

export const bhvRespawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvRespawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_respawner_loop'),
    END_LOOP(),
]

export const bhvSmallBully = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvSmallBully'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bully_seg5_anims_0500470C),
    DROP_TO_FLOOR(),
    SET_HOME(),
    CALL_NATIVE('bhv_small_bully_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_bully_loop'),
    END_LOOP(),
]

const bhvBigBully = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBigBully'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bully_seg5_anims_0500470C),
    DROP_TO_FLOOR(),
    SET_HOME(),
    CALL_NATIVE('bhv_big_bully_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_bully_loop'),
    END_LOOP(),
]

const bhvBigBullyWithMinions = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBigBullyWithMinions'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bully_seg5_anims_0500470C),
    SET_HOME(),
    CALL_NATIVE('bhv_big_bully_init'),
    CALL_NATIVE('bhv_big_bully_with_minions_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_big_bully_with_minions_loop'),
    END_LOOP(),
]

/*const bhvBigChillBully = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBigChillBully'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, chilly_chief_seg6_anims_06003994),
    DROP_TO_FLOOR(),
    SET_HOME(),
    SET_INT(oBullySubtype, 0x0010),
    CALL_NATIVE('bhv_big_bully_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_bully_loop'),
    END_LOOP(),
]*/

export const bhvGoomba = [
    BEGIN(OBJ_LIST_PUSHABLE, 'bhvGoomba'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO)),
    DROP_TO_FLOOR(),
    LOAD_ANIMATIONS(oAnimations, goomba_seg8_anims_0801DA4C),
    SET_HOME(),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 40, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strenth*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 0, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_goomba_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_goomba_update'),
    END_LOOP(),
]

const bhvGoombaTripletSpawner = [
    BEGIN(OBJ_LIST_PUSHABLE, 'bhvGoombaTripletSpawner'),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_goomba_triplet_spawner_update'),
    END_LOOP(),
]

const bhvBobomb = [
    BEGIN(OBJ_LIST_DESTRUCTIVE, 'bhvBobomb'),
    OR_INT(oFlags, (OBJ_FLAG_PERSISTENT_RESPAWN | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bobomb_seg8_anims_0802396C),
    DROP_TO_FLOOR(),
    ANIMATE(0),
    SET_INT(oIntangibleTimer, 0),
    SET_HOME(),
    CALL_NATIVE('bhv_bobomb_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bobomb_loop'),
    END_LOOP(),
]

const bhvBobombFuseSmoke = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBobombFuseSmoke'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oAnimState, -1),
    CALL_NATIVE('bhv_bobomb_fuse_smoke_init'),
    DELAY(1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_dust_smoke_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvExplosion = [
    BEGIN(OBJ_LIST_DESTRUCTIVE, 'bhvExplosion'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_INTERACT_TYPE(INTERACT_DAMAGE),
    SET_INT(oDamageOrCoinValue, 2),
    SET_INT(oIntangibleTimer, 0),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 150, /*Height*/ 150, /*Downwards offset*/ 150),
    SET_INT(oAnimState, -1),
    CALL_NATIVE('bhv_explosion_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_explosion_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvBobombBuddy = [
    BEGIN(OBJ_LIST_GENACTOR, "bhvBobombBuddy"),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bobomb_seg8_anims_0802396C),
    SET_INTERACT_TYPE(INTERACT_TEXT),
    DROP_TO_FLOOR(),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 60),
    ANIMATE(0),
    SET_INT(oBobombBuddyRole, 0),
    SET_HOME(),
    CALL_NATIVE('bhv_bobomb_buddy_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_bobomb_buddy_loop'),
    END_LOOP(),
]

// The only difference between this and the previous behavior are what oFlags and oBobombBuddyRole are set to, why didn't they just use a jump?
const bhvBobombBuddyOpensCannon = [
    BEGIN(OBJ_LIST_GENACTOR, "bhvBobombBuddyOpensCannon"),
    OR_INT(oFlags, (OBJ_FLAG_PERSISTENT_RESPAWN | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bobomb_seg8_anims_0802396C),
    SET_INTERACT_TYPE(INTERACT_TEXT),
    DROP_TO_FLOOR(),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 60),
    ANIMATE(0),
    SET_INT(oBobombBuddyRole, 1),
    SET_HOME(),
    CALL_NATIVE('bhv_bobomb_buddy_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_bobomb_buddy_loop'),
    END_LOOP(),
]

const bhvCannonClosed = [
    BEGIN(OBJ_LIST_SURFACE, "bhvCannonClosed"),
    OR_INT(oFlags, (OBJ_FLAG_PERSISTENT_RESPAWN | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(cannon_lid_seg8_collision_08004950),
    SET_HOME(),
    CALL_NATIVE('bhv_cannon_closed_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cannon_closed_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

// const bhvWhirlpool = [

// const bhvJetStream = [

const bhvMessagePanel = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvMessagePanel'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wooden_signpost_seg3_collision_0302DD80),
    SET_FLOAT(oCollisionDistance, 150),  // oCollisionDistance = 150.0 from BehaviorCommands.
    SET_INTERACT_TYPE(INTERACT_TEXT),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_SIGN),
    DROP_TO_FLOOR(),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 80),
    SET_INT(oWoodenPostTotalMarioAngle, 0),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
        SET_INT(oInteractStatus, 0),
    END_LOOP(),
]

const bhvSignOnWall = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSignOnWall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wooden_signpost_seg3_collision_0302DD80),
    SET_INTERACT_TYPE(INTERACT_TEXT),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_SIGN),
    DROP_TO_FLOOR(),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 80),
    SET_INT(oWoodenPostTotalMarioAngle, 0),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        SET_INT(oInteractStatus, 0),
    END_LOOP(),
]

export const bhvBobombBullyDeathSmoke = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvBobombBullyDeathSmoke'),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL | OBJ_FLAG_MOVE_XZ_USING_FVEL)),
    BILLBOARD(),
    ADD_INT(oAnimState, 1),
    CALL_NATIVE('bhv_bobomb_bully_death_smoke_init'),
    DELAY(1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_dust_smoke_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

export const bhvWoodenPost = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvWoodenPost'),
    LOAD_COLLISION_DATA(poundable_pole_collision_06002490),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_INT(oNumLootCoins, 5),
    DROP_TO_FLOOR(),
    SET_HOME(),
    SCALE(/*Unused*/ 0, /*Field*/ 50),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wooden_post_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvChainChomp = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvChainChomp'),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_ACTIVE_FROM_AFAR)),
    DROP_TO_FLOOR(),
    LOAD_ANIMATIONS(oAnimations, chain_chomp_seg6_anims_06025178),
    ANIMATE(0),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 0, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    HIDE(),
    SET_HOME(),
    SET_FLOAT(oGraphYOffset, 240),
    SCALE(/*Unused*/ 0, /*Field*/ 200),
    SPAWN_CHILD_WITH_PARAM(/*Bhv param*/ 0, /*Model*/ MODEL_WOODEN_POST, /*Behavior*/ bhvWoodenPost),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_chain_chomp_update'),
    END_LOOP(),
]

export const bhvChainChompChainPart = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvChainChompChainPart'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_FLOAT(oGraphYOffset, 40),
    SCALE(/*Unused*/ 0, /*Field*/ 200),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_chain_chomp_chain_part_update'),
    END_LOOP(),
]

const bhvChainChompGate = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvChainChompGate'),
    LOAD_COLLISION_DATA(bob_seg7_collision_chain_chomp_gate),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_chain_chomp_gate_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_chain_chomp_gate_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvWhitePuff1 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWhitePuff1'),
    CLEAR_BIT_PARENT(oActiveParticleFlags, ACTIVE_PARTICLE_DUST),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_white_puff_1_loop'),
    END_LOOP(),
]

const bhvWhitePuff2 = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvWhitePuff2'),
    OR_INT(oFlags, (OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_MOVE_XZ_USING_FVEL)),
    BILLBOARD(),
    ADD_INT(oAnimState, 1),
    BEGIN_REPEAT(7),
        CALL_NATIVE('bhv_white_puff_2_loop'),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

const bhvBreakBoxTriangle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvBreakBoxTriangle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(18),
        CALL_NATIVE('cur_obj_rotate_face_angle_using_vel'),
        CALL_NATIVE('cur_obj_move_using_fvel_and_gravity'),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvWaterMist = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvWaterMist'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oOpacity, 254),
    SET_FLOAT(oForwardVel, 20),
    SET_FLOAT(oVelY, -8),
    ADD_FLOAT(oPosY, 62),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_mist_loop'),
    END_LOOP(),
]

const bhvBreathParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBreathParticleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(8),
        CALL_NATIVE('bhv_water_mist_spawn_loop'),
    END_REPEAT(),
    DEACTIVATE(),
]

const bhvWaterMist2 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterMist2'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oFaceAnglePitch, 0xC000),
    SCALE(/*Unused*/ 0, /*Field*/ 2100),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_mist_2_loop'),
    END_LOOP(),
]

export const bhvMistParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvMistParticleSpawner'),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_DUST),
    DISABLE_RENDERING(),
    SPAWN_CHILD(/*Model*/ MODEL_MIST,  /*Behavior*/ bhvWhitePuff1),
    SPAWN_CHILD(/*Model*/ MODEL_SMOKE, /*Behavior*/ bhvWhitePuff2),
    DELAY(1),
    DEACTIVATE(),
]

const bhvSnowParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvSnowParticleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_ground_snow_init'),
    DELAY(1),
    DEACTIVATE(),
]

const bhvMistCircParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvMistCircParticleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
        CALL_NATIVE('bhv_pound_white_puffs_init'),
    DELAY(1),
    DEACTIVATE(),
]

export const bhvMrIBlueCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMrIBlueCoin'),
    SET_INT(oInteractType, INTERACT_COIN),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oIntangibleTimer, 0),
    SET_FLOAT(oCoinBaseVelY, 20),
    SET_INT(oAnimState, -1),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_coin_init'),
    SET_INT(oDamageOrCoinValue, 5),
    SET_HITBOX(/*Radius*/ 120, /*Height*/ 64),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_coin_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvTiltingBowserLavaPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvTiltingBowserPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(bowser_2_seg7_collision_tilting_platform),
    //SET_FLOAT(oDrawingDistance, 20000),
    SET_FLOAT(oCollisionDistance, 20000),
    SET_INT(oFaceAngleYaw, 0),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('cur_obj_rotate_face_angle_using_vel'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvFish = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFish'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_loop'),
    END_LOOP(),
]

const bhvFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFishSpawner'),
    // Fish Spawner - common
    DISABLE_RENDERING(),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_spawner_loop'),
    END_LOOP(),
]

const bhvManyBlueFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvManyBlueFishSpawner'),
    SET_INT(oBehParams2ndByte, 0),
    // GOTO(bhvFishSpawner + 1)
    DISABLE_RENDERING(),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_spawner_loop'),
    END_LOOP(),
]

const bhvHomingAmp = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvHomingAmp'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, amp_seg8_anims_08004034),
    ANIMATE(0),
    SET_FLOAT(oGraphYOffset, 40),
    SET_INT(oIntangibleTimer, 0),
    CALL_NATIVE('bhv_homing_amp_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_homing_amp_loop'),
    END_LOOP(),
]

const bhvCirclingAmp = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvCirclingAmp'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, amp_seg8_anims_08004034),
    ANIMATE(0),
    SET_FLOAT(oGraphYOffset, 40),
    SET_INT(oIntangibleTimer, 0),
    CALL_NATIVE('bhv_circling_amp_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_circling_amp_loop'),
    END_LOOP(),
]

const bhvButterfly = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvButterfly'),
    OR_INT(oFlags, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_ANIMATIONS(oAnimations, butterfly_seg3_anims_030056B0),
    DROP_TO_FLOOR(),
    SET_FLOAT(oGraphYOffset, 5),
    CALL_NATIVE('bhv_butterfly_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_butterfly_loop'),
    END_LOOP(),
]

const bhvCarrySomething1 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething1'),
    BREAK(),
]

const bhvCarrySomething2 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething2'),
    BREAK(),
]

const bhvCarrySomething3 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething3'),
    BREAK(),
]

const bhvCarrySomething4 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething4'),
    BREAK(),
]

const bhvCarrySomething5 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething5'),
    BREAK(),
]

const bhvCarrySomething6 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething6'),
    BREAK(),
]

const bhvSlidingPlatform2 = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSlidingPlatform2'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    CALL_NATIVE('bhv_sliding_plat_2_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_sliding_plat_2_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvBird = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBird'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, birds_seg5_anims_050009E8),
    ANIMATE(0),
    HIDE(),
    SCALE(/*Unused*/ 0, /*Field*/ 70),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bird_update'),
    END_LOOP(),
]

// The large splash Mario makes when he jumps into a pool of water.
const bhvWaterSplash = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterSplash'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(3),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE('bhv_water_splash_spawn_droplets'),
        DELAY(1),
        CALL_NATIVE('bhv_water_splash_spawn_droplets'),
    END_REPEAT(),
    BEGIN_REPEAT(5),
        ADD_INT(oAnimState, 1),
        DELAY(1),
    END_REPEAT(),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_WATER_SPLASH),
    DEACTIVATE(),
]

// Droplets of water that spawn as a result of various water splashes.
export const bhvWaterDroplet = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvWaterDroplet'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_droplet_loop'),
    END_LOOP(),
]

// Small splashes that are seen when a water droplet lands back into the water.
export const bhvWaterDropletSplash = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterDropletSplash'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    CALL_NATIVE('bhv_water_droplet_splash_init'),
    ADD_FLOAT(oPosY, 5),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(6),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

// The splash created when an air bubble hits the surface of the water.
const bhvBubbleSplash = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBubbleSplash'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    CALL_NATIVE('bhv_bubble_splash_init'),
    BEGIN_REPEAT(6),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

// The water wave surrounding Mario when he is idle in a pool of water.
const bhvIdleWaterWave = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvIdleWaterWave'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    ADD_INT(oAnimState, 1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_idle_water_wave_loop'),
        ADD_INT(oAnimState, 1),
        BEGIN_REPEAT(6),
            CALL_NATIVE('bhv_idle_water_wave_loop'),
        END_REPEAT(),
        CALL_NATIVE('bhv_idle_water_wave_loop'),
    END_LOOP(),
]

// Water splashes similar to the splashes created by water droplets, but are created by other objects.
// Unlike water droplet splashes, they are unimportant objects.
const bhvObjectWaterSplash = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvObjectWaterSplash'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(6),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

// Waves that are generated when running in shallow water.
const bhvShallowWaterWave = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvShallowWaterWave'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DISABLE_RENDERING(),
    BEGIN_REPEAT(5),
        SPAWN_WATER_DROPLET('gShallowWaterWaveDropletParams'),
    END_REPEAT_CONTINUE(),
    DELAY(1),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE),
    DEACTIVATE(),
]

// A small water splash that occurs when jumping in and out of shallow water.
// Unlike the larger water splash it has no visible model of its own.
// It has a 1 in 256 chance of spawning the fish particle easter egg.
const bhvShallowWaterSplash = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvShallowWaterSplash'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DISABLE_RENDERING(),
    BEGIN_REPEAT(18),
        SPAWN_WATER_DROPLET('gShallowWaterSplashDropletParams'),
    END_REPEAT_CONTINUE(),
    CALL_NATIVE('bhv_shallow_water_splash_init'),
    DELAY(1),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH),
    DEACTIVATE(),
]

// Waves created by other objects along the water's surface, specifically the koopa shell and Sushi.
// Unlike Mario's waves, they are unimportant objects.
const bhvObjectWaveTrail = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvObjectWaveTrail'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    GOTO('bhvWaveTrail', 3), // Wave trail - common
]

// The waves created by Mario while he is swimming.
const bhvWaveTrail = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaveTrail'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_WAVE_TRAIL),
    // Wave trail - common:
    SET_FLOAT(oFaceAnglePitch, 0),
    SET_FLOAT(oFaceAngleYaw, 0),
    SET_FLOAT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(8),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE('bhv_wave_trail_shrink'),
        DELAY(1),
        CALL_NATIVE('bhv_wave_trail_shrink'),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvGhostHuntBigBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvCoinInsideBoo'),
    // Big boo - common:
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_boo_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_big_boo_loop'),
    END_LOOP(),
]

const bhvBooInCastle = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBooInCastle'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_FLOAT(oGraphYOffset, 60),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_boo_in_castle_loop'),
    END_LOOP(),
]

const bhvBooWithCage = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBooWithCage'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oDamageOrCoinValue, 3),
    SET_HURTBOX(/*Radius*/ 80, /*Height*/ 120),
    SET_HITBOX(/*Radius*/ 180, /*Height*/ 140),
    SET_FLOAT(oGraphYOffset, 60),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_boo_with_cage_init'),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_boo_with_cage_loop'),
    END_LOOP(),
]

export const bhvBalconyBigBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBalconyBigBoo'),
    SET_INT(oBehParams2ndByte, 2),
    SET_INT(oBigBooNumMinionBoosKilled, 10),
    GOTO('bhvGhostHuntBigBoo', 1),
]

export const bhvMerryGoRoundBigBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvMerryGoRoundBigBoo'),
    SET_INT(oBehParams2ndByte, 1),
    // Set number of minion boos killed to 10, which is greater than 5 so that the boo always loads without needing to kill any boos.
    SET_INT(oBigBooNumMinionBoosKilled, 10),
    GOTO('bhvGhostHuntBigBoo', 1),
]

const bhvCourtyardBooTriplet = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCourtyardBooTriplet'),
    DISABLE_RENDERING(),
    CALL_NATIVE('bhv_courtyard_boo_triplet_init'),
    DEACTIVATE(),
]

export const bhvBooCage = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBooCage'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_FLOAT(oGraphYOffset, 10),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 0, /*Friction*/ 0, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_boo_cage_loop'),
    END_LOOP(),
]

export const bhvGhostHuntBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvGhostHuntBoo'),
    // Boo - common:
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oIntangibleTimer, 0),
    SET_HOME(),
    SET_INT(oDamageOrCoinValue, 2),
    SET_HITBOX(/*Radius*/ 140, /*Height*/ 80),
    SET_HURTBOX(/*Radius*/ 40, /*Height*/ 60),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_init_room'),
    SPAWN_CHILD(/*Model*/ MODEL_YELLOW_COIN, /*Behavior*/ bhvCoinInsideBoo),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    CALL_NATIVE('bhv_boo_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_boo_loop'),
    END_LOOP(),
]

export const bhvMerryGoRoundBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvMerryGoRoundBoo'),
    SET_INT(oBehParams2ndByte, 2),
    GOTO('bhvGhostHuntBoo', 1),
]

export const bhvBoo = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBoo'),
    SET_INT(oBehParams2ndByte, 1),
    GOTO('bhvGhostHuntBoo', 1),
]

export const bhvMerryGoRoundBooManager = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvMerryGoRoundBooManager'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_merry_go_round_boo_manager_loop'),
    END_LOOP(),
]

const bhvHiddenAt120Stars = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvHiddenAt120Stars'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_cannon_grill),
    SET_FLOAT(oCollisionDistance, 4000),
    CALL_NATIVE('bhv_castle_cannon_grate_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvWingCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWingCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_wing_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wing_vanish_cap_loop'),
    END_LOOP(),
]

const bhvMetalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMetalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_metal_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_metal_cap_loop'),
    END_LOOP(),
]

const bhvNormalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvNormalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_normal_cap_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_normal_cap_loop'),
    END_LOOP(),
]

const bhvVanishCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvVanishCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_vanish_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wing_vanish_cap_loop'),
    END_LOOP(),
]

const bhvStar = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvStar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_collect_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_collect_star_loop'),
    END_LOOP(),
]

export const bhvStarSpawnCoordinates = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvStarSpawnCoordinates'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_collect_star_init'),
    CALL_NATIVE('bhv_star_spawn_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_star_spawn_loop'),
    END_LOOP(),
]

const bhvRedCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvRedCoin'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oIntangibleTimer, 0),
    SET_INT(oAnimState, -1),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_red_coin_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_red_coin_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhv1upWalking = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upWalking'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_walking_loop'),
    END_LOOP(),
]

const bhv1upRunningAway = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upRunningAway'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_running_away_loop'),
    END_LOOP(),
]

const bhv1upSliding = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upSliding'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_1up_sliding_loop'),
    END_LOOP(),
]

const bhv1Up = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1Up'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_1up_loop'),
    END_LOOP(),
]

const bhv1upJumpOnApproach = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upJumpOnApproach'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_1up_jump_on_approach_loop'),
    END_LOOP(),
]

const bhvHidden1up = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1up'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_1up_hidden_loop'),
    END_LOOP(),
]

const bhvHidden1upTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_trigger_loop'),
    END_LOOP(),
]

const bhvHidden1upInPole = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPole'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE('bhv_1up_common_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_1up_hidden_in_pole_loop'),
    END_LOOP(),
]

const bhvHidden1upInPoleTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_in_pole_trigger_loop'),
    END_LOOP(),
]

const bhvHidden1upInPoleSpawner = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_in_pole_spawner_loop'),
    END_LOOP(),
]

export const bhvMovingYellowCoin = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMovingYellowCoin'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 64),
    SET_INT(oInteractType, INTERACT_COIN),
    SET_INT(oIntangibleTimer, 0),
    SET_INT(oAnimState, -1),
    CALL_NATIVE('bhv_moving_yellow_coin_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_moving_yellow_coin_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),

]

const bhvBowser = [
    BEGIN(OBJ_LIST_GENACTOR, "bhvBowser"),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_GRABBABLE),
    SET_HITBOX(/*Radius*/ 400, /*Height*/ 400),
    DROP_TO_FLOOR(),
    SET_HOME(),
    LOAD_ANIMATIONS(oAnimations, bowser_seg6_anims_06057690),
    //SPAWN_CHILD(/*Model*/ MODEL_NONE, /*Behavior*/ 'bhvBowserBodyAnchor'),
    //SPAWN_CHILD(/*Model*/ MODEL_BOWSER_BOMB_CHILD_OBJ, /*Behavior*/ 'bhvBowserFlameSpawn'),
    //SPAWN_OBJ(/*Model*/ MODEL_NONE, /*Behavior*/ 'bhvBowserTailAnchor'), Uncaught unlinked spawn_obj behavior: bhvBowserTailAnchor
    SET_INT(oNumLootCoins, 50),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_HOME(),
    //CALL_NATIVE('bhv_bowser_init'), Uncaught deferred native function not found: bhv_bowser_init | sorry Bowser but I gotta cripple you because I am limitted to the technology of my time.
    BEGIN_LOOP(),
        //CALL_NATIVE('bhv_bowser_loop'),
    END_LOOP(),
]

const bhvBowserBodyAnchor = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBowserBodyAnchor'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 300),
    SET_INTERACT_TYPE(INTERACT_DAMAGE),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_BIG_KNOCKBACK),
    DISABLE_RENDERING(),
    SET_INT(oDamageOrCoinValue, 2),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowser_body_anchor_loop'),
    END_LOOP(),
]

const bhvBowserFlameSpawn = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBowserFlameSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_MODEL(MODEL_NONE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowser_flame_spawn_loop'),
    END_LOOP(),
]

const bhvExclamationBox = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvExclamationBox'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(exclamation_box_outline_seg8_collision_08025F78),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oCollisionDistance, 300),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_exclamation_box_loop'),
    END_LOOP(),
]

const bhvRotatingExclamationMark = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvRotatingExclamationMark'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SCALE(/*Unused*/ 0, /*Field*/ 200),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_rotating_exclamation_box_loop'),
        ADD_INT(oMoveAngleYaw, 0x800),
    END_LOOP(),
]

export const bhvSoundSpawner = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSoundSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DELAY(3),
    CALL_NATIVE('bhv_sound_spawner_init'),
    DELAY(30),
    DEACTIVATE(),
]

// const bhvMips = [
//     BEGIN(OBJ_LIST_GENACTOR, 'bhvMips'),
//     OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     LOAD_ANIMATIONS(oAnimations, mips_seg6_anims_06015634),
//     SET_INT(oInteractType, INTERACT_GRABBABLE),
//     DROP_TO_FLOOR(),
//     SET_HITBOX(/*Radius*/ 50, /*Height*/ 75),
//     SET_INT(oIntangibleTimer, 0),
//     CALL_NATIVE('bhv_mips_init'),
//     BEGIN_LOOP(),
//         CALL_NATIVE('bhv_mips_loop'),
//     END_LOOP(),
// ]

const bhvYellowBackgroundInMenu = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvYellowBackgroundInMenu'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('beh_yellow_background_menu_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('beh_yellow_background_menu_loop'),
    END_LOOP(),
]

const bhvYoshi = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvYoshi'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, yoshi_seg5_anims_05024100),
    SET_INTERACT_TYPE(INTERACT_TEXT),
    DROP_TO_FLOOR(),
    SET_HITBOX(/*Radius*/ 160, /*Height*/ 150),
    ANIMATE(0),
    SET_HOME(),
    CALL_NATIVE('bhv_yoshi_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_yoshi_loop'),
    END_LOOP(),
]

// const bhvKoopa = [
//     BEGIN(OBJ_LIST_PUSHABLE, 'bhvKoopa'),
//     OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     DROP_TO_FLOOR(),
//     LOAD_ANIMATIONS(oAnimations, koopa_seg6_anims_06011364),
//     ANIMATE(9),
//     SET_HOME(),
//     SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 50, /*Gravity*/ -400, /*Bounciness*/ 0, /*Drag strength*/ 0, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
//     SCALE(/*Unused*/ 0, /*Field*/ 150),
//     SET_FLOAT(oKoopaAgility, 1),
//     CALL_NATIVE('bhv_koopa_init'),
//     BEGIN_LOOP(),
//         CALL_NATIVE('bhv_koopa_update'),
//     END_LOOP(),
// ]

// const bhvKoopaRaceEndpoint = [
//     BEGIN(OBJ_LIST_DEFAULT, 'bhvKoopaRaceEndpoint'),
//     OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     DROP_TO_FLOOR(),
//     SPAWN_CHILD_WITH_PARAM(/*Bhv param*/ 0, /*Model*/ MODEL_KOOPA_FLAG, /*Behavior*/ bhvKoopaFlag),
//     BEGIN_LOOP(),
//         CALL_NATIVE('bhv_koopa_race_endpoint_update'),
//     END_LOOP(),
// ]

// const bhvKoopaFlag = [
//     BEGIN(OBJ_LIST_POLELIKE, 'bhvKoopaFlag'),
//     SET_INTERACT_TYPE(INTERACT_POLE),
//     SET_HITBOX(/*Radius*/ 80, /*Height*/ 700),
//     SET_INT(oIntangibleTimer, 0),
//     OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
//     DROP_TO_FLOOR(),
//     LOAD_ANIMATIONS(oAnimations, koopa_flag_seg6_anims_06001028),
//     ANIMATE(0),
//     BEGIN_LOOP(),
//         CALL_NATIVE('bhv_pole_base_loop'),
//     END_LOOP(),
// ]

const bhvWaterBombCannon = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterBombCannon'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_cannon_loop'),
    END_LOOP(),
]

const bhvAnimatesOnFloorSwitchPress = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvAnimatesOnFloorSwitchPress'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_FLOAT(oCollisionDistance, 8000),
    CALL_NATIVE('bhv_animates_on_floor_switch_press_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_animates_on_floor_switch_press_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvActivatedBackAndForthPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvActivatedBackAndForthPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    CALL_NATIVE('bhv_activated_back_and_forth_platform_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_activated_back_and_forth_platform_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvRecoveryHeart = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvRecoveryHeart'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_recovery_heart_loop'),
    END_LOOP(),
]

const bhvCannonBarrelBubbles = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCannonBarrelBubbles'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bubble_cannon_barrel_loop'),
    END_LOOP(),
]

const bhvCelebrationStar = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvCelebrationStar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_celebration_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_celebration_star_loop'),
    END_LOOP(),
]

const bhvCelebrationStarSparkle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvCelebrationStarSparkle'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oGraphYOffset, 25),
    SET_INT(oAnimState, -1),
    BEGIN_LOOP(),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE('bhv_celebration_star_sparkle_loop'),
    END_LOOP(),
]

const bhvStarKeyCollectionPuffSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvStarKeyCollectionPuffSpawner'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oAnimState, -1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_star_key_collection_puff_spawner_loop'),
    END_LOOP(),
]

const bhvPitBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvPitBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_bob_pit_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bob_pit_bowling_ball_loop'),
    END_LOOP(),
]

const bhvFreeBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvFreeBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_free_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_free_bowling_ball_loop'),
    END_LOOP(),
]

const bhvBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowling_ball_loop'),
    END_LOOP(),
]

const bhvTtmBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvTtmBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBBallSpawnerPeriodMinus1, 63),
    CALL_NATIVE('bhv_generic_bowling_ball_spawner_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_generic_bowling_ball_spawner_loop'),
    END_LOOP(),
]

const bhvBobBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBobBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBBallSpawnerPeriodMinus1, 127),
    CALL_NATIVE('bhv_generic_bowling_ball_spawner_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_generic_bowling_ball_spawner_loop'),
    END_LOOP(),
]

const bhvTHIBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvTHIBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_thi_bowling_ball_spawner_loop'),
    END_LOOP(),
]

const bhvFloorSwitchHardcodedModel = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvFloorSwitchHardcodedModel'),
    // Floor switch - common:
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(purple_switch_seg8_collision_0800C7A8),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_purple_switch_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvFloorSwitchAnimatesObject = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvFloorSwitchAnimatesObject'),
    SET_INT(oBehParams2ndByte, 1),
    GOTO('bhvFloorSwitchHardcodedModel', 1),
]

const bhvBreakableBox = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvBreakableBox'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(breakable_box_seg8_collision_08012D70),
    SET_FLOAT(oCollisionDistance, 500),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_breakable_box_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
    BREAK(),
]

const bhvBreakableBoxSmall = [
    BEGIN(OBJ_LIST_DESTRUCTIVE, 'bhvBreakableBoxSmall'),
    OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    SET_HOME(),
    CALL_NATIVE('bhv_breakable_box_small_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_breakable_box_small_loop'),
    END_LOOP(),
]

const bhvBitfsSinkingPlatforms = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvBitfsSinkingPlatforms'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bitfs_seg7_collision_sinking_platform),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bitfs_sinking_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvArrowLift = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvArrowList'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(wdw_seg7_collision_arrow_lift),
    SET_INT_RAND_RSHIFT(oArrowLiftUnk100, 1, 32),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_arrow_lift_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvDddMovingPole = [
    BEGIN(OBJ_LIST_POLELIKE, 'bhvDddMovingPole'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oInteractType, INTERACT_POLE),
    SET_HITBOX(/*Radius*/ 80, /*Height*/ 710),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_ddd_moving_pole_loop'),
        CALL_NATIVE('bhv_pole_base_loop'),
    END_LOOP(),
]

const bhvBitfsSinkingCagePlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvBitfsSinkingCagePlatform'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bitfs_seg7_collision_sinking_cage_platform),
    SET_HOME(),
    SPAWN_CHILD(/*Model*/ MODEL_BITFS_BLUE_POLE, /*Behavior*/ bhvDddMovingPole),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bitfs_sinking_cage_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvBitfsTiltingInvertedPyramid = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvBitfsTiltingInvertedPyramid'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(bitfs_seg7_collision_inverted_pyramid),
    SET_HOME(),
    CALL_NATIVE('bhv_platform_normals_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_tilting_inverted_pyramid_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvSquishablePlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSquishablePlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(bitfs_seg7_collision_squishable_platform),
    SET_FLOAT(oCollisionDistance, 10000),
    CALL_NATIVE('bhv_platform_normals_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_squishable_platform_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvFlamethrower = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFlamethrower'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_flamethrower_loop'),
    END_LOOP(),
]

export const bhvFlamethrowerFlame = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvFlamethrowerFlame'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INTERACT_TYPE(INTERACT_FLAME),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 50, /*Height*/ 25, /*Downwards offset*/ 25),
    BILLBOARD(),
    SET_HOME(),
    SET_INT(oIntangibleTimer, 0),
    //CALL_NATIVE(bhv_init_room),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_flamethrower_flame_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvJumpingBox = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvJumpingBox'),
    OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO  | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 30, /*Gravity*/ -400, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 600, /*Unused*/ 0, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_jumping_box_loop'),
    END_LOOP(),
]

const bhvSmoke = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmoke'),
    OR_INT(oFlags, (OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_INT(oAnimState, -1),
    DELAY(1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_dust_smoke_loop'),
        ADD_INT(oAnimState, 1),
    END_LOOP(),
]

const bhvFireParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFireParticleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 70),
    SET_INT(oAnimState, -1),
    BEGIN_LOOP(),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE('bhv_flame_mario_loop'),
    END_LOOP(),
]

const bhvBlackSmokeMario = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvBlackSmokeMario'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_INT(oAnimState, 4),
    SET_FLOAT(oGraphYOffset, 50),
    BEGIN_REPEAT(8),
        CALL_NATIVE('bhv_black_smoke_mario_loop'),
        DELAY(1),
        CALL_NATIVE('bhv_black_smoke_mario_loop'),
        DELAY(1),
        CALL_NATIVE('bhv_black_smoke_mario_loop'),
    END_REPEAT(),
    DEACTIVATE(),
]

const bhvBlackSmokeBowser = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvBlackSmokeBowser'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 0),
    BEGIN_REPEAT(8),
        CALL_NATIVE('bhv_black_smoke_bowser_loop'),
        ANIMATE_TEXTURE(oAnimState, 4),
    END_REPEAT(),
    DEACTIVATE(),
]

const bhvSquarishPathMoving = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSquarishPathMoving'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bitdw_seg7_collision_moving_pyramid),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_squarish_path_moving_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvUnlockDoorStar = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvUnlockDoorStar'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('MarioMisc.bhv_unlock_door_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('MarioMisc.bhv_unlock_door_star_loop'),
    END_LOOP(),
]

const bhvInstantActiveWarp = [
    BREAK(),
]

const bhvAirborneWarp = [
    BREAK(),
]

const bhvHardAirKnockBackWarp = [
    BREAK(),
]

const bhvSpinAirborneCircleWarp = [
    BREAK(),
]

const bhvDeathWarp = [
    BREAK(),
]

const bhvSpinAirborneWarp = [
    BREAK(),
]

const bhvFlyingWarp = [
    BREAK(),
]

const bhvPaintingStarCollectWarp = [
    BREAK(),
]

const bhvPaintingDeathWarp = [
    BREAK(),
]

const bhvAirborneDeathWarp = [
    BREAK(),
]

const bhvAirborneStarCollectWarp = [
    BREAK(),
]

const bhvLaunchStarCollectWarp = [
    BREAK(),
]

const bhvLaunchDeathWarp = [
    BREAK(),
]

const bhvSwimmingWarp = [
    BREAK(),
]

const bhvSparkle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSparkle'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(9),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvSparkleSpawn = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSparkleSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_sparkle_spawn_loop'),
    END_LOOP(),
]

const bhvTripletButterfly = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvTripletButterfly'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, butterfly_seg3_anims_030056B0),
    ANIMATE(0),
    HIDE(),
    SET_HOME(),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ 0, /*Bounciness*/ 0, /*Drag strength*/ 0, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_FLOAT(oTripletButterflyScale, 1),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_triplet_butterfly_update'),
    END_LOOP(),
]

const bhvDddWarp = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvDddWarp'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oCollisionDistance, 30000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_ddd_warp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvRockSolid = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvRockSolid'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(jrb_seg7_collision_rock_solid),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvPillarBase = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvPillarBase'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(jrb_seg7_collision_pillar_base),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvInvisibleObjectsUnderBridge = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvInvisibleObjectsUnderBridge'),
    CALL_NATIVE('bhv_invisible_objects_under_bridge_init'),
    BREAK(),
]

const bhvWaterLevelPillar = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvWaterLevelPillar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(inside_castle_seg7_collision_water_level_pillar),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvHiddenStaircaseStep = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvHiddenStaircaseStep'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bbh_seg7_collision_staircase_step),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvMenuButtonManager = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMenuButtonManager'),
    OR_INT(oFlags, (OBJ_FLAG_SET_THROW_MATRIX_FROM_TRANSFORM | OBJ_FLAG_0020 | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_menu_button_manager_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_menu_button_manager_loop'),
    END_LOOP(),
]

export const bhvHauntedChair = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvHauntedChair'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    LOAD_ANIMATIONS(oAnimations, chair_seg5_anims_05005784),
    ANIMATE(0),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 40, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_HOME(),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_haunted_chair_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_haunted_chair_loop'),
    END_LOOP(),
]

export const bhvMadPiano = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvMadPiano'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    LOAD_ANIMATIONS(oAnimations, mad_piano_seg5_anims_05009B14),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 40, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_HOME(),
    ADD_INT(oMoveAngleYaw, 0x4000),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_mad_piano_update'),
    END_LOOP(),
]

export const bhvHauntedBookshelf = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvHauntedBookshelf'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bbh_seg7_collision_haunted_bookshelf),
    SET_HOME(),
    SET_INT(oRoom, 6),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_haunted_bookshelf_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvFlyingBookend = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvFlyingBookend'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, bookend_seg5_anims_05002540),
    ANIMATE(0),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 60, /*Gravity*/ 0, /*Bounciness*/ -50, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_INT(oMoveFlags, 0),
    SCALE(/*Unused*/ 0, /*Field*/ 70),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_flying_bookend_loop'),
    END_LOOP(),
]

export const bhvBookendSpawn = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBookendSpawn'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bookend_spawn_loop'),
    END_LOOP(),
]

export const bhvHauntedBookshelfManager = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvHauntedBookshelfManager'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_haunted_bookshelf_manager_loop'),
    END_LOOP(),
]

export const bhvBookSwitch = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBookSwitch'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_FLOAT(oGraphYOffset, 30),
    ADD_INT(oMoveAngleYaw, 0x4000),
    CALL_NATIVE('bhv_init_room'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_book_switch_loop'),
    END_LOOP(),
]

export const bhvMerryGoRound = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvMerryGoRound'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(bbh_seg7_collision_merry_go_round),
    SET_FLOAT(oCollisionDistance, 2000),
    SET_INT(oRoom, 10),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_merry_go_round_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvBeginningPeach = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_ANIMATIONS(oAnimations, peach_seg5_anims_0501C41C),
    ANIMATE(0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_intro_peach_loop'),
    END_LOOP(),
]

const bhvBeginningLakitu = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_ANIMATIONS(oAnimations, lakitu_seg6_anims_060058F8),
    ANIMATE(0),
    SET_FLOAT(oOpacity, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_intro_lakitu_loop'),
    END_LOOP(),
]

export const bhvEndBirds1 = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_ANGLE_TO_MOVE_ANGLE | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, birds_seg5_anims_050009E8),
    ANIMATE(0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_end_birds_1_loop'),
    END_LOOP(),
];

export const bhvEndBirds2 = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_ANGLE_TO_MOVE_ANGLE | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, birds_seg5_anims_050009E8),
    ANIMATE(0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_end_birds_2_loop'),
    END_LOOP(),
];

export const bhvIntroScene = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_intro_scene_loop'),
    END_LOOP(),
];

const bhvAmbientSounds = [
    BREAK(),
]

const bhvBirdsSoundLoop = [
    BREAK(),
]

const bhvWaterfallSoundLoop = [
    BREAK(),
]

gLinker.behaviors.bhv1Up = bhv1Up
gLinker.behaviors.bhvActivatedBackAndForthPlatform = bhvActivatedBackAndForthPlatform
gLinker.behaviors.bhvAnotherElavator = bhvAnotherElavator
gLinker.behaviors.bhvAnimatesOnFloorSwitchPress = bhvAnimatesOnFloorSwitchPress
gLinker.behaviors.bhvAirborneDeathWarp = bhvAirborneDeathWarp
gLinker.behaviors.bhvAirborneStarCollectWarp = bhvAirborneStarCollectWarp
gLinker.behaviors.bhvAirborneWarp = bhvAirborneWarp
// gLinker.behaviors.bhvAmbientSounds = bhvAmbientSounds
gLinker.behaviors.bhvArrowLift = bhvArrowLift
gLinker.behaviors.bhvBalconyBigBoo = bhvBalconyBigBoo
gLinker.behaviors.bhvBbhTumblingBridge = bhvBbhTumblingBridge
gLinker.behaviors.bhvBeginningPeach = bhvBeginningPeach
gLinker.behaviors.bhvBeginningLakitu = bhvBeginningLakitu
gLinker.behaviors.bhvBigBully = bhvBigBully
gLinker.behaviors.bhvBigBullyWithMinions = bhvBigBullyWithMinions
gLinker.behaviors.bhvBird = bhvBird
// gLinker.behaviors.bhvBirdsSoundLoop = bhvBirdsSoundLoop
gLinker.behaviors.bhvBitfsSinkingPlatforms = bhvBitfsSinkingPlatforms
gLinker.behaviors.bhvBitfsSinkingCagePlatform = bhvBitfsSinkingCagePlatform
gLinker.behaviors.bhvBitfsTiltingInvertedPyramid = bhvBitfsTiltingInvertedPyramid
gLinker.behaviors.bhvBobBowlingBallSpawner = bhvBobBowlingBallSpawner
gLinker.behaviors.bhvBobomb = bhvBobomb
gLinker.behaviors.bhvBobombAnchorMario = bhvBobombAnchorMario
gLinker.behaviors.bhvBobombBuddy = bhvBobombBuddy
gLinker.behaviors.bhvBobombFuseSmoke = bhvBobombFuseSmoke
gLinker.behaviors.bhvBoo = bhvBoo
gLinker.behaviors.bhvBooCage = bhvBooCage
gLinker.behaviors.bhvBooInCastle = bhvBooInCastle
gLinker.behaviors.bhvBookendSpawn = bhvBookendSpawn
gLinker.behaviors.bhvBookSwitch = bhvBookSwitch
gLinker.behaviors.bhvBooWithCage = bhvBooWithCage
gLinker.behaviors.bhvBowlingBall = bhvBowlingBall
gLinker.behaviors.bhvBowser = bhvBowser
gLinker.behaviors.bhvBowserBodyAnchor = bhvBowserBodyAnchor
gLinker.behaviors.bhvBowserFlameSpawn = bhvBowserFlameSpawn
gLinker.behaviors.bhvBlackSmokeBowser = bhvBlackSmokeBowser
gLinker.behaviors.bhvBlackSmokeMario = bhvBlackSmokeMario
gLinker.behaviors.bhvBreakableBox = bhvBreakableBox
gLinker.behaviors.bhvBreakableBoxSmall = bhvBreakableBoxSmall
gLinker.behaviors.bhvBreakBoxTriangle = bhvBreakBoxTriangle
gLinker.behaviors.bhvBreathParticleSpawner = bhvBreathParticleSpawner
gLinker.behaviors.bhvBubbleMaybe = bhvBubbleMaybe
gLinker.behaviors.bhvBubbleParticleSpawner = bhvBubbleParticleSpawner
gLinker.behaviors.bhvBubbleSplash = bhvBubbleSplash
gLinker.behaviors.bhvBulletBillCannon = bhvBulletBillCannon
gLinker.behaviors.bhvButterfly = bhvButterfly
gLinker.behaviors.bhvCourtyardBooTriplet = bhvCourtyardBooTriplet
gLinker.behaviors.bhvCannon = bhvCannon
gLinker.behaviors.bhvCannonBarrelBubbles = bhvCannonBarrelBubbles
gLinker.behaviors.bhvCoinFormationSpawn = bhvCoinFormationSpawn
gLinker.behaviors.bhvCoinInsideBoo = bhvCoinInsideBoo
gLinker.behaviors.bhvCameraLakitu = bhvCameraLakitu
gLinker.behaviors.bhvCannonClosed = bhvCannonClosed
gLinker.behaviors.bhvCapSwitch = bhvCapSwitch
gLinker.behaviors.bhvCapSwitchBase = bhvCapSwitchBase
gLinker.behaviors.bhvCarrySomething1 = bhvCarrySomething1
gLinker.behaviors.bhvCarrySomething2 = bhvCarrySomething2
gLinker.behaviors.bhvCarrySomething3 = bhvCarrySomething3
gLinker.behaviors.bhvCarrySomething4 = bhvCarrySomething4
gLinker.behaviors.bhvCarrySomething5 = bhvCarrySomething5
gLinker.behaviors.bhvCarrySomething6 = bhvCarrySomething6
gLinker.behaviors.bhvCastleFlagWaving = bhvCastleFlagWaving
gLinker.behaviors.bhvCastleFloorTrap = bhvCastleFloorTrap
gLinker.behaviors.bhvChainChomp = bhvChainChomp
gLinker.behaviors.bhvChainChompGate = bhvChainChompGate
gLinker.behaviors.bhvCirclingAmp = bhvCirclingAmp
gLinker.behaviors.bhvCheckerboardElevatorGroup = bhvCheckerboardElevatorGroup
gLinker.behaviors.bhvChuckya = bhvChuckya
gLinker.behaviors.bhvChuckyaAnchorMario = bhvChuckyaAnchorMario
gLinker.behaviors.bhvCloud = bhvCloud
gLinker.behaviors.bhvCoinFormation = bhvCoinFormation
gLinker.behaviors.bhvCoinSparkles = bhvCoinSparkles
gLinker.behaviors.bhvDddMovingPole = bhvDddMovingPole
gLinker.behaviors.bhvDddWarp = bhvDddWarp
gLinker.behaviors.bhvDeathWarp = bhvDeathWarp
gLinker.behaviors.bhvDirtParticleSpawner = bhvDirtParticleSpawner
gLinker.behaviors.bhvDoor = bhvDoor
gLinker.behaviors.bhvDoorWarp = bhvDoorWarp
gLinker.behaviors.bhvEndBirds1 = bhvEndBirds1
gLinker.behaviors.bhvEndBirds2 = bhvEndBirds2
gLinker.behaviors.bhvExclamationBox = bhvExclamationBox
gLinker.behaviors.bhvExitPodiumWarp = bhvExitPodiumWarp
gLinker.behaviors.bhvExplosion = bhvExplosion
gLinker.behaviors.bhvFadingWarp = bhvFadingWarp
gLinker.behaviors.bhvFerrisWheelAxle = bhvFerrisWheelAxle
gLinker.behaviors.bhvFerrisWheelPlatform = bhvFerrisWheelPlatform
gLinker.behaviors.bhvFireParticleSpawner = bhvFireParticleSpawner
gLinker.behaviors.bhvFish = bhvFish
gLinker.behaviors.bhvFishGroup = bhvFishGroup
gLinker.behaviors.bhvFishSpawner = bhvFishSpawner
gLinker.behaviors.bhvFlame = bhvFlame
gLinker.behaviors.bhvFlamethrower = bhvFlamethrower
gLinker.behaviors.bhvFloorSwitchHardcodedModel = bhvFloorSwitchHardcodedModel
gLinker.behaviors.bhvFloorSwitchAnimatesObject = bhvFloorSwitchAnimatesObject
gLinker.behaviors.bhvFloorTrapInCastle = bhvFloorTrapInCastle
gLinker.behaviors.bhvFlyingBookend = bhvFlyingBookend
gLinker.behaviors.bhvFlyingWarp = bhvFlyingWarp
gLinker.behaviors.bhvFreeBowlingBall = bhvFreeBowlingBall
gLinker.behaviors.bhvGhostHuntBigBoo = bhvGhostHuntBigBoo
gLinker.behaviors.bhvGhostHuntBoo = bhvGhostHuntBoo
gLinker.behaviors.bhvGiantPole = bhvGiantPole
gLinker.behaviors.bhvGrindel = bhvGrindel
gLinker.behaviors.bhvGoldenCoinSparkles = bhvGoldenCoinSparkles
gLinker.behaviors.bhvGoomba = bhvGoomba
gLinker.behaviors.bhvGoombaTripletSpawner = bhvGoombaTripletSpawner
gLinker.behaviors.bhvHardAirKnockBackWarp = bhvHardAirKnockBackWarp
gLinker.behaviors.bhvHauntedBookshelf = bhvHauntedBookshelf
gLinker.behaviors.bhvHauntedBookshelfManager = bhvHauntedBookshelfManager
gLinker.behaviors.bhvHauntedChair = bhvHauntedChair
gLinker.behaviors.bhvHidden1up = bhvHidden1up
gLinker.behaviors.bhvHidden1upInPoleSpawner = bhvHidden1upInPoleSpawner
gLinker.behaviors.bhvHidden1upTrigger = bhvHidden1upTrigger
gLinker.behaviors.bhvHiddenAt120Stars = bhvHiddenAt120Stars
gLinker.behaviors.bhvHiddenStaircaseStep = bhvHiddenStaircaseStep
// gLinker.behaviors.bhvHMCElevatorPlatform = bhvHMCElevatorPlatform
gLinker.behaviors.bhvHorStarParticleSpawner = bhvHorStarParticleSpawner
gLinker.behaviors.bhvHomingAmp = bhvHomingAmp
gLinker.behaviors.bhvIdleWaterWave = bhvIdleWaterWave
gLinker.behaviors.bhvInstantActiveWarp = bhvInstantActiveWarp
gLinker.behaviors.bhvIntroScene = bhvIntroScene
gLinker.behaviors.bhvInvisibleObjectsUnderBridge = bhvInvisibleObjectsUnderBridge
gLinker.behaviors.bhvJumpingBox = bhvJumpingBox
gLinker.behaviors.bhvKickableBoard = bhvKickableBoard
gLinker.behaviors.bhvKingBobomb = bhvKingBobomb
gLinker.behaviors.bhvKoopaShellUnderwater = bhvKoopaShellUnderwater
gLinker.behaviors.bhvLaunchDeathWarp = bhvLaunchDeathWarp
gLinker.behaviors.bhvLaunchStarCollectWarp = bhvLaunchStarCollectWarp
gLinker.behaviors.bhvLLLTumblingBridge = bhvLLLTumblingBridge
gLinker.behaviors.bhvMadPiano = bhvMadPiano
gLinker.behaviors.bhvManyBlueFishSpawner = bhvManyBlueFishSpawner
gLinker.behaviors.bhvMario = bhvMario
gLinker.behaviors.bhvMenuButtonManager = bhvMenuButtonManager
gLinker.behaviors.bhvMerryGoRound = bhvMerryGoRound
gLinker.behaviors.bhvMerryGoRoundBigBoo = bhvMerryGoRoundBigBoo
gLinker.behaviors.bhvMerryGoRoundBoo = bhvMerryGoRoundBoo
gLinker.behaviors.bhvMerryGoRoundBooManager = bhvMerryGoRoundBooManager
gLinker.behaviors.bhvMessagePanel = bhvMessagePanel
gLinker.behaviors.bhvMetalCap = bhvMetalCap
gLinker.behaviors.bhvMistCircParticleSpawner = bhvMistCircParticleSpawner
gLinker.behaviors.bhvMistParticleSpawner = bhvMistParticleSpawner
gLinker.behaviors.bhvMoatGrills = bhvMoatGrills
gLinker.behaviors.bhvMrI = bhvMrI
gLinker.behaviors.bhvMrIBody = bhvMrIBody
gLinker.behaviors.bhvMrIBlueCoin = bhvMrIBlueCoin
gLinker.behaviors.bhvMrIParticle = bhvMrIParticle
gLinker.behaviors.bhvPurpleParticle = bhvPurpleParticle
gLinker.behaviors.bhvObjectWaterSplash = bhvObjectWaterSplash
gLinker.behaviors.bhvOneCoin = bhvOneCoin
gLinker.behaviors.bhvNormalCap = bhvNormalCap
gLinker.behaviors.bhvPaintingDeathWarp = bhvPaintingDeathWarp
gLinker.behaviors.bhvPaintingStarCollectWarp = bhvPaintingStarCollectWarp
gLinker.behaviors.bhvPillarBase = bhvPillarBase
gLinker.behaviors.bhvPitBowlingBall = bhvPitBowlingBall
gLinker.behaviors.bhvPlatformOnTrack = bhvPlatformOnTrack
gLinker.behaviors.bhvPlungeBubble = bhvPlungeBubble
gLinker.behaviors.bhvPoleGrabbing = bhvPoleGrabbing
gLinker.behaviors.bhvPoundTinyStarParticle = bhvPoundTinyStarParticle
gLinker.behaviors.bhvPunchTinyTriangle = bhvPunchTinyTriangle
gLinker.behaviors.bhvRecoveryHeart = bhvRecoveryHeart
gLinker.behaviors.bhvRedCoin = bhvRedCoin
gLinker.behaviors.bhvRockSolid = bhvRockSolid
gLinker.behaviors.bhvRotatingCounterClockwise = bhvRotatingCounterClockwise
gLinker.behaviors.bhvRotatingPlatform = bhvRotatingPlatform
gLinker.behaviors.bhvRRElevatorPlatform = bhvRRElevatorPlatform
gLinker.behaviors.bhvSeesawPlatform = bhvSeesawPlatform
gLinker.behaviors.bhvShallowWaterSplash = bhvShallowWaterSplash
gLinker.behaviors.bhvShallowWaterWave = bhvShallowWaterWave
gLinker.behaviors.bhvSignOnWall = bhvSignOnWall
gLinker.behaviors.bhvSingleCoinGetsSpawned = bhvSingleCoinGetsSpawned
gLinker.behaviors.bhvSlidingPlatform2 = bhvSlidingPlatform2
gLinker.behaviors.bhvSmallBully = bhvSmallBully
gLinker.behaviors.bhvSmallParticle = bhvSmallParticle
gLinker.behaviors.bhvSmallParticleBubbles = bhvSmallParticleBubbles
gLinker.behaviors.bhvSmallParticleSnow = bhvSmallParticleSnow
gLinker.behaviors.bhvSmoke = bhvSmoke
gLinker.behaviors.bhvSnowParticleSpawner = bhvSnowParticleSpawner
gLinker.behaviors.bhvSparkle = bhvSparkle
gLinker.behaviors.bhvSparkleParticleSpawner = bhvSparkleParticleSpawner
gLinker.behaviors.bhvSparkleSpawn = bhvSparkleSpawn
gLinker.behaviors.bhvSpawnedBlueCoin = bhvSpawnedBlueCoin
gLinker.behaviors.bhvSpawnedStar = bhvSpawnedStar
gLinker.behaviors.bhvSpawnedStarNoLevelExit = bhvSpawnedStarNoLevelExit
gLinker.behaviors.bhvSpinAirborneCircleWarp = bhvSpinAirborneCircleWarp
gLinker.behaviors.bhvSparkleSpawn = bhvSparkleSpawn
gLinker.behaviors.bhvSpinAirborneWarp = bhvSpinAirborneWarp
gLinker.behaviors.bhvSquarishPathMoving = bhvSquarishPathMoving
gLinker.behaviors.bhvSquishablePlatform = bhvSquishablePlatform
gLinker.behaviors.bhvStar = bhvStar
gLinker.behaviors.bhvStarDoor = bhvStarDoor
gLinker.behaviors.bhvStarKeyCollectionPuffSpawner = bhvStarKeyCollectionPuffSpawner
gLinker.behaviors.bhvStarSpawnCoordinates = bhvStarSpawnCoordinates
gLinker.behaviors.bhvStaticObject = bhvStaticObject
gLinker.behaviors.bhvSwimmingWarp = bhvSwimmingWarp
gLinker.behaviors.bhvTemporaryYellowCoin = bhvTemporaryYellowCoin
gLinker.behaviors.bhvTenCoinsSpawn = bhvTenCoinsSpawn
gLinker.behaviors.bhvTHIBowlingBallSpawner = bhvTHIBowlingBallSpawner
gLinker.behaviors.bhvTHIHugeIslandTop = bhvTHIHugeIslandTop
gLinker.behaviors.bhvTHITinyIslandTop = bhvTHITinyIslandTop
gLinker.behaviors.bhvThreeCoinsSpawn = bhvThreeCoinsSpawn
// gLinker.behaviors.bhvThwomp = bhvThwomp
// gLinker.behaviors.bhvThwomp2 = bhvThwomp2
gLinker.behaviors.bhvTiltingBowserLavaPlatform = bhvTiltingBowserLavaPlatform
gLinker.behaviors.bhvTower = bhvTower
gLinker.behaviors.bhvTowerDoor = bhvTowerDoor
gLinker.behaviors.bhvTrackBall = bhvTrackBall
gLinker.behaviors.bhvTumblingBridge = bhvTumblingBridge
gLinker.behaviors.bhvTree = bhvTree
gLinker.behaviors.bhvTriangleParticleSpawner = bhvTriangleParticleSpawner
gLinker.behaviors.bhvTripletButterfly = bhvTripletButterfly
gLinker.behaviors.bhvTtmBowlingBallSpawner = bhvTtmBowlingBallSpawner
gLinker.behaviors.bhvTumblingBridgePlatform = bhvTumblingBridgePlatform
gLinker.behaviors.bhvUnlockDoorStar = bhvUnlockDoorStar
gLinker.behaviors.bhvVanishCap = bhvVanishCap
gLinker.behaviors.bhvVertStarParticleSpawner = bhvVertStarParticleSpawner
gLinker.behaviors.bhvWallTinyStarParticle = bhvWallTinyStarParticle
gLinker.behaviors.bhvWarp = bhvWarp
gLinker.behaviors.bhvWarpPipe = bhvWarpPipe
gLinker.behaviors.bhvWaterAirBubble = bhvWaterAirBubble
gLinker.behaviors.bhvWaterBomb = bhvWaterBomb
gLinker.behaviors.bhvWaterBombCannon = bhvWaterBombCannon
gLinker.behaviors.bhvWaterBombShadow = bhvWaterBombShadow
gLinker.behaviors.bhvWaterBombSpawner = bhvWaterBombSpawner
gLinker.behaviors.bhvWaterDroplet = bhvWaterDroplet
gLinker.behaviors.bhvWaterDropletSplash = bhvWaterDropletSplash
gLinker.behaviors.bhvWaterfallSoundLoop = bhvWaterfallSoundLoop
gLinker.behaviors.bhvWaterLevelPillar = bhvWaterLevelPillar
gLinker.behaviors.bhvWaterMist = bhvWaterMist
gLinker.behaviors.bhvWaterMist2 = bhvWaterMist2
gLinker.behaviors.bhvWaterSplash = bhvWaterSplash
gLinker.behaviors.bhvWaveTrail = bhvWaveTrail
gLinker.behaviors.bhvWFBreakableWallLeft = bhvWFBreakableWallLeft
gLinker.behaviors.bhvWFBreakableWallRight = bhvWFBreakableWallRight
gLinker.behaviors.bhvWFRotatingWoodenPlatform = bhvWFRotatingWoodenPlatform
gLinker.behaviors.bhvWhitePuffExplosion = bhvWhitePuffExplosion
gLinker.behaviors.bhvWingCap = bhvWingCap
gLinker.behaviors.bhvWoodenPost = bhvWoodenPost
gLinker.behaviors.bhvYellowBackgroundInMenu = bhvYellowBackgroundInMenu
gLinker.behaviors.bhvYellowBall = bhvYellowBall
gLinker.behaviors.bhvYellowCoin = bhvYellowCoin
gLinker.behaviors.bhvYoshi = bhvYoshi
