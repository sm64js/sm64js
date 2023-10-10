import { oAngleVelYaw, oFaceAngleYaw, oSpinningHeartPlayedSound, oSpinningHeartTotalSpin } from "../../include/object_constants"
import { SOUND_GENERAL_HEART_SPIN } from "../../include/sounds"
import { obj_check_if_collided_with_object, obj_set_hitbox } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

const sRecoveryHeartHitbox = {
    interactType:      0,
    downOffset:        0,
    damageOrCoinValue: 0,
    health:            0,
    numLootCoins:      0,
    radius:            50,
    height:            50,
    hurtboxRadius:     50,
    hurtboxHeight:     50,
}

export const bhv_recovery_heart_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    obj_set_hitbox(o, sRecoveryHeartHitbox)
    if (obj_check_if_collided_with_object(o, gMarioObject)) {
        if (o.rawData[oSpinningHeartPlayedSound] == 0) {
            cur_obj_play_sound_2(SOUND_GENERAL_HEART_SPIN)
            o.rawData[oSpinningHeartPlayedSound]++
        }

        o.rawData[oAngleVelYaw] = 200.0 * gMarioStates[0].forwardVel + 1000
    } else {
        o.rawData[oSpinningHeartPlayedSound] = 0
        o.rawData[oAngleVelYaw] -= 50

        if (o.rawData[oAngleVelYaw] < 400) {
            o.rawData[oAngleVelYaw] = 400
            o.rawData[oSpinningHeartTotalSpin] = 0
        }
    }
    o.rawData[oSpinningHeartTotalSpin] += o.rawData[oAngleVelYaw]
    if (o.rawData[oSpinningHeartTotalSpin] >= 0x10000) {
        gMarioStates[0].healCounter += 4
        o.rawData[oSpinningHeartTotalSpin] -= 0x10000
    }

    o.rawData[oFaceAngleYaw] += o.rawData[oAngleVelYaw]
}

gLinker.bhv_recovery_heart_loop = bhv_recovery_heart_loop