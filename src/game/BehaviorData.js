import { BehaviorCommandsInstance as BhvCmds                } from "../engine/BehaviorCommands"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor"
import { SurfaceLoadInstance as SurfaceLoad                 } from "./SurfaceLoad"
import { gLinker                                            } from "./Linker"

import { ADD_INT, ADD_FLOAT, ANIMATE, BEGIN, BEGIN_LOOP, BEGIN_REPEAT, BILLBOARD, CALL,
    CALL_NATIVE, DEACTIVATE, DEBUGGER, DELAY, DELAY_VAR, DISABLE_RENDERING,
    DROP_TO_FLOOR, END_LOOP, END_REPEAT, END_REPEAT_CONTINUE, GOTO, HIDE,
    LOAD_ANIMATIONS, LOAD_COLLISION_DATA, OR_INT, PARENT_BIT_CLEAR, RETURN, SCALE,
    SET_FLOAT, SET_HITBOX, SET_HITBOX_WITH_OFFSET, SET_HOME, SET_INT, SET_INTERACT_TYPE,
    SET_RANDOM_INT, SET_RANDOM_FLOAT, SUM_FLOAT, SPAWN_CHILD, SPAWN_WATER_DROPLET
} from "../engine/BehaviorCommands"

import { INTERACT_WATER_RING,
         INTERACT_POLE,
         INTERACT_DAMAGE,
         INTERACT_COIN,
         INTERACT_TEXT,
         INT_SUBTYPE_SIGN,
         INTERACT_PLAYER,
         INTERACT_CANNON_BASE } from "./Interaction"
import { oFlags,
            OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, OBJ_FLAG_COMPUTE_DIST_TO_MARIO,
            OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW,
            OBJ_FLAG_PERSISTENT_RESPAWN, OBJ_FLAG_HOLDABLE, OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL,
            OBJ_FLAG_MOVE_XZ_USING_FVEL, OBJ_FLAG_ACTIVE_FROM_AFAR,

         oActiveParticleFlags,
            ACTIVE_PARTICLE_H_STAR, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_TRIANGLE,
            ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_BUBBLE, ACTIVE_PARTICLE_WATER_SPLASH,
            ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE,
            ACTIVE_PARTICLE_WAVE_TRAIL, ACTIVE_PARTICLE_PLUNGE_BUBBLE,

         oDamageOrCoinValue, oAnimState, oInteractType, oInteractionSubtype, oAnimations,
         oIntangibleTimer, oGraphYOffset, oNumLootCoins, oCollisionDistance,
         oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll,
         oWoodenPostTotalMarioAngle, oInteractStatus, oMoveAngleYaw,
         oWaterObjUnkF4, oWaterObjUnkF8, oWaterObjUnkFC, oBehParams2ndByte      } from "../include/object_constants"

import { MODEL_WOODEN_POST,
         MODEL_MIST,
         MODEL_SMOKE,
         MODEL_BUBBLE,
         MODEL_CANNON_BARREL } from "../include/model_ids"

import { bhv_pole_base_loop                             } from "./behaviors/pole_base.inc"
import { bhv_pole_init, bhv_giant_pole_loop             } from "./behaviors/pole.inc"
import { bhv_castle_flag_init, bhv_castle_flag_loop     } from "./behaviors/bhv_castle_flag_init.inc"
import { bhv_checkerboard_elevator_group_init,
         bhv_checkerboard_platform_init,
         bhv_checkerboard_platform_loop                 } from "./behaviors/checkerboard_platform.inc"
import { bhv_seesaw_platform_init,
         bhv_seesaw_platform_update                     } from "./behaviors/seesaw_platform.inc"
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
import { bhv_wooden_post_update,
         bhv_chain_chomp_update,
         bhv_chain_chomp_chain_part_update              } from "./behaviors/chain_chomp.inc"
import { chain_chomp_seg6_anims_06025178                } from "../actors/chain_chomp/anims/table.inc"
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
import { bhv_coin_formation_init,
         bhv_coin_formation_loop,
         bhv_coin_formation_spawn_loop,
         bhv_yellow_coin_init,
         bhv_yellow_coin_loop,
         bhv_golden_coin_sparkles_loop,
         bhv_coin_sparkles_loop,
         bhv_coin_init,
         bhv_coin_loop                                  } from "./behaviors/coin.inc"
