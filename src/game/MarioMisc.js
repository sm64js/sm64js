import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import { GameInstance as Game } from "./Game"

class MarioMisc {
    constructor() {
        this.gBodyState = {
            action: 0, capState: 0, eyeState: 0, handState: 0,
            wingFlutter: 0, modelState: 0, grabPos: 0, punchState: 0,
            torsoAngle: [0, 0, 0], headAngle: [0, 0, 0],
            heldObjLastPosition: [0, 0, 0]
        }
    }

    geo_draw_mario_head_goddard(callContext, node, c) {
        let gfx = []
        const asGenerated = node.wrapper
        if (callContext == 0) { // Create
            //console.log("geo_draw_mario_head_goddard init - do nothing")
        } else if (callContext == 1) { // Render
            gfx = GoddardRenderer.gdm_gettestdl(asGenerated.param)
            Game.D_8032C6A0_vsyncFunc = GoddardRenderer.gd_vblank
            Game.D_8032C6A0_classObject = GoddardRenderer
            //throw "geo_draw_mario_head_goddard"
        }
        return gfx 
    }
}

export const MarioMiscInstance = new MarioMisc()