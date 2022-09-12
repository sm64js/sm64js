import * as _Linker from "./Linker"

import { CameraInstance as Camera           } from "./Camera"
import * as CAMERA from "./Camera"

import {
    set_mario_action, set_mario_animation, set_anim_to_frame, drop_and_set_mario_action,
    mario_set_forward_vel, set_water_plunge_action, is_anim_past_end, mario_floor_is_slippery,
    play_mario_sound, play_mario_jump_sound, play_mario_landing_sound,
    play_mario_heavy_landing_sound, play_sound_if_no_flag, adjust_sound_for_speed, is_anim_at_end,
} from "./Mario"

import {
    MARIO_MARIO_SOUND_PLAYED       
} from "./Mario"

import {
    mario_drop_held_object, mario_grab_used_object, mario_check_object_grab,
    mario_throw_held_object
 } from "./Interaction"

import {
    perform_air_step, mario_bonk_reflection
} from "./MarioStep"

import {
    play_sound
} from "../audio/external"

import {
    gAudioRandom
} from "../audio/data"

import {
    approach_f32, approach_number, approach_s32, atan2s, sqrtf, vec3f_copy, vec3f_set, vec3s_set,
} from "../engine/math_util"

import {
    coss, s16, sins,
} from "../utils"

import {
    gSpecialTripleJump
} from "./SaveFile"

import {
    oAction, oPrevAction, oSubAction, oTimer, oFlags,
    oBehParams, oBehParams2ndByte,
    oAnimations, oAnimState, oActiveParticleFlags,
    oIntangibleTimer, oInteractionSubtype, oInteractStatus, oInteractType,
    oHealth, oHeldState,

    oPosX, oPosY, oPosZ,
    oHomeX, oHomeY, oHomeZ, oAngleToHome,
    oVelX, oVelY, oVelZ,
    oParentRelativePosX, oParentRelativePosY, oParentRelativePosZ,
    oGraphYOffset,

    oAngleVelPitch, oAngleVelRoll, oAngleVelYaw,
    oForwardVel, oForwardVelS32,
    oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw,
    oDrawingDistance, oOpacity,

    oBounciness, oBuoyancy, oDragStrength, oFriction, oGravity,
    oCollisionDistance, oDamageOrCoinValue, oNumLootCoins,
    oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oMoveFlags,
    oWallAngle, oWallHitboxRadius,

    oFloor, oFloorHeight, oFloorRoom, oFloorType, oRoom,
    oAngleToMario, oDistanceToMario,

    oDeathSound, oSoundStateID,
    oDialogResponse, oDialogState,

    oUnk1A8, oUnk94, oUnkBC, oUnkC0,

    oMarioSteepJumpYaw, oMarioBurnTimer
} from "../include/object_constants"

import { WARP_OP_DEATH, level_trigger_warp } from "./LevelUpdate"

import {
    GRAB_POS_LIGHT_OBJ, MARIO_EYES_DEAD
} from "../include/mario_geo_switch_case_ids"

import {
    ACT_AIR_HIT_WALL, ACT_AIR_THROW, ACT_AIR_THROW_LAND, ACT_BACKFLIP, ACT_BACKFLIP_LAND,
    ACT_BACKWARD_AIR_KB, ACT_BACKWARD_GROUND_KB, ACT_BACKWARD_ROLLOUT, ACT_BEGIN_SLIDING,
    ACT_BURNING_FALL, ACT_BURNING_GROUND, ACT_BURNING_JUMP, ACT_BUTT_SLIDE, ACT_BUTT_SLIDE_AIR,
    ACT_BUTT_STUCK_IN_GROUND, ACT_CRAZY_BOX_BOUNCE, ACT_DIVE, ACT_DIVE_PICKING_UP, ACT_DIVE_SLIDE,
    ACT_DOUBLE_JUMP, ACT_DOUBLE_JUMP_LAND, ACT_FEET_STUCK_IN_GROUND,
    ACT_FLAG_ALLOW_VERTICAL_WIND_ACTION, ACT_FLAG_INVULNERABLE, ACT_FLYING, ACT_FLYING_TRIPLE_JUMP,
    ACT_FORWARD_AIR_KB, ACT_FORWARD_GROUND_KB, ACT_FORWARD_ROLLOUT, ACT_FREEFALL, ACT_FREEFALL_LAND,
    ACT_FREEFALL_LAND_STOP, ACT_GETTING_BLOWN, ACT_GROUND_POUND, ACT_GROUND_POUND_LAND,
    ACT_HARD_BACKWARD_AIR_KB, ACT_HARD_BACKWARD_GROUND_KB, ACT_HARD_FORWARD_AIR_KB,
    ACT_HARD_FORWARD_GROUND_KB, ACT_HEAD_STUCK_IN_GROUND, ACT_HOLD_BUTT_SLIDE,
    ACT_HOLD_BUTT_SLIDE_AIR, ACT_HOLD_FREEFALL, ACT_HOLD_FREEFALL_LAND, ACT_HOLD_JUMP,
    ACT_HOLD_JUMP_LAND, ACT_HOLD_WATER_JUMP, ACT_JUMP, ACT_JUMP_KICK, ACT_JUMP_LAND, ACT_LAVA_BOOST,
    ACT_LAVA_BOOST_LAND, ACT_LEDGE_GRAB, ACT_LONG_JUMP, ACT_LONG_JUMP_LAND, ACT_RIDING_HOOT,
    ACT_RIDING_SHELL_FALL, ACT_RIDING_SHELL_GROUND, ACT_RIDING_SHELL_JUMP, ACT_SHOT_FROM_CANNON,
    ACT_SIDE_FLIP, ACT_SIDE_FLIP_LAND, ACT_SLIDE_KICK, ACT_SLIDE_KICK_SLIDE, ACT_SOFT_BONK,
    ACT_SPECIAL_TRIPLE_JUMP, ACT_SQUISHED, ACT_START_HANGING, ACT_STEEP_JUMP, ACT_STOMACH_SLIDE,
    ACT_THROWN_BACKWARD, ACT_THROWN_FORWARD, ACT_TOP_OF_POLE_JUMP, ACT_TRIPLE_JUMP,
    ACT_TRIPLE_JUMP_LAND, ACT_TWIRL_LAND, ACT_TWIRLING, ACT_VERTICAL_WIND, ACT_WALL_KICK_AIR,
    ACT_WATER_JUMP,

    MARIO_ACTION_SOUND_PLAYED, MARIO_ANIM_AIR_FORWARD_KB, MARIO_ANIM_AIR_KICK,
    MARIO_ANIM_AIRBORNE_ON_STOMACH, MARIO_ANIM_BACKFLIP, MARIO_ANIM_BACKWARD_AIR_KB,
    MARIO_ANIM_BACKWARD_SPINNING, MARIO_ANIM_DIVE, MARIO_ANIM_DOUBLE_JUMP_FALL,
    MARIO_ANIM_DOUBLE_JUMP_RISE, MARIO_ANIM_FALL_FROM_SLIDE, MARIO_ANIM_FALL_FROM_SLIDE_KICK,
    MARIO_ANIM_FALL_FROM_SLIDING_WITH_LIGHT_OBJ, MARIO_ANIM_FALL_WITH_LIGHT_OBJ,
    MARIO_ANIM_FAST_LONGJUMP, MARIO_ANIM_FIRE_LAVA_BURN, MARIO_ANIM_FLY_FROM_CANNON,
    MARIO_ANIM_FORWARD_SPINNING, MARIO_ANIM_FORWARD_SPINNING_FLIP, MARIO_ANIM_GENERAL_FALL,
    MARIO_ANIM_GROUND_POUND, MARIO_ANIM_HANDSTAND_JUMP, MARIO_ANIM_HANG_ON_CEILING,
    MARIO_ANIM_HANG_ON_OWL, MARIO_ANIM_IDLE_ON_LEDGE, MARIO_ANIM_JUMP_RIDING_SHELL,
    MARIO_ANIM_JUMP_WITH_LIGHT_OBJ, MARIO_ANIM_SINGLE_JUMP, MARIO_ANIM_SLIDE, MARIO_ANIM_SLIDE_KICK,
    MARIO_ANIM_SLIDEFLIP, MARIO_ANIM_SLIDEJUMP, MARIO_ANIM_SLIDING_ON_BOTTOM_WITH_LIGHT_OBJ,
    MARIO_ANIM_SLOW_LONGJUMP, MARIO_ANIM_START_GROUND_POUND, MARIO_ANIM_START_TWIRL,
    MARIO_ANIM_START_WALLKICK, MARIO_ANIM_THROW_LIGHT_OBJECT, MARIO_ANIM_TRIPLE_JUMP,
    MARIO_ANIM_TRIPLE_JUMP_FLY, MARIO_ANIM_TRIPLE_JUMP_GROUND_POUND, MARIO_ANIM_TWIRL,
    MARIO_ANIM_WING_CAP_FLY,

    MARIO_CAP_ON_HEAD, MARIO_KICKING, MARIO_METAL_CAP, MARIO_SOUND_PLAYED, MARIO_UNKNOWN_18,
    MARIO_WING_CAP,

    AIR_STEP_CHECK_HANG, AIR_STEP_CHECK_LEDGE_GRAB, AIR_STEP_GRABBED_CEILING,
    AIR_STEP_GRABBED_LEDGE, AIR_STEP_HIT_LAVA_WALL, AIR_STEP_HIT_WALL, AIR_STEP_LANDED,
    AIR_STEP_NONE,

    INPUT_A_PRESSED, INPUT_B_PRESSED, INPUT_Z_PRESSED, INPUT_NONZERO_ANALOG, INPUT_SQUISHED,
} from "./Mario"

