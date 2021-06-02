import * as _Linker from "./Linker"
import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"

import { ADD_INT, ADD_FLOAT, ANIMATE, BEGIN, BEGIN_LOOP, BEGIN_REPEAT, BILLBOARD, BREAK,
         CALL, CALL_NATIVE, DEACTIVATE, DEBUGGER, DELAY, DELAY_VAR, DISABLE_RENDERING,
         DROP_TO_FLOOR, END_LOOP, END_REPEAT, END_REPEAT_CONTINUE, GOTO, HIDE,
         LOAD_ANIMATIONS, LOAD_COLLISION_DATA, OR_INT, PARENT_BIT_CLEAR, RETURN, SCALE,
         SET_FLOAT, SET_HITBOX, SET_HITBOX_WITH_OFFSET, SET_HOME, SET_INT, SET_INTERACT_TYPE,
         SET_MODEL, SET_OBJ_PHYSICS, SET_RANDOM_INT, SET_RANDOM_FLOAT, SUM_FLOAT, SPAWN_CHILD,
         SPAWN_OBJ, SPAWN_WATER_DROPLET
} from "../engine/BehaviorCommands"

import { INTERACT_WATER_RING, INTERACT_POLE, INTERACT_DAMAGE, INTERACT_COIN, INTERACT_TEXT,
         INT_SUBTYPE_SIGN, INTERACT_CANNON_BASE, INTERACT_GRABBABLE, INT_SUBTYPE_BIG_KNOCKBACK,
         INTERACT_WARP_DOOR, INTERACT_DOOR, INTERACT_WARP
} from "./Interaction"

import { oDamageOrCoinValue, oAnimState, oInteractType, oInteractionSubtype, oAnimations,
         oIntangibleTimer, oGraphYOffset, oNumLootCoins, oCollisionDistance,
         oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll,
         oWoodenPostTotalMarioAngle, oInteractStatus, oMoveAngleYaw, oWaterObjUnkF4,
         oWaterObjUnkF8, oWaterObjUnkFC, oBehParams2ndByte, oActiveParticleFlags, oFlags,
         oUnk94, oBBallSpawnerPeriodMinus1, oBobombBuddyRole, oTripletButterflyScale,

         OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, OBJ_FLAG_COMPUTE_DIST_TO_MARIO,
         OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW,
         OBJ_FLAG_PERSISTENT_RESPAWN, OBJ_FLAG_HOLDABLE, OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL,
         OBJ_FLAG_MOVE_XZ_USING_FVEL, OBJ_FLAG_ACTIVE_FROM_AFAR, OBJ_FLAG_0100,

         ACTIVE_PARTICLE_H_STAR, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_TRIANGLE,
         ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_BUBBLE, ACTIVE_PARTICLE_WATER_SPLASH,
         ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE,
         ACTIVE_PARTICLE_WAVE_TRAIL, ACTIVE_PARTICLE_PLUNGE_BUBBLE,
} from "../include/object_constants"

import { MODEL_WOODEN_POST, MODEL_MIST, MODEL_SMOKE, MODEL_BUBBLE, MODEL_CANNON_BARREL,
         MODEL_BOWSER_BOMB_CHILD_OBJ, MODEL_NONE
} from "../include/model_ids"

import * as _bird                     from "./behaviors/bird.inc.js"
import * as _bowling_ball             from "./behaviors/bowling_ball.inc"
import * as _breakable_box            from "./behaviors/breakable_box.inc"
import * as _breakable_box_small      from "./behaviors/breakable_box_small.inc"
import * as _butterfly                from "./behaviors/butterfly.inc"
import * as _cannon                   from "./behaviors/cannon.inc"
import * as _cannon_door              from "./behaviors/cannon_door.inc"
import * as _cap                      from "./behaviors/cap.inc"
import * as _castle_cannon_grate      from "./behaviors/castle_cannon_grate.inc"
import * as _castle_flag              from "./behaviors/bhv_castle_flag_init.inc"
import * as _chain_chomp              from "./behaviors/chain_chomp.inc"
import * as _checkerboard_platform    from "./behaviors/checkerboard_platform.inc"
import * as _coin                     from "./behaviors/coin.inc"
import * as _ddd_warp                 from "./behaviors/ddd_warp.inc"
import * as _door                     from "./behaviors/door.inc"
import * as _exclamation_box          from "./behaviors/exclamation_box.inc"
import * as _fish                     from "./behaviors/fish.inc"
import * as _koopa_shell_underwater   from "./behaviors/koopa_shell_underwater.inc"
import * as _moat_grill               from "./behaviors/moat_grill.inc"
import * as _mushroom_1up             from "./behaviors/mushroom_1up.inc"
import * as _pole                     from "./behaviors/pole.inc"
import * as _pole_base                from "./behaviors/pole_base.inc"
import * as _seesaw_platform          from "./behaviors/seesaw_platform.inc"
import * as _sound_spawner            from "./behaviors/sound_spawner.inc"
import * as _sparkle_spawn            from "./behaviors/sparkle_spawn.inc"
import * as _sparkle_spawn_star       from "./behaviors/sparkle_spawn_star.inc"
import * as _switch_hidden_objects    from "./behaviors/switch_hidden_objects.inc"
import * as _triplet_butterfly        from "./behaviors/triplet_butterfly.inc"
import * as _warp                     from "./behaviors/warp.inc"
import * as _water_bomb               from "./behaviors/water_bomb.inc"
import * as _water_bomb_cannon        from "./behaviors/water_bomb_cannon.inc"
import * as _water_splashes_and_waves from "./behaviors/water_splashes_and_waves.inc"
import * as _yoshi                    from "./behaviors/yoshi.inc"

