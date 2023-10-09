import { MODEL_BBH_TUMBLING_PLATFORM_PART, MODEL_BITFS_TUMBLING_PLATFORM_PART, MODEL_LLL_FALLING_PLATFORM, MODEL_WF_TUMBLING_BRIDGE_PART } from "../../include/model_ids"
import { oAction, oAngleVelPitch, oAngleVelRoll, oBehParams2ndByte, oDistanceToMario, oFloorHeight, oGravity, oPosY, oTimer, oTumblingBridgeUnkF4 } from "../../include/object_constants"
import { SOUND_GENERAL_PLATFORM } from "../../include/sounds"
import { bbh_seg7_collision_07026B1C } from "../../levels/bbh/tumbling_platform_near/collision.inc"
import { bitfs_seg7_collision_07015288 } from "../../levels/bitfs/tumbling_platform_near/collision.inc"
import { lll_seg7_collision_0701D21C } from "../../levels/lll/collapsing_wooden_platform/collision.inc"
import { wf_seg7_collision_tumbling_bridge } from "../../levels/wf/tumbling_bridge_near/collision.inc"
import { random_sign } from "../../utils"
import { cur_obj_call_action_function, cur_obj_has_behavior, cur_obj_hide, cur_obj_move_using_fvel_and_gravity, cur_obj_rotate_face_angle_using_vel, cur_obj_unhide, cur_obj_update_floor_height, obj_mark_for_deletion, spawn_object_relative } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

const sTumblingBridgeParams = [
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_WF_TUMBLING_BRIDGE_PART, collision: wf_seg7_collision_tumbling_bridge},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -412, platformWidth: 103, model: MODEL_BBH_TUMBLING_PLATFORM_PART, collision: bbh_seg7_collision_07026B1C},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_LLL_FALLING_PLATFORM, collision: lll_seg7_collision_0701D21C},
    {numBridgeSections: 9, bridgeRelativeStartingXorZ: -512, platformWidth: 0x80, model: MODEL_BITFS_TUMBLING_PLATFORM_PART, collision: bitfs_seg7_collision_07015288},
]

export const bhv_tumbling_bridge_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    switch (o.rawData[oAction]) {
        case 0:
            if (gMarioObject.platform == o) {
                o.rawData[oAction]++
                o.rawData[oTumblingBridgeUnkF4] = random_sign() * 0x80
            }
            break

        case 1:
            cur_obj_update_floor_height()
            if (o.rawData[oTimer] > 5) {
                o.rawData[oAction]++
                cur_obj_play_sound_2(SOUND_GENERAL_PLATFORM)
            }
            break
        
        case 2:
            if (o.rawData[oAngleVelPitch] < 0x400) {
                o.rawData[oAngleVelPitch] += 0x80
            }
            if (o.rawData[oAngleVelRoll] > -0x400 && o.rawData[oAngleVelRoll] < 0x400) {
                o.rawData[oAngleVelRoll] += o.rawData[oTumblingBridgeUnkF4]
            }
            o.rawData[oGravity] = -3.0
            cur_obj_rotate_face_angle_using_vel()
            cur_obj_move_using_fvel_and_gravity()
            if (o.rawData[oPosY] < o.rawData[oFloorHeight] - 300.0) {
                o.rawData[oAction]++
            }
            break
        
        case 3:
            break
    }

    if (o.parentObj.rawData[oAction] == 3) {
        obj_mark_for_deletion(o)
    }
}

const tumbling_bridge_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (cur_obj_has_behavior(gLinker.behaviors.bhvLLLTumblingBridge) || o.rawData[oDistanceToMario] < 1000.0) {
        o.rawData[oAction] = 1
    }
}

const tumbling_bridge_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

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

        if (cur_obj_has_behavior(gLinker.behaviors.bhvLLLTumblingBridge)) {
            if (i % 3 == 0) {
                relativePlatformY -= 150
            }
    
            relativeInitialPlatformY = 450
        }

        platformObj = spawn_object_relative(0, relativePlatformX, relativePlatformY + relativeInitialPlatformY, relativePlatformZ, o, sTumblingBridgeParams[bridgeID].model, gLinker.behaviors.bhvTumblingBridgePlatform)
        
        platformObj.collisionData = sTumblingBridgeParams[bridgeID].collision
    }

    o.rawData[oAction] = 2
}

const tumbling_bridge_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_hide()
    if (cur_obj_has_behavior(gLinker.behaviors.bhvLLLTumblingBridge)) {
        cur_obj_unhide()
    } else if (o.rawData[oDistanceToMario] > 1200.0) {
        o.rawData[oAction] = 3
        cur_obj_unhide()
    }
}

const tumbling_bridge_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    cur_obj_unhide()
    o.rawData[oAction] = 0
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

gLinker.bhv_tumbling_bridge_loop = bhv_tumbling_bridge_loop
gLinker.bhv_tumbling_bridge_platform_loop = bhv_tumbling_bridge_platform_loop