import { MODEL_STAR } from "../../include/model_ids"
import { ACTIVE_FLAG_DEACTIVATED, CELEB_STAR_ACT_FACE_CAMERA, CELEB_STAR_ACT_SPIN_AROUND_MARIO, oAction, oCelebStarDiameterOfRotation, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oHomeX, oHomeZ, oMoveAngleYaw, oPosX, oPosY, oPosZ, oTimer } from "../../include/object_constants"
import { coss, sins } from "../../utils"
import { cur_obj_scale } from "../ObjectHelpers"
import { spawn_mist_particles_variable } from "./white_puff.inc"

export const bhv_celebration_star_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    o.rawData[oHomeX] = gMarioObject.gfx.pos[0]
    o.rawData[oPosY] = gMarioObject.gfx.pos[1] + 30.0
    o.rawData[oHomeZ] = gMarioObject.gfx.pos[2]
    o.rawData[oMoveAngleYaw] = gMarioObject.gfx.angle[1] + 0x8000
    o.rawData[oCelebStarDiameterOfRotation] = 100

    // BUGFIX_STAR_BOWSER_KEY
    
    o.gfx.sharedChild = gLinker.Area.gLoadedGraphNodes[MODEL_STAR]
    cur_obj_scale(0.4)
    o.rawData[oFaceAnglePitch] = 0
    o.rawData[oFaceAngleRoll] = 0
}

const celeb_star_act_spin_around_mario = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oPosX] = o.rawData[oHomeX] + sins(o.rawData[oMoveAngleYaw]) * (o.rawData[oCelebStarDiameterOfRotation] / 2)
    o.rawData[oPosZ] = o.rawData[oHomeZ] + coss(o.rawData[oMoveAngleYaw]) * (o.rawData[oCelebStarDiameterOfRotation] / 2)
    o.rawData[oPosY] += 5.0
    o.rawData[oFaceAngleYaw] += 0x1000
    o.rawData[oMoveAngleYaw] += 0x2000

    if (o.rawData[oTimer] == 40) {
        o.rawData[oAction] = CELEB_STAR_ACT_FACE_CAMERA
    }

    if (o.rawData[oTimer] < 35) {
        // spawn_object(o, MODEL_SPARKLES, bhvCelebrationStarSparkle)
        o.rawData[oCelebStarDiameterOfRotation]++
    } else {
        o.rawData[oCelebStarDiameterOfRotation] -= 20
    }
}

const celeb_star_act_face_camera = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    if (o.rawData[oTimer] < 10) {
        cur_obj_scale(o.rawData[oTimer] / 10.0)
        o.rawData[oFaceAngleYaw] += 0x1000
    } else {
        o.rawData[oFaceAngleYaw] = gMarioObject.gfx.angle[1]
    }

    if (o.rawData[oTimer] == 59) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

export const bhv_celebration_star_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case CELEB_STAR_ACT_SPIN_AROUND_MARIO:
            celeb_star_act_spin_around_mario()
            break
        
        case CELEB_STAR_ACT_FACE_CAMERA:
            celeb_star_act_face_camera();
            break;
    }
}

export const bhv_celebration_star_sparkle_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.rawData[oPosY] -= 15.0

    if (o.rawData[oTimer] == 12) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
    }
}

export const bhv_star_key_collection_puff_spawner_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    spawn_mist_particles_variable(0, 10, 30.0)
    o.activeFlags = ACTIVE_FLAG_DEACTIVATED
}

gLinker.bhv_celebration_star_init = bhv_celebration_star_init
gLinker.bhv_celebration_star_loop = bhv_celebration_star_loop
gLinker.bhv_celebration_star_sparkle_loop = bhv_celebration_star_sparkle_loop
gLinker.bhv_star_key_collection_puff_spawner_loop = bhv_star_key_collection_puff_spawner_loop