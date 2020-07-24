import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { MarioInstance as Mario } from "./Mario"

const perform_ground_quarter_step = (m, nextPos) => {

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)

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
    }

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    return stepResult
}