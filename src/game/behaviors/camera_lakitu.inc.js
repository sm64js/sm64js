import * as _Linker from "../../game/Linker"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { oBehParams2ndByte, CAMERA_LAKITU_BP_FOLLOW_CAMERA, CLOUD_BP_LAKITU_CLOUD } from "../../include/object_constants"
import { MODEL_MIST } from "../../include/model_ids"
import { bhvCloud } from "../BehaviorData"
import { obj_mark_for_deletion, spawn_object_relative_with_scale } from "../ObjectHelpers"

const bhv_camera_lakitu_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oBehParams2ndByte] != CAMERA_LAKITU_BP_FOLLOW_CAMERA) {
        // Despawn unless this is the very beginning of the game
        if (LevelUpdate.gNeverEnteredCastle != true) {
            obj_mark_for_deletion(o)
        }
    } else {
        spawn_object_relative_with_scale(CLOUD_BP_LAKITU_CLOUD, 0, 0, 0, 2.0, o, MODEL_MIST, bhvCloud)
    }
}

// TODO
const bhv_camera_lakitu_update = () => {

}

gLinker.bhv_camera_lakitu_init = bhv_camera_lakitu_init
gLinker.bhv_camera_lakitu_update = bhv_camera_lakitu_update