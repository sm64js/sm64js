import * as _Linker from "../../game/Linker"
import { ACTIVE_PARTICLE_BREATH } from "../../include/object_constants"
import { clear_particle_flags } from "./ground_particles.inc"
import { MODEL_MIST } from "../../include/model_ids"
import { bhvWaterMist } from "../BehaviorData"
import { oTimer, oMoveAngleYaw, oOpacity } from "../../include/object_constants"
import { spawn_object, cur_obj_move_using_fvel_and_gravity, cur_obj_scale, obj_translate_xz_random, obj_mark_for_deletion } from "../ObjectHelpers"

const bhv_water_mist_spawn_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    clear_particle_flags(ACTIVE_PARTICLE_BREATH)
    spawn_object(o, MODEL_MIST, bhvWaterMist)
}

const bhv_water_mist_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let scale

    if (o.rawData[oTimer] == 0) {
        o.rawData[oMoveAngleYaw] = gMarioObject.rawData[oMoveAngleYaw]
        obj_translate_xz_random(o, 10.0)
    }

    cur_obj_move_using_fvel_and_gravity();
    o.rawData[oOpacity] -= 42
    scale = (254 - o.rawData[oOpacity]) / 254.0 * 1.0 + 0.5
    cur_obj_scale(scale)

    if (o.rawData[oOpacity] < 2) {
        obj_mark_for_deletion(o)
    }
}

gLinker.bhv_water_mist_spawn_loop = bhv_water_mist_spawn_loop
gLinker.bhv_water_mist_loop = bhv_water_mist_loop
