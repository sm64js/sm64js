import { play_puzzle_jingle } from "../../audio/external";
import { MODEL_DIRT_ANIMATION, MODEL_WHITE_PARTICLE_SMALL } from "../../include/model_ids";
import { oAction, oDistanceToMario, oTimer } from "../../include/object_constants";
import { SOUND_ENV_WATER_DRAIN, SOUND_GENERAL_ACTIVATE_CAP_SWITCH } from "../../include/sounds";
import { ACT_GROUND_POUND_LAND } from "../Mario";
import { cur_obj_hide, cur_obj_spawn_particles } from "../ObjectHelpers";
import { cur_obj_play_sound_1, cur_obj_play_sound_2 } from "../SpawnSound";
import { spawn_triangle_break_particles } from "./break_particles.inc";

const sTHITopPuffs = {
    bhvParam: 0,
    count: 30,
    model: MODEL_WHITE_PARTICLE_SMALL,
    offsetY: 0,
    forwardVelBase: 40,
    forwardVelRange: 0,
    velYBase: 20,
    velYRange: 40,
    gravity: 252,
    dragStrength: 30,
    sizeBase: 20.0,
    sizeRange: 0.0,
}

export const bhv_thi_huge_island_top_loop = () => {
    const OLP = gLinker.ObjectListProcessor;
    const SurfaceLoad = gLinker.SurfaceLoad;
    const o = gLinker.ObjectListProcessor.gCurrentObject;

    if (OLP.gTHIWaterDrained & 1) {
        if (o.rawData[oTimer] == 0)  OLP.gEnvironmentLevels[18] = 3000;
        cur_obj_hide();
    } else SurfaceLoad.load_object_collision_model();
}

export const bhv_thi_tiny_island_top_loop = () => {
    const OLP = gLinker.ObjectListProcessor;
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ];

    if (!(OLP.gTHIWaterDrained & 1)) {
        if (o.rawData[oAction] == 0) {
            if (o.rawData[oDistanceToMario] < 500.0) {
                if (gMarioStates[0].action == ACT_GROUND_POUND_LAND) {
                    o.rawData[oAction]++;
                    cur_obj_spawn_particles(sTHITopPuffs);
                    spawn_triangle_break_particles(20, MODEL_DIRT_ANIMATION, 0.3, 3);
                    cur_obj_play_sound_2(SOUND_GENERAL_ACTIVATE_CAP_SWITCH);
                    cur_obj_hide();
                }
            }
        } else if (o.rawData[oTimer] < 50) {
            OLP.gEnvironmentLevels[18]--;
            cur_obj_play_sound_1(SOUND_ENV_WATER_DRAIN);
        } else {
            OLP.gTHIWaterDrained |= 1;
            play_puzzle_jingle();
            o.rawData[oAction]++;
        }
    } else {
        if (o.rawData[oTimer] == 0) OLP.gEnvironmentLevels[18] = 700;

        cur_obj_hide();
    }
}

gLinker.bhv_thi_huge_island_top_loop = bhv_thi_huge_island_top_loop;
gLinker.bhv_thi_tiny_island_top_loop = bhv_thi_tiny_island_top_loop;