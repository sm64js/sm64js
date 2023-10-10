import * as _Linker from "./Linker"
import * as _Area from "./Area"

import { ACT_IDLE, ACT_PANTING, ACT_STANDING_AGAINST_WALL, ACT_CROUCHING, ACT_DISAPPEARED,

         ACT_DIVE, ACT_DIVE_SLIDE,

         ACT_FLAG_AIR, ACT_FLAG_ATTACKING, ACT_FLAG_DIVING, ACT_FLAG_HANGING,
         ACT_FLAG_IDLE, ACT_FLAG_INTANGIBLE, ACT_FLAG_INVULNERABLE, ACT_FLAG_METAL_WATER,
         ACT_FLAG_ON_POLE, ACT_FLAG_RIDING_SHELL, ACT_FLAG_SWIMMING,

         ACT_FLYING, ACT_GETTING_BLOWN,

         ACT_GRAB_POLE_FAST, ACT_GRAB_POLE_SLOW,

         ACT_GROUND_POUND, ACT_GROUND_POUND_LAND, ACT_GROUP_CUTSCENE, ACT_GROUP_MASK,
         ACT_ID_MASK, ACT_IN_CANNON, ACT_JUMP_KICK, ACT_MOVE_PUNCHING,

         ACT_PICKING_UP, ACT_PICKING_UP_BOWSER, ACT_PUNCHING, ACT_READING_SIGN,
         ACT_RIDING_HOOT, ACT_SHOT_FROM_CANNON, ACT_SLIDE_KICK, ACT_SLIDE_KICK_SLIDE,
         ACT_TWIRL_LAND, ACT_TWIRLING, ACT_WALKING, ACT_WATER_JUMP, ACT_WATER_PUNCH,

         ACT_DECELERATING, ACT_READING_AUTOMATIC_DIALOG,

         ACT_TELEPORT_FADE_IN, ACT_TELEPORT_FADE_OUT, ACT_EMERGE_FROM_PIPE,
         ACT_UNLOCKING_KEY_DOOR, ACT_PULLING_DOOR, ACT_PUSHING_DOOR,
         ACT_ENTERING_STAR_DOOR, ACT_UNLOCKING_STAR_DOOR,

         ACT_STAR_DANCE_EXIT, ACT_STAR_DANCE_NO_EXIT, ACT_STAR_DANCE_WATER,
         ACT_FALL_AFTER_STAR_GRAB, ACT_JUMBO_STAR_CUTSCENE,

         INPUT_A_PRESSED, INPUT_B_PRESSED, INPUT_INTERACT_OBJ_GRABBABLE,

         MARIO_KICKING, MARIO_PUNCHING, MARIO_TRIPPING, MARIO_UNKNOWN_08,

         MARIO_METAL_CAP, MARIO_VANISH_CAP, MARIO_WING_CAP, MARIO_CAP_ON_HEAD,
         MARIO_CAP_IN_HAND, ACT_PUTTING_ON_CAP,

         drop_and_set_mario_action, resolve_and_return_wall_collisions, sBackwardKnockbackActions,
         set_forward_vel, set_mario_action, sForwardKnockbackActions,

         ACT_SHOCKED, ACT_WATER_SHOCKED, ACT_LAVA_BOOST, ACT_BURNING_JUMP, ACT_BURNING_FALL,

         MARIO_UNKNOWN_18,
         update_mario_sound_and_camera,
         ACT_BACKWARD_AIR_KB,
         ACT_SOFT_BACKWARD_GROUND_KB,
         ACT_FORWARD_AIR_KB,
         ACT_SOFT_FORWARD_GROUND_KB,
         MARIO_NORMAL_CAP,
         ACT_WAITING_FOR_DIALOG,
         ACT_GRABBED
} from "./Mario"

import { WARP_OP_WARP_OBJECT, WARP_OP_WARP_FLOOR } from "./LevelUpdate"

import { SOUND_MARIO_EEUH, SOUND_MARIO_WAAAOOOW, SOUND_OBJ_BULLY_METAL,
         SOUND_MENU_STAR_SOUND, SOUND_MARIO_OOOF, SOUND_MARIO_ON_FIRE,
         SOUND_MARIO_ATTACKED, SOUND_GENERAL_FLAME_OUT
} from "../include/sounds"

import {
    DIALOG_022, DIALOG_023, DIALOG_024, DIALOG_025, DIALOG_026, DIALOG_027, DIALOG_028, DIALOG_029
 } from "../text/us/dialogs"

import * as MarioConstants from "../include/mario_constants"

