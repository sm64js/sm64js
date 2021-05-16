import { oTimer, oOpacity, oPosX, oPosZ, ACTIVE_FLAGS_DEACTIVATED, oPosY } from "../../include/object_constants"
import { cur_obj_scale, spawn_object } from "../ObjectHelpers"
import { MODEL_SMOKE } from "../../include/model_ids"
import { bhvBobombBullyDeathSmoke } from "../BehaviorData"
import { CameraInstance as Camera } from "../Camera"
import * as CAMERA from "../Camera"  // for constants

export const bhv_explosion_init = () => {

    //TODO Sound Explosion
    const o = gLinker.ObjectListProcessor.gCurrentObject

    Camera.set_environmental_camera_shake(CAMERA.SHAKE_ENV_EXPLOSION)

    o.rawData[oOpacity] = 255
}

export const bhv_explosion_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oTimer] == 9) {
        if (gLinker.SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ]) > o.rawData[oPosY]) {
            // TODO make bubbles
        } else {
            spawn_object(o, MODEL_SMOKE, bhvBobombBullyDeathSmoke)
        }

        o.activeFlags = ACTIVE_FLAGS_DEACTIVATED
    }

    o.rawData[oOpacity] -= 14

    cur_obj_scale(o.rawData[oTimer] / 9.0  + 1.0)

}

gLinker.bhv_explosion_init = bhv_explosion_init
gLinker.bhv_explosion_loop = bhv_explosion_loop
