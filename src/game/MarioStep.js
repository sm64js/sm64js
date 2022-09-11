import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import * as Mario from "./Mario"
import { atan2s,
         vec3f_copy,
         vec3s_set } from "../engine/math_util"
import { coss, s16, sins } from "../utils"
import { ceil } from "mathjs"
import { SURFACE_HANGABLE,
         SURFACE_BURNING,
         SURFACE_VERTICAL_WIND,
         SURFACE_VERY_SLIPPERY } from "../include/surface_terrains"
import { play_sound } from "../audio/external"
import { SOUND_ACTION_METAL_BONK,
         SOUND_ACTION_BONK,
         SOUND_ACTION_HIT } from "../include/sounds"

const gWaterSurfacePseudoFloor = {
    type: SURFACE_VERY_SLIPPERY,
    force: 0,
    flags: 0,
    room: 0,
    lowerY: 0,
    upperY: 0,
    vertex1: [0, 0, 0],
    vertex2: [0, 0, 0],
    vertex3: [0, 0, 0],
    normal: {x: 0.0, y: 1.0, z: 0.0},
    originOffset: 0.0,
    object: null
}

const should_strengthen_gravity_for_jump_ascent = (m) => {

    if (!(m.flags & Mario.MARIO_UNKNOWN_08)) return false

    if (!(m.input & Mario.INPUT_A_DOWN) && m.vel[1] > 20.0) {
        return (m.action & Mario.ACT_FLAG_CONTROL_JUMP_HEIGHT) != 0
    }

    return false
}

const apply_gravity = (m) => {
    if (m.action == Mario.ACT_TWIRLING && m.vel[1] < 0.0) {
        // apply_twirl_gravity(m)
    } else if (m.action == Mario.ACT_SHOT_FROM_CANNON) {
        m.vel[1] -= 1.0
        if (m.vel[1] < -75.0) {
            m.vel[1] = -75.0
        }
    } else if (m.action == Mario.ACT_LONG_JUMP || m.action == Mario.ACT_SLIDE_KICK || m.action == Mario.ACT_BBH_ENTER_SPIN) {
        m.vel[1] -= 2.0
        if (m.vel[1] < -75.0) {
            m.vel[1] = -75.0
        }
    } else if (m.action == Mario.ACT_LAVA_BOOST || m.action == Mario.ACT_FALL_AFTER_STAR_GRAB) {
        m.vel[1] -= 3.2
        if (m.vel[1] < -65.0) {
            m.vel[1] = -65.0
        }
    } else if (m.action == Mario.ACT_GETTING_BLOWN) {
        m.vel[1] -= m.unkC4
        if (m.vel[1] < -75.0) {
            m.vel[1] = -75.0
        }
    } else if (should_strengthen_gravity_for_jump_ascent(m)) {
        m.vel[1] /= 4.0
    } else if (m.action & Mario.ACT_FLAG_METAL_WATER) {
        m.vel[1] -= 1.6
        if (m.vel[1] < -16.0) {
            m.vel[1] = -16.0
        }
    } else if ((m.flags & Mario.MARIO_WING_CAP) && m.vel[1] < 0.0 && (m.input & Mario.INPUT_A_DOWN)) {
        m.marioBodyState.wingFlutter = true

        m.vel[1] -= 2.0
        if (m.vel[1] < -37.5) {
            if ((m.vel[1] += 4.0) > -37.5) {
                m.vel[1] = -37.5
            }
        }
    } else {
        m.vel[1] -= 4.0
        if (m.vel[1] < -75.0) {
            m.vel[1] = -75.0
        }
    }
}

export const mario_bonk_reflection = (m, negateSpeed) => {
    if (m.wall) {
        const wallAngle = atan2s(m.wall.normal.z, m.wall.normal.x)
        m.faceAngle[1] = s16(wallAngle - s16(m.faceAngle[1] - wallAngle))
        play_sound((m.flags & Mario.MARIO_METAL_CAP) ? SOUND_ACTION_METAL_BONK : SOUND_ACTION_BONK,
                   m.marioObj.gfx.cameraToObject)
    } else {
        play_sound(SOUND_ACTION_HIT, m.marioObj.gfx.cameraToObject);
    }

    if (negateSpeed) {
        Mario.set_forward_vel(m, -m.forwardVel)
    }
    else {
        m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
    }
}

export const mario_push_off_steep_floor = (m, action, actionArg) => {
    let floorDYaw = s16(m.floorAngle - m.faceAngle[1])

    if (floorDYaw > -0x4000 && floorDYaw < 0x4000) {
        m.forwardVel = 16.0
        m.faceAngle[1] = m.floorAngle
    } else {
        m.forwardVel = -16.0
        m.faceAngle[1] = s16(m.floorAngle + 0x8000)
    }

    return Mario.set_mario_action(m, action, actionArg)
}


export const stop_and_set_height_to_floor = (m) => {
    const marioObj = m.marioObj

    Mario.set_forward_vel(m, 0.0)
    m.vel[1] = 0.0

    m.pos[1] = m.floorHeight

    marioObj.gfx.pos = [...m.pos]
    marioObj.gfx.angle = [0, m.faceAngle[1], 0]
}