import { oInteractType, oInteractStatus, oMarioPoleUnk108, oMarioPoleYawVel, oMarioPolePos,
         oInteractionSubtype, oDamageOrCoinValue, oPosX, oPosY, oPosZ, oMoveAngleYaw,
         oBehParams, oForwardVel, oMarioBurnTimer, STAR_INDEX_100_COINS
} from "../include/object_constants"

import { atan2s, sqrtf } from "../engine/math_util"
import { sins, coss, int16, s16 } from "../utils"
// import { bhv } from "./BehaviorData"
// import { MODEL_NONE } from "../include/model_ids"
import { SURFACE_DEATH_PLANE, SURFACE_VERTICAL_WIND, SURFACE_BURNING } from "../include/surface_terrains"
import { level_trigger_warp } from "./LevelUpdate"
import { COURSE_IS_MAIN_COURSE } from "../levels/course_defines"
import { CameraInstance as Camera } from "./Camera"
import * as CAMERA from "./Camera"  // for constants
import { obj_set_held_state, spawn_object } from "./ObjectHelpers"
import { stop_shell_music } from "./SoundInit"
import { play_sound } from "../audio/external"
import { save_file_get_flags, SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR,
    SAVE_FLAG_UNLOCKED_BASEMENT_DOOR, SAVE_FLAG_HAVE_KEY_1, SAVE_FLAG_HAVE_KEY_2,
    SAVE_FLAG_UNLOCKED_50_STAR_DOOR,
    SAVE_FLAG_UNLOCKED_BITDW_DOOR,
    SAVE_FLAG_UNLOCKED_BITFS_DOOR,
    SAVE_FLAG_UNLOCKED_CCM_DOOR,
    SAVE_FLAG_UNLOCKED_JRB_DOOR,
    SAVE_FLAG_UNLOCKED_PSS_DOOR,
    SAVE_FLAG_UNLOCKED_WF_DOOR,
    save_file_clear_flags,
    SAVE_FLAG_CAP_ON_KLEPTO,
    SAVE_FLAG_CAP_ON_UKIKI,
    save_file_collect_star_or_key,
} from "./SaveFile"
import { MODEL_NONE } from "../include/model_ids"


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

let sDelayInvincTimer = 0
let sInvulnerable = 0
let sJustTeleported = 0
let sDisplayingDoorText = 0

const check_death_barrier = (m) => {
    if (m.pos[1] < m.floorHeight + 2048) {
        if (level_trigger_warp(m, WARP_OP_WARP_FLOOR) == 20 && !(m.flags & MARIO_UNKNOWN_18)) {
            play_sound(SOUND_MARIO_WAAAOOOW, m.marioObj.gfx.cameraToObject)
        }
    }

}

