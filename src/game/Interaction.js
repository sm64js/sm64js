import * as Mario from "./Mario"
import { oInteractType, oInteractStatus, oMarioPoleUnk108, oMarioPoleYawVel, oMarioPolePos, oPosY, oInteractionSubtype, oDamageOrCoinValue, oPosX, oPosZ } from "../include/object_constants"
import { atan2s, vec3f_dif, vec3f_length } from "../engine/math_util"
import { networkData, sendPlayerInteraction } from "../socket"
import { sins, coss } from "../utils"

export const INTERACT_HOOT           /* 0x00000001 */ = (1 << 0)
export const INTERACT_GRABBABLE      /* 0x00000002 */ = (1 << 1)
export const INTERACT_DOOR           /* 0x00000004 */ = (1 << 2)
export const INTERACT_DAMAGE         /* 0x00000008 */ = (1 << 3)
export const INTERACT_COIN           /* 0x00000010 */ = (1 << 4)
export const INTERACT_CAP            /* 0x00000020 */ = (1 << 5)
export const INTERACT_POLE           /* 0x00000040 */ = (1 << 6)
export const INTERACT_KOOPA          /* 0x00000080 */ = (1 << 7)
export const INTERACT_BREAKABLE      /* 0x00000200 */ = (1 << 9)
export const INTERACT_STRONG_WIND    /* 0x00000400 */ = (1 << 10)
export const INTERACT_WARP_DOOR      /* 0x00000800 */ = (1 << 11)
export const INTERACT_STAR_OR_KEY    /* 0x00001000 */ = (1 << 12)
export const INTERACT_WARP           /* 0x00002000 */ = (1 << 13)
export const INTERACT_CANNON_BASE    /* 0x00004000 */ = (1 << 14)
export const INTERACT_BOUNCE_TOP     /* 0x00008000 */ = (1 << 15)
export const INTERACT_WATER_RING     /* 0x00010000 */ = (1 << 16)
export const INTERACT_BULLY          /* 0x00020000 */ = (1 << 17)
export const INTERACT_FLAME          /* 0x00040000 */ = (1 << 18)
export const INTERACT_KOOPA_SHELL    /* 0x00080000 */ = (1 << 19)
export const INTERACT_BOUNCE_TOP2    /* 0x00100000 */ = (1 << 20)
export const INTERACT_MR_BLIZZARD    /* 0x00200000 */ = (1 << 21)
export const INTERACT_HIT_FROM_BELOW /* 0x00400000 */ = (1 << 22)
export const INTERACT_TEXT           /* 0x00800000 */ = (1 << 23)
export const INTERACT_TORNADO        /* 0x01000000 */ = (1 << 24)
export const INTERACT_WHIRLPOOL      /* 0x02000000 */ = (1 << 25)
export const INTERACT_CLAM_OR_BUBBA  /* 0x04000000 */ = (1 << 26)
export const INTERACT_BBH_ENTRANCE   /* 0x08000000 */ = (1 << 27)
export const INTERACT_SNUFIT_BULLET  /* 0x10000000 */ = (1 << 28)
export const INTERACT_SHOCK          /* 0x20000000 */ = (1 << 29)
export const INTERACT_IGLOO_BARRIER  /* 0x40000000 */ = (1 << 30)
export const INTERACT_PLAYER     /* 0x80000000 */ = (1 << 8)  // formerly 1 << 31
export const INTERACT_UNKNOWN_08     /* 0x00000100 */ = (1 << 31) // formerly 1 << 8


// INTERACT_WARP
export const INT_SUBTYPE_FADING_WARP = 0x00000001

// Damaging interactions
export const INT_SUBTYPE_DELAY_INVINCIBILITY = 0x00000002
export const INT_SUBTYPE_BIG_KNOCKBACK = 0x00000008 /* Used by Bowser, sets Mario's forward velocity to 40 on hit */

