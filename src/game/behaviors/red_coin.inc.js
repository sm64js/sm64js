import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { obj_set_hitbox } from "../ObjectHelpers"
import { INTERACT_COIN, INT_STATUS_INTERACTED } from "../Interaction"
import { oInteractStatus } from "../../include/object_constants"
import { coin_collected } from "./moving_coin.inc"

const sRedCoinHitbox = {
    interactType: INTERACT_COIN,
    downOffset: 0,
    damageOrCoinValue: 2,
    health: 0,
    numLootCoins: 0,
    radius: 100,
    height: 64,
    hurtboxRadius: 0,
    hurtboxHeight: 0
}


export const bhv_red_coin_init = () => {
    const o = ObjectListProc.gCurrentObject
    /// TODO red coin star code
    obj_set_hitbox(o, sRedCoinHitbox)

}

export const bhv_red_coin_loop = () => {
    const o = ObjectListProc.gCurrentObject

    // If Mario interacted with the object...
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        /// TODO more red coin logic code

        coin_collected()
        o.rawData[oInteractStatus] = 0

    }
}

gLinker.bhv_red_coin_init = bhv_red_coin_init
gLinker.bhv_red_coin_loop = bhv_red_coin_loop
