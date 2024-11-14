import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oTimer, oPosY, oOpacity } from "../../include/object_constants"
import { obj_translate_xz_random, cur_obj_scale, cur_obj_move_using_fvel_and_gravity, obj_mark_for_deletion } from "../ObjectHelpers"
import { MODEL_MIST } from "../../include/model_ids"

export const bhv_white_puff_1_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const sp1C = 0.1
    const sp18 = 0.5

    if (o.rawData[oTimer] == 0) {
        obj_translate_xz_random(o, 40.0)
        o.rawData[oPosY] += 30.0
    }
    cur_obj_scale(o.rawData[oTimer] * sp18 + sp1C)
    o.rawData[oOpacity] = 50
    cur_obj_move_using_fvel_and_gravity()
    if (o.rawData[oTimer] > 4)
        obj_mark_for_deletion(o)
}

export const bhv_white_puff_2_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) 
        obj_translate_xz_random(o, 40.0)
}

gLinker.bhv_white_puff_1_loop = bhv_white_puff_1_loop
gLinker.bhv_white_puff_2_loop = bhv_white_puff_2_loop
