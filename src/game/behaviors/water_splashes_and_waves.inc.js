// water_splashes_and_waves.c.inc
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { AreaInstance as Area                          } from "../Area"
import { SurfaceCollisionInstance as SurfaceCollision  } from "../../engine/SurfaceCollision"
import { LevelUpdateInstance as LevelUpdate            } from "../LevelUpdate"

import { GRAPH_RENDER_BILLBOARD           } from "../../engine/graph_node"
import { spawn_water_droplet,
         obj_mark_for_deletion,
         obj_init_animation_with_sound,
         try_to_spawn_object,
         cur_obj_scale,
         obj_scale_xyz,
         obj_copy_pos                     } from "../ObjectHelpers"

import { WATER_DROPLET_FLAG_RAND_ANGLE,
         WATER_DROPLET_FLAG_RAND_OFFSET_XZ,
         WATER_DROPLET_FLAG_RAND_OFFSET_XYZ,
         WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL,
         WATER_DROPLET_FLAG_RAND_ANGLE_INCR_PLUS_8000,
         WATER_DROPLET_FLAG_RAND_ANGLE_INCR  } from "../ObjectHelpers"

import { MODEL_WHITE_PARTICLE_SMALL,
         MODEL_FISH,
         MODEL_SMALL_WATER_SPLASH         } from "../../include/model_ids"

import { FLOOR_LOWER_LIMIT_MISC           } from "../../include/surface_terrains"

import { oPosX, oPosY, oPosZ,
         oVelY,
         oTimer, oAnimState,
         oFaceAngleYaw,
         oMarioParticleFlags,
         oActiveParticleFlags             } from "../../include/object_constants"

import { ACTIVE_PARTICLE_IDLE_WATER_WAVE,
         ACTIVE_FLAG_DEACTIVATED          } from "../../include/object_constants"

import { bhvWaterDroplet,
         bhvWaterDropletSplash            } from "../BehaviorData"

import { blue_fish_seg3_anims_0301C2B0    } from "../../actors/blue_fish/anims.inc"

import { random_int16,
         random_float,
         random_u16,
         u16                              } from "../../utils"


// Water droplets from Mario jumping in a pool of water.
const sWaterSplashDropletParams = () => {
    return {
        flags: WATER_DROPLET_FLAG_RAND_ANGLE,
        model: MODEL_WHITE_PARTICLE_SMALL,
        behavior: bhvWaterDroplet,
        randForwardVel: [5, 3],
        randYVel: [30, 20],
        randSize: [0.5, 1]
    }
}

// Water droplets from Mario jumping in shallow water.
const gShallowWaterSplashDropletParams = () => {
    return {
        flags: WATER_DROPLET_FLAG_RAND_ANGLE | WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL,
        model: MODEL_WHITE_PARTICLE_SMALL,
        behavior: bhvWaterDroplet,
        randForwardVel: [2, 3],
        randYVel: [20, 20],
        randSize: [0.5, 1]
    }
}

// The fish particle easter egg from Mario jumping in shallow water.
const sWaterDropletFishParams = () => {
    return {
        flags: WATER_DROPLET_FLAG_RAND_ANGLE | WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL,
        model: MODEL_FISH,
        behavior: bhvWaterDroplet,
        randForwardVel: [2, 3],
        randYVel: [20, 20],
        randSize: [1, 0]
    }
}

// Water droplets from Mario running in shallow water.
const gShallowWaterWaveDropletParams = () => {
    return {
        flags: WATER_DROPLET_FLAG_RAND_ANGLE_INCR_PLUS_8000 | WATER_DROPLET_FLAG_RAND_ANGLE | WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL,
        model: MODEL_WHITE_PARTICLE_SMALL,
        behavior: bhvWaterDroplet,
        moveAngleRange: 0x6000,
        randForwardVel: [2, 8],
        randYVel: [10, 10],
        randSize: [0.5, 1]
    }
}


const bhv_water_splash_spawn_droplets = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0)
        o.rawData[oPosY] = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])

    if (o.rawData[oPosY] > FLOOR_LOWER_LIMIT_MISC) { // Make sure it is not at the default water level
        for (let i = 0; i < 3; i++) {
            spawn_water_droplet(o, sWaterSplashDropletParams)
        }
    }
}

