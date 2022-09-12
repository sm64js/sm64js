import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oActiveParticleFlags } from "../../include/object_constants"
import { cur_obj_spawn_particles } from "../ObjectHelpers"
import { D_8032F3CC, D_8032F3FC } from "./elevator.inc"

export const bhv_pound_white_puffs_init = () => {
    clear_particle_flags(0x8000)
    spawn_mist_from_global()
}

const spawn_mist_from_global = () => {
    cur_obj_spawn_particles(D_8032F3CC)
}

export const clear_particle_flags = (flags) => {
    const o = ObjectListProc.gCurrentObject

    o.parentObj.rawData[oActiveParticleFlags] &= flags ^ -1
}

const bhv_ground_snow_init = () => {
    clear_particle_flags(1 << 16)
    cur_obj_spawn_particles(D_8032F3FC)
}

gLinker.bhv_pound_white_puffs_init = bhv_pound_white_puffs_init
gLinker.bhv_ground_snow_init = bhv_ground_snow_init