const check_lava_boost = (m) => {
    if (!(m.action & ACT_FLAG_RIDING_SHELL) && m.pos[1] < m.floorHeight + 10.0) {
        if (!(m.flags & MARIO_METAL_CAP)) {
            m.hurtCounter += (m.flags & MARIO_CAP_ON_HEAD) ? 12 : 18
        }

        update_mario_sound_and_camera(m)
        drop_and_set_mario_action(m, ACT_LAVA_BOOST, 0)
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

        if (!(m.action & ACT_FLAG_AIR) && !(m.action & ACT_FLAG_SWIMMING)) {
            switch (floorType) {
                case SURFACE_BURNING:
                    check_lava_boost(m)
                    break
            }
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

    if (COURSE_IS_MAIN_COURSE(gLinker.Area.gCurrCourseNum) && m.numCoins - o.rawData[oDamageOrCoinValue] < 100 && m.numCoins >= 100) {
        gLinker.bhv_spawn_star_no_level_exit(STAR_INDEX_100_COINS)
    }

    return false
}

const interact_star_or_key = (m, /*interactType,*/ o) => {
    let /*u32*/ starIndex
    let /*u32*/ starGrabAction = ACT_STAR_DANCE_EXIT
    let /*u32*/ noExit = (o.rawData[oInteractionSubtype] & INT_SUBTYPE_NO_EXIT) != 0
    let /*u32*/ grandStar = (o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRAND_STAR) != 0

    if (m.health >= 0x100) {
        mario_stop_riding_and_holding(m)
// #if ENABLE_RUMBLE
//         queue_rumble_data(5, 80);
// #endif

        if (!noExit) {
            m.hurtCounter = 0
            m.healCounter = 0
            if (m.capTimer > 1) {
                m.capTimer = 1
            }
        }

        if (noExit) {
            starGrabAction = ACT_STAR_DANCE_NO_EXIT
        }

        if (m.action & ACT_FLAG_SWIMMING) {
            starGrabAction = ACT_STAR_DANCE_WATER
        }

        if (m.action & ACT_FLAG_METAL_WATER) {
            starGrabAction = ACT_STAR_DANCE_WATER
        }

        if (m.action & ACT_FLAG_AIR) {
            starGrabAction = ACT_FALL_AFTER_STAR_GRAB
        }

        spawn_object(o, MODEL_NONE, gLinker.behaviors.bhvStarKeyCollectionPuffSpawner);

        o.oInteractStatus = INT_STATUS_INTERACTED
        m.interactObj = o
        m.usedObj = o

        starIndex = (o.oBehParams >> 24) & 0x1F;
        save_file_collect_star_or_key(m.numCoins, starIndex);

        // m.numStars =
        //     save_file_get_total_star_count(gCurrSaveFileNum - 1, COURSE_MIN - 1, COURSE_MAX - 1);
        m.numStars++

        // if (!noExit) {
        //     drop_queued_background_music();
        //     fadeout_level_music(126);
        // }

        play_sound(SOUND_MENU_STAR_SOUND, m.marioObj.gfx.cameraToObject)
        update_mario_sound_and_camera(m)

        if (grandStar) {
            return set_mario_action(m, ACT_JUMBO_STAR_CUTSCENE, 0)
        }

        return set_mario_action(m, starGrabAction, noExit + 2 * grandStar)
    }

    return false
}


export const interact_warp = (m, o) => {
    let action

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_FADING_WARP) {
        action = m.action

        if (action == ACT_TELEPORT_FADE_IN) {
            sJustTeleported = true;

        } else if (!sJustTeleported) {
            if (action == ACT_IDLE || action == ACT_PANTING || action == ACT_STANDING_AGAINST_WALL
                || action == ACT_CROUCHING) {
                m.interactObj = o
                m.usedObj = o

                sJustTeleported = true;
                return set_mario_action(m, ACT_TELEPORT_FADE_OUT, 0)
            }
        }
    } else {
        if (m.action != ACT_EMERGE_FROM_PIPE) {
            o.rawData[oInteractStatus] = INT_STATUS_INTERACTED
            m.interactObj = o
            m.usedObj = o

            // play_sound(o.collisionData == warp_pipe_seg3_collision_03009AC8
            //                ? SOUND_MENU_ENTER_PIPE
            //                : SOUND_MENU_ENTER_HOLE,
            //            m.marioObj.gfx.cameraToObject)

            mario_stop_riding_object(m)
            return set_mario_action(m, ACT_DISAPPEARED, (WARP_OP_WARP_OBJECT << 16) + 2)
        }
    }

    return false
}

export const interact_warp_door = (m, o) => {
    let doorAction = 0
    let saveFlags = save_file_get_flags(
        SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR | SAVE_FLAG_HAVE_KEY_1 | SAVE_FLAG_HAVE_KEY_2 |
        SAVE_FLAG_UNLOCKED_BASEMENT_DOOR
    )  // DEBUG add SAVE_FLAGs here
    let warpDoorId = o.rawData[oBehParams] >> 24
    let actionArg

    if (m.action == ACT_WALKING || m.action == ACT_DECELERATING) {
        if (warpDoorId == 1 && !(saveFlags & SAVE_FLAG_UNLOCKED_UPSTAIRS_DOOR)) {
            if (!(saveFlags & SAVE_FLAG_HAVE_KEY_2)) {
                if (!sDisplayingDoorText) {
                    set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG,
                                     (saveFlags & SAVE_FLAG_HAVE_KEY_1) ? DIALOG_023 : DIALOG_022)
                }
                sDisplayingDoorText = 1

                return false
            }

            doorAction = ACT_UNLOCKING_KEY_DOOR
        }

        if (warpDoorId == 2 && !(saveFlags & SAVE_FLAG_UNLOCKED_BASEMENT_DOOR)) {
            if (!(saveFlags & SAVE_FLAG_HAVE_KEY_1)) {
                if (!sDisplayingDoorText) {
                    // Moat door skip was intended confirmed
                    set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG,
                                     (saveFlags & SAVE_FLAG_HAVE_KEY_2) ? DIALOG_023 : DIALOG_022)
                }
                sDisplayingDoorText = 1

                return false
            }

            doorAction = ACT_UNLOCKING_KEY_DOOR
        }

        if (m.action == ACT_WALKING || m.action == ACT_DECELERATING) {
            actionArg = should_push_or_pull_door(m, o) + 0x00000004

            if (doorAction == 0) {
                if (actionArg & 0x00000001) {
                    doorAction = ACT_PULLING_DOOR
                } else {
                    doorAction = ACT_PUSHING_DOOR
                }
            }

            m.interactObj = o
            m.usedObj = o
            return set_mario_action(m, doorAction, actionArg)
        }
    }

    return false
}