import { bhv_red_coin_init,
         bhv_red_coin_loop                              } from "./behaviors/red_coin.inc"
import { bhv_moving_yellow_coin_init,
         bhv_moving_yellow_coin_loop                    } from "./behaviors/moving_coin.inc"
import { bhv_water_mist_2_loop                          } from "./behaviors/water_mist.inc"
import { bhv_moat_grills_loop                           } from "./behaviors/moat_grill.inc"
import { gShallowWaterWaveDropletParams,
         gShallowWaterSplashDropletParams,
         bhv_shallow_water_splash_init,
         bhv_idle_water_wave_loop,
         bhv_wave_trail_shrink,
         bhv_water_splash_spawn_droplets,
         bhv_water_droplet_loop,
         bhv_water_droplet_splash_init,
         bhv_bubble_splash_init                         } from "./behaviors/water_splashes_and_waves.inc"
import { bhv_castle_cannon_grate_init                   } from "./behaviors/castle_cannon_grate.inc"
import { bhv_cannon_base_loop,
         bhv_cannon_barrel_loop                         } from "./behaviors/cannon.inc"
import { bhv_sound_spawner_init                         } from "./behaviors/sound_spawner.inc"
import { bhv_extra_mario_base_loop                      } from "./behaviors/extra_mario.inc"

import { castle_grounds_seg7_anims_flags } from "../levels/castle_grounds/areas/1/11/anim.inc"
import { goomba_seg8_anims_0801DA4C      } from "../actors/goomba/anims/table.inc"
import { bobomb_seg8_anims_0802396C      } from "../actors/bobomb/anims.inc"

import { checkerboard_platform_seg8_collision_0800D710 } from "../actors/checkerboard_platform/collision.inc"
import { poundable_pole_collision_06002490             } from "../actors/poundable_pole/collision.inc"
import { castle_grounds_seg7_collision_moat_grills     } from "../levels/castle_grounds/areas/1/7/collision.inc"
import { castle_grounds_seg7_collision_cannon_grill    } from "../levels/castle_grounds/areas/1/8/collision.inc"


const OBJ_LIST_PLAYER = 0     //  (0) mario
const OBJ_LIST_UNUSED_1 = 1    //  (1) (unused)
const OBJ_LIST_DESTRUCTIVE = 2 //  (2) things that can be used to destroy other objects, like
//      bob-ombs and corkboxes
const OBJ_LIST_UNUSED_3 = 3   //  (3) (unused)
const OBJ_LIST_GENACTOR = 4   //  (4) general actors. most normal 'enemies' or actors are
//      on this list. (MIPS, bullet bill, bully, etc)
const OBJ_LIST_PUSHABLE = 5   //  (5) pushable actors. This is a group of objects which
//      can push each other around as well as their parent
//      objects. (goombas, koopas, spinies)
const OBJ_LIST_LEVEL = 6     //  (6) level objects. general level objects such as heart, star
const OBJ_LIST_UNUSED_7 = 7  //  (7) (unused)
const OBJ_LIST_DEFAULT = 8     //  (8) default objects. objects that didnt start with a 00
//      command are put here, so this is treated as a default.
const OBJ_LIST_SURFACE = 9     //  (9) surface objects. objects that specifically have surface
//      collision and not object collision. (thwomp, whomp, etc)
const OBJ_LIST_POLELIKE = 10    // (10) polelike objects. objects that attract or otherwise
//      "cling" mario similar to a pole action. (hoot,
//      whirlpool, trees/poles, etc)
const OBJ_LIST_SPAWNER = 11     // (11) spawners
const OBJ_LIST_UNIMPORTANT = 12 // (12) unimportant objects. objects that will not load
//      if there are not enough object slots: they will also
//      be manually unloaded to make room for slots if the list
//      gets exhausted.
const NUM_OBJ_LISTS = 13

export const bhvMario = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PLAYER } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_hitbox, args: { radius: 37, height: 160 } },
    { command: BhvCmds.set_interact_type, args: { type: INTERACT_PLAYER } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: ObjectListProcessor.bhv_mario_update, funcClass: ObjectListProcessor } },
    { command: BhvCmds.end_loop },
]

export const bhvExtraMario = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PLAYER } },
    { command: BhvCmds.set_int, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_hitbox, args: { radius: 37, height: 160 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_extra_mario_base_loop } },
    { command: BhvCmds.end_loop },
]

