import {
         ACT_DIVE,
         ACT_DIVE_SLIDE,

         ACT_FLAG_AIR,
         ACT_FLAG_ATTACKING,
         ACT_FLAG_DIVING,
         ACT_FLAG_HANGING,
         ACT_FLAG_IDLE,
         ACT_FLAG_INTANGIBLE,
         ACT_FLAG_INVULNERABLE,
         ACT_FLAG_METAL_WATER,
         ACT_FLAG_ON_POLE,
         ACT_FLAG_RIDING_SHELL,
         ACT_FLAG_SWIMMING,

         ACT_FLYING,
         ACT_GETTING_BLOWN,

         ACT_GRAB_POLE_FAST,
         ACT_GRAB_POLE_SLOW,

         ACT_GROUND_POUND,
         ACT_GROUND_POUND_LAND,
         ACT_GROUP_CUTSCENE,
         ACT_GROUP_MASK,
         ACT_ID_MASK,
         ACT_IN_CANNON,
         ACT_JUMP_KICK,
         ACT_MOVE_PUNCHING,

         ACT_PICKING_UP,
         ACT_PICKING_UP_BOWSER,
         ACT_PUNCHING,
         ACT_READING_SIGN,
         ACT_RIDING_HOOT,
         ACT_SHOT_FROM_CANNON,
         ACT_SLIDE_KICK,
         ACT_SLIDE_KICK_SLIDE,
         ACT_TWIRL_LAND,
         ACT_TWIRLING,
         ACT_WALKING,
         ACT_WATER_JUMP,
         ACT_WATER_PUNCH,

         INPUT_A_PRESSED,
         INPUT_B_PRESSED,
         INPUT_INTERACT_OBJ_GRABBABLE,

         MARIO_KICKING,
         MARIO_PUNCHING,
         MARIO_TRIPPING,
         MARIO_UNKNOWN_08,

         MARIO_METAL_CAP,
         MARIO_VANISH_CAP,
         MARIO_WING_CAP,
         MARIO_CAP_ON_HEAD,
         MARIO_CAP_IN_HAND,
         ACT_PUTTING_ON_CAP,

         drop_and_set_mario_action,
         resolve_and_return_wall_collisions,
         sBackwardKnockbackActions,
         set_forward_vel,
         set_mario_action,
         sForwardKnockbackActions               } from "./Mario"

import { AreaInstance as Area } from "./Area"
import * as MarioConstants from "../include/mario_constants"
import { oInteractType, oInteractStatus, oMarioPoleUnk108, oMarioPoleYawVel, oMarioPolePos, oPosY,
    oInteractionSubtype, oDamageOrCoinValue, oPosX, oPosZ, oMoveAngleYaw } from "../include/object_constants"
import { atan2s } from "../engine/math_util"
import { sins, coss, int16, s16 } from "../utils"
import { gLinker } from "./Linker"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import { SURFACE_DEATH_PLANE, SURFACE_VERTICAL_WIND } from "../include/surface_terrains"
import { LEVEL_CCM, LEVEL_TTM, LEVEL_WF, LEVEL_HMC } from "../levels/level_defines_constants"
import { COURSE_IS_MAIN_COURSE } from "../levels/course_defines"
import { CameraInstance as Camera } from "./Camera"
import * as CAMERA from "./Camera"  // for constants

import { stop_shell_music } from "./SoundInit"

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

export const INT_ATTACK_NOT_FROM_BELOW =
    (INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_SLIDE_KICK
     | INT_FAST_ATTACK_OR_SHELL | INT_HIT_FROM_ABOVE)

export const INT_ANY_ATTACK =
    (INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_SLIDE_KICK 
     | INT_FAST_ATTACK_OR_SHELL | INT_HIT_FROM_ABOVE | INT_HIT_FROM_BELOW)

