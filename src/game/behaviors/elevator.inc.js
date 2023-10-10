import { oAction, oBehParams2ndByte, oElevatorUnk100, oElevatorUnkF4, oElevatorUnkF8, oElevatorUnkFC, oHomeY, oPosY, oTimer, oVelY } from "../../include/object_constants";
import { SOUND_ENV_ELEVATOR1, SOUND_GENERAL_METAL_POUND, SOUND_GENERAL_QUIET_POUND1 } from "../../include/sounds";
import { SHAKE_POS_SMALL } from "../Camera";
import { approach_f32_signed, cur_obj_call_action_function, cur_obj_has_behavior, cur_obj_is_mario_on_platform, cur_obj_shake_screen, mario_is_in_air_action } from "../ObjectHelpers";
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound";

const sElevatorHeights = [
     -51,    0, 0,
    -461,    0, 0,
    -512,    0, 0,
   -2611,    0, 0,
   -2360,    0, 0,
     214,    0, 0,
     -50, 1945, 1,
];

const elevator_starting_shake = () => {
    cur_obj_play_sound_2(SOUND_GENERAL_QUIET_POUND1);
    cur_obj_shake_screen(SHAKE_POS_SMALL);
}

const elevator_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    o.rawData[oVelY] = 0;

    if (o.rawData[oElevatorUnk100] == 2) {
        if (gMarioObject.platform == o) {
            if (o.rawData[oPosY] > o.rawData[oElevatorUnkFC]) o.rawData[oAction] = 2;
            else o.rawData[oAction] = 1;
        }
    } else if (gMarioObject.rawData[oPosY] > o.rawData[oElevatorUnkFC] || o.rawData[oElevatorUnk100] == 1) {
        o.rawData[oPosY] = o.rawData[oElevatorUnkF8];

        if (gMarioObject.platform == o) o.rawData[oAction] = 2;
    } else {
        o.rawData[oPosY] = o.rawData[oElevatorUnkF4];
        
        if (gMarioObject.platform == o) o.rawData[oAction] = 1;
    }
}

const elevator_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    cur_obj_play_sound_1(SOUND_ENV_ELEVATOR1);

    if (o.rawData[oTimer] == 0 && cur_obj_is_mario_on_platform()) elevator_starting_shake();

    const wrapper = { value: o.rawData[oVelY] };
    approach_f32_signed(wrapper, -10.0, -2.0);
    o.rawData[oVelY] = wrapper.value;

    if (o.rawData[oPosY] > o.rawData[oElevatorUnkF8]) {
        o.rawData[oPosY] = o.rawData[oElevatorUnkF8];
        
        if (o.rawData[oElevatorUnk100] == 2 || o.rawData[oElevatorUnk100] == 1) o.rawData[oAction] = 3;
        else if (gMarioObject.rawData[oPosY] < o.rawData[oElevatorUnkFC]) o.rawData[oAction] = 2;
        else o.rawData[oAction] = 3;
    }
}

const elevator_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;
    
    cur_obj_play_sound_1(SOUND_ENV_ELEVATOR1);
    
    if (o.rawData[oTimer] == 0 && cur_obj_is_mario_on_platform()) elevator_starting_shake();

    const wrapper = { value: o.rawData[oVelY] };
    approach_f32_signed(wrapper, -10.0, -2.0);
    o.rawData[oVelY] = wrapper.value;
    o.rawData[oPosY] += o.rawData[oVelY];

    if (o.rawData[oPosY] < o.rawData[oElevatorUnkF4]) {
        o.rawData[oPosY] = o.rawData[oElevatorUnkF4];
        
        if (o.rawData[oElevatorUnk100] == 1) o.rawData[oAction] = 4;
        else if (o.rawData[oElevatorUnk100] == 2) o.rawData[oAction] = 3;
        else if (gMarioObject.rawData[oPosY] > o.rawData[oElevatorUnkFC]) o.rawData[oAction] = 1;
        else o.rawData[oAction] = 3;
    }
}

const elevator_act_3 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oVelY] = 0;

    if (o.rawData[oTimer] == 0) {
        cur_obj_shake_screen(SHAKE_POS_SMALL);
        cur_obj_play_sound_2(SOUND_GENERAL_METAL_POUND);
    }

    console.log(mario_is_in_air_action(), cur_obj_is_mario_on_platform())
    if (!mario_is_in_air_action() && !cur_obj_is_mario_on_platform()) o.rawData[oAction] = 0;
}

const elevator_act_4 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oVelY] = 0;

    if (o.rawData[oTimer] == 0) {
        cur_obj_shake_screen(SHAKE_POS_SMALL);
        cur_obj_play_sound_2(SOUND_GENERAL_METAL_POUND);
    }

    if (!mario_is_in_air_action() && !cur_obj_is_mario_on_platform()) o.rawData[oAction] = 1;
}

const bhv_elevator_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (sElevatorHeights[o.rawData[oBehParams2ndByte] * 3 + 2] == 0) {
        o.rawData[oElevatorUnkF4] = sElevatorHeights[o.rawData[oBehParams2ndByte] * 3];
        o.rawData[oElevatorUnkF8] = o.rawData[oHomeY];
        o.rawData[oElevatorUnkFC] = (o.rawData[oElevatorUnkF4] + o.rawData[oElevatorUnkF8]) / 2;
        o.rawData[oElevatorUnk100] = cur_obj_has_behavior(gLinker.behaviors.bhvRRElevatorPlatform);
    } else {
        o.rawData[oElevatorUnkF4] = sElevatorHeights[o.rawData[oBehParams2ndByte] * 3];
        o.rawData[oElevatorUnkF8] = sElevatorHeights[o.rawData[oBehParams2ndByte] * 3 + 1];
        o.rawData[oElevatorUnkFC] = (o.rawData[oElevatorUnkF4] + o.rawData[oElevatorUnkF8]) / 2;
        o.rawData[oElevatorUnk100] = 2;
    }
}

const sElevatorActions = [
    elevator_act_0, elevator_act_1, elevator_act_2, elevator_act_3, elevator_act_4,
];

const bhv_elevator_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    console.log(o.rawData[oAction])
    cur_obj_call_action_function(sElevatorActions);
}

gLinker.bhv_elevator_init = bhv_elevator_init;
gLinker.bhv_elevator_loop = bhv_elevator_loop;