window.bhvExtraMario = bhvExtraMario

export const bhvTree = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 500 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_pole_base_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvYellowBall = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.cyclboard },
    { command: BhvCmds.break },
]

export const bhvGiantPole = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 2100 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_giant_pole_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvPoleGrabbing = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_objectData_value, args: { field: oInteractType, value: INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 1500 } },
	{ command: BhvCmds.call_native, args: { func: bhv_pole_init } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_pole_base_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvStaticObject = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.break },
]

export const bhvCastleFlagWaving = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: castle_grounds_seg7_anims_flags } },
    { command: BhvCmds.animate, args: { animIndex: 0 } },
    { command: BhvCmds.call_native, args: { func: bhv_castle_flag_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_castle_flag_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvCheckerboardPlatformSub = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.load_collision_data, args: { data: checkerboard_platform_seg8_collision_0800D710 } },
    { command: BhvCmds.call_native, args: { func: bhv_checkerboard_platform_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_checkerboard_platform_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvCheckerboardElevatorGroup = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SPAWNER } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: bhv_checkerboard_elevator_group_init } },
    { command: BhvCmds.set_home },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvMoatGrills = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_moat_grills),
    SET_FLOAT(oCollisionDistance, 30000),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_moat_grills_loop),
    END_LOOP(),
]

let _bhvSeesawPlatform;
export const bhvSeesawPlatform = () => {return _bhvSeesawPlatform ||= [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.call_native, args: { func: bhv_seesaw_platform_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_seesaw_platform_update } },
        { command: BhvCmds.call_native, args: { func: SurfaceLoad.load_object_collision_model, funcClass: SurfaceLoad } },
    { command: BhvCmds.end_loop },
]}

export const bhvRespawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_respawner_loop } },
    { command: BhvCmds.end_loop },
]

// const BehaviorScript bhvBobombBuddy[] = {

// const BehaviorScript bhvBobombBuddyOpensCannon[] = {

import { cannon_lid_seg8_collision_08004950 } from "../actors/cannon_lid/collision.inc"
import { bhv_cannon_closed_init, bhv_cannon_closed_loop } from "./behaviors/cannon_door.inc"

let _bhvCannonClosed;
export const bhvCannonClosed = () => {return _bhvCannonClosed ||= [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, (OBJ_FLAG_PERSISTENT_RESPAWN | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(cannon_lid_seg8_collision_08004950),
    SET_HOME(),
    CALL_NATIVE(bhv_cannon_closed_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_cannon_closed_loop),
        CALL_NATIVE(SurfaceLoad.load_object_collision_model, SurfaceLoad),
    END_LOOP(),
]}

// const BehaviorScript bhvWhirlpool[] = {

// const BehaviorScript bhvJetStream[] = {

import { wooden_signpost_seg3_collision_0302DD80 } from "../actors/wooden_signpost/collision.inc"

let _bhvMessagePanel;
export const bhvMessagePanel = () => {return _bhvMessagePanel ||= [
    BEGIN(OBJ_LIST_SURFACE),
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
        CALL_NATIVE(SurfaceLoad.load_object_collision_model, SurfaceLoad),
        SET_INT(oInteractStatus, 0),
    END_LOOP(),
]}

export const bhvSignOnWall = [
    BEGIN(OBJ_LIST_SURFACE),
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

export const bhvGoomba = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PUSHABLE } },
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
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PUSHABLE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_goomba_triplet_spawner_update } },
    { command: BhvCmds.end_loop }
]

