import * as Mario from "./Mario"
import { level_trigger_warp, WARP_OP_DEATH } from "./LevelUpdate"
import { atan2s, approach_number, vec3s_set, vec3f_copy } from "../engine/math_util"
import { geo_update_animation_frame } from "../engine/graph_node"
import { SurfaceCollisionInstance as SurfaceCollisions } from "../engine/SurfaceCollision"
import { coss, s16, s32, sins } from "../utils"
import * as Particles from "../include/mario_constants"
import { SURFACE_FLOWING_WATER } from "../include/surface_terrains"
import { AreaInstance as Area } from "../game/Area"
import { mario_grab_used_object, INT_STATUS_MARIO_DROP_OBJECT, INT_STATUS_STOP_RIDING, INTERACT_GRABBABLE } from "./Interaction"
import { MARIO_EYES_HALF_CLOSED, MARIO_EYES_DEAD } from "../include/mario_geo_switch_case_ids"
import { CameraInstance as Camera } from "./Camera"
import * as CAMERA from "./Camera"  // for constants

const MIN_SWIM_STRENGTH = 160
const MIN_SWIM_SPEED = 160

let sBounceAngle = 0
let sBounceIncrement = 0
let sBounceMult = 0

let sWasAtSurface = false
let sSwimStrength = MIN_SWIM_STRENGTH
const sWaterCurrentSpeed = [28, 12, 8, 4]

const update_water_pitch = (m) => {
    const marioObj = m.marioObj

    if (marioObj.gfx.angle[0] > 0) {
        marioObj.gfx.pos[1] += 60.0 * sins(marioObj.gfx.angle[0]) * sins(marioObj.gfx.angle[0])
    }

    if (marioObj.gfx.angle[0] < 0) {
        marioObj.gfx.angle[0] = (marioObj.gfx.angle[0] * 6) / 10
    }

    if (marioObj.gfx.angle[0] > 0) {
        marioObj.gfx.angle[0] = (marioObj.gfx.angle[0] * 10) / 8
    }
}

const update_swimming_speed = (m, decelThreshold) => {
    const buoyancy = get_buoyancy(m)
    const maxSpeed = 28.0

    if (m.action & Mario.ACT_FLAG_STATIONARY) {
        m.forwardVel -= 2.0
    }

    if (m.forwardVel < 0.0) {
        m.forwardVel = 0.0
    }

    if (m.forwardVel > maxSpeed) {
        m.forwardVel = maxSpeed
    }

    if (m.forwardVel > decelThreshold) {
        m.forwardVel -= 0.5
    }

    m.vel[0] = m.forwardVel * coss(m.faceAngle[0]) * sins(m.faceAngle[1])
    m.vel[1] = m.forwardVel * sins(m.faceAngle[0]) + buoyancy
    m.vel[2] = m.forwardVel * coss(m.faceAngle[0]) * coss(m.faceAngle[1])
}

const update_swimming_yaw = (m) => {
    let targetYawVel = -s16(10.0 * m.controller.stickX)

    if (targetYawVel > 0) {
        if (m.angleVel[1] < 0) {
            m.angleVel[1] = s16(m.angleVel[1] + 0x40)
            if (m.angleVel[1] > 0x10) {
                m.angleVel[1] = 0x10
            }
        } else {
            m.angleVel[1] = approach_number(m.angleVel[1], targetYawVel, 0x10, 0x20)
        }
    } else if (targetYawVel < 0) {
        if (m.angleVel[1] > 0) {
            m.angleVel[1] = s16(m.angleVel[1] - 0x40)
            if (m.angleVel[1] < -0x10) {
                m.angleVel[1] = -0x10
            }
        } else {
            m.angleVel[1] = approach_number(m.angleVel[1], targetYawVel, 0x20, 0x10)
        }
    } else {
        m.angleVel[1] = approach_number(m.angleVel[1], 0, 0x40, 0x40)
    }

    m.faceAngle[1] = s16(m.faceAngle[1] + m.angleVel[1])
    m.faceAngle[2] = -m.angleVel[1] * 8
}

