import { play_puzzle_jingle } from "../../audio/external"
import { GRAPH_RENDER_INVISIBLE } from "../../engine/graph_node"
import { MODEL_BULLY, MODEL_YELLOW_COIN } from "../../include/model_ids"
import { ACTIVE_FLAG_DEACTIVATED, BULLY_ACT_ACTIVATE_AND_FALL, BULLY_ACT_BACK_UP, BULLY_ACT_CHASE_MARIO, BULLY_ACT_DEATH_PLANE_DEATH, BULLY_ACT_INACTIVE, BULLY_ACT_KNOCKBACK, BULLY_ACT_LAVA_DEATH, BULLY_ACT_PATROL, BULLY_BP_SIZE_BIG, BULLY_BP_SIZE_SMALL, BULLY_STYPE_CHILL, BULLY_STYPE_MINION, oAction, oBehParams2ndByte, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, oBullyKBTimerAndMinionKOCounter, oBullyMarioCollisionAngle, oBullyPrevX, oBullyPrevY, oBullyPrevZ, oBullySubtype, oBuoyancy, oFaceAngleYaw, oFlags, oForwardVel, oFriction, oGravity, oHomeX, oHomeY, oHomeZ, oInteractStatus, oMoveAngleYaw, oPosX, oPosY, oPosZ, oTimer, oVelY } from "../../include/object_constants"
import { SOUND_GENERAL_COIN_SPURT, SOUND_OBJ2_BULLY_ATTACKED, SOUND_OBJ2_LARGE_BULLY_ATTACKED, SOUND_OBJ_BULLY_WALK, SOUND_OBJ_BULLY_WALKING, SOUND_OBJ_THWOMP } from "../../include/sounds"
import { random_float } from "../../utils"
import { bhvMovingYellowCoin, bhvSmallBully } from "../BehaviorData"
import { CameraInstance, SHAKE_POS_SMALL } from "../Camera"
import { INTERACT_BULLY, INT_STATUS_INTERACTED } from "../Interaction"
import { is_point_within_radius_of_mario, object_step, obj_check_floor_death, OBJ_COL_FLAGS_LANDED, OBJ_COL_FLAG_GROUNDED, OBJ_COL_FLAG_NO_Y_VEL, obj_lava_death, obj_return_home_if_safe, set_object_visibility, sObjFloor } from "../ObjBehaviors"
import { cur_obj_become_intangible, cur_obj_init_animation, obj_turn_toward_object, spawn_mist_particles, spawn_object, spawn_object_abs_with_rot, obj_set_hitbox } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

const sSmallBullyHitbox = {
    interactType:      INTERACT_BULLY,
    downOffset:        0,
    damageOrCoinValue: 1,
    health:            0,
    numLootCoins:      0,
    radius:            73,
    height:            123,
    hurtboxRadius:     63,
    hurtboxHeight:     113,
}

const sBigBullyHitbox = {
    interactType:      INTERACT_BULLY,
    downOffset:        0,
    damageOrCoinValue: 1,
    health:            0,
    numLootCoins:      0,
    radius:            115,
    height:            235,
    hurtboxRadius:     105,
    hurtboxHeight:     225,
}

export const bhv_small_bully_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_init_animation(0)

    o.rawData[oHomeX] = o.rawData[oPosX]
    o.rawData[oHomeZ] = o.rawData[oPosZ]
    o.rawData[oBehParams2ndByte] = BULLY_BP_SIZE_SMALL
    o.rawData[oGravity] = 4.0
    o.rawData[oFriction] = 0.91
    o.rawData[oBuoyancy] = 1.3

    obj_set_hitbox(o, sSmallBullyHitbox)
}

export const bhv_big_bully_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_init_animation(0)

    o.rawData[oHomeX] = o.rawData[oPosX]
    o.rawData[oHomeY] = o.rawData[oPosY]
    o.rawData[oHomeZ] = o.rawData[oPosZ]
    o.rawData[oBehParams2ndByte] = BULLY_BP_SIZE_BIG
    o.rawData[oGravity] = 5.0
    o.rawData[oFriction] = 0.93
    o.rawData[oBuoyancy] = 1.3

    obj_set_hitbox(o, sBigBullyHitbox)
}

