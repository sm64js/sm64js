import * as Mario from "./Mario"
import * as Camera from "./Camera"
import { oMarioPolePos, oPosX, oPosY, oPosZ,
         oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw,
         oMarioPoleYawVel,
         oMarioCannonObjectYaw, oMarioCannonInputYaw,
         oAction,
         oInteractStatus } from "../include/object_constants"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { approach_number,
         vec3f_set,
         vec3f_copy,
         vec3s_set } from "../engine/math_util"
import { s16,
         coss,
         sins                          } from "../utils"
import { stop_and_set_height_to_floor } from "./MarioStep"
import { SURFACE_HANGABLE } from "../include/surface_terrains"
import { SOUND_ACTION_TERRAIN_LANDING,
         SOUND_ACTION_FLYING_FAST,
         SOUND_OBJ_POUNDING_CANNON,
         SOUND_MOVING_AIM_CANNON } from "../include/sounds"
import { play_sound } from "../audio/external"
import { GRAPH_RENDER_ACTIVE           } from "../engine/graph_node"
import { INT_STATUS_INTERACTED, INT_STATUS_MARIO_UNK2, INT_STATUS_MARIO_UNK6         } from "./Interaction"



const POLE_NONE = 0
const POLE_TOUCHED_FLOOR = 1
const POLE_FELL_OFF = 2

const HANG_NONE = 0
const HANG_HIT_CEIL_OR_OOB = 1
const HANG_LEFT_CEIL = 2

const update_hang_stationary = (m) => {
    m.forwardVel = 0.0
    m.slideVelX = 0.0
    m.slideVelZ = 0.0

    m.pos[1] = m.ceilHeight - 160.0
    m.vel = [0, 0, 0]
    m.marioObj.gfx.pos = [...m.pos]
}

const update_hang_moving = (m) => {

    const maxSpeed = 4.0

    m.forwardVel += 1.0
    if (m.forwardVel > maxSpeed) {
        m.forwardVel = maxSpeed
    }

    m.faceAngle[1] = m.intendedYaw - approach_number((m.intendedYaw - m.faceAngle[1]), 0, 0x800, 0x800)

    m.slideYaw = m.faceAngle[1]
    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[1] = 0.0
    m.vel[2] = m.slideVelZ

    const nextPos = [
        m.pos[0] - m.ceil.normal.y * m.vel[0],
        m.pos[1],
        m.pos[2] - m.ceil.normal.y * m.vel[2]
    ]
    
    const stepResult = perform_hanging_step(m, nextPos)

    m.marioObj.gfx.pos = [...m.pos]
    m.marioObj.gfx.angle = [0, m.faceAngle[1], 0]

    return stepResult
}

const perform_hanging_step = (m, nextPos) => {

    m.wall = Mario.resolve_and_return_wall_collisions(nextPos, 50.0, 50.0)
    const floorWrapper = {}, ceilWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)
    const ceilHeight = Mario.vec3_find_ceil(nextPos, floorHeight, ceilWrapper)

    if (floorWrapper.floor == null) {
        return HANG_HIT_CEIL_OR_OOB
    }
    if (ceilWrapper.ceil == null) {
        return HANG_LEFT_CEIL
    }
    if (ceilHeight - floorHeight <= 160.0) {
        return HANG_HIT_CEIL_OR_OOB
    }
    if (ceilWrapper.ceil.type != SURFACE_HANGABLE) {
        return HANG_LEFT_CEIL
    }

    const ceilOffset = ceilHeight - (nextPos[1] + 160.0)
    if (ceilOffset < -30.0) {
        return HANG_HIT_CEIL_OR_OOB
    }
    if (ceilOffset > 30.0) {
        return HANG_LEFT_CEIL
    }

    nextPos[1] = m.ceilHeight - 160.0
    m.pos = [...nextPos]

    m.floor = floorWrapper.floor
    m.floorHeight = floorHeight
    m.ceil = ceilWrapper.ceil
    m.ceilHeight = ceilHeight

    return HANG_NONE
}

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
        x: m.pos[0], y: m.pos[1], z: m.pos[2], offsetY: 60.0, radius: 50.0, walls: []
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

    m.marioObj.gfx.pos = [...m.pos]
    m.marioObj.gfx.angle = [
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

    return false
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

    return false

}

const act_holding_pole = (m) => {
    const marioObj = m.marioObj

    if (m.input & Mario.INPUT_Z_PRESSED) {
        //add_tree_leaf_particles(m) TODO
        m.forwardVel = -2
        return Mario.set_mario_action(m, Mario.ACT_SOFT_BONK, 0)
    }

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

    return false
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

    return false
}

