import * as GraphNode from "./graph_node"
import * as MathUtil from "./math_util"
import { GameInstance as Game } from "../game/Game"
import * as Gbi from "../include/gbi"
import { CameraInstance as Camera } from "../game/Camera"
import * as Mario from "../game/Mario"
import { create_shadow_below_xyz } from "../game/Shadow"
import { networkData } from "../socket"
import { MarioMiscInstance as MarioMisc } from "../game/MarioMisc"
import { cos } from "mathjs"

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

        this.gMatStack = new Array(32).fill(0).map(() => new Array(4).fill(0).map(() => new Array(4).fill(0)))
        this.gMatStackIndex = 0
        this.gAreaUpdateCounter = 0

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
            if (node.wrapper.listHeads[i]) {
                if (modeList[i] == null) throw "need to add render mode - i: " + i
                Gbi.gDPSetRenderMode(Game.gDisplayList, modeList[i])
                for (const displayNode of node.wrapper.listHeads[i]) {
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
            node.wrapper.listHeads.fill(null)
            this.geo_process_node_and_siblings(node.children)
            this.geo_process_master_list_sub(node)
            this.gCurGraphNodeMasterList = null
        }

    }

    geo_process_ortho_projection(node) {
        if (node.children[0]) {
            const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
            const left = (this.gCurGraphNodeRoot.wrapper.x - this.gCurGraphNodeRoot.wrapper.width) / 2.0 * node.wrapper.scale
            const right = (this.gCurGraphNodeRoot.wrapper.x + this.gCurGraphNodeRoot.wrapper.width) / 2.0 * node.wrapper.scale
            const top = (this.gCurGraphNodeRoot.wrapper.y - this.gCurGraphNodeRoot.wrapper.height) / 2.0 * node.wrapper.scale
            const bottom = (this.gCurGraphNodeRoot.wrapper.y + this.gCurGraphNodeRoot.wrapper.height) / 2.0 * node.wrapper.scale

            MathUtil.guOrtho(mtx, left, right, bottom, top, -2.0, 2.0, 1.0)
            //Gbi.gSPPerspNormalize(Game.gDisplayList, 0xFFFF)
            Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_perspective(node) {
                
        if (node.wrapper.fnNode.func) {
            if (node.wrapper.fnNode.func != Camera.geo_camera_fov)
                throw "geo process perspective "
           node.wrapper.fnNode.func.call(Camera, GraphNode.GEO_CONTEXT_RENDER, node.wrapper)
        }

        if (node.children[0]) {
            const aspect = canvas.width / canvas.height
            const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
            const perspNorm = {}

            MathUtil.guPerspective(mtx, perspNorm,
                node.wrapper.fov, aspect, node.wrapper.near, node.wrapper.far, 1.0)

            //Gbi.gSPPerspNormalize(Game.gDisplayList, perspNorm.value)
            Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

            this.gCurGraphNodeCamFrustum = node
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamFrustum = null
        }
    }

    geo_process_camera(node) {

        if (node.wrapper.fnNode.func) {
            if (node.wrapper.fnNode.func != Camera.geo_camera_main)
                throw "geo process perspective "
           node.wrapper.fnNode.func.call(Camera, GraphNode.GEO_CONTEXT_RENDER, node.wrapper)
        }

        const rollMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const cameraTransform = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.mtxf_rotate_xy(rollMtx, node.wrapper.rollScreen)

        Gbi.gSPMatrix(Game.gDisplayList, rollMtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        MathUtil.mtxf_lookat(cameraTransform, node.wrapper.pos, node.wrapper.focus, node.wrapper.roll)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], cameraTransform, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.children[0]) {
            this.gCurGraphNodeCamera = node
            node.wrapper.matrixPtr = this.gMatStack[this.gMatStackIndex]
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamera = null
        }
        this.gMatStackIndex--

    }

    geo_process_background(node) {

        let list = []
        if (node.wrapper.backgroundFunc) {
            list = node.wrapper.backgroundFunc(GraphNode.GEO_CONTEXT_RENDER, node.wrapper)
        }

        if (list.length > 0) {
            this.geo_append_display_list(list, node.flags >> 8)
        } else if (this.gCurGraphNodeMasterList) {
            const gfx = []
            Gbi.gDPSetCycleType(gfx, Gbi.G_CYC_FILL)
            Gbi.gDPSetFillColor(gfx, node.wrapper.background) 
            Gbi.gDPFillRectangle(gfx, 0, 0, canvas.width - 1, canvas.height - 1)
            Gbi.gDPSetCycleType(gfx, Gbi.G_CYC_1CYCLE)
            Gbi.gSPEndDisplayList(gfx)

            this.geo_append_display_list(gfx, 0)
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }

    }

    geo_process_generated_list(node) {
        if (node.wrapper.fnNode.func) {
            //console.log("processing function from generated_list")

            const fnNode = node.wrapper.fnNode

            const list = fnNode.func.call(fnNode.funcClass, GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
            if (list.length > 0) {
                this.geo_append_display_list(list, node.flags >> 8)
            }
        }
        
    }

    geo_process_scale(node) {

        const scaleVec = [ node.wrapper.scale, node.wrapper.scale, node.wrapper.scale ]
        MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex], scaleVec)
        this.gMatStackIndex++

        if (node.wrapper.displayList) {
            throw "more implementation needed in geo process scale"
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }

        this.gMatStackIndex--

    }

    geo_process_rotation(node) {
        const mtxf = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.mtxf_rotate_zxy_and_translate(mtxf, [0, 0, 0], node.wrapper.rotation)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.wrapper.displayList) {
            this.geo_append_display_list(node.wrapper.displayList, node.flags >> 8)
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }
        this.gMatStackIndex--
    }

    read_next_anim_value() {
        const index = GraphNode.retrieve_animation_index(this.gCurrAnimFrame, this.gCurrAnimAttribute)
        const value = this.gCurAnimData[index]
        return value > 32767 ? value - 65536 : value
    }

    geo_process_animated_part(node) {

        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const rotation = [ 0, 0, 0 ]
        const translation = [ ...node.wrapper.translation ]

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
        
        if (node.wrapper.displayList) {
            this.geo_append_display_list(node.wrapper.displayList, node.flags >> 8)
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }

        this.gMatStackIndex--

    }

    geo_set_animation_globals(node, hasAnimation) {

        const anim = node.curAnim

        if (anim == 0) throw "node.curAnim is 0 should be object"

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
        if (node.node.flags & GraphNode.GRAPH_RENDER_INVISIBLE) return false

        const geo = node.sharedChild
        const halfFov = (this.gCurGraphNodeCamFrustum.wrapper.fov / 2.0 + 1.0) * 32768.0 / 180.0 + 0.5

        const hScreenEdge = -matrix[3][2] * Math.sin(halfFov / 0x8000 * Math.PI) / Math.cos(halfFov / 0x8000 * Math.PI)

        let cullingRadius
        if (geo != undefined && geo.type == GraphNode.GRAPH_NODE_TYPE_CULLING_RADIUS) {
            cullingRadius = geo.wrapper.radius
        } else {
            cullingRadius = 300
        }

        ////Remote mario max draw distance
        if (node.wrapperObjectNode.wrapperObject.remoteMario) {
            if (matrix[3][2] < -10000) return false
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

        const mtxf = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const object = node.wrapper.wrapperObjectNode.wrapperObject

        const hasAnimation = (object.header.gfx.node.flags & GraphNode.GRAPH_RENDER_HAS_ANIMATION) != 0

        if (object.header.gfx.unk18 == this.gCurGraphNodeRoot.wrapper.areaIndex) {

            if (object.header.gfx.throwMatrix || object.header.gfx.node.flags & GraphNode.GRAPH_RENDER_BILLBOARD) 
                throw "more implementation needed in geo process object"

            if (object.header.gfx.node.flags & GraphNode.GRAPH_RENDER_CYLBOARD) {
                MathUtil.mtxf_cylboard(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex], object.header.gfx.pos, this.gCurGraphNodeCamera.wrapper.roll)
            } else {
                MathUtil.mtxf_rotate_zxy_and_translate(mtxf, object.header.gfx.pos, object.header.gfx.angle)
                MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])
            }

            MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex + 1], object.header.gfx.scale)

            object.header.gfx.throwMatrix = this.gMatStack[++this.gMatStackIndex]
            object.header.gfx.cameraToObject = [ 
                this.gMatStack[this.gMatStackIndex][3][0],
                this.gMatStack[this.gMatStackIndex][3][1],
                this.gMatStack[this.gMatStackIndex][3][2]
            ]

            if (object.header.gfx.unk38.curAnim) {
                this.geo_set_animation_globals(object.header.gfx.unk38, hasAnimation)
            }

            if (this.obj_is_in_view(object.header.gfx, this.gMatStack[this.gMatStackIndex])) { 
                if (object.header.gfx.sharedChild) {

                    if (object.localMario) {
                        MarioMisc.gBodyState = object.marioState.marioBodyState
                        MarioMisc.customCapState = window.myMario.skinData.customCapState
                        //// sending my own custom gfx opcode to set skin id
                        this.geo_append_display_list([Gbi.gsSetPlayerData(networkData.myChannelID)], 1) 
                    }

                    this.gCurGraphNodeObject = node.wrapper
                    object.header.gfx.sharedChild.parent = object.header.gfx.node
                    this.geo_process_single_node(object.header.gfx.sharedChild)
                    object.header.gfx.sharedChild.parent = null
                    this.gCurGraphNodeObject = null
                }

                if (object.header.gfx.node.children[0]) {
                    throw "process object has children that need to be processed"
                }

            }

            this.gMatStackIndex--
            this.gCurAnimType = this.ANIM_TYPE_NONE
            object.header.gfx.throwMatrix = null

        }

        if (object.localMario) {  /// original Mario
            const saveMatStackIndex = this.gMatStackIndex
            const remotePlayerList = Object.values(networkData.remotePlayers)
            for (let i = 0; i < remotePlayerList.length; i++) {
                const data = remotePlayerList[i]
                if (data.skipRender > 0) data.skipRender--
                if (data.crashCount > 0 || data.skipRender > 0) return

                if (data.marioState.marioObj.header.gfx.unk38.curAnim == 0) {
                    console.log("remote mario not initialized yet or not initialized properly, skipping rendering -- playerName: " + data.marioState.playerName)
                    continue
                }

                try {
                    this.geo_process_extra_mario(data.marioState.marioObj)
                } catch (error) {
                    console.log("unknown error in 'geo_process_extra_mario' - please report this issue to sm64js devs -- playerName: " + data.marioState.playerName)
                    console.log(error)
                    data.skipRender = 30
                }
                this.gMatStackIndex = saveMatStackIndex /// force every iteration to leave gMatStackIndex unchanged
            }
        }

    }


    geo_process_extra_mario(object) {

        const { pos, angle } = object.header.gfx

        const mtxf = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.mtxf_rotate_zxy_and_translate(mtxf, pos, angle)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], mtxf, this.gMatStack[this.gMatStackIndex])

        MathUtil.mtxf_scale_vec3f(this.gMatStack[this.gMatStackIndex + 1], this.gMatStack[this.gMatStackIndex + 1], [1, 1, 1])

        this.gMatStackIndex++

        try {
            this.geo_set_animation_globals(object.header.gfx.unk38, true)
        } catch (error) {
            console.log("known error in animation globals where curAnim is set to 0")
            console.log(error)
            this.gMatStackIndex--
            return
        }

        if (this.obj_is_in_view(object.header.gfx, this.gMatStack[this.gMatStackIndex])) {

            //// sending my own custom gfx opcode to set skin id and playerName
            const remote_channel_id = object.marioState.channel_id
            this.geo_append_display_list([Gbi.gsSetPlayerData(remote_channel_id)], 1)

            this.gCurGraphNodeObject = object.header.gfx
            MarioMisc.gBodyState = object.marioState.marioBodyState
            MarioMisc.customCapState = networkData.remotePlayers[remote_channel_id].skinData.customCapState
            this.geo_process_single_node(object.header.gfx.sharedChild)
            this.gCurGraphNodeObject = null
        }

        this.gMatStackIndex--
        this.gCurAnimType = this.ANIM_TYPE_NONE

    }

    geo_process_object_parent(node) {

        if (node.wrapper.sharedChild) {

            node.wrapper.sharedChild.parent = node //temparaily assigining itself as parent
            if (node.wrapper.sharedChild.children[0]) {

                this.geo_process_node_and_siblings(node.wrapper.sharedChild.children)

            }
            else throw "objectParent sharedChild has no children"
            node.wrapper.sharedChild.parent = null
        }

        if (node.children[0]) {
            throw "in practice object parent should not have real children"
            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_display_list(node) {
        if (node.wrapper.displayList) {
            this.geo_append_display_list(node.wrapper.displayList, node.flags >> 8)
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_append_display_list(displayList, layer) {

        const gMatStackCopy = new Array(4).fill(0).map(() => new Array(4).fill(0))
        MathUtil.mtxf_to_mtx(gMatStackCopy, this.gMatStack[this.gMatStackIndex])

        if (this.gCurGraphNodeMasterList) {
            const listNode = {
                transform: gMatStackCopy,
                displayList
            }

            if (this.gCurGraphNodeMasterList.wrapper.listHeads[layer]) {
                this.gCurGraphNodeMasterList.wrapper.listHeads[layer].push(listNode)
            } else {
                this.gCurGraphNodeMasterList.wrapper.listHeads[layer] = [ listNode ]
            }
            
        }

    }

    geo_process_level_of_detail(node) {
        const mtx = this.gMatStack[this.gMatStackIndex]
        const distanceFromCam = -mtx[3][2]

        if (node.wrapper.minDistance <= distanceFromCam && distanceFromCam < node.wrapper.maxDistance) {
            if (node.children[0]) {
                this.geo_process_node_and_siblings(node.children)
            }
        }
    }

    geo_process_shadow(node) {

        let shadowPos, shadowScale

        if (this.gCurGraphNodeCamera && this.gCurGraphNodeObject) {

            if (this.gCurGraphNodeHeldObject) {
                throw "shadow for held objects"
            } else {
                shadowPos = [...this.gCurGraphNodeObject.pos]
                shadowScale = node.wrapper.shadowScale * this.gCurGraphNodeObject.scale[0]
            }

            let objScale = 1.0

            if (this.gCurAnimEnabled) {
                if (this.gCurAnimType == this.ANIM_TYPE_TRANSLATION || this.gCurAnimType == this.ANIM_TYPE_LATERAL_TRANSLATION) {
                    const geo = node.children[0]
                    if (geo && geo.type == GraphNode.GRAPH_NODE_TYPE_SCALE) {
                        objScale = geo.wrapper.scale
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
            const shadowList = create_shadow_below_xyz(shadowPos[0], shadowPos[1], shadowPos[2], shadowScale, node.wrapper.shadowSolidity, node.wrapper.shadowType)

            if (shadowList) {
                const mtxf = new Array(4).fill(0).map(() => new Array(4).fill(0))
                this.gMatStackIndex++
                MathUtil.mtxf_translate(mtxf, shadowPos)
                MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex], mtxf, this.gCurGraphNodeCamera.wrapper.matrixPtr)
                this.geo_append_display_list(shadowList, 6)
                this.gMatStackIndex--
            }
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }
    }

    geo_process_switch_case(node) {

        const fnNode = node.wrapper.fnNode

        if (fnNode.func) {
           fnNode.func.call(fnNode.funcClass, GraphNode.GEO_CONTEXT_RENDER, node.wrapper, this.gMatStack[this.gMatStackIndex])
        }

        this.geo_process_single_node(node.children[node.wrapper.selectedCase])

    }

    geo_process_single_node(node) {

        switch (node.type) {

            case GraphNode.GRAPH_NODE_TYPE_ORTHO_PROJECTION:
                this.geo_process_ortho_projection(node); break

            case GraphNode.GRAPH_NODE_TYPE_PERSPECTIVE:
                this.geo_process_perspective(node); break

            case GraphNode.GRAPH_NODE_TYPE_MASTER_LIST:
                this.geo_process_master_list(node); break

            case GraphNode.GRAPH_NODE_TYPE_CAMERA:
                this.geo_process_camera(node); break

            case GraphNode.GRAPH_NODE_TYPE_BACKGROUND:
                this.geo_process_background(node); break

            case GraphNode.GRAPH_NODE_TYPE_GENERATED_LIST:
                this.geo_process_generated_list(node); break

            case GraphNode.GRAPH_NODE_TYPE_DISPLAY_LIST:
                this.geo_process_display_list(node); break

            case GraphNode.GRAPH_NODE_TYPE_OBJECT_PARENT:
                this.geo_process_object_parent(node); break

            case GraphNode.GRAPH_NODE_TYPE_OBJECT:
                this.geo_process_object(node); break

            case GraphNode.GRAPH_NODE_TYPE_SCALE:
                this.geo_process_scale(node); break

            case GraphNode.GRAPH_NODE_TYPE_ANIMATED_PART:
                this.geo_process_animated_part(node); break

            case GraphNode.GRAPH_NODE_TYPE_ROTATION:
                this.geo_process_rotation(node); break

            case GraphNode.GRAPH_NODE_TYPE_SWITCH_CASE:
                this.geo_process_switch_case(node); break

            case GraphNode.GRAPH_NODE_TYPE_SHADOW:
                this.geo_process_shadow(node); break

            case GraphNode.GRAPH_NODE_TYPE_LEVEL_OF_DETAIL:
                this.geo_process_level_of_detail(node); break

            default:
                /// remove this check once all types have been added
                if (node.type != GraphNode.GRAPH_NODE_TYPE_CULLING_RADIUS && node.type != GraphNode.GRAPH_NODE_TYPE_START) throw "unimplemented type in geo renderer "
                if (node.children[0]) {
                    this.geo_process_node_and_siblings(node.children)
                }
        }
    }

    geo_process_node_and_siblings(children) {

        for (const child of children) {

            if (!(child.flags & GraphNode.GRAPH_RENDER_ACTIVE)) {
                if (child.type == GraphNode.GRAPH_NODE_TYPE_OBJECT) {
                    child.wrapper.throwMatrix = null
                }
                continue
            }
            this.geo_process_single_node(child)

        }

    }

    geo_process_root(root, b, c, clearColor) {
        //console.log("processing geo root node")
        if (root.node.flags & GraphNode.GRAPH_RENDER_ACTIVE) {

            MathUtil.mtxf_identity(this.gMatStack[this.gMatStackIndex])

            this.gCurGraphNodeRoot = root.node

            if (root.node.children[0]) { ///atleast one child
                this.geo_process_node_and_siblings(root.node.children)
            }

            this.gCurGraphNodeRoot = null
        }
        //console.log("end geo root node")
    }
}

export const GeoRendererInstance = new GeoRenderer()