export const bhvBobomb = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DESTRUCTIVE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_PERSISTENT_RESPAWN | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_HOLDABLE | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW } },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: bobomb_seg8_anims_0802396C } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.animate, args: { animIndex: 0 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_home },
    { command: BhvCmds.call_native, args: { func: bhv_bobomb_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_bobomb_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvExplosion = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DESTRUCTIVE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_interact_type, args: { type: INTERACT_DAMAGE } },
    { command: BhvCmds.set_objectData_value, args: { field: oDamageOrCoinValue, value: 2 } },
    { command: BhvCmds.set_objectData_value, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_hitbox_with_offset, args: { radius: 150, height: 150, downOffset: 150 } },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.call_native, args: { func: bhv_explosion_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_explosion_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhvBobombFuseSmoke = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.call_native, args: { func: bhv_bobomb_fuse_smoke_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_dust_smoke_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhvBobombBullyDeathSmoke = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
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

let _bhvWoodenPost;
export const bhvWoodenPost = () => {return _bhvWoodenPost ||= [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE } },
    { command: BhvCmds.load_collision_data, args: { data: poundable_pole_collision_06002490 } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 0, gravity: -400, bounciness: -50, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.set_objectData_value, args: { field: oNumLootCoins, value: 5 } },
    { command: BhvCmds.drop_to_floor },
    { command: BhvCmds.set_home },
    { command: BhvCmds.scale, args: { percent: 50 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_wooden_post_update } },
        { command: BhvCmds.call_native, args: { func: SurfaceLoad.load_object_collision_model, funcClass: SurfaceLoad } },
    { command: BhvCmds.end_loop }
]}

export const bhvChainChomp = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_GENACTOR } },
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
        { command: BhvCmds.call_native, args: { func: bhv_chain_chomp_update } },
    { command: BhvCmds.end_loop }
]

export const bhvChainChompChainPart = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_GENACTOR } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 0, gravity: -400, bounciness: -50, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.set_objectData_value, args: { field: oGraphYOffset, value: 40 } },
    { command: BhvCmds.scale, args: { percent: 200 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_chain_chomp_chain_part_update } },
    { command: BhvCmds.end_loop }
]

export const bhvHorStarParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_H_STAR } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: bhv_pound_tiny_star_particle_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvVertStarParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_V_STAR } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.call_native, args: { func: bhv_tiny_star_particles_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvTriangleParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_TRIANGLE } },
        { command: BhvCmds.call_native, args: { func: bhv_punch_tiny_triangle_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]

export const bhvPoundTinyStarParticle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_repeat, args: { count: 10 } },
        { command: BhvCmds.call_native, args: { func: bhv_pound_tiny_star_particle_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvWallTinyStarParticle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_repeat, args: { count: 10 } },
    { command: BhvCmds.call_native, args: { func: bhv_wall_tiny_star_particle_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvPunchTinyTriangle = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_punch_tiny_triangle_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvWhitePuff1 = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_DUST } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_1_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvWhitePuff2 = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_MOVE_XZ_USING_FVEL } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.begin_repeat, args: { count: 7 } },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_2_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

import {
    cur_obj_rotate_face_angle_using_vel, cur_obj_move_using_fvel_and_gravity
} from "./ObjectHelpers"

export const bhvBreakBoxTriangle = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_REPEAT(18),
        CALL_NATIVE(cur_obj_rotate_face_angle_using_vel),
        CALL_NATIVE(cur_obj_move_using_fvel_and_gravity),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvWaterMist2 = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SET_HOME(),
    SET_INT(oFaceAnglePitch, 0xC000),
    SCALE(/*Unused*/ 0, /*Field*/ 2100),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_water_mist_2_loop),
    END_LOOP(),
]

export const bhvMistParticleSpawner = [
    /*{ command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.parent_bit_clear, args: { field: oActiveParticleFlags, value: ACTIVE_PARTICLE_DUST } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.spawn_child_with_param, args: { bhvParam: 0, model: MODEL_MIST, behavior: bhvWhitePuff1 } },
    { command: BhvCmds.spawn_child_with_param, args: { bhvParam: 0, model: MODEL_SMOKE, behavior: bhvWhitePuff2 } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }*/
    BEGIN(OBJ_LIST_DEFAULT),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_DUST),
    DISABLE_RENDERING(),
    SPAWN_CHILD(/*Model*/ MODEL_MIST,  /*Behavior*/ bhvWhitePuff1),
    SPAWN_CHILD(/*Model*/ MODEL_SMOKE, /*Behavior*/ bhvWhitePuff2),
    DELAY(1),
    DEACTIVATE(),
]

export const bhvMistCircParticleSpawner = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
        { command: BhvCmds.call_native, args: { func: bhv_pound_white_puffs_init } },
    { command: BhvCmds.delay, args: { num: 1 } },
    { command: BhvCmds.deactivate }
]


import { bhv_spawned_star_init, bhv_spawned_star_loop } from "./behaviors/sparkle_spawn_star.inc"

