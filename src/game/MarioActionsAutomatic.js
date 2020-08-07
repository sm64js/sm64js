import * as Mario from "./Mario"
import { oMarioPolePos, oPosX, oPosY, oPosZ, oMoveAnglePitch, oMoveAngleRoll, oMarioPoleYawVel } from "../include/object_constants"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { approach_number } from "../engine/math_util"

const POLE_NONE = 0
const POLE_TOUCHED_FLOOR = 1
const POLE_FELL_OFF = 2

const HANG_NONE = 0
const HANG_HIT_CEIL_OR_OOB = 1
const HANG_LEFT_CEIL = 2

const set_pole_position = (m, offsetY) => {
    let result = POLE_NONE
    const poleTop = m.usedObj.hitboxHeight - 100.0
    const marioObj = m.marioObj

    if (marioObj.rawData[oMarioPolePos] > poleTop) marioObj.rawData[oMarioPolePos] = poleTop

    m.pos = [
        m.usedObj.rawData[oPosX],
        m.usedObj.rawData[oPosY] + marioObj.rawData[oMarioPolePos] + offsetY,
        m.usedObj.rawData[oPosZ]
    ]


    const colData = {
        x: m.pos[0], y: m.pos[1], z: m.pos[2], offsetY: 60.0, radius: 50.0
    }
    let collided = SurfaceCollision.find_wall_collisions(colData)
    m.pos = [colData.x, colData.y, colData.z]

    colData.offsetY = 30.0; colData.radius = 24.0
    collided |= SurfaceCollision.find_wall_collisions(colData)
    m.pos = [colData.x, colData.y, colData.z]

    const floorWrapper = {}
    let floorHeight = SurfaceCollision.find_floor(m.pos[0], m.pos[1], m.pos[2], floorWrapper)

    if (m.pos[1] < floorHeight) {
        m.pos[1] = floorHeight
        Mario.set_mario_action(m, Mario.ACT_IDLE, 0)
        result = POLE_TOUCHED_FLOOR
    } else if (marioObj.rawData[oMarioPolePos] < -m.usedObj.hitboxDownOffset) {
        m.pos[1] = m.usedObj.rawData[oPosY] - m.usedObj.hitboxDownOffset
        Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
        result = POLE_FELL_OFF
    } else if (collided) {
        throw "collision on pole"
    }

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [
        m.usedObj.rawData[oMoveAnglePitch],
        m.faceAngle[1],
        m.usedObj.rawData[oMoveAngleRoll]
    ]

    return result

}

const act_grab_pole_slow = (m) => {
    if (set_pole_position(m, 0.0) == POLE_NONE) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_GRAB_POLE_SHORT)
        if (Mario.is_anim_at_end(m)) {
            Mario.set_mario_action(m, Mario.ACT_HOLDING_POLE, 0)
        }
        //add_tree_leaf_particles(m) TODO
    }

    return 0
}

const act_grab_pole_fast = (m) => {
    const marioObj = m.marioObj

    m.faceAngle[1] += marioObj.rawData[oMarioPoleYawVel]
    marioObj.rawData[oMarioPoleYawVel] = parseInt(marioObj.rawData[oMarioPoleYawVel] * 0.8)

    if (set_pole_position(m, 0.0) == POLE_NONE) {
        if (marioObj.rawData[oMarioPoleYawVel] > 0x800) {
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GRAB_POLE_SWING_PART1)
        } else {
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GRAB_POLE_SWING_PART2)
            if (Mario.is_anim_at_end(m)) {
                marioObj.rawData[oMarioPoleYawVel] = 0
                Mario.set_mario_action(m, Mario.ACT_HOLDING_POLE, 0)
            }
        }
        //add_tree_leaf_particles(m) TODO
    }

    return 0

}

