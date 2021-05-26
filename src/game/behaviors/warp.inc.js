// warp.c.inc
import * as _Linker from "../../game/Linker"
import {
    oBehParams, oInteractStatus, oTimer
 } from "../../include/object_constants"


export const bhv_warp_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*u16*/ sp6
    if (o.rawData[oTimer] == 0) {
        sp6 = (o.rawData[oBehParams] >> 24) & 0xFF
        if (sp6 == 0)
            o.hitboxRadius = 50.0
        else if (sp6 == 0xFF)
            o.hitboxRadius = 10000.0
        else
            o.hitboxRadius = sp6 * 10.0
        o.hitboxHeight = 50.0
    }
    o.rawData[oInteractStatus] = 0
}

export const bhv_fading_warp_loop = () => {   // identical to the above function except for o->hitboxRadius
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let /*u16*/ sp6
    if (o.rawData[oTimer] == 0) {
        sp6 = (o.rawData[oBehParams] >> 24) & 0xFF
        if (sp6 == 0)
            o.hitboxRadius = 85.0
        else if (sp6 == 0xFF)
            o.hitboxRadius = 10000.0
        else
            o.hitboxRadius = sp6 * 10.0
        o.hitboxHeight = 50.0
    }
    o.rawData[oInteractStatus] = 0
}

gLinker.bhv_warp_loop = bhv_warp_loop
gLinker.bhv_fading_warp_loop = bhv_fading_warp_loop
