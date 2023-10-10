import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { SurfaceCollisionInstance as SurfaceCollision  } from "../../engine/SurfaceCollision"

import { oPosX, oPosY, oPosZ,
         oWaterObjUnkF4,
         oWaterObjUnkF8,
         oWaterObjUnkFC,
         oWaterObjUnk100,
         oInteractStatus,
         oTimer,
         ACTIVE_FLAG_DEACTIVATED                } from "../../include/object_constants"
import { INT_STATUS_INTERACTED                  } from "../Interaction"
import { obj_mark_for_deletion,
         spawn_object_at_origin,
         spawn_object,
         cur_obj_become_intangible,
         cur_obj_become_tangible,
         cur_obj_forward_vel_approach_upward,
         cur_obj_move_using_fvel_and_gravity,
         obj_angle_to_object,
         obj_scale_xyz,
         obj_translate_xyz_random,
         obj_translate_xz_random,
         try_to_spawn_object,
         cur_obj_scale                          } from "../ObjectHelpers"
import { MODEL_SMALL_WATER_SPLASH,
         MODEL_WHITE_PARTICLE_SMALL             } from "../../include/model_ids"
import { sins,
         s32,
         random_float                           } from "../../utils"
import { SOUND_GENERAL_QUIET_BUBBLE } from "../../include/sounds"
import { cur_obj_play_sound_2 } from "../SpawnSound"


export const bhv_water_air_bubble_init = () => {
    cur_obj_scale(4.0)
}

// Fields 0xF4 & 0xF8 seem to be angles for bubble and cannon
export const bhv_water_air_bubble_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const gMarioObject = ObjectListProc.gMarioObject

    o.gfx.scale[0] = sins(o.rawData[oWaterObjUnkF4]) * 0.5 + 4
    o.gfx.scale[1] = -sins(o.rawData[oWaterObjUnkF4]) * 0.5 + 4
    o.rawData[oWaterObjUnkF4] += 0x400
    if (o.rawData[oTimer] < 30) {
        cur_obj_become_intangible()
        o.rawData[oPosY] += 3
    } else {
        cur_obj_become_tangible()
        cur_obj_forward_vel_approach_upward(2, 10)
        o.rawData[oMoveAngleYaw] = obj_angle_to_object(o, gMarioObject)
        cur_obj_move_using_fvel_and_gravity()
    }
    o.rawData[oPosX] += random_float() * 4 - 2
    o.rawData[oPosZ] += random_float() * 4 - 2
    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED || o.rawData[oTimer] > 200) {
        // cur_obj_play_sound_2(SOUND_GENERAL_QUIET_BUBBLE)
        obj_mark_for_deletion(o)
        for (let i = 0; i < 30; i++) {
            spawn_object(o, MODEL_BUBBLE, gLinker.behaviors.bhvBubbleMaybe)
        }
    }
    if (SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ]) < o.rawData[oPosY]) {
        obj_mark_for_deletion(o)
    }
    o.rawData[oInteractStatus] = 0
}

export const bhv_bubble_wave_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oWaterObjUnkFC]  = 0x800 + s32(random_float() * 2048)
    o.rawData[oWaterObjUnk100] = 0x800 + s32(random_float() * 2048)
    cur_obj_play_sound_2(SOUND_GENERAL_QUIET_BUBBLE);
}



const scale_bubble_random = () => {
    cur_obj_scale(random_float() + 1.0);
}

export const bhv_bubble_maybe_loop = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oPosY] += random_float() * 3 + 6
    o.rawData[oPosX] += random_float() * 10 - 5
    o.rawData[oPosZ] += random_float() * 10 - 5
    o.gfx.scale[0] = sins(o.rawData[oWaterObjUnkF4]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF4] += o.rawData[oWaterObjUnkFC]
    o.gfx.scale[1] = sins(o.rawData[oWaterObjUnkF8]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF8] += o.rawData[oWaterObjUnk100]
}

