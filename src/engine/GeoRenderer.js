import * as GraphNode from "./graph_node"
import * as MathUtil from "./math_util"
import { GameInstance as Game } from "../game/Game"
import * as Gbi from "../include/gbi"

const canvas = document.querySelector('#gameCanvas')

class GeoRenderer {

    constructor() {

        this.gMatStack = new Array(32).fill(0).map(() => new Array(4).fill(0).map(() => new Array(4).fill(0)))
        this.gMatStackIndex = 0
    }

    geo_process_master_list_sub(node) {
        const enableZBuffer = (node.flags & GraphNode.GRAPH_RENDER_Z_BUFFER) != 0

        if (enableZBuffer) {
            Gbi.gSPSetGeometryMode(Game.gDisplayList, Gbi.G_ZBUFFER)
        }

        for (let i = 0; i < GraphNode.GFX_NUM_MASTER_LISTS; i++) {
            if (node.wrapper.listHeads[i]) {
                for (const displayNode of node.wrapper.listHeads[i]) {
                    Gbi.gSPMatrix(Game.gDisplayList, displayNode.transform, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
                    Gbi.gSPDisplayList(Game.gDisplayList, displayNode.displayList)

                }
            }

        }

        if (enableZBuffer) {
            Gbi.gsSPClearGeometryMode(Game.gDisplayList, Gbi.G_ZBUFFER)
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
        //if (node.wrapper.func) {
        //    node.wrapper.func()
        //}

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

        //if (node.wrapper.func) {
        //    node.wrapper.func()
        //}

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
        if (node.wrapper.func) {
            list = [] //node.wrapper.func()
        }

        if (list.length > 0) {
            this.geo_append_display_list(list, node.flags >> 8)
        } else if (this.gCurGraphNodeMasterList) {
            const gfx = []
            ////..... add backfround fill gfx commands
            Gbi.gDPSetFillColor(gfx, node.wrapper.background)
            Gbi.gDPFillRectangle(gfx, 0, 0, canvas.width - 1, canvas.height - 1)
            Gbi.gSPEndDisplayList(gfx)

            this.geo_append_display_list(gfx, 0)
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }

    }

    geo_process_generated_list(node) {
        if (node.wrapper.func) {
            console.log("processing function from generated_list\n")

            const list = node.wrapper.func(GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
            if (list.length > 0) {
                this.geo_append_display_list(list, node.flags >> 8)
            }
        }
        
    }

    geo_append_display_list(displayList, layer) {

        if (this.gCurGraphNodeMasterList) {
            const listNode = {
                transform: this.gMatStack[this.gMatStackIndex],
                displayList
            }

            if (this.gCurGraphNodeMasterList.wrapper.listHeads[layer]) {
                this.gCurGraphNodeMasterList.wrapper.listHeads[layer].push(listNode)
            } else {
                this.gCurGraphNodeMasterList.wrapper.listHeads[layer] = [ listNode ]
            }
            
            
        }

    }

    geo_process_node_and_siblings(children) {

        for (const child of children) {
            switch (child.type) {

                case GraphNode.GRAPH_NODE_TYPE_ORTHO_PROJECTION:
                    this.geo_process_ortho_projection(child); break

                //case GraphNode.GRAPH_NODE_TYPE_PERSPECTIVE:
                //    this.geo_process_perspective(child); break

                case GraphNode.GRAPH_NODE_TYPE_MASTER_LIST:
                    this.geo_process_master_list(child); break

                //case GraphNode.GRAPH_NODE_TYPE_CAMERA:
                //    this.geo_process_camera(child); break

                case GraphNode.GRAPH_NODE_TYPE_BACKGROUND:
                    this.geo_process_background(child); break

                //case GraphNode.GRAPH_NODE_TYPE_GENERATED_LIST:
                //    this.geo_process_generated_list(child); break

                default: break

            }
        }

    }

    geo_process_root(root, b, c, clearColor) {
        console.log("processing root node to render")
        if (root.node.flags & GraphNode.GRAPH_RENDER_ACTIVE) {

            MathUtil.mtxf_identity(this.gMatStack[this.gMatStackIndex])

            this.gCurGraphNodeRoot = root.node

            if (root.node.children[0]) { ///atleast one child
                //console.log("processing children")
                this.geo_process_node_and_siblings(root.node.children)
            }

            this.gCurGraphNodeRoot = null
        }
    }
}

export const GeoRendererInstance = new GeoRenderer()
