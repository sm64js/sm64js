import * as _Linker from "../../game/Linker"
import { ACTIVE_FLAG_DEACTIVATED } from "../../include/object_constants"


export const bhv_castle_cannon_grate_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (true) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
    // if (save_file_get_total_star_count(gCurrSaveFileNum - 1, COURSE_MIN - 1, COURSE_MAX - 1) >= 120) {
    //     o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    // }
}


gLinker.bhv_castle_cannon_grate_init = bhv_castle_cannon_grate_init
