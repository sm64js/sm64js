import { GoddardRendererInstance as GoddardRenderer } from "../goddard/GoddardRenderer"
import { GameInstance as Game } from "./Game"

import {
    coss
} from "../utils"

import {
    vec3s_set, get_pos_from_transform_mtx, Mat4
} from "../engine/math_util"

import {
    gDPSetAlphaCompare, gDPSetEnvColor, 
    gSPEndDisplayList, gSPClearGeometryMode, gSPSetGeometryMode,

    G_AC_DITHER
} from "../include/gbi"

import {
    GEO_CONTEXT_RENDER, GEO_CONTEXT_CREATE, GEO_CONTEXT_HELD_OBJ
} from "../engine/graph_node"

import {
    ACT_FLAG_STATIONARY, ACT_FLAG_SWIMMING_OR_FLYING, ACT_FLAG_THROWING,
    ACT_WALKING, ACT_BUTT_SLIDE, ACT_HOLD_BUTT_SLIDE, ACT_RIDING_SHELL_GROUND
} from "./Mario"

import {
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT
} from "../engine/GeoLayout"

import {
    GRAPH_RENDER_ACTIVE, GRAPH_NODE_TYPE_TRANSLATION_ROTATION
} from "../engine/graph_node"

import {
    MARIO_HAND_FISTS, MARIO_HAND_OPEN, GRAB_POS_LIGHT_OBJ, GRAB_POS_HEAVY_OBJ, GRAB_POS_BOWSER
} from "../include/mario_geo_switch_case_ids"


class MarioMisc {
    constructor() {
        this.gBodyState = {
            action: 0, capState: 0, eyeState: 0, handState: 0,
            wingFlutter: 0, modelState: 0, grabPos: 0, punchState: 0,
            torsoAngle: [0, 0, 0], headAngle: [0, 0, 0],
            heldObjLastPosition: [0, 0, 0]
        }

        this.sMarioAttackAnimCounter = 0

        /**
         * The scale values per frame for Mario's foot/hand for his attack animation
         * There are 3 scale animations in groups of 6 frames.
         * The first animation starts at frame index 3 and goes down, the others start at frame index 5.
         * The values get divided by 10 before assigning, so e.g. 12 gives a scale factor 1.2.
         * All combined, this means e.g. the first animation scales Mario's fist by {2.4, 1.6, 1.2, 1.0} on
         * successive frames.
         */
        this.gMarioAttackScaleAnimation = [
            10, 12, 16, 24, 10, 10, 10, 14, 20, 30, 10, 10, 10, 16, 20, 26, 26, 20,
        ]
    }

    geo_draw_mario_head_goddard(callContext, node) {
        let gfx = []
        if (callContext == GEO_CONTEXT_CREATE) { // Create
        } else if (callContext == GEO_CONTEXT_RENDER) { // Render
            gfx = GoddardRenderer.gdm_gettestdl(node.parameter)
            Game.D_8032C6A0_vsyncFunc = GoddardRenderer.gd_vblank
            Game.D_8032C6A0_classObject = GoddardRenderer
        }
        return gfx 
    }

    geo_mario_tilt_torso(callContext, node) {
        const action = this.gBodyState.action

        if (callContext == GEO_CONTEXT_RENDER) {
            const rotNode = node.next

            if (![ACT_WALKING, ACT_BUTT_SLIDE, ACT_HOLD_BUTT_SLIDE, ACT_RIDING_SHELL_GROUND].includes(action)) {
                this.gBodyState.torsoAngle = [0,0,0]
            }
            rotNode.rotation[0] = this.gBodyState.torsoAngle[1]
            rotNode.rotation[1] = this.gBodyState.torsoAngle[2]
            rotNode.rotation[2] = this.gBodyState.torsoAngle[0]
        }
        return null
    }

    geo_switch_mario_eyes(callContext, switchCase) {
        let marioBlinkAnimation = [ 1, 2, 1, 0, 1, 2, 1 ]

        if (callContext == GEO_CONTEXT_RENDER) {
            if (this.gBodyState.eyeState == 0) {
                let blinkFrame = ((switchCase.numCases * 32 + gLinker.GeoRenderer.gAreaUpdateCounter) >> 1) & 0x1F
                if (blinkFrame < 7) {
                    switchCase.selectedCase = marioBlinkAnimation[blinkFrame]
                } else {
                    switchCase.selectedCase = 0
                }
            } else {
                throw "never here - geo_switch_mario_eyes"
            }
        }
        return null
    }

    /**
     * Determine whether Mario's head is drawn with or without a cap on.
     * Also sets the visibility of the wing cap wings on or off.
     */
    geo_switch_mario_cap_on_off(callContext, node, c) {
        if (callContext == GEO_CONTEXT_RENDER) {
            let next = node.next
            const bodyState = this.gBodyState
            node.selectedCase = bodyState.capState & 1
            while (next != node) {
                if (next.type == GRAPH_NODE_TYPE_TRANSLATION_ROTATION) {
                    if (bodyState.capState & 2) {
                        next.flags |= GRAPH_RENDER_ACTIVE
                    } else {
                        next.flags &= ~GRAPH_RENDER_ACTIVE
                    }
                }
                next = next.next
            }
        }
        return null
    }

