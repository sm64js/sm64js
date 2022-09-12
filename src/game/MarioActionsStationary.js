import * as _Linker from "./Linker"

import {
    check_common_action_exits, check_common_hold_action_exits, drop_and_set_mario_action,
    is_anim_at_end, is_anim_past_end, set_jump_from_landing, set_jumping_action, set_mario_action,
    set_mario_animation, set_water_plunge_action, update_mario_sound_and_camera, ACT_BUTT_SLIDE,
} from "./Mario"

import {
    stationary_ground_step
} from "./MarioStep"

import {
    mario_throw_held_object
} from "./Interaction"

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

    oUnk1A8, oUnk94, oUnkBC, oUnkC0
} from "../include/object_constants"

import {
    ACT_AIR_THROW_LAND, ACT_BACKFLIP, ACT_BACKFLIP_LAND_STOP, ACT_BEGIN_SLIDING, ACT_BRAKING_STOP,
    ACT_BUTT_SLIDE_STOP, ACT_COUGHING, ACT_CRAWLING, ACT_CRAZY_BOX_BOUNCE, ACT_CROUCH_SLIDE,
    ACT_CROUCHING, ACT_DOUBLE_JUMP_LAND_STOP, MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, ACT_FIRST_PERSON,
    ACT_FREEFALL, ACT_FREEFALL_LAND_STOP, ACT_GROUND_POUND_LAND, ACT_HEAVY_THROW,
    ACT_HOLD_BUTT_SLIDE_STOP, ACT_HOLD_FREEFALL, ACT_HOLD_FREEFALL_LAND_STOP, ACT_HOLD_HEAVY_IDLE,
    ACT_HOLD_BEGIN_SLIDING, ACT_HOLD_HEAVY_WALKING, ACT_HOLD_IDLE, ACT_HOLD_JUMP,
    ACT_HOLD_JUMP_LAND_STOP, ACT_HOLD_PANTING_UNUSED, ACT_HOLD_WALKING, ACT_IDLE, ACT_IN_QUICKSAND,
    ACT_JUMP, ACT_JUMP_LAND_STOP, ACT_LAVA_BOOST_LAND, ACT_LONG_JUMP_LAND_STOP, ACT_PANTING,
    ACT_PUNCHING, ACT_SHIVERING, ACT_SHOCKWAVE_BOUNCE, ACT_SIDE_FLIP_LAND_STOP, ACT_SLEEPING,
    ACT_SLIDE_KICK_SLIDE_STOP, ACT_SPAWN_SPIN_LANDING, ACT_SQUISHED, ACT_STANDING_AGAINST_WALL,
    ACT_STANDING_DEATH, ACT_START_CRAWLING, ACT_START_CROUCHING, ACT_START_SLEEPING,
    ACT_STOP_CRAWLING, ACT_STOP_CROUCHING, ACT_THROWING, ACT_TRIPLE_JUMP_LAND_STOP, ACT_TWIRL_LAND,
    ACT_UNKNOWN_0002020E, ACT_WAKING_UP, ACT_WALKING,

    MARIO_ACTION_SOUND_PLAYED,

    INPUT_A_PRESSED, INPUT_ABOVE_SLIDE, INPUT_B_PRESSED, INPUT_FIRST_PERSON, INPUT_IN_WATER,
    INPUT_NONZERO_ANALOG, INPUT_OFF_FLOOR, INPUT_SQUISHED, INPUT_STOMPED, INPUT_Z_DOWN,
    INPUT_IN_POISON_GAS, INPUT_Z_PRESSED,

    MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP, MARIO_ANIM_CROUCH_FROM_SLIDE_KICK,
    MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP, MARIO_ANIM_CROUCHING, MARIO_ANIM_GENERAL_LAND,
    MARIO_ANIM_GROUND_POUND_LANDING, MARIO_ANIM_IDLE_HEAD_CENTER, MARIO_ANIM_IDLE_HEAD_LEFT,
    MARIO_ANIM_IDLE_HEAD_RIGHT, MARIO_ANIM_IDLE_HEAVY_OBJ, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ,
    MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ, MARIO_ANIM_LAND_FROM_DOUBLE_JUMP,
    MARIO_ANIM_LAND_FROM_SINGLE_JUMP, MARIO_ANIM_SLIDEFLIP_LAND, MARIO_ANIM_STAND_AGAINST_WALL,
    MARIO_ANIM_START_CRAWLING, MARIO_ANIM_START_CROUCHING, MARIO_ANIM_STOP_CRAWLING,
    MARIO_ANIM_STOP_CROUCHING, MARIO_ANIM_STOP_SKID, MARIO_ANIM_STOP_SLIDE,
    MARIO_ANIM_THROW_LIGHT_OBJECT, MARIO_ANIM_TRIPLE_JUMP_LAND, MARIO_ANIM_STAND_UP_FROM_LAVA_BOOST,
    MARIO_ANIM_STAND_UP_FROM_SLIDING_WITH_LIGHT_OBJ, MARIO_ANIM_START_SLEEP_IDLE, MARIO_ANIM_START_SLEEP_SCRATCH,
    MARIO_ANIM_START_SLEEP_YAWN, MARIO_ANIM_START_SLEEP_SITTING, MARIO_ANIM_COUGHING,
    MARIO_ANIM_SHIVERING_WARMING_HAND, MARIO_ANIM_SHIVERING, MARIO_ANIM_SHIVERING_RETURN_TO_IDLE,
    MARIO_ANIM_SLEEP_IDLE, MARIO_ANIM_SLEEP_START_LYING, MARIO_ANIM_SLEEP_LYING,
    MARIO_ANIM_WAKE_FROM_SLEEP, MARIO_ANIM_WAKE_FROM_LYING, MARIO_ANIM_WALK_PANTING,

    find_floor_height_relative_polar, play_mario_heavy_landing_sound, play_sound_if_no_flag
} from "./Mario"

