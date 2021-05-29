import * as GraphNode from "./graph_node"
import * as MathUtil from "./math_util"
import { GameInstance as Game } from "../game/Game"
import * as Gbi from "../include/gbi"
import { CameraInstance as Camera } from "../game/Camera"
import * as Mario from "../game/Mario"
import {
    create_shadow_below_xyz, gShadowAboveWaterOrLava, gMarioOnIceOrCarpet
} from "../game/Shadow"

const canvas = document.querySelector('#gameCanvas')

const renderModeTable = [
    [
        Gbi.G_RM_OPA_SURF_SURF2,
        Gbi.G_RM_AA_OPA_SURF_SURF2,
        Gbi.G_RM_AA_OPA_SURF_SURF2,
        Gbi.G_RM_AA_OPA_SURF_SURF2,
        null,
        Gbi.G_RM_AA_XLU_SURF_SURF2,
        Gbi.G_RM_AA_XLU_SURF_SURF2,
        Gbi.G_RM_AA_XLU_SURF_SURF2
    ],
    [
        Gbi.G_RM_ZB_OPA_SURF_SURF2,
        Gbi.G_RM_AA_ZB_OPA_SURF_SURF2,
        Gbi.G_RM_AA_ZB_OPA_DECAL_DECAL2,
        Gbi.G_RM_AA_ZB_OPA_INTER_NOOP2,
        Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2,
        Gbi.G_RM_AA_ZB_XLU_SURF_SURF2,
        Gbi.G_RM_AA_ZB_XLU_DECAL_DECAL2,
        Gbi.G_RM_AA_ZB_XLU_INTER_INTER2
    ]
]

class GeoRenderer {
    constructor() {

        this.gMatStack = new Array(32).fill(0).map(() => MathUtil.Mat4())
        this.gMatStackIndex = 0
        this.gAreaUpdateCounter = 0

        this.gCurGraphNodeRoot = null
        this.gCurGraphNodeMasterList = null
        this.gCurGraphNodeCamFrustum = null
        this.gCurGraphNodeCamera = null
        this.gCurGraphNodeObject = null
        this.gCurGraphNodeHeldObject = null

        this.ANIM_TYPE_NONE                  = 0

        // Not all parts have full animation: to save space, some animations only
        // have xz, y, or no translation at all. All animations have rotations though
        this.ANIM_TYPE_TRANSLATION           = 1
        this.ANIM_TYPE_VERTICAL_TRANSLATION  = 2
        this.ANIM_TYPE_LATERAL_TRANSLATION   = 3
        this.ANIM_TYPE_NO_TRANSLATION        = 4

        // Every animation includes rotation, after processing any of the above
        // translation types the type is set to this
        this.ANIM_TYPE_ROTATION              = 5
    }

