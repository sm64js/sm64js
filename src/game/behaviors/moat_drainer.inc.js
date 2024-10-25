import * as _Linker from "../../game/Linker"
import { save_file_get_flags, SAVE_FLAG_MOAT_DRAINED } from "../SaveFile"

const bhv_invisible_objects_under_bridge_init = () => {
    if (save_file_get_flags() & SAVE_FLAG_MOAT_DRAINED) {
        gLinker.ObjectListProcessor.gEnvironmentRegions[6] = -800
        gLinker.ObjectListProcessor.gEnvironmentRegions[12] = -800
    }
}

gLinker.bhv_invisible_objects_under_bridge_init = bhv_invisible_objects_under_bridge_init