// INTERACT_GRABBABLE
export const INT_SUBTYPE_GRABS_MARIO = 0x00000004 /* Also makes the object heavy */
export const INT_SUBTYPE_HOLDABLE_NPC = 0x00000010 /* Allows the object to be gently dropped, and sets vertical speed to 0 when dropped with no forwards velocity */
export const INT_SUBTYPE_DROP_IMMEDIATELY = 0x00000040 /* This gets set by grabbable NPCs that talk to Mario to make him drop them after the dialog is finished */
export const INT_SUBTYPE_KICKABLE = 0x00000100
export const INT_SUBTYPE_NOT_GRABBABLE = 0x00000200 /* Used by Heavy-Ho to allow it to throw Mario, without Mario being able to pick it up */

// INTERACT_DOOR
export const INT_SUBTYPE_STAR_DOOR = 0x00000020

//INTERACT_BOUNCE_TOP
export const INT_SUBTYPE_TWIRL_BOUNCE = 0x00000080

// INTERACT_STAR_OR_KEY 
export const INT_SUBTYPE_NO_EXIT = 0x00000400
export const INT_SUBTYPE_GRAND_STAR = 0x00000800

// INTERACT_TEXT
export const INT_SUBTYPE_SIGN = 0x00001000
export const INT_SUBTYPE_NPC = 0x00004000

// INTERACT_CLAM_OR_BUBBA
export const INT_SUBTYPE_EATS_MARIO = 0x00002000

export const INT_GROUND_POUND_OR_TWIRL  = (1 << 0) // 0x01
export const INT_PUNCH  = (1 << 1) // 0x02
export const INT_KICK  = (1 << 2) // 0x04
export const INT_TRIP  = (1 << 3) // 0x08
export const INT_SLIDE_KICK  = (1 << 4) // 0x10
export const INT_FAST_ATTACK_OR_SHELL  = (1 << 5) // 0x20
export const INT_HIT_FROM_ABOVE  = (1 << 6) // 0x40
export const INT_HIT_FROM_BELOW = (1 << 7) // 0x80

export const INT_ATTACK_NOT_FROM_BELOW = INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_SLIDE_KICK | INT_FAST_ATTACK_OR_SHELL | INT_HIT_FROM_ABOVE

export const INT_ANY_ATTACK = INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_SLIDE_KICK | INT_FAST_ATTACK_OR_SHELL | INT_HIT_FROM_ABOVE | INT_HIT_FROM_BELOW

export const INT_ATTACK_NOT_WEAK_FROM_ABOVE = INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_HIT_FROM_BELOW

export const INT_ATTACK_SLIDE = INT_SLIDE_KICK | INT_FAST_ATTACK_OR_SHELL

export const INT_STATUS_HOOT_GRABBED_BY_MARIO = (1 << 0) /* 0x00000001 */
export const INT_STATUS_MARIO_UNK1 = (1 << 1) /* 0x00000002 */
export const INT_STATUS_MARIO_UNK2 = (1 << 2) /* 0x00000004 */
export const INT_STATUS_MARIO_DROP_OBJECT = (1 << 3) /* 0x00000008 */
export const INT_STATUS_MARIO_UNK4 = (1 << 4) /* 0x00000010 */
export const INT_STATUS_MARIO_UNK5 = (1 << 5) /* 0x00000020 */
export const INT_STATUS_MARIO_UNK6 = (1 << 6) /* 0x00000040 */
export const INT_STATUS_MARIO_UNK7 = (1 << 7) /* 0x00000080 */
export const INT_STATUS_GRABBED_MARIO = (1 << 11) /* 0x00000800 */
export const INT_STATUS_ATTACKED_MARIO = (1 << 13) /* 0x00002000 */
export const INT_STATUS_WAS_ATTACKED = (1 << 14) /* 0x00004000 */
export const INT_STATUS_INTERACTED = (1 << 15) /* 0x00008000 */
export const INT_STATUS_TRAP_TURN = (1 << 20) /* 0x00100000 */
export const INT_STATUS_HIT_MINE = (1 << 21) /* 0x00200000 */
export const INT_STATUS_STOP_RIDING = (1 << 22) /* 0x00400000 */
export const INT_STATUS_TOUCHED_BOB_OMB = (1 << 23) /* 0x00800000 */

