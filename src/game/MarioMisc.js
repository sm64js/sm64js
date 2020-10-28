import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import { GameInstance as Game } from "./Game"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import * as Mario from "./Mario"
import { get_pos_from_transform_mtx } from "../engine/math_util"

class MarioMisc {
    constructor() {
        this.gBodyState = {
            action: 0, capState: 0, eyeState: 0, handState: 0,
            wingFlutter: 0, modelState: 0, grabPos: 0, punchState: 0,
            torsoAngle: [0, 0, 0], headAngle: [0, 0, 0], torsoPos: [0,0,0],
            heldObjLastPosition: [0, 0, 0]
        }
        this.customCapState = 0
    }

    geo_draw_mario_head_goddard(callContext, node) {

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

    geo_mario_tilt_torso(callContext, node, mtx) {

        const asGenerated = node.wrapper
        const action = this.gBodyState.action

        if (callContext == GEO_CONTEXT_RENDER) {
            const rotNode = node.next

            if (![Mario.ACT_WALKING, Mario.ACT_BUTT_SLIDE, Mario.ACT_HOLD_BUTT_SLIDE, Mario.ACT_RIDING_SHELL_GROUND].includes(action)) {
                this.gBodyState.torsoAngle = [0,0,0]
            }

            rotNode.wrapper.rotation[0] = this.gBodyState.torsoAngle[1]
            rotNode.wrapper.rotation[1] = this.gBodyState.torsoAngle[2]
            rotNode.wrapper.rotation[2] = this.gBodyState.torsoAngle[0]

            const curTransform = mtx
            const cameraMtx = GeoRenderer.gCurGraphNodeCamera.wrapper.matrixPtr

            ///update torso position
            if (curTransform && cameraMtx) get_pos_from_transform_mtx(this.gBodyState.torsoPos, curTransform, cameraMtx)
        }
        return []

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

    geo_switch_mario_cap_on_off(callContext, switchCase) {
        switchCase.selectedCase = this.customCapState
    }
}

export const MarioMiscInstance = new MarioMisc()