const update_swimming_pitch = (m) => {
    let targetPitch = s16(-(252.0 * m.controller.stickY))

    let pitchVel
    if (m.faceAngle[0] < 0) {
        pitchVel = 0x100
    } else {
        pitchVel = 0x200
    }

    if (m.faceAngle[0] < targetPitch) {
        m.faceAngle[0] = s16(m.faceAngle[0] + pitchVel)
        if (m.faceAngle[0] > targetPitch) {
            m.faceAngle[0] = targetPitch
        }
    } else if (m.faceAngle[0] > targetPitch) {
        m.faceAngle[0] = s16(m.faceAngle[0] - pitchVel)
        if (m.faceAngle[0] < targetPitch) {
            m.faceAngle[0] = targetPitch
        }
    }
}

const common_idle_step = (m, animation, arg) => {
    let val = m.marioBodyState.headAngle[0]

    update_swimming_yaw(m)
    update_swimming_pitch(m)
    update_swimming_speed(m, MIN_SWIM_SPEED)
    perform_water_step(m)
    update_water_pitch(m)

    if (m.faceAngle[0] > 0) {
        val = approach_number(val, m.faceAngle[0] / 2, 0x80, 0x200)
    } else {
        val = approach_number(val, 0, 0x200, 0x200)
    }

    if (arg === 0) {
        Mario.set_mario_animation(m, animation)
    } else {
        Mario.set_mario_anim_with_accel(m, animation, arg)
    }

    set_swimming_at_surface_particles(m, Particles.PARTICLE_IDLE_WATER_WAVE)
}

const set_swimming_at_surface_particles = (m, particleFlag) => {
    const atSurface = m.pos[1] >= m.waterLevel - 130

    if (atSurface) {
        m.particleFlags |= particleFlag
        /*TODO if (atSurface ^ sWasAtSurface) {
            play_sound(SOUND_ACTION_UNKNOWN431, m.marioObj.gfx.cameraToObject);
        }*/
    }

    sWasAtSurface = atSurface
}

const act_water_idle = (m) => {
    let val = 0x10000

    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 1)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_PUNCH, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_BREASTSTROKE, 0)
    }

    if (m.faceAngle[0] < -0x1000) {
        val = 0x30000
    }

    common_idle_step(m, Mario.MARIO_ANIM_WATER_IDLE, val)
    return false
}

const act_water_plunge = (m) => {
    let stepResult
    let stateFlags = m.heldObj != null ? 1 : 0

    let endVSpeed
    if (swimming_near_surface(m)) {
        endVSpeed = 0.0
    } else {
        endVSpeed = -5.0
    }

    if (m.flags & Mario.MARIO_METAL_CAP) {
        stateFlags |= 4
    } else if (m.prevAction & Mario.ACT_FLAG_DIVING || m.input & Mario.INPUT_A_DOWN) {
        stateFlags |= 2
    }

    m.actionTimer++

    stationary_slow_down(m)

    stepResult = perform_water_step(m)

    if (m.actionState === 0) {
        /* TODO play_sound(SOUND_ACTION_UNKNOWN430, m.marioObj.gfx.cameraToObject);
         if (m.peakHeight - m.pos[1] > 1150.0) {
            play_sound(SOUND_MARIO_HAHA_2, m.marioObj.gfx.cameraToObject);
        }*/

        m.particleFlags |= Particles.PARTICLE_WATER_SPLASH
        m.actionState = 1
    }

    if (stepResult === Mario.WATER_STEP_HIT_FLOOR || m.vel[1] >= endVSpeed || m.actionTimer > 20) {
        switch (stateFlags) {
            case 0:
                Mario.set_mario_action(m, Mario.ACT_WATER_ACTION_END, 0)
                break
            case 1:
                Mario.set_mario_action(m, Mario.ACT_HOLD_WATER_ACTION_END, 0)
                break
            case 2:
                Mario.set_mario_action(m, Mario.ACT_FLUTTER_KICK, 0)
                break
            case 3:
                Mario.set_mario_action(m, Mario.ACT_HOLD_FLUTTER_KICK, 0)
                break
            case 4:
                Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 0)
                break
            case 5:
                Mario.set_mario_action(m, Mario.ACT_HOLD_METAL_WATER_FALLING, 0)
                break
            default: throw "unknown case in act_water_plunge"
        }
        sBounceIncrement = 0
    }

    switch (stateFlags) {
        case 0:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_ACTION_END)
            break
        case 1:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_ACTION_END_WITH_OBJ)
            break
        case 2:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_FLUTTERKICK)
            break
        case 3:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_FLUTTERKICK_WITH_OBJ)
            break
        case 4:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_GENERAL_FALL)
            break
        case 5:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_FALL_WITH_LIGHT_OBJ)
            break
    }

    m.particleFlags |= Particles.PARTICLE_PLUNGE_BUBBLE
    return false
}

