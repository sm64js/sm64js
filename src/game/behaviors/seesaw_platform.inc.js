import { oBehParams2ndByte, oCollisionDistance } from "../../include/object_constants"
import { bob_seg7_collision_bridge } from "../../levels/bob/seesaw_platform/collision.inc"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"

const sSeesawPlatformCollisionModels = new Array(8)
sSeesawPlatformCollisionModels[3] = bob_seg7_collision_bridge

export const bhv_seesaw_platform_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.collisionData = sSeesawPlatformCollisionModels[o.rawData[oBehParams2ndByte]]

    if (o.rawData[oBehParams2ndByte] == 2) {
        o.rawData[oCollisionDistance] = 2000.0
    }

}

export const bhv_seesaw_platform_update = () => {
    const o = ObjectListProc.gCurrentObject

}