import {
    PARTICLE_DUST, PARTICLE_VERTICAL_STAR, PARTICLE_SPARKLES, PARTICLE_HORIZONTAL_STAR,
    PARTICLE_FIRE, PARTICLE_MIST_CIRCLE
} from "../include/mario_constants"

import {
    SURFACE_IS_NOT_HARD, TERRAIN_MASK, TERRAIN_SAND, TERRAIN_SNOW, SURFACE_BURNING,
SURFACE_HORIZONTAL_WIND, SURFACE_VERTICAL_WIND
} from "../include/surface_terrains"

import {
    INT_STATUS_MARIO_DROP_OBJECT, INT_STATUS_STOP_RIDING, INT_SUBTYPE_HOLDABLE_NPC,
    INT_STATUS_MARIO_UNK7
} from "./Interaction"

import {
    SOUND_ACTION_BONK, SOUND_ACTION_FLYING_FAST, SOUND_ACTION_HIT, SOUND_ACTION_METAL_BONK,
    SOUND_ACTION_SIDE_FLIP_UNK, SOUND_ACTION_SPIN, SOUND_ACTION_TERRAIN_HEAVY_LANDING,
    SOUND_ACTION_TERRAIN_JUMP, SOUND_ACTION_TERRAIN_LANDING, SOUND_ACTION_THROW, SOUND_ACTION_TWIRL,
    SOUND_ACTION_UNKNOWN432, SOUND_GENERAL_BOING1, SOUND_GENERAL_BOING2, SOUND_MARIO_ATTACKED,
    SOUND_MARIO_DOH, SOUND_MARIO_GROUND_POUND_WAH, SOUND_MARIO_HERE_WE_GO, SOUND_MARIO_HOOHOO,
    SOUND_MARIO_ON_FIRE, SOUND_MARIO_OOOF2, SOUND_MARIO_PUNCH_HOO, SOUND_MARIO_UH,
    SOUND_MARIO_WAAAOOOW, SOUND_MARIO_WAH2, SOUND_MARIO_YAH_WAH_HOO, SOUND_MARIO_YAHOO,
    SOUND_MARIO_YAHOO_WAHA_YIPPEE, SOUND_MOVING_FLYING, SOUND_MOVING_LAVA_BURN,
} from "../include/sounds"


//---------------------------------------------------------------------------


const play_flip_sounds = (m, frame1, frame2, frame3) => {
    let animFrame = m.marioObj.gfx.animInfo.animFrame
    if (animFrame == frame1 || animFrame == frame2 || animFrame == frame3) {
        play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
    }
}

const play_far_fall_sound = (m) => {
    let action = m.action
    if (!(action & ACT_FLAG_INVULNERABLE) && action != ACT_TWIRLING && action != ACT_FLYING
        && !(m.flags & MARIO_UNKNOWN_18)) {
        if (m.peakHeight - m.pos[1] > 1150.0) {
            play_sound(SOUND_MARIO_WAAAOOOW, m.marioObj.gfx.cameraToObject)
            m.flags |= MARIO_UNKNOWN_18
        }
    }
}

export const play_knockback_sound = (m) => {
    if (m.actionArg == 0 && (m.forwardVel <= -28.0 || m.forwardVel >= 28.0)) {
        play_sound_if_no_flag(m, SOUND_MARIO_DOH, MARIO_MARIO_SOUND_PLAYED)
    } else {
        play_sound_if_no_flag(m, SOUND_MARIO_UH, MARIO_MARIO_SOUND_PLAYED)
    }
}

export const lava_boost_on_wall = (m) => {
    m.faceAngle[1] = atan2s(m.wall.normal.z, m.wall.normal.x)

    if (m.forwardVel < 24.0) {
        m.forwardVel = 24.0
    }

    if (!(m.flags & MARIO_METAL_CAP)) {
        m.hurtCounter += (m.flags & MARIO_CAP_ON_HEAD) ? 12 : 18
    }

    play_sound(SOUND_MARIO_ON_FIRE, m.marioObj.gfx.cameraToObject)
    update_mario_sound_and_camera(m)
    return drop_and_set_mario_action(m, ACT_LAVA_BOOST, 1)
}

export const check_fall_damage = (m, hardFallAction) => {
    let fallHeight
    let damageHeight

    fallHeight = m.peakHeight - m.pos[1]

    //! Never true
    if (m.actionState == ACT_GROUND_POUND) {
        damageHeight = 600.0
    } else {
        damageHeight = 1150.0
    }
    if(window.cheats.disableFallDamage) {
        fallHeight = 0.0
        damageHeight = 0.0
    }

    if (m.action != ACT_TWIRLING && m.floor.type != SURFACE_BURNING) {
        if (m.vel[1] < -55.0) {
            if (fallHeight > 3000.0) {
                m.hurtCounter += (m.flags & MARIO_CAP_ON_HEAD) ? 16 : 24
                Camera.set_camera_shake_from_hit(CAMERA.SHAKE_FALL_DAMAGE)
                play_sound(SOUND_MARIO_ATTACKED, m.marioObj.gfx.cameraToObject)
                return drop_and_set_mario_action(m, hardFallAction, 4)
            } else if (fallHeight > damageHeight && !mario_floor_is_slippery(m)) {
                m.hurtCounter += (m.flags & MARIO_CAP_ON_HEAD) ? 8 : 12
                m.squishTimer = 30
                Camera.set_camera_shake_from_hit(CAMERA.SHAKE_FALL_DAMAGE)
                play_sound(SOUND_MARIO_ATTACKED, m.marioObj.gfx.cameraToObject)
            }
        }
    }

    return false
}

export const check_kick_or_dive_in_air = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, m.forwardVel > 28.0 ? ACT_DIVE : ACT_JUMP_KICK, 0)
    }
    return false
}

export const should_get_stuck_in_ground = (m) => {
    let terrainType = m.area.terrainType & TERRAIN_MASK
    let floor = m.floor
    let flags = floor.flags
    let type = floor.type

    if (floor != null && (terrainType == TERRAIN_SNOW || terrainType == TERRAIN_SAND)
        && type != SURFACE_BURNING && SURFACE_IS_NOT_HARD(type)) {
        if (!(flags & 0x01) && m.peakHeight - m.pos[1] > 1000.0 && floor.normal.y >= 0.8660254) {
            return true
        }
    }

    return false
}

export const check_fall_damage_or_get_stuck = (m, hardFallAction) => {
    if (should_get_stuck_in_ground(m)) {
        play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
        m.particleFlags |= PARTICLE_MIST_CIRCLE
        drop_and_set_mario_action(m, ACT_FEET_STUCK_IN_GROUND, 0)
        return true
    }

    return check_fall_damage(m, hardFallAction)
}

export const check_horizontal_wind = (m) => {
    let floor
    let speed
    let pushAngle

    floor = m.floor

    if (floor.type == SURFACE_HORIZONTAL_WIND) {
        pushAngle = floor.force << 8

        m.slideVelX += 1.2 * sins(pushAngle)
        m.slideVelZ += 1.2 * coss(pushAngle)

        speed = sqrtf(m.slideVelX * m.slideVelX + m.slideVelZ * m.slideVelZ)

        if (speed > 48.0) {
            m.slideVelX = m.slideVelX * 48.0 / speed
            m.slideVelZ = m.slideVelZ * 48.0 / speed
            speed = 32.0 //! This was meant to be 48?
        } else if (speed > 32.0) {
            speed = 32.0
        }

        m.vel[0] = m.slideVelX
        m.vel[2] = m.slideVelZ
        m.slideYaw = atan2s(m.slideVelZ, m.slideVelX)
        m.forwardVel = speed * coss(m.faceAngle[1] - m.slideYaw)

        return true
    }

    return false
}

