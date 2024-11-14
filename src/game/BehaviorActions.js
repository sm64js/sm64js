import { MODEL_MIST, MODEL_NONE } from "../include/model_ids";
import { coss, sins } from "../utils";
import { bhvSparkleSpawn } from "./BehaviorData";
import { cur_obj_check_anim_frame_in_range, cur_obj_spawn_particles, spawn_object_relative } from "./ObjectHelpers";
import { SAVE_FLAG_HAVE_METAL_CAP, SAVE_FLAG_HAVE_VANISH_CAP, SAVE_FLAG_HAVE_WING_CAP } from "./SaveFile";
import { cur_obj_play_sound_2 } from "./SpawnSound";

export const sCapSaveFlags = [
    SAVE_FLAG_HAVE_WING_CAP,
    SAVE_FLAG_HAVE_METAL_CAP,
    SAVE_FLAG_HAVE_VANISH_CAP
]

// skipped adding sBooHitRotations, already in the one file it's used


const sMistParticles = {
    behParam: 2, count: 20, model: MODEL_MIST, offsetY: 0, forwardVelBase: 40, forwardVelRange: 5,
    velYBase: 30, velYRange: 20, gravity: -4, dragStrength: 30, sizeBase: 330.0, sizeRange: 10.0
}

export const spawn_mist_particles_variable = (count, offsetY, size) => {
    sMistParticles.sizeBase = size
    sMistParticles.sizeRange = size / 20.0
    sMistParticles.offsetY = offsetY
    if (count == 0) {
        sMistParticles.count = 20
    } else if (count > 20) {
        sMistParticles.count = count
    } else {
        sMistParticles.count = 4
    }
    cur_obj_spawn_particles(sMistParticles)
}


// skipped making geo_move_mario_part_from_parent, already in the one file it's used

export const spawn_sparkle_particles = (n, a1, a2, r) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const separation = 0x10000 / n
    let D_8035FF10

    for (let i = 0; i < n; i++) {
        spawn_object_relative(0, sins(D_8035FF10 + i * separation) * a1, (i + 1) * a2, coss(D_8035FF10 + i * separation) * a1, o, MODEL_NONE, bhvSparkleSpawn)
    }

    D_8035FF10 += r * 0x100
}

// skipped making vec3f_copy_2, unnessecary

export const set_obj_anim_with_accel_and_sound = (a0, a1, a2) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let sp1C
    
    if ((sp1C = o.gfx.animInfo.animAccel / 0x10000) == 0) {
        sp1C = 1.0
    }

    if (cur_obj_check_anim_frame_in_range(a0, sp1C) || cur_obj_check_anim_frame_in_range(a1, sp1C)) {
        cur_obj_play_sound_2(a2)
        return true
    }

    return false
}