// moat_grill.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_set_model } from "../ObjectHelpers"
import { save_file_get_flags, SAVE_FLAG_MOAT_DRAINED } from "../SaveFile"


export const bhv_moat_grills_loop = () => {
    if (save_file_get_flags() & SAVE_FLAG_MOAT_DRAINED){
        cur_obj_set_model(MODEL_NONE)
    } else {
        gLinker.SurfaceLoad.load_object_collision_model()
    }
}


gLinker.bhv_moat_grills_loop = bhv_moat_grills_loop