const act_holding_pole = (m) => {
    const marioObj = m.marioObj

    if (m.input & Mario.INPUT_A_PRESSED) {
        //add_tree_leaf_particles(m) TODO
        m.faceAngle[1] += 0x8000
        return Mario.set_mario_action(m, Mario.ACT_WALL_KICK_AIR, 0)
    }

    if (m.controller.stickY > 16.0) {
        const poleTop = m.usedObj.hitboxHeight - 100.0

        if (marioObj.rawData[oMarioPolePos] < poleTop - 0.4) {
            return Mario.set_mario_action(m, Mario.ACT_CLIMBING_POLE, 0)
        }

        if (m.controller.stickY > 50.0) {
            return Mario.set_mario_action(m, Mario.ACT_TOP_OF_POLE_TRANSITION, 0)
        }

    } else if (m.controller.stickY < -16.0) {
        marioObj.rawData[oMarioPoleYawVel] -= parseInt(m.controller.stickY * 2)
        if (marioObj.rawData[oMarioPoleYawVel] > 0x1000) {
            marioObj.rawData[oMarioPoleYawVel] = 0x1000
        }

        m.faceAngle[1] += marioObj.rawData[oMarioPoleYawVel]
        marioObj.rawData[oMarioPolePos] -= marioObj.rawData[oMarioPoleYawVel] / 0x100
    } else {
        marioObj.rawData[oMarioPoleYawVel] = 0
        m.faceAngle[1] -= parseInt(m.controller.stickX * 16.0)
    }



    if (set_pole_position(m, 0.0) == POLE_NONE) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_ON_POLE)
    }

    return 0
}

const act_climbing_pole = (m) => {
    const marioObj = m.marioObj
    const cameraAngle = m.area.camera.yaw

    if (m.input & Mario.INPUT_A_PRESSED) {
        //add_tree_leaf_particles(m) TODO
        m.faceAngle[1] += 0x8000
        return Mario.set_mario_action(m, Mario.ACT_WALL_KICK_AIR, 0)
    }

    if (m.controller.stickY < 8.0) {
        return Mario.set_mario_action(m, Mario.ACT_HOLDING_POLE, 0)
    }

    marioObj.rawData[oMarioPolePos] += m.controller.stickY / 8.0
    marioObj.rawData[oMarioPoleYawVel] = 0
    m.faceAngle[1] = cameraAngle - approach_number(parseInt(cameraAngle - m.faceAngle[1]), 0, 0x400, 0x400)

    if (set_pole_position(m, 0.0) == POLE_NONE) {
        const speed = parseInt(m.controller.stickY / 4.0) * 0x10000
        Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_CLIMB_UP_POLE, speed)
        //add_tree_leaf_particles(m) TODO
    }

    return 0
}

const act_top_of_pole_transition = (m) => {
    const marioObj = m.marioObj

    marioObj.rawData[oMarioPoleYawVel] = 0
    if (m.actionArg == 0) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_START_HANDSTAND)
        if (Mario.is_anim_at_end(m)) {
            return Mario.set_mario_action(m, Mario.ACT_TOP_OF_POLE, 0)
        }
    } else {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_RETURN_FROM_HANDSTAND)
        if (m.marioObj.header.gfx.unk38.animFrame == 0) {
            return Mario.set_mario_action(m, Mario.ACT_HOLDING_POLE, 0)
        }
    }

    set_pole_position(m, Mario.return_mario_anim_y_translation(m))
    return 0
}

const act_top_of_pole = (m) => {

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_TOP_OF_POLE_JUMP, 0)
    }

    if (m.controller.stickY < -16.0) {
        return Mario.set_mario_action(m, Mario.ACT_TOP_OF_POLE_TRANSITION, 1)
    }

    m.faceAngle[1] -= parseInt(m.controller.stickX * 16.0)

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_HANDSTAND_IDLE)
    set_pole_position(m, Mario.return_mario_anim_y_translation(m))
    return 0
}

export const mario_execute_automatic_action = (m) => {

    switch (m.action) {
        case Mario.ACT_GRAB_POLE_FAST: return act_grab_pole_fast(m)
        case Mario.ACT_GRAB_POLE_SLOW: return act_grab_pole_slow(m)
        case Mario.ACT_HOLDING_POLE: return act_holding_pole(m)
        case Mario.ACT_CLIMBING_POLE: return act_climbing_pole(m)
        case Mario.ACT_TOP_OF_POLE_TRANSITION: return act_top_of_pole_transition(m)
        case Mario.ACT_TOP_OF_POLE: return act_top_of_pole(m)
        default: throw "unknown action automatic"
    }
}