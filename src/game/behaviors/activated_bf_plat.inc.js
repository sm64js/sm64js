/**
 * Behavior for bhvActivatedBackAndForthPlatform.
 * There are only 2 of these in the game; the BitFS gray elevator
 * and the BitS arrow platform.
 * Note: The filename is abbreviated to avoid compiler seg fault on long paths
 */

import { oActivatedBackAndForthPlatformCountdown, oActivatedBackAndForthPlatformFlipRotation, oActivatedBackAndForthPlatformMaxOffset, oActivatedBackAndForthPlatformOffset, oActivatedBackAndForthPlatformStartYaw, oActivatedBackAndForthPlatformVel, oActivatedBackAndForthPlatformVertical, oBehParams, oDistanceToMario, oFaceAngleYaw, oHomeY, oPosY, oVelY } from "../../include/object_constants";
import { bitfs_seg7_collision_07015124 } from "../../levels/bitfs/elevator/collision.inc";
import { bitfs_seg7_collision_070157E0 } from "../../levels/bitfs/platform_on_track/collision.inc";
import { bits_seg7_collision_0701AD54 } from "../../levels/bits/areas/1/25/collision.inc";
import { clamp_f32, obj_perform_position_op, obj_set_dist_from_home, POS_OP_COMPUTE_VELOCITY, POS_OP_SAVE_POSITION } from "../ObjBehaviors2";

/**
 * Table of activated back-and-forth platform collision models.
 * The second entry is unused. It corresponds to the mesh platform
 * at the beginning of BitFS. In the game, it's a bhvPlatformOnTrack,
 * which allows for more complex movement; its path is mostly a straight line
 * except for where it dips into the lava. It seems the programmers
 * had it as a bhvActivatedBackAndForthPlatform initially, which moves
 * in a straight line, and wanted it to dip into the lava to make Mario have to
 * move off of it. To do this, they changed it to a bhvPlatformOnTrack, but
 * forgot to remove its entry in this table.
 */

const ACTIVATED_BF_PLAT_TYPE_BITS_ARROW_PLAT = 0
const ACTIVATED_BF_PLAT_TYPE_BITFS_MESH_PLAT = 1
const ACTIVATED_BF_PLAT_TYPE_BITFS_ELEVATOR  = 2

const sActivatedBackAndForthPlatformCollisionModels = [
    /* ACTIVATED_BF_PLAT_TYPE_BITS_ARROW_PLAT */ bits_seg7_collision_0701AD54,
    /* ACTIVATED_BF_PLAT_TYPE_BITFS_MESH_PLAT */ bitfs_seg7_collision_070157E0,
    /* ACTIVATED_BF_PLAT_TYPE_BITFS_ELEVATOR  */ bitfs_seg7_collision_07015124
]

export const bhv_activated_back_and_forth_platform_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let platformType = ((o.rawData[oBehParams] >> 16) & 0x0300) >> 8

    if (platformType != ACTIVATED_BF_PLAT_TYPE_BITS_ARROW_PLAT) {
        o.rawData[oActivatedBackAndForthPlatformFlipRotation] = 0
    } else {
        o.rawData[oActivatedBackAndForthPlatformFlipRotation] = 0x8000
    }

    o.collisionData = sActivatedBackAndForthPlatformCollisionModels[platformType]

    o.rawData[oActivatedBackAndForthPlatformMaxOffset] = 50.0 * ((o.rawData[oBehParams] >> 16) & 0x007F)

    if (platformType == ACTIVATED_BF_PLAT_TYPE_BITFS_ELEVATOR ) {
        o.rawData[oActivatedBackAndForthPlatformMaxOffset] -= 12.0
    }

    o.rawData[oActivatedBackAndForthPlatformVertical] = (o.rawData[oBehParams] >> 16) & 0x0080
    o.rawData[oActivatedBackAndForthPlatformStartYaw] = o.rawData[oFaceAngleYaw]
}

export const bhv_activated_back_and_forth_platform_update = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const w = {}

    if (gMarioObject.platform == o) {
        o.rawData[oVelY] = -6.0
    } else {
        o.rawData[oVelY] = 6.0
    }

    if (o.rawData[oActivatedBackAndForthPlatformVel] != 0.0) {
        if (o.rawData[oActivatedBackAndForthPlatformCountdown] != 0) {
            o.rawData[oActivatedBackAndForthPlatformCountdown]--
        } else {
            o.rawData[oActivatedBackAndForthPlatformOffset] += o.rawData[oActivatedBackAndForthPlatformVel]

            w.value = o.rawData[oActivatedBackAndForthPlatformOffset]
            if (clamp_f32(w, 0.0, o.rawData[oActivatedBackAndForthPlatformMaxOffset]) || (o.rawData[oActivatedBackAndForthPlatformVel] > 0.0 && o.rawData[oDistanceToMario] > 3000.0)) {
                o.rawData[oActivatedBackAndForthPlatformCountdown] = 20

                if (o.rawData[oVelY] < 0.0 || o.rawData[oActivatedBackAndForthPlatformVel] > 0.0) {
                    o.rawData[oActivatedBackAndForthPlatformVel] = -o.rawData[oActivatedBackAndForthPlatformVel]
                } else {
                    o.rawData[oActivatedBackAndForthPlatformVel] = 0.0
                }

                o.rawData[oFaceAngleYaw] += o.rawData[oActivatedBackAndForthPlatformFlipRotation]
            }
            o.rawData[oActivatedBackAndForthPlatformOffset] = w.value;
        }
    } else {
        if (o.rawData[oVelY] < 0.0) {
            o.rawData[oActivatedBackAndForthPlatformVel] = 10.0
        }

        o.rawData[oActivatedBackAndForthPlatformCountdown] = 20
    }

    obj_perform_position_op(POS_OP_SAVE_POSITION)

    if (o.rawData[oActivatedBackAndForthPlatformVertical] != false) {
        o.rawData[oPosY] = o.rawData[oHomeY] + o.rawData[oActivatedBackAndForthPlatformOffset]
    } else {
        o.rawData[oPosY] += o.rawData[oVelY]
        w.value = o.rawData[oPosY]
        clamp_f32(w, o.rawData[oHomeY] - 20.0, o.rawData[oHomeY])
        o.rawData[oPosY] = w.value

        obj_set_dist_from_home(-o.rawData[oActivatedBackAndForthPlatformOffset])
    }

    obj_perform_position_op(POS_OP_COMPUTE_VELOCITY)
}

gLinker.bhv_activated_back_and_forth_platform_init = bhv_activated_back_and_forth_platform_init
gLinker.bhv_activated_back_and_forth_platform_update = bhv_activated_back_and_forth_platform_update