export const INT_ATTACK_NOT_WEAK_FROM_ABOVE =
    (INT_GROUND_POUND_OR_TWIRL | INT_PUNCH | INT_KICK | INT_TRIP | INT_HIT_FROM_BELOW)

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
    if ((m.action & ACT_GROUP_MASK) == ACT_GROUP_CUTSCENE) {
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

const reset_mario_pitch = (m) => {
    if (m.action == ACT_WATER_JUMP || m.action == ACT_SHOT_FROM_CANNON || m.action == ACT_FLYING) {
        Camera.set_camera_mode(m.area.camera, m.area.camera.defMode, 1)
        m.faceAngle[0] = 0
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

const mario_stop_riding_object = (m) => {
    if (m.riddenObj) {
        m.riddenObj.rawData[oInteractStatus] = INT_STATUS_STOP_RIDING
        stop_shell_music()
        m.riddenObj = null
    }
}

const mario_stop_riding_and_holding = (m) => {
    mario_drop_held_object(m)
    mario_stop_riding_object(m)

    if (m.action == ACT_RIDING_HOOT) {
        m.usedObj.rawData[oInteractStatus] = 0
        m.usedObj.rawData[oHootMarioReleaseTime] = window.gGlobalTimer
    }
}

const interact_cannon_base = (m, o) => {
    if (m.action != ACT_IN_CANNON) {
        mario_stop_riding_and_holding(m)
        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED
        m.interactObj = o
        m.usedObj = o
        return set_mario_action(m, ACT_IN_CANNON, 0)
    }

    return 0
}

const interact_bounce_top = (m, o) => {
    let interaction 

    if (m.flags & MARIO_METAL_CAP) {
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

const interact_breakable = (m, o) => {
    const interaction = determine_interaction(m, o)

    if (interaction & INT_ATTACK_NOT_WEAK_FROM_ABOVE) {
        attack_object(o, interaction)
        bounce_back_from_attack(m, interaction)

        m.interactObj = o

        switch (interaction) {
            case INT_HIT_FROM_ABOVE:
                bounce_off_object(m, o, 30.0)  //! Not in the 0x8F mask
                break

            case INT_HIT_FROM_BELOW:
                hit_object_from_below(m, o)
                break
        }

        return 1
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


export const interact_cap = (m, o) => {
   let /*u32*/capFlag = get_mario_cap_flag(o)
   let /*u16*/capMusic = 0
   let /*u16*/capTime = 0

   return 0  // DEBUG

    if (m.action != ACT_GETTING_BLOWN && capFlag != 0) {
        m.interactObj = o
        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED

        m.flags &= ~MARIO_CAP_ON_HEAD & ~MARIO_CAP_IN_HAND
        m.flags |= capFlag

        switch (capFlag) {
            case MARIO_VANISH_CAP:
                capTime = 600
                // capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP)
                break

            case MARIO_METAL_CAP:
                capTime = 600
                // capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_METAL_CAP)
                break

            case MARIO_WING_CAP:
                capTime = 1800
                // capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP)
                break
        }

        if (capTime > m.capTimer) {
            m.capTimer = capTime
        }

        if ((m.action & ACT_FLAG_IDLE) || m.action == ACT_WALKING) {
            m.flags |= MARIO_CAP_IN_HAND
            set_mario_action(m, ACT_PUTTING_ON_CAP, 0)
        } else {
            m.flags |= MARIO_CAP_ON_HEAD
        }

        // play_sound(SOUND_MENU_STAR_SOUND, m.marioObj.header.gfx.cameraToObject)
        // play_sound(SOUND_MARIO_HERE_WE_GO, m.marioObj.header.gfx.cameraToObject)

        if (capMusic != 0) {
            play_cap_music(capMusic)
        }

        return 1
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
            m.input |= INPUT_INTERACT_OBJ_GRABBABLE
            return 1
        }
    }

    if (script != gLinker.behaviors.bhvBowser) {
        push_mario_out_of_object(m, o, -5.0)
    }

    return 0
}


const mario_can_talk = (m, arg) => {
    let val6

    return 0  // TODO implement ACT_READING_SIGN

    if ((m.action & ACT_FLAG_IDLE) != 0x00000000) {
        return 1
    }

    if (m.action == ACT_WALKING) {
        if (arg) {
            return 1
        }

        val6 = m.marioObj.header.gfx.unk38.animID

        if (val6 == 0x0080 || val6 == 0x007F || val6 == 0x006C) {
            return 1
        }
    }

    return 0
}

const check_read_sign = (m, o) => {
    if ((m.input & (INPUT_B_PRESSED | INPUT_A_PRESSED)) && mario_can_talk(m, 0) && object_facing_mario(m, o, 0x4000)) {
        const facingDYaw = s16(s16(o.rawData[oMoveAngleYaw] + 0x8000) - m.faceAngle[1])
        if (facingDYaw >= -0x4000 && facingDYaw <= 0x4000) {
            const targetX = o.rawData[oPosX] + 105.0 * sins(o.rawData[oMoveAngleYaw])
            const targetZ = o.rawData[oPosZ] + 105.0 * coss(o.rawData[oMoveAngleYaw])

            m.marioObj.oMarioReadingSignDYaw = facingDYaw;
            m.marioObj.oMarioReadingSignDPosX = targetX - m.pos[0]
            m.marioObj.oMarioReadingSignDPosZ = targetZ - m.pos[2]

            m.interactObj = o
            m.usedObj = o
            return set_mario_action(m, ACT_READING_SIGN, 0)
        }
    }

    return 0
}

const check_npc_talk = (m, o) => {
    if ((m.input & (INPUT_B_PRESSED | INPUT_A_PRESSED)) && mario_can_talk(m, 1)) {
        const facingDYaw = s16(mario_obj_angle_to_object(m, o) - m.faceAngle[1])
        if (facingDYaw >= -0x4000 && facingDYaw <= 0x4000) {
            o.rawData[oInteractStatus] = INT_STATUS_INTERACTED

            m.interactObj = o
            m.usedObj = o

            push_mario_out_of_object(m, o, -10.0)
            return set_mario_action(m, ACT_WAITING_FOR_DIALOG, 0)
        }
    }

    push_mario_out_of_object(m, o, -10.0)
    return 0
}

const interact_text = (m, o) => {
    let interact = 0

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_SIGN) {
        interact = check_read_sign(m, o)
    } else if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_NPC) {
        interact = check_npc_talk(m, o)
    } else {
        push_mario_out_of_object(m, o, 2.0)
    }

    return interact
}

const interact_pole = (m, o) => {
    const actionId = m.action & ACT_ID_MASK
    if (actionId >= 0x80 && actionId < 0x0A0) {
        if (!(m.prevAction & ACT_FLAG_ON_POLE) || m.usedObj != o) {
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
                return set_mario_action(m, ACT_GRAB_POLE_SLOW, 0)
            }

            marioObj.rawData[oMarioPoleYawVel] = parseInt((m.forwardVel * 0x100) + 0x1000)

            reset_mario_pitch(m)
            return set_mario_action(m, ACT_GRAB_POLE_FAST, 0)
        }
    }

    return 0
}

const able_to_grab_object = (m, o) => {
    const action = m.action

    if (action == ACT_DIVE_SLIDE || action == ACT_DIVE) {
        if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO)) {
            return 1
        }
    } else if (action == ACT_PUNCHING || action == ACT_MOVE_PUNCHING) {
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

    m.flags &= ~MARIO_UNKNOWN_08

    //play_sound(SOUND_ACTION_BOUNCE_OFF_OBJECT, m -> marioObj -> header.gfx.cameraToObject)
}

const hit_object_from_below = (m, o) => {
    m.vel[1] = 0.0
    Camera.set_camera_shake_from_hit(CAMERA.SHAKE_HIT_FROM_BELOW)
}

const bounce_back_from_attack = (m, interaction) => {

    if (interaction & (INT_PUNCH | INT_KICK | INT_TRIP)) {
        if (m.action == ACT_PUNCHING) {
            m.action = ACT_MOVE_PUNCHING
        }

        if (m.action & ACT_FLAG_AIR) {
            set_forward_vel(m, -16.0)
        } else {
            set_forward_vel(m, -48.0)
        }

        Camera.set_camera_shake_from_hit(CAMERA.SHAKE_ATTACK)
        m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE
    }

    if (interaction & (INT_PUNCH | INT_KICK | INT_TRIP | INT_FAST_ATTACK_OR_SHELL)) {
        //play_sound(SOUND_ACTION_HIT_2, m -> marioObj -> header.gfx.cameraToObject)
    }
}

/**
 * Returns the type of cap Mario is wearing.
 */
export const get_mario_cap_flag = (capObject) => {
    const script = capObject.behavior

    // if (script == bhvNormalCap) {
    //     return MARIO_NORMAL_CAP
    // } else if (script == bhvMetalCap) {
    //     return MARIO_METAL_CAP
    // } else if (script == bhvWingCap) {
        return MARIO_WING_CAP
    // } else if (script == bhvVanishCap) {
    //     return MARIO_VANISH_CAP
    // }

    return 0
}


/**
 * Returns true if the passed in object has a moving angle yaw
 * in the angular range given towards Mario.
 */
const object_facing_mario = (m, o, angleRange) => {
    let dx = m.pos[0] - o.rawData[oPosX]
    let dz = m.pos[2] - o.rawData[oPosZ]

    let angleToMario = atan2s(dz, dx)
    let dAngle = s16(angleToMario - o.rawData[oMoveAngleYaw])

    if (-angleRange <= dAngle && dAngle <= angleRange) {
        return 1
    }

    return 0
}


const determine_interaction = (m, o) => {
    let interaction = 0
    const action = m.action

    let dYawToObject = mario_obj_angle_to_object(m, o) - m.faceAngle[1]
    dYawToObject = dYawToObject > 32767 ? dYawToObject - 65536 : dYawToObject
    dYawToObject = dYawToObject < -32768 ? dYawToObject + 65536 : dYawToObject

    // hack: make water punch actually do something
    if (m.action == ACT_WATER_PUNCH && o.rawData[oInteractType] & INTERACT_PLAYER) {
        if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
            return INT_PUNCH
        }
    }

    if (action & ACT_FLAG_ATTACKING) {
        if (action == ACT_PUNCHING || action == ACT_MOVE_PUNCHING || action == ACT_JUMP_KICK) {

            if (m.flags & MARIO_PUNCHING) {
                // 120 degrees total, or 60 each way
                if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
                    interaction = INT_PUNCH
                }
            }
            if (m.flags & MARIO_KICKING) {
                // 120 degrees total, or 60 each way
                if (-0x2AAA <= dYawToObject && dYawToObject <= 0x2AAA) {
                    interaction = INT_KICK
                }
            }
            if (m.flags & MARIO_TRIPPING) {
                // 180 degrees total, or 90 each way
                if (true) {
                    interaction = INT_TRIP
                }
            }
        } else if (action == ACT_GROUND_POUND || action == ACT_TWIRLING) {
            if (m.vel[1] < 0.0) {
                interaction = INT_GROUND_POUND_OR_TWIRL
            }
        } else if (action == ACT_GROUND_POUND_LAND || action == ACT_TWIRL_LAND) {
            // Neither ground pounding nor twirling change Mario's vertical speed on landing.,
            // so the speed check is nearly always true (perhaps not if you land while going upwards?)
            // Additionally, actionState it set on each first thing in their action, so this is
            // only true prior to the very first frame (i.e. active 1 frame prior to it run).
            if (m.vel[1] < 0.0 && m.actionState == 0) {
                interaction = INT_GROUND_POUND_OR_TWIRL
            }
        } else if (action == ACT_SLIDE_KICK || action == ACT_SLIDE_KICK_SLIDE) {
            interaction = INT_SLIDE_KICK
        } else if (action & ACT_FLAG_RIDING_SHELL) {
            interaction = INT_FAST_ATTACK_OR_SHELL
        } else if (m.forwardVel <= -26.0 || 26.0 <= m.forwardVel) {
            interaction = INT_FAST_ATTACK_OR_SHELL
        }

    }

    // Prior to this, the interaction type could be overwritten. This requires, however,
    // that the interaction not be set prior. This specifically overrides turning a ground
    // pound into just a bounce.

    if (interaction == 0 && (action & ACT_FLAG_AIR)) {
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


export const mario_drop_held_object = (m) => {
    if (m.heldObj != null) {
        if (m.heldObj.behavior == bhvKoopaShellUnderwater) {
            // stop_shell_music()
        }

        obj_set_held_state(m.heldObj, bhvCarrySomething4)

        // ! When dropping an object instead of throwing it, it will be put at Mario's
        // y-positon instead of the HOLP's y-position. This fact is often exploited when
        // cloning objects.
        m.heldObj.oPosX = m.marioBodyState.heldObjLastPosition[0]
        m.heldObj.oPosY = m.pos[1]
        m.heldObj.oPosZ = m.marioBodyState.heldObjLastPosition[2]

        m.heldObj.oMoveAngleYaw = m.faceAngle[1]

        m.heldObj = null
    }
}


const determine_knockback_action = (m) => {

    const angleToObject = mario_obj_angle_to_object(m, m.interactObj)

    let facingDYaw = int16( angleToObject - m.faceAngle[1] )

    const remainingHealth = m.health - 0x40 * m.hurtCounter

    let terrainIndex = 0, strengthIndex = 0

    if (m.action & (ACT_FLAG_SWIMMING | ACT_FLAG_METAL_WATER)) {
        terrainIndex = 2
    } else if (m.action & (ACT_FLAG_AIR | ACT_FLAG_ON_POLE | ACT_FLAG_HANGING)) {
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
        if (m.forwardVel < 28) set_forward_vel(m, 28)

        if (m.pos[1] >= m.interactObj.rawData[oPosY]) {
            if (m.vel[1] < 20.0) m.vel[1] = 20.0
        } else {
            if (m.vel[1] > 0.0) m.vel[1] = 0.0
        }
    } else {
        if (m.forwardVel < 16) set_forward_vel(m, 16)
    }


    let bonkAction
    if (-0x4000 <= facingDYaw && facingDYaw <= 0x4000) {
        m.forwardVel *= -1.0
        bonkAction = sBackwardKnockbackActions[terrainIndex][strengthIndex]
    } else {
        m.faceAngle[1] += 0x8000
        bonkAction = sForwardKnockbackActions[terrainIndex][strengthIndex]
    }

    return bonkAction

}

const take_damage_from_interact_object = (m) => {

    const damage = m.interactObj.rawData[oDamageOrCoinValue]

    let shake

    if (damage >= 4) {
        shake = CAMERA.SHAKE_LARGE_DAMAGE
    } else if (damage >= 2) {
        shake = CAMERA.SHAKE_MED_DAMAGE
    } else {
        shake = CAMERA.SHAKE_SMALL_DAMAGE
    }

    if (!(m.flags & MARIO_CAP_ON_HEAD)) {
        damage += (damage + 1) / 2
    }

    if (m.flags & MARIO_METAL_CAP) {
        damage = 0
    }

    m.hurtCounter += 4 * damage

    Camera.set_camera_shake_from_hit(shake)

    return damage

}


export const take_damage_and_knock_back = (m, o) => {

    if (!sInvulnerable && !(m.flags & MARIO_VANISH_CAP)
        && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {

        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED | INT_STATUS_ATTACKED_MARIO
        m.interactObj = o

        const damage = take_damage_from_interact_object(m)

        if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_BIG_KNOCKBACK) m.forwardVel = 40.0

        if (o.rawData[oDamageOrCoinValue] > 0); //play sound

        //update mario sound and camera
        return drop_and_set_mario_action(m, determine_knockback_action(m, o.rawData[oDamageOrCoinValue]), damage)

    }

    return 0

}

const check_kick_or_punch_wall = (m) => {
    if (m.flags & (MARIO_PUNCHING | MARIO_KICKING | MARIO_TRIPPING)) {
        const detector = [0,0,0];
        detector[0] = m.pos[0] + 50.0 * sins(m.faceAngle[1]);
        detector[2] = m.pos[2] + 50.0 * coss(m.faceAngle[1]);
        detector[1] = m.pos[1];

        if (resolve_and_return_wall_collisions(detector, 80.0, 5.0) != null) {
            if (m.action != ACT_MOVE_PUNCHING || m.forwardVel >= 0.0) {
                if (m.action == ACT_PUNCHING) {
                    m.action = ACT_MOVE_PUNCHING;
                }

                set_forward_vel(m, -48.0);
                // play_sound(SOUND_ACTION_HIT_2, m->marioObj->header.gfx.cameraToObject);
                m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE;
            } else if (m.action & ACT_FLAG_AIR) {
                set_forward_vel(m, -16.0);
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
    { interactType: INTERACT_CANNON_BASE, handler: interact_cannon_base },
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
    { interactType: INTERACT_BREAKABLE, handler: interact_breakable },
    { interactType: INTERACT_KOOPA, handler: null },
    { interactType: INTERACT_KOOPA_SHELL, handler: null },
    { interactType: INTERACT_UNKNOWN_08, handler: null },
    { interactType: INTERACT_CAP, handler: interact_cap },
    { interactType: INTERACT_GRABBABLE, handler: interact_grabbable },
    { interactType: INTERACT_TEXT, handler: interact_text },
]

const mario_get_collided_object = (m, interactType) => {
    for (let i = 0; i < m.marioObj.collidedObjs.length; i++) {
        const object = m.marioObj.collidedObjs[i]

        if (object.rawData[oInteractType] == interactType) return object
    }
}

export const mario_check_object_grab = (m) => {
    let result = 0
    let script

    if (m.input & INPUT_INTERACT_OBJ_GRABBABLE) {
        script = m.interactObj.behavior

        if (script == gLinker.behaviors.bhvBowser) {
            let facingDYaw = s16(m.faceAngle[1] - m.interactObj.oMoveAngleYaw)
            if (facingDYaw >= -0x5555 && facingDYaw <= 0x5555) {
                m.faceAngle[1] = m.interactObj.oMoveAngleYaw
                m.usedObj = m.interactObj
                result = set_mario_action(m, ACT_PICKING_UP_BOWSER, 0)
            }
        } else {
            let facingDYaw = s16(mario_obj_angle_to_object(m, m.interactObj) - m.faceAngle[1])
            if (facingDYaw >= -0x2AAA && facingDYaw <= 0x2AAA) {
                m.usedObj = m.interactObj

                if (!(m.action & ACT_FLAG_AIR)) {
                    set_mario_action(
                        m, (m.action & ACT_FLAG_DIVING) ? ACT_DIVE_PICKING_UP : ACT_PICKING_UP, 0);
                }

                result = 1
            }
        }
    }

    return result
}

export const mario_process_interactions = (m) => {
    sDelayInvincTimer = 0
    sInvulnerable = (m.action & ACT_FLAG_INVULNERABLE) || m.invincTimer != 0

    if (!(m.action & ACT_FLAG_INTANGIBLE) && m.collidedObjInteractTypes != 0) {

        for (let i = 0; i < sInteractionHandlers.length; i++) {
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


    m.flags &= ~MARIO_PUNCHING & ~MARIO_KICKING & ~MARIO_TRIPPING
}