let sDelayInvincTimer = false
let sInvulnerable = false

const reset_mario_pitch = (m) => {
    /// TODO: WATER JUMP || SHOT FROM CANNON || ACT_FLYING
}


const determine_interaction = (m, o) => {
    let interaction = 0
    const action = m.action

    let dYawToObject = mario_obj_angle_to_object(m, o) - m.faceAngle[1]
    dYawToObject = dYawToObject > 32767 ? dYawToObject - 65536 : dYawToObject
    dYawToObject = dYawToObject < -32768 ? dYawToObject + 65536 : dYawToObject

    // hack: make water punch actually do something
    if (m.action == Mario.ACT_WATER_PUNCH && o.rawData[oInteractType] & INTERACT_PLAYER) {
        if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
            return INT_PUNCH
        }
    }

    if (action & Mario.ACT_FLAG_ATTACKING) {
        if (action == Mario.ACT_PUNCHING || action == Mario.ACT_MOVE_PUNCHING || action == Mario.ACT_JUMP_KICK) {

            if (m.flags & Mario.MARIO_PUNCHING) {
                // 120 degrees total, or 60 each way
                if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
                    interaction = INT_PUNCH
                }
            }
            if (m.flags & Mario.MARIO_KICKING) {
                // 120 degrees total, or 60 each way
                if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
                    interaction = INT_KICK
                }
            }
            if (m.flags & Mario.MARIO_TRIPPING) {
                // 180 degrees total, or 90 each way
                if (-0x4000 <= dYawToObject && dYawToObject <= 0x4000) {
                    interaction = INT_TRIP
                }
            }
        } else if (action == Mario.ACT_GROUND_POUND || action == Mario.ACT_TWIRLING) {
            if (m.vel[1] < 0.0) {
                interaction = INT_GROUND_POUND_OR_TWIRL
            }
        } else if (action == Mario.ACT_GROUND_POUND_LAND || action == Mario.ACT_TWIRL_LAND) {
            // Neither ground pounding nor twirling change Mario's vertical speed on landing.,
            // so the speed check is nearly always true (perhaps not if you land while going upwards?)
            // Additionally, actionState it set on each first thing in their action, so this is
            // only true prior to the very first frame (i.e. active 1 frame prior to it run).
            if (m.vel[1] < 0.0 && m.actionState == 0) {
                interaction = INT_GROUND_POUND_OR_TWIRL;
            }
        } else if (action == Mario.ACT_SLIDE_KICK || action == Mario.ACT_SLIDE_KICK_SLIDE) {
            interaction = INT_SLIDE_KICK
        } else if (action & Mario.ACT_FLAG_RIDING_SHELL) {
            interaction = INT_FAST_ATTACK_OR_SHELL
        } else if (m.forwardVel <= -26.0 || 26.0 <= m.forwardVel) {
            interaction = INT_FAST_ATTACK_OR_SHELL
        }

    }

    // Prior to this, the interaction type could be overwritten. This requires, however,
    // that the interaction not be set prior. This specifically overrides turning a ground
    // pound into just a bounce.

    if (interaction == 0 && (action & Mario.ACT_FLAG_AIR)) {
        if (m.vel[1] < 0.0) {
            if (m.pos[1] > o.rawData[oPosY]) {
                interaction = INT_HIT_FROM_ABOVE
            }
        } else {
            if (m.pos[1] < o.rawData[oPosY]) {
                interaction = INT_HIT_FROM_BELOW
            }
        }
    }

    return interaction
}

const determine_player_damage_value = (interaction) => {
    if (interaction & INT_GROUND_POUND_OR_TWIRL || interaction & INT_FAST_ATTACK_OR_SHELL || interaction & INT_SLIDE_KICK) { return 3 }
    if (interaction & INT_KICK) { return 2 }
    return 1
}