    /**
     * Generate a display list that sets the correct blend mode and color for mirror Mario.
     */
    make_gfx_mario_alpha(node, alpha) {
        const gfx = []

        if (alpha == 255) {
            node.flags = (node.flags & 0xFF) | (LAYER_OPAQUE << 8)
        } else {
            node.flags = (node.flags & 0xFF) | (LAYER_TRANSPARENT << 8)
            gDPSetAlphaCompare(gfx, G_AC_DITHER)
        }
        gDPSetEnvColor(gfx, 255, 255, 255, alpha)
        gSPEndDisplayList(gfx)

        return gfx
    }


    geo_move_mario_part_from_parent(callContext, node, mtx) {
        if (callContext == GEO_CONTEXT_RENDER) {
            const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
            const gCurGraphNodeObject = gLinker.GeoRenderer.gCurGraphNodeObject.wrapperObjectNode.wrapperObject
            const gCurGraphNodeCamera = gLinker.GeoRenderer.gCurGraphNodeCamera
            const xfm = Mat4()

            if (gCurGraphNodeObject == gMarioObject && gCurGraphNodeObject.prevObj != null) {
                create_transformation_from_matrices(xfm, mtx, gCurGraphNodeCamera.matrixPtr)
                obj_update_pos_from_parent_transformation(xfm, gCurGraphNodeObject.prevObj)
                obj_set_gfx_pos_from_pos(gCurGraphNodeObject.prevObj)
            }
        }
        return null
    }

    /**
     * Sets the correct blend mode and color for mirror Mario.
     */
    geo_mirror_mario_set_alpha(callContext, node, c) {
        if (callContext == GEO_CONTEXT_RENDER) {
            const bodyState = this.gBodyState
            let alpha = (bodyState.modelState & 0x100) ? (bodyState.modelState & 0xFF) : 255
            return this.make_gfx_mario_alpha(node, alpha)
        }

        return null
    }


    /**
     * Determines if Mario is standing or running for the level of detail of his model.
     * If Mario is standing still, he is always high poly. If he is running,
     * his level of detail depends on the distance to the camera.
     */
    geo_switch_mario_stand_run(callContext, node, mtx) {
        if (callContext == GEO_CONTEXT_RENDER) {
              // assign result. 0 if moving, 1 if stationary.
            node.selectedCase = ((this.gBodyState.action & ACT_FLAG_STATIONARY) == 0) ? 1 : 0
        }
        return null
    }


    /**
     * Switch between normal cap, wing cap, vanish cap and metal cap.
     */
    geo_switch_mario_cap_effect(callContext, node, c) {
        if (callContext == GEO_CONTEXT_RENDER) {
            node.selectedCase = this.gBodyState.modelState >> 8
        }
        return null
    }


    /**
     * Makes Mario's head rotate with the camera angle when in C-up mode
     */
    geo_mario_head_rotation(callContext, node, c) {
        const bodyState = this.gBodyState
        let action = bodyState.action

        if (callContext == GEO_CONTEXT_RENDER) {
            // const rotNode = node.next
            // const camera = gLinker.GeoRenderer.gCurGraphNodeCamera.config.camera

            // if (camera.mode == CAMERA_MODE_C_UP) {
            //     rotNode.rotation[0] = gPlayerCameraState.headRotation[1]
            //     rotNode.rotation[2] = gPlayerCameraState.headRotation[0]
            // } else if (action & ACT_FLAG_WATER_OR_TEXT) {
            //     rotNode.rotation[0] = bodyState.headAngle[1]
            //     rotNode.rotation[1] = bodyState.headAngle[2]
            //     rotNode.rotation[2] = bodyState.headAngle[0]
            // } else {
            //     vec3s_set(bodyState.headAngle, 0, 0, 0)
            //     vec3s_set(rotNode.rotation, 0, 0, 0)
            // }
        }
        return null
    }


    /**
     * Geo node script that makes the wings on Mario's wing cap flap.
     * Should be placed before a rotation node.
     */
    geo_mario_rotate_wing_cap_wings(callContext, node, c) {
        let /*s16*/ rotX
        const bodyState = this.gBodyState
        const gAreaUpdateCounter = gLinker.GeoRenderer.gAreaUpdateCounter

        if (callContext == GEO_CONTEXT_RENDER) {
            const rotNode = node.next

            if (!bodyState.wingFlutter) {
                rotX = (coss((gAreaUpdateCounter & 0xF) << 12) + 1.0) * 4096.0
            } else {
                rotX = (coss((gAreaUpdateCounter & 7) << 13) + 1.0) * 6144.0
            }
            if (!(node.parameter & 1)) {
                rotNode.rotation[0] = -rotX
            } else {
                rotNode.rotation[0] = rotX
            }
        }
        return null
    }