let _bhvSpawnedStar;
export const bhvSpawnedStar = () => {return _bhvSpawnedStar ||= [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStar'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oBehParams2ndByte, 1),
    GOTO(bhvSpawnedStarNoLevelExit, 2),
]}

let _bhvSpawnedStarNoLevelExit;
export const bhvSpawnedStarNoLevelExit = () => {return _bhvSpawnedStarNoLevelExit ||= [
    BEGIN(OBJ_LIST_LEVEL, 'bhvSpawnedStarNoLevelExit'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    // Spawned star - common:
    SET_HOME(),
    CALL_NATIVE(bhv_spawned_star_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_spawned_star_loop),
    END_LOOP(),
]}


import {
    bhv_fish_loop,
    bhv_fish_spawner_loop
} from "./behaviors/fish.inc"

export const bhvFish = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_fish_loop),
    END_LOOP(),
]

export const bhvFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT),
    // Fish Spawner - common
    DISABLE_RENDERING(),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_fish_spawner_loop),
    END_LOOP(),
]

export const bhvManyBlueFishSpawner = [
    BEGIN(OBJ_LIST_DEFAULT),
    SET_INT(oBehParams2ndByte, 0),
    // GOTO(bhvFishSpawner, )]
    DISABLE_RENDERING(),
    OR_INT(oFlags, OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_fish_spawner_loop),
    END_LOOP(),
]


import {
    butterfly_seg3_anims_030056B0
} from "../actors/butterfly/anims.inc"
import {
    bhv_butterfly_init,
    bhv_butterfly_loop
} from "./behaviors/butterfly.inc"

export const bhvButterfly = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_ANIMATIONS(oAnimations, butterfly_seg3_anims_030056B0),
    DROP_TO_FLOOR(),
    SET_FLOAT(oGraphYOffset, 5),
    CALL_NATIVE(bhv_butterfly_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_butterfly_loop),
    END_LOOP(),
]

// start of import birds in castle grounds
import {
    birds_seg5_anims_050009E8
} from "../actors/bird/anims.inc.js"
import {
    bhv_bird_update
} from "./behaviors/bird.inc.js"

export const bhvBird = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_ANIMATIONS(oAnimations, birds_seg5_anims_050009E8),
    ANIMATE(0),
    HIDE(),
    SCALE(/*Unused*/ 0, /*Field*/ 70),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_bird_update),
    END_LOOP(),
]

// The large splash Mario makes when he jumps into a pool of water.
export const bhvWaterSplash = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(3),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE(bhv_water_splash_spawn_droplets),
        DELAY(1),
        CALL_NATIVE(bhv_water_splash_spawn_droplets),
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
    BEGIN(OBJ_LIST_UNIMPORTANT),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_MOVE_XZ_USING_FVEL | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_water_droplet_loop),
    END_LOOP(),
]

// Small splashes that are seen when a water droplet lands back into the water.
export const bhvWaterDropletSplash = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    CALL_NATIVE(bhv_water_droplet_splash_init),
    ADD_FLOAT(oPosY, 5),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(6),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

// The splash created when an air bubble hits the surface of the water.
export const bhvBubbleSplash = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    CALL_NATIVE(bhv_bubble_splash_init),
    BEGIN_REPEAT(6),
        ADD_INT(oAnimState, 1),
    END_REPEAT(),
    DEACTIVATE(),
]

// The water wave surrounding Mario when he is idle in a pool of water.
export const bhvIdleWaterWave = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_INT(oFaceAnglePitch, 0),
    SET_INT(oFaceAngleYaw, 0),
    SET_INT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    ADD_INT(oAnimState, 1),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_idle_water_wave_loop),
        ADD_INT(oAnimState, 1),
        BEGIN_REPEAT(6),
            CALL_NATIVE(bhv_idle_water_wave_loop),
        END_REPEAT(),
        CALL_NATIVE(bhv_idle_water_wave_loop),
    END_LOOP(),
]

// Water splashes similar to the splashes created by water droplets, but are created by other objects.
// Unlike water droplet splashes, they are unimportant objects.
export const bhvObjectWaterSplash = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
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
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DISABLE_RENDERING(),
    BEGIN_REPEAT(5),
        SPAWN_WATER_DROPLET(gShallowWaterWaveDropletParams),
    END_REPEAT_CONTINUE(),
    DELAY(1),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE),
    DEACTIVATE(),
]

