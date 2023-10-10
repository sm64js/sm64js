import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWoodenPostMarioPounding, oWoodenPostSpeedY, oWoodenPostOffsetY, oChainChompReleaseStatus, CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE, oPosX, oPosY, oHomeY, oBehParams, WOODEN_POST_BP_NO_COINS_MASK, oDistanceToMario, oTimer, oWoodenPostTotalMarioAngle, oAngleToMario, oWoodenPostPrevAngleToMario, oAction, CHAIN_CHOMP_ACT_UNINITIALIZED, CHAIN_CHOMP_ACT_MOVE, CHAIN_CHOMP_ACT_UNLOAD_CHAIN, oChainChompSegments, CHAIN_CHOMP_CHAIN_PART_BP_PIVOT, oBehParams2ndByte, CHAIN_CHOMP_NOT_RELEASED, oPosZ, oSubAction, CHAIN_CHOMP_SUB_ACT_TURN, CHAIN_CHOMP_SUB_ACT_LUNGE, oGravity, oChainChompDistToPivot, oChainChompMaxDistFromPivotPerChainPart, oChainChompRestrictedByChain, oMoveFlags, OBJ_MOVE_MASK_ON_GROUND, oMoveAngleYaw, oForwardVel, oVelY, oChainChompMaxDistBetweenChainParts, oChainChompTargetPitch, oChainChompUnk104, oChainChompHitGate, CHAIN_CHOMP_RELEASED_LUNGE_AROUND, oChainChompNumLunges, oWallHitboxRadius, CHAIN_CHOMP_RELEASED_BREAK_GATE, oHomeX, oHomeZ, OBJ_MOVE_HIT_WALL, CHAIN_CHOMP_RELEASED_JUMP_AWAY, CHAIN_CHOMP_RELEASED_END_CUTSCENE } from "../../include/object_constants"
import { cur_obj_is_mario_ground_pounding_platform, cur_obj_set_pos_to_home, cur_obj_unhide, spawn_object, obj_mark_for_deletion, cur_obj_update_floor_and_walls, cur_obj_move_standard, spawn_object_relative, cur_obj_rotate_yaw_toward, abs_angle_diff, cur_obj_check_anim_frame, cur_obj_reverse_animation, cur_obj_hide, obj_spawn_loot_yellow_coins, cur_obj_nearest_object_with_behavior, spawn_mist_particles_with_sound, cur_obj_angle_to_home, cur_obj_lateral_dist_to_home, cur_obj_reflect_move_angle_off_wall } from "../ObjectHelpers"
import { approach_number_ptr, obj_get_pitch_from_vel, obj_move_pitch_approach, obj_face_pitch_approach, obj_check_attacks } from "../ObjBehaviors2"
import { int16, random_sign } from "../../utils"
import { MODEL_DIRT_ANIMATION, MODEL_METALLIC_BALL } from "../../include/model_ids"
import { bhvChainChomp, bhvChainChompChainPart } from "../BehaviorData"
import { atan2s } from "../../engine/math_util"
import { INTERACT_MR_BLIZZARD } from "../Interaction"
import { SOUND_GENERAL_CHAIN_CHOMP1, SOUND_GENERAL_POUND_WOOD_POST, SOUND_GENERAL_WALL_EXPLOSION } from "../../include/sounds"
import { CameraInstance as Camera, CUTSCENE_STAR_SPAWN, SHAKE_POS_SMALL } from "../Camera"
import { spawn_mist_particles_variable } from "./white_puff.inc"
import { spawn_triangle_break_particles } from "./break_particles.inc"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { MARIO_DIALOG_LOOK_UP, MARIO_DIALOG_STATUS_SPEAK, MARIO_DIALOG_STOP, set_mario_npc_dialog } from "../MarioActionsCutscene"

const sChainChompHitbox = {
    interactType:      INTERACT_MR_BLIZZARD,
    downOffset:        0,
    damageOrCoinValue: 3,
    health:            1,
    numLootCoins:      0,
    radius:            80,
    height:            160,
    hurtboxRadius:     80,
    hurtboxHeight:     160
}