const bully_check_mario_collision = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if (o.rawData[oBehParams2ndByte] == BULLY_BP_SIZE_SMALL) {
            cur_obj_play_sound_2(SOUND_OBJ2_BULLY_ATTACKED)
        } else {
            cur_obj_play_sound_2(SOUND_OBJ2_LARGE_BULLY_ATTACKED)
        }

        o.rawData[oInteractStatus] &= ~INT_STATUS_INTERACTED
        o.rawData[oAction] = BULLY_ACT_KNOCKBACK
        o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
        cur_obj_init_animation(3)
        o.rawData[oBullyMarioCollisionAngle] = o.rawData[oMoveAngleYaw]
    }
}

const bully_act_chase_mario = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    let homeX = o.rawData[oHomeX]
    let posY = o.rawData[oPosY]
    let homeZ = o.rawData[oHomeZ]

    if (o.rawData[oTimer] < 10) {
        o.rawData[oForwardVel] = 3.0
        obj_turn_toward_object(o, gMarioObject, 16, 0x1000)
    } else if (o.rawData[oBehParams2ndByte] == BULLY_BP_SIZE_SMALL) {
        o.rawData[oForwardVel] = 20.0
        if (o.rawData[oTimer] > 30) {
            o.rawData[oTimer] = 0
        }
    } else {
        o.rawData[oForwardVel] = 30.0
        if (o.rawData[oTimer] > 35) {
            o.rawData[oTimer] = 0
        }
    }

    if (!is_point_within_radius_of_mario(homeX, posY, homeZ, 1000)) {
        o.rawData[oAction] = BULLY_ACT_PATROL
        cur_obj_init_animation(0)
    }
}

const bully_act_knockback = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    if (o.rawData[oForwardVel] < 10.0 && o.rawData[oVelY] == 0) {
        o.rawData[oForwardVel] = 1.0
        o.rawData[oBullyKBTimerAndMinionKOCounter]++
        o.rawData[oFlags] |= OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
        o.rawData[oMoveAngleYaw] = o.rawData[oFaceAngleYaw]
        obj_turn_toward_object(o, gMarioObject, 16, 0x500)
    } else {
        o.gfx.animInfo.animFrame = 0
    }

    if (o.rawData[oBullyKBTimerAndMinionKOCounter] == 18) {
        o.rawData[oAction] = BULLY_ACT_CHASE_MARIO
        o.rawData[oBullyKBTimerAndMinionKOCounter] = 0
        cur_obj_init_animation(1)
    }
}

const bully_act_back_up = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
        o.rawData[oMoveAngleYaw] += 0x8000
    }

    o.rawData[oForwardVel] = 5.0

    //! bully_backup_check() happens after this function, and has the potential to reset
    //  the bully's action to BULLY_ACT_BACK_UP. Because the back up action is only
    //  set to end when the timer EQUALS 15, if this happens on that frame, the bully
    //  will be stuck in BULLY_ACT_BACK_UP forever until Mario hits it or its death
    //  conditions are activated. However because its angle is set to its facing angle,
    //  it will walk forward instead of backing up.

    if (o.rawData[oTimer] == 15) {
        o.rawData[oMoveAngleYaw] = o.rawData[oFaceAngleYaw]
        o.rawData[oFlags] |= OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
        o.rawData[oAction] = BULLY_ACT_PATROL
    }
}

const bully_backup_check = (collisionFlags) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (!(collisionFlags & OBJ_COL_FLAG_NO_Y_VEL) && o.rawData[oAction] != BULLY_ACT_KNOCKBACK) {
        o.rawData[oPosX] = o.rawData[oBullyPrevX]
        o.rawData[oPosZ] = o.rawData[oBullyPrevZ]
        o.rawData[oAction] = BULLY_ACT_BACK_UP
    }
}

