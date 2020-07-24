import { MarioInstance as Mario } from "./Mario"
import { SURFACE_SLOW } from "../include/surface_terrains"
import { perform_ground_step } from "./MarioStep"

const apply_slope_accel = (m) => {
    m.slideYaw = m.faceAngle[1]

    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[1] = 0.0
    m.vel[2] = m.slideVelZ

}

const update_walking_speed = (m) => {
    let maxTargetSpeed, targetSpeed

    if (m.floor && m.floor.type == SURFACE_SLOW) maxTargetSpeed = 24
    else maxTargetSpeed = 32

    targetSpeed = m.intendedMag < maxTargetSpeed ? m.intendedMag : maxTargetSpeed

    if (m.forwardVel <= 0.0) {
        m.forwardVel += 1.1
    } else if (m.forwardVel <= targetSpeed) {
        m.forwardVel += 1.1 - m.forwardVel / 43.0
    } else if (m.floor.normal.y >= 0.95) {
        m.forwardVel -= 1.0
    }

    if (m.forwardVel > 48.0) m.forwardVel = 48.0

    m.faceAngle[1] = m.intendedYaw

    apply_slope_accel(m)

}

const act_walking = (m) => {

    m.actionState = 0

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_NONE:
            if (m.intendedMag - m.forwardVel > 16.0) m.particleFlags |= Mario.PARTICLE_DUST
            break
        default: throw "unkown ground step in act_walking"
    }

    return 0
}

export const mario_execute_moving_action = (m) => {

    switch (m.action) {
        case Mario.ACT_WALKING: return act_walking(m)
        default: throw "unkown action moving"
    }
}