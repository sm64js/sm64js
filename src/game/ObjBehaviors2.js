import { oFlags, OBJ_FLAG_30, oInteractType, oDamageOrCoinValue, oHealth, oNumLootCoins, oAnimState, oAction, OBJ_ACT_HORIZONTAL_KNOCKBACK, OBJ_ACT_VERTICAL_KNOCKBACK, OBJ_ACT_SQUISHED, oInteractStatus, oTimer, oForwardVel, oVelY, OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW, oMoveAngleYaw, oMoveFlags, OBJ_MOVE_MASK_ON_GROUND, OBJ_MOVE_MASK_IN_WATER, OBJ_MOVE_HIT_WALL, OBJ_MOVE_ABOVE_LAVA, oHomeX, oHomeY, oHomeZ, oPosX, oPosY, oPosZ, oDistanceToMario, oAngleToMario, OBJ_MOVE_HIT_EDGE, oMoveAnglePitch, oFaceAnglePitch, oDeathSound } from "../include/object_constants"

import { cur_obj_become_tangible, cur_obj_extend_animation_if_at_end, cur_obj_become_intangible, cur_obj_hide, obj_mark_for_deletion, obj_angle_to_object, cur_obj_update_floor_and_walls, cur_obj_move_standard, abs_angle_diff, cur_obj_rotate_yaw_toward, cur_obj_reflect_move_angle_off_wall, approach_symmetric, obj_spawn_loot_yellow_coins, spawn_mist_particles } from "./ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { INT_STATUS_INTERACTED, INT_STATUS_ATTACK_MASK, INT_STATUS_ATTACKED_MARIO, ATTACK_KICK_OR_TRIP, ATTACK_FAST_ATTACK } from "./Interaction"
import { atan2s } from "../engine/math_util"
import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"
import { coss, sins, int16 } from "../utils"

export const ATTACK_HANDLER_NOP = 0
export const ATTACK_HANDLER_DIE_IF_HEALTH_NON_POSITIVE = 1
export const ATTACK_HANDLER_KNOCKBACK = 2
export const ATTACK_HANDLER_SQUISHED = 3
export const ATTACK_HANDLER_SPECIAL_KOOPA_LOSE_SHELL = 4
export const ATTACK_HANDLER_SET_SPEED_TO_ZERO = 5
export const ATTACK_HANDLER_SPECIAL_WIGGLER_JUMPED_ON = 6
export const ATTACK_HANDLER_SPECIAL_HUGE_GOOMBA_WEAKLY_ATTACKED = 7
export const ATTACK_HANDLER_SQUISHED_WITH_BLUE_COIN = 8


export const random_linear_offset = (base, range) => {
    return parseInt(base + (range * Math.random()))
}

export const approach_number_ptr = (px, target, delta) => {
    if (px.value > target) delta = -delta

    px.value += delta

    if ((px.value - target) * delta >= 0) {
        px.value = target
        return 1
    }
    return 0
}

export const oscillate_toward = (valueObj, velObj, target, velCloseToZero, accel, slowdown) => {
    let startValue = valueObj.value
    valueObj.value += velObj.value


    if (valueObj.value == target
        || ((valueObj.value - target) * (startValue - target) < 0 && velObj.value > -velCloseToZero
            && velObj.value < velCloseToZero)) {
        valueObj.value = target
        velObj.value = 0.0
        return 1
    } else {
        if (valueObj.value >= target) {
            accel = -accel
        }
        if (velObj.value * accel < 0.0) {
            accel *= slowdown
        }

        velObj.value += accel
    }

    return 0
}

export const obj_move_pitch_approach = (target, delta) => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oMoveAnglePitch] = approach_symmetric(o.rawData[oMoveAnglePitch], target, delta)

    if (int16(o.rawData[oMoveAnglePitch]) == target) {
        return 1
    }

    return 0
}