const bully_play_stomping_sound = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let animFrame = o.gfx.animInfo.animFrame

    switch (o.rawData[oAction]) {
        case BULLY_ACT_PATROL:
            if (animFrame == 0 || animFrame == 12) {
                if (o.rawData[oBehParams2ndByte] == BULLY_BP_SIZE_SMALL) {
                    cur_obj_play_sound_2(SOUND_OBJ_BULLY_WALK)
                } else {
                    cur_obj_play_sound_2(SOUND_OBJ_BULLY_WALKING)
                }
            }
            break
        
        case BULLY_ACT_CHASE_MARIO:
        case BULLY_ACT_BACK_UP:
            if (animFrame == 0 || animFrame == 5) {
                if (o.rawData[oBehParams2ndByte] == BULLY_BP_SIZE_SMALL) {
                    cur_obj_play_sound_2(SOUND_OBJ_BULLY_WALK)
                } else {
                    cur_obj_play_sound_2(SOUND_OBJ_BULLY_WALKING)
                }
            }
            break
    }
}

const bully_step = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let collisionFlags = object_step()
    bully_backup_check(collisionFlags)
    bully_play_stomping_sound()
    obj_check_floor_death(collisionFlags, sObjFloor)

    if (o.rawData[oBullySubtype] & BULLY_STYPE_CHILL) {
        if (o.rawData[oPosY] < 1030.0) {
            o.rawData[oAction] = BULLY_ACT_LAVA_DEATH
        }
    }
}

const bully_spawn_coin = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let coin = spawn_object(o, MODEL_YELLOW_COIN, bhvMovingYellowCoin)

    cur_obj_play_sound_2(SOUND_GENERAL_COIN_SPURT)

    coin.rawData[oForwardVel] = 10.0
    coin.rawData[oVelY] = 100.0
    coin.rawData[oPosY] = o.rawData[oPosY] + 310.0
    coin.rawData[oMoveAngleYaw] = o.rawData[oBullyMarioCollisionAngle] + 0x8000 + random_float() * 1024.0
}

const bully_act_level_death = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (obj_lava_death() == true) {
        if (o.rawData[oBehParams2ndByte] == BULLY_BP_SIZE_SMALL) {
            if (o.rawData[oBullySubtype] == BULLY_STYPE_MINION) {
                o.parentObj.rawData[oBullyKBTimerAndMinionKOCounter]++
            }
            bully_spawn_coin()
        } else {
            spawn_mist_particles()

            if (o.rawData[oBullySubtype] == BULLY_STYPE_CHILL) {
                //spawn_default_star(130.0, 1600.0, -4335.0)
            } else {
                //spawn_default_star(0, 950.0f, -6800.0f)
                spawn_object_abs_with_rot(o, MODEL_NONE, gLinker.behaviors.bhvLLLTumblingBridge, 0, 154, -5631, 0, 0, 0)
            }
        }
    }
}

export const bhv_bully_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oBullyPrevX] = o.rawData[oPosX]
    o.rawData[oBullyPrevY] = o.rawData[oPosY]
    o.rawData[oBullyPrevZ] = o.rawData[oPosZ]

    //! Because this function runs no matter what, Mario is able to interrupt the bully's
    //  death action by colliding with it. Since the bully hitbox is tall enough to collide
    //  with Mario even when it is under a lava floor, this can get the bully stuck OOB
    //  if there is nothing under the lava floor.
    bully_check_mario_collision()

    switch (o.rawData[oAction]) {
        case BULLY_ACT_PATROL:
            o.rawData[oForwardVel] = 5.0

            if (obj_return_home_if_safe(o, o.rawData[oHomeX], o.rawData[oPosY], o.rawData[oHomeZ], 800) == true) {
                o.rawData[oAction] = BULLY_ACT_CHASE_MARIO
                cur_obj_init_animation(1)
            }

            bully_step()
            break

        case BULLY_ACT_CHASE_MARIO:
            bully_act_chase_mario()
            bully_step()
            break

        case BULLY_ACT_KNOCKBACK:
            bully_act_knockback();
            bully_step();
            break

        case BULLY_ACT_BACK_UP:
            bully_act_back_up()
            bully_step()
            break

        case BULLY_ACT_LAVA_DEATH:
            bully_act_level_death()
            break

        case BULLY_ACT_DEATH_PLANE_DEATH:
            o.activeFlags = ACTIVE_FLAG_DEACTIVATED
            break
    }

    set_object_visibility(o, 3000)
}

