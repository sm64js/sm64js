// // butterfly.c.inc
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { is_point_within_radius_of_mario, set_object_visibility } from "../ObjBehaviors"
import { oPosX, oPosY, oPosZ, oVelX, oVelY, oVelZ, oMoveAngleYaw, oMoveAnglePitch } from "../../include/object_constants"
import { oAction, oAnimState, oHomeX, oHomeY, oHomeZ } from "../../include/object_constants"
import { cur_obj_init_animation, obj_turn_toward_object, approach_symmetric } from "../ObjectHelpers"
import { SurfaceCollisionInstance as SurfaceCollision } from "../../engine/SurfaceCollision"
import { int16, random_float, sins, coss } from "../../utils"
import { atan2s } from "../../engine/math_util"

/* Butterfly */
/* oAction */
const BUTTERFLY_ACT_RESTING = 0
const BUTTERFLY_ACT_FOLLOW_MARIO = 1
const BUTTERFLY_ACT_RETURN_HOME = 2


export const bhv_butterfly_init = () => {
    const o = ObjectListProc.gCurrentObject

    cur_obj_init_animation(1)

    o.oButterflyYPhase = int16(random_float() * 100)
    o.header.gfx.unk38.animFrame = int16(random_float() * 7)
    o.rawData[oHomeX] = o.rawData[oPosX]
    o.rawData[oHomeY] = o.rawData[oPosY]
    o.rawData[oHomeZ] = o.rawData[oPosZ]
}

const butterfly_step = (speed) => {
    const o = ObjectListProc.gCurrentObject
    let yaw = o.rawData[oMoveAngleYaw]
    let pitch = o.rawData[oMoveAnglePitch]
    let yPhase = o.oButterflyYPhase
    let floorY

    o.rawData[oVelX] = sins(yaw) * speed
    o.rawData[oVelY] = sins(pitch) * speed
    o.rawData[oVelZ] = coss(yaw) * speed

    o.rawData[oPosX] += o.rawData[oVelX]
    o.rawData[oPosZ] += o.rawData[oVelZ]

    if (o.rawData[oAction] == BUTTERFLY_ACT_FOLLOW_MARIO) {
        o.rawData[oPosY] -= o.rawData[oVelY] + coss(yPhase * 655.36) * 20 / 4
    } else {
        o.rawData[oPosY] -= o.rawData[oVelY]
    }

    floorY = SurfaceCollision.find_floor_height_and_data(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], {});

    if (o.rawData[oPosY] < floorY + 2) {
        o.rawData[oPosY] = floorY + 2
    }

    o.oButterflyYPhase++
    if (o.oButterflyYPhase >= 101) {
        o.oButterflyYPhase = 0
    }
}

const butterfly_calculate_angle = () => {
    const o = ObjectListProc.gCurrentObject
    const mario = ObjectListProc.gMarioObject
    const sX = mario.rawData[oPosX], sY = mario.rawData[oPosY], sZ = mario.rawData[oPosZ]

    mario.rawData[oPosX] += 5 * o.oButterflyYPhase / 4
    mario.rawData[oPosZ] += 5 * o.oButterflyYPhase / 4
    obj_turn_toward_object(o, mario, 16, 0x300)
    mario.rawData[oPosX] = sX
    mario.rawData[oPosZ] = sZ

    mario.rawData[oPosY] += (5 * o.oButterflyYPhase + 0x100) / 4
    obj_turn_toward_object(o, mario, 15, 0x500)
    mario.rawData[oPosY] = sY
}

const butterfly_act_rest = () => {
    const o = ObjectListProc.gCurrentObject
    if (is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 1000) == 1) {
        cur_obj_init_animation(0)

        o.rawData[oAction] = BUTTERFLY_ACT_FOLLOW_MARIO
        o.rawData[oMoveAngleYaw] = ObjectListProc.gMarioObject.header.gfx.angle[1]
    }
}

const butterfly_act_follow_mario = () => {
    const o = ObjectListProc.gCurrentObject
    butterfly_calculate_angle()

    butterfly_step(7)

    if (is_point_within_radius_of_mario(o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 1200) == 0) {
        o.rawData[oAction] = BUTTERFLY_ACT_RETURN_HOME
    }
}

const butterfly_act_return_home = () => {
    const o = ObjectListProc.gCurrentObject
    let homeDistX = o.rawData[oHomeX] - o.rawData[oPosX]
    let homeDistY = o.rawData[oHomeY] - o.rawData[oPosY]
    let homeDistZ = o.rawData[oHomeZ] - o.rawData[oPosZ]
    let hAngleToHome = atan2s(homeDistZ, homeDistX)
    let vAngleToHome = atan2s(Math.sqrt(homeDistX * homeDistX + homeDistZ * homeDistZ), -homeDistY)

    o.rawData[oMoveAngleYaw] = approach_symmetric(o.rawData[oMoveAngleYaw], hAngleToHome, 0x800)
    o.rawData[oMoveAnglePitch] = approach_symmetric(o.rawData[oMoveAnglePitch], vAngleToHome, 0x50)

    butterfly_step(7)

    if (homeDistX * homeDistX + homeDistY * homeDistY + homeDistZ * homeDistZ < 144) {
        cur_obj_init_animation(1)

        o.rawData[oAction] = BUTTERFLY_ACT_RESTING
        o.rawData[oPosX] = o.rawData[oHomeX]
        o.rawData[oPosY] = o.rawData[oHomeY]
        o.rawData[oPosZ] = o.rawData[oHomeZ]
    }
}

export const bhv_butterfly_loop = () => {
    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case BUTTERFLY_ACT_RESTING:
            butterfly_act_rest()
            break

        case BUTTERFLY_ACT_FOLLOW_MARIO:
            butterfly_act_follow_mario()
            break

        case BUTTERFLY_ACT_RETURN_HOME:
            butterfly_act_return_home()
            break
    }

    set_object_visibility(o, 3000)
}
