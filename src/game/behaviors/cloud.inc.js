import * as _Linker from "../../game/Linker"
import { oAction } from "../../include/object_constants"

/**
 * Update function for bhvCloud.
 */
const bhv_cloud_update = () => {
    /*const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case CLOUD_ACT_SPAWN_PARTS:
            cloud_act_spawn_parts();
            break;
        case CLOUD_ACT_MAIN:
            cloud_act_main();
            break;
        case CLOUD_ACT_UNLOAD:
            cloud_act_unload();
            break;
        case CLOUD_ACT_FWOOSH_HIDDEN:
            cloud_act_fwoosh_hidden();
            break;
    }*/
}

gLinker.bhv_cloud_update = bhv_cloud_update