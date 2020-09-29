import * as Mario from "./Mario"
import { oInteractType, oInteractStatus, oMarioPoleUnk108, oMarioPoleYawVel, oMarioPolePos, oPosY, oInteractionSubtype, oDamageOrCoinValue, oPosX, oPosZ } from "../include/object_constants"
import { atan2s } from "../engine/math_util"

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
export const INTERACT_PLAYER     /* 0x80000000 */ = (1 << 8)  // formerly 31
export const INTERACT_UNKNOWN_08     /* 0x00000100 */ = (1 << 31) // formerly 8


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

const interact_player = (m, o) => {
    console.log("interact player")
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
        const mag = scaler * 25
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


    m.flags &= ~Mario.MARIO_PUNCHING & ~Mario.MARIO_KICKING & ~Mario.MARIO_TRIPPING

}