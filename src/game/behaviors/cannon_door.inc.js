// cannon.c.inc
import * as _Linker from "../../game/Linker"
import { spawn_object } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import {oAction,  oBehParams2ndByte,  oDrawingDistance,  oHomeX,  oHomeY,  oHomeZ,  oPosX,  oPosY, 
oPosZ,  oTimer,  oVelX,  oVelY, ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"
import { MODEL_CANNON_BASE } from "../../include/model_ids"
import { SOUND_GENERAL_CANNON_UP } from "../../include/sounds"


const CANNON_TRAP_DOOR_ACT_CLOSED = 0
const CANNON_TRAP_DOOR_ACT_CAM_ZOOM = 1
const CANNON_TRAP_DOOR_ACT_OPENING = 2
const CANNON_TRAP_DOOR_ACT_OPEN = 3


const save_file_is_cannon_unlocked = () => {
    return true
}

const bhv_cannon_closed_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let cannon

    if (save_file_is_cannon_unlocked()) {
        // If the cannon is open, spawn a cannon and despawn the object.
        cannon = spawn_object(o, MODEL_CANNON_BASE, 'bhvCannon')
        cannon.rawData[oBehParams2ndByte] = o.rawData[oBehParams2ndByte]
        cannon.rawData[oPosX] = o.rawData[oHomeX]
        cannon.rawData[oPosY] = o.rawData[oHomeY]
        cannon.rawData[oPosZ] = o.rawData[oHomeZ]

        o.rawData[oAction] = CANNON_TRAP_DOOR_ACT_OPEN
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

const cannon_door_act_opening = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0)
        cur_obj_play_sound_2(SOUND_GENERAL_CANNON_UP)

    if (o.rawData[oTimer] < 30) {
        o.rawData[oVelY] = -0.5
        o.rawData[oPosY] += o.rawData[oVelY]
        o.rawData[oVelX] = 0
    } else {
        if (o.rawData[oTimer] == 80) {
            bhv_cannon_closed_init()
            return
        }

        o.rawData[oVelX] = 4.0
        o.rawData[oVelY] = 0
        o.rawData[oPosX] += o.rawData[oVelX]
    }
}

const bhv_cannon_closed_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case CANNON_TRAP_DOOR_ACT_CLOSED:
            o.rawData[oVelX] = 0
            o.rawData[oVelY] = 0
            o.rawData[oDrawingDistance] = 4000.0

            if (save_file_is_cannon_unlocked() == 1)
                o.rawData[oAction] = CANNON_TRAP_DOOR_ACT_CAM_ZOOM
            break

        case CANNON_TRAP_DOOR_ACT_CAM_ZOOM:
            if (o.rawData[oTimer] == 60)
                o.rawData[oAction] = CANNON_TRAP_DOOR_ACT_OPENING

            o.rawData[oDrawingDistance] = 20000.0
            break

        case CANNON_TRAP_DOOR_ACT_OPENING:
            cannon_door_act_opening()
            break
    }
}


gLinker.bhv_cannon_closed_init = bhv_cannon_closed_init
gLinker.bhv_cannon_closed_loop = bhv_cannon_closed_loop