import { bhv_goomba_init,
         bhv_goomba_update,
         bhv_goomba_triplet_spawner_update              } from "./behaviors/goomba.inc"
import { bhv_bobomb_loop,
         bhv_bobomb_init,
         bhv_bobomb_fuse_smoke_init,
         bhv_dust_smoke_loop                            } from "./behaviors/bobomb.inc"
import { bhv_explosion_init,
         bhv_explosion_loop                             } from "./behaviors/explosion.inc"
import { bhv_respawner_loop,
         bhv_bobomb_bully_death_smoke_init              } from "./behaviors/corkbox.inc"
import { bhv_pound_tiny_star_particle_init,
         bhv_pound_tiny_star_particle_loop,
         bhv_tiny_star_particles_init,
         bhv_wall_tiny_star_particle_loop,
         bhv_punch_tiny_triangle_loop,
         bhv_punch_tiny_triangle_init                   } from "./behaviors/collide_particles.inc"
import { bhv_white_puff_1_loop,
         bhv_white_puff_2_loop                          } from "./behaviors/white_puff.inc"
import { bhv_pound_white_puffs_init                     } from "./behaviors/ground_particles.inc"
import { bhv_white_puff_exploding_loop                  } from "./behaviors/white_puff_explode.inc"
import { bhv_bubble_wave_init,
         bhv_small_water_wave_loop,
         bhv_water_air_bubble_init,
         bhv_water_air_bubble_loop,
         bhv_particle_init,
         bhv_particle_loop,
         bhv_water_waves_init,
         bhv_small_bubbles_loop                         } from "./behaviors/water_objs.inc"
import { bhv_red_coin_init,
         bhv_red_coin_loop                              } from "./behaviors/red_coin.inc"
import { bhv_moving_yellow_coin_init,
         bhv_moving_yellow_coin_loop                    } from "./behaviors/moving_coin.inc"
import { bhv_water_mist_2_loop                          } from "./behaviors/water_mist.inc"

import { birds_seg5_anims_050009E8       } from "../actors/bird/anims.inc.js"
import { bobomb_seg8_anims_0802396C      } from "../actors/bobomb/anims.inc"
import { butterfly_seg3_anims_030056B0   } from "../actors/butterfly/anims.inc"
import { bowser_seg6_anims_06057690      } from "../actors/bowser/anims.inc"
import { castle_grounds_seg7_anims_flags } from "../levels/castle_grounds/areas/1/11/anim.inc"
import { chain_chomp_seg6_anims_06025178 } from "../actors/chain_chomp/anims/table.inc"
import { door_seg3_anims_030156C0        } from "../actors/door/anims.inc"
import { goomba_seg8_anims_0801DA4C      } from "../actors/goomba/anims/table.inc"
import { yoshi_seg5_anims_05024100       } from "../actors/yoshi/anims.inc"

import { breakable_box_seg8_collision_08012D70           } from "../actors/breakable_box/collision.inc"
import { cannon_lid_seg8_collision_08004950              } from "../actors/cannon_lid/collision.inc"
import { castle_grounds_seg7_collision_cannon_grill      } from "../levels/castle_grounds/areas/1/8/collision.inc"
import { castle_grounds_seg7_collision_moat_grills       } from "../levels/castle_grounds/areas/1/7/collision.inc"
import { checkerboard_platform_seg8_collision_0800D710   } from "../actors/checkerboard_platform/collision.inc"
import { door_seg3_collision_0301CE78                    } from "../actors/warp_collision/collision.inc"
import { exclamation_box_outline_seg8_collision_08025F78 } from "../actors/exclamation_box_outline/collision.inc"
import { poundable_pole_collision_06002490               } from "../actors/poundable_pole/collision.inc"
import { wooden_signpost_seg3_collision_0302DD80         } from "../actors/wooden_signpost/collision.inc"
import { jrb_seg7_collision_rock_solid                   } from "../levels/jrb/rock/collision.inc"
import { jrb_seg7_collision_pillar_base                  } from "../levels/jrb/falling_pillar_base/collision.inc"
import { jrb_seg7_collision_floating_platform            } from "../levels/jrb/floating_platform/collision.inc"
import { inside_castle_seg7_collision_water_level_pillar } from "../levels/castle_inside/water_level_pillar/collision.inc"
import { bbh_seg7_collision_staircase_step               } from "../levels/bbh/staircase_step/collision.inc"
import { bbh_seg7_collision_merry_go_round               } from "../levels/bbh/merry_go_round/collision.inc"


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



