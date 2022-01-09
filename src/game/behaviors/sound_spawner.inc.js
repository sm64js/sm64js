// sound_spawner.c.inc
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oSoundEffectUnkF4 } from "../../include/object_constants"
import { play_sound } from "../../audio/external"

export const bhv_sound_spawner_init = () => {
    const o = ObjectListProc.gCurrentObject
    play_sound(o.rawData[oSoundEffectUnkF4], o.header.gfx.cameraToObject)
}