export const update_air_with_turn = (m) => {
    let dragThreshold
    let intendedDYaw
    let intendedMag

    if (!check_horizontal_wind(m)) {
        dragThreshold = m.action == ACT_LONG_JUMP ? 48.0 : 32.0
        m.forwardVel = approach_f32(m.forwardVel, 0.0, 0.35, 0.35)

        if (m.input & INPUT_NONZERO_ANALOG) {
            intendedDYaw = s16(m.intendedYaw - m.faceAngle[1])
            intendedMag = m.intendedMag / 32.0

            m.forwardVel += 1.5 * coss(intendedDYaw) * intendedMag
            m.faceAngle[1] += 512.0 * sins(intendedDYaw) * intendedMag
        }

        //! Uncapped air speed. Net positive when moving forward.
        if (m.forwardVel > dragThreshold) {
            m.forwardVel -= 1.0
        }
        if (m.forwardVel < -16.0) {
            m.forwardVel += 2.0
        }

        m.vel[0] = m.slideVelX = m.forwardVel * sins(m.faceAngle[1])
        m.vel[2] = m.slideVelZ = m.forwardVel * coss(m.faceAngle[1])
    }
}

export const update_air_without_turn = (m) => {
    let sidewaysSpeed = 0.0
    let dragThreshold
    let intendedDYaw
    let intendedMag

    if (!check_horizontal_wind(m)) {
        dragThreshold = m.action == ACT_LONG_JUMP ? 48.0 : 32.0
        m.forwardVel = approach_f32(m.forwardVel, 0.0, 0.35, 0.35)

        if (m.input & INPUT_NONZERO_ANALOG) {
            intendedDYaw = s16(m.intendedYaw - m.faceAngle[1])
            intendedMag = m.intendedMag / 32.0

            m.forwardVel += intendedMag * coss(intendedDYaw) * 1.5
            sidewaysSpeed = intendedMag * sins(intendedDYaw) * 10.0
        }

        //! Uncapped air speed. Net positive when moving forward.
        if (m.forwardVel > dragThreshold) {
            m.forwardVel -= 1.0
        }
        if (m.forwardVel < -16.0) {
            m.forwardVel += 2.0
        }

        m.slideVelX = m.forwardVel * sins(m.faceAngle[1])
        m.slideVelZ = m.forwardVel * coss(m.faceAngle[1])

        m.slideVelX += sidewaysSpeed * sins(s16(m.faceAngle[1] + 0x4000))
        m.slideVelZ += sidewaysSpeed * coss(s16(m.faceAngle[1] + 0x4000))

        m.vel[0] = m.slideVelX
        m.vel[2] = m.slideVelZ
    }
}

export const update_lava_boost_or_twirling = (m) => {
    let intendedDYaw
    let intendedMag

    if (m.input & INPUT_NONZERO_ANALOG) {
        intendedDYaw = s16(m.intendedYaw - m.faceAngle[1])
        intendedMag = m.intendedMag / 32.0

        m.forwardVel += coss(intendedDYaw) * intendedMag
        m.faceAngle[1] += sins(intendedDYaw) * intendedMag * 1024.0

        if (m.forwardVel < 0.0) {
            m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
            m.forwardVel *= -1.0
        }

        if (m.forwardVel > 32.0) {
            m.forwardVel -= 2.0
        }
    }

    m.vel[0] = m.slideVelX = m.forwardVel * sins(m.faceAngle[1])
    m.vel[2] = m.slideVelZ = m.forwardVel * coss(m.faceAngle[1])
}

export const update_flying_yaw = (m) => {
    let targetYawVel = -s16(m.controller.stickX * (m.forwardVel / 4.0))

    if (targetYawVel > 0) {
        if (m.angleVel[1] < 0) {
            m.angleVel[1] = s16(m.angleVel[1] + 0x40)
            if (m.angleVel[1] > 0x10) {
                m.angleVel[1] = 0x10
            }
        } else {
            m.angleVel[1] = approach_s32(m.angleVel[1], targetYawVel, 0x10, 0x20)
        }
    } else if (targetYawVel < 0) {
        if (m.angleVel[1] > 0) {
            m.angleVel[1] = s16(m.angleVel[1] - 0x40)
            if (m.angleVel[1] < -0x10) {
                m.angleVel[1] = -0x10
            }
        } else {
            m.angleVel[1] = approach_s32(m.angleVel[1], targetYawVel, 0x20, 0x10)
        }
    } else {
        m.angleVel[1] = approach_s32(m.angleVel[1], 0, 0x40, 0x40)
    }

    m.faceAngle[1] = s16(m.faceAngle[1] + m.angleVel[1])
    m.faceAngle[2] = s16(20 * -m.angleVel[1])
}

export const update_flying_pitch = (m) => {
    let targetPitchVel = -s16(m.controller.stickY * (m.forwardVel / 5.0))

    if (targetPitchVel > 0) {
        if (m.angleVel[0] < 0) {
            m.angleVel[0] = s16(m.angleVel[0] + 0x40)
            if (m.angleVel[0] > 0x20) {
                m.angleVel[0] = 0x20
            }
        } else {
            m.angleVel[0] = approach_s32(m.angleVel[0], targetPitchVel, 0x20, 0x40)
        }
    } else if (targetPitchVel < 0) {
        if (m.angleVel[0] > 0) {
            m.angleVel[0] = s16(m.angleVel[0] - 0x40)
            if (m.angleVel[0] < -0x20) {
                m.angleVel[0] = -0x20
            }
        } else {
            m.angleVel[0] = approach_s32(m.angleVel[0], targetPitchVel, 0x40, 0x20)
        }
    } else {
        m.angleVel[0] = approach_s32(m.angleVel[0], 0, 0x40, 0x40)
    }
}

export const update_flying = (m) => {
    update_flying_pitch(m)
    update_flying_yaw(m)

    m.forwardVel -= 2.0 * (m.faceAngle[0] / 0x4000) + 0.1
    m.forwardVel -= 0.5 * (1.0 - coss(m.angleVel[1]))

    if (m.forwardVel < 0.0) {
        m.forwardVel = 0.0
    }

    if (m.forwardVel > 16.0) {
        m.faceAngle[0] = s16(m.faceAngle[0] + s16((m.forwardVel - 32.0) * 6.0))
    } else if (m.forwardVel > 4.0) {
        m.faceAngle[0] = s16(m.faceAngle[0] + (m.forwardVel - 32.0) * 10.0)
    } else {
        m.faceAngle[0] = s16(m.faceAngle[0] - 0x400)
    }

    m.faceAngle[0] = (m.faceAngle[0] + m.angleVel[0])

    if (m.faceAngle[0] > 0x2AAA) {
        m.faceAngle[0] = 0x2AAA
    }
    if (m.faceAngle[0] < -0x2AAA) {
        m.faceAngle[0] = -0x2AAA
    }

    m.vel[0] = m.forwardVel * coss(m.faceAngle[0]) * sins(m.faceAngle[1])
    m.vel[1] = m.forwardVel * sins(m.faceAngle[0])
    m.vel[2] = m.forwardVel * coss(m.faceAngle[0]) * coss(m.faceAngle[1])

    m.slideVelX = m.vel[0]
    m.slideVelZ = m.vel[2]
}

export const common_air_action_step = (m, landAction, animation, stepArg) => {
    let stepResult

    update_air_without_turn(m)

    stepResult = perform_air_step(m, stepArg)
    switch (stepResult) {
        case AIR_STEP_NONE:
            set_mario_animation(m, animation)
            break

        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                set_mario_action(m, landAction, 0)
            }
            break

        case AIR_STEP_HIT_WALL:
            set_mario_animation(m, animation)

            if (m.forwardVel > 16.0) {
                mario_bonk_reflection(m, 0)
                m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)

                if (m.wall != null) {
                    set_mario_action(m, ACT_AIR_HIT_WALL, 0)
                } else {
                    if (m.vel[1] > 0.0) {
                        m.vel[1] = 0.0
                    }

                    //! Hands-free holding. Bonking while no wall is referenced
                    // sets Mario's action to a non-holding action without
                    // dropping the object, causing the hands-free holding
                    // glitch. This can be achieved using an exposed ceiling,
                    // out of bounds, grazing the bottom of a wall while
                    // falling such that the final quarter step does not find a
                    // wall collision, or by rising into the top of a wall such
                    // that the final quarter step detects a ledge, but you are
                    // not able to ledge grab it.
                    if (m.forwardVel >= 38.0) {
                        m.particleFlags |= PARTICLE_VERTICAL_STAR
                        set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
                    } else {
                        if (m.forwardVel > 8.0) {
                            mario_set_forward_vel(m, -8.0)
                        }
                        return set_mario_action(m, ACT_SOFT_BONK, 0)
                    }
                }
            } else {
                mario_set_forward_vel(m, 0.0)
            }
            break

        case AIR_STEP_GRABBED_LEDGE:
            set_mario_animation(m, MARIO_ANIM_IDLE_ON_LEDGE)
            drop_and_set_mario_action(m, ACT_LEDGE_GRAB, 0)
            break

        case AIR_STEP_GRABBED_CEILING:
            set_mario_action(m, ACT_START_HANGING, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return stepResult
}