export const obj_face_pitch_approach = (target, delta) => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oFaceAnglePitch] = approach_symmetric(o.rawData[oFaceAnglePitch], target, delta)

    if (int16(o.rawData[oFaceAnglePitch]) == target) {
        return 1
    }

    return 0
}

export const obj_get_pitch_from_vel = () => {
    const o = ObjectListProc.gCurrentObject
    return -atan2s(o.rawData[oForwardVel], o.rawData[oVelY])
}

export const obj_random_fixed_turn = (delta) => {
    const o = ObjectListProc.gCurrentObject
    return o.rawData[oMoveAngleYaw] + parseInt(BhvCmds.random_sign() * delta)
}

export const obj_forward_vel_approach = (target, delta) => {
    const o = ObjectListProc.gCurrentObject

    const wrapper = { value: o.rawData[oForwardVel] }
    const result = approach_number_ptr(wrapper, target, delta)
    o.rawData[oForwardVel] = wrapper.value

    return result
}

export const obj_set_hitbox = (obj, hitbox) => {
    if (!(obj.rawData[oFlags] & OBJ_FLAG_30)) {
        obj.rawData[oFlags] |= OBJ_FLAG_30

        obj.rawData[oInteractType] = hitbox.interactType
        obj.rawData[oDamageOrCoinValue] = hitbox.damageOrCoinValue
        obj.rawData[oHealth] = hitbox.health
        obj.rawData[oNumLootCoins] = hitbox.numLootCoins

        cur_obj_become_tangible()
    }

    obj.hitboxRadius = obj.header.gfx.scale[0] * hitbox.radius
    obj.hitboxHeight = obj.header.gfx.scale[1] * hitbox.height
    obj.hurtboxRadius = obj.header.gfx.scale[0] * hitbox.hurtboxRadius
    obj.hurtboxHeight = obj.header.gfx.scale[1] * hitbox.hurtboxHeight
    obj.hitboxDownOffset = obj.header.gfx.scale[1] * hitbox.downOffset
}

export const obj_bounce_off_walls_edges_objects = (targetYawWrapper) => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
        targetYawWrapper.value = cur_obj_reflect_move_angle_off_wall()
    } else if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_EDGE) {
        targetYawWrapper.value = int16(o.rawData[oMoveAngleYaw] + 0x8000)
    } else if (!obj_resolve_object_collisions(targetYawWrapper)) {
        return 0
    }

    return 1
}

export const obj_resolve_object_collisions = (targetYawWrapper) => {

    const o = ObjectListProc.gCurrentObject

    if (o.numCollidedObjs != 0) {
        const otherObject = o.collidedObjs[0]
        if (otherObject != ObjectListProc.gMarioObject) {
            //! If one object moves after collisions are detected and this code
            //  runs, the objects can move toward each other (transport cloning)

            const dx = otherObject.rawData[oPosX] - o.rawData[oPosX]
            const dz = otherObject.rawData[oPosZ] - o.rawData[oPosZ]
            const angle = atan2s(dx, dz) //! This should be atan2s(dz, dx)

            const radius = o.hitboxRadius
            const otherRadius = otherObject.hitboxRadius
            const relativeRadius = radius / (radius + otherRadius)

            const newCenterX = o.rawData[oPosX] + dx * relativeRadius
            const newCenterZ = o.rawData[oPosZ] + dz * relativeRadius

            o.rawData[oPosX] = newCenterX - radius * coss(angle) 
            o.rawData[oPosZ] = newCenterZ - radius * sins(angle)

            otherObject.rawData[oPosX] = newCenterX + otherRadius * coss(angle)
            otherObject.rawData[oPosZ] = newCenterZ + otherRadius * sins(angle)

            if (targetYawWrapper.value && abs_angle_diff(o.rawData[oMoveAngleYaw], angle) < 0x4000) {
                // Bounce off object (or it would, if the above atan2s bug
                // were fixed)
                targetYawWrapper.value = parseInt(angle - o.rawData[oMoveAngleYaw] + angle + 0x8000)
                return 1
            }
        }
    }

    return 0
}

