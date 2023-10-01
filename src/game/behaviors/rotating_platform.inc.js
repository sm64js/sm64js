import { WF_ROTATING_WOODEN_PLATFORM_ACT_IDLE, oAction, oAngleVelYaw, oBehParams, oBehParams2ndByte, oCollisionDistance, oFaceAngleYaw, oTimer } from "../../include/object_constants";
import { SOUND_ENV_ELEVATOR2 } from "../../include/sounds";
import { wdw_seg7_collision_070186B4 } from "../../levels/wdw/rotating_platform/collision.inc";
import { wf_seg7_collision_rotating_platform } from "../../levels/wf/rotating_platform/collision.inc";
import { cur_obj_rotate_face_angle_using_vel, cur_obj_scale, obj_set_collision_data } from "../ObjectHelpers";
import { cur_obj_play_sound_1 } from "../SpawnSound";

const sRotatingPlatformData = [
    { scale: 100, collisionData: wf_seg7_collision_rotating_platform, collisionDistance: 2000 },
    { scale: 150, collisionData: wdw_seg7_collision_070186B4,         collisionDistance: 1000 },
];

const bhv_wf_rotating_wooden_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (o.rawData[oAction] == WF_ROTATING_WOODEN_PLATFORM_ACT_IDLE) {
        o.rawData[oAngleVelYaw] = 0;
        if (o.rawData[oTimer] > 60) o.rawData[oAction]++;
    } else { // WF_ROTATING_WOODEN_PLATFORM_ACT_ROTATING
        o.rawData[oAngleVelYaw] = 0x100;
        if (o.rawData[oTimer] > 126) o.rawData[oAction] = WF_ROTATING_WOODEN_PLATFORM_ACT_IDLE;
        cur_obj_play_sound_1(SOUND_ENV_ELEVATOR2);
    }
    
    cur_obj_rotate_face_angle_using_vel();
}

const bhv_rotating_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    let bhvParams1stByte = o.rawData[oBehParams] >> 24;

    if (o.rawData[oTimer] == 0) {
        obj_set_collision_data(o, sRotatingPlatformData[o.rawData[oBehParams2ndByte]].collisionData);
        o.rawData[oCollisionDistance] = sRotatingPlatformData[o.rawData[oBehParams2ndByte]].collisionDistance;
        cur_obj_scale(sRotatingPlatformData[o.rawData[oBehParams2ndByte]].scale * 0.01);
    }

    o.rawData[oAngleVelYaw] = bhvParams1stByte << 4;
    o.rawData[oFaceAngleYaw] += o.rawData[oAngleVelYaw];
}

gLinker.bhv_wf_rotating_wooden_platform_loop = bhv_wf_rotating_wooden_platform_loop;
gLinker.bhv_rotating_platform_loop = bhv_rotating_platform_loop;