export const bhvMario = [
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

export const bhvTree = [
    // BEGIN(OBJ_LIST_POLELIKE),
    // BILLBOARD(),
    // OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    // SET_INT(oInteractType, INTERACT_POLE),
    // SET_HITBOX(/*Radius*/ 80, /*Height*/ 500),
    // SET_INT(oIntangibleTimer, 0),
    // BEGIN_LOOP(),
    //     CALL_NATIVE('bhv_pole_base_loop'),
    // END_LOOP(),

    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE, name: 'bhvTree' } },
    { command: BhvCmds.cylboard },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 500 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_pole_base_loop' } },
    { command: BhvCmds.end_loop },
]

export const bhvYellowBall = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvYellowBall' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.cylboard },
    { command: BhvCmds.break },
]

export const bhvGiantPole = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE, name: 'bhvGiantPole' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 2100 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_giant_pole_loop' } },
    { command: BhvCmds.end_loop },
]

export const bhvPoleGrabbing = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE, name: 'bhvPoleGrabbing' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 1500 } },
    { command: BhvCmds.call_native, args: { func: 'bhv_pole_init' } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_pole_base_loop' } },
    { command: BhvCmds.end_loop },
]

export const bhvStaticObject = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvStaticObject' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.break },
]

export const bhvCastleFlagWaving = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvCastleFlagWaving' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: castle_grounds_seg7_anims_flags } },
    { command: BhvCmds.animate, args: { animIndex: 0 } },
    { command: BhvCmds.call_native, args: { func: 'bhv_castle_flag_init' } },
    { command: BhvCmds.begin_loop },
    { command: BhvCmds.end_loop },
]

export const bhvCheckerboardPlatformSub = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE, name: 'bhvCheckerboardPlatformSub' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.load_collision_data, args: { data: checkerboard_platform_seg8_collision_0800D710 } },
    { command: BhvCmds.call_native, args: { func: 'bhv_checkerboard_platform_init' } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_checkerboard_platform_loop' } },
    { command: BhvCmds.end_loop },
]

export const bhvCheckerboardElevatorGroup = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SPAWNER, name: 'bhvCheckerboardElevatorGroup' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: 'bhv_checkerboard_elevator_group_init' } },
    { command: BhvCmds.set_home },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvMoatGrills = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvMoatGrills'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_moat_grills),
    SET_FLOAT(oCollisionDistance, 30000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_moat_grills_loop'),
    END_LOOP(),
]


export const bhvSeesawPlatform = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSeesawPlatform'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_seesaw_platform_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_seesaw_platform_update'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvWaterBombSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBombSpawner'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_spawner_update'),
    END_LOOP(),
]

export const bhvWaterBomb = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBomb'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 120, /*Gravity*/ -400, /*Bounciness*/ 0, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_update'),
    END_LOOP(),
]

export const bhvWaterBombShadow = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvWaterBombShadow'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SCALE(/*Unused*/ 0, /*Field*/ 150),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_shadow_update'),
    END_LOOP(),
]

export const bhvRespawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvRespawner' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_respawner_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvGoomba = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PUSHABLE, name: 'bhvGoomba' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: goomba_seg8_anims_0801DA4C } },
    { command: BhvCmds.set_home },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 40, gravity: -400, bounciness: -50, dragStrenth: 1000, friction: 1000, buoyancy: 0 } },
    { command: BhvCmds.call_native, args: { func: bhv_goomba_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_goomba_update } },
    { command: BhvCmds.end_loop }
]

export const bhvGoombaTripletSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PUSHABLE, name: 'bhvGoombaTripletSpawner' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_goomba_triplet_spawner_update } },
    { command: BhvCmds.end_loop }
]

export const bhvBobomb = [
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

export const bhvBobombFuseSmoke = [
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

export const bhvExplosion = [
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

export const bhvCannonClosed = [
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

export const bhvMessagePanel = [
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

export const bhvSignOnWall = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvSignOnWall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INTERACT_TYPE(INTERACT_TEXT),
    SET_INT(oInteractionSubtype, INT_SUBTYPE_SIGN),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 80),
    SET_INT(oWoodenPostTotalMarioAngle, 0),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        SET_INT(oInteractStatus, 0),
    END_LOOP(),
]

export const bhvBobombBullyDeathSmoke = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvBobombBullyDeathSmoke' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL | OBJ_FLAG_MOVE_XZ_USING_FVEL } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.call_native, args: { func: bhv_bobomb_bully_death_smoke_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_dust_smoke_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhvWoodenPost = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE, name: 'bhvWoodenPost' } },
    { command: BhvCmds.load_collision_data, args: { data: poundable_pole_collision_06002490 } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 0, gravity: -400, bounciness: -50, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.set_objectData_value, args: { field: oNumLootCoins, value: 5 } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.set_home },
    { command: BhvCmds.scale, args: { percent: 50 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_wooden_post_update' } },
        { command: BhvCmds.call_native, args: { func: 'SurfaceLoad.load_object_collision_model' } },
    { command: BhvCmds.end_loop }
]

export const bhvChainChomp = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_GENACTOR, name: 'bhvChainChomp' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_ACTIVE_FROM_AFAR } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: chain_chomp_seg6_anims_06025178 } },
    { command: BhvCmds.animate, args: { animIndex: 0 } },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 0, gravity: -400, bounciness: -50, dragStrenth: 0, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.hide },
    { command: BhvCmds.set_home },
    { command: BhvCmds.set_objectData_value, args: { field: oGraphYOffset, value: 240 } },
    { command: BhvCmds.scale, args: { percent: 200 } },
    { command: BhvCmds.spawn_child_with_param, args: { bhvParam: 0, model: MODEL_WOODEN_POST, behavior: bhvWoodenPost } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_chain_chomp_update' } },
    { command: BhvCmds.end_loop }
]

