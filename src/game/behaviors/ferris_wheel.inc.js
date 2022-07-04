import * as _Linker from "../../game/Linker"
import { oBehParams2ndByte, oFaceAngleRoll, oMoveAngleYaw, oPosX, oPosY, oPosZ } from "../../include/object_constants"
import { obj_perform_position_op } from "../ObjBehaviors2"
import { MODEL_BITS_BLUE_PLATFORM, MODEL_BITDW_BLUE_PLATFORM } from "../../include/model_ids"
import { bitdw_seg7_collision_0700F7F0 } from "../../levels/bitdw/ferris_wheel_axle/collision.inc"
import { bitdw_seg7_collision_0700F898 } from "../../levels/bitdw/ferris_platform/collision.inc"
import { bhvFerrisWheelPlatform } from "../BehaviorData"
import { spawn_object_relative, obj_set_parent_relative_pos } from "../ObjectHelpers"
import { coss, sins } from "../../utils"
import { POS_OP_COMPUTE_VELOCITY, POS_OP_SAVE_POSITION } from "../ObjBehaviors2"

/**
 * Behaviors for bhvFerrisWheelAxle and bhvFerrisWheelPlatform.
 * These are the revolving sets of four platforms in BitDW and BitS.
 * The axle spawns the four platforms.
 */

/**
 * Properties for the ferris wheels in BitS and BitDW, respectively.
 */

const bitdwFerrisWheelProperties = {
    axleCollision: bitdw_seg7_collision_0700F7F0,
    platformCollision: bitdw_seg7_collision_0700F898,
    platformModel: MODEL_BITDW_BLUE_PLATFORM
}

const sFerrisWheelProperties = [
    null, bitdwFerrisWheelProperties
]

/**
 * Init function for bhvFerrisWheelAxle.
 * It doesn't have an update function, but it increments its roll in its
 * behavior script.
 */
export const bhv_ferris_wheel_axle_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let platform
    let i

    o.collisionData = sFerrisWheelProperties[o.rawData[oBehParams2ndByte]].axleCollision

    for (i = 0; i < 4; i++) {
        platform = spawn_object_relative(i, 0, 0, 0, o,
                                         sFerrisWheelProperties[o.rawData[oBehParams2ndByte]].platformModel,
                                         bhvFerrisWheelPlatform)

        if (platform != null) {
            platform.collisionData =
                sFerrisWheelProperties[o.rawData[oBehParams2ndByte]].platformCollision
        }
    }
}

/**
 * Update function for bhvFerrisWheelPlatform.
 * Position self relative to parent using the parent's roll.
 */
export const bhv_ferris_wheel_platform_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let offsetXZ
    let offsetAngle

    obj_perform_position_op(POS_OP_SAVE_POSITION)

    offsetAngle = o.parentObj.rawData[oFaceAngleRoll] + o.rawData[oBehParams2ndByte] * 0x4000
    offsetXZ = 400.0 * coss(offsetAngle)

    o.rawData[oPosX] = o.parentObj.rawData[oPosX] + offsetXZ * sins(o.parentObj.rawData[oMoveAngleYaw])
               + 300.0 * coss(o.parentObj.rawData[oMoveAngleYaw])

    o.rawData[oPosY] = o.parentObj.rawData[oPosY] + 400.0 * sins(offsetAngle)

    o.rawData[oPosZ] = o.parentObj.rawData[oPosZ] + offsetXZ * coss(o.parentObj.rawData[oMoveAngleYaw])
               + 300.0 * sins(o.parentObj.rawData[oMoveAngleYaw])

    obj_perform_position_op(POS_OP_COMPUTE_VELOCITY)
}

gLinker.bhv_ferris_wheel_axle_init = bhv_ferris_wheel_axle_init
gLinker.bhv_ferris_wheel_platform_update = bhv_ferris_wheel_platform_update