import {
    INT_STATUS_MARIO_DROP_OBJECT, INT_SUBTYPE_DROP_IMMEDIATELY
} from "./Interaction"

import {
    PARTICLE_IDLE_WATER_WAVE, PARTICLE_BREATH
} from "../include/mario_constants"

import { 
    SOUND_MARIO_IMA_TIRED, SOUND_MARIO_YAWNING, SOUND_MARIO_COUGHING1, SOUND_MARIO_COUGHING2, SOUND_MARIO_COUGHING3,
    SOUND_MARIO_PANTING_COLD, SOUND_ACTION_CLAP_HANDS_COLD, SOUND_MARIO_SNORING1, SOUND_MARIO_SNORING2,
    SOUND_MARIO_SNORING3, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND, SOUND_ACTION_PAT_BACK,
    SOUND_MARIO_PANTING
} from "../include/sounds"

import { MARIO_EYES_HALF_CLOSED, MARIO_EYES_CLOSED } from "../include/mario_geo_switch_case_ids"

import { TERRAIN_MASK, TERRAIN_SNOW, SURFACE_FLAG_DYNAMIC } from "../include/surface_terrains"

import { play_sound } from "../audio/external"

import { raise_background_noise } from "./SoundInit"

const check_common_idle_cancels = (m) => {
    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_JUMP, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {

        m.faceAngle[1] = m.intendedYaw

        return set_mario_action(m, ACT_WALKING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_PUNCHING, 0)
    }

    if (m.input & INPUT_Z_DOWN) {
        return set_mario_action(m, ACT_START_CROUCHING, 0)
    }

    return false
}

