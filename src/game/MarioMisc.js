import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import { GameInstance as Game } from "./Game"

import { get_pos_from_transform_mtx, Mat4, vec3s_set } from "../engine/math_util"
import { obj_update_pos_from_parent_transformation, create_transformation_from_matrices, obj_set_gfx_pos_from_pos } from "./ObjectHelpers"
import { GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE, GEO_CONTEXT_HELD_OBJ } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import {
    MARIO_HAND_FISTS, MARIO_HAND_OPEN, GRAB_POS_LIGHT_OBJ, GRAB_POS_HEAVY_OBJ, GRAB_POS_BOWSER
} from "../include/mario_geo_switch_case_ids"
import * as Mario from "./Mario"

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

            if (![Mario.ACT_WALKING, Mario.ACT_BUTT_SLIDE, Mario.ACT_HOLD_BUTT_SLIDE, Mario.ACT_RIDING_SHELL_GROUND, Mario.ACT_KARTING].includes(action)) {
                this.gBodyState.torsoAngle = [0,0,0]
            }

            rotNode.wrapper.rotation[0] = this.gBodyState.torsoAngle[1]
            rotNode.wrapper.rotation[1] = this.gBodyState.torsoAngle[2]
            rotNode.wrapper.rotation[2] = this.gBodyState.torsoAngle[0]
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
        switchCase.selectedCase = this.customCapState > 0 ? this.customCapState%2 : 0
    }

    geo_switch_mario_model(callContext, switchCase) {
        switchCase.selectedCase = this.customCapState > 0 ? Math.floor(this.customCapState/2)%3 : 0
    }

    geo_switch_parachuting(callContext, switchCase) {
        if (callContext == GEO_CONTEXT_RENDER) {
            switchCase.selectedCase = (this.gBodyState.action == Mario.ACT_PARACHUTING) ? 1 : 0
        }
    }

    geo_switch_karting(callContext, switchCase) {
        if (callContext == GEO_CONTEXT_RENDER) {
            switchCase.selectedCase = (this.gBodyState.action == Mario.ACT_KARTING) ? 1 : 0
        }
    }

    geo_move_mario_part_from_parent(callContext, node, mtx) {
        if (callContext == GEO_CONTEXT_RENDER) {
            const gMarioObject = ObjectListProcessor.gMarioObject
            const gCurGraphNodeCamera = GeoRenderer.gCurGraphNodeCamera
            const obj = GeoRenderer.gCurGraphNodeObject.object
            const xfm = Mat4()

            if (obj == gMarioObject && obj.prevObj) {
                create_transformation_from_matrices(xfm, mtx, gCurGraphNodeCamera.matrixPtr)
                obj_update_pos_from_parent_transformation(xfm, obj.prevObj)
                obj_set_gfx_pos_from_pos(obj.prevObj)
            }
        }
        return null
    }

    geo_switch_mario_hand(callContext, node, c) {
        const bodyState = this.gBodyState

        if (callContext == GEO_CONTEXT_RENDER) {
            if (bodyState.handState == MARIO_HAND_FISTS) {
                  // switch between fists (0) and open (1)
                node.selectedCase = ((bodyState.action & Mario.ACT_FLAG_SWIMMING_OR_FLYING) != 0) ? 1 : 0
            } else {
                if (node.numCases == 0) {
                    node.selectedCase =
                        (bodyState.handState < 5) ? bodyState.handState : MARIO_HAND_OPEN
                } else {
                    node.selectedCase =
                        (bodyState.handState < 2) ? bodyState.handState : MARIO_HAND_FISTS
                }
            }
        }
        return null
    }

    /**
     * Increase Mario's hand / foot size when he punches / kicks.
     * Since animation geo nodes only support rotation, this scaling animation
     * was scripted separately. The node with this script should be placed before
     * a scaling node containing the hand / foot geo layout.
     * ! Since the animation gets updated in GEO_CONTEXT_RENDER, drawing Mario multiple times
     * (such as in the mirror room) results in a faster and desynced punch / kick animation.
     */
    geo_mario_hand_foot_scaler(callContext, node, c) {
        const scaleNode = node.next
        const bodyState = this.gBodyState
        const gAreaUpdateCounter = GeoRenderer.gAreaUpdateCounter

        if (callContext == GEO_CONTEXT_RENDER) {
            scaleNode.scale = 1.0
            if (node.parameter == bodyState.punchState >> 6) {
                if (this.sMarioAttackAnimCounter != gAreaUpdateCounter && (bodyState.punchState & 0x3F) > 0) {
                    bodyState.punchState -= 1
                    this.sMarioAttackAnimCounter = gAreaUpdateCounter
                }
                scaleNode.scale =
                    this.gMarioAttackScaleAnimation[node.parameter * 6 + (bodyState.punchState & 0x3F)]
                    / 10.0
            }
        }
        return null
    }


    /**
     * Geo node that updates the held object node and the HOLP.
     */
    geo_switch_mario_hand_grab_pos(callContext, node, mtx) {
        const gMarioState = LevelUpdate.gMarioState
        const gCurGraphNodeCamera = GeoRenderer.gCurGraphNodeCamera

        if (callContext == GEO_CONTEXT_RENDER) {
            node.object = null
            if (gMarioState.heldObj) {
                node.object = gMarioState.heldObj
                switch (this.gBodyState.grabPos) {
                    case GRAB_POS_LIGHT_OBJ:
                        if (gMarioState.action & Mario.ACT_FLAG_THROWING) {
                            vec3s_set(node.translation, 50, 0, 0)
                        } else {
                            vec3s_set(node.translation, 50, 0, 110)
                        }
                        break
                    case GRAB_POS_HEAVY_OBJ:
                        vec3s_set(node.translation, 145, -173, 180)
                        break
                    case GRAB_POS_BOWSER:
                        vec3s_set(node.translation, 80, -270, 1260)
                        break
                }
            }
        } else if (callContext == GEO_CONTEXT_HELD_OBJ) {
              // ! The HOLP is set here, which is why it only updates when the held object is drawn.
              // This is why it won't update during a pause buffered hitstun or when the camera is very far
              // away.
            get_pos_from_transform_mtx(gMarioState.marioBodyState.heldObjLastPosition, mtx, gCurGraphNodeCamera.matrixPtr)
        }
        return null
    }
}

export const MarioMiscInstance = new MarioMisc()
