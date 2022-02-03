import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { ACT_GROUP_MASK, ACT_GROUP_AIRBORNE } from "../Mario"
import { cur_obj_push_mario_away, dist_between_objects } from "../ObjectHelpers"
import { networkData } from "../../mmo/socket"

const checkMarioPosAndPushAway = (m) => {
    const o = ObjectListProc.gCurrentObject
    if (dist_between_objects(o, m.marioObj) < 100 && (m.action & ACT_GROUP_MASK) != ACT_GROUP_AIRBORNE) {
        cur_obj_push_mario_away(70.0, m)
    }
}

export const bhv_pole_base_loop = () => {
    checkMarioPosAndPushAway(ObjectListProc.gMarioObject.marioState)
    Object.values(networkData.remotePlayers).forEach(remotePlayer => {
        checkMarioPosAndPushAway(remotePlayer.marioState)
    })

}