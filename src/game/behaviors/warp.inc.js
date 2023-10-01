// warp.c.inc
import * as _Linker from "../../game/Linker"
import {
    oBehParams, oInteractStatus, oTimer
 } from "../../include/object_constants"


export const bhv_warp_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0) {
        let bhvParams1stByte = (o.rawData[oBehParams] >> 24) & 0xFF
        
        if (bhvParams1stByte == 0)
            o.hitboxRadius = 50.0
        else if (bhvParams1stByte == 0xFF)
            o.hitboxRadius = 10000.0
        else
            o.hitboxRadius = bhvParams1stByte * 10.0
        o.hitboxHeight = 50.0
    }
    o.rawData[oInteractStatus] = 0
}

export const bhv_fading_warp_loop = () => {   // identical to the above function except for o->hitboxRadius
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0) {
        let bhvParams1stByte = (o.rawData[oBehParams] >> 24) & 0xFF
        
        if (bhvParams1stByte == 0)
            o.hitboxRadius = 85.0
        else if (bhvParams1stByte == 0xFF)
            o.hitboxRadius = 10000.0
        else
            o.hitboxRadius = bhvParams1stByte * 10.0
        o.hitboxHeight = 50.0
    }
    o.rawData[oInteractStatus] = 0
}

gLinker.bhv_warp_loop = bhv_warp_loop
gLinker.bhv_fading_warp_loop = bhv_fading_warp_loop