export const bhvChainChompChainPart = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_GENACTOR, name: 'bhvChainChompChainPart' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 0, gravity: -400, bounciness: -50, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.set_objectData_value, args: { field: oGraphYOffset, value: 40 } },
    { command: BhvCmds.scale, args: { percent: 200 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_chain_chomp_chain_part_update' } },
    { command: BhvCmds.end_loop }
]

export const bhvHorStarParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvHorStarParticleSpawner' } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_H_STAR } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: bhv_pound_tiny_star_particle_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvVertStarParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvVertStarParticleSpawner' } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_V_STAR } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: bhv_tiny_star_particles_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvTriangleParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvTriangleParticleSpawner' } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_TRIANGLE } },
        { command: BhvCmds.call_native, args: { func: bhv_punch_tiny_triangle_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvPoundTinyStarParticle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvPoundTinyStarParticle' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_repeat, args: { count: 10 } },
        { command: BhvCmds.call_native, args: { func: bhv_pound_tiny_star_particle_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvWallTinyStarParticle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvWallTinyStarParticle' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_repeat, args: { count: 10 } },
    { command: BhvCmds.call_native, args: { func: bhv_wall_tiny_star_particle_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvPunchTinyTriangle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvPunchTinyTriangle' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_punch_tiny_triangle_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvWhitePuff1 = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvWhitePuff1' } },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_DUST } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_1_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvWhitePuff2 = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvWhitePuff2' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_MOVE_XZ_USING_FVEL } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.begin_repeat, args: { count: 7 } },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_2_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvBreakBoxTriangle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvBreakBoxTriangle'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(18),
        CALL_NATIVE('cur_obj_rotate_face_angle_using_vel'),
        CALL_NATIVE('cur_obj_move_using_fvel_and_gravity'),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvWaterMist2 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterMist2'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oFaceAnglePitch, 0xC000),
    SCALE(/*Unused*/ 0, /*Field*/ 2100),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_water_mist_2_loop),
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

export const bhvMistCircParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvMistCircParticleSpawner' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
        { command: BhvCmds.call_native, args: { func: bhv_pound_white_puffs_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvWhitePuffExplosion = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT, name: 'bhvWhitePuffExplosion' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_exploding_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvSpawnedStar = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBehParams2ndByte, 1),
    GOTO('bhvSpawnedStarNoLevelExit', 2),
]

export const bhvSpawnedStarNoLevelExit = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStarNoLevelExit'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    // Spawned star - common:
    SET_HOME(),
    CALL_NATIVE('bhv_spawned_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_spawned_star_loop'),
    END_LOOP(),
]

export const bhvFish = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFish'),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_loop'),
    END_LOOP(),
]

export const bhvFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvFishSpawner'),
    // Fish Spawner - common
    DISABLE_RENDERING(),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_spawner_loop'),
    END_LOOP(),
]

export const bhvManyBlueFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvManyBlueFishSpawner'),
    SET_INT(oBehParams2ndByte, 0),
    // GOTO(bhvFishSpawner, )]
    DISABLE_RENDERING(),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_fish_spawner_loop'),
    END_LOOP(),
]

export const bhvButterfly = [
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

export const bhvCarrySomething1 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething1'),
    BREAK(),
]

export const bhvCarrySomething2 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething2'),
    BREAK(),
]

export const bhvCarrySomething3 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething3'),
    BREAK(),
]

export const bhvCarrySomething4 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething4'),
    BREAK(),
]

export const bhvCarrySomething5 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething5'),
    BREAK(),
]

export const bhvCarrySomething6 = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCarrySomething6'),
    BREAK(),
]

