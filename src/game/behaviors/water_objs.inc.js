import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWaterObjUnkFC, oWaterObjUnk100, oPosX, oPosZ, oWaterObjUnkF4, oWaterObjUnkF8, oPosY, oInteractStatus } from "../../include/object_constants"
import { SurfaceCollisionInstance as SurfaceCollision } from "../../engine/SurfaceCollision"
import { sins } from "../../utils"
import { INT_STATUS_INTERACTED } from "../Interaction"
import { obj_mark_for_deletion } from "../ObjectHelpers"


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
        o.activeFlags = 0
        o.rawData[oPosY] += 5.0
        ///TODO spawn small water splash (when the bubble hits the surface, this is tiny and super subtle)
    }

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED)
        obj_mark_for_deletion(o)
}