import * as MathUtil from "../../engine/math_util"
import * as Gbi from "../../include/gbi"
import * as LevelData from "./leveldata"
import * as cGFX from "../../common_gfx/segment2"
import * as TitleScreenBG from "./title_screen_bg"

const canvas = document.querySelector('#gameCanvas')

let gTitleZoomCounter = 0
let gTitleFadeCounter = 0

const INTRO_STEPS_ZOOM_IN = 20
const INTRO_STEPS_HOLD_1 = 75
const INTRO_STEPS_ZOOM_OUT = 91

const INTRO_BACKGROUND_SUPER_MARIO = 0
const INTRO_BACKGROUND_GAME_OVER = 1

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
    const displayList = []
    if (param != 1) {
        gTitleFadeCounter = 0
    } else if (param == 1) {
        Gbi.gSPDisplayList(displayList, cGFX.dl_proj_mtx_fullscreen)
        Gbi.gDPSetEnvColor(displayList, 255, 255, 255, gTitleFadeCounter)
        if (gTitleFadeCounter == 255) {
            graphNode.flags = (graphNode.flags & 0xFF) | 0x100
            Gbi.gDPSetRenderMode(displayList, Gbi.G_RM_AA_OPA_SURF_SURF2);
        } else {
            graphNode.flags = (graphNode.flags & 0xFF) | 0x500
            Gbi.gDPSetRenderMode(displayList, Gbi.G_RM_AA_XLU_SURF_SURF2);
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

const introBackgroundIndexTable= [
    INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO,
    INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO,
    INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO,
    INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO, INTRO_BACKGROUND_SUPER_MARIO,
]


const introBackgroundTables = [ introBackgroundIndexTable ]

const introBackgroundDlRows = [
    TitleScreenBG.title_screen_bg_dl_0A000130, TitleScreenBG.title_screen_bg_dl_0A000148,
    TitleScreenBG.title_screen_bg_dl_0A000160, TitleScreenBG.title_screen_bg_dl_0A000178
]

const intro_backdrop_one_image = (index, backgroundTable) => {
    const aspect = canvas.width / canvas.height
    const num_tiles_h = parseInt(((aspect * canvas.height) + 159) / 160)

    const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))

    const vIntroBgTable = TitleScreenBG.mario_title_texture_table
    const displayList = []

    MathUtil.guTranslate(mtx, 
        ((index % num_tiles_h) * 80), // x
        Math.floor(index / num_tiles_h) * 80, // y
        0.0) // z

    Gbi.gSPMatrix(displayList, mtx, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_PUSH)
    Gbi.gSPDisplayList(displayList, TitleScreenBG.title_screen_bg_dl_0A000118)
    for (let j = 0; j < 4; ++j) {
        Gbi.gDPLoadTextureBlock(displayList, vIntroBgTable[j], Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 80, 20, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 7, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD)   
        Gbi.gSPDisplayList(displayList, introBackgroundDlRows[j])
    }
    //Gbi.gSPPopMatrix(displayList, Gbi.G_MTX_MODELVIEW) TODO
    Gbi.gSPEndDisplayList(displayList)
    return displayList
}

export const geo_intro_backdrop = (param, graphNode, unused) => {
    if (param == 0) {
        // "geo intro backdrop init - do nothing"
        return []
    } else {
        const index = graphNode.unk18 & 0xff
        const backgroundTable = introBackgroundTables[index]
        const displayList = []
        const aspect = canvas.width / canvas.height
        const num_tiles_h = parseInt(((aspect * canvas.height) + 159) / 160)

        graphNode.flags = (graphNode.flags & 0xFF) | 0x100
        Gbi.gSPDisplayList(displayList, cGFX.dl_proj_mtx_fullscreen)
        Gbi.gSPDisplayList(displayList, TitleScreenBG.title_screen_bg_dl_0A000100)
        for (let i = 0; i < num_tiles_h * 3; ++i) {
            Gbi.gSPDisplayList(displayList, intro_backdrop_one_image(i, backgroundTable))
        }
        Gbi.gSPDisplayList(displayList, TitleScreenBG.title_screen_bg_dl_0A000190)
        Gbi.gSPEndDisplayList(displayList)

        return displayList
    }
}