export const act_jump = (m) => {
    if (check_kick_or_dive_in_air(m)) {
        return true
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    common_air_action_step(m, ACT_JUMP_LAND, MARIO_ANIM_SINGLE_JUMP,
                           AIR_STEP_CHECK_LEDGE_GRAB | AIR_STEP_CHECK_HANG)
    return false
}

export const act_double_jump = (m) => {
    let animation = (m.vel[1] >= 0.0)
        ? MARIO_ANIM_DOUBLE_JUMP_RISE
        : MARIO_ANIM_DOUBLE_JUMP_FALL

    if (check_kick_or_dive_in_air(m)) {
        return true
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_HOOHOO)
    common_air_action_step(m, ACT_DOUBLE_JUMP_LAND, animation,
                           AIR_STEP_CHECK_LEDGE_GRAB | AIR_STEP_CHECK_HANG)
    return false
}

export const act_triple_jump = (m) => {
    if (gSpecialTripleJump) {
        return set_mario_action(m, ACT_SPECIAL_TRIPLE_JUMP, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)

    common_air_action_step(m, ACT_TRIPLE_JUMP_LAND, MARIO_ANIM_TRIPLE_JUMP, 0)
    play_flip_sounds(m, 2, 8, 20)
    return false
}

export const act_backflip = (m) => {
    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_YAH_WAH_HOO)
    common_air_action_step(m, ACT_BACKFLIP_LAND, MARIO_ANIM_BACKFLIP, 0)
    play_flip_sounds(m, 2, 3, 17)
    return false
}

export const act_freefall = (m) => {
    let animation

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    switch (m.actionArg) {
        case 0:
            animation = MARIO_ANIM_GENERAL_FALL
            break
        case 1:
            animation = MARIO_ANIM_FALL_FROM_SLIDE
            break
        case 2:
            animation = MARIO_ANIM_FALL_FROM_SLIDE_KICK
            break
    }

    common_air_action_step(m, ACT_FREEFALL_LAND, animation, AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_hold_jump = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_FREEFALL, 0)
    }

    if ((m.input & INPUT_B_PRESSED) && !(m.heldObj.rawData[oInteractionSubtype] & INT_SUBTYPE_HOLDABLE_NPC)) {
        return set_mario_action(m, ACT_AIR_THROW, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return drop_and_set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    common_air_action_step(m, ACT_HOLD_JUMP_LAND, MARIO_ANIM_JUMP_WITH_LIGHT_OBJ,
                           AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_hold_freefall = (m) => {
    let animation
    if (m.actionArg == 0) {
        animation = MARIO_ANIM_FALL_WITH_LIGHT_OBJ
    } else {
        animation = MARIO_ANIM_FALL_FROM_SLIDING_WITH_LIGHT_OBJ
    }

    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_FREEFALL, 0)
    }

    if ((m.input & INPUT_B_PRESSED) && !(m.heldObj.rawData[oInteractionSubtype] & INT_SUBTYPE_HOLDABLE_NPC)) {
        return set_mario_action(m, ACT_AIR_THROW, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return drop_and_set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    common_air_action_step(m, ACT_HOLD_FREEFALL_LAND, animation, AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_side_flip = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)

    if (common_air_action_step(m, ACT_SIDE_FLIP_LAND, MARIO_ANIM_SLIDEFLIP, AIR_STEP_CHECK_LEDGE_GRAB)
        != AIR_STEP_GRABBED_LEDGE) {
        m.marioObj.gfx.angle[1] = s16(m.marioObj.gfx.angle[1] + 0x8000)
    }

    if (m.marioObj.gfx.animInfo.animFrame == 6) {
        play_sound(SOUND_ACTION_SIDE_FLIP_UNK, m.marioObj.gfx.cameraToObject)
    }

    return false
}

export const act_wall_kick_air = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_jump_sound(m)
    common_air_action_step(m, ACT_JUMP_LAND, MARIO_ANIM_SLIDEJUMP, AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_long_jump = (m) => {
    let animation
    if (!m.marioObj.oMarioLongJumpIsSlow) {
        animation = MARIO_ANIM_FAST_LONGJUMP
    } else {
        animation = MARIO_ANIM_SLOW_LONGJUMP
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_YAHOO)

    if (m.floor.type == SURFACE_VERTICAL_WIND && m.actionState == 0) {
        play_sound(SOUND_MARIO_HERE_WE_GO, m.marioObj.gfx.cameraToObject)
        m.actionState = 1
    }

    common_air_action_step(m, ACT_LONG_JUMP_LAND, animation, AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_riding_shell_air = (m) => {
    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    set_mario_animation(m, MARIO_ANIM_JUMP_RIDING_SHELL)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_RIDING_SHELL_GROUND, 1)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    m.marioObj.gfx.pos[1] += 42.0
    return false
}

export const act_twirling = (m) => {
    let startTwirlYaw = m.twirlYaw
    let yawVelTarget

    if (m.input & INPUT_A_DOWN) {
        yawVelTarget = 0x2000
    } else {
        yawVelTarget = 0x1800
    }

    m.angleVel[1] = approach_s32(m.angleVel[1], yawVelTarget, 0x200, 0x200)
    m.twirlYaw += m.angleVel[1]

    set_mario_animation(m, m.actionArg == 0 ? MARIO_ANIM_START_TWIRL : MARIO_ANIM_TWIRL)
    if (is_anim_past_end(m)) {
        m.actionArg = 1
    }

    if (startTwirlYaw > m.twirlYaw) {
        play_sound(SOUND_ACTION_TWIRL, m.marioObj.gfx.cameraToObject)
    }

    update_lava_boost_or_twirling(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_TWIRL_LAND, 0)
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    m.marioObj.gfx.angle[1] = s16(m.marioObj.gfx.angle[1] + m.twirlYaw)
    return false
}

export const act_dive = (m) => {
    if (m.actionArg == 0) {
        play_mario_sound(m, SOUND_ACTION_THROW, SOUND_MARIO_HOOHOO)
    } else {
        play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    }

    set_mario_animation(m, MARIO_ANIM_DIVE)
    if (mario_check_object_grab(m)) {
        mario_grab_used_object(m)
        m.marioBodyState.grabPos = GRAB_POS_LIGHT_OBJ
        if (m.action != ACT_DIVE) {
            return true
        }
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            if (m.vel[1] < 0.0 && m.faceAngle[0] > -0x2AAA) {
                m.faceAngle[0] = (m.faceAngle[0] - 0x200)
                if (m.faceAngle[0] < -0x2AAA) {
                    m.faceAngle[0] = -0x2AAA
                }
            }
            m.marioObj.gfx.angle[0] = -m.faceAngle[0]
            break

        case AIR_STEP_LANDED:
            if (should_get_stuck_in_ground(m) && m.faceAngle[0] == -0x2AAA) {
                play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
                m.particleFlags |= PARTICLE_MIST_CIRCLE
                drop_and_set_mario_action(m, ACT_HEAD_STUCK_IN_GROUND, 0)
            } else if (!check_fall_damage(m, ACT_HARD_FORWARD_GROUND_KB)) {
                if (m.heldObj == null) {
                    set_mario_action(m, ACT_DIVE_SLIDE, 0)
                } else {
                    set_mario_action(m, ACT_DIVE_PICKING_UP, 0)
                }
            }
            m.faceAngle[0] = 0
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 1)
            m.faceAngle[0] = 0

            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            m.particleFlags |= PARTICLE_VERTICAL_STAR
            drop_and_set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_air_throw = (m) => {
    if (++(m.actionTimer) == 4) {
        mario_throw_held_object(m)
    }

    play_sound_if_no_flag(m, SOUND_MARIO_WAH2, MARIO_MARIO_SOUND_PLAYED)
    set_mario_animation(m, MARIO_ANIM_THROW_LIGHT_OBJECT)
    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                m.action = ACT_AIR_THROW_LAND
            }
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_water_jump = (m) => {
    if (m.forwardVel < 15.0) {
        mario_set_forward_vel(m, 15.0)
    }

    play_mario_sound(m, SOUND_ACTION_UNKNOWN432, 0)
    set_mario_animation(m, MARIO_ANIM_SINGLE_JUMP)

    switch (perform_air_step(m, AIR_STEP_CHECK_LEDGE_GRAB)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_JUMP_LAND, 0)
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 15.0)
            break

        case AIR_STEP_GRABBED_LEDGE:
            set_mario_animation(m, MARIO_ANIM_IDLE_ON_LEDGE)
            set_mario_action(m, ACT_LEDGE_GRAB, 0)
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_hold_water_jump = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.forwardVel < 15.0) {
        mario_set_forward_vel(m, 15.0)
    }

    play_mario_sound(m, SOUND_ACTION_UNKNOWN432, 0)
    set_mario_animation(m, MARIO_ANIM_JUMP_WITH_LIGHT_OBJ)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_HOLD_JUMP_LAND, 0)
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 15.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_steep_jump = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    mario_set_forward_vel(m, 0.98 * m.forwardVel)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                m.faceAngle[0] = 0
                set_mario_action(m, m.forwardVel < 0.0 ? ACT_BEGIN_SLIDING : ACT_JUMP_LAND, 0)
            }
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    set_mario_animation(m, MARIO_ANIM_SINGLE_JUMP)
    m.marioObj.gfx.angle[1] = m.marioObj.rawData[oMarioSteepJumpYaw]
    return false
}

export const act_ground_pound = (m) => {
    let stepResult
    let yOffset

    play_sound_if_no_flag(m, SOUND_ACTION_THROW, MARIO_ACTION_SOUND_PLAYED)

    if (m.actionState == 0) {
        if (m.actionTimer < 10) {
            yOffset = 20 - 2 * m.actionTimer
            if (m.pos[1] + yOffset + 160.0 < m.ceilHeight) {
                m.pos[1] += yOffset
                m.peakHeight = m.pos[1]
                vec3f_copy(m.marioObj.gfx.pos, m.pos)
            }
        }

        m.vel[1] = -50.0
        mario_set_forward_vel(m, 0.0)

        set_mario_animation(m, m.actionArg == 0 ? MARIO_ANIM_START_GROUND_POUND
                                                 : MARIO_ANIM_TRIPLE_JUMP_GROUND_POUND)
        if (m.actionTimer == 0) {
            play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
        }

        m.actionTimer++
        if (m.actionTimer >= m.marioObj.gfx.animInfo.curAnim.unk08 + 4) {
            play_sound(SOUND_MARIO_GROUND_POUND_WAH, m.marioObj.gfx.cameraToObject)
            m.actionState = 1
        }
    } else {
        set_mario_animation(m, MARIO_ANIM_GROUND_POUND)

        stepResult = perform_air_step(m, 0)
        if (stepResult == AIR_STEP_LANDED) {
            if (should_get_stuck_in_ground(m)) {
                play_sound(SOUND_MARIO_OOOF2, m.marioObj.gfx.cameraToObject)
                m.particleFlags |= PARTICLE_MIST_CIRCLE
                set_mario_action(m, ACT_BUTT_STUCK_IN_GROUND, 0)
            } else {
                play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_HEAVY_LANDING)
                if (!check_fall_damage(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                    m.particleFlags |= PARTICLE_MIST_CIRCLE | PARTICLE_HORIZONTAL_STAR
                    set_mario_action(m, ACT_GROUND_POUND_LAND, 0)
                }
            }
            Camera.set_camera_shake_from_hit(CAMERA.SHAKE_GROUND_POUND)
        } else if (stepResult == AIR_STEP_HIT_WALL) {
            mario_set_forward_vel(m, -16.0)
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            m.particleFlags |= PARTICLE_VERTICAL_STAR
            set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
        }
    }

    return false
}

export const act_burning_jump = (m) => {
    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, m.actionArg == 0 ? 0 : -1)
    mario_set_forward_vel(m, m.forwardVel)

    if (perform_air_step(m, 0) == AIR_STEP_LANDED) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
        set_mario_action(m, ACT_BURNING_GROUND, 0)
    }

    set_mario_animation(m, m.actionArg == 0 ? MARIO_ANIM_SINGLE_JUMP : MARIO_ANIM_FIRE_LAVA_BURN)
    m.particleFlags |= PARTICLE_FIRE
    play_sound(SOUND_MOVING_LAVA_BURN, m.marioObj.gfx.cameraToObject)

    m.marioObj.rawData[oMarioBurnTimer] += 3

    m.health -= 10
    if (m.health < 0x100) {
        m.health = 0xFF
    }
    return false
}

export const act_burning_fall = (m) => {
    mario_set_forward_vel(m, m.forwardVel)

    if (perform_air_step(m, 0) == AIR_STEP_LANDED) {
        play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
        set_mario_action(m, ACT_BURNING_GROUND, 0)
    }

    set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
    m.particleFlags |= PARTICLE_FIRE
    m.marioObj.rawData[oMarioBurnTimer] += 3

    m.health -= 10
    if (m.health < 0x100) {
        m.health = 0xFF
    }
    return false
}

export const act_crazy_box_bounce = (m) => {
    let minSpeed

    if (m.actionTimer == 0) {
        switch (m.actionArg) {
            case 0:
                m.vel[1] = 45.0
                minSpeed = 32.0
                break

            case 1:
                m.vel[1] = 60.0
                minSpeed = 36.0
                break

            case 2:
                m.vel[1] = 100.0
                minSpeed = 48.0
                break
        }

        play_sound(minSpeed < 40.0 ? SOUND_GENERAL_BOING1 : SOUND_GENERAL_BOING2,
                   m.marioObj.gfx.cameraToObject)

        if (m.forwardVel < minSpeed) {
            mario_set_forward_vel(m, minSpeed)
        }

        m.actionTimer = 1
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)
    set_mario_animation(m, MARIO_ANIM_DIVE)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (m.actionArg < 2) {
                set_mario_action(m, ACT_CRAZY_BOX_BOUNCE, m.actionArg + 1)
            } else {
                m.heldObj.rawData[oInteractStatus] = INT_STATUS_STOP_RIDING
                m.heldObj = null
                set_mario_action(m, ACT_STOMACH_SLIDE, 0)
            }
            m.particleFlags |= PARTICLE_MIST_CIRCLE
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    m.marioObj.gfx.angle[0] = atan2s(m.forwardVel, -m.vel[1])
    return false
}

export const common_air_knockback_step = (m, landAction, hardFallAction, animation, speed) => {
    let stepResult

    mario_set_forward_vel(m, speed)

    stepResult = perform_air_step(m, 0)
    switch (stepResult) {
        case AIR_STEP_NONE:
            set_mario_animation(m, animation)
            break

        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, hardFallAction)) {
                if (m.action == ACT_THROWN_FORWARD || m.action == ACT_THROWN_BACKWARD) {
                    set_mario_action(m, landAction, m.hurtCounter)
                } else {
                    set_mario_action(m, landAction, m.actionArg)
                }
            }
            break

        case AIR_STEP_HIT_WALL:
            set_mario_animation(m, MARIO_ANIM_BACKWARD_AIR_KB)
            mario_bonk_reflection(m, 0)

            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            mario_set_forward_vel(m, -speed)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return stepResult
}

