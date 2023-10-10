import * as _Linker from "../../game/Linker"
import { is_point_within_radius_of_mario, object_step } from "../ObjBehaviors"
import { atan2s } from "../../engine/math_util"
import { approach_s16_symmetric, cur_obj_scale, obj_turn_toward_object, obj_set_hitbox, cur_obj_become_intangible, cur_obj_become_tangible } from "../ObjectHelpers"
import { random_u16, sins, coss } from "../../utils"
import { GRAPH_RENDER_INVISIBLE } from "../../engine/graph_node"
import { HOMING_AMP_ACT_CHASE, HOMING_AMP_ACT_GIVE_UP, HOMING_AMP_ACT_INACTIVE, HOMING_AMP_ACT_APPEAR, AMP_ACT_IDLE, AMP_ACT_ATTACK_COOLDOWN, oInteractStatus, oAction, oAnimState, oMoveAngleYaw, oTimer,
    oAmpYPhase, oAngleToMario, oHomingAmpLockedOn, oForwardVel, oHomingAmpAvgY, oAmpRadiusOfRotation, oBehParams2ndByte, oPosX, oPosY, oPosZ, oFaceAnglePitch,
    oHomeX, oHomeY, oHomeZ, oGravity, oFriction, oBuoyancy, oFaceAngleYaw, AMP_BP_ROT_RADIUS_0, AMP_BP_ROT_RADIUS_200, AMP_BP_ROT_RADIUS_300, AMP_BP_ROT_RADIUS_400
} from "../../include/object_constants"
import { INTERACT_SHOCK, INT_STATUS_INTERACTED } from "../Interaction"

const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
const gLakituState = gLinker.ObjectListProcessor.gLakituState

const sAmpHitbox = {
    interactType: INTERACT_SHOCK,
    downOffset: 40,
    damageOrCoinValue: 1,
    health: 0,
    numLootCoins: 0,
    radius: 40,
    height: 50,
    hurtboxRadius: 50,
    hurtboxHeight: 60,
}

/**
 * Homing amp initialization function.
 */
export const bhv_homing_amp_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oHomeX] = o.oPosX
    o.rawData[oHomeY] = o.oPosY
    o.rawData[oHomeZ] = o.oPosZ
    o.rawData[oGravity] = 0
    o.rawData[oFriction] = 1.0
    o.rawData[oBuoyancy] = 1.0
    o.rawData[oHomingAmpAvgY] = o.oHomeY

    // Homing amps start at 1/10th their normal size.
    // They grow when they "appear" to Mario.
    cur_obj_scale(0.1)

    // Hide the amp (until Mario gets near).
    o./*header.*/gfx./*node.*/flags |= GRAPH_RENDER_INVISIBLE
}

/**
 * Amps' attack handler, shared by both types of amp.
 */
const check_amp_attack = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // Strange placement for this call. The hitbox is never cleared.
    // For perspective, this code is run every frame of bhv_circling_amp_loop
    // and every frame of a homing amp's HOMING_AMP_ACT_CHASE action.
    obj_set_hitbox(o, sAmpHitbox)

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        // Unnecessary if statement, maybe caused by a macro for
        //     if (o->oInteractStatus & INT_STATUS_INTERACTED)
        //         o->oAction = X;
        // ?
        if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
            // This function is used for both normal amps and homing amps,
            // AMP_ACT_ATTACK_COOLDOWN == HOMING_AMP_ACT_ATTACK_COOLDOWN
            o.rawData[oAction] = AMP_ACT_ATTACK_COOLDOWN
        }

        // Clear interact status
        o.rawData[oInteractStatus] = 0
    }
}

/**
 * Unhide the amp and grow until normal size, then begin chasing Mario.
 */
const homing_amp_appear_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // gLakituState.goalPos is the position lakitu is moving towards.
    // In Lakitu and Mario cam, it is usually very close to the current camera position.
    // In Fixed cam, it is the point behind Mario the camera will go to when transitioning
    // to Lakitu cam. Homing amps will point themselves towards this point when appearing.
    let relativeTargetX = gLakituState.goalPos[0] - o.oPosX
    let relativeTargetZ = gLakituState.goalPos[2] - o.oPosZ
    let targetYaw = atan2s(relativeTargetZ, relativeTargetX)

    o.rawData[oMoveAngleYaw] = approach_s16_symmetric(o.rawData[oMoveAngleYaw], o.rawData[targetYaw], 0x1000)

    // For 30 frames, make the amp "appear" by increasing its size by 0.03 each frame,
    // except for the first frame (when oTimer == 0) because the expression in cur_obj_scale
    // evaluates to 0.1, which is the same as it was before. After 30 frames, it ends at
    // a scale factor of 0.97. The amp remains at 97% of its real height for 60 more frames.
    if (o.oTimer < 30) {
        cur_obj_scale(0.1 + 0.9 * (relativeTargetX, relativeTargetZ)(o.oTimer / 30.0))
    } else {
        o.oAnimState = 1
    }

    // Once the timer becomes greater than 90, i.e. 91 frames have passed,
    // reset the amp's size and start chasing Mario.
    if (o.rawData[oTimer] >= 91) {
        cur_obj_scale(1.0)
        o.rawData[oAction] = HOMING_AMP_ACT_CHASE
        o.rawData[oAmpYPhase] = 0
    }
}

