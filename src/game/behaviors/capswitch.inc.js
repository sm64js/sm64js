import { MODEL_CAP_SWITCH_BASE, MODEL_CARTOON_STAR } from "../../include/model_ids";
import { DIALOG_FLAG_TEXT_RESPONSE, DIALOG_FLAG_UNK_CAPSWITCH, oAction, oAnimState, oBehParams2ndByte, oPosY, oTimer } from "../../include/object_constants";
import { LEVEL_UNKNOWN_32 } from "../../levels/level_defines_constants";
import { AreaInstance as Area } from "../Area";
import { CUTSCENE_CAP_SWITCH_PRESS } from "../Camera";
import { MARIO_DIALOG_LOOK_FRONT } from "../MarioActionsCutscene";
import { cur_obj_call_action_function, cur_obj_is_mario_on_platform, cur_obj_scale, cur_obj_scale_over_time, cur_obj_shake_screen, cur_obj_update_dialog_with_cutscene, spawn_mist_particles, spawn_object_relative_with_scale } from "../ObjectHelpers";
import { SAVE_FLAG_HAVE_METAL_CAP, SAVE_FLAG_HAVE_VANISH_CAP, SAVE_FLAG_HAVE_WING_CAP, save_file_clear_flags, save_file_set_flags } from "../SaveFile";
import { cur_obj_play_sound_2 } from "../SpawnSound";
import { spawn_triangle_break_particles } from "./break_particles.inc";

const sCapSaveFlags = [
    SAVE_FLAG_HAVE_WING_CAP,
    SAVE_FLAG_HAVE_METAL_CAP,
    SAVE_FLAG_HAVE_VANISH_CAP,
]

const cap_switch_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oAnimState] = o.rawData[oBehParams2ndByte];
    cur_obj_scale(0.5);
    o.rawData[oPosY] += 71.0

    spawn_object_relative_with_scale(0, 0, -71, 0, 0.5, o, MODEL_CAP_SWITCH_BASE, gLinker.behaviors.bhvCapSwitchBase);
    
    if (Area.gCurrLevelNum != LEVEL_UNKNOWN_32) {
        if (save_file_clear_flags() & sCapSaveFlags[o.rawData[oBehParams2ndByte]]) {
            o.rawData[oAction] = 3;
            o.gfx.scale[1] = 0.1;
        } else o.rawData[oAction] = 1;
    } else o.rawData[oAction] = 1;
}

const cap_switch_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    if (cur_obj_is_mario_on_platform()) {
        save_file_set_flags(sCapSaveFlags[o.rawData[oBehParams2ndByte]]);
        o.rawData[oAction] = 2;
        cur_obj_play_sound_2(SOUND_GENERAL_ACTIVATE_CAP_SWITCH);
    }
}

const cap_switch_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    if (o.rawData[oTimer] < 5) {
        cur_obj_scale_over_time(2, 4, 0.5, 0.1);
        if (o.rawData[oTimer] == 4) {
            cur_obj_shake_screen(SHAKE_POS_SMALL);
            spawn_mist_particles();
            spawn_triangle_break_particles(60, MODEL_CARTOON_STAR, 0.3, o.rawData[oBehParams2ndByte]);
        }
    } else {
        let dialogResponse = cur_obj_update_dialog_with_cutscene(MARIO_DIALOG_LOOK_FRONT, DIALOG_FLAG_TEXT_RESPONSE | DIALOG_FLAG_UNK_CAPSWITCH, CUTSCENE_CAP_SWITCH_PRESS, 0);
        if (dialogResponse) o.rawData[oAction] = 3;
    }
}

const cap_switch_act_3 = () => {}

const sCapSwitchActions = [
    cap_switch_act_0,
    cap_switch_act_1,
    cap_switch_act_2,
    cap_switch_act_3,
];

export const bhv_cap_switch_loop = () => {
    cur_obj_call_action_function(sCapSwitchActions);
}