export const check_wall_kick = (m) => {
    if ((m.input & INPUT_A_PRESSED) && m.wallKickTimer != 0 && m.prevAction == ACT_AIR_HIT_WALL) {
        m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
        return set_mario_action(m, ACT_WALL_KICK_AIR, 0)
    }

    return false
}

export const act_backward_air_kb = (m) => {
    if (check_wall_kick(m)) {
        return true
    }

    play_knockback_sound(m)
    common_air_knockback_step(m, ACT_BACKWARD_GROUND_KB, ACT_HARD_BACKWARD_GROUND_KB, 0x0002, -16.0)
    return false
}

export const act_forward_air_kb = (m) => {
    if (check_wall_kick(m)) {
        return true
    }

    play_knockback_sound(m)
    common_air_knockback_step(m, ACT_FORWARD_GROUND_KB, ACT_HARD_FORWARD_GROUND_KB, 0x002D, 16.0)
    return false
}

export const act_hard_backward_air_kb = (m) => {
    play_knockback_sound(m)
    common_air_knockback_step(m, ACT_HARD_BACKWARD_GROUND_KB, ACT_HARD_BACKWARD_GROUND_KB, 0x0002,
                              -16.0)
    return false
}

export const act_hard_forward_air_kb = (m) => {
    play_knockback_sound(m)
    common_air_knockback_step(m, ACT_HARD_FORWARD_GROUND_KB, ACT_HARD_FORWARD_GROUND_KB, 0x002D, 16.0)
    return false
}

