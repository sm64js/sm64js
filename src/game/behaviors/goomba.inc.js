import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oGoombaSize, GOOMBA_BP_SIZE_MASK, oBehParams2ndByte, oGoombaScale, oDrawingDistance, oDamageOrCoinValue, oGravity, oForwardVel, oGoombaBlinkTimer, oAnimState, GOOMBA_ACT_ATTACKED_MARIO, oAction, GOOMBA_ACT_WALK, oGoombaRelativeSpeed, oGoombaTurningAwayFromWall, oGoombaTargetYaw, oGoombaWalkTimer, oDistanceToMario, oAngleToMario, oMoveAngleYaw, GOOMBA_ACT_JUMP, oVelY, oMoveFlags, OBJ_MOVE_MASK_ON_GROUND, GOOMBA_SIZE_TINY, oNumLootCoins, GOOMBA_TRIPLET_SPAWNER_ACT_UNLOADED, GOOMBA_BP_TRIPLET_FLAG_MASK, oBehParams, GOOMBA_TRIPLET_SPAWNER_BP_EXTRA_GOOMBAS_MASK, GOOMBA_TRIPLET_SPAWNER_BP_SIZE_MASK } from "../../include/object_constants"
import * as ObjBhvs2 from "../ObjBehaviors2"
import { INTERACT_BOUNCE_TOP } from "../Interaction"
import { cur_obj_scale, cur_obj_init_animation_with_accel_and_sound, cur_obj_update_floor_and_walls, cur_obj_move_standard, cur_obj_rotate_yaw_toward, obj_mark_for_deletion, spawn_object_relative, obj_set_hitbox } from "../ObjectHelpers"
import { coss, sins } from "../../utils"
import { MODEL_GOOMBA } from "../../include/model_ids"
import { bhvGoomba } from "../BehaviorData"

const sGoombaProperties = [
    { scale: 1.5, deathSound: null, drawDistance: 4000, damage: 1 },
    { scale: 3.5, deathSound: null, drawDistance: 4000, damage: 2 },
    { scale: 0.5, deathSound: null, drawDistance: 1500, damage: 0 }
]

const sGoombaHitbox = {
    interactType: INTERACT_BOUNCE_TOP,
    downOffset:         0,
    damageOrCoinValue:  1,
    health:             0,
    numLootCoins:       1,
    radius:             72,
    height:             50,
    hurtboxRadius:      42,
    hurtboxHeight:      40
}

/**
 * Attack handlers for goombas.
 */
const sGoombaAttackHandlers = [
    // regular and tiny
    [
        /* ATTACK_PUNCH:                 */ ObjBhvs2.ATTACK_HANDLER_KNOCKBACK,
        /* ATTACK_KICK_OR_TRIP:          */ ObjBhvs2.ATTACK_HANDLER_KNOCKBACK,
        /* ATTACK_FROM_ABOVE:            */ ObjBhvs2.ATTACK_HANDLER_SQUISHED,
        /* ATTACK_GROUND_POUND_OR_TWIRL: */ ObjBhvs2.ATTACK_HANDLER_SQUISHED,
        /* ATTACK_FAST_ATTACK:           */ ObjBhvs2.ATTACK_HANDLER_KNOCKBACK,
        /* ATTACK_FROM_BELOW:            */ ObjBhvs2.ATTACK_HANDLER_KNOCKBACK,
    ],
    // huge
    [
        /* ATTACK_PUNCH:                 */ ObjBhvs2.ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED,
        /* ATTACK_KICK_OR_TRIP:          */ ObjBhvs2.ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED,
        /* ATTACK_FROM_ABOVE:            */ ObjBhvs2.ATTACK_HANDLER_SQUISHED,
        /* ATTACK_GROUND_POUND_OR_TWIRL: */ ObjBhvs2.ATTACK_HANDLER_SQUISHED_WITH_BLUE_COIN,
        /* ATTACK_FAST_ATTACK:           */ ObjBhvs2.ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED,
        /* ATTACK_FROM_BELOW:            */ ObjBhvs2.ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED,
    ]
]

const goomba_act_jump = () => {
    const o = ObjectListProc.gCurrentObject

    ObjBhvs2.obj_resolve_object_collisions({})

    //! If we move outside the goomba's drawing radius the frame it enters the
    //  jump action, then it will keep its velY, but it will still be counted
    //  as being on the ground.
    //  Next frame, the jump action will think it has already ended because it is
    //  still on the ground.
    //  This puts the goomba back in the walk action, but the positive velY will
    //  make it hop into the air. We can then trigger another jump.
    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        o.rawData[oAction] = GOOMBA_ACT_WALK
    } else {
        cur_obj_rotate_yaw_toward(o.rawData[oGoombaTargetYaw], 0x800)
    }
}

