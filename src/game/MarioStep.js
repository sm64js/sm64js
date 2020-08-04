import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import * as Mario from "./Mario"

const should_strengthen_gravity_for_jump_ascent = (m) => {
    if (!(m.input & Mario.INPUT_A_DOWN) && m.vel[1] > 20.0) {
        return (m.action & Mario.ACT_FLAG_CONTROL_JUMP_HEIGHT) != 0
    }

    return false
}

const apply_gravity = (m) => {
    if (should_strengthen_gravity_for_jump_ascent(m)) {
        m.vel[1] /= 4.0
    } else {
        m.vel[1] -= 4.0
        if (m.vel[1] < -75.0) m.vel[1] = -75.0
    }
}

const perform_air_quarter_step = (m, intendedPos, stepArg) => {
    const nextPos = [...intendedPos]

    const upperWall = Mario.resolve_and_return_wall_collisions(nextPos, 150.0, 50.0)

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)

    if (floorWrapper.floor == null) {
        throw "Can't find floor - air quarter step"
    }

    if (nextPos[1] <= floorHeight) {
        m.pos[0] = nextPos[0]
        m.pos[2] = nextPos[2]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight

        m.pos[1] = floorHeight
        return Mario.AIR_STEP_LANDED
    }

    m.pos = [...nextPos]
    m.floorHeight = floorHeight
    m.floor = floorWrapper.floor

    return Mario.AIR_STEP_NONE
}

export const perform_air_step = (m, stepArg) => {

    let stepResult = Mario.AIR_STEP_NONE

    for (let i = 0; i < 4; i++) {
        const intendedPos = [
            m.pos[0] + m.vel[0] / 4.0,
            m.pos[1] + m.vel[1] / 4.0,
            m.pos[2] + m.vel[2] / 4.0,
        ]

        const quarterStepResult = perform_air_quarter_step(m, intendedPos, stepArg)

        if (quarterStepResult != Mario.AIR_STEP_NONE) stepResult = quarterStepResult

        if (quarterStepResult == Mario.AIR_STEP_LANDED) break
    }

    if (m.vel[1] >= 0.0) m.peakHeight = m.pos[1]

    apply_gravity(m)

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    return stepResult
}

const perform_ground_quarter_step = (m, nextPos) => {

    const upperWall = Mario.resolve_and_return_wall_collisions(nextPos, 60.0, 50.0)

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)

    m.wall = upperWall

    if (floorWrapper.floor == null) throw "no floor - ground quarter steps"

    if (nextPos[1] > floorHeight + 100.0) {
        m.pos = [...nextPos]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight
        return Mario.GROUND_STEP_LEFT_GROUND
    }

    m.pos = [ nextPos[0], floorHeight, nextPos[2] ]
    m.floor = floorWrapper.floor
    m.floorHeight = floorHeight

    return Mario.GROUND_STEP_NONE

}

export const perform_ground_step = (m) => {

    let stepResult

    for (let i = 0; i < 4; i++) {
        const intendedPos = [
            m.pos[0] + m.floor.normal.y * (m.vel[0] / 4.0),
            m.pos[1],
            m.pos[2] + m.floor.normal.y * (m.vel[2] / 4.0)
        ]

        stepResult = perform_ground_quarter_step(m, intendedPos)
        if (stepResult == Mario.GROUND_STEP_LEFT_GROUND || stepResult == Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS) break
    }

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    return stepResult
}

export const stationary_ground_step = (m) => {

    Mario.set_forward_vel(m, 0.0)

    m.pos[1] = m.floorHeight

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    return 0
}