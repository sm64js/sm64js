import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { is_point_within_radius_of_mario } from "../ObjBehaviors"
import { oPosX, oPosY, oPosZ, oAnimState, oBobombBlinkTimer } from "../../include/object_constants"

const curr_obj_random_blink = (blinkTimer) => {

    const o = ObjectListProc.gCurrentObject

    if (blinkTimer.value == 0) {
        if (parseInt(Math.random() * 100.0) == 0) {
            o.rawData[oAnimState] = 1
            blinkTimer.value = 1
        }
    } else {
        blinkTimer.value++
        if (blinkTimer.value >= 6)
            o.rawData[oAnimState] = 0
        if (blinkTimer.value >= 11)
            o.rawData[oAnimState] = 1
        if (blinkTimer.value >= 16) {
            o.rawData[oAnimState] = 0
            blinkTimer.value = 0
        }
    }
}

export const bhv_bobomb_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 4000) != 0) {

        const blinkWrapper = { value: o.rawData[oBobombBlinkTimer] }
        curr_obj_random_blink(blinkWrapper)
        o.rawData[oBobombBlinkTimer] = blinkWrapper.value
        
    }
}