export const get_door_save_file_flag = (door) => {
    let saveFileFlag = 0
    let requiredNumStars = door.rawData[oBehParams] >> 24

    let isCcmDoor = door.rawData[oPosX] < 0.0
    let isPssDoor = door.rawData[oPosY] > 500.0

    switch (requiredNumStars) {
        case 1:
            if (isPssDoor) {
                saveFileFlag = SAVE_FLAG_UNLOCKED_PSS_DOOR
            } else {
                saveFileFlag = SAVE_FLAG_UNLOCKED_WF_DOOR
            }
            break

        case 3:
            if (isCcmDoor) {
                saveFileFlag = SAVE_FLAG_UNLOCKED_CCM_DOOR
            } else {
                saveFileFlag = SAVE_FLAG_UNLOCKED_JRB_DOOR
            }
            break

        case 8:
            saveFileFlag = SAVE_FLAG_UNLOCKED_BITDW_DOOR
            break

        case 30:
            saveFileFlag = SAVE_FLAG_UNLOCKED_BITFS_DOOR
            break

        case 50:
            saveFileFlag = SAVE_FLAG_UNLOCKED_50_STAR_DOOR
            break
    }

    return saveFileFlag
}

export const interact_door = (m, o) => {
    let /*s16*/ requiredNumStars = o.rawData[oBehParams] >> 24
    let /*s16*/ numStars = 120  // save_file_get_total_star_count(gCurrSaveFileNum - 1, COURSE_MIN - 1, COURSE_MAX - 1)

    if (m.action == ACT_WALKING || m.action == ACT_DECELERATING) {
        if (numStars >= requiredNumStars) {
            let /*u32*/ actionArg = should_push_or_pull_door(m, o)
            let /*u32*/ enterDoorAction
            let /*u32*/ doorSaveFileFlag

            if (actionArg & 0x00000001) {
                enterDoorAction = ACT_PULLING_DOOR
            } else {
                enterDoorAction = ACT_PUSHING_DOOR
            }

            doorSaveFileFlag = get_door_save_file_flag(o)
            m.interactObj = o
            m.usedObj = o

            if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_STAR_DOOR) {
                enterDoorAction = ACT_ENTERING_STAR_DOOR
            }

            if (doorSaveFileFlag != 0 && !(save_file_get_flags() & doorSaveFileFlag)) {
                enterDoorAction = ACT_UNLOCKING_STAR_DOOR
            }

            return set_mario_action(m, enterDoorAction, actionArg)
        } else if (!sDisplayingDoorText) {
            let /*u32*/ text = DIALOG_022.str

            switch (requiredNumStars) {
                case 1:
                    text = DIALOG_024.str
                    break
                case 3:
                    text = DIALOG_025.str
                    break
                case 8:
                    text = DIALOG_026.str
                    break
                case 30:
                    text = DIALOG_027.str
                    break
                case 50:
                    text = DIALOG_028.str
                    break
                case 70:
                    text = DIALOG_029.str
                    break
            }

            text += requiredNumStars - numStars

            sDisplayingDoorText = 1
            return set_mario_action(m, ACT_READING_AUTOMATIC_DIALOG, text)
        }
    } else if (m.action == ACT_IDLE && sDisplayingDoorText == 1 && requiredNumStars == 70) {
        m.interactObj = o
        m.usedObj = o
        return set_mario_action(m, ACT_ENTERING_STAR_DOOR, should_push_or_pull_door(m, o))
    }

    return false
}

const interact_cannon_base = (m, o) => {
    if (m.action != ACT_IN_CANNON) {
        mario_stop_riding_and_holding(m)
        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED
        m.interactObj = o
        m.usedObj = o
        return set_mario_action(m, ACT_IN_CANNON, 0)
    }

    return false
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
        return true
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }
    return false

}

const interact_damage = (m, o) => {
    if (take_damage_and_knock_back(m, o)) return true

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }

    return false
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

        return true
    }

    return false
}

const interact_mr_blizzard = (m, o) => {
    if (take_damage_and_knock_back(m, o)) {
        return true
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = 1
    }

    return false
}

