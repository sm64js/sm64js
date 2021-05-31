// door.c.inc
import * as _Linker from "../../game/Linker"

import {
cur_obj_init_animation_with_sound, cur_obj_check_if_near_animation_end, cur_obj_has_model,
cur_obj_clear_interact_status_flag, cur_obj_change_action, 
 } from "../ObjectHelpers"

import { sins, coss } from "../../utils"
import { cur_obj_play_sound_2 } from "../SpawnSound"

import {
    oAction, oMoveAngleYaw,  oPosX, oPosY,  oPosZ, oTimer,
} from "../../include/object_constants"

import { MODEL_HMC_METAL_DOOR } from "../../include/model_ids"
import { CAM_EVENT_DOOR, CAM_EVENT_DOOR_WARP } from "../Camera"
import { SOUND_GENERAL_OPEN_WOOD_DOOR, SOUND_GENERAL_OPEN_IRON_DOOR, SOUND_GENERAL_CLOSE_WOOD_DOOR,
SOUND_GENERAL_CLOSE_IRON_DOOR } from "../../include/sounds"

import { GRAPH_RENDER_ACTIVE } from "../../engine/graph_node"

import { TIME_STOP_MARIO_OPENED_DOOR } from "../ObjectListProcessor"


/* Door */
const oDoorUnk88   = 0x00
const oDoorUnkF8   = 0x1C
const oDoorUnkFC   = 0x1D
const oDoorUnk100  = 0x1E


// struct DoorAction
// {
//     let u32 flag
//     let /*s32*/ action
// }

const door_actions = [
    { flag: 0x40000, action: 3 },
    { flag: 0x80000, action: 4 },
    { flag: 0x10000, action: 1 },
    { flag: 0x20000, action: 2 },
    { flag: -1, action: 0 }
]

const open_noises  = [ SOUND_GENERAL_OPEN_WOOD_DOOR, SOUND_GENERAL_OPEN_IRON_DOOR ]
const close_noises = [ SOUND_GENERAL_CLOSE_WOOD_DOOR, SOUND_GENERAL_CLOSE_IRON_DOOR ]

const door_animation_and_reset = (anim) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_init_animation_with_sound(anim)
    if (cur_obj_check_if_near_animation_end())
        o.rawData[oAction] = 0
}

const set_door_camera_event = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gPlayerCameraState = gLinker.Camera.gPlayerCameraState

    if (gLinker.behaviors.bhvDoor == o.behavior)
        gPlayerCameraState.cameraEvent = CAM_EVENT_DOOR
    else
        gPlayerCameraState.cameraEvent = CAM_EVENT_DOOR_WARP
    gPlayerCameraState.usedObj = o
}

const play_door_open_noise = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let type = cur_obj_has_model(MODEL_HMC_METAL_DOOR)
    if (o.rawData[oTimer] == 0) {
        cur_obj_play_sound_2(open_noises[type])
        gLinker.ObjectListProcessor.gTimeStopState |= TIME_STOP_MARIO_OPENED_DOOR
    }
    if (o.rawData[oTimer] == 70) {
        cur_obj_play_sound_2(close_noises[type])
    }
}

const play_warp_door_open_noise = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let type = cur_obj_has_model(MODEL_HMC_METAL_DOOR)
    if (o.rawData[oTimer] == 30)
        cur_obj_play_sound_2(close_noises[type])
}

export const bhv_door_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let action = 0
    
    while (door_actions[action].flag != -1) {
        if (cur_obj_clear_interact_status_flag(door_actions[action].flag)) {
            set_door_camera_event()
            cur_obj_change_action(door_actions[action].action)
        }
        action++
    }

    switch (o.rawData[oAction]) {
        case 0:
            cur_obj_init_animation_with_sound(0)
            break
        case 1:
            door_animation_and_reset(1)
            play_door_open_noise()
            break
        case 2:
            door_animation_and_reset(2)
            play_door_open_noise()
            break
        case 3:
            door_animation_and_reset(3)
            play_warp_door_open_noise()
            break
        case 4:
            door_animation_and_reset(4)
            play_warp_door_open_noise()
            break
    }
    if (o.rawData[oAction] == 0) {
        gLinker.SurfaceLoad.load_object_collision_model()
    }
    bhv_star_door_loop_2()
}

export const bhv_door_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gDoorAdjacentRooms = gLinker.ObjectListProcessor.gDoorAdjacentRooms
    let x = o.rawData[oPosX]
    let z = o.rawData[oPosZ]
    const floorGeo = {}

    gLinker.SurfaceCollision.find_floor(x, o.rawData[oPosY], z, floorGeo)
    if (floorGeo.floor) {
        o.rawData[oDoorUnkF8] = floorGeo.floor.room
    }

    x = o.rawData[oPosX] + sins(o.rawData[oMoveAngleYaw]) * 200.0
    z = o.rawData[oPosZ] + coss(o.rawData[oMoveAngleYaw]) * 200.0
    gLinker.SurfaceCollision.find_floor(x, o.rawData[oPosY], z, floorGeo)
    if (floorGeo.floor) {
        o.rawData[oDoorUnkFC] = floorGeo.floor.room
    }

    x = o.rawData[oPosX] + sins(o.rawData[oMoveAngleYaw]) * -200.0
    z = o.rawData[oPosZ] + coss(o.rawData[oMoveAngleYaw]) * -200.0
    gLinker.SurfaceCollision.find_floor(x, o.rawData[oPosY], z, floorGeo)
    if (floorGeo.floor) {
        o.rawData[oDoorUnk100] = floorGeo.floor.room
    }

    if (o.rawData[oDoorUnkF8] > 0 && o.rawData[oDoorUnkF8] < 60) {
        gDoorAdjacentRooms[o.rawData[oDoorUnkF8]][0] = o.rawData[oDoorUnkFC]
        gDoorAdjacentRooms[o.rawData[oDoorUnkF8]][1] = o.rawData[oDoorUnk100]
    }
}

export const bhv_star_door_loop_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioCurrentRoom = gLinker.ObjectListProcessor.gMarioCurrentRoom
    const gDoorAdjacentRooms = gLinker.ObjectListProcessor.gDoorAdjacentRooms
    let sp4 = 0

    if (gMarioCurrentRoom != 0) {
        if (o.rawData[oDoorUnkF8] == gMarioCurrentRoom)
            sp4 = 1
        else if (gMarioCurrentRoom == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (gMarioCurrentRoom == o.rawData[oDoorUnk100])
            sp4 = 1
        else if (gDoorAdjacentRooms[gMarioCurrentRoom][0] == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (gDoorAdjacentRooms[gMarioCurrentRoom][0] == o.rawData[oDoorUnk100])
            sp4 = 1
        else if (gDoorAdjacentRooms[gMarioCurrentRoom][1] == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (gDoorAdjacentRooms[gMarioCurrentRoom][1] == o.rawData[oDoorUnk100])
            sp4 = 1
    } else {
        sp4 = 1
    }
    if (sp4 == 1) {
        o.gfx.flags |= GRAPH_RENDER_ACTIVE
        // D_8035FEE4++
    }
    if (sp4 == 0) {
        o.gfx.flags &= ~GRAPH_RENDER_ACTIVE
    }
    o.rawData[oDoorUnk88] = sp4
}


gLinker.bhv_door_loop = bhv_door_loop
gLinker.bhv_door_init = bhv_door_init
gLinker.bhv_star_door_loop_2 = bhv_star_door_loop_2