const bhv_water_droplet_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const waterLevel = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ]);

    if (o.rawData[oTimer] == 0) {
        // if (cur_obj_has_model(MODEL_FISH))
        //     o.gfx.flags &= ~GRAPH_RENDER_BILLBOARD;
        // else
            o.gfx.flags |= GRAPH_RENDER_BILLBOARD;
        o.rawData[oFaceAngleYaw] = random_int16()
    }
    // Apply gravity
    o.rawData[oVelY] -= 4
    o.rawData[oPosY] += o.rawData[oVelY]
    // Check if fallen back into the water
    if (o.rawData[oVelY] < 0) {
        if (waterLevel > o.rawData[oPosY]) {
            // Create the smaller splash
            try_to_spawn_object(0, 1, o, MODEL_SMALL_WATER_SPLASH, bhvWaterDropletSplash)
            obj_mark_for_deletion(o)
        } else if (o.rawData[oTimer] > 20) {
            obj_mark_for_deletion(o)
        }
    }
    if (waterLevel < FLOOR_LOWER_LIMIT_MISC)
        obj_mark_for_deletion(o)
}

const bhv_idle_water_wave_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const gMarioObject = ObjectListProc.gMarioObject
    const gMarioState = LevelUpdate.gMarioState

    obj_copy_pos(o, gMarioObject)
    o.rawData[oPosY] = gMarioState.waterLevel + 5
    if (!(gMarioObject.rawData[oMarioParticleFlags] & ACTIVE_PARTICLE_IDLE_WATER_WAVE)) {
        gMarioObject.rawData[oActiveParticleFlags] &= u16(~ACTIVE_PARTICLE_IDLE_WATER_WAVE)
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

const bhv_water_droplet_splash_init = () => {
    cur_obj_scale(random_float() + 1.5)
}

const bhv_bubble_splash_init = () => {
    const o = ObjectListProc.gCurrentObject
    let waterLevel = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])
    obj_scale_xyz(o, 0.5, 1, 0.5)
    o.rawData[oPosY] = waterLevel + 5
}

const bhv_shallow_water_splash_init = () => {
    const o = ObjectListProc.gCurrentObject
    // Have a 1 in 256 chance to spawn the fish particle easter egg.
    if ((random_u16() & 0xFF) <= 0) { // Strange
        const fishObj = spawn_water_droplet(o, sWaterDropletFishParams)
        obj_init_animation_with_sound(fishObj, blue_fish_seg3_anims_0301C2B0, 0)
    }
}

const bhv_wave_trail_shrink = () => {
    const o = ObjectListProc.gCurrentObject
    let waterLevel = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])
    // Destroy every other water wave to space them out (this is a terrible way of doing it)
    if (o.rawData[oTimer] == 0)
        if (window.gGlobalTimer & 1)
            obj_mark_for_deletion(o)
    o.rawData[oPosY] = waterLevel + 5

    if (o.rawData[oTimer] == 0)
        o.oWaveTrailSize = o.gfx.scale[0]

    if (o.rawData[oAnimState] > 3) {
        o.oWaveTrailSize = o.oWaveTrailSize - 0.1 // Shrink the wave
        if (o.oWaveTrailSize < 0)
            o.oWaveTrailSize = 0
        o.gfx.scale[0] = o.oWaveTrailSize
        o.gfx.scale[2] = o.oWaveTrailSize
    }
}

gLinker.gShallowWaterWaveDropletParams = gShallowWaterWaveDropletParams
gLinker.gShallowWaterSplashDropletParams = gShallowWaterSplashDropletParams
gLinker.bhv_shallow_water_splash_init = bhv_shallow_water_splash_init
gLinker.bhv_idle_water_wave_loop = bhv_idle_water_wave_loop
gLinker.bhv_wave_trail_shrink = bhv_wave_trail_shrink
gLinker.bhv_water_splash_spawn_droplets = bhv_water_splash_spawn_droplets
gLinker.bhv_water_droplet_loop = bhv_water_droplet_loop
gLinker.bhv_water_droplet_splash_init = bhv_water_droplet_splash_init
gLinker.bhv_bubble_splash_init = bhv_bubble_splash_init
