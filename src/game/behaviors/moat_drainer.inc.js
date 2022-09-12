import * as _Linker from "../../game/Linker"
import { save_file_get_flags, SAVE_FLAG_MOAT_DRAINED } from "../SaveFile"
import { ObjectListProcessorInstance as ObjectListProcessor } from "../ObjectListProcessor"

const bhv_invisible_objects_under_bridge_init = () => {
    if (save_file_get_flags() & SAVE_FLAG_MOAT_DRAINED) {
        ObjectListProcessor.gEnvironmentRegions[6] = -800
        ObjectListProcessor.gEnvironmentRegions[12] = -800
    }
}

gLinker.bhv_invisible_objects_under_bridge_init = bhv_invisible_objects_under_bridge_init