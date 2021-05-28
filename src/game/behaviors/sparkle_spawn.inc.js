import * as _Linker from "../../game/Linker"

import {
    try_to_spawn_object, obj_translate_xyz_random, obj_scale_random, obj_mark_for_deletion
} from "../ObjectHelpers"

import {
    oTimer
} from "../../include/object_constants"

import {
    MODEL_SPARKLES_ANIMATION
} from "../../include/model_ids"

/**
 * Behavior for bhvSparkleSpawn.
 *
 * This spawns the sparkles used by various objects. After being given a
 * random local position and scale, each sparkle's behavior is thereafter
 * controlled by bhvSparkle. This spawner is deleted after 1 frame.
 */
export const bhv_sparkle_spawn_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    const sparkle = try_to_spawn_object(0, 1.0, o, MODEL_SPARKLES_ANIMATION, 'bhvSparkle')
    if (sparkle) {
        obj_translate_xyz_random(sparkle, 90.0)
        obj_scale_random(sparkle, 1.0, 0.0)
    }
    if (o.rawData[oTimer] > 1) {
        obj_mark_for_deletion(o)
    }
}

gLinker.bhv_sparkle_spawn_loop = bhv_sparkle_spawn_loop
