import { play_sound } from "../../audio/external";
import { MODEL_STAR } from "../../include/model_ids";
import { ACTIVE_FLAG_DEACTIVATED, oAction, oBehParams, oHiddenStarTriggerCounter, oPosX, oPosY, oPosZ, oTimer } from "../../include/object_constants";
import { SOUND_MENU_COLLECT_SECRET } from "../../include/sounds";
import { IngameMenuInstance as IngameMenu } from "../IngameMenu";
import { spawn_orange_number } from "../ObjBehaviors";
import { count_objects_with_behavior, cur_obj_nearest_object_with_behavior, obj_check_if_collided_with_object, spawn_mist_particles, spawn_object_abs_with_rot } from "../ObjectHelpers"
import { spawn_no_exit_star, spawn_red_coin_cutscene_star } from "./spawn_star.inc";

const bhv_hidden_star_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    let count = count_objects_with_behavior(gLinker.behaviors.bhvHiddenStarTrigger)

    if (count == 0) {
        let star = spawn_object_abs_with_rot(o, 0, MODEL_STAR, gLinker.behaviors.bhvStar, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], 0, 0, 0);

        star.rawData[oBehParams] = o.rawData[oBehParams];
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
    }

    o.rawData[oHiddenStarTriggerCounter] = 5 - count;
}

const bhv_hidden_star_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    switch (o.rawData[oAction]) {
        case 0:
            if (o.rawData[oHiddenStarTriggerCounter] == 5) {
                o.rawData[oAction] = 1;
            }

        case 1:
            if (o.rawData[oTimer] > 2) {
                spawn_red_coin_cutscene_star(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
                spawn_mist_particles();
                o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
            }
            break;
    }
}

const bhv_hidden_star_trigger_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    if (obj_check_if_collided_with_object(o, gMarioObject) == true) {
        let hiddenStar = cur_obj_nearest_object_with_behavior(gLinker.behaviors.bhvHiddenStar);

        if (hiddenStar != null) {
            hiddenStar.rawData[oHiddenStarTriggerCounter]++;

            if (hiddenStar.rawData[oHiddenStarTriggerCounter] != 5) {
                spawn_orange_number(hiddenStar.rawData[oHiddenStarTriggerCounter], 0, 0, 0)
            }

            play_sound(SOUND_MENU_COLLECT_SECRET, (hiddenStar.rawData[oHiddenStarTriggerCounter] - 1) << 16, Game.gGlobalSoundSource);
        }

        o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
    }
}

const bhv_bowser_course_red_coin_star_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    IngameMenu.gRedCoinsCollected = o.rawData[oHiddenStarTriggerCounter];

    switch (o.rawData[oAction]) {
        case 0:
            if (o.rawData[oHiddenStarTriggerCounter] == 8) {
                o.rawData[oAction] = 1;
            }
            break;

        case 1:
            if (o.rawData[oTimer] > 2) {
                spawn_no_exit_star(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ]);
                spawn_mist_particles();
                o.activeFlags = ACTIVE_FLAG_DEACTIVATED;
            }
            break;
    }
}

gLinker.bhv_hidden_star_init = bhv_hidden_star_init;
gLinker.bhv_hidden_star_loop = bhv_hidden_star_loop;
gLinker.bhv_hidden_star_trigger_loop = bhv_hidden_star_trigger_loop;
gLinker.bhv_bowser_course_red_coin_star_loop = bhv_bowser_course_red_coin_star_loop;