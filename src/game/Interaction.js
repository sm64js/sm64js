import * as Mario from "./Mario"
import { AreaInstance as Area } from "./Area"
import * as MarioConstants from "../include/mario_constants"
import { oInteractType, oInteractStatus, oMarioPoleUnk108, oMarioPoleYawVel, oMarioPolePos, oPosY, oInteractionSubtype, oDamageOrCoinValue, oPosX, oPosZ } from "../include/object_constants"
import { atan2s } from "../engine/math_util"
import { sins, coss, int16 } from "../utils"
import { gLinker } from "./Linker"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import { SURFACE_DEATH_PLANE, SURFACE_VERTICAL_WIND } from "../include/surface_terrains"
import { LEVEL_CCM, LEVEL_TTM, LEVEL_WF, LEVEL_HMC } from "../levels/level_defines_constants"
import { COURSE_IS_MAIN_COURSE } from "../levels/course_defines"
import { CameraInstance as Camera } from "./Camera"

export const INTERACT_HOOT           /* 0x00000001 */ = (1 << 0)
export const INTERACT_GRABBABLE      /* 0x00000002 */ = (1 << 1)
export const INTERACT_DOOR           /* 0x00000004 */ = (1 << 2)
export const INTERACT_DAMAGE         /* 0x00000008 */ = (1 << 3)
export const INTERACT_COIN           /* 0x00000010 */ = (1 << 4)
export const INTERACT_CAP            /* 0x00000020 */ = (1 << 5)
export const INTERACT_POLE           /* 0x00000040 */ = (1 << 6)
export const INTERACT_KOOPA          /* 0x00000080 */ = (1 << 7)
export const INTERACT_UNKNOWN_08     /* 0x00000100 */ = (1 << 8)
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
export const INTERACT_UNKNOWN_31     /* 0x80000000 */ = (1 << 31)

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

export const INT_ATTACK_NOT_FROM_BELOW = (INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_SLIDE_KICK | INT_FAST_ATTACK_OR_SHELL | INT_HIT_FROM_ABOVE)

export const INT_STATUS_ATTACK_MASK = 0x000000FF

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

export const ATTACK_PUNCH                 = 1
export const ATTACK_KICK_OR_TRIP          = 2
export const ATTACK_FROM_ABOVE            = 3
export const ATTACK_GROUND_POUND_OR_TWIRL = 4
export const ATTACK_FAST_ATTACK           = 5
export const ATTACK_FROM_BELOW            = 6

let sDelayInvincTimer = false
let sInvulnerable = false

const reset_mario_pitch = (m) => {
    /// TODO: WATER JUMP || SHOT FROM CANNON || ACT_FLYING
}

const check_death_barrier = (m) => {

    //// the actual code
    /*    if (m -> pos[1] < m -> floorHeight + 2048.0f) {
            if (level_trigger_warp(m, WARP_OP_WARP_FLOOR) == 20 && !(m -> flags & MARIO_UNKNOWN_18)) {
                play_sound(SOUND_MARIO_WAAAOOOW, m -> marioObj -> header.gfx.cameraToObject)
            }
        }*/

    /// Temp code because death is not implemented
    if (m.pos[1] < m.floorHeight + 2048) {
        switch (Area.gCurrLevelNum) {
            case LEVEL_CCM:  // CCM
                m.pos = [-1512, 2560, -2305]
                break

            case LEVEL_TTM:  // TTM
                m.pos = [102, -4332, 5734]
                break

            case LEVEL_WF:  // WF
                m.pos = [2600, 1256, 5120]
                break

            case LEVEL_HMC:
                m.pos = [-7152, 2161, 7181]
                break
        }
    }

}

export const mario_handle_special_floors = (m) => {
    if ((m.action & Mario.ACT_GROUP_MASK) == Mario.ACT_GROUP_CUTSCENE) {
        return
    }

    if (m.floor != null) {
        const floorType = m.floor.type

        switch (floorType) {
            case SURFACE_DEATH_PLANE:
            case SURFACE_VERTICAL_WIND:
                check_death_barrier(m)
                break
        }
    }
}

const interact_coin = (m, o) => {
    m.numCoins += o.rawData[oDamageOrCoinValue]
    m.healCounter += 4 * o.rawData[oDamageOrCoinValue]

    o.rawData[oInteractStatus] = INT_STATUS_INTERACTED

    if (COURSE_IS_MAIN_COURSE(Area.gCurrCourseNum) && m.numCoins - o.rawData[oDamageOrCoinValue] < 100 && m.numCoins >= 100) {
        /// 100 coin star!
        /// TODO spawn star
    }

    return 0
}

