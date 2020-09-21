import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oTimer } from "../../include/object_constants"
import { MARIO_PUNCHING, ACT_GROUP_MASK, ACT_GROUP_AIRBORNE } from "../Mario"
import { cur_obj_push_mario_away } from "../ObjectHelpers"
import { networkData } from "../../socket"

const checkMarioPosAndPushAway = (m) => {
    const o = ObjectListProc.gCurrentObject
    if (o.rawData[oPosY] - 10.0 < m.marioObj.rawData[oPosY] &&
        m.marioObj.rawData[oPosY] < o.rawData[oPosY] + o.hitboxHeight + 30.0) {
        if (o.rawData[oTimer] > 10) {
            if (!(m.action & MARIO_PUNCHING) &&
                (m.action & ACT_GROUP_MASK) != ACT_GROUP_AIRBORNE
            ) {
                cur_obj_push_mario_away(70.0, m)
            }
        }
    }
}

export const bhv_pole_base_loop = () => {
    checkMarioPosAndPushAway(ObjectListProc.gMarioObject.marioState)
    Object.values(networkData.remotePlayers).forEach(remotePlayer => {
        checkMarioPosAndPushAway(remotePlayer.marioState)
    })

}