const interact_hit_from_below = (m, o) => {
    let interaction

    if (m.flags & MARIO_METAL_CAP) {
        interaction = INT_FAST_ATTACK_OR_SHELL
    } else {
        interaction = determine_interaction(m, o)
    }

    if (interaction & INT_ANY_ATTACK) {
        // queue_rumble_data(5, 80)
        attack_object(o, interaction)
        bounce_back_from_attack(m, interaction)

        if (interaction & INT_HIT_FROM_BELOW) {
            hit_object_from_below(m, o)
        }

        if (interaction & INT_HIT_FROM_ABOVE) {
            if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_TWIRL_BOUNCE) {
                bounce_off_object(m, o, 80.0)
                reset_mario_pitch(m)
                // play_sound(SOUND_MARIO_TWIRL_BOUNCE, m.marioObj.gfx.cameraToObject)
                return drop_and_set_mario_action(m, ACT_TWIRLING, 0)
            } else {
                bounce_off_object(m, o, 30.0)
            }
        }
    } else if (take_damage_and_knock_back(m, o)) {
        return true
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = true
    }

    return false
}

export const interact_cap = (m, o) => {
   let /*u32*/capFlag = get_mario_cap_flag(o)
   let /*u16*/capMusic = 0
   let /*u16*/capTime = 0

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

        // play_sound(SOUND_MENU_STAR_SOUND, m.marioObj.gfx.cameraToObject)
        // play_sound(SOUND_MARIO_HERE_WE_GO, m.marioObj.gfx.cameraToObject)

        if (capMusic != 0) {
            play_cap_music(capMusic)
        }

        return true
    }

    return false
}

const interact_grabbable = (m, o) => {

    const script = o.behavior

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_KICKABLE) {
        const interaction = determine_interaction(m, o)
        if (interaction & (INT_KICK | INT_TRIP)) {
            attack_object(o, interaction)
            bounce_back_from_attack(m, interaction)
            return false
        }
    }

    if (o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO) {
        if (check_object_grab_mario(m, o)) {
            return true
        }
    }

    if (able_to_grab_object(m, o)) {
        if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_NOT_GRABBABLE)) {
            m.interactObj = o
            m.input |= INPUT_INTERACT_OBJ_GRABBABLE
            return true
        }
    }

    if (script != gLinker.behaviors.bhvBowser) {
        push_mario_out_of_object(m, o, -5.0)
    }

    return false
}