const wooden_post_approach_speed = () => {
    const o = ObjectListProc.gCurrentObject

    const result = approach_number_ptr(o.rawData, oWoodenPostSpeedY, 0.0, 25.0)

    return result
}

const bhv_wooden_post_update = () => {
    const o = ObjectListProc.gCurrentObject

    if (!o.rawData[oWoodenPostMarioPounding]) {
        o.rawData[oWoodenPostMarioPounding] = cur_obj_is_mario_ground_pounding_platform()
        if (o.rawData[oWoodenPostMarioPounding]) {
            cur_obj_play_sound_2(SOUND_GENERAL_POUND_WOOD_POST)
            o.rawData[oWoodenPostSpeedY] = -70
        }
    } else if (wooden_post_approach_speed()) {
        // Stay still until mario is done ground pounding
        o.rawData[oWoodenPostMarioPounding] = cur_obj_is_mario_ground_pounding_platform()
    } else if ((o.rawData[oWoodenPostOffsetY] += o.rawData[oWoodenPostSpeedY]) < -190.0) {
        // Once pounded, if this is the chain chomp's post, release the chain chomp
        o.rawData[oWoodenPostOffsetY] = -190
        if (o.parentObj != o) {
            ///play puzzle jingle sound
            o.parentObj.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE
            o.parentObj = o
        }
    }

    if (o.rawData[oWoodenPostOffsetY] != 0.0) {
        o.rawData[oPosY] = o.rawData[oHomeY] + o.rawData[oWoodenPostOffsetY]
    } else if (!(o.rawData[oBehParams] & WOODEN_POST_BP_NO_COINS_MASK)) {
        // Reset the timer once mario is far enough
        if (o.rawData[oDistanceToMario] > 400.0) {
            o.rawData[oTimer] = 0
            o.rawData[oWoodenPostTotalMarioAngle] = 0
        } else {
            // When mario runs around the post 3 times within 200 frames, spawn coins
            o.rawData[oWoodenPostTotalMarioAngle] += int16(o.rawData[oAngleToMario] - o.rawData[oWoodenPostPrevAngleToMario])
            if (parseInt(Math.abs(o.rawData[oWoodenPostTotalMarioAngle])) > 0x30000 && o.rawData[oTimer] < 200) {
                obj_spawn_loot_yellow_coins(o, 5, 20.0)
                ObjectListProc.set_object_respawn_info_bits(o, 1)
            }
        }

        o.rawData[oWoodenPostPrevAngleToMario] = o.rawData[oAngleToMario]
    }
}

const chain_chomp_update_chain_segments = () => {
    const o = ObjectListProc.gCurrentObject

    let segmentVelY

    if (o.rawData[oVelY] < 0.0) {
        segmentVelY = o.rawData[oVelY]
    } else {
        segmentVelY = -20.0
    }

    // Segment 0 connects the pivot to the chain chomp itself, and segment i>0
    // connects the pivot to chain part i (1 is closest to the chain chomp).

    let prevSegment
    let segment

    for (let i = 1; i <= 4; i++) {
        prevSegment = o.rawData[oChainChompSegments][i - 1]
        segment = o.rawData[oChainChompSegments][i]

        // Apply gravity
        segment.posY += segmentVelY
        if (segment.posY < 0.0) { segment.posY = 0.0 }

        // Cap distance to previous chain part (so that the tail follows the chomp)
        let offsetX = segment.posX - prevSegment.posX
        let offsetY = segment.posY - prevSegment.posY
        let offsetZ = segment.posZ - prevSegment.posZ

        let offset = Math.sqrt(offsetX * offsetX + offsetY * offsetY + offsetZ * offsetZ)

        if (offset > o.rawData[oChainChompMaxDistFromPivotPerChainPart]) {
            offset = o.rawData[oChainChompMaxDistFromPivotPerChainPart] / offset
            offsetX *= offset
            offsetY *= offset
            offsetZ *= offset
        }

        // Cap distance to pivot (so that it stretches when the chomp moves far from the wooden post)

        offsetX += prevSegment.posX
        offsetY += prevSegment.posY
        offsetZ += prevSegment.posZ
        offset = Math.sqrt(offsetX * offsetX + offsetY * offsetY + offsetZ * offsetZ)

        const maxTotalOffset = o.rawData[oChainChompMaxDistFromPivotPerChainPart] * (5 - i)

        if (offset > maxTotalOffset) {
            offset = maxTotalOffset / offset
            offsetX *= offset
            offsetY *= offset
            offsetZ *= offset
        }

        segment.posX = offsetX
        segment.posY = offsetY
        segment.posZ = offsetZ
    }

}

