import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_hide, cur_obj_set_pos_via_transform, cur_obj_unhide,
obj_mark_for_deletion, obj_copy_pos, obj_copy_scale, cur_obj_push_mario_away_from_cylinder,
lateral_dist_between_objects, spawn_object_relative, cur_obj_move_standard, cur_obj_spawn_particles,
cur_obj_update_floor_and_walls, obj_set_hitbox } from "../ObjectHelpers"
import { random_linear_offset, approach_number_ptr } from "../ObjBehaviors2"
import { s16, random_u16, sins, coss } from "../../utils"
import { create_sound_spawner, cur_obj_play_sound_2 } from "../SpawnSound"
import { oPosX, oPosY, oPosZ, oMoveAngleYaw, oForwardVel, oVelY, oGraphYOffset, oFloorHeight,
oMoveFlags, oAction, oTimer, oInteractStatus, oAngleToMario, oBehParams, OBJ_MOVE_ENTERED_WATER,
OBJ_MOVE_MASK_ON_GROUND } from "../../include/object_constants"
import { MODEL_BUBBLE, MODEL_WATER_BOMB, MODEL_WATER_BOMB_SHADOW } from "../../include/model_ids"
import { SOUND_OBJ_SOMETHING_LANDING, SOUND_OBJ_DIVING_IN_WATER, SOUND_OBJ_WATER_BOMB_BOUNCING } from "../../include/sounds"
import { SHAKE_POS_SMALL } from "../Camera"
import { INTERACT_MR_BLIZZARD, INT_STATUS_INTERACTED } from "../Interaction"


/* Water Bomb */
const oWaterBombVerticalStretch  = 0x1C
const oWaterBombStretchSpeed     = 0x1D
const oWaterBombOnGround         = 0x1E
const oWaterBombNumBounces       = 0x1F

/* Water Bomb Spawner */
const oWaterBombSpawnerBombActive   = 0x1B
const oWaterBombSpawnerTimeToSpawn  = 0x1C

const WATER_BOMB_ACT_SHOT_FROM_CANNON = 0
const WATER_BOMB_ACT_INIT = 1
const WATER_BOMB_ACT_DROP = 2
const WATER_BOMB_ACT_EXPLODE = 3

/**
 * Behaviors for bhvWaterBombSpawner, bhvWaterBomb, and bhvWaterBombShadow.
 * The spawner spawns the water bombs that fall on mario from above. These ones
 * start in the WATER_BOMB_ACT_INIT action.
 * Water bombs can also be shot by cannons. These ones stay in the
 * WATER_BOMB_ACT_SHOT_FROM_CANNON action.
 * The water bomb shadow is only spawned by water bomb spawners.
 */

/**
 * Hitbox for water bombs that are spawned by a water bomb spawner. The water
 * bombs that are shot from cannons are intangible.
 */
const sWaterBombHitbox = {
    interactType:       INTERACT_MR_BLIZZARD,
    downOffset:         25,
    damageOrCoinValue:  1,
    health:             99,
    numLootCoins:       0,
    radius:             80,
    height:             50,
    hurtboxRadius:      60,
    hurtboxHeight:      50
}

/**
 * Update function for bhvWaterBombSpawner.
 * Spawn water bombs targeting mario when he comes in range.
 */