const mario_can_talk = (m, arg) => {
    let val6

    if ((m.action & ACT_FLAG_IDLE) != 0x00000000) {
        return true
    }

    if (m.action == ACT_WALKING) {
        if (arg) {
            return true
        }

        val6 = m.marioObj.gfx.animInfo.animID

        if (val6 == 0x0080 || val6 == 0x007F || val6 == 0x006C) {
            return true
        }
    }

    return false
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

    return false
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
    return false
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

const check_object_grab_mario = (m, o) => { // commented out because game broke aaa
    if ((!(m.action & (ACT_FLAG_AIR | ACT_FLAG_INVULNERABLE | ACT_FLAG_ATTACKING)) || !sInvulnerable) && (o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO)) {
        if (object_facing_mario(m, o, 0x2AAA)) {
            mario_stop_riding_and_holding(m)
            o.rawData[oInteractStatus] = INT_STATUS_INTERACTED | INT_STATUS_GRABBED_MARIO

            m.faceAngle[1] = o.rawData[oMoveAngleYaw]
            m.interactObj = o
            m.usedObj = o

            update_mario_sound_and_camera(m)
            play_sound(SOUND_MARIO_OOOF, m.marioObj.gfx.cameraToObject)

            return set_mario_action(m, ACT_GRABBED, 0)
        }
    }
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

    return false
}

const interact_flame = (m, o) => {
    let burningAction = ACT_BURNING_JUMP

    if (!sInvulnerable && !(m.flags & MARIO_METAL_CAP) && !(m.flags & MARIO_VANISH_CAP)
        && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        //queue_rumble_data(5, 80)
        
        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED
        m.interactObj = o

        if ((m.action & (ACT_FLAG_SWIMMING | ACT_FLAG_METAL_WATER))
            || m.waterLevel - m.pos[1] > 50.0) {
            play_sound(SOUND_GENERAL_FLAME_OUT, m.marioObj.gfx.cameraToObject);
        } else {
            m.marioObj.rawData[oMarioBurnTimer] = 0
            update_mario_sound_and_camera(m)
            play_sound(SOUND_MARIO_ON_FIRE, m.marioObj.gfx.cameraToObject);

            if ((m.action & ACT_FLAG_AIR) && m.vel[1] <= 0.0) {
                burningAction = ACT_BURNING_FALL
            }

            return drop_and_set_mario_action(m, burningAction, 1)
        }
    }

    return false
}

const init_bully_collision_data = (data, posX, posZ, forwardVel, yaw, conversionRatio, radius) => {
    if (forwardVel < 0.0) {
        forwardVel *= -1.0
        yaw += 0x8000
    }

    data.radius = radius
    data.conversionRatio = conversionRatio
    data.posX = posX
    data.posZ = posZ
    data.velX = forwardVel * sins(yaw)
    data.velZ = forwardVel * coss(yaw)
}

const transfer_bully_speed = (obj, obj2) => {
    let rx = obj2.posX - obj.posX
    let rz = obj2.posX - obj.posZ

    //! Bully NaN crash
    let projectedV1 = (rx * obj.velX + rz * obj.velZ) / (rx * rx + rz * rz)
    let projectedV2 = (-rx * obj.velX - rz * obj.velZ) / (rx * rx + rz * rz)

    // Kill speed along r. Convert one object's speed along r and transfer it to
    // the other object.
    obj2.velX += obj2.conversionRatio * projectedV1 * rx - projectedV2 * -rx
    obj2.velZ += obj2.conversionRatio * projectedV1 * rz - projectedV2 * -rz

    obj.velX += -projectedV1 * rx + obj.conversionRatio * projectedV2 * -rx
    obj.velZ += -projectedV1 * rz + obj.conversionRatio * projectedV2 * -rz

    //! Bully battery
}

const bully_knock_back_mario = (mario) => {
    let marioData = {}
    let bullyData = {}
    let newMarioYaw
    let newBullyYaw
    let bonkAction = 0
    let bully = mario.interactObj
    
    //! Conversion ratios multiply to more than 1 (could allow unbounded speed
    // with bonk cancel - but this isn't important for regular bully battery)
    let bullyToMarioRatio = bully.hitboxRadius * 3 / 53
    let marioToBullyRatio = 53.0 / bully.hitboxRadius

    init_bully_collision_data(marioData, mario.pos[0], mario.pos[2], mario.forwardVel, mario.faceAngle[1], bullyToMarioRatio, 52.0)

    init_bully_collision_data(bullyData, bully.rawData[oPosX], bully.rawData[oPosZ], bully.rawData[oForwardVel], bully.rawData[oMoveAngleYaw], bullyToMarioRatio, bully.hitboxRadius + 2.0)

    if (mario.forwardVel != 0.0) {
        transfer_bully_speed(marioData, bullyData)
    } else {
        transfer_bully_speed(bullyData, marioData)
    }

    newMarioYaw = atan2s(marioData.velZ, marioData.velX)
    newBullyYaw = atan2s(bullyData.velZ, bullyData.velX)

    let marioDYaw = newMarioYaw - mario.faceAngle[1]
    let bullyDYaw = newBullyYaw - bully.rawData[oMoveAngleYaw]

    mario.faceAngle[1] = newMarioYaw
    mario.forwardVel = sqrtf(marioData.velX * marioData.velX + marioData.velZ * marioData.velZ)
    mario.pos[0] = marioData.posX
    mario.pos[2] = marioData.posZ

    if (marioDYaw < -0x4000 || marioDYaw > 0x4000) {
        mario.faceAngle[1] += 0x8000
        mario.forwardVel *= -1.0

        if (mario.action & ACT_FLAG_AIR) {
            bonkAction = ACT_BACKWARD_AIR_KB
        } else {
            bonkAction = ACT_SOFT_BACKWARD_GROUND_KB
        }
    } else {
        if (mario.action & ACT_FLAG_AIR) {
            bonkAction = ACT_FORWARD_AIR_KB
        } else {
            bonkAction = ACT_SOFT_FORWARD_GROUND_KB
        }
    }

    return bonkAction
}

const interact_bully = (m, o) => {
    let interaction
    if (m.flags & MARIO_METAL_CAP) {
        interaction = INT_FAST_ATTACK_OR_SHELL
    } else {
        interaction = determine_interaction(m, o)
    }

    m.interactObj = o

    if (interaction & INT_ATTACK_NOT_FROM_BELOW) {
        push_mario_out_of_object(m, o, 5.0)

        m.forwardVel = -16.0
        o.rawData[oMoveAngleYaw] = m.faceAngle[1]
        o.rawData[oForwardVel] = 3392.0 / o.hitboxRadius

        attack_object(o, interaction)
        bounce_back_from_attack(m, interaction)
        return true
    } else if (!sInvulnerable && !(m.flags & MARIO_VANISH_CAP) && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED
        m.invincTimer = 2

        update_mario_sound_and_camera(m)
        play_sound(SOUND_MARIO_EEUH, m.marioObj.gfx.cameraToObject)
        play_sound(SOUND_OBJ_BULLY_METAL, m.marioObj.gfx.cameraToObject)

        push_mario_out_of_object(m, o, 5.0)
        drop_and_set_mario_action(m, bully_knock_back_mario(m), 0)
        // queue_rumble_data(5, 80)
        // for if you guys figure out rumble pak :)
        return true
    }

    return false
}

const interact_shock = (m, o) => {
    if (!sInvulnerable && !(m.flags & MARIO_VANISH_CAP)
        && !(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        const actionArg = (m.action & (ACT_FLAG_AIR | ACT_FLAG_ON_POLE | ACT_FLAG_HANGING)) == 0

        o.rawData[oInteractStatus] = INT_STATUS_INTERACTED | INT_STATUS_ATTACKED_MARIO
        m.interactObj = o

        take_damage_from_interact_object(m)
        play_sound(SOUND_MARIO_ATTACKED, m.marioObj.gfx.cameraToObject)
        //queue_rumble_data(70, 60)

        if (m.action & (ACT_FLAG_SWIMMING | ACT_FLAG_METAL_WATER)) {
            return drop_and_set_mario_action(m, ACT_WATER_SHOCKED, 0)
        } else {
            update_mario_sound_and_camera(m)
            return drop_and_set_mario_action(m, ACT_SHOCKED, actionArg)
        }
    }

    if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_DELAY_INVINCIBILITY)) {
        sDelayInvincTimer = true
    }
    return false
}