const bhv_chain_chomp_chain_part_update = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.parentObj.rawData[oAction] == CHAIN_CHOMP_ACT_UNLOAD_CHAIN) {
        obj_mark_for_deletion(o)
    } else if (o.rawData[oBehParams2ndByte] != CHAIN_CHOMP_CHAIN_PART_BP_PIVOT) {
        const segment = o.parentObj.rawData[oChainChompSegments][o.rawData[oBehParams2ndByte]]

        o.rawData[oPosX] = o.parentObj.parentObj.rawData[oPosX] + segment.posX
        o.rawData[oPosY] = o.parentObj.parentObj.rawData[oPosY] + segment.posY
        o.rawData[oPosZ] = o.parentObj.parentObj.rawData[oPosZ] + segment.posZ

    } else if (o.parentObj.rawData[oChainChompReleaseStatus] != CHAIN_CHOMP_NOT_RELEASED) {
        cur_obj_update_floor_and_walls()
        cur_obj_move_standard(78)
    }
}

const chain_chomp_act_uninitialized = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oDistanceToMario] < 3000.0) {
        const segments = new Array(5)
        o.rawData[oChainChompSegments] = segments

        for (let i = 0; i <= 4; i++) {
            segments[i] = { posX: 0.0, posY: 0.0, posZ: 0.0, pitch: 0, yaw: 0, roll: 0 }
        }

        cur_obj_set_pos_to_home()

        o.parentObj = spawn_object(o, CHAIN_CHOMP_CHAIN_PART_BP_PIVOT, bhvChainChompChainPart)

        // Spawn the non-pivot chain parts, starting from the chain chomp and moving toward the pivot
        for (let i = 1; i <= 4; i++) {
            spawn_object_relative(i, 0, 0, 0, o, MODEL_METALLIC_BALL, bhvChainChompChainPart)
        }

        o.rawData[oAction] = CHAIN_CHOMP_ACT_MOVE
        cur_obj_unhide()
        
    }
}

const chain_chomp_restore_normal_chain_lengths = () => {
    const o = ObjectListProc.gCurrentObject

    approach_number_ptr(o.rawData, oChainChompMaxDistFromPivotPerChainPart, 750.0 / 5, 4.0)

    o.rawData[oChainChompMaxDistBetweenChainParts] = o.rawData[oChainChompMaxDistFromPivotPerChainPart]
}

const chain_chomp_sub_act_turn = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGravity] = -4.0
    chain_chomp_restore_normal_chain_lengths()
    obj_move_pitch_approach(0, 0x100)

    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x400)
        if (abs_angle_diff(o.rawData[oAngleToMario], o.rawData[oMoveAngleYaw]) < 0x800) {
            if (o.rawData[oTimer] > 30) {
                if (cur_obj_check_anim_frame(0)) {
                    cur_obj_reverse_animation()
                    if (o.rawData[oTimer] > 40) {
                        // Increase the maximum distance from the pivot and enter the lunging sub-action.

                        //play sound

                        o.rawData[oSubAction] = CHAIN_CHOMP_SUB_ACT_LUNGE
                        o.rawData[oChainChompMaxDistFromPivotPerChainPart] = 900.0 / 5

                        o.rawData[oForwardVel] = 140
                        o.rawData[oVelY] = 20
                        o.rawData[oGravity] = 0.0
                        o.rawData[oChainChompTargetPitch] = obj_get_pitch_from_vel()
                    }
                }

            } else {
                o.rawData[oForwardVel] = 0.0
            }
        } else {
            /// play sound
            o.rawData[oForwardVel] = 10.0
            o.rawData[oVelY] = 20.0
        }
    } else {
        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x190)
        o.rawData[oTimer] = 0
    }
}

