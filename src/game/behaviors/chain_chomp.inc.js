import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWoodenPostMarioPounding, oWoodenPostSpeedY, oWoodenPostOffsetY, oChainChompReleaseStatus, CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE, oPosX, oPosY, oHomeY, oBehParams, WOODEN_POST_BP_NO_COINS_MASK, oDistanceToMario, oTimer, oWoodenPostTotalMarioAngle, oAngleToMario, oWoodenPostPrevAngleToMario, oAction, CHAIN_CHOMP_ACT_UNINITIALIZED, CHAIN_CHOMP_ACT_MOVE, CHAIN_CHOMP_ACT_UNLOAD_CHAIN, oChainChompSegments, CHAIN_CHOMP_CHAIN_PART_BP_PIVOT, oBehParams2ndByte, CHAIN_CHOMP_NOT_RELEASED, oPosZ, oSubAction, CHAIN_CHOMP_SUB_ACT_TURN, CHAIN_CHOMP_SUB_ACT_LUNGE, oGravity, oChainChompDistToPivot, oChainChompMaxDistFromPivotPerChainPart, oChainChompRestrictedByChain, oMoveFlags, OBJ_MOVE_MASK_ON_GROUND, oMoveAngleYaw, oForwardVel, oVelY, oChainChompMaxDistBetweenChainParts, oChainChompTargetPitch, oChainChompUnk104 } from "../../include/object_constants"
import { cur_obj_is_mario_ground_pounding_platform, cur_obj_set_pos_to_home, cur_obj_unhide, spawn_object, obj_mark_for_deletion, cur_obj_update_floor_and_walls, cur_obj_move_standard, spawn_object_relative, cur_obj_rotate_yaw_toward, abs_angle_diff, cur_obj_check_anim_frame, cur_obj_reverse_animation, cur_obj_hide, obj_spawn_loot_yellow_coins } from "../ObjectHelpers"
import { approach_number_ptr, obj_get_pitch_from_vel, obj_move_pitch_approach, obj_face_pitch_approach, obj_check_attacks } from "../ObjBehaviors2"
import { int16 } from "../../utils"
import { MODEL_METALLIC_BALL } from "../../include/model_ids"
import { bhvChainChompChainPart } from "../BehaviorData"
import { atan2s } from "../../engine/math_util"
import { INTERACT_MR_BLIZZARD } from "../Interaction"

const sChainChompHitbox = {
    interactType: INTERACT_MR_BLIZZARD,
    downOffset: 0,
    damageOrCoinValue: 3,
    health: 1,
    numLootCoins: 0,
    radius: 80,
    height: 160,
    hurtboxRadius: 80,
    hurtboxHeight: 160
}

const wooden_post_approach_speed = () => {
    const o = ObjectListProc.gCurrentObject

    const wrapper = { value: o.rawData[oWoodenPostSpeedY] }
    const result = approach_number_ptr(wrapper, 0.0, 25.0)
    o.rawData[oWoodenPostSpeedY] = wrapper.value

    return result
}

export const bhv_wooden_post_update = () => {
    const o = ObjectListProc.gCurrentObject

    if (!o.rawData[oWoodenPostMarioPounding]) {
        o.rawData[oWoodenPostMarioPounding] = cur_obj_is_mario_ground_pounding_platform()
        if (o.rawData[oWoodenPostMarioPounding]) {
            ///play sound
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
            //o.parentObj.rawData[oChainChompReleaseStatus] = CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE
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

export const bhv_chain_chomp_chain_part_update = () => {
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

    const wrapper = { value: o.rawData[oChainChompMaxDistFromPivotPerChainPart] }
    approach_number_ptr(wrapper, 750.0 / 5, 4.0)
    o.rawData[oChainChompMaxDistFromPivotPerChainPart] = wrapper.value

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
            const wrapper = { value: o.rawData[oChainChompUnk104] }
            approach_number_ptr(wrapper, 0.0, 0.8)
            o.rawData[oChainChompUnk104] = wrapper.value
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
            default: throw "todo release chain chomp actions"
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

export const bhv_chain_chomp_update = () => {
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