// A small water splash that occurs when jumping in and out of shallow water.
// Unlike the larger water splash it has no visible model of its own.
// It has a 1 in 256 chance of spawning the fish particle easter egg.
export const bhvShallowWaterSplash = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DISABLE_RENDERING(),
    BEGIN_REPEAT(18),
        SPAWN_WATER_DROPLET(gShallowWaterSplashDropletParams),
    END_REPEAT_CONTINUE(),
    CALL_NATIVE(bhv_shallow_water_splash_init),
    DELAY(1),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH),
    DEACTIVATE(),
]

// Waves created by other objects along the water's surface, specifically the koopa shell and Sushi.
// Unlike Mario's waves, they are unimportant objects.
let _bhvObjectWaveTrail;
export const bhvObjectWaveTrail = () => {return _bhvObjectWaveTrail ||= [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    GOTO(bhvWaveTrail, 3), // Wave trail - common
]}

// The waves created by Mario while he is swimming.
export const bhvWaveTrail = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_WAVE_TRAIL),
    // Wave trail - common
    SET_FLOAT(oFaceAnglePitch, 0),
    SET_FLOAT(oFaceAngleYaw, 0),
    SET_FLOAT(oFaceAngleRoll, 0),
    SET_INT(oAnimState, -1),
    BEGIN_REPEAT(8),
        ADD_INT(oAnimState, 1),
        CALL_NATIVE(bhv_wave_trail_shrink),
        DELAY(1),
        CALL_NATIVE(bhv_wave_trail_shrink),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvWhitePuffExplosion = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_UNIMPORTANT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_white_puff_exploding_loop } },
    { command: BhvCmds.end_loop }
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
    BEGIN(OBJ_LIST_UNIMPORTANT),
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
    BEGIN(OBJ_LIST_LEVEL),
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
    BEGIN(OBJ_LIST_UNIMPORTANT),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(70),
        CALL_NATIVE(bhv_particle_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvPlungeBubble = [
    BEGIN(OBJ_LIST_DEFAULT),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_PLUNGE_BUBBLE),
    DISABLE_RENDERING(),
    CALL_NATIVE(bhv_water_waves_init),
    DEACTIVATE(),
]

export const bhvSmallParticleSnow = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(30),
        CALL_NATIVE(bhv_particle_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvSmallParticleBubbles = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    BILLBOARD(),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    CALL_NATIVE(bhv_particle_init),
    BEGIN_REPEAT(70),
        CALL_NATIVE(bhv_small_bubbles_loop),
    END_REPEAT(),
    DEACTIVATE(),
]

export const bhvBubbleParticleSpawner = [
    BEGIN(OBJ_LIST_DEFAULT),
    DISABLE_RENDERING(),
    SET_RANDOM_INT(oWaterObjUnkF4, /*Minimum*/ 2, /*Range*/ 9),
    DELAY_VAR(oWaterObjUnkF4),
    SPAWN_CHILD(/*Model*/ MODEL_BUBBLE, /*Behavior*/ bhvSmallWaterWave),
    PARENT_BIT_CLEAR(oActiveParticleFlags, ACTIVE_PARTICLE_BUBBLE),
    DEACTIVATE(),
]

let _bhvCannonBarrel;
export const bhvCannonBarrel = () => {return _bhvCannonBarrel ||= [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    DROP_TO_FLOOR(),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_cannon_barrel_loop),
    END_LOOP(),
]}

let _bhvCannon;
export const bhvCannon = () => {return _bhvCannon ||= [
    BEGIN(OBJ_LIST_LEVEL),
    OR_INT(oFlags, (OBJ_FLAG_ACTIVE_FROM_AFAR | OBJ_FLAG_COMPUTE_DIST_TO_MARIO | OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SPAWN_CHILD(/*Model*/ MODEL_CANNON_BARREL, /*Behavior*/ bhvCannonBarrel),
    SET_INT(oInteractType, INTERACT_CANNON_BASE),
    ADD_FLOAT(oPosY, -340),
    SET_HOME(),
    SET_HITBOX(/*Radius*/ 150, /*Height*/ 150),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_cannon_base_loop),
    END_LOOP(),
]}

let _bhvHiddenAt120Stars;
export const bhvHiddenAt120Stars = () => {return _bhvHiddenAt120Stars ||= [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    LOAD_COLLISION_DATA(castle_grounds_seg7_collision_cannon_grill),
    SET_FLOAT(oCollisionDistance, 4000),
    CALL_NATIVE(bhv_castle_cannon_grate_init),
    BEGIN_LOOP(),
        CALL_NATIVE(SurfaceLoad.load_object_collision_model, SurfaceLoad),
    END_LOOP(),
]}

export const bhvCoinFormationSpawn = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_coin_formation_spawn_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvCoinFormation = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SPAWNER } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.call_native, args: { func: bhv_coin_formation_loop } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_coin_formation_loop } },
    { command: BhvCmds.end_loop }
]

