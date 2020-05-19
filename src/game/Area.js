
export const WARP_TRANSITION_FADE_FROM_COLOR   = 0x00
export const WARP_TRANSITION_FADE_INTO_COLOR   = 0x01
export const WARP_TRANSITION_FADE_FROM_STAR    = 0x08
export const WARP_TRANSITION_FADE_INTO_STAR    = 0x09
export const WARP_TRANSITION_FADE_FROM_CIRCLE  = 0x0A
export const WARP_TRANSITION_FADE_INTO_CIRCLE  = 0x0B
export const WARP_TRANSITION_FADE_INTO_MARIO   = 0x11
export const WARP_TRANSITION_FADE_FROM_BOWSER  = 0x12
export const WARP_TRANSITION_FADE_INTO_BOWSER  = 0x13

class Area {

    constructor() {

        this.gCurrentArea = null
        this.gAreas = Array(8).fill({ index: 0 })
        this.gCurAreaIndex = 0

    }

    load_area(index) {

        if (!this.gCurrentArea && this.gAreas[index]) {
            this.gCurrentArea = this.gAreas[index]
            this.gCurAreaIndex = this.gCurrentArea.index
        }

    }

    play_transition() {

    }

}

export const AreaInstance = new Area()