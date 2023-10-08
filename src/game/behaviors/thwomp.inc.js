import { GRINDEL_THWOMP_ACT_IDLE_AT_BOTTOM, GRINDEL_THWOMP_ACT_IDLE_AT_TOP, GRINDEL_THWOMP_ACT_LAND, GRINDEL_THWOMP_ACT_LOWER, GRINDEL_THWOMP_ACT_RAISE, oAction, oBehParams2ndByte, oDistanceToMario, oGrindelThwompRandomTimer, oHomeY, oPosY, oTimer, oVelY } from "../../include/object_constants";
import { SOUND_OBJ_THWOMP } from "../../include/sounds";
import { random_float } from "../../utils";
import { SHAKE_POS_SMALL } from "../Camera";
import { cur_obj_call_action_function, cur_obj_shake_screen } from "../ObjectHelpers";
import { cur_obj_play_sound_2 } from "../SpawnSound";

const grindel_thwomp_act_idle_at_bottom = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] == 0)
        o.rawData[oGrindelThwompRandomTimer] = random_float() * 10.0 + 20.0;

    if (o.rawData[oTimer] > o.rawData[oGrindelThwompRandomTimer])
        o.rawData[oAction] = GRINDEL_THWOMP_ACT_RAISE;
}

const grindel_thwomp_act_lower = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oVelY] += -4.0;
    o.rawData[oPosY] += o.rawData[oVelY];

    if (o.rawData[oPosY] < o.rawData[oHomeY]) {
        o.rawData[oPosY] = o.rawData[oHomeY];
        o.rawData[oVelY] = 0.0;
        o.rawData[oAction] = GRINDEL_THWOMP_ACT_LAND;
    }
}

const grindel_thwomp_act_land = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] == 0) {
        if (o.rawData[oDistanceToMario] < 1500.0) {
            cur_obj_shake_screen(SHAKE_POS_SMALL);
            cur_obj_play_sound_2(SOUND_OBJ_THWOMP);
        }
    }

    if (o.rawData[oTimer] >= 10) o.rawData[oAction] = GRINDEL_THWOMP_ACT_IDLE_AT_BOTTOM;
}

const grindel_thwomp_act_idle_at_top = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] == 0)
        o.rawData[oGrindelThwompRandomTimer] = random_float() * 30.0 + 10.0

    if (o.rawData[oTimer] > o.rawData[oGrindelThwompRandomTimer])
        o.rawData[oAction] = GRINDEL_THWOMP_ACT_LOWER;
}

const grindel_thwomp_act_raise = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oTimer] > o.rawData[oBehParams2ndByte] + 40) {
        o.rawData[oAction] = GRINDEL_THWOMP_ACT_IDLE_AT_TOP;
        o.rawData[oPosY] += 5.0;
    } else o.rawData[oPosY] += 10.0;
}

const sGrindelThwompActions = [
    grindel_thwomp_act_idle_at_bottom,
    grindel_thwomp_act_lower,
    grindel_thwomp_act_land,
    grindel_thwomp_act_idle_at_top,
    grindel_thwomp_act_raise,
];

const bhv_grindel_thwomp_loop = () => {
    cur_obj_call_action_function(sGrindelThwompActions);
}

gLinker.bhv_grindel_thwomp_loop = bhv_grindel_thwomp_loop;