export const bhvBird = [
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
export const bhvWaterSplash = [
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
export const bhvBubbleSplash = [
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
export const bhvIdleWaterWave = [
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
export const bhvObjectWaterSplash = [
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
export const bhvShallowWaterWave = [
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
export const bhvShallowWaterSplash = [
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
export const bhvObjectWaveTrail = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvObjectWaveTrail'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    GOTO('bhvWaveTrail', 3), // Wave trail - common
]

// The waves created by Mario while he is swimming.
export const bhvWaveTrail = [
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

export const bhvSmallWaterWave398 = [
    ADD_INT(oAnimState, 1),
    ADD_FLOAT(oPosY, 7),
    SET_RANDOM_FLOAT(oWaterObjUnkF4, /*Minimum*/ -2, /*Range*/ 5),
    SET_RANDOM_FLOAT(oWaterObjUnkF8, /*Minimum*/ -2, /*Range*/ 5),
    SUM_FLOAT(/*Dest*/ oPosX, /*Value 1*/ oPosX, /*Value 2*/ oWaterObjUnkF4),
    SUM_FLOAT(/*Dest*/ oPosZ, /*Value 1*/ oPosZ, /*Value 2*/ oWaterObjUnkF8),
    RETURN(),
]

export const bhvSmallWaterWave = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallWaterWave'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    CALL_NATIVE(bhv_bubble_wave_init),
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
        CALL_NATIVE(bhv_small_water_wave_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvWaterAirBubble = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWaterAirBubble'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 400, /*Height*/ 150, /*Downwards offset*/ -150),
    SET_INT(oIntangibleTimer, 0),
    SET_INTERACT_TYPE(INTERACT_WATER_RING),
    SET_INT(oDamageOrCoinValue, 5),
    CALL_NATIVE(bhv_water_air_bubble_init),
    SET_INT(oAnimState, -1),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_water_air_bubble_loop),
    END_LOOP(),
]

export const bhvSmallParticle = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticle'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(70),
        CALL_NATIVE(bhv_particle_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvPlungeBubble = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvPlungeBubble'),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_PLUNGE_BUBBLE),
    DISABLE_RENDERING(),
    CALL_NATIVE(bhv_water_waves_init),
    DEACTIVATE(),
]

export const bhvSmallParticleSnow = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticleSnow'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(30),
        CALL_NATIVE(bhv_particle_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvSmallParticleBubbles = [
    BEGIN(OBJ_LIST_UNIMPORTANT, 'bhvSmallParticleBubbles'),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(70),
        CALL_NATIVE(bhv_small_bubbles_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvBubbleParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBubbleParticleSpawner'),
    DISABLE_RENDERING(),
    SET_RANDOM_INT(oWaterObjUnkF4, /*Minimum*/ 2, /*Range*/ 9),
    DELAY_VAR(oWaterObjUnkF4),
    SPAWN_CHILD(/*Model*/ MODEL_BUBBLE, /*Behavior*/ bhvSmallWaterWave),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_BUBBLE),
    DEACTIVATE(),
]

export const bhvCannonBarrel = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCannonBarrel'),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_cannon_barrel_loop'),
    END_LOOP(),
]

export const bhvCannon = [
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
]

export const bhvKoopaShellUnderwater = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvKoopaShellUnderwater'),
    OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO  | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_koopa_shell_underwater_loop'),
    END_LOOP(),
]

export const bhvHiddenAt120Stars = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvHiddenAt120Stars'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_cannon_grill),
    SET_FLOAT(oCollisionDistance, 4000),
    CALL_NATIVE('bhv_castle_cannon_grate_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

export const bhvCoinFormationSpawn = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL, name: 'bhvCoinFormationSpawn' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_coin_formation_spawn_loop' } },
    { command: BhvCmds.end_loop }
]

export const bhvCoinFormation = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SPAWNER, name: 'bhvCoinFormation' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.call_native, args: { func: 'bhv_coin_formation_loop' } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_coin_formation_loop' } },
    { command: BhvCmds.end_loop }
]

export const bhvYellowCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL, name: 'bhvYellowCoin' } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.call_native, args: { func: 'bhv_yellow_coin_init' } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_yellow_coin_loop' } },
    { command: BhvCmds.end_loop }
]

export const bhvWingCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWingCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_wing_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wing_vanish_cap_loop'),
    END_LOOP(),
]

export const bhvMetalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMetalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_metal_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_metal_cap_loop'),
    END_LOOP(),
]

export const bhvNormalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvNormalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_normal_cap_init'),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE('bhv_normal_cap_loop'),
    END_LOOP(),
]

export const bhvVanishCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvVanishCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE('bhv_vanish_cap_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_wing_vanish_cap_loop'),
    END_LOOP(),
]

export const bhvStar = [
    BEGIN(OBJ_LIST_LEVEL),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE('bhv_init_room'),
    CALL_NATIVE('bhv_collect_star_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_collect_star_loop'),
    END_LOOP(),
]

export const bhvRedCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL, name: 'bhvRedCoin' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    ///{ command: BhvCmds.call_native, args: { func: bhv_init_room } },  TODO init room coin
    { command: BhvCmds.call_native, args: { func: bhv_red_coin_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_red_coin_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhv1upWalking = [
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

export const bhv1upRunningAway = [
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

export const bhv1upSliding = [
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

export const bhv1Up = [
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

export const bhv1upJumpOnApproach = [
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

export const bhvHidden1up = [
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

export const bhvHidden1upTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_trigger_loop'),
    END_LOOP(),
]

export const bhvHidden1upInPole = [
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

export const bhvHidden1upInPoleTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_in_pole_trigger_loop'),
    END_LOOP(),
]

export const bhvHidden1upInPoleSpawner = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_1up_hidden_in_pole_spawner_loop'),
    END_LOOP(),
]

export const bhvMovingYellowCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL, name: 'bhvMovingYellowCoin' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_hitbox, args: { radius: 100, height: 64 } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractionSubtype, value: INTERACT_COIN } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.call_native, args: { func: bhv_moving_yellow_coin_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_moving_yellow_coin_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }

]

export const bhvSingleCoinGetsSpawned = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL, name: 'bhvSingleCoinGetsSpawned' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.call_native, args: { func: 'bhv_coin_init' } },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 30, gravity: -400, bounciness: -70, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: 'bhv_coin_loop' } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhvGoldenCoinSparkles = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvGoldenCoinSparkles' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.begin_repeat, args: { count: 3 } },
        { command: BhvCmds.call_native, args: { func: 'bhv_golden_coin_sparkles_loop' } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvCoinSparkles = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT, name: 'bhvCoinSparkles' } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oGraphYOffset, value: 25 } },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.begin_repeat, args: { count: 8 } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.begin_repeat, args: { count: 2 } },
        { command: BhvCmds.call_native, args: { func: 'bhv_coin_sparkles_loop' } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvBowser = [
    BEGIN(OBJ_LIST_GENACTOR, "bhvBowser"),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_GRABBABLE),
    SET_HITBOX(/*Radius*/ 400, /*Height*/ 400),
    DROP_TO_FLOOR(),
    SET_HOME(),
    LOAD_ANIMATIONS(oAnimations, bowser_seg6_anims_06057690),
    SPAWN_CHILD(/*Model*/ MODEL_NONE, /*Behavior*/ 'bhvBowserBodyAnchor'),
    SPAWN_CHILD(/*Model*/ MODEL_BOWSER_BOMB_CHILD_OBJ, /*Behavior*/ 'bhvBowserFlameSpawn'),
    SPAWN_OBJ(/*Model*/ MODEL_NONE, /*Behavior*/ 'bhvBowserTailAnchor'),
    SET_INT(oNumLootCoins, 50),
    SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 0, /*Gravity*/ -400, /*Bounciness*/ -70, /*Drag strength*/ 1000, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
    SET_HOME(),
    CALL_NATIVE('bhv_bowser_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowser_loop'),
    END_LOOP(),
]