export const obj_resolve_collisions_and_turn = (targetYaw, turnSpeed) => {
    obj_resolve_object_collisions({})

    if (cur_obj_rotate_yaw_toward(targetYaw, turnSpeed)) {
        return 0
    } else {
        return 1
    }
}

export const obj_update_blinking = (blinkTimer, baseCycleLength, cycleLengthRange, blinkLength) => {

    const o = ObjectListProc.gCurrentObject

    if (blinkTimer.value != 0) {
        blinkTimer.value -= 1
    } else {
        blinkTimer.value = random_linear_offset(baseCycleLength, cycleLengthRange)
    }

    if (blinkTimer.value > blinkLength) {
        o.rawData[oAnimState] = 0
    } else {
        o.rawData[oAnimState] = 1
    }
}

export const obj_die_if_health_non_positive = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oHealth] <= 0) {


        if (o.rawData[oDeathSound] == 0) {
            /// TODO death sound and particles
            ///spawn_mist_particles_with_sound(SOUND_OBJ_DEFAULT_DEATH)
        } else if (o.rawData[oDeathSound] > 0) {
            //spawn_mist_particles_with_sound(o.rawData[oDeathSound])
        } else {
            //spawn_mist_particles()
        }

        spawn_mist_particles()

        if (parseInt(o.rawData[oNumLootCoins]) < 0) {
            throw "TODO spawn bhvMrIBlueCoin?"
        } else {
            obj_spawn_loot_yellow_coins(o, o.rawData[oNumLootCoins], 20.0)
        }

        if (o.rawData[oHealth] < 0) {
            cur_obj_hide()
            cur_obj_become_intangible()
        } else {
            obj_mark_for_deletion(o)
        }
    }
}

export const obj_act_knockback = () => {
    const o = ObjectListProc.gCurrentObject

    cur_obj_update_floor_and_walls()

    if (o.header.gfx.unk38.curAnim) {
        cur_obj_extend_animation_if_at_end()
    }

    if ((o.rawData[oMoveFlags] &
        (OBJ_MOVE_MASK_ON_GROUND | OBJ_MOVE_MASK_IN_WATER | OBJ_MOVE_HIT_WALL | OBJ_MOVE_ABOVE_LAVA))
        || (o.rawData[oAction] == OBJ_ACT_VERTICAL_KNOCKBACK && o.rawData[oTimer] >= 9)) {
        obj_die_if_health_non_positive()
    }

    cur_obj_move_standard(-78)
}

export const obj_act_squished = (baseScale) => {
    const targetScaleY = baseScale * 0.3

    cur_obj_update_floor_and_walls()

    const o = ObjectListProc.gCurrentObject

    if (o.header.gfx.unk38.curAnim) {
        cur_obj_extend_animation_if_at_end()
    }

    const wrapper = { value: o.header.gfx.scale[1] }
    const result = approach_number_ptr(wrapper, targetScaleY, baseScale * 0.14)
    o.header.gfx.scale[1] = wrapper.value
    if (result) {
        o.header.gfx.scale[0] = baseScale * 2.0 - o.header.gfx.scale[1]
        o.header.gfx.scale[2] = baseScale * 2.0 - o.header.gfx.scale[1]

        if (o.rawData[oTimer] >= 16) {
            obj_die_if_health_non_positive()
        }

    }

    o.rawData[oForwardVel] = 0.0
    cur_obj_move_standard(-78)

}

export const obj_update_standard_actions = (scale) => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oAction] < 100) return 1
    else {
        cur_obj_become_intangible()

        switch (o.rawData[oAction]) {
            case OBJ_ACT_HORIZONTAL_KNOCKBACK:
            case OBJ_ACT_VERTICAL_KNOCKBACK:
                obj_act_knockback(scale)
                break
            case OBJ_ACT_SQUISHED:
                obj_act_squished(scale)
                break
        }

        return 0

    }

}