const check_common_hold_idle_cancels = (m) => {
    if (m.floor.normal.y < 0.29237169) {
        return mario_push_off_steep_floor(m, ACT_HOLD_FREEFALL, 0)
    }

    if (m.heldObj.rawData[oInteractionSubtype] & INT_SUBTYPE_DROP_IMMEDIATELY) {
        m.heldObj.rawData[oInteractionSubtype] =
            (s32)(m.heldObj.rawData[oInteractionSubtype] & ~INT_SUBTYPE_DROP_IMMEDIATELY)
        return set_mario_action(m, ACT_PLACING_DOWN, 0)
    }

    if (m.input & INPUT_STOMPED) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_HOLD_JUMP, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_HOLD_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_HOLD_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {
        m.faceAngle[1] = m.intendedYaw
        return set_mario_action(m, ACT_HOLD_WALKING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }

    if (m.input & INPUT_Z_DOWN) {
        return drop_and_set_mario_action(m, ACT_START_CROUCHING, 0)
    }

    return false
}

const act_idle = (m) => {
    if (m.input & INPUT_IN_POISON_GAS) {
        return set_mario_action(m, ACT_COUGHING, 0)
    }

    if (!(m.actionArg & 1) && m.health < 0x300) {
        return set_mario_action(m, ACT_PANTING, 0)
    }

    if (check_common_idle_cancels(m)) {
        return true
    }

    if (m.actionState == 3) {
        if ((m.area.terrainType & TERRAIN_MASK) == TERRAIN_SNOW) {
            return set_mario_action(m, ACT_SHIVERING, 0)
        } else {
            return set_mario_action(m, ACT_START_SLEEPING, 0)
        }
    }

    if (m.actionArg & 1) {
        set_mario_animation(m, MARIO_ANIM_STAND_AGAINST_WALL);
    } else {
        switch (m.actionState) {
            case 0: set_mario_animation(m, MARIO_ANIM_IDLE_HEAD_LEFT); break
            case 1: set_mario_animation(m, MARIO_ANIM_IDLE_HEAD_RIGHT); break
            case 2: set_mario_animation(m, MARIO_ANIM_IDLE_HEAD_CENTER); break
        }

        if (is_anim_at_end(m)) {
            // Fall asleep after 10 head turning cycles.
            // act_start_sleeping is triggered earlier in the function
            // when actionState == 3. This happens when Mario's done
            // turning his head back and forth. However, we do some checks
            // here to make sure that Mario would be able to sleep here,
            // and that he's gone through 10 cycles before sleeping.
            // actionTimer is used to track how many cycles have passed.
            if (++m.actionState == 3) {
                let deltaYOfFloorBehindMario = m.pos[1] - find_floor_height_relative_polar(m, -0x8000, 60.0)
                if (deltaYOfFloorBehindMario < -24.0 || 24.0 < deltaYOfFloorBehindMario || m.floor.flags & SURFACE_FLAG_DYNAMIC) {
                    m.actionState = 0;
                } else {
                    // If Mario hasn't turned his head 10 times yet, stay idle instead of going to sleep.
                    m.actionTimer++
                    if (m.actionTimer < 10) {
                        m.actionState = 0
                    }
                }
            }
        }
    }

    stationary_ground_step(m)

    return false
}

const play_anim_sound = (m, actionState, animFrame, sound) => {
    if (m.actionState == actionState && m.marioObj.gfx.animInfo.animFrame == animFrame) {
        play_sound(sound, m.marioObj.gfx.cameraToObject)
    }
}

const act_start_sleeping = (m) => {
    let animFrame

    if (check_common_idle_cancels(m)) {
        return true
    }

    if (m.quicksandDepth > 30.0) {
        return set_mario_action(m, ACT_IN_QUICKSAND, 0)
    }

    if (m.actionState == 4) {
        return set_mario_action(m, ACT_SLEEPING, 0)
    }

    switch (m.actionState) {
        case 0:
            animFrame = set_mario_animation(m, MARIO_ANIM_START_SLEEP_IDLE)
            break

        case 1:
            animFrame = set_mario_animation(m, MARIO_ANIM_START_SLEEP_SCRATCH)
            break

        case 2:
            animFrame = set_mario_animation(m, MARIO_ANIM_START_SLEEP_YAWN)
            m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
            break

        case 3:
            animFrame = set_mario_animation(m, MARIO_ANIM_START_SLEEP_SITTING)
            m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
            break
    }

    play_anim_sound(m, 1, 41, SOUND_ACTION_PAT_BACK)
    play_anim_sound(m, 1, 49, SOUND_ACTION_PAT_BACK)
    play_anim_sound(m, 3, 15, m.terrainSoundAddend + SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)

    if (is_anim_at_end(m)) {
        m.actionState++
    }

    if (m.actionState == 2 && animFrame == -1) {
        play_sound(SOUND_MARIO_YAWNING, m.marioObj.gfx.cameraToObject)
    }

    if (m.actionState == 1 && animFrame == -1) {
        play_sound(SOUND_MARIO_IMA_TIRED, m.marioObj.gfx.cameraToObject)
    }

    stationary_ground_step(m)
    return false
}

const act_sleeping = (m) => {
    let animFrame
    if (m.input
        & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE
           | INPUT_FIRST_PERSON | INPUT_STOMPED | INPUT_B_PRESSED | INPUT_Z_PRESSED)) {
        return set_mario_action(m, ACT_WAKING_UP, m.actionState)
    }

    if (m.quicksandDepth > 30.0) {
        return set_mario_action(m, ACT_WAKING_UP, m.actionState);
    }

    if (m.pos[1] - find_floor_height_relative_polar(m, -0x8000, 60.0) > 24.0) {
        return set_mario_action(m, ACT_WAKING_UP, m.actionState)
    }

    m.marioBodyState.eyeState = MARIO_EYES_CLOSED
    stationary_ground_step(m)
    switch (m.actionState) {
        case 0:
            animFrame = set_mario_animation(m, MARIO_ANIM_SLEEP_IDLE)

            if (animFrame == -1 && !m.actionTimer) {
                // lower_background_noise(2)
            }

            if (animFrame == 2) {
                play_sound(SOUND_MARIO_SNORING1, m.marioObj.gfx.cameraToObject)
            }

            if (animFrame == 20) {
                play_sound(SOUND_MARIO_SNORING2, m.marioObj.gfx.cameraToObject)
            }

            if (is_anim_at_end(m)) {
                m.actionTimer++
                if (m.actionTimer > 45) {
                    m.actionState++
                }
            }
            break

        case 1:
            if (set_mario_animation(m, MARIO_ANIM_SLEEP_START_LYING) == 18) {
                play_mario_heavy_landing_sound(m, SOUND_ACTION_TERRAIN_BODY_HIT_GROUND)
            }

            if (is_anim_at_end(m)) {
                m.actionState++
            }
            break;

        case 2:
            animFrame = set_mario_animation(m, MARIO_ANIM_SLEEP_LYING)
            play_sound_if_no_flag(m, SOUND_MARIO_SNORING3, MARIO_ACTION_SOUND_PLAYED)
            break
    }
    return false
}

