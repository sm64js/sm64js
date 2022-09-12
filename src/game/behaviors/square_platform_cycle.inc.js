import * as _Linker from "../../game/Linker"
import { oMoveAngleYaw, oAction, oTimer, oForwardVel, oBehParams2ndByte } from "../../include/object_constants"
import { cur_obj_move_using_fvel_and_gravity } from "../ObjectHelpers"
// square_platform_cycle.c.inc

const square_plat_set_yaw_until_timer = (yaw, a) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oMoveAngleYaw] = yaw
    if (a < o.rawData[oTimer])
        return true
    else
        return false
}

export const bhv_squarish_path_moving_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    o.rawData[oForwardVel] = 10.0
    switch (o.rawData[oAction]) {
        case 0:
            o.rawData[oAction] = (o.rawData[oBehParams2ndByte] & 3) + 1
            break
        case 1:
            if (square_plat_set_yaw_until_timer(0, 60))
                o.rawData[oAction]++
            break
        case 2:
            if (square_plat_set_yaw_until_timer(0x4000, 60))
                o.rawData[oAction]++
            break
        case 3:
            if (square_plat_set_yaw_until_timer(0x8000, 60))
                o.rawData[oAction]++
            break
        case 4:
            if (square_plat_set_yaw_until_timer(0xc000, 60))
                o.rawData[oAction] = 1
            break
        default:
            break
    }
    cur_obj_move_using_fvel_and_gravity()
    gLinker.SurfaceLoad.load_object_collision_model()
}

gLinker.bhv_squarish_path_moving_loop = bhv_squarish_path_moving_loop