const able_to_grab_object = (m, o) => {
    const action = m.action

    if (action == ACT_DIVE_SLIDE || action == ACT_DIVE) {
        if (!(o.rawData[oInteractionSubtype] & INT_SUBTYPE_GRABS_MARIO)) {
            return true
        }
    } else if (action == ACT_PUNCHING || action == ACT_MOVE_PUNCHING) {
        if (m.actionArg < 2) {
            return true
        }
    }

    return false
}

export const mario_obj_angle_to_object = (m, o) => {
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

        gLinker.SurfaceCollision.find_wall_collision(newMarioX, newMarioY, newMarioZ, 60.0, 50.0)
        m.pos[1] = newMarioY.value

        const floorWrapper = {}
        gLinker.SurfaceCollision.find_floor(newMarioX.value, m.pos[1], newMarioZ.value, floorWrapper)
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

export const mario_stop_riding_object = (m) => {
    if (m.riddenObj) {
        m.riddenObj.rawData[oInteractStatus] = INT_STATUS_STOP_RIDING
        stop_shell_music()
        m.riddenObj = null
    }
}

export const mario_grab_used_object = (m) => {
    if (!m.heldObj) {
        m.heldObj = m.usedObj
        obj_set_held_state(m.heldObj, gLinker.behaviors.bhvCarrySomething3)
    }
}

export const mario_drop_held_object = (m) => {
    if (m.heldObj != null) {
        if (m.heldObj.behavior == gLinker.behaviors.bhvKoopaShellUnderwater) {
            stop_shell_music()
        }

        obj_set_held_state(m.heldObj, gLinker.behaviors.bhvCarrySomething4)

        // ! When dropping an object instead of throwing it, it will be put at Mario's
        // y-positon instead of the HOLP's y-position. This fact is often exploited when
        // cloning objects.
        m.heldObj.rawData[oPosX] = m.marioBodyState.heldObjLastPosition[0]
        m.heldObj.rawData[oPosY] = m.pos[1]
        m.heldObj.rawData[oPosZ] = m.marioBodyState.heldObjLastPosition[2]

        m.heldObj.rawData[oMoveAngleYaw] = m.faceAngle[1]

        m.heldObj = null
    }
}

export const mario_throw_held_object = (m) => {
    if (m.heldObj != null) {
        if (m.heldObj.behavior == gLinker.behaviors.bhvKoopaShellUnderwater) {
            stop_shell_music()
        }

        obj_set_held_state(m.heldObj, gLinker.behaviors.bhvCarrySomething5)

        m.heldObj.rawData[oPosX] = m.marioBodyState.heldObjLastPosition[0] + 32.0 * sins(m.faceAngle[1])
        m.heldObj.rawData[oPosY] = m.marioBodyState.heldObjLastPosition[1]
        m.heldObj.rawData[oPosZ] = m.marioBodyState.heldObjLastPosition[2] + 32.0 * coss(m.faceAngle[1])

        m.heldObj.rawData[oMoveAngleYaw] = m.faceAngle[1]

        m.heldObj = null
    }
}

export const mario_stop_riding_and_holding = (m) => {
    mario_drop_held_object(m)
    mario_stop_riding_object(m)

    if (m.action == ACT_RIDING_HOOT) {
        m.usedObj.rawData[oInteractStatus] = 0
        m.usedObj.rawData[oHootMarioReleaseTime] = window.gGlobalTimer
    }
}

export const mario_retrieve_cap = () => {
    const gMarioState = gLinker.LevelUpdate.gMarioState

    mario_drop_held_object(gMarioState)
    save_file_clear_flags(SAVE_FLAG_CAP_ON_KLEPTO | SAVE_FLAG_CAP_ON_UKIKI)
    gMarioState.flags &= ~MARIO_CAP_ON_HEAD
    gMarioState.flags |= MARIO_NORMAL_CAP | MARIO_CAP_IN_HAND
}

////////////////////////////////////////////////////

const bounce_off_object = (m, o, velY) => {
    m.pos[1] = o.rawData[oPosY] + o.hitboxHeight
    m.vel[1] = velY

    m.flags &= ~MARIO_UNKNOWN_08

    //play_sound(SOUND_ACTION_BOUNCE_OFF_OBJECT, m . marioObj . .gfx.cameraToObject)
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
        //play_sound(SOUND_ACTION_HIT_2, m . marioObj . .gfx.cameraToObject)
    }
}