const act_waking_up = (m) => {
    if (!m.actionTimer) {
        // stop_sound(SOUND_MARIO_SNORING1, m.marioObj.gfx.cameraToObject)
        // stop_sound(SOUND_MARIO_SNORING2, m.marioObj.gfx.cameraToObject)
        // stop_sound(SOUND_MARIO_SNORING3, m.marioObj.gfx.cameraToObject)
        raise_background_noise(2)
    }

    if (m.input & INPUT_STOMPED) {
        return set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    m.actionTimer++

    if (m.actionTimer > 20) {
        return set_mario_action(m, ACT_IDLE, 0)
    }

    stationary_ground_step(m)

    set_mario_animation(m, !m.actionArg ? MARIO_ANIM_WAKE_FROM_SLEEP : MARIO_ANIM_WAKE_FROM_LYING)

    return false
}

const act_shivering = (m) => {
    let animFrame

    if (m.input & INPUT_STOMPED) {
        return set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input
        & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE
           | INPUT_FIRST_PERSON | INPUT_STOMPED | INPUT_B_PRESSED | INPUT_Z_PRESSED)) {
        m.actionState = 2
    }

    stationary_ground_step(m)
    switch (m.actionState) {
        case 0:
            animFrame = set_mario_animation(m, MARIO_ANIM_SHIVERING_WARMING_HAND)
            if (animFrame == 49) {
                m.particleFlags |= PARTICLE_BREATH
                play_sound(SOUND_MARIO_PANTING_COLD, m.marioObj.gfx.cameraToObject)
            }
            if (animFrame == 7 || animFrame == 81) {
                play_sound(SOUND_ACTION_CLAP_HANDS_COLD, m.marioObj.gfx.cameraToObject)
            }
            if (is_anim_past_end(m)) {
                m.actionState = 1
            }
            break

        case 1:
            animFrame = set_mario_animation(m, MARIO_ANIM_SHIVERING)
            if (animFrame == 9 || animFrame == 25 || animFrame == 44) {
                play_sound(SOUND_ACTION_CLAP_HANDS_COLD, m.marioObj.gfx.cameraToObject)
            }
            break

        case 2:
            set_mario_animation(m, MARIO_ANIM_SHIVERING_RETURN_TO_IDLE)
            if (is_anim_past_end(m)) {
                set_mario_action(m, ACT_IDLE, 0)
            }
            break
    }
    return false
}