export const bhvBowserBodyAnchor = [
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

export const bhvBowserFlameSpawn = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvBowserFlameSpawn'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_MODEL(MODEL_NONE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowser_flame_spawn_loop'),
    END_LOOP(),
]

export const bhvExclamationBox = [
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

export const bhvRotatingExclamationMark = [
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

// export const bhvMips = [
//     BEGIN(OBJ_LIST_GENACTOR),
//     OR_INT(oFlags, (OBJ_FLAG_HOLDABLE | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     LOAD_ANIMATIONS(oAnimations, mips_seg6_anims_06015634),
//     SET_INT(oInteractType, INTERACT_GRABBABLE),
//     DROP_TO_FLOOR(),
//     SET_HITBOX(/*Radius*/ 50, /*Height*/ 75),
//     SET_INT(oIntangibleTimer, 0),
//     CALL_NATIVE(bhv_mips_init),
//     BEGIN_LOOP(),
//         CALL_NATIVE(bhv_mips_loop),
//     END_LOOP(),
// ]

export const bhvYoshi = [
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

// export const bhvKoopa = [
//     BEGIN(OBJ_LIST_PUSHABLE),
//     OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     DROP_TO_FLOOR(),
//     LOAD_ANIMATIONS(oAnimations, koopa_seg6_anims_06011364),
//     ANIMATE(9),
//     SET_HOME(),
//     SET_OBJ_PHYSICS(/*Wall hitbox radius*/ 50, /*Gravity*/ -400, /*Bounciness*/ 0, /*Drag strength*/ 0, /*Friction*/ 1000, /*Buoyancy*/ 200, /*Unused*/ 0, 0),
//     SCALE(/*Unused*/ 0, /*Field*/ 150),
//     SET_FLOAT(oKoopaAgility, 1),
//     CALL_NATIVE(bhv_koopa_init),
//     BEGIN_LOOP(),
//         CALL_NATIVE(bhv_koopa_update),
//     END_LOOP(),
// ]

// export const bhvKoopaRaceEndpoint = [
//     BEGIN(OBJ_LIST_DEFAULT),
//     OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
//     DROP_TO_FLOOR(),
//     SPAWN_CHILD_WITH_PARAM(/*Bhv param*/ 0, /*Model*/ MODEL_KOOPA_FLAG, /*Behavior*/ bhvKoopaFlag),
//     BEGIN_LOOP(),
//         CALL_NATIVE(bhv_koopa_race_endpoint_update),
//     END_LOOP(),
// ]

// export const bhvKoopaFlag = [
//     BEGIN(OBJ_LIST_POLELIKE),
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

export const bhvWaterBombCannon = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvWaterBombCannon'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_water_bomb_cannon_loop'),
    END_LOOP(),
]

export const bhvCannonBarrelBubbles = [
    BEGIN(OBJ_LIST_DEFAULT, 'bhvCannonBarrelBubbles'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bubble_cannon_barrel_loop'),
    END_LOOP(),
]

export const bhvPitBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvPitBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_bob_pit_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bob_pit_bowling_ball_loop'),
    END_LOOP(),
]

export const bhvFreeBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvFreeBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_free_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_free_bowling_ball_loop'),
    END_LOOP(),
]

export const bhvBowlingBall = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBowlingBall'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_FLOAT(oGraphYOffset, 130),
    CALL_NATIVE('bhv_bowling_ball_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_bowling_ball_loop'),
    END_LOOP(),
]

export const bhvTtmBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvTtmBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBBallSpawnerPeriodMinus1, 63),
    CALL_NATIVE('bhv_generic_bowling_ball_spawner_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_generic_bowling_ball_spawner_loop'),
    END_LOOP(),
]

export const bhvBobBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvBobBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBBallSpawnerPeriodMinus1, 127),
    CALL_NATIVE('bhv_generic_bowling_ball_spawner_init'),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_generic_bowling_ball_spawner_loop'),
    END_LOOP(),
]