const stationary_slow_down = (m) => {
    const buoyancy = get_buoyancy(m)

    m.angleVel[0] = 0
    m.angleVel[1] = 0

    m.forwardVel = approach_number(m.forwardVel, 0.0, 1.0, 1.0)
    m.vel[1] = approach_number(m.vel[1], buoyancy, 2.0, 1.0)

    m.faceAngle[0] = approach_number(m.faceAngle[0], 0, 0x200, 0x200)
    m.faceAngle[2] = approach_number(m.faceAngle[2], 0, 0x100, 0x100)

    m.vel[0] = m.forwardVel * coss(m.faceAngle[0]) * sins(m.faceAngle[1])
    m.vel[2] = m.forwardVel * coss(m.faceAngle[0]) * coss(m.faceAngle[1])
}

const get_buoyancy = (m) => {
    let buoyancy = 0.0

    if (m.flags & Mario.MARIO_METAL_CAP) {
        if (m.action & Mario.ACT_FLAG_INVULNERABLE) {
            buoyancy = -2.0
        } else {
            buoyancy = -18.0
        }
    } else if (swimming_near_surface(m)) {
        buoyancy = 1.25
    } else if (!(m.action & Mario.ACT_FLAG_MOVING)) {
        buoyancy = -2.0
    }

    return buoyancy
}

const swimming_near_surface = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return false
    }

    return m.waterLevel - 80 - m.pos[1] < 400.0 ? 1 : 0
}

const perform_water_step = (m) => {
    let stepResult
    let nextPos = [0, 0, 0]
    let step = [0, 0, 0]
    let marioObj = m.marioObj

    vec3f_copy(step, m.vel)

    if (m.action & Mario.ACT_FLAG_SWIMMING) {
        apply_water_current(m, step)
    }

    nextPos[0] = m.pos[0] + step[0]
    nextPos[1] = m.pos[1] + step[1]
    nextPos[2] = m.pos[2] + step[2]

    if (nextPos[1] > m.waterLevel - 80) {
        nextPos[1] = m.waterLevel - 80
        m.vel[1] = 0.0
    }

    stepResult = perform_water_full_step(m, nextPos)

    vec3f_copy(marioObj.gfx.pos, m.pos)
    vec3s_set(marioObj.gfx.angle, -m.faceAngle[0], m.faceAngle[1], m.faceAngle[2])

    return stepResult
}

const perform_water_full_step = (m, nextPos) => {
    const wall = Mario.resolve_and_return_wall_collisions(nextPos, 10.0, 110.0)
    const floorWrapper = {}
    const floorHeight = SurfaceCollisions.find_floor(nextPos[0], nextPos[1], nextPos[2], floorWrapper)
    const ceilWrapper = {}
    let ceilHeight = Mario.vec3_find_ceil(nextPos, floorHeight, ceilWrapper)

    if (floorWrapper.floor === null) {
        return Mario.WATER_STEP_CANCELLED
    }

    if (nextPos[1] >= floorHeight) {
        if (ceilHeight - nextPos[1] >= 160.0) {
            m.pos = [...nextPos]
            m.floor = floorWrapper.floor
            m.floorHeight = floorHeight

            if (wall != null) {
                return Mario.WATER_STEP_HIT_WALL
            } else {
                return Mario.WATER_STEP_NONE
            }
        }

        if (ceilHeight - floorHeight < 160.0) {
            return Mario.WATER_STEP_CANCELLED
        }

        //! Water ceiling downwarp
        m.pos = [nextPos[0], ceilHeight - 160.0, nextPos[2]]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight
        return Mario.WATER_STEP_HIT_CEILING
    } else {
        if (ceilHeight - floorHeight < 160.0) {
            return Mario.WATER_STEP_CANCELLED
        }

        m.pos = [nextPos[0], floorHeight, nextPos[2]]
        m.floor = floorWrapper.floor
        m.floorHeight = floorHeight
        return Mario.WATER_STEP_HIT_FLOOR
    }
}

