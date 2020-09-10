import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import * as Mario from "./Mario"
import { atan2s } from "../engine/math_util"

const should_strengthen_gravity_for_jump_ascent = (m) => {
    if (!(m.input & Mario.INPUT_A_DOWN) && m.vel[1] > 20.0) {
        return (m.action & Mario.ACT_FLAG_CONTROL_JUMP_HEIGHT) != 0
    }

    return false
}

const apply_gravity = (m) => {
    if (m.action == Mario.ACT_LONG_JUMP || m.action == Mario.ACT_SLIDE_KICK || m.action == Mario.ACT_BBH_ENTER_SPIN) {
        m.vel[1] -= 2.0
        if (m.vel[1] < -75.0) {
            m.vel[1] = -75.0
        }
    }
    else if (should_strengthen_gravity_for_jump_ascent(m)) {
        m.vel[1] /= 4.0
    } else {
        m.vel[1] -= 4.0
        if (m.vel[1] < -75.0) m.vel[1] = -75.0
    }
}

export const mario_bonk_reflection = (m, negateSpeed) => {
    if (m.wall) {
        const wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x)
        let angleDiff = m.faceAngle[1] - wallAngle
        angleDiff = angleDiff > 32767 ? angleDiff - 65536 : angleDiff
        angleDiff = angleDiff < -32768 ? angleDiff + 65536 : angleDiff
        m.faceAngle[1] = wallAngle - angleDiff
        //play sound
    } else {
        //play sound
    }

    if (negateSpeed) Mario.set_forward_vel(m, -m.forwardVel)
    else m.faceAngle[1] += 0x8000
}

const check_ledge_grab = (m, wall, intendedPos, nextPos) => {
    // struct Surface *ledgeFloor;
    // Vec3f ledgePos;
    let ledgeFloor = {}, ledgePos = new Array(3).fill(null), displacementX, displacementZ;

    if (m.vel[1] > 0) {
        return 0;
    }

    displacementX = nextPos[0] - intendedPos[0];
    displacementZ = nextPos[2] - intendedPos[2];

    // Only ledge grab if the wall displaced mario in the opposite direction of
    // his velocity.
    if (displacementX * m.vel[0] + displacementZ * m.vel[2] > 0.0) {
        return 0;
    }

    //! Since the search for floors starts at y + 160, we will sometimes grab
    // a higher ledge than expected (glitchy ledge grab)
    ledgePos[0] = nextPos[0] - wall.normal.x * 60.0;
    ledgePos[2] = nextPos[2] - wall.normal.z * 60.0;
    ledgePos[1] = SurfaceCollision.find_floor(ledgePos[0], nextPos[1] + 160.0, ledgePos[2], ledgeFloor);

    if (ledgePos[1] - nextPos[1] <= 100.0) {
        return 0;
    }

    m.pos = [...ledgePos]
    m.floor = ledgeFloor;
    m.floorHeight = m.pos[1];

    m.floorAngle = atan2s(ledgeFloor.normalz, ledgeFloor.normal.x); // undefined?

    m.faceAngle[0] = 0;
    m.faceAngle[1] = atan2s(wall.normal.z, wall.normal.x) + 0x8000;
    return 1;
}

const perform_air_quarter_step = (m, intendedPos, stepArg) => {

    const nextPos = [...intendedPos]

    const upperWall = Mario.resolve_and_return_wall_collisions(nextPos, 150.0, 50.0)
    const lowerWall = Mario.resolve_and_return_wall_collisions(nextPos, 30.0, 50.0)

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)

    m.wall = null

    if (floorWrapper.floor == null) {

        if (nextPos[1] <= m.floorHeight) {
            m.pos[1] = m.floorHeight
            return Mario.AIR_STEP_LANDED
        }

        m.pos[1] = nextPos[1]
        m.faceAngle[1] += 0x8000
        if (m.faceAngle[1] > 32767) m.faceAngle[1] -= 65536
        Mario.set_forward_vel(m, 1.5 * m.forwardVel)
        return Mario.AIR_STEP_HIT_WALL
    }

    if (nextPos[1] <= floorHeight) {
        m.pos[0] = nextPos[0]
        m.pos[2] = nextPos[2]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight

        m.pos[1] = floorHeight
        return Mario.AIR_STEP_LANDED
    }

    //! When the wall is not completely vertical or there is a slight wall
    // misalignment, you can activate these conditions in unexpected situations
    if ((stepArg & Mario.AIR_STEP_CHECK_LEDGE_GRAB) && upperWall == null && lowerWall != null) {
        if (check_ledge_grab(m, lowerWall, intendedPos, nextPos)) {
            return Mario.AIR_STEP_GRABBED_LEDGE;
        }

        m.pos = [...nextPos];
        m.floor = floorWrapper.floor;
        m.floorHeight = floorHeight;
        return Mario.AIR_STEP_NONE;
    }

    m.pos = [...nextPos]
    m.floorHeight = floorHeight
    m.floor = floorWrapper.floor

    if (upperWall || lowerWall) {
        m.wall = upperWall ? upperWall : lowerWall

        const wallDYaw = atan2s(m.wall.normal.z, m.wall.normal.x) - m.faceAngle[1]

        if (wallDYaw < -0x6000 || wallDYaw > 0x6000) {
            m.flags |= Mario.MARIO_UNKNOWN_30
            return Mario.AIR_STEP_HIT_WALL
        }
    }

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

        if (quarterStepResult == Mario.AIR_STEP_LANDED || quarterStepResult == Mario.AIR_STEP_GRABBED_LEDGE) break
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

    if (floorWrapper.floor == null) {
        m.faceAngle[1] += 0x8000
        if (m.faceAngle[1] > 32767) m.faceAngle[1] -= 65536
        Mario.set_forward_vel(m, 1.5 * m.forwardVel)
        return Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS
    }

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

    if (stepResult == Mario.GROUND_STEP_HIT_WALL_CONTINUE_QSTEPS) stepResult = Mario.GROUND_STEP_HIT_WALL

    return stepResult
}

export const stop_and_set_height_to_floor = (m) => {
    const marioObj = m.marioObj;

    Mario.set_forward_vel(m, 0.0);
    m.vel[1] = 0.0;

    //! This is responsible for some downwarps.
    m.pos[1] = m.floorHeight;

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]
}

export const stationary_ground_step = (m) => {

    Mario.set_forward_vel(m, 0.0)

    m.pos[1] = m.floorHeight

    m.marioObj.header.gfx.pos = [...m.pos]
    m.marioObj.header.gfx.angle = [0, m.faceAngle[1], 0]

    return 0
}
