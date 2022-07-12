import { atan2s, sqrtf } from "../../engine/math_util"
import { oForwardVel, oGravity, oMoveAngleYaw, oVelY } from "../../include/object_constants"

export const arc_to_goal_pos = (a0, a1, yVel, gravity) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let dx = a0[0] - a1[0]
    let dz = a0[2] - a1[2]
    let planarDist = sqrtf(dx * dx + dz * dz)

    o.rawData[oMoveAngleYaw] = atan2s(dz, dx)
    o.rawData[oVelY] = yVel
    o.rawData[oGravity] = gravity

    let time = -2.0 / o.rawData[oGravity] * yVel - 1.0

    o.rawData[oForwardVel] = planarDist / time

    return time
}