const bounce_off_object = (m, o, velY) => {
    m.pos[1] = o.rawData[oPosY] + o.hitboxHeight
    m.vel[1] = velY

    m.flags &= ~Mario.MARIO_UNKNOWN_08

    //play_sound(SOUND_ACTION_BOUNCE_OFF_OBJECT, m->marioObj->header.gfx.cameraToObject);
}

const player_is_sliding = (m) => {
    if (m.action & (Mario.ACT_FLAG_BUTT_OR_STOMACH_SLIDE | Mario.ACT_FLAG_DIVING)) {
        return true
    }

    switch (m.action) {
        case Mario.ACT_CROUCH_SLIDE:
        case Mario.ACT_SLIDE_KICK_SLIDE:
        case Mario.ACT_BUTT_SLIDE_AIR:
        case Mario.ACT_HOLD_BUTT_SLIDE_AIR:
            return true
    }
    return false
}


const bounce_back_from_attack = (m, interaction) => {
    if (interaction & (INT_PUNCH | INT_KICK | INT_TRIP)) {
        if (m.action == Mario.ACT_PUNCHING) {
            m.action = Mario.ACT_MOVE_PUNCHING
        }

        if (m.action & Mario.ACT_FLAG_AIR) {
            Mario.set_forward_vel(m, -16.0)
        } else {
            Mario.set_forward_vel(m, -48.0)
        }

        //if (m.marioObj.localMario) { set_camera_shake_from_hit(SHAKE_ATTACK); }
        m.particleFlags |= Mario.PARTICLE_TRIANGLE
    }

    // if (interaction & (INT_PUNCH | INT_KICK | INT_TRIP | INT_FAST_ATTACK_OR_SHELL)) {
    //     play_sound(SOUND_ACTION_HIT_2, m->marioObj->header.gfx.cameraToObject);
    // }
}

const resolve_player_collision = (m, m2) => {
        // move player outside of other player
        const extentY = m.marioObj.hitboxHeight
        const radius = m.marioObj.hitboxRadius * 2.0
    
        const localTorso = m.marioBodyState.torsoPos
        const remoteTorso = m2.marioBodyState.torsoPos

        let marioRelY = localTorso[1] - remoteTorso[1]
        if (marioRelY < 0) { marioRelY = -marioRelY }
        if (marioRelY >= extentY) return false

        const marioRelX = localTorso[0] - remoteTorso[0]
        const marioRelZ = localTorso[2] - remoteTorso[2]
        const marioDist = Math.sqrt(Math.pow(marioRelX, 2) + Math.pow(marioRelZ, 2))

        if (marioDist >= radius) return false

        /// Add the bounce part
        const interaction = determine_interaction(m, m2.marioObj)
        if (interaction & INT_HIT_FROM_ABOVE) {
            if (m2.marioObj.localMario) {
                m2.squishTimer = Math.max(m2.squishTimer, 4)
            }
            bounce_off_object(m, m2.marioObj, 60.0)
            // queue_rumble_data_mario(m, 5, 80);
            // don't do further interactions if we've hopped on top
            return true
        }

        m.pos[0] += (radius - marioDist) / radius * marioRelX
        m.pos[2] += (radius - marioDist) / radius * marioRelZ
        m.marioBodyState.torsoPos[0] += (radius - marioDist) / radius * marioRelX
        m.marioBodyState.torsoPos[2] += (radius - marioDist) / radius * marioRelZ
        return false
}

