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

const anim_and_audio_for_walk = (m) => {
    let val0C = 1
    let val14
    let val04 = m.intendedMag > m.forwardVel ? m.intendedMag : m.forwardVel
    let targetPitch = 0

    const marioObj = m.marioObj

    if (val04 < 4.0) val04 = 4.0

    while (val0C) {
        switch (m.actionTimer) {
          case 0:
                if (val04 > 8.0) {
                    m.actionTimer = 2
                } else {
                    throw "didn't finish this case in anim_and_audio_for_walk"
/*                    val14 = val04 / 4.0 * 0x10000

                    if (val14 < 0x1000) val14 = 0x1000

                    Mario.set_mario_anim_with_accel()

                    val0C = 0*/
                }
                break

            case 1:
                if (val04 > 8.0) {
                    m.actionTimer = 2
                } else {
                    /// this should be tip toe and should not be in here
                    val14 = val04 * 0x10000
                    if (val14 < 0x1000) {
                        val14 = 0x1000
                    }
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, parseInt(val14))

                    val0C = 0
                }
                break

            case 2:
                if (val04 < 5.0) {
                    m.actionTimer = 1
                } else if (val04 > 22.0) {
                    m.actionTimer = 3
                } else {
                    val14 = val04 / 4.0 * 0x10000
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_WALKING, parseInt(val14))
                    val0C = 0
                }   
                break

            case 3:
                if (val04 < 18.0) {
                    m.actionTimer = 2
                } else {
                    val14 = val04 / 4.0 * 0x10000
                    Mario.set_mario_anim_with_accel(m, Mario.MARIO_ANIM_RUNNING, parseInt(val14))
                    val0C = 0
                }
                break
            default: throw "default case mario anim and audio for walk"

        }

        marioObj.oMarioWalkingPitch = targetPitch
        marioObj.header.gfx.angle[0] = marioObj.oMarioWalkingPitch
    }

}

const act_walking = (m) => {

    m.actionState = 0

    update_walking_speed(m)

    switch (perform_ground_step(m)) {
        case Mario.GROUND_STEP_NONE:
            anim_and_audio_for_walk(m)
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