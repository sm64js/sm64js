import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oWoodenPostMarioPounding, oWoodenPostSpeedY, oWoodenPostOffsetY, oChainChompReleaseStatus, CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE, oPosX, oPosY, oHomeY, oBehParams, WOODEN_POST_BP_NO_COINS_MASK, oDistanceToMario, oTimer, oWoodenPostTotalMarioAngle, oAngleToMario, oWoodenPostPrevAngleToMario } from "../../include/object_constants"
import { cur_obj_is_mario_ground_pounding_platform } from "../ObjectHelpers"
import { approach_number_ptr } from "../ObjBehaviors2"
import { int16 } from "../../utils"

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
            console.log("RELEASE THE KRACKEN!!")
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