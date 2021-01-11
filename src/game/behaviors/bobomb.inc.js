import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { is_point_within_radius_of_mario, object_step, obj_return_home_if_safe, obj_check_if_facing_toward_angle, obj_check_floor_death, sObjFloor } from "../ObjBehaviors"
import { oPosX, oPosY, oPosZ, oAnimState, oBobombBlinkTimer, oHeldState, HELD_FREE, oBehParams, oBehParams2ndByte, BOBOMB_BP_STYPE_GENERIC, oAction, BOBOMB_ACT_PATROL, BOBOMB_ACT_CHASE_MARIO, BOBOMB_ACT_EXPLODE, oBobombFuseTimer, oForwardVel, oGravity, oFriction, oBuoyancy, oInteractionSubtype, oHomeX, oHomeY, oHomeZ, oMoveAngleYaw, oAngleToMario, oBobombFuseLit, oFaceAngleYaw } from "../../include/object_constants"
import { INT_SUBTYPE_KICKABLE } from "../Interaction"

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

export const bhv_bobomb_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGravity] = 2.5
    o.rawData[oFriction] = 0.8
    o.rawData[oBuoyancy] = 1.3
    o.rawData[oInteractionSubtype] = INT_SUBTYPE_KICKABLE
}

const bobomb_act_patrol = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oForwardVel] = 5.0

    const collisionFlags = object_step()
    if ((obj_return_home_if_safe(o, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 400) == 1)
        && (obj_check_if_facing_toward_angle(o.rawData[oMoveAngleYaw], o.rawData[oAngleToMario], 0x2000) == 1)) {
        o.rawData[oBobombFuseLit] = 1
        //console.log("Chase Mario")
    }
    obj_check_floor_death(collisionFlags, sObjFloor)
}

const generic_bobomb_free_loop = () => {

    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case BOBOMB_ACT_PATROL:
            bobomb_act_patrol()
            break
        case BOBOMB_ACT_CHASE_MARIO:
            break
        case BOBOMB_ACT_EXPLODE:
            break
        default: throw "unimplemented bobomb action - generic_bobomb_free_loop"
    }

    //TODO bobomb_check_interactions();

    if (o.rawData[oBobombFuseTimer] >= 151) o.rawData[oAction] = 3

}

const bobomb_free_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oBehParams2ndByte] == BOBOMB_BP_STYPE_GENERIC)
        generic_bobomb_free_loop()
    else 
        throw "implement stationary bobomb"
}

export const bhv_bobomb_loop = () => {

    const o = ObjectListProc.gCurrentObject

    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 4000) != 0) {

        switch (o.rawData[oHeldState]) {
            case HELD_FREE:
                bobomb_free_loop()
                break
            default: throw "need to implement bobomb held states"
        }

        const blinkWrapper = { value: o.rawData[oBobombBlinkTimer] }
        curr_obj_random_blink(blinkWrapper)
        o.rawData[oBobombBlinkTimer] = blinkWrapper.value
        
    }
}