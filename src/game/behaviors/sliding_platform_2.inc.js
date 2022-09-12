import * as _Linker from "../Linker"
import { clamp_f32, obj_set_dist_from_home} from "../ObjBehaviors2"
import { oBehParams, oMoveAngleYaw, oTimer, oPosY, oHomeY, oBackAndForthPlatformPathLength, oBackAndForthPlatformVel, oBackAndForthPlatformDirection, oBackAndForthPlatformDistance } from "../../include/object_constants"
import { obj_perform_position_op } from "../ObjBehaviors2"
import { bitfs_seg7_collision_07015768 } from "../../levels/bitfs/sliding_platform/collision.inc"
import { bitfs_seg7_collision_07015714 } from "../../levels/bitfs/moving_square_platform/collision.inc"
import { bitdw_seg7_collision_0700F688 } from "../../levels/bitdw/sliding_platform/collision.inc"

const sSlidingPlatform2CollisionData = [
    /*bits_seg7_collision_0701A9A0*/null,
    /*bits_seg7_collision_0701AA0C*/null,
    bitfs_seg7_collision_07015714,
    bitfs_seg7_collision_07015768,
    /*rr_seg7_collision_070295F8*/null,
    /*rr_seg7_collision_0702967C*/null,
    null,
    bitdw_seg7_collision_0700F688,
]

export const bhv_sliding_plat_2_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let collisionDataIndex = (o.rawData[oBehParams] >> 16 & 0x0380) >> 7

    o.collisionData = sSlidingPlatform2CollisionData[collisionDataIndex]
    o.rawData[oBackAndForthPlatformPathLength] = 50.0 * (o.rawData[oBehParams] >> 16 & 0x003F)

    if (collisionDataIndex < 5 || collisionDataIndex > 6) {
        o.rawData[oBackAndForthPlatformVel] = 15.0
        if (o.rawData[oBehParams] >> 16 & 0x0040) {
            o.rawData[oMoveAngleYaw] += 0x8000
        }
    } else {
        o.rawData[oBackAndForthPlatformVel] = 10.0
        if (o.rawData[oBehParams] >> 16 & 0x0040) {
            o.rawData[oBackAndForthPlatformDirection] = -1.0
        } else {
            o.rawData[oBackAndForthPlatformDirection] = 1.0
        }
    }
}

export const bhv_sliding_plat_2_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] > 10) {
        o.rawData[oBackAndForthPlatformDistance] += o.rawData[oBackAndForthPlatformVel]
        if (o.rawData[oBackAndForthPlatformDistance] <= -o.rawData[oBackAndForthPlatformPathLength]) {
            o.rawData[oBackAndForthPlatformDistance] = -o.rawData[oBackAndForthPlatformPathLength]
            o.rawData[oBackAndForthPlatformVel] = -o.rawData[oBackAndForthPlatformVel]
            o.rawData[oTimer] = 0
        } else if (o.rawData[oBackAndForthPlatformDistance] >= 0.0) {
            o.rawData[oBackAndForthPlatformDistance] = 0.0
            o.rawData[oBackAndForthPlatformVel] = -o.rawData[oBackAndForthPlatformVel]
            o.rawData[oTimer] = 0
        }
        /*if (clamp_f32(o.rawData[oBackAndForthPlatformDistance], -o.rawData[oBackAndForthPlatformPathLength], 0.0)) {
            o.rawData[oBackAndForthPlatformVel] = -o.rawData[oBackAndForthPlatformVel]
            o.rawData[oTimer] = 0
        }*/
    }

    obj_perform_position_op(0)

    if (o.rawData[oBackAndForthPlatformDirection] != 0.0) {
        o.rawData[oPosY] = o.rawData[oHomeY] + o.rawData[oBackAndForthPlatformDistance] * o.rawData[oBackAndForthPlatformDirection]
    } else {
        obj_set_dist_from_home(o.rawData[oBackAndForthPlatformDistance])
    }

    obj_perform_position_op(1)
}

gLinker.bhv_sliding_plat_2_init = bhv_sliding_plat_2_init
gLinker.bhv_sliding_plat_2_loop = bhv_sliding_plat_2_loop