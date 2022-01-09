// cannon.c.inc
import { ObjectListProcessorInstance as O } from "../ObjectListProcessor"
import * as OC from "../../include/object_constants"
import * as MODEL from "../../include/model_ids"
import * as BHV from "../BehaviorData"
import * as SND from "../../include/sounds"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { spawn_object     } from "../ObjectHelpers"

const CANNON_TRAP_DOOR_ACT_CLOSED = 0
const CANNON_TRAP_DOOR_ACT_CAM_ZOOM = 1
const CANNON_TRAP_DOOR_ACT_OPENING = 2
const CANNON_TRAP_DOOR_ACT_OPEN = 3

const save_file_is_cannon_unlocked = () => {return 1}

export const bhv_cannon_closed_init = () => {
    const o = O.gCurrentObject
    let cannon

    if (save_file_is_cannon_unlocked() == 1) {
        // If the cannon is open, spawn a cannon and despawn the object.
        cannon = spawn_object(o, MODEL.MODEL_CANNON_BASE, BHV.bhvCannon)
        cannon.rawData[OC.oBehParams2ndByte] = o.rawData[OC.oBehParams2ndByte]
        cannon.rawData[OC.oPosX] = o.rawData[OC.oHomeX]
        cannon.rawData[OC.oPosY] = o.rawData[OC.oHomeY]
        cannon.rawData[OC.oPosZ] = o.rawData[OC.oHomeZ]

        o.rawData[OC.oAction] = CANNON_TRAP_DOOR_ACT_OPEN
        o.activeFlags = OC.ACTIVE_FLAG_DEACTIVATED
    }
}

const cannon_door_act_opening = () => {
    const o = O.gCurrentObject
    if (o.rawData[OC.oTimer] == 0)
        cur_obj_play_sound_2(SND.SOUND_GENERAL_CANNON_UP)

    if (o.rawData[OC.oTimer] < 30) {
        o.rawData[OC.oVelY] = -0.5
        o.rawData[OC.oPosY] += o.rawData[OC.oVelY]
        o.rawData[OC.oVelX] = 0
    } else {
        if (o.rawData[OC.oTimer] == 80) {
            bhv_cannon_closed_init()
            return
        }

        o.rawData[OC.oVelX] = 4.0
        o.rawData[OC.oVelY] = 0
        o.rawData[OC.oPosX] += o.rawData[OC.oVelX]
    }
}

export const bhv_cannon_closed_loop = () => {
    const o = O.gCurrentObject
    switch (o.rawData[OC.oAction]) {
        case CANNON_TRAP_DOOR_ACT_CLOSED:
            o.rawData[OC.oVelX] = 0
            o.rawData[OC.oVelY] = 0
            o.rawData[OC.oDrawingDistance] = 4000.0

            if (save_file_is_cannon_unlocked() == 1)
                o.rawData[OC.oAction] = CANNON_TRAP_DOOR_ACT_CAM_ZOOM
            break

        case CANNON_TRAP_DOOR_ACT_CAM_ZOOM:
            if (o.rawData[OC.oTimer] == 60)
                o.rawData[OC.oAction] = CANNON_TRAP_DOOR_ACT_OPENING

            o.rawData[OC.oDrawingDistance] = 20000.0
            break

        case CANNON_TRAP_DOOR_ACT_OPENING:
            cannon_door_act_opening()
            break
    }
}
