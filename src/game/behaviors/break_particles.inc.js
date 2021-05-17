import { obj_scale, spawn_object, random_f32_around_zero } from "../ObjectHelpers"
import { random_u16, random_float, s16 } from "../../utils"
import { oAnimState, oPosY, oMoveAngleYaw, oFaceAngleYaw, oFaceAnglePitch, oVelY, oAngleVelPitch,
oAngleVelYaw, oForwardVel } from "../../include/object_constants"
import { MODEL_DIRT_ANIMATION } from "../../include/model_ids"


export const spawn_triangle_break_particles = (numTris, triModel, triSize, triAnimState) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let triangle
    let i

    for (i = 0; i < numTris; i++) {
        triangle = spawn_object(o, triModel, 'bhvBreakBoxTriangle')
        triangle.rawData[oAnimState] = triAnimState
        triangle.rawData[oPosY] += 100.0
        triangle.rawData[oMoveAngleYaw] = random_u16()
        triangle.rawData[oFaceAngleYaw] = triangle.rawData[oMoveAngleYaw]
        triangle.rawData[oFaceAnglePitch] = random_u16()
        triangle.rawData[oVelY] = random_f32_around_zero(50.0)
        if (triModel == MODEL_DIRT_ANIMATION || triModel == 56) {  // 56??
            triangle.rawData[oAngleVelPitch] = 0xF00
            triangle.rawData[oAngleVelYaw] = 0x500
            triangle.rawData[oForwardVel] = 30.0
        } else {
            triangle.rawData[oAngleVelPitch] = s16(0x80 * (random_float() + 50.0))
            triangle.rawData[oForwardVel] = 30.0
        }
        obj_scale(triangle, triSize)
    }
}