const interact_player = (m, o) => {

    if (!networkData.playerInteractions) return false

    const m2 = o.marioState

    if (resolve_player_collision(m, m2)) return false

    const interaction = determine_interaction(m, o)

    // attacked
    let isInCutscene = ((m.action & Mario.ACT_GROUP_MASK) == Mario.ACT_GROUP_CUTSCENE) || ((m2.action & Mario.ACT_GROUP_MASK) == Mario.ACT_GROUP_CUTSCENE)
    isInCutscene = isInCutscene || (m.action == Mario.ACT_IN_CANNON) || (m2.action == Mario.ACT_IN_CANNON)
    const isInvulnerable = (m2.action & Mario.ACT_FLAG_INVULNERABLE) || m2.invincTimer != 0 || m2.hurtCounter != 0 || isInCutscene
    const isIgnoredAttack = (m.action == Mario.ACT_JUMP || m.action == Mario.ACT_DOUBLE_JUMP)

    if ((interaction & INT_ANY_ATTACK) && !(interaction & INT_HIT_FROM_ABOVE) && !(interaction & INT_HIT_FROM_BELOW) && !isInvulnerable && !isIgnoredAttack) {

        // determine if slide attack should be ignored
        if ((interaction & INT_ATTACK_SLIDE) && player_is_sliding(m2)) {
            // determine the difference in velocities
            const velDiff = [0,0,0]
            vec3f_dif(velDiff, m.vel, m2.vel)

            if (vec3f_length(velDiff) < 40) {
                // the difference vectors are not different enough, do not attack
                return false
            }
            if (vec3f_length(m2.vel) > vec3f_length(m.vel)) {
                // the one being attacked is going faster, do not attack
                return false
            }
        }

        // determine if ground pound should be ignored
        if (m.action == Mario.ACT_GROUND_POUND) {
            // not moving down yet?
            if (m.actionState == 0) return false
            m2.squishTimer = Math.max(m2.squishTimer, 20)
        }

        m2.interactObj = m.marioObj
        if (m2.marioObj.localMario) {
            m.marioObj.rawData[oDamageOrCoinValue] = determine_player_damage_value(interaction)
        } else {  /// remote mario
            m2.interactObj.rawData[oDamageOrCoinValue] = determine_player_damage_value(interaction)
        }
        m2.invincTimer = Math.max(m2.invincTimer, 3)
        if (interaction & INT_KICK) {
            // if (m2.action == Mario.ACT_FIRST_PERSON) {
            //     // without this branch, the player will be stuck in first person
            //     raise_background_noise(2)
            //     set_camera_mode(m2.area->camera, -1, 1)
            //     m2.input &= ~INPUT_FIRST_PERSON
            // }
            // m.invincTimer = 10 /// one solution that fixes attacking mario knockback on jump kick
            Mario.set_mario_action(m2, Mario.ACT_FREEFALL, 0)
        }
        if (m.marioObj.localMario) {
            m2.ignoreUpdates = 40
            sendPlayerInteraction(m2.channel_id, interaction)  /// unused
        }
        take_damage_and_knock_back(m2, m.marioObj)
        //bounce_back_from_attack(m, interaction)  //temp disable to fix glitch
        return false
    }

    return false

}

const interact_pole = (m, o) => {
    const actionId = m.action & Mario.ACT_ID_MASK
    if (actionId >= 0x80 && actionId < 0x0A0) {
        if (!(m.prevAction & Mario.ACT_FLAG_ON_POLE) || m.usedObj != o) {
            const lowSpeed = m.forwardVel <= 10.0
            const marioObj = m.marioObj

            m.interactObj = o
            m.usedObj = o
            m.vel[1] = 0.0
            m.forwardVel = 0.0

            marioObj.rawData[oMarioPoleUnk108] = 0
            marioObj.rawData[oMarioPoleYawVel] = 0
            marioObj.rawData[oMarioPolePos] = m.pos[1] - o.rawData[oPosY]

            if (lowSpeed) {
                return Mario.set_mario_action(m, Mario.ACT_GRAB_POLE_SLOW, 0)
            }

            marioObj.rawData[oMarioPoleYawVel] = parseInt((m.forwardVel * 0x100) + 0x1000)

            reset_mario_pitch(m) /// TODO: WATER JUMP || SHOT FROM CANNON || ACT_FLYING
            return Mario.set_mario_action(m, Mario.ACT_GRAB_POLE_FAST, 0)

        }
    }

    return 0
}

const mario_obj_angle_to_object = (m, o) => {
    const dx = o.rawData[oPosX] - m.pos[0]
    const dz = o.rawData[oPosZ] - m.pos[2]

    return atan2s(dz, dx)
}