const big_bully_spawn_minion = (x, y, z, yaw) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let bully = spawn_object_abs_with_rot(o, MODEL_BULLY, bhvSmallBully, x, y, z, 0, yaw, 0)
    bully.rawData[oBullySubtype] = BULLY_STYPE_MINION
    bully.rawData[oBehParams2ndByte] = BULLY_BP_SIZE_SMALL
}

export const bhv_big_bully_with_minions_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    big_bully_spawn_minion(4454, 307, -5426, 0)
    big_bully_spawn_minion(3840, 307, -6041, 0)
    big_bully_spawn_minion(3226, 307, -5426, 0)

    o.gfx.flags |= GRAPH_RENDER_INVISIBLE

    cur_obj_become_intangible()

    o.rawData[oAction] = BULLY_ACT_INACTIVE
}

const big_bully_spawn_star = () => {
    if (obj_lava_death() == true) {
        spawn_mist_particles()
        //spawn_default_star(3700.0, 600.0, -5500.0)
    }
}

export const bhv_big_bully_with_minions_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let collisionFlags

    o.rawData[oBullyPrevX] = o.rawData[oPosX]
    o.rawData[oBullyPrevY] = o.rawData[oPosY]
    o.rawData[oBullyPrevZ] = o.rawData[oPosZ]

    bully_check_mario_collision()

    switch (o.rawData[oAction]) {
        case BULLY_ACT_PATROL:
            o.rawData[oForwardVel] = 5.0

            if (obj_return_home_if_safe(o, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 1000) == true) {
                o.rawData[oAction] = BULLY_ACT_CHASE_MARIO
                cur_obj_init_animation(1)
            }

            bully_step()
            break
        
        case BULLY_ACT_CHASE_MARIO:
            bully_act_chase_mario()
            bully_step()
            break

        case BULLY_ACT_KNOCKBACK:
            bully_act_knockback()
            bully_step()
            break

        case BULLY_ACT_BACK_UP:
            bully_act_back_up()
            bully_step()
            break

        case BULLY_ACT_INACTIVE:
            //! The Big Bully that spawns from killing its 3 minions uses the knockback timer
            //  for counting the number of dead minions. This means that when it activates,
            //  the knockback timer is at 3 instead of 0. So the bully knockback time will
            //  be reduced by 3 frames (16.67%) on the first hit.
            if (o.rawData[oBullyKBTimerAndMinionKOCounter] == 3) {
                play_puzzle_jingle()

                if (o.rawData[oTimer] > 90) {
                    o.rawData[oAction] = BULLY_ACT_ACTIVATE_AND_FALL
                }
            }
            break

        case BULLY_ACT_ACTIVATE_AND_FALL:
            collisionFlags = object_step()
            if ((collisionFlags & OBJ_COL_FLAGS_LANDED) == OBJ_COL_FLAGS_LANDED) {
                o.rawData[oAction] = BULLY_ACT_PATROL
            }

            if (collisionFlags == OBJ_COL_FLAG_GROUNDED) {
                cur_obj_play_sound_2(SOUND_OBJ_THWOMP)
                CameraInstance.set_camera_shake_from_point(SHAKE_POS_SMALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
                spawn_mist_particles()
            }

            o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
            cur_obj_become_intangible()
            break

        case BULLY_ACT_LAVA_DEATH:
            big_bully_spawn_star()
            break

        case BULLY_ACT_DEATH_PLANE_DEATH:
            o.activeFlags = ACTIVE_FLAG_DEACTIVATED
            break
    }
}

gLinker.bhv_small_bully_init = bhv_small_bully_init
gLinker.bhv_big_bully_init = bhv_big_bully_init
gLinker.bhv_bully_loop = bhv_bully_loop
gLinker.bhv_big_bully_with_minions_init = bhv_big_bully_with_minions_init
gLinker.bhv_big_bully_with_minions_loop = bhv_big_bully_with_minions_loop