const apply_water_current = (m, step) => {
    let whirlpoolRadius = 2000.0

    if (m.floor && m.floor.type === SURFACE_FLOWING_WATER) {
        let currentAngle = m.floor.force << 8
        let currentSpeed = sWaterCurrentSpeed[m.floor.force >> 8]

        step[0] += currentSpeed * sins(currentAngle)
        step[2] += currentSpeed * coss(currentAngle)
    }

    for (let i = 0; i < 2; i++) {
        let whirlpool = Area.gCurrentArea.whirlpools[i]
        if (whirlpool != null) {
            strength = 0.0

            dx = whirlpool.pos[0] - m.pos[0]
            dy = whirlpool.pos[1] - m.pos[1]
            dz = whirlpool.pos[2] - m.pos[2]

            lateralDist = Math.sqrt(dx * dx + dz * dz)
            distance = Math.sqrt(lateralDist * lateralDist + dy * dy)

            pitchToWhirlpool = atan2s(lateralDist, dy)
            yawToWhirlpool = atan2s(dz, dx)

            yawToWhirlpool -= s16((0x2000 * 1000.0) / (distance + 1000.0))

            if (whirlpool.strength >= 0) {
                if (gCurrLevelNum === LEVEL_DDD && gCurrAreaIndex === 2) {
                    whirlpoolRadius = 4000.0
                }

                if (distance >= 26.0 && distance < whirlpoolRadius) {
                    strength = whirlpool.strength * (1.0 - distance / whirlpoolRadius)
                }
            } else if (distance < 2000.0) {
                strength = whirlpool.strength * (1.0 - distance / 2000.0)
            }

            step[0] += strength * coss(pitchToWhirlpool) * sins(yawToWhirlpool)
            step[1] += strength * sins(pitchToWhirlpool)
            step[2] += strength * coss(pitchToWhirlpool) * coss(yawToWhirlpool)
        }
    }
}

const act_drowning = (m) => {
    switch (m.actionState) {
        case 0:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_DROWNING_PART1)
            m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED;
            if (Mario.is_anim_at_end(m)) {
                m.actionState = 1
            }
            break

        case 1:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_DROWNING_PART2)
            m.marioBodyState.eyeState = MARIO_EYES_DEAD
            const animFrame = geo_update_animation_frame(m.marioObj.gfx.animInfo, null)
            if (animFrame == 30) {
                level_trigger_warp(m, WARP_OP_DEATH)
            }
            break
    }

    // TODO play_sound_if_no_flag(m, SOUND_MARIO_DROWNING, MARIO_ACTION_SOUND_PLAYED)
    stationary_slow_down(m)
    perform_water_step(m)

    return false
}

const act_hold_water_idle = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_HOLD_METAL_WATER_FALLING, 0)
    }

    if (m.marioObj.oInteractStatus & INT_STATUS_MARIO_DROP_OBJECT) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_WATER_IDLE, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_THROW, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_HOLD_BREASTSTROKE, 0)
    }

    common_idle_step(m, Mario.MARIO_ANIM_WATER_IDLE_WITH_OBJ, 0)
    return false
}

const act_water_action_end = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 1)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_PUNCH, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_BREASTSTROKE, 0)
    }

    common_idle_step(m, Mario.MARIO_ANIM_WATER_ACTION_END, 0)
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_WATER_IDLE, 0)
    }
    return false
}

