let gTitleZoomCounter = 0
let gTitleFadeCounter = 0

export const geo_title_screen = (param, graphNode, unused) => {
    console.log("running gfx function - geo title screen")
    console.log("need to verify gTitleZoomCounter")
    const displayList = []
    if (param != 1) {
        gTitleZoomCounter = 0
    } else { /// (param == 1)
        throw "geo title screen not implemented"
    }
    return displayList
}

export const geo_fade_transition = (param, graphNode, unused) => {
    console.log("running gfx function - geo fade transition")
    const displayList = []
    if (param != 1) {
        gTitleFadeCounter = 0
    } else if (param == 1) {
        throw "geo fade transition screen not implemented"
    }
    return displayList
}