const act_start_hanging = (m) => {
    m.actionTimer++

    if ((m.input & Mario.INPUT_NONZERO_ANALOG) && m.actionTimer >= 31) {
        return Mario.set_mario_action(m, Mario.ACT_HANGING, 0)
    }

    if (!(m.input & Mario.INPUT_A_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    //! Crash if mario's referenced ceiling is NULL (same for other hanging actions)
    if (m.ceil.type != SURFACE_HANGABLE) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_HANG_ON_CEILING)
    //play sound if no flag
    update_hang_stationary(m)

    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_HANGING, 0)
    }

    return false

}

const act_hanging = (m) => {
    if (m.input & Mario.INPUT_NONZERO_ANALOG) {
        return Mario.set_mario_action(m, Mario.ACT_HANG_MOVING, m.actionArg)
    }

    if (!(m.input & Mario.INPUT_A_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    if (m.ceil.type != SURFACE_HANGABLE) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.actionArg & 1) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_HANDSTAND_LEFT)
    } else {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_HANDSTAND_RIGHT)
    }

    update_hang_stationary(m)

    return false
}

const act_hang_moving = (m) => {
    if (!(m.input & Mario.INPUT_A_DOWN)) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.input & Mario.INPUT_Z_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_GROUND_POUND, 0)
    }

    if (m.ceil.type != SURFACE_HANGABLE) {
        return Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    if (m.actionArg & 1) {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_MOVE_ON_WIRE_NET_RIGHT)
    } else {
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_MOVE_ON_WIRE_NET_LEFT)
    }

    // if (m.marioObj.gfx.animInfo.animFrame == 12) {
    //     play_sound(SOUND_ACTION_HANGING_STEP, m.marioObj.gfx.cameraToObject)
    //     queue_rumble_data(5, 30)
    // }

    if (Mario.is_anim_past_end(m)) {
        m.actionArg ^= 1
        if (m.input & Mario.INPUT_UNKNOWN_5) {
            return Mario.set_mario_action(m, Mario.ACT_HANGING, m.actionArg)
        }
    }

    if (update_hang_moving(m) == HANG_LEFT_CEIL) {
        Mario.set_mario_action(m, Mario.ACT_FREEFALL, 0)
    }

    return false
}

const let_go_of_ledge = (m) => {

    m.vel[1] = 0.0
    m.forwardVel = -8.0
    m.pos[0] -= 60.0 * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.pos[2] -= 60.0 * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    const floorHeight = SurfaceCollision.find_floor(m.pos[0], m.pos[1], m.pos[2], {})
    if (floorHeight < m.pos[1] - 100.0) {
        m.pos[1] -= 100.0
    } else {
        m.pos[1] = floorHeight
    }

    return Mario.set_mario_action(m, Mario.ACT_SOFT_BONK, 0)
}

const act_ledge_grab = (m) => {
    let intendedDYaw = m.intendedYaw - m.faceAngle[1]
    if (intendedDYaw > 32767) intendedDYaw -= 65536
    if (intendedDYaw < -32768) intendedDYaw += 65536

    const hasSpaceForMario = (m.ceilHeight - m.floorHeight >= 160.0)

    if (m.actionTimer < 10) {
        m.actionTimer++
    }

    if (m.floor.normal.y < 0.9063078) {
        return let_go_of_ledge(m)
    }

    if (m.input & (Mario.INPUT_Z_PRESSED | Mario.INPUT_OFF_FLOOR)) {
        return let_go_of_ledge(m)
    }

    if ((m.input & Mario.INPUT_A_PRESSED) && hasSpaceForMario) {
        return Mario.set_mario_action(m, Mario.ACT_LEDGE_CLIMB_FAST, 0)
    }

    if (m.input & Mario.INPUT_STOMPED) {
        if (m.marioObj.rawData[oInteractStatus] & Interact.INT_STATUS_MARIO_UNK1) {
            m.hurtCounter += (m.flags & Mario.MARIO_CAP_ON_HEAD) ? 12 : 18
        }
        return let_go_of_ledge(m)
    }
    if (m.actionTimer == 10 && (m.input & Mario.INPUT_NONZERO_ANALOG)) {
        if (intendedDYaw >= -0x4000 && intendedDYaw <= 0x4000) {
            if (hasSpaceForMario) {
                return Mario.set_mario_action(m, Mario.ACT_LEDGE_CLIMB_SLOW_1, 0)
            }
        } else {
            return let_go_of_ledge(m)
        }
    }

    const heightAboveFloor = m.pos[1] - Mario.find_floor_height_relative_polar(m, -0x8000, 30.0)
    if (hasSpaceForMario && heightAboveFloor < 100.0) {
        return Mario.set_mario_action(m, Mario.ACT_LEDGE_CLIMB_FAST, 0)
    }

    // if (m.actionArg == 0) {
    //     play_sound_if_no_flag(m, SOUND_MARIO_WHOA, MARIO_MARIO_SOUND_PLAYED)
    // }

    stop_and_set_height_to_floor(m)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_ON_LEDGE)

    return false
}