const act_swimming_end = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 1)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_PUNCH, 0)
    }

    if (m.actionTimer >= 15) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_ACTION_END, 0)
    }

    if (check_water_jump(m)) {
        return true
    }

    if (m.input & Mario.INPUT_A_DOWN && m.actionTimer >= 7) {
        if (m.actionTimer === 7 && sSwimStrength < 280) {
            sSwimStrength += 10
        }
        return Mario.set_mario_action(m, Mario.ACT_BREASTSTROKE, 1)
    }

    if (m.actionTimer >= 7) {
        sSwimStrength = MIN_SWIM_STRENGTH
    }

    m.actionTimer++

    m.forwardVel -= 0.25
    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SWIM_PART2)
    common_swimming_step(m, sSwimStrength)

    return false
}

const check_water_jump = (m) => {
    let probe = s32(m.pos[1] + 1.5)

    if (m.input & Mario.INPUT_A_PRESSED) {
        if (probe >= m.waterLevel - 80 && m.faceAngle[0] >= 0 && m.controller.stickY < -60.0) {
            m.angleVel = [0, 0, 0]

            m.vel[1] = 62.0

            if (m.heldObj == null) {
                return Mario.set_mario_action(m, Mario.ACT_WATER_JUMP, 0)
            } else {
                return Mario.set_mario_action(m, Mario.ACT_HOLD_WATER_JUMP, 0)
            }
        }
    }

    return false
}

const act_breaststroke = (m) => {
    if (m.actionArg === 0) {
        sSwimStrength = MIN_SWIM_STRENGTH
    }

    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 1)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_PUNCH, 0)
    }

    if (++m.actionTimer == 14) {
        return Mario.set_mario_action(m, Mario.ACT_FLUTTER_KICK, 0)
    }

    if (check_water_jump(m)) {
        return true
    }

    if (m.actionTimer < 6) {
        m.forwardVel += 0.5
    }

    if (m.actionTimer >= 9) {
        m.forwardVel += 1.5
    }

    if (m.actionTimer >= 2) {
        if (m.actionTimer < 6 && m.input & Mario.INPUT_A_PRESSED) {
            m.actionState = 1
        }

        if (m.actionTimer === 9 && m.actionState === 1) {
            Mario.set_anim_to_frame(m, 0)
            m.actionState = 0
            m.actionTimer = 1
            sSwimStrength = MIN_SWIM_STRENGTH
        }
    }

    if (m.actionTimer == 1) {
        /* TODO play_sound(sSwimStrength === MIN_SWIM_STRENGTH ? SOUND_ACTION_SWIM : SOUND_ACTION_SWIM_FAST,
                   m.marioObj.gfx.cameraToObject);*/
        reset_float_globals(m)
    }

    Mario.set_mario_animation(m, Mario.MARIO_ANIM_SWIM_PART1)
    common_swimming_step(m, sSwimStrength)

    return false
}

const common_swimming_step = (m, swimStrength) => {
    let floorPitch

    update_swimming_yaw(m)
    update_swimming_pitch(m)
    update_swimming_speed(m, swimStrength / 10.0)

    switch (perform_water_step(m)) {
        case Mario.WATER_STEP_HIT_FLOOR:
            floorPitch = -Mario.find_floor_slope(m, -0x8000)
            if (m.faceAngle[0] < floorPitch) {
                m.faceAngle[0] = floorPitch
            }
            break

        case Mario.WATER_STEP_HIT_CEILING:
            if (m.faceAngle[0] > -0x3000) {
                m.faceAngle[0] -= 0x100
            }
            break

        case Mario.WATER_STEP_HIT_WALL:
            if (m.controller.stickY === 0.0) {
                if (m.faceAngle[0] > 0.0) {
                    m.faceAngle[0] += 0x200
                    if (m.faceAngle[0] > 0x3f00) {
                        m.faceAngle[0] = 0x3f00
                    }
                } else {
                    m.faceAngle[0] -= 0x200
                    if (m.faceAngle[0] < -0x3f00) {
                        m.faceAngle[0] = -0x3f00
                    }
                }
            }
            break
    }

    update_water_pitch(m)
    m.marioBodyState.headAngle[0] = approach_number(m.marioBodyState.headAngle[0], 0, 0x200, 0x200)

    float_surface_gfx(m)
    set_swimming_at_surface_particles(m, Particles.PARTICLE_WAVE_TRAIL)
}