export const bhvThiBowlingBallSpawner = [
    BEGIN(OBJ_LIST_GENACTOR, 'bhvThiBowlingBallSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_thi_bowling_ball_spawner_loop'),
    END_LOOP(),
]

export const bhvBreakableBox = [
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

export const bhvBreakableBoxSmall = [
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

const bhvDoorWarp = [
    BEGIN(OBJ_LIST_SURFACE, 'bhvDoorWarp'),
    SET_INT(oInteractType, INTERACT_WARP_DOOR),
    GOTO('bhvDoor', 2),
]

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
]

const bhvWarp = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWarp'),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_INT(oInteractType, INTERACT_WARP),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_warp_loop'),
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

const bhvSparkleSpawn = [
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
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oCollisionDistance, 30000),
    BEGIN_LOOP(),
        CALL_NATIVE('bhv_ddd_warp_loop'),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvRockSolid = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(jrb_seg7_collision_rock_solid),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvPillarBase = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(jrb_seg7_collision_pillar_base),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]
//placeholder bhvs
const bhvWaterLevelPillar = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(inside_castle_seg7_collision_water_level_pillar),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvHiddenStaircaseStep = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(bbh_seg7_collision_staircase_step),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

const bhvMerryGoRound = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA( bbh_seg7_collision_merry_go_round),
    BEGIN_LOOP(),
        CALL_NATIVE('SurfaceLoad.load_object_collision_model'),
    END_LOOP(),
]

