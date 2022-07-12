import { ACTIVE_FLAG_DEACTIVATED, oChuckyaUnk88, oInteractStatus, oMoveAngleYaw } from "../../include/object_constants"
import { INT_STATUS_MARIO_UNK2, INT_STATUS_MARIO_UNK6 } from "../Interaction"
import { obj_mark_for_deletion, obj_set_gfx_pos_at_obj_pos } from "../ObjectHelpers"

export const common_anchor_mario_behavior = (sp28, sp2C, sp30) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    switch (o.parentObj.rawData[oChuckyaUnk88]) {
        case 0:
            break
        
        case 1:
            obj_set_gfx_pos_at_obj_pos(gMarioObject, o)
            break

        case 2:
            gMarioObject.rawData[oInteractStatus] |= (INT_STATUS_MARIO_UNK2 + sp30)
            gMarioStates[0].forwardVel = sp28
            gMarioStates[0].vel[1] = sp2C
            o.parentObj.rawData[oChuckyaUnk88] = 0
            break

        case 3:
            gMarioObject.rawData[oInteractStatus] |= (INT_STATUS_MARIO_UNK2 | INT_STATUS_MARIO_UNK6)
            gMarioStates[0].forwardVel = 10.0
            gMarioStates[0].vel[1] = 10.0
            o.parentObj.rawData[oChuckyaUnk88] = 0
            break
    }

    o.rawData[oMoveAngleYaw] = o.parentObj.rawData[oMoveAngleYaw]

    if (o.parentObj.activeFlags == ACTIVE_FLAG_DEACTIVATED) {
        obj_mark_for_deletion(o)
    }
}