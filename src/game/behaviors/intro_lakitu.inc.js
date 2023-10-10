
/**
 * @file intro_lakitu.inc.c
 * This file implements lakitu's behvaior during the intro cutscene.
 * It's also used during the ending cutscene.
 */

import { atan2s, vec3f_add, vec3f_get_dist_and_angle, vec3f_set, vec3f_set_dist_and_angle } from "../../engine/math_util";
import { MODEL_MIST } from "../../include/model_ids";
import { CLOUD_BP_LAKITU_CLOUD, oAction, oAnimState, oFaceAnglePitch, oFaceAngleYaw, oIntroLakituCloud, oIntroLakituSplineSegment, oIntroLakituSplineSegmentProgress, oIntroLakituUnk100, oIntroLakituUnk104, oIntroLakituUnk108, oIntroLakituUnk10C, oMoveAnglePitch, oMoveAngleYaw, oPosX, oPosY, oPosZ, oTimer } from "../../include/object_constants";
import { SOUND_ACTION_FLYING_FAST, SOUND_ACTION_INTRO_UNK45E, SOUND_AIR_LAKITU_FLY_HIGHPRIO } from "../../include/sounds";
import { coss } from "../../utils";
import { CUTSCENE_END_WAVING, gIntroLakituStartToPipeFocus, gIntroLakituStartToPipeOffsetFromCamera } from "../Camera";
import { cur_obj_disable_rendering, spawn_object_relative_with_scale } from "../ObjectHelpers";
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound";

/**
 * Add the camera's position to `offset`, rotate the point to be relative to the camera's focus, then
 * set lakitu's location.
 */
const intro_lakitu_set_offset_from_camera = (obj, offset) => {
    const Camera = gLinker.Camera
    const gCamera = Camera.gCamera
    let focusPitch, focusYaw;
    let offsetPitch, offsetYaw;
    const wrapper = {};

    vec3f_add(offset, gCamera.pos);
    vec3f_get_dist_and_angle(gCamera.pos, gCamera.focus, wrapper)
    focusPitch = wrapper.pitch; focusYaw = wrapper.yaw;
    vec3f_get_dist_and_angle(gCamera.pos, offset, wrapper)
    offsetPitch = wrapper.pitch; offsetYaw = wrapper.yaw;
    vec3f_set_dist_and_angle(gCamera.pos, offset, wrapper.dist, focusPitch + offsetPitch, focusYaw + offsetYaw)
    Camera.vec3f_to_object_pos(obj, offset)
}

const intro_lakitu_set_focus = (obj, newFocus) => {
    let origin = [0, 0, 0];
    const wrapper = {};

    vec3f_set(origin, 0.0, 0.0, 0.0);
    vec3f_get_dist_and_angle(origin, newFocus, wrapper)

    obj.rawData[oFaceAnglePitch] = wrapper.pitch;
    obj.rawData[oFaceAngleYaw] = wrapper.yaw;
}

const intro_lakitu_set_pos_and_focus = (obj, offset, cfocus) => {
    const Camera = gLinker.Camera

    let newOffset = [0, 0, 0];
    let newFocus = [0, 0, 0];
    let splineFinished = 0;
    let splineSegment = obj.rawData[oIntroLakituSplineSegment];
    const wrapper = {splineSegment: splineSegment, progress: obj.rawData[oIntroLakituSplineSegmentProgress]};
    
    if (Camera.move_point_along_spline(newFocus, offset, wrapper) == 1
     || (Camera.move_point_along_spline(newOffset, cfocus, wrapper) == 1)) {
        splineFinished++;
    }
    splineSegment = wrapper.splineSegment; obj.rawData[oIntroLakituSplineSegmentProgress] = wrapper.progress;

    obj.rawData[oIntroLakituSplineSegment] = splineSegment;

    intro_lakitu_set_offset_from_camera(obj, newOffset);
    intro_lakitu_set_focus(obj, newFocus);
}

