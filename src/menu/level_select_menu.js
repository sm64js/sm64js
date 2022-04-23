import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { AreaInstance as Area } from "../game/Area"

let soundPlayed = false
export const intro_default = () => {
    //// core implementation is needed here
    //// for now simply just checking to see if start menu is pressed to skip Goddard Renderer
    //// and press start text
    Area.print_intro_text();

    if (window.sm64js.playerInput.buttonPressedStart && window.playerNameAccepted) {
        if (!soundPlayed) {
            soundPlayed = true
            new Audio("/mmo/assets/audio/painting.mp3").play()
        }
        return 1
    } else return 0
}

export const lvl_intro_update = (arg1) => {

    if (arg1.maxFrames && LevelCommands.callLoopFrameCounter > arg1.maxFrames) {
        return 1
    }

    switch (arg1.state) {
        case 0: throw "play mario sound - audio not implemented"
        case 1: return intro_default()
    }
}