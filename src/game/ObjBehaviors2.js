import { oFlags, OBJ_FLAG_30, oInteractType, oDamageOrCoinValue, oHealth, oNumLootCoins } from "../include/object_constants"
import { cur_obj_become_tangible } from "./ObjectHelpers"

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