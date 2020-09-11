import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import * as Mario from "./Mario"
import { GameInstance as Game } from "./Game"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"

class MarioMisc {
    constructor() {
        this.gBodyState = {
            action: 0, capState: 0, eyeState: 0, handState: 0,
            wingFlutter: 0, modelState: 0, grabPos: 0, punchState: 0,
            torsoAngle: [0, 0, 0], headAngle: [0, 0, 0],
            heldObjLastPosition: [0, 0, 0]
        }
        // this.geo_mario_tilt_torso = this.geo_mario_tilt_torso.bind(this);
    }

    geo_draw_mario_head_goddard(callContext, node, c) {
        let gfx = []
        const asGenerated = node.wrapper
        if (callContext == GEO_CONTEXT_CREATE) { // Create
        } else if (callContext == GEO_CONTEXT_RENDER) { // Render
            gfx = GoddardRenderer.gdm_gettestdl(asGenerated.param)
            Game.D_8032C6A0_vsyncFunc = GoddardRenderer.gd_vblank
            Game.D_8032C6A0_classObject = GoddardRenderer
        }
        return gfx 
    }

    geo_mario_tilt_torso(callContext, node, c) {
        // const asGenerated =  node;
        // const bodyState = this.gBodyState;
        // const action = bodyState.action;
    
        // if (callContext == GEO_CONTEXT_RENDER) {
        //     const rotNode = node.next;
    
        //     if (action != Mario.ACT_BUTT_SLIDE && action != Mario.ACT_HOLD_BUTT_SLIDE && action != Mario.ACT_WALKING
        //         && action != Mario.ACT_RIDING_SHELL_GROUND) {
        //             bodyState.torsoAngle = [0,0,0];
        //     }
        //     rotNode.rotation[0] = bodyState.torsoAngle[1];
        //     rotNode.rotation[1] = bodyState.torsoAngle[2];
        //     rotNode.rotation[2] = bodyState.torsoAngle[0];
        // }
        return null;
    }

    geo_switch_mario_eyes(callContext, switchCase) {

        let marioBlinkAnimation = [ 1, 2, 1, 0, 1, 2, 1 ]

        if (callContext == GEO_CONTEXT_RENDER) {
            if (this.gBodyState.eyeState == 0) {
                let blinkFrame = ((switchCase.numCases * 32 + GeoRenderer.gAreaUpdateCounter) >> 1) & 0x1F
                if (blinkFrame < 7) {
                    switchCase.selectedCase = marioBlinkAnimation[blinkFrame]
                } else {
                    switchCase.selectedCase = 0
                }
            } else {
                throw "never here - geo_switch_mario_eyes"
            }
        }
    }
}

export const MarioMiscInstance = new MarioMisc()
