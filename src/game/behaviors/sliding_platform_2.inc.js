import * as _Linker from "../Linker"
import { u16 } from "../../utils"
import { clamp_f32 } from "../ObjBehaviors2"
import { oBehParams, oMoveAngleYaw, oTimer, oPosY, oHomeY } from "../../include/object_constants"
import { obj_perform_position_op } from "../ObjBehaviors2"
import { bitfs_seg7_collision_07015768 } from "../../levels/bitfs/sliding_platform/collision.inc"
import { bitfs_seg7_collision_07015714 } from "../../levels/bitfs/moving_square_platform/collision.inc"
import { bitdw_seg7_collision_0700F688 } from "../../levels/bitdw/sliding_platform/collision.inc"

// sliding_platform_2.inc.c

const D_80331A24 = [
    /*bits_seg7_collision_0701A9A0*/null,
    /*bits_seg7_collision_0701AA0C*/null,
    bitfs_seg7_collision_07015714,
    bitfs_seg7_collision_07015768,
    /*rr_seg7_collision_070295F8*/null,
    /*rr_seg7_collision_0702967C*/null,
    bitdw_seg7_collision_0700F688,
    bitdw_seg7_collision_0700F688,
]

const bhv_sliding_plat_2_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let val04

    val04 = ((u16)(o.rawData[oBehParams] >> 16) & 0x0380) >> 7
    console.log(val04)
    o.collisionData = D_80331A24[val04]
    console.log(val04)
    o.oBackAndForthPlatformUnkF8 = 50.0 * ((u16)(o.rawData[oBehParams] >> 16) & 0x003F)

    if (val04 < 5 || val04 > 6) {
        o.oBackAndForthPlatformUnk100 = 15.0
        if ((u16)(o.rawData[oBehParams] >> 16) & 0x0040) {
            o.rawData[oMoveAngleYaw] += 0x8000
        }
    } else {
        o.oBackAndForthPlatformUnk100 = 10.0
        if ((u16)(o.rawData[oBehParams] >> 16) & 0x0040) {
            o.oBackAndForthPlatformUnkF4 = -1.0
        } else {
            o.oBackAndForthPlatformUnkF4 = 1.0
        }
    }
}

export const bhv_sliding_plat_2_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oTimer] > 10) {
        o.oBackAndForthPlatformUnkFC += o.oBackAndForthPlatformUnk100
        if (clamp_f32(o.oBackAndForthPlatformUnkFC, -o.oBackAndForthPlatformUnkF8, 0.0)) {
            o.oBackAndForthPlatformUnk100 = -o.oBackAndForthPlatformUnk100
            o.rawData[oTimer] = 0
        }
    }

    obj_perform_position_op(o, 'POS_OP_SAVE_POSITION')

    if (o.oBackAndForthPlatformUnkF4 != 0.0) {
        o.rawData[oPosY] = o.rawData[oHomeY] + o.oBackAndForthPlatformUnkFC * o.oBackAndForthPlatformUnkF4
    } else {
        obj_set_dist_from_home(o.oBackAndForthPlatformUnkFC)
    }

    obj_perform_position_op(o, 'POS_OP_COMPUTE_VELOCITY')
}

gLinker.bhv_sliding_plat_2_init = bhv_sliding_plat_2_init
gLinker.bhv_sliding_plat_2_loop = bhv_sliding_plat_2_loop