    /**
     * Switch between hand models.
     * Possible options are described in the MarioHandGSCId enum.
     */
    geo_switch_mario_hand(callContext, node, c) {
        const bodyState = this.gBodyState

        if (callContext == GEO_CONTEXT_RENDER) {
            if (bodyState.handState == MARIO_HAND_FISTS) {
                  // switch between fists (0) and open (1)
                node.selectedCase = ((bodyState.action & ACT_FLAG_SWIMMING_OR_FLYING) != 0) ? 1 : 0
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
        const gAreaUpdateCounter = gLinker.GeoRenderer.gAreaUpdateCounter

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
    geo_switch_mario_hand_grab_pos(callContext, heldObj, mtx) {
        const marioState = gLinker.LevelUpdate.gMarioState
        const gCurGraphNodeCamera = gLinker.GeoRenderer.gCurGraphNodeCamera

        if (callContext == GEO_CONTEXT_RENDER) {
            heldObj.objNode = null
            if (marioState.heldObj) {
                heldObj.objNode = marioState.heldObj
                switch (this.gBodyState.grabPos) {
                    case GRAB_POS_LIGHT_OBJ:
                        if (marioState.action & ACT_FLAG_THROWING) {
                            vec3s_set(heldObj.translation, 50, 0, 0)
                        } else {
                            vec3s_set(heldObj.translation, 50, 0, 110)
                        }
                        break
                    case GRAB_POS_HEAVY_OBJ:
                        vec3s_set(heldObj.translation, 145, -173, 180)
                        break
                    case GRAB_POS_BOWSER:
                        vec3s_set(heldObj.translation, 80, -270, 1260)
                        break
                }
            }
        } else if (callContext == GEO_CONTEXT_HELD_OBJ) {
              // ! The HOLP is set here, which is why it only updates when the held object is drawn.
              // This is why it won't update during a pause buffered hitstun or when the camera is very far
              // away.
            get_pos_from_transform_mtx(marioState.marioBodyState.heldObjLastPosition, mtx, gCurGraphNodeCamera.matrixPtr)
        }
        return null
    }


    // X position of the mirror
    // #define MIRROR_X 4331.53

    /**
     * Geo node that creates a clone of Mario's geo node and updates it to becomes
     * a mirror image of the player.
     */
    geo_render_mirror_mario(callContext, node, c) {
        // let /*f32*/ mirroredX
        // struct Object *mario = gMarioStates[0].marioObj

        // switch (callContext) {
        //     case GEO_CONTEXT_CREATE:
        //         init_graph_node_object(null, &gMirrorMario, null, gVec3fZero, gVec3sZero, gVec3fOne)
        //         break
        //     case GEO_CONTEXT_AREA_LOAD:
        //         geo_add_child(node, &gMirrorMario.node)
        //         break
        //     case GEO_CONTEXT_AREA_UNLOAD:
        //         geo_remove_child(&gMirrorMario.node)
        //         break
        //     case GEO_CONTEXT_RENDER:
        //         if (mario.header.gfx.pos[0] > 1700.0) {
        //               // TODO: Is this a geo layout copy or a graph node copy?
        //             gMirrorMario.sharedChild = mario.header.gfx.sharedChild
        //             gMirrorMario.areaIndex = mario.header.gfx.areaIndex
        //             vec3s_copy(gMirrorMario.angle, mario.header.gfx.angle)
        //             vec3f_copy(gMirrorMario.pos, mario.header.gfx.pos)
        //             vec3f_copy(gMirrorMario.scale, mario.header.gfx.scale)

        //             gMirrorMario.animInfo = mario.header.gfx.animInfo
        //             mirroredX = MIRROR_X - gMirrorMario.pos[0]
        //             gMirrorMario.pos[0] = mirroredX + MIRROR_X
        //             gMirrorMario.angle[1] = -gMirrorMario.angle[1]
        //             gMirrorMario.scale[0] *= -1.0
        //             ((struct GraphNode *) &gMirrorMario).flags |= 1
        //         } else {
        //             ((struct GraphNode *) &gMirrorMario).flags &= ~1
        //         }
        //         break
        // }
        return null
    }

    /**
     * Since Mirror Mario has an x scale of -1, the mesh becomes inside out.
     * This node corrects that by changing the culling mode accordingly.
     */
    geo_mirror_mario_backface_culling(callContext, node, c) {
        const gfx = []

        // if (callContext == GEO_CONTEXT_RENDER && gCurGraphNodeObject == &gMirrorMario) {
        //     gfx = alloc_display_list(3 * sizeof(*gfx))

        //     if (node.parameter == 0) {
        //         gSPClearGeometryMode(&gfx[0], G_CULL_BACK)
        //         gSPSetGeometryMode(&gfx[1], G_CULL_FRONT)
        //         gSPEndDisplayList(&gfx[2])
        //     } else {
        //         gSPClearGeometryMode(&gfx[0], G_CULL_FRONT)
        //         gSPSetGeometryMode(&gfx[1], G_CULL_BACK)
        //         gSPEndDisplayList(&gfx[2])
        //     }
        //     node.flags = (node.flags & 0xFF) | (LAYER_OPAQUE << 8)
        // }
        return gfx
    }

}


export const MarioMiscInstance = new MarioMisc()
gLinker.MarioMisc = MarioMiscInstance
