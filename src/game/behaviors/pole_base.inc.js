import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oTimer } from "../../include/object_constants"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { MARIO_PUNCHING } from "../Mario"
import { cur_obj_push_mario_away } from "../ObjectHelpers"

export const bhv_pole_base_loop = () => {
    const o = ObjectListProc.gCurrentObject
    if (o.rawData[oPosY] - 10.0 < ObjectListProc.gMarioObject.rawData[oPosY] &&
        ObjectListProc.gMarioObject.rawData[oPosY] < o.rawData[oPosY] + o.hitboxHeight + 30.0) {
        if (o.rawData[oTimer] > 10) {
            if (!(LevelUpdate.gMarioState.action & MARIO_PUNCHING)) {
                cur_obj_push_mario_away(70.0)
            }
        }
    }
}


gLinker.bhv_pole_base_loop = bhv_pole_base_loop
