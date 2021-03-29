import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWaterObjUnkFC, oWaterObjUnk100, oPosX, oPosZ, oWaterObjUnkF4, oWaterObjUnkF8, oPosY, oInteractStatus, ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"
import { SurfaceCollisionInstance as SurfaceCollision } from "../../engine/SurfaceCollision"
import { sins } from "../../utils"
import { INT_STATUS_INTERACTED } from "../Interaction"
import { obj_mark_for_deletion, spawn_object_at_origin } from "../ObjectHelpers"
import { MODEL_SMALL_WATER_SPLASH } from "../../include/model_ids"
import { bhvBubbleSplash } from "../BehaviorData"

export const bhv_bubble_wave_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oWaterObjUnkFC] = 0x800 + parseInt(Math.random() * 2048)
    o.rawData[oWaterObjUnk100] = 0x800 + parseInt(Math.random() * 2048)
    //// play sound quiet bubble
}

export const bhv_small_water_wave_loop = () => {
    const o = ObjectListProc.gCurrentObject

    const water_level = SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])

    o.header.gfx.scale[0] = sins(o.rawData[oWaterObjUnkF4]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF4] += o.rawData[oWaterObjUnkFC]
    o.header.gfx.scale[1] = sins(o.rawData[oWaterObjUnkF8]) * 0.2 + 1.0
    o.rawData[oWaterObjUnkF8] += o.rawData[oWaterObjUnk100]

    if (o.rawData[oPosY] > water_level) { // bubble hits water surface
        const bubbleSplash = spawn_object_at_origin(o, MODEL_SMALL_WATER_SPLASH, bhvBubbleSplash)
        bubbleSplash.rawData[oPosX] = o.rawData[oPosX]
        bubbleSplash.rawData[oPosY] = o.rawData[oPosY] + 5
        bubbleSplash.rawData[oPosZ] = o.rawData[oPosZ]

        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED)
        obj_mark_for_deletion(o)
}
