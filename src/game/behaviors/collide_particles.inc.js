import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_move_using_fvel_and_gravity, cur_obj_scale, cur_obj_set_pos_relative, obj_mark_for_deletion } from "../ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { MODEL_CARTOON_STAR, MODEL_DIRT_ANIMATION } from "../../include/model_ids"
import { oMoveAngleYaw, oTimer, oCollisionParticleUnkF4, oForwardVel, oPosY, oVelY, oAnimState } from "../../include/object_constants"
import { sins, coss } from "../../utils"

const D_8032F2CC = [
    0xD000, 0, 0x3000, 0, 0xDE67, 0x2199,
    0x2199, 0x2199, 0xDE67, 0xDE67, 0x2199, 0xDE67
]

const D_8032F2E4 = [
    0xE000, 0, 0, 0, 0x2000, 0, 0xE99A,
    0x1666, 0x1666, 0x1666, 0xE99A, 0xE99A, 0x1666, 0xE99A
]

export const bhv_punch_tiny_triangle_init = () => {
    const o = ObjectListProc.gCurrentObject
    for (let i = 0; i < 6; i++) {
        const particle = spawn_object(o, MODEL_DIRT_ANIMATION, gLinker.behaviors.bhvPunchTinyTriangle) 
        particle.rawData[oMoveAngleYaw] = ObjectListProc.gMarioObject.rawData[oMoveAngleYaw] + D_8032F2E4[2 * i] + 0x8000
        particle.rawData[oVelY] = sins(D_8032F2E4[2 * i + 1]) * 25.0
        particle.rawData[oForwardVel] = coss(D_8032F2E4[2 * i + 1]) * 25.0
    }
}

export const bhv_tiny_star_particles_init = () => {
    const o = ObjectListProc.gCurrentObject
    for (let i = 0; i < 7; i++) {
        const particle = spawn_object(o, MODEL_CARTOON_STAR, gLinker.behaviors.bhvWallTinyStarParticle)
        particle.rawData[oMoveAngleYaw] = ObjectListProc.gMarioObject.rawData[oMoveAngleYaw] + D_8032F2E4[2 * i] + 0x8000
        particle.rawData[oVelY] = sins(D_8032F2E4[2 * i + 1]) * 25.0
        particle.rawData[oForwardVel] = coss(D_8032F2E4[2 * i + 1]) * 25.0
    }
}

export const bhv_pound_tiny_star_particle_init = () => {

    const o = ObjectListProc.gCurrentObject

    const sp20 = 8

    for (let i = 0; i < sp20; i++) {
        const particle = spawn_object(o, MODEL_CARTOON_STAR, gLinker.behaviors.bhvPoundTinyStarParticle)
        particle.rawData[oMoveAngleYaw] = (i * 65536) / sp20
    }
}

export const bhv_wall_tiny_star_particle_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        const sp1E = o.rawData[oMoveAngleYaw]
        o.rawData[oCollisionParticleUnkF4] = 0.28
        cur_obj_set_pos_relative(ObjectListProc.gMarioObject, 0.0, 30.0, 110.0)
        o.rawData[oMoveAngleYaw] = sp1E

    }

    cur_obj_move_using_fvel_and_gravity()
    o.rawData[oAnimState] = 4
    cur_obj_scale(o.rawData[oCollisionParticleUnkF4])
    o.rawData[oCollisionParticleUnkF4] -= 0.015
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

export const bhv_punch_tiny_triangle_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        const sp1E = o.rawData[oMoveAngleYaw]
        o.rawData[oCollisionParticleUnkF4] = 1.28
        cur_obj_set_pos_relative(ObjectListProc.gMarioObject, 0.0, 60.0, 100.0)
        o.rawData[oMoveAngleYaw] = sp1E
    }
    cur_obj_move_using_fvel_and_gravity()
    o.rawData[oAnimState] = 5
    cur_obj_scale(o.rawData[oCollisionParticleUnkF4])
    o.rawData[oCollisionParticleUnkF4] -= 0.2
    if (6 < o.rawData[oTimer])
        obj_mark_for_deletion(o)
}

gLinker.bhv_pound_tiny_star_particle_init = bhv_pound_tiny_star_particle_init
gLinker.bhv_pound_tiny_star_particle_loop = bhv_pound_tiny_star_particle_loop
gLinker.bhv_tiny_star_particles_init = bhv_tiny_star_particles_init
gLinker.bhv_wall_tiny_star_particle_loop = bhv_wall_tiny_star_particle_loop
gLinker.bhv_punch_tiny_triangle_loop = bhv_punch_tiny_triangle_loop
gLinker.bhv_punch_tiny_triangle_init = bhv_punch_tiny_triangle_init
