// intro_peach.inc.c

import { vec3f_get_dist_and_angle, vec3f_set_dist_and_angle } from "../../engine/math_util"
import { oAction, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oIntroPeachDistToCamera, oIntroPeachPitchFromFocus, oIntroPeachYawFromFocus, oOpacity, oTimer } from "../../include/object_constants"
import { DIALOG_NONE } from "../../text/us/dialogs"
import { obj_mark_for_deletion } from "../ObjectHelpers"
import { IngameMenuInstance as IngameMenu } from "../IngameMenu"
/**
 * Set peach's location relative to the camera focus.
 * If nonzero, make peach's opacity approach targetOpacity by increment
 */
export const intro_peach_set_pos_and_opacity = (obj, targetOpacity, increment) => {
    const Camera = gLinker.Camera
    let newPos = [0, 0, 0]

    const wrapper = {}
    vec3f_get_dist_and_angle(Camera.gLakituState.pos, Camera.gLakituState.focus, wrapper)
    let focusPitch = wrapper.pitch; let focusYaw = wrapper.yaw;
    vec3f_set_dist_and_angle(Camera.gLakituState.pos, newPos, obj.rawData[oIntroPeachDistToCamera], obj.rawData[oIntroPeachPitchFromFocus] + focusPitch, obj.rawData[oIntroPeachYawFromFocus] + focusYaw);
    Camera.vec3f_to_object_pos(obj, newPos)

    wrapper.current = obj.rawData[oOpacity]
    Camera.camera_approach_f32_symmetric_bool(wrapper, targetOpacity, increment)
    obj.rawData[oOpacity] = wrapper.current
}

export const bhv_intro_peach_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    switch (o.rawData[oAction]) {
        case 0:
            o.rawData[oAction]++;
            o.rawData[oFaceAnglePitch] = 0x400
            o.rawData[oFaceAngleYaw] = 0x7500
            o.rawData[oFaceAngleRoll] = -0x3700
            o.rawData[oIntroPeachDistToCamera] = 186.0
            o.rawData[oIntroPeachPitchFromFocus] = -9984.0
            o.rawData[oIntroPeachYawFromFocus] = -768.0
            o.rawData[oOpacity] = 255
            o.gfx.animInfo.animFrame = 100
            break
        case 1:
            intro_peach_set_pos_and_opacity(o, 0.0, 0.0)
            if (o.rawData[oTimer] > 20) o.rawData[oAction]++
            break
        case 2:
            intro_peach_set_pos_and_opacity(o, 255.0, 3.0)
            if (o.rawData[oTimer] > 100 && IngameMenu.get_dialog_id() == DIALOG_NONE) o.rawData[oAction]++
            break
        case 3:
            intro_peach_set_pos_and_opacity(o, 0.0, 8.0)
            if (o.rawData[oTimer] > 60) obj_mark_for_deletion(o)
            break
    }
}

gLinker.bhv_intro_peach_loop = bhv_intro_peach_loop