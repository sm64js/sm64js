import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { ACTIVE_PARTICLE_DIRT, ACTIVE_PARTICLE_MIST_CIRCLE, ACTIVE_PARTICLE_SNOW, oActiveParticleFlags } from "../../include/object_constants"
import { cur_obj_spawn_particles, spawn_object_with_scale } from "../ObjectHelpers"
import { MODEL_MIST, MODEL_SAND_DUST, MODEL_SMOKE, MODEL_WHITE_PARTICLE_DL } from "../../include/model_ids"

const bhv_pound_white_puffs_init = () => {
    clear_particle_flags(ACTIVE_PARTICLE_MIST_CIRCLE);
    spawn_mist_from_global();
}

const sGlobalMistParticles = {
    bhvParam:        3,
    count:           20,
    model:           MODEL_MIST,
    offsetY:         20,
    forwardVelBase:  10,
    forwardVelRange: 5,
    velYBase:        0,
    velYRange:       0,
    gravity:         0,
    dragStrength:    30,
    sizeBase:        30.0,
    sizeRange:       1.5,
};

const spawn_mist_from_global = () => {
    cur_obj_spawn_particles(sGlobalMistParticles)
}

const sSandParticles = {
    behParam:        3,
    count:           5,
    model:           MODEL_SAND_DUST,
    offsetY:         0,
    forwardVelBase:  0, 
    forwardVelRange: 20,
    velYBase:        20,
    velYRange:       0, 
    gravity:         252,
    dragStrength:    30,
    sizeBase:        5.0,
    sizeRange:       2.0
};

const bhv_ground_sand_init = () => {
    clear_particle_flags(ACTIVE_PARTICLE_DIRT);
    cur_obj_spawn_particles(sSandParticles);
}

const sSmokeMovementParams = [ 2, -8, 1, 4 ]

export const clear_particle_flags = (flags) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.parentObj.rawData[oActiveParticleFlags] &= flags ^ -1
}

const sSnowParticles = {
    behParam:        0,
    count:           5,
    model:           MODEL_WHITE_PARTICLE_DL,
    offsetY:         0,
    forwardVelBase:  0, 
    forwardVelRange: 20,
    velYBase:        20,
    velYRange:       0, 
    gravity:         252,
    dragStrength:    30,
    sizeBase:        2.0,
    sizeRange:       2.0
};

const bhv_ground_snow_init = () => {
    clear_particle_flags(ACTIVE_PARTICLE_SNOW);
    cur_obj_spawn_particles(sSnowParticles);
}

gLinker.bhv_pound_white_puffs_init = bhv_pound_white_puffs_init
gLinker.bhv_ground_sand_init = bhv_ground_sand_init
gLinker.bhv_ground_snow_init = bhv_ground_snow_init