import { MODEL_BBH_TUMBLING_PLATFORM_PART, MODEL_BITFS_TUMBLING_PLATFORM_PART, MODEL_LLL_FALLING_PLATFORM, MODEL_WF_TUMBLING_BRIDGE_PART } from "../../include/model_ids"
import { oAction, oBehParams2ndByte, oDistanceToMario } from "../../include/object_constants"
import { bbh_seg7_collision_07026B1C } from "../../levels/bbh/tumbling_platform_near/collision.inc"
import { bitfs_seg7_collision_07015288 } from "../../levels/bitfs/tumbling_platform_near/collision.inc"
import { lll_seg7_collision_0701D21C } from "../../levels/lll/collapsing_wooden_platform/collision.inc"
import { wf_seg7_collision_tumbling_bridge } from "../../levels/wf/tumbling_bridge_near/collision.inc"
import { cur_obj_call_action_function, cur_obj_has_behavior } from "../ObjectHelpers"

const sTumblingBridgeParams = [
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_WF_TUMBLING_BRIDGE_PART, collision: wf_seg7_collision_tumbling_bridge},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -412, platformWidth: 103, model: MODEL_BBH_TUMBLING_PLATFORM_PART, collision: bbh_seg7_collision_07026B1C},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_LLL_FALLING_PLATFORM, collision: lll_seg7_collision_0701D21C},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_BITFS_TUMBLING_PLATFORM_PART, collision: bitfs_seg7_collision_07015288},
]

const tumbling_bridge_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (/*cur_obj_has_behavior(bhvLllTumblingBridge) || */o.rawData[oDistanceToMario] < 1000.0) {
        o.rawData[oAction] = 1
    }
}

const tumbling_bridge_act_1 = () => {
    let platformObj
    let bridgeID = o.rawData[oBehParams2ndByte]
    let relativePlatformX
    let relativePlatformZ
    let relativePlatformY = 0
    let relativeInitialPlatformY = 0
    
    for (let i = 0; i < sTumblingBridgeParams[bridgeID].numBridgeSections; i++) {
        relativePlatformX = 0
        relativePlatformZ = 0

        if (bridgeID == 3) {
            relativePlatformX = sTumblingBridgeParams[bridgeID].bridgeRelativeStartingXorZ + sTumblingBridgeParams[bridgeID].platformWidth * i;
        } else {
            relativePlatformZ = sTumblingBridgeParams[bridgeID].bridgeRelativeStartingXorZ + sTumblingBridgeParams[bridgeID].platformWidth * i;
        }
    }
}

const tumbling_bridge_act_2 = () => {

}

const tumbling_bridge_act_3 = () => {
    
}

const sTumblingBridgeActions = [
    tumbling_bridge_act_0,
    tumbling_bridge_act_1,
    tumbling_bridge_act_2,
    tumbling_bridge_act_3,
]

export const bhv_tumbling_bridge_loop = () => {
    cur_obj_call_action_function(sTumblingBridgeActions)
}