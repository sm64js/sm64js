import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oGoombaSize, GOOMBA_BP_SIZE_MASK, oBehParams2ndByte, oGoombaScale, oDrawingDistance, oDamageOrCoinValue, oGravity, oForwardVel, oGoombaBlinkTimer, oAnimState, GOOMBA_ACT_ATTACKED_MARIO } from "../../include/object_constants"
import * as ObjBhvs2 from "../ObjBehaviors2"
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

export const bhv_goomba_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGoombaSize] = o.rawData[oBehParams2ndByte] & GOOMBA_BP_SIZE_MASK

    o.rawData[oGoombaScale] = sGoombaProperties[o.rawData[oGoombaSize]].scale

    ObjBhvs2.obj_set_hitbox(o, sGoombaHitbox)

    o.rawData[oDrawingDistance] = sGoombaProperties[o.rawData[oGoombaSize]].drawDistance
    o.rawData[oDamageOrCoinValue] = sGoombaProperties[o.rawData[oGoombaSize]].damage

    o.rawData[oGravity] = -8.0 / 3.0 * o.rawData[oGoombaScale]

}

export const bhv_goomba_update = () => {

    const o = ObjectListProc.gCurrentObject

    if (ObjBhvs2.obj_update_standard_actions(o.rawData[oGoombaScale])) {
        cur_obj_scale(o.rawData[oGoombaScale])

        const blinkWrapper = { value: o.rawData[oGoombaBlinkTimer] }
        ObjBhvs2.obj_update_blinking(blinkWrapper, 30, 50, 5)
        o.rawData[oGoombaBlinkTimer] = blinkWrapper.value

        let animSpeed = o.rawData[oForwardVel] / o.rawData[oGoombaScale] * 0.4
        if (animSpeed < 1.0) { animSpeed = 1.0 }
        cur_obj_init_animation_with_accel_and_sound(0, animSpeed)

        if (ObjBhvs2.obj_handle_attacks(sGoombaHitbox, GOOMBA_ACT_ATTACKED_MARIO,
                                                sGoombaAttackHandlers[o.rawData[oGoombaSize] & 1])) {
            console.log("mark goomba as dead")
        }

    } else {
        o.rawData[oAnimState] = 1
    }

}