const bhv_water_bomb_spawner_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let /*f32*/ latDistToMario
    let /*f32*/ spawnerRadius

    spawnerRadius = 50 * (o.rawData[oBehParams] >> 16) + 200.0
    latDistToMario = lateral_dist_between_objects(o, gMarioObject)

    // When mario is in range and a water bomb isn't already active
    if (!o.rawData[oWaterBombSpawnerBombActive] && latDistToMario < spawnerRadius
        && gMarioObject.rawData[oPosY] - o.rawData[oPosY] < 1000.0) {
        if (o.rawData[oWaterBombSpawnerTimeToSpawn] != 0) {
            o.rawData[oWaterBombSpawnerTimeToSpawn] -= 1
        } else {
            let waterBomb =
                spawn_object_relative(0, 0, 2000, 0, o, MODEL_WATER_BOMB, 'bhvWaterBomb')

            // Drop farther ahead of mario when he is moving faster
            let /*f32*/ waterBombDistToMario = 28.0 * gLinker.LevelUpdate.gMarioState.forwardVel + 100.0

            waterBomb.rawData[oAction] = WATER_BOMB_ACT_INIT

            waterBomb.rawData[oPosX] =
                gMarioObject.rawData[oPosX] + waterBombDistToMario * sins(gMarioObject.rawData[oMoveAngleYaw])
            waterBomb.rawData[oPosZ] =
                gMarioObject.rawData[oPosZ] + waterBombDistToMario * coss(gMarioObject.rawData[oMoveAngleYaw])

            spawn_object(waterBomb, MODEL_WATER_BOMB_SHADOW, 'bhvWaterBombShadow')

            o.rawData[oWaterBombSpawnerBombActive] = 1
            o.rawData[oWaterBombSpawnerTimeToSpawn] = random_linear_offset(0, 50)
        }
    }
}

const sWaterBombExplodeParticles = {
    behParam:        0,
    count:           5,
    model:           MODEL_BUBBLE,
    offsetY:         20,
    forwardVelBase:  20,
    forwardVelRange: 60,
    velYBase:        10,
    velYRange:       10,
    gravity:         -2,
    dragStrength:    0,
    sizeBase:        35.0,
    sizeRange:       10.0
}

/**
 * Spawn particles when the water bomb explodes.
 */
const water_bomb_spawn_explode_particles = (offsetY, forwardVelRange, velYBase) => {
    sWaterBombExplodeParticles.offsetY = offsetY
    sWaterBombExplodeParticles.forwardVelRange = forwardVelRange
    sWaterBombExplodeParticles.velYBase = velYBase
    cur_obj_spawn_particles(sWaterBombExplodeParticles)
}

/**
 * Enter the drop action with -40 y vel.
 */
const water_bomb_act_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_play_sound_2(SOUND_OBJ_SOMETHING_LANDING)

    o.rawData[oAction] = WATER_BOMB_ACT_DROP
    o.rawData[oMoveFlags] = 0
    o.rawData[oVelY] = -40.0
}

/**
 * Explode on impact, and otherwise bounce a few times on the ground and then
 * explode.
 */
const water_bomb_act_drop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*f32*/ stretch

    obj_set_hitbox(o, sWaterBombHitbox)

    // Explode if touched or if hit water
    if ((o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) || (o.rawData[oMoveFlags] & OBJ_MOVE_ENTERED_WATER)) {
        create_sound_spawner(SOUND_OBJ_DIVING_IN_WATER)
        gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_SMALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
        o.rawData[oAction] = WATER_BOMB_ACT_EXPLODE
    } else if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        // On impact with the ground, begin getting squished
        if (!o.rawData[oWaterBombOnGround]) {
            o.rawData[oWaterBombOnGround] = 1

            if ((o.rawData[oWaterBombNumBounces] += 1.0) < 3.0) {
                cur_obj_play_sound_2(SOUND_OBJ_WATER_BOMB_BOUNCING)
            } else {
                create_sound_spawner(SOUND_OBJ_DIVING_IN_WATER)
            }

            gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_SMALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])

            // Move toward mario
            o.rawData[oMoveAngleYaw] = o.rawData[oAngleToMario]
            o.rawData[oForwardVel] = 10.0
            o.rawData[oWaterBombStretchSpeed] = -40.0
        }

        // Make less of an attempt to unsquish on each bounce
        o.rawData[oWaterBombStretchSpeed] += 15.0 - o.rawData[oWaterBombNumBounces] * 2.8

        o.rawData[oWaterBombVerticalStretch] += o.rawData[oWaterBombStretchSpeed] * 0.01

        // After being too squished, explode
        if (o.rawData[oWaterBombVerticalStretch] < -0.8) {
            o.rawData[oAction] = WATER_BOMB_ACT_EXPLODE
        } else if (o.rawData[oWaterBombVerticalStretch] > 0.1) {
            // Begin bounce trajectory
            o.rawData[oVelY] = 1.8 * o.rawData[oWaterBombStretchSpeed]
        }
    } else {
        approach_number_ptr(o.rawData, oWaterBombVerticalStretch, 0.0, 0.008)
        o.rawData[oWaterBombOnGround] = 0
    }

    o.gfx.scale[1] = o.rawData[oWaterBombVerticalStretch] + 1.0

    stretch = o.rawData[oWaterBombVerticalStretch]
    if (o.rawData[oWaterBombNumBounces] == 3.0) {
        stretch *= 4.0
    }
    o.gfx.scale[0] = o.gfx.scale[2] = 1.0 - stretch

    cur_obj_move_standard(78)
}

