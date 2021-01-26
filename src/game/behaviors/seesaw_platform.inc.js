import { oAngleToMario, oBehParams2ndByte, oCollisionDistance, oDistanceToMario, oFaceAnglePitch, oMoveAngleYaw, oSeesawPlatformPitchVel } from "../../include/object_constants"
import { bob_seg7_collision_bridge } from "../../levels/bob/seesaw_platform/collision.inc"
import { coss } from "../../utils"
import { oscillate_toward } from "../ObjBehaviors2"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"

const sSeesawPlatformCollisionModels = new Array(8)
sSeesawPlatformCollisionModels[3] = bob_seg7_collision_bridge

export const bhv_seesaw_platform_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.collisionData = sSeesawPlatformCollisionModels[o.rawData[oBehParams2ndByte]]

    if (o.rawData[oBehParams2ndByte] == 2) {
        o.rawData[oCollisionDistance] = 2000.0
    }

}

export const bhv_seesaw_platform_update = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oFaceAnglePitch] += parseInt(o.rawData[oSeesawPlatformPitchVel])

    /// TODO rocking sound

    if (ObjectListProc.gMarioObject.platform == o) {  /// mario is on the platform
        let rotation = o.rawData[oDistanceToMario] * coss(o.rawData[oAngleToMario] - o.rawData[oMoveAngleYaw])

        // Deceleration is faster than acceleration
        if (o.rawData[oSeesawPlatformPitchVel] * rotation < 0) {
            rotation *= 0.04
        } else {
            rotation *= 0.02
        }

        o.rawData[oSeesawPlatformPitchVel] += rotation
        if (o.rawData[oSeesawPlatformPitchVel] > 50) o.rawData[oSeesawPlatformPitchVel] = 50
        if (o.rawData[oSeesawPlatformPitchVel] < -50) o.rawData[oSeesawPlatformPitchVel] = -50

    } else {
        // Rotate back to 0
        const valueWrapper = { value: o.rawData[oFaceAnglePitch] }
        const velWrapper = { value: o.rawData[oSeesawPlatformPitchVel] }
        oscillate_toward(
            /* value          */ valueWrapper,
            /* vel            */ velWrapper,
            /* target         */ 0.0,
            /* velCloseToZero */ 6.0,
            /* accel          */ 3.0,
            /* slowdown       */ 3.0
        )
        o.rawData[oFaceAnglePitch] = valueWrapper.value
        o.rawData[oSeesawPlatformPitchVel] = velWrapper.value
    }

}