export const goomba_act_attacked_mario = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oGoombaSize] == GOOMBA_SIZE_TINY) {
        mark_goomba_as_dead()
        o.rawData[oNumLootCoins] = 0
        ObjBhvs2.obj_die_if_health_non_positive()
    } else {
        //! This can happen even when the goomba is already in the air. It's
        //  hard to chain these in practice
        goomba_begin_jump()
        o.rawData[oGoombaTargetYaw] = o.rawData[oAngleToMario]
        o.rawData[oGoombaTurningAwayFromWall] = 0
    }
}

const goomba_act_walk = () => {
    const o = ObjectListProc.gCurrentObject

    ObjBhvs2.treat_far_home_as_mario(1000.0)

    ObjBhvs2.obj_forward_vel_approach(o.rawData[oGoombaRelativeSpeed] * o.rawData[oGoombaScale], 0.4)

    // TODO:  If walking fast enough, play footstep sounds
    if (o.rawData[oGoombaRelativeSpeed] > 4.0 / 3.0) {
    //    cur_obj_play_sound_at_anim_range(2, 17, SOUND_OBJ_GOOMBA_WALK)
    }

    //! By strategically hitting a wall, steep slope, or another goomba, we can
    //  prevent the goomba from turning back toward home for a while (goomba
    //  chase extension)
    //! It seems theoretically possible to get 2-3 goombas to repeatedly touch
    //  each other and move arbitrarily far from their home, but it's
    //  extremely precise and chaotic in practice, so probably can't be performed
    //  for nontrivial distances
    if (o.rawData[oGoombaTurningAwayFromWall]) {
        o.rawData[oGoombaTurningAwayFromWall] = ObjBhvs2.obj_resolve_collisions_and_turn(o.rawData[oGoombaTargetYaw], 0x200)
    } else {
        // If far from home, walk toward home.
        if (o.rawData[oDistanceToMario] >= 25000.0) {
            o.rawData[oGoombaTargetYaw] = o.rawData[oAngleToMario]
            o.rawData[oGoombaWalkTimer] = ObjBhvs2.random_linear_offset(20, 30)
        }

        const targetYawWrapper = { value: o.rawData[oGoombaTargetYaw] }
        o.rawData[oGoombaTurningAwayFromWall] = ObjBhvs2.obj_bounce_off_walls_edges_objects(targetYawWrapper)
        o.rawData[oGoombaTargetYaw] = targetYawWrapper.value

        if (!(o.rawData[oGoombaTurningAwayFromWall])) {
            if (o.rawData[oDistanceToMario] < 500.0) {
                // If close to mario, begin chasing him. If not already chasing
                // him, jump first

                if (o.rawData[oGoombaRelativeSpeed] <= 2.0) {
                    goomba_begin_jump();
                }

                o.rawData[oGoombaTargetYaw] = o.rawData[oAngleToMario]
                o.rawData[oGoombaRelativeSpeed] = 20.0
            } else {
                // If mario is far away, walk at a normal pace, turning randomly
                // and occasionally jumping

                o.rawData[oGoombaRelativeSpeed] = 4.0 / 3.0
                if (o.rawData[oGoombaWalkTimer] != 0) {
                    o.rawData[oGoombaWalkTimer] -= 1
                } else {
                    if (parseInt((Math.random() * 65500)) & 3) {
                        o.rawData[oGoombaTargetYaw] = ObjBhvs2.obj_random_fixed_turn(0x2000)
                        o.rawData[oGoombaWalkTimer] = ObjBhvs2.random_linear_offset(100, 100)
                    } else {
                        goomba_begin_jump();
                        o.rawData[oGoombaTargetYaw] = ObjBhvs2.obj_random_fixed_turn(0x6000)
                    }
                }

            }
        }

        cur_obj_rotate_yaw_toward(o.rawData[oGoombaTargetYaw], 0x200)
    }

}

const goomba_begin_jump = () => {
    const o = ObjectListProc.gCurrentObject
    //play sound

    o.rawData[oAction] = GOOMBA_ACT_JUMP
    o.rawData[oForwardVel] = 0.0
    o.rawData[oVelY] = 50.0 / 3.0 * o.rawData[oGoombaScale]
}