const determine_knockback_action = (m) => {

    const angleToObject = mario_obj_angle_to_object(m, m.interactObj)

    let facingDYaw = angleToObject - m.faceAngle[1]
    facingDYaw = facingDYaw > 32767 ? facingDYaw - 65536 : facingDYaw
    facingDYaw = facingDYaw < -32768 ? facingDYaw + 65536 : facingDYaw

    const remainingHealth = m.health - 0x40 * m.hurtCounter

    let terrainIndex = 0, strengthIndex = 0

    if (m.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
        terrainIndex = 2
    } else if (m.action & (Mario.ACT_FLAG_AIR | Mario.ACT_FLAG_ON_POLE | Mario.ACT_FLAG_HANGING)) {
        terrainIndex = 1
    }

    if (remainingHealth < 0x100) {
        strengthIndex = 2
        throw "not implemented yet"
    } else if (m.interactObj.rawData[oDamageOrCoinValue] >= 4) {
        strengthIndex = 2
    } else if (m.interactObj.rawData[oDamageOrCoinValue] >= 2) {
        strengthIndex = 1
    }

    m.faceAngle[1] = angleToObject

    if (terrainIndex == 2) {
        if (m.forwardVel < 28) Mario.set_forward_vel(m, 28)

        if (m.pos[1] >= m.interactObj.rawData[oPosY]) {
            if (m.vel[1] < 20.0) m.vel[1] = 20.0
        } else {
            if (m.vel[1] > 0.0) m.vel[1] = 0.0
        }
    } else {
        if (m.forwardVel < 16) Mario.set_forward_vel(m, 16)
    }


    let bonkAction
    if (-0x4000 <= facingDYaw && facingDYaw <= 0x4000) {
        m.forwardVel *= -1.0
        bonkAction = Mario.sBackwardKnockbackActions[terrainIndex][strengthIndex]
    } else {
        m.faceAngle[1] += 0x8000
        bonkAction = Mario.sForwardKnockbackActions[terrainIndex][strengthIndex]
    }

    if ((m.interactObj.rawData[oInteractType] & INTERACT_PLAYER) && terrainIndex != 2) {
        const scaler = m.interactObj.rawData[oDamageOrCoinValue]
        //if (scaler > 2) { scaler = 1 }
        const mag = scaler * 35
        m.forwardVel = (m.forwardVel < 0) ? -mag : mag
        //m.vel[0] = mag * Math.sin(angleToObject / 0x8000 * Math.PI)
        m.vel[1] = (m.forwardVel < 0) ? -m.forwardVel : m.forwardVel
        m.vel[1] *= 0.7
        //m.vel[2] = mag * Math.cos(angleToObject / 0x8000 * Math.PI)
    }


    return bonkAction

}

export const take_damage_and_knock_back = (m, o) => {

    if (!sInvulnerable && !(m.flags & Mario.MARIO_VANISH_CAP)
        && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {

        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED | INT_STATUS_ATTACKED_MARIO
        m.interactObj = o

        let damage = 0 /// todo

        if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_BIG_KNOCKBACK) m.forwardVel = 40.0

        if (o.rawData[oDamageOrCoinValue] > 0); //play sound

        //update mario sound and camera
        return Mario.drop_and_set_mario_action(m, determine_knockback_action(m), damage)

    }

    return 0

}

const check_kick_or_punch_wall = (m) => {
    if (m.flags & (Mario.MARIO_PUNCHING | Mario.MARIO_KICKING | Mario.MARIO_TRIPPING)) {
        const detector = [0,0,0];
        detector[0] = m.pos[0] + 50.0 * sins(m.faceAngle[1]);
        detector[2] = m.pos[2] + 50.0 * coss(m.faceAngle[1]);
        detector[1] = m.pos[1];

        if (Mario.resolve_and_return_wall_collisions(detector, 80.0, 5.0) != null) {
            if (m.action != Mario.ACT_MOVE_PUNCHING || m.forwardVel >= 0.0) {
                if (m.action == Mario.ACT_PUNCHING) {
                    m.action = Mario.ACT_MOVE_PUNCHING;
                }

                Mario.set_forward_vel(m, -48.0);
                // play_sound(SOUND_ACTION_HIT_2, m->marioObj->header.gfx.cameraToObject);
                m.particleFlags |= Mario.PARTICLE_TRIANGLE;
            } else if (m.action & Mario.ACT_FLAG_AIR) {
                Mario.set_forward_vel(m, -16.0);
                // play_sound(SOUND_ACTION_HIT_2, m->marioObj->header.gfx.cameraToObject);
                m.particleFlags |= Mario.PARTICLE_TRIANGLE;
            }
        }
    }
}

