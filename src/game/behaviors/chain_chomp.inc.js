import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWoodenPostMarioPounding, oWoodenPostSpeedY, oWoodenPostOffsetY, oChainChompReleaseStatus, CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE, oPosX, oPosY, oHomeY, oBehParams, WOODEN_POST_BP_NO_COINS_MASK, oDistanceToMario, oTimer, oWoodenPostTotalMarioAngle, oAngleToMario, oWoodenPostPrevAngleToMario, oAction, CHAIN_CHOMP_ACT_UNINITIALIZED, CHAIN_CHOMP_ACT_MOVE, CHAIN_CHOMP_ACT_UNLOAD_CHAIN, oChainChompSegments, CHAIN_CHOMP_CHAIN_PART_BP_PIVOT, oBehParams2ndByte, CHAIN_CHOMP_NOT_RELEASED, oPosZ, oSubAction, CHAIN_CHOMP_SUB_ACT_TURN, CHAIN_CHOMP_SUB_ACT_LUNGE, oGravity, oChainChompDistToPivot, oChainChompMaxDistFromPivotPerChainPart, oChainChompRestrictedByChain, oMoveFlags, OBJ_MOVE_MASK_ON_GROUND, oMoveAngleYaw, oForwardVel, oVelY } from "../../include/object_constants"
import { cur_obj_is_mario_ground_pounding_platform, cur_obj_set_pos_to_home, cur_obj_unhide, spawn_object, obj_mark_for_deletion, cur_obj_update_floor_and_walls, cur_obj_move_standard, spawn_object_relative, cur_obj_rotate_yaw_toward, abs_angle_diff } from "../ObjectHelpers"
import { approach_number_ptr } from "../ObjBehaviors2"
import { int16 } from "../../utils"
import { MODEL_METALLIC_BALL, MODEL_NONE } from "../../include/model_ids"
import { bhvChainChompChainPart } from "../BehaviorData"

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
                /// spawn 5 yello coins!
                ObjectListProc.set_object_respawn_info_bits(o, 1)
            }
        }

        o.rawData[oWoodenPostPrevAngleToMario] = o.rawData[oAngleToMario]
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
        const segments = new Array(4)
        o.rawData[oChainChompSegments] = segments

        for (let i = 0; i < 4; i++) {
            segments[i] = { posX: 0.0, posY: 0.0, posZ: 0.0, pitch: 0, yaw: 0, roll: 0 }
        }

        cur_obj_set_pos_to_home()

        o.parentObj = spawn_object(o, CHAIN_CHOMP_CHAIN_PART_BP_PIVOT, bhvChainChompChainPart)

        // Spawn the non-pivot chain parts, starting from the chain chomp and moving toward the pivot
        for (let i = 0; i < 4; i++) {
            spawn_object_relative(i, 0, 0, 0, o, MODEL_METALLIC_BALL, bhvChainChompChainPart)
        }

        o.rawData[oAction] = CHAIN_CHOMP_ACT_MOVE
        cur_obj_unhide()
        
    }
}

const chain_chomp_sub_act_turn = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oGravity] = -4.0
    //chain_chomp_restore_normal_chain_lengths()
    //obj_move_p

    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_ON_GROUND) {
        cur_obj_rotate_yaw_toward(o.rawData[oAngleToMario], 0x400)
        if (abs_angle_diff(o.rawData[oAngleToMario], o.rawData[oMoveAngleYaw]) < 0x800) {
            if (false) {

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

        const maxDistToPivot = o.rawData[oChainChompMaxDistFromPivotPerChainPart] * 5

        o.rawData[oChainChompRestrictedByChain] = 0

        
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
            throw "todo unload chain"
            break
    }
}