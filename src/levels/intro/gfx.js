import * as MathUtil from "../../engine/math_util"
import * as Gbi from "../../include/gbi"
import * as LevelData from "./leveldata"
import * as cGFX from "../../common_gfx/segment2"

let gTitleZoomCounter = 0
let gTitleFadeCounter = 0

const INTRO_STEPS_ZOOM_IN = 20
const INTRO_STEPS_HOLD_1 = 75
const INTRO_STEPS_ZOOM_OUT = 91

const intro_seg7_table_0700C790 = [
    0.016000, 0.052000, 0.002500, 0.148300,
    0.189200, 0.035200, 0.471600, 0.525300,
    0.116600, 0.875800, 0.947000, 0.222100,
    1.250500, 1.341300, 0.327000, 1.485400,
    1.594900, 0.406500, 1.230500, 1.563700,
    0.464300, 0.913900, 1.351300, 0.520200,
    1.022900, 1.216100, 0.574400, 1.122300,
    1.097200, 0.627000, 1.028300, 0.955600,
    0.678100, 0.934800, 1.049400, 0.727700,
    0.994200, 1.005200, 0.775900, 1.070200,
    0.961500, 0.822900, 0.995600, 0.995000,
    0.868700, 0.991600, 1.005700, 0.913500,
    1.016500, 0.985200, 0.957200, 0.985200,
    1.007100, 1.000000, 0.999900, 0.999800,
    1.010600, 1.000000, 1.000000, 1.000000,
]

const intro_seg7_table_0700C880 = [
    1.000000, 1.000000, 1.000000, 0.987300,
    0.987300, 0.987300, 0.951400, 0.951400,
    0.951400, 0.896000, 0.896000, 0.896000,
    0.824600, 0.824600, 0.824600, 0.740700,
    0.740700, 0.740700, 0.648000, 0.648000,
    0.648000, 0.549900, 0.549900, 0.549900,
    0.450100, 0.450100, 0.450100, 0.352000,
    0.352000, 0.352000, 0.259300, 0.259300,
    0.259300, 0.175400, 0.175400, 0.175400,
    0.104000, 0.104000, 0.104000, 0.048600,
    0.048600, 0.048600, 0.012800, 0.012800,
    0.012800, 0.000000, 0.000000, 0.000000,
]

export const geo_title_screen = (param, graphNode, unused) => {
    console.log("running gfx function - geo title screen")
    console.log("need to verify gTitleZoomCounter")
    const displayList = []

    const scaleMat = new Array(4).fill(0).map(() => new Array(4).fill(0))
    let scaleX, scaleY, scaleZ

    const scaleTable1 = intro_seg7_table_0700C790
    const scaleTable2 = intro_seg7_table_0700C880

    if (param != 1) {
        gTitleZoomCounter = 0
    } else { /// (param == 1)
        graphNode.flags = (graphNode.flags & 0xFF) | 0x100
        if (gTitleZoomCounter >= 0 && gTitleZoomCounter < INTRO_STEPS_ZOOM_IN) {
            scaleX = scaleTable1[gTitleZoomCounter * 3]
            scaleY = scaleTable1[gTitleZoomCounter * 3 + 1]
            scaleZ = scaleTable1[gTitleZoomCounter * 3 + 2]
        } else if (gTitleZoomCounter >= INTRO_STEPS_ZOOM_IN && gTitleZoomCounter < INTRO_STEPS_HOLD_1) {
            scaleX = 1.0
            scaleY = 1.0
            scaleZ = 1.0
        } else if (gTitleZoomCounter >= INTRO_STEPS_HOLD_1 && gTitleZoomCounter < INTRO_STEPS_ZOOM_OUT) {
            scaleX = scaleTable2[(gTitleZoomCounter - INTRO_STEPS_HOLD_1) * 3]
            scaleY = scaleTable2[(gTitleZoomCounter - INTRO_STEPS_HOLD_1) * 3 + 1]
            scaleZ = scaleTable2[(gTitleZoomCounter - INTRO_STEPS_HOLD_1) * 3 + 2]
        } else {
            scaleX = 0.0
            scaleY = 0.0
            scaleZ = 0.0
        }

        MathUtil.guScale(scaleMat, scaleX, scaleY, scaleZ)
        Gbi.gSPMatrix(displayList, scaleMat, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        Gbi.gSPDisplayList(displayList, LevelData.intro_seg7_dl_0700B3A0)
        Gbi.gSPEndDisplayList(displayList)
        gTitleZoomCounter++
    }
    return displayList
}

export const geo_fade_transition = (param, graphNode, unused) => {
    console.log("running gfx function - geo fade transition")
    const displayList = []
    if (param != 1) {
        gTitleFadeCounter = 0
    } else if (param == 1) {
        Gbi.gSPDisplayList(displayList, cGFX.dl_proj_mtx_fullscreen)
        Gbi.gDPSetEnvColor(displayList, 255, 255, 255, gTitleFadeCounter)
        if (gTitleFadeCounter == 255) {
            graphNode.flags = (graphNode.flags & 0xFF) | 0x100
            //Gbi.gDPSetRenderMode(displayList, Gbi.G_RM_AA_OPA_SURF, Gbi.G_RM_AA_OPA_SURF2);
        } else {
            graphNode.flags = (graphNode.flags & 0xFF) | 0x500
            //Gbi.gDPSetRenderMode(displayList, G_RM_AA_XLU_SURF, G_RM_AA_XLU_SURF2);
        }
        Gbi.gSPDisplayList(displayList, LevelData.intro_seg7_dl_0700C6A0)
        Gbi.gSPEndDisplayList(displayList)
        if (gTitleZoomCounter >= 0x13) {
            gTitleFadeCounter += 0x1a
            if (gTitleFadeCounter >= 0x100) {
                gTitleFadeCounter = 0xFF
            }
        }
    }
    return displayList
}