/**
 * Chase Mario.
 */
const homing_amp_chase_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // Lock on to Mario if he ever goes within 11.25 degrees of the amp's line of sight
    if ((o.rawData[oAngleToMario] - 0x400 < o.rawData[oMoveAngleYaw])
        && (o.rawData[oMoveAngleYaw] < o.rawData[oAngleToMario] + 0x400)) {
        o.rawData[oHomingAmpLockedOn] = true
        o.rawData[oTimer] = 0
    }

    // If the amp is locked on to Mario, start "chasing" him by moving
    // in a straight line at 15 units/second for 32 frames.
    if (o.rawData[oHomingAmpLockedOn] == true) {
        o.rawData[oForwardVel] = 15.0

        // Move the amp's average Y (the Y value it oscillates around) to align with
        // Mario's head. Mario's graphics' Y + 150 is around the top of his head.
        // Note that the average Y will slowly go down to approach his head if the amp
        // is above his head, but if the amp is below it will instantly snap up.
        if (o.rawData[oHomingAmpAvgY] > gMarioObject.header.gfx.pos[1] + 150.0) {
            o.rawData[oHomingAmpAvgY] -= 10.0
        } else {
            o.rawData[oHomingAmpAvgY] = gMarioObject.header.gfx.pos[1] + 150.0
        }

        if (o.rawData[oTimer] >= 31) {
            o.rawData[oHomingAmpLockedOn] = false
        }
    } else {
        // If the amp is not locked on to Mario, move forward at 10 units/second
        // while curving towards him.
        o.rawData[oForwardVel] = 10.0

        obj_turn_toward_object(o, gMarioObject, 16, 0x400)

        // The amp's average Y will approach Mario's graphical Y position + 250
        // at a rate of 10 units per frame. Interestingly, this is different from
        // the + 150 used while chasing him. Could this be a typo?
        if (o.rawData[oHomingAmpAvgY] < gMarioObject.header.gfx.pos[1] + 250.0) {
            o.rawData[oHomingAmpAvgY] += 10.0
        }
    }

    // The amp's position will sinusoidally oscillate 40 units around its average Y.
    o.rawData[oPosY] = o.rawData[oHomingAmpAvgY] + sins(o.rawData[oAmpYPhase] * 0x400) * 20.0

    // Handle attacks
    check_amp_attack()

    // Give up if Mario goes further than 1500 units from the amp's original position
    if (is_point_within_radius_of_mario(o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 1500) == false) {
        o.rawData[oAction] = HOMING_AMP_ACT_GIVE_UP
    }
}

/**
 * Give up on chasing Mario.
 */
const homing_amp_give_up_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    // Move forward for 152 frames
    o.rawData[oForwardVel] = 15.0

    if (o.rawData[oTimer] >= 151) {
        // Hide the amp and reset it back to its inactive state
        o.rawData[oPosX] = o.rawData[oHomeX]
        o.rawData[oPosY] = o.rawData[oHomeY]
        o.rawData[oPosZ] = o.rawData[oHomeZ]
        o./*header.*/gfx.node.flags |= GRAPH_RENDER_INVISIBLE
        o.rawData[oAction] = HOMING_AMP_ACT_INACTIVE
        o.rawData[oAnimState] = 0
        o.rawData[oForwardVel] = 0
        o.rawData[oHomingAmpAvgY] = o.rawData[oHomeY]
    }
}

/**
 * Cool down after a successful attack, shared by both types of amp.
 */
const amp_attack_cooldown_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // Turn intangible and wait for 90 frames before chasing Mario again after hitting him.
    o./*header.*/gfx.animInfo.animFrame += 2
    o.rawData[oForwardVel] = 0

    cur_obj_become_intangible()

    if (o.rawData[oTimer] >= 31) {
        o.rawData[oAnimState] = 0
    }

    if (o.rawData[oTimer] >= 91) {
        o.rawData[oAnimState] = 1
        cur_obj_become_tangible()
        o.rawData[oAction] = HOMING_AMP_ACT_CHASE
    }
}

/**
 * Homing amp update function.
 */
export const bhv_homing_amp_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case HOMING_AMP_ACT_INACTIVE:
            if (is_point_within_radius_of_mario(o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 800) == true) {
                // Make the amp start to appear, and un-hide it.
                o.rawData[oAction] = HOMING_AMP_ACT_APPEAR
                o./*header.*/gfx.node.flags &= ~GRAPH_RENDER_INVISIBLE
            }
            break

        case HOMING_AMP_ACT_APPEAR:
            homing_amp_appear_loop()
            break

        case HOMING_AMP_ACT_CHASE:
            homing_amp_chase_loop()
            //cur_obj_play_sound_1(SOUND_AIR_AMP_BUZZ);
            break

        case HOMING_AMP_ACT_GIVE_UP:
            homing_amp_give_up_loop()
            break

        case HOMING_AMP_ACT_ATTACK_COOLDOWN:
            amp_attack_cooldown_loop()
            break
    }

    object_step()

    // Oscillate
    o.rawData[oAmpYPhase]++
}