const should_push_or_pull_door = (m, o) => {
    let dx = o.rawData[oPosX] - m.pos[0]
    let dz = o.rawData[oPosZ] - m.pos[2]

    let dYaw = s16(o.rawData[oMoveAngleYaw] - atan2s(dz, dx))

    return (dYaw >= -0x4000 && dYaw <= 0x4000) ? 0x00000001 : 0x00000002
}

/**
 * Returns the type of cap Mario is wearing.
 */
export const get_mario_cap_flag = (capObject) => {
    const script = capObject.behavior

    if (script == gLinker.behaviors.bhvNormalCap) {
        return MARIO_NORMAL_CAP
    } else if (script == gLinker.behaviors.bhvMetalCap) {
        return MARIO_METAL_CAP
    } else if (script == gLinker.behaviors.bhvWingCap) {
        return MARIO_WING_CAP
    } else if (script == gLinker.behaviors.bhvVanishCap) {
        return MARIO_VANISH_CAP
    }

    return false
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
        return true
    }

    return false
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

    return false

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
                // play_sound(SOUND_ACTION_HIT_2, m.marioObj..gfx.cameraToObject);
                m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE;
            } else if (m.action & ACT_FLAG_AIR) {
                set_forward_vel(m, -16.0);
                // play_sound(SOUND_ACTION_HIT_2, m.marioObj..gfx.cameraToObject);
                m.particleFlags |= MarioConstants.PARTICLE_TRIANGLE;
            }
        }
    }
}

const sInteractionHandlers = [
    { interactType: INTERACT_COIN, handler: interact_coin },
    { interactType: INTERACT_WATER_RING, handler: null },
    { interactType: INTERACT_STAR_OR_KEY, handler: interact_star_or_key },
    { interactType: INTERACT_BBH_ENTRANCE, handler: null },
    { interactType: INTERACT_WARP, handler: interact_warp },
    { interactType: INTERACT_WARP_DOOR, handler: interact_warp_door },
    { interactType: INTERACT_DOOR, handler: interact_door },
    { interactType: INTERACT_CANNON_BASE, handler: interact_cannon_base },
    { interactType: INTERACT_IGLOO_BARRIER, handler: null },
    { interactType: INTERACT_TORNADO, handler: null },
    { interactType: INTERACT_WHIRLPOOL, handler: null },
    { interactType: INTERACT_STRONG_WIND, handler: null },
    { interactType: INTERACT_FLAME, handler: interact_flame },
    { interactType: INTERACT_SNUFIT_BULLET, handler: null },
    { interactType: INTERACT_CLAM_OR_BUBBA, handler: null },
    { interactType: INTERACT_BULLY, handler: interact_bully },
    { interactType: INTERACT_SHOCK, handler: interact_shock },
    { interactType: INTERACT_BOUNCE_TOP2, handler: null },
    { interactType: INTERACT_MR_BLIZZARD, handler: interact_mr_blizzard },
    { interactType: INTERACT_HIT_FROM_BELOW, handler: interact_hit_from_below },
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

        if (object.rawData[oInteractType] == interactType) {
            return object
        }
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

    if (!(m.marioObj.collidedObjInteractTypes & (INTERACT_WARP_DOOR | INTERACT_DOOR))) sDisplayingDoorText = false;
    if (!(m.marioObj.collidedObjInteractTypes & INTERACT_WARP)) sJustTeleported = false;
}