export const obj_set_squished_action = () => {
    //play sound
    ObjectListProc.gCurrentObject.rawData[oAction] = OBJ_ACT_SQUISHED
}

export const obj_set_knockback_action = (attackType) => {

    const o = ObjectListProc.gCurrentObject

    switch (attackType) {
        case ATTACK_KICK_OR_TRIP:
        case ATTACK_FAST_ATTACK:
            o.rawData[oAction] = OBJ_ACT_VERTICAL_KNOCKBACK
            o.rawData[oForwardVel] = 20.0
            o.rawData[oVelY] = 50.0
            break

        default:
            o.rawData[oAction] = OBJ_ACT_HORIZONTAL_KNOCKBACK
            o.rawData[oForwardVel] = 50.0
            o.rawData[oVelY] = 30.0
            break
    }

    o.rawData[oFlags] &= ~OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW
    o.rawData[oMoveAngleYaw] = obj_angle_to_object(ObjectListProc.gMarioObject, o)
}

export const obj_check_attacks = (hitbox, attackedMarioAction) => {

    const o = ObjectListProc.gCurrentObject

    obj_set_hitbox(o, hitbox)

    //! Dies immediately if above lava
    if (false) {
        return 1
    } else if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if (o.rawData[oInteractStatus] & INT_STATUS_ATTACKED_MARIO) {
            if (o.rawData[oAction] != attackedMarioAction) {
                o.rawData[oAction] = attackedMarioAction
                o.rawData[oTimer] = 0
            }
        } else {
            const attackType = o.rawData[oInteractStatus] & INT_STATUS_ATTACK_MASK
            obj_die_if_health_non_positive()
            o.rawData[oInteractStatus] = 0
            return attackType
        }
    }

    o.rawData[oInteractStatus] = 0
    return 0
}

export const obj_handle_attacks = (hitbox, attackedMarioAction, attackHandlers) => {

    const o = ObjectListProc.gCurrentObject

    obj_set_hitbox(o, hitbox)

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        if (o.rawData[oInteractStatus] & INT_STATUS_ATTACKED_MARIO) {
            if (o.rawData[oAction] != attackedMarioAction) {
                o.rawData[oAction] = attackedMarioAction
                o.rawData[oTimer] = 0
            }
        } else {
            const attackType = o.rawData[oInteractStatus] & INT_STATUS_ATTACK_MASK

            switch (attackHandlers[attackType - 1]) {
                case ATTACK_HANDLER_KNOCKBACK:
                    obj_set_knockback_action(attackType)
                    break
                case ATTACK_HANDLER_SQUISHED:
                    obj_set_squished_action()
                    break
                default: throw "unknown attackType in obj_handle_attacks " + attackType
            }

            o.rawData[oInteractStatus] = 0
            return attackType
        }
    }

    o.rawData[oInteractStatus] = 0
    return 0

}

export const treat_far_home_as_mario = (threshold) => {
    const o = ObjectListProc.gCurrentObject

    let dx = o.rawData[oHomeX] - o.rawData[oPosX]
    let dy = o.rawData[oHomeY] - o.rawData[oPosY]
    let dz = o.rawData[oHomeZ] - o.rawData[oPosZ]
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

    if (distance > threshold) {
        o.rawData[oAngleToMario] = atan2s(dz, dx)
        o.rawData[oDistanceToMario] = 25000.0
    } else {
        dx = o.rawData[oHomeX] - ObjectListProc.gMarioObject.rawData[oPosX]
        dy = o.rawData[oHomeY] - ObjectListProc.gMarioObject.rawData[oPosY]
        dz = o.rawData[oHomeZ] - ObjectListProc.gMarioObject.rawData[oPosZ]
        distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance > threshold) {
            o.rawData[oDistanceToMario] = 20000.0
        }
    }
}