const float_surface_gfx = (m) => {
    if (sBounceIncrement != 0 && m.pos[1] > m.waterLevel - 85 && m.faceAngle[0] >= 0) {
        sBounceAngle = s16(sBounceAngle + sBounceIncrement)
        if (sBounceAngle >= 0) {
            m.marioObj.gfx.pos[1] += sBounceMult * sins(sBounceAngle)
            return
        }
    }

    sBounceIncrement = 0
}

const reset_float_globals = (m) => {
    sBounceAngle = 0
    sBounceIncrement = 0x800
    sBounceMult = m.faceAngle[0] / 256.0 + 20.0
}

const act_hold_water_action_end = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_HOLD_METAL_WATER_FALLING, 0)
    }

    if (m.marioObj.oInteractStatus & INT_STATUS_MARIO_DROP_OBJECT) {
        return Mario.drop_and_set_mario_action(m, Mario.ACT_WATER_IDLE, 0)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_THROW, 0)
    }

    if (m.input & Mario.INPUT_A_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_HOLD_BREASTSTROKE, 0)
    }

    common_idle_step(
        m,
        m.actionArg == 0 ? Mario.MARIO_ANIM_WATER_ACTION_END_WITH_OBJ : Mario.MARIO_ANIM_STOP_GRAB_OBJ_WATER,
        0
    )
    if (Mario.is_anim_at_end(m)) {
        Mario.set_mario_action(m, Mario.ACT_HOLD_WATER_IDLE, 0)
    }
    return false
}

const act_water_shocked = (m) => {
    //TODO play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_ACTION_SOUND_PLAYED);
    //TODO play_sound(SOUND_MOVING_SHOCKED, m.marioObj.gfx.cameraToObject);
    Camera.set_camera_shake_from_hit(CAMERA.SHAKE_SHOCK)

    if (Mario.set_mario_animation(m, Mario.MARIO_ANIM_SHOCKED) == 0) {
        m.actionTimer++
        m.flags |= Mario.MARIO_METAL_SHOCK
    }

    if (m.actionTimer >= 6) {
        m.invincTimer = 30
        Mario.set_mario_action(m, m.health < 0x100 ? Mario.ACT_WATER_DEATH : Mario.ACT_WATER_IDLE, 0)
    }

    stationary_slow_down(m)
    perform_water_step(m)
    m.marioBodyState.headAngle[0] = 0
    return false
}

const act_backward_water_kb = (m) => {
    common_water_knockback_step(m, Mario.MARIO_ANIM_BACKWARDS_WATER_KB, Mario.ACT_WATER_IDLE, m.actionArg)
    return false
}

const act_forward_water_kb = (m) => {
    common_water_knockback_step(m, Mario.MARIO_ANIM_WATER_FORWARD_KB, Mario.ACT_WATER_IDLE, m.actionArg)
    return false
}

const common_water_knockback_step = (m, animation, endAction, arg3) => {
    stationary_slow_down(m)
    perform_water_step(m)
    Mario.set_mario_animation(m, animation)

    m.marioBodyState.headAngle[0] = 0

    if (Mario.is_anim_at_end(m)) {
        if (arg3 > 0) {
            m.invincTimer = 30
        }

        Mario.set_mario_action(m, m.health >= 0x100 ? endAction : Mario.ACT_WATER_DEATH, 0)
    }
}

const act_water_death = (m) => {
    stationary_slow_down(m)
    perform_water_step(m)

    // TODO m.marioBodyState.eyeState = MARIO_EYES_DEAD;

    /* TODO Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_DYING);
    if (Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_DYING) == 35) {
        level_trigger_warp(m, WARP_OP_DEATH);
    }*/

    return false
}

