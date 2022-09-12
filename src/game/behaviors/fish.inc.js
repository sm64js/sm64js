import * as _Linker from "../../game/Linker"
import {  spawn_object, obj_init_animation_with_sound, obj_translate_xyz_random,
cur_obj_resolve_wall_collisions, obj_mark_for_deletion, cur_obj_move_using_fvel_and_gravity,
cur_obj_scale, cur_obj_init_animation_with_accel_and_sound, approach_symmetric,
cur_obj_rotate_yaw_toward } from "../ObjectHelpers"
import { is_point_within_radius_of_mario, set_object_visibility } from "../ObjBehaviors"
import { int16, int32, random_float, sins, coss } from "../../utils"
import { atan2s } from "../../engine/math_util"
import { oPosX, oPosY, oPosZ, oVelX, oVelY, oVelZ, oMoveAngleYaw, oMoveAnglePitch,
oBehParams2ndByte, oWallHitboxRadius, oDistanceToMario, oAngleToMario, oTimer, oForwardVel, oAction,
oAnimState } from "../../include/object_constants"
import { LEVEL_SA } from "../../levels/level_defines_constants"
import { FLOOR_LOWER_LIMIT_MISC } from "../../include/surface_terrains"
import { MODEL_FISH, MODEL_CYAN_FISH } from "../../include/model_ids"
import { blue_fish_seg3_anims_0301C2B0 } from "../../actors/blue_fish/anims.inc"
import { cyan_fish_seg6_anims_0600E264 } from "../../actors/cyan_fish/anims.inc"


/* Fish Spawer */
/* oAction */
const FISH_SPAWNER_ACT_SPAWN    = 0
const FISH_SPAWNER_ACT_IDLE     = 1
const FISH_SPAWNER_ACT_RESPAWN  = 2    
/* oBehParams2ndByte */
const FISH_SPAWNER_BP_MANY_BLUE = 0
const FISH_SPAWNER_BP_FEW_BLUE  = 1
const FISH_SPAWNER_BP_MANY_CYAN = 2
const FISH_SPAWNER_BP_FEW_CYAN  = 3

/* Fish */
/* oAction */
const FISH_ACT_INIT = 0
const FISH_ACT_ROAM = 1
const FISH_ACT_FLEE = 2

/* Blue_Fish */
/* oAction */
const BLUE_FISH_ACT_DIVE      = 0
const BLUE_FISH_ACT_TURN      = 1
const BLUE_FISH_ACT_ASCEND    = 2
const BLUE_FISH_ACT_TURN_BACK = 3

/* oAction: bhv_blue_fish_spawn_loop */
const BLUE_FISH_ACT_SPAWN     = 0
const BLUE_FISH_ACT_ROOM      = 1
const BLUE_FISH_ACT_DUPLICATE = 2


const fish_spawner_act_spawn = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let schoolQuantity
    let model
    let minDistToMario
    let fishAnimation
    let fishObject

    switch (o.rawData[oBehParams2ndByte]) {
        case FISH_SPAWNER_BP_MANY_BLUE:
            model = MODEL_FISH
            schoolQuantity = 20
            minDistToMario = 1500
            fishAnimation = blue_fish_seg3_anims_0301C2B0
            break

        case FISH_SPAWNER_BP_FEW_BLUE:
            model = MODEL_FISH
            schoolQuantity = 5
            minDistToMario = 1500
            fishAnimation = blue_fish_seg3_anims_0301C2B0
            break

        case FISH_SPAWNER_BP_MANY_CYAN:
            model = MODEL_CYAN_FISH
            schoolQuantity = 20
            minDistToMario = 1500
            fishAnimation = cyan_fish_seg6_anims_0600E264
            break

        case FISH_SPAWNER_BP_FEW_CYAN:
            model = MODEL_CYAN_FISH
            schoolQuantity = 5
            minDistToMario = 1500
            fishAnimation = cyan_fish_seg6_anims_0600E264
            break
    }


    // Spawn and animate the schoolQuantity of fish if Mario enters render distance
    // or the stage is Secret Aquarium.
    // Fish moves randomly within a range of 700.0f.
    if (o.rawData[oDistanceToMario] < minDistToMario || gLinker.Area.gCurrLevelNum == LEVEL_SA) {
        for (let i = 0; i < schoolQuantity; i++) {
            fishObject = spawn_object(o, model, 'bhvFish')
            fishObject.rawData[oBehParams2ndByte] = o.rawData[oBehParams2ndByte]
            obj_init_animation_with_sound(fishObject, fishAnimation, 0)
            obj_translate_xyz_random(fishObject, 700)
        }
        o.rawData[oAction] = FISH_SPAWNER_ACT_IDLE
    }
}

