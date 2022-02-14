import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oFaceAngleYaw, oInteractStatus, oBehParams } from "../../include/object_constants"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { INT_STATUS_INTERACTED, INTERACT_STAR_OR_KEY } from "../Interaction"
import { save_file_get_star_flags, } from "../SaveFile"
import { AreaInstance as Area } from "../Area"
import { MODEL_TRANSPARENT_STAR, MODEL_STAR } from "../../include/model_ids"

const sCollectStarHitbox = {
    interactType:      INTERACT_STAR_OR_KEY,
    downOffset:        0,
    damageOrCoinValue: 0,
    health:            0,
    numLootCoins:      0,
    radius:            80,
    height:            50,
    hurtboxRadius:     0,
    hurtboxHeight:     0
}

const bhv_collect_star_init = () => {
    const o = ObjectListProc.gCurrentObject

    let starId
    let currentLevelStarFlags

    starId = (o.rawData[oBehParams] >> 24) & 0xFF
    currentLevelStarFlags = save_file_get_star_flags(Area.gCurrSaveFileNum - 1, Area.gCurrCourseNum - 1)
    /*if (currentLevelStarFlags & (1 << starId)) {
        o.gfx.sharedChild = Area.gLoadedGraphNodes[MODEL_TRANSPARENT_STAR]
    } else {
        o.gfx.sharedChild = Area.gLoadedGraphNodes[MODEL_STAR]
    }*/

    obj_set_hitbox(o, sCollectStarHitbox)
}

const bhv_collect_star_loop = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oFaceAngleYaw] += 0x800

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
        mark_obj_for_deletion(o)
        o.rawData[oInteractStatus] = 0
    }
}

gLinker.bhv_collect_star_init = bhv_collect_star_init
gLinker.bhv_collect_star_loop = bhv_collect_star_loop