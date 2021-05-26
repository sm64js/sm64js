import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { cur_obj_check_anim_frame, spawn_object } from "./ObjectHelpers"
import { oSoundEffectUnkF4 } from "../include/object_constants"
import { play_sound } from "../audio/external"
import { bhvSoundSpawner } from "./BehaviorData"
import { GRAPH_RENDER_ACTIVE } from "../engine/graph_node"

/*
 * execute an object's current sound state with a provided array
 * of sound states. Used for the stepping sounds of various
 * objects. (King Bobomb, Bowser, King Whomp)
 */
export const exec_anim_sound_state = (soundStates) => {
    const stateIdx = ObjectListProc.gCurrentObject.oSoundStateID

    switch (soundStates[stateIdx].playSound) {
        // since we have an array of sound states corresponding to
        // various behaviors, not all entries intend to play sounds. the
        // boolean being 0 for unused entries skips these states.
        case 0:
            break
        case 1:
            let animFrame

            // in the sound state information, -1 (0xFF) is for empty
            // animFrame entries. These checks skips them.
            if ((animFrame = soundStates[stateIdx].animFrame1) >= 0) {
                if (cur_obj_check_anim_frame(animFrame)) {
                    cur_obj_play_sound_2(soundStates[stateIdx].soundMagic)
                }
            }

            if ((animFrame = soundStates[stateIdx].animFrame2) >= 0) {
                if (cur_obj_check_anim_frame(animFrame)) {
                    cur_obj_play_sound_2(soundStates[stateIdx].soundMagic)
                }
            }
            break
    }
}

/*
 * Create a sound spawner for objects that need a sound play once.
 * (Breakable walls, King Bobomb exploding, etc)
 */
export const create_sound_spawner = (soundMagic) => {
    const obj = spawn_object(ObjectListProc.gCurrentObject, 0, bhvSoundSpawner)

    obj.oSoundEffectUnkF4 = soundMagic
}

/*
 * The following 2 functions are relevant to the sound state function
 * above. While only cur_obj_play_sound_2 is used, they may have been intended as
 * separate left/right leg functions that went unused.
 */
export const cur_obj_play_sound_1 = (soundMagic) => {
    if (ObjectListProc.gCurrentObject.gfx.flags & GRAPH_RENDER_ACTIVE) {
        play_sound(soundMagic, ObjectListProc.gCurrentObject.gfx.cameraToObject)
    }
}

export const cur_obj_play_sound_2 = (soundMagic) => {
    if (ObjectListProc.gCurrentObject.gfx.flags & GRAPH_RENDER_ACTIVE) {
        play_sound(soundMagic, ObjectListProc.gCurrentObject.gfx.cameraToObject)
    }
}

/*
 * These 2 functions below are completely unreferenced in all versions
 * of Super Mario 64. They are likely functions which facilitated
 * calculation of distance of an object to volume, since these are
 * common implementations of such a concept, and the fact they are
 * adjacent to other sound functions. The fact there are 2 functions
 * might show that the developers were testing several ranges, or certain
 * objects had different ranges, or had these for other unknown purposes.
 * Technically, these functions are only educated guesses. Trust these
 * interpretations at your own discretion.
 */
export const calc_dist_to_volume_range_1 = (distance) => { // range from 60-124
    let volume

    if (distance < 500.0) {
        volume = 127
    } else if (1500.0 < distance) {
        volume = 0
    } else {
        volume = (((distance - 500.0) / 1000.0) * 64.0) + 60.0
    }

    return volume
}

export const calc_dist_to_volume_range_2 = (distance) => { // range from 79.2-143.2
    let volume

    if (distance < 1300.0) {
        volume = 127
    } else if (2300.0 < distance) {
        volume = 0
    } else {
        volume = (((distance - 1000.0) / 1000.0) * 64.0) + 60.0
    }

    return volume
}