/**
 * Sets the spawner to respawn fish if the stage is not Secret Aquarium and
 * Mario is more than 2000 units higher.
 */
const fish_spawner_act_idle = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    if ((gLinker.Area.gCurrLevelNum != LEVEL_SA) && (gMarioObject.rawData[oPosY] - o.rawData[oPosY] > 2000)) {
        o.rawData[oAction] = FISH_SPAWNER_ACT_RESPAWN
    }
}

/**
 * Temp action that sets the action to spawn fish. This triggers the old fish to despawn.
 */
const fish_spawner_act_respawn = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oAction] = FISH_SPAWNER_ACT_SPAWN
}

const sFishSpawnerActions = [
    fish_spawner_act_spawn, fish_spawner_act_idle, fish_spawner_act_respawn,
]

const bhv_fish_spawner_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    sFishSpawnerActions[o.rawData[oAction]]()
}


/**
 * Allows the fish to swim vertically.
 */
const fish_vertical_roam = (speed) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let parentY = o.parentObj.rawData[oPosY]

    // If the stage is Secret Aquarium, the fish can 
    // travel as far vertically as they wish.
    if (gLinker.Area.gCurrLevelNum == LEVEL_SA) {
        if (500 < Math.abs(o.rawData[oPosY] - o.oFishGoalY)) {
            speed = 10
        }
        o.rawData[oPosY] = approach_symmetric(o.rawData[oPosY], o.oFishGoalY, speed)

     // Allow the fish to roam vertically if within
     // range of the fish spawner.
     } else if (parentY - 100 - o.oFishDepthDistance < o.rawData[oPosY]
               && o.rawData[oPosY] < parentY + 1000 + o.oFishDepthDistance) {
        o.rawData[oPosY] = approach_symmetric(o.rawData[oPosY], o.oFishGoalY, speed)
    }
}

// /**
//  * Fish action that randomly roams within a set range.
//  */
const fish_act_roam = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let fishY = o.rawData[oPosY] - gMarioObject.rawData[oPosY]

    // Alters speed of animation for natural movement.
    if (o.rawData[oTimer] < 10) {
        cur_obj_init_animation_with_accel_and_sound(0, 2)
    } else {
        cur_obj_init_animation_with_accel_and_sound(0, 1)
    }

    // Initializes some variables when the fish first begins roaming.
    if (o.rawData[oTimer] == 0) {
        o.rawData[oForwardVel] = random_float() * 2 + 3
        if (gLinker.Area.gCurrLevelNum == LEVEL_SA) {
            o.oFishHeightOffset = random_float() * 700
        } else {
            o.oFishHeightOffset = random_float() * 100
        }
        o.oFishRoamDistance = random_float() * 500 + 200
    }

    o.oFishGoalY = gMarioObject.rawData[oPosY] + o.oFishHeightOffset
    
    // Rotate the fish towards Mario.
    cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x400)

    if (o.rawData[oPosY] < o.oFishWaterLevel - 50) {
        if (fishY < 0) {
            fishY = -fishY
        }
        if (fishY < 500) {
            fish_vertical_roam(2)
        } else {
            fish_vertical_roam(4)
        }

    // Don't let the fish leave the water vertically.
    } else {
        o.rawData[oPosY] = o.oFishWaterLevel - 50
        if (fishY > 300) {
            o.rawData[oPosY] = o.rawData[oPosY] - 1
        }
    }

    // Flee from Mario if the fish gets too close.
    if (o.rawData[oDistanceToMario] < o.oFishRoamDistance + 150) {
        o.rawData[oAction] = FISH_ACT_FLEE
    }
}