export const bhv_goomba_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGoombaSize] = o.rawData[oBehParams2ndByte] & GOOMBA_BP_SIZE_MASK

    o.rawData[oGoombaScale] = sGoombaProperties[o.rawData[oGoombaSize]].scale

    obj_set_hitbox(o, sGoombaHitbox)

    o.rawData[oDrawingDistance] = sGoombaProperties[o.rawData[oGoombaSize]].drawDistance
    o.rawData[oDamageOrCoinValue] = sGoombaProperties[o.rawData[oGoombaSize]].damage

    o.rawData[oGravity] = -8.0 / 3.0 * o.rawData[oGoombaScale]

}

export const mark_goomba_as_dead = () => {
    const o = ObjectListProc.gCurrentObject
    if (o.parentObj != o) {
        ObjectListProc.set_object_respawn_info_bits(o.parentObj, (o.rawData[oBehParams2ndByte] & GOOMBA_BP_TRIPLET_FLAG_MASK) >> 2)

        o.parentObj.rawData[oBehParams] = o.parentObj.rawData[oBehParams] | (o.rawData[oBehParams2ndByte] & GOOMBA_BP_TRIPLET_FLAG_MASK) << 6
    }
}

export const bhv_goomba_update = () => {
    const o = ObjectListProc.gCurrentObject

    if (ObjBhvs2.obj_update_standard_actions(o.rawData[oGoombaScale])) {

        // If this goomba has a spawner and mario moved away from the spawner, unload
        if (o.parentObj != o) {
            if (o.parentObj.rawData[oAction] == GOOMBA_TRIPLET_SPAWNER_ACT_UNLOADED) {
                obj_mark_for_deletion(o)
            }
        }

        cur_obj_scale(o.rawData[oGoombaScale])

        const blinkWrapper = { value: o.rawData[oGoombaBlinkTimer] }
        ObjBhvs2.obj_update_blinking(blinkWrapper, 30, 50, 5)
        o.rawData[oGoombaBlinkTimer] = blinkWrapper.value

        cur_obj_update_floor_and_walls()

        let animSpeed = o.rawData[oForwardVel] / o.rawData[oGoombaScale] * 0.4
        if (animSpeed < 1.0) { animSpeed = 1.0 }
        cur_obj_init_animation_with_accel_and_sound(0, animSpeed)

        switch (o.rawData[oAction]) {
            case GOOMBA_ACT_WALK:
                goomba_act_walk()
                break
            case GOOMBA_ACT_ATTACKED_MARIO:
                goomba_act_attacked_mario()
                break
            case GOOMBA_ACT_JUMP:
                goomba_act_jump()
                break
            default: throw "goomba act not implemented"
        }

        if (ObjBhvs2.obj_handle_attacks(sGoombaHitbox, GOOMBA_ACT_ATTACKED_MARIO,
                                                sGoombaAttackHandlers[o.rawData[oGoombaSize] & 1])) {
            mark_goomba_as_dead()
        }

        cur_obj_move_standard(-78)

    } else {
        o.rawData[oAnimState] = 1
    }

}

export const bhv_goomba_triplet_spawner_update = () => {
    const o = ObjectListProc.gCurrentObject

    // If mario is close enough and the goombas aren't currently loaded, then spawn them
    if (o.rawData[oAction] == GOOMBA_TRIPLET_SPAWNER_ACT_UNLOADED) {
        if (o.rawData[oDistanceToMario] < 3000.0) {
            // The spawner is capable of spawning more than 3 goombas, but this is not used in the game
            const dAngle = 0x10000 / (((o.rawData[oBehParams2ndByte & GOOMBA_TRIPLET_SPAWNER_BP_EXTRA_GOOMBAS_MASK]) >> 2) + 3)

            for (let angle = 0, goombaFlag = 1 << 8; angle < 0xFFFF; angle += dAngle, goombaFlag <<= 1) {
                if (!(o.rawData[oBehParams] & goombaFlag)) {
                    const dx = 500 * coss(angle)
                    const dz = 500 * sins(angle)

                    spawn_object_relative((o.rawData[oBehParams2ndByte] & GOOMBA_TRIPLET_SPAWNER_BP_SIZE_MASK) | (goombaFlag >> 6),
                        dx, 0, dz, o, MODEL_GOOMBA, bhvGoomba)
                }
            }

            o.rawData[oAction] += 1
        }

    } else if (o.rawData[oDistanceToMario] > 4000.0) {
        o.rawData[oAction] = GOOMBA_TRIPLET_SPAWNER_ACT_UNLOADED
    }

}

gLinker.bhv_goomba_init = bhv_goomba_init
gLinker.bhv_goomba_update = bhv_goomba_update
gLinker.bhv_goomba_triplet_spawner_update = bhv_goomba_triplet_spawner_update