const chain_chomp_sub_act_lunge = () => {

    const o = ObjectListProc.gCurrentObject

    obj_face_pitch_approach(o.rawData[oChainChompTargetPitch], 0x400)

    if (o.rawData[oForwardVel] != 0.0) {
        if (o.rawData[oChainChompRestrictedByChain] == 1) {
            o.rawData[oForwardVel] = 0.0
            o.rawData[oVelY] = 0.0
            o.rawData[oChainChompUnk104] = 30.0
        }

        // TODO: What is this
        let val04 = 900.0 - o.rawData[oChainChompDistToPivot]
        if (val04 > 220.0) {
            val04 = 220.0
        }

        o.rawData[oChainChompMaxDistBetweenChainParts] = val04 / 220.0 * o.rawData[oChainChompMaxDistFromPivotPerChainPart]
        o.rawData[oTimer] = 0
    } else {
        cur_obj_rotate_yaw_toward(atan2s(o.rawData[oChainChompSegments][0].posZ, o.rawData[oChainChompSegments][0].posX), 0x1000)

        if (o.rawData[oChainChompUnk104] != 0.0) {
            approach_number_ptr(o.rawData, oChainChompUnk104, 0.0, 0.8)
        } else {
            o.rawData[oSubAction] = CHAIN_CHOMP_SUB_ACT_TURN
        }

        o.rawData[oChainChompMaxDistBetweenChainParts] = o.rawData[oChainChompUnk104]

        if (window.gGlobalTimer % 2 != 0) {
            o.rawData[oChainChompMaxDistBetweenChainParts] = -o.rawData[oChainChompUnk104]
        }
    }

    if (o.rawData[oTimer] < 30) {
        cur_obj_reverse_animation()
    }

}

// Fall to the ground and interrupt mario into a cutscene action.
const chain_chomp_released_trigger_cutscene = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oForwardVel] = 0.0
    o.rawData[oGravity] = -4.0

    //! Can delay this if we get into a cutscene-unfriendly action after the
    //  last post ground pound and before this
    if (set_mario_npc_dialog(MARIO_DIALOG_LOOK_UP) == MARIO_DIALOG_STATUS_SPEAK &&
        (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) && Camera.cutscene_object(CUTSCENE_STAR_SPAWN, o) == 1) {
            o.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_LUNGE_AROUND
            o.rawData[oTimer] = 0
        }
}

/**
 * Lunge 4 times, each time moving toward mario +/- 0x2000 angular units.
 * Finally, begin a lunge toward x=1450, z=562 (near the gate).
 */
const chain_chomp_released_lunge_around = () => {
    const o = ObjectListProc.gCurrentObject

    chain_chomp_restore_normal_chain_lengths()

    // Finish bounce
    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        // Before first bounce, turn toward mario and wait 2 seconds
        if (o.rawData[oChainChompNumLunges] == 0) {
            if (cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 800)) {
                if (o.rawData[oTimer] > 60) {
                    o.rawData[oChainChompNumLunges]++
                    // enable wall collision
                    o.rawData[oWallHitboxRadius] = 200.0
                }
            } else {
                o.rawData[oTimer] = 0
            }
        } else {
            o.rawData[oChainChompNumLunges]++ // idk why this isnt AFTER the if statement to make the
                                              // number checked equal to the # of lunges but whatever
            if (o.rawData[oChainChompNumLunges] <= 5) {
                cur_obj_play_sound_2(SOUND_GENERAL_CHAIN_CHOMP1)
                o.rawData[oMoveAngleYaw] = o.rawData[oAngleToMario] + random_sign() * 0x2000
                o.rawData[oForwardVel] = 30.0
                o.rawData[oVelY] = 50.0
            } else {
                o.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_BREAK_GATE
                o.rawData[oHomeX] = 1450.0
                o.rawData[oHomeZ] = 562.0
                o.rawData[oMoveAngleYaw] = cur_obj_angle_to_home()
                o.rawData[oForwardVel] = cur_obj_lateral_dist_to_home() / 8
                o.rawData[oVelY] = 50.0
            }
        }
    }
}

/**
 * Continue lunging until a wall collision occurs. Mark the gate as destroyed,
 * wait for the chain chomp to land, and then begin a jump toward the final
 * target, x=3288, z=-1770.
 */
