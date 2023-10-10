import { AreaInstance as Area } from "../game/Area"
import { PrintInstance as Print } from "../game/Print"
import { LEVEL_MAX, LEVEL_MIN, level_defines } from "../levels/level_defines_constants"

const intro_play_its_a_me_mario = () => {
    // set_background_music(0, SEQ_SOUND_PLAYER, 0)
    // play_sound(SOUND_MENU_COIN_ITS_A_ME_MARIO, gGlobalSoundSource)
    return true
}

const intro_regular = () => {
    Area.print_intro_text()

    if (window.playerInput.buttonPressedStart) {
        return true
    } else {
        return false
    }
}


        // stickX, stickY,
        // stickMag: mag,

        // buttonPressedA: buttonDownA && !window.playerInput.buttonDownA,
        // buttonPressedStart: buttonDownStart && !window.playerInput.buttonDownStart,
        // buttonPressedB: buttonDownB && !window.playerInput.buttonDownB,
        // buttonPressedZ: buttonDownZ && !window.playerInput.buttonDownZ,
        // buttonPressedCl: buttonDownCl && !window.playerInput.buttonDownCl,
        // buttonPressedCr: buttonDownCr && !window.playerInput.buttonDownCr,
        // buttonPressedCu: buttonDownCu && !window.playerInput.buttonDownCu,
        // buttonPressedCd: buttonDownCd && !window.playerInput.buttonDownCd,

        // buttonDownA, buttonDownB, buttonDownZ, buttonDownStart, buttonDownCl, buttonDownCr, buttonDownCu, buttonDownCd


let gameOverNotPlayed = 1
window.gDebugLevelSelect = 1

const intro_game_over = () => {
    let /*s32*/ sp1C = 0

    if (gameOverNotPlayed == 1) {
        // play_sound(SOUND_MARIO_GAME_OVER, gGlobalSoundSource)
        gameOverNotPlayed = 0
    }

    Area.print_intro_text()

    if (window.playerInput.buttonPressedStart) {
        // play_sound(SOUND_MENU_STAR_SOUND, gGlobalSoundSource)
        sp1C = 100 + gDebugLevelSelect
        gameOverNotPlayed = 1
    }
    return run_press_start_demo_timer(sp1C)
}

// input loop for the level select menu. updates the selected stage
// count if an input was received. signals the stage to be started
// or the level select to be exited if start or the quit combo is
// pressed.

export const level_select_input_loop = () => {
    return Area.gCurrLevelNum
    /*let stageChanged = 0

      // perform the ID updates per each button press.
    if (window.playerInput.buttonPressedA) {
        ++Area.gCurrLevelNum
        stageChanged = 1
    }
    if (window.playerInput.buttonPressedB) {
        --Area.gCurrLevelNum
        stageChanged = 1
    }
    if (window.playerInput.buttonPressedCu) {
        --Area.gCurrLevelNum
        stageChanged = 1
    }
    if (window.playerInput.buttonPressedCd) {
        ++Area.gCurrLevelNum
        stageChanged = 1
    }
    if (window.playerInput.buttonPressedCl) {
        Area.gCurrLevelNum -= 10
        stageChanged = 1
    }
    if (window.playerInput.buttonPressedCr) {
        Area.gCurrLevelNum += 10
        stageChanged = 1
    }

    // if the stage was changed, play the sound for changing a stage.
    if (stageChanged) {
        // play_sound(SOUND_GENERAL_LEVEL_SELECT_CHANGE, gGlobalSoundSource)
    }

    if (Area.gCurrLevelNum > LEVEL_MAX) {
        Area.gCurrLevelNum = LEVEL_MIN   // exceeded max. set to min.
    }

    if (Area.gCurrLevelNum < LEVEL_MIN) {
        Area.gCurrLevelNum = LEVEL_MAX   // exceeded min. set to max.
    }

    Area.gCurrSaveFileNum = 4   // file 4 is used for level select tests
    Area.gCurrActNum = 6
    Print.print_text_centered(160, 80, "SELECT STAGE")
    Print.print_text_centered(160, 30, "PRESS START BUTTON")
    Print.print_text_fmt_int(40, 60, "%2d", Area.gCurrLevelNum)
    Print.print_text(80, 60, level_defines[Area.gCurrLevelNum - 1].name)   // print stage name

    // start being pressed signals the stage to be started. that is, unless...
    if (window.playerInput.buttonPressedStart) {
          // ... the level select quit combo is being pressed, which uses START. If this
          // is the case, quit the menu instead.
        if (window.playerInput.buttonPressedZ) {
            gDebugLevelSelect = 0
            return -1
        }
        // play_sound(SOUND_MENU_STAR_SOUND, gGlobalSoundSource)
        return Area.gCurrLevelNum
    }
    return false*/
}

// run the demo timer on the PRESS START screen.
// this function will return a non-0 timer once
// the demo starts, signaling to the subsystem that
// the demo needs to be ran.
const run_press_start_demo_timer = (timer) => {
    // if (timer == 0) {
    //     if (!gPlayer1Controller.buttonDown && !gPlayer1Controller.stickMag) {
    //         if ((++gDemoCountdown) == PRESS_START_DEMO_TIMER) {
    //               // start the demo. 800 frames has passed while
    //               // player is idle on PRESS START screen.

    //               // start the Mario demo animation for the demo list.
    //             load_patchable_table(&gDemo, gDemoInputListID)

    //               // if the next demo sequence ID is the count limit, reset it back to
    //               // the first sequence.
    //             if (++gDemoInputListID == gDemo.animDmaTable.count) {
    //                 gDemoInputListID = 0
    //             }

    //               // add 1 (+4) to the pointer to skip the demoID.
    //             gCurrDemoInput = ((struct DemoInput *) gDemo.targetAnim) + 1
    //             timer = (s8)((struct DemoInput *) gDemo.targetAnim).timer
    //             gCurrSaveFileNum = 1
    //             gCurrActNum = 1
    //         }
    //     } else {   // activity was detected, so reset the demo countdown.
    //         gDemoCountdown = 0
    //     }
    // }
    return timer
}

export const lvl_intro_update = (arg1) => {
    switch (arg1) {
        case 0: return intro_play_its_a_me_mario()
        case 1: return intro_regular()
        case 2: return intro_game_over()
        case 3: return level_select_input_loop()
    }
}