/**
 * Circling amp initialization function.
 */
export const bhv_circling_amp_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oHomeX] = o.rawData[oPosX]
    o.rawData[oHomeY] = o.rawData[oPosY]
    o.rawData[oHomeZ] = o.rawData[oPosZ]
    o.rawData[oAnimState] = 1

    // Determine the radius of the circling amp's circle
    switch (o.rawData[oBehParams2ndByte]) {
        case AMP_BP_ROT_RADIUS_200:
            o.rawData[oAmpRadiusOfRotation] = 200.0
            break

        case AMP_BP_ROT_RADIUS_300:
            o.rawData[oAmpRadiusOfRotation] = 300.0
            break

        case AMP_BP_ROT_RADIUS_400:
            o.rawData[oAmpRadiusOfRotation] = 400.0
            break

        case AMP_BP_ROT_RADIUS_0:
            break
    }

    // Choose a random point along the amp's circle.
    // The amp's move angle represents its angle along the circle.
    o.rawData[oMoveAngleYaw] = random_u16()

    o.rawData[oAction] = AMP_ACT_IDLE
}

/**
 * Main update function for fixed amps.
 * Fixed amps are a sub-species of circling amps, with circle radius 0.
 */
const fixed_circling_amp_idle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // Turn towards Mario, in both yaw and pitch.
    let xToMario = gMarioObject.header.gfx.pos[0] - o.rawData[oPosX]
    let yToMario = gMarioObject.header.gfx.pos[1] + 120.0 - o.rawData[oPosY]
    let zToMario = gMarioObject.header.gfx.pos[2] - o.rawData[oPosZ]
    let vAngleToMario = atan2s(sqrtf(xToMario * xToMario + zToMario * zToMario), -yToMario)

    obj_turn_toward_object(o, gMarioObject, 19, 0x1000)
    o.rawData[oFaceAnglePitch] = approach_s16_symmetric(o.rawData[oFaceAnglePitch], vAngleToMario, 0x1000)

    // Oscillate 40 units up and down.
    // Interestingly, 0x458 (1112 in decimal) is a magic number with no apparent significance.
    // It is slightly larger than the 0x400 figure used for homing amps, which makes
    // fixed amps oscillate slightly quicker.
    // Also, this uses the cosine, which starts at 1 instead of 0.
    o.rawData[oPosY] = o.rawData[oHomeY] + coss(o.rawData[oAmpYPhase] * 0x458) * 20.0

    // Handle attacks
    check_amp_attack()

    // Oscillate
    o.rawData[oAmpYPhase]++

    // Where there is a cur_obj_play_sound_1 call in the main circling amp update function,
    // there is nothing here. Fixed amps are the only amps that never play
    // the "amp buzzing" sound.
}

/**
 * Main update function for regular circling amps.
 */
const circling_amp_idle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    // Move in a circle.
    // The Y oscillation uses the magic number 0x8B0 (2224), which is
    // twice that of the fixed amp. In other words, circling amps will
    // oscillate twice as fast. Also, unlike all other amps, circling
    // amps oscillate 60 units around their average Y instead of 40.
    o.rawData[oPosX] = o.rawData[oHomeX] + sins(o.rawData[oMoveAngleYaw]) * o.rawData[oAmpRadiusOfRotation]
    o.rawData[oPosZ] = o.rawData[oHomeZ] + coss(o.rawData[oMoveAngleYaw]) * o.rawData[oAmpRadiusOfRotation]
    o.rawData[oPosY] = o.rawData[oHomeY] + coss(o.rawData[oAmpYPhase] * 0x8B0) * 30.0
    o.rawData[oMoveAngleYaw] += 0x400
    o.rawData[oFaceAngleYaw] = o.rawData[oMoveAngleYaw] + 0x4000

    // Handle attacks
    check_amp_attack()

    // Oscillate
    o.rawData[oAmpYPhase]++

    //cur_obj_play_sound_1(SOUND_AIR_AMP_BUZZ)
}

/**
 * Circling amp update function.
 * This calls the main update functions for both types of circling amps,
 * and calls the common amp cooldown function when the amp is cooling down.
 */
export const bhv_circling_amp_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case AMP_ACT_IDLE:
            if (o.rawData[oBehParams2ndByte] == AMP_BP_ROT_RADIUS_0) {
                fixed_circling_amp_idle_loop()
            } else {
                circling_amp_idle_loop()
            }

            break

        case AMP_ACT_ATTACK_COOLDOWN:
            amp_attack_cooldown_loop()
            break
    }
}

gLinker.bhv_homing_amp_init = bhv_homing_amp_init
gLinker.bhv_homing_amp_loop = bhv_homing_amp_loop
gLinker.bhv_circling_amp_init = bhv_circling_amp_init
gLinker.bhv_circling_amp_loop = bhv_circling_amp_loop