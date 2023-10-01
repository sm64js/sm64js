import { MODEL_WF_KICKABLE_BOARD_FELLED } from "../../include/model_ids";
import { oAction, oAngleVelPitch, oFaceAnglePitch, oKickableBoardF4, oKickableBoardF8, oMoveAngleYaw, oPosY, oTimer } from "../../include/object_constants";
import { SOUND_GENERAL_BUTTON_PRESS_2, SOUND_GENERAL_UNKNOWN4 } from "../../include/sounds";
import { sins } from "../../utils";
import { SHAKE_POS_SMALL } from "../Camera";
import { ACT_JUMP_KICK, ACT_MOVE_PUNCHING, ACT_PUNCHING, ACT_SLIDE_KICK, ACT_SLIDE_KICK_SLIDE, ACT_WALL_KICK_AIR } from "../Mario";
import { abs_angle_diff, cur_obj_become_intangible, cur_obj_set_model, cur_obj_shake_screen, obj_check_if_collided_with_object } from "../ObjectHelpers";
import { cur_obj_play_sound_2 } from "../SpawnSound";
import { SurfaceLoadInstance as SurfaceLoad } from "../SurfaceLoad";

export const check_mario_attacking = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ];

    if (obj_check_if_collided_with_object(o, gMarioObject) && abs_angle_diff(o.rawData[oMoveAngleYaw], gMarioObject.rawData[oMoveAngleYaw]) > 0x6000) {
        if (gMarioStates[0].action == ACT_SLIDE_KICK       ||
            gMarioStates[0].action == ACT_PUNCHING         ||
            gMarioStates[0].action == ACT_MOVE_PUNCHING    ||
            gMarioStates[0].action == ACT_SLIDE_KICK_SLIDE   ) {

            return 1;
        }
        if (gMarioStates[0].action == ACT_JUMP_KICK || gMarioStates[0].action == ACT_WALL_KICK_AIR) {
            return 2;
        }
    }

    return 0;
}

const init_kickable_board_rock = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    o.rawData[oKickableBoardF8] = 1600;
    o.rawData[oKickableBoardF4] = 0;
}

const bhv_kickable_board_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject;

    let marioAttack = check_mario_attacking();

    switch (o.rawData[oAction]) {
        case 0:
            o.rawData[oFaceAnglePitch] = 0;

            if (check_mario_attacking() != 0) {
                init_kickable_board_rock();
                o.rawData[oAction]++;
            }

            SurfaceLoad.load_object_collision_model();
            break;

        case 1:
            o.rawData[oFaceAnglePitch] = 0;
            SurfaceLoad.load_object_collision_model();
            o.rawData[oFaceAnglePitch] = -sins(o.rawData[oKickableBoardF4]) * o.rawData[oKickableBoardF8];

            if (o.rawData[oTimer] > 30 && marioAttack) {
                if (gMarioObject.rawData[oPosY] > o.rawData[oPosY] + 160.0 && marioAttack == 2) {
                    o.rawData[oAction]++;
                    cur_obj_play_sound_2(SOUND_GENERAL_BUTTON_PRESS_2);
                } else o.rawData[oTimer] = 0;
            }

            if (o.rawData[oTimer] != 0) {
                o.rawData[oKickableBoardF8] -= 8;
                if (o.rawData[oKickableBoardF8] < 0) o.rawData[oAction] = 0;
            } else init_kickable_board_rock();

            if (!(o.rawData[oKickableBoardF4] & 0x7FFF)) cur_obj_play_sound_2(SOUND_GENERAL_BUTTON_PRESS_2);

            o.rawData[oKickableBoardF4] += 0x400;
            break;

        case 2:
            cur_obj_become_intangible();
            cur_obj_set_model(MODEL_WF_KICKABLE_BOARD_FELLED);

            o.rawData[oAngleVelPitch] -= 0x80;
            o.rawData[oFaceAnglePitch] += o.rawData[oAngleVelPitch];

            if (o.rawData[oFaceAnglePitch] < -0x4000) {
                o.rawData[oFaceAnglePitch] = -0x4000;
                o.rawData[oAngleVelPitch] = 0;
                o.rawData[oAction]++;

                cur_obj_shake_screen(SHAKE_POS_SMALL);
                cur_obj_play_sound_2(SOUND_GENERAL_UNKNOWN4);
            }

            SurfaceLoad.load_object_collision_model();

        case 3:
            SurfaceLoad.load_object_collision_model();
            break;
    }

    o.gfx.throwMatrix = null;
}

gLinker.bhv_kickable_board_loop = bhv_kickable_board_loop;