// /**
//  * Interactively maneuver fish in relation to its distance from other fish and Mario.
//  */
const fish_act_flee = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let fishY = o.rawData[oPosY] - gMarioObject.rawData[oPosY]
    let distance
    o.oFishGoalY = gMarioObject.rawData[oPosY] + o.oFishHeightOffset

    // Initialize some variables when the flee action first starts.
    if (o.rawData[oTimer] == 0) {
        o.oFishActiveDistance = random_float() * 300
        o.oFishYawVel = int32(random_float() * 1024 + 1024)
        o.oFishGoalVel = random_float() * 4 + 8 + 5
        if (o.rawData[oDistanceToMario] < 600) {
            distance = 1
        } else {
            distance = (int32)(1.0 / (o.rawData[oDistanceToMario] / 600))
        }
        distance *= 127
        // cur_obj_play_sound_2(SOUND_GENERAL_MOVING_WATER);
    }

    // Speed the animation up over time.
    if (o.rawData[oTimer] < 20) {
        cur_obj_init_animation_with_accel_and_sound(0, 4)
    } else {
        cur_obj_init_animation_with_accel_and_sound(0, 1)
    }

    // Accelerate over time.
    if (o.rawData[oForwardVel] < o.oFishGoalVel) {
        o.rawData[oForwardVel] = o.rawData[oForwardVel] + 0.5
    }
    o.oFishGoalY = gMarioObject.rawData[oPosY] + o.oFishHeightOffset

    // Rotate fish away from Mario.
    cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario] + 0x8000, o.oFishYawVel);

    if (o.rawData[oPosY] < o.oFishWaterLevel - 50) {
        if (fishY < 0) {
            fishY = -fishY
        }

        if (fishY < 500) {
            fish_vertical_roam(2)
        } else {
            fish_vertical_roam(4)
        }
        
    // Don't let the fish leave the water vertically.
    } else {
        o.rawData[oPosY] = o.oFishWaterLevel - 50
        if (fishY > 300) {
            o.rawData[oPosY] -= 1
        }
    }

    // If distance to Mario is too great, then set fish to active.
    if (o.rawData[oDistanceToMario] > o.oFishActiveDistance + 500) {
        o.rawData[oAction] = FISH_ACT_ROAM
    }
}

// /**
//  * Animate fish and alter scaling at random for a magnifying effect from the water.
//  */
const fish_act_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_init_animation_with_accel_and_sound(0, 1)
    o.gfx.animInfo.animFrame = int16(random_float() * 28)
    o.oFishDepthDistance = random_float() * 300
    cur_obj_scale(random_float() * 0.4 + 0.8)
    o.rawData[oAction] = FISH_ACT_ROAM
}

const sFishActions = [
    fish_act_init, fish_act_roam, fish_act_flee,
]

// /**
//  * Main loop for fish
//  */
const bhv_fish_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_scale(1)

    // oFishWaterLevel tracks if a fish has roamed out of water.
    // This can't happen in Secret Aquarium, so set it to 0.
    o.oFishWaterLevel = gLinker.SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])
    if (gLinker.Area.gCurrLevelNum == LEVEL_SA) {
        o.oFishWaterLevel = 0
    }

    // Apply hitbox and resolve wall collisions
    o.rawData[oWallHitboxRadius] = 30
    cur_obj_resolve_wall_collisions()

    // Delete fish if it's drifted to an area with no water.
    // if (gCurrLevelNum != LEVEL_UNKNOWN_32) {
        if (o.oFishWaterLevel < FLOOR_LOWER_LIMIT_MISC) {
            obj_mark_for_deletion(o)
            return
        }

    // Unreachable code, perhaps for debugging or testing.
    // } else {
    //     o.oFishWaterLevel = 1000.0f;
    // }

    // Call fish action methods and apply physics engine.
    sFishActions[o.rawData[oAction]]()
    cur_obj_move_using_fvel_and_gravity()

    // If the parent object has action set to two, then delete the fish object.
    if (o.parentObj.rawData[oAction] == FISH_SPAWNER_ACT_RESPAWN) {
        obj_mark_for_deletion(o)
    }
}


gLinker.bhv_fish_loop = bhv_fish_loop
gLinker.bhv_fish_spawner_loop = bhv_fish_spawner_loop
