// moat_grill.c.inc
import { ObjectListProcessorInstance as ObjectListProc      } from "../ObjectListProcessor"

import { save_file_get_flags,
         SAVE_FLAG_MOAT_DRAINED             } from "../SaveFile"
import { cur_obj_set_model                  } from "../ObjectHelpers"
import { SurfaceLoadInstance as SurfaceLoad } from "../../game/SurfaceLoad"

export const bhv_moat_grills_loop = () => {
    if (save_file_get_flags() & SAVE_FLAG_MOAT_DRAINED){
        cur_obj_set_model(MODEL_NONE)
    } else {
        SurfaceLoad.load_object_collision_model()
    }
}