export const bhv_intro_lakitu_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const Camera = gLinker.Camera
    const gCamera = Camera.gCamera

    switch (o.rawData[oAction]) {
        case 0:
            cur_obj_disable_rendering();

            o.rawData[oIntroLakituSplineSegment] = 0.0;
            o.rawData[oIntroLakituSplineSegmentProgress] = 0.0;
            o.rawData[oIntroLakituCloud] = spawn_object_relative_with_scale(CLOUD_BP_LAKITU_CLOUD, 0, 0, 0, 2.0, o, MODEL_MIST, gLinker.behaviors.bhvCloud);

            if (gCamera.cutscene == CUTSCENE_END_WAVING) {
                o.rawData[oAction] = 100;
            } else {
                o.rawData[oAction]++;
            }
            break;
            
        case 1:
            cur_obj_disable_rendering();
            if (Camera.gCutsceneTimer > 350 && Camera.gCutsceneTimer < 458) {
                o.rawData[oPosX] = gCamera.pos[0];
                o.rawData[oPosY] = gCamera.pos[1] + 500.0;
                o.rawData[oPosZ] = gCamera.pos[2];
            }
            
            if (Camera.gCutsceneTimer > 52) {
                cur_obj_play_sound_1(SOUND_AIR_LAKITU_FLY_HIGHPRIO);
            }

            if (intro_lakitu_set_pos_and_focus(o, gIntroLakituStartToPipeOffsetFromCamera, gIntroLakituStartToPipeFocus) == 1) {
                o.rawData[oAction]++;
            }

            switch (o.rawData[oTimer]) {
                case 534:
                    cur_obj_play_sound_2(SOUND_ACTION_FLYING_FAST);
                    break;
                case 581:
                    cur_obj_play_sound_2(SOUND_ACTION_INTRO_UNK45E);
                    break;
                
                case 73:
                    o.rawData[oAnimState]++;
                    break;
                case 74:
                    o.rawData[oAnimState]--;
                    break;
                case 82:
                    o.rawData[oAnimState]++;
                    break;
                case 84:
                    o.rawData[oAnimState]--;
                    break;
            }
        
        case 2:
            if (Camera.gCutsceneTimer > 720) {
                o.rawData[oAction]++;
                o.rawData[oIntroLakituUnk100] = 1400.0;
                o.rawData[oIntroLakituUnk104] = -4096.0;
                o.rawData[oIntroLakituUnk108] = 2048.0;
                o.rawData[oIntroLakituUnk10C] = -200.0;

                o.rawData[oMoveAngleYaw] = 0x8000;
                o.rawData[oFaceAngleYaw] = o.rawData[oMoveAngleYaw] + 0x4000;
                o.rawData[oMoveAnglePitch] = 0x800;
            }
            
            cur_obj_play_sound_1(SOUND_AIR_LAKITU_FLY_HIGHPRIO);
            break;
        
        case 3:
            cur_obj_play_sound_1(SOUND_AIR_LAKITU_FLY_HIGHPRIO);

            let sp58 = [-1128.0, 560.0, 4664.0];
            let sp4C = [0, 0, 0];
            o.rawData[oMoveAngleYaw] += 0x200;
            o.rawData[oIntroLakituUnk100] = Camera.approach_f32_asymptotic(o.rawData[oIntroLakituUnk100], 100.0, 0.03);
            o.rawData[oFaceAnglePitch] = atan2s(200.0, o.rawData[oPosY] - 400.0);
            o.rawData[oFaceAngleYaw] = Camera.approach_s16_asymptotic(o.rawData[oFaceAngleYaw], o.rawData[oMoveAngleYaw] + 0x8000, 4);
            vec3f_set_dist_and_angle(sp58, sp4C, o.rawData[oIntroLakituUnk100], 0, o.rawData[oFaceAngleYaw]);
            sp4C[1] += 150.0 * coss(o.rawData[oIntroLakituUnk104]);
            o.rawData[oIntroLakituUnk104] += o.rawData[oIntroLakituUnk108];
            o.rawData[oIntroLakituUnk108] += Camera.approach_f32_asymptotic(o.rawData[oIntroLakituUnk108], 512.0, 0.05);
            sp4C[0] += o.rawData[oIntroLakituUnk10C];
            o.rawData[oIntroLakituUnk10C] += Camera.approach_f32_asymptotic(o.rawData[oIntroLakituUnk10C], 0.0, 0.05);
            Camera.vec3f_to_object_pos(o, sp4C);

            if (o.rawData[oTimer] > 31) {
                o.rawData[oPosY] -= 158.0
            }
    }
}

gLinker.bhv_intro_lakitu_loop = bhv_intro_lakitu_loop