const climb_up_ledge = (m) => {
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_IDLE_HEAD_LEFT)
    m.pos[0] += 14.0 * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.pos[2] += 14.0 * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)
    m.marioObj.gfx.pos = [...m.pos]
}

const update_ledge_climb = (m, animation, endAction) => {
    stop_and_set_height_to_floor(m)

    Mario.set_mario_animation(m, animation)
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, endAction, 0)
        if (endAction == Mario.ACT_IDLE) {
            climb_up_ledge(m)
        }
    }
}

const update_ledge_climb_camera = (m) => {
    let sp4

    if (m.actionTimer < 14) {
        sp4 = m.actionTimer
    } else {
        sp4 = 14.0
    }
    m.statusForCamera.pos[0] = m.pos[0] + sp4 * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.statusForCamera.pos[2] = m.pos[2] + sp4 * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)
    m.statusForCamera.pos[1] = m.pos[1]
    m.actionTimer++
    m.flags |= Mario.MARIO_UNKNOWN_25
}

const act_ledge_climb_down = (m) => {
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return let_go_of_ledge(m)
    }

    // play_sound_if_no_flag(m, SOUND_MARIO_WHOA, MARIO_MARIO_SOUND_PLAYED)

    update_ledge_climb(m, Mario.MARIO_ANIM_CLIMB_DOWN_LEDGE, Mario.ACT_LEDGE_GRAB)
    m.actionArg = 1

    return false
}

const act_ledge_climb_slow = (m) => {
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return let_go_of_ledge(m)
    }

    if (m.actionTimer >= 28 && (m.input & (Mario.INPUT_NONZERO_ANALOG | Mario.INPUT_A_PRESSED | Mario.INPUT_OFF_FLOOR | Mario.INPUT_ABOVE_SLIDE))) {
        climb_up_ledge(m)
        return Mario.check_common_action_exits(m)
    }

    // if (m.actionTimer == 10) {
    //     play_sound_if_no_flag(m, SOUND_MARIO_EEUH, MARIO_MARIO_SOUND_PLAYED)
    // }

    update_ledge_climb(m, Mario.MARIO_ANIM_SLOW_LEDGE_GRAB, Mario.ACT_IDLE)

    update_ledge_climb_camera(m)
    if (m.marioObj.gfx.animInfo.animFrame == 17) {
        m.action = Mario.ACT_LEDGE_CLIMB_SLOW_2
    }

    return false
}

const act_ledge_climb_fast = (m) => {
    if (m.input & Mario.INPUT_OFF_FLOOR) {
        return let_go_of_ledge(m)
    }

    // // play_sound_if_no_flag(m, SOUND_MARIO_UH2, MARIO_MARIO_SOUND_PLAYED)

    update_ledge_climb(m, Mario.MARIO_ANIM_FAST_LEDGE_GRAB, Mario.ACT_IDLE)

    if (m.marioObj.gfx.animInfo.animFrame == 8) {
        Mario.play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
    }
    update_ledge_climb_camera(m)

    return false
}

const act_grabbed = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_UNK2) {
        let thrown = (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_UNK6) == 0

        m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]
        vec3f_copy(m.pos, m.marioObj.gfx.pos)

        return Mario.set_mario_action(m, (m.forwardVel >= 0.0) ? Mario.ACT_THROWN_FORWARD : Mario.ACT_THROWN_BACKWARD,
                                    thrown)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_BEING_GRABBED)
    return false
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
        if (m.marioObj.gfx.animInfo.animFrame == 0) {
            return Mario.set_mario_action(m, Mario.ACT_HOLDING_POLE, 0)
        }
    }

    set_pole_position(m, Mario.return_mario_anim_y_translation(m))
    return false
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
    return false
}