const interact_bounce_top = (m, o) => {
    let interaction 

    if (m.flags & Mario.MARIO_METAL_CAP) {
        interaction = INT_FAST_ATTACK_OR_SHELL
    } else {
        interaction = determine_interaction(m, o)
    }

    if (interaction & INT_ATTACK_NOT_FROM_BELOW) {
        attack_object(o, interaction)
        bounce_back_from_attack(m, interaction)

        if (interaction & INT_HIT_FROM_ABOVE) {

            if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_TWIRL_BOUNCE) {
                throw "need to implement twirl bounce"
            } else {
                bounce_off_object(m, o, 30.0)
            }

        }

    } else if (take_damage_and_knock_back(m, o)) {
        return 1
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }
    return 0

}

const interact_damage = (m, o) => {
    if (take_damage_and_knock_back(m, o)) return 1

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }

    return 0
}

const interact_mr_blizzard = (m, o) => {
    if (take_damage_and_knock_back(m, o)) {
        return 1
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }

    return 0
}

const interact_grabbable = (m, o) => {

    const script = o.behavior

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_KICKABLE) {
        const interaction = determine_interaction(m, o)
        if (interaction & (INT_KICK | INT_TRIP)) {
            attack_object(o, interaction)
            bounce_back_from_attack(m, interaction)
            return 0
        }
    }

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO) {
        throw "unimplemented object grabs mario - interact_grabbable"
    }

    if (able_to_grab_object(m, o)) {
        if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_NOT_GRABBABLE)) {
            m.interactObj = o
            m.input |= Mario.INPUT_INTERACT_OBJ_GRABBABLE
            return 1
        }
    }

    if (script != gLinker.behaviors.bhvBowser) {
        push_mario_out_of_object(m, o, -5.0)
    }

    return 0
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

const able_to_grab_object = (m, o) => {
    const action = m.action

    if (action == Mario.ACT_DIVE_SLIDE || action == Mario.ACT_DIVE) {
        if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO)) {
            return 1
        }
    } else if (action == Mario.ACT_PUNCHING || action == Mario.ACT_MOVE_PUNCHING) {
        if (m.actionArg < 2) {
            return 1
        }
    }

    return 0
}

const mario_obj_angle_to_object = (m, o) => {
    const dx = o.rawData[oPosX] - m.pos[0]
    const dz = o.rawData[oPosZ] - m.pos[2]

    return atan2s(dz, dx)
}

const push_mario_out_of_object = (m, o, padding) => {
    const minDistance = o.hitboxRadius + m.marioObj.hitboxRadius + padding

    const offsetX = m.pos[0] - o.rawData[oPosX]
    const offsetZ = m.pos[2] - o.rawData[oPosZ]
    const distance = Math.sqrt(offsetX * offsetX + offsetZ * offsetZ)

    if (distance < minDistance) {
        let pushAngle

        if (distance == 0.0) {
            pushAngle = m.faceAngle[1]
        } else {
            pushAngle = atan2s(offsetZ, offsetX)
        }

        const newMarioX = { value: o.rawData[oPosX] + minDistance * sins(pushAngle) }
        const newMarioZ = { value: o.rawData[oPosZ] + minDistance * coss(pushAngle) }
        const newMarioY = { value: m.pos[1] }

        Spawn.SurfaceCollision.find_wall_collision(newMarioX, newMarioY, newMarioZ, 60.0, 50.0)
        m.pos[1] = newMarioY.value

        const floorWrapper = {}
        Spawn.SurfaceCollision.find_floor(newMarioX.value, m.pos[1], newMarioZ.value, floorWrapper)
        if (floorWrapper.floor != null) {
            //! Doesn't update mario's referenced floor (allows oob death when
            // an object pushes you into a steep slope while in a ground action)
            m.pos[0] = newMarioX.value
            m.pos[2] = newMarioZ.value
        }
    }
}

const attack_object = (o, interaction) => {
    let attackType = 0

    switch (interaction) {
        case INT_GROUND_POUND_OR_TWIRL:
            attackType = ATTACK_GROUND_POUND_OR_TWIRL
            break
        case INT_PUNCH:
            attackType = ATTACK_PUNCH
            break
        case INT_KICK:
        case INT_TRIP:
            attackType = ATTACK_KICK_OR_TRIP
            break
        case INT_SLIDE_KICK:
        case INT_FAST_ATTACK_OR_SHELL:
            attackType = ATTACK_FAST_ATTACK
            break
        case INT_HIT_FROM_ABOVE:
            attackType = ATTACK_FROM_ABOVE
            break
        case INT_HIT_FROM_BELOW:
            attackType = ATTACK_FROM_BELOW
            break
    }

    o.rawData[oInteractStatus] = attackType + (INT_STATUS_INTERACTED | INT_STATUS_WAS_ATTACKED)
    return attackType
}

