import * as _Linker from "../../game/Linker"
import { spawn_object_relative } from "../ObjectHelpers"
import { oFaceAngleRoll, oMoveAngleYaw,oAction, oAngleVelRoll, oInteractStatus, oTimer, oDistanceToMario } from "../../include/object_constants"
import { MODEL_CASTLE_BOWSER_TRAP } from "../../include/model_ids"
import { ACT_SPECIAL_DEATH_EXIT, ACT_SPECIAL_EXIT_AIRBORNE } from "../Mario"
import { INT_STATUS_TRAP_TURN } from "../Interaction"

export const bhv_floor_trap_in_castle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    if (gMarioObject.platform == o)
        o.parentObj.rawData[oInteractStatus] |= INT_STATUS_TRAP_TURN
    o.rawData[oFaceAngleRoll] = o.parentObj.rawData[oFaceAngleRoll]
}

export const bhv_castle_floor_trap_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let sp2C
    sp2C = spawn_object_relative(0, -358, 0, 0, o, MODEL_CASTLE_BOWSER_TRAP, gLinker.behaviors.bhvFloorTrapInCastle)
    sp2C = spawn_object_relative(0, 358, 0, 0, o, MODEL_CASTLE_BOWSER_TRAP, gLinker.behaviors.bhvFloorTrapInCastle)
    sp2C.rawData[oMoveAngleYaw] += 0x8000
}

const bhv_castle_floor_trap_open_detect = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
    if (gMarioStates[0].action == ACT_SPECIAL_EXIT_AIRBORNE
        || gMarioStates[0].action == ACT_SPECIAL_DEATH_EXIT)
        o.rawData[oAction] = 4 // rotates trapdoor so it looks always open
    else {
        o.rawData[oAngleVelRoll] = 0x400
        if (o.rawData[oInteractStatus] & INT_STATUS_TRAP_TURN)
            o.rawData[oAction] = 1 // detects interact then opens the trapdoor
    }
}

const bhv_castle_floor_trap_open = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    /*if (o.rawData[oTimer] == 0)
        cur_obj_play_sound_2(SOUND_GENERAL_CASTLE_TRAP_OPEN);*/
    o.rawData[oAngleVelRoll] -= 0x100
    o.rawData[oFaceAngleRoll] += o.rawData[oAngleVelRoll]
    if (o.rawData[oFaceAngleRoll] < -0x4000) {
        o.rawData[oFaceAngleRoll] = -0x4000
        o.rawData[oAction] = 2 // after opening is done, enable close detection
    }
}

const bhv_castle_floor_trap_close_detect = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oDistanceToMario] > 1000.0)
        o.rawData[oAction] = 3 // close trapdoor
}

const bhv_castle_floor_trap_close = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oFaceAngleRoll] += 0x400
    if (o.rawData[oFaceAngleRoll] > 0) {
        o.rawData[oFaceAngleRoll] = 0
        o.rawData[oAction] = 0 // after closing, reloads open detection
        o.rawData[oInteractStatus] &= ~INT_STATUS_TRAP_TURN
    }
}

const bhv_castle_floor_trap_rotate = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oFaceAngleRoll] = -0x3C00
}

export const bhv_castle_floor_trap_loop = () => {
    let unused = new Array(3)
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case 0:
            bhv_castle_floor_trap_open_detect()
            break
        case 1:
            bhv_castle_floor_trap_open()
            break
        case 2:
            bhv_castle_floor_trap_close_detect()
            break
        case 3:
            bhv_castle_floor_trap_close()
            break
        case 4:
            bhv_castle_floor_trap_rotate()
            break
    }
}

gLinker.bhv_floor_trap_in_castle_loop = bhv_floor_trap_in_castle_loop
gLinker.bhv_castle_floor_trap_init = bhv_castle_floor_trap_init
gLinker.bhv_castle_floor_trap_loop = bhv_castle_floor_trap_loop