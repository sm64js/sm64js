// intro_scene.inc.js

import { MODEL_BIRDS, MODEL_LAKITU, MODEL_PEACH } from "../../include/model_ids";
import { oEndBirdUnk104, oForwardVel, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oPosX, oPosY, oPosZ } from "../../include/object_constants";
import { random_float } from "../../utils";
import { spawn_object } from "../ObjectHelpers";

export const spawn_child_obj_relative = (parent, xOffset, yOffset,
                                        zOffset, pitchOffset, yawOffset,
                                        rollOffset, forwardVel, model, behavior) => {
    const Camera = gLinker.Camera
    const obj = spawn_object(parent, model, behavior);

    obj.gfx.animInfo.animFrame = random_float() * 6.0
    obj.rawData[oEndBirdUnk104] = Camera.sCutsceneVars[9].point[0]

    Camera.sCutsceneVars[9].point[0] += 1.0

    obj.rawData[oPosX] += xOffset
    obj.rawData[oPosY] += yOffset

    if (Camera.gCutsceneTimer > 700) obj.rawData[oPosY] += -150.0

    obj.rawData[oPosZ] += zOffset
    obj.rawData[oMoveAnglePitch] += pitchOffset
    obj.rawData[oMoveAngleYaw] += yawOffset
    obj.rawData[oMoveAngleRoll] += rollOffset
    obj.rawData[oForwardVel] = forwardVel
}

export const bhv_intro_scene_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const Camera = gLinker.Camera

    if (Camera.gCutsceneObjSpawn != 0) {
        o.rawData[oPosX] = Camera.gCamera.pos[0]
        o.rawData[oPosY] = Camera.gCamera.pos[1]
        o.rawData[oPosZ] = Camera.gCamera.pos[2]

        o.rawData[oMoveAnglePitch] = 0
        o.rawData[oMoveAngleYaw] = 0

        switch (Camera.gCutsceneObjSpawn) {
            case 5:
                spawn_object(o, MODEL_PEACH, gLinker.behaviors.bhvBeginningPeach)
                break;
            case 6:
                spawn_object(o, MODEL_LAKITU, gLinker.behaviors.bhvBeginningLakitu)
                break;
            case 7:
                spawn_child_obj_relative(o, 0,    205,  500, 0x1000, 0x6000, -0x1E00, 25, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, 0,    205,  800, 0x1800, 0x6000, -0x1400, 35, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, -100, 300,  500, 0x800,  0x6000, 0      , 25, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, 100,  -200, 800, 0,      0x4000, 0x1400,  45, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, -80,  300,  350, 0x1800, 0x5000, 0xA00,   35, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, -300, 300,  500, 0x800,  0x6000, 0x2800,  25, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, -400, -200, 800, 0,      0x4000, -0x1400, 45, MODEL_BIRDS, bhvEndBirds1);
                break;
            case 8:
                spawn_child_obj_relative(o, -100, -100, -700,  0, 0, -0xF00,  25, MODEL_BIRDS, bhvEndBirds2);
                spawn_child_obj_relative(o, -250, 255,  -200,  0, 0, -0x1400, 25, MODEL_BIRDS, bhvEndBirds2);
                spawn_child_obj_relative(o, -100, 155,  -600,  0, 0, -0x500,  35, MODEL_BIRDS, bhvEndBirds2);
                spawn_child_obj_relative(o, 250,  200,  -1200, 0, 0, -0x700,  25, MODEL_BIRDS, bhvEndBirds2);
                spawn_child_obj_relative(o, -250, 255,  -700,  0, 0, 0,       25, MODEL_BIRDS, bhvEndBirds2);
                break;
            case 9:
                spawn_child_obj_relative(o, 50, 205,  500, 0x1000, 0x6000, 0, 35, MODEL_BIRDS, bhvEndBirds1);
                spawn_child_obj_relative(o, 0,  285,  800, 0x1800, 0x6000, 0, 35, MODEL_BIRDS, bhvEndBirds1);
                break;
        }

        Camera.gCutsceneObjSpawn = 0;
    }
}

gLinker.bhv_intro_scene_loop = bhv_intro_scene_loop