/**
 * Spawn particles, then despawn. This action informs the water bomb shadow to
 * despawn as well.
 */
const water_bomb_act_explode = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    water_bomb_spawn_explode_particles(25, 60, 10)
    o.parentObj.rawData[oWaterBombSpawnerBombActive] = 0
    obj_mark_for_deletion(o)
}


const sWaterBombCannonParticle = {
    behParam:        0,
    count:           1,
    model:           MODEL_BUBBLE,
    offsetY:         236,
    forwardVelBase:  20,
    forwardVelRange: 5,
    velYBase:        0,
    velYRange:       0,
    gravity:         -2,
    dragStrength:    0,
    sizeBase:        20.0,
    sizeRange:       5.0,
}

/**
 * Despawn after 100 frames.
 */
const water_bomb_act_shot_from_cannon = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] > 100) {
        obj_mark_for_deletion(o)
    } else {
        if (o.rawData[oTimer] < 7) {
            if (o.rawData[oTimer] == 1) {
                water_bomb_spawn_explode_particles(-20, 10, 30)
            }
            cur_obj_spawn_particles(sWaterBombCannonParticle)
        }

        if (o.gfx.scale[1] > 1.2) {
            o.gfx.scale[1] -= 0.1
        }

        o.gfx.scale[0] = o.gfx.scale[2] = 2.0 - o.gfx.scale[1]
        cur_obj_set_pos_via_transform()
    }
}

/**
 * Update function for bhvWaterBomb.
 */
const bhv_water_bomb_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oAction] == WATER_BOMB_ACT_SHOT_FROM_CANNON) {
        water_bomb_act_shot_from_cannon()
    } else {
        o.rawData[oGraphYOffset] = 40.0 * o.gfx.scale[1]
        cur_obj_update_floor_and_walls()

        switch (o.rawData[oAction]) {
            case WATER_BOMB_ACT_INIT:
                water_bomb_act_init()
                break
            case WATER_BOMB_ACT_DROP:
                water_bomb_act_drop()
                break
            case WATER_BOMB_ACT_EXPLODE:
                water_bomb_act_explode()
                break
        }
    }
}

/**
 * Update function for bhvWaterBombShadow.
 * Despawn when the parent water bomb does.
 */
const bhv_water_bomb_shadow_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.parentObj.rawData[oAction] == WATER_BOMB_ACT_EXPLODE) {
        obj_mark_for_deletion(o)
    } else {
          // TODO: What is happening here
        let /*f32*/ bombHeight = o.parentObj.rawData[oPosY] - o.parentObj.rawData[oFloorHeight]
        if (bombHeight > 500.0) {
            bombHeight = 500.0
        }

        obj_copy_pos(o, o.parentObj)
        o.rawData[oPosY] = o.parentObj.rawData[oFloorHeight] + bombHeight
        obj_copy_scale(o, o.parentObj)
    }
}


gLinker.bhv_water_bomb_spawner_update = bhv_water_bomb_spawner_update
gLinker.bhv_water_bomb_update = bhv_water_bomb_update
gLinker.bhv_water_bomb_shadow_update = bhv_water_bomb_shadow_update