    geo_process_master_list_sub(node) {
        const enableZBuffer = (node.flags & GraphNode.GRAPH_RENDER_Z_BUFFER) != 0
        const modeList = enableZBuffer ? renderModeTable[1] : renderModeTable[0]

        if (enableZBuffer) {
            Gbi.gSPSetGeometryMode(Game.gDisplayList, Gbi.G_ZBUFFER)
        }

        for (let i = 0; i < GraphNode.GFX_NUM_MASTER_LISTS; i++) {
            if (node.listHeads[i]) {
                if (modeList[i] == null) throw "need to add render mode - i: " + i
                Gbi.gDPSetRenderMode(Game.gDisplayList, modeList[i])
                for (const displayNode of node.listHeads[i]) {
                    Gbi.gSPMatrix(Game.gDisplayList, displayNode.transform, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
                    Gbi.gSPDisplayList(Game.gDisplayList, displayNode.displayList)

                }
            }
        }

        if (enableZBuffer) {
            Gbi.gSPClearGeometryMode(Game.gDisplayList, Gbi.G_ZBUFFER)
        }
    }

    geo_process_master_list(node) {
        if (!this.gCurGraphNodeMasterList && node.children[0]) {
            this.gCurGraphNodeMasterList = node
            node.listHeads.fill(null)
            this.geo_process_node_and_siblings(node.children)
            this.geo_process_master_list_sub(node)
            this.gCurGraphNodeMasterList = null
        }
    }

    geo_process_ortho_projection(node) {
        if (node.children[0]) {
            const mtx = MathUtil.Mat4()
            const left = (this.gCurGraphNodeRoot.x - this.gCurGraphNodeRoot.width) / 2.0 * node.scale
            const right = (this.gCurGraphNodeRoot.x + this.gCurGraphNodeRoot.width) / 2.0 * node.scale
            const top = (this.gCurGraphNodeRoot.y - this.gCurGraphNodeRoot.height) / 2.0 * node.scale
            const bottom = (this.gCurGraphNodeRoot.y + this.gCurGraphNodeRoot.height) / 2.0 * node.scale

            MathUtil.guOrtho(mtx, left, right, bottom, top, -2.0, 2.0, 1.0)
            //Gbi.gSPPerspNormalize(Game.gDisplayList, 0xFFFF)
            Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_perspective(node) {
        const f = node.func
        if (f.func) {
            if (f.func != Camera.geo_camera_fov)
                throw "geo process perspective "
           f.func.call(Camera, GraphNode.GEO_CONTEXT_RENDER, node)
        }

        if (node.children[0]) {
            const aspect = canvas.width / canvas.height
            const mtx = MathUtil.Mat4()
            const perspNorm = {}

            MathUtil.guPerspective(mtx, perspNorm,
                node.fov, aspect, node.near, node.far, 1.0)

            //Gbi.gSPPerspNormalize(Game.gDisplayList, perspNorm.value)
            Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

            this.gCurGraphNodeCamFrustum = node
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamFrustum = null
        }
    }

    geo_process_camera(node) {
        const f = node.func
        if (f.func) {
            if (f.func != Camera.geo_camera_main)
                throw "geo process perspective "
           f.func.call(Camera, GraphNode.GEO_CONTEXT_RENDER, node)
        }

        const rollMtx = MathUtil.Mat4()
        const cameraTransform = MathUtil.Mat4()
        const mtx = MathUtil.Mat4()

        MathUtil.mtxf_rotate_xy(rollMtx, node.rollScreen)

        Gbi.gSPMatrix(Game.gDisplayList, rollMtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        MathUtil.mtxf_lookat(cameraTransform, node.pos, node.focus, node.roll)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], cameraTransform, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.children[0]) {
            this.gCurGraphNodeCamera = node
            node.matrixPtr = this.gMatStack[this.gMatStackIndex]
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamera = null
        }
        this.gMatStackIndex--
    }

    /**
     * Process a translation / rotation node. A transformation matrix based
     * on the node's translation and rotation is created and pushed on both
     * the float and fixed point matrix stacks.
     * For the rest it acts as a normal display list node.
     */
    geo_process_translation_rotation(node) {
        let mtxf = MathUtil.Mat4()

        MathUtil.mtxf_rotate_zxy_and_translate(mtxf, node.translation, node.rotation)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }
        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    /**
     * Process a translation node. A transformation matrix based on the node's
     * translation is created and pushed on both the float and fixed point matrix stacks.
     * For the rest it acts as a normal display list node.
     */
    geo_process_translation(node) {
        let mtxf = MathUtil.Mat4()

        MathUtil.mtxf_rotate_zxy_and_translate(mtxf, node.translation, GraphNode.gVec3sZero)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }
        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    /**
     * Process a rotation node. A transformation matrix based on the node's
     * rotation is created and pushed on both the float and fixed point matrix stacks.
     * For the rest it acts as a normal display list node.
     */
    geo_process_rotation(node) {
        let mtxf = MathUtil.Mat4()

        MathUtil.mtxf_rotate_zxy_and_translate(mtxf, [0, 0, 0], node.rotation)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }

        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    geo_process_background(node) {
        let list
        if (node.backgroundFunc) {
            list = node.backgroundFunc(GraphNode.GEO_CONTEXT_RENDER, node)
        }

        if (list) {
            this.geo_append_display_list(list, node.flags >> 8)
        } else if (this.gCurGraphNodeMasterList) {
            const gfx = []
            Gbi.gDPSetCycleType(gfx, Gbi.G_CYC_FILL)
            Gbi.gDPSetFillColor(gfx, node.background) 
            Gbi.gDPFillRectangle(gfx, 0, 0, canvas.width - 1, canvas.height - 1)
            Gbi.gDPSetCycleType(gfx, Gbi.G_CYC_1CYCLE)
            Gbi.gSPEndDisplayList(gfx)
            this.geo_append_display_list(gfx, 0)
        }
        this.geo_process_node_and_siblings(node.children)
    }

    geo_process_generated_list(node) {
        const f = node.func
        if (f.func) {
            const list = f.func.call(f.funcClass, GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
            if (list && list.length > 0) {
                this.geo_append_display_list(list, node.flags >> 8)
            }
        }
    }

    geo_process_scale(node) {
        const scaleVec = [ node.scale, node.scale, node.scale ]
        MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex], scaleVec)
        this.gMatStackIndex++

        if (node.displayList) {
            throw "more implementation needed in geo process scale"
        }

        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    read_next_anim_value() {
        const index = GraphNode.retrieve_animation_index(this.gCurrAnimFrame, this.gCurrAnimAttribute)
        const value = this.gCurAnimData[index]
        return value > 32767 ? value - 65536 : value
    }

    geo_process_animated_part(node) {
        const matrix = MathUtil.Mat4()
        const rotation = [ 0, 0, 0 ]
        const translation = [ ...node.translation ]

        if (this.gCurAnimType == Mario.ANIM_TYPE_TRANSLATION) {
            translation[0] += this.read_next_anim_value() + this.gCurAnimTranslationMultiplier
            translation[1] += this.read_next_anim_value() + this.gCurAnimTranslationMultiplier
            translation[2] += this.read_next_anim_value() * this.gCurAnimTranslationMultiplier
            this.gCurAnimType = Mario.ANIM_TYPE_ROTATION
        } else {
            if (this.gCurAnimType == Mario.ANIM_TYPE_LATERAL_TRANSLATION) {
                translation[0] += this.read_next_anim_value() + this.gCurAnimTranslationMultiplier
                this.gCurrAnimAttribute.indexToIndices += 2
                translation[2] += this.read_next_anim_value() + this.gCurAnimTranslationMultiplier
                this.gCurAnimType = Mario.ANIM_TYPE_ROTATION
            } else {
                if (this.gCurAnimType == Mario.ANIM_TYPE_VERTICAL_TRANSLATION) {
                    this.gCurrAnimAttribute.indexToIndices += 2
                    translation[1] += this.read_next_anim_value() + this.gCurAnimTranslationMultiplier
                    this.gCurrAnimAttribute.indexToIndices += 2
                    this.gCurAnimType = Mario.ANIM_TYPE_ROTATION
                } else if (this.gCurAnimType == Mario.ANIM_TYPE_NO_TRANSLATION) {
                    this.gCurrAnimAttribute.indexToIndices += 6
                    this.gCurAnimType = Mario.ANIM_TYPE_ROTATION
                } 
            }
        }

        if (this.gCurAnimType == Mario.ANIM_TYPE_ROTATION) {
            rotation[0] = this.read_next_anim_value()
            rotation[1] = this.read_next_anim_value()
            rotation[2] = this.read_next_anim_value()
        }

        MathUtil.mtxf_rotate_xyz_and_translate(matrix, translation, rotation)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], matrix, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        
        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }

        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    geo_set_animation_globals(node, hasAnimation) {
        const anim = node.curAnim

        if (hasAnimation) {
            node.animFrame = GraphNode.geo_update_animation_frame(node, node.animFrameAccelAssist)
        } else { throw "why are you here if you don't have an animation?" }
        node.animTimer = this.gAreaUpdateCounter
        if (anim.flags & Mario.ANIM_FLAG_HOR_TRANS) {
            this.gCurAnimType = Mario.ANIM_TYPE_VERTICAL_TRANSLATION
        } else if (anim.flags & Mario.ANIM_FLAG_VERT_TRANS) {
            this.gCurAnimType = Mario.ANIM_TYPE_LATERAL_TRANSLATION
        } else if (anim.flags & Mario.ANIM_FLAG_6) {
            this.gCurAnimType = Mario.ANIM_TYPE_NO_TRANSLATION
        } else {
            this.gCurAnimType = Mario.ANIM_TYPE_TRANSLATION
        }

        this.gCurrAnimFrame = node.animFrame
        this.gCurAnimEnabled = (anim.flags & Mario.ANIM_FLAG_5) == 0
        this.gCurrAnimAttribute = { indexToIndices: 0, indices: anim.indices }
        this.gCurAnimData = anim.values

        if (anim.unk02 == 0) {
            this.gCurAnimTranslationMultiplier = 1.0
        } else {
            this.gCurAnimTranslationMultiplier =  node.animYTrans / anim.unk02
        }

    }

    obj_is_in_view(node, matrix) {
        if (node.flags & GraphNode.GRAPH_RENDER_INVISIBLE) return false

        const geo = node.sharedChild
        const halfFov = (this.gCurGraphNodeCamFrustum.fov / 2.0 + 1.0) * 32768.0 / 180.0 + 0.5

        const hScreenEdge = -matrix[3][2] * Math.sin(halfFov / 0x8000 * Math.PI) / Math.cos(halfFov / 0x8000 * Math.PI)

        let cullingRadius
        if (geo != undefined && geo.type == GraphNode.GRAPH_NODE_TYPE_CULLING_RADIUS) {
            cullingRadius = geo.radius
        } else {
            cullingRadius = 300
        }

        // Don't render if the object is close to or behind the camera
        if (matrix[3][2] > -100.0 + cullingRadius) { return false }

        //! This makes the HOLP not update when the camera is far away, and it
        //  makes PU travel safe when the camera is locked on the main map.
        //  If Mario were rendered with a depth over 65536 it would cause overflow
        //  when converting the transformation matrix to a fixed point matrix.
        if (matrix[3][2] < -20000.0 - cullingRadius) { return false }

        // Check whether the object is horizontally in view
        if (matrix[3][0] > hScreenEdge + cullingRadius) { return false }
        if (matrix[3][0] < -hScreenEdge - cullingRadius) { return false }

        return true
    }

    geo_process_object(node) {
        const mtxf = MathUtil.Mat4()
        const object = node.object

        const hasAnimation = (object.gfx.flags & GraphNode.GRAPH_RENDER_HAS_ANIMATION) != 0

        if (object.gfx.areaIndex == this.gCurGraphNodeRoot.areaIndex) {

            if (object.gfx.throwMatrix) {
                MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], object.gfx.throwMatrix, this.gMatStack[this.gMatStackIndex])
            } else if (object.gfx.flags & GraphNode.GRAPH_RENDER_CYLBOARD) {
                MathUtil.mtxf_cylboard(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex], object.gfx.pos, this.gCurGraphNodeCamera.roll)
            } else if (object.gfx.flags & GraphNode.GRAPH_RENDER_BILLBOARD) {
                MathUtil.mtxf_billboard(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex], object.gfx.pos, this.gCurGraphNodeCamera.roll)
            } else {
                MathUtil.mtxf_rotate_zxy_and_translate(mtxf, object.gfx.pos, object.gfx.angle)
                MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
            }

            MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex + 1], object.gfx.scale)

            object.gfx.throwMatrix = this.gMatStack[++this.gMatStackIndex]
            object.gfx.cameraToObject = [ 
                this.gMatStack[this.gMatStackIndex][3][0],
                this.gMatStack[this.gMatStackIndex][3][1],
                this.gMatStack[this.gMatStackIndex][3][2]
            ]

            if (object.gfx.unk38.curAnim) {
                this.geo_set_animation_globals(object.gfx.unk38, hasAnimation)
            }

            if (this.obj_is_in_view(object.gfx, this.gMatStack[this.gMatStackIndex])) { 
                if (object.gfx.sharedChild) {
                    this.gCurGraphNodeObject = node
                    object.gfx.sharedChild.parent = object.gfx
                    this.geo_process_single_node(object.gfx.sharedChild)
                    object.gfx.sharedChild.parent = null
                    this.gCurGraphNodeObject = null
                }

                if (object.gfx.children[0]) {
                    throw "process object has children that need to be processed"
                }
            }

            this.gMatStackIndex--
            this.gCurAnimType = this.ANIM_TYPE_NONE
            object.gfx.throwMatrix = null
        }
    }

    geo_process_object_parent(node) {
        if (node.sharedChild) {
            node.sharedChild.parent = node  // temparaily assigining itself as parent
            this.geo_process_node_and_siblings(node.sharedChild.children)
            node.sharedChild.parent = null
        }

        if (node.children[0]) {
            throw "in practice object parent should not have real children"
            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_display_list(node) {
        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }
        this.geo_process_node_and_siblings(node.children)
    }

    geo_append_display_list(displayList, layer) {
        const gMatStackCopy = MathUtil.Mat4()
        MathUtil.mtxf_to_mtx(gMatStackCopy, this.gMatStack[this.gMatStackIndex])

        if (this.gCurGraphNodeMasterList) {
            const listNode = {
                transform: gMatStackCopy,
                displayList
            }

            if (this.gCurGraphNodeMasterList.listHeads[layer]) {
                this.gCurGraphNodeMasterList.listHeads[layer].push(listNode)
            } else {
                this.gCurGraphNodeMasterList.listHeads[layer] = [ listNode ]
            }  
        }
    }

    geo_process_level_of_detail(node) {
        const mtx = this.gMatStack[this.gMatStackIndex]
        const distanceFromCam = -mtx[3][2]

        if (node.minDistance <= distanceFromCam && distanceFromCam < node.maxDistance) {
            this.geo_process_node_and_siblings(node.children)
        }
    }

    /**
     * Process a billboard node. A transformation matrix is created that makes its
     * children face the camera, and it is pushed on the floating point and fixed
     * point matrix stacks.
     * For the rest it acts as a normal display list node.
     */
    geo_process_billboard(node) {
        this.gMatStackIndex++
        const translation = [...node.translation]
        MathUtil.mtxf_billboard(this.gMatStack[this.gMatStackIndex], this.gMatStack[this.gMatStackIndex - 1], translation, this.gCurGraphNodeCamera.roll)

        if (this.gCurGraphNodeHeldObject) {
            MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex], this.gMatStack[this.gMatStackIndex],
                             this.gCurGraphNodeHeldObject.object.gfx.scale)  // scale of the object being held, NOT the heldObject
        } else if (this.gCurGraphNodeObject) {
            MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex], this.gMatStack[this.gMatStackIndex], this.gCurGraphNodeObject.scale)
        }

        if (node.displayList) {
            this.geo_append_display_list(node.displayList, node.flags >> 8)
        }

        this.geo_process_node_and_siblings(node.children)
        this.gMatStackIndex--
    }

    geo_process_shadow(node) {
        let shadowPos, shadowScale

        if (this.gCurGraphNodeCamera && this.gCurGraphNodeObject) {
            if (this.gCurGraphNodeHeldObject) {
                shadowPos = []
                MathUtil.get_pos_from_transform_mtx(shadowPos, this.gMatStack[this.gMatStackIndex], this.gCurGraphNodeCamera.matrixPtr)
                shadowScale = node.shadowScale
            } else {
                shadowPos = [...this.gCurGraphNodeObject.pos]
                shadowScale = node.shadowScale * this.gCurGraphNodeObject.scale[0]
            }

            let objScale = 1.0

            if (this.gCurAnimEnabled) {
                if (this.gCurAnimType == this.ANIM_TYPE_TRANSLATION || this.gCurAnimType == this.ANIM_TYPE_LATERAL_TRANSLATION) {
                    const geo = node.children[0]
                    if (geo && geo.type == GraphNode.GRAPH_NODE_TYPE_SCALE) {
                        objScale = geo.scale
                    }
                    const animOffset = new Array(3)
                    animOffset[0] = this.read_next_anim_value() * this.gCurAnimTranslationMultiplier * objScale
                    animOffset[1] = 0.0
                    this.gCurrAnimAttribute.indexToIndices += 2
                    animOffset[2] = this.read_next_anim_value() * this.gCurAnimTranslationMultiplier * objScale
                    this.gCurrAnimAttribute.indexToIndices -= 6

                    const sinAng = Math.sin(this.gCurGraphNodeObject.angle[1] / 0x8000 * Math.PI)
                    const cosAng = Math.cos(this.gCurGraphNodeObject.angle[1] / 0x8000 * Math.PI)

                    shadowPos[0] += animOffset[0] * cosAng + animOffset[2] * sinAng
                    shadowPos[2] += -animOffset[0] * sinAng + animOffset[2] * cosAng

                }
            }

            const shadowList = create_shadow_below_xyz(shadowPos[0], shadowPos[1], shadowPos[2], shadowScale, node.shadowSolidity, node.shadowType)

            if (shadowList) {
                const mtxf = MathUtil.Mat4()
                this.gMatStackIndex++
                MathUtil.mtxf_translate(mtxf, shadowPos)
                MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex], mtxf, this.gCurGraphNodeCamera.matrixPtr)

                if (gShadowAboveWaterOrLava) {
                    this.geo_append_display_list(shadowList, 4);
                } else if (gMarioOnIceOrCarpet) {
                    this.geo_append_display_list(shadowList, 5);
                } else {
                    this.geo_append_display_list(shadowList, 6)
                }
                this.gMatStackIndex--
            }
        }

        this.geo_process_node_and_siblings(node.children)
    }

    /**
     * Process a held object node.
     */
    geo_process_held_object(node) {
        const mat = MathUtil.Mat4()
        const translation = [0, 0, 0]

        const f = node.func
        if (f.func) {
            f.func.call(f.funcClass, GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
        }

        const object = node.object
        if (object && object.gfx.sharedChild) {
            let /*s32*/ hasAnimation = (object.gfx.flags & GraphNode.GRAPH_RENDER_HAS_ANIMATION) != 0

            translation[0] = node.translation[0] / 4.0
            translation[1] = node.translation[1] / 4.0
            translation[2] = node.translation[2] / 4.0

            MathUtil.mtxf_translate(mat, translation)
            MathUtil.mtxf_copy(this.gMatStack[this.gMatStackIndex + 1], this.gCurGraphNodeObject.throwMatrix)
            this.gMatStack[this.gMatStackIndex + 1][3][0] = this.gMatStack[this.gMatStackIndex][3][0]
            this.gMatStack[this.gMatStackIndex + 1][3][1] = this.gMatStack[this.gMatStackIndex][3][1]
            this.gMatStack[this.gMatStackIndex + 1][3][2] = this.gMatStack[this.gMatStackIndex][3][2]
            MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mat, this.gMatStack[this.gMatStackIndex + 1])
            MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex + 1],
                             object.gfx.scale)
            if (f.func) {
                f.func.call(f.funcClass, GraphNode.GEO_CONTEXT_HELD_OBJ, node, this.gMatStack[this.gMatStackIndex + 1])
            }
            this.gMatStackIndex++

            const gGeoTempState = {}
            gGeoTempState.type = this.gCurAnimType
            gGeoTempState.enabled = this.gCurAnimEnabled
            gGeoTempState.frame = this.gCurrAnimFrame
            gGeoTempState.translationMultiplier = this.gCurAnimTranslationMultiplier
            gGeoTempState.attribute = this.gCurrAnimAttribute
            gGeoTempState.data = this.gCurAnimData

            this.gCurAnimType = 0
            this.gCurGraphNodeHeldObject = node
            if (object.gfx.unk38.curAnim) {
                this.geo_set_animation_globals(object.gfx.unk38, hasAnimation)
            }

            this.geo_process_single_node(object.gfx.sharedChild)

            this.gCurGraphNodeHeldObject = null
            this.gCurAnimType = gGeoTempState.type
            this.gCurAnimEnabled = gGeoTempState.enabled
            this.gCurrAnimFrame = gGeoTempState.frame
            this.gCurAnimTranslationMultiplier = gGeoTempState.translationMultiplier
            this.gCurrAnimAttribute = gGeoTempState.attribute
            this.gCurAnimData = gGeoTempState.data
            this.gMatStackIndex--
        }

        this.geo_process_node_and_siblings(node.children)
    }


    geo_process_switch_case(node) {
        const f = node.func
        if (f.func) {
            f.func.call(f.funcClass, GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
        }

        if (node.children[node.selectedCase]) {
            this.geo_process_single_node(node.children[node.selectedCase])
        }
    }

    geo_process_single_node(node) {
        switch (node.type) {

            case GraphNode.GRAPH_NODE_TYPE_ANIMATED_PART:           this.geo_process_animated_part(node);           break
            case GraphNode.GRAPH_NODE_TYPE_BACKGROUND:              this.geo_process_background(node);              break
            case GraphNode.GRAPH_NODE_TYPE_BILLBOARD:               this.geo_process_billboard(node);               break
            case GraphNode.GRAPH_NODE_TYPE_CAMERA:                  this.geo_process_camera(node);                  break
            case GraphNode.GRAPH_NODE_TYPE_DISPLAY_LIST:            this.geo_process_display_list(node);            break
            case GraphNode.GRAPH_NODE_TYPE_GENERATED_LIST:          this.geo_process_generated_list(node);          break
            case GraphNode.GRAPH_NODE_TYPE_HELD_OBJ:                this.geo_process_held_object(node);             break
            case GraphNode.GRAPH_NODE_TYPE_LEVEL_OF_DETAIL:         this.geo_process_level_of_detail(node);         break
            case GraphNode.GRAPH_NODE_TYPE_MASTER_LIST:             this.geo_process_master_list(node);             break
            case GraphNode.GRAPH_NODE_TYPE_OBJECT:                  this.geo_process_object(node);                  break
            case GraphNode.GRAPH_NODE_TYPE_OBJECT_PARENT:           this.geo_process_object_parent(node);           break
            case GraphNode.GRAPH_NODE_TYPE_ORTHO_PROJECTION:        this.geo_process_ortho_projection(node);        break
            case GraphNode.GRAPH_NODE_TYPE_PERSPECTIVE:             this.geo_process_perspective(node);             break
            case GraphNode.GRAPH_NODE_TYPE_ROTATION:                this.geo_process_rotation(node);                break
            case GraphNode.GRAPH_NODE_TYPE_SCALE:                   this.geo_process_scale(node);                   break
            case GraphNode.GRAPH_NODE_TYPE_SHADOW:                  this.geo_process_shadow(node);                  break
            case GraphNode.GRAPH_NODE_TYPE_SWITCH_CASE:             this.geo_process_switch_case(node);             break
            case GraphNode.GRAPH_NODE_TYPE_TRANSLATION:             this.geo_process_translation(node);             break
            case GraphNode.GRAPH_NODE_TYPE_TRANSLATION_ROTATION:    this.geo_process_translation_rotation(node);    break

            default:
                /// remove this check once all types have been added
                if (node.type != GraphNode.GRAPH_NODE_TYPE_CULLING_RADIUS && node.type != GraphNode.GRAPH_NODE_TYPE_START) {
                    console.log(node)
                    throw "unimplemented type in geo renderer"
                }
                this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_node_and_siblings(children) {
        for (const child of children) {
            if (!(child.flags & GraphNode.GRAPH_RENDER_ACTIVE)) {
                if (child.type == GraphNode.GRAPH_NODE_TYPE_OBJECT) {
                    child.throwMatrix = null
                }
                continue
            }
            this.geo_process_single_node(child)
        }
    }

    geo_process_root(root, b, c, clearColor) {
        //console.log("processing root node to render")
        if (root.flags & GraphNode.GRAPH_RENDER_ACTIVE) {

            this.gMatStackIndex = 0
            this.gCurAnimType = 0
            // vec3s_set(viewport->vp.vtrans, node->x * 4, node->y * 4, 511);
            // vec3s_set(viewport->vp.vscale, node->width * 4, node->height * 4, 511);
            if (b) {
                // clear_frame_buffer(clearColor)
                // make_viewport_clip_rect(b)
                // *viewport = *b
            } else if (c) {
                // clear_frame_buffer(clearColor)
                // make_viewport_clip_rect(c)
            }

            MathUtil.mtxf_identity(this.gMatStack[this.gMatStackIndex])

            // gSPViewport(gDisplayListHead++, VIRTUAL_TO_PHYSICAL(viewport));
            // gSPMatrix(gDisplayListHead++, VIRTUAL_TO_PHYSICAL(gMatStackFixed[gMatStackIndex]),
            //           G_MTX_MODELVIEW | G_MTX_LOAD | G_MTX_NOPUSH);

            this.gCurGraphNodeRoot = root
            this.geo_process_node_and_siblings(root.children)
            this.gCurGraphNodeRoot = null
        }
    }
}

export const GeoRendererInstance = new GeoRenderer()
gLinker.GeoRenderer = GeoRendererInstance
