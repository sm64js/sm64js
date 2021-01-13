import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oTimer, oOpacity, oPosX, oPosZ, ACTIVE_FLAGS_DEACTIVATED } from "../../include/object_constants"
import { SpawnObjectInstance as Spawn } from "../SpawnObject"
import { cur_obj_scale } from "../ObjectHelpers"

export const bhv_explosion_init = () => {

    //TODO Sound Explosion
    const o = ObjectListProc.gCurrentObject

    //set_environmental_camera_shake(SHAKE_ENV_EXPLOSION)

    o.rawData[oOpacity] = 255
}

export const bhv_explosion_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 9) {
        if (Spawn.SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])) {
            // TODO make bubbles
        } else {
            /// TODO spawn death smoke
        }

        o.activeFlags = ACTIVE_FLAGS_DEACTIVATED
    }

    o.rawData[oOpacity] -= 14

    cur_obj_scale(o.rawData[oTimer] / 9.0  + 1.0)

}