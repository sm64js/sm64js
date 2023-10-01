import { play_puzzle_jingle } from "../../audio/external";
import { oDamageOrCoinValue, oInteractType } from "../../include/object_constants";
import { SOUND_GENERAL_WALL_EXPLOSION } from "../../include/sounds";
import { INTERACT_DAMAGE } from "../Interaction";
import { ACT_SHOT_FROM_CANNON } from "../Mario";
import { cur_obj_become_tangible, cur_obj_has_behavior, obj_check_if_collided_with_object, obj_explode_and_spawn_coins } from "../ObjectHelpers";
import { create_sound_spawner } from "../SpawnSound";

const bhv_wf_breakable_wall_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ];

    if (gMarioStates[0].action == ACT_SHOT_FROM_CANNON) {
        cur_obj_become_tangible();

        if (obj_check_if_collided_with_object(o, gMarioObject)) {
            if (cur_obj_has_behavior(gLinker.behaviors.bhvWFBreakableWallRight)) play_puzzle_jingle();

            create_sound_spawner(SOUND_GENERAL_WALL_EXPLOSION);

            o.rawData[oInteractType] = INTERACT_DAMAGE;
            o.rawData[oDamageOrCoinValue] = 1;

            obj_explode_and_spawn_coins(80.0, 0);
        }
    } else cur_obj_become_tangible();
}

gLinker.bhv_wf_breakable_wall_loop = bhv_wf_breakable_wall_loop;