const act_coughing = (m) => {
    let animFrame

    if (check_common_idle_cancels(m)) {
        return true
    }

    stationary_ground_step(m)
    animFrame = set_mario_animation(m, MARIO_ANIM_COUGHING)
    if (animFrame == 25 || animFrame == 35) {
        play_sound(SOUND_MARIO_COUGHING3, m.marioObj.gfx.cameraToObject)
    }

    if (animFrame == 50 || animFrame == 58) {
        play_sound(SOUND_MARIO_COUGHING2, m.marioObj.gfx.cameraToObject)
    }

    if (animFrame == 71 || animFrame == 80) {
        play_sound(SOUND_MARIO_COUGHING1, m.marioObj.gfx.cameraToObject)
    }

    return false
}

const stopping_step = (m, animId, action) => {
    stationary_ground_step(m)
    set_mario_animation(m, animId)
    if (is_anim_at_end(m)) set_mario_action(m, action, 0)
}

const act_braking_stop = (m) => {

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_PUNCHING, 0)
    }

    if (!(m.input & INPUT_FIRST_PERSON)
        && m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_action_exits(m)
    }

    stopping_step(m, MARIO_ANIM_STOP_SKID, ACT_IDLE)
    return false
}


const landing_step = (m, arg1, action) => {
    stationary_ground_step(m)
    set_mario_animation(m, arg1)
    if (is_anim_at_end(m)) return set_mario_action(m, action, 0)
    return false
}

const check_common_landing_cancels = (m, action) => {

    if (m.input & INPUT_A_PRESSED) {
        if (!action) {
            return set_jump_from_landing(m)
        } else {
            return set_jumping_action(m, action, 0)
        }
    }

    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_action_exits(m)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_PUNCHING, 0)
    }

    return false
}

const act_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return true

    landing_step(m, MARIO_ANIM_LAND_FROM_SINGLE_JUMP, ACT_IDLE)
    return false
}

const act_hold_idle = (m) => {
    if (gLinker.behaviors.bhvJumpingBox == m.heldObj.behavior) {
        return set_mario_action(m, ACT_CRAZY_BOX_BOUNCE, 0)
    }

    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_IDLE, 0)
    }

    if (m.quicksandDepth > 30.0) {
        return drop_and_set_mario_action(m, ACT_IN_QUICKSAND, 0)
    }

    if (check_common_hold_idle_cancels(m)) {
        return true
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_IDLE_WITH_LIGHT_OBJ)
    return false
}

const act_hold_heavy_idle = (m) => {
    if (m.input & INPUT_STOMPED) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return drop_and_set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return drop_and_set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {
        return set_mario_action(m, ACT_HOLD_HEAVY_WALKING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_HEAVY_THROW, 0)
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_IDLE_HEAVY_OBJ)
    return false
}