export const bhv_small_water_wave_loop = () => {
    const o = ObjectListProc.gCurrentObject

    const water_level = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])

    o.gfx.scale[0] = sins(o.rawData[oWaterObjUnkF4]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF4] += o.rawData[oWaterObjUnkFC]
    o.gfx.scale[1] = sins(o.rawData[oWaterObjUnkF8]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF8] += o.rawData[oWaterObjUnk100]

    if (o.rawData[oPosY] > water_level) { // bubble hits water surface
        const bubbleSplash = spawn_object_at_origin(o, MODEL_SMALL_WATER_SPLASH, gLinker.behaviors.bhvBubbleSplash)
        bubbleSplash.rawData[oPosX] = o.rawData[oPosX]
        bubbleSplash.rawData[oPosY] = o.rawData[oPosY] + 5
        bubbleSplash.rawData[oPosZ] = o.rawData[oPosZ]

        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED)
        obj_mark_for_deletion(o)
}

const scale_bubble_sin = () => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.scale[0] = sins(o.rawData[oWaterObjUnkF4]) * 0.5 + 2.0
    o.rawData[oWaterObjUnkF4] += o.rawData[oWaterObjUnkFC]
    o.gfx.scale[1] = sins(o.rawData[oWaterObjUnkF8]) * 0.5 + 2.0
    o.rawData[oWaterObjUnkF8] += o.rawData[oWaterObjUnk100]
}

const bhv_particle_init = () => {
    const o = ObjectListProc.gCurrentObject
    obj_scale_xyz(o, 2, 2, 1)
    o.rawData[oWaterObjUnkFC] = 0x800 + s32(random_float() * 2048)
    o.rawData[oWaterObjUnk100] = 0x800 + s32(random_float() * 2048)
    obj_translate_xyz_random(o, 100)
}

const bhv_particle_loop = () => {
    const o = ObjectListProc.gCurrentObject
    let water_level = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])
    o.rawData[oPosY] += 5
    obj_translate_xz_random(o, 4)
    scale_bubble_sin()
    if (o.rawData[oPosY] > water_level && o.rawData[oTimer]) {
        obj_mark_for_deletion(o)
        try_to_spawn_object(5, 0, o, MODEL_SMALL_WATER_SPLASH, gLinker.behaviors.bhvObjectWaterSplash)
    }
}

const bhv_small_bubbles_loop = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oPosY] += 5
    obj_translate_xz_random(o, 4)
    scale_bubble_sin()
}

const bhv_fish_group_loop = () => {
    const o = ObjectListProc.gCurrentObject
    if (ObjectListProc.gMarioCurrentRoom == 15 || ObjectListProc.gMarioCurrentRoom == 7)
        if (window.gGlobalTimer & 1)
            spawn_object(o, MODEL_WHITE_PARTICLE_SMALL, gLinker.behaviors.bhvSmallParticleBubbles);
}

const bhv_water_waves_init = () => {
    const o = ObjectListProc.gCurrentObject
    for (let i = 0; i < 3; i++) {
        spawn_object(o, MODEL_WHITE_PARTICLE_SMALL, gLinker.behaviors.bhvSmallParticle);
    }
}

gLinker.bhv_bubble_wave_init = bhv_bubble_wave_init
gLinker.bhv_small_water_wave_loop = bhv_small_water_wave_loop
gLinker.bhv_water_air_bubble_init = bhv_water_air_bubble_init
gLinker.bhv_water_air_bubble_loop = bhv_water_air_bubble_loop
gLinker.bhv_particle_init = bhv_particle_init
gLinker.bhv_particle_loop = bhv_particle_loop
gLinker.bhv_water_waves_init = bhv_water_waves_init
gLinker.bhv_small_bubbles_loop = bhv_small_bubbles_loop
gLinker.bhv_fish_group_loop = bhv_fish_group_loop
gLinker.bhv_water_waves_init = bhv_water_waves_init