export const bhvYellowCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE | OBJ_FLAG_COMPUTE_DIST_TO_MARIO } },
    { command: BhvCmds.call_native, args: { func: bhv_yellow_coin_init } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_yellow_coin_loop } },
    { command: BhvCmds.end_loop }
]

import { bhv_metal_cap_init,
         bhv_metal_cap_loop,
         bhv_normal_cap_init,
         bhv_normal_cap_loop,
         bhv_vanish_cap_init,
         bhv_wing_cap_init,
         bhv_wing_vanish_cap_loop
} from "./behaviors/cap.inc"

let _bhvWingCap;
export const bhvWingCap = () => {return _bhvWingCap ||= [
    BEGIN(OBJ_LIST_LEVEL, 'bhvWingCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE(bhv_wing_cap_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_wing_vanish_cap_loop),
    END_LOOP(),
]}

export const bhvMetalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvMetalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE(bhv_metal_cap_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_metal_cap_loop),
    END_LOOP(),
]

export const bhvNormalCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvNormalCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE(bhv_normal_cap_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_normal_cap_loop),
    END_LOOP(),
]

export const bhvVanishCap = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvVanishCap'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    CALL_NATIVE(bhv_vanish_cap_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_wing_vanish_cap_loop),
    END_LOOP(),
]

// export const bhvStar = [
//     BEGIN(OBJ_LIST_LEVEL),
//     OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
//     CALL_NATIVE(bhv_init_room),
//     CALL_NATIVE(bhv_collect_star_init),
//     BEGIN_LOOP(),
//         CALL_NATIVE(bhv_collect_star_loop),
//     END_LOOP(),
// ]

export const bhvRedCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL } },
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


import { bhv_1up_common_init,
         bhv_1up_hidden_in_pole_loop,
         bhv_1up_hidden_in_pole_spawner_loop,
         bhv_1up_hidden_in_pole_trigger_loop,
         bhv_1up_hidden_loop,
         bhv_1up_hidden_trigger_loop,
         bhv_1up_init,
         bhv_1up_jump_on_approach_loop,
         bhv_1up_loop,
         bhv_1up_running_away_loop,
         bhv_1up_sliding_loop,
         bhv_1up_walking_loop
} from "./behaviors/mushroom_1up.inc"

export const bhv1upWalking = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upWalking'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_1up_walking_loop),
    END_LOOP(),
]

export const bhv1upRunningAway = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upRunningAway'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_1up_running_away_loop),
    END_LOOP(),
]

export const bhv1upSliding = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upSliding'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_1up_sliding_loop),
    END_LOOP(),
]

export const bhv1Up = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1Up'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_1up_loop),
    END_LOOP(),
]

export const bhv1upJumpOnApproach = [
    BEGIN(OBJ_LIST_LEVEL, 'bhv1upJumpOnApproach'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_1up_jump_on_approach_loop),
    END_LOOP(),
]

export const bhvHidden1up = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1up'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_1up_hidden_loop),
    END_LOOP(),
]

export const bhvHidden1upTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_1up_hidden_trigger_loop),
    END_LOOP(),
]

export const bhvHidden1upInPole = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPole'),
    OR_INT(oFlags, (OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    BILLBOARD(),
    SET_HITBOX_WITH_OFFSET(/*Radius*/ 30, /*Height*/ 30, /*Downwards offset*/ 0),
    SET_FLOAT(oGraphYOffset, 30),
    CALL_NATIVE(bhv_1up_common_init),
    BEGIN_LOOP(),
        SET_INT(oIntangibleTimer, 0),
        CALL_NATIVE(bhv_1up_hidden_in_pole_loop),
    END_LOOP(),
]

export const bhvHidden1upInPoleTrigger = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleTrigger'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_HITBOX(/*Radius*/ 100, /*Height*/ 100),
    SET_INT(oIntangibleTimer, 0),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_1up_hidden_in_pole_trigger_loop),
    END_LOOP(),
]