const act_standing_against_wall = (m) => {
    if (m.input & INPUT_STOMPED) {
        return set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_action_exits(m)
    }

    if (m.input & INPUT_FIRST_PERSON) {
        return set_mario_action(m, ACT_FIRST_PERSON, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_PUNCHING, 0)
    }

    set_mario_animation(m, MARIO_ANIM_STAND_AGAINST_WALL)
    stationary_ground_step(m)
    return false
}

const act_freefall_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return true

    landing_step(m, MARIO_ANIM_GENERAL_LAND, ACT_IDLE)
    return false
}

const act_side_flip_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return true

    landing_step(m, MARIO_ANIM_SLIDEFLIP_LAND, ACT_IDLE)
    m.marioObj.gfx.angle[1] += 0x8000
    return false
}

const act_double_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, 0)) return true

    landing_step(m, MARIO_ANIM_LAND_FROM_DOUBLE_JUMP, ACT_IDLE)
    return false
}

const act_triple_jump_land_stop = (m) => {
    if (check_common_landing_cancels(m, ACT_JUMP)) return true

    landing_step(m, MARIO_ANIM_TRIPLE_JUMP_LAND, ACT_IDLE)
    return false
}

const act_start_crouching = (m) => {

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_BACKFLIP, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_START_CROUCHING)
    if (is_anim_past_end(m)) {
        set_mario_action(m, ACT_CROUCHING, 0)
    }
    return false
}

const act_crouching = (m) => {

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_BACKFLIP, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    if (!(m.input & INPUT_Z_DOWN)) {
        return set_mario_action(m, ACT_STOP_CROUCHING, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {
        return set_mario_action(m, ACT_START_CRAWLING, 0)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_PUNCHING, 9)
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_CROUCHING)
    return false
}

const act_panting = (m) => {
    if (m.input & INPUT_STOMPED) {
        return set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.health >= 0x500) {
        return set_mario_action(m, ACT_IDLE, 0)
    }

    if (check_common_idle_cancels(m)) {
        return true
    }

    if (set_mario_animation(m, MARIO_ANIM_WALK_PANTING) == 1) {
        play_sound(SOUND_MARIO_PANTING /*+ ((gAudioRandom % 3) << 0x10)*/,
                   m.marioObj.gfx.cameraToObject)
    }

    stationary_ground_step(m)
    m.marioBodyState.eyeState = MARIO_EYES_HALF_CLOSED
    return false
}

const act_stop_crouching = (m) => {

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_A_PRESSED) {
        return set_jumping_action(m, ACT_BACKFLIP, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m);
    set_mario_animation(m, MARIO_ANIM_STOP_CROUCHING)
    if (is_anim_past_end(m)) {
        set_mario_action(m, ACT_IDLE, 0)
    }
    return false
}

const act_backflip_land_stop = (m) => {
    if (!(m.input & INPUT_Z_DOWN) || m.marioObj.gfx.animInfo.animFrame >= 6) {
        m.input &= -3
    }

    if (check_common_landing_cancels(m, ACT_BACKFLIP)) {
        return true
    }

    landing_step(m, MARIO_ANIM_TRIPLE_JUMP_LAND, ACT_IDLE)
    return false
}

const act_lava_boost_land = (m) => {
    m.input &= -0x2011

    if (check_common_landing_cancels(m, 0)) {
        return true
    }

    landing_step(m, MARIO_ANIM_STAND_UP_FROM_LAVA_BOOST, ACT_IDLE)
    return false
}

const act_long_jump_land_stop = (m) => {
    m.input &= -0x2001
    if (check_common_landing_cancels(m, ACT_JUMP)) {
        return true
    }

    landing_step(m,
                  !m.marioObj.oMarioLongJumpIsSlow ? MARIO_ANIM_CROUCH_FROM_FAST_LONGJUMP
                                                     : MARIO_ANIM_CROUCH_FROM_SLOW_LONGJUMP,
                  ACT_CROUCHING)
    return false
}

const act_start_crawling = (m) => {
    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_START_CRAWLING)
    if (is_anim_past_end(m)) {
        set_mario_action(m, ACT_CRAWLING, 0)
    }
    return false
}