const sInteractionHandlers = [
    { interactType: INTERACT_COIN, handler: null },
    { interactType: INTERACT_WATER_RING, handler: null },
    { interactType: INTERACT_STAR_OR_KEY, handler: null },
    { interactType: INTERACT_BBH_ENTRANCE, handler: null },
    { interactType: INTERACT_WARP, handler: null },
    { interactType: INTERACT_WARP_DOOR, handler: null },
    { interactType: INTERACT_DOOR, handler: null },
    { interactType: INTERACT_CANNON_BASE, handler: null },
    { interactType: INTERACT_IGLOO_BARRIER, handler: null },
    { interactType: INTERACT_TORNADO, handler: null },
    { interactType: INTERACT_WHIRLPOOL, handler: null },
    { interactType: INTERACT_STRONG_WIND, handler: null },
    { interactType: INTERACT_FLAME, handler: null },
    { interactType: INTERACT_SNUFIT_BULLET, handler: null },
    { interactType: INTERACT_CLAM_OR_BUBBA, handler: null },
    { interactType: INTERACT_BULLY, handler: null },
    { interactType: INTERACT_SHOCK, handler: null },
    { interactType: INTERACT_BOUNCE_TOP2, handler: null },
    { interactType: INTERACT_MR_BLIZZARD, handler: null },
    { interactType: INTERACT_HIT_FROM_BELOW, handler: null },
    { interactType: INTERACT_BOUNCE_TOP, handler: null },
    { interactType: INTERACT_DAMAGE, handler: null },
    { interactType: INTERACT_POLE, handler: interact_pole },
    { interactType: INTERACT_HOOT, handler: null },
    { interactType: INTERACT_BREAKABLE, handler: null },
    { interactType: INTERACT_KOOPA, handler: null },
    { interactType: INTERACT_KOOPA_SHELL, handler: null },
    { interactType: INTERACT_UNKNOWN_08, handler: null },
    { interactType: INTERACT_CAP, handler: null },
    { interactType: INTERACT_GRABBABLE, handler: null },
    { interactType: INTERACT_TEXT, handler: null },
    { interactType: INTERACT_PLAYER, handler: interact_player }
]

const mario_get_collided_object = (m, interactType) => {
    for (let i = 0; i < m.marioObj.collidedObjs.length; i++) {
        const object = m.marioObj.collidedObjs[i]

        if (object.rawData[oInteractType] == interactType) return object
    }
}

export const mario_process_interactions = (m) => {


    if (!(m.action & Mario.ACT_FLAG_INTANGIBLE) && m.collidedObjInteractTypes != 0) {

        for (let i = 0; i < 32; i++) {
            const { interactType, handler } = sInteractionHandlers[i]
            if (m.collidedObjInteractTypes & interactType) {
                if (!handler) throw "need to implement interact handler for type: " + interactType

                const object = mario_get_collided_object(m, interactType)

                m.collidedObjInteractTypes &= ~interactType                
                if (!(object.rawData[oInteractStatus] & INT_STATUS_INTERACTED)) {
                    if (handler(m, object)) break
                }

            }
        }
    }

    if (m.invincTimer > 0 && !sDelayInvincTimer) {
        m.invincTimer -= 1
    }

    check_kick_or_punch_wall(m);


    m.flags &= ~Mario.MARIO_PUNCHING & ~Mario.MARIO_KICKING & ~Mario.MARIO_TRIPPING

}
