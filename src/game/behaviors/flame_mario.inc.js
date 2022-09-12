import * as _Linker from "../../game/Linker"
import {
    oTimer, oForwardVel, oMoveAngleYaw, oVelY, oBlackSmokeBowserUnkF4, oAngleVelYaw, oPosY,
    oMarioParticleFlags, oActiveParticleFlags,
} from "../../include/object_constants"
import { random_float, random_u16 } from "../../utils"
import { MODEL_BURN_SMOKE } from "../../include/model_ids"
import {
    spawn_object_with_scale, obj_mark_for_deletion, cur_obj_set_pos_relative, cur_obj_scale, spawn_object,
    obj_set_parent_relative_pos
} from "../ObjectHelpers"
import { ACTIVE_PARTICLE_FIRE } from "../../include/object_constants"

const bhv_black_smoke_upward_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    spawn_object_with_scale(o, MODEL_BURN_SMOKE, gLinker.behaviors.bhvBlackSmokeBowser, o.gfx.scale[0])
}

const bhv_black_smoke_bowser_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] == 0) {
        o.rawData[oForwardVel] = random_float() * 2 + 0.5
        o.rawData[oMoveAngleYaw] = random_u16()
        o.rawData[oVelY] = 8.0

        o.rawData[oBlackSmokeBowserUnkF4] = o.gfx.scale[0]
    }

    o.rawData[oMoveAngleYaw] += o.rawData[oAngleVelYaw]
    o.rawData[oPosY] += o.rawData[oVelY]
}

const bhv_black_smoke_mario_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    if (o.rawData[oTimer] == 0) {
        cur_obj_set_pos_relative(gMarioObject, 0, 0, -30.0)

        o.rawData[oForwardVel] = random_float() * 2 + 0.5
        o.rawData[oMoveAngleYaw] = (gMarioObject.rawData[oMoveAngleYaw] + 0x7000) + random_float() * 8192.0
        o.rawData[oVelY] = 8.0
    }

    o.rawData[oMoveAngleYaw] += o.rawData[oAngleVelYaw]
    o.rawData[oPosY] += o.rawData[oVelY]
}

const bhv_flame_mario_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    cur_obj_scale(2.0)

    if (o.rawData[oTimer] != 0) {
        if (o.rawData[oTimer] & 1) {
            spawn_object(o, MODEL_BURN_SMOKE, gLinker.behaviors.bhvBlackSmokeMario)
        }
    }

    gMarioObject.prevObj = o // weird?
    obj_set_parent_relative_pos(o, 40, -120, 0)

    if (!(gMarioObject.rawData[oMarioParticleFlags] & ACTIVE_PARTICLE_FIRE)) {
        o.parentObj.rawData[oActiveParticleFlags] &= ~ACTIVE_PARTICLE_FIRE
        obj_mark_for_deletion(o)
        gMarioObject.prevObj = null
    }
}

gLinker.bhv_black_smoke_upward_loop = bhv_black_smoke_upward_loop
gLinker.bhv_black_smoke_bowser_loop = bhv_black_smoke_bowser_loop
gLinker.bhv_black_smoke_mario_loop = bhv_black_smoke_mario_loop
gLinker.bhv_flame_mario_loop = bhv_flame_mario_loop