const act_stop_crawling = (m) => {

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BEGIN_SLIDING, 0)
    }

    stationary_ground_step(m)
    set_mario_animation(m, MARIO_ANIM_STOP_CRAWLING)
    if (is_anim_past_end(m)) {
        set_mario_action(m, ACT_CROUCHING, 0)
    }
    return false

}

const act_slide_kick_slide_stop = (m) => {

    if (m.input & INPUT_OFF_FLOOR) {
        return drop_and_set_mario_action(m, ACT_FREEFALL, 0)
    }

    stopping_step(m, MARIO_ANIM_CROUCH_FROM_SLIDE_KICK, ACT_CROUCHING)
    return false
}

const act_ground_pound_land = (m) => {
    m.actionState = 1

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (m.input & INPUT_ABOVE_SLIDE) {
        return set_mario_action(m, ACT_BUTT_SLIDE, 0)
    }

    landing_step(m, MARIO_ANIM_GROUND_POUND_LANDING, ACT_BUTT_SLIDE_STOP)
    return false
}

const act_butt_slide_stop = (m) => {
    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_action_exits(m)
    }

    stopping_step(m, MARIO_ANIM_STOP_SLIDE, ACT_IDLE)

    if (m.marioObj.gfx.animInfo.animFrame == 6) {
        //play landing sound
    }

    return false
}

const act_hold_butt_slide_stop = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_IDLE, 0)
    }

    if (m.input & INPUT_STOMPED) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0);
    }

    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_hold_action_exits(m)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }

    stopping_step(m, MARIO_ANIM_STAND_UP_FROM_SLIDING_WITH_LIGHT_OBJ, ACT_HOLD_IDLE)
    return false
}

const act_hold_jump_land_stop = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_IDLE, 0)
    }

    if (m.input & INPUT_STOMPED) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_hold_action_exits(m)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }

    landing_step(m, MARIO_ANIM_JUMP_LAND_WITH_LIGHT_OBJ, ACT_HOLD_IDLE)
    return false
}

const act_hold_freefall_land_stop = (m) => {
    if (m.marioObj.rawData[oInteractStatus] & INT_STATUS_MARIO_DROP_OBJECT) {
        return drop_and_set_mario_action(m, ACT_IDLE, 0)
    }

    if (m.input & INPUT_STOMPED) {
        return drop_and_set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED | INPUT_OFF_FLOOR | INPUT_ABOVE_SLIDE)) {
        return check_common_hold_action_exits(m)
    }

    if (m.input & INPUT_B_PRESSED) {
        return set_mario_action(m, ACT_THROWING, 0)
    }
    landing_step(m, MARIO_ANIM_FALL_LAND_WITH_LIGHT_OBJ, ACT_HOLD_IDLE)
    return false
}

const act_air_throw_land = (m) => {
    if (m.input & INPUT_STOMPED) {
        return set_mario_action(m, ACT_SHOCKWAVE_BOUNCE, 0)
    }

    if (m.input & INPUT_OFF_FLOOR) {
        return set_mario_action(m, ACT_FREEFALL, 0)
    }

    if (++m.actionTimer == 4) {
        mario_throw_held_object(m)
    }

    landing_step(m, MARIO_ANIM_THROW_LIGHT_OBJECT, ACT_IDLE)
    return false
}

const check_common_stationary_cancels = (m) => {
    if (m.pos[1] < m.waterLevel - 100) {
        if (m.action == ACT_SPAWN_SPIN_LANDING) {
            load_level_init_text(0)
        }
        update_mario_sound_and_camera(m)
        return set_water_plunge_action(m)
    }

    if (m.input & INPUT_SQUISHED) {
        update_mario_sound_and_camera(m)
        return drop_and_set_mario_action(m, ACT_SQUISHED, 0)
    }

    if (m.action != ACT_UNKNOWN_0002020E) {
        if (m.health < 0x100) {
            update_mario_sound_and_camera(m)
            return drop_and_set_mario_action(m, ACT_STANDING_DEATH, 0)
        }
    }
    return false
}