const act_in_cannon = (m) => {
    const marioObj = m.marioObj
    const startFacePitch = m.faceAngle[0]
    const startFaceYaw = m.faceAngle[1]

    switch (m.actionState) {
        case 0:
            m.marioObj.gfx.flags &= ~GRAPH_RENDER_ACTIVE
            m.usedObj.rawData[oInteractStatus] = INT_STATUS_INTERACTED

            m.statusForCamera.cameraEvent = Camera.CAM_EVENT_CANNON
            m.statusForCamera.usedObj = m.usedObj

            vec3f_set(m.vel, 0.0, 0.0, 0.0)

            m.pos[0] = m.usedObj.rawData[oPosX]
            m.pos[1] = m.usedObj.rawData[oPosY] + 350.0
            m.pos[2] = m.usedObj.rawData[oPosZ]

            m.forwardVel = 0.0

            m.actionState = 1
            break

        case 1:
            if (m.usedObj.rawData[oAction] == 1) {
                m.faceAngle[0] = m.usedObj.rawData[oMoveAnglePitch]
                m.faceAngle[1] = m.usedObj.rawData[oMoveAngleYaw]

                marioObj.rawData[oMarioCannonObjectYaw] = m.usedObj.rawData[oMoveAngleYaw]
                marioObj.rawData[oMarioCannonInputYaw] = 0

                m.actionState = 2
            }
            break

        case 2:
            m.faceAngle[0] = s16(m.faceAngle[0] - s16(m.controller.stickY * 10.0))
            marioObj.rawData[oMarioCannonInputYaw] = s16(marioObj.rawData[oMarioCannonInputYaw] - s16(m.controller.stickX * 10.0))

            if (m.faceAngle[0] > 0x38E3) {
                m.faceAngle[0] = 0x38E3
            }
            if (m.faceAngle[0] < 0) {
                m.faceAngle[0] = 0
            }

            if (marioObj.rawData[oMarioCannonInputYaw] > 0x4000) {
                marioObj.rawData[oMarioCannonInputYaw] = 0x4000
            }
            if (marioObj.rawData[oMarioCannonInputYaw] < -0x4000) {
                marioObj.rawData[oMarioCannonInputYaw] = -0x4000
            }

            m.faceAngle[1] = s16(marioObj.rawData[oMarioCannonObjectYaw] + marioObj.rawData[oMarioCannonInputYaw])
            if (m.input & Mario.INPUT_A_PRESSED) {
                m.forwardVel = 100.0 * coss(m.faceAngle[0])

                m.vel[1] = 100.0 * sins(m.faceAngle[0])

                m.pos[0] += 120.0 * coss(m.faceAngle[0]) * sins(m.faceAngle[1])
                m.pos[1] += 120.0 * sins(m.faceAngle[0])
                m.pos[2] += 120.0 * coss(m.faceAngle[0]) * coss(m.faceAngle[1])

                play_sound(SOUND_ACTION_FLYING_FAST, m.marioObj.gfx.cameraToObject)
                play_sound(SOUND_OBJ_POUNDING_CANNON, m.marioObj.gfx.cameraToObject)

                m.marioObj.gfx.flags |= GRAPH_RENDER_ACTIVE

                Mario.set_mario_action(m, Mario.ACT_SHOT_FROM_CANNON, 0)
                m.usedObj.rawData[oAction] = 2
                return false
            } else {
                if (m.faceAngle[0] != startFacePitch || m.faceAngle[1] != startFaceYaw) {
                    play_sound(SOUND_MOVING_AIM_CANNON, m.marioObj.gfx.cameraToObject)
                }
            }
            break
    }

    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_DIVE)

    return false
}

export const mario_execute_automatic_action = (m) => {

    switch (m.action) {
        case Mario.ACT_HOLDING_POLE: return act_holding_pole(m)
        case Mario.ACT_GRAB_POLE_SLOW: return act_grab_pole_slow(m)
        case Mario.ACT_GRAB_POLE_FAST: return act_grab_pole_fast(m)
        case Mario.ACT_CLIMBING_POLE: return act_climbing_pole(m)
        case Mario.ACT_TOP_OF_POLE_TRANSITION: return act_top_of_pole_transition(m)
        case Mario.ACT_TOP_OF_POLE: return act_top_of_pole(m)
        case Mario.ACT_START_HANGING: return act_start_hanging(m)
        case Mario.ACT_HANGING: return act_hanging(m)
        case Mario.ACT_HANG_MOVING: return act_hang_moving(m)
        case Mario.ACT_LEDGE_GRAB: return act_ledge_grab(m)
        case Mario.ACT_LEDGE_CLIMB_SLOW_1: return act_ledge_climb_slow(m)
        case Mario.ACT_LEDGE_CLIMB_SLOW_2: return act_ledge_climb_slow(m)
        case Mario.ACT_LEDGE_CLIMB_DOWN: return act_ledge_climb_down(m)
        case Mario.ACT_LEDGE_CLIMB_FAST: return act_ledge_climb_fast(m)
        case Mario.ACT_GRABBED: return act_grabbed(m)
        case Mario.ACT_IN_CANNON: return act_in_cannon(m)
        case Mario.ACT_TORNADO_TWIRLING: return act_tornado_twirling(m)
        default: throw "unknown action automatic"
    }
}