export const act_thrown_backward = (m) => {
    let landAction
    if (m.actionArg != 0) {
        landAction = ACT_HARD_BACKWARD_GROUND_KB
    } else {
        landAction = ACT_BACKWARD_GROUND_KB
    }

    play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_MARIO_SOUND_PLAYED)

    common_air_knockback_step(m, landAction, ACT_HARD_BACKWARD_GROUND_KB, 0x0002, m.forwardVel)

    m.forwardVel *= 0.98
    return false
}

export const act_thrown_forward = (m) => {
    let pitch

    let landAction
    if (m.actionArg != 0) {
        landAction = ACT_HARD_FORWARD_GROUND_KB
    } else {
        landAction = ACT_FORWARD_GROUND_KB
    }

    play_sound_if_no_flag(m, SOUND_MARIO_WAAAOOOW, MARIO_MARIO_SOUND_PLAYED)

    if (common_air_knockback_step(m, landAction, ACT_HARD_FORWARD_GROUND_KB, 0x002D, m.forwardVel)
        == AIR_STEP_NONE) {
        pitch = atan2s(m.forwardVel, -m.vel[1])
        if (pitch > 0x1800) {
            pitch = 0x1800
        }

        m.marioObj.gfx.angle[0] = s16(pitch + 0x1800)
    }

    m.forwardVel *= 0.98
    return false
}

export const act_soft_bonk = (m) => {
    if (check_wall_kick(m)) {
        return true
    }

    play_knockback_sound(m)

    common_air_knockback_step(m, ACT_FREEFALL_LAND, ACT_HARD_BACKWARD_GROUND_KB, 0x0056, m.forwardVel)
    return false
}

export const act_getting_blown = (m) => {
    if (m.actionState == 0) {
        if (m.forwardVel > -60.0) {
            m.forwardVel -= 6.0
        } else {
            m.actionState = 1
        }
    } else {
        if (m.forwardVel < -16.0) {
            m.forwardVel += 0.8
        }

        if (m.vel[1] < 0.0 && m.unkC4 < 4.0) {
            m.unkC4 += 0.05
        }
    }

    if (++(m.actionTimer) == 20) {
        mario_blow_off_cap(m, 50.0)
    }

    mario_set_forward_vel(m, m.forwardVel)
    set_mario_animation(m, MARIO_ANIM_BACKWARD_AIR_KB)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_HARD_BACKWARD_AIR_KB, 0)
            break

        case AIR_STEP_HIT_WALL:
            set_mario_animation(m, MARIO_ANIM_AIR_FORWARD_KB)
            mario_bonk_reflection(m, 0)

            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            mario_set_forward_vel(m, -m.forwardVel)
            break
    }

    return false
}

export const act_air_hit_wall = (m) => {
    if (m.heldObj != null) {
        mario_drop_held_object(m)
    }

    if (++(m.actionTimer) <= 2) {
        if (m.input & INPUT_A_PRESSED) {
            m.vel[1] = 52.0
            m.faceAngle[1] = s16(m.faceAngle[1] + 0x8000)
            return set_mario_action(m, ACT_WALL_KICK_AIR, 0)
        }
    } else if (m.forwardVel >= 38.0) {
        m.wallKickTimer = 5
        if (m.vel[1] > 0.0) {
            m.vel[1] = 0.0
        }

        m.particleFlags |= PARTICLE_VERTICAL_STAR
        return set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
    } else {
        m.wallKickTimer = 5
        if (m.vel[1] > 0.0) {
            m.vel[1] = 0.0
        }

        if (m.forwardVel > 8.0) {
            mario_set_forward_vel(m, -8.0)
        }
        return set_mario_action(m, ACT_SOFT_BONK, 0)
    }

    //! Missing return statement. The returned value is the result of the call
    // to set_mario_animation. In practice, this value is nonzero.
    // This results in this action "cancelling" into itself. It is supposed to
    // execute on two frames, but instead it executes twice on the same frame.
    // This results in firsties only being possible for a single frame, instead
    // of two.
    return set_mario_animation(m, MARIO_ANIM_START_WALLKICK)
}

export const act_forward_rollout = (m) => {
    if (m.actionState == 0) {
        m.vel[1] = 30.0
        m.actionState = 1
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            if (m.actionState == 1) {
                if (set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING) == 4) {
                    play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
                }
            } else {
                set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
            }
            break

        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_FREEFALL_LAND_STOP, 0)
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    if (m.actionState == 1 && is_anim_past_end(m)) {
        m.actionState = 2
    }
    return false
}

export const act_backward_rollout = (m) => {
    if (m.actionState == 0) {
        m.vel[1] = 30.0
        m.actionState = 1
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, 0)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            if (m.actionState == 1) {
                if (set_mario_animation(m, MARIO_ANIM_BACKWARD_SPINNING) == 4) {
                    play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
                }
            } else {
                set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
            }
            break

        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_FREEFALL_LAND_STOP, 0)
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    if (m.actionState == 1 && m.marioObj.gfx.animInfo.animFrame == 2) {
        m.actionState = 2
    }
    return false
}

export const act_butt_slide_air = (m) => {
    if (++(m.actionTimer) > 30 && m.pos[1] - m.floorHeight > 500.0) {
        return set_mario_action(m, ACT_FREEFALL, 1)
    }

    update_air_with_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (m.actionState == 0 && m.vel[1] < 0.0 && m.floor.normal.y >= 0.9848077) {
                m.vel[1] = -m.vel[1] / 2.0
                m.actionState = 1
            } else {
                set_mario_action(m, ACT_BUTT_SLIDE, 0)
            }
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }
            m.particleFlags |= PARTICLE_VERTICAL_STAR
            set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    set_mario_animation(m, MARIO_ANIM_SLIDE)
    return false
}

export const act_hold_butt_slide_air = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_HOLD_FREEFALL, 1)
    }

    if (++m.actionTimer > 30 && m.pos[1] - m.floorHeight > 500.0) {
        return set_mario_action(m, ACT_HOLD_FREEFALL, 1)
    }

    update_air_with_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (m.actionState == 0 && m.vel[1] < 0.0 && m.floor.normal.y >= 0.9848077) {
                m.vel[1] = -m.vel[1] / 2.0
                m.actionState = 1
            } else {
                set_mario_action(m, ACT_HOLD_BUTT_SLIDE, 0)
            }
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            mario_drop_held_object(m)
            m.particleFlags |= PARTICLE_VERTICAL_STAR
            set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    set_mario_animation(m, MARIO_ANIM_SLIDING_ON_BOTTOM_WITH_LIGHT_OBJ)
    return false
}

export const act_lava_boost = (m) => {
    play_sound_if_no_flag(m, SOUND_MARIO_ON_FIRE, MARIO_MARIO_SOUND_PLAYED)

    if (!(m.input & INPUT_NONZERO_ANALOG)) {
        m.forwardVel = approach_f32(m.forwardVel, 0.0, 0.35, 0.35)
    }

    update_lava_boost_or_twirling(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (m.floor.type == SURFACE_BURNING) {
                m.actionState = 0
                if (!(m.flags & MARIO_METAL_CAP)) {
                    m.hurtCounter += (m.flags & MARIO_CAP_ON_HEAD) ? 12 : 18
                }
                m.vel[1] = 84.0
                play_sound(SOUND_MARIO_ON_FIRE, m.marioObj.gfx.cameraToObject)
            } else {
                //play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
                if (m.actionState < 2 && m.vel[1] < 0.0) {
                    m.vel[1] = -m.vel[1] * 0.4
                    mario_set_forward_vel(m, m.forwardVel * 0.5)
                    m.actionState += 1
                } else {
                    set_mario_action(m, ACT_LAVA_BOOST_LAND, 0)
                }
            }
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    set_mario_animation(m, MARIO_ANIM_FIRE_LAVA_BURN)
    if ((m.area.terrainType & TERRAIN_MASK) != TERRAIN_SNOW && !(m.flags & MARIO_METAL_CAP)
        && m.vel[1] > 0.0) {
        m.particleFlags |= PARTICLE_FIRE
        if (m.actionState == 0) {
            play_sound(SOUND_MOVING_LAVA_BURN, m.marioObj.gfx.cameraToObject)
        }
    }

    if (m.health < 0x100) {
        level_trigger_warp(m, WARP_OP_DEATH)
    }

    m.marioBodyState.eyeState = MARIO_EYES_DEAD
    return false
}

export const act_slide_kick = (m) => {
    if (m.actionState == 0 && m.actionTimer == 0) {
        play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_HOOHOO)
        set_mario_animation(m, MARIO_ANIM_SLIDE_KICK)
    }

    if (++(m.actionTimer) > 30 && m.pos[1] - m.floorHeight > 500.0) {
        return set_mario_action(m, ACT_FREEFALL, 2)
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            if (m.actionState == 0) {
                m.marioObj.gfx.angle[0] = atan2s(m.forwardVel, -m.vel[1])
                if (m.marioObj.gfx.angle[0] > 0x1800) {
                    m.marioObj.gfx.angle[0] = 0x1800
                }
            }
            break

        case AIR_STEP_LANDED:
            if (m.actionState == 0 && m.vel[1] < 0.0) {
                m.vel[1] = -m.vel[1] / 2.0
                m.actionState = 1
                m.actionTimer = 0
            } else {
                set_mario_action(m, ACT_SLIDE_KICK_SLIDE, 0)
            }
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            m.particleFlags |= PARTICLE_VERTICAL_STAR

            set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_jump_kick = (m) => {
    let animFrame

    if (m.actionState == 0) {
        play_sound_if_no_flag(m, SOUND_MARIO_PUNCH_HOO, MARIO_ACTION_SOUND_PLAYED)
        m.marioObj.gfx.animInfo.animID = -1
        set_mario_animation(m, MARIO_ANIM_AIR_KICK)
        m.actionState = 1
    }

    animFrame = m.marioObj.gfx.animInfo.animFrame
    if (animFrame == 0) {
        m.marioBodyState.punchState = (2 << 6) | 6
    }
    if (animFrame >= 0 && animFrame < 8) {
        m.flags |= MARIO_KICKING
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                set_mario_action(m, ACT_FREEFALL_LAND, 0)
            }
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, 0.0)
            break
    }

    return false
}