export const mario_execute_stationary_action = (m) => {
    let cancel

    if (check_common_stationary_cancels(m)) {
        return true
    }

    // if (mario_update_quicksand(m, 0.5)) {
    //     return true
    // }

    switch (m.action) {
        case ACT_IDLE:                    cancel = act_idle(m);                       break
        case ACT_START_SLEEPING:          cancel = act_start_sleeping(m);             break
        case ACT_SLEEPING:                cancel = act_sleeping(m);                   break
        case ACT_WAKING_UP:               cancel = act_waking_up(m);                  break
        case ACT_PANTING:                 cancel = act_panting(m);                    break
        case ACT_HOLD_PANTING_UNUSED:     cancel = act_hold_panting_unused(m);        break
        case ACT_HOLD_IDLE:               cancel = act_hold_idle(m);                  break
        case ACT_HOLD_HEAVY_IDLE:         cancel = act_hold_heavy_idle(m);            break
        case ACT_IN_QUICKSAND:            cancel = act_in_quicksand(m);               break
        case ACT_STANDING_AGAINST_WALL:   cancel = act_standing_against_wall(m);      break
        case ACT_COUGHING:                cancel = act_coughing(m);                   break
        case ACT_SHIVERING:               cancel = act_shivering(m);                  break
        case ACT_CROUCHING:               cancel = act_crouching(m);                  break
        case ACT_START_CROUCHING:         cancel = act_start_crouching(m);            break
        case ACT_STOP_CROUCHING:          cancel = act_stop_crouching(m);             break
        case ACT_START_CRAWLING:          cancel = act_start_crawling(m);             break
        case ACT_STOP_CRAWLING:           cancel = act_stop_crawling(m);              break
        case ACT_SLIDE_KICK_SLIDE_STOP:   cancel = act_slide_kick_slide_stop(m);      break
        case ACT_SHOCKWAVE_BOUNCE:        cancel = act_shockwave_bounce(m);           break
        case ACT_FIRST_PERSON:            cancel = act_first_person(m);               break
        case ACT_JUMP_LAND_STOP:          cancel = act_jump_land_stop(m);             break
        case ACT_DOUBLE_JUMP_LAND_STOP:   cancel = act_double_jump_land_stop(m);      break
        case ACT_FREEFALL_LAND_STOP:      cancel = act_freefall_land_stop(m);         break
        case ACT_SIDE_FLIP_LAND_STOP:     cancel = act_side_flip_land_stop(m);        break
        case ACT_HOLD_JUMP_LAND_STOP:     cancel = act_hold_jump_land_stop(m);        break
        case ACT_HOLD_FREEFALL_LAND_STOP: cancel = act_hold_freefall_land_stop(m);    break
        case ACT_AIR_THROW_LAND:          cancel = act_air_throw_land(m);             break
        case ACT_LAVA_BOOST_LAND:         cancel = act_lava_boost_land(m);            break
        case ACT_TWIRL_LAND:              cancel = act_twirl_land(m);                 break
        case ACT_TRIPLE_JUMP_LAND_STOP:   cancel = act_triple_jump_land_stop(m);      break
        case ACT_BACKFLIP_LAND_STOP:      cancel = act_backflip_land_stop(m);         break
        case ACT_LONG_JUMP_LAND_STOP:     cancel = act_long_jump_land_stop(m);        break
        case ACT_GROUND_POUND_LAND:       cancel = act_ground_pound_land(m);          break
        case ACT_BRAKING_STOP:            cancel = act_braking_stop(m);               break
        case ACT_BUTT_SLIDE_STOP:         cancel = act_butt_slide_stop(m);            break
        case ACT_HOLD_BUTT_SLIDE_STOP:    cancel = act_hold_butt_slide_stop(m);       break
    }

    if (!cancel && (m.input & INPUT_IN_WATER)) {
        m.particleFlags |= PARTICLE_IDLE_WATER_WAVE
    }

    return cancel
}