const bounce_off_object = (m, o, velY) => {
    m.pos[1] = o.rawData[oPosY] + o.hitboxHeight
    m.vel[1] = velY

    m.flags &= ~Mario.MARIO_UNKNOWN_08

    //play_sound(SOUND_ACTION_BOUNCE_OFF_OBJECT, m -> marioObj -> header.gfx.cameraToObject)
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

        //set_camera_shake_from_hit(SHAKE_ATTACK) TODO
        m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE
    }

    if (interaction & (INT_PUNCH | INT_KICK | INT_TRIP | INT_FAST_ATTACK_OR_SHELL)) {
        //play_sound(SOUND_ACTION_HIT_2, m -> marioObj -> header.gfx.cameraToObject)
    }
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
                if (true) {
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
                interaction = INT_GROUND_POUND_OR_TWIRL
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

const determine_knockback_action = (m) => {

    const angleToObject = mario_obj_angle_to_object(m, m.interactObj)

    let facingDYaw = int16( angleToObject - m.faceAngle[1] )

    const remainingHealth = m.health - 0x40 * m.hurtCounter

    let terrainIndex = 0, strengthIndex = 0

    if (m.action & (Mario.ACT_FLAG_SWIMMING | Mario.ACT_FLAG_METAL_WATER)) {
        terrainIndex = 2
    } else if (m.action & (Mario.ACT_FLAG_AIR | Mario.ACT_FLAG_ON_POLE | Mario.ACT_FLAG_HANGING)) {
        terrainIndex = 1
    }

    if (remainingHealth < 0x100) {
        strengthIndex = 2
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

    return bonkAction

}

const take_damage_from_interact_object = (m) => {

    const damage = m.interactObj.rawData[oDamageOrCoinValue]

    let shake

    if (damage >= 4) {
        shake = Camera.SHAKE_LARGE_DAMAGE
    } else if (damage >= 2) {
        shake = Camera.SHAKE_MED_DAMAGE
    } else {
        shake = Camera.SHAKE_SMALL_DAMAGE
    }

    if (!(m.flags & Mario.MARIO_CAP_ON_HEAD)) {
        damage += (damage + 1) / 2
    }

    if (m.flags & Mario.MARIO_METAL_CAP) {
        damage = 0
    }

    m.hurtCounter += 4 * damage

    Camera.set_camera_shake_from_hit(shake)

    return damage

}


export const take_damage_and_knock_back = (m, o) => {

    if (!sInvulnerable && !(m.flags & Mario.MARIO_VANISH_CAP)
        && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {

        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED | INT_STATUS_ATTACKED_MARIO
        m.interactObj = o

        const damage = take_damage_from_interact_object(m)

        if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_BIG_KNOCKBACK) m.forwardVel = 40.0

        if (o.rawData[oDamageOrCoinValue] > 0); //play sound

        //update mario sound and camera
        return Mario.drop_and_set_mario_action(m, determine_knockback_action(m, o.rawData[oDamageOrCoinValue]), damage)

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
                m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE;
            } else if (m.action & Mario.ACT_FLAG_AIR) {
                Mario.set_forward_vel(m, -16.0);
                // play_sound(SOUND_ACTION_HIT_2, m->marioObj->header.gfx.cameraToObject);
                m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE;
            }
        }
    }
}

const sInteractionHandlers = [
    { interactType: INTERACT_COIN, handler: interact_coin },
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
    { interactType: INTERACT_MR_BLIZZARD, handler: interact_mr_blizzard },
    { interactType: INTERACT_HIT_FROM_BELOW, handler: null },
    { interactType: INTERACT_BOUNCE_TOP, handler: interact_bounce_top },
    { interactType: INTERACT_DAMAGE, handler: interact_damage },
    { interactType: INTERACT_POLE, handler: interact_pole },
    { interactType: INTERACT_HOOT, handler: null },
    { interactType: INTERACT_BREAKABLE, handler: null },
    { interactType: INTERACT_KOOPA, handler: null },
    { interactType: INTERACT_KOOPA_SHELL, handler: null },
    { interactType: INTERACT_UNKNOWN_08, handler: null },
    { interactType: INTERACT_CAP, handler: null },
    { interactType: INTERACT_GRABBABLE, handler: interact_grabbable },
    { interactType: INTERACT_TEXT, handler: null },
]

const mario_get_collided_object = (m, interactType) => {
    for (let i = 0; i < m.marioObj.collidedObjs.length; i++) {
        const object = m.marioObj.collidedObjs[i]

        if (object.rawData[oInteractType] == interactType) return object
    }
}

export const mario_process_interactions = (m) => {

    sDelayInvincTimer = 0
    sInvulnerable = (m.action & Mario.ACT_FLAG_INVULNERABLE) || m.invincTimer != 0


    if (!(m.action & Mario.ACT_FLAG_INTANGIBLE) && m.collidedObjInteractTypes != 0) {

        for (let i = 0; i < 31; i++) {
            const { interactType, handler } = sInteractionHandlers[i]
            if (m.collidedObjInteractTypes & interactType) {
                if (!handler) throw "need to implement interact handler for type: " + interactType + " all types: " + m.collidedObjInteractTypes

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