const check_ledge_grab = (m, wall, intendedPos, nextPos) => {
    const ledgeFloor = {}
    const ledgePos = new Array(3)

    if (m.vel[1] > 0) {  return false }

    const displacementX = nextPos[0] - intendedPos[0]
    const displacementZ = nextPos[2] - intendedPos[2]

    // Only ledge grab if the wall displaced mario in the opposite direction of
    // his velocity.
    if (displacementX * m.vel[0] + displacementZ * m.vel[2] > 0.0) { return false }

    //! Since the search for floors starts at y + 160, we will sometimes grab
    // a higher ledge than expected (glitchy ledge grab)
    ledgePos[0] = nextPos[0] - wall.normal.x * 60.0
    ledgePos[2] = nextPos[2] - wall.normal.z * 60.0
    ledgePos[1] = SurfaceCollision.find_floor(ledgePos[0], nextPos[1] + 160.0, ledgePos[2], ledgeFloor)

    if (ledgeFloor.floor == null) return false

    if (ledgePos[1] - nextPos[1] <= 100.0) return false

    m.pos = [...ledgePos]
    m.floor = ledgeFloor.floor
    m.floorHeight = m.pos[1]

    m.floorAngle = atan2s(ledgeFloor.floor.normal.z, ledgeFloor.floor.normal.x)

    m.faceAngle[0] = 0
    m.faceAngle[1] = atan2s(wall.normal.z, wall.normal.x) + 0x8000
    return true
}


const perform_air_quarter_step = (m, intendedPos, stepArg) => {
    const nextPos = []
    vec3f_copy(nextPos, intendedPos)

    const upperWall = Mario.resolve_and_return_wall_collisions(nextPos, 150.0, 50.0)
    const lowerWall = Mario.resolve_and_return_wall_collisions(nextPos, 30.0, 50.0)

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)
    const ceilWrapper = {}
    const ceilHeight = Mario.vec3_find_ceil(nextPos, floorHeight, ceilWrapper)

    const waterLevel = SurfaceCollision.find_water_level(nextPos[0], nextPos[2])

    m.wall = null

    if (floorWrapper.floor == null) {
        if (nextPos[1] <= m.floorHeight) {
            m.pos[1] = m.floorHeight
            return Mario.AIR_STEP_LANDED
        }

        m.pos[1] = nextPos[1]
        return Mario.AIR_STEP_HIT_WALL
    }

    if ((m.action & Mario.ACT_FLAG_RIDING_SHELL) && floorHeight < waterLevel) {
        floorHeight = waterLevel
        floorWrapper.floor = gWaterSurfacePseudoFloor
        floorWrapper.floor.originOffset = floorHeight //! Incorrect origin offset (no effect)
    }

    if (nextPos[1] <= floorHeight) {
        if (ceilHeight - floorHeight > 160) {
            m.pos[0] = nextPos[0]
            m.pos[2] = nextPos[2]
            m.floor = floorWrapper.floor
            m.floorHeight = floorHeight
        }

        m.pos[1] = floorHeight
        return Mario.AIR_STEP_LANDED
    }

    if (nextPos[1] + 160 > ceilHeight) {
        if (m.vel[1] > 0) {
            m.vel[1] = 0

            if ((stepArg & Mario.AIR_STEP_CHECK_HANG) && m.ceil && m.ceil.type == SURFACE_HANGABLE) {
                return Mario.AIR_STEP_GRABBED_CEILING
            }

            return Mario.AIR_STEP_NONE
        }

        if (nextPos[1] <= m.floorHeight) {
            m.pos[1] = m.floorHeight
            return Mario.AIR_STEP_LANDED
        }

        m.pos[1] = nextPos[1]
        return Mario.AIR_STEP_HIT_WALL
    }

    //! When the wall is not completely vertical or there is a slight wall
    // misalignment, you can activate these conditions in unexpected situations
    if ((stepArg & Mario.AIR_STEP_CHECK_LEDGE_GRAB) && upperWall == null && lowerWall != null) {
        if (check_ledge_grab(m, lowerWall, intendedPos, nextPos)) {
            return Mario.AIR_STEP_GRABBED_LEDGE
        }

        vec3f_copy(m.pos, nextPos)
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight
        return Mario.AIR_STEP_NONE
    }

    vec3f_copy(m.pos, nextPos)
    m.floor = floorWrapper.floor
    m.floorHeight = floorHeight

    if (upperWall || lowerWall) {
        m.wall = upperWall ? upperWall : lowerWall
        let wallDYaw = s16(atan2s(m.wall.normal.z, m.wall.normal.x) - m.faceAngle[1])

        if (m.wall.type == SURFACE_BURNING) {
            return Mario.AIR_STEP_HIT_LAVA_WALL
        }

        if (wallDYaw < -0x6000 || wallDYaw > 0x6000) {
            m.flags |= Mario.MARIO_UNKNOWN_30
            return Mario.AIR_STEP_HIT_WALL
        }
    }

    return Mario.AIR_STEP_NONE
}