const check_common_submerged_cancels = (m) => {
    if (m.pos[1] > m.waterLevel - 80) {
        if (m.waterLevel - 80 > m.floorHeight) {
            m.pos[1] = m.waterLevel - 80
        } else {
            //! If you press B to throw the shell, there is a ~5 frame window
            // where your held object is the shell, but you are not in the
            // water shell swimming action. This allows you to hold the water
            // shell on land (used for cloning in DDD).
            if (m.action === Mario.ACT_WATER_SHELL_SWIMMING && m.heldObj != null) {
                m.heldObj.oInteractStatus = INT_STATUS_STOP_RIDING
                m.heldObj = null
                // TODO stop_shell_music();
            }

            return Mario.transition_submerged_to_walking(m)
        }
    }

    if (m.health < 0x100 && !(m.action & (Mario.ACT_FLAG_INTANGIBLE | Mario.ACT_FLAG_INVULNERABLE))) {
        Mario.set_mario_action(m, Mario.ACT_DROWNING, 0)
    }

    return false
}

const act_water_punch = (m) => {
    if (m.forwardVel < 7.0) {
        m.forwardVel += 1.0
    }

    update_swimming_yaw(m)
    update_swimming_pitch(m)
    update_swimming_speed(m, MIN_SWIM_SPEED)
    perform_water_step(m)
    update_water_pitch(m)

    m.marioBodyState.headAngle[0] = approach_number(m.marioBodyState.headAngle[0], 0, 0x200, 0x200)

    //TODO play_sound_if_no_flag(m, SOUND_ACTION_SWIM, MARIO_ACTION_SOUND_PLAYED);

    switch (m.actionState) {
        case 0:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_GRAB_OBJ_PART1)
            if (Mario.is_anim_at_end(m)) {
                m.actionState = check_water_grab(m) + 1
            }
            break

        case 1:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_GRAB_OBJ_PART2)
            if (Mario.is_anim_at_end(m)) {
                Mario.set_mario_action(m, Mario.ACT_WATER_ACTION_END, 0)
            }
            break

        case 2:
            Mario.set_mario_animation(m, Mario.MARIO_ANIM_WATER_PICK_UP_OBJ)
            if (Mario.is_anim_at_end(m)) {
                /*TODO if (m.heldObj.behavior == segmented_to_virtual(bhvKoopaShellUnderwater)) {
                    //TODO play_shell_music();
                    Mario.set_mario_action(m, Mario.ACT_WATER_SHELL_SWIMMING, 0)
                } else {
                    Mario.set_mario_action(m, Mario.ACT_HOLD_WATER_ACTION_END, 1)
                }*/
            }
            break
    }

    return false
}

const check_water_grab = (m) => {
    //! Heave hos have the grabbable interaction type but are not normally
    // grabbable. Since water grabbing doesn't check the appropriate input flag,
    // you can use water grab to pick up heave ho.
    if (m.marioObj.collidedObjInteractTypes & INTERACT_GRABBABLE) {
        const object = mario_get_collided_object(m, INTERACT_GRABBABLE)
        const dx = object.oPosX - m.pos[0]
        const dz = object.oPosZ - m.pos[2]
        const dAngleToObject = atan2s(dz, dx) - m.faceAngle[1]

        if (dAngleToObject >= -0x2aaa && dAngleToObject <= 0x2aaa) {
            m.usedObj = object
            mario_grab_used_object(m)
            m.marioBodyState.grabPos = GRAB_POS_LIGHT_OBJ
            return true
        }
    }

    return false
}

const act_flutter_kick = (m) => {
    if (m.flags & Mario.MARIO_METAL_CAP) {
        return Mario.set_mario_action(m, Mario.ACT_METAL_WATER_FALLING, 1)
    }

    if (m.input & Mario.INPUT_B_PRESSED) {
        return Mario.set_mario_action(m, Mario.ACT_WATER_PUNCH, 0)
    }

    if (!(m.input & Mario.INPUT_A_DOWN)) {
        if (m.actionTimer == 0 && sSwimStrength < 280) {
            sSwimStrength += 10
        }
        return Mario.set_mario_action(m, Mario.ACT_SWIMMING_END, 0)
    }

    m.forwardVel = approach_number(m.forwardVel, 12.0, 0.1, 0.15)
    m.actionTimer = 1
    sSwimStrength = MIN_SWIM_STRENGTH

    if (m.forwardVel < 14.0) {
        //TODO play_swimming_noise(m);
        Mario.set_mario_animation(m, Mario.MARIO_ANIM_FLUTTERKICK)
    }

    common_swimming_step(m, sSwimStrength)
    return false
}

