// sound_spawner.c.inc
import * as _Linker from "../../game/Linker"
import { oSoundEffectUnkF4 } from "../../include/object_constants"
import { play_sound } from "../../audio/external"


export const bhv_sound_spawner_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    play_sound(o.rawData[oSoundEffectUnkF4], o.gfx.cameraToObject)
}


gLinker.bhv_sound_spawner_init = bhv_sound_spawner_init
