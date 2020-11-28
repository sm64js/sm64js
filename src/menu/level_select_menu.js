import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"

const intro_default = () => {
    //// core implementation is needed here
    //// for now simply just checking to see if start menu is pressed to skip Goddard Renderer

    if (window.playerInput.buttonPressedStart && window.playerNameAccepted) return 1
    else return 0
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