gLinker.behaviors.bhv1Up = bhv1Up
gLinker.behaviors.bhvAirborneDeathWarp = bhvAirborneDeathWarp
gLinker.behaviors.bhvAirborneStarCollectWarp = bhvAirborneStarCollectWarp
gLinker.behaviors.bhvAirborneWarp = bhvAirborneWarp
gLinker.behaviors.bhvBird = bhvBird
gLinker.behaviors.bhvBobBowlingBallSpawner = bhvBobBowlingBallSpawner
gLinker.behaviors.bhvBobomb = bhvBobomb
gLinker.behaviors.bhvBobombBuddy = bhvBobombBuddy
gLinker.behaviors.bhvBobombFuseSmoke = bhvBobombFuseSmoke
gLinker.behaviors.bhvBowlingBall = bhvBowlingBall
gLinker.behaviors.bhvBowser = bhvBowser
gLinker.behaviors.bhvBowserBodyAnchor = bhvBowserBodyAnchor
gLinker.behaviors.bhvBowserFlameSpawn = bhvBowserFlameSpawn
gLinker.behaviors.bhvBreakableBox = bhvBreakableBox
gLinker.behaviors.bhvBreakableBoxSmall = bhvBreakableBoxSmall
gLinker.behaviors.bhvBreakBoxTriangle = bhvBreakBoxTriangle
gLinker.behaviors.bhvBubbleParticleSpawner = bhvBubbleParticleSpawner
gLinker.behaviors.bhvButterfly = bhvButterfly
gLinker.behaviors.bhvCannon = bhvCannon
gLinker.behaviors.bhvCannonBarrelBubbles = bhvCannonBarrelBubbles
gLinker.behaviors.bhvCannonClosed = bhvCannonClosed
gLinker.behaviors.bhvCarrySomething1 = bhvCarrySomething1
gLinker.behaviors.bhvCarrySomething2 = bhvCarrySomething2
gLinker.behaviors.bhvCarrySomething3 = bhvCarrySomething3
gLinker.behaviors.bhvCarrySomething4 = bhvCarrySomething4
gLinker.behaviors.bhvCarrySomething5 = bhvCarrySomething5
gLinker.behaviors.bhvCarrySomething6 = bhvCarrySomething6
gLinker.behaviors.bhvCastleFlagWaving = bhvCastleFlagWaving
gLinker.behaviors.bhvChainChomp = bhvChainChomp
gLinker.behaviors.bhvCheckerboardElevatorGroup = bhvCheckerboardElevatorGroup
gLinker.behaviors.bhvCoinFormation = bhvCoinFormation
gLinker.behaviors.bhvDddWarp = bhvDddWarp
gLinker.behaviors.bhvDeathWarp = bhvDeathWarp
gLinker.behaviors.bhvDoor = bhvDoor
gLinker.behaviors.bhvDoorWarp = bhvDoorWarp
gLinker.behaviors.bhvExclamationBox = bhvExclamationBox
gLinker.behaviors.bhvExplosion = bhvExplosion
gLinker.behaviors.bhvFish = bhvFish
gLinker.behaviors.bhvFishSpawner = bhvFishSpawner
gLinker.behaviors.bhvFlyingWarp = bhvFlyingWarp
gLinker.behaviors.bhvFreeBowlingBall = bhvFreeBowlingBall
gLinker.behaviors.bhvGoomba = bhvGoomba
gLinker.behaviors.bhvGoombaTripletSpawner = bhvGoombaTripletSpawner
gLinker.behaviors.bhvHardAirKnockBackWarp = bhvHardAirKnockBackWarp
gLinker.behaviors.bhvHidden1up = bhvHidden1up
gLinker.behaviors.bhvHidden1upInPoleSpawner = bhvHidden1upInPoleSpawner
gLinker.behaviors.bhvHidden1upTrigger = bhvHidden1upTrigger
gLinker.behaviors.bhvHiddenAt120Stars = bhvHiddenAt120Stars
gLinker.behaviors.bhvHiddenStaircaseStep = bhvHiddenStaircaseStep
gLinker.behaviors.bhvHorStarParticleSpawner = bhvHorStarParticleSpawner
gLinker.behaviors.bhvIdleWaterWave = bhvIdleWaterWave
gLinker.behaviors.bhvInstantActiveWarp = bhvInstantActiveWarp
gLinker.behaviors.bhvJumpingBox = bhvJumpingBox
gLinker.behaviors.bhvLaunchDeathWarp = bhvLaunchDeathWarp
gLinker.behaviors.bhvLaunchStarCollectWarp = bhvLaunchStarCollectWarp
gLinker.behaviors.bhvManyBlueFishSpawner = bhvManyBlueFishSpawner
gLinker.behaviors.bhvMario = bhvMario
gLinker.behaviors.bhvMerryGoRound = bhvMerryGoRound
gLinker.behaviors.bhvMessagePanel = bhvMessagePanel
gLinker.behaviors.bhvMetalCap = bhvMetalCap
gLinker.behaviors.bhvMistCircParticleSpawner = bhvMistCircParticleSpawner
gLinker.behaviors.bhvMistParticleSpawner = bhvMistParticleSpawner
gLinker.behaviors.bhvMoatGrills = bhvMoatGrills
gLinker.behaviors.bhvNormalCap = bhvNormalCap
gLinker.behaviors.bhvPaintingDeathWarp = bhvPaintingDeathWarp
gLinker.behaviors.bhvPaintingStarCollectWarp = bhvPaintingStarCollectWarp
gLinker.behaviors.bhvPillarBase = bhvPillarBase
gLinker.behaviors.bhvPitBowlingBall = bhvPitBowlingBall
gLinker.behaviors.bhvPlungeBubble = bhvPlungeBubble
gLinker.behaviors.bhvRedCoin = bhvRedCoin
gLinker.behaviors.bhvRockSolid = bhvRockSolid
gLinker.behaviors.bhvSeesawPlatform = bhvSeesawPlatform
gLinker.behaviors.bhvShallowWaterSplash = bhvShallowWaterSplash
gLinker.behaviors.bhvShallowWaterWave = bhvShallowWaterWave
gLinker.behaviors.bhvSingleCoinGetsSpawned = bhvSingleCoinGetsSpawned
gLinker.behaviors.bhvSmoke = bhvSmoke
gLinker.behaviors.bhvSparkle = bhvSparkle
gLinker.behaviors.bhvSparkleSpawn = bhvSparkleSpawn
gLinker.behaviors.bhvSpawnedStarNoLevelExit = bhvSpawnedStarNoLevelExit
gLinker.behaviors.bhvSpinAirborneCircleWarp = bhvSpinAirborneCircleWarp
gLinker.behaviors.bhvSpinAirborneWarp = bhvSpinAirborneWarp
gLinker.behaviors.bhvStaticObject = bhvStaticObject
gLinker.behaviors.bhvSwimmingWarp = bhvSwimmingWarp
gLinker.behaviors.bhvThiBowlingBallSpawner = bhvThiBowlingBallSpawner
gLinker.behaviors.bhvTree = bhvTree
gLinker.behaviors.bhvTriangleParticleSpawner = bhvTriangleParticleSpawner
gLinker.behaviors.bhvTripletButterfly = bhvTripletButterfly
gLinker.behaviors.bhvTtmBowlingBallSpawner = bhvTtmBowlingBallSpawner
gLinker.behaviors.bhvUnlockDoorStar = bhvUnlockDoorStar
gLinker.behaviors.bhvVanishCap = bhvVanishCap
gLinker.behaviors.bhvVertStarParticleSpawner = bhvVertStarParticleSpawner
gLinker.behaviors.bhvWarp = bhvWarp
gLinker.behaviors.bhvWaterBomb = bhvWaterBomb
gLinker.behaviors.bhvWaterBombCannon = bhvWaterBombCannon
gLinker.behaviors.bhvWaterBombShadow = bhvWaterBombShadow
gLinker.behaviors.bhvWaterBombSpawner = bhvWaterBombSpawner
gLinker.behaviors.bhvWaterDroplet = bhvWaterDroplet
gLinker.behaviors.bhvWaterDropletSplash = bhvWaterDropletSplash
gLinker.behaviors.bhvWaterLevelPillar = bhvWaterLevelPillar
gLinker.behaviors.bhvWaterMist2 = bhvWaterMist2
gLinker.behaviors.bhvWaterSplash = bhvWaterSplash
gLinker.behaviors.bhvWaveTrail = bhvWaveTrail
gLinker.behaviors.bhvWhitePuffExplosion = bhvWhitePuffExplosion
gLinker.behaviors.bhvWingCap = bhvWingCap
gLinker.behaviors.bhvWoodenPost = bhvWoodenPost
gLinker.behaviors.bhvYellowCoin = bhvYellowCoin
gLinker.behaviors.bhvYoshi = bhvYoshi