export const act_shot_from_cannon = (m) => {
    if (m.area.camera.mode != CAMERA.CAMERA_MODE_BEHIND_MARIO) {
        m.statusForCamera.cameraEvent = CAMERA.CAM_EVENT_SHOT_FROM_CANNON
    }

    mario_set_forward_vel(m, m.forwardVel)

    play_sound_if_no_flag(m, SOUND_MARIO_YAHOO, MARIO_MARIO_SOUND_PLAYED)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            set_mario_animation(m, MARIO_ANIM_AIRBORNE_ON_STOMACH)
            m.faceAngle[0] = atan2s(m.forwardVel, m.vel[1])
            m.marioObj.gfx.angle[0] = -m.faceAngle[0]
            break

        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_DIVE_SLIDE, 0)
            m.faceAngle[0] = 0
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, -16.0)

            m.faceAngle[0] = 0
            if (m.vel[1] > 0.0) {
                m.vel[1] = 0.0
            }

            m.particleFlags |= PARTICLE_VERTICAL_STAR
            set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    if ((m.flags & MARIO_WING_CAP) && m.vel[1] < 0.0) {
        set_mario_action(m, ACT_FLYING, 0)
    }

    if ((m.forwardVel -= 0.05) < 10.0) {
        mario_set_forward_vel(m, 10.0)
    }

    if (m.vel[1] > 0.0) {
        m.particleFlags |= PARTICLE_DUST
    }
    return false
}

export const act_flying = (m) => {
    let startPitch = m.faceAngle[0]

    if (m.input & INPUT_Z_PRESSED) {
        if (m.area.camera.mode == CAMERA.CAMERA_MODE_BEHIND_MARIO) {
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
        }
        return set_mario_action(m, ACT_GROUND_POUND, 1)
    }

    if (!(m.flags & MARIO_WING_CAP)) {
        if (m.area.camera.mode == CAMERA.CAMERA_MODE_BEHIND_MARIO) {
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
        }
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.area.camera.mode != CAMERA.CAMERA_MODE_BEHIND_MARIO) {
        Camera.set_camera_mode(m.area.camera, CAMERA.CAMERA_MODE_BEHIND_MARIO, 1)
    }

    if (m.actionState == 0) {
        if (m.actionArg == 0) {
            set_mario_animation(m, MARIO_ANIM_FLY_FROM_CANNON)
        } else {
            set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING_FLIP)
            if (m.marioObj.gfx.animInfo.animFrame == 1) {
                play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
            }
        }

        if (is_anim_at_end(m)) {
            if (m.actionArg == 2) {
                load_level_init_text(0)
                m.actionArg = 1
            }

            set_mario_animation(m, MARIO_ANIM_WING_CAP_FLY)
            m.actionState = 1
        }
    }

    update_flying(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_NONE:
            m.marioObj.gfx.angle[0] = -m.faceAngle[0]
            m.marioObj.gfx.angle[2] = m.faceAngle[2]
            m.actionTimer = 0
            break

        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_DIVE_SLIDE, 0)

            set_mario_animation(m, MARIO_ANIM_DIVE)
            set_anim_to_frame(m, 7)

            m.faceAngle[0] = 0
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            break

        case AIR_STEP_HIT_WALL:
            if (m.wall != null) {
                mario_set_forward_vel(m, -16.0)
                m.faceAngle[0] = 0

                if (m.vel[1] > 0.0) {
                    m.vel[1] = 0.0
                }

                play_sound((m.flags & MARIO_METAL_CAP) ? SOUND_ACTION_METAL_BONK
                                                       : SOUND_ACTION_BONK,
                           m.marioObj.gfx.cameraToObject)

                m.particleFlags |= PARTICLE_VERTICAL_STAR
                set_mario_action(m, ACT_BACKWARD_AIR_KB, 0)
                Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
            } else {
                if (m.actionTimer++ == 0) {
                    play_sound(SOUND_ACTION_HIT, m.marioObj.gfx.cameraToObject)
                }

                if (m.actionTimer == 30) {
                    m.actionTimer = 0
                }

                m.faceAngle[0] = s16(m.faceAngle[0] - 0x200)
                if (m.faceAngle[0] < -0x2AAA) {
                    m.faceAngle[0] = -0x2AAA
                }

                m.marioObj.gfx.angle[0] = -m.faceAngle[0]
                m.marioObj.gfx.angle[2] = m.faceAngle[2]
            }
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    if (m.faceAngle[0] > 0x800 && m.forwardVel >= 48.0) {
        m.particleFlags |= PARTICLE_DUST
    }

    if (startPitch <= 0 && m.faceAngle[0] > 0 && m.forwardVel >= 48.0) {
        play_sound(SOUND_ACTION_FLYING_FAST, m.marioObj.gfx.cameraToObject)
        play_sound(SOUND_MARIO_YAHOO_WAHA_YIPPEE + ((gAudioRandom % 5) << 16),
                   m.marioObj.gfx.cameraToObject)
    }

    play_sound(SOUND_MOVING_FLYING, m.marioObj.gfx.cameraToObject)
    adjust_sound_for_speed(m)
    return false
}

export const act_riding_hoot = (m) => {
    if (!(m.input & INPUT_A_DOWN) || (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_UNK7)) {
        m.usedObj.rawData[oInteractStatus] = 0
        m.usedObj.rawData[oHootMarioReleaseTime] = gGlobalTimer

        play_sound_if_no_flag(m, SOUND_MARIO_UH, MARIO_MARIO_SOUND_PLAYED)
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    m.pos[0] = m.usedObj.rawData[oPosX]
    m.pos[1] = m.usedObj.rawData[oPosY] - 92.5
    m.pos[2] = m.usedObj.rawData[oPosZ]

    m.faceAngle[1] = s16(0x4000 - m.usedObj.rawData[oMoveAngleYaw])

    if (m.actionState == 0) {
        set_mario_animation(m, MARIO_ANIM_HANG_ON_CEILING)
        if (is_anim_at_end(m)) {
            set_mario_animation(m, MARIO_ANIM_HANG_ON_OWL)
            m.actionState = 1
        }
    }

    vec3f_set(m.vel, 0.0, 0.0, 0.0)
    vec3f_set(m.marioObj.gfx.pos, m.pos[0], m.pos[1], m.pos[2])
    vec3s_set(m.marioObj.gfx.angle, 0, s16(0x4000 - m.faceAngle[1]), 0)
    return false
}

export const act_flying_triple_jump = (m) => {
    if (m.input & (INPUT_B_PRESSED | INPUT_Z_PRESSED)) {
        if (m.area.camera.mode == CAMERA.CAMERA_MODE_BEHIND_MARIO) {
            Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
        }
        if (m.input & INPUT_B_PRESSED) {
            return set_mario_action(m, ACT_DIVE, 0)
        } else {
            return set_mario_action(m, ACT_GROUND_POUND, 0)
        }
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_YAHOO)
    if (m.actionState == 0) {
        set_mario_animation(m, MARIO_ANIM_TRIPLE_JUMP_FLY)

        if (m.marioObj.gfx.animInfo.animFrame == 7) {
            play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
        }

        if (is_anim_past_end(m)) {
            set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING)
            m.actionState = 1
        }
    }

    if (m.actionState == 1 && m.marioObj.gfx.animInfo.animFrame == 1) {
        play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
    }

    if (m.vel[1] < 4.0) {
        if (m.area.camera.mode != CAMERA.CAMERA_MODE_BEHIND_MARIO) {
            Camera.set_camera_mode(m.area.camera, CAMERA.CAMERA_MODE_BEHIND_MARIO, 1)
        }

        if (m.forwardVel < 32.0) {
            mario_set_forward_vel(m, 32.0)
        }

        set_mario_action(m, ACT_FLYING, 1)
    }

    if (m.actionTimer++ == 10 && m.area.camera.mode != CAMERA.CAMERA_MODE_BEHIND_MARIO) {
        Camera.set_camera_mode(m.area.camera, CAMERA.CAMERA_MODE_BEHIND_MARIO, 1)
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (!check_fall_damage_or_get_stuck(m, ACT_HARD_BACKWARD_GROUND_KB)) {
                set_mario_action(m, ACT_DOUBLE_JUMP_LAND, 0)
            }
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 0)
            break

        case AIR_STEP_HIT_LAVA_WALL:
            lava_boost_on_wall(m)
            break
    }

    return false
}