const apply_vertical_wind = (m) => {
    let maxVelY
    let offsetY

    if (m.action != Mario.ACT_GROUND_POUND) {
        offsetY = m.pos[1] - -1500.0

        if (m.floor.type == SURFACE_VERTICAL_WIND && -3000.0 < offsetY && offsetY < 2000.0) {
            if (offsetY >= 0.0) {
                maxVelY = 10000.0 / (offsetY + 200.0)
            } else {
                maxVelY = 50.0
            }

            if (m.vel[1] < maxVelY) {
                if ((m.vel[1] += maxVelY / 8.0) > maxVelY) {
                    m.vel[1] = maxVelY;
                }
            }
        }
    }
}

export const perform_air_step = (m, stepArg) => {
    let stepResult = Mario.AIR_STEP_NONE

    m.wall = null

    for (let i = 0; i < 4; i++) {
        const intendedPos = [
            m.pos[0] + m.vel[0] / 4.0,
            m.pos[1] + m.vel[1] / 4.0,
            m.pos[2] + m.vel[2] / 4.0,
        ]

        const quarterStepResult = perform_air_quarter_step(m, intendedPos, stepArg)

        if (quarterStepResult != Mario.AIR_STEP_NONE) {
            stepResult = quarterStepResult
        }

        if ([Mario.AIR_STEP_LANDED, Mario.AIR_STEP_GRABBED_LEDGE, Mario.AIR_STEP_GRABBED_CEILING, Mario.AIR_STEP_HIT_LAVA_WALL].includes(quarterStepResult)) {
            break
        }
    }

    if (m.vel[1] >= 0.0) {
        m.peakHeight = m.pos[1]
    }

    m.terrainSoundAddend = Mario.mario_get_terrain_sound_addend(m)

    if (m.action != Mario.ACT_FLYING) {
        apply_gravity(m)
    }
    apply_vertical_wind(m)

    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)

    return stepResult
}

const perform_ground_quarter_step = (m, nextPos) => {

    const upperWall = Mario.resolve_and_return_wall_collisions(nextPos, 60.0, 50.0)

    const floorWrapper = {}
    const floorHeight = SurfaceCollision.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)
    const ceilWrapper = {}
    const ceilHeight = Mario.vec3_find_ceil(nextPos, floorHeight, ceilWrapper)

    m.wall = upperWall

    if (floorWrapper.floor == null) {
        return Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS
    }

    if (nextPos[1] > floorHeight + 100.0) {

        if (nextPos[1] + 160 > ceilHeight) return Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS

        m.pos = [...nextPos]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight
        return Mario.GROUND_STEP_LEFT_GROUND
    }

    if (floorHeight + 160 >= ceilHeight) return Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS

    m.pos = [ nextPos[0], floorHeight, nextPos[2] ]
    m.floor = floorWrapper.floor
    m.floorHeight = floorHeight

    if (upperWall != null) {
        let wallDYaw = atan2s(upperWall.normal.z, upperWall.normal.x) - m.faceAngle[1];

        if (wallDYaw >= 0x2AAA && wallDYaw <= 0x5555) {
            return Mario.GROUND_STEP_NONE;
        }
        if (wallDYaw <= -0x2AAA && wallDYaw >= -0x5555) {
            return Mario.GROUND_STEP_NONE;
        }

        return Mario.GROUND_STEP_HIT_WALL_CONTINUE_QSTEPS
    }

    return Mario.GROUND_STEP_NONE

}

export const perform_ground_step = (m) => {
    let i
    let stepResult
    const intendedPos = []

    for (i = 0; i < 4; i++) {
        intendedPos[0] = m.pos[0] + m.floor.normal.y * (m.vel[0] / 4.0)
        intendedPos[2] = m.pos[2] + m.floor.normal.y * (m.vel[2] / 4.0)
        intendedPos[1] = m.pos[1]

        stepResult = perform_ground_quarter_step(m, intendedPos)
        if (stepResult == Mario.GROUND_STEP_LEFT_GROUND || stepResult == Mario.GROUND_STEP_HIT_WALL_STOP_QSTEPS) {
            break
        }
    }

    m.terrainSoundAddend = Mario.mario_get_terrain_sound_addend(m)
    vec3f_copy(m.marioObj.gfx.pos, m.pos)
    vec3s_set(m.marioObj.gfx.angle, 0, m.faceAngle[1], 0)

    if (stepResult == Mario.GROUND_STEP_HIT_WALL_CONTINUE_QSTEPS) {
        stepResult = Mario.GROUND_STEP_HIT_WALL
    }

    return stepResult
}

export const stationary_ground_step = (m) => {

    Mario.set_forward_vel(m, 0.0)

    m.pos[1] = m.floorHeight

    m.marioObj.gfx.pos = [...m.pos]
    m.marioObj.gfx.angle = [0, m.faceAngle[1], 0]

    return false
}
