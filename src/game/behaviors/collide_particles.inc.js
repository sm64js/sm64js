import { spawn_object, cur_obj_move_using_fvel_and_gravity, cur_obj_scale } from "../ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { MODEL_CARTOON_STAR } from "../../include/model_ids"
import { oMoveAngleYaw, oTimer, oCollisionParticleUnkF4, oForwardVel, oPosY, oVelY, oAnimState } from "../../include/object_constants"
import { bhvPoundTinyStarParticle } from "../BehaviorData"

export const bhv_pound_tiny_star_particle_init = () => {

    const o = ObjectListProc.gCurrentObject

    const sp20 = 8

    for (let i = 0; i < sp20; i++) {
        const particle = spawn_object(o, MODEL_CARTOON_STAR, bhvPoundTinyStarParticle)
        particle.rawData[oMoveAngleYaw] = (i * 65536) / sp20
    }
}

export const bhv_pound_tiny_star_particle_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        o.rawData[oCollisionParticleUnkF4] = 0.28
        o.rawData[oForwardVel] = 25.0
        o.rawData[oPosY] -= 20.0
        o.rawData[oVelY] = 14.0
    }
    cur_obj_move_using_fvel_and_gravity()
    o.rawData[oAnimState] = 4
    cur_obj_scale(o.rawData[oCollisionParticleUnkF4])
    o.rawData[oCollisionParticleUnkF4] -= 0.015

}