const chain_chomp_released_break_gate = () => {
    const o = ObjectListProc.gCurrentObject

    if (!o.rawData[oChainChompHitGate]) {
        // If hit wall, assume it's the gate and bounce off of it
        //! The wall may not be the gate
        //! If the chain chomp gets stuck, it may never hit a wall, resulting
        //  in a softlock
        if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
            o.rawData[oChainChompHitGate] = true
            o.rawData[oMoveAngleYaw] = cur_obj_reflect_move_angle_off_wall()
            o.rawData[oForwardVel] *= 0.4
        }
    } else if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        o.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_JUMP_AWAY
        o.rawData[oHomeX] = 3288.0
        o.rawData[oHomeZ] = -1770.0
        o.rawData[oMoveAngleYaw] = cur_obj_angle_to_home()
        o.rawData[oForwardVel] = cur_obj_lateral_dist_to_home() / 50.0
        o.rawData[oVelY] = 120.0
    }
}

/**
 * Wait until the chain chomp lands.
 */
const chain_chomp_released_jump_away = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        Camera.gObjCutsceneDone = true
        o.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_END_CUTSCENE
    }
}

/**
 * Release mario and transition to the unload chain action.
 */
const chain_chomp_released_end_cutscene = () => {
    const o = ObjectListProc.gCurrentObject

    if (Camera.cutscene_object(CUTSCENE_STAR_SPAWN, o) == -1) {
        set_mario_npc_dialog(MARIO_DIALOG_STOP)
        o.rawData[oAction] = CHAIN_CHOMP_ACT_UNLOAD_CHAIN
    }
}

const chain_chomp_act_move = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oChainChompReleaseStatus] == CHAIN_CHOMP_NOT_RELEASED && o.rawData[oDistanceToMario] > 4000.0) {
        o.rawData[oAction] = CHAIN_CHOMP_ACT_UNLOAD_CHAIN
    } else {
        cur_obj_update_floor_and_walls()

        switch (o.rawData[oChainChompReleaseStatus]) {
            case CHAIN_CHOMP_NOT_RELEASED:
                switch (o.rawData[oSubAction]) {
                    case CHAIN_CHOMP_SUB_ACT_TURN:
                        chain_chomp_sub_act_turn()
                        break
                    case CHAIN_CHOMP_SUB_ACT_LUNGE:
                        chain_chomp_sub_act_lunge()
                        break
                }
                break
            case CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE:
                chain_chomp_released_trigger_cutscene();
                break;
            case CHAIN_CHOMP_RELEASED_LUNGE_AROUND:
                chain_chomp_released_lunge_around();
                break;
            case CHAIN_CHOMP_RELEASED_BREAK_GATE:
                chain_chomp_released_break_gate();
                break;
            case CHAIN_CHOMP_RELEASED_JUMP_AWAY:
                chain_chomp_released_jump_away();
                break;
            case CHAIN_CHOMP_RELEASED_END_CUTSCENE:
                chain_chomp_released_end_cutscene();
                break;
        }

        cur_obj_move_standard(78)

        // Segment 0 connects the pivot to the chain chomp itself
        o.rawData[oChainChompSegments][0].posX = o.rawData[oPosX] - o.parentObj.rawData[oPosX]
        o.rawData[oChainChompSegments][0].posY = o.rawData[oPosY] - o.parentObj.rawData[oPosY]
        o.rawData[oChainChompSegments][0].posZ = o.rawData[oPosZ] - o.parentObj.rawData[oPosZ]

        o.rawData[oChainChompDistToPivot] = Math.sqrt(
            o.rawData[oChainChompSegments][0].posX * o.rawData[oChainChompSegments][0].posX
            + o.rawData[oChainChompSegments][0].posY * o.rawData[oChainChompSegments][0].posY
            + o.rawData[oChainChompSegments][0].posZ * o.rawData[oChainChompSegments][0].posZ
        )

        // If the chain is fully stretched
        const maxDistToPivot = o.rawData[oChainChompMaxDistFromPivotPerChainPart] * 5
        if (o.rawData[oChainChompDistToPivot] > maxDistToPivot) {
            const ratio = maxDistToPivot / o.rawData[oChainChompDistToPivot]
            o.rawData[oChainChompDistToPivot] = maxDistToPivot

            o.rawData[oChainChompSegments][0].posX *= ratio
            o.rawData[oChainChompSegments][0].posY *= ratio
            o.rawData[oChainChompSegments][0].posZ *= ratio

            if (o.rawData[oChainChompReleaseStatus] == CHAIN_CHOMP_NOT_RELEASED) {
                // Restrict chain chomp position

                o.rawData[oPosX] = o.parentObj.rawData[oPosX] + o.rawData[oChainChompSegments][0].posX
                o.rawData[oPosY] = o.parentObj.rawData[oPosY] + o.rawData[oChainChompSegments][0].posY
                o.rawData[oPosZ] = o.parentObj.rawData[oPosZ] + o.rawData[oChainChompSegments][0].posZ

                o.rawData[oChainChompRestrictedByChain] = 1

            } else {
                // Move pivot like the chain chomp is pulling it along
                const oldPivotY = o.parentObj.rawData[oPosY]

                o.parentObj.rawData[oPosX] = o.rawData[oPosX] - o.rawData[oChainChompSegments][0].posX
                o.parentObj.rawData[oPosY] = o.rawData[oPosY] - o.rawData[oChainChompSegments][0].posY
                o.parentObj.rawData[oVelY] = o.parentObj.rawData[oPosY] - oldPivotY
                o.parentObj.rawData[oPosZ] = o.rawData[oPosZ] - o.rawData[oChainChompSegments][0].posZ
            }


        } else {
            o.rawData[oChainChompRestrictedByChain] = 0
        }

        chain_chomp_update_chain_segments()


        // Begin a lunge if mario tries to attack
        if (obj_check_attacks(sChainChompHitbox, o.rawData[oAction])) {
            o.rawData[oSubAction] = CHAIN_CHOMP_SUB_ACT_LUNGE
            o.rawData[oChainChompMaxDistFromPivotPerChainPart] = 900.0 / 5
            o.rawData[oForwardVel] = 0.0
            o.rawData[oVelY] = 300.0
            o.rawData[oGravity] = -4.0
            o.rawData[oChainChompTargetPitch] = -0x3000
        }
        
    }
}

