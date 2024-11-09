/**
 * Behavior for bhvBbhTiltingTrapPlatform.
 * This is the tilting platform trap in the upper floor of BBH
 * that drops the player into the merry-go-round area.
 */

import { oAngleToMario, oAngleVelPitch, oDistanceToMario, oFaceAnglePitch } from "../../include/object_constants"
import { coss } from "../../utils"

export const bhv_bbh_tilting_trap_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    if (gMarioObject.platform == o) {
        o.rawData[oAngleVelPitch] = o.rawData[oDistanceToMario] * coss(o.rawData[oAngleToMario])
        o.rawData[oFaceAnglePitch] += o.rawData[oAngleVelPitch]
    } else {
        o.rawData[oAngleVelPitch] = 0

        if (o.rawData[oFaceAnglePitch] > 0) {
            if (o.rawData[oFaceAnglePitch] < 200) {
                o.rawData[oFaceAnglePitch] = 0
            } else {
                o.rawData[oAngleVelPitch] = -200
            }
        } else {
            if (o.rawData[oFaceAnglePitch] > -200) {
                o.rawData[oFaceAnglePitch] = 0
            } else {
                o.rawData[oAngleVelPitch] = 0
            }
        }
    }
    o.rawData[oFaceAnglePitch] += o.rawData[oAngleVelPitch]
}

gLinker.bhv_bbh_tilting_trap_platform_loop = bhv_bbh_tilting_trap_platform_loop