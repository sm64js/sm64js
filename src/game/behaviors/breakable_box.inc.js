// breakable_box.c.inc
import * as _Linker from "../../game/Linker"
import { cur_obj_set_model, cur_obj_was_attacked_or_ground_pounded, obj_explode_and_spawn_coins, obj_set_hitbox } from "../ObjectHelpers"
import { sBreakableBoxHitbox, breakable_box_init } from "./switch_hidden_objects.inc"
import { create_sound_spawner } from "../SpawnSound"
import { oTimer } from "../../include/object_constants"
import { MODEL_BREAKABLE_BOX_SMALL } from "../../include/model_ids"
import { SOUND_GENERAL_BREAK_BOX } from "../../include/sounds"


export const bhv_breakable_box_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    obj_set_hitbox(o, sBreakableBoxHitbox)
    cur_obj_set_model(MODEL_BREAKABLE_BOX_SMALL)
    if (o.rawData[oTimer] == 0)
        breakable_box_init()
    if (cur_obj_was_attacked_or_ground_pounded() != 0) {
        obj_explode_and_spawn_coins(46.0, 1)
        create_sound_spawner(SOUND_GENERAL_BREAK_BOX)
    }
}


gLinker.bhv_breakable_box_loop = bhv_breakable_box_loop