export const mario_execute_submerged_action = (m) => {
    if (check_common_submerged_cancels(m)) {
        return true
    }

    m.quicksandDepth = 0.0

    m.marioBodyState.headAngle[1] = 0
    m.marioBodyState.headAngle[2] = 0

    switch (m.action) {
        case Mario.ACT_WATER_IDLE:
            return act_water_idle(m)
        case Mario.ACT_DROWNING:
            return act_drowning(m)
        case Mario.ACT_HOLD_WATER_IDLE:
            return act_hold_water_idle(m)
        case Mario.ACT_WATER_ACTION_END:
            return act_water_action_end(m)
        case Mario.ACT_HOLD_WATER_ACTION_END:
            return act_hold_water_action_end(m)
        case Mario.ACT_BACKWARD_WATER_KB:
            return act_backward_water_kb(m)
        case Mario.ACT_FORWARD_WATER_KB:
            return act_forward_water_kb(m)
        case Mario.ACT_WATER_DEATH:
            return act_water_death(m)
        case Mario.ACT_WATER_SHOCKED:
            return act_water_shocked(m)
        case Mario.ACT_BREASTSTROKE:
            return act_breaststroke(m)
        case Mario.ACT_SWIMMING_END:
            return act_swimming_end(m)
        case Mario.ACT_FLUTTER_KICK:
            return act_flutter_kick(m)
        //case Mario.ACT_HOLD_BREASTSTROKE:          return //act_hold_breaststroke(m);
        //case Mario.ACT_HOLD_SWIMMING_END:          return //act_hold_swimming_end(m);
        //case Mario.ACT_HOLD_FLUTTER_KICK:          return //act_hold_flutter_kick(m);
        //case Mario.ACT_WATER_SHELL_SWIMMING:       return //act_water_shell_swimming(m);
        //case Mario.ACT_WATER_THROW:                return //act_water_throw(m);
        case Mario.ACT_WATER_PUNCH:
            return act_water_punch(m)
        case Mario.ACT_WATER_PLUNGE:
            return act_water_plunge(m)
        //case Mario.ACT_CAUGHT_IN_WHIRLPOOL:        return //act_caught_in_whirlpool(m);
        //case Mario.ACT_METAL_WATER_STANDING:       return //act_metal_water_standing(m);
        //case Mario.ACT_METAL_WATER_WALKING:        return //act_metal_water_walking(m);
        //case Mario.ACT_METAL_WATER_FALLING:        return //act_metal_water_falling(m);
        //case Mario.ACT_METAL_WATER_FALL_LAND:      return //act_metal_water_fall_land(m);
        //case Mario.ACT_METAL_WATER_JUMP:           return //act_metal_water_jump(m);
        //case Mario.ACT_METAL_WATER_JUMP_LAND:      return //act_metal_water_jump_land(m);
        //case Mario.ACT_HOLD_METAL_WATER_STANDING:  return //act_hold_metal_water_standing(m);
        //case Mario.ACT_HOLD_METAL_WATER_WALKING:   return //act_hold_metal_water_walking(m);
        //case Mario.ACT_HOLD_METAL_WATER_FALLING:   return //act_hold_metal_water_falling(m);
        //case Mario.ACT_HOLD_METAL_WATER_FALL_LAND: return //act_hold_metal_water_fall_land(m);
        //case Mario.ACT_HOLD_METAL_WATER_JUMP:      return //act_hold_metal_water_jump(m);
        //case Mario.ACT_HOLD_METAL_WATER_JUMP_LAND: return //act_hold_metal_water_jump_land(m);
        default:
            throw "unkown action submerged"
    }
}