const chain_chomp_act_unload_chain = () => {
    const o = ObjectListProc.gCurrentObject
    cur_obj_hide()

    o.rawData[oChainChompSegments] = null

    o.rawData[oAction] = CHAIN_CHOMP_ACT_UNINITIALIZED

    if (o.rawData[oChainChompReleaseStatus] != CHAIN_CHOMP_NOT_RELEASED) {
        obj_mark_for_deletion(o)
    }

}

const bhv_chain_chomp_update = () => {
    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case CHAIN_CHOMP_ACT_UNINITIALIZED:
            chain_chomp_act_uninitialized()
            break
        case CHAIN_CHOMP_ACT_MOVE:
            chain_chomp_act_move()
            break
        case CHAIN_CHOMP_ACT_UNLOAD_CHAIN:
            chain_chomp_act_unload_chain()
            break
    }
}

const bhv_chain_chomp_gate_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.parentObj = cur_obj_nearest_object_with_behavior(o, bhvChainChomp)
}

const bhv_chain_chomp_gate_update = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.parentObj.rawData[oChainChompHitGate]) {
        spawn_mist_particles_with_sound(SOUND_GENERAL_WALL_EXPLOSION)
        Camera.set_camera_shake_from_point(SHAKE_POS_SMALL, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
        spawn_mist_particles_variable(0, 0x7F, 200.0)
        spawn_triangle_break_particles(30, MODEL_DIRT_ANIMATION, 3.0, 4)
        obj_mark_for_deletion(o)
    }
}

gLinker.bhv_wooden_post_update = bhv_wooden_post_update
gLinker.bhv_chain_chomp_chain_part_update = bhv_chain_chomp_chain_part_update
gLinker.bhv_chain_chomp_update = bhv_chain_chomp_update
gLinker.bhv_chain_chomp_gate_init = bhv_chain_chomp_gate_init
gLinker.bhv_chain_chomp_gate_update = bhv_chain_chomp_gate_update