export const bhvHidden1upInPoleSpawner = [
    BEGIN(OBJ_LIST_LEVEL, 'bhvHidden1upInPoleSpawner'),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_1up_hidden_in_pole_spawner_loop),
    END_LOOP(),
]

export const bhvMovingYellowCoin = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL } },
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
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_LEVEL } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.call_native, args: { func: bhv_coin_init } },
    { command: BhvCmds.set_obj_physics, args: { hitboxRadius: 30, gravity: -400, bounciness: -70, dragStrenth: 1000, friction: 1000, buoyancy: 200 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_coin_loop } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_loop }
]

export const bhvGoldenCoinSparkles = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.disable_rendering },
    { command: BhvCmds.begin_repeat, args: { count: 3 } },
        { command: BhvCmds.call_native, args: { func: bhv_golden_coin_sparkles_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvCoinSparkles = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.billboard },
    { command: BhvCmds.set_objectData_value, args: { field: oGraphYOffset, value: 25 } },
    { command: BhvCmds.set_objectData_value, args: { field: oAnimState, value: -1 } },
    { command: BhvCmds.begin_repeat, args: { count: 8 } },
        { command: BhvCmds.add_number, args: { field: oAnimState, value: 1 } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.begin_repeat, args: { count: 2 } },
        { command: BhvCmds.call_native, args: { func: bhv_coin_sparkles_loop } },
    { command: BhvCmds.end_repeat },
    { command: BhvCmds.deactivate }
]

export const bhvCollisionObj = (col) => {
    return [
        { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_SURFACE } },
        { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
        { command: BhvCmds.load_collision_data, args: { data: col } },
        { command: BhvCmds.begin_loop },
            { command: BhvCmds.call_native, args: { func: SurfaceLoad.load_object_collision_model, funcClass: SurfaceLoad } },
        { command: BhvCmds.end_loop },
    ]
}

const bhvBowser = []

import { exclamation_box_outline_seg8_collision_08025F78 } from "../actors/exclamation_box_outline/collision.inc"
import { bhv_rotating_exclamation_box_loop, bhv_exclamation_box_loop } from "./behaviors/exclamation_box.inc"

export const bhvExclamationBox = [
    BEGIN(OBJ_LIST_SURFACE),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    LOAD_COLLISION_DATA(exclamation_box_outline_seg8_collision_08025F78),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    SET_FLOAT(oCollisionDistance, 300),
    SET_HOME(),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_exclamation_box_loop),
    END_LOOP(),
]

export const bhvRotatingExclamationMark = [
    BEGIN(OBJ_LIST_DEFAULT),
    OR_INT(oFlags, (OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW | OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE)),
    SCALE(/*Unused*/ 0, /*Field*/ 200),
    BEGIN_LOOP(),
        CALL_NATIVE(bhv_rotating_exclamation_box_loop),
        ADD_INT(oMoveAngleYaw, 0x800),
    END_LOOP(),
]

export const bhvSoundSpawner = [
    BEGIN(OBJ_LIST_UNIMPORTANT),
    OR_INT(oFlags, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE),
    DELAY(3),
    CALL_NATIVE(bhv_sound_spawner_init),
    DELAY(30),
    DEACTIVATE(),
]

gLinker.behaviors = {
    bhvBowser,
    bhvMario,
    bhvWhitePuffExplosion,
    bhvSingleCoinGetsSpawned,
    bhvWaterDroplet,
    bhvWaterDropletSplash,

    // particles
    bhvMistParticleSpawner,
    bhvVertStarParticleSpawner,
    bhvHorStarParticleSpawner,
    // bhvSparkleParticleSpawner,
    bhvBubbleParticleSpawner,
    bhvWaterSplash,
    bhvIdleWaterWave,
    bhvPlungeBubble,
    bhvWaveTrail,
    // bhvFireParticleSpawner,
    bhvShallowWaterWave,
    bhvShallowWaterSplash,
    // bhvLeafParticleSpawner,
    // bhvSnowParticleSpawner,
    // bhvBreathParticleSpawner,
    // bhvDirtParticleSpawner,
    bhvMistCircParticleSpawner,
    bhvTriangleParticleSpawner
}