export const act_top_of_pole_jump = (m) => {
    play_mario_jump_sound(m)
    common_air_action_step(m, ACT_FREEFALL_LAND, MARIO_ANIM_HANDSTAND_JUMP, AIR_STEP_CHECK_LEDGE_GRAB)
    return false
}

export const act_vertical_wind = (m) => {
    let intendedDYaw = s16(m.intendedYaw - m.faceAngle[1])
    let intendedMag = m.intendedMag / 32.0

    play_sound_if_no_flag(m, SOUND_MARIO_HERE_WE_GO, MARIO_MARIO_SOUND_PLAYED)
    if (m.actionState == 0) {
        set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING_FLIP)
        if (m.marioObj.gfx.animInfo.animFrame == 1) {
            play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
        }

        if (is_anim_past_end(m)) {
            m.actionState = 1
        }
    } else {
        set_mario_animation(m, MARIO_ANIM_AIRBORNE_ON_STOMACH)
    }

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            set_mario_action(m, ACT_DIVE_SLIDE, 0)
            break

        case AIR_STEP_HIT_WALL:
            mario_set_forward_vel(m, -16.0)
            break
    }

    m.marioObj.gfx.angle[0] = s16(6144.0 * intendedMag * coss(intendedDYaw))
    m.marioObj.gfx.angle[2] = s16(-4096.0 * intendedMag * sins(intendedDYaw))
    return false
}

export const act_special_triple_jump = (m) => {
    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_DIVE, 0)
    }

    if (m.input & INPUT_Z_PRESSED) {
        return set_mario_action(m, ACT_GROUND_POUND, 0)
    }

    play_mario_sound(m, SOUND_ACTION_TERRAIN_JUMP, SOUND_MARIO_YAHOO)

    update_air_without_turn(m)

    switch (perform_air_step(m, 0)) {
        case AIR_STEP_LANDED:
            if (m.actionState++ == 0) {
                m.vel[1] = 42.0
            } else {
                set_mario_action(m, ACT_FREEFALL_LAND_STOP, 0)
            }
            play_mario_landing_sound(m, SOUND_ACTION_TERRAIN_LANDING)
            break

        case AIR_STEP_HIT_WALL:
            mario_bonk_reflection(m, 1)
            break
    }

    if (m.actionState == 0 || m.vel[1] > 0.0) {
        if (set_mario_animation(m, MARIO_ANIM_FORWARD_SPINNING) == 0) {
            play_sound(SOUND_ACTION_SPIN, m.marioObj.gfx.cameraToObject)
        }
    } else {
        set_mario_animation(m, MARIO_ANIM_GENERAL_FALL)
    }

    m.particleFlags |= PARTICLE_SPARKLES
    return false
}

export const check_common_airborne_cancels = (m) => {
    if (m.pos[1] < m.waterLevel - 100) {
        return set_water_plunge_action(m)
    }

    if (m.input & INPUT_SQUISHED) {
        return drop_and_set_mario_action(m, ACT_SQUISHED, 0)
    }

    if (m.floor.type == SURFACE_VERTICAL_WIND && (m.action & ACT_FLAG_ALLOW_VERTICAL_WIND_ACTION)) {
        return drop_and_set_mario_action(m, ACT_VERTICAL_WIND, 0)
    }

    m.quicksandDepth = 0.0
    return false
}

export const mario_execute_airborne_action = (m) => {
    let cancel

    if (check_common_airborne_cancels(m)) {
        return true
    }

    play_far_fall_sound(m)

    switch (m.action) {
        case ACT_JUMP:                 cancel = act_jump(m);                 break
        case ACT_DOUBLE_JUMP:          cancel = act_double_jump(m);          break
        case ACT_FREEFALL:             cancel = act_freefall(m);             break
        case ACT_HOLD_JUMP:            cancel = act_hold_jump(m);            break
        case ACT_HOLD_FREEFALL:        cancel = act_hold_freefall(m);        break
        case ACT_SIDE_FLIP:            cancel = act_side_flip(m);            break
        case ACT_WALL_KICK_AIR:        cancel = act_wall_kick_air(m);        break
        case ACT_TWIRLING:             cancel = act_twirling(m);             break
        case ACT_WATER_JUMP:           cancel = act_water_jump(m);           break
        case ACT_HOLD_WATER_JUMP:      cancel = act_hold_water_jump(m);      break
        case ACT_STEEP_JUMP:           cancel = act_steep_jump(m);           break
        case ACT_BURNING_JUMP:         cancel = act_burning_jump(m);         break
        case ACT_BURNING_FALL:         cancel = act_burning_fall(m);         break
        case ACT_TRIPLE_JUMP:          cancel = act_triple_jump(m);          break
        case ACT_BACKFLIP:             cancel = act_backflip(m);             break
        case ACT_LONG_JUMP:            cancel = act_long_jump(m);            break
        case ACT_RIDING_SHELL_JUMP:
        case ACT_RIDING_SHELL_FALL:    cancel = act_riding_shell_air(m);     break
        case ACT_DIVE:                 cancel = act_dive(m);                 break
        case ACT_AIR_THROW:            cancel = act_air_throw(m);            break
        case ACT_BACKWARD_AIR_KB:      cancel = act_backward_air_kb(m);      break
        case ACT_FORWARD_AIR_KB:       cancel = act_forward_air_kb(m);       break
        case ACT_HARD_FORWARD_AIR_KB:  cancel = act_hard_forward_air_kb(m);  break
        case ACT_HARD_BACKWARD_AIR_KB: cancel = act_hard_backward_air_kb(m); break
        case ACT_SOFT_BONK:            cancel = act_soft_bonk(m);            break
        case ACT_AIR_HIT_WALL:         cancel = act_air_hit_wall(m);         break
        case ACT_FORWARD_ROLLOUT:      cancel = act_forward_rollout(m);      break
        case ACT_SHOT_FROM_CANNON:     cancel = act_shot_from_cannon(m);     break
        case ACT_BUTT_SLIDE_AIR:       cancel = act_butt_slide_air(m);       break
        case ACT_HOLD_BUTT_SLIDE_AIR:  cancel = act_hold_butt_slide_air(m);  break
        case ACT_LAVA_BOOST:           cancel = act_lava_boost(m);           break
        case ACT_GETTING_BLOWN:        cancel = act_getting_blown(m);        break
        case ACT_BACKWARD_ROLLOUT:     cancel = act_backward_rollout(m);     break
        case ACT_CRAZY_BOX_BOUNCE:     cancel = act_crazy_box_bounce(m);     break
        case ACT_SPECIAL_TRIPLE_JUMP:  cancel = act_special_triple_jump(m);  break
        case ACT_GROUND_POUND:         cancel = act_ground_pound(m);         break
        case ACT_THROWN_FORWARD:       cancel = act_thrown_forward(m);       break
        case ACT_THROWN_BACKWARD:      cancel = act_thrown_backward(m);      break
        case ACT_FLYING_TRIPLE_JUMP:   cancel = act_flying_triple_jump(m);   break
        case ACT_SLIDE_KICK:           cancel = act_slide_kick(m);           break
        case ACT_JUMP_KICK:            cancel = act_jump_kick(m);            break
        case ACT_FLYING:               cancel = act_flying(m);               break
        case ACT_RIDING_HOOT:          cancel = act_riding_hoot(m);          break
        case ACT_TOP_OF_POLE_JUMP:     cancel = act_top_of_pole_jump(m);     break
        case ACT_VERTICAL_WIND:        cancel = act_vertical_wind(m);        break
    }

    return cancel
}
