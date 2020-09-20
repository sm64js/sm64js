import { cur_obj_push_mario_away } from "../ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oTimer } from "../../include/object_constants"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { ACT_GROUP_STATIONARY, ACT_GROUP_MASK } from "../Mario"

export const bhv_extra_mario_base_loop = () => {
    const o = ObjectListProc.gCurrentObject
    o.hitboxHeight = 160
    if (o.rawData[oPosY] - 10.0 < ObjectListProc.gMarioObject.rawData[oPosY] &&
        ObjectListProc.gMarioObject.rawData[oPosY] < o.rawData[oPosY] + o.hitboxHeight + 30.0) {
        if (o.rawData[oTimer] > 10) {
            if ((LevelUpdate.gMarioState.action & ACT_GROUP_MASK) == ACT_GROUP_STATIONARY) {
                cur_obj_push_mario_away(100.0)
            }
        }
    }
}