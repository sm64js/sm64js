import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oGoombaSize, GOOMBA_BP_SIZE_MASK, oBehParams2ndByte, oGoombaScale, oDrawingDistance, oDamageOrCoinValue, oGravity } from "../../include/object_constants"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { INTERACT_BOUNCE_TOP } from "../Interaction"
import { cur_obj_scale, cur_obj_init_animation_with_accel_and_sound } from "../ObjectHelpers"

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

export const bhv_goomba_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGoombaSize] = o.rawData[oBehParams2ndByte] & GOOMBA_BP_SIZE_MASK

    o.rawData[oGoombaScale] = sGoombaProperties[o.rawData[oGoombaSize]].scale

    obj_set_hitbox(o, sGoombaHitbox)

    o.rawData[oDrawingDistance] = sGoombaProperties[o.rawData[oGoombaSize]].drawDistance
    o.rawData[oDamageOrCoinValue] = sGoombaProperties[o.rawData[oGoombaSize]].damage

    o.rawData[oGravity] = -8.0 / 3.0 * o.rawData[oGoombaScale]

}

export const bhv_goomba_update = () => {

    const o = ObjectListProc.gCurrentObject

    cur_obj_scale(o.rawData[oGoombaScale])

    cur_obj_init_animation_with_accel_and_sound(0, 1.0)

}