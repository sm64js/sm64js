import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { spawn_object, cur_obj_become_intangible, cur_obj_become_tangible, obj_set_hitbox } from "../ObjectHelpers"
import { MODEL_SPARKLES } from "../../include/model_ids"
import { oGravity, oFriction, oBuoyancy, oAction, MOV_YCOIN_ACT_IDLE, oTimer, MOV_YCOIN_ACT_BLINKING, MOV_YCOIN_ACT_LAVA_DEATH, MOV_YCOIN_ACT_DEATH_PLANE_DEATH, oInteractStatus } from "../../include/object_constants"
import { INTERACT_COIN, INT_STATUS_INTERACTED } from "../Interaction"
import { object_step, obj_check_floor_death, sObjFloor, obj_flicker_and_disappear } from "../ObjBehaviors"

const sMovingYellowCoinHitbox = {
    interactType: INTERACT_COIN,
    downOffset: 0,
    damageOrCoinValue: 1,
    health: 0,
    numLootCoins: 0,
    radius: 100,
    height: 64,
    hurtboxRadius: 0,
    hurtboxHeight: 0
}


export const coin_collected = () => {
    const o = ObjectListProc.gCurrentObject
    spawn_object(o, MODEL_SPARKLES, gLinker.behaviors.bhvGoldenCoinSparkles)
    o.activeFlags = 0
}

export const bhv_moving_yellow_coin_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGravity] = 3.0
    o.rawData[oFriction] = 1.0
    o.rawData[oBuoyancy] = 1.5

    obj_set_hitbox(o, sMovingYellowCoinHitbox)
}

const coin_step = (collisionFlagsPtr) => {
    collisionFlagsPtr.value = object_step()

    obj_check_floor_death(collisionFlagsPtr.value, sObjFloor)

    if ((collisionFlagsPtr.value & 0x1) != 0 && (collisionFlagsPtr.value & 0x8) == 0) {
        ///cur_obj_play_sound_2(SOUND_GENERAL_COIN_DROP)
        return true
    }

    return false
}

const moving_coin_flicker = () => {
    const o = ObjectListProc.gCurrentObject
    coin_step({ value: 0 })
    obj_flicker_and_disappear(o, 0)
}

export const bhv_moving_yellow_coin_loop = () => {

    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case MOV_YCOIN_ACT_IDLE:
            coin_step({ value: 0 })

            if (o.rawData[oTimer] < 10)
                cur_obj_become_intangible()
            else
                cur_obj_become_tangible()

            if (o.rawData[oTimer] >= 301)
                o.rawData[oAction] = 1
            break

        case MOV_YCOIN_ACT_BLINKING:
            moving_coin_flicker()
            break

        case MOV_YCOIN_ACT_LAVA_DEATH:
            o.activeFlags = 0
            break

        case MOV_YCOIN_ACT_DEATH_PLANE_DEATH:
            o.activeFlags = 0
            break

        default: throw "unimplemented case in bhv_moving_yellow_coin_loop " + o.rawData[oAction]
    }

    if ((o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) != 0) {
        coin_collected()
        o.rawData[oInteractStatus] = 0
    }

}

gLinker.bhv_moving_yellow_coin_init = bhv_moving_yellow_coin_init
gLinker.bhv_moving_yellow_coin_loop = bhv_moving_yellow_coin_loop
