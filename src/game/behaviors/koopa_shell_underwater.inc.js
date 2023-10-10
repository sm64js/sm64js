// koopa_shell_underwater.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_unrender_set_action_and_anim, obj_set_hitbox, obj_mark_for_deletion, spawn_mist_particles } from "../ObjectHelpers"
import { INTERACT_GRABBABLE, INT_STATUS_STOP_RIDING } from "../Interaction"
import { oInteractStatus, HELD_FREE, HELD_THROWN, HELD_DROPPED, oHeldState } from "../../include/object_constants"


const sKoopaShellUnderwaterHitbox = {
    interactType:       INTERACT_GRABBABLE,
    downOffset:         0,
    damageOrCoinValue:  0,
    health:             1,
    numLootCoins:       0,
    radius:             80,
    height:             50,
    hurtboxRadius:      0,
    hurtboxHeight:      0,
}

const set_koopa_shell_underwater_hitbox = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    obj_set_hitbox(o, sKoopaShellUnderwaterHitbox)
}

const bhv_koopa_shell_underwater_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oHeldState]) {
        case HELD_FREE:
            set_koopa_shell_underwater_hitbox()
            break
        case HELD_HELD:
            cur_obj_unrender_set_action_and_anim(-1, 0)
            break
        case HELD_THROWN:
        case HELD_DROPPED:
            obj_mark_for_deletion(o)
            spawn_mist_particles()
            break
    }
    if (o.rawData[oInteractStatus] & INT_STATUS_STOP_RIDING) {
        obj_mark_for_deletion(o)
        spawn_mist_particles()
    }
    o.rawData[oInteractStatus] = 0
}


gLinker.bhv_koopa_